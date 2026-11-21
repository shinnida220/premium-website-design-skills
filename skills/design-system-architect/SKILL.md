---
name: design-system-architect
description: Create or improve a reusable website design system with semantic tokens, typography, spacing, color, surfaces, component states, and implementation guidance. Use for multi-page products or repeated UI patterns.
---

# Design System Architect

Create a small, coherent system that makes consistency easy and one-off styling harder.

## Inspect before changing

Read the existing theme, CSS variables, component library, typography setup, and conventions. Extend the existing system when sound. Avoid replacing a working design system without a clear reason.

## Define foundations

Specify semantic tokens rather than only raw values:
- Color roles: page, surface, elevated surface, text, muted text, border, brand, accent, success, warning, danger, focus.
- Typography: font families, weight roles, type scale, line heights, tracking, measure, and responsive behavior.
- Spacing: a consistent scale and rules for section, component, and inline spacing.
- Layout: content widths, grid behavior, gutters, and breakpoints based on content needs.
- Shape and depth: border radii, border weights, shadows, and elevation rules.
- Motion: duration, easing, distance, and reduced-motion fallback.
- Layering: documented z-index roles rather than arbitrary values.

Use accessible contrast. OKLCH may be useful for palette construction, but verify rendered contrast and browser support for the implementation context.

## Component rules

For each important component, define:
- Purpose and content constraints.
- Variants and when to use them.
- States: default, hover, focus-visible, active, disabled, loading, error, selected.
- Responsive behavior.
- Keyboard and semantic behavior.
- Empty, long-content, and error states where applicable.

Do not create abstractions for a single use unless they clearly improve maintainability. Avoid token proliferation and meaningless aliases.

## Implementation

- Follow the repository's existing framework and styling conventions.
- Centralize tokens in the project's established theme mechanism.
- Use semantic names in components.
- Keep contrast, focus, and reduced-motion behavior in the system.
- Avoid hardcoded values where a token already exists.
- Do not add dependencies merely to express a small token set.

## Deliverable

Provide token definitions or the exact files updated, component usage rules, state behavior, responsive rules, and any known gaps. Confirm that examples use the tokens consistently.
