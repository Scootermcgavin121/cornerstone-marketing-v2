import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "BuildPro Alternative for Production Home Builders | Cornerstone PM",
  description:
    "BuildPro alternative built for production home builders. Native AI agents, options engine, public REST API, and modern web UI from $149/mo — no enterprise implementation fees.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildpro-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$25k–$75k+", note: "BuildPro requires consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "3–9 months", note: "Cornerstone: AI Migration Wizard + 23 import endpoints. Drop files, wizard does the rest — live the same day." },
  { feature: "Modern web UI (cloud-native)", cornerstone: true, competitor: false, note: "BuildPro is built on a Windows desktop architecture; Cornerstone is web and mobile native." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Foreman AI: 45+ skills. Blueprint AI: PDF to takeoff in 60 seconds. BuildPro has no native AI." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, and reads Home Depot/Ferguson product pages with AI-powered web scraping." },
  { feature: "30 webhook events with typed payloads", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, delivery logs, auto-retry. BuildPro offers no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects BuildPro export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer — the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock." },
  { feature: "Triple QR check-in ecosystem (vendor + PM + buyer)", cornerstone: true, competitor: false, note: "Cornerstone has three audience-specific QR codes. BuildPro has none." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live vendor location pins across all communities. BuildPro doesn't ship this." },
  { feature: "Model home QR for lead capture", cornerstone: true, competitor: false, note: "Digital lead capture at model homes — no paper sheets." },
  { feature: "AI camera-event auto-task-start", cornerstone: true, competitor: false, note: "Camera-agnostic webhook integration auto-starts tasks on vendor arrival." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Mobile-friendly", cornerstone: true, competitor: "limited", note: "Cornerstone is fully responsive; BuildPro mobile is limited." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. BuildPro: enterprise integrations only." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Connect Claude or ChatGPT to live data." },
  { feature: "Options engine", cornerstone: true, competitor: true, note: "Both ship options engines for structural and design selections." },
  { feature: "Multi-community management", cornerstone: true, competitor: true, note: "Both support multi-community pipelines." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling modules." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Cornerstone adds 7-wave automated bidding + vendor portal (no login required)." },
  { feature: "Per-user fees", cornerstone: "Unlimited", competitor: "Per-seat", note: "Cornerstone: no per-seat pricing on any plan." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "Enterprise quote", note: "BuildPro pricing is custom and not publicly listed." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Modern web platform", desc: "Cloud-native, mobile-friendly, no Citrix or VPN required. PMs update from the jobsite, vendors confirm from their phone, sales counselors present on a tablet." },
  { title: "AI agents native — 45+ skills", desc: "Foreman AI reads AND writes data. Blueprint AI converts PDF floor plans to material takeoffs in under 60 seconds. No third-party AI plugins, no separate subscriptions." },
  { title: "Public REST API + 30 webhooks", desc: "59 REST endpoints, 30 named webhook events, HMAC signatures, and public documentation on Pro+. BuildPro integrations are enterprise-contract only." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best BuildPro alternative for small-to-mid home builders?",
    a: "Cornerstone PM is the closest functional BuildPro alternative for small-to-mid production home builders. It includes the same core capabilities — options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling — plus native AI agents and a public REST API, without BuildPro's enterprise implementation cost.",
  },
  {
    q: "How is Cornerstone PM different from BuildPro?",
    a: "Three key differences: (1) Cornerstone PM is a modern, web-based, mobile-friendly platform, while BuildPro is built on a Windows desktop architecture; (2) Cornerstone ships native AI agents (Foreman AI 45+ skills, Blueprint AI, AI image search, anti-bot web scraping) that BuildPro doesn't offer at any tier; (3) Cornerstone is operational in hours at $149/mo with unlimited users, while BuildPro requires $25k–$75k+ implementation budgets.",
  },
  {
    q: "Can Cornerstone PM replace BuildPro for a production builder?",
    a: "Yes — for small-to-mid production builders. Cornerstone PM covers BuildPro's core production builder workflows: lots, models, options, plan repeats, design center, draws, multi-community pipelines. For top-100 enterprise builders with deep custom integrations to existing ERPs, BuildPro may still be the right fit.",
  },
  {
    q: "How long does migration from BuildPro take?",
    a: "Most BuildPro migrations complete in under a day, self-serve — the AI Migration Wizard reads your BuildPro export, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, schedule templates, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, and more. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "What about BuildPro's options engine? Does Cornerstone match it?",
    a: "Yes. Cornerstone PM's options engine handles structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup. Foreman AI's Design Center domain adds plain-English option configuration, and 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses) across 7 categories — something BuildPro doesn't offer.",
  },
  {
    q: "Is Cornerstone PM mobile-friendly?",
    a: "Yes. Cornerstone PM is fully responsive on any device — PMs update from the jobsite, vendors confirm from their phone, sales counselors present floorplans on a tablet. BuildPro's mobile experience is limited and largely Windows-desktop focused.",
  },
  {
    q: "Does Cornerstone PM have a public API like BuildPro?",
    a: "Cornerstone PM offers a fully public REST API on the Pro+ plan ($599/mo): 59 endpoints, 30 webhook event types, HMAC signatures, scoped Bearer-token auth, and public documentation. BuildPro offers enterprise integrations only, typically on a custom contract basis.",
  },
  {
    q: "Is there a free trial or beta?",
    a: "Yes. Cornerstone PM offers a 2-year free beta to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function BuildProAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="BuildPro"
      badgeLabel="BuildPro Alternative"
      heroLine1="BuildPro power."
      heroLine2="Modern UI. Native AI."
      accentColor="violet"
      heroParagraph="Cornerstone PM is the modern BuildPro alternative for small-to-mid production home builders. Same core capabilities — options engine, multi-community pipelines, purchasing, construction scheduling — on a web-native platform with 45+ AI skills and a public REST API. Starts at $149/mo."
      secondaryCTA={{ text: "Also a NEWSTAR alternative", href: "/newstar-alternative" }}
      comparisonSubtitle="Side-by-side for production builders evaluating modern alternatives."
      comparisonRows={comparisonRows}
      trademarkName="BuildPro"
      whySwitchHeadline="Why builders switch from BuildPro"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using BuildPro? Drop your export. We'll do the rest."
      migrationDesc="Export your BuildPro data, drop it in our wizard, and AI auto-maps every column — vendors, homes, communities, design options, scopes, budgets. Dry-run before you commit. ~$0.01 per migration in AI — we absorb it."
      faqTitle="BuildPro Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from BuildPro."
      faqItems={faqItems}
      footerHeadline="Ready for a modern platform?"
      footerSubtext="Join the beta and get 2 years free. Operational in hours, not months."
      relatedPages={[
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
