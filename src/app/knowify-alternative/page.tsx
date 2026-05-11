import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Knowify Alternative for Home Builders | Cornerstone PM",
  description:
    "Knowify is built for subcontractors. Cornerstone PM is the alternative for home builders - AI agents, options engine, multi-community management, and 30 webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/knowify-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders (GC/owner role)", cornerstone: true, competitor: false, note: "Knowify is built for specialty subcontractors (electrical, plumbing, drywall). Cornerstone PM is built for the home builder acting as GC — managing the whole project." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing - not a subcontractor concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Knowify is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses." },
  { feature: "Native AI agents (Foreman AI - 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Knowify has no native AI." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Vendor portal (bid management)", cornerstone: true, competitor: false, note: "7-wave automated bidding pipeline + vendor portal (no login required)." },
  { feature: "Job costing / T&M billing", cornerstone: "limited", competitor: true, note: "Knowify is strong at time-and-material billing for subcontractors. Cornerstone handles builder cost tracking, not T&M invoicing to GCs." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$149/mo+", note: "Similar entry price. Cornerstone is a full home builder platform; Knowify is a subcontractor tool." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "GC / builder role, not subcontractor role", desc: "Knowify is built for subs billing to GCs. Cornerstone is built for the GC - managing subs, vendors, and communities. You assign bids, run schedules, manage lot inventories, and deliver homes." },
  { title: "AI agents native â€” 45+ skills", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. AI image search, anti-bot web scraping, and per-user memory that greets you by your chosen name and learns your habits over time â€” all custom-coded into the app. No other home builder platform comes close." },
  { title: "Full PM + design center", desc: "Scheduling, purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline - all in one platform from $149/mo." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Knowify a good fit for home builders?",
    a: "Knowify is designed for specialty subcontractors - electricians, plumbers, HVAC techs, drywall crews - who bill time-and-material to general contractors. If you're a home builder acting as the GC, managing subs, running multi-community pipelines, and pre-selling homes with a design center, you need a different tool.",
  },
  {
    q: "What's the best Knowify alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders in the GC role. It includes everything from pre-sale options engine and design center through construction scheduling, vendor bid management, purchasing, and homeowner portal - plus native AI agents (Foreman AI 45+ skills, Blueprint AI) and a public REST API with 30 webhook events.",
  },
  {
    q: "Can I migrate from Knowify to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Knowify export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM handle subcontractor scheduling?",
    a: "Yes. Cornerstone PM includes construction scheduling with vendor notifications, cascade scheduling, and trade-specific scope assignment. Vendors receive automated notifications, access a no-login vendor portal for bid submission, and get schedule updates via webhook events that can trigger SMS or voice calls.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
  },
];

export default function KnowifyAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Knowify"
      badgeLabel="Knowify Alternative - Home Builders"
      heroLine1="Knowify is for subcontractors."
      heroLine2="You're the builder."
      accentColor="violet"
      heroParagraph="Knowify is built for specialty subcontractors billing to GCs. Cornerstone PM is the alternative for home builders in the GC role - managing subs, running communities, pre-selling homes with a design center, and closing with draws. From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Knowify vs Cornerstone PM - subcontractor tool vs. home builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Knowify"
      whySwitchHeadline="What home builders need that Knowify doesn't have"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a specialty subcontractor billing T&M to general contractors, Knowify is a solid tool. This page is for home builders who found Knowify through a search. You're the builder - you need a different platform, and Cornerstone PM is built for your role."
      showMigrationCTA={true}
      migrationHeadline="Moving from Knowify? Bring your contacts and vendors."
      migrationDesc="Export your Knowify data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Knowify Alternative FAQ"
      faqSubtitle="For home builders who need a GC-role platform, not a subcontractor tool."
      faqItems={faqItems}
      footerHeadline="Built for the builder, not the sub."
      footerSubtext="Join the beta and get 2 years free. Home builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
