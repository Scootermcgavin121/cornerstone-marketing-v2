import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "JobTread Alternative for Production Home Builders | Cornerstone PM",
  description:
    "JobTread alternative with real AI agents that take action — not just a chatbot. Production builder workflows, 45+ AI skills, 30 webhook events, and options engine from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobtread-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "JobTread is built for general contractors and custom builders. Cornerstone is purpose-built for production (tract/spec) home builders." },
  { feature: "AI agents that take real actions (not just chat)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data — creates purchase orders, updates options, generates SOWs, runs bid comparisons. JobTread's AI is a chatbot layer only." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages mid-session so long workflows (200+ option cleanups, full catalog imports) never crash or forget. No other construction AI does this." },
  { feature: "Per-user AI memory (learns your business)", cornerstone: true, competitor: false, note: "Foreman remembers each user across conversations — name, role, preferences, favorite vendors. Company-wide + personal memory. Gets smarter every session." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, permanently hosts them on CDN, and reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: false, note: "PDF blueprint to material takeoff in under 60 seconds." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events with typed payloads, HMAC signatures, delivery logs, auto-retry. JobTread says webhooks exist — we ship the full event catalog with payload schemas." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live Cornerstone data. JobTread has no BYOA support." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. JobTread: limited API access." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan — not a JobTread feature." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects JobTread export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors click email link, submit bids without creating an account. Lock-after-acceptance." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing — production builder native." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline. JobTread: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both: Gantt charts, dependencies, notifications." },
  { feature: "Job costing / budgets", cornerstone: true, competitor: true, note: "Both ship job costing and budget tracking." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Cornerstone adds 7-wave automated bidding pipeline." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "JobTread charges per user." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$149/mo+", note: "Similar entry price, but JobTread scales per-user. Cornerstone is flat unlimited." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "AI that acts, not just answers", desc: "Foreman AI takes real actions — creates POs, updates options, generates SOWs, runs bid comparisons. 45+ skills. Per-user memory. JobTread's AI is a chat layer. Ours is an agent." },
  { title: "The only AI that doesn't forget", desc: "Foreman auto-compacts long sessions so marathon workflows never crash. Built-in memory compaction. No other construction AI does this. No more 'start a new conversation' workarounds." },
  { title: "30 webhooks + BYOA", desc: "30 named webhook events with typed payload schemas. JobTread says webhooks exist — we ship the full catalog. Wire Twilio, Bland, or your own Claude agent to our events. BYOA is native on Pro+." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best JobTread alternative for production home builders?",
    a: "Cornerstone PM is the purpose-built JobTread alternative for production home builders. Where JobTread is designed for general contractors and custom builders, Cornerstone ships production-native features: floorplan pricing matrix, structural options engine, multi-community pipelines, lot management, and pre-sale design center — plus 45+ native AI skills via Foreman AI that take real actions (not just chat).",
  },
  {
    q: "How is Foreman AI different from JobTread's AI?",
    a: "Foreman AI is an agent that reads AND writes data — it creates purchase orders, updates design options, generates scope-of-work documents, runs bid comparisons, and remembers your preferences across sessions. JobTread's AI is a chatbot layer that answers questions. Foreman also has built-in memory compaction so long sessions (200+ option updates, full catalog imports) never crash or forget — no other construction AI does this.",
  },
  {
    q: "Does Cornerstone PM have more webhook events than JobTread?",
    a: "Yes. Cornerstone ships 30 named webhook events with typed payload schemas, HMAC signature verification, delivery logs, and auto-retry. JobTread says webhooks exist — we ship the full event catalog with docs. Categories include home lifecycle, task/schedule updates, vendor notifications, cascade scheduling, messages, sales pipeline, and bid requests. This is the strongest 'automation-friendly platform' pitch in construction software.",
  },
  {
    q: "Can I migrate from JobTread to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your JobTread export, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, design options, and more. Most migrations complete in under a day, self-serve. ~$0.01 per migration in AI cost — we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is Cornerstone PM cheaper than JobTread?",
    a: "Entry prices are similar, but the total-cost story differs. JobTread charges per user, so teams of 5+ pay substantially more. Cornerstone is flat unlimited users on all plans. Pro+ ($599/mo) includes the REST API, 30 webhook events, Foreman AI, Blueprint AI, and BYOA — all at one price regardless of team size.",
  },
  {
    q: "Does Cornerstone PM have JobTread's scheduling features?",
    a: "Yes — Gantt charts, dependencies, cascade scheduling, vendor notifications, and task management are all included. Cornerstone adds cascade webhook events for schedule changes, so you can wire external systems (SMS via Twilio, voice via Bland/Retell) to your schedule triggers without code.",
  },
  {
    q: "What's the BYOA feature?",
    a: "BYOA (Bring Your Own Agent) lets you connect your own Claude or ChatGPT agent to Cornerstone's live data via the public REST API and webhook events. JobTread has no BYOA capability. Pro+ builders use BYOA to build custom SMS bots, voice assistants, and workflow automations on top of their live construction data.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function JobtreadAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="JobTread"
      badgeLabel="JobTread Alternative"
      heroLine1="JobTread has a chatbot."
      heroLine2="Foreman AI takes actions."
      accentColor="emerald"
      heroParagraph="Cornerstone PM is the JobTread alternative purpose-built for production home builders. Foreman AI (45+ skills) reads and writes your data, remembers your preferences, and never forgets mid-session. Plus a structural options engine, 30 webhook events, and a public REST API — from $149/mo, unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="JobTread vs Cornerstone PM — focused on production builders and AI capability."
      comparisonRows={comparisonRows}
      trademarkName="JobTread"
      whySwitchHeadline="Why production builders choose Cornerstone over JobTread"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using JobTread? Drop your export. We'll do the rest."
      migrationDesc="Export your JobTread data, drop it in our wizard, and AI auto-maps every column — vendors, jobs, budgets, contacts, schedules. Dry-run before you commit. ~$0.01 per migration in AI — we absorb it."
      faqTitle="JobTread Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from JobTread."
      faqItems={faqItems}
      footerHeadline="Ready to upgrade from a chatbot to an agent?"
      footerSubtext="Join the beta and get 2 years free. Migration tooling included."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs CoConstruct", href: "/coconstruct-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
