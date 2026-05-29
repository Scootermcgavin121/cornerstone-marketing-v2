import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "MarkSystems Alternative for Small-to-Mid Home Builders | Cornerstone PM™",
  description:
    "MarkSystems / NX alternative for home builders. Same core scope — sales, options, purchasing, scheduling, vendor portal — plus native AI agents (Foreman AI on Pro). From $149/mo, no Constellation implementation cycle, no consultant on retainer.",
  alternates: { canonical: "https://www.cornerstonepm.ai/marksystems-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Public, transparent pricing", cornerstone: "$149 / $299 / $499 / $599 — listed", competitor: "Hidden — consult-only", note: "Cornerstone publishes every tier on the website. MarkSystems / NX requires a Constellation sales consultation to learn what it costs. Hidden pricing is itself a feature gap when you're trying to evaluate options." },
  { feature: "Sign up today (no sales call required)", cornerstone: true, competitor: false, note: "Cornerstone is self-serve — pick a plan, sign up, you're in tonight. Constellation gates access behind 'Request a Demo' + a 1-888 sales line." },
  { feature: "Implementation cost", cornerstone: "$0", competitor: "Enterprise implementation engagement", note: "MarkSystems / NX is sold with 'dedicated support from implementation to daily use' — that's a paid services engagement on top of license fees. Cornerstone has zero implementation cost on every tier." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "Months", note: "AI Migration Wizard + 23 import endpoints. Drop your exports in, AI auto-detects column mapping, you're operational the same afternoon. NX implementations are enterprise data projects run by Constellation's services team." },
  { feature: "Built for small-to-mid home builders (5–200 homes/yr)", cornerstone: true, competitor: false, note: "MarkSystems / NX is built for the full spectrum of homebuilders from 'emerging builders to established leaders' — but the implementation cost and contract structure mean small-to-mid builders rarely make it past the demo. Cornerstone is built specifically for the 5–200 homes/yr builder." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: "Stella AI (separate add-on)", note: "Cornerstone Pro ($499/mo) ships Foreman AI's 396+ skills that read AND write data plus Blueprint AI's 60-second floor-plan takeoffs as part of the core platform. Constellation's Stella AI is a separate product in their lineup, not included with the MarkSystems / NX license — different category for builders evaluating real AI capability per dollar." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: "Limited", note: "Cornerstone Pro+ ($599/mo): 37+ named events and counting — typed payloads, HMAC signatures, delivery logs, auto-retry. NX advertises 'modern APIs' but no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects MarkSystems / NX export column mapping and runs 23 import endpoints. ~$0.01 per migration. Constellation migrations go through their services team as a paid implementation engagement." },
  { feature: "Built-in accounting / GL", cornerstone: "Integrate via API (QuickBooks, etc.)", competitor: true, note: "NX ships full ERP-grade accounting — GL, AP/AR, retainage, audit trails, financial reporting. That's a legitimate strength for 300+ homes/yr builders who want operations and accounting on one stack. Cornerstone is built for the 5–200 homes/yr builder who already runs QuickBooks or similar — we integrate with your existing accounting via our public REST API instead." },
  { feature: "Land development scheduling & tracking", cornerstone: true, competitor: true, note: "Both platforms handle land development scheduling — clearing, grading, utilities, paving — and multi-phase community tracking once you own the dirt. Cornerstone builds it into the same scheduling engine that runs the rest of the build." },
  { feature: "Land acquisition lead tracking (ownership history, bonds)", cornerstone: "Not yet", competitor: true, note: "NX (and Constellation's separate LandDev product) tracks land acquisition activities, ownership history, and bonds. Cornerstone handles land-dev scheduling and tracking today, but the dirt-pursuit CRM piece (parcels, ownership, bonds) is on the roadmap, not in the product yet. Honest about it." },
  { feature: "Property management module (rentals)", cornerstone: false, competitor: true, note: "NX includes property management — applications, move-ins, rent billing, regulatory compliance. Useful if you operate rentals. Cornerstone is purely home build PM, not property management." },
  { feature: "Options rules engine", cornerstone: true, competitor: true, note: "Both ship structural and design option rules with dependencies, incompatibilities, and price rollups." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Cornerstone Builder+: 64 designer packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses). Buyers pick a package; all category options auto-lock. NX has options selection but no curated package library." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture. NX ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. NX has no equivalent." },
  { feature: "Vendor portal access", cornerstone: "Tokenized magic links — zero login", competitor: "Login-required vendor portal", note: "NX gives vendors a login. Cornerstone sends vendors a tokenized magic link — they bid, accept schedule changes, and confirm tasks straight from email with no account, no password, no app install. Adoption is dramatically higher when subs don't have to manage another login." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "Standard", note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. NX generates POs from bid sheets and BOM templates — capable but enterprise-rigid." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "Separate product (Homeowner Central)", note: "Cornerstone includes the buyer portal at every tier ($149+) — real-time sync with construction schedule, milestone photos, messaging, one-click ZIP export of all job photos. Constellation sells Homeowner Central as a separate product in their ecosystem." },
  { feature: "Modern web + mobile UI", cornerstone: true, competitor: true, note: "Both ship modern web + mobile. NX's mobile app is field-facing for schedule and service requests; Cornerstone is mobile-first across the whole app, including buyer portal and sales workflows." },
  { feature: "Public REST API (150+ API endpoints)", cornerstone: true, competitor: "Limited public docs", note: "Cornerstone Pro+: 150+ REST API endpoints with public docs. NX advertises 'modern APIs' for integration but no public endpoint catalog — most integrations go through Constellation services." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): connect Claude or ChatGPT to your live data via REST + webhooks. NX is a closed ecosystem with Stella AI as the sanctioned agent." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. Constellation data extraction goes through their services team." },
  { feature: "Per-user fees", cornerstone: "Up to 30 users (60 on Pro+), every tier", competitor: "Enterprise contract", note: "Cornerstone: flat tier pricing, no per-seat scaling, up to 30 users (60 on Pro+). NX user licensing is enterprise-contract — typically per-user / per-module / per-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling. Cornerstone adds auto-cascading 3-tier dependencies, 17 pre-built templates, critical path highlighting, and permit gates out of the box." },
  { feature: "Pricing model", cornerstone: "Flat — published online", competitor: "Enterprise quote + implementation + per-module licensing", note: "NX: enterprise contract, consult-led pricing, paid implementation, separate licenses for products like LandDev, Homeowner Central, BuilderMetrix, and Stella AI. Cornerstone: flat monthly, every feature included at the tier, self-serve onboarding." },
  { feature: "Cornerstone tiers (flat — up to 30 users • 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "NX scope. Builder pricing.", desc: "Constellation NX (the modern successor to MarkSystems) is built for top-100 production builders with implementation budgets, services contracts, and a Constellation consultant on retainer. Cornerstone delivers the same core homebuilder capabilities — options engine, sales pipeline, purchasing, vendor portal, scheduling — for the 5–200 homes/yr builder. Flat published pricing, self-serve onboarding, no implementation engagement." },
  { title: "AI native, not AI bolted on", desc: "Constellation sells Stella AI as a separate product on top of NX. Cornerstone bakes Foreman AI (396+ skills) and Blueprint AI directly into Pro ($499/mo) — same monthly fee, no add-on contract, no separate implementation. AI is the platform, not an upsell." },
  { title: "MCP server, public API + 37+ webhooks on Pro+", desc: "Built-in MCP server (connect Claude Desktop, Cursor, or Windsurf in ~30 seconds), 150+ REST API endpoints, 37+ named webhook events (catalog growing), HMAC signatures, public docs. Wire Twilio, Bland, Retell, or your own agents to our webhooks. NX integrations are enterprise services engagements with no MCP server." },
];

