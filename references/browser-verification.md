# Browser verification protocol

## Purpose
Provide repeatable evidence that a website behaves as intended in a real browser. This protocol is tool-agnostic; adapt it to the browser automation or inspection tools actually available.

## Before testing
- Start the application using the repository's documented command.
- Confirm the expected local URL and test account/data requirements.
- Identify critical routes and journeys.
- Use non-production test data. Do not expose credentials or personal data in screenshots/logs.
- Record browser, viewport, route, and build/commit where practical.

## Viewport sampling
Default samples when project targets are unspecified:
- 360 × 800
- 390 × 844
- 430 × 932
- 768 × 1024
- 1366 × 768
- 1440 × 900
- 1920 × 1080

Add intermediate widths around each layout transition and actual target devices where possible. These dimensions are samples, not breakpoint recommendations.

## Route and state coverage
For each important route, inspect:
- Initial load and full page scroll.
- Navigation open/closed states.
- Primary and secondary CTA behavior.
- Forms: empty, valid, invalid, submitting, success, and failure states where applicable.
- Dialogs, menus, tabs, accordions, and other interactive components.
- Long text, missing imagery, and realistic content density.
- Keyboard-only operation and focus visibility.

## Browser observations
Record:
- Horizontal scrolling and clipped content.
- Overlaps, awkward wrapping, unexpected layout shifts.
- Console errors and failed network assets.
- Incorrect link destinations or nonfunctional controls.
- Focus traps, inaccessible controls, and motion issues.
- Performance concerns visible in the browser (large assets, blocking scripts, layout shifts).

## Evidence and reporting
Use screenshots or recordings when permitted. Each finding should include route, viewport, steps to reproduce, observed result, expected result, severity, and retest outcome.

Never:
- Claim a viewport or journey was tested when it was not.
- Treat a screenshot as proof that controls work.
- Treat automated accessibility output as a complete accessibility audit.
- Run destructive actions against production.
- include secrets, private customer data, or authentication tokens in evidence.

## Suggested tools
- Playwright: https://github.com/microsoft/playwright
- Playwright MCP: https://github.com/microsoft/playwright-mcp
- Chrome DevTools MCP: https://github.com/ChromeDevTools/chrome-devtools-mcp
- axe-core: https://github.com/dequelabs/axe-core

Install tools only when appropriate and with project/user approval. Consult each tool's current documentation.
