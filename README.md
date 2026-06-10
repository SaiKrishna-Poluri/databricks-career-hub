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

The resume already references `saikrishna-poluri.github.io/portfolio`. To publish this site:

```bash
# from this folder
git remote add origin https://github.com/saikrishna-poluri/<repo-name>.git
git push -u origin main
# then on GitHub: Settings → Pages → Deploy from branch → main / root
```

Publish either as the user site (`saikrishna-poluri.github.io` repo) or as a project site
(any repo name → served at `saikrishna-poluri.github.io/<repo-name>`).

## Maintenance notes

- **Verify before citing externally** (flagged in the resume assessment): the
  "$10M annual infrastructure cost reduction" (Maersk) and "$20K/month savings" (Ecolab)
  figures appear on the portfolio because they are on the source resume — confirm they are
  defensible before interviews.
- Education on the portfolio mirrors the resume (B.Tech 2015); add university/major when finalized.
- The study plan stores progress under the localStorage key `dbx-hub-checklist`.
- Databricks renames products often (Workflows → Lakeflow Jobs, DLT → Lakeflow Declarative
  Pipelines / Spark Declarative Pipelines, Asset Bundles → Declarative Automation Bundles).
  Content was verified against mid-2026 naming; re-check terminology before interviews.
