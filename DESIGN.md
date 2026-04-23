---
name: Cornerstone PM Marketing Site
colors:
  background: "#020817"        # slate-950 — primary page background
  surface: "#0f172a"           # slate-900 — card/section backgrounds
  surfaceAlt: "#1e293b"        # slate-800 — borders, dividers
  textPrimary: "#ffffff"       # white — headlines, primary text
  textSecondary: "#94a3b8"     # slate-400 — body copy, descriptions
  textMuted: "#64748b"         # slate-500 — captions, metadata
  accentPrimary: "#22d3ee"     # cyan-400 — primary brand accent, CTAs, links
  accentPrimaryDark: "#0e7490" # cyan-800 — CTA hover shadows
  accentAmber: "#fbbf24"       # amber-400 — Foreman AI theme
  accentViolet: "#a78bfa"      # violet-400 — Blueprint AI / Design Center theme
  accentEmerald: "#34d399"     # emerald-400 — Purchasing / success states
  accentPink: "#f472b6"        # pink-400 — Sales & Marketing skills
  accentBlue: "#60a5fa"        # blue-400 — Data Intelligence
  accentOrange: "#fb923c"      # orange-400 — Utility / web scraping
  danger: "#f87171"            # red-400 — strikethrough competitor prices, errors
typography:
  fontFamily: "Inter"
  h1:
    fontSize: "4.5rem–7rem"    # text-7xl sm:text-8xl
    fontWeight: 900            # font-black
    tracking: "tight"
    lineHeight: 1.05
  h2:
    fontSize: "2.25rem–3.75rem" # text-4xl sm:text-6xl
    fontWeight: 900
  h3:
    fontSize: "1.25rem"        # text-xl
    fontWeight: 700            # font-bold
  body:
    fontSize: "1rem–1.25rem"   # text-base to text-xl
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontSize: "0.75rem"        # text-xs
    fontWeight: 700
    letterSpacing: "0.08em"
    textTransform: "uppercase"
rounded:
  card: "1rem"                 # rounded-2xl (16px) — standard card
  button: "9999px"             # rounded-full — CTA buttons
  input: "0.75rem"             # rounded-xl — form inputs, inner elements
  badge: "9999px"              # rounded-full — pill badges
  icon: "0.75rem"              # rounded-xl — icon containers
spacing:
  sectionY: "6rem"             # py-24 — standard section vertical padding
  cardP: "1.5rem–2rem"         # p-6 to p-8 — card internal padding
  gap: "1.5rem"                # gap-6 — standard grid gap
  maxWidth: "72rem"            # max-w-6xl — standard content width
  maxWidthNarrow: "56rem"      # max-w-4xl — hero/centered content
---

## Overview

Dark, premium, modern SaaS aesthetic. The site uses a near-black background (slate-950) with subtle surface layers for depth. One primary accent color (cyan-400) drives CTAs and brand recognition. Feature modules each have their own accent color for visual distinction. All design choices prioritize clarity and trust for a B2B audience of home builders.

## Colors

