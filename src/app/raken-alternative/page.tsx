import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Raken Alternative for Production Home Builders | Cornerstone PM",
  description:
    "Raken focuses on daily logs and field reporting. Cornerstone PM is the full alternative for production home builders — AI agents, options engine, scheduling, purchasing, and 30 webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/raken-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Full construction PM platform", cornerstone: true, competitor: false, note: "Raken is primarily a daily log, field reporting, and time-tracking tool. Cornerstone PM is a full production builder platform: scheduling, purchasing, bid management, homeowner portal, options engine, and more." },
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "Raken targets commercial and residential GCs primarily for field documentation. Cornerstone is purpose-built for production (tract/spec) home builders." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix — not a daily log feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Raken is field-log focused." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with curated selection packages." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Raken has no native AI agents." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry. Raken has no webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: false, note: "Cornerstone: 59 endpoints, public docs. Raken has limited API access." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link — no account needed." },
  { feature: "Construction scheduling (Gantt)", cornerstone: true, competitor: false, note: "Full Gantt scheduling with dependencies and cascade scheduling. Raken has basic scheduling." },
  { feature: "Daily logs / field reports", cornerstone: "limited", competitor: true, note: "Raken specializes in field reporting and daily log workflows. Cornerstone has basic daily log capabilities." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$20/mo+", note: "Raken is cheaper as a field log tool. Cornerstone is a full production builder platform." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Beyond field logs: full PM platform", desc: "Raken is excellent for daily logs and field reporting. Cornerstone PM includes all of that plus scheduling, homeowner portal, purchasing, bid management, options engine, and design center. One platform for the entire build." },
  { title: "AI built in — 45+ skills", desc: "Foreman AI reads AND writes your data: POs, options, SOWs, bid comparisons, image search, web scraping. Blueprint AI converts floor plans to takeoffs in 60 seconds. No other production builder platform comes close." },
  { title: "30 webhooks + public API", desc: "30 named webhook events with typed payload schemas and HMAC signatures. Public REST API with 59 endpoints. Wire SMS, voice, or your own AI agent to schedule changes, vendor notifications, and bid events." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM different from Raken?",
    a: "Raken is primarily a field reporting and daily log tool — it's great at capturing jobsite activity, time tracking, and superintendent notes. Cornerstone PM is a full construction management platform for production home builders: scheduling, purchasing, bid management, homeowner portal, structural options engine, design center, multi-community pipelines, and native AI agents. If you need daily logs only, Raken is fine. If you need to run the whole build, use Cornerstone.",
  },
  {
    q: "What's the best Raken alternative for production home builders?",
    a: "Cornerstone PM provides the project management backbone Raken doesn't offer. It includes scheduling (Gantt with dependencies, cascade scheduling), purchasing and POs, bid management with vendor portal, homeowner portal, structural options engine, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API — built specifically for production home builders.",
  },
  {
    q: "Can I migrate from Raken to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Raken export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM have daily log capabilities like Raken?",
    a: "Cornerstone PM includes basic daily log capabilities for superintendents. For production builders who need detailed daily log compliance reporting (common in commercial construction or union environments), Raken is stronger. For production residential builders, Cornerstone's integrated scheduling and vendor notification system typically replaces the need for a separate daily log tool.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function RakenAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Raken"
      badgeLabel="Raken Alternative — Production Builders"
      heroLine1="Daily logs are just the start."
      heroLine2="Manage the whole build."
      accentColor="amber"
      heroParagraph="Raken is a field reporting and daily log tool. Cornerstone PM is the full Raken alternative for production home builders — scheduling, purchasing, bid management, options engine, 45+ AI skills, and a public REST API from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Raken vs Cornerstone PM — field log tool vs. full production builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Raken"
      whySwitchHeadline="Why production builders need more than daily logs"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Moving from Raken? Bring your data."
      migrationDesc="Export your Raken data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Raken Alternative FAQ"
      faqSubtitle="For production home builders who need more than field reporting."
      faqItems={faqItems}
      footerHeadline="Ready for a full production builder platform?"
      footerSubtext="Join the beta and get 2 years free. Beyond daily logs."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "vs Fieldwire", href: "/fieldwire-alternative" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
