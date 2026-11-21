---
name: visual-regression-review
description: Detect and assess unintended visual changes across website builds using repeatable browser screenshots, baseline management, and focused regression triage. Use when a project has established UI baselines or changes affect shared components and critical routes.
---

# Visual Regression Review

Use screenshot comparison as evidence of visual change, not as an automatic definition of correctness.

## Setup
1. Identify critical routes, stable test data, and representative viewports.
2. Use a consistent browser version, device scale factor, font availability, locale, timezone, and color scheme.
3. Disable or stabilize nondeterministic content such as timestamps, rotating banners, random IDs, and remote ads.
4. Wait for fonts, images, and layout to settle using deterministic conditions rather than arbitrary long sleeps.
5. Capture baselines only from an approved, known-good state.

## Review workflow
1. Capture current screenshots using the same route, state, viewport, and environment as the baseline.
2. Compare pixel diffs and, where available, perceptual diffs.
3. Classify changes as expected, unintended, or inconclusive.
4. Inspect differences in context; anti-aliasing and rendering noise may create harmless diffs.
5. Prioritize regressions affecting content, layout, hierarchy, contrast, or interaction affordances.
6. Update baselines only after a human-approved intentional change.
7. Re-run after fixes and record the comparison outcome.

## Rules
- Never automatically approve every diff or blindly update all snapshots.
- Do not include secrets or personal data in screenshots.
- Keep test fixtures and viewport definitions under version control where appropriate.
- Screenshot comparison does not verify functionality, accessibility, or all responsive states.

## Deliverable
Report routes/states/viewports captured, environment, meaningful diffs, severity, expected/unexpected classification, fixes, and baseline update rationale.
