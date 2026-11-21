---
name: motion-design
description: Design purposeful, performant, accessible web animation and transitions for interface feedback, storytelling, and spatial continuity. Use when adding motion or reviewing animation quality.
---

# Motion Design

Motion should clarify change, guide attention, or express brand character. It should never be required to understand or operate the interface.

## Workflow
1. Identify the user or narrative purpose of each animation.
2. Define motion principles: duration range, easing, distance, stagger, and hierarchy.
3. Prefer transform and opacity for performant transitions; avoid expensive layout animation where possible.
4. Keep feedback immediate and avoid delaying core actions.
5. Ensure animation does not obscure content, cause layout instability, or trap focus.
6. Respect `prefers-reduced-motion`; provide a reduced or static alternative.
7. Test on lower-powered mobile devices and under realistic CPU/network conditions.
8. Verify keyboard and touch interactions independently of animation.

## Rules
- Avoid constant ambient motion without a clear purpose.
- Avoid scroll hijacking, forced waits, flashing, and large parallax effects that impair usability.
- Do not animate every element into view.
- Use CSS or existing project animation tools before introducing a new dependency.
- Avoid animating layout properties when transform/opacity can achieve the same result.
- Motion should remain coherent with the selected art direction.

## Deliverable
Document motion purpose, trigger, properties, duration/easing, reduced-motion behavior, performance considerations, and test cases.
