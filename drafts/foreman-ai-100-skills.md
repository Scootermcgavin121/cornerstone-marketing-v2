# DRAFT: Foreman AI Hits 100 Skills — The First Construction AI to Cross Triple Digits

**STATUS:** Draft — not yet shipped. Hold until skill #100 actually lands in Foreman.

**WHEN TO PUBLISH:**
1. Skill #100 ships in the app
2. Confirm exact count and skill name with Foreman maintainer
3. Update placeholders below (marked `[CONFIRM]`)
4. Move this file to `src/app/blog/foreman-ai-100-skills/page.tsx` using `foreman-ai-83-skills/page.tsx` as the template
5. Add entry to `src/app/blog/page.tsx` posts array (top of list)
6. Add entry to `src/app/sitemap.ts`

**SUGGESTED PUBLISH DATE:** Whatever the actual ship date is

---

## SEO METADATA

- **Title:** Foreman AI Hits 100 Skills — The First Construction AI to Cross Triple Digits | Cornerstone PM™ Blog
- **Meta description:** Foreman AI just crossed 100 purpose-built construction skills across 11 categories — including the new Setup Lighting Package skill that knows which fixtures belong in which rooms. No other construction AI agent is close.
- **OG image:** `/blog/foreman-ai-100-skills.png` (generate when ready — same style as foreman-ai-skills.png)
- **Slug:** `foreman-ai-100-skills`
- **Canonical URL:** https://www.cornerstonepm.ai/blog/foreman-ai-100-skills

---

## OPENING HOOK

Six weeks ago Foreman AI shipped with 45 skills. Three weeks ago we hit 83. Today Foreman crossed **100 purpose-built construction skills** across 11 categories — and as far as we can tell, no other construction AI agent is in the same neighborhood. Most "AI features" in builder software are a chat box wired to ChatGPT. Foreman is a hundred specific tools that read and write your real Cornerstone data.

The math: from 0 skills to 100 in roughly 90 days. That's not a hiring spree — it's because Foreman is built **into** the platform. New endpoints, new skills, new actions. No bolt-ons, no plugins, no third-party agent layer.

## STAT CALLOUT

| 100 | 11 | 110+ | 0 |
|---|---|---|---|
| Purpose-built skills | Capability categories | Live database tables | Bolt-ons or plugins |

## STAR SKILL: Setup Lighting Package

The skill that pushed us over the line is one of the more interesting ones Foreman has ever shipped: **`setupLightingPackage`**.

You give Foreman a home (or a floorplan + spec level) and a single command. Foreman builds the entire lighting plan, fixture by fixture, room by room:

- **Living areas** → recessed LED cans with appropriate spacing
- **Kitchen** → pendants over the island, recessed cans over work zones, under-cabinet strips
- **Bathrooms** → vanity bars above each sink, sealed cans in showers, exhaust fan-light combos
- **Bedrooms** → ceiling fan-light combos with fan-rated boxes
- **Hallways** → sconces or flush mounts at appropriate intervals
- **Foyer** → chandelier or pendant cluster
- **Exterior** → coach lights at entries, soffit lighting, garage lights

Then it pulls the actual fixtures from **your real catalog** and assembles the package against the right design options. No more manually picking 40+ fixtures per home.

That kind of domain awareness — "I know what kind of fixture goes in a bathroom because I know what a bathroom is in a residential floorplan" — isn't something you get from wiring ChatGPT to a database. That's the difference between a chatbot and an agent purpose-built for home builders.

## WHY 100 ISN'T A VANITY NUMBER

Most of the construction software industry is shipping "AI" by wiring up a chat box. Foreman has shipped **100 separate construction actions** the agent can take on real data:

- Full CRUD on takeoffs, parts, vendors, homes, options, scope items, bids, POs, tasks, selections
- AI-powered analysis: vendor scorecards, profitability reports, budget variance, sales pipeline analysis, spec-level margin comparison, options gap analysis
- Document generation: SOWs, bid invitations, comparison reports, punch lists, MLS sheets, lighting packages, Excel exports, PDF reports
- System intelligence: persistent per-user memory, memory compaction, smart data linking, dedup, anti-bot web scraping, image vision, error recovery
- Undo + action history — because letting an agent touch production data only works if you can roll it back

Every skill is one more job that doesn't need a spreadsheet, a separate tool, or a phone call.

## THE COMPACTION ADVANTAGE (STILL NOBODY ELSE HAS IT)

Every other construction AI runs into the same wall: long sessions either crash, forget the early context, or quietly start hallucinating. Foreman has **built-in memory compaction** — it auto-summarizes older messages mid-session so the recent context stays word-for-word intact. You can keep working through a 200-option cleanup or a full catalog import without restarting.

The third hour into a marathon session, when everyone else's AI is dropping context and yours is still tracking everything you said at the start — that's when 100 skills with persistent context actually compounds.

## WHAT'S NEXT

The skill catalog grows every week. We're not slowing down at 100. Pipeline includes [CONFIRM with Foreman roadmap before publish]:

- Deeper sales analytics
- Additional report generators
- Richer vendor workflows
- Schedule optimization skills

The number on this page will be wrong again soon — in the right direction.

## CTA

Pro plan ($499/mo flat, unlimited users) includes every skill listed here. The 2-year free beta is open for the first 100 home builders.

[Get Beta Access →] [See the full skill catalog →]

---

## SOCIAL POSTS TO SHIP ALONGSIDE

**LinkedIn:**
> Foreman AI just crossed 100 skills. As far as we can tell, no other construction AI agent is close.
>
> Why does that matter? Most "AI" in builder software is a chat box wired to ChatGPT. Foreman is a hundred specific construction actions — full CRUD on takeoffs, vendor scorecards, bid comparisons, profitability analysis, image vision, anti-bot web scraping, and now a fixture-by-fixture lighting package generator that knows which lights belong in which rooms.
>
> [link]

**Instagram caption:**
> 💯 Foreman AI just hit 100 construction skills. That's 100 real actions our AI agent can take on your Cornerstone data — not chat replies, not summaries. The newest skill builds a complete fixture-by-fixture lighting package for any home in one command. #ConstructionAI #HomeBuilders #BuilderSoftware

---

## INTERNAL NOTES

- This post should reuse the structure of `foreman-ai-83-skills/page.tsx` for consistency
- Add a small "Series" note at the top of both this post AND the 83-skills post linking them: "Part of the Foreman AI milestone series."
- Once skill #100 ships, also update everywhere on the marketing site: `99+` → `100+` (or whatever the new actual count is)
- If we ship more than #100 in the same drop, the headline can pivot: e.g. "Foreman AI Hits 105 Skills"
- Lighting Package screenshot: would be nice to capture a screen recording of the prompt → result and embed via `VideoPlayer`
