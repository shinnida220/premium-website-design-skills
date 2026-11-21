---
name: dashboard-design
description: Design data-dense dashboards and operational interfaces with clear information hierarchy, useful metrics, filters, tables, charts, and responsive behavior. Use for analytics, admin, finance, monitoring, or workflow products.
---

# Dashboard Design

Dashboards help users answer questions and take action. Do not optimize for the number of widgets visible.

## Understand the work
Identify user roles, decisions, tasks, data freshness, metric definitions, permissions, and common monitoring questions. Distinguish operational tasks from executive overview needs.

## Composition workflow
1. Rank information by decision importance and urgency.
2. Define each metric precisely: name, unit, period, comparison, source, and update time.
3. Use chart types that match the analytical question; avoid decorative charts.
4. Design filters and date ranges with clear scope and persistence.
5. Design table sorting, pagination, search, bulk actions, and empty/loading/error states.
6. Show data freshness, missing data, and uncertainty honestly.
7. Provide drill-down paths from summary to detail.
8. Ensure dense layouts remain readable and usable on smaller screens.

## Chart and data integrity
- Do not fabricate values or imply causal relationships from correlation.
- Use consistent units, scales, labels, and time ranges.
- Avoid truncated axes or misleading area/volume encodings.
- Provide text summaries or tables for important chart insights.
- Distinguish zero, unavailable, loading, and error states.

## Responsive and accessible behavior
Prioritize tasks on mobile; allow horizontal table scrolling only when appropriate and provide context. Ensure keyboard access, visible focus, accessible chart descriptions, and non-color status cues.

## Deliverable
Provide role/task summary, information hierarchy, metric definitions, chart/table choices, filter behavior, states, responsive rules, and acceptance criteria.
