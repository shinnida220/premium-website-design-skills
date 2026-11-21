---
name: interaction-design
description: Design clear, consistent website interactions and component behavior, including navigation, forms, menus, feedback, focus, empty states, and error recovery. Use when designing or refining interactive UI beyond static layout.
---

# Interaction Design

Make every interactive element understandable, predictable, responsive, and accessible.

## Workflow
1. Identify user goals, action sequence, component semantics, and system feedback.
2. Model states before styling: idle, hover, focus-visible, pressed, selected, disabled, loading, success, empty, and error as applicable.
3. Define triggers, outcomes, validation, dismissal, persistence, and recovery.
4. Use native HTML semantics and browser behavior where possible.
5. Ensure keyboard operation, focus order, focus visibility, accessible names, and announcements for dynamic feedback.
6. Provide touch behavior; essential functionality must not depend on hover.
7. Prevent accidental destructive actions and explain irreversible consequences.
8. Verify behavior under slow network, repeated activation, invalid input, and interrupted flows.

## Design rules
- Links navigate; buttons perform actions. Do not blur the distinction.
- Controls need clear labels and predictable feedback.
- Preserve user input after recoverable errors.
- Avoid unexpected context changes and surprising auto-submission.
- Use dialogs sparingly and make dismissal/return focus behavior reliable.
- Make loading and disabled states understandable.
- Respect reduced-motion preferences.

## Deliverable
Provide an interaction specification listing component, trigger, state transitions, feedback, keyboard behavior, error/empty behavior, and acceptance tests.
