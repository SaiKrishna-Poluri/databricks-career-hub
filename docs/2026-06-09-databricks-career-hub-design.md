# Databricks Career Hub — Design

Date: 2026-06-09
Owner: Saikrishna Poluri (sk.poluri8@gmail.com)
Goal: A website + knowledge source to land Data Engineer and Resident Solutions Architect (RSA) roles at Databricks.

## Context

Saikrishna already has a Databricks resume workspace at `C:\Users\saich\Documents\New project\`:
resume assessment (2026-05-23), extracted current resume, and a Databricks-targeted resume v1.
Key facts used by this design:

- Lead Data Engineer / Data & Analytics Technical Lead at ADM (Mar 2026–present), 9+ years total.
- Deep Azure Databricks: Delta Lake, Unity Catalog, medallion pipelines, PySpark, FinOps tuning.
- Production GenAI on Databricks: Genie Space agent, Vector Search RAG, multi-agent app (Databricks Apps + Streamlit, UC row/column security).
- Prior: PANYNJ ICMS financial lakehouse, Maersk Fact-Based Reporting ($10M infra reduction — verify before citing externally), Ecolab CDM/EBX, Microsoft WPS.
- Certifications: DP-700, DP-600, DP-203, DP-900, AZ-900, Databricks Lakehouse Fundamentals, Dremio Lakehouse Associate. Databricks DE Associate planned.
- Assessment verdict: primary lane = RSA, secondary = Senior/Big Data Engineer. Gap = Databricks-specific certs, current platform terminology (Lakeflow, bundles), interview story polish.
- Existing portfolio URL on resume: saikrishna-poluri.github.io/portfolio.

## Requirements

1. **Portfolio site** that positions him for Databricks field/PS roles: hero, flagship projects, experience timeline, certifications, skills, contact.
2. **Knowledge source** for interview prep, organized in three tracks:
   - Data Engineer track: Spark internals, Delta Lake, streaming/Auto Loader, Lakeflow (Jobs + Declarative Pipelines), Unity Catalog, data modeling, performance/FinOps, Databricks SQL, DevOps/bundles, certification guides.
   - RSA track: role + interview loop, migration patterns, reference architectures, GenAI on Databricks, consulting/discovery skills, worked case studies.
   - Prep track: PySpark/SQL coding drills, data-platform system design, behavioral STAR stories seeded from his real story inventory, interactive 8-week study plan.
3. Every knowledge page links concepts back to his real experience ("story hooks") so interview answers come from evidence, not theory.
4. Content reflects **current (2026) Databricks terminology** — Data Intelligence Platform, Lakeflow Jobs / Declarative Pipelines, Databricks Asset Bundles / Declarative Automation Bundles, liquid clustering, serverless — verified by web research before writing.

## Approach

Considered:
- **A. Static HTML/CSS/JS, flat structure (chosen)** — no build step, opens from `file://`, deploys to GitHub Pages as-is, zero dependency risk on this machine, trivially editable.
- B. Static site generator (Astro/Hugo) — nicer authoring, but requires toolchain install, build step, and adds failure modes with no payoff for ~25 pages.
- C. Notion/Obsidian-style markdown vault only — good knowledge source, but not a recruiter-facing website.

## Architecture

```
C:\Users\saich\databricks-career-hub\      (git repo)
├── index.html              landing: positioning + track hub
├── portfolio.html          recruiter-facing portfolio (from resume v1)
├── de-track.html           DE track hub          (10 child pages, de-*.html)
├── rsa-track.html          RSA track hub         (6 child pages, rsa-*.html)
├── prep-track.html         Prep track hub        (4 child pages, prep-*.html)
├── de-spark.html de-delta.html de-streaming.html de-lakeflow.html
├── de-unity-catalog.html de-modeling.html de-performance.html
├── de-sql.html de-devops.html de-certifications.html
├── rsa-role.html rsa-migrations.html rsa-architectures.html
├── rsa-genai.html rsa-consulting.html rsa-case-studies.html
├── prep-coding.html prep-system-design.html prep-behavioral.html
├── prep-study-plan.html    interactive checklist (localStorage)
├── assets\styles.css       single design system (dark, Databricks-accent)
├── assets\app.js           nav active-state + study-plan persistence
├── _template.html          canonical page skeleton for content agents
└── docs\                   this design doc + research notes
```

- Flat page structure: every page sits at repo root → identical relative paths, no per-directory template variants, no broken-link class of bugs from agent-written files.
- All pages copy `_template.html` exactly (head, nav, footer); only `<title>`, breadcrumb, and `<main>` differ.
- No external JS dependencies. Google Fonts with system fallback. CSS-only code styling.

## Build orchestration

1. Inline (me): scaffold — styles.css, app.js, _template.html, index.html, 3 track hubs, README, git init + commit.
2. Workflow phase **Research** (barrier — all writers consume it): 4 web-research agents → 2026 Databricks DE interview process; RSA/field-engineering interview loop; current certification lineup + exam blueprints; platform terminology updates 2025–26.
3. Workflow phase **Write** → **Review** (pipeline, no barrier): 21 content agents each write one page from a page spec + research digest + profile facts; each finished page goes straight to a reviewer agent that verifies technical accuracy, template conformance, and story-hook quality, fixing issues in place.
4. Inline verification: link checker over all hrefs, template-conformance sweep, final consistency critic agent, commit.

## Error handling / quality gates

- Writers must not invent facts about Saikrishna; profile facts are supplied verbatim, anything else is generic knowledge.
- Unverified money metrics ($10M, $20K/mo) appear only with the assessment's "verify before external use" caveat on the portfolio page — flagged, not silently included. (Self-review note: portfolio page may cite them as the resume does, but the README records the verification caveat.)
- Reviewer agents check: every claim about Databricks features uses 2026 naming per research digest; every page has ≥1 story hook; all nav/footer links resolve.
- Final inline link check: every `href`/`src` in every page resolves to a real file or anchor.

## Out of scope (YAGNI)

- No backend, comments, analytics, or CMS.
- No global client-side search (25 pages, hub navigation suffices).
- No automated GitHub deployment (README documents the 3-command publish path; pushing needs his GitHub auth).

## Note on process

Built under an autonomous `/goal` directive; the brainstorming skill's interactive approval gates were
replaced by requirements mined from Saikrishna's own intake/assessment documents, which answer the
questions the skill would have asked. Design self-review done inline (placeholders: none; scope: single
implementation effort; ambiguity: page list enumerated exactly).
