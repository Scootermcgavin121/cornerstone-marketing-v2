import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Hyphen Solutions Alternative for Home Builders | Cornerstone PM™",
  description:
    "Hyphen Solutions alternative (HomeFront, BRIX, BuilderGM, BuildPro). One unified AI-native platform instead of a multi-product suite. From $149/mo, no per-module licensing, no on-premise installs.",
  alternates: { canonical: "https://www.cornerstonepm.ai/hyphen-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Public, transparent pricing", cornerstone: "$149 / $299 / $499 / $599 — listed", competitor: "Hidden — consult-only, per-product licensing", note: "Cornerstone publishes every tier on the website. Hyphen Solutions licenses each product separately (BuildPro, BRIX, BuilderGM, HomeFront, Hyphen CRM, HomeSight, Hyphen Wallet) and pricing requires a sales call. Add up enough Hyphen products and you're easily looking at thousands per month before implementation." },
  { feature: "One platform vs multi-product suite", cornerstone: true, competitor: false, note: "Hyphen Solutions sells 12+ separate products that interoperate via their hub. Cornerstone is one platform — sales, design center, purchasing, scheduling, vendor management, homeowner portal, warranty, AI all in a single app with one login, one bill, one data model." },
  { feature: "Sign up today (no sales call required)", cornerstone: true, competitor: false, note: "Cornerstone is self-serve — pick a plan, sign up, you're in tonight. Every Hyphen product requires a 'Request a Demo' sales cycle." },
  { feature: "Implementation cost", cornerstone: "$0", competitor: "Professional Implementation (paid service)", note: "Hyphen explicitly sells 'Professional Implementation' and 'Custom Report Writing' as services. Cornerstone has zero implementation cost on every tier." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "Months", note: "AI Migration Wizard + 23 import endpoints. Drop your exports in, AI auto-detects column mapping, you're operational the same afternoon. Hyphen ERP implementations are multi-month services engagements." },
  { feature: "Cloud-only architecture", cornerstone: true, competitor: "Mixed", note: "Cornerstone is 100% cloud-native. Hyphen HomeFront, their builder-centric ERP, is explicitly an on-premise product per their own product page. BRIX and BuilderGM are cloud. If you're on HomeFront, modernizing is itself a migration project." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 396+ Foreman AI skills that read AND write data, plus Blueprint AI floor-plan takeoffs in 60 seconds. Hyphen's product list shows no native AI agent across BRIX, BuilderGM, HomeFront, or BuildPro." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: "Limited", note: "Cornerstone Pro+ ($599/mo): 37+ named events, typed payloads, HMAC signatures, delivery logs, auto-retry. Hyphen offers product-to-product integration inside their hub but no public webhook catalog for builder-facing automation." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects HomeFront / BRIX / BuilderGM / BuildPro export column mapping and runs 23 import endpoints. ~$0.01 per migration. Hyphen migrations go through their Professional Implementation team." },
  { feature: "Built-in accounting / GL", cornerstone: "Integrate via API (QuickBooks, Sage, etc.)", competitor: true, note: "BRIX, BuilderGM, and HomeFront all ship accounting with GL and AP. That's a real strength for builders who want operations and accounting on one stack. Cornerstone is built for the 5–200 homes/yr builder who already runs QuickBooks or Sage — we integrate with your existing accounting via our public REST API (Pro+) instead." },
  { feature: "Land development scheduling & tracking", cornerstone: true, competitor: true, note: "Both platforms handle land development scheduling — clearing, grading, utilities, paving — once you own the dirt. Cornerstone builds it into the same scheduling engine that runs the rest of the build." },
  { feature: "Land acquisition lead tracking (parcels, ownership, bonds)", cornerstone: "Not yet", competitor: true, note: "BRIX and BuildPro both track land acquisition / land management on the dirt-pursuit side. Cornerstone handles land-dev scheduling and tracking today, but the acquisition CRM piece (parcels, ownership history, bonds) is on the roadmap, not in the product yet." },
  { feature: "B2B supplier network (1 in 3 US homes)", cornerstone: false, competitor: true, note: "Hyphen Solutions advertises 'more than 126,720 users, 565 Builders and 18,000 residential Suppliers' across their software suite. That supplier network is a genuine asset if you're a national production builder ordering from many of those suppliers. Cornerstone is a builder-side PM platform — we don't run a supplier network." },
  { feature: "Options rules engine", cornerstone: true, competitor: true, note: "Both ecosystems ship structural and design option rules with dependencies, incompatibilities, and price rollups." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Cornerstone Builder+: 64 designer packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses). Buyers pick a package; all category options auto-lock. Hyphen has options selection in BRIX/BuilderGM but no curated package library." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload, (2) PM/internal-builder check-in feeds GPS-validated timesheets, (3) sales model home QR for walk-in buyer lead capture. Hyphen ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. Filter by date or vendor. Hyphen has no equivalent." },
  { feature: "Vendor portal access", cornerstone: "Tokenized magic links — zero login", competitor: "SupplyPro login required", note: "Hyphen's SupplyPro / SupplyPro GM are full vendor portals — vendors maintain accounts, log in, and manage orders/payments inside Hyphen's hub. That's genuinely useful at national-builder scale. Cornerstone replaces the login with tokenized magic links — vendors get a secure link, click once, bid or confirm tasks. No account, no password, no app install. Adoption is dramatically higher when subs don't have to manage another login — better fit for the 5–200 homes/yr builder whose subs aren't already wired into a national supplier network." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "Standard EPO/VPO model", note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks, (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Hyphen products use the EPO (Extra Purchase Order) / VPO (Variance Purchase Order) model — solid but rigid." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: "In BuildPro/BRIX/BuilderGM with warranty", note: "Cornerstone bundles the buyer portal into every tier ($149+) — real-time sync with construction schedule, milestone photos, messaging, one-click ZIP export. Hyphen offers homeowner portal as part of BuildPro / BRIX / BuilderGM (varies per product) and Hyphen HomeSight handles online sales separately." },
  { feature: "Modern web + mobile UI", cornerstone: true, competitor: "Varies by product", note: "Cornerstone is mobile-first across the whole app. Hyphen's products range from on-premise (HomeFront) to cloud-with-mobile-app (BuildPro, BRIX, BuilderGM)." },
  { feature: "Public REST API (40+ endpoints, growing)", cornerstone: true, competitor: "Limited public docs", note: "Cornerstone Pro+: 40+ public REST endpoints with public docs, growing rapidly. Hyphen products integrate inside the Hyphen Hub but don't expose a public REST endpoint catalog for builder-facing automation." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): connect Claude or ChatGPT to your live data via REST + webhooks. Hyphen is a closed ecosystem." },
  { feature: "Take your data with you anytime — no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0. Nightly auto-backups retained 7 days. Hyphen data extraction goes through their services team." },
  { feature: "Per-user fees", cornerstone: "Up to 30 users (60 on Pro+), every tier", competitor: "Per-product licensing", note: "Cornerstone: flat tier pricing, no per-seat scaling. Hyphen licenses each product (BuildPro, BRIX, BuilderGM, HomeFront, Hyphen CRM, HomeSight, Hyphen Wallet) on its own terms — stacking products stacks bills." },
  { feature: "Pricing model", cornerstone: "Flat — published online", competitor: "Per-product quote + implementation services", note: "Hyphen: enterprise contracts per product, paid Professional Implementation, paid Custom Report Writing. Cornerstone: flat monthly, every feature included at the tier, self-serve onboarding." },
  { feature: "Cornerstone tiers (flat — up to 30 users • 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "—", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "One platform, one bill", desc: "Hyphen sells a suite — BuildPro for construction, BRIX for ERP, BuilderGM for mid-market, HomeFront for builder ERP, Hyphen CRM for sales, HomeSight for online buyer experience, SupplyPro for suppliers, Hyphen Wallet for payments, Chameleon Power for visualization. Each is a separate product, separate license, separate implementation. Cornerstone is one platform with all of it included at the tier." },
  { title: "AI native, not a missing feature", desc: "Hyphen's product family does not ship a native AI agent. Cornerstone Pro ($499/mo) ships Foreman AI's 396+ skills and Blueprint AI's 60-second takeoffs as core platform features — not an add-on, not an upsell, not a roadmap promise." },
  { title: "Cloud-only, not on-premise", desc: "Hyphen HomeFront, their flagship builder ERP, is explicitly an on-premise product. BRIX is their cloud successor. Cornerstone is 100% cloud-native — no IT department required, no servers to maintain, automatic updates, accessible from any browser or mobile device." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best Hyphen Solutions alternative for home builders?",
    a: "Cornerstone PM™ is the closest unified alternative to the Hyphen Solutions suite (HomeFront, BRIX, BuilderGM, BuildPro, Hyphen CRM, Hyphen HomeSight) for small-to-mid home builders. Instead of licensing five or more separate Hyphen products and paying Professional Implementation for each, Cornerstone bundles sales pipeline, design center, purchasing, scheduling, vendor management, homeowner portal, warranty, and native AI agents into one platform starting at $149/mo. Pricing is published online; no Hyphen sales call required.",
  },
  {
    q: "Is Cornerstone PM™ a replacement for Hyphen HomeFront?",
    a: "For small-to-mid home builders, yes. Cornerstone covers HomeFront's core workflows — sales, contracts, options, purchasing, job costing, takeoffs, scheduling, vendor collaboration, warranty — in a modern cloud-native AI-native platform without on-premise installs. The one honest gap: HomeFront ships full GL accounting; Cornerstone integrates with your existing QuickBooks / Sage Intacct / Sage 300 via our public REST API on Pro+ instead of replacing it. For 5–200 homes/yr builders who already run an accounting system, the integration model usually wins.",
  },
  {
    q: "What about BRIX and BuilderGM?",
    a: "BRIX is Hyphen's cloud ERP with built-in accounting (their newer successor to HomeFront), and BuilderGM is the mid-market core. Cornerstone overlaps with both on the operations side — sales, options, purchasing, scheduling, vendor management, takeoffs, warranty. We don't ship the in-platform GL; we integrate with your accounting system instead. Trade-off: BRIX's licensing is per-product / per-implementation; Cornerstone is one flat monthly fee.",
  },
  {
    q: "How does Cornerstone compare to BuildPro specifically?",
    a: "BuildPro is Hyphen's construction-management product (originally the BuildPro brand before Hyphen consolidated it). It handles scheduling, vendor bidding, EPOs, supply chain, inspections, and warranty. Cornerstone matches or exceeds those workflows and adds: native AI agents (Foreman AI 396+ skills on Pro), Blueprint AI floor-plan takeoffs in 60 seconds, designer packages, tokenized vendor magic links, triple-QR ecosystem, vendor activity map, and a public REST API. We also publish pricing online. See our dedicated /buildpro-alternative page for the side-by-side.",
  },
  {
    q: "Does Cornerstone integrate with Hyphen Wallet or SupplyPro?",
    a: "Not natively today, no. Hyphen Wallet is Hyphen's payments product (B2B AP automation, ePayables) and SupplyPro is their supplier-side network. If you're deeply embedded in the Hyphen supplier network for ordering, those advantages are real and worth weighing. For builders whose vendor relationships are direct, Cornerstone's tokenized magic links + 37+ webhooks let you wire any payment processor or AP system you want — typically simpler than the multi-product Hyphen stack.",
  },
  {
    q: "How much does Cornerstone PM™ cost compared to Hyphen Solutions?",
    a: "Cornerstone PM™ starts at $149/mo (Starter, up to 30 users) with zero implementation cost. Hyphen Solutions pricing is not publicly listed — each product (BuildPro, BRIX, BuilderGM, HomeFront, Hyphen CRM, HomeSight, Hyphen Wallet) is quoted separately with Professional Implementation on top. Builders running multiple Hyphen products often end up paying significantly more than a single Cornerstone Pro+ ($599/mo) license that includes equivalent functionality.",
  },
  {
    q: "Can I migrate from Hyphen HomeFront / BRIX / BuilderGM / BuildPro to Cornerstone?",
    a: "Yes. The AI Migration Wizard handles every major Hyphen product, plus MarkSystems, NEWSTAR, NX, KOVA, Buildertrend, CoConstruct, JobTread, and any CSV/Excel export. Drop your files in, AI auto-detects column mapping, runs 23 dedicated import endpoints covering vendors, homes, communities, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more. ~$0.01 per migration — we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders — no credit card, no contract, no implementation fee.",
  },
];

export default function HyphenAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Hyphen Solutions"
      badgeLabel="Hyphen Solutions Alternative"
      heroLine1="The whole Hyphen suite."
      heroLine2="In one platform. One bill."
      accentColor="amber"
      heroParagraph="Cornerstone PM™ is the unified, AI-native alternative to the Hyphen Solutions multi-product suite (HomeFront, BRIX, BuilderGM, BuildPro, Hyphen CRM, HomeSight). Same core scope — sales pipeline, options engine, purchasing, scheduling, vendor portal, homeowner portal, warranty — plus native AI agents (Foreman AI on Pro $499/mo), 37+ named webhook events (Pro+), and a public REST API (Pro+ $599/mo). One platform, one login, one flat monthly bill from $149/mo. No Professional Implementation engagement required."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side for small-to-mid home builders."
      comparisonRows={comparisonRows}
      trademarkName="Hyphen Solutions, Hyphen HomeFront, BRIX, BuilderGM, BuildPro, Hyphen CRM, Hyphen HomeSight, SupplyPro, Hyphen Wallet"
      whySwitchHeadline="Why builders pick Cornerstone over the Hyphen suite"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already on a Hyphen product? Drop your export. We'll do the rest."
      migrationDesc="Export your HomeFront / BRIX / BuilderGM / BuildPro data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, design options, scopes, and budgets. Dry-run before you commit. ~$0.01 per migration — we absorb it. No Professional Implementation engagement required."
      faqTitle="Hyphen Solutions Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PM™ from Hyphen HomeFront, BRIX, BuilderGM, or BuildPro."
      faqItems={faqItems}
      footerHeadline="Ready to consolidate the Hyphen stack?"
      footerSubtext="Join the beta and get 2 years free. One platform instead of five. Operational in hours, not months."
      relatedPages={[
        { text: "vs BuildPro (specifically)", href: "/buildpro-alternative" },
        { text: "vs MarkSystems / NX", href: "/marksystems-alternative" },
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs MiTek KOVA", href: "/kova-alternative" },
        { text: "All alternatives", href: "/alternatives" },
      ]}
    />
  );
}
