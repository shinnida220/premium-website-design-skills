# PWDS evaluations

This directory stores reproducible benchmark runs and evidence. A benchmark result is not valid unless its run conditions, agent/model versions, artifacts, checks, and reviewer notes are recorded.

## Evaluation principles

- Compare paired baseline and PWDS-assisted runs with the same agent and model wherever possible.
- Start every run from a clean project; never reuse code or design decisions across conditions.
- Keep prompts, brief, supplied assets, time budget, framework, dependencies, browser environment, and viewport list identical.
- Run baseline before PWDS-assisted to reduce accidental leakage of PWDS-specific instructions into baseline.
- Record actual agent/model versions and execution dates. Do not infer them.
- Store screenshots, source snapshots, console output, accessibility reports, and interaction test results when available.
- A score is only valid when supported by observable evidence. Mark untested dimensions not verified.
- A failed or unavailable tool run is a blocked run, not a zero score.

## Active benchmark

- [Benchmark 01 — Premium SaaS](2026-11-premium-saas/README.md)

## Agents

This evaluation currently targets Lovable and OpenCode. The Lovable and OpenCode execution environments are independent: access to one does not imply access to the other. OpenCode is run through an isolated GitHub Actions cloud runner using the OpenCode hosted provider. If an agent cannot be executed in the current environment, record the run as blocked and provide the handoff instructions rather than claiming completion.
