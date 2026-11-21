# Evaluation 01 — Northstar premium SaaS website

**Status:** Prepared; cloud runner configured; execution pending provider secret  
**Benchmark:** [Premium SaaS brief](../../benchmarks/premium-saas.md)  
**Target agents:** Lovable and OpenCode (OpenCode Zen / Console provider)  
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
3. OpenCode baseline
4. OpenCode + PWDS

Each run starts from a clean, isolated project directory. Use the same agent version and exact model ID for the paired runs. If the model/provider/tool version changes between paired conditions, mark the comparison as confounded. The OpenCode workflow executes its two conditions sequentially in separate clean directories and uses one model input for both.

## Time budget

Use a maximum of 45 minutes of active agent build time per run. Record actual elapsed time. Do not keep prompting one condition for polish while leaving the paired condition at a first draft. If a defect-fix pass is allowed, give both paired conditions one pass of up to 10 minutes and record it.

## Run prompts

- Baseline: [baseline-prompt.md](baseline-prompt.md)
- PWDS-assisted: [pwds-prompt.md](pwds-prompt.md)

The prompt body and product brief are intentionally identical; the only experimental variable is whether PWDS skills are available and explicitly invoked. The PWDS prompt names the minimum relevant skills. Do not expose the PWDS skill pack, profile, or reference files to the baseline OpenCode run.

## OpenCode cloud runner

The workflow is [Northstar OpenCode benchmark](../../.github/workflows/northstar-opencode-benchmark.yml). It runs on GitHub-hosted Ubuntu runners and creates two separate temporary workspaces:

- **Baseline:** receives only the baseline prompt. No PWDS skill directories, profiles, or references are installed or copied into this workspace.
- **PWDS-assisted:** receives the same brief and prompt plus the PWDS skills installed into `.agents/skills` (the portable skills directory OpenCode discovers), the Premium / Commercial profile, and PWDS references.

Both conditions use the same OpenCode CLI version, OpenCode hosted provider, model ID, and 45-minute timeout in one workflow dispatch. The default model selected for this benchmark is `opencode/gpt-5.3-codex`; it is a coding-focused model in the current hosted model catalog. The workflow allows an explicit model override, but changing it between paired runs invalidates a direct comparison.

### One-time setup

1. Create an OpenCode hosted-provider API key from the [OpenCode Console](https://opencode.ai/). The hosted model catalogue was previously branded Zen; current official documentation labels the hosted service Console.
2. In GitHub, open **Settings → Secrets and variables → Actions → New repository secret**.
3. Add the secret named `OPENCODE_API_KEY` and paste the provider key there. Never commit it or paste it into a prompt.
4. Open **Actions → Northstar OpenCode benchmark → Run workflow**. Keep the default model unless there is a deliberate reason to change it.
5. Download the `northstar-opencode-<run-id>` artifact after completion. It contains the two isolated source trees, prompts, OpenCode logs, and run metadata.

The workflow does not publish either website and does not claim browser, screenshot, accessibility, or Lighthouse verification. Those checks remain part of the evidence/reviewer stage in the scorecard. If the secret is missing or the provider rejects the model/key, the workflow fails and uploads any evidence produced; that is a blocked run, not a zero score.

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

The OpenCode workflow preserves source trees and execution logs as artifacts but does not itself publish or visually inspect the generated websites. Do not publish a project just to obtain evidence unless publishing is necessary and the workspace owner approves it. Preview links are sufficient when accessible.

## Scoring and hard gates

Use [scorecard.md](scorecard.md). Apply the 100-point rubric in the benchmark README. Hard gates override totals: a broken primary journey, missing route, blocking runtime error, critical responsive defect, keyboard-inoperable core action, unnamed critical control, fabricated/contradictory claims, or known critical accessibility/security issue means **not ready**.

## Comparison

Report per-agent score deltas (PWDS minus baseline), hard-gate results, elapsed time, defect counts by severity, and evidence completeness. Do not aggregate Lovable and OpenCode into a single headline number if their models or environments differ. Do not claim statistical significance from one paired run per agent.

## Execution status

Lovable is authenticated and the connected workspace is available; the first Northstar build has not yet been run. The OpenCode GitHub Actions runner is configured in this PR but cannot execute until the repository secret `OPENCODE_API_KEY` is added. No benchmark scores or agent-performance claims are made at this stage.
