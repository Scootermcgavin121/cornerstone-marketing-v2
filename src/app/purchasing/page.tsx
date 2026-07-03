import {
  Check,
  Sparkles,
  Ruler,
  CalendarCheck,
  Hash,
  Wallet,
  Tags,
  FileText,
  Send,
  ArrowRight,
  ClipboardCheck,
  RefreshCw,
  Lock,
  Receipt,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";
import { VideoPlayer } from "@/components/VideoPlayer";
import { DataOwnership } from "@/components/DataOwnership";
import { JsonLd } from "@/components/JsonLd";
import { buildFeatureSchema } from "@/lib/schema-helpers";

const purchasingSchema = buildFeatureSchema({
  pageName: "Home Builder Purchasing & Bid Management",
  pagePath: "/purchasing",
  description:
    "Cornerstone PM's purchasing module includes auto-generated scope-filtered Excel bid templates, no-login vendor file-upload portal, side-by-side bid comparison, lock-after-acceptance, parts catalog, auto-budget, purchase orders, payments, retainage tracking, and full CSV/JSON data export.",
  applicationSubCategory: "Construction Purchasing Software",
  keywords:
    "home builder purchasing software, construction bid management, vendor bid software, builder purchase orders, scope-filtered bid templates, vendor portal no login, bid comparison software, construction PO software, builder budget software, residential purchasing, construction cost codes, hierarchical cost codes, per-phase purchase orders",
  featureList: [
    "Closed-loop purchasing — complete a construction task and the matched purchase order auto-generates and auto-emails the vendor (schedule → cost codes → live budget → vendor pricing → PO → vendor notification)",
    "Cost-code-driven live budgets — every line resolves to a cost code; the budget computes live from floorplan takeoffs × accepted vendor pricing",
    "Vendor bids drive real costs — accepted bid pricing flows straight into the budget and POs, no re-keying",
    "Auto-generated POs grouped by cost code with branded PO PDFs and automatic vendor emails",
    "Approve-to-pay payables workflow — PO lifecycle Draft → Sent → Acknowledged → Invoiced → Approved → Paid, with invoices held until approved",
    "Change orders with approval workflow, dedicated change-order POs, and full audit trail",
    "Retainage withholding on purchase orders and payment tracking by method (check, ACH, wire, card, cash)",
    "QuickBooks-ready — qboId fields on vendors, POs, and homes plus PO/payment webhook events to sync via the REST API or Zapier",
    "Auto-generated Excel bid templates with 3 tabs (Base, Structural, Designer)",
    "Scope-filtered templates — vendors only see their trade",
    "Vendor portal — no Cornerstone account required",
    "Side-by-side bid comparison across vendors",
    "Community-assigned vendor wins (not lowest-bid auction)",
    "Lock-after-acceptance — protects awarded pricing from drift",
    "Multiple ACCEPTED bids per scope across communities",
    "Parts catalog with vendor pricing and retail pricing modes",
    "Purchase orders, payments, and retainage tracking",
    "Hierarchical cost codes — phase-level tracking under each trade scope (e.g. Plumbing → PLM-001 Underground, PLM-002 Rough, PLM-003 Trim)",
    "Per-phase PO generation — right materials list for each vendor visit",
    "Task-completion PO generation — when a construction task is marked complete, auto-generate the PO pre-filled via cost codes; choose draft-first (PM reviews before sending) or auto-send (PO emailed to the vendor's scheduling email with PDF attached, hands-free)",
    "Cost type classifications (labor, material, lump sum, mixed)",
    "Auto-Quantity Scope Items — quantities auto-calculate from floorplan dimensions (Under Air Sqft, Total Sqft, Exterior Perimeter, Roof Squares)",
    "Multi-tab Excel import/export — entire floorplan in one workbook",
    "Full database export (CSV or JSON) — no vendor lock-in",
  ],
});

export const metadata = {
  title: "Home Builder Purchasing & Cost Control Software | Cornerstone PM™",
  description: "Cost-code-driven live budgets, vendor bids that drive real pricing, and auto-generated purchase orders. Mark a construction task complete and the matched PO generates and emails the vendor automatically — the closed loop from schedule to vendor payment. Plus change orders, approve-to-pay payables, and QuickBooks-ready sync.",
};

const faqItems: FAQItem[] = [
  {
    q: "What is home builder purchasing software?",
    a: "Home builder purchasing software manages the bid-to-purchase-order flow: vendor bids, parts catalogs, purchase orders, payment scheduling, and budget tracking. Cornerstone PM™'s purchasing module connects directly to your sales pipeline and design center so structural options and design selections automatically feed the budget — no double entry, no spreadsheets.",
  },
  {
    q: "What is AI construction purchasing for home builders?",
    a: "AI construction purchasing uses agents to handle bid generation, vendor outreach, bid comparison, and PO creation. Cornerstone PM™'s Foreman AI includes a 4-skill Bid Pipeline domain plus a 7-wave automated bidding pipeline that contacts vendors, collects bids, normalizes pricing, and recommends an award — all inside one platform.",
  },
  {
    q: "What is Auto-Quantity and how does it work?",
    a: "Auto-Quantity lets you set a quantity source on any scope item — Under Air Sqft, Total Sqft (Under Roof), Exterior Perimeter, or Roof Squares. Set it once on the scope item and the quantity auto-calculates from floorplan dimensions for every floorplan in your portfolio. POs intelligently combine base house + structural option quantities (e.g., 2,400 sqft base + 800 sqft finished basement = 3,200 sqft on one PO). No manual entry per floorplan, no stale numbers, ANSI Z765 compliant.",
  },
  {
    q: "Can I share the same structural option across all my floorplans?",
    a: "Yes — mark a structural option as global. A global option keeps identical takeoffs (parts and scope items) and a single retail price across every floorplan, so options like Finished Basement or Garage Extension that don't vary by plan only need to be set up once. Edit the takeoffs in one place and the change automatically syncs to every floorplan. When takeoffs differ between floorplans, a source picker lets you choose which floorplan's takeoffs to standardize on, and the retail price is editable inline. It eliminates hours of duplicate data entry and the errors that come with it.",
  },
  {
    q: "How do I manage floorplan elevations and their pricing?",
    a: "Cornerstone PM&trade; has a dedicated Elevations Manager — a card-based page for managing every exterior style (Elevation A — Colonial, B — Craftsman, C — Modern Farmhouse, etc.) per floorplan. Each elevation has an inline-editable retail price adder that flows into the base home price, plus a code, description, and optional sqft override. Expand any card to manage its material takeoffs — add parts and scope items and edit quantities — while the cost is computed automatically from vendor pricing instead of being typed in. Foreman, the built-in AI assistant, can also create elevations, add parts, and set pricing entirely through natural conversation.",
  },
  {
    q: "How does the auto-budget feature work?",
    a: "When a sales counselor locks structural options on a new home sale, Cornerstone PM™ automatically generates the home's construction budget using the floorplan's base costs plus the option-specific deltas. Design center selections, change orders, and bid awards continue to flow into the same budget number throughout the build.",
  },
  {
    q: "Is Cornerstone PM™ a NEWSTAR or BuildPro alternative for purchasing?",
    a: "Yes. Cornerstone PM™ was built as a modern, affordable alternative to NEWSTAR and BuildPro for small-to-mid home builders. It covers the same core purchasing functionality — parts catalog, budget hierarchy, bid management, POs, payments — without the 6-figure implementation cost. Starts at $299/mo on the Builder plan.",
  },
  {
    q: "Does Cornerstone PM™ track retainage?",
    a: "Yes. Cornerstone PM™ tracks retainage on payments, classifies cost types, manages payment schedules, and surfaces variance reports against the budget. Vendor 1099 totals are exportable.",
  },
  {
    q: "How does the parts catalog work?",
    a: "Cornerstone PM™'s parts catalog maintains SKUs, vendor pricing, and unit costs that sync across every job. Foreman AI's Parts Catalog domain (5 skills) handles SKU lookups, vendor pricing comparisons, material substitutions, catalog updates, and inventory alerts via plain-English requests.",
  },
  {
    q: "Can I use my own AI agent against Cornerstone purchasing data?",
    a: "Yes. The Pro+ plan ($599/mo) includes Bring Your Own Agent (BYOA) and full REST API access. You can connect Claude, ChatGPT, or any custom agent to live purchasing, bid, vendor, and budget data through 150+ API endpoints with scoped Bearer-token auth.",
  },
  {
    q: "How do I review competing vendor bids?",
    a: "Cornerstone PM™'s bid review uses a side-by-side comparison view with scope-item drill-down. You see every bid against every scope item simultaneously — not just total price, but full scope coverage so you can spot gaps, exclusions, or scope creep before awarding. Vendors edit their own scope items inside their vendor portal; you review and approve.",
  },
  {
    q: "What's in the auto-generated bid template?",
    a: "Three tabs: (1) Base — floorplan-location-scope rows for the vendor's trade with option pricing; (2) Structural — takeoff-driven structural options for that scope; (3) Designer — design center option classes the vendor is responsible for. Everything is scope-filtered — your electrician doesn't see plumbing rows. The template is auto-attached to the vendor invite email and downloadable from the portal.",
  },
  {
    q: "How do vendors submit bids? Do they need a login?",
    a: "No login, no training. Vendors get a token-protected URL when invited. They download the auto-generated, scope-filtered Excel template (Base / Structural / Designer tabs), fill in their numbers in their own workflow, then upload PDF/Excel/CSV files back to the portal — up to 10 files, 10 MB each. Two clicks to submit. Builders don't end up doing data entry on behalf of subs who hate logins.",
  },
  {
    q: "How is bid status tracked?",
    a: "Every bid request flows through Invited → Viewed → Submitted → Declined, with timestamps. You can see at a glance who opened the link, who's working on it, and who never showed up — so you know who to chase before the bid window closes.",
  },
  {
    q: "Can I get my data out if I leave?",
    a: "Yes. Take all your data with you anytime, no strings attached. Settings > Backups lets you download a full org export (91 tables) as CSV or JSON in one click, with sensitive fields automatically excluded. Every vendor, every home, every schedule, every option, every budget line. Nightly auto-backups run with 7-day retention for instant rollback. Your data is always yours — no vendor lock-in, no exit fees, no support ticket.",
  },
  {
    q: "How do I lock a bid once it's accepted?",
    a: "Cornerstone PM™ uses a lock-after-acceptance flow. The moment you award a vendor bid, the scope items, pricing, and terms lock down — no surprise edits, no scope drift, no last-minute pricing changes. The locked bid feeds directly into the home's budget and PO pipeline.",
  },
  {
    q: "When are POs generated — at job start, after the work is done, or somewhere in between?",
    a: "All three, plus a fourth. Cornerstone gives you four PO patterns and lets you mix them on the same job: (1) generate every PO across the entire build the moment the home is approved (locks in budget exposure on day one), (2) generate a partial deposit PO from any earlier pipeline task — permit pull, contract sign, foundation pour — then top it up later, (3) auto-generate a PO when a construction task is marked complete — choose draft-first (the PM reviews before sending) or auto-send (the PO is emailed straight to the vendor's scheduling email with the PDF attached, hands-free), or (4) configurable per task / scope / community so different trades follow different rules on the same home. Most platforms hard-code one PO model. Cornerstone lets your cash flow rules drive the system, not the other way around.",
  },
  {
    q: "Do I have to create purchase orders manually?",
    a: "No. Cornerstone can auto-generate a PO the moment a construction task is marked complete — auto-populated with the right parts, scope items, quantities, vendor, and pricing for that home's floorplan (line items grouped by cost code). You choose the behavior per task: draft-first (the PO is created as a draft and the PM reviews it before sending) or auto-send (flag the task and the PO is generated and emailed to the vendor's scheduling email with the PDF attached, the instant the task is done — zero manual steps). The mapping is explicit (Construction Task → Cost Code → Takeoff Items → PO → Vendor Email), so there's zero manual data entry and nothing gets forgotten when a phase wraps. You can also download any PO as a PDF to email the vendor yourself. BuilderTrend, CoConstruct, and spreadsheets require fully manual PO creation and vendor email; Cornerstone fires the whole loop off a single 'task complete.'",
  },
  {
    q: "How does the approve-to-pay (payables) workflow work?",
    a: "Every purchase order moves through a status lifecycle: Draft → Sent → Acknowledged → Invoiced → Approved → Paid (or Void). When a vendor invoice comes in, the PO lands at Invoiced and effectively sits on hold — it doesn't get paid until someone with authority reviews it against the PO, the budget, and the work, then moves it to Approved. That Approved gate is your approve-to-pay checkpoint. Once approved, you record the payment (check, ACH, wire, card, or cash) with a reference number and date, and the PO flips to Paid. Retainage is withheld automatically at your configured percentage until project completion. Nothing pays a vendor without passing the approval gate.",
  },
  {
    q: "Does Cornerstone PM™ integrate with QuickBooks?",
    a: "Cornerstone PM&trade; is QuickBooks-ready. Every vendor, purchase order, and home carries a QuickBooks ID (qboId) field, and PO and payment lifecycle events (po.created, po.status_changed, payment.created) fire as real-time webhooks. Today you sync to QuickBooks through the REST API or a Zapier connection — map Cornerstone vendors, bills, and payments to QuickBooks entities using those IDs and events. A deeper native two-way QuickBooks integration is on the roadmap; the data model and webhook plumbing are already in place for it.",
  },
  {
    q: "Does Cornerstone PM™ support cost codes?",
    a: "Yes — and not just flat cost codes like BuilderTrend or CoConstruct. Cornerstone supports a full hierarchy: trade scopes (your vendor relationship level) with cost codes beneath them for phase-level detail. The Plumbing scope, for example, breaks into PLM-001 Underground, PLM-002 Rough, and PLM-003 Trim. This unlocks per-phase PO generation — a separate purchase order with exactly the right materials for each vendor visit, instead of one giant PO per trade. Cost codes explicitly connect tasks → takeoff items → POs with zero fuzzy matching, and the same part can land on multiple POs at different quantities. It's enterprise-grade cost tracking (the kind you'd find in Procore or Sage 300) without the enterprise complexity — and it's fully optional, so builders who don't need the granularity can ignore it. Your master budget is unaffected; cost codes only drive home-level PO generation.",
  },
  {
    q: "How do I subscribe to bid notifications as an admin?",
    a: "Cornerstone PM™ ships per-user notification preferences plus role-level subscriptions for admins. Admins can subscribe to bid events — new bids submitted, vendor scope edits, awards, lock events — and choose email, in-app, or both. Each user controls their own notification toggles independently.",
  },
  {
    q: "Does Cornerstone PM™ use lowest-bid auctions to pick vendors?",
    a: "No — and that's intentional. Home builders rely on long-term community vendor relationships, not lowest-bid auctions. Cornerstone PM™ supports community-assigned vendor awards: you choose who you want to win based on scope coverage, relationship, and quality — with the bid comparison data to back the decision. Lowest-bid auctioning destroys vendor relationships in residential homebuilding.",
  },
  {
    q: "What does purchasing software for home builders cost?",
    a: "Cornerstone PM™'s purchasing module is included in the Builder plan at $299/mo with up to 30 users (60 on Pro+). The Pro plan at $499/mo adds Foreman AI's Bid Pipeline and Parts Catalog skills. Pro+ at $599/mo adds the REST API and BYOA. NEWSTAR and BuildPro typically require $25,000+ implementation budgets before monthly licensing.",
  },
];

const features = [
  { title: "Parts Catalog", desc: "Full parts and materials catalog with unit pricing, synced across all jobs." },
  { title: "Budget Hierarchy", desc: "Builder — Community — Floorplan — Home — budgets cascade and override at each level." },
  { title: "Base Budgets", desc: "Pre-built budget templates per floorplan, ready to apply at sale." },
  { title: "Auto-Budget Generation", desc: "When a home sale is created with structural options, the budget auto-generates instantly." },
  { title: "Structural Options Pricing", desc: "Every structural option tied to a line-item budget impact — no manual entry." },
  { title: "Global Structural Options", desc: "Mark an option as global and its takeoffs and retail price stay identical across every floorplan. Edit takeoffs once and the change syncs everywhere — no more duplicating the same option data on floorplan after floorplan. One source of truth, fewer errors, hours saved." },
  { title: "Dedicated Elevations Manager", desc: "A dedicated page for managing exterior styles per floorplan — Colonial, Craftsman, Modern Farmhouse, and more. Card-based layout with inline-editable retail price adders, expandable takeoffs (add parts, scope items, edit quantities), and per-elevation sqft overrides. Cost is computed from real vendor pricing, never set by hand." },
  { title: "Active Homes Dashboard", desc: "All homes, budget status, and variance at a glance." },
  { title: "Apply Budget Flow", desc: "One-click flow to apply base budget + options to any home." },
  { title: "Design Center Integration", desc: "Room-by-room selections tied directly to purchasing budget. Includes Product Configurator for complex multi-attribute selections like cabinets and countertops." },
  { title: "Designer Collections", desc: "Group selections into curated collections for buyer presentations." },
  { title: "Pricing-Free Trade Copy", desc: "Hand trades a spec sheet that shows every finish and photo with zero pricing — no price columns, subtotals, or totals. Auto-saved to the home’s Documents on every selection lock. Protect your margins: trades see the finishes, never the prices." },
  { title: "Unlimited Spec Levels", desc: "Community Standard, Premium, Luxury — unlimited spec levels with separate pricing." },
  { title: "Base Pricing Matrix", desc: "Floorplan → Community pricing matrix with per community overrides." },
  { title: "Change Orders", desc: "Buyer-requested changes with approval workflow and budget impact." },
  { title: "Bid Templates That Write Themselves", desc: "The moment you create a bid request, Cornerstone auto-generates a 3-tab Excel template (Base / Structural / Designer) pre-filled from your floorplan takeoffs and emailed to every vendor. Zero spreadsheet babysitting." },
  { title: "Scope-Filtered Per Trade", desc: "Your electrician doesn't see plumbing rows. Each vendor's template only includes line items relevant to their scope — pulled from the ScopeOptionClass linkages so nothing gets miscategorized." },
  { title: "No-Login Vendor Upload Portal", desc: "Vendors click a token-protected link and drag-drop their bid sheet (PDF, Excel, or CSV, up to 10 files). Two clicks to submit. Perfect for subs who already have their own bidding workflow and refuse to retype line items." },
  { title: "Bid Status Tracking", desc: "Every bid request flows through Invited → Viewed → Submitted → Declined with timestamps — so you know exactly who to chase before the bid window closes." },
  { title: "Bid Management", desc: "Send a floorplan to bid to every vendor with one click. Track responses, manage the full RFP lifecycle, and award through a branded portal." },
  { title: "Bid Comparison & Drill-Down", desc: "Side-by-side vendor bid comparison with scope-item drill-down review — not just price, but full scope coverage." },
  { title: "Community-Assigned Vendor Wins", desc: "Award based on community vendor relationships and scope coverage — not lowest-bid auctions. Protects long-term vendor partnerships." },
  { title: "Lock-After-Acceptance", desc: "Once a bid is accepted, it locks — no surprise scope changes or pricing edits after award." },
  { title: "Vendor Portal Scope Editing", desc: "Vendors edit their own scope items in their portal — you review, you approve, you award." },
  { title: "Bid Notification Subscriptions", desc: "Admins subscribe to bid events — new bids, edits, awards — with per-user notification preferences." },
  { title: "Award & Budget Flow", desc: "Award a bid and it flows directly into the budget — no double entry." },
  { title: "Flexible PO Generation — Four Patterns", desc: "Most platforms hard-code one PO model. Cornerstone gives you four: (1) all POs at job start (lock in budget exposure day one), (2) partial deposit POs from any earlier task (permit pull, contract sign, foundation pour), (3) PO auto-generated when a construction task is marked complete — draft-first (reviewed before sending) or auto-send (emailed straight to the vendor, hands-free), or (4) configurable per task / scope / community — mix and match on the same job. Your cash flow rules drive the system, not the other way around." },
  { title: "Auto-Send PO on Task Completion", desc: "Mark a construction task complete and Cornerstone fires the vendor's purchase order automatically — it generates the matched PO (line items grouped by cost code, at the right quantities for that home's floorplan, with vendor and pricing) and emails it to the vendor's scheduling email with the PDF attached. Zero manual steps. This closes the entire loop end to end: schedule → cost codes → live budget → vendor pricing → PO → vendor notification, all off a single 'task complete.' Prefer a checkpoint? Leave the task on draft-first and the PM reviews before anything sends. Auto-send is a per-task opt-in, so POs only fire to vendors where you've authorized it. Most construction software — BuilderTrend, CoConstruct, spreadsheets — can't auto-fire a vendor PO straight off the schedule; Cornerstone does." },
  { title: "Cost Codes - Hierarchical Phase Tracking", desc: "Trade scopes are your vendor relationship; cost codes sit beneath them for phase-level detail. Plumbing breaks into PLM-001 Underground, PLM-002 Rough, PLM-003 Trim — each its own vendor visit and its own PO. Generate a separate purchase order with exactly the right materials list per phase instead of one giant PO. Cost codes explicitly link tasks → takeoff items → POs (zero fuzzy matching), and the same part can appear on multiple POs at different quantities. Enterprise-grade cost tracking like Procore or Sage 300 — without the enterprise complexity. Fully optional and backward compatible: ignore it if you don't need the granularity. BuilderTrend and CoConstruct use flat cost codes; Cornerstone supports the full hierarchy." },
  { title: "Take Your Data With You, Anytime", desc: "Your data is always yours. Download everything as CSV or JSON in one click — 91 tables, every vendor, every home, every schedule, every option, every budget line. Sensitive fields excluded automatically. Plus nightly auto-backups with 7-day retention for instant rollback. No vendor lock-in, no exit fees, no strings attached." },
  { title: "Buildertrend Migration", desc: "Import existing budgets from Buildertrend with smart column mapping." },
  { title: "Bid Import AI", desc: "Upload vendor bids in ANY format — Excel, PDF, scanned docs, even photos of handwritten quotes. AI extracts line items, maps to your parts catalog with confidence scores, and lets you review, edit, approve, or reject before importing." },
  { title: "Auto-Quantity Scope Items", desc: "Set a quantity source (Under Air Sqft, Total Sqft, Exterior Perimeter, Roof Squares) once on a scope item and it auto-calculates across every floorplan. POs combine base house + structural option quantities. ANSI Z765 compliant." },
  { title: "Multi-Tab Excel Import/Export", desc: "Export an entire floorplan as a single multi-tab Excel workbook — base house, locations, structural options, elevations. Import works the same way. One file, complete data." },
];

export default function PurchasingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <JsonLd json={purchasingSchema} />
      <Navbar />
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(52,211,153,0.09)_0%,transparent_65%)]" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-6">
            Purchasing &amp; Cost Control
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Mark it done.<br /><span className="text-emerald-400">The PO sends itself.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            Cost-code-driven live budgets, vendor bids that become real costs, and purchase orders that generate and email the vendor the instant a task is complete. The whole loop — schedule to vendor payment — runs itself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/30 hover:-translate-y-0.5">Request Early Access →</Link>
            <Link href="#closed-loop" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">See the closed loop &darr;</Link>
          </div>
        </div>
      </section>

      {/* ⭐ THE CLOSED LOOP — hero differentiator */}
      <section id="closed-loop" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl bg-emerald-500/[0.06] border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(52,211,153,0.12),transparent_60%)]" />
            <div className="relative">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-4">
                  ⭐ THE CLOSED LOOP
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
                  One “task complete” fires the entire purchasing chain
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Other platforms make you build the PO, look up the pricing, attach the PDF, and email the vendor — by hand, every time. Cornerstone wires the schedule directly to the vendor’s inbox. Mark a construction task complete and the matched purchase order generates and sends itself.
                </p>
              </div>

              {/* 6-step flow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-10">
                {[
                  { icon: CalendarCheck, step: "1", title: "Task complete", desc: "A construction task is checked off on the schedule." },
                  { icon: Hash, step: "2", title: "Cost code", desc: "The task resolves to its cost code — the exact phase and trade." },
                  { icon: Wallet, step: "3", title: "Live budget", desc: "Cost code pulls the right takeoff items and quantities for that home." },
                  { icon: Tags, step: "4", title: "Vendor pricing", desc: "Accepted vendor bid pricing prices every line, automatically." },
                  { icon: FileText, step: "5", title: "PO generated", desc: "A branded PO PDF is built, line items grouped by cost code." },
                  { icon: Send, step: "6", title: "Vendor emailed", desc: "It's sent to the vendor's scheduling email — hands-free." },
                ].map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.step} className="relative p-4 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col items-center text-center">
                      <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-3">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-emerald-400/70 text-[10px] font-bold uppercase tracking-widest mb-1">Step {s.step}</div>
                      <div className="font-bold text-white text-sm mb-1">{s.title}</div>
                      <div className="text-slate-400 text-xs leading-relaxed">{s.desc}</div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 p-5 rounded-xl bg-red-500/5 border border-red-500/20">
                  <p className="text-red-400 font-semibold text-xs uppercase tracking-widest mb-2">BuilderTrend, CoConstruct &amp; spreadsheets</p>
                  <p className="text-slate-400 text-sm leading-relaxed">The task gets marked done in one tool. Then someone opens the budget, finds the right line items, types the quantities, builds the PO, exports a PDF, opens email, finds the vendor, attaches the file, and hits send. Every phase. Every home. Things get forgotten.</p>
                </div>
                <div className="flex-1 p-5 rounded-xl bg-emerald-500/5 border border-emerald-500/30">
                  <p className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2">Cornerstone PM&trade;</p>
                  <p className="text-slate-300 text-sm leading-relaxed">Mark the task complete. The PO is already built — right parts, right quantities, right vendor, right price — and it’s already in the vendor’s inbox. Prefer a checkpoint? Leave the task on <span className="text-white font-semibold">draft-first</span> and the PM reviews before anything sends. Auto-send is a per-task opt-in, so POs only fire where you’ve authorized it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost-code-driven live budgets */}
      <section id="live-budgets" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Wallet className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Cost-code-driven live budgets</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Every budget line resolves to a cost code, and every cost code knows its takeoff items. The budget isn’t a number you type and maintain — it computes live from your floorplan takeoffs multiplied by accepted vendor pricing. Lock a structural option, award a bid, approve a change order, and the budget moves on its own.
            </p>
            <ul className="space-y-3">
              {[
                "Quantities flow from floorplan takeoffs — no manual line entry",
                "Accepted vendor pricing drives the dollars, not guesses or stale catalogs",
                "Hierarchical cost codes track each phase under its trade scope",
                "Structural options, design selections, and change orders all feed the same number",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8">
            <div className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-5">How a line computes</div>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Takeoff quantity</div>
                <div className="text-white font-bold">PLM-002 Plumbing Rough &middot; 2,400 sqft</div>
              </div>
              <div className="text-center text-emerald-400 font-black text-xl">&times;</div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="text-slate-400 text-xs mb-1">Accepted vendor pricing</div>
                <div className="text-white font-bold">Awarded bid &middot; locked unit cost</div>
              </div>
              <div className="text-center text-emerald-400 font-black text-xl">=</div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="text-emerald-400 text-xs mb-1 font-semibold uppercase tracking-widest">Live budget line</div>
                <div className="text-white font-bold">Recomputes automatically — no double entry</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor bids become real costs */}
      <section id="bids-to-pricing" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-8 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 font-semibold">Send to bid</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 font-semibold">Compare</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <span className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-slate-800 text-slate-300 font-semibold">Award</span>
              <ArrowRight className="w-4 h-4 text-slate-600" />
              <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-semibold inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Lock</span>
            </div>
            <div className="mt-6 p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-slate-300 text-sm leading-relaxed">
              The moment you award a vendor, their scope items, quantities, and pricing <span className="text-white font-semibold">lock</span> — no scope drift, no surprise edits. That locked pricing becomes the real cost on the budget and every PO it touches.
            </div>
          </div>
          <div className="space-y-5 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <Tags className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Vendor bids become real costs</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Send a floorplan to bid with one click, collect responses through a no-login vendor portal, and compare them side by side with full scope-item drill-down. Award the vendor you want — based on relationship and scope coverage, not a lowest-bid auction — and the accepted pricing flows straight into your budget and POs.
            </p>
            <ul className="space-y-3">
              {[
                "No-login vendor portal — subs upload bids in their own format",
                "Side-by-side comparison with scope-item drill-down, not just totals",
                "Community-assigned awards protect long-term vendor relationships",
                "Lock-after-acceptance freezes awarded pricing against drift",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Auto-generated POs grouped by cost code */}
      <section id="purchase-orders" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Purchase orders, grouped by cost code</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              POs build themselves from the home’s takeoffs — line items grouped by cost code, deduped to correct totals, at the right quantities for that floorplan. Each one renders as a branded PDF with your logo, payment terms, and date, ready to view, save, or email the vendor. And you choose <span className="text-white font-semibold">when</span> they fire.
            </p>
            <ul className="space-y-3">
              {[
                "Branded PO PDFs — your logo, your payment terms, correct dates",
                "Line items grouped by cost code, deduped to correct totals",
                "Per-phase POs — the exact materials for each vendor visit",
                "Four PO patterns: all at job start, partial deposits, on task completion, or configurable per task / scope / community",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800">
              <div>
                <div className="text-white font-black text-lg">Purchase Order</div>
                <div className="text-slate-500 text-xs">The Addison &middot; Lot 14 &middot; Auto-generated</div>
              </div>
              <Layers className="w-6 h-6 text-emerald-400" />
            </div>
            <div className="space-y-2.5">
              {[
                { code: "PLM-002", label: "Plumbing Rough", },
                { code: "PLM-003", label: "Plumbing Trim", },
                { code: "ELE-001", label: "Electrical Rough", },
              ].map((row) => (
                <div key={row.code} className="flex items-center justify-between p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-mono text-xs font-bold">{row.code}</span>
                    <span className="text-slate-300 text-sm">{row.label}</span>
                  </div>
                  <span className="text-slate-600 text-xs">grouped</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2 text-emerald-400 text-sm font-semibold">
              <Send className="w-4 h-4" /> Emailed to vendor’s scheduling inbox
            </div>
          </div>
        </div>
      </section>

      {/* Payables & approve-to-pay */}
      <section id="payables" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4">
              <ClipboardCheck className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Payables, with an approve-to-pay gate</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Nothing pays a vendor until it passes a checkpoint. Every PO runs a status lifecycle, and the <span className="text-emerald-400 font-semibold">Approved</span> step is your approve-to-pay gate — an invoice sits on hold until someone reviews it against the PO, the budget, and the work.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {["Draft", "Sent", "Acknowledged", "Invoiced", "Approved", "Paid"].map((stage, i, arr) => (
              <div key={stage} className="flex items-center gap-2">
                <span className={`px-3.5 py-2 rounded-lg text-sm font-semibold border ${stage === "Approved" ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-300" : stage === "Paid" ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-slate-900/60 border-slate-800 text-slate-300"}`}>
                  {stage === "Approved" && <Lock className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />}
                  {stage}
                </span>
                {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-slate-600" />}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: ClipboardCheck, title: "Approve-to-pay", desc: "Invoices land at Invoiced and hold until a reviewer moves them to Approved against PO, budget, and work done." },
              { icon: Receipt, title: "Payment tracking", desc: "Record payments by check, ACH, wire, card, or cash with reference numbers and dates, tied to vendor, PO, and home." },
              { icon: RefreshCw, title: "Retainage", desc: "Withhold a configured percentage on POs until project completion — standard construction billing, handled automatically." },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
                  <Icon className="w-6 h-6 text-emerald-400 mb-3" />
                  <div className="font-bold text-white mb-2">{c.title}</div>
                  <div className="text-slate-400 text-sm leading-relaxed">{c.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Change orders + QuickBooks-ready */}
      <section id="change-orders" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
              <RefreshCw className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">Change orders, controlled</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Buyer-requested and field changes run through an approval workflow with a full audit trail. Approved changes spin up dedicated change-order POs and flow into the same budget number — so the cost of a change is never lost between the field and the books.
            </p>
            <ul className="space-y-2.5">
              {[
                "Approval workflow with full audit trail",
                "Dedicated change-order POs, flagged and tracked separately",
                "Budget impact flows into the live home budget automatically",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-5">
              <Receipt className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-black text-white mb-3">QuickBooks-ready</h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              Vendors, purchase orders, and homes each carry a QuickBooks ID, and PO and payment lifecycle events fire as real-time webhooks. Sync to QuickBooks today through the REST API or a Zapier connection — map your bills and payments with those IDs and events.
            </p>
            <ul className="space-y-2.5">
              {[
                "qboId fields on vendors, POs, and homes",
                "po.created, po.status_changed & payment.created webhook events",
                "Sync via REST API or Zapier — deeper native QuickBooks sync on the roadmap",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Auto-Quantity Scope Items Hero Callout */}
      <section id="auto-quantity" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-cyan-500/5 border border-cyan-500/30 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                  <Ruler className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold mb-2">
                    NEW — AUTO-QUANTITY
                  </div>
                  <h2 className="text-3xl font-black text-white">Auto-Quantity Scope Items</h2>
                  <p className="text-cyan-400 font-semibold text-sm mt-1">Set it once. Every floorplan gets the right number.</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Scope items like Electrical Rough, Paint Labor, and Insulation can now have their quantities automatically
                calculated from your floorplan dimensions. Set “Electrical Rough → Under Air Sqft” once on the scope
                item, and The Addison gets 2,400 sqft while The Magnolia gets 1,800 sqft — automatically. No manual
                entry per floorplan, no stale numbers, no forgotten updates.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {[
                  { label: "Manual", detail: "Enter quantity by hand when auto-calc doesn't apply" },
                  { label: "Under Air Sqft", detail: "Conditioned living space — excludes garage & porch" },
                  { label: "Total Sqft", detail: "Everything under roof — includes garage & porch" },
                  { label: "Ext. Perimeter", detail: "Exterior perimeter in linear feet" },
                  { label: "Roof Squares", detail: "Roof area in roofing squares" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-cyan-400 font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.detail}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <p className="text-red-400 font-semibold text-xs uppercase tracking-widest mb-2">Without Auto-Quantity</p>
                  <p className="text-slate-400 text-sm">Add a new floorplan. Open every scope item. Type the sqft for Electrical, Insulation, Drywall, Paint, HVAC, Framing… 40+ scope items &times; every floorplan in your portfolio. One typo and your budget is wrong for months.</p>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                  <p className="text-cyan-400 font-semibold text-xs uppercase tracking-widest mb-2">With Auto-Quantity</p>
                  <p className="text-slate-400 text-sm">Set “Electrical Rough → Under Air Sqft” once. Add a floorplan with its dimensions. Every scope item auto-calculates. POs combine base house + structural option quantities automatically. ANSI Z765 compliant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bid Import AI Hero Callout */}
      <section id="bid-import" className="py-16 px-4 scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/30 p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.08),transparent_60%)]" />
            <div className="relative">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2">
                    NEW — AI FEATURE
                  </div>
                  <h2 className="text-3xl font-black text-white">Bid Import AI</h2>
                  <p className="text-emerald-400 font-semibold text-sm mt-1">Upload any vendor format. AI does the rest.</p>
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Your vendors don&apos;t use your bid template. They send Excel files, PDFs, scanned quotes, even photos of handwritten estimates.
                Bid Import AI reads them all — extracts every line item with quantities, unit prices, part numbers, and scope assignments,
                fuzzy-matches them to your parts catalog, and gives you a clean review table. No squinting, no manual re-entry.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Any format", detail: "Excel, PDF, scanned docs, photos of handwritten quotes" },
                  { label: "Fuzzy matching", detail: "Maps to your parts catalog with confidence scores" },
                  { label: "Interactive review", detail: "Edit, approve, or reject items before importing" },
                  { label: "3 import modes", detail: "Import as a Bid, Vendor Pricing, or Takeoffs" },
                ].map((item) => (
                  <div key={item.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="text-emerald-400 font-bold text-sm mb-1">{item.label}</div>
                    <div className="text-slate-400 text-xs leading-relaxed">{item.detail}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                  <p className="text-red-400 font-semibold text-xs uppercase tracking-widest mb-2">Without Bid Import AI</p>
                  <p className="text-slate-400 text-sm">Open the vendor&apos;s PDF. Find every line item. Type each one manually. Make a typo. Start over. 2 hours later, the budget&apos;s updated.</p>
                </div>
                <div className="flex-1 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                  <p className="text-emerald-400 font-semibold text-xs uppercase tracking-widest mb-2">With Bid Import AI</p>
                  <p className="text-slate-400 text-sm">Upload the file. Review the AI-extracted table. Approve the items. Done. Costs pennies per import vs. hours of manual data entry.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow video */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <VideoPlayer src="/video/purchasing-workflow.mp4" label="Live Bid Workflow Demo" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-12">Everything included</h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="mb-6 break-inside-avoid p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white mb-1">{f.title}</div>
                    <div className="text-slate-400 text-sm leading-relaxed">{f.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">Included in</div>
              <div className="text-2xl font-black text-white">Builder Plan</div>
              <div className="text-4xl font-black text-emerald-400 mt-1">$299<span className="text-lg text-slate-400 font-normal">/mo</span></div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-3 text-sm text-slate-400">
              <div className="flex justify-between"><span>NEWSTAR / BuildPro</span><span className="line-through text-slate-600">$800+/mo</span></div>
              <div className="flex justify-between"><span>Cornerstone PM™</span><span className="text-emerald-400 font-bold">Free during beta</span></div>
            </div>
            <Link href="/beta" className="block w-full text-center px-6 py-3.5 rounded-xl bg-emerald-400 text-slate-900 font-bold hover:bg-emerald-300 transition-all duration-200">Get Early Access →</Link>
            <p className="text-center text-slate-500 text-xs">Beta limited to 100 builders —· No credit card required</p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">Why builders choose Cornerstone for purchasing</h2>
            <p className="text-slate-400 leading-relaxed">Legacy purchasing software like NEWSTAR and BuildPro were built for enterprise builders with dedicated estimating teams. Cornerstone was built for growing builders who need the same power without the complexity or the price tag.</p>
            <p className="text-slate-400 leading-relaxed">The auto-budget generation, bid-to-PO flow, and structural options pricing were designed to eliminate the double entry that costs your team hours every week.</p>
          </div>
        </div>
      </section>

      <DataOwnership />

      <FAQSection
        title="Home Builder Purchasing FAQ"
        subtitle="Common questions about purchasing and bid management software for home builders."
        items={faqItems}
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">Ready to buy smarter?</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Join the beta and get 2 years free. Limited to 100 builders.</p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-lg shadow-emerald-500/30">Request Early Access →</Link>
      </section>
      <Footer />
    </div>
  );
}