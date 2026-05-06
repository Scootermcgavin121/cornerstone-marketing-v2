# On-Page SEO Audit — Cornerstone PM

**Date:** 2026-05-05
**Pages audited:** 48 `src/app/**/page.tsx` files
**Method:** scripted regex extraction (`seo/_audit.js`) producing `_audit-raw.json`. Output is **rough** — the script strips JSX `{...}` blocks, so component-driven pages (Hero, ModulesGrid, etc.) undercount on word count. Trust this audit for *relative* weakness ranking, *missing-metadata* flags, and *schema/link-count* totals. Do **not** use the word counts as absolute totals; spot-check before assuming a page is thin.

---

## Headline numbers

| Metric | Count |
|---|---|
| Total pages | 48 |
| Pages missing `title` | 2 (`/beta`, `/contact`) |
| Pages missing `description` | 3 (`/beta`, `/contact`, `/api-docs`) |
| Pages with **NO** JSON-LD schema | **45 of 48** |
| Pages flagged thin (script-detected <400 words; manual verification needed) | 41 (most are component-driven; 8–10 are truly thin) |
| Pages with H1 ≠ 1 | 2 (`/`, `/ai-hub-preview`) |
| Pages with zero internal links | 7 |
| **Pages in `sitemap.ts` that 404** | **1 (`/pricing`)** |
| Pages in `src/app` NOT in `sitemap.ts` | 5 (4 should be added, 1 intentional noindex) |

---

## ⚠️ CRITICAL: 404 in sitemap.xml

**`/pricing` is listed in `src/app/sitemap.ts` and surfaces in https://www.cornerstonepm.ai/sitemap.xml, but `src/app/pricing/page.tsx` does not exist.** Google will crawl this URL, hit a 404, and may downgrade the whole sitemap's trust score.

**Fix options (pick one):**
- **Option A (recommended):** create `src/app/pricing/page.tsx` with real pricing content — the homepage already has a `<PricingSection />` component. Wrap it in a real page with proper metadata, FAQ schema, and link to `/beta`. Pricing pages are top-3 highest-intent commercial pages on any SaaS site; we're leaving conversion on the table by not having one.
- **Option B (cheap fix):** remove `/pricing` from `sitemap.ts`. But this is the wrong call — pricing is the second-most-clicked nav item on every SaaS site.

**Owner:** Website Builder. Should be Track A's first follow-up commit, separate from this docs commit.

---

## Sitemap-vs-page mismatches

### In `src/app` but missing from `sitemap.ts`

| Route | Action |
|---|---|
| `/about` | **ADD** — about pages get branded-search traffic and feed E-E-A-T signal |
| `/bid-import-ai` | **ADD** — this is a real product page, ship-quality |
| `/support-ai` | **ADD** — same |
| `/blog/design-center-home-builder` | **ADD** — real blog post |
| `/blog/new-home-sales-pipeline` | **ADD** — real blog post |
| `/ai-hub-preview` | **DO NOT ADD** — already correctly marked `robots: { index: false, follow: false }` in its metadata. Keep it noindexed. |

### In `sitemap.ts` but missing from `src/app`

| Route | Action |
|---|---|
| `/pricing` | **CRITICAL** — see above |

---

## Site-wide gaps

### 1. JSON-LD schema is essentially absent

Only 3 of 48 pages emit any JSON-LD:
- `/blog/migrating-from-buildertrend-to-cornerstone`
- `/blog/newstar-implementation-cost-breakdown`
- `/blog/production-builder-vs-custom-builder-software`

The site-wide `<StructuredData />` component is mounted in `layout.tsx`, but it's a one-shot Organization/WebSite emit — no per-page Article, FAQPage, BreadcrumbList, or Product schema.

**Impact:** missing rich-result eligibility on every blog post, every alternative page, every product page. Schema is the #1 cheapest-to-add SEO upgrade we can ship.

**Recommended schema by page type:**

