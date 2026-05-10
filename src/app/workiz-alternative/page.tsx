import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Workiz Alternative for New Home Builders | Cornerstone PM",
  description:
    "Workiz is built for field service businesses. Cornerstone PM is the alternative for production new home builders — AI agents, options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/workiz-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production new home builders", cornerstone: true, competitor: false, note: "Workiz is built for locksmith, appliance repair, carpet cleaning, and other field service businesses. Cornerstone PM is purpose-built for production (tract/spec) home builders." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix — not a field service concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Workiz is job-centric." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with curated selection packages." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: "limited", note: "Cornerstone: 30 named events, HMAC signatures, auto-retry." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Bid management + vendor portal", cornerstone: true, competitor: false, note: "Automated bid pipeline + vendor portal (no login required)." },
  { feature: "Call tracking / voice", cornerstone: false, competitor: true, note: "Workiz has strong call tracking and VoIP features for service dispatch. Not a new home builder need." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$65/mo+", note: "Workiz is cheaper but built for a different market." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction needs, not field service", desc: "Workiz handles dispatch, call tracking, and service scheduling for locksmiths and appliance repair companies. Cornerstone handles lot management, floorplan pricing, structural options, design centers, and multi-community pipelines for production home builders." },
  { title: "AI agents native — 45+ skills", desc: "Foreman AI (45+ skills) creates POs, updates design options, generates SOWs, and remembers preferences. Blueprint AI converts floor plans to takeoffs in 60 seconds. No other production builder platform comes close." },
  { title: "30 webhooks + public API", desc: "30 named webhook events with typed payload schemas and HMAC signatures. Wire your own SMS, voice, or AI agents. Public REST API with 59 endpoints." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Workiz a good fit for production home builders?",
    a: "Workiz is built for field service businesses — locksmith, appliance repair, carpet cleaning, garage door. Its strengths are dispatch, call tracking, and service scheduling. If you're a production home builder, Workiz lacks the features you need: structural options engine, floorplan pricing matrix, pre-sale design center, construction scheduling, and multi-community pipelines.",
  },
  {
    q: "What's the best Workiz alternative for new home builders?",
    a: "Cornerstone PM is purpose-built for production new home builders. It covers scheduling, client portal, and document management — plus a structural options engine, floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API.",
  },
  {
    q: "Can I migrate from Workiz to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Workiz export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function WorkizAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Workiz"
      badgeLabel="Workiz Alternative — Home Builders"
      heroLine1="Workiz is for field service."
      heroLine2="You build homes."
      accentColor="rose"
      heroParagraph="Workiz is built for locksmiths, appliance repair, and field service businesses. Cornerstone PM is the alternative for production new home builders — structural options engine, floorplan pricing, 45+ AI skills, and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Workiz vs Cornerstone PM — field service platform vs. production builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Workiz"
      whySwitchHeadline="What production builders get with Cornerstone PM"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a field service business — locksmith, appliance repair, carpet cleaning — Workiz is a solid tool. This page is for production home builders who found Workiz through a search. You need a different platform, and Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Workiz? Bring your contacts and vendors."
      migrationDesc="Export your Workiz data, drop it in our wizard, and AI auto-maps contacts, vendors, and job history. Dry-run before you commit."
      faqTitle="Workiz Alternative FAQ"
      faqSubtitle="For production home builders who need more than a field service platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not field service."
      footerSubtext="Join the beta and get 2 years free. Production builder workflows native."
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
