# Sitemap Gap Report — Cornerstone PM vs. Competitors

**Date:** 2026-05-05
**Scope:** Qualitative diff of `cornerstonepm.ai/sitemap.xml` vs 7 competitor sitemaps. Goal: identify topic clusters, page types, and content patterns competitors rank for that we don't yet cover.

---

## TL;DR — Top 10 Gaps in Priority Order

1. **Customer case studies / "switch" stories** — we have ZERO; JobTread has 12+. **#1 content gap.**
2. **Financial content cluster** (job costing, change orders, markup vs margin, payment schedules) — JobTread dominates; we're underweight. ~8–12 posts to write.
3. **Industry-awards & event content** (NARI, IBS, builder spotlights) — branded backlink magnet we have nothing in.
4. **Competitor "alternative" pages** — 6 missing high-intent SEO landing pages (Procore, CoConstruct, AccuLynx, Buildxact, Contractor Foreman, JobNimbus).
5. **Listicle long-tail** — "3 tips," "7 mistakes," "5 questions" pattern. Easy wins, ~10 ready to write.
6. **Help/KB content as SEO surface** — CoConstruct has 200+ "learn-construction-software" pages indexed; we have zero. Long tail at scale.
7. **Persona / segment landing pages** ("for remodelers" excluded — but "for production builders," "for spec builders," "for design-build" are missing).
8. **Feature-as-page landing pages** (CoConstruct has 17 `/features/X-software` pages; we have 6 module pages but missing several keyword variants).
9. **Trade-specific scheduling pages** (`deck-builder-software`, `roofing-scheduling-software`, etc. — niche but JobTread mines this).
10. **Resource library** (templates, ebooks, podcasts, webinars — Buildertrend has dedicated sitemaps for each).

---

## Sitemap Fetch Results

| Source | URL | Status | Notes |
|---|---|---|---|
| Cornerstone PM | `cornerstonepm.ai/sitemap.xml` | ✅ 200 | 43 URLs |
| Buildertrend | `buildertrend.com/sitemap.xml` | ✅ 200 | Sitemap index → 16 sub-sitemaps. Pulled `page-sitemap.xml` and `post-sitemap.xml` (truncated, 19k chars each) |
| JobTread | `www.jobtread.com/sitemap.xml` | ✅ 200 | Single flat sitemap, ~250+ URLs. Heavy blog + customer case studies + podcast |
| CoConstruct | `www.coconstruct.com/sitemap.xml` | ✅ 200 | Mostly `/learn-construction-software/*` knowledge-base pages (200+) + 17 `/features/` pages |
| Buildxact | `buildxact.com/sitemap.xml` | ✅ 200 | Sitemap index → pulled `page-sitemap.xml`. Yoast/WordPress, 50+ pages |
| Procore | `www.procore.com/sitemap.xml` | ❌ 404 | robots.txt redirects to `/server-sitemap.xml` and `/jobsite/sitemap.xml`; both also 404 to web_fetch |
| Constellation HB (NEWSTAR/BuildPro parent) | `constellationhb.com/sitemap.xml` | ❌ fetch failed | Probably WAF-blocked; couldn't pull `sitemap_index.xml` either |
| Contractor Foreman | `contractorforeman.com/sitemap.xml` | ✅ 200 (index) / partial sub-sitemaps | Sub-sitemaps fetched but heavily padded with image markup; URL extraction was lossy |

**Failed-fetch impact:** Procore is the most painful loss — they have the largest enterprise content moat. Constellation HB matters less; their sites read more like sales pages than content libraries. Workaround for both: revisit during Track B with DataForSEO's "Pages by Domain" endpoint, which returns indexed URLs without needing direct sitemap access.

---

## Cornerstone PM — Current Coverage (43 URLs)

**Marketing pages (15):** `/`, `/features`, `/pricing` ⚠️ (404 — see audit), `/beta`, `/ai-agents`, `/foreman`, `/ai-takeoff`, `/api-access`, `/api-docs`, `/construction`, `/sales`, `/purchasing`, `/design`, `/listing-sheet`, `/compare`, `/contact`, `/permitting`

**SEO landing pages (6):** `/home-builder-project-management-software`, `/ai-construction-management`, `/ai-for-home-builders`, `/ai-scheduling`, `/ai-new-home-sales`, `/ai-construction-purchasing`

**Competitor alternative pages (3):** `/buildertrend-alternative`, `/newstar-alternative`, `/buildpro-alternative`

**Blog (17 posts):** AI/scheduling/takeoff-heavy — 4 explicit AI posts, 5 product-category posts, 4 competitor/comparison posts, 4 process/operations posts.