| Page type | Recommended schema |
|---|---|
| Blog posts (16 of 17 are missing it) | `Article` + `BreadcrumbList` + `ImageObject` |
| Comparison/alternative pages (`/buildertrend-alternative`, `/buildpro-alternative`, `/newstar-alternative`, `/compare`) | `FAQPage` + `BreadcrumbList` (already use `<FAQSection>`; just need to emit JSON-LD too) |
| Product/feature pages (`/foreman`, `/ai-takeoff`, `/listing-sheet`, etc.) | `SoftwareApplication` or `Product` + `BreadcrumbList` |
| Pricing page (when it exists) | `Product` + `Offer` per tier + `FAQPage` |
| Homepage | `Organization` + `WebSite` + `SoftwareApplication` (extend the existing `<StructuredData />`) |
| Contact | `Organization` + `ContactPoint` |

### 2. FAQSection components don't emit FAQPage schema

The `<FAQSection>` component is used on `/buildertrend-alternative`, `/buildpro-alternative`, and others. It renders the FAQ visually but **does not emit `FAQPage` JSON-LD**. This is one component change that retroactively adds rich-result eligibility to 5+ pages. **Single highest-leverage fix.**

### 3. Homepage H1 is missing

Script reports `h1: 0` on `/`. The homepage uses `<Hero>` which probably renders an H1 inside the component. **Verify** — if the Hero uses an H2 or a styled div, fix to a real `<h1>`. Search engines treat the homepage H1 as your primary brand+keyword anchor.

### 4. HTML-entity encoding bugs in titles

`/blog/ai-construction-management-software` has:
```
title: "AI Construction Management Software: What Home Builders Need to Know (2026) &mdash;€" Cornerstone PM Blog"
```
The `&mdash;€"` is a double-encoded em-dash artifact. This will render as literal `—€"` in browsers and SERPs. **Search every page.tsx for `&mdash;€` and `&ldquo;€` patterns** — those are systematic copy-paste corruption from Word / Notion. They appear throughout multiple files.

```powershell
Select-String -Path src\app\**\*.tsx -Pattern '&mdash;€|&ldquo;€|&rsquo;€' -Recurse
```

### 5. `/contact` and `/beta` use `"use client"` — no Metadata export possible from those files

These are client components, so Next.js doesn't allow `export const metadata`. The fix is one of:
- Wrap each in a server-component parent that defines metadata, with the client form imported as a child.
- Or add a `loading.tsx` / `head.tsx` sibling at the route level.

Currently both pages **fall through to the layout-level title template** and get a generic title. Both pages are critical conversion endpoints.

### 6. Internal-linking density is low across the site

7 pages have **zero** internal links (`/`, `/about`, `/ai-hub-preview`, `/blog`, `/contact`, `/features`, `/beta`). The non-`<Link>`-pages may have links inside child components (Navbar, Footer); the count above is JSX-direct links only, but the principle stands: every page should have 3–5 in-body contextual links to related pages, beyond the nav. Right now most pages over-rely on nav for internal linking.

---

## Per-page weakness ranking (worst first)

Pages are ranked by composite weakness score: missing metadata (3 pts), missing schema (2 pts), thin content (1 pt), no H1 (3 pts), zero internal links in body (1 pt). Cap at 10 pts.

### Tier 1 — must-fix (≥6 pts)

| Route | Score | Issues |
|---|---|---|
| `/pricing` | **404** | **Page does not exist but is in sitemap** — fix immediately |
| `/contact` | 7 | No `metadata` export (client component); no schema; no body internal links |
| `/beta` | 7 | No `metadata` export; no schema; thin (form-driven page) |
| `/api-docs` | 6 | No description; no schema; thin |
| `/ai-hub-preview` | 6 | No H1; tiny content. **Already noindexed — leave it but consider deleting from repo** if it's no longer needed |
| `/blog` (index) | 6 | No schema; no H1 visible; very thin (likely component-driven — verify) |

