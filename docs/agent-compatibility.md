# Agent compatibility and installation

PWDS uses the open Agent Skills directory convention: one directory per skill, with a `SKILL.md` containing YAML frontmatter fields `name` and `description`. Agent support, discovery paths, and installation behavior are version-sensitive. This guide records documented discovery paths, not a guarantee that every feature behaves identically across every agent release.

## Compatibility matrix

| Agent | Project discovery path | User-level path | Discovery / verification | Notes |
|---|---|---|---|---|
| OpenAI Codex | `.agents/skills/<name>/SKILL.md` | `~/.agents/skills/<name>/SKILL.md` | Run `/skills` in Codex; explicitly invoke `$pwds-orchestrator` | Codex supports progressive disclosure and repository/user scopes. |
| Claude Code | `.claude/skills/<name>/SKILL.md` | `~/.claude/skills/<name>/SKILL.md` | Ask Claude Code to list available skills or invoke `/pwds-orchestrator` | Project and personal skill directories are documented. |
| Cursor | `.cursor/skills/<name>/SKILL.md` or `.agents/skills/<name>/SKILL.md` | `~/.cursor/skills/` or `~/.agents/skills/` | Open Customize → Skills; invoke the skill by name | Cursor also recognizes Claude and Codex skill directories for compatibility. |
| Gemini CLI | `.gemini/skills/<name>/SKILL.md` or `.agents/skills/<name>/SKILL.md` | `~/.gemini/skills/` or `~/.agents/skills/` | Run `/skills list`; use `/skills reload` after changes | Workspace skills require a trusted workspace. |
| Other Agent Skills-compatible agents | Check the agent's current documentation | Check the agent's current documentation | Use its documented skill-list or reload command | Do not assume a path based only on a shared file format. |

**Important distinction:** a compatible `SKILL.md` format does not prove that an agent supports the same discovery path, slash-command syntax, scripts, references, permissions, or activation behavior.

## Installation with the PWDS installer

From a clone of this repository:

```bash
node scripts/install.mjs --agent codex --scope project
node scripts/install.mjs --agent claude --scope project
node scripts/install.mjs --agent cursor --scope project
node scripts/install.mjs --agent gemini --scope project
```

Install into the universal `.agents/skills` location when you want one project copy shared by agents that document support for that alias:

```bash
node scripts/install.mjs --agent universal --scope project
```

Install into a user-level directory with `--scope user`. The installer never overwrites an existing skill unless `--force` is supplied. Preview the destination paths first with `--dry-run`.

```bash
node scripts/install.mjs --agent all --scope project --dry-run
node scripts/install.mjs --agent codex --scope user
```

The installer copies the skill directories only. Profiles, benchmarks, and repository reference material remain in this repository and are not automatically installed into an agent's skill directory.

## Manual installation

1. Clone the repository or download the release archive.
2. Copy the contents of `skills/` into the agent's documented skill root.
3. Preserve each skill's directory name and `SKILL.md`.
4. Reload the agent's skills if required.
5. Ask the agent to enumerate discovered skills and explicitly invoke `pwds-orchestrator`.

## Post-install smoke test

Use this prompt after installation:

> List the PWDS skills you can currently discover. Open and follow `pwds-orchestrator`. For a fictional premium scheduling SaaS, produce only a concise intake summary, choose one PWDS profile, identify the relevant specialist skills, and state which project facts remain assumptions. Do not implement anything.

A successful smoke test should demonstrate that the orchestrator is discoverable, its instructions can be read, the agent selects a coherent profile, and specialist loading is selective. It does not prove visual quality or browser verification.

## Troubleshooting

- **No skills appear:** confirm the exact path, one directory per skill, exact `SKILL.md` filename, and current agent documentation.
- **Changes are not visible:** run the agent's documented reload command or restart its session.
- **Duplicate skills appear:** avoid installing the same skills into multiple roots simultaneously; check name collisions.
- **Agent reads the skill but ignores its workflow:** explicitly invoke the orchestrator and ask it to state the profile and specialist routing before implementation.
- **Scripts do not run:** skill discovery does not imply shell permission. Review the script, request permission where applicable, and run it only in a trusted workspace.
- **Cloud/remote agents cannot see user skills:** use project-level skills or the agent's documented sync mechanism.

## Official documentation

- [Agent Skills standard](https://agentskills.io/)
- [OpenAI: Build skills](https://learn.chatgpt.com/docs/build-skills)
- [Anthropic: Agent Skills overview](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Cursor: Skills](https://cursor.com/help/customization/skills)
- [Gemini CLI: Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md)

Review these sources before publishing compatibility claims; vendor behavior can change independently of PWDS releases.
