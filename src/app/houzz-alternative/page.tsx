import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Houzz Pro Alternative for Home Builders | Cornerstone PM",
  description:
    "Houzz Pro is built for interior designers and remodelers. Cornerstone PM is the Houzz Pro alternative for home builders â€” AI agents, options engine, and multi-community management from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/houzz-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for home builders", cornerstone: true, competitor: false, note: "Houzz Pro is built for interior designers, remodelers, and home improvement pros. Cornerstone PM is purpose-built for home builders managing communities of homes â€” production, semi-custom, and custom." },
  { feature: "Structural options engine", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing matrix â€” not a design/remodel concept." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for production builders." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline. Houzz Pro is project-centric." },
  { feature: "Designer Packages (64 curated by an actual interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Design center packages curated by an actual interior designer â€” the same playbook K. Hovnanian Homes uses. Buyers pick a package; all category options auto-lock." },
  { feature: "Native AI agents (Foreman AI â€” 45+ skills)", cornerstone: true, competitor: false, note: "Foreman AI reads AND writes data. Blueprint AI: PDF to takeoff in 60 seconds. Houzz Pro has no native AI agents." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it." },
  { feature: "30 webhook events (full named catalog)", cornerstone: true, competitor: false, note: "30 named events, HMAC signatures, auto-retry. Houzz Pro has no public webhook catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows. Houzz Pro has no public API." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal", cornerstone: true, competitor: false, note: "Construction-specific buyer portal: milestones, selections, documents. Houzz is consumer-facing marketplace." },
  { feature: "Vendor portal (bid management)", cornerstone: true, competitor: false, note: "Automated bid pipeline + vendor portal (no login required)." },
  { feature: "Purchasing / POs", cornerstone: true, competitor: false, note: "Full purchasing workflow. Not a Houzz Pro feature." },
  { feature: "Design inspiration / marketplace", cornerstone: false, competitor: true, note: "Houzz Pro's strength is its consumer marketplace and design inspiration platform. Not a production builder need." },
  { feature: "Construction scheduling", cornerstone: true, competitor: "limited", note: "Cornerstone: full Gantt with dependencies. Houzz Pro: basic project milestones." },
  { feature: "Starting price", cornerstone: "$149/mo", competitor: "$149/mo+", note: "Similar entry price. Cornerstone is a full home builder platform; Houzz Pro is a design/remodel tool." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Home builder workflows, not design portfolio", desc: "Houzz Pro is a design platform and marketplace â€” great for interior designers building a portfolio and attracting clients. Cornerstone is for home builders running lot inventories, floorplan pricing, multi-community schedules, and construction pipelines." },
  { title: "AI agents native â€” 45+ skills", desc: "Foreman AI reads AND writes your construction data. Blueprint AI converts floor plans to takeoffs. AI image search and anti-bot web scraping pull product specs from supplier sites. No other builder platform comes close." },
  { title: "Full PM + options engine", desc: "Scheduling, purchasing, bid management, homeowner portal, structural options engine, 64 Designer Packages curated by an actual interior designer (Ã  la K. Hovnanian), multi-community pipeline â€” all in one home builder platform from $149/mo." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Houzz Pro a good fit for home builders?",
    a: "Houzz Pro is designed for interior designers, kitchen and bath remodelers, and home improvement contractors who need a portfolio website, lead generation from the Houzz marketplace, and project management for one-off renovation projects. If you're a home builder managing lot inventories, multiple floorplans, pre-sale design centers, and multi-community construction schedules, Houzz Pro lacks the specialized features you need.",
  },
  {
    q: "What's the best Houzz Pro alternative for home builders?",
    a: "Cornerstone PM is purpose-built for home builders. Beyond the basics (scheduling, client communication, document management), it adds a structural options engine, floorplan pricing matrix, multi-community lot management, 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses) across 7 categories, native AI agents (Foreman AI 45+ skills, Blueprint AI), 30 webhook events, and a public REST API.",
  },
  {
    q: "Can I migrate from Houzz Pro to Cornerstone PM?",
    a: "Yes. The AI Migration Wizard reads your Houzz Pro export, auto-detects column mapping, and runs 23 import endpoints for contacts, vendors, and project data. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PM have a design center like Houzz?",
    a: "Yes â€” built for production builders, not interior designers. Cornerstone's design center includes structural and design options per floorplan, 64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses) across 7 categories, allowances, per-community pricing, and a homeowner portal for buyer selections. It's home-builder-native, not a consumer Pinterest-style inspiration board.",
  },
  {
    q: "Does Cornerstone PM have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders â€” no credit card, no contract, no implementation fee.",
  },
];

export default function HouzzAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Houzz Pro"
      badgeLabel="Houzz Pro Alternative â€” Home Builders"
      heroLine1="Houzz is for designers."
      heroLine2="You build communities."
      accentColor="violet"
      heroParagraph="Houzz Pro is a design platform and marketplace for interior designers and remodelers. Cornerstone PM is the alternative for production new home builders â€” structural options engine, floorplan pricing matrix, multi-community lot management, and 45+ AI skills from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Houzz Pro vs Cornerstone PM â€” design platform vs. home builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Houzz"
      whySwitchHeadline="What home builders get with Cornerstone PM"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're an interior designer or home remodeler, Houzz Pro is a great tool for portfolio building and lead generation from the Houzz marketplace. This page is for home builders who found Houzz Pro through a search â€” you need a different kind of platform, and Cornerstone PM is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Houzz Pro? Bring your contacts and data."
      migrationDesc="Export your Houzz Pro data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Houzz Pro Alternative FAQ"
      faqSubtitle="For home builders evaluating Houzz Pro vs Cornerstone PM."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not design portfolios."
      footerSubtext="Join the beta and get 2 years free. Home builder workflows native."
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