const faqItems: FAQItem[] = [
  {
    q: "What happened to MarkSystems?",
    a: "MarkSystems was a homebuilder ERP that Constellation HomeBuilder Systems acquired and consolidated. The MarkSystems brand has been largely rolled into Constellation's current flagship platform NX (their next-generation cloud ERP), with NEWSTAR still sold as the legacy enterprise option. Builders evaluating 'MarkSystems' today are typically pointed at NX or NEWSTAR by Constellation's sales team.",
  },
  {
    q: "What is the best MarkSystems / NX alternative for home builders?",
    a: "Cornerstone PM™ is the closest functional MarkSystems / NX alternative for small-to-mid home builders. It includes the same core homebuilder capabilities — options rules engine, sales pipeline with contract management, purchasing & POs, multi-community management, construction scheduling, vendor collaboration, and warranty — without Constellation's enterprise quote, services engagement, or per-module licensing. Cornerstone adds native AI agents (Foreman AI 396+ skills on Pro $499/mo, Blueprint AI), 37+ named webhook events (Pro+), and a public REST API (Pro+). Pricing is published online starting at $149/mo.",
  },
  {
    q: "Is Cornerstone PM™ a MarkSystems / NX replacement?",
    a: "For builders running 5–200 homes/yr, yes. Cornerstone covers MarkSystems and NX's core homebuilder workflows in a modern AI-native platform. For enterprise builders running 300+ homes/yr who need an in-platform general ledger, property management for rental portfolios, or a full land acquisition module, NX's ERP scope and Constellation's product family (LandDev, BuilderMetrix, Homeowner Central) may be the right fit. We're honest about the segmentation.",
  },
  {
    q: "How much does Cornerstone PM™ cost compared to MarkSystems / NX?",
    a: "Cornerstone PM™ starts at $149/mo (Starter, up to 30 users) with zero implementation cost. NX and MarkSystems pricing is not publicly listed — Constellation requires a consultation to get a quote, and implementation is sold as a separate services engagement. For the full Cornerstone platform: Builder ($299/mo, options engine + full pipeline) and Pro ($499/mo, Foreman AI + Blueprint AI) are flat within tier (up to 30 users / 60 on Pro+). Pro+ at $599/mo includes the REST API, 37+ named webhook events, and BYOA.",
  },
  {
    q: "Does Cornerstone have an AI agent like Stella AI?",
    a: "Yes — Foreman AI, and arguably more capable. Foreman ships 396+ construction-specific skills across 20 categories that read AND write data, has per-user memory, AI vision for screenshots and photos, anti-bot web scraping for supplier pages, and runs as part of Cornerstone Pro ($499/mo) rather than as a separate product. Stella AI is sold separately on top of NX. Different distribution model.",
  },
  {
    q: "What about NX's built-in accounting? Does Cornerstone match it?",
    a: "Honestly: no, and we don't try to. NX ships ERP-grade accounting with full GL, AP/AR, retainage, audit trails, and financial reporting. That's a real fit for 300+ homes/yr builders. Cornerstone is built for the 5–200 homes/yr builder who already runs QuickBooks or a similar accounting system — we integrate with your existing accounting via our public REST API (Pro+) rather than replace it.",
  },
  {
    q: "Can I migrate from MarkSystems / NEWSTAR / NX to Cornerstone?",
    a: "Yes. The AI Migration Wizard handles MarkSystems, NEWSTAR, NX, BuildPro, Hyphen HomeFront, BRIX, KOVA, Buildertrend, CoConstruct, JobTread, and any CSV/Excel export. Drop your files in, AI auto-detects column mapping, runs 23 dedicated import endpoints covering vendors, homes, communities, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more. ~$0.01 per migration — we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders — no credit card, no contract, no implementation fee.",
  },
];