**Background system:**
- `bg-slate-950` (#020817) — page background. Never use pure black.
- `bg-slate-900` or `bg-slate-900/60` — card/section surfaces. Use `/60` opacity for layered cards over dark backgrounds.
- `border-slate-800` — standard card borders. Use `border-slate-700` for hover states.

**Accent colors — each feature module has one:**
- **Cyan** (`cyan-400`, `cyan-500`) — primary brand, CTAs, hero elements, homepage sections
- **Amber** (`amber-400`, `amber-500`) — Foreman AI agent exclusively
- **Violet** (`violet-400`, `violet-500`) — Blueprint AI and Design Center
- **Emerald** (`emerald-400`, `emerald-500`) — Purchasing & Budgets
- **Cyan** — Sales Pipeline (shares primary brand color)
- **Orange** (`amber-500`) — Construction Scheduling

**Text hierarchy:**
- Headlines: `text-white font-black`
- Subheadlines/descriptions: `text-slate-400`
- Captions/metadata: `text-slate-500`
- Accented text in headlines: use the module accent color

**Gradients:** Use `bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.07)_0%,transparent_65%)]` for hero background glows. Substitute the RGBA color for the module accent. Keep opacity low (0.05–0.12).

## Typography

Font: **Inter** (Google Fonts, loaded via next/font). No other typefaces.

- **Hero headlines:** `text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight`
- **Section headlines:** `text-3xl sm:text-4xl font-black`
- **Card headlines:** `text-xl font-bold` or `text-lg font-bold`
- **Body copy:** `text-slate-400 leading-relaxed` (never plain text-white for paragraphs)
- **Label pills:** `text-xs font-semibold uppercase tracking-widest` in module accent color
- **CTA buttons:** `font-bold text-lg`

Avoid justified text. Always use left-align for body copy. Center-align hero sections only.

## Components

### CTA Buttons
**Primary (filled):**
```
px-8 py-4 rounded-full bg-cyan-400 text-slate-900 font-bold text-lg
hover:bg-cyan-300 transition-all duration-200
shadow-lg shadow-cyan-500/30 hover:-translate-y-0.5
```
Use the module accent color in place of cyan for module-specific pages.

**Secondary (outlined):**
```
px-8 py-4 rounded-full border border-slate-700 text-slate-300
font-semibold text-lg hover:border-slate-500 hover:text-white
transition-all duration-200
```

**Inline text link:**
```
text-cyan-400 font-semibold hover:text-cyan-300 transition-colors
```
(substitute accent color for module pages)

### Cards
**Standard feature card:**
```
p-6 rounded-2xl bg-slate-900/60 border border-slate-800
hover:border-[accent]/30 transition-all duration-300
```

**Spotlight/hero card (accent tinted):**
```
rounded-2xl bg-[accent]/5 border border-[accent]/20 p-8
```

**Pricing card (highlighted):**
```
rounded-2xl bg-slate-900 border-2 border-cyan-500/50
shadow-xl shadow-cyan-500/10
```

### Label Pills / Badges
```
inline-flex items-center gap-2 px-4 py-1.5 rounded-full
bg-[accent]/10 border border-[accent]/30
text-[accent] text-sm font-semibold uppercase tracking-widest
```

### Icon Containers
```
w-12 h-12 rounded-xl bg-[accent]/10 border border-[accent]/20
flex items-center justify-center
```
Icon inside: `w-5 h-5 text-[accent]`

### Section Structure
Every section follows this pattern:
```tsx
<section className="relative py-24 px-4 [bg-class] overflow-hidden">
  {/* Optional: radial gradient glow */}
  <div className="absolute inset-0 bg-[radial-gradient(...)]" />
  <div className="relative max-w-6xl mx-auto">
    {/* Optional: centered header */}
    <div className="text-center mb-16">
      <div className="inline-flex ... label pill ... mb-6">Label</div>
      <h2 className="text-4xl sm:text-6xl font-black mb-4">Headline</h2>
      <p className="text-slate-400 max-w-2xl mx-auto">Subtext</p>
    </div>
    {/* Content grid */}
  </div>
</section>
```

### Grids
- **3-column features:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`
- **4-column stats:** `grid grid-cols-2 sm:grid-cols-4 gap-6`
- **2-column split:** `grid grid-cols-1 lg:grid-cols-2 gap-12 items-start`

### Check Lists
```tsx
<div className="flex items-start gap-3">
  <Check className="w-4 h-4 text-[accent] flex-shrink-0 mt-0.5" />
  <span className="text-slate-300 text-sm">{item}</span>
</div>
```

## Module Color Mapping

| Module | Accent | Page |
|--------|--------|------|
| Foreman AI | amber-400 | /foreman |
| Blueprint AI | violet-400 | /ai-takeoff |
| FAQ Chatbot | cyan-400 | — |
| Sales Pipeline | cyan-400 | /sales |
| Construction | amber-500 | /construction |
| Purchasing | emerald-400 | /purchasing |
| Design Center | violet-400 | /design |
| MLS Listing | cyan-400 | /listing-sheet |
| Compare | cyan-400 | /compare |
| Blog | varies by tag | /blog |

## Special Patterns

**Competitor comparison rows (pricing/compare):**
- Competitor prices: `line-through text-slate-600`
- Cornerstone price: `text-cyan-400 font-bold`

**Stat blocks:**
```
text-3xl font-black text-[accent] mb-1   ← number
text-white font-semibold text-sm mb-1    ← label
text-slate-500 text-xs                   ← subtext
```

**Example prompt boxes:**
```
p-4 rounded-xl bg-slate-900 border border-slate-800
border-l-4 border-l-[accent]
text-slate-300 text-sm italic
```

**"Industry First" / "New" badge pattern:**
```
inline-flex items-center gap-2 px-3 py-1 rounded-full
bg-[accent]/10 border border-[accent]/30
text-[accent] text-xs font-bold uppercase tracking-widest
```

## What to Avoid

- ❌ Pure `bg-black` — use `bg-slate-950`
- ❌ `text-white` for body copy — use `text-slate-400`
- ❌ Raw unicode special characters (→ ← · —) — use HTML entities (`&rarr;` `&larr;` `&middot;` `&mdash;`)
- ❌ Emoji in JSX — use lucide-react icons or text alternatives
- ❌ `min-h-screen flex items-center` on two-column layouts — columns misalign; use `py-24` instead
- ❌ Inline `style={{}}` for colors — use Tailwind classes
- ❌ PowerShell `>>` to append files — causes null byte corruption

## File Encoding Rules (CRITICAL)

All `.tsx` files must be written as pure ASCII + HTML entities. Never use raw Unicode characters in JSX text content. Always use:
- `&rarr;` for →
- `&larr;` for ←
- `&mdash;` for —
- `&middot;` for ·
- `&ndash;` for –
- `&ldquo;` / `&rdquo;` for " "
- `&lsquo;` / `&rsquo;` for ' '

Violation causes mojibake (garbled characters) in the rendered output on Vercel.
