---
name: typography-mastery
description: Design and implement a distinctive, readable typographic system for websites, including type pairing, scale, measure, hierarchy, responsive behavior, and font loading. Use when typography is a major part of the visual identity or existing type feels weak.
---

# Typography Mastery

Treat typography as a core part of art direction and information architecture—not a last-minute font choice.

## Inspect first
Review brand direction, language/localization, content types, current fonts, licensing, loading strategy, and existing type tokens. Preserve a strong existing system.

## Workflow
1. Define the roles typography must serve: brand expression, navigation, display, headings, body, labels, data, and long-form reading.
2. Choose typefaces based on character, legibility, language coverage, available weights, variable-font support, licensing, and performance.
3. Pair typefaces with a clear role distinction. A single well-chosen family is often stronger than an unnecessary pairing.
4. Define a responsive type scale using semantic tokens. Use fluid sizing only within deliberate minimum/maximum bounds.
5. Set line height, tracking, weight, measure, and paragraph spacing for each role.
6. Test real content: long headings, numerals, punctuation, mixed-case labels, dense paragraphs, and localization.
7. Implement robust fallbacks and avoid layout shift through appropriate font loading and metric-compatible fallbacks where possible.

## Rules
- Never select a font solely because it is fashionable.
- Avoid ultra-light body text, overly tight body leading, long full-width paragraphs, and arbitrary letter spacing.
- Do not use display faces for dense UI labels unless readability remains strong.
- Verify glyph coverage for all supported languages and symbols.
- Respect font licenses and self-hosting terms.
- Ensure hierarchy remains clear without relying only on color or size.

## Deliverable
Document font families and roles, weights, type tokens, line-height/measure rules, responsive behavior, loading strategy, license/source, and any language coverage limitations. Verify at mobile and desktop widths.