---

## Competitor Coverage by Topic Cluster

### 1. Customer Case Studies → ⚠️ #1 GAP

**JobTread has dominated this:** at least 12+ "switch" posts and customer spotlights I can see in their sitemap. Patterns:
- `/blog/[customer-name]-switches-to-jobtread-[software-type]` (e.g., `iconic-custom-home-builders-switches-to-jobtread-scheduling-software-for-construction`)
- `/blog/why-[company]-runs-on-jobtread`
- `/blog/case-study-[company]`
- `/blog/[company]-reviews-jobtread-construction-scheduling-and-estimating-software`
- `/blog/copper-masters-roofing-case-study-how-a-roofer-of-the-year-built-a-high-performance-business-with-jobtread`

Buildertrend has its own `/case-studies/` and `/case-study-sitemap.xml` — full dedicated content type with ~50+ entries.

**Cornerstone has zero customer case studies. This is the single biggest content gap.**

#### Why it matters for a home-builder SaaS
- Bottom-of-funnel buyers search for "is X software actually good" and click case studies.
- Case studies generate branded backlinks (the customer links from their own site).
- Case studies prove the platform handles real builder workflows — which is the #1 objection from builders evaluating new software.
- They double as social proof on conversion pages.

#### Case-Study-as-SEO Playbook (recommended)
1. **Recruit 3 beta builders** to be early case studies. Offer a perk (additional free year, founding-customer badge, etc.).
2. **Standardize the format**, every case study answers:
   - Who are they? (Builder name, market, homes/year)
   - What were they using before? (Spreadsheets / Buildertrend / NEWSTAR / BuildPro / nothing)
   - Why did they switch? (Specific pain points)
   - What's better now? (Specific metrics — hours saved, errors caught, deals closed)
   - One quote per case study (real photo + name + title)
3. **URL pattern:** `/case-studies/[builder-slug]` and `/blog/[builder]-switches-from-[old-tool]-to-cornerstone`. Run both — first is the canonical case study page, second is the SEO-optimized blog version targeting "[old tool] alternative" intent.
4. **JSON-LD:** `Article` schema + `Organization` (the customer) + `Review` schema with the customer quote as `reviewBody`.
5. **Internal links:** every case study links to `/compare` and the relevant `/[old-tool]-alternative` page; those pages link back to the case study as proof.
6. **Cadence:** target 1 new case study every 6 weeks. After 6 case studies (~9 months), revisit — it should be the highest-converting content type.

---

### 2. Industry Awards & Event Content → ⚠️ Branded backlink magnet

**JobTread runs an annual award ecosystem:**
- Annual roundup posts: `2024-nari-award-winners`, `2026 Earns Top Construction Software Awards`
- 6–8 individual winner spotlights per year (e.g., `2024-nari-winner-jobtread-remodeler-absolute-design-build-texas-contractor-software`)
- Industry-event recaps: `jobtread-connect-2023-recap`, `jobtread-connect-2024`, `8-common-ibs-vegas-mistakes`, `what-to-expect-international-builders-show-2025`
- "JobTread customers take home big wins at NARI awards" — turning customer wins into branded content

**Cornerstone has nothing in this category.**

#### Why it matters for a home-builder SaaS
- Industry awards generate trade-publication backlinks (BUILDER Magazine, Pro Builder, NAHB.org).
- Customer spotlights for award wins double as case studies AND brand-name searches.
- IBS / NAHB / NARI event recap content captures massive seasonal traffic spikes (January/February for IBS).

#### Two playable angles
**Angle A — ride existing awards:**
- Cover NAHB IBS each year (preview, recap, "what we learned").
- Cover NAHB awards programs (NHQA, The Nationals).
- Cover NARI awards (skewed remodeler — less relevant but still content).

**Angle B — create our own award (high effort, high payoff):**
- "Cornerstone Production Builder Innovation Awards" or "Builder of the Year." Annual program. Open nominations to all production builders, not just customers.
- Generates: nomination-form backlinks (people share when nominated), winner-announcement backlinks (winners post their wins), category roundup posts (massive long tail), recap content.
- This is what JobTread did with their NARI partnership — turned an external award into a content-and-backlink engine.

**Recommend Angle A for year 1 (low cost, high SEO value), Angle B once we have 30+ paying customers.**

---

### 3. Financial Content Cluster → ⚠️ We're underweight on the money topics

