import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Houzz Pro Alternative for Home Builders | Cornerstone PM™",
  description:
    "Houzz Pro is built for interior designers and remodelers. Cornerstone PM™ is the Houzz Pro alternative for home builders -- AI agents (Pro $499/mo), options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/houzz-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Houzz Pro is built for interior designers, remodelers, and home improvement pros. Cornerstone PM™ is purpose-built for home builders -- production, semi-custom, and custom -- managing communities of homes, not design portfolios." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a design/remodel concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for home builders. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Houzz Pro is project-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Production builder design center with curated buyer selection packages. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 83+ skills)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction management data. Blueprint AI: PDF to takeoff in 60 seconds. Houzz Pro has AI tools for design and project management for interior designers -- different market, different purpose." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Houzz Pro has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows.. Houzz Pro has no public API." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Houzz is a consumer marketplace — no construction-specific buyer portal." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "Automated bid pipeline + a no-login vendor portal: vendors confirm tasks, accept schedule changes, and submit bids via secure email magic links — no app, no account, no password." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Houzz Pro ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Houzz Pro has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Not a Houzz Pro feature." },
  { feature: "Purchasing / POs", cornerstone: true, competitor: false, note: "Full purchasing workflow. Not a Houzz Pro feature." },
  { feature: "Design inspiration / marketplace", cornerstone: false, competitor: true, note: "Houzz Pro's strength is its consumer marketplace and design inspiration platform. Not a home-builder production need." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt with dependencies (Starter+). Houzz Pro: basic project milestones." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Contact for pricing", note: "Houzz Pro does not publish current pricing publicly -- contact for rates. Cornerstone is flat at every tier, unlimited users from $149. More importantly: Houzz Pro is a design platform -- it doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or construction-native AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home-builder workflows, not design portfolio", desc: "Houzz Pro is a design platform and marketplace for interior designers. Cornerstone is for home builders running lot inventories, floorplan pricing, multi-community schedules, and construction pipelines (from $149/mo)." },
  { title: "AI agents native -- Pro $499/mo", desc: "Foreman AI reads AND writes your construction data. Blueprint AI converts floor plans to takeoffs. AI image search and anti-bot web scraping pull product specs from supplier sites. No other home-builder platform comes close." },
  { title: "Full PM + options engine", desc: "Scheduling (Starter $149), purchasing, bid management, homeowner portal, structural options engine, 64 curated Designer Packages, multi-community pipeline (Builder $299) -- all in one home-builder platform." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Houzz Pro a good fit for home builders?",
    a: "Houzz Pro is designed for interior designers, kitchen and bath remodelers, and home improvement contractors who need a portfolio website, lead generation from the Houzz marketplace, and project management for one-off renovation projects. If you're a home builder managing lot inventories, multiple floorplans, pre-sale design centers, and multi-community construction schedules, Houzz Pro lacks the specialized features you need.",
  },
  {
    q: "What's the best Houzz Pro alternative for home builders?",
    a: "Cornerstone PM™ is purpose-built for home builders. Beyond the basics (scheduling, client communication, document management from Starter $149/mo), it adds a structural options engine, floorplan pricing matrix, multi-community lot management, 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses), native AI agents (Foreman AI 83+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API.",
  },
  {
    q: "Does Houzz Pro have AI features?",
    a: "Houzz Pro includes AI tools for design assistance and project management -- mood boards, visualizations, and scheduling tools aimed at interior designers and remodelers. Cornerstone's Foreman AI (Pro $499/mo) is a native agent with 83 construction-specific skills that takes real actions: creates POs, updates design options, generates SOWs, runs bid comparisons, analyzes screenshots with AI vision, and scrapes supplier product pages.",
  },
  {
    q: "Can I migrate from Houzz Pro to Cornerstone PM™?",
    a: "Yes. The AI Migration Wizard reads your Houzz Pro export, auto-detects column mapping, and runs 23 import endpoints for contacts, vendors, and project data. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM™ have a design center like Houzz?",
    a: "Yes -- built for home builders, not interior designers. Cornerstone's design center includes structural and design options per floorplan, 64 curated Designer Packages across 7 categories (curated by an actual interior designer, the same playbook K. Hovnanian Homes uses), allowances, per-community pricing, and a homeowner portal for buyer selections. It's home-builder native, not a consumer inspiration board.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PM™ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function HouzzAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Houzz Pro"
      badgeLabel="Houzz Pro Alternative -- Home Builders"
      heroLine1="Houzz is for designers."
      heroLine2="You build communities."
      accentColor="violet"
      heroParagraph="Houzz Pro is a design platform and marketplace for interior designers and remodelers. Cornerstone PM™ is the alternative for home builders -- structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, and 83 AI skills (Pro $499/mo) from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Houzz Pro vs Cornerstone PM™ -- design platform vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Houzz"
      whySwitchHeadline="What home builders get with Cornerstone PM™"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're an interior designer or home remodeler, Houzz Pro is a great tool for portfolio building and lead generation from the Houzz marketplace. This page is for home builders who found Houzz Pro through a search -- you need a different kind of platform, and Cornerstone PM™ is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Houzz Pro? Bring your contacts and data."
      migrationDesc="Export your Houzz Pro data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Houzz Pro Alternative FAQ"
      faqSubtitle="For home builders evaluating Houzz Pro vs Cornerstone PM™."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not design portfolios."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs JobTread", href: "/jobtread-alternative" },
        { text: "vs CoConstruct", href: "/coconstruct-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
