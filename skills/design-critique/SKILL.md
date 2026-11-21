---
name: design-critique
description: Critically review an implemented or rendered website for visual quality, usability, accessibility, responsiveness, and engineering defects. Use after implementation or when diagnosing why an interface feels unfinished or ineffective.
---

# Design Critique

Act as a rigorous reviewer. Be specific, evidence-based, and constructive. Do not praise by default or invent observations.

## Evidence first

Inspect the running site when browser tools are available. Review the relevant routes, realistic content states, and representative viewports. Use screenshots, browser console, accessibility tooling, and interaction checks where available. If the site cannot be run, perform a source review and label findings as code-based rather than visually observed.

## Review dimensions

Use `references/visual-review-checklist.md` and the weighted rubric in the root README. Evaluate:
- Art direction and consistency.
- Composition, hierarchy, and whitespace.
- Typography and readability.
- Imagery and asset relevance.
- Responsive behavior.
- Interaction, motion, and feedback.
- Accessibility and keyboard operation.
- Color, contrast, and surface treatment.
- Engineering quality and performance risks.

## Severity

Classify findings:
- **Blocker:** core route/journey broken, major runtime failure, or critical accessibility/usability failure.
- **High:** prominent visual defect, mobile layout failure, inaccessible key control, or primary task friction.
- **Medium:** inconsistent hierarchy, awkward spacing, weak content rhythm, secondary interaction defect.
- **Low:** polish issue with limited user impact.

For each finding, include the location, observed evidence, user impact, recommended change, and verification method. Order by severity and impact—not by ease of fixing.

## Remediation loop

1. Identify the three highest-impact issues.
2. Fix one coherent group at a time.
3. Re-run the same check or viewport that exposed the issue.
4. Confirm the fix did not regress other widths or states.
5. Continue until no hard-fail issue remains or explain why a blocker cannot be resolved.

## Scoring

Use the rubric weights in README only when enough evidence exists. Scores are advisory. Do not assign a fabricated score to untested dimensions. Mark each dimension tested, partially tested, not tested, or blocked. A high total never overrides a hard-fail condition.

## Report

Return:
- Overall readiness (ready / needs work / blocked).
- Findings ranked by severity with evidence and fixes.
- Rubric scores only where justified.
- Routes, states, viewports, and tools actually inspected.
- Changes made and re-test results.
- Residual risks and limitations.
