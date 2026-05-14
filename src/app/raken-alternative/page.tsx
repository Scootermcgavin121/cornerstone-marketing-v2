import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Raken Alternative for Home Builders | Cornerstone PM™",
  description:
    "Raken focuses on daily logs and field reporting. Cornerstone PM™ is the full alternative for home builders -- AI agents (Pro $499/mo), options engine, scheduling, purchasing, and 37+ webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/raken-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Full construction PM platform", cornerstone: true, competitor: false, note: "Raken is primarily a daily log, field reporting, and time-tracking tool. Cornerstone PM™ is a full home-builder platform: scheduling, purchasing, bid management, homeowner portal, options engine, and more." },
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Raken targets commercial and residential GCs for field documentation. Cornerstone is purpose-built for home builders -- production, semi-custom, and custom." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a daily log feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for home builders. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Raken is field-log focused." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 100+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Raken has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 37+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Raken has no webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (40+ endpoints, growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+: 40+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Raken has limited API access." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Vendors confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent straight to their email. No app to download, no account to create, no password to remember. Click the link, do the thing, done. Biggest friction-killer for trade partners in the industry." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Raken ships none of these." },
  { feature: "Sales model home QR \u2014 walk-in buyer check-in + auto Lead DB save", cornerstone: true, competitor: false, note: "One QR at every model home entrance: walk-in buyers self-register on their own phone, returning visitors are recognized, every scan auto-creates a Lead record (name, email, phone, \"how did you hear about us?\") tied to the community, and the assigned sales agent gets an instant in-app + email notification. Replaces paper sign-in sheets with a searchable, attributable lead pipeline. Raken has no model-home lead-capture flow." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Raken has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Raken is a daily-reports platform — no PO engine." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time buyer portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Raken is a field-reporting / daily-log platform — no buyer portal." },
  { feature: "Construction scheduling (Gantt)", cornerstone: true, competitor: false, note: "Full Gantt scheduling with dependencies and cascade scheduling (Starter+). Raken has basic scheduling." },
  { feature: "Daily logs / field reports", cornerstone: "limited", competitor: true, note: "Raken specializes in field reporting and daily log workflows. Cornerstone has basic daily log capabilities." },
  { feature: "Pricing model", cornerstone: "Flat — up to 30 users (60 on Pro+)", competitor: "Contact for pricing", note: "Raken does not publish pricing publicly -- contact for a quote. Cornerstone is flat at every tier — up to 30 users (60 on Pro+) from $149. More importantly: Raken doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat — up to 30 users • 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Beyond field logs: full PM platform", desc: "Raken is excellent for daily logs and field reporting. Cornerstone PM™ includes all of that plus scheduling (Starter $149), homeowner portal, purchasing, bid management, options engine, and design center (Builder $299). One platform for the entire build." },
  { title: "AI built in -- Pro $499/mo", desc: "Foreman AI reads AND writes your data: POs, options, SOWs, bid comparisons, image search, web scraping. Blueprint AI converts floor plans to takeoffs in 60 seconds. No other home-builder platform comes close." },
  { title: "37+ webhooks + public API (Pro+)", desc: "37+ named webhook events with typed payload schemas and HMAC signatures. Public REST API with 40+ endpoints -- both on Pro+ ($599/mo). Wire SMS, voice, or your own AI agent to schedule changes, vendor notifications, and bid events." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM™ different from Raken?",
    a: "Raken is primarily a field reporting and daily log tool -- it's great at capturing jobsite activity, time tracking, and superintendent notes. Cornerstone PM™ is a full construction management platform for home builders: scheduling, purchasing, bid management, homeowner portal, structural options engine (Builder $299/mo), design center, multi-community pipelines, and native AI agents (Foreman AI on Pro $499/mo). If you need daily logs only, Raken is fine. If you need to run the whole build, use Cornerstone.",
  },
  {
    q: "What's the best Raken alternative for home builders?",
    a: "Cornerstone PM™ provides the project management backbone Raken doesn't offer. It includes scheduling (Gantt with dependencies, cascade scheduling from Starter $149/mo), purchasing and POs, bid management with vendor portal, homeowner portal, structural options engine (Builder $299/mo), native AI agents (Foreman AI 100+ skills on Pro $499/mo, Blueprint AI), 37+ named webhook events (Pro+), and a public REST API -- built specifically for home builders.",
  },
  {
    q: "Can I migrate from Raken to Cornerstone PM™?",
    a: "Yes. The AI Migration Wizard reads your Raken export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM™ have daily log capabilities like Raken?",
    a: "Cornerstone PM™ includes basic daily log capabilities for superintendents. For production builders who need detailed daily log compliance reporting (common in commercial construction or union environments), Raken is stronger. For residential home builders, Cornerstone's integrated scheduling and vendor notification system typically replaces the need for a separate daily log tool.",
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

export default function RakenAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Raken"
      badgeLabel="Raken Alternative -- Home Builders"
      heroLine1="Daily logs are just the start."
      heroLine2="Manage the whole build."
      accentColor="amber"
      heroParagraph="Raken is a field reporting and daily log tool. Cornerstone PM™ is the full Raken alternative for home builders -- scheduling from $149/mo, options engine (Builder $299/mo), 100+ AI skills (Pro $499/mo), and a public REST API (Pro+)."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Raken vs Cornerstone PM™ -- field log tool vs. full home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Raken"
      whySwitchHeadline="Why home builders need more than daily logs"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Moving from Raken? Bring your data."
      migrationDesc="Export your Raken data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Raken Alternative FAQ"
      faqSubtitle="For home builders who need more than field reporting."
      faqItems={faqItems}
      footerHeadline="Ready for a full home-builder platform?"
      footerSubtext="Join the beta and get 2 years free. Beyond daily logs."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "vs Fieldwire", href: "/fieldwire-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