JobTread's most prolific content category, mined heavily for SERPs that high-intent buyers actually search:
- `construction-job-costing-faqs-and-tips`
- `construction-job-costing-faqs-and-tips-for-boosting-profits`
- `guide-to-job-costing-in-construction-with-quickbooks`
- `construction-budgeting-tips-for-builders-and-contractors`
- `construction-budgeting-and-scheduling-tips-for-builders-and-contractors`
- `7-common-budgeting-mistakes-to-avoid-in-construction-projects`
- `construction-bidding-and-budgeting-strategies-for-builders-and-contractors`
- `construction-budget-and-change-order-management-tips-for-builders-and-contractors`
- `construction-payment-schedule-tips-that-keep-cash-flowing`
- `3-tips-overhead-and-profit-construction-business-contractor`
- `construction-change-order-management-faqs-and-tips`
- `3-ways-change-orders-help-you-and-your-customers`
- `whats-the-difference-between-cost-and-profit-markups`
- `how-are-markup-margin-and-tax-calculated`
- `how-to-combat-rising-construction-costs-without-sacrificing-quality`

CoConstruct has parallel coverage in their KB: `whats-the-difference-between-cost-and-profit-markups`, `how-are-markup-margin-and-tax-calculated`, `building-your-construction-estimate`, `utilizing-parameters-for-estimating`.

**Our blog has 1 financial post (`/blog/job-cost-tracking-home-builders`).** That's a 15:1 deficit vs JobTread on a topic cluster builders actively search.

#### Recommended financial content cluster (12 posts)
Ordered by search-intent leverage for **production home builders specifically** (not contractors):

1. **"Markup vs. Margin for Home Builders: How the Math Actually Works"** — bedrock concept post; high search volume; we can stand out by using production-builder math (per-floorplan margin, design-center margin, structural-option margin) instead of generic contractor markup.
2. **"Job Costing Software for Home Builders: What to Track and Why"** — direct competitive overlap with JobTread's #1 post; we differentiate by automated job costing tied to vendor bids and design-center selections.
3. **"How to Build a Construction Budget for a Production Home"** — production-builder framing (auto-budget from floorplan + options) is a true differentiator.
4. **"Change Orders in Production Building: Why They're Different from Custom"** — gap topic. JobTread/CoConstruct cover custom-builder change orders. Production builders handle change orders post-contract differently (post-design-center freeze, structural lockouts).
5. **"Overhead and Profit Calculation for Home Builders"** — wide-funnel, high-volume search.
6. **"Construction Payment Schedules: Draw Schedules vs Progress Invoicing"** — production builders use draw schedules, not progress invoicing. This is a real differentiator post and we already mention it in the Buildertrend-alternative page.
7. **"Vendor Bid Comparison: How to Evaluate Subcontractor Bids Side-by-Side"** — sells our exact bid comparison feature.
8. **"Cost Tracking by Community: Why It Matters for Multi-Community Builders"** — niche but high-intent for our ICP.
9. **"7 Common Budget Mistakes in Production Home Building"** — listicle; ranks fast.
10. **"How to Calculate the True Cost of a Spec Home"** — high-intent for spec builders.
11. **"Sales Tax in Construction: How Builders Handle It (and How Software Helps)"** — wide-funnel evergreen.
12. **"Cash Flow for Production Builders: Why Locking Bids Matters"** — ties back to our lock-after-acceptance differentiator.

---

### 4. Competitor "Alternative" Pages → 6 missing

We currently have: `/buildertrend-alternative`, `/newstar-alternative`, `/buildpro-alternative`, `/blog/jobtread-alternative` (post, not page).

JobTread has `/acculynx-alternative` ranking. Other obvious gaps based on competitive overlap and search volume:

| Slug | Why | Search-intent strength |
|---|---|---|
| `/acculynx-alternative` | High-intent — JobTread already ranks here. AccuLynx is roofer-focused but spillover roofer/builder traffic exists. | Medium |
| `/procore-alternative` | Procore is the 800-lb gorilla. Anyone searching "Procore alternative" is signaling "Procore is too expensive / too commercial-focused for me" — exactly our ICP. | **High** |
| `/coconstruct-alternative` | CoConstruct merged with Buildertrend in 2021 — search volume on "CoConstruct alternative" still high because legacy users are looking. | Medium-high |
| `/contractor-foreman-alternative` | Contractor Foreman is low-end. Builders outgrow it. Capture the upgrade-intent searcher. | Medium |
| `/buildxact-alternative` | Buildxact is estimating-focused; production builders searching this are looking for something more complete. | Medium |
| `/jobnimbus-alternative` | JobNimbus is roofer/contractor-focused but builder-adjacent. Overlap with our ICP. | Low-medium |

