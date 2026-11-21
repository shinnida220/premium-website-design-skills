#!/usr/bin/env node
import { cp, mkdir, readdir, access } from "node:fs/promises";
import { constants } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = join(repoRoot, "skills");
const args = process.argv.slice(2);

function option(name, fallback) {
  const index = args.indexOf(name);
  return index === -1 ? fallback : args[index + 1] ?? fallback;
}
function flag(name) {
  return args.includes(name);
}
function fail(message) {
  console.error(message);
  process.exit(1);
}

if (flag("--help") || flag("-h")) {
  console.log(`PWDS installer

Usage:
  node scripts/install.mjs --agent <codex|claude|cursor|gemini|universal|all> --scope <project|user> [--dry-run] [--force]

Options:
  --agent    Target agent directory (required)
  --scope    project writes into the current directory; user writes into your home directory
  --dry-run  Print destinations without copying
  --force    Replace existing skill directories
  --help     Show this help
`);
  process.exit(0);
}

const agent = option("--agent", "");
const scope = option("--scope", "project");
const dryRun = flag("--dry-run");
const force = flag("--force");
const roots = {
  codex: ".agents/skills",
  claude: ".claude/skills",
  cursor: ".cursor/skills",
  gemini: ".gemini/skills",
  universal: ".agents/skills",
};
if (!agent || !["codex", "claude", "cursor", "gemini", "universal", "all"].includes(agent)) {
  fail("Provide --agent codex|claude|cursor|gemini|universal|all. Use --help for details.");
}
if (!["project", "user"].includes(scope)) fail("--scope must be project or user.");

const selected = agent === "all" ? ["codex", "claude", "cursor", "gemini"] : [agent];
const base = scope === "user" ? homedir() : process.cwd();
const skillNames = (await readdir(sourceRoot, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

if (skillNames.length === 0) fail("No skill directories found in the repository.");

let copied = 0;
for (const name of skillNames) {
  const skillSource = join(sourceRoot, name);
  const skillFile = join(skillSource, "SKILL.md");
  try {
    await access(skillFile, constants.R_OK);
  } catch {
    fail(`Missing readable SKILL.md: ${skillFile}`);
  }

  for (const target of selected) {
    const destination = join(base, roots[target], name);
    try {
      await access(destination);
      if (!force) {
        console.log(`SKIP existing: ${destination} (use --force to replace)`);
        continue;
      }
    } catch {
      // Destination does not exist.
    }

    console.log(`${dryRun ? "WOULD INSTALL" : "INSTALL"} ${name} → ${destination}`);
    if (!dryRun) {
      await mkdir(dirname(destination), { recursive: true });
      await cp(skillSource, destination, { recursive: true, force, errorOnExist: !force });
    }
    copied += 1;
  }
}

console.log(`${dryRun ? "Preview complete" : "Installation complete"}: ${copied} skill director${copied === 1 ? "y" : "ies"} processed.`);
if (agent === "all") {
  console.log("Note: this creates separate copies in four agent-specific roots. Prefer --agent universal where your agents support .agents/skills.");
}
