---
name: responsive-craft
description: Design, implement, and verify responsive website behavior across mobile, tablet, desktop, and wide viewports. Use for new pages, layout changes, and responsive bug fixing.
---

# Responsive Craft

Responsive quality means the experience remains useful and intentional across widths, input modes, and content variation.

## Inspect

Check existing breakpoints, container rules, navigation behavior, image sizing, typography, overflow, and interaction patterns. Use the project's existing conventions unless they are demonstrably inadequate.

## Design rules

- Derive breakpoints from content pressure and layout transitions, not device names alone.
- Use fluid sizing where it improves continuity; constrain line length and maximum widths.
- Recompose multi-column layouts when content becomes cramped.
- Keep primary actions reachable and controls comfortably operable.
- Preserve meaningful image crops and focal points.
- Avoid fixed heights for content regions unless the design requires them.
- Account for long labels, translated content, empty states, validation messages, and user zoom.
- Support touch and keyboard; do not rely on hover as the only way to reveal essential functionality.
- Respect safe areas where relevant.
- Provide reduced-motion behavior for non-essential animation.

## Baseline viewport review

Use the project's actual support targets. When none are specified, inspect representative widths such as 360, 390, 430, 768, 1366, 1440, and 1920 CSS pixels. These are review samples, not prescribed breakpoints. Include intermediate widths around transitions.

## Verification

When browser tools exist:
1. Load the relevant routes.
2. Inspect all baseline widths and at least one intermediate width.
3. Test navigation, menus, forms, dialogs, and primary actions with touch-sized and keyboard interactions.
4. Check for horizontal scrolling, clipping, overlaps, awkward wrapping, and inaccessible off-screen content.
5. Capture screenshots or notes for defects and verify fixes.

When browser tools do not exist, inspect the code and styles, reason through layout transitions, and explicitly report that rendered behavior was not verified.

## Deliverable

Summarize layout changes, breakpoint rationale, tested viewport sizes, interactions tested, and remaining unverified cases. Never report a viewport as tested unless it was actually rendered and inspected.
