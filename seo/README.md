# SEO Program — Cornerstone PM (Track A)

This directory is **internal documentation only**. It does not deploy and is intentionally not added to `sitemap.ts`.

The program is structured as 6 tracks, inspired by Nick Zviadadze's Claude SEO workflow. Track A is everything we can execute without paid APIs; Tracks B–F unlock when DataForSEO and Apify credentials are provided.

---

## What's in this folder

| File | Purpose | Status |
|---|---|---|
| `README.md` | Index and program overview (this file) | ✅ Track A |
| `sitemap-gap-report.md` | Qualitative diff of our sitemap vs 7 competitors; prioritized topic gaps; case-study playbook; financial cluster; awards/event content; listicle queue; missing alternative pages | ✅ Track A |
| `onpage-audit.md` | Per-page audit of all 48 `src/app/**/page.tsx` files; weakness ranking + top fixes | ✅ Track A |
| `content-pipeline.md` | Repeatable "non-SLOP" 9-step blog production runbook | ✅ Track A |
| `track-b-readiness.md` | What Tracks B–F need to start, costs, and deliverables | ✅ Track A planning |
| `competitor-landscape.md` | Forward-looking competitor target list (next-wave alternative pages) | pre-existing |
| `competitor-research-batch-1.md` | Per-competitor research notes (AccuLynx, Procore, CoConstruct, etc.) | pre-existing |
| `_audit.js` | Node script that generates `_audit-raw.json` (run with `node seo/_audit.js`) | helper |
| `_audit-raw.json` | Machine-readable per-page audit data | helper |

---

## How to use these docs

### Picking the next blog post
1. Open `sitemap-gap-report.md` → prioritized topic-gap list
2. Cross-reference against `onpage-audit.md` "thin / missing pages" list
3. Pick one topic, follow `content-pipeline.md` step-by-step

### Fixing existing pages (no API needed)
1. Open `onpage-audit.md` → "Top 10 highest-leverage on-page fixes"
2. Work top-down — they're ranked by `(impact × ease)`

### Re-running the on-page audit
```powershell
cd C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2
node seo/_audit.js
```
The script is rough — it strips JSX braces so word counts undercount component-driven pages. Trust it for *relative* weakness ranking, not absolute word counts. Inspect any page flagged as thin before assuming it's actually thin.

---

## Track summary

| Track | Description | Blocker | Owner |
|---|---|---|---|
| **A** | Sitemap audit, on-page audit, content pipeline runbook | none — done | Website Builder |
| **B** | DataForSEO keyword research (volume, difficulty, SERP analysis at scale) | DataForSEO API key | TBD |
| **C** | DataForSEO backlink audit (our profile + top 3 competitor profiles) | DataForSEO API key | TBD |
| **D** | Apify journalist prospecting (HARO-style + Twitter scraping) | Apify token | TBD |
| **E** | Guest-post production pipeline (target list → pitch → drafts → schema) | Apify + curated target sites | TBD |
| **F** | Backlink prospecting & outreach (broken-link, comparison pages, alternative roundups) | Apify + DataForSEO | TBD |

See `track-b-readiness.md` for cost estimates and what Scooter needs to provide for each.

---

## Brand voice rules (enforced by content pipeline)

These are pulled from `AGENTS.md` and `SOUL.md` and apply to every new page or post:

- **Direct, no fluff.** No "in today's fast-paced construction landscape." Cut every sentence that doesn't say something specific.
- **Real product features only.** If we don't ship it, don't write about it. The thing that kills home-builder marketing trust is software that promises and doesn't deliver.
- **Production builder framing.** We are not for custom builders or remodelers. Saying "for everyone" makes us sound like Buildertrend. Be the production-builder pick.
- **Differentiator framing**: vendor wins by community assignment (not lowest bid), lock-after-acceptance, vendor portal with no login, 47-skill Foreman AI, Blueprint AI takeoffs, public REST API, $149/mo flat with unlimited users.
- **Mobile first.** Every page must look right on a phone. Production builders read on phones from the jobsite.
- **One commit per page.** Marketing repo deploys via Vercel on push. Don't ship without a follow-up `git push`.

---

## What's intentionally NOT in this folder

- **No live SEO data** (rankings, traffic, click-through rates) — that lives in Search Console / GA4 and shouldn't be checked into the repo.
- **No keyword lists with volume/difficulty** — those need DataForSEO (Track B).
- **No backlink data** — needs DataForSEO (Track C).
- **No journalist contact lists** — needs Apify (Track D).
- **No drafted blog posts** — drafts live in `src/app/blog/<slug>/page.tsx` directly. The pipeline doc explains the workflow, but the artifacts are real pages, not docs in this folder.

---

## Quick links

- Live site: https://www.cornerstonepm.ai
- Sitemap: https://www.cornerstonepm.ai/sitemap.xml
- Repo: https://github.com/Scootermcgavin121/cornerstone-marketing-v2
