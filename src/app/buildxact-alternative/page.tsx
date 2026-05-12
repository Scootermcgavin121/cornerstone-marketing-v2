import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Buildxact Alternative for Home Builders | Cornerstone PM",
  description:
    "Buildxact focuses on takeoffs and estimating. Cornerstone PM adds full construction PM, native AI agents (Pro $499/mo), options engine, and 30+ named webhook events - from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildxact-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Buildxact is takeoff/estimating software popular with custom builders and remodelers. Cornerstone is a full PM platform built across the home-builder spectrum - production, semi-custom, and custom - with lot management, options engine, and multi-community pipelines." },
  { feature: "Full construction PM platform", cornerstone: true, competitor: "limited", note: "Cornerstone: scheduling, purchasing, bid management, homeowner portal, options engine, multi-community pipeline. Buildxact: primarily estimating and quoting; scheduling is an add-on feature." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: true, note: "Both do floor plan takeoffs. Cornerstone Blueprint AI (Pro $499/mo) converts PDF blueprints to material takeoffs in under 60 seconds. Buildxact has Blu AI Takeoff Assistant (add-on, ~$99/mo on Pro plan)." },
  { feature: "Native AI agents (Foreman AI - 83 skills)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data - POs, options, SOWs, bid comparisons, image search, web scraping. Buildxact has 'Blu' AI for estimating assistance (assembly help, estimate generation). Different scope: action agent vs estimating aid." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. No other construction AI does this. Cornerstone Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting — typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Buildxact has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Buildxact: limited API access." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - Cornerstone Builder ($299/mo). Not a Buildxact feature." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock. Cornerstone Builder+." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Vendors confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent straight to their email. No app to download, no account to create, no password to remember. Click the link, do the thing, done. Biggest friction-killer for trade partners in the industry." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Buildxact ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Buildxact has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Most platforms hard-code one PO model. Cornerstone gives you four: (1) all POs at job start (lock in budget exposure day one), (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a construction task is marked complete (cash goes out only when work is verifiably done), or (4) configurable per task / scope / community — mix all four on the same job. Buildxact is takeoff/estimating-first — not a full PO orchestration platform." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Buildxact is takeoff/estimating-first — no buyer-facing portal of this depth." },
  { feature: "Multi-community management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Buildxact is job-focused, not community-focused." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt, dependencies, cascade scheduling (Starter+). Buildxact: scheduling included on Pro plan ($399/mo) up." },
  { feature: "Takeoff / estimating", cornerstone: true, competitor: true, note: "Both include takeoff and estimating functionality." },
  { feature: "Unlimited users", cornerstone: true, competitor: true, note: "Both include unlimited users. Buildxact Foundation starts at $199/mo (annual)." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Flat, unlimited users (higher starting price)", note: "Both are flat-fee with unlimited users. Buildxact Foundation starts at $199/mo (annual) for estimating/takeoffs; Master $599/mo plus Blu AI add-ons. Cornerstone starts at $149/mo. More importantly: Buildxact doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, homeowner portal, or action-taking AI agents at any tier." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30 named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Beyond estimating: full PM platform", desc: "Buildxact is great at takeoffs and quotes (starting $199/mo). Cornerstone includes all of that - plus scheduling, homeowner portal, purchasing, bid management, multi-community pipeline, and a design center from $149/mo. One platform, not a patchwork." },
  { title: "Blueprint AI + Foreman AI = AI native on Pro", desc: "Blueprint AI converts PDF floor plans to material takeoffs in 60 seconds. Foreman AI (83 skills on Pro $499/mo) reads and writes your data - SOWs, bid comparisons, design options, image search, web scraping. Buildxact's Blu AI stays within estimating scope." },
  { title: "30+ webhooks + public API on Pro+", desc: "30+ named webhook events with typed payload schemas, HMAC signatures, and auto-retry on Pro+ ($599/mo) — catalog growing. Public REST API with 59+ endpoints and growing. Wire your own tools, SMS bots, or AI agents. Buildxact has no comparable automation layer." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM different from Buildxact?",
    a: "Buildxact is primarily an estimating and takeoff platform (starting $199/mo annual) with scheduling and job management on higher tiers. Cornerstone PM is a full construction management platform for home builders - it includes takeoff (Blueprint AI on Pro $499/mo), estimating, scheduling (from Starter $149/mo), homeowner portal, design center, purchasing, bid management, multi-community pipeline, and native AI agents. Buildxact has Blu AI for estimating assistance; Cornerstone's Foreman AI takes real actions across your entire construction operation.",
  },
  {
    q: "Does Cornerstone PM do takeoffs like Buildxact?",
    a: "Yes. Blueprint AI (Cornerstone Pro, $499/mo) converts PDF floor plans to material takeoffs in under 60 seconds - similar to Buildxact's takeoff engine. Cornerstone also adds AI bid import: upload any vendor quote (PDF, Excel, scanned, even handwritten) and AI parses it against your scopes automatically.",
  },
  {
    q: "Can I migrate from Buildxact to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Buildxact data exports, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost - we absorb it.",
  },
  {
    q: "Is Cornerstone PM a good fit if I'm growing from custom to production building?",
    a: "Yes - this is a common transition point. Custom builders who start running the same floorplan in multiple communities need a platform with floorplan pricing matrix, lot management, structural options engine, pre-sale design center, and multi-community pipelines - all on Cornerstone Builder ($299/mo). Bring your Buildxact takeoffs - the import tooling handles them.",
  },
  {
    q: "What about Buildxact's quoting and client approval features?",
    a: "Cornerstone PM includes a homeowner portal where buyers can review milestones, design selections, and documents. The options engine and design center handle pre-sale selections and allowances. The 64 Designer Packages (curated by an actual interior designer, the same playbook K. Hovnanian Homes uses) on Builder+ give buyers a curated path through selections without spreadsheet-style guesswork.",
  },
  {
    q: "How does Buildxact pricing compare?",
    a: "Buildxact Foundation starts at $199/mo (annual) - takeoffs, estimating, quoting, unlimited users. Pro is $399/mo (adds scheduling). Master is $599/mo. Blu AI add-ons are $99-$149/mo each. Cornerstone starts at $149/mo (Starter, scheduling + portal). Builder is $299/mo (full platform). Pro is $499/mo (adds Foreman AI + Blueprint AI). Pro+ is $599/mo (adds REST API + BYOA). For a full AI-capable platform, Cornerstone Pro ($499/mo) is comparable or less than Buildxact Master + Blu add-ons.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
  },
];

export default function BuildxactAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Buildxact"
      badgeLabel="Buildxact Alternative"
      heroLine1="Estimating is just the start."
      heroLine2="Manage the whole build."
      accentColor="emerald"
      heroParagraph="Buildxact is great at takeoffs and quotes (from $199/mo). Cornerstone PM is the Buildxact alternative that adds full construction management: scheduling from $149/mo, homeowner portal, purchasing, bid management, options engine (Builder $299/mo), and Foreman AI with 83 action-taking skills (Pro $499/mo) - all in one platform."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Buildxact vs Cornerstone PM - takeoff tool vs. full home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Buildxact"
      whySwitchHeadline="Why builders move from Buildxact to Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Buildxact? Bring your data with you."
      migrationDesc="Export your Buildxact data, drop it in our wizard, and AI auto-maps every column - vendors, estimates, budgets, contacts. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
      faqTitle="Buildxact Alternative FAQ"
      faqSubtitle="Common questions from builders evaluating Cornerstone PM vs Buildxact."
      faqItems={faqItems}
      footerHeadline="Ready for a full platform?"
      footerSubtext="Join the beta and get 2 years free. Blueprint AI takeoffs included on Pro."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
