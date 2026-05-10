import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Contractor Foreman Alternative for Production Home Builders | Cornerstone PM",
  description:
    "Contractor Foreman is general construction PM software. Cornerstone PM is the alternative for production home builders — AI agents, options engine, 30 webhook events, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/contractor-foreman-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "Contractor Foreman is general construction PM software for various contractor types. Cornerstone PM is purpose-built for production (tract/spec) home builders managing communities." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix — not a general contractor concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Contractor Foreman is project-centric." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyer design center with curated selection packages." },
  { feature: "Native AI agents (Foreman AI — 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI (45+ skills) reads AND writes data — creates POs, updates options, generates SOWs, compares bids, searches product images. Blueprint AI: PDF to takeoff in 60 seconds." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. Unique to Cornerstone." },
  { feature: "Per-user AI memory (learns your business)", cornerstone: true, competitor: false, note: "Foreman remembers each user across conversations — name, role, preferences, favorite vendors." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, permanently hosts them on CDN, and reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events with typed payloads, HMAC signatures, delivery logs, auto-retry. Contractor Foreman has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: false, note: "Cornerstone: 59 endpoints, public docs. Contractor Foreman has no public API." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link — no account needed." },
  { feature: "Construction scheduling (Gantt)", cornerstone: true, competitor: true, note: "Both ship Gantt scheduling with dependencies." },
  { feature: "Job costing / budgets", cornerstone: true, competitor: true, note: "Both include job costing and budget tracking." },
  { feature: "Purchasing / POs", cornerstone: true, competitor: true, note: "Both include purchasing and PO management." },
  { feature: "Homeowner portal", cornerstone: true, competitor: "limited", note: "Cornerstone: full buyer portal with milestone, selection, and document views. Contractor Foreman: basic client portal." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: true, note: "Both offer unlimited users." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$49/mo+", note: "Contractor Foreman is cheaper but built for general contractors, not production builders." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Production builder workflows native", desc: "Lot management, floorplan pricing, structural options, design center, multi-community pipelines, draw schedules — first-class features in Cornerstone. Contractor Foreman is built for general contractors doing varied work, not production builders doing plan-repeat communities." },
  { title: "Foreman AI: 45+ skills, real actions", desc: "Foreman AI creates POs, updates design options, generates SOWs, compares bids, remembers your preferences, searches product images, and reads supplier websites with AI-powered web scraping. Per-user memory. Built-in session compaction. No other construction platform comes close." },
  { title: "30 webhooks + public REST API", desc: "30 named webhook events with typed payload schemas, HMAC signatures, and auto-retry. Public REST API with 59 endpoints. Wire SMS, voice (Twilio, Bland, Retell), or your own Claude agent to construction events. Contractor Foreman has no public API or webhook catalog." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM different from Contractor Foreman?",
    a: "Both are construction management platforms, but they serve different builders. Contractor Foreman is built for general contractors doing varied work (commercial, residential, renovation) and competes on breadth of features at low price. Cornerstone PM is purpose-built for production home builders — it adds a structural options engine, floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills), 30 webhook events, and a public REST API that Contractor Foreman doesn't offer at any price.",
  },
  {
    q: "What's the best Contractor Foreman alternative for production home builders?",
    a: "Cornerstone PM is purpose-built for production home builders. Where Contractor Foreman handles general contractor workflows (scheduling, POs, job costing, basic client portal), Cornerstone adds a structural options engine, pre-sale design center with 64 curated Designer Packages, multi-community pipelines, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API.",
  },
  {
    q: "Does Cornerstone PM have Contractor Foreman's core features?",
    a: "Yes — Cornerstone PM covers Gantt scheduling with dependencies, job costing and budgets, purchasing and POs, document management, and unlimited users. It adds production builder-specific features on top: floorplan pricing matrix, structural options engine, design center, multi-community lot management, native AI agents, and a 30-event webhook system.",
  },
  {
    q: "Can I migrate from Contractor Foreman to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Contractor Foreman export, auto-detects column mapping, and runs 23 import endpoints covering vendors, contacts, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost — we absorb it.",
  },
  {
    q: "What is Foreman AI and how does it compare to Contractor Foreman's features?",
    a: "Foreman AI is Cornerstone PM's native AI agent with 45+ skills specific to home building. It reads AND writes your data — creates purchase orders, updates design options, generates scope-of-work documents, runs bid comparisons, searches product images (with anti-bot web scraping for Home Depot/Ferguson/Lowe's), and remembers your preferences across sessions with per-user memory. Contractor Foreman has no equivalent AI capability.",
  },
  {
    q: "Is the 'Foreman' in Cornerstone's Foreman AI related to Contractor Foreman the company?",
    a: "No — Foreman AI is Cornerstone PM's native AI agent, and the name comes from the construction industry term 'foreman' (the supervisor who knows every trade). Contractor Foreman is a completely separate company. Our Foreman AI is unaffiliated with Contractor Foreman Inc.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
  {
    q: "Does Cornerstone PM have a public API and webhooks?",
    a: "Yes. The REST API (59 endpoints, 30 webhook events, HMAC signatures, scoped Bearer-token auth, public docs) is on the Pro+ plan at $599/mo. BYOA — connecting your own Claude or ChatGPT agent to live builder data — is also included. Contractor Foreman has no public API or webhook system.",
  },
];

export default function ContractorForemanAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Contractor Foreman"
      badgeLabel="Contractor Foreman Alternative"
      heroLine1="General contractor software."
      heroLine2="Or purpose-built for production?"
      accentColor="emerald"
      heroParagraph="Contractor Foreman is built for general contractors doing varied work across markets. Cornerstone PM is purpose-built for production home builders — structural options engine, floorplan pricing matrix, multi-community pipelines, Foreman AI with 45+ skills, and 30 webhook events. From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Contractor Foreman vs Cornerstone PM — general contractor tool vs. production builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Contractor Foreman"
      whySwitchHeadline="Why production builders choose Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Contractor Foreman? Drop your export. We'll do the rest."
      migrationDesc="Export your Contractor Foreman data, drop it in our wizard, and AI auto-maps every column — vendors, homes, communities, schedules, budgets. Dry-run before you commit. ~$0.01 per migration in AI — we absorb it."
      faqTitle="Contractor Foreman Alternative FAQ"
      faqSubtitle="Common questions from production home builders evaluating Contractor Foreman vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Ready for a production builder platform?"
      footerSubtext="Join the beta and get 2 years free. Built specifically for home builders."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Projul", href: "/projul-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
