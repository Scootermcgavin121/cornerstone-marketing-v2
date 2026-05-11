import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Contractor Foreman Alternative for Home Builders | Cornerstone PM",
  description:
    "Contractor Foreman is general construction PM software. Cornerstone PM is the alternative for home builders - AI agents (Pro $499/mo), options engine, 30+ named webhook events, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/contractor-foreman-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Contractor Foreman is general construction PM software for various contractor types. Cornerstone PM is purpose-built for home builders - production, semi-custom, and custom - with lot management, options engine, and multi-community pipelines that GC tools don't offer." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix - Cornerstone Builder ($299/mo). Not a general contractor concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for home builders. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Contractor Foreman is project-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI - 45+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes data - creates POs, updates options, generates SOWs, compares bids, searches product images. Blueprint AI: PDF to takeoff in 60 seconds." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. Unique to Cornerstone. Pro feature." },
  { feature: "Per-user AI memory (learns your business)", cornerstone: true, competitor: false, note: "Foreman remembers each user across conversations - name, role, preferences, favorite vendors. Cornerstone Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30 named events with typed payloads, HMAC signatures, delivery logs, auto-retry. Contractor Foreman has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Contractor Foreman has no public REST API (Zapier integrations only)." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link - no account needed." },
  { feature: "Construction scheduling (Gantt)", cornerstone: true, competitor: true, note: "Both ship Gantt scheduling with dependencies." },
  { feature: "Job costing / budgets", cornerstone: true, competitor: true, note: "Both include job costing and budget tracking." },
  { feature: "Purchasing / POs", cornerstone: true, competitor: true, note: "Both include purchasing and PO management." },
  { feature: "Homeowner portal", cornerstone: true, competitor: "limited", note: "Cornerstone: full buyer portal with milestone, selection, and document views. Contractor Foreman: basic client portal." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: "limited", note: "Cornerstone: unlimited users on every tier from $149. Contractor Foreman: unlimited users only on Unlimited plan ($332/mo); entry plans cap at 1-15 users depending on tier." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Per-plan user limits", note: "Contractor Foreman: $49/mo for 1 user; $105/mo (3 users); $166/mo (8 users); $221/mo (15 users); $332/mo (unlimited). Cornerstone: flat at every tier, unlimited users from $149. More importantly: Contractor Foreman doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, designer packages, or any AI agents at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder workflows native", desc: "Lot management, floorplan pricing, structural options, design center, multi-community pipelines, pre-sale flow - on Cornerstone Builder ($299/mo). None of these exist in Contractor Foreman." },
  { title: "Foreman AI: 45+ skills, real actions (Pro $499)", desc: "Foreman AI creates POs, updates design options, generates SOWs, compares bids, remembers your preferences, searches product images, and reads supplier websites with AI-powered web scraping. Per-user memory. Built-in session compaction. No other construction platform comes close." },
  { title: "30+ webhooks + public REST API (Pro+)", desc: "30+ named webhook events with typed payload schemas, HMAC signatures, and auto-retry (catalog growing). Public REST API with 59+ endpoints and growing rapidly â€” both on Pro+ ($599/mo). Wire SMS, voice (Twilio, Bland, Retell), or your own Claude agent to construction events. Contractor Foreman has no public API or webhook catalog." },
];

const faqItems: FAQItem[] = [
  {
    q: "How is Cornerstone PM different from Contractor Foreman?",
    a: "Both are construction management platforms, but they serve different builders. Contractor Foreman is built for general contractors doing varied work (commercial, residential, renovation) and competes on breadth of features at low price. Cornerstone PM is purpose-built for home builders - it adds a structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills on Pro $499/mo), 30+ named webhook events (Pro+), and a public REST API (Pro+) that Contractor Foreman doesn't offer at any price.",
  },
  {
    q: "What's the best Contractor Foreman alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. Where Contractor Foreman handles general contractor workflows (scheduling, POs, job costing, basic client portal), Cornerstone adds a structural options engine, pre-sale design center with 64 Designer Packages curated by an actual interior designer, multi-community pipelines, native AI agents (Foreman AI 45+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API (Pro+).",
  },
  {
    q: "Does Cornerstone PM have Contractor Foreman's core features?",
    a: "Yes - Cornerstone PM covers Gantt scheduling with dependencies, job costing and budgets, purchasing and POs, document management, and unlimited users. It adds home-builder-specific features on top: floorplan pricing matrix, structural options engine, design center, multi-community lot management, native AI agents, and a 30-event webhook system.",
  },
  {
    q: "Is Contractor Foreman cheaper than Cornerstone?",
    a: "Contractor Foreman's Basic plan starts at $49/mo for 1 user. Cornerstone Starter is $149/mo with unlimited users. But Contractor Foreman lacks the options engine, design center, multi-community pipelines, AI agents, and REST API that home builders need. When you factor in needing the Contractor Foreman Unlimited plan ($332/mo) for team-wide access, the gap narrows - and Cornerstone still includes capabilities CF doesn't offer at any price.",
  },
  {
    q: "Can I migrate from Contractor Foreman to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Contractor Foreman export, auto-detects column mapping, and runs 23 import endpoints covering vendors, contacts, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost - we absorb it.",
  },
  {
    q: "Is the 'Foreman' in Cornerstone's Foreman AI related to Contractor Foreman the company?",
    a: "No - Foreman AI is Cornerstone PM's native AI agent, and the name comes from the construction industry term 'foreman' (the supervisor who knows every trade). Contractor Foreman is a completely separate company. Our Foreman AI is unaffiliated with Contractor Foreman Inc.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent - unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
  },
];

export default function ContractorForemanAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Contractor Foreman"
      badgeLabel="Contractor Foreman Alternative"
      heroLine1="General contractor software."
      heroLine2="Or purpose-built for home builders?"
      accentColor="emerald"
      heroParagraph="Contractor Foreman is built for general contractors doing varied work across markets. Cornerstone PM is purpose-built for home builders - structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community pipelines, Foreman AI with 45+ skills (Pro $499/mo), and 30+ named webhook events (Pro+). From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Contractor Foreman vs Cornerstone PM - general contractor tool vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Contractor Foreman"
      whySwitchHeadline="Why home builders choose Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Contractor Foreman? Drop your export. We'll do the rest."
      migrationDesc="Export your Contractor Foreman data, drop it in our wizard, and AI auto-maps every column - vendors, homes, communities, schedules, budgets. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
      faqTitle="Contractor Foreman Alternative FAQ"
      faqSubtitle="Common questions from home builders evaluating Contractor Foreman vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Ready for a home-builder platform?"
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
