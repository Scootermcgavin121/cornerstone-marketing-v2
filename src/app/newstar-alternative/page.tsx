import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "NEWSTAR Alternative for Small-to-Mid Home Builders | Cornerstone PM™",
  description:
    "NEWSTAR alternative for home builders. Options engine, sales pipeline, purchasing, and AI agents (Pro $499/mo) from $149/mo - no 6-figure implementation.",
  alternates: { canonical: "https://www.cornerstonepm.ai/newstar-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$25k-$100k+", note: "NEWSTAR requires extensive consultant-led implementation." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "3-12 months", note: "AI Migration Wizard + 23 import endpoints. Drop files, wizard does the rest - operational in an afternoon." },
  { feature: "Built for small-to-mid home builders", cornerstone: true, competitor: false, note: "NEWSTAR is designed for top-100 enterprise home builders. Cornerstone is built for small-to-mid home builders - production, semi-custom, and custom - who need the same core capabilities without the $50k+ implementation and dedicated IT team." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 100+ Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 sec. NEWSTAR has no native AI." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 37+ named events and counting — typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. NEWSTAR offers no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects NEWSTAR export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock. Cornerstone Builder+." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. NEWSTAR ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. NEWSTAR has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "limited", note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. NEWSTAR's PO flow is enterprise-rigid, typically tied to fixed milestone gates with custom configuration cost." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "limited", note: "Real-time buyer portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. NEWSTAR has buyer-facing tools but they're enterprise-implementation-dependent, not turnkey." },
  { feature: "Model home QR for lead capture", cornerstone: true, competitor: false, note: "Replaces paper sign-in sheets at model homes with a scan-and-go lead capture flow." },
  { feature: "AI camera-event auto-task-start", cornerstone: true, competitor: false, note: "Webhook endpoint accepts events from any camera or sensor. Cornerstone Pro+ feature." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "Modern web-based UI", cornerstone: true, competitor: false, note: "NEWSTAR is built on a Windows desktop architecture; Cornerstone is web and mobile native." },
  { feature: "Public REST API (500+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 500+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. NEWSTAR: enterprise integrations only." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): connect Claude or ChatGPT to your live data." },
  { feature: "Options engine", cornerstone: true, competitor: true, note: "Both ship a full structural and design options engine." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: true, note: "Per-community plan pricing." },
  { feature: "Multi-community management", cornerstone: true, competitor: true, note: "Both support multiple communities and divisions." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling modules." },
  { feature: "Purchasing & POs", cornerstone: true, competitor: true, note: "Cornerstone Pro+ adds 7-wave automated bidding pipeline." },
  { feature: "Per-user fees", cornerstone: "Up to 30 users (60 on Pro+), every tier", competitor: "Per-seat", note: "Cornerstone: no per-seat pricing on any plan." },
  { feature: "Pricing model", cornerstone: "Flat — up to 30 users (60 on Pro+)", competitor: "Enterprise quote + implementation", note: "NEWSTAR requires enterprise contracts plus $25k–$100k+ implementation fees. Cornerstone starts at $149/mo, self-serve, zero implementation cost. More importantly: NEWSTAR is built for top-100 enterprise builders — small-to-mid home builders can't get this product at any accessible price point, regardless of what features they compare." },
  { feature: "Cornerstone tiers (flat — up to 30 users • 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Built for the builder NEWSTAR ignores", desc: "NEWSTAR is built for top-100 enterprise builders. Cornerstone is built for small-to-mid home builders running 5-200 homes per year - without the $50k+ implementation and dedicated IT team." },
  { title: "Action-taking AI on Pro - 100+ skills", desc: "Foreman AI (Cornerstone Pro, $499/mo) reads AND writes data, remembers your preferences, analyzes images, and scrapes product pages with AI-powered web scraping. Blueprint AI converts floor plans to takeoffs in 60 seconds. NEWSTAR has no native AI." },
  { title: "Public REST API + 37+ webhooks on Pro+", desc: "500+ REST endpoints (growing), 37+ named webhook events (catalog growing), HMAC signatures, and public docs on Pro+ ($599/mo). NEWSTAR integrations are enterprise-contract only. Wire Twilio or your own agents to our webhooks." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best NEWSTAR alternative for home builders?",
    a: "Cornerstone PM™ is the closest functional NEWSTAR alternative for small-to-mid home builders. It includes the same core capabilities - options engine, floorplan pricing matrix, multi-community management, sales pipeline, purchasing, and construction scheduling - without NEWSTAR's $25,000-$100,000+ implementation cost. Cornerstone PM™ also adds native AI agents (Foreman AI 100+ skills on Pro $499/mo, Blueprint AI), 37+ named webhook events (Pro+), and a public REST API (Pro+).",
  },
  {
    q: "Is Cornerstone PM™ a NEWSTAR replacement?",
    a: "For small-to-mid home builders, yes. Cornerstone PM™ covers NEWSTAR's core home builder workflows - lots, models, options, plan repeats, design center, draws, multi-community pipelines - in a modern web platform with native AI (Pro $499/mo). For top-100 enterprise builders with deep custom integrations to existing ERPs, NEWSTAR may still be the right fit.",
  },
  {
    q: "How much does Cornerstone PM™ cost compared to NEWSTAR?",
    a: "Cornerstone PM™ starts at $149/mo (Starter, up to 30 users) with zero implementation cost. NEWSTAR pricing is enterprise-quoted and not publicly listed, but typical NEWSTAR implementations run $25,000-$100,000+ before monthly licensing. For the full platform: Cornerstone Builder ($299/mo, options engine + full pipeline) and Cornerstone Pro ($499/mo, Foreman AI + Blueprint AI) are flat within tier (up to 30 users / 60 on Pro+). Pro+ at $599/mo includes the REST API, 37+ named webhook events, and BYOA - capabilities NEWSTAR offers only at the enterprise tier.",
  },
  {
    q: "Can Cornerstone PM™ handle production builder workflows?",
    a: "Yes. Cornerstone PM™ was built with production-style workflows in mind - lot inventories, floorplan pricing matrices, structural options engines, design center allowances, draw schedules, and multi-community pipelines are first-class concepts in the platform. Semi-custom and custom builders with repeating floorplans benefit just as much.",
  },
  {
    q: "Does Cornerstone PM™ support BuildPro and MarkSystems migrations too?",
    a: "Yes - the AI Migration Wizard handles NEWSTAR, BuildPro, MarkSystems, and any CSV/Excel export. Drop your files in, the wizard reads them, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "What about NEWSTAR's options engine? Does Cornerstone match it?",
    a: "Cornerstone PM™'s options engine (Builder plan, $299/mo) handles structural and design options per floorplan, dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup as buyers select. Foreman AI's Design Center domain (Pro $499/mo) adds plain-English option configuration and 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses) across 7 categories - something NEWSTAR doesn't offer.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent - up to 30 users (60 on Pro+). The options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
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
      heroParagraph="Cornerstone PM™ is the modern NEWSTAR and BuildPro alternative for small-to-mid home builders. Same core capabilities - options engine, floorplan pricing matrix, multi-community management - plus native AI agents (Foreman AI on Pro $499/mo), 37+ named webhook events (Pro+), and a public REST API (Pro+ $599/mo). Starts at $149/mo, up to 30 users (60 on Pro+), operational in hours not months."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side for small-to-mid home builders."
      comparisonRows={comparisonRows}
      trademarkName="NEWSTAR"
      whySwitchHeadline="Built for the builder NEWSTAR ignores"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using NEWSTAR? Drop your export. We'll do the rest."
      migrationDesc="Export your NEWSTAR data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, design options, scopes, and budgets. Dry-run before you commit. ~$0.01 per migration - we absorb it."
      faqTitle="NEWSTAR Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM™ from NEWSTAR or BuildPro."
      faqItems={faqItems}
      footerHeadline="Ready to leave the implementation quagmire?"
      footerSubtext="Join the beta and get 2 years free. Operational in hours, not months."
      relatedPages={[
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
