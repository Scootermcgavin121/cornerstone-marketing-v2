import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Procore Alternative for Residential Home Builders | Cornerstone PM",
  description:
    "Procore is built for commercial construction. Cornerstone PM is the Procore alternative for residential production home builders — AI agents, options engine, and unlimited users from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/procore-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for residential production builders", cornerstone: true, competitor: false, note: "Procore is commercial-first. Most of its functionality is overkill for residential production builders." },
  { feature: "Pricing accessible to small builders", cornerstone: true, competitor: false, note: "Cornerstone starts at $149/mo. Procore typically starts at $375+/mo and scales significantly by project volume and product modules." },
  { feature: "Implementation cost", cornerstone: "$0", competitor: "$10k–$50k+", note: "Procore requires implementation and training packages. Cornerstone is self-serve with the AI Migration Wizard." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "Weeks–months", note: "Cornerstone: AI Migration Wizard + 23 import endpoints. Operational in an afternoon." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Foreman AI: 45+ skills that read AND write data. Blueprint AI: PDF to takeoff in 60 seconds. Procore's AI is limited beta features." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. Unique to Cornerstone." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, and reads supplier product pages with AI-powered web scraping." },
  { feature: "Structural options engine (residential)", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan — not a commercial construction feature." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Residential buyer selections — not a Procore feature." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: "limited", note: "Cornerstone: 30 named events, HMAC signatures, delivery logs. Procore has webhooks but limited residential-specific events." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data. Procore has no BYOA support." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: true, note: "Both offer REST APIs. Cornerstone's is purpose-built for residential workflows; Procore's is commercial-focused." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: "limited", note: "Cornerstone: full CSV/JSON export anytime. Procore: data portability limited without custom extraction." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link — no account needed." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Procore pricing scales by product modules and usage. Cornerstone is flat unlimited users." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship scheduling. Procore's scheduler is commercial-focused." },
  { feature: "RFIs / Submittals", cornerstone: false, competitor: true, note: "Procore excels at commercial RFI and submittal workflows — not a residential production builder need." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$375+/mo", note: "Procore pricing is typically volume-based; verify current pricing with Procore directly." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Right-sized for residential builders", desc: "Procore is built for $100M commercial GCs. Cornerstone is built for residential production builders doing 5–200 homes per year. You get the features you actually need — without paying for RFI workflows and submittal logs." },
  { title: "AI built for residential workflows", desc: "Foreman AI has 45+ skills specific to home building: design options, vendor bids, takeoffs, buyer allowances, scope management, profitability reports. Not generic construction AI — residential-native." },
  { title: "Up and running today", desc: "Procore implementations take weeks to months. Cornerstone's AI Migration Wizard gets you operational in an afternoon. Drop your existing data in; the AI maps and imports it. ~$0.01 in AI cost — we absorb it." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Procore too big for a residential home builder?",
    a: "For most residential production builders doing under 200 homes per year, yes. Procore is built for commercial construction — large GCs with RFI-heavy workflows, submittal management, and complex owner-architect-contractor relationships. The features residential builders actually need (structural options engine, design center, buyer selections, pre-sale pipeline, production community management) are not Procore's strengths.",
  },
  {
    q: "What's the best Procore alternative for residential builders?",
    a: "Cornerstone PM is purpose-built for residential production home builders. It covers the project management backbone you need (scheduling, purchasing, bid management, homeowner portal, document management) and adds features Procore doesn't offer: a structural options engine, 64 curated Designer Packages, native AI agents (Foreman AI 45+ skills, Blueprint AI), and a public REST API with 30 webhook events.",
  },
  {
    q: "Is Cornerstone PM cheaper than Procore?",
    a: "Significantly. Cornerstone PM starts at $149/mo with unlimited users and zero implementation cost. Procore typically starts at $375+/mo and scales by project volume and modules, with additional implementation and training costs. For small-to-mid residential builders, the total cost of Cornerstone PM is a fraction of Procore.",
  },
  {
    q: "Can I migrate from Procore to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Procore data exports, auto-detects column mapping, and runs 23 import endpoints covering vendors, homes, communities, schedules, scopes, budgets, and more. Most migrations complete in under a day. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM have a public API like Procore?",
    a: "Yes. Cornerstone PM's REST API (59 endpoints, 30 webhook events, HMAC signatures, scoped Bearer-token auth) is on the Pro+ plan at $599/mo. Procore also has an API, but it's oriented toward commercial construction workflows. Cornerstone's API is built for residential: floorplans, options, lot management, buyer selections, bid requests, vendor assignments.",
  },
  {
    q: "What does Procore have that Cornerstone PM doesn't?",
    a: "Procore is stronger in commercial-specific features: RFI management, formal submittal workflows, punch lists for commercial projects, owner billing, certified payroll, and deep preconstruction tools for commercial GCs. If you're a residential builder, these aren't features you need — and you shouldn't pay Procore rates for them.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function ProcoreAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Procore"
      badgeLabel="Procore Alternative — Residential Builders"
      heroLine1="Procore is for commercial."
      heroLine2="You build homes."
      accentColor="amber"
      heroParagraph="Procore is built for commercial GCs running $100M projects. Cornerstone PM is the Procore alternative for residential production home builders — right-sized, AI-native, and operational in hours, not months. From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Procore is commercial-first. Cornerstone PM is built for residential production builders."
      comparisonRows={comparisonRows}
      trademarkName="Procore"
      whySwitchHeadline="Why residential builders choose Cornerstone over Procore"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Moving from Procore? Drop your export. We'll do the rest."
      migrationDesc="Export your Procore data, drag the files into our wizard, and AI auto-maps every column across vendors, projects, budgets, contacts, and schedules. Dry-run before you commit. ~$0.01 per migration in AI — we absorb it."
      faqTitle="Procore Alternative FAQ"
      faqSubtitle="Common questions from residential builders evaluating Cornerstone PM vs Procore."
      faqItems={faqItems}
      footerHeadline="Stop paying commercial rates for residential features."
      footerSubtext="Join the beta and get 2 years free. Built for home builders, not GCs."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
