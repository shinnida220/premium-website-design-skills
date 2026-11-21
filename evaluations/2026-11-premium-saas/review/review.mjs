import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:4173";
const output = process.env.OUTPUT_DIR ?? "review-results";
const condition = process.env.CONDITION ?? "unknown";
const routes = [
  { name: "home", path: "/" },
  { name: "pricing", path: "/pricing.html" },
  { name: "product", path: "/product.html" }
];
const viewports = [
  { name: "360x800", width: 360, height: 800 },
  { name: "390x844", width: 390, height: 844 },
  { name: "768x1024", width: 768, height: 1024 },
  { name: "1366x768", width: 1366, height: 768 },
  { name: "1440x900", width: 1440, height: 900 }
];

await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = {
  condition,
  baseUrl,
  generatedAt: new Date().toISOString(),
  routes: [],
  hardGates: {
    allRoutesLoad: true,
    noPageErrors: true,
    noHorizontalOverflow: true,
    noCriticalOrSeriousAxeViolations: true
  }
};

try {
  for (const route of routes) {
    const routeResult = { ...route, viewports: [] };
    for (const viewport of viewports) {
      const page = await browser.newPage({
        viewport: { width: viewport.width, height: viewport.height },
        deviceScaleFactor: 1
      });
      const pageErrors = [];
      const consoleErrors = [];
      page.on("pageerror", error => pageErrors.push(error.message));
      page.on("console", message => {
        if (message.type() === "error") consoleErrors.push(message.text());
      });

      const response = await page.goto(new URL(route.path, baseUrl).href, { waitUntil: "networkidle" });
      const status = response?.status() ?? 0;
      const metrics = await page.evaluate(() => ({
        title: document.title,
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: window.innerWidth,
        documentHeight: document.documentElement.scrollHeight,
        h1Count: document.querySelectorAll("h1").length,
        links: [...document.querySelectorAll("a[href]")].map(a => ({
          text: (a.innerText || a.getAttribute("aria-label") || "").trim(),
          href: a.getAttribute("href")
        }))
      }));
      const overflow = metrics.documentWidth > metrics.viewportWidth;
      const axe = await new AxeBuilder({ page }).withTags([
        "wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"
      ]).analyze();

      const screenshotPath = join(output, `${route.name}-${viewport.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true, animations: "disabled" });

      const item = {
        viewport,
        status,
        metrics,
        overflow,
        pageErrors,
        consoleErrors,
        axe: {
          violationCount: axe.violations.length,
          violations: axe.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            help: v.help,
            helpUrl: v.helpUrl,
            nodes: v.nodes.slice(0, 20).map(n => ({
              target: n.target,
              summary: n.failureSummary
            }))
          }))
        },
        screenshot: screenshotPath
      };
      routeResult.viewports.push(item);

      if (status < 200 || status >= 400) results.hardGates.allRoutesLoad = false;
      if (pageErrors.length || consoleErrors.length) results.hardGates.noPageErrors = false;
      if (overflow) results.hardGates.noHorizontalOverflow = false;
      if (axe.violations.some(v => v.impact === "critical" || v.impact === "serious")) {
        results.hardGates.noCriticalOrSeriousAxeViolations = false;
      }
      await page.close();
    }
    results.routes.push(routeResult);
  }
} finally {
  await browser.close();
}

results.hardGates.pass = Object.values(results.hardGates).every(value => value === true);
await writeFile(join(output, "review-results.json"), JSON.stringify(results, null, 2));

const lines = [
  `# Independent review — ${condition}`,
  "",
  `Generated: ${results.generatedAt}`,
  "",
  "## Automated hard-gate observations",
  "",
  ...Object.entries(results.hardGates).map(([key, value]) => `- ${key}: ${value}`),
  "",
  "## Route / viewport results",
  "",
  "| Route | Viewport | HTTP | Overflow | Page errors | Console errors | Axe violations |",
  "|---|---:|---:|---|---:|---:|---:|"
];
for (const route of results.routes) {
  for (const item of route.viewports) {
    lines.push(`| ${route.name} | ${item.viewport.name} | ${item.status} | ${item.overflow ? "Yes" : "No"} | ${item.pageErrors.length} | ${item.consoleErrors.length} | ${item.axe.violationCount} |`);
  }
}
lines.push("", "> Automated findings are evidence, not a final human score. Axe findings require triage; automated checks cannot establish visual quality or full keyboard usability.", "");
await writeFile(join(output, "review-summary.md"), lines.join("\n"));
console.log(lines.join("\n"));
if (!results.hardGates.pass) process.exitCode = 1;
