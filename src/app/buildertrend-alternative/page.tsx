import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Buildertrend Alternative for Production Home Builders | Cornerstone PM",
  description:
    "Buildertrend alternative built for production home builders. Native AI agents, options engine, REST API, and multi-community management from $149/mo — not $499+.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildertrend-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built specifically for production home builders", cornerstone: true, competitor: false, note: "Buildertrend is purpose-built for custom builders & remodelers; Cornerstone is purpose-built for production (tract/spec) builders." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone ships 45+ Foreman AI skills and Blueprint AI floor plan takeoffs. Buildertrend has no native AI agents." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages mid-session so long workflows never crash or forget. No other construction platform does this." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman AI searches product images, hosts them permanently on CDN, and reads Home Depot/Ferguson/Lowe's product pages using AI-powered web scraping — no other construction AI does this." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: false, note: "PDF blueprint to material takeoff in under 60 seconds." },
  { feature: "30 webhook events with typed payloads", cornerstone: true, competitor: false, note: "Cornerstone: 30 named events, HMAC signatures, delivery logs, auto-retry. Buildertrend webhooks: limited scope, no named event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT directly to your live Cornerstone data via our public API. Buildertrend has no BYOA support." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. Buildertrend: enterprise API only, not public." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "Drop your Buildertrend export — AI auto-detects column mapping and runs 23 import endpoints automatically. ~$0.01 per migration." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan — not a Buildertrend strength." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically. No spreadsheet-style workarounds." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime — no hostage-taking. Nightly auto-backups for 7 days." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline. Buildertrend: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both: Gantt charts, dependencies, vendor notifications." },
  { feature: "Homeowner portal", cornerstone: true, competitor: true, note: "Both: client-facing milestone views." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Cornerstone adds 7-wave automated bidding pipeline + vendor portal (no login required)." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Buildertrend charges per user above plan limits." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$499/mo", note: "Cornerstone is ~70% less at the starter tier." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Production workflows native", desc: "Lots, models, options, plan repeats, design center, draws — first-class concepts, not workarounds. Buildertrend treats every job as one-off." },
  { title: "AI built in — 45+ skills", desc: "Foreman AI reads AND writes data, remembers your preferences, analyzes jobsite photos, and scrapes product pages from Home Depot and Ferguson using AI-powered web scraping. No bolt-on plugins." },
  { title: "REST API + 30 webhook events", desc: "59 REST endpoints, 30 named webhook events, HMAC signatures, scoped auth, and public docs. Buildertrend's API is enterprise-only. Ours ships with Pro+." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best Buildertrend alternative for production home builders?",
    a: "For production home builders, Cornerstone PM is the closest functional Buildertrend alternative with key advantages: native AI agents (Foreman AI 45+ skills, Blueprint AI), an options engine, floorplan pricing matrix, multi-community management, 30 webhook events, and a public REST API. Buildertrend was built for custom builders and remodelers; Cornerstone PM is purpose-built for production builders managing 5–200+ homes per year.",
  },
  {
    q: "How is Cornerstone PM different from Buildertrend?",
    a: "Three key differences: (1) Cornerstone is built for production builders, Buildertrend for custom and remodel; (2) Cornerstone includes 45+ native AI skills via Foreman AI plus Blueprint AI floor plan takeoffs, AI image search, and anti-bot web scraping — Buildertrend has no native AI; (3) Cornerstone offers a structural options engine, floorplan pricing matrix, multi-community pipelines, 30 webhook events, and free database export that Buildertrend doesn't ship.",
  },
  {
    q: "Is Cornerstone PM cheaper than Buildertrend?",
    a: "Yes. Cornerstone PM starts at $149/mo with unlimited users; Buildertrend starts at $499/mo. The full Cornerstone Pro+ plan (with Foreman AI, Blueprint AI, and REST API) is $599/mo — and includes capabilities Buildertrend doesn't offer at any price.",
  },
  {
    q: "Can I migrate from Buildertrend to Cornerstone PM?",
    a: "Yes — the AI Migration Wizard makes it fast. Drop your Buildertrend export files in, the wizard reads them, detects column mapping automatically, runs the imports, and tells you what it skipped. Behind the scenes it routes through 23 dedicated import endpoints. Most migrations complete in under a day, self-serve. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM have everything Buildertrend has?",
    a: "Cornerstone PM covers the same core functions: scheduling, homeowner portal, purchasing, bid management, document storage, and change orders. It adds an options engine, AI agents, Blueprint AI takeoffs, multi-community pipelines, 30 webhook events, and a public REST API that Buildertrend doesn't offer. The one area Buildertrend serves that Cornerstone doesn't: custom builder progress invoicing — because Cornerstone is built for production builders who use draw schedules.",
  },
  {
    q: "Should I switch from Buildertrend if I'm a custom builder or remodeler?",
    a: "Probably not. Cornerstone PM is optimized for production home builders. If you're a custom builder or remodeler doing one-off jobs without floorplan repeats or pre-sale design centers, Buildertrend is likely a better fit. Cornerstone's value compounds when you're running multi-community production with plan repeats.",
  },
  {
    q: "Does Cornerstone PM have a free trial like Buildertrend?",
    a: "Cornerstone PM offers a 2-year free beta to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
  {
    q: "What are the 30 webhook events?",
    a: "Cornerstone's 30 named webhook events cover: home lifecycle (created, status changed, closed), task/schedule updates, vendor notifications, cascade scheduling triggers, message events, sales pipeline changes, and bid request events. Every event ships with a typed payload schema, HMAC signature verification, delivery logs, and auto-retry. Buildertrend's webhooks are limited and have no public event catalog.",
  },
];

export default function BuildertrendAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Buildertrend"
      badgeLabel="Buildertrend Alternative"
      heroLine1="Built for production builders."
      heroLine2="Not custom and remodel."
      accentColor="cyan"
      heroParagraph="Cornerstone PM is the Buildertrend alternative for production home builders. Native AI agents, options engine, floorplan pricing matrix, multi-community pipelines, 30 webhook events, and a public REST API — from $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side, focused on what matters for production builders."
      comparisonRows={comparisonRows}
      trademarkName="Buildertrend"
      whySwitchHeadline="Why production builders switch from Buildertrend"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Buildertrend? Drop your export. We'll do the rest."
      migrationDesc="Export your Buildertrend data, drag the ZIP into our wizard, and AI auto-maps every column across vendors, homes, communities, users, leads, tasks, and POs. Dry-run before you commit. Free."
      faqTitle="Buildertrend Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from Buildertrend."
      faqItems={faqItems}
      footerHeadline="Ready to switch from Buildertrend?"
      footerSubtext="Join the beta and get 2 years free. Migration tooling included."
      relatedPages={[
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs CoConstruct", href: "/coconstruct-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
