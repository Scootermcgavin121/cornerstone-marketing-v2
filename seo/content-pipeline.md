# Content Pipeline — The Non-SLOP Blog Post Runbook

**Purpose:** A repeatable 9-step workflow any future agent (or Scooter) can follow to produce a blog post that is fast to ship, ranks for its target keyword, and doesn't read like AI-generated SEO slop. Every step has explicit acceptance criteria.

**Time budget per post:** 4–6 hours of agent work end to end. Faster after step 1 is reused for related posts in the same cluster.

**Output:** a new `src/app/blog/[slug]/page.tsx`, an addition to `src/app/sitemap.ts`, an updated blog index, a hero image in `public/blog/`, and a single commit pushed to master.

---

## Pre-flight checklist

Before running this pipeline:

- [ ] **Repo confirmed:** working in `C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2` (LIVE repo). Sanity check: `curl -s -o NUL -w "%{http_code}" https://www.cornerstonepm.ai/purchasing` returns `200`.
- [ ] **Target keyword chosen:** one primary phrase, ideally surfaced from `seo/sitemap-gap-report.md`. Examples: `"production builder software"`, `"markup vs margin home builder"`, `"buildertrend vs coconstruct"`.
- [ ] **Cluster identified:** does this post belong to a hub? Pick the hub page it links to (`/home-builder-project-management-software`, `/compare`, or one of the `/ai-*` pages). Hub-and-spoke linking matters.
- [ ] **Brand voice rules loaded** (see `seo/README.md`): direct, no fluff, real product features only, production-builder framing.

---

## Step 1 — SERP analysis (top 5 organic results)

**Goal:** understand what's currently winning for the target keyword. We will out-write the worst, match the best on structure, and fill at least one gap none of them cover.

**Tools:** `web_fetch`. Direct Google search is often blocked; use Bing and DuckDuckGo as proxies. They surface very similar top-5 organic results for commercial-intent queries.

**Procedure:**

```
# Try Bing first — usually accessible
web_fetch https://www.bing.com/search?q=<URL-encoded-keyword>

# Fall back to DuckDuckGo HTML endpoint (no JavaScript)
web_fetch https://html.duckduckgo.com/html/?q=<URL-encoded-keyword>
```

