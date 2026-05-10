import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "JobTread Alternative for Production Home Builders | Cornerstone PM",
  description:
    "JobTread alternative with action-taking AI agents (45+ skills), structural options engine, and 30 named webhook events. Production-builder native. Plans from $149/mo to $599/mo flat - no per-user fees.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobtread-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "JobTread is built for general contractors and custom builders. Cornerstone is purpose-built for production (tract/spec) home builders." },
  { feature: "AI agents that take real actions (Cornerstone Pro / Pro+)", cornerstone: true, competitor: "limited", note: "Foreman AI (Pro+ at $499/mo) reads AND writes data - creates POs, updates options, generates SOWs, runs bid comparisons. 45+ purpose-built skills. JobTread's AI Connector lets you plug in third-party AI (ChatGPT, Claude) for chat-style assistance - it doesn't ship native action-taking agents." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages mid-session so long workflows (200+ option cleanups, full catalog imports) never crash or forget. Available on Pro+." },
  { feature: "Per-user AI memory (learns YOU, not just your data)", cornerstone: true, competitor: false, note: "Foreman greets you by whatever name you want to be called, learns your role, your go-to vendors, your typical workflows, your reporting preferences. Custom-coded into the app — not a generic chatbot bolt-on. Gets more intuitive every session. Company-wide + personal memory. Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, permanently hosts them on CDN, reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: false, note: "PDF blueprint to material takeoff in under 60 seconds. Blueprint AI is on Cornerstone Pro+ at $499/mo (25 takeoffs/mo)." },
  { feature: "30 named webhook events (typed payloads, HMAC)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 30 named events with typed payloads, HMAC signatures, delivery logs, auto-retry. JobTread has webhook capability via Zapier - we ship the full named event catalog with payload schemas and docs." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: true, note: "Both support bringing your own AI. JobTread: AI Connector. Cornerstone Pro+: public REST API + 30 named webhook events with typed payloads. Different approaches; both work." },
  { feature: "Public REST API", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59 endpoints, public docs. JobTread offers Zapier and AI Connector integrations rather than a full open REST API." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - included on Cornerstone Builder+ ($299/mo). Not a JobTread feature." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock. Cornerstone Builder+." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects JobTread export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: true, note: "Both let you export your data. Cornerstone: CSV/JSON anytime + nightly 7-day rolling backups. JobTread supports data export through their platform." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: "limited", note: "Cornerstone: vendors click an email magic link, no account creation. JobTread has sub/vendor portals (account-based)." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing - production builder native. Not a JobTread concept." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline with per-community vendor/pricing rules. JobTread: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship Gantt + tasks + dependencies + vendor notifications." },
  { feature: "Job costing / budgets", cornerstone: true, competitor: true, note: "Both ship job costing and budget tracking." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Both ship bid management. Cornerstone Pro+ adds the 7-wave automated bidding pipeline (cold call → onboarded)." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Cornerstone: every plan, every tier. JobTread: $20/user (tiered breaks above 10 users)." },
  { feature: "Starter price", cornerstone: "$149/mo", competitor: "$199/mo + $20/user", note: "Cornerstone Starter: scheduling, permits, homeowner portal - unlimited users. JobTread: $199 base plus $20/user; a 10-user team is $399/mo before add-ons." },
  { feature: "Price at full AI tier", cornerstone: "$499/mo (Pro)", competitor: "$199 + $20/user", note: "Cornerstone Pro adds Foreman AI (45+ skills) + Blueprint AI - flat $499 regardless of team size. JobTread is $199 + per-user ($499 = 15 users on JobTread)." },
  { feature: "Price at full API + AI tier", cornerstone: "$599/mo (Pro+)", competitor: "$199 + $20/user", note: "Cornerstone Pro+ adds REST API, BYOA, 7-wave bidding, Opus AI - flat $599 regardless of team size. On JobTread, $599 = 20 users." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Production builder native", desc: "Floorplan pricing matrix, structural options engine, designer packages, multi-community pipelines - first-class concepts on Cornerstone Builder+ ($299/mo). JobTread is built for general contractors and remodelers, not production home builders." },
  { title: "Action-taking AI on Pro", desc: "Foreman AI (45+ skills, $499/mo Pro) reads AND writes data - creates POs, runs bid comparisons, generates SOWs, scrapes vendor product pages. JobTread's AI Connector plugs in your own ChatGPT or Claude for chat-style help. Different model: action agent vs chat integration." },
  { title: "Flat pricing, no per-user math", desc: "Cornerstone Starter $149, Builder $299, Pro $499, Pro+ $599 - flat at every tier, unlimited users. JobTread starts $199 + $20/user; a 20-person team is $599/mo. Bring on your whole crew without watching the meter." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best JobTread alternative for production home builders?",
    a: "Cornerstone PM is the purpose-built JobTread alternative for production home builders. Where JobTread is designed for general contractors, remodelers, and custom builders (all on one flat plan), Cornerstone is built specifically for production - with a structural options engine, designer packages, multi-community pipelines, lot management, and pre-sale design center. JobTread covers GC workflows broadly; Cornerstone goes deep on the production-builder workflow.",
  },
  {
    q: "How does Cornerstone's pricing actually compare to JobTread's?",
    a: "They use different models, so the comparison depends on team size and which features you need. JobTread is one flat plan at $199/mo base plus $20 per user, with all features (AI Connector included). Cornerstone is tiered: Starter $149/mo (scheduling + portal), Builder $299/mo (adds pipeline, purchasing, design center), Pro $499/mo (adds Foreman AI + Blueprint AI), Pro+ $599/mo (adds full REST API, BYOA, automated bidding). Every Cornerstone tier is flat with unlimited users. Math: a 10-person team on JobTread is $399/mo; on Cornerstone Builder it's $299/mo. A 20-person team on JobTread is $599/mo; on Cornerstone Pro+ it's also $599/mo - and that's where the action-taking AI agents land.",
  },
  {
    q: "How is Foreman AI different from JobTread's AI Connector?",
    a: "They're different categories. JobTread's AI Connector is a bridge that lets you plug in third-party AI (ChatGPT, Claude) for chat-style assistance against your JobTread data. Foreman AI is a native agent with 45+ purpose-built construction skills that takes real actions - creates purchase orders, updates design options, generates scope-of-work documents, runs bid comparisons, scrapes vendor product pages, and remembers your preferences across sessions. Foreman is included natively on Cornerstone Pro ($499/mo).",
  },
  {
    q: "Can I migrate from JobTread to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your JobTread export, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, design options, and more. Most migrations complete in under a day, self-serve. ~$0.01 per migration in AI cost - we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM have JobTread's scheduling features?",
    a: "Yes - Gantt charts, dependencies, cascade scheduling, vendor notifications, and task management are all included starting on the Starter plan. Cornerstone Pro+ adds 30 named webhook events on schedule changes, so you can wire external systems (SMS via Twilio, voice via Bland or Retell) to your schedule triggers without code.",
  },
  {
    q: "How does Cornerstone's BYOA compare to JobTread's AI Connector?",
    a: "Both platforms let you connect external AI to your construction data. JobTread ships the AI Connector for plugging in third-party tools (ChatGPT, Claude). Cornerstone's BYOA is included on Pro+ ($599/mo) via the public REST API (59 endpoints) plus 30 named webhook events with typed payload schemas - letting your own agent both read live data and react to events (home created, bid accepted, schedule cascade, etc.). Different architectures; both work. Cornerstone's edge is the richer named event catalog for event-driven automation.",
  },
  {
    q: "What does the $149 Cornerstone Starter include?",
    a: "Starter ($149/mo) includes Construction Scheduling (Gantt + task view), 3-tier dependency auto-cascade, 17 pre-built templates, subcontractor assignment and notifications, the permitting pipeline tracker, homeowner progress portal, and the AI Support Agent. Foreman AI, Blueprint AI, sales pipeline, purchasing, and design center are on higher tiers - Builder ($299), Pro ($499 includes Foreman + Blueprint), and Pro+ ($599 includes the REST API and BYOA).",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders - and the beta unlocks everything on the Pro plan (Foreman AI, Blueprint AI, options engine, full sales-to-construction workflow). No credit card, no contract, no implementation fee.",
  },
];

export default function JobtreadAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="JobTread"
      badgeLabel="JobTread Alternative"
      heroLine1="JobTread is for GCs."
      heroLine2="Cornerstone is for production builders."
      accentColor="emerald"
      heroParagraph="Cornerstone PM is the JobTread alternative purpose-built for production home builders. Floorplan pricing matrix, structural options engine, designer packages, multi-community pipelines - production-native by design. On Pro ($499/mo flat) you get Foreman AI's 45+ action-taking skills; on Pro+ ($599/mo flat) you add the public REST API and 30 named webhook events. Flat pricing, unlimited users on every tier."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="JobTread vs Cornerstone PM - focused on production builders and AI capability."
      comparisonRows={comparisonRows}
      trademarkName="JobTread"
      whySwitchHeadline="Why production builders choose Cornerstone over JobTread"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using JobTread? Drop your export. We'll do the rest."
      migrationDesc="Export your JobTread data, drop it in our wizard, and AI auto-maps every column - vendors, jobs, budgets, contacts, schedules. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
      faqTitle="JobTread Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from JobTread."
      faqItems={faqItems}
      footerHeadline="Ready for a production-builder platform?"
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