### Tier 2 — high-leverage fixes (4–5 pts)

| Route | Score | Issues |
|---|---|---|
| `/buildertrend-alternative` | 5 | No JSON-LD (FAQ + breadcrumb missing); high-conversion page |
| `/buildpro-alternative` | 5 | Same |
| `/newstar-alternative` | 5 | Same |
| `/compare` | 5 | Same; long table-heavy page that could rank for many queries with proper Product comparison schema |
| `/foreman` | 5 | No schema; this is the brand-name product page |
| `/ai-takeoff` | 5 | No schema; brand-name product page (Blueprint AI) |
| `/blog/ai-construction-management-software` | 5 | Title has `&mdash;€"` encoding bug; no schema; well-written long-form post wasted |
| `/blog/60-second-home-sale` | 5 | Probably component-driven — verify; no schema |
| `/blog/buildertrend-vs-cornerstone` | 5 | High-intent comparison post; no schema |
| `/blog/jobtread-alternative` | 5 | High-intent; no schema; should also exist as `/jobtread-alternative` page |
| `/blog/spreadsheets-killing-schedule` | 4 | Thin; no schema |
| `/blog/builder-ai-software` | 4 | Thin; no schema |

### Tier 3 — modest fixes (2–3 pts)

Most remaining pages cluster here. The pattern is the same: solid content (or solid components rendering content), but missing structured data. Adding schema across all of them is mostly find-and-replace work.

| Route | Score | Issues |
|---|---|---|
| `/about` | 3 | Not in sitemap; no schema |
| `/ai-agents` | 3 | No schema; thin direct text (probably component-driven) |
| `/ai-construction-management` | 3 | No schema |
| `/ai-construction-purchasing` | 3 | No schema |
| `/ai-for-home-builders` | 3 | No schema |
| `/ai-new-home-sales` | 3 | No schema |
| `/ai-scheduling` | 3 | No schema |
| `/api-access` | 3 | No schema |
| `/bid-import-ai` | 3 | Not in sitemap; no schema |
| `/support-ai` | 3 | Not in sitemap; no schema |
| `/construction` | 3 | No schema |
| `/sales` | 3 | No schema |
| `/purchasing` | 3 | No schema |
| `/design` | 3 | No schema |
| `/permitting` | 3 | No schema |
| `/listing-sheet` | 3 | No schema |
| `/features` | 3 | Tiny direct text (page is component-heavy — verify); no schema |
| `/home-builder-project-management-software` | 3 | Hub page; should have most extensive schema; currently has none |
| `/blog/design-center-home-builder` | 3 | Not in sitemap; no schema |
| `/blog/new-home-sales-pipeline` | 3 | Not in sitemap; no schema |
| `/blog/home-builder-software-buyer-guide-2026` | 3 | Strong long-form (913 words); only missing schema |
| `/blog/job-cost-tracking-home-builders` | 3 | No schema |
| `/blog/permitting-delays-home-builders` | 3 | No schema |
| `/blog/subcontractor-management-home-builders` | 3 | No schema |
| `/blog/subcontractor-scheduling-software` | 3 | No schema |
| `/blog/construction-purchase-order-software` | 3 | No schema |
| `/blog/homebuilding-ai` | 3 | No schema |

### Tier 4 — minor or already strong (≤2 pts)

| Route | Score | Notes |
|---|---|---|
| `/blog/migrating-from-buildertrend-to-cornerstone` | 1 | Already has schema; only missing minor links |
| `/blog/newstar-implementation-cost-breakdown` | 1 | Already has schema |
| `/blog/production-builder-vs-custom-builder-software` | 1 | Already has schema; longest blog post (1,041+ words detected) — exemplar to copy |

---

## Top 10 highest-leverage on-page fixes

Ordered by `(SEO impact × ease of execution)`. These are all single-PR-able.

