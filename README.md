# Premium Website Design Skills (PWDS)

A portable, modular skill pack that helps coding agents design, build, inspect, and refine distinctive, production-quality websites—not just generate plausible component markup.

**Repository:** [shinnida220/premium-website-design-skills](https://github.com/shinnida220/premium-website-design-skills)  
**Format:** [Agent Skills](https://agentskills.io/)  
**License:** MIT for original material in this repository. Third-party tools and references retain their own licenses.

> PWDS improves the quality and consistency of an agent's design process. It does not guarantee award-winning outcomes, replace product judgment, or make an agent capable of browser inspection when no browser tool is available.

## What this pack is for

PWDS gives an agent a repeatable process for translating a product brief into a coherent visual direction, a usable design system, strong page composition, responsive behavior, and evidence-based refinement.

It is deliberately **framework-agnostic**. It can guide work in Next.js, React, Vue, Svelte, Astro, plain HTML/CSS, and other web stacks. It does not impose a component library, CSS framework, hosting provider, or design aesthetic.

### Design profiles

Choose one primary profile per project. The profile is an art-direction constraint, not a prebuilt theme.

| Profile | Use when | Typical qualities |
|---|---|---|
| Premium / Commercial | Marketing sites, SaaS, product launches, service businesses | Clear value proposition, confident typography, polished surfaces, purposeful conversion paths |
| Award-winning / Experimental | Portfolio, studio, campaign, editorial, cultural work | Distinctive art direction, expressive composition, intentional surprise, crafted motion |
| Enterprise / Corporate | B2B, finance, healthcare, infrastructure, complex products | Trust, clarity, predictable navigation, information hierarchy, restrained visual language |
| Hybrid | A product needs credibility with a distinctive brand voice | Controlled expressiveness, strong usability, selective moments of visual character |

Do not combine styles simply because each looks attractive in isolation. The direction must fit the audience, product, content, and business objective.

## Included skills

The orchestrator is the entry point. Specialist skills can also be used independently.

| Skill | Responsibility |
|---|---|
| `pwds-orchestrator` | Routes a brief through the appropriate design workflow and specialists |
| `brand-art-direction` | Establishes audience, positioning, mood, visual concept, and creative constraints |
| `visual-style-selector` | Selects a coherent visual language and rejects arbitrary style mixing |
| `design-system-architect` | Defines reusable semantic tokens, type, spacing, surfaces, and component rules |
| `visual-composition` | Plans page hierarchy, grids, sections, whitespace, and visual rhythm |
| `responsive-craft` | Specifies and implements responsive behavior across viewports and input modes |
| `design-critique` | Reviews rendered UI, ranks defects, and drives measurable refinement |

Additional specialist topics are documented in the roadmap, rather than being included as shallow or duplicative skills.

## Quick start

### Option A — use the skills CLI

The community Skills CLI is a convenient installation route:

```bash
npx skills add shinnida220/premium-website-design-skills
```

Check the CLI's current help and follow its interactive prompts. Installer flags and supported agent targets can change between releases. Review the files copied into your project and commit them to version control if you want the skills shared with your team.

### Option B — point an agent at this repository

If your coding agent can read GitHub repositories, give it this instruction:

> Read the README and the skills in https://github.com/shinnida220/premium-website-design-skills. Install or make the skills available using the conventions supported by this agent. Use `pwds-orchestrator` as the entry point for website design work. Before implementation, establish the project brief and select one design profile. Load specialist skills only when relevant. Follow the workflow, quality gates, and verification rules. Do not claim browser testing unless you actually ran it.

For a focused task, point the agent to the relevant specialist `SKILL.md` instead of loading the entire pack.

### Option C — manual installation

1. Clone or download this repository.
2. Copy the desired skill directories (each contains a `SKILL.md`) into the skill discovery location supported by your agent.
3. Preserve the directory name and `SKILL.md` filename.
4. Restart or refresh the agent if its skill discovery requires it.
5. Ask the agent to list the skill it discovered and summarize its activation instructions.

```bash
git clone https://github.com/shinnida220/premium-website-design-skills.git
```

### Agent compatibility

The pack uses the open Agent Skills convention: a skill directory containing a `SKILL.md` with YAML frontmatter (`name` and `description`). Many agents support this format directly or through an adapter. **Discovery paths and installation behavior are agent- and version-specific**; do not assume one path works everywhere.

Common project-level conventions include:

- Claude Code: `.claude/skills/<skill-name>/SKILL.md`
- Codex and compatible agents: `.agents/skills/<skill-name>/SKILL.md`
- Cursor: check the current Cursor documentation for its supported project skill/agent-rule locations.
- Gemini CLI, Windsurf, Cline, and other agents: check the current version's documentation for Agent Skills discovery or supported import paths.

If an agent supports only a different rules format, ask it to adapt the skill instructions into that format while retaining the workflow and quality gates. Do not copy the whole pack into every location without checking the agent's discovery behavior.

## Expected workflow

A typical PWDS-assisted project should follow these stages:

1. **Understand the brief.** Identify the product, audience, primary user action, content, constraints, existing stack, and success criteria. Ask only for missing information that materially affects the design.
2. **Choose a design profile.** State the selected profile and why it fits. Avoid generic defaults.
3. **Define art direction.** Establish a visual concept, references, typography direction, palette logic, imagery approach, and interaction character.
4. **Build the design system.** Define semantic tokens and reusable rules before spreading one-off values across pages.
5. **Compose the experience.** Plan page hierarchy and sections around user intent and real content.
6. **Implement responsively.** Treat mobile as a designed experience, not merely a compressed desktop layout.
7. **Inspect and critique.** Run the app, inspect relevant routes and viewports when tools permit, and fix the highest-impact defects first.
8. **Verify and report.** Summarize what changed, what was tested, what remains unverified, and any known trade-offs.

### Expected deliverables

Depending on project scope, the agent should produce:

- A concise brief summary and explicit assumptions.
- A named design profile and art-direction rationale.
- A design system (tokens and component rules) appropriate to the project.
- A page/section composition plan when the work is more than a small change.
- Implemented responsive layouts and interactions.
- A critique list prioritized by severity and impact.
- A verification report that distinguishes tested behavior from assumptions.

For a small UI task, these artifacts can be concise. Do not create ceremony or documents that do not help the work.

## Quality gates

The rubric is a structured review aid, not a claim of objective design quality. Score only what can be observed; mark unavailable evidence as **not verified** rather than inventing a score.

| Dimension | Weight |
|---|---:|
| Visual identity and art direction | 15 |
| Layout and composition | 15 |
| Typography | 12 |
| Responsive behavior | 12 |
| Imagery and assets | 10 |
| Interaction and motion | 10 |
| Accessibility | 10 |
| Color and surfaces | 8 |
| Engineering and performance | 8 |
| **Total** | **100** |

Suggested interpretation: 90–100 excellent; 80–89 professional; 70–79 needs refinement; below 70 requires substantial work. These are internal heuristics, not industry certification.

### Hard-fail conditions

Do not mark a project ready while any known critical issue remains, including:

- A broken primary navigation item, CTA, or core user journey.
- Major runtime errors or a route that cannot load.
- Horizontal overflow, overlapping content, or clipped essential controls at supported widths.
- Unreadable text or a serious contrast issue.
- Essential functionality that cannot be operated by keyboard.
- Important controls without accessible names or labels.
- Broken, irrelevant, or obvious placeholder imagery/content in a finished experience.
- Motion that creates a known reduced-motion accessibility problem.
- A known critical accessibility defect.

### Baseline viewport matrix

Use these as representative inspection sizes, not mandatory CSS breakpoints:

| Class | Viewport |
|---|---|
| Small mobile | 360 × 800 |
| Common mobile | 390 × 844 |
| Large mobile | 430 × 932 |
| Tablet | 768 × 1024 |
| Laptop | 1366 × 768 |
| Desktop | 1440 × 900 |
| Wide desktop | 1920 × 1080 |

Also test intermediate widths around layout transitions and actual supported device/browser combinations when known.

## Browser and accessibility verification

PWDS encourages real rendered inspection. Useful tools include:

- [Playwright](https://github.com/microsoft/playwright) for browser automation and viewport checks.
- [Playwright MCP](https://github.com/microsoft/playwright-mcp) for agent-accessible browser workflows.
- [Chrome DevTools MCP](https://github.com/ChromeDevTools/chrome-devtools-mcp) for browser inspection and debugging.
- [axe-core](https://github.com/dequelabs/axe-core) for automated accessibility checks.

These are optional integrations, not bundled dependencies. Install and configure them according to their own documentation and your organization's security policy. Never imply a test ran when the tool was unavailable. Automated accessibility checks do not replace keyboard, screen-reader, or human review.

Use [WCAG 2.2](https://www.w3.org/TR/WCAG22/) as the accessibility reference, with WCAG 2.2 AA as the normal target unless the project specifies a stricter requirement.

## Reference and asset policy

References are inputs for analysis, not permission to reproduce another site's identity.

Useful places to study patterns and inspiration include [Awwwards](https://www.awwwards.com/), [Land-book](https://land-book.com/), [Godly](https://godly.website/), [Mobbin](https://mobbin.com/), and [SiteInspire](https://www.siteinspire.com/). Useful asset ecosystems include [Google Fonts](https://fonts.google.com/), [Fontshare](https://www.fontshare.com/), [Lucide](https://lucide.dev/), [Phosphor](https://phosphoricons.com/), [Unsplash](https://unsplash.com/), and [Pexels](https://www.pexels.com/).

Always verify each asset's license, attribution, usage limits, and suitability before shipping. Do not hotlink assets as a substitute for a production asset strategy. Do not fabricate customer logos, testimonials, statistics, certifications, or product screenshots. If real assets are unavailable, use clearly identified placeholders during development and replace them before release.

## Repository structure

```text
.
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── package.json
├── skills/
│   ├── pwds-orchestrator/SKILL.md
│   ├── brand-art-direction/SKILL.md
│   ├── visual-style-selector/SKILL.md
│   ├── design-system-architect/SKILL.md
│   ├── visual-composition/SKILL.md
│   ├── responsive-craft/SKILL.md
│   └── design-critique/SKILL.md
├── profiles/
│   ├── premium-commercial.md
│   ├── award-winning.md
│   ├── enterprise-corporate.md
│   └── hybrid.md
├── references/
│   ├── anti-patterns.md
│   ├── visual-review-checklist.md
│   └── browser-verification.md
├── examples/
│   └── project-briefs.md
├── scripts/
│   └── validate-skills.mjs
└── .github/workflows/validate.yml
```

## Validation

Requires Node.js 20 or later. No third-party runtime dependency is needed.

```bash
npm run validate
```

The validator checks that each skill has a valid directory/filename pairing, required frontmatter fields, and non-empty instructions. It is a lightweight structural check, not a full YAML parser or a guarantee that every agent will discover the skills.

## Existing tools and skills worth integrating

PWDS is designed to complement, not replace, focused tools and skill collections:

- [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) — broad UI/UX design guidance and searchable design references.
- [Impeccable](https://github.com/pbakaus/impeccable) — focused design and frontend quality skills.
- [Anthropic Skills](https://github.com/anthropics/skills) — examples and reusable agent skill patterns.
- [Addy Osmani Agent Skills](https://github.com/addyosmani/agent-skills) — practical agent workflows.
- [Vercel Agent Skills](https://github.com/vercel-labs/agent-skills) — frontend and web-development workflows.
- [Emil Kowalski Skills](https://github.com/emilkowalski/skills) — interaction and animation craft.

Review each project's current license and installation instructions before integrating it. PWDS does not vendor or claim ownership of their content.

## Troubleshooting

**The agent does not discover the skills.** Confirm that the agent supports Agent Skills or an adapter, place the skill folders in its documented discovery directory, preserve each `SKILL.md`, and restart/reload if required. Ask the agent to inspect the file directly as a fallback.

**The agent produces generic layouts.** Start with a real brief and a named design profile. Require an explicit art direction and composition before implementation. Use the anti-pattern reference and critique skill; reject default template-like layouts that do not fit the product.

**The agent claims the page is responsive without evidence.** Ask which viewport sizes were actually inspected. If no browser tool is available, require a code-based responsive review and clearly mark rendered behavior as unverified.

**The agent loads too many instructions.** Start with the orchestrator and load only relevant specialist skills. Avoid pasting the entire repository into every prompt.

**A third-party skill conflicts with PWDS.** Resolve the conflict at the project level: product requirements and accessibility take precedence; select one clear visual direction; do not merge contradictory rules mechanically.

## Roadmap

Potential future specialist skills, to be added when they can provide distinct, actionable workflows:

- Typography mastery and type pairing.
- Color intelligence and contrast-aware palette systems.
- Premium imagery and art-directed asset selection.
- Conversion-focused landing-page design.
- Interaction design and micro-interaction craft.
- Motion design and reduced-motion-aware animation.
- Dashboard and data-dense product design.
- E-commerce experience design.
- Mobile-first web application design.
- Visual regression and screenshot comparison review.

Potential future tooling includes optional agent-specific installers, richer reference assets, example implementations, and expanded automated checks. These will be added only with clear maintenance and compatibility expectations.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Contributions should improve practical outcomes, avoid aesthetic dogma, preserve accessibility, and include concrete acceptance criteria.

## License

Original repository content is MIT licensed. See [LICENSE](LICENSE). External projects, assets, fonts, images, and tools remain subject to their own licenses and terms.
