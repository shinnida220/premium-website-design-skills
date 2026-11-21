import { access, readdir, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
let checkedSkills = 0;

async function readRequired(path, label) {
  try {
    return await readFile(join(root, path), "utf8");
  } catch {
    errors.push(`${label}: missing or unreadable (${path})`);
    return "";
  }
}

const skillsRoot = join(root, "skills");
let entries = [];
try {
  entries = await readdir(skillsRoot, { withFileTypes: true });
} catch {
  errors.push("skills/: missing or unreadable directory");
}

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillName = entry.name;
  const source = await readRequired(join("skills", skillName, "SKILL.md"), skillName);
  if (!source) continue;
  checkedSkills += 1;

  const frontmatter = source.match(/^---\\r?\\n([\\s\\S]*?)\\r?\\n---(?:\\r?\\n|$)/);
  if (!frontmatter) {
    errors.push(`${skillName}: missing or malformed YAML frontmatter block`);
    continue;
  }

  const metadata = frontmatter[1];
  const name = metadata.match(/^name:\\s*([^\\s#]+)\\s*$/m)?.[1];
  const description = metadata.match(/^description:\\s*(.+?)\\s*$/m)?.[1];

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(skillName)) errors.push(`${skillName}: directory must be a lowercase kebab-case slug`);
  if (name !== skillName) errors.push(`${skillName}: frontmatter name must match directory (found ${name ?? "missing"})`);
  if (!description || description.length < 20 || description.length > 1024) errors.push(`${skillName}: description must be 20–1024 characters`);
  if (source.slice(frontmatter[0].length).trim().length < 100) errors.push(`${skillName}: instruction body is unexpectedly short`);
}

if (checkedSkills === 0) errors.push("No valid skill files found.");

const benchmarkFiles = [
  "benchmarks/premium-saas.md",
  "benchmarks/enterprise-services.md",
  "benchmarks/ecommerce-storefront.md",
  "benchmarks/analytics-dashboard.md",
  "benchmarks/creative-studio.md",
];
for (const path of benchmarkFiles) {
  const content = await readRequired(path, "Benchmark");
  if (content && (!content.startsWith("# Benchmark") || !content.includes("## Acceptance criteria"))) {
    errors.push(`${path}: expected a benchmark heading and acceptance criteria`);
  }
}

const visualAssets = [
  "references/visual-library/composition-anatomy.svg",
  "references/visual-library/type-hierarchy.svg",
  "references/visual-library/semantic-palette.svg",
  "references/visual-library/responsive-transformation.svg",
  "references/visual-library/interaction-states.svg",
];
for (const path of visualAssets) {
  const content = await readRequired(path, "Visual asset");
  if (content && (!content.includes("<svg ") || !content.includes("</svg>") || !content.includes("<title") || !content.includes("<desc"))) {
    errors.push(`${path}: expected an SVG with title and description`);
  }
}

await readRequired("docs/agent-compatibility.md", "Compatibility guide");
await readRequired("references/visual-library/README.md", "Visual library guide");
await access(join(root, "scripts/install.mjs"), constants.R_OK).catch(() => errors.push("scripts/install.mjs: missing or unreadable"));

try {
  const pkg = JSON.parse(await readFile(join(root, "package.json"), "utf8"));
  const changelog = await readFile(join(root, "CHANGELOG.md"), "utf8");
  if (!changelog.includes(`## ${pkg.version} - `)) errors.push(`package.json version ${pkg.version} does not have a matching CHANGELOG entry`);
} catch {
  errors.push("package.json or CHANGELOG.md is invalid or unreadable");
}

if (errors.length) {
  console.error("PWDS validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`PWDS validation passed: ${checkedSkills} skills, ${benchmarkFiles.length} benchmarks, and ${visualAssets.length} visual assets checked.`);
}
