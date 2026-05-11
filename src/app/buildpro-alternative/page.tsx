import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "BuildPro Alternative for Home Builders | Cornerstone PM",
  description:
    "BuildPro alternative for home builders. Native AI agents (Pro $499/mo), options engine, public REST API, and modern web UI from $149/mo - no enterprise implementation fees.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildpro-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$25k-$75k+", note: "BuildPro requires consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "3-9 months", note: "Cornerstone: AI Migration Wizard + 23 import endpoints. Drop files, wizard does the rest - live the same day." },
  { feature: "Modern web UI (cloud-native)", cornerstone: true, competitor: false, note: "BuildPro is built on a Windows desktop architecture; Cornerstone is web and mobile native." },
  { feature: "Built for home builders", cornerstone: true, competitor: true, note: "BuildPro is built for production home builders. Cornerstone is built across the full home-builder spectrum - production, semi-custom, and custom - with lot management, options engine, and design center covering all of them on a modern web platform." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 45+ Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 sec. BuildPro has no native AI." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting — typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. BuildPro offers no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects BuildPro export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Designer Packages (64 curated by an actual interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock. Cornerstone Builder+." },
  { feature: "Triple QR check-in ecosystem (vendor + PM + buyer)", cornerstone: true, competitor: false, note: "Cornerstone has three audience-specific QR codes. BuildPro has none." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live vendor location pins across all communities. BuildPro doesn't ship this." },
  { feature: "Model home QR for lead capture", cornerstone: true, competitor: false, note: "Digital lead capture at model homes - no paper sheets." },
  { feature: "AI camera-event auto-task-start", cornerstone: true, competitor: false, note: "Camera-agnostic webhook integration auto-starts tasks on vendor arrival. Cornerstone Pro+ feature." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Mobile-friendly", cornerstone: true, competitor: "limited", note: "Cornerstone is fully responsive; BuildPro mobile is limited." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. BuildPro: enterprise integrations only." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): connect Claude or ChatGPT to live data." },
  { feature: "Options engine", cornerstone: true, competitor: true, note: "Both ship options engines for structural and design selections." },
  { feature: "Multi-community management", cornerstone: true, competitor: true, note: "Both support multi-community pipelines." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling modules." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Cornerstone Pro+ adds 7-wave automated bidding + vendor portal (no login required)." },
  { feature: "Per-user fees", cornerstone: "Unlimited users, every tier", competitor: "Per-seat", note: "Cornerstone: no per-seat pricing on any plan. BuildPro: per-seat licensing." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Enterprise quote + implementation", note: "BuildPro requires enterprise contracts plus $25kâ€“$75k+ implementation fees. Cornerstone starts at $149/mo with zero implementation cost. More importantly: BuildPro doesn't ship Foreman AI, Blueprint AI, 30 named webhook events, or a self-serve public REST API at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "â€”", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30 named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Modern web platform", desc: "Cloud-native, mobile-friendly, no Citrix or VPN required. PMs update from the jobsite, vendors confirm from their phone, sales counselors present on a tablet." },
  { title: "Action-taking AI on Pro - 45+ skills", desc: "Foreman AI (Cornerstone Pro, $499/mo) reads AND writes data. Blueprint AI converts PDF floor plans to material takeoffs in under 60 seconds. No third-party AI plugins, no separate subscriptions." },
  { title: "Public REST API + 30+ webhooks on Pro+", desc: "59+ REST endpoints (growing), 30+ named webhook events (catalog growing), HMAC signatures, and public documentation on Pro+ ($599/mo). BuildPro integrations are enterprise-contract only." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best BuildPro alternative for home builders?",
    a: "Cornerstone PM is the closest functional BuildPro alternative for small-to-mid home builders. It includes the same core capabilities - options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling - plus native AI agents (Foreman AI on Pro $499/mo, Blueprint AI) and a public REST API (Pro+), without BuildPro's enterprise implementation cost.",
  },
  {
    q: "How is Cornerstone PM different from BuildPro?",
    a: "Three key differences: (1) Cornerstone PM is a modern, web-based, mobile-friendly platform, while BuildPro is built on a Windows desktop architecture; (2) Cornerstone ships native AI agents (Foreman AI 45+ skills on Pro $499/mo, Blueprint AI, AI image search, anti-bot web scraping) that BuildPro doesn't offer at any tier; (3) Cornerstone is operational in hours at $149/mo with unlimited users, while BuildPro requires $25k-$75k+ implementation budgets.",
  },
  {
    q: "Can Cornerstone PM replace BuildPro for a home builder?",
    a: "Yes - for small-to-mid home builders. Cornerstone PM covers BuildPro's core production builder workflows: lots, models, options, plan repeats, design center, draws, multi-community pipelines. For top-100 enterprise builders with deep custom integrations to existing ERPs, BuildPro may still be the right fit.",
  },
  {
    q: "How long does migration from BuildPro take?",
    a: "Most BuildPro migrations complete in under a day, self-serve - the AI Migration Wizard reads your BuildPro export, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, schedule templates, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, and more. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "What about BuildPro's options engine? Does Cornerstone match it?",
    a: "Yes. Cornerstone PM's options engine (Builder plan, $299/mo) handles structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup. Foreman AI's Design Center domain (Pro $499/mo) adds plain-English option configuration and 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses) across 7 categories - something BuildPro doesn't offer.",
  },
  {
    q: "Is Cornerstone PM mobile-friendly?",
    a: "Yes. Cornerstone PM is fully responsive on any device - PMs update from the jobsite, vendors confirm from their phone, sales counselors present floorplans on a tablet. BuildPro's mobile experience is limited and largely Windows-desktop focused.",
  },
  {
    q: "Does Cornerstone PM have a public API like BuildPro?",
    a: "Cornerstone PM offers a fully public REST API on the Pro+ plan ($599/mo): 59+ endpoints and growing, 30+ named webhook event types (catalog growing), HMAC signatures, scoped Bearer-token auth, and public documentation. BuildPro offers enterprise integrations only, typically on a custom contract basis.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent - unlimited users. The options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Is there a free trial or beta?",
    a: "Yes. Cornerstone PM offers a 2-year free beta to the first 100 home builders - no credit card, no contract, no implementation fee.",
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
      heroParagraph="Cornerstone PM is the modern BuildPro alternative for small-to-mid home builders. Same core capabilities - options engine, multi-community pipelines, purchasing, construction scheduling - on a web-native platform with Foreman AI (45+ skills on Pro $499/mo), Blueprint AI, and a public REST API (Pro+ $599/mo). Starts at $149/mo, unlimited users."
      secondaryCTA={{ text: "Also a NEWSTAR alternative", href: "/newstar-alternative" }}
      comparisonSubtitle="Side-by-side for home builders evaluating modern alternatives."
      comparisonRows={comparisonRows}
      trademarkName="BuildPro"
      whySwitchHeadline="Why builders switch from BuildPro"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using BuildPro? Drop your export. We'll do the rest."
      migrationDesc="Export your BuildPro data, drop it in our wizard, and AI auto-maps every column - vendors, homes, communities, design options, scopes, budgets. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
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
