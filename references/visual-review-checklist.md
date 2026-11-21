# Visual and UX review checklist

Use this checklist as a practical review aid. Record evidence and severity; do not treat completion as proof of quality.

## Brand and art direction
- [ ] The visual concept is recognizable and appropriate to the product.
- [ ] Typography, color, imagery, surfaces, and motion reinforce one another.
- [ ] Pages feel related without becoming repetitive.
- [ ] No competitor identity or unlicensed asset has been copied.

## Content and hierarchy
- [ ] The first screen communicates what the product is and who it serves.
- [ ] Headings describe meaningful content rather than generic slogans.
- [ ] Primary and secondary actions are distinguishable.
- [ ] Content is truthful, specific, and supported.
- [ ] Long content, empty states, and error messages remain readable.

## Composition
- [ ] Sections have distinct purposes and a coherent sequence.
- [ ] Grid, alignment, spacing, and line length feel intentional.
- [ ] Images have appropriate aspect ratios and crops.
- [ ] Repeated patterns are used consistently but not monotonously.

## Responsive
- [ ] No unintended horizontal overflow at target widths.
- [ ] No overlapping or clipped text, controls, or images.
- [ ] Navigation and primary actions work on touch devices.
- [ ] Layout is recomposed where necessary, not merely scaled down.
- [ ] Zoom and text enlargement do not make essential content unusable.

## Interaction
- [ ] Links and buttons have clear, distinct semantics.
- [ ] Hover, focus-visible, active, disabled, loading, and error states are considered.
- [ ] Keyboard users can reach and operate essential controls.
- [ ] Focus is visible and not obscured.
- [ ] Motion is purposeful and has a reduced-motion alternative.

## Accessibility
- [ ] Semantic landmarks and heading hierarchy are logical.
- [ ] Images have appropriate alternative text or are decorative.
- [ ] Form controls have programmatic labels and useful errors.
- [ ] Text and UI contrast meet the project's target.
- [ ] Color is not the only way information is conveyed.
- [ ] Target sizes and spacing are usable.
- [ ] Automated checks are supplemented by manual review.

## Engineering
- [ ] No known major console/runtime errors.
- [ ] Assets are optimized and loaded appropriately.
- [ ] Fonts do not cause avoidable layout shifts.
- [ ] Layout avoids unnecessary fixed dimensions.
- [ ] Existing project conventions and dependencies are respected.
- [ ] No secrets or private data are exposed.

## Release blockers
Any broken primary journey, major runtime error, severe overflow, unreadable key content, inaccessible primary control, broken required asset, or critical known accessibility issue blocks a ready status.
