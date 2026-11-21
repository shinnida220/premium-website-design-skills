# PWDS benchmark suite

The benchmark suite evaluates whether PWDS helps an agent produce a coherent, usable, responsive website from a realistic brief. It is designed for repeatable human review and optional browser-based evidence collection.

## Scenarios

1. [Premium SaaS marketing site](premium-saas.md)
2. [Enterprise services website](enterprise-services.md)
3. [E-commerce storefront](ecommerce-storefront.md)
4. [Analytics dashboard](analytics-dashboard.md)
5. [Creative studio portfolio](creative-studio.md)

## Run protocol

For a fair comparison:

1. Use the same model, agent version, repository starter, dependencies, prompt, and time budget for baseline and PWDS-assisted runs.
2. Run baseline first without PWDS; then run the same task with PWDS installed and the orchestrator invoked.
3. Start each run from a clean checkout. Do not carry design decisions or code between runs.
4. Provide the same supplied content and assets. Do not invent testimonials, logos, statistics, certifications, product features, or customer evidence.
5. Capture screenshots at the benchmark's required viewports and record browser/device details.
6. Exercise all required interactions and record failures.
7. Run automated accessibility checks where available, then perform keyboard and human review.
8. Have reviewers score outputs without knowing which run used PWDS when practical.

## Scorecard

Use the shared 100-point rubric in the repository README. For benchmark scoring, record a score only when there is observable evidence. Mark a dimension **not verified** when evidence cannot be collected; do not silently convert missing evidence into a passing score.

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

### Hard gates

Any of the following makes the run **not ready**, regardless of score:

- Primary task or navigation is broken.
- A required route fails to load or has a blocking runtime error.
- Essential content or controls are clipped, overlapped, or unreachable at a required viewport.
- A core action cannot be completed by keyboard.
- A critical control has no accessible name or usable label.
- Important data, prices, inventory, or outcomes are fabricated or contradictory.
- A known critical accessibility or security issue remains.

## Report template

Copy this into a run record:

```md
# Benchmark run
- Scenario:
- Date:
- Agent / model / version:
- PWDS version:
- Baseline or PWDS-assisted:
- Starter commit:
- Time budget:
- Reviewer:

## Evidence
| Route / task | Viewport / environment | Evidence link | Result |
|---|---|---|---|

## Scores
| Dimension | Weight | Score | Evidence / notes |
|---|---:|---:|---|

## Hard gates
- [ ] All required journeys work
- [ ] No blocking runtime or route failures
- [ ] No critical responsive defects
- [ ] Keyboard operation checked
- [ ] Accessible names and labels checked
- [ ] Content and data integrity checked

## Findings
- Strengths:
- Highest-impact defects:
- Not verified:
- Follow-up:
```

## Interpretation

Compare paired baseline and PWDS-assisted runs, not isolated headline scores. Report score deltas by dimension, hard-gate outcomes, time spent, and reviewer confidence. A higher visual score does not compensate for a broken user journey. Do not claim statistical significance from a small number of runs.
