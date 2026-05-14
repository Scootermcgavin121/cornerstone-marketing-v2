import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Workiz Alternative for Home Builders | Cornerstone PM™",
  description:
    "Workiz is built for field service businesses. Cornerstone PM™ is the alternative for home builders -- AI agents (Pro $499/mo), options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/workiz-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Workiz is built for locksmith, appliance repair, carpet cleaning, and other field service businesses. Cornerstone PM™ is purpose-built for home builders -- production, semi-custom, and custom -- with lot management, options engine, and multi-community pipelines." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a field service concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Workiz is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 100+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Workiz has no native construction AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Workiz: limited webhook support for field service workflows." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows., purpose-built for construction. Workiz: limited API access for field service integrations." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Workiz is service-dispatch-first — no buyer portal of this depth." },
  { feature: "Bid management + vendor portal (no login)", cornerstone: true, competitor: false, note: "Automated bid pipeline + a no-login vendor portal: vendors confirm tasks, accept schedule changes, and submit bids via secure email magic links — no app, no account, no password." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture - replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Workiz ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Workiz has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Workiz is service-dispatch-first — no builder PO engine." },
  { feature: "Call tracking / voice", cornerstone: false, competitor: true, note: "Workiz has strong call tracking and VoIP features for service dispatch. Not a home builder need." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Contact for pricing", note: "Workiz does not publish pricing publicly -- contact for current rates. Cornerstone is flat at every tier, unlimited users from $149. More importantly: Workiz doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction needs, not field service", desc: "Workiz handles dispatch, call tracking, and service scheduling for locksmiths and appliance repair companies. Cornerstone handles lot management, floorplan pricing, structural options, design centers, and multi-community pipelines for home builders." },
  { title: "AI agents native -- Pro $499/mo", desc: "Foreman AI (100+ skills) creates POs, updates design options, generates SOWs, and remembers preferences. Blueprint AI converts floor plans to takeoffs in 60 seconds. No other home-builder platform comes close." },
  { title: "30+ webhooks + public API (Pro+)", desc: "30+ named webhook events with typed payload schemas and HMAC signatures. Wire your own SMS, voice, or AI agents. Public REST API with 59 endpoints -- both on Pro+ ($599/mo)." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Workiz a good fit for home builders?",
    a: "Workiz is built for field service businesses -- locksmith, appliance repair, carpet cleaning, garage door. Its strengths are dispatch, call tracking, and service scheduling. If you're a home builder, Workiz lacks the features you need: structural options engine, floorplan pricing matrix, pre-sale design center, construction scheduling, and multi-community pipelines.",
  },
  {
    q: "What's the best Workiz alternative for home builders?",
    a: "Cornerstone PM™ is purpose-built for home builders. It covers scheduling, client portal, and document management -- plus a structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 100+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API.",
  },
  {
    q: "Can I migrate from Workiz to Cornerstone PM™?",
    a: "Yes. The AI Migration Wizard reads your Workiz export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM™ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function WorkizAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Workiz"
      badgeLabel="Workiz Alternative -- Home Builders"
      heroLine1="Workiz is for field service."
      heroLine2="You build homes."
      accentColor="rose"
      heroParagraph="Workiz is built for locksmiths, appliance repair, and field service businesses. Cornerstone PM™ is the alternative for home builders -- structural options engine (Builder $299/mo), floorplan pricing, 100+ AI skills (Pro $499/mo), and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Workiz vs Cornerstone PM™ -- field service platform vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Workiz"
      whySwitchHeadline="What home builders get with Cornerstone PM™"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a field service business -- locksmith, appliance repair, carpet cleaning -- Workiz is a solid tool. This page is for home builders who found Workiz through a search. You need a different platform, and Cornerstone PM™ is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Workiz? Bring your contacts and vendors."
      migrationDesc="Export your Workiz data, drop it in our wizard, and AI auto-maps contacts, vendors, and job history. Dry-run before you commit."
      faqTitle="Workiz Alternative FAQ"
      faqSubtitle="For home builders who need more than a field service platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not field service."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Housecall Pro", href: "/housecall-pro-alternative" },
        { text: "vs Jobber", href: "/jobber-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
