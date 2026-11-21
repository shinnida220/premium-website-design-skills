# Contributing

Thanks for helping improve PWDS. Contributions should make agent-led website design more distinctive, usable, accessible, and verifiable.

## Before opening a change

- Read the root README and the affected skill.
- Search for existing guidance before adding a new skill or reference.
- Prefer a focused improvement to a new abstraction.
- Do not copy third-party skill content, website designs, images, fonts, or other assets without permission and compatible licensing.
- Do not add claims that a tool, framework, or agent is supported unless verified.

## Skill authoring

Every skill lives in `skills/<skill-name>/SKILL.md` and uses Agent Skills YAML frontmatter with `name` and `description`. The directory and frontmatter name must match. Instructions should include activation scope, inputs, workflow, constraints, outputs, and verification. Keep the main file actionable; put long checklists and domain references in `references/`.

A skill should:
1. Solve a distinct task.
2. State when it should and should not activate.
3. Ask for only materially necessary missing information.
4. Prefer concrete steps and acceptance criteria over vague adjectives.
5. Distinguish actual observations from assumptions.
6. Preserve accessibility, responsive behavior, maintainability, and performance.

## Validation

Run:

```bash
npm run validate
```

Update CHANGELOG.md for user-visible behavior or structure changes. Keep links current and test scripts on the minimum supported Node version where practical.

## Pull requests

Include the problem, proposed change, affected skills, validation performed, and any limitations. For visual guidance, include before/after evidence only when you have permission to share it.