### 1. Create `/pricing` page (or remove from sitemap) — **DO FIRST**
- Fixes a 404 in our public sitemap.
- Pricing is a top-3 commercial page on any SaaS.
- Reuse `<PricingSection />`, add Product + Offer + FAQPage schema, link to `/beta`.

### 2. Add `FAQPage` JSON-LD to the `<FAQSection>` component
- One-component change retroactively schema-fies 5+ pages (`/buildertrend-alternative`, `/buildpro-alternative`, all alternative pages).
- Unlocks "People Also Ask" rich results.
- **Highest leverage of any single fix.**

### 3. Add `Article` + `BreadcrumbList` + `ImageObject` schema to all blog posts
- 14 blog posts currently have no Article schema.
- Build a `<BlogPostSchema>` component, drop into each blog page.
- Unlocks rich-result snippets on SERPs (date, author, image).
- 1 PR, ~14 file edits.

### 4. Fix `&mdash;€"` and `&ldquo;€` encoding bugs
- Run a grep across all pages, replace double-encoded entities with proper `—`, `"`, `'`.
- These are showing in browser tabs and meta descriptions on social shares.
- ~30 minutes of find-and-replace.

### 5. Make `/contact` and `/beta` server components with metadata
- Both are critical conversion pages with no proper metadata or schema.
- Wrap each form in a client child component; make the page itself a server component.
- Add `Organization` + `ContactPoint` schema to `/contact`.

### 6. Add missing pages to `sitemap.ts`
- `/about`, `/bid-import-ai`, `/support-ai`, `/blog/design-center-home-builder`, `/blog/new-home-sales-pipeline`.
- 5 lines to add. Five extra crawl candidates.

### 7. Add `SoftwareApplication` schema to `/foreman` and `/ai-takeoff`
- These are our brand-name product pages (Foreman AI, Blueprint AI).
- `SoftwareApplication` schema + `aggregateRating` (when we have reviews) is rich-result eligible.

### 8. Verify and fix homepage H1
- Audit script reports zero `<h1>` on `/`.
- Confirm in `<Hero>` component; if it's a styled `<div>` or `<h2>`, change to `<h1>`.

### 9. Promote `/blog/jobtread-alternative` to `/jobtread-alternative` landing page
- Match the structure of `/buildertrend-alternative` (comparison table + FAQ schema).
- Keep the blog post too — they target slightly different intent.

### 10. Add 3–5 in-body internal links to every page that has zero
- Especially `/`, `/features`, `/about`, `/contact`, `/beta`.
- "Related" or "Learn more" sections that link to product/feature pages.
- Marginal per-page but compounds across the site (link equity flow).

---

## Quick wins not in the top 10 (but easy)

- **Per-page `canonical`**: 4 pages have explicit `alternates: { canonical }`. The rest fall back to `metadataBase`, which is fine, but explicit canonical on every commercial page reduces ambiguity.
- **OG images per page**: most pages inherit the homepage OG image. Each major landing page (`/buildertrend-alternative`, `/foreman`, etc.) deserves a custom 1200×630.
- **`alternates.languages`** is empty everywhere — fine for now (US-only) but if/when we add other regions, this is where to set hreflang.
- **`twitter:creator` is set globally** to `@cornerstonepm`; verify the handle exists.

---

## Re-running the audit

```powershell
cd C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2
node seo/_audit.js
```

The script writes `seo/_audit-raw.json` (machine-readable) and prints a summary table to stdout. Re-run after every batch of page edits to track progress.

**Known limitations of the script:**
- Word count is a regex strip — undercounts component-driven pages (hero/grid/sections render text via React props the regex doesn't see).
- Schema detection only looks for the literal string `application/ld+json` or `StructuredData` or `@type` — false negatives possible if schema is dynamically generated.
- H1 count counts `<h1` tags only in JSX literals, not interpolated strings or component output.

For Track A (qualitative ranking + relative comparison), this is good enough. For Track B (precision auditing tied to keyword data), we'll layer in DataForSEO's on-page checker.
