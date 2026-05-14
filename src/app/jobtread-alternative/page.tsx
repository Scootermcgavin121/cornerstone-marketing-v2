import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "JobTread Alternative for Home Builders | Cornerstone PMÃ¢â€žÂ¢",
  description:
    "JobTread alternative with action-taking AI agents (100+ skills), structural options engine, and 30 named webhook events. Home-builder native. Plans from $149/mo to $599/mo flat - no per-user fees.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobtread-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "JobTread is built for general contractors and custom builders. Cornerstone is purpose-built for home builders - production, semi-custom, and custom." },
  { feature: "AI agents that take real actions (Cornerstone Pro / Pro+)", cornerstone: true, competitor: "limited", note: "Foreman AI (Pro+ at $499/mo) reads AND writes data - creates POs, updates options, generates SOWs, runs bid comparisons. 100+ purpose-built skills. JobTread's AI Connector lets you plug in third-party AI (ChatGPT, Claude) for chat-style assistance - it doesn't ship native action-taking agents." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages mid-session so long workflows (200+ option cleanups, full catalog imports) never crash or forget. Available on Pro+." },
  { feature: "Per-user AI memory (learns YOU, not just your data)", cornerstone: true, competitor: false, note: "Foreman greets you by whatever name you want to be called, learns your role, your go-to vendors, your typical workflows, your reporting preferences. Custom-coded into the app - not a generic chatbot bolt-on. Gets more intuitive every session. Company-wide + personal memory. Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, permanently hosts them on CDN, reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: false, note: "PDF blueprint to material takeoff in under 60 seconds. Blueprint AI is on Cornerstone Pro+ at $499/mo (25 takeoffs/mo)." },
  { feature: "30 named webhook events (typed payloads, HMAC)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 30 named events with typed payloads, HMAC signatures, delivery logs, auto-retry. JobTread has webhook capability via Zapier - we ship the full named event catalog with payload schemas and docs." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: true, note: "Both support bringing your own AI. JobTread: AI Connector. Cornerstone Pro+: public REST API + 30 named webhook events with typed payloads. Different approaches; both work." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. JobTread offers Zapier and AI Connector integrations rather than a full open REST API." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - included on Cornerstone Builder+ ($299/mo). Not a JobTread feature." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock. Cornerstone Builder+." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects JobTread export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Take your data with you anytime Ã¢â‚¬â€ no lock-in", cornerstone: true, competitor: true, note: "Both let you export your data. Cornerstone: one-click CSV/JSON export anytime, $0, no support ticket, plus nightly 7-day rolling auto-backups for instant rollback. Leave with everything Ã¢â‚¬â€ vendors, homes, schedules, options, budgets, every line. JobTread supports data export through their platform." },
  { feature: "Vendor portal Ã¢â‚¬â€ no login required (email magic links)", cornerstone: true, competitor: "limited", note: "Cornerstone: vendors click a secure magic link in their email to confirm tasks, accept schedule changes, and submit bids Ã¢â‚¬â€ no account, no app, no password. JobTread has sub/vendor portals but they're account-based, so vendors still have to sign up and remember a login." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture Ã¢â‚¬â€ replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. JobTread ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. JobTread has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "limited", note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. JobTread has POs but the generation flow isn't schedule-task-driven." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "limited", note: "Real-time buyer portal synced with construction scheduling Ã¢â‚¬â€ when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. JobTread has a client portal but it's general-contractor-shaped Ã¢â‚¬â€ not new-construction milestone-driven." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing - production builder native. Not a JobTread concept." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline with per-community vendor/pricing rules. JobTread: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship Gantt + tasks + dependencies + vendor notifications." },
  { feature: "Job costing / budgets", cornerstone: true, competitor: true, note: "Both ship job costing and budget tracking." },
  { feature: "Bid management", cornerstone: true, competitor: true, note: "Both ship bid management. Cornerstone Pro+ adds the 7-wave automated bidding pipeline (cold call Ã¢â€ â€™ onboarded)." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Cornerstone: every plan, every tier. JobTread: $20/user (tiered breaks above 10 users)." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "$199 + $20/user", note: "Cornerstone is flat at every tier. JobTread is $199 base plus $20 per user, so the bill grows with your crew. Different model entirely Ã¢â‚¬â€ but more importantly, these aren't priced against the same product. JobTread doesn't ship an options engine, floorplan pricing matrix, designer packages, or multi-community pipelines at any user count." },
  { feature: "Cornerstone tiers (flat unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "Ã¢â‚¬â€", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30 named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder native", desc: "Floorplan pricing matrix, structural options engine, designer packages, multi-community pipelines - first-class concepts on Cornerstone Builder+ ($299/mo). JobTread is built for general contractors and remodelers, not home builders." },
  { title: "100+ skills vs ~35 — and ours chain together", desc: "Foreman AI (Cornerstone Pro $499/mo) ships 100+ purpose-built construction skills that chain together into real workflows: read a blueprint, learn your fixture preferences, build a complete lighting package, tag everything with option classes for the design center — in one prompt. JobTread's AI Connector exposes ~35 mostly-CRUD skills (list, create, search) and routes you back to ChatGPT/Claude for the thinking. Different category: action agent that chains and learns vs chat bridge to a generic LLM." },
  { title: "Foreman learns YOUR build style automatically", desc: "Cornerstone's learnBuilderPreferences skill (shipped May 12, 2026) reads your existing floorplan takeoffs and figures out YOUR defaults — if your bedrooms always get recessed cans, that's the default next time. Every Foreman skill checks learned preferences before falling back to hardcoded values. The more floorplans you build, the smarter Foreman gets for YOUR org specifically. JobTread's AI stays static — it doesn't get smarter with each project." },
  { title: "Flat pricing, no per-user math", desc: "Cornerstone Starter $149, Builder $299, Pro $499, Pro+ $599 - flat at every tier, unlimited users. JobTread starts $199 + $20/user; a 20-person team is $599/mo. Bring on your whole crew without watching the meter." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best JobTread alternative for home builders?",
    a: "Cornerstone PMÃ¢â€žÂ¢ is the purpose-built JobTread alternative for home builders. Where JobTread is designed for general contractors, remodelers, and custom builders (all on one flat plan), Cornerstone is built specifically for production - with a structural options engine, designer packages, multi-community pipelines, lot management, and pre-sale design center. JobTread covers GC workflows broadly; Cornerstone goes deep on the production-builder workflow.",
  },
  {
    q: "How does Cornerstone's pricing compare to JobTread's?",
    a: "Honest answer: they're not really priced against the same product, so per-user math is a distraction. JobTread is one flat plan at $199/mo base plus $20 per user. Cornerstone is tiered: Starter $149/mo (scheduling + portal), Builder $299/mo (adds sales pipeline, purchasing, design center with options engine and designer packages), Pro $499/mo (adds Foreman AI + Blueprint AI), Pro+ $599/mo (adds REST API, BYOA, 30 named webhook events, 7-wave bidding). Every Cornerstone tier is flat with unlimited users. The real difference isn't price-per-user Ã¢â‚¬â€ it's that JobTread doesn't have a structural options engine, floorplan pricing matrix, multi-community pipelines, or designer packages at any plan or any team size. If you need those, JobTread isn't an option regardless of cost.",
  },
  {
    q: "How is Foreman AI different from JobTread's AI Connector?",
    a: "They’re in different categories. JobTread's AI Connector is a bridge: it exposes ~35 mostly basic CRUD skills (list homes, create vendor, search parts) and routes the thinking back to a third-party LLM like ChatGPT or Claude. Foreman AI is a native construction agent with 100+ purpose-built skills that chain together into real workflows. One prompt can read a blueprint, learn your fixture preferences from past takeoffs, build a complete fixture-by-fixture lighting package, and tag everything with option classes for the design center — all in a single call against your live data. And because Foreman ships learnBuilderPreferences, every skill gets smarter the more floorplans you set up; JobTread's AI stays static. Foreman is included natively on Cornerstone Pro ($499/mo flat, unlimited users).",
  },
  {
    q: "Can I migrate from JobTread to Cornerstone PMÃ¢â€žÂ¢?",
    a: "Yes. The AI Migration Wizard reads your JobTread export, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, design options, and more. Most migrations complete in under a day, self-serve. ~$0.01 per migration in AI cost - we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PMÃ¢â€žÂ¢ have JobTread's scheduling features?",
    a: "Yes - Gantt charts, dependencies, cascade scheduling, vendor notifications, and task management are all included starting on the Starter plan. Cornerstone Pro+ adds 30 named webhook events on schedule changes, so you can wire external systems (SMS via Twilio, voice via Bland or Retell) to your schedule triggers without code.",
  },
  {
    q: "How does Cornerstone's BYOA compare to JobTread's AI Connector?",
    a: "Both platforms let you connect external AI to your construction data. JobTread ships the AI Connector for plugging in third-party tools (ChatGPT, Claude). Cornerstone's BYOA is included on Pro+ ($599/mo) via the public REST API (59+ endpoints and growing) plus 30+ named webhook events with typed payload schemas (catalog growing) - letting your own agent both read live data and react to events (home created, bid accepted, schedule cascade, etc.). Different architectures; both work. Cornerstone's edge is the richer named event catalog for event-driven automation.",
  },
  {
    q: "What does the $149 Cornerstone Starter include?",
    a: "Starter ($149/mo) includes Construction Scheduling (Gantt + task view), 3-tier dependency auto-cascade, 17 pre-built templates, subcontractor assignment and notifications, the permitting pipeline tracker, homeowner progress portal, and the AI Support Agent. Foreman AI, Blueprint AI, sales pipeline, purchasing, and design center are on higher tiers - Builder ($299), Pro ($499 includes Foreman + Blueprint), and Pro+ ($599 includes the REST API and BYOA).",
  },
  {
    q: "Does Cornerstone PMÃ¢â€žÂ¢ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - and the beta unlocks everything on the Pro plan (Foreman AI, Blueprint AI, options engine, full sales-to-construction workflow). No credit card, no contract, no implementation fee.",
  },
];

export default function JobtreadAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="JobTread"
      badgeLabel="JobTread Alternative"
      heroLine1="JobTread is for GCs."
      heroLine2="Cornerstone is for home builders."
      accentColor="emerald"
      heroParagraph="Cornerstone PMÃ¢â€žÂ¢ is the JobTread alternative purpose-built for home builders. Floorplan pricing matrix, structural options engine, designer packages, multi-community pipelines - home-builder-native by design. On Pro ($499/mo flat) you get Foreman AI's 100+ action-taking skills; on Pro+ ($599/mo flat) you add the public REST API and 30 named webhook events. Flat pricing, unlimited users on every tier."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="JobTread vs Cornerstone PMÃ¢â€žÂ¢ - focused on home builder workflows and AI capability."
      comparisonRows={comparisonRows}
      trademarkName="JobTread"
      whySwitchHeadline="Why home builders choose Cornerstone over JobTread"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using JobTread? Drop your export. We'll do the rest."
      migrationDesc="Export your JobTread data, drop it in our wizard, and AI auto-maps every column - vendors, jobs, budgets, contacts, schedules. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
      faqTitle="JobTread Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PMÃ¢â€žÂ¢ from JobTread."
      faqItems={faqItems}
      footerHeadline="Ready for a home builder platform?"
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
