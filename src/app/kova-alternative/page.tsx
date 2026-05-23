import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "MiTek KOVA Alternative for Small-to-Mid Home Builders | Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢",
  description:
    "MiTek KOVA alternative for home builders. Same scope ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â sales, options, purchasing, scheduling, vendor portal ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â plus native AI agents. From $149/mo, no hidden enterprise quote, no consultant-led implementation.",
  alternates: { canonical: "https://www.cornerstonepm.ai/kova-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Public, transparent pricing", cornerstone: "$149 / $299 / $499 / $599 ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â listed", competitor: "Hidden ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â consult-only", note: "Cornerstone publishes every tier on the website. KOVA requires a sales consultation just to learn what it costs. For a small-to-mid home builder evaluating tools, hidden pricing is itself a feature gap ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â you can't compare what you can't see." },
  { feature: "Sign up today (no sales call required)", cornerstone: true, competitor: false, note: "Cornerstone is self-serve ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â pick a plan, sign up, you're in tonight. KOVA gates access behind 'Request a Demo' and a MiTek Services consultation cycle." },
  { feature: "Implementation cost", cornerstone: "$0", competitor: "Consultant-led implementation (MiTek Services)", note: "KOVA's own page promotes that 'MiTek Services professionals help with data implementation and ongoing maintenance' ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â code for paid services on top of license fees. Cornerstone has zero implementation cost on every tier." },
  { feature: "Time to operational", cornerstone: "Hours", competitor: "Months", note: "AI Migration Wizard + 23 import endpoints. Drop your exports in, AI auto-detects column mapping, you're operational the same afternoon. KOVA implementations are enterprise data projects run by their services team." },
  { feature: "Built for small-to-mid home builders (5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr)", cornerstone: true, competitor: false, note: "KOVA's reference customer is Fischer Homes ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â a top-30 production builder doing thousands of homes per year. KOVA is genuinely built for enterprise production builders. Cornerstone is built for the 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr builders who need KOVA-scope capabilities without enterprise pricing or implementation." },
  { feature: "Native AI agents (Foreman AI + Blueprint AI)", cornerstone: true, competitor: false, note: "Cornerstone Pro ($499/mo): 396+ Foreman AI skills that read AND write data, plus Blueprint AI floor plan takeoffs in 60 seconds. KOVA has a workflow rules engine, not AI agents ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â different category of product." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads Home Depot/Ferguson product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot from inside the app and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "37+ named webhook events (catalog growing)", cornerstone: true, competitor: "Limited", note: "Cornerstone Pro+ ($599/mo): 37+ named events and counting ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â typed payloads, HMAC signatures, delivery logs, auto-retry. KOVA advertises 'flexible API connections' but no public webhook catalog." },
  { feature: "AI Migration Wizard (one-click CRM import)", cornerstone: true, competitor: false, note: "AI auto-detects KOVA export column mapping and runs 23 import endpoints. ~$0.01 per migration. KOVA migrations go through MiTek Services as a paid implementation engagement." },
  { feature: "Built-in accounting / GL", cornerstone: "Integrate via API (QuickBooks, etc.)", competitor: true, note: "KOVA ships a real ERP-grade accounting module ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â full GL, AP/AR, retainage, lien waivers, COGS, intercompany transactions, bank reconciliation, financial statements. This is a legitimate KOVA strength for builders running 300+ homes/yr who need an in-platform GL. Cornerstone integrates with your existing accounting system via our REST API instead ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â appropriate for the 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr builder who already runs QuickBooks or similar." },
  { feature: "Land development scheduling & tracking", cornerstone: true, competitor: true, note: "Both platforms handle land development scheduling ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â clearing, grading, utilities, paving, etc. ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â with full phase tracking once you own the dirt. Cornerstone builds it into the same scheduling engine as the rest of the build." },
  { feature: "Land acquisition lead tracking (ownership history, bonds, bond releases)", cornerstone: "Not yet", competitor: true, note: "KOVA tracks land acquisition activities, ownership history, and bond / bond-release lifecycles ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â a genuine enterprise capability for builders who run a land-acquisition pipeline. Cornerstone handles land-dev scheduling and tracking today, but the dirt-pursuit CRM piece (parcels, ownership history, bonds) is on the roadmap, not in the product yet. We're honest about it." },
  { feature: "Options rules engine", cornerstone: true, competitor: true, note: "Both ship structural and design option rules engines with dependencies, incompatibilities, and price rollups." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Cornerstone Builder+: 64 designer packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses). Buyers pick a package; all category options auto-lock. KOVA has options selection but no curated package library." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record. KOVA ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. KOVA has no equivalent." },
  { feature: "Vendor portal access", cornerstone: "Tokenized magic links ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â zero login", competitor: "Login-required vendor portal", note: "KOVA gives vendors a login to a portal. Cornerstone sends vendors a tokenized magic link ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â they bid, accept schedule changes, and confirm tasks straight from their email with no account, no password, no app install. Adoption is dramatically higher when subs don't have to manage another login." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: "Bid-sheet driven", note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. KOVA generates POs from job cost budgets driven by bid sheets and BOM templates ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â capable but enterprise-rigid." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time buyer portal synced with construction scheduling ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â when framing moves three days, buyers see it instantly. Plus: builder/PM uploads job-site photos to every milestone, built-in messaging app between builder and customer with a permanent searchable record, and one-click ZIP download of all job photos. KOVA's mobile app is field-facing for builder/vendor schedule + VPO management ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â not a buyer portal." },
  { feature: "Modern web + mobile UI", cornerstone: true, competitor: "Browser app + companion mobile app", note: "KOVA is browser-based (their headline) with an iOS/Android companion app for field updates. Cornerstone is mobile-first across the whole app, not just a field-tools companion." },
  { feature: "Public REST API (150+ API endpoints)", cornerstone: true, competitor: "Limited public docs", note: "Cornerstone Pro+: 150+ REST API endpoints with public docs. KOVA advertises 'API functionality' and an 'Accounting API plug-in module' but no public endpoint catalog ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â integrations typically go through MiTek Services." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): connect Claude or ChatGPT to your live data via REST + webhooks. KOVA is a closed ecosystem." },
  { feature: "Take your data with you anytime ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â no lock-in", cornerstone: true, competitor: false, note: "Your data is YOURS. Full database export to CSV or JSON anytime, one click, $0, no fees, no waiting on a support ticket. Nightly auto-backups retained 7 days for instant rollback. KOVA data extraction goes through MiTek Services." },
  { feature: "Per-user fees", cornerstone: "Up to 30 users (60 on Pro+), every tier", competitor: "Unlimited users (their advertised strength)", note: "KOVA makes a real point of unlimited internal + external users, which is genuinely useful for a 300+ homes/yr operation with hundreds of vendors. For a 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr builder, Cornerstone's 30-user cap (60 on Pro+) covers your whole team plus extended vendors without per-seat scaling." },
  { feature: "Construction scheduling", cornerstone: true, competitor: true, note: "Both ship full scheduling. Cornerstone adds auto-cascading 3-tier dependencies, 17 pre-built templates, critical path highlighting, and permit gates out of the box." },
  { feature: "Pricing model", cornerstone: "Flat ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â published online", competitor: "Enterprise quote + implementation services", note: "KOVA: enterprise contract, consult-led pricing, MiTek Services for implementation and ongoing maintenance. Cornerstone: flat monthly, published online, self-serve onboarding, no implementation fee." },
  { feature: "Cornerstone tiers (flat ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â up to 30 users ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¢ 60 on Pro+)", cornerstone: "$149 / $299 / $499 / $599", competitor: "ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 37+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "KOVA scope. Builder pricing.", desc: "KOVA is built for top-100 production builders with implementation budgets and a MiTek Services consultant on retainer. Cornerstone delivers the same core capabilities ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â options engine, sales pipeline, purchasing, vendor portal, scheduling ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â for the 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr builder. Flat pricing, self-serve, no consultant required." },
  { title: "AI agents, not rules engines", desc: "KOVA's headline is a rules engine that prevents unbuildable sales. Cornerstone's headline is Foreman AI on Pro ($499/mo) ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â 396+ skills that actually take action: write POs, update schedules, scrape product pages, generate MLS listings, configure design options in plain English. Different category of product." },
  { title: "Public API + 37+ webhooks on Pro+", desc: "150+ REST API endpoints, 37+ named webhook events (catalog growing), HMAC signatures, public docs. Wire Twilio, Bland, Retell, or your own agents to our webhooks. KOVA APIs go through MiTek Services as integrations engagements." },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the best MiTek KOVA alternative for home builders?",
    a: "Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ is the closest functional KOVA alternative for small-to-mid home builders. It includes the same core capabilities ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â options rules engine, sales pipeline with contract management, estimating, purchasing with bidding, multi-community management, construction scheduling, vendor collaboration, and warranty ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â without KOVA's enterprise quote and MiTek Services implementation engagement. Cornerstone adds native AI agents (Foreman AI 396+ skills on Pro $499/mo, Blueprint AI 60-second takeoffs), 37+ named webhook events (Pro+), and a public REST API (Pro+). Pricing is published online starting at $149/mo.",
  },
  {
    q: "Is Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ a KOVA replacement?",
    a: "For builders running 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr, yes. Cornerstone covers KOVA's core homebuilder workflows ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â sales rules engine, design center, estimating/takeoffs, purchasing & POs, scheduling, vendor collaboration, homeowner portal, warranty ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â in a modern AI-native platform. For enterprise builders running 300+ homes/yr who need an in-platform general ledger and a full land acquisition / bonds / land development module, KOVA's ERP-grade accounting and land-dev modules are genuine strengths and may be the right fit. We're honest about the segmentation: KOVA is built for production enterprise; Cornerstone is built for the small-to-mid builder.",
  },
  {
    q: "How much does Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ cost compared to KOVA?",
    a: "Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ starts at $149/mo (Starter, up to 30 users) with zero implementation cost. KOVA pricing is not publicly listed ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â MiTek requires a consultation to get a quote, and implementation goes through MiTek Services as a paid engagement. For the full Cornerstone platform: Builder ($299/mo, options engine + full pipeline) and Pro ($499/mo, Foreman AI + Blueprint AI) are flat within tier (up to 30 users / 60 on Pro+). Pro+ at $599/mo includes the REST API, 37+ named webhook events, and BYOA.",
  },
  {
    q: "Does Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ have a vendor portal like KOVA?",
    a: "Yes, but built differently. KOVA gives vendors a login to a portal where they can export, update, and import costs, plus see plans, options, schedules, and POs. Cornerstone replaces the login with tokenized magic links ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â vendors get a secure link in email, click once, and bid or confirm tasks without an account or password. Adoption is dramatically higher when subs don't have to manage yet another login. For builders who prefer a full vendor portal experience, that's also available.",
  },
  {
    q: "What about KOVA's built-in accounting? Does Cornerstone match it?",
    a: "Honestly: no, and we don't try to. KOVA ships a real ERP-grade accounting module with full GL, AP/AR, retainage, lien waivers, COGS, intercompany transactions, and bank reconciliation. That's a genuine fit for enterprise production builders who want their accounting and operations on one platform. Cornerstone is built for the 5ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã…â€œ200 homes/yr builder who already runs QuickBooks or a similar accounting system ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â we integrate with your existing accounting via our public REST API (Pro+) rather than replace it. If you need an in-platform GL, KOVA is the right tool. If you want modern operations + AI on top of the accounting system you already have, Cornerstone is.",
  },
  {
    q: "What about KOVA's land development module?",
    a: "Two halves to this question. (1) Land development scheduling and tracking ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â clearing, grading, utilities, paving ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â Cornerstone handles natively through the same scheduling engine that runs the rest of the build. You can run a development phase end-to-end. (2) Land acquisition lead tracking ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ownership history, parcel pursuit, bonds and bond releases ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â KOVA ships that; Cornerstone doesn't yet. It's on the roadmap. For builders whose dirt pipeline is already managed elsewhere (or who run smaller acquisition volumes), Cornerstone covers the operational side; for builders running a heavy land-acquisition pipeline with bond tracking, KOVA's module is currently the more complete fit on that specific piece.",
  },
  {
    q: "Does Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ have an options rules engine like KOVA?",
    a: "Yes. Cornerstone Builder ($299/mo) ships a structural and design options engine with dependencies, incompatibilities, allowance overages, per-community pricing, and real-time price rollup as buyers select ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â same core mechanics KOVA's rules engine handles. Foreman AI's Design Center domain (Pro $499/mo) adds plain-English option configuration and 64 Designer Packages curated by an actual interior designer.",
  },
  {
    q: "Can I migrate from KOVA to Cornerstone?",
    a: "Yes. The AI Migration Wizard handles KOVA exports, plus NEWSTAR, BuildPro, MarkSystems, Buildertrend, CoConstruct, JobTread, and any CSV/Excel. Drop your files in, AI auto-detects column mapping, runs 23 dedicated import endpoints covering vendors, homes, communities, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more. ~$0.01 per migration ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â we absorb it. White-glove migration available on Pro and Pro+ plans.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â no credit card, no contract, no implementation fee.",
  },
];

