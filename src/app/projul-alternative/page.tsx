import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Projul Alternative for Home Builders | Cornerstone PM",
  description:
    "Projul is built for residential contractors. Cornerstone PM is the alternative for home builders - AI agents, options engine, multi-community management, and 30 webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/projul-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Projul targets residential remodelers and small contractors. Cornerstone PM is purpose-built for home builders managing multiple communities." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix - not a Projul feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Projul is single-job focused." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses." },
  { feature: "Native AI agents (Foreman AI - 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Projul has no native AI." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "30+ named events and counting â€” HMAC signatures, auto-retry. New events ship as the platform grows. Cornerstone Pro+." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: false, note: "Cornerstone: 59 endpoints, public docs. Projul has no public API." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link - no account needed." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both include project scheduling." },
  { feature: "CRM / lead tracking", cornerstone: true, competitor: true, note: "Both include CRM and lead management." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$49/mo+", note: "Projul is cheaper but built for smaller remodeling contractors. Cornerstone is a full home builder platform." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder workflows native", desc: "Lot management, floorplan pricing, structural options, design center, multi-community pipelines, pre-sale flow - first-class features in Cornerstone. None of these exist in Projul." },
  { title: "AI agents built in â€” 45+ skills", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. Image search, anti-bot web scraping, and per-user memory that greets you by your chosen name and learns your habits over time â€” all custom-coded into the app. No other home builder platform comes close." },
  { title: "Public API + 30 webhooks", desc: "59 REST endpoints, 30 named webhook events with HMAC signatures. Projul has no public API. Wire SMS, voice, or your own AI agent to your construction data." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Projul a good fit for home builders?",
    a: "Projul is designed for residential remodelers and small contractors. It handles scheduling, lead tracking, and invoicing well for renovation-type work. If you're a home builder managing lot inventories, pre-sale selections, multi-community pipelines, and construction schedules across multiple floorplans, Projul lacks the specialized features you need.",
  },
  {
    q: "What's the best Projul alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. Beyond the basics (scheduling, CRM, client portal), it adds a structural options engine, floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30+ named webhook events (catalog growing), and a public REST API with 59+ endpoints and growing rapidly.",
  },
  {
    q: "Can I migrate from Projul to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Projul export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day. ~$0.01 per migration in AI - we absorb it.",
  },
  {
    q: "Does Cornerstone PM have scheduling like Projul?",
    a: "Yes - and more. Cornerstone ships full Gantt scheduling with dependencies, cascade scheduling (change one date, the whole schedule shifts), vendor notifications, and 30 webhook events that can trigger external SMS or voice notifications when tasks change.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
  },
];

export default function ProjulAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Projul"
      badgeLabel="Projul Alternative - Home Builders"
      heroLine1="Remodeling software won't cut it."
      heroLine2="You're building communities."
      accentColor="cyan"
      heroParagraph="Projul is built for residential remodelers and small contractors. Cornerstone PM is the Projul alternative for home builders - structural options engine, floorplan pricing matrix, multi-community lot management, 45+ AI skills, and a public REST API from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Projul vs Cornerstone PM - remodeling contractor tool vs. home builder platform."
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
      footerHeadline="Ready for a home builder platform?"
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
