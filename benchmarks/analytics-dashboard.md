# Benchmark 04 — Analytics dashboard

## Scenario

Create an operations analytics dashboard for **Relay Metrics**, a fictional service tracking task completion across three teams. All displayed data must be clearly labelled as sample/demo data.

## Audience and goal

- Audience: operations managers and team leads.
- Primary goal: identify work that is late or at risk.
- Secondary goal: filter the view by team and time range.
- Profile: Hybrid — enterprise-grade clarity with a distinctive, restrained visual system.

## Required interface

- Overview with completion, overdue, and at-risk metrics.
- Time-series visualization with labelled axes and accessible summary.
- Team performance table with sortable columns.
- Team filter and date-range selector.
- Detail panel or route for a selected team.
- Loading, empty, error, and populated states.

## Required interactions

- Filter changes update all dependent metrics and data.
- Sorting changes table order and exposes sort direction accessibly.
- Chart has a textual summary or equivalent data table.
- Table remains usable at narrow widths through deliberate responsive treatment.

## Content constraints

Use a small, internally consistent fictional dataset. Label it sample data. Do not imply live analytics, real customer data, or predictive certainty. Avoid misleading chart scales.

## Required viewports

390×844, 768×1024, 1366×768, 1440×900.

## Evaluation focus

Information hierarchy; data integrity; chart legibility; density management; filters and table usability; keyboard access; responsive navigation; empty/error states.

## Acceptance criteria

- KPI totals reconcile with the underlying sample dataset.
- Filters and sorting produce observable, consistent results.
- Chart is not the sole way to access important information.
- Dense layouts remain readable without clipping or forced desktop-only interaction.
