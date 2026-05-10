import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Fieldwire Alternative for Residential Home Builders | Cornerstone PM",
  description:
    "Fieldwire is a commercial construction field management tool. Cornerstone PM is the alternative for residential production home builders - AI agents, options engine, scheduling, and 30 webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/fieldwire-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for residential production builders", cornerstone: true, competitor: false, note: "Fieldwire is built primarily for commercial GCs and large construction firms. Cornerstone PM is purpose-built for residential production (tract/spec) home builders." },
  { feature: "Structural options engine (residential)", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing - a production builder concept, not commercial construction." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline for production builders." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer — the same playbook K. Hovnanian Homes uses. Residential-builder specific." },
  { feature: "Native AI agents (Foreman AI - 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Fieldwire has no native AI agents." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. Fieldwire: limited API." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views." },
  { feature: "Purchasing / POs / bid management", cornerstone: true, competitor: false, note: "Full purchasing workflow with automated bid pipeline." },
  { feature: "Plan management / markup", cornerstone: "limited", competitor: true, note: "Fieldwire specializes in plan room, markup, and punch list management for commercial projects. Cornerstone has basic plan storage." },
  { feature: "Punch lists (commercial-grade)", cornerstone: "limited", competitor: true, note: "Fieldwire's punch list tools are purpose-built for commercial GC closeout workflows." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$39/mo+", note: "Fieldwire is cheaper as a plan management tool. Cornerstone is a full production builder platform." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Residential production workflows", desc: "Lot management, floorplan pricing, structural options, buyer design center, pre-sale pipeline, draw schedules - production builder concepts that don't exist in Fieldwire's commercial-focused platform." },
  { title: "AI agents native — 45+ skills", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs in 60 seconds. AI image search, anti-bot web scraping, and per-user memory that greets you by your chosen name and learns your habits over time — all custom-coded into the app. Commercial plan tools have nothing like this." },
  { title: "Full PM platform", desc: "Scheduling, purchasing, bid management, homeowner portal, options engine, multi-community pipeline - all in one residential production platform, not a commercial field tool with added features." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Fieldwire a good fit for residential home builders?",
    a: "Fieldwire is primarily built for commercial GCs who need plan room management, RFI tracking, punch lists, and field task management for large commercial projects. Residential production builders have different needs: pre-sale design centers, structural options engines, floorplan pricing matrices, lot management, and draw schedules. These aren't Fieldwire's strengths.",
  },
  {
    q: "What's the best Fieldwire alternative for residential home builders?",
    a: "Cornerstone PM is purpose-built for residential production home builders. It includes scheduling, purchasing, bid management, homeowner portal, structural options engine, designer packages, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API - all built for residential production workflows.",
  },
  {
    q: "Can I migrate from Fieldwire to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Fieldwire export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM have plan management like Fieldwire?",
    a: "Cornerstone PM has basic plan storage and document management. For commercial-grade plan room features (markup, issue tracking, sheet comparison, RFI coordination on large commercial drawings), Fieldwire is stronger. For residential builders who need to share floor plans with vendors and buyers, Cornerstone's integrated document management handles it.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders - no credit card, no contract, no implementation fee.",
  },
];

export default function FieldwireAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Fieldwire"
      badgeLabel="Fieldwire Alternative - Residential Builders"
      heroLine1="Fieldwire is for commercial GCs."
      heroLine2="You build homes."
      accentColor="rose"
      heroParagraph="Fieldwire is a commercial construction field management and plan room tool. Cornerstone PM is the Fieldwire alternative for residential production home builders - structural options engine, floorplan pricing, 45+ AI skills, and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Fieldwire vs Cornerstone PM - commercial field tool vs. residential production builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Fieldwire"
      whySwitchHeadline="Why residential builders choose Cornerstone PM over Fieldwire"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a commercial GC who needs plan room management, formal RFI tracking, and punch lists for large commercial projects, Fieldwire is a solid tool. This page is for residential production home builders who found Fieldwire through a search - you need residential-native software, and Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Fieldwire? Bring your data."
      migrationDesc="Export your Fieldwire data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Fieldwire Alternative FAQ"
      faqSubtitle="For residential production home builders evaluating Fieldwire vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not commercial GCs."
      footerSubtext="Join the beta and get 2 years free. Residential production workflows native."
      relatedPages={[
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Raken", href: "/raken-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
