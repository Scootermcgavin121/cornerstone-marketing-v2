import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Buildxact Alternative for Production Home Builders | Cornerstone PM",
  description:
    "Buildxact focuses on takeoffs and estimating. Cornerstone PM adds full construction PM, native AI agents, options engine, and 30 webhook events — from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildxact-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "Buildxact is takeoff/estimating software popular with custom builders and remodelers. Cornerstone is a full PM platform purpose-built for production (tract/spec) builders." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: true, note: "Both do floor plan takeoffs. Blueprint AI converts PDF blueprints to material takeoffs in under 60 seconds; Buildxact uses its own takeoff engine." },
  { feature: "Full construction PM platform", cornerstone: true, competitor: "limited", note: "Cornerstone: scheduling, purchasing, bid management, homeowner portal, options engine, multi-community pipeline. Buildxact: primarily estimating and quoting." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data: POs, options, SOWs, bid comparisons, image search, web scraping. Buildxact has no native AI agents." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. No other construction AI does this." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, delivery logs, auto-retry. Buildxact has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. Buildxact: limited API access." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan — not a Buildxact feature." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link — no account needed." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Client-facing milestones, selections, and documents." },
  { feature: "Multi-community management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Buildxact is job-focused, not community-focused." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt, dependencies, cascade scheduling. Buildxact: basic scheduling." },
  { feature: "Takeoff / estimating", cornerstone: true, competitor: true, note: "Both include takeoff and estimating functionality." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$149/mo+", note: "Similar entry price, but Cornerstone is a full PM platform vs. an estimating tool." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Beyond estimating: full PM platform", desc: "Buildxact is great at takeoffs and quotes. Cornerstone includes all of that — plus scheduling, homeowner portal, purchasing, bid management, multi-community pipeline, and a design center. One platform, not a patchwork." },
  { title: "Blueprint AI + Foreman AI = AI native", desc: "Blueprint AI converts PDF floor plans to material takeoffs in 60 seconds. Foreman AI (45+ skills) reads and writes your data — SOWs, bid comparisons, design options, image search, web scraping. No plug-ins." },
  { title: "30 webhooks + public API", desc: "30 named webhook events with typed payload schemas, HMAC signatures, and auto-retry. Public REST API with 59 endpoints. Wire your own tools, SMS bots, or AI agents. Buildxact has no comparable automation layer." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM different from Buildxact?",
    a: "Buildxact is primarily an estimating and takeoff platform with basic scheduling and quoting. Cornerstone PM is a full construction management platform for production home builders — it includes takeoff (Blueprint AI), estimating, scheduling, homeowner portal, design center, purchasing, bid management, multi-community pipeline, and native AI agents. Think of Cornerstone as what you use after you outgrow an estimating tool.",
  },
  {
    q: "Does Cornerstone PM do takeoffs like Buildxact?",
    a: "Yes. Blueprint AI converts PDF floor plans to material takeoffs in under 60 seconds — similar to Buildxact's takeoff engine. Cornerstone also adds AI bid import: upload any vendor quote (PDF, Excel, scanned, even handwritten) and AI parses it against your scopes automatically.",
  },
  {
    q: "Can I migrate from Buildxact to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Buildxact data exports, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost — we absorb it.",
  },
  {
    q: "Is Cornerstone PM a good fit if I'm growing from custom to production building?",
    a: "Yes — this is a common transition point. Custom builders who start running the same floorplan in multiple communities realize they need a production platform: floorplan pricing matrix, lot management, structural options engine, pre-sale design center, multi-community pipelines. Cornerstone PM is built for exactly this transition. Bring your Buildxact takeoffs — the import tooling handles them.",
  },
  {
    q: "What about Buildxact's quoting and client approval features?",
    a: "Cornerstone PM includes a homeowner portal where buyers can review milestones, design selections, and documents. The options engine and design center handle pre-sale selections and allowances. For contract-style quoting (markup-based quotes to homeowners), Cornerstone handles this through the floorplan pricing matrix and options rollup.",
  },
  {
    q: "Does Cornerstone PM have a public API?",
    a: "Yes. 59 REST endpoints, 30 named webhook events, HMAC signatures, scoped Bearer-token auth, and public documentation on the Pro+ plan ($599/mo). BYOA (Bring Your Own Agent) is also included — connect Claude or ChatGPT directly to your live construction data.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
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
      heroParagraph="Buildxact is great at takeoffs and quotes. Cornerstone PM is the Buildxact alternative that adds full construction management: scheduling, homeowner portal, purchasing, bid management, options engine, and 45+ AI skills — all in one platform from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Buildxact vs Cornerstone PM — takeoff tool vs. full production builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Buildxact"
      whySwitchHeadline="Why builders move from Buildxact to Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Buildxact? Bring your data with you."
      migrationDesc="Export your Buildxact data, drop it in our wizard, and AI auto-maps every column — vendors, estimates, budgets, contacts. Dry-run before you commit. ~$0.01 per migration in AI — we absorb it."
      faqTitle="Buildxact Alternative FAQ"
      faqSubtitle="Common questions from builders evaluating Cornerstone PM vs Buildxact."
      faqItems={faqItems}
      footerHeadline="Ready for a full platform?"
      footerSubtext="Join the beta and get 2 years free. Blueprint AI takeoffs included."
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
