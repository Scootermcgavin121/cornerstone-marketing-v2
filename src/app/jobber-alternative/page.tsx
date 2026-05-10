import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Jobber Alternative for New Home Builders | Cornerstone PM",
  description:
    "Jobber is built for home service businesses. Cornerstone PM is the alternative for production new home builders — AI agents, options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobber-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production new home builders", cornerstone: true, competitor: false, note: "Jobber is built for home service businesses (landscaping, cleaning, HVAC, etc.). Cornerstone PM is purpose-built for production (tract/spec) home builders." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix — not a home service concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Jobber is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer — the same playbook K. Hovnanian Homes uses." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Jobber has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: "limited", note: "Cornerstone: 30 named events, HMAC signatures, auto-retry. Jobber: limited webhook support." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: true, note: "Both offer public APIs. Jobber's API is oriented toward service industry workflows." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Bid management + vendor portal", cornerstone: true, competitor: false, note: "Automated bid pipeline + vendor portal (no login required)." },
  { feature: "Client portal", cornerstone: true, competitor: true, note: "Both offer client-facing portals." },
  { feature: "Quoting / invoicing", cornerstone: "limited", competitor: true, note: "Jobber is strong at quote-to-invoice for service businesses. Cornerstone handles builder pricing through floorplan matrices and options engines, not traditional service invoicing." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$49/mo+", note: "Jobber is cheaper but built for service businesses. Cornerstone is a full production builder platform." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction vs home services", desc: "Jobber runs quotes, invoices, and recurring service schedules for landscapers and cleaners. Cornerstone runs lot management, floorplan pricing, options engines, design centers, and multi-community pipelines for production home builders." },
  { title: "AI agents for builders — 45+ skills", desc: "Foreman AI creates POs, updates design options, generates SOWs, and remembers your preferences. Blueprint AI converts PDF floor plans to takeoffs in 60 seconds. Built for construction, not service scheduling." },
  { title: "Full PM + options engine", desc: "Scheduling, purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline — all in one platform. Jobber has none of these production builder concepts." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Jobber a good fit for home builders?",
    a: "No — and we mean that helpfully. Jobber is excellent for home service businesses: landscaping, cleaning, HVAC, pest control. Its core features are quote-to-invoice workflows, recurring job scheduling, and client communication for service businesses. If you're a production home builder managing lot inventories, pre-sale selections, construction schedules, and multi-community pipelines, Jobber is the wrong tool.",
  },
  {
    q: "What's the best Jobber alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. It covers the same basics (scheduling, client portal, quotes, document management) plus a structural options engine, floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API — all the home builder features Jobber doesn't have.",
  },
  {
    q: "Can I migrate from Jobber to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Jobber export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost — we absorb it.",
  },
  {
    q: "Does Cornerstone PM have quoting like Jobber?",
    a: "Cornerstone PM handles builder pricing through floorplan pricing matrices and options engines rather than traditional quote-to-invoice workflows. If you need a per-job quote for a small service like a repair, Jobber is stronger. If you need pre-sale pricing for 20+ floorplans across multiple communities, Cornerstone is purpose-built for it.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders — no credit card, no contract, no implementation fee.",
  },
];

export default function JobberAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Jobber"
      badgeLabel="Jobber Alternative — Home Builders"
      heroLine1="Jobber is for home services."
      heroLine2="You build homes."
      accentColor="amber"
      heroParagraph="Jobber is a field service platform for landscapers, cleaners, and HVAC companies. Cornerstone PM is the alternative for production new home builders — structural options engine, floorplan pricing, 45+ AI skills, and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Jobber vs Cornerstone PM — home services platform vs. home builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Jobber"
      whySwitchHeadline="What home builders get that Jobber can't offer"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a home service business — landscaping, cleaning, pest control, HVAC — Jobber is probably fine. This page is for home builders who found Jobber through a general search. You need different software, and Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Switching from Jobber? Bring your contacts and vendors."
      migrationDesc="Export your Jobber data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Jobber Alternative FAQ"
      faqSubtitle="For home builders who need more than a home service platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Home builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Housecall Pro", href: "/housecall-pro-alternative" },
        { text: "vs JobNimbus", href: "/jobnimbus-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
