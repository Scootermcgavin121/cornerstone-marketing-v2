import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Buildertrend Alternative for Home Builders | Cornerstone PM",
  description:
    "Buildertrend alternative built for home builders. Native AI agents (Pro $499/mo), options engine, REST API, and multi-community management - flat pricing from $149/mo, unlimited users.",
  alternates: { canonical: "https://www.cornerstonepm.ai/buildertrend-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Buildertrend is built for custom builders & remodelers; Cornerstone is built across the full home-builder spectrum - production, semi-custom, and custom - with lot management, options engine, and multi-community pipelines that work for all of them." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 45+ Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 sec. Buildertrend has no native action-taking AI agents." },
  { feature: "AI memory compaction for marathon sessions", cornerstone: true, competitor: false, note: "Foreman auto-summarizes older messages mid-session so long workflows never crash or forget. No other construction platform does this. Cornerstone Pro feature." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them permanently on CDN, and reads Home Depot/Ferguson/Lowe's product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app - Foreman reads it with AI vision and acts on it (vendor quote screenshot → parts catalog entry, faucet photo → model lookup). Cornerstone Pro feature." },
  { feature: "AI floor plan takeoffs (Blueprint AI)", cornerstone: true, competitor: false, note: "PDF blueprint to material takeoff in under 60 seconds. Blueprint AI included on Cornerstone Pro ($499/mo, 25 takeoffs/mo)." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Buildertrend webhooks: limited scope, no named event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to live builder data via the public REST API + 30+ named webhook events (catalog growing). Buildertrend has no BYOA support." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Buildertrend: enterprise API access, not self-serve." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "Drop your Buildertrend export - AI auto-detects column mapping and runs 23 import endpoints automatically. ~$0.01 per migration." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan - Cornerstone Builder ($299/mo). Not a Buildertrend strength." },
  { feature: "Designer Packages (64 curated, 7 categories)", cornerstone: true, competitor: false, note: "Buyers pick a package; all category options lock automatically. Cornerstone Builder+." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "Multi-community management", cornerstone: true, competitor: "limited", note: "Cornerstone: native multi-community pipeline. Buildertrend: multi-job, not true multi-community." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both: Gantt charts, dependencies, vendor notifications." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "limited", note: "Cornerstone gives buyers a real-time portal synced with construction scheduling — when framing moves three days, they see it instantly, no follow-up call needed. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record of every conversation, and (3) one-click ZIP download of all job photos so buyers can save their whole build history. Buildertrend has a client portal with messaging, but the milestone-photo workflow and bulk ZIP export aren't packaged the same way." },
  { feature: "Bid management + vendor portal", cornerstone: true, competitor: true, note: "Cornerstone Pro+ adds the 7-wave automated bidding pipeline + a no-login vendor portal: vendors confirm tasks, accept schedule changes, and submit bids via secure email magic links — no app, no account, no password." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Buildertrend ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Buildertrend has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Most platforms hard-code one PO model. Cornerstone gives you four: (1) all POs at job start (lock in budget exposure day one), (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a construction task is marked complete (cash goes out only when work is verifiably done), or (4) configurable per task / scope / community — mix all four on the same job. Your cash flow rules drive the system, not the other way around. Buildertrend hard-codes a single PO model." },
  { feature: "Model home QR for lead capture", cornerstone: true, competitor: false, note: "Cornerstone replaces paper sign-in sheets with a digital QR scan that creates Lead records. Buildertrend lead capture is web-form only." },
  { feature: "AI camera-event auto-task-start", cornerstone: true, competitor: false, note: "Webhook endpoint accepts events from any camera/sensor; auto-flips task to In Progress on vendor arrival. Cornerstone Pro+ feature." },
  { feature: "Unlimited users on all plans", cornerstone: true, competitor: true, note: "Both now include unlimited users. Cornerstone: every tier from $149. Buildertrend: custom pricing - contact for quote." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Custom quote", note: "Buildertrend no longer publishes pricing -- custom quotes only. Cornerstone is flat at every tier, unlimited users. More importantly: Buildertrend doesn't ship a structural options engine, floorplan pricing matrix, multi-community pipelines, native AI agents, or 30+ named webhook events at any price point." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder workflows native", desc: "Lots, models, options, plan repeats, design center, draws, multi-community pipelines - first-class concepts from Builder ($299/mo) up. Buildertrend treats every job as one-off." },
  { title: "Action-taking AI on Pro - 45+ skills", desc: "Foreman AI (Cornerstone Pro, $499/mo) reads AND writes data, remembers your preferences, analyzes jobsite photos, and scrapes product pages from Home Depot and Ferguson using AI-powered web scraping. No bolt-on plugins." },
  { title: "REST API + 30+ webhook events on Pro+", desc: "59+ REST endpoints (growing), 30+ named webhook events (catalog growing), HMAC signatures, scoped auth, and public docs on Pro+ ($599/mo). Buildertrend's API is enterprise-only. Wire Twilio, Bland, or your own Claude agent to our webhooks." },
];

const faqItems: FAQItem[] = [
  {
    q: "What's the best Buildertrend alternative for home builders?",
    a: "For home builders - production, semi-custom, and custom - Cornerstone PM is a strong Buildertrend alternative with key advantages: native AI agents (Foreman AI 45+ skills on Pro $499/mo, Blueprint AI), an options engine (Builder $299/mo), floorplan pricing matrix, multi-community management, 30+ named webhook events (Pro+), and a public REST API (Pro+). Buildertrend was built for custom builders and remodelers doing one-off jobs; Cornerstone is built for builders who repeat floorplans, run multi-community pipelines, and want AI that takes real actions.",
  },
  {
    q: "How is Cornerstone PM different from Buildertrend?",
    a: "Three key differences: (1) Cornerstone is built for plan-repeat home builders (production, semi-custom, custom), Buildertrend for custom and remodel; (2) Cornerstone includes 45+ native AI skills via Foreman AI (Pro $499/mo) plus Blueprint AI floor plan takeoffs, AI image search, and anti-bot web scraping - Buildertrend has no native AI; (3) Cornerstone offers a structural options engine, floorplan pricing matrix, multi-community pipelines, 30+ named webhook events (Pro+), and free database export that Buildertrend doesn't ship.",
  },
  {
    q: "Is Cornerstone PM cheaper than Buildertrend?",
    a: "Cornerstone PM's tiers start at $149/mo (Starter, unlimited users). Buildertrend no longer publishes pricing - they use custom quotes. For an apples-to-apples platform comparison: Cornerstone Builder ($299/mo, options engine + full pipeline) and Cornerstone Pro ($499/mo, Foreman AI + Blueprint AI) are flat regardless of team size. The full Cornerstone Pro+ plan at $599/mo includes capabilities Buildertrend doesn't offer at any price.",
  },
  {
    q: "Can I migrate from Buildertrend to Cornerstone PM?",
    a: "Yes - the AI Migration Wizard makes it fast. Drop your Buildertrend export files in, the wizard reads them, detects column mapping automatically, runs the imports, and tells you what it skipped. Behind the scenes it routes through 23 dedicated import endpoints. Most migrations complete in under a day, self-serve. White-glove migration is available on Pro and Pro+ plans.",
  },
  {
    q: "Does Cornerstone PM have everything Buildertrend has?",
    a: "Cornerstone PM covers the same core functions: scheduling, homeowner portal, purchasing, bid management, document storage, and change orders. It adds an options engine, AI agents (Foreman AI on Pro, Blueprint AI on Pro), multi-community pipelines, 30 webhook events, and a public REST API that Buildertrend doesn't offer. The one area Buildertrend serves that Cornerstone doesn't: remodelers doing highly variable one-off work without floorplan repeats.",
  },
  {
    q: "What does $149/mo Cornerstone Starter actually include?",
    a: "Starter ($149/mo) includes construction scheduling (Gantt + task view), 3-tier dependency auto-cascade, 17 pre-built schedule templates, subcontractor assignment and notifications, the permitting pipeline tracker, homeowner progress portal, and the AI Support Agent. The options engine and design center are on Builder ($299/mo). Foreman AI and Blueprint AI are on Pro ($499/mo). The full REST API and BYOA are on Pro+ ($599/mo). All tiers include unlimited users.",
  },
  {
    q: "Should I switch from Buildertrend if I'm a custom builder or remodeler?",
    a: "Possibly - Cornerstone's options engine, design center, and homeowner portal are valuable for custom and semi-custom builders too. If you're doing highly variable one-off remodel work with no floorplan repeats, Buildertrend may still fit. If you're running even a handful of homes with consistent floorplans or buyer selections, Cornerstone's workflow compresses significantly.",
  },
  {
    q: "What are the 30 webhook events?",
    a: "Cornerstone's 30 named webhook events (Pro+) cover: home lifecycle (created, status changed, closed), task/schedule updates, vendor notifications, cascade scheduling triggers, message events, sales pipeline changes, and bid request events. Every event ships with a typed payload schema, HMAC signature verification, delivery logs, and auto-retry. Buildertrend's webhooks are limited and have no public event catalog.",
  },
];

export default function BuildertrendAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Buildertrend"
      badgeLabel="Buildertrend Alternative"
      heroLine1="Built for home builders."
      heroLine2="Not custom-and-remodel only."
      accentColor="cyan"
      heroParagraph="Cornerstone PM is the Buildertrend alternative for home builders who repeat floorplans, run multi-community pipelines, and want AI that takes real actions. Native Foreman AI (45+ skills, Pro $499/mo), options engine, floorplan pricing matrix, 30+ named webhook events (Pro+), and a public REST API - flat pricing from $149/mo, unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side, focused on what matters for home builders."
      comparisonRows={comparisonRows}
      trademarkName="Buildertrend"
      whySwitchHeadline="Why home builders switch from Buildertrend"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already using Buildertrend? Drop your export. We'll do the rest."
      migrationDesc="Export your Buildertrend data, drag the ZIP into our wizard, and AI auto-maps every column across vendors, homes, communities, users, leads, tasks, and POs. Dry-run before you commit. Free."
      faqTitle="Buildertrend Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM from Buildertrend."
      faqItems={faqItems}
      footerHeadline="Ready to switch from Buildertrend?"
      footerSubtext="Join the beta and get 2 years free. Migration tooling included."
      relatedPages={[
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs CoConstruct", href: "/coconstruct-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
