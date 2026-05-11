import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Jobber Alternative for Home Builders | Cornerstone PM",
  description:
    "Jobber is built for home service businesses. Cornerstone PM is the alternative for home builders -- AI agents (Pro $499/mo), options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobber-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Jobber is built for home service businesses (landscaping, cleaning, HVAC, etc.). Cornerstone PM is purpose-built for home builders -- production, semi-custom, and custom -- with lot management, options engine, and multi-community pipelines." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix -- Cornerstone Builder ($299/mo). Not a home service concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Jobber is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 45+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Jobber has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Jobber: limited webhook support for home service workflows." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API", cornerstone: true, competitor: true, note: "Both offer public APIs. Jobber's API is oriented toward service industry workflows. Cornerstone Pro+: 59+ endpoints, purpose-built for construction management." },
  { feature: "Take your data with you anytime â€” no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything â€” vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views for new construction." },
  { feature: "Bid management + vendor portal (no login)", cornerstone: true, competitor: false, note: "Automated bid pipeline + a no-login vendor portal: vendors confirm tasks, accept schedule changes, and submit bids via secure email magic links — no app, no account, no password." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture — replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Jobber ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Jobber has no equivalent." },
  { feature: "Client portal", cornerstone: true, competitor: true, note: "Both offer client-facing portals." },
  { feature: "Quoting / invoicing", cornerstone: "limited", competitor: true, note: "Jobber is strong at quote-to-invoice for service businesses. Cornerstone handles builder pricing through floorplan matrices and options engines, not traditional service invoicing." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Per-user tiers", note: "Jobber is priced per user with tiered plans. Cornerstone is flat at every tier, unlimited users. More importantly: Jobber doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "New construction vs home services", desc: "Jobber runs quotes, invoices, and recurring service schedules for landscapers and cleaners. Cornerstone runs lot management, floorplan pricing, options engines, design centers, and multi-community pipelines for home builders." },
  { title: "AI agents for builders -- Pro $499/mo", desc: "Foreman AI creates POs, updates design options, generates SOWs, and remembers your preferences. Blueprint AI converts PDF floor plans to takeoffs in 60 seconds. Built for construction, not service scheduling." },
  { title: "Full PM + options engine", desc: "Scheduling (Starter $149), purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline (Builder $299) -- all in one platform with unlimited users." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Jobber a good fit for home builders?",
    a: "No -- and we mean that helpfully. Jobber is excellent for home service businesses: landscaping, cleaning, HVAC, pest control. Its core features are quote-to-invoice workflows, recurring job scheduling, and client communication for service businesses. If you're a home builder managing lot inventories, pre-sale selections, construction schedules, and multi-community pipelines, Jobber is the wrong tool.",
  },
  {
    q: "What's the best Jobber alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. It covers the same basics (scheduling, client portal, quotes, document management) plus a structural options engine (Builder $299/mo), floorplan pricing matrix, multi-community lot management, native AI agents (Foreman AI 45+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API -- all the home-builder features Jobber doesn't have.",
  },
  {
    q: "Can I migrate from Jobber to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Jobber export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day. ~$0.01 per migration in AI cost -- we absorb it.",
  },
  {
    q: "Does Cornerstone PM have quoting like Jobber?",
    a: "Cornerstone PM handles builder pricing through floorplan pricing matrices and options engines rather than traditional quote-to-invoice workflows. If you need a per-job quote for a small service like a repair, Jobber is stronger. If you need pre-sale pricing for 20+ floorplans across multiple communities, Cornerstone is purpose-built for it.",
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

export default function JobberAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Jobber"
      badgeLabel="Jobber Alternative -- Home Builders"
      heroLine1="Jobber is for home services."
      heroLine2="You build homes."
      accentColor="amber"
      heroParagraph="Jobber is a field service platform for landscapers, cleaners, and HVAC companies. Cornerstone PM is the alternative for home builders -- structural options engine (Builder $299/mo), floorplan pricing, 45+ AI skills (Pro $499/mo), and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Jobber vs Cornerstone PM -- home services platform vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Jobber"
      whySwitchHeadline="What home builders get that Jobber can't offer"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a home service business -- landscaping, cleaning, pest control, HVAC -- Jobber is probably fine. This page is for home builders who found Jobber through a general search. You need different software, and Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Switching from Jobber? Bring your contacts and vendors."
      migrationDesc="Export your Jobber data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Jobber Alternative FAQ"
      faqSubtitle="For home builders who need more than a home service platform."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not home services."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
      relatedPages={[
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Housecall Pro", href: "/housecall-pro-alternative" },
        { text: "vs JobNimbus", href: "/jobnimbus-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
