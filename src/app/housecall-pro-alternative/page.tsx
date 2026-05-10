import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Housecall Pro Alternative for New Home Builders | Cornerstone PM",
  description:
    "Housecall Pro is built for home service businesses. Cornerstone PM is the alternative for production new home builders — AI agents, options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/housecall-pro-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production new home builders", cornerstone: true, competitor: false, note: "Housecall Pro is built for HVAC, plumbing, electrical, and home service businesses. Cornerstone PM is purpose-built for production (tract/spec) home builders." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix — not a home service feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Housecall Pro is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer — the same playbook K. Hovnanian Homes uses." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Field service dispatching", cornerstone: false, competitor: true, note: "Housecall Pro excels at dispatching technicians for recurring service calls. Not a new home builder need." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$49/mo+", note: "Housecall Pro is cheaper but built for a different market. Cornerstone is a full production builder platform." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction vs home services", desc: "Housecall Pro runs dispatch, service agreements, and recurring jobs for HVAC and plumbing companies. Cornerstone runs lot management, floorplan pricing, options engines, design centers, and multi-community pipelines for production home builders. Different markets entirely." },
  { title: "AI agents for builders", desc: "Foreman AI (45+ skills) creates POs, updates design options, generates SOWs, and remembers your preferences. Blueprint AI converts PDF floor plans to takeoffs. Built for construction workflows, not service call scheduling." },
  { title: "Full PM + options engine", desc: "Scheduling, purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline — all in one production builder platform. Housecall Pro has none of these concepts." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Housecall Pro a good fit for production home builders?",
    a: "No — and we'll be honest about it. Housecall Pro is built for home service businesses: HVAC, plumbing, electrical, lawn care, cleaning. Its core features are dispatch, recurring service agreements, technician scheduling, and customer communication for service calls. If you're a production home builder managing lot inventories, floorplans, pre-sale design centers, and multi-community schedules, Housecall Pro is the wrong tool.",
  },
  {
    q: "Why would a home builder search for a Housecall Pro alternative?",
    a: "Usually because they're a small builder who started with whatever software was recommended to them, or they're a subcontractor who became a builder. Housecall Pro handles the service side well. When you start building homes — doing pre-sale selections, managing multiple floorplans, running construction schedules — you need a platform built for new construction, not service dispatch.",
  },
  {
    q: "What does Cornerstone PM have that Housecall Pro doesn't?",
    a: "For production home builders: structural options engine, floorplan pricing matrix, multi-community lot management, pre-sale design center with 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses), Blueprint AI floor plan takeoffs, Foreman AI with 45+ skills, 30 webhook events with typed payload schemas, public REST API (59 endpoints), vendor portal with no login required, and free database export (CSV/JSON).",
  },
  {
    q: "Can I migrate my Housecall Pro data to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Housecall Pro export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function HousecallProAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Housecall Pro"
      badgeLabel="Housecall Pro Alternative — Home Builders"
      heroLine1="Housecall Pro dispatches technicians."
      heroLine2="You build homes."
      accentColor="cyan"
      heroParagraph="Housecall Pro is a home service platform for HVAC, plumbing, and electrical companies. Cornerstone PM is the alternative for production new home builders — structural options engine, floorplan pricing, 45+ AI skills, and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Housecall Pro vs Cornerstone PM — home services vs. new home construction."
      comparisonRows={comparisonRows}
      trademarkName="Housecall Pro"
      whySwitchHeadline="What home builders get that Housecall Pro can't offer"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a home service business (HVAC, plumbing, electrical, cleaning), Housecall Pro is probably a good fit. This page is for production home builders who landed on Housecall Pro through a search. You need different software — Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Switching from Housecall Pro? Bring your contacts and vendors."
      migrationDesc="Export your Housecall Pro data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Housecall Pro Alternative FAQ"
      faqSubtitle="For production home builders who need more than a service dispatch platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Production builder workflows native."
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
