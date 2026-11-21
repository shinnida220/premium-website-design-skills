# Northstar independent review harness

This workflow reviews an existing OpenCode benchmark artifact without rebuilding or modifying either condition.

## Run it

1. Open **Actions → Northstar OpenCode independent review**.
2. Choose **Run workflow**.
3. Enter the original OpenCode benchmark run ID (for the completed paired run, use `44955671585`).
4. Download the resulting `northstar-independent-review-<run-id>` artifact.

The source artifact must still be available in GitHub Actions retention and must contain `baseline/` and `pwds/` with the three HTML routes.

## Evidence generated

- Full-page screenshots for Home, Pricing, and Product at all five benchmark viewports.
- HTTP status, page errors, console errors, document overflow, title, H1 count, and link inventory.
- Axe results using WCAG 2 A/AA, WCAG 2.1 A/AA, and best-practice tags.
- Lighthouse JSON for each route in desktop and mobile modes.
- JSON and Markdown summaries for each condition.

## Interpretation limits

- Axe is an automated accessibility scan, not a complete accessibility audit.
- Lighthouse is a lab measurement; compare paired runs on the same hosted runner and treat small score differences cautiously.
- Automated checks do not assign the visual-design rubric scores or establish that all interactions are usable.
- Review screenshots side by side before assigning visual identity, composition, typography, imagery, color, or surface scores.
- The harness reports console errors as observations; some third-party browser messages may need human triage.
- The workflow fails when one of its automated hard-gate observations fails, but still uploads available evidence.

## Reproducibility

Both conditions use the same Chromium build, scripts, viewport list, axe rules, Lighthouse settings, and runner. The original build artifact remains immutable. Keep the source run ID with all review evidence.
