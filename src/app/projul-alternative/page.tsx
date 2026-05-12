import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Projul Alternative for Home Builders | Cornerstone PM",
  description:
    "Projul is built for residential contractors and remodelers. Cornerstone PM is the alternative for home builders -- AI agents (Pro $499/mo), options engine, multi-community management, and 30+ webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/projul-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Projul targets residential remodelers and small contractors. Cornerstone PM is purpose-built for home builders -- production, semi-custom, and custom -- with lot management, options engine, and multi-community pipelines that remodeling tools don't offer." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a Projul feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Projul is single-job focused." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 83+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Projul has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Projul has no public REST API or webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows.. Projul has no public API (Zapier integration only)." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Projul targets remodelers and residential contractors — no production-builder-grade buyer portal." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Vendors confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent straight to their email. No app to download, no account to create, no password to remember. Click the link, do the thing, done. Biggest friction-killer for trade partners in the industry." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Projul ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Projul has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Not a Projul feature." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both include project scheduling with Gantt views." },
  { feature: "CRM / lead tracking", cornerstone: true, competitor: true, note: "Both include CRM and lead management." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Annual commitment, flat per company", note: "Projul requires annual commitments: Core ~$399/mo (annual), Core+ ~$599/mo, Pro ~$1,199/mo. Cornerstone is flat at every tier: Starter $149, Builder $299, Pro $499, Pro+ $599 -- no annual lock-in required. More importantly: Projul doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder workflows native", desc: "Lot management, floorplan pricing, structural options, design center, multi-community pipelines, pre-sale flow (Builder $299/mo) -- first-class features in Cornerstone. None of these exist in Projul." },
  { title: "AI agents built in -- Pro $499/mo", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. Per-user memory, image search, vision, anti-bot web scraping. No other home-builder platform comes close." },
  { title: "Public API + 30+ webhooks (Pro+)", desc: "59 REST endpoints, 30+ named webhook events with HMAC signatures -- both on Pro+ ($599/mo). Projul has no public API. Wire SMS, voice, or your own AI agent to your construction data." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Projul a good fit for home builders?",
    a: "Projul is designed for residential remodelers and small contractors. It handles scheduling, lead tracking, and invoicing well for renovation-type work. If you're a home builder managing lot inventories, pre-sale selections, multi-community pipelines, and construction schedules across multiple floorplans, Projul lacks the specialized features you need.",
  },
  {
    q: "What's the best Projul alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. Beyond the basics (scheduling, CRM, client portal from Starter $149/mo), it adds a structural options engine, floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 83+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API with 59+ endpoints (and growing).",
  },
  {
    q: "How does Projul pricing compare to Cornerstone?",
    a: "Projul requires annual commitments: Core is approximately $399/mo (annual), Core+ approximately $599/mo, Pro approximately $1,199/mo. Cornerstone starts at $149/mo (Starter) with no annual lock-in required. Builder is $299/mo (adds options engine + design center). Pro is $499/mo (adds Foreman AI + Blueprint AI). Pro+ is $599/mo (adds REST API + BYOA). Projul doesn't ship options engines, multi-community pipelines, or home-builder AI at any price tier.",
  },
  {
    q: "Can I migrate from Projul to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Projul export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day. ~$0.01 per migration in AI -- we absorb it.",
  },
  {
    q: "Does Cornerstone PM have scheduling like Projul?",
    a: "Yes -- and more. Cornerstone ships full Gantt scheduling with dependencies, cascade scheduling (change one date, the whole schedule shifts), vendor notifications, and 30+ named webhook events (Pro+) that can trigger external SMS or voice notifications when tasks change.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function ProjulAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Projul"
      badgeLabel="Projul Alternative -- Home Builders"
      heroLine1="Remodeling software won't cut it."
      heroLine2="You're building communities."
      accentColor="cyan"
      heroParagraph="Projul is built for residential remodelers and small contractors (from ~$399/mo annual). Cornerstone PM is the Projul alternative for home builders -- structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, 83 AI skills (Pro $499/mo), and a public REST API (Pro+) from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Projul vs Cornerstone PM -- remodeling contractor tool vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Projul"
      whySwitchHeadline="What home builders get with Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Moving from Projul? Bring your data with you."
      migrationDesc="Export your Projul data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Projul Alternative FAQ"
      faqSubtitle="For home builders evaluating Projul vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Ready for a home-builder platform?"
      footerSubtext="Join the beta and get 2 years free. Multi-community pipelines native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Contractor Foreman", href: "/contractor-foreman-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
