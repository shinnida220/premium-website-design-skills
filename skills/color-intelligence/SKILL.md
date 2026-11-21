---
name: color-intelligence
description: Build a coherent, accessible website color system with semantic roles, brand palette logic, surface relationships, states, and contrast verification. Use when creating or revising a palette or resolving inconsistent or inaccessible color usage.
---

# Color Intelligence

Build color around meaning, hierarchy, brand, and accessibility. A palette is a system of roles, not a bag of attractive swatches.

## Workflow
1. Inspect brand assets, existing tokens, product domain, user needs, and light/dark mode requirements.
2. Define semantic roles: canvas, surface, elevated surface, primary text, secondary text, border, brand, accent, interactive, focus, success, warning, danger, and informational.
3. Create tonal ramps with enough steps for text, backgrounds, borders, hover, active, and disabled states.
4. Assign semantic tokens to components; avoid direct palette values scattered through the code.
5. Check contrast for text, icons, borders, focus indicators, and component states against their actual backgrounds.
6. Check color in context, including overlays, transparency, gradients, images, and dark surfaces.
7. Test color-independent communication and color-vision variation.

## Rules
- Meet the project's accessibility target; default to WCAG 2.2 AA.
- Do not use color as the only signal for errors, status, or selection.
- Avoid low-contrast muted text and subtle borders that disappear on real displays.
- Use OKLCH or another perceptually useful model when it helps create consistent ramps, but validate browser support and final rendered contrast.
- Do not assume a mathematically generated palette is automatically accessible.
- Define dark mode intentionally; do not simply invert every color.

## Deliverable
Return semantic token names, palette values, role mapping, state behavior, contrast evidence for key pairings, and known exceptions. Include a compact usage guide for designers and implementers.
