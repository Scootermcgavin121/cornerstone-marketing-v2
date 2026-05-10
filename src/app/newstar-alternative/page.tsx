import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "NEWSTAR Alternative for Small-to-Mid Home Builders | Cornerstone PM",
  description:
    "NEWSTAR alternative for small-to-mid production home builders. Options engine, sales pipeline, purchasing, and AI agents from $149/mo — no 6-figure implementation.",
  alternates: { canonical: "https://www.cornerstonepm.ai/newstar-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$25k–$100k+", note: "NEWSTAR requires extensive consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "3–12 months", note: "AI Migration Wizard + 23 import endpoints. Drop files, wizard does the rest — operational in an afternoon." },
  { feature: "Starting monthly price", cornerstone: "$149", competitor: "Enterprise quote", note: "NEWSTAR pricing is custom and not publicly listed." },
  { feature: "Per-user fees", cornerstone: "Unlimited users", competitor: "Per-seat", note: "Cornerstone: no per-seat pricing on any plan." },
  { feature: "Built for small-to-mid builders", cornerstone: true, competitor: false, note: "NEWSTAR is designed for top-100 enterprise home builders." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Foreman AI: 45+ skills. Blueprint AI: PDF to takeoff in 60 seconds. NEWSTAR has no native AI." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, and reads Home Depot/Ferguson product pages with AI-powered web scraping." },
  { feature: "30 webhook events with typed payloads", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, delivery logs, auto-retry. NEWSTAR offers no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects NEWSTAR export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Modern web-based UI", cornerstone: true, competitor: false, note: "NEWSTAR is built on a Windows desktop architecture; Cornerstone is web and mobile native." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. NEWSTAR: enterprise integrations only." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Connect Claude or ChatGPT to your live data." },
  { feature: "Options engine", cornerstone: true, competitor: true, note: "Both ship a full structural and design options engine." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: true, note: "Per-community plan pricing." },
  { feature: "Multi-community management", cornerstone: true, competitor: true, note: "Both support multiple communities and divisions." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling modules." },
  { feature: "Purchasing & POs", cornerstone: true, competitor: true, note: "Cornerstone adds 7-wave automated bidding pipeline." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Built for the builder NEWSTAR ignores", desc: "NEWSTAR is built for top-100 enterprise builders. Cornerstone is built for small-to-mid production builders running 5–200 homes per year — without the $50k+ implementation and dedicated IT team." },
  { title: "AI agents native — 45+ skills", desc: "Foreman AI reads AND writes data, remembers your preferences, analyzes images, and scrapes product pages with AI-powered web scraping. Blueprint AI converts floor plans to takeoffs in 60 seconds. NEWSTAR has no native AI." },
  { title: "Public REST API + 30 webhooks", desc: "59 REST endpoints, 30 named webhook events, HMAC signatures, and public docs on Pro+. NEWSTAR integrations are enterprise-contract only. Wire Twilio or your own agents to our webhooks." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best NEWSTAR alternative for small-to-mid home builders?",
    a: "Cornerstone PM is the closest functional NEWSTAR alternative for small-to-mid production home builders. It includes the same core capabilities — options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling — without NEWSTAR's $25,000–$100,000+ implementation cost. Cornerstone PM also adds native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API.",
  },
  {
    q: "Is Cornerstone PM a NEWSTAR replacement?",
    a: "For small-to-mid production builders, yes. Cornerstone PM covers NEWSTAR's core production builder workflows — lots, models, options, plan repeats, design center, draws, multi-community pipelines — in a modern web platform with native AI. For top-100 enterprise builders with deep custom integrations to existing ERPs, NEWSTAR may still be the right fit.",
  },
  {
    q: "How much does Cornerstone PM cost compared to NEWSTAR?",
    a: "Cornerstone PM starts at $149/mo with unlimited users and zero implementation cost. NEWSTAR pricing is enterprise-quoted and not publicly listed, but typical NEWSTAR implementations run $25,000–$100,000+ before monthly licensing. The full Cornerstone Pro+ plan ($599/mo) includes the REST API, 30 webhook events, and BYOA — capabilities NEWSTAR offers only at the enterprise tier.",
  },
  {
    q: "Can Cornerstone PM handle production builder workflows?",
    a: "Yes. Cornerstone PM was built specifically for production builders — it's not adapted from custom builder or commercial construction software. Lot inventories, floorplan pricing matrices, structural options engines, design center allowances, draw schedules, and multi-community pipelines are first-class concepts in the platform.",
  },
  {
    q: "Does Cornerstone PM support BuildPro and MarkSystems migrations too?",
    a: "Yes — the AI Migration Wizard handles NEWSTAR, BuildPro, MarkSystems, and any CSV/Excel export. Drop your files in, the wizard reads them, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "What about NEWSTAR's options engine? Does Cornerstone match it?",
    a: "Cornerstone PM's options engine handles structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup as buyers select. Foreman AI's Design Center domain adds plain-English option configuration and 64 curated Designer Packages across 7 categories that NEWSTAR doesn't offer.",
  },
  {
    q: "Will Cornerstone PM scale as we grow?",
    a: "Yes. The Pro plan supports up to 1,000 active homes and Pro+ has no home cap. For builders growing past 200+ homes per year, the REST API and 30 webhook events on Pro+ enable custom integrations to accounting (Sage 300, QuickBooks Enterprise), warranty platforms, and CRM tools.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function NewstarAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="NEWSTAR"
      badgeLabel="NEWSTAR / BuildPro Alternative"
      heroLine1="NEWSTAR power."
      heroLine2="Without 6-figure implementation."
      accentColor="violet"
      heroParagraph="Cornerstone PM is the modern NEWSTAR and BuildPro alternative for small-to-mid production home builders. Same core capabilities — options engine, floorplan pricing matrix, multi-community management — plus native AI agents, 30 webhook events, and a public REST API. Starts at $149/mo. Operational in hours, not months."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side for small-to-mid production home builders."
      comparisonRows={comparisonRows}
      trademarkName="NEWSTAR"
      whySwitchHeadline="Built for the builder NEWSTAR ignores"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using NEWSTAR? Drop your export. We'll do the rest."
      migrationDesc="Export your NEWSTAR data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, design options, scopes, and budgets. Dry-run before you commit. ~$0.01 per migration — we absorb it."
      faqTitle="NEWSTAR Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from NEWSTAR or BuildPro."
      faqItems={faqItems}
      footerHeadline="Ready to leave the implementation quagmire?"
      footerSubtext="Join the beta and get 2 years free. Operational in hours, not months."
      relatedPages={[
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