**Promote `/blog/jobtread-alternative` to a top-level `/jobtread-alternative` page** matching the structure of the other 3 alternative pages (comparison table + FAQ schema). The blog version stays for editorial backlink, the page version targets the SERP.

#### Why "alternative" pages matter for a home-builder SaaS
- Highest commercial intent of any keyword class. Searcher has identified a competitor by name and is actively looking to switch.
- Each page captures a sliver of the competitor's branded search traffic.
- They form an SEO link cluster — every alternative page can link to every other one (`/compare` is the hub).
- Easy to template: comparison table + FAQ schema + CTA. Each page reuses the structure of `/buildertrend-alternative`.

---

### 5. Listicle Long-Tail → 10 ready-to-write topics

JobTread's listicle pattern (`3 tips`, `7 mistakes`, `5 questions`, `4 ways`, `6 tips`, `8 common`) appears across 30+ posts. Pattern wins because:
- Featured-snippet eligible (numbered headings)
- Short to write (1,000–1,500 words)
- High pin-rate / sharability
- Easy schema (`Article` + ordered list)

#### 10 listicles for our queue
1. **"5 Questions to Ask Before Buying Home Builder Software in 2026"**
2. **"7 Construction Scheduling Mistakes That Cost Production Builders Money"**
3. **"3 Ways AI Can Save a Production Builder 10+ Hours a Week"**
4. **"6 Signs Your Spreadsheets Are Holding Your Building Business Back"**
5. **"4 Things to Look for in a Builder Options Engine"**
6. **"8 Bid Management Mistakes Production Builders Keep Making"**
7. **"5 Ways to Reduce Subcontractor No-Shows on a Production Build"**
8. **"7 Reports Every Production Home Builder Should Run Every Monday"**
9. **"4 Reasons Your Design Center Is Losing You Margin"**
10. **"6 KPIs That Predict Whether a Production Builder Will Hit Profit Target"**

Each listicle should: (a) use H2 for each numbered item, (b) include `Article` JSON-LD, (c) link to at least 2 product pages, (d) embed one screenshot or video.

---

### 6. Help / KB Content as SEO Surface

**CoConstruct's secret weapon:** they expose their entire help-center as `/learn-construction-software/*` URLs — at least 200 indexed (probably 1,000+) URLs covering every micro-question users ask. Examples:
- `/learn-construction-software/what-do-clients-see`
- `/learn-construction-software/how-do-comment-alert-emails-work`
- `/learn-construction-software/how-and-when-to-give-your-clients-access`
- `/learn-construction-software/transferring-your-current-estimate-into-coconstruct`

This is **massive long-tail traffic** at near-zero marginal cost (the content already exists internally as support docs).

**Buildertrend has a parallel structure:** `help-article-sitemap.xml` and `help-article-category-sitemap.xml`.

#### Recommendation
- When the app reaches GA, expose every public help-center article at `/help/[slug]` and add to sitemap.
- Until then, write 10–20 "how to do X in [home-builder-software]" guides for searches builders are running today.
- Each guide is 600–900 words, includes a screenshot, and answers exactly one question.

---

### 7. Persona / Segment Landing Pages

CoConstruct has dedicated segment pages: `/home-builders`, `/remodelers`, `/design-build`, `/spec-builder`, `/specialty-contractors`. Buildertrend has `/who-we-serve/`.

