import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "CoConstruct Alternative - Frustrated by the Buildertrend Merger? | Cornerstone PM",
  description:
    "CoConstruct was merged into Buildertrend. If you're frustrated with the transition, Cornerstone PM offers a home-builder platform with AI agents (Pro $499/mo) from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/coconstruct-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Still an independent product", cornerstone: true, competitor: false, note: "CoConstruct was acquired and merged into Buildertrend in 2022. Cornerstone PM is independent and purpose-built for home builders." },
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "CoConstruct was built for custom builders and remodelers. Cornerstone PM is built across the full home-builder spectrum - production, semi-custom, and custom - with lot management, options engine, and multi-community pipelines that work for all of them." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 45+ Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 sec. No native AI in Buildertrend/CoConstruct." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages so long workflows never crash or forget. The only construction AI with this. Cornerstone Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Buildertrend webhooks are limited and have no public event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to live builder data via public REST API + 30+ named webhook events (catalog growing). Buildertrend has no BYOA support." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Buildertrend: enterprise API only." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - Cornerstone Builder ($299/mo)." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically. Cornerstone Builder+." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects CoConstruct/Buildertrend export column mapping and runs 23 import endpoints. ~$0.01 per migration." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Vendors confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent straight to their email. No app to download, no Cornerstone account to create, no password to remember. Click the link, do the thing, done. Biggest friction-killer for trade partners in the industry." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. CoConstruct ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. CoConstruct has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Most platforms hard-code one PO model. Cornerstone gives you four: (1) all POs at job start (lock in budget exposure day one), (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a construction task is marked complete (cash goes out only when work is verifiably done), or (4) configurable per task / scope / community — mix all four on the same job. CoConstruct (now Buildertrend) hard-codes a single PO model." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing - included on Cornerstone Builder ($299/mo)." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline. Buildertrend: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both: Gantt charts, dependencies, notifications." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "limited", note: "Cornerstone gives buyers a real-time portal synced with construction scheduling — when framing moves three days, they see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. CoConstruct (now Buildertrend) has a client portal but the milestone-photo workflow and bulk ZIP export aren't packaged the same way." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: true, note: "Both now include unlimited users. Cornerstone: every tier from $149. Buildertrend: custom pricing - contact for quote." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Custom quote (Buildertrend)", note: "Buildertrend no longer publishes pricing -- custom quotes only. Cornerstone is flat at every tier, unlimited users. More importantly: Buildertrend doesn't ship a structural options engine, floorplan pricing matrix, native AI agents, or 30+ named webhook events at any price point." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
  { feature: "Price at full API + AI tier (Pro+)", cornerstone: "$599/mo", competitor: "Custom quote", note: "Cornerstone Pro+ ($599/mo) adds the full public REST API, BYOA, automated bidding pipeline, and Opus AI - flat, no per-user fees." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Migration is the #1 reason builders stay stuck", desc: "We removed it. The AI Migration Wizard reads your CoConstruct/Buildertrend export, auto-maps every column, and runs all 23 import endpoints. Most migrations complete in under a day. ~$0.01 in AI cost - we absorb it." },
  { title: "Action-taking AI on Pro — 45+ skills", desc: "Foreman AI (Cornerstone Pro, $499/mo) creates POs, updates design options, generates SOWs. Greets you by your chosen name, learns your go-to vendors and habits, gets more intuitive every session — custom-coded into the app, not a generic chatbot bolt-on. Built-in session compaction for marathon workflows. No other construction AI does this." },
  { title: "Home builder workflows native", desc: "Lots, models, options, plan repeats, design center, draws, multi-community pipelines. CoConstruct was built for custom builders - Cornerstone Builder ($299/mo) covers all of this." },
];

