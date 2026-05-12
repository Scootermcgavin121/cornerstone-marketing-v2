import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "JobNimbus Alternative for Home Builders | Cornerstone PM",
  description:
    "JobNimbus is built for roofing and restoration. Cornerstone PM is the alternative for home builders -- AI agents (Pro $499/mo), options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobnimbus-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "JobNimbus is built for roofing, restoration, and home improvement contractors. Cornerstone PM is purpose-built for home builders -- production, semi-custom, and custom -- with lot management, options engine, and multi-community pipelines that roofing CRMs don't offer." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale options pricing matrix per floorplan -- Cornerstone Builder ($299/mo). Not a JobNimbus feature." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. JobNimbus is job-centric, not community-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 83 skills)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data -- 83 skills. Blueprint AI: PDF to takeoff in 60 seconds. JobNimbus Scout (beta) is an in-app AI assistant with limited action-taking capability, focused on roofing/restoration workflows." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. JobNimbus has webhook support but no named construction event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API", cornerstone: true, competitor: true, note: "Both include API access. JobNimbus includes unlimited API & webhooks on all plans. Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs, typed webhook payload schemas. New endpoints ship as the platform grows. -- purpose-built for construction management workflows." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything — vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture - replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. JobNimbus ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. JobNimbus has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. JobNimbus is roofing/restoration-first — not a multi-trade home builder PO platform." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "limited", note: "Real-time buyer portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. JobNimbus has customer-facing tools but they're roofing/restoration-shaped, not new-construction multi-month build portals." },
  { feature: "CRM / Lead pipeline", cornerstone: true, competitor: true, note: "Both include CRM and lead management." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt, dependencies, cascade scheduling. JobNimbus: basic job scheduling, not construction-schedule focused." },
  { feature: "Roofing / insurance claim workflows", cornerstone: false, competitor: true, note: "JobNimbus specializes in insurance claim management and roofing workflows -- not a home builder need." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Custom quote", note: "JobNimbus does not publish public pricing -- contact for a quote. Cornerstone is flat at every tier. More importantly: JobNimbus is built for roofing and restoration -- it doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Built for home builders, not roofers", desc: "JobNimbus excels at roofing and restoration. Cornerstone is purpose-built for home builders: lot management, floorplan pricing (Builder $299/mo), options engine, design center, draw schedules -- concepts that don't exist in JobNimbus." },
  { title: "Action-taking AI on Pro -- 83 skills", desc: "Foreman AI (Cornerstone Pro, $499/mo) reads AND writes your data. Blueprint AI converts floor plans to takeoffs. AI image search, vision, anti-bot web scraping. Per-user memory. JobNimbus Scout is in beta and roofing-focused." },
  { title: "Unlimited users, full platform", desc: "Scheduling from $149, purchasing, bid management, homeowner portal, design center (Builder $299), REST API + 30+ named webhook events (Pro+ $599) -- all in one platform with unlimited users on every tier." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is JobNimbus a good fit for home builders?",
    a: "JobNimbus is built primarily for roofing contractors, restoration companies, and home improvement businesses. If you're a home builder managing lot inventories, floorplans, pre-sale design centers, structural options, and multi-community schedules, JobNimbus will feel like a square peg in a round hole. Cornerstone PM is purpose-built for your workflows.",
  },
  {
    q: "What's the best JobNimbus alternative for home builders?",
    a: "Cornerstone PM is the purpose-built alternative for home builders. It includes CRM, scheduling, purchasing, bid management, homeowner portal, and document management -- plus a structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, and native AI agents (Foreman AI 83 skills on Pro $499/mo, Blueprint AI) that JobNimbus doesn't offer.",
  },
  {
    q: "Does JobNimbus have AI features?",
    a: "JobNimbus Scout (beta) is an in-app AI assistant designed for roofing and restoration contractors. Cornerstone's Foreman AI (Pro $499/mo) is a native agent with 83 purpose-built construction skills that takes real actions -- creates purchase orders, updates design options, generates scope-of-work documents, runs bid comparisons, scrapes vendor product pages, analyzes screenshots with AI vision, and remembers preferences across sessions. Different markets, different capabilities.",
  },
  {
    q: "Can I migrate from JobNimbus to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your JobNimbus data exports, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day. ~$0.01 per migration in AI cost -- we absorb it.",
  },
  {
    q: "Does Cornerstone PM have a CRM like JobNimbus?",
    a: "Yes. Cornerstone PM includes a sales pipeline and CRM for managing leads, prospects, and buyers through pre-sale, design selection, contract, and construction phases. It's designed specifically for new home sales workflows, not roofing or restoration lead pipelines.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function JobnimbusAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="JobNimbus"
      badgeLabel="JobNimbus Alternative -- Home Builders"
      heroLine1="JobNimbus is for roofers."
      heroLine2="You build homes."
      accentColor="emerald"
      heroParagraph="JobNimbus is built for roofing and restoration contractors. Cornerstone PM is the home-builder alternative -- structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, 83 AI skills (Pro $499/mo), and a public REST API (Pro+) from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="JobNimbus vs Cornerstone PM -- roofing platform vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="JobNimbus"
      whySwitchHeadline="What home builders get with Cornerstone PM"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a roofing contractor or home improvement company, JobNimbus is probably fine. This page is for home builders who landed on JobNimbus because it showed up in a search -- you need a different tool, and that tool is Cornerstone PM."
      showMigrationCTA={true}
      migrationHeadline="Moving from JobNimbus? Bring your data."
      migrationDesc="Export your JobNimbus data, drop it in our wizard, and AI auto-maps every column -- contacts, jobs, budgets, vendors. Dry-run before you commit."
      faqTitle="JobNimbus Alternative FAQ"
      faqSubtitle="Common questions from home builders evaluating JobNimbus vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs Jobber", href: "/jobber-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
