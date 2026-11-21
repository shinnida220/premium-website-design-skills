import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../skills/", import.meta.url);
const entries = await readdir(root, { withFileTypes: true });
const errors = [];
let checked = 0;

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const skillName = entry.name;
  const filePath = join(root.pathname, skillName, "SKILL.md");

  let source;
  try {
    source = await readFile(filePath, "utf8");
  } catch {
    errors.push(`${skillName}: missing SKILL.md`);
    continue;
  }

  checked += 1;
  const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);
  if (!frontmatter) {
    errors.push(`${skillName}: missing or malformed YAML frontmatter block`);
    continue;
  }

  const name = frontmatter[1].match(/^name:\s*([^\s#]+)\s*$/m)?.[1];
  const description = frontmatter[1].match(/^description:\s*(.+?)\s*$/m)?.[1];

  if (name !== skillName) errors.push(`${skillName}: frontmatter name must match directory (found ${name ?? "missing"})`);
  if (!description || description.length < 20) errors.push(`${skillName}: description is missing or too short`);
  if (source.slice(frontmatter[0].length).trim().length < 100) errors.push(`${skillName}: instruction body is unexpectedly short`);
}

if (checked === 0) errors.push("No skill directories found.");

if (errors.length) {
  console.error("PWDS skill validation failed:");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`PWDS skill validation passed: ${checked} skills checked.`);
}
