# Evaluation 01 — Northstar premium SaaS website

**Status:** Prepared; agent execution pending  
**Benchmark:** [Premium SaaS brief](../../benchmarks/premium-saas.md)  
**Target agents:** Lovable and Claude Code  
**Conditions:** baseline and PWDS-assisted for each agent  
**Run count:** four paired-condition builds (two per agent)

## What we are testing

Whether PWDS improves visual identity, composition, typography, responsive behavior, imagery, interaction quality, accessibility, color/surfaces, and engineering quality without degrading task completion or increasing defects.

## Fixed product brief

Northstar is a fictional workflow planning SaaS for small operations teams. It helps teams coordinate recurring work, assign ownership, and see delivery risks. The audience is operations leads and team managers at 10–200-person companies. The primary goal is to get a qualified visitor to start a product trial. The secondary goal is to explain the workflow and pricing approach.

Truth constraints:
- Do not invent integrations, certifications, customer adoption, quantified outcomes, testimonials, customer logos, ratings, press mentions, or security badges.
- Any illustrative interface data must be visibly labelled "Sample data".
- Prices must be labelled "Illustrative pricing".
- The email capture form is a demo only. No real submission endpoint exists; never claim an email was sent or stored.

Required routes:
1. Home: differentiated hero, product explanation, workflow, use cases, pricing teaser, FAQ, final CTA.
2. Pricing: at least two differentiated plans with transparent placeholder prices labelled "Illustrative pricing".
3. Product: explain Plan → Assign → Monitor using an original truthful UI illustration.

Required interactions:
- Responsive navigation and mobile menu.
- Primary and secondary CTAs with working destinations.
- Optional pricing toggle only when labels and values are internally consistent.
- Keyboard-accessible FAQ disclosures.
- Email form with validation, pending, success, and error states; clearly disclose demo-only behavior.
- Keyboard and touch support for all controls.

Required viewports: 360×800, 390×844, 768×1024, 1366×768, 1440×900. Also inspect one intermediate width around each responsive transition if browser automation permits.

## Run order

1. Lovable baseline
2. Lovable + PWDS
3. Claude Code baseline
4. Claude Code + PWDS

Each run starts from a clean project/repository. Use the same agent/model version for the paired runs. If the model/version changes between paired conditions, mark the comparison as confounded.

## Time budget

Use a maximum of 45 minutes of active agent build time per run. Record actual elapsed time. Do not keep prompting one condition for polish while leaving the paired condition at a first draft. If a defect-fix pass is allowed, give both paired conditions one pass of up to 10 minutes and record it.

## Run prompts

- Baseline: [baseline-prompt.md](baseline-prompt.md)
- PWDS-assisted: [pwds-prompt.md](pwds-prompt.md)

The prompt body and product brief are intentionally identical; the only experimental variable is whether PWDS skills are available and explicitly invoked. The PWDS prompt names the minimum relevant skills. Do not paste the skill instructions into the baseline condition.

## Evidence capture

For each run, preserve:
- Agent/model/version and tool version.
- Project/repository URL and immutable commit or snapshot identifier.
- Build start/end timestamps and active build time.
- Screenshots of all three routes at 390px and 1440px minimum; all required viewports if possible.
- Browser name/version, device scale factor, and viewport dimensions.
- Browser console errors and failed network requests.
- Interaction results for navigation, CTAs, FAQ, form validation and feedback.
- Automated accessibility results (axe or equivalent) and manual keyboard review.
- Any Lighthouse/Web Vitals report, with run conditions.
- Reviewer scorecard and confidence notes.

Do not publish a project just to obtain evidence unless publishing is necessary and the workspace owner approves it. Preview links are sufficient when accessible.

## Scoring and hard gates

Use [scorecard.md](scorecard.md). Apply the 100-point rubric in the benchmark README. Hard gates override totals: a broken primary journey, missing route, blocking runtime error, critical responsive defect, keyboard-inoperable core action, unnamed critical control, fabricated/contradictory claims, or known critical accessibility/security issue means **not ready**.

## Comparison

Report per-agent score deltas (PWDS minus baseline), hard-gate results, elapsed time, defect counts by severity, and evidence completeness. Do not aggregate Lovable and Claude Code into a single headline number if their models or environments differ. Do not claim statistical significance from one paired run per agent.

## Execution status

Cloud execution was attempted through the available Lovable integration, but the workspace/profile calls and project creation returned internal tool errors. No Lovable project was successfully created. No Claude Code execution tool/session is exposed in the current connected tool set. These are environment blockers, not benchmark results. Re-attempt cloud execution when Lovable access is healthy; Claude Code requires an accessible session or a local run by the user.
