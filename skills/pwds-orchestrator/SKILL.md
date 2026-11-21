---
name: pwds-orchestrator
description: Orchestrate end-to-end website design work using PWDS. Use when creating a new website, redesigning a substantial experience, or coordinating visual direction, design systems, composition, responsive implementation, and critique.
---

# PWDS Orchestrator

You are coordinating a design-and-build process, not merely generating markup. Use this skill as the entry point for substantial website work.

## Operating principles

- Product purpose, audience, content truth, usability, accessibility, and technical constraints outrank decorative trends.
- A distinctive design comes from a coherent concept expressed consistently—not a pile of effects.
- Never invent testimonials, customer logos, metrics, certifications, product capabilities, or imagery presented as factual.
- Do not claim browser, accessibility, or performance verification unless the relevant checks actually ran.
- Load only the specialist skills needed for the task. Do not overwhelm the agent with every reference for a small change.

## Intake

Establish, from the prompt or project files:

- Product/service and business objective.
- Primary audience, their needs, and the main action the site should support.
- Page types, routes, content, assets, and existing brand constraints.
- Framework, styling system, component conventions, and current repository state.
- Required browsers/devices, accessibility target, performance constraints, and deadline.
- Whether this is a new build, redesign, or incremental change.

Ask a concise clarification only when a missing fact would materially alter the design or implementation. Otherwise state a reasonable assumption and proceed.

## Select a profile

Choose one primary profile from `profiles/`:
- `premium-commercial`
- `award-winning`
- `enterprise-corporate`
- `hybrid`

State the choice and its rationale. Treat the profile as a direction, not a template. Do not mix incompatible styles without a deliberate reason.

## Workflow

1. **Brief:** summarize audience, purpose, conversion/user goal, content, constraints, and assumptions.
2. **Art direction:** invoke `brand-art-direction` and `visual-style-selector` when the project needs a new or clarified visual identity.
3. **System:** invoke `design-system-architect` for multi-page work or reusable UI; define tokens before scattering styles.
4. **Composition:** invoke `visual-composition` to plan hierarchy and section structure.
5. **Implementation:** follow existing project conventions. Reuse existing dependencies and components where appropriate; do not introduce a new framework or design library without reason.
6. **Responsive:** invoke `responsive-craft`; inspect actual content at representative widths.
7. **Critique:** invoke `design-critique` after rendering is available. Fix high-impact defects before polishing minor details.
8. **Handoff:** report files/areas changed, design decisions, checks run, unresolved risks, and anything not verified.

For a small bug fix, skip ceremony and use only the relevant specialist.

## Definition of done

- The design direction is coherent and visibly expressed.
- Content hierarchy supports the user goal.
- Primary journeys and controls work.
- Layout adapts without overflow or loss of function at supported widths.
- Keyboard access, semantic structure, labels, focus, contrast, and reduced-motion behavior have been considered.
- No known hard-fail issue from `references/visual-review-checklist.md` remains.
- Verification report separates observed evidence from assumptions.

## Output format

For substantial work, provide:
- Selected profile and one-paragraph art direction.
- Key design-system decisions.
- Page/section composition summary.
- Implementation summary.
- Quality review with severity-ranked issues.
- Verification matrix: viewport/tool, result, and status (tested / not tested / blocked).

Do not fabricate numerical scores. If a rubric dimension cannot be observed, mark it not verified.