const faqItems: FAQItem[] = [
  {
    q: "CoConstruct was merged into Buildertrend - what are my options?",
    a: "If you're frustrated with the CoConstruct-to-Buildertrend transition, Cornerstone PM is the cleanest off-ramp. It covers the same core functions (scheduling, homeowner portal, selections, purchasing, bid management) and adds features CoConstruct never had: native AI agents (Foreman AI 45+ skills on Pro $499/mo), structural options engine (Builder $299/mo), 30+ named webhook events (Pro+), and a public REST API (Pro+). The AI Migration Wizard ingests your Buildertrend/CoConstruct export in under a day.",
  },
  {
    q: "Is Cornerstone PM a good CoConstruct replacement?",
    a: "For home builders of all types - production, semi-custom, and custom. Cornerstone PM covers CoConstruct's core features and adds a structural options engine, floorplan pricing matrix, multi-community pipelines, native AI agents (Pro $499/mo), and a public REST API (Pro+) that CoConstruct never offered. If you're doing highly variable one-off remodel work with no floorplan repeats at all, Buildertrend is the path of least resistance after the merger.",
  },
  {
    q: "How hard is it to migrate from CoConstruct / Buildertrend to Cornerstone PM?",
    a: "The AI Migration Wizard makes it much simpler than most platforms. Export your Buildertrend data, drag the files in, and the wizard reads them, auto-detects column mapping, and runs 23 dedicated import endpoints covering vendors, homes, communities, schedules, scopes, budgets, design options, and more. Dry-run before you commit. Most migrations complete in under a day. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is Cornerstone PM cheaper than Buildertrend (the platform CoConstruct became)?",
    a: "Cornerstone PM's tiers start at $149/mo (Starter, unlimited users). Buildertrend no longer publishes pricing - they require a custom quote. For the full platform: Cornerstone Builder ($299/mo, options engine + full pipeline) and Cornerstone Pro ($499/mo, Foreman AI + Blueprint AI) are flat regardless of team size. Pro+ at $599/mo includes capabilities Buildertrend doesn't offer at any price.",
  },
  {
    q: "Does Cornerstone PM have a homeowner portal like CoConstruct had?",
    a: "Yes. Cornerstone's homeowner portal shows milestones, design selections, documents, and messages. Buyers can browse and confirm design options directly - no paper forms. Included from the Starter plan up.",
  },
  {
    q: "What about CoConstruct's allowance and selections features?",
    a: "Cornerstone PM ships a full design center with structural options, design options, allowances (budget placeholder allowances for non-bid items), 64 curated Designer Packages across 7 categories, and per-floorplan or global allowance application - all on Cornerstone Builder ($299/mo). Foreman AI's Design Center domain (Pro $499/mo) adds plain-English option configuration on top.",
  },
  {
    q: "What does $149/mo Cornerstone Starter actually include?",
    a: "Starter ($149/mo) includes construction scheduling (Gantt + task view), subcontractor assignment and notifications, permits pipeline tracker, homeowner progress portal, and the AI Support Agent - unlimited users. The options engine and design center are on Builder ($299/mo). Foreman AI and Blueprint AI are on Pro ($499/mo). Full REST API and BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders - no credit card, no contract, no implementation fee.",
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
      heroParagraph="CoConstruct was merged into Buildertrend in 2022. If you're frustrated with the transition - higher prices, different workflows, no AI - Cornerstone PM is the home-builder alternative. Native AI agents (Foreman AI on Pro $499/mo), options engine (Builder $299/mo), 30+ named webhook events (Pro+), and unlimited users from $149/mo."
      secondaryCTA={{ text: "vs Buildertrend", href: "/buildertrend-alternative" }}
      comparisonSubtitle="Comparing to Buildertrend, the platform CoConstruct became."
      comparisonRows={comparisonRows}
      trademarkName="CoConstruct"
      whySwitchHeadline="Why CoConstruct refugees choose Cornerstone PM"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already in Buildertrend? Drop your export. We'll do the rest."
      migrationDesc="Export your Buildertrend data (the CoConstruct successor), drag the files into our wizard, and AI auto-maps every column - homes, selections, vendors, schedules, budgets. Dry-run before you commit. Migration is the #1 reason builders stay locked in. We removed that excuse."
      faqTitle="CoConstruct Alternative FAQ"
      faqSubtitle="Common questions from builders looking to move on after the Buildertrend merger."
      faqItems={faqItems}
      footerHeadline="Done with the Buildertrend transition drama?"
      footerSubtext="Join the beta and get 2 years free. Migration tooling included."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
