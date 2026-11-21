# PWDS visual reference library

This library provides small, original, framework-neutral visual studies. They are teaching aids, not templates to copy blindly. Each asset illustrates one design decision; adapt it to the product's content, brand, accessibility needs, and implementation constraints.

## Reference assets

| Asset | Teaches | Avoid |
|---|---|---|
| [Composition anatomy](composition-anatomy.svg) | Hierarchy, focal point, rhythm, and section pacing | Treating every page as the same hero + three cards + footer |
| [Type hierarchy](type-hierarchy.svg) | Contrast between display, heading, body, and supporting text | Oversized headings without a content or responsive strategy |
| [Semantic palette](semantic-palette.svg) | Role-based color tokens and state distinction | Choosing colors only by taste or using color as the sole status signal |
| [Responsive transformation](responsive-transformation.svg) | Reflow, prioritization, and navigation adaptation | Simply shrinking desktop columns until they fit |
| [Interaction states](interaction-states.svg) | Default, hover, focus, pressed, disabled, and error states | Designing only the static default state |

## How agents should use these assets

1. Inspect only the references relevant to the current task.
2. Extract the underlying principle; do not reproduce the sample layout or exact colors automatically.
3. Check contrast, text sizing, keyboard behavior, reduced motion, and real content.
4. Create a project-specific direction and tokens.
5. Record which references influenced the design and what was changed.

## Asset policy

All SVG diagrams in this folder are original, simple vector illustrations created for PWDS and licensed under the repository MIT license. They contain no external image dependencies, scripts, or embedded fonts. They are not brand assets or production-ready UI components.