Pull the **first 5 organic results** (skip ads, skip "People Also Ask", skip Reddit/Quora unless they're top 5).

For **each** of the 5 URLs, run:
```
web_fetch <url> extractMode=markdown maxChars=15000
```
Capture:
- Title (and how many times the target keyword appears in it)
- H1 + first 3 H2s
- Approximate word count (count words in the markdown excerpt; multiply if truncated)
- Whether they have a TL;DR / summary block at top
- Whether they have a comparison table
- Whether they include screenshots / images
- Whether they have an FAQ section
- Internal links count (rough estimate)
- One-line take on what the post's actual *angle* is (e.g., "promotional landing page disguised as a guide" / "genuine how-to" / "listicle" / "vendor showdown")

**Acceptance criterion:** before moving to Step 2, you can answer: *"What is the average post in the top 5 doing well, and what are they all missing?"*

If a fetch fails (paywall, JS-only site, 404), substitute the next organic result. If 3+ fetches fail, switch search engine and try again.

---

## Step 2 — Extract commonalities + gaps

**Goal:** turn the 5 raw fetches into a structured competitive frame.

Produce a short scratch table (write to a temp file or just hold in working memory):

| Element | How many of top 5 have it? | Notes |
|---|---|---|
| Definition / what-is section | | |
| Comparison table | | |
| Pricing mentioned | | |
| Specific product screenshots | | |
| FAQ section | | |
| Customer quote / case study | | |
| Listicle structure (numbered) | | |
| Author bio | | |
| Last-updated date | | |
| External authoritative citation | | |

Then write **two short lists**:

**Commonalities** (what we MUST include to be considered a credible answer):
- Examples: "every post defines markup vs margin in the first 200 words" / "every post has a comparison table" / "every post includes a calculator widget."

**Gaps** (what NONE of the top 5 cover, and we can win on):
- Examples: "no post explains how production builder margin math differs from custom-builder margin math" / "no post addresses change orders against design-center freezes" / "no post has actual screenshots from real software."

**Acceptance criterion:** at least 1 strong gap identified. If we can't find a real gap, the topic is too saturated — pick a long-tail variant (add a modifier like "for production builders," "in 2026," "for spec homes") and re-run Step 1.

---

## Step 3 — Generate the full outline (FOR HUMAN APPROVAL)

**Goal:** lock the structure before writing anything. Cheaper to revise an outline than a 1,500-word draft.

**Outline template:**

```
TARGET KEYWORD: <primary phrase>
SECONDARY KEYWORDS: <2-4 related phrases that should appear naturally>
URL: /blog/<slug>
TITLE (≤60 chars, includes primary keyword): <draft>
META DESCRIPTION (≤155 chars, includes primary keyword + value prop): <draft>
HUB PAGE: <which existing page this links to>
WORD COUNT TARGET: <usually 1.2x the average of top 5>
PUBLISH DATE: <today>
HERO IMAGE CONCEPT: <one sentence — generated in Step 7>

H1: <same or near-same as title>

INTRO (3 paragraphs):
- P1: <hook — concrete pain or surprising fact, NOT "in today's market…">
- P2: <state the gap our post fills, named explicitly>
- P3: <one-sentence promise of what the reader gets>

H2: <section 1>
- bullet 1
- bullet 2
- bullet 3

H2: <section 2>
- ...

[repeat for each H2]

H2: How Cornerstone PM handles this  ← always include this section, but keep it ≤25% of total word count
- 3-5 specific real features
- one screenshot or video reference
- 1 internal link to the matching product page

H2: FAQ
- Q1: <natural-language question from PAA / SERP>
- Q2: <…>
- Q3-5: <…>

CTA: <link to /beta with one-sentence pitch>

INTERNAL LINKS (target 5+):
- /<hub-page>: <anchor text>
- /<related-blog-post>: <anchor text>
- /<related-product-page>: <anchor text>
- /<comparison-page>: <anchor text>
- /<another related>: <anchor text>

EXTERNAL CITATIONS (1-2):
- <NAHB stat / industry report / non-competitor source>
```

**Stop and request approval here** if running interactively. If running autonomously as part of a larger task, continue.

**Acceptance criterion:** outline includes (1) target + secondary keywords, (2) at least 4 H2 sections, (3) 5+ internal links named, (4) one explicit gap from Step 2 covered in an H2, (5) a real CTA.

---

## Step 4 — Write the draft

**Goal:** turn the outline into a real post that reads like a human builder talking to other builders.

**Brand voice rules — enforce every paragraph:**

| ✗ DON'T | ✓ DO |
|---|---|
| "In today's fast-paced construction landscape…" | "Production builders run 10–200 homes a year. Software has to keep up." |
| "Leveraging cutting-edge AI solutions…" | "Foreman AI runs the same 47 skills whether you have 5 homes or 200." |
| "Empower your team with seamless workflows" | Cut it. Just describe what the workflow does. |
| Vague benefit language ("save time," "improve efficiency") | Specific numbers + before/after ("a sale that took 30 minutes now takes 60 seconds") |
| Industry-jargon padding | Plain English. If a builder reading this on a phone at a jobsite gets confused, rewrite. |
| Listing every tangentially-related feature | Pick 3–5 features that ACTUALLY relate to the post topic. |
| Inventing features we don't have | Real product features only. If we don't ship it, don't write about it. |
| "Buildertrend / Procore / etc. are bad" | Acknowledge what they do well ("Buildertrend is solid for custom builders and remodelers"). Then explain why production builders need something different. |

**Mechanics:**
- Use `<p>` for body, `<h2>` and `<h3>` for sections (no `<h1>` other than the title).
- One screenshot or video every 600–800 words. If we don't have one, leave a `{/* TODO: screenshot */}` comment.
- Put a `<blockquote>` callout for the single sharpest insight in the post.
- Internal links use descriptive anchor text, NOT "click here" or "learn more."
- External citations link with `target="_blank" rel="noopener"`.

**File template:**
Copy `src/app/blog/production-builder-vs-custom-builder-software/page.tsx` as the structural reference — it's our highest-quality blog post (1,000+ words, has schema, has image, has CTA, has internal links). Keep the same JSX shape.

**Acceptance criteria:**
- ≥ word count target from outline
- ≥ 5 internal links matching the outline
- 1+ external citation
- Real, specific feature mentions (no invented capabilities)
- No `&mdash;€` / `&ldquo;€` encoding bugs (these creep in when copy-pasting from Word/Notion — search the file before saving)

---

## Step 5 — Add JSON-LD schema

**Goal:** every blog post emits at minimum `Article` + `BreadcrumbList` + `ImageObject`. Add `FAQPage` if the post has a real FAQ section.

**Pattern — drop into the page.tsx near the top of the JSX:**

```tsx
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "<post title>",
  image: "https://www.cornerstonepm.ai/blog/<image-filename>",
  datePublished: "2026-MM-DDT00:00:00.000Z",
  dateModified: "2026-MM-DDT00:00:00.000Z",
  author: { "@type": "Organization", name: "Cornerstone PM" },
  publisher: {
    "@type": "Organization",
    name: "Cornerstone PM",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cornerstonepm.ai/logo.png",
    },
  },
  description: "<meta description>",
  mainEntityOfPage: "https://www.cornerstonepm.ai/blog/<slug>",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cornerstonepm.ai" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.cornerstonepm.ai/blog" },
    { "@type": "ListItem", position: 3, name: "<post title>", item: "https://www.cornerstonepm.ai/blog/<slug>" },
  ],
};

// If the post has an FAQ section:
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "<question 1>",
      acceptedAnswer: { "@type": "Answer", text: "<plain-text answer 1>" },
    },
    // ... more
  ],
};
```

In the JSX `<main>` body, render each:
```tsx
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
{faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
```

**Reference implementation:** see `src/app/blog/production-builder-vs-custom-builder-software/page.tsx`.

**Acceptance criterion:** validate the JSON before commit using https://validator.schema.org/ or `JSON.parse()` in a quick node sanity check.

---

## Step 6 — Internal links to hub pages

**Goal:** every blog post should pass link equity into our high-value commercial pages.

**Required internal links per post (5 minimum):**

1. **Hub page** — `/home-builder-project-management-software` (the most authoritative SEO page) OR a more specific hub if the post topic is narrower (e.g., `/ai-construction-management` for AI posts).
2. **`/compare`** — almost always relevant; comparison content matches reader intent at decision stage.
3. **One relevant `/ai-*` page** — `/ai-scheduling`, `/ai-new-home-sales`, `/ai-construction-purchasing`, `/ai-takeoff`, etc.
4. **One product/module page** — `/foreman`, `/listing-sheet`, `/purchasing`, etc.
5. **One related blog post** — find via the existing blog index; cross-linking blog posts to each other improves rankings on both.

Use **descriptive anchor text** that includes the linked page's primary keyword. Bad: `<Link href="/foreman">click here</Link>`. Good: `<Link href="/foreman">Foreman AI's 47-skill toolkit</Link>`.

**Acceptance criterion:** Cmd-F the file for `<Link` and count ≥5 internal links to non-blog pages, plus 1 to a related blog post.

---

## Step 7 — Hero image generation + alt text

**Goal:** every post has a 1200×630 (or close) hero image with proper alt text. OG image and Article schema both reference it.

**Two paths:**

### Path A — generate with `image_generate`
```
image_generate
  prompt: "<concrete visual description tied to the post topic — NOT abstract>"
  aspectRatio: 16:9
  filename: <slug>.png
```

Move the generated file into `public/blog/<slug>.png`.

**Prompt-writing rules:**
- Specific subject ("a kitchen with marble counters and brass fixtures, photographed from the doorway in soft afternoon light").
- NOT "a beautiful kitchen" / "a modern construction office" / "AI-themed abstract."
- For comparison posts: split-screen or side-by-side imagery.
- For technical posts: a clean diagram or a real-looking software UI.
- Avoid stock-photo handshakes, hard-hat-pointing, blueprints-with-coffee-mug clichés. They tank trust.

### Path B — use existing screenshots
If the post is product-feature focused, an existing screenshot from `public/screenshots/` or `public/mockups/` is better than a generated image. Real screenshots beat generated art on conversion every time.

### Alt text
- Describe the image, not the post.
- Include 1 keyword if natural, never stuff.
- Length: 80–125 characters.
- Bad: `"AI construction management software for home builders"`. Good: `"Foreman AI dashboard showing 47 skills grouped across scheduling, sales, purchasing, and design center"`.

**Acceptance criterion:** image is in `public/blog/`, file is < 400KB (run through compression if needed), alt text is descriptive and not stuffed.

---

## Step 8 — Add to blog index + sitemap.ts

**Files to update:**

### 1. Blog index — `src/app/blog/page.tsx`
Add the new post to the posts array. Match the existing data shape exactly. Order by date (newest first). Set the correct category badge ("AI & Technology", "Comparison", "Operations", etc.).

### 2. Sitemap — `src/app/sitemap.ts`
Add a new entry to the `routes` array:
```ts
{ url: "/blog/<slug>", priority: 0.7, changeFrequency: "monthly" as const },
```
Use `priority: 0.7` for blog posts (matches existing convention). Use `changeFrequency: "monthly"` for new posts (downgrade to `"yearly"` after 6 months when the post has stabilized).

### 3. Verify the post renders
```powershell
cd C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2
npm run build
```
Build must succeed with no errors. If TypeScript or ESLint complains, fix before committing — Vercel will fail on build errors and the post won't ship.

**Acceptance criteria:**
- Blog index shows the new post in the right position.
- `sitemap.ts` includes the new URL.
- `npm run build` succeeds.
- Local preview (if available) renders the post correctly: H1, hero image, body content, schema in `<head>`, internal links work, CTA links to `/beta`.

---

## Step 9 — Commit + push

**Goal:** ship the post. Vercel auto-deploys on push to master.

```powershell
cd C:\Users\scott\.openclaw\workspace\cornerstone-marketing-v2
git config user.name "Website Builder"
git config user.email "scottbuescher@gmail.com"

git add src/app/blog/<slug>/page.tsx
git add src/app/blog/page.tsx
git add src/app/sitemap.ts
git add public/blog/<slug>.png

# Single commit message — describe the post topic, not the file changes
git commit -m "feat(blog): add post on <topic> targeting <primary keyword>"

# Verify push succeeds
git push origin master
```

**Verification (60–120 seconds after push):**
1. Watch Vercel for the new deployment to finish.
2. `curl -s -o NUL -w "%{http_code}" https://www.cornerstonepm.ai/blog/<slug>` returns `200`.
3. View the page; confirm hero image loads.
4. View page source; confirm all 2–3 JSON-LD blocks are present and valid.
5. (Optional) Submit the URL to Google Search Console for accelerated indexing.

**If you don't push, the post doesn't ship.** This is the most-skipped step. Always finish with a confirmed `git push`.

---

## Anti-SLOP final pass (read before committing)

Skim the draft once more with these specific filters. If you hit a yes on any, fix it.

- [ ] Does any sentence start with "In today's…" or "In an increasingly…"? **Cut it.**
- [ ] Are there phrases like "leverage," "synergize," "robust," "seamless," "cutting-edge," "comprehensive solution"? **Cut and replace with concrete language.**
- [ ] Does any paragraph use 3+ adjectives in a row to describe a feature? **Trim to 1 adjective + a specific noun.**
- [ ] Does the post mention any product capability we don't actually ship? **Remove it.**
- [ ] Does the post talk about builders generically when it should be specific to **production** builders? **Tighten.**
- [ ] Could a builder read this on a phone, between calls at a jobsite, and finish a section in under 90 seconds? **If not, the section is too long or too dense.**
- [ ] Is there at least one specific number, real example, or screenshot? **Without one, the post reads as AI-generated.**
- [ ] Is the meta description ≤155 chars and includes the target keyword? **Verify exact char count.**

If 6+ of the above pass, the post is shipping-quality.

---

## Cluster-building tip (post-launch)

After a post ships:
- Add internal links FROM existing related blog posts and product pages TO the new post. This is the most-skipped post-launch optimization. New posts have zero inbound links until you wire them up.
- Tweet/post the new content from `@cornerstonepm` and Instagram (`@cornerstone_pm_ai`) to seed indexation.
- 30 days later, check Search Console for the post's first ranking keywords; consider a follow-up post on adjacent long-tail.

---

## When NOT to use this pipeline

- **Customer case studies** use a different pattern (real interview → quote-driven structure → outcome metrics). Document separately when we ship the first one.
- **Product launch announcements** can skip steps 1–2 (no SERP analysis needed) but should still hit steps 5, 6, 8, 9.
- **Listicles** can compress steps 3–4 (the structure is the listicle; just write the items). Still do schema + linking + push.
- **Updates to existing posts** don't need a new sitemap entry; just update `lastModified` in the metadata and bump `dateModified` in the schema.
