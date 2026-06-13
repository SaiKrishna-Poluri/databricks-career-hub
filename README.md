# Databricks Career Hub

Personal website + interview knowledge base for **Saikrishna Poluri**, targeting
**Data Engineer** and **Resident Solutions Architect** roles at Databricks.

## What's here

- `index.html` — landing page: positioning, stats, track hub.
- `portfolio.html` — recruiter-facing portfolio built from the Databricks-targeted resume
  (`C:\Users\saich\Documents\New project\databricks_resume_v1.md`).
- `de-track.html` + `de-*.html` — 10-module Data Engineer knowledge track.
- `rsa-track.html` + `rsa-*.html` — 6-module Resident Solutions Architect track.
- `prep-track.html` + `prep-*.html` — coding drills, system design, STAR story bank,
  and an interactive 8-week study plan (progress saved in browser localStorage).
- `docs/` — design doc and research notes.

Pure static HTML/CSS/JS. No build step. Open `index.html` directly in a browser, or serve with
any static server.

## Publishing to GitHub Pages

Published as a project site:

- Repo: `SaiKrishna-Poluri/databricks-career-hub` (branch `main`, root folder)
- Live URL: **https://saikrishna-poluri.github.io/databricks-career-hub/**

This is separate from the existing `saikrishna-poluri.github.io/portfolio`, which is untouched.

To redeploy after edits, just commit and push — Pages rebuilds automatically (~1 min):

```bash
git add -A
git commit -m "Update site"
git push
```

## Maintenance notes

- **Cost figures:** the public `portfolio.html` uses qualitative phrasing only
  (specific dollar amounts intentionally omitted). The interview-prep pages
  (`prep-behavioral.html`, `de-performance.html`, `rsa-case-studies.html`) still discuss the
  Maersk $10M / Ecolab $20K-per-month figures as study material, each with explicit
  "verify the composition before quoting externally" coaching.
- Education on `portfolio.html` currently shows "B.Tech, 2015"; add university + major when provided.
- The study plan stores progress under the localStorage key `dbx-hub-checklist`.
- Databricks renames products often (Workflows → Lakeflow Jobs, DLT → Lakeflow Declarative
  Pipelines / Spark Declarative Pipelines, Asset Bundles → Declarative Automation Bundles).
  Content was verified against mid-2026 naming; re-check terminology before interviews.
