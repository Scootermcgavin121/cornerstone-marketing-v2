import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Procore Alternative for Residential Home Builders | Cornerstone PM™",
  description:
    "Procore is built for commercial construction. Cornerstone PM™ is the Procore alternative for residential home builders - AI agents (Pro $499/mo), options engine, and unlimited users from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/procore-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for residential home builders", cornerstone: true, competitor: false, note: "Procore is commercial-first. Most of its functionality is overkill for residential home builders." },
  { feature: "Pricing accessible to small builders", cornerstone: true, competitor: false, note: "Cornerstone starts at $149/mo (Starter). Procore does not publish pricing - custom quotes only; typically several hundred dollars per month with implementation costs." },
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$10k-$50k+", note: "Procore requires implementation and training packages. Cornerstone is self-serve with the AI Migration Wizard." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "Weeks-months", note: "Cornerstone: AI Migration Wizard + 23 import endpoints. Operational in an afternoon." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 83 Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 sec. Procore's AI features are commercial-focused and limited in residential scope." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. Unique to Cornerstone. Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "Structural options engine (residential)", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - Cornerstone Builder ($299/mo). Not a commercial construction feature." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer - the same playbook K. Hovnanian Homes uses. Residential buyer selections - not a Procore feature. Cornerstone Builder+." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting - HMAC signatures, delivery logs. New events ship as the platform grows. Procore has webhooks but limited residential-specific events." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to live data via REST API + 30+ named webhook events. Procore has no BYOA support." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: true, note: "Both offer REST APIs. Cornerstone Pro+: purpose-built for residential workflows (59+ endpoints and growing rapidly). Procore's is commercial-focused." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: "limited", note: "Cornerstone: one-click CSV/JSON export anytime, $0, no support ticket, plus nightly 7-day rolling auto-backups for instant rollback. Leave with every vendor, home, schedule, option, and budget line. Procore: data portability limited without custom extraction." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Vendors confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent straight to their email. No app to download, no account to create, no password to remember. Click the link, do the thing, done. Biggest friction-killer for trade partners in the industry." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Procore ships none of these for residential." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Procore has no residential equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "limited", note: "Cornerstone gives you four PO patterns built for residential cash flow: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Procore's PO flow is commercial-construction-shaped — not built for residential trade-by-trade cash flow patterns." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time buyer portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Procore is commercial-first — no residential homeowner portal." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Cornerstone: every tier from $149. Procore pricing scales by product modules and usage." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship scheduling. Procore's scheduler is commercial-focused." },
  { feature: "RFIs / Submittals", cornerstone: false, competitor: true, note: "Procore excels at commercial RFI and submittal workflows - not a residential home builder need." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Custom quote + implementation", note: "Procore doesn't publish pricing and requires implementation packages. Cornerstone starts at $149/mo, self-serve, zero implementation cost. More importantly: Procore is a commercial construction platform — it doesn't ship a residential options engine, buyer design center, designer packages, or pre-sale pipeline at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30 named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Right-sized for residential builders", desc: "Procore is built for $100M commercial GCs. Cornerstone is built for residential home builders doing 5-200 homes per year. You get the features you actually need - without paying for RFI workflows and submittal logs." },
  { title: "Residential-native AI on Pro", desc: "Foreman AI (Cornerstone Pro, $499/mo) has 83+ skills specific to home building: design options, vendor bids, takeoffs, buyer allowances, scope management, profitability reports. Not generic construction AI - residential-native." },
  { title: "Up and running today", desc: "Procore implementations take weeks to months. Cornerstone's AI Migration Wizard gets you operational in an afternoon. Drop your existing data in; the AI maps and imports it. ~$0.01 in AI cost - we absorb it." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Procore too big for a residential home builder?",
    a: "For most residential home builders doing under 200 homes per year, yes. Procore is built for commercial construction - large GCs with RFI-heavy workflows, submittal management, and complex owner-architect-contractor relationships. The features residential builders actually need (structural options engine, design center, buyer selections, pre-sale pipeline, community management) are not Procore's strengths.",
  },
  {
    q: "What's the best Procore alternative for residential builders?",
    a: "Cornerstone PM™ is purpose-built for residential home builders. It covers the project management backbone you need (scheduling, purchasing, bid management, homeowner portal, document management) and adds features Procore doesn't offer: a structural options engine, 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses), native AI agents (Foreman AI 83+ skills on Pro $499/mo, Blueprint AI), and a public REST API with 30+ named webhook events (Pro+).",
  },
  {
    q: "Is Cornerstone PM™ cheaper than Procore?",
    a: "Significantly. Cornerstone PM™ starts at $149/mo (Starter, unlimited users) with zero implementation cost. Procore does not publish pricing - custom quotes only - and typically requires implementation and training packages. For small-to-mid residential builders, the total cost of Cornerstone PM™ is a fraction of Procore. The full Cornerstone Pro+ plan ($599/mo) includes capabilities Procore doesn't offer at any price for residential workflows.",
  },
  {
    q: "Can I migrate from Procore to Cornerstone PM™?",
    a: "Yes. The AI Migration Wizard reads your Procore data exports, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM™ have a public API like Procore?",
    a: "Yes. Cornerstone PM™'s REST API (Pro+ plan, $599/mo): 59+ endpoints and growing rapidly, 30+ named webhook events (catalog growing), HMAC signatures, scoped Bearer-token auth, and public documentation - oriented toward residential: floorplans, options, lot management, buyer selections, bid requests, vendor assignments. Procore also has an API, but it's oriented toward commercial construction workflows.",
  },
  {
    q: "What does Procore have that Cornerstone PM™ doesn't?",
    a: "Procore is stronger in commercial-specific features: RFI management, formal submittal workflows, punch lists for commercial projects, owner billing, certified payroll, and deep preconstruction tools for commercial GCs. If you're a residential builder, these aren't features you need - and you shouldn't pay Procore rates for them.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent - unlimited users. The options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM™ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
  },
];

export default function ProcoreAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Procore"
      badgeLabel="Procore Alternative - Residential Builders"
      heroLine1="Procore is for commercial."
      heroLine2="You build homes."
      accentColor="amber"
      heroParagraph="Procore is built for commercial GCs running $100M projects. Cornerstone PM™ is the Procore alternative for residential home builders - right-sized, AI-native (Foreman AI on Pro $499/mo), and operational in hours, not months. From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Procore is commercial-first. Cornerstone PM™ is built for residential home builders."
      comparisonRows={comparisonRows}
      trademarkName="Procore"
      whySwitchHeadline="Why residential builders choose Cornerstone over Procore"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Moving from Procore? Drop your export. We'll do the rest."
      migrationDesc="Export your Procore data, drag the files into our wizard, and AI auto-maps every column across vendors, projects, budgets, contacts, and schedules. Dry-run before you commit. ~$0.01 per migration in AI - we absorb it."
      faqTitle="Procore Alternative FAQ"
      faqSubtitle="Common questions from residential builders evaluating Cornerstone PM™ vs Procore."
      faqItems={faqItems}
      footerHeadline="Stop paying commercial rates for residential features."
      footerSubtext="Join the beta and get 2 years free. Built for home builders, not GCs."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