export default function MarkSystemsAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="MarkSystems"
      badgeLabel="MarkSystems / NX Alternative"
      heroLine1="MarkSystems scope."
      heroLine2="Without the Constellation contract."
      accentColor="emerald"
      heroParagraph="Cornerstone PM™ is the modern, AI-native alternative to Constellation HomeBuilder Systems' MarkSystems and its successor NX, built for small-to-mid home builders. Same core scope — options rules engine, sales pipeline, purchasing, scheduling, vendor portal, warranty — plus native AI agents (Foreman AI on Pro $499/mo), 37+ named webhook events (Pro+), and a public REST API (Pro+ $599/mo). Pricing published online from $149/mo. No Constellation services engagement required."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side for small-to-mid home builders."
      comparisonRows={comparisonRows}
      trademarkName="MarkSystems"
      whySwitchHeadline="Why builders pick Cornerstone over MarkSystems / NX"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already on MarkSystems or NX? Drop your export. We'll do the rest."
      migrationDesc="Export your MarkSystems / NX data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, design options, scopes, and budgets. Dry-run before you commit. ~$0.01 per migration — we absorb it. No Constellation services engagement required."
      faqTitle="MarkSystems Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM™ from MarkSystems, NX, or NEWSTAR."
      faqItems={faqItems}
      footerHeadline="Ready to skip the Constellation cycle?"
      footerSubtext="Join the beta and get 2 years free. Operational in hours, not months. No services engagement required."
      relatedPages={[
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs MiTek KOVA", href: "/kova-alternative" },
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