export default function KovaAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="MiTek KOVA"
      badgeLabel="MiTek KOVA Alternative"
      heroLine1="KOVA scope."
      heroLine2="Without the enterprise quote."
      accentColor="cyan"
      heroParagraph="Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ is the modern, AI-native alternative to MiTek KOVA for small-to-mid home builders. Same core scope ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â options rules engine, sales pipeline, estimating, purchasing, scheduling, vendor collaboration, warranty ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â plus native AI agents (Foreman AI on Pro $499/mo), 37+ named webhook events (Pro+), and a public REST API (Pro+ $599/mo). Pricing published online from $149/mo. No MiTek Services consultation required."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Side-by-side for small-to-mid home builders."
      comparisonRows={comparisonRows}
      trademarkName="MiTek KOVA"
      whySwitchHeadline="Why builders pick Cornerstone over KOVA"
      whySwitchCards={whySwitchCards}
      showMigrationCTA={true}
      migrationHeadline="Already on KOVA? Drop your export. We'll do the rest."
      migrationDesc="Export your KOVA data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, design options, scopes, and budgets. Dry-run before you commit. ~$0.01 per migration ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â we absorb it. No MiTek Services engagement required."
      faqTitle="MiTek KOVA Alternative FAQ"
      faqSubtitle="Common questions about switching to Cornerstone PMÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ from MiTek KOVA."
      faqItems={faqItems}
      footerHeadline="Ready to skip the consultation cycle?"
      footerSubtext="Join the beta and get 2 years free. Operational in hours, not months. No MiTek Services required."
      relatedPages={[
        { text: "vs NEWSTAR", href: "/newstar-alternative" },
        { text: "vs BuildPro", href: "/buildpro-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
