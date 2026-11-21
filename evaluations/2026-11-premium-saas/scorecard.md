# Northstar benchmark scorecard

Copy one per run. Score only observable evidence; mark unsupported dimensions "Not verified". Attach links to screenshots, test output, source snapshot, or review notes.

## Run metadata

- Run ID:
- Condition: baseline / PWDS-assisted
- Agent:
- Provider / gateway:
- Agent version:
- Model:
- Model version:
- Tool version:
- Date/time (timezone):
- Project/repository URL:
- Immutable commit/snapshot:
- PWDS commit/version (if applicable):
- Browser/version:
- Device/OS:
- Viewport / device scale:
- Active build time:
- Reviewer:
- Evidence folder/link:

## Hard gates

| Gate | Pass / fail / not verified | Evidence |
|---|---|---|
| Home, Pricing, and Product routes load | | |
| Navigation and primary user journey work | | |
| No blocking runtime errors | | |
| No horizontal overflow at required widths | | |
| Essential content and controls remain visible/reachable | | |
| Core actions work by keyboard | | |
| Critical controls have accessible names/labels | | |
| Form validation and demo feedback are honest and usable | | |
| No fabricated claims, testimonials, logos, metrics, or badges | | |
| No known critical accessibility/security issue | | |

Any failed hard gate means **Not ready**, regardless of score.

## Weighted rubric

| Dimension | Weight | Score | Status (tested / partial / not verified) | Evidence and notes |
|---|---:|---:|---|---|
| Visual identity and art direction | 15 | | | |
| Layout and composition | 15 | | | |
| Typography | 12 | | | |
| Responsive behavior | 12 | | | |
| Imagery and assets | 10 | | | |
| Interaction and motion | 10 | | | |
| Accessibility | 10 | | | |
| Color and surfaces | 8 | | | |
| Engineering and performance | 8 | | | |
| **Total** | **100** | | | |

## Interaction test log

| Interaction | Expected behavior | Result | Evidence / defect |
|---|---|---|---|
| Desktop navigation | Routes to required pages | | |
| Mobile menu | Opens, closes, keyboard operable | | |
| Primary CTA | Reaches trial/signup destination | | |
| Secondary CTA | Reaches product explanation | | |
| Pricing links | Correct plan action/destination | | |
| FAQ | Keyboard accessible disclosure | | |
| Empty form submit | Inline validation | | |
| Invalid email | Actionable error, input preserved | | |
| Valid demo submit | Honest demo success state | | |
| Focus visibility | Visible focus on all controls | | |

## Viewport evidence

| Viewport | Home | Pricing | Product | Overflow/clipping | Screenshot link |
|---|---|---|---|---|---|
| 360×800 | | | | | |
| 390×844 | | | | | |
| 768×1024 | | | | | |
| 1366×768 | | | | | |
| 1440×900 | | | | | |

## Defects and findings

| Severity | Route / viewport | Observed evidence | User impact | Recommended fix | Retested? |
|---|---|---|---|---|---|
| Blocker / High / Medium / Low | | | | | |

## Summary

- Readiness: ready / needs work / blocked
- Strongest aspects:
- Highest-impact defects:
- Not verified:
- Active build time:
- Reviewer confidence: high / medium / low
- Confounds or deviations from protocol:
- Final notes:
