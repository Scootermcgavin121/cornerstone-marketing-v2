import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "CoConstruct Alternative — Frustrated by the Buildertrend Merger? | Cornerstone PM",
  description:
    "CoConstruct was merged into Buildertrend. If you're frustrated with the transition, Cornerstone PM offers a purpose-built production builder platform with AI agents from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/coconstruct-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Still an independent product", cornerstone: true, competitor: false, note: "CoConstruct was acquired and merged into Buildertrend in 2022. Cornerstone PM is independent and purpose-built for production builders." },
  { feature: "Built for production home builders", cornerstone: true, competitor: false, note: "CoConstruct was built for custom builders and remodelers. Cornerstone PM is purpose-built for production (tract/spec) builders." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Foreman AI: 45+ skills that read AND write data. Blueprint AI: PDF to takeoff in 60 seconds. No native AI in Buildertrend/CoConstruct." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. The only construction AI with this." },
  { feature: "AI image search + anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, and reads Home Depot/Ferguson product pages with AI-powered web scraping." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, delivery logs, auto-retry. Buildertrend webhooks are limited and have no public event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data. Buildertrend has no BYOA support." },
  { feature: "Public REST API (59 endpoints)", cornerstone: true, competitor: "limited", note: "Cornerstone: 59 endpoints, public docs. Buildertrend: enterprise API only." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects CoConstruct/Buildertrend export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups for 7 days." },
  { feature: "Vendor portal (no login required)", cornerstone: true, competitor: false, note: "Vendors submit bids via email link — no Cornerstone account needed." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing — production builder native." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline. Buildertrend: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both: Gantt charts, dependencies, notifications." },
  { feature: "Homeowner portal", cornerstone: true, competitor: true, note: "Both: client-facing milestone and selection views." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: false, note: "Buildertrend charges per user above plan limits." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$499/mo (Buildertrend)", note: "Cornerstone is ~70% less at the starter tier." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Migration is the #1 reason builders stay stuck", desc: "We removed it. The AI Migration Wizard reads your CoConstruct/Buildertrend export, auto-maps every column, and runs all 23 import endpoints. Most migrations complete in under a day. ~$0.01 in AI cost — we absorb it." },
  { title: "AI that takes actions, not just answers", desc: "Foreman AI (45+ skills) creates POs, updates design options, generates SOWs, and remembers your preferences across sessions. Per-user memory. Built-in session compaction for marathon workflows. No other construction AI does this." },
  { title: "Production workflows native", desc: "Lots, models, options, plan repeats, design center, draws, multi-community pipelines. CoConstruct was built for custom builders — Cornerstone is built for you." },
];

const faqItems: FAQItem[] = [
  {
    q: "CoConstruct was merged into Buildertrend — what are my options?",
    a: "If you're frustrated with the CoConstruct-to-Buildertrend transition, Cornerstone PM is the cleanest off-ramp. It covers the same core functions (scheduling, homeowner portal, selections, purchasing, bid management) and adds features CoConstruct never had: native AI agents (Foreman AI 45+ skills), structural options engine for production builders, 30 webhook events, and a public REST API. The AI Migration Wizard ingests your Buildertrend/CoConstruct export in under a day.",
  },
  {
    q: "Is Cornerstone PM a good CoConstruct replacement?",
    a: "For production home builders, yes. Cornerstone PM covers CoConstruct's core features and adds a structural options engine, floorplan pricing matrix, multi-community pipelines, native AI agents, and a public REST API that CoConstruct never offered. Note: CoConstruct was built for custom builders — if you're a custom builder doing one-off jobs without floorplan repeats, Buildertrend is the path of least resistance after the merger.",
  },
  {
    q: "How hard is it to migrate from CoConstruct / Buildertrend to Cornerstone PM?",
    a: "The AI Migration Wizard makes it much simpler than most platforms. Export your Buildertrend data, drag the files in, and the wizard reads them, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, schedules, scopes, budgets, design options, and more. Dry-run before you commit. Most migrations complete in under a day. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is Cornerstone PM cheaper than Buildertrend (the platform CoConstruct became)?",
    a: "Yes. Cornerstone PM starts at $149/mo with unlimited users; Buildertrend starts at $499/mo. The full Cornerstone Pro+ plan ($599/mo) includes Foreman AI, Blueprint AI, 30 webhook events, REST API, and BYOA — capabilities Buildertrend doesn't offer at any price.",
  },
  {
    q: "Does Cornerstone PM have a homeowner portal like CoConstruct had?",
    a: "Yes. Cornerstone's homeowner portal shows milestones, design selections, documents, and messages. Buyers can browse and confirm design options directly — no paper forms.",
  },
  {
    q: "What about CoConstruct's allowance and selections features?",
    a: "Cornerstone PM ships a full design center with structural options, design options, allowances (budget placeholder allowances for non-bid items), 64 curated Designer Packages across 7 categories, and per-floorplan or global allowance application. Foreman AI's Design Center domain adds plain-English option configuration on top.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 production builders — no credit card, no contract, no implementation fee.",
  },
];

export default function CoConstructAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="CoConstruct"
      badgeLabel="CoConstruct / Buildertrend Alternative"
      heroLine1="CoConstruct is gone."
      heroLine2="Here's what's better."
      accentColor="cyan"
      heroParagraph="CoConstruct was merged into Buildertrend in 2022. If you're frustrated with the transition — higher prices, different workflows, no AI — Cornerstone PM is the purpose-built production builder alternative. Native AI agents, options engine, 30 webhook events, and unlimited users from $149/mo."
      secondaryCTA={{ text: "vs Buildertrend", href: "/buildertrend-alternative" }}
      comparisonSubtitle="Comparing to Buildertrend, the platform CoConstruct became."
      comparisonRows={comparisonRows}
      trademarkName="CoConstruct"
      whySwitchHeadline="Why CoConstruct refugees choose Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already in Buildertrend? Drop your export. We'll do the rest."
      migrationDesc="Export your Buildertrend data (the CoConstruct successor), drag the files into our wizard, and AI auto-maps every column — homes, selections, vendors, schedules, budgets. Dry-run before you commit. Migration is the #1 reason builders stay locked in. We removed that excuse."
      faqTitle="CoConstruct Alternative FAQ"
      faqSubtitle="Common questions from builders looking to move on after the Buildertrend merger."
      faqItems={faqItems}
      footerHeadline="Done with the Buildertrend transition drama?"
      footerSubtext="Join the beta and get 2 years free. Migration tooling included."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