**We have:** `/home-builder-project-management-software` (broad), `/ai-for-home-builders` (broad). Missing:
- `/spec-builder-software` (we already differentiate vs custom in `/blog/production-builder-vs-custom-builder-software`; convert that into a segment landing page targeting "spec builder software" intent).
- `/production-home-builder-software` (canonical for our ICP — we should own this slug; it's currently a redirect target only).
- `/multi-community-builder-software` (niche but high-intent for our differentiator).
- `/design-build-firm-software` (intentionally NOT a fit — skip).

---

### 8. Feature-as-Page Landing Pages

CoConstruct has 17 `/features/[X]-software` pages, each targeting one keyword:
- `construction-estimating-software`
- `construction-bidding-software`
- `construction-scheduling-software`
- `construction-proposal-software`
- `construction-selection-software`
- `construction-accounting-integration`
- `construction-communication-software`
- `change-order-software`
- `construction-jobsite-tracking-software`
- `construction-punch-list-software`
- `construction-budgeting-software`
- `construction-invoicing-software`
- `construction-purchase-order-software`

We have 6 module pages (`/construction`, `/sales`, `/purchasing`, `/design`, `/permitting`, `/listing-sheet`) but they're branded by *internal module name*, not by *what users search*.

#### Specific gaps we should add as keyword-targeted landing pages
- `/construction-estimating-software` (huge volume; we could link from `/ai-takeoff`)
- `/construction-bidding-software` (we ship this; we have no page for the keyword)
- `/construction-scheduling-software` (we redirect to `/construction`; should have its own page)
- `/punch-list-software` or `/construction-punch-list-software`
- `/construction-purchase-order-software` (currently a blog post; should be a landing page too)
- `/options-engine-software` (zero competition for this exact phrase; we ship the only real one)
- `/builder-design-center-software` (high commercial intent; specific to home builders)
- `/construction-change-order-software`

Each becomes a thin landing page (~500–800 words) targeting one phrase, linked from the module page and the blog post on the same topic.

---

### 9. Trade-Specific Scheduling Pages

JobTread mines this niche hard:
- `deck-builder-software` (e.g., `burgess-construction-switches-to-jobtread-deck-builder-software`)
- Pool builders (`7-threats-to-running-a-successful-pool-building-business`)
- Roofers (multiple roofer-of-the-year case studies)
- Remodelers (whole content stream)

**For Cornerstone:** trade-specific pages mostly DON'T fit our ICP. We're production home builders, not trade contractors. The exception worth considering:
- `/foundation-contractor-software` — we have foundation-aware scheduling templates as a real differentiator.
- Skip pool/deck/roof. Those are JobTread's lane.

---

### 10. Resource Library

Buildertrend's content arsenal includes dedicated sitemaps for: posts, pages, case studies, **templates**, **ebooks**, help articles, integrations, **podcasts**, press releases, **videos**, **webinars**, product updates, ambassadors. Some of these are huge backlink generators.

**Recommendation for Cornerstone — pick 2 to start, ignore the rest:**
- **Templates page** (`/templates`) — downloadable Excel/CSV templates: vendor master template, scope-of-work template, draw-schedule template, design-center selection template. Every template page is a SERP target ("vendor master template construction") AND a lead-magnet form. **High ROI.**
- **API/integration page expansion** — we have `/api-access` and `/api-docs` but no `/integrations/[partner]` pages. When QuickBooks / Stripe / DocuSign / Outlook integrations ship, each gets its own landing page targeting "[Partner] [our category] integration."

Skip podcasts, ebooks, webinars until we have product-market-fit signal — these eat enormous editorial bandwidth and aren't where production builders actually research software.

---

## Procore-Specific Notes (since we couldn't fetch their sitemap)

Procore's site structure (from public knowledge, not the sitemap) covers:
- Massive `/jobsite/` content hub (their editorial brand) — separate sitemap that 404'd for us.
- Industry pages by trade (`/electrical`, `/mechanical`, `/general-contractors`).
- Solutions by job role (`/owners`, `/specialty-contractors`).
- Heavy template/resource library.
- Multi-region pages (US, Canada, Australia, UK).

**For our ICP this is mostly noise** — Procore's center of gravity is commercial construction. The relevant takeaway: build `/procore-alternative` to absorb the spillover from production-residential builders who looked at Procore and decided it's too commercial.

---

## What Doesn't Apply to Us

Just to be explicit so we don't waste time:
- **Localization / multi-region pages.** Buildertrend has US/AU/Canada variants. We're US-only for now.
- **Industry-by-trade pages** (electrical / mechanical / etc). Production home builders aren't a trade; we're a job-type. Skip.
- **Remodeler content.** JobTread / CoConstruct dominate remodeler. Our positioning ("not for custom or remodel") explicitly forecloses this.
- **Open-source / API-first developer content.** We have `/api-docs`; we don't need a developer blog yet.

---

## Recommended Next Blog Post

Cross-referencing this gap report with `onpage-audit.md`, the **single highest-ROI next post** is:

> **"The Buildertrend / CoConstruct Gap: What Production Home Builders Don't Get from Custom-Builder Software"**

Why:
- Targets the exact "production builder" persona we own.
- Sits inside our strongest commercial cluster (we have `/buildertrend-alternative` and `/blog/buildertrend-vs-cornerstone` already — this would be the third leg of the cluster, with internal links from both).
- CoConstruct + Buildertrend now share a brand → builders are confused → high search volume on "is CoConstruct still a thing" / "Buildertrend vs CoConstruct merger".
- Direct support for our differentiator: production-builder workflow vs custom-builder workflow.
- 1,500–2,000 words, listicle-friendly structure (10 things you don't get), `Article` + `FAQPage` schema, and 6+ internal links into our existing alternative pages and blog posts.

**Runner-up:** *"Markup vs. Margin for Home Builders: How the Math Actually Works"* — broader-funnel, larger volume, but lower commercial intent and longer time-to-rank. Write second.
