# Tracks B–F Readiness — What's Needed to Unlock the Rest of the Program

**Status:** All 5 tracks blocked on external API access or curated input lists. Track A is shipping in this commit; B–F are queued and ready to start as soon as credentials land.

---

## At-a-glance

| Track | What | Cost (est.) | Blocked on | Time to first deliverable |
|---|---|---|---|---|
| B | DataForSEO keyword research | $30–50/mo at our usage | DataForSEO API key | 1 day after key |
| C | DataForSEO backlink audit | $20–40 one-shot | DataForSEO API key | 1 day after key |
| D | Apify journalist prospecting | $49/mo Apify + $5–15 in actor runs | Apify token | 1–2 days after token |
| E | Guest post production pipeline | covered by D's Apify + agent time | Apify token + curated target site list | 3–5 days for first guest post draft |
| F | Backlink prospecting & outreach | covered by B+D budgets | Both keys + initial outreach mailbox | 1 week to first outreach round |

**Total monthly tooling cost at full Track B–F operation: ~$80–120/mo + agent time.**

---

## Track B — DataForSEO keyword research

### Goal
Build a real keyword universe for Cornerstone PM: search volume, keyword difficulty, intent classification, SERP feature analysis, and topic clustering at scale. Output is a prioritized keyword backlog that feeds the content pipeline (Track A's `content-pipeline.md`) for the next 12+ months.

### What we'd produce

1. **`seo/keyword-universe.csv`** — 2,000–5,000 keywords for our category, with columns: keyword, monthly search volume (US), keyword difficulty, CPC, intent (informational/commercial/transactional/navigational), top 3 ranking domains, SERP features (PAA, featured snippet, video, etc.), our current rank.
2. **`seo/keyword-clusters.md`** — keywords grouped into 30–50 topic clusters with a recommended hub-and-spoke structure for each.
3. **`seo/keyword-priority-queue.md`** — top 100 keywords ranked by `(volume × intent × winnability) / difficulty`, with recommended page type (new blog post / new landing page / improve existing page) for each.
4. **Quarterly refresh** — re-pull volumes and our rank to track movement.

### Why these specific endpoints / what we'd hit

DataForSEO endpoints we'd use:
- `/keywords_data/google/search_volume/live` — bulk volume lookup for seed keywords
- `/keywords_data/google_ads/keywords_for_keywords/live` — expansion from seeds
- `/dataforseo_labs/google/related_keywords/live` — related-question discovery
- `/serp/google/organic/live/regular` — top 10 SERP results per keyword
- `/dataforseo_labs/google/keyword_difficulty/live` — difficulty scores
- `/serp/google/locations` (one-time) to confirm location IDs

### Estimated cost
DataForSEO is per-request pricing. Rough usage at our scale:
- 5,000 keywords × volume lookups: ~$0.50–1.50
- 100 priority keywords × full SERP analysis: ~$5–10
- Quarterly refresh of all of the above: ~$10/quarter
- **Total Track B initial run: ~$20–30. Quarterly maintenance: ~$10–20.**

DataForSEO offers a $1 trial credit for new accounts — enough to validate the integration before committing.

### What we need from Scooter to start
- [ ] DataForSEO account (sign up at dataforseo.com)
- [ ] API login + password (they use Basic auth, not bearer tokens)
- [ ] Confirmation we can store credentials in the agent's secret store

### Integration sketch
A small Node script in `seo/_b-keyword-research.js` (mirrors `seo/_audit.js` style) that:
1. Reads seed keywords from a hand-curated `seo/seeds.txt` (e.g., "home builder software", "production builder", "construction scheduling", "buildertrend alternative", etc. — start with ~30 seeds we already know matter).
2. Calls DataForSEO endpoints in batches.
3. Writes results to JSON + CSV in `seo/`.

---

## Track C — DataForSEO backlink audit

### Goal
Quantify our current backlink profile and benchmark against top 3 competitors (Buildertrend, JobTread, CoConstruct). Identify (1) toxic links to disavow, (2) high-value linking domains to deepen the relationship with, (3) link-building targets that link to competitors but not us.

### What we'd produce

1. **`seo/backlinks-current.csv`** — every domain linking to cornerstonepm.ai, with: source domain, source URL, target URL on our site, anchor text, DR estimate, first-seen date, last-seen date.
2. **`seo/backlinks-competitor-overlap.md`** — domains linking to ≥2 of (Buildertrend, JobTread, CoConstruct) but NOT to us. These are the highest-probability outreach targets — the domain has already shown willingness to link to construction-software companies.
3. **`seo/backlinks-toxic.md`** — links from spam domains, scraper sites, or PBNs we should disavow via Google Search Console.
4. **`seo/backlinks-trends.md`** — quarterly tracking of new/lost links.

### Endpoints
- `/backlinks/summary/live` — domain-level summary
- `/backlinks/backlinks/live` — full backlink list (paginated, can be expensive)
- `/backlinks/anchors/live` — anchor text distribution
- `/backlinks/domain_intersection/live` — competitor overlap (this is the gold one)
- `/backlinks/referring_domains/live` — for trend tracking

### Estimated cost
- Initial audit (us + 3 competitors): **$15–25 one-shot**
- Quarterly refresh (just us, anchors, new/lost links): ~$5/quarter

### What we need from Scooter to start
Same as Track B (DataForSEO credentials). One key unlocks both.

### Caveat
DataForSEO's backlink data is sourced from their own crawlers + partner networks. It's slightly less complete than Ahrefs/Majestic at the very long tail but plenty good for our use case (finding outreach targets, not academic completeness).

---

## Track D — Apify journalist prospecting

### Goal
Build a curated list of journalists, podcast hosts, and trade-publication editors covering home building, construction tech, or builder operations — with their current beat, last 5 published pieces, contact email/social, and a relevance score. Use this list to seed PR outreach (HARO-style, expert quotes for trade publications, podcast guest pitches).

### What we'd produce

1. **`seo/journalists-master.csv`** — 50–200 contacts with: name, outlet, beat, recent articles, Twitter/LinkedIn/email, last seen active.
2. **`seo/journalists-tier1.md`** — top 20 most relevant for our positioning (production home builder, construction tech, AI in construction). For each: 1-paragraph dossier on what they cover and a draft pitch angle.
3. **`seo/journalists-podcasts.md`** — separate list of construction/builder podcast hosts open to guests.
4. **Refresh every 60 days** to catch beat changes.

### Apify actors we'd use
- **Twitter scraper** ($0.40 per 1,000 tweets) — pull recent tweets for journalists in the construction tech beat to confirm they're active
- **LinkedIn search scraper** (~$0.50 per 100 results) — find people with titles like "Editor, BUILDER Magazine" or "Senior Reporter, Construction Dive"
- **Generic web scraper** (free tier covers our usage) — pull author bios from publication mastheads
- **Podcast directory scraper** — pull host info from Apple Podcasts / Spotify

### Sources we'd target
- BUILDER Magazine (BuilderOnline.com)
- Pro Builder
- Custom Builder magazine
- Construction Dive
- ENR (Engineering News-Record) — when they cover residential
- Builder and Developer
- Professional Builder
- The Hartman Income REIT Real Estate Roundtable
- NAHB.org press contacts
- Houzz Pro newsroom
- HomeBuilderDigest.com
- Construction Executive
- Podcasts: Builder Funnel Radio, The Tim Faller Show, Modern Craftsman, Construction Brothers, Builder Stories Podcast (JobTread's own — can't pitch), The Build Show Podcast

### Estimated cost
- Apify subscription: **$49/mo** (Personal plan, covers our usage volume)
- Actor compute credits: $5–15 per refresh cycle
- **Total: ~$55–65/mo** during active outreach phases

### What we need from Scooter to start
- [ ] Apify account + API token
- [ ] Confirmation of OK to store the token in the agent's secret store
- [ ] One-time approval of the publication target list above (any to add/remove?)

---

## Track E — Guest post production pipeline

### Goal
Produce 1 high-quality guest post per month, placed on a relevant publication, anchored to one of our hub pages. Each successful placement is a domain-authority-boosting backlink AND a brand exposure.

### What we'd produce

1. **`seo/guest-post-targets.md`** — vetted list of 20–30 publications that accept guest contributions, ranked by domain authority + audience-fit for production builders.
2. **For each placement attempt:**
   - Pitch email (3 angles offered to the editor)
   - 1,200–2,500 word draft tailored to the publication's voice (NOT a marketing piece)
   - Author bio with a single link back to a Cornerstone hub page
   - Schema on the version we host on our site (when applicable — guest post archive)
3. **Tracking sheet** — pitches sent, responses, placements, links earned, traffic from each placement.

### Process per guest post (5–7 days end to end)
1. Pick a target publication from the list (Track D output) and a primary topic from the keyword universe (Track B output).
2. Read the publication's last 10 pieces to absorb their voice + topic patterns.
3. Pitch 3 angles in a single short email; wait for editor response.
4. Once an angle is approved, draft using the same anti-SLOP rules as `content-pipeline.md` step 4.
5. Submit, accept editor revisions, finalize.
6. Once published, log the link in our tracking sheet and add a `Mention` to our internal "press" page (when one exists).

### Cost
No new tooling beyond Track D. Time-cost: ~6–10 hours of agent work per placement attempt, including 3–5 attempts that get rejected per 1 placement.

### What we need from Scooter to start
- [ ] Apify token (from Track D)
- [ ] OK to send outbound pitch emails from `scottbuescher@gmail.com` (or a dedicated address like `press@cornerstonepm.ai`)
- [ ] Approval of the topic angles before pitching (low-touch — email 1x/week with the next 2–3 pitch angles)
- [ ] One-time decision on whether the agent or Scooter will be the byline on guest posts. (Recommend Scooter — founder bylines convert better and editors prefer them. Agent does the writing; Scooter approves the final draft.)

---

## Track F — Backlink prospecting & outreach

### Goal
Earn 5–15 high-quality backlinks per quarter through three repeatable outreach motions:

1. **Comparison-page outreach** — find pages that list "best home builder software" and aren't ranking us. Pitch our addition.
2. **Broken-link replacement** — find broken links on construction-industry sites where our page is a relevant replacement.
3. **Alternative-page mentions** — where competitors are listed but we're not (especially "Buildertrend alternatives" / "JobTread alternatives" type roundups).

### What we'd produce

1. **`seo/outreach-comparison-targets.md`** — list of "best of" / "top X" comparison pages where we should be listed.
2. **`seo/outreach-broken-link-targets.md`** — broken-link opportunities identified weekly.
3. **`seo/outreach-templates/`** — three pitch templates (one per motion), kept short and human.
4. **Tracking sheet** — outreach sent, replies, links earned, source motion.

### Tools
- **DataForSEO** for finding comparison pages (`/serp/google/organic/live` for queries like `"home builder software" "list" -site:cornerstonepm.ai`).
- **Apify** for broken-link checking (Apify has a broken-link-checker actor).
- **DataForSEO `/backlinks/competitor_intersection`** for finding sites that link to multiple competitors but not us.

### Cost
Covered by Track B (DataForSEO) + Track D (Apify) budgets. Time: ~3–5 hours per outreach round.

### What we need from Scooter to start
- [ ] DataForSEO + Apify keys (from B and D)
- [ ] Decision on outreach mailbox (recommend setting up `partnerships@cornerstonepm.ai` so reply traffic doesn't clutter the personal Gmail)
- [ ] Approval of the 3 pitch templates before sending
- [ ] Cadence preference — recommend 1 outreach round per week of ~10 emails, total ~40/month. Higher volume risks looking spammy.

---

## Recommended sequencing once credentials land

If we get the green light tomorrow, here's the optimal order:

**Week 1**
- Track B initial keyword pull (1 day) → produces the keyword universe.
- Track C initial backlink audit (1 day) → produces the competitor-overlap target list.
- Outputs feed Track A's content-pipeline immediately (more informed topic priorities).

**Week 2**
- Track D first journalist sweep (2 days) → produces the contact list.
- Track A: ship the first 1–2 blog posts using fresh keyword data from Track B.

**Week 3**
- Track E: pitch the first guest post (using Track D's contacts + Track B's topic list).
- Track F: first outreach round to comparison pages identified by Track C's competitor-intersection.

**Week 4 onward**
- Steady state: 2 blog posts/month from Track A, 1 guest post/month from E, 10 outreach emails/week from F, monthly refresh on B/C/D.

---

## Failure modes to plan for

- **DataForSEO rate limits.** They throttle aggressive bulk queries. Build in retry-with-backoff from day one.
- **Apify actor flakiness.** Twitter scraping in particular is fragile (anti-bot measures). Always have a fallback actor or a manual-curation backup.
- **Editor non-responses.** Plan for ~70% pitch rejection or non-response. Build the target list with this in mind (need 4–5 attempts per placement).
- **Stale credentials.** Set a calendar reminder to verify keys quarterly. APIs do rotate.
- **Outreach domain reputation.** If the outreach mailbox starts getting marked spam, slow down or move to a different domain. Don't burn the primary `cornerstonepm.ai` reputation.
