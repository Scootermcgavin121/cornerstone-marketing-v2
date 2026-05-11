import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Knowify Alternative for Home Builders | Cornerstone PM",
  description:
    "Knowify is built for subcontractors. Cornerstone PM is the alternative for home builders -- AI agents (Pro $499/mo), options engine, multi-community management, and 30+ webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/knowify-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders (GC / owner role)", cornerstone: true, competitor: false, note: "Knowify is built for specialty subcontractors (electrical, plumbing, drywall). Cornerstone PM is built for the home builder acting as GC -- managing subs, vendors, and communities across production, semi-custom, and custom workflows." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing -- Cornerstone Builder ($299/mo). Not a subcontractor concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Knowify is job-centric." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 45+ skills)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Knowify has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Knowify has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows.. Knowify: limited API, QuickBooks-oriented integrations." },
  { feature: "Take your data with you anytime â€” no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. If you ever leave us, you leave with everything â€” vendors, homes, schedules, options, budgets, every line. No strings attached." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Buyer-facing milestone, selection, and document views for new construction." },
  { feature: "Vendor portal — no login required (email magic links)", cornerstone: true, competitor: false, note: "7-wave automated bidding pipeline + a no-login vendor portal: vendors confirm tasks, accept schedule changes, and submit bids via secure email magic links — no app, no account, no password." },
  { feature: "Job costing / T&M billing", cornerstone: "limited", competitor: true, note: "Knowify is strong at time-and-material billing for subcontractors. Cornerstone handles builder cost tracking, not T&M invoicing to GCs." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Per-user base", note: "Knowify Core starts at $99/mo (annual) for 1 base user; Advanced at $249/mo. Cornerstone is flat at every tier, unlimited users from $149. More importantly: Knowify is built for subs billing to GCs -- it doesn't ship an options engine, floorplan pricing matrix, multi-community pipelines, or home-builder AI at any price." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "GC / builder role, not subcontractor role", desc: "Knowify is built for subs billing to GCs. Cornerstone is built for the GC -- managing subs, vendors, and communities. You assign bids, run schedules, manage lot inventories, and deliver homes." },
  { title: "AI agents native -- Pro $499/mo", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. AI image search, vision, anti-bot web scraping, per-user memory. No other home-builder platform comes close." },
  { title: "Full PM + design center", desc: "Scheduling (Starter $149), purchasing, bid management, homeowner portal, structural options engine, multi-community pipeline (Builder $299) -- all in one platform from $149/mo." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Knowify a good fit for home builders?",
    a: "Knowify is designed for specialty subcontractors -- electricians, plumbers, HVAC techs, drywall crews -- who bill time-and-material to general contractors. If you're a home builder acting as the GC, managing subs, running multi-community pipelines, and pre-selling homes with a design center, you need a different tool.",
  },
  {
    q: "What's the best Knowify alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders acting in the GC role. It includes everything from pre-sale options engine and design center (Builder $299/mo) through construction scheduling, vendor bid management, purchasing, and homeowner portal -- plus native AI agents (Foreman AI 45+ skills on Pro $499/mo, Blueprint AI) and a public REST API with 30+ named webhook events (Pro+).",
  },
  {
    q: "Can I migrate from Knowify to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Knowify export, auto-detects column mapping, and runs 23 import endpoints for vendors, contacts, communities, and more. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM handle subcontractor scheduling?",
    a: "Yes. Cornerstone PM includes construction scheduling with vendor notifications, cascade scheduling, and trade-specific scope assignment. Vendors receive automated notifications and confirm tasks, accept schedule changes, and submit bids — all via secure magic links sent to their email. No app, no account, no password. They get schedule updates via 30+ webhook events that can also trigger SMS or voice calls.",
  },
  {
    q: "How does Knowify pricing compare to Cornerstone?",
    a: "Knowify Core starts at $99/mo (annual) for 1 base user; Advanced at $249/mo (annual). Additional users are per-seat. Cornerstone Starter is $149/mo with unlimited users. For the full platform: Builder ($299/mo) adds options engine and design center; Pro ($499/mo) adds Foreman AI and Blueprint AI. Knowify doesn't offer options engines, multi-community pipelines, or construction AI at any tier.",
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

export default function KnowifyAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Knowify"
      badgeLabel="Knowify Alternative -- Home Builders"
      heroLine1="Knowify is for subcontractors."
      heroLine2="You're the builder."
      accentColor="violet"
      heroParagraph="Knowify is built for specialty subcontractors billing to GCs. Cornerstone PM is the alternative for home builders in the GC role -- managing subs, running communities, pre-selling homes with a design center (Builder $299/mo), and closing with draws. From $149/mo with unlimited users."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Knowify vs Cornerstone PM -- subcontractor tool vs. home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Knowify"
      whySwitchHeadline="What home builders need that Knowify doesn't have"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a specialty subcontractor billing T&M to general contractors, Knowify is a solid tool. This page is for home builders who found Knowify through a search. You're the builder -- you need a different platform, and Cornerstone PM is built for your role."
      showMigrationCTA={true}
      migrationHeadline="Moving from Knowify? Bring your contacts and vendors."
      migrationDesc="Export your Knowify data, drop it in our wizard, and AI auto-maps vendors, contacts, and job history. Dry-run before you commit."
      faqTitle="Knowify Alternative FAQ"
      faqSubtitle="For home builders who need a GC-role platform, not a subcontractor tool."
      faqItems={faqItems}
      footerHeadline="Built for the builder, not the sub."
      footerSubtext="Join the beta and get 2 years free. Home-builder workflows native."
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
