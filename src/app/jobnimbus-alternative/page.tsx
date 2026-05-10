import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "JobNimbus Alternative for New Home Builders | Cornerstone PM",
  description:
    "JobNimbus is built for roofing and restoration. Cornerstone PM is the alternative for production new home builders — AI agents, options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobnimbus-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production new home builders", cornerstone: true, competitor: false, note: "JobNimbus is built for roofing, restoration, and home improvement contractors. Cornerstone PM is purpose-built for production (tract/spec) home builders." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan — not a JobNimbus feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. JobNimbus is job-centric, not community-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with packages curated by an actual interior designer — the same playbook K. Hovnanian Homes uses." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. JobNimbus has no native AI agents." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images and reads supplier product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "CRM / Lead pipeline", cornerstone: true, competitor: true, note: "Both include CRM and lead management." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt, dependencies, cascade scheduling. JobNimbus: basic job scheduling." },
  { feature: "Roofing / insurance claim workflows", cornerstone: false, competitor: true, note: "JobNimbus specializes in insurance claim management and roofing workflows — not a new home builder need." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$149/mo+", note: "Similar entry price. Cornerstone is a full production builder platform; JobNimbus is roofing-focused." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Built for new home builders, not roofers", desc: "JobNimbus excels at roofing and restoration. Cornerstone is purpose-built for production home builders: lot management, floorplan pricing, options engine, design center, draw schedules — concepts that don't exist in JobNimbus." },
  { title: "AI agents native — 45+ skills", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. AI image search, anti-bot web scraping. Per-user memory. No other production builder platform comes close." },
  { title: "Unlimited users, full platform", desc: "Scheduling, purchasing, bid management, homeowner portal, design center, multi-community pipeline, REST API, 30 webhook events — all in one platform with unlimited users." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is JobNimbus a good fit for production home builders?",
    a: "JobNimbus is built primarily for roofing contractors, restoration companies, and home improvement businesses. If you're a production home builder managing lot inventories, floorplans, pre-sale design centers, structural options, and multi-community schedules, JobNimbus will feel like a square peg in a round hole. Cornerstone PM is purpose-built for your workflows.",
  },
  {
    q: "What's the best JobNimbus alternative for new home builders?",
    a: "Cornerstone PM is the purpose-built alternative for production new home builders. It includes CRM, scheduling, purchasing, bid management, homeowner portal, and document management — plus a structural options engine, floorplan pricing matrix, multi-community lot management, and native AI agents (Foreman AI 45+ skills, Blueprint AI) that JobNimbus doesn't offer.",
  },
  {
    q: "Can I migrate from JobNimbus to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your JobNimbus data exports, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day. ~$0.01 per migration in AI cost — we absorb it.",
  },
  {
    q: "Does Cornerstone PM have a CRM like JobNimbus?",
    a: "Yes. Cornerstone PM includes a sales pipeline and CRM for managing leads, prospects, and buyers through pre-sale, design selection, contract, and construction phases. It's designed specifically for new home sales workflows, not roofing or restoration lead pipelines.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function JobnimbusAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="JobNimbus"
      badgeLabel="JobNimbus Alternative — New Home Builders"
      heroLine1="JobNimbus is for roofers."
      heroLine2="You build homes."
      accentColor="emerald"
      heroParagraph="JobNimbus is built for roofing and restoration contractors. Cornerstone PM is the production new home builder alternative — structural options engine, floorplan pricing matrix, multi-community lot management, 45+ AI skills, and a public REST API from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="JobNimbus vs Cornerstone PM — roofing platform vs. production home builder platform."
      comparisonRows={comparisonRows}
      trademarkName="JobNimbus"
      whySwitchHeadline="What production builders get with Cornerstone PM"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a roofing contractor or home improvement company, JobNimbus is probably fine. This page is for production new home builders who landed on JobNimbus because it showed up in a search — you need a different tool, and that tool is Cornerstone PM."
      showMigrationCTA={true}
      migrationHeadline="Moving from JobNimbus? Bring your data."
      migrationDesc="Export your JobNimbus data, drop it in our wizard, and AI auto-maps every column — contacts, jobs, budgets, vendors. Dry-run before you commit."
      faqTitle="JobNimbus Alternative FAQ"
      faqSubtitle="Common questions from new home builders evaluating JobNimbus vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Production builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Jobber", href: "/jobber-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
