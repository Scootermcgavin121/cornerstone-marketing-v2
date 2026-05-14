import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Housecall Pro Alternative for Home Builders | Cornerstone PM™",
  description:
    "Housecall Pro is built for home service businesses. Cornerstone PM™ is the alternative for home builders -- AI agents (Pro $499/mo), options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/housecall-pro-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Housecall Pro is built for HVAC, plumbing, electrical, and home service businesses. Cornerstone PM™ is purpose-built for home builders -- production, semi-custom, and custom -- with lot management, options engine, and multi-community pipelines that home service tools don't offer." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a home service feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for home builders. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Housecall Pro is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 100+ skills)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data -- 100+ skills. Blueprint AI: PDF to takeoff in 60 seconds. Housecall Pro has AI Team features (CSR AI, call answering) for home service dispatch -- different market, different purpose." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 37+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Housecall Pro has no named construction event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (60+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 60+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. purpose-built for construction. Housecall Pro: API on MAX plan, oriented toward home service workflows." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Housecall Pro ships none of these." },
  { feature: "Sales model home QR \u2014 walk-in buyer check-in + auto Lead DB save", cornerstone: true, competitor: false, note: "One QR at every model home entrance: walk-in buyers self-register on their own phone, returning visitors are recognized, every scan auto-creates a Lead record (name, email, phone, \"how did you hear about us?\") tied to the community, and the assigned sales agent gets an instant in-app + email notification. Replaces paper sign-in sheets with a searchable, attributable lead pipeline. Housecall Pro has no model-home lead-capture flow." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Housecall Pro has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Housecall Pro is service-dispatch-first, not a builder PO platform." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Housecall Pro is service-dispatch-first — no buyer portal of this depth." },
  { feature: "Field service dispatching", cornerstone: false, competitor: true, note: "Housecall Pro excels at dispatching technicians for recurring service calls. Not a home builder need." },
  { feature: "Pricing model", cornerstone: "Flat — up to 30 users (60 on Pro+)", competitor: "Per-plan, 1-user base", note: "Housecall Pro Basic starts at $59/mo (1 user, annual). Cornerstone Starter starts at $149/mo with up to 30 users (60 on Pro+). Different markets entirely -- Housecall Pro doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat — up to 30 users · 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction vs home services", desc: "Housecall Pro runs dispatch, service agreements, and recurring jobs for HVAC and plumbing companies. Cornerstone runs lot management, floorplan pricing, options engines, design centers, and multi-community pipelines for home builders. Different markets entirely." },
  { title: "AI agents for builders -- Pro $499/mo", desc: "Foreman AI (100+ skills) creates POs, updates design options, generates SOWs, and remembers your preferences. Blueprint AI converts PDF floor plans to takeoffs. Built for construction workflows, not service call scheduling." },
  { title: "Full PM + options engine", desc: "Scheduling (Starter $149), purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline (Builder $299) -- all in one home-builder platform. Housecall Pro has none of these concepts." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Housecall Pro a good fit for home builders?",
    a: "No -- and we'll be honest about it. Housecall Pro is built for home service businesses: HVAC, plumbing, electrical, lawn care, cleaning. Its core features are dispatch, recurring service agreements, technician scheduling, and customer communication for service calls. If you're a home builder managing lot inventories, floorplans, pre-sale design centers, and multi-community schedules, Housecall Pro is the wrong tool.",
  },
  {
    q: "Why would a home builder search for a Housecall Pro alternative?",
    a: "Usually because they're a small builder who started with whatever software was recommended to them, or they're a subcontractor who became a builder. Housecall Pro handles the service side well. When you start building homes -- doing pre-sale selections, managing multiple floorplans, running construction schedules -- you need a platform built for new construction, not service dispatch.",
  },
  {
    q: "What does Cornerstone PM™ have that Housecall Pro doesn't?",
    a: "For home builders: structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, pre-sale design center with 64 Designer Packages curated by an actual interior designer, Blueprint AI floor plan takeoffs, Foreman AI with 100+ skills (Pro $499/mo), 37+ named webhook events (Pro+), public REST API (Pro+), a no-login vendor portal (vendors confirm tasks, accept schedule changes, and submit bids via email magic links — no app, no account, no password), and one-click full database export (CSV/JSON).",
  },
  {
    q: "Can I migrate my Housecall Pro data to Cornerstone PM™?",
    a: "Yes. The AI Migration Wizard reads your Housecall Pro export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- up to 30 users (60 on Pro+). Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM™ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function HousecallProAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Housecall Pro"
      badgeLabel="Housecall Pro Alternative -- Home Builders"
      heroLine1="Housecall Pro dispatches technicians."
      heroLine2="You build homes."
      accentColor="cyan"
      heroParagraph="Housecall Pro is a home service platform for HVAC, plumbing, and electrical companies. Cornerstone PM™ is the alternative for home builders -- structural options engine (Builder $299/mo), floorplan pricing, 100+ AI skills (Pro $499/mo), and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Housecall Pro vs Cornerstone PM™ -- home services vs. new home construction."
      comparisonRows={comparisonRows}
      trademarkName="Housecall Pro"
      whySwitchHeadline="What home builders get that Housecall Pro can't offer"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a home service business (HVAC, plumbing, electrical, cleaning), Housecall Pro is probably a good fit. This page is for home builders who landed on Housecall Pro through a search. You need different software -- Cornerstone PM™ is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Switching from Housecall Pro? Bring your contacts and vendors."
      migrationDesc="Export your Housecall Pro data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Housecall Pro Alternative FAQ"
      faqSubtitle="For home builders who need more than a service dispatch platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Jobber", href: "/jobber-alternative" },
        { text: "vs JobNimbus", href: "/jobnimbus-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
