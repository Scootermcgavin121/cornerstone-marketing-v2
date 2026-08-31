import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Cornerstone PMTM",
  description: "Insights for home builders on scheduling, technology, and running a smarter building operation.",
};

const posts = [
  {
    slug: "lock-awarded-vendor-bids-home-builders",
    title: "Lock the Price After Award: Protecting Vendor Bids From Cost Drift",
    excerpt:
      "Once a vendor accepts an award, the price should be a record — not a suggestion. Locked bids in Cornerstone PM freeze the agreed number so neither the builder nor the vendor can revise it after acceptance, turning an awarded quote into a durable cost basis for every downstream budget line and purchase order.",
    date: "August 31, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    heroImage: "/blog/lock-awarded-vendor-bids-home-builders.png",
  },
  {
    slug: "auto-po-task-completion-construction-purchasing",
    title: "Task Complete, PO Sent: How Production Builders Automate Their Purchasing Loop",
    excerpt:
      "When a schedule task is marked complete in Cornerstone, the purchase order generates itself, emails the vendor, and posts to QuickBooks as a commitment — without anyone opening the purchasing screen. How auto-POs eliminate the hand-off gap between scheduling and purchasing.",
    date: "August 30, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    heroImage: "/blog/auto-po-task-completion-construction-purchasing.png",
  },
  {
    slug: "what-is-a-production-home-builder",
    title: "What Is a Production Home Builder? The Five Workflows That Set Them Apart",
    excerpt:
      "A production home builder sells homes from a fixed catalog of floorplans and builds the same designs repeatedly across communities. Understanding the five defining workflows — plan repeats, community management, buyer design center, vendor bidding, and template scheduling — is the starting point for choosing software that actually fits the business model.",
    date: "August 29, 2026",
    readTime: "6 min read",
    tag: "Getting Started",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/production-builder-software.png",
  },
  {
    slug: "ai-mls-listing-sheet-spec-homes-home-builders",
    title: "Your Spec Home Already Wrote Its Own MLS Listing",
    excerpt:
      "Room dimensions, structural upgrades, and design selections already live in your build data. A one-click AI listing sheet pulls all of it — Blueprint AI room dimensions, community info, design center selections by category — and writes unique MLS copy for every spec home, with a word-count slider from 50 to 1,000 words. No re-keying, no research task, no calls to the design coordinator.",
    date: "August 28, 2026",
    readTime: "6 min read",
    tag: "Sales",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/ai-mls-listing-sheet.png",
  },
  {
    slug: "notion-airtable-vs-cornerstone-home-builder-software",
    title: "Notion and Airtable vs. Purpose-Built Home Builder Software",
    excerpt:
      "Notion and Airtable can model almost anything — communities, lots, vendors, tasks. And then the framing trade slips three days, nobody downstream is notified, and the purchase order still has to be typed by hand into QuickBooks. What flexible workspaces cannot do for production home builders, no matter how the database is structured.",
    date: "August 27, 2026",
    readTime: "7 min read",
    tag: "Comparisons",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/notion-airtable-vs-builder-software.png",
  },
  {
    slug: "permitting-pipeline-sales-to-construction-handoff-home-builders",
    title: "The Sales-to-Construction Handoff Is Where Home Builders Lose Two Weeks",
    excerpt:
      "Sales marks a home sold and considers the deal closed. Construction isn't yet aware — and a signed contract sits while nobody builds the schedule. How a permitting pipeline with an auto-transition trigger, urgency badges, and one-click template setup closes the gap between contract and first trade on the lot.",
    date: "August 26, 2026",
    readTime: "7 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/permitting-pipeline-handoff.png",
  },
  {
    slug: "vendor-insurance-coi-expiration-tracking-home-builders",
    title: "Vendor Insurance Tracking: How to Stop Letting Expired COIs Onto Your Jobsite",
    excerpt:
      "Most builders discover that a subcontractor's COI lapsed either during a random audit or after an incident — neither is a good system. Automated 30-day expiration notices, a no-login vendor portal for certificate uploads, and an admin dashboard that surfaces non-compliant trades before scheduling decisions remove the spreadsheet entirely.",
    date: "August 25, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/vendor-insurance-coi-tracking.png",
  },
  {
    slug: "home-builder-software-implementation-timeline-week-one",
    title: "What Week One on New Home Builder Software Actually Looks Like",
    excerpt:
      "The fear of a six-month implementation is the single biggest reason builders stay on software they already dislike. A realistic day-by-day look at what week one on modern home builder software actually involves: AI data import, community setup, schedule templates, bid requests out to vendors, QuickBooks connected, and the design center live — before week two starts.",
    date: "August 24, 2026",
    readTime: "7 min read",
    tag: "Getting Started",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/implementation-timeline-week-one.png",
  },
  {
    slug: "planswift-stack-takeoff-vs-cornerstone-ai-takeoff",
    title: "PlanSwift and STACK vs Cornerstone: A Takeoff Tool Is Not a Build System",
    excerpt:
      "PlanSwift and STACK are mature, precise measuring tools — and that is exactly the limit. A quantity list is where the job starts, not where it ends. For production home builders, the gap between a measure and a purchase order in QuickBooks runs through vendor bids, community-level awards, a design center, and auto-generated POs. None of those live in a takeoff tool.",
    date: "August 23, 2026",
    readTime: "7 min read",
    tag: "AI Takeoff",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/planswift-stack-vs-cornerstone.png",
  },
  {
    slug: "design-center-appointment-process-home-builders",
    title: "How to Run a Design Center Appointment Without Losing the Budget",
    excerpt:
      "A design center appointment should end with a signed selection sheet that flows into the budget — not a PDF someone re-keys two days later. The step-by-step process: prep with community spec levels, anchor on designer packages, use exclusion groups to prevent impossible selections, promote standard finishes to paid upgrades with one spec-level change, and close with real vendor pricing in the running total.",
    date: "August 22, 2026",
    readTime: "7 min read",
    tag: "Design Center",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/design-center-appointment.png",
  },
  {
    slug: "estimator-leaves-tribal-knowledge-home-builder-software",
    title: "What Happens to Your Budgets When Your Estimator Quits",
    excerpt:
      "One veteran holds the pricing logic, the vendor relationships, the waste factors, and the reason cell G47 has a hardcoded number nobody touches. Their notice period is two weeks and the knowledge is not in the file. How builders de-risk estimating tribal knowledge with a structural system that outlasts any one person.",
    date: "August 21, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/estimator-tribal-knowledge.png",
  },
  {
    slug: "floorplan-locations-room-by-room-takeoff-home-builders",
    title: "A Takeoff That Knows Which Room the Material Goes In",
    excerpt:
      "Most takeoffs hand you one flooring number for the entire house. The moment a buyer picks tile in the baths, LVP in the great room, and carpet in the bedrooms, that number is useless. Room-level floorplan locations attach quantities to actual rooms so every design center selection, structural option, and purchase order resolves to the right place automatically.",
    date: "August 20, 2026",
    readTime: "6 min read",
    tag: "AI Takeoff",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/floorplan-locations-takeoff.png",
  },
  {
    slug: "quickbooks-transaction-memos-job-costing-detail-home-builders",
    title: 'Your QuickBooks Register Says "Purchase Order 4471." That Tells You Nothing.',
    excerpt:
      "Most construction tools push a bare dollar total to QuickBooks and leave the context behind — so month-end becomes a reconstruction project. How community, lot, address, PO number, and cost code on every synced transaction make job costing traceable from inside QBO without opening Cornerstone.",
    date: "August 19, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/quickbooks-transaction-memos.png",
  },
  {
    slug: "same-floorplan-two-communities-different-costs-home-builders",
    title: "Same Floorplan, Two Communities, Two Different Costs",
    excerpt:
      "The framer who won Riverdale lost Oakmont, the lots are different sizes, and the sales tax rates are not the same. A single global cost per plan is wrong in at least two of every three communities. How production builders price one floorplan correctly across many communities with community-assigned vendor awards, scope-first area costs, and per-community design center pricing.",
    date: "August 18, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/same-floorplan-two-communities.png",
  },
  {
    slug: "smartsheet-vs-cornerstone-home-builder-construction",
    title: "Smartsheet vs Cornerstone PM: A Grid Is Not a Building System",
    excerpt:
      "Smartsheet is better than a shared Excel file — shared views, real-time updates, automations, dashboards. But a grid stores rows; it doesn't know what a floorplan is, what a spec level means, or that picking Carpet excludes Tile. Six specific places where the spreadsheet-grid approach runs out for production home builders, and what purpose-built looks like instead.",
    date: "August 17, 2026",
    readTime: "7 min read",
    tag: "Comparisons",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/smartsheet-vs-cornerstone.png",
  },
  {
    slug: "plan-set-to-purchase-order-ai-takeoff-home-builders",
    title: "From Plan Set to Purchase Order: The Five Handoffs That Break",
    excerpt:
      "Between a floor plan PDF and a paid vendor there are five handoffs — takeoff, budget, bid, award, PO — and each one is a place where a number gets retyped by hand. Every retype is an opportunity to lose money. AI takeoff and purchasing automation that carry quantities all the way through without asking anyone to type them again.",
    date: "August 16, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/plan-set-to-purchase-order.png",
  },
  {
    slug: "bulk-create-design-options-parts-catalog-home-builders",
    title: "Building a 400-Option Design Center Without Typing 400 Options",
    excerpt:
      "Hand-keying several hundred options across flooring, cabinets, countertops, and plumbing is the reason most builders stall before the design center goes live. Bulk-create options straight from the parts catalog or scope items in one step — the option inherits its name, unit, scope, and real vendor pricing automatically.",
    date: "August 15, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/bulk-create-design-options.png",
  },
  {
    slug: "model-home-qr-lead-capture-home-builder-sales",
    title: "The Model Home Sign-In Sheet Is Costing You Leads",
    excerpt:
      "A QR code at the model home entrance captures every walk-in as a named, attributed lead the moment they scan — community, floorplan, date, and rep assignment included. No clipboard, no transcription delay, no cold call two days later when the buyer has already moved on.",
    date: "August 14, 2026",
    readTime: "5 min read",
    tag: "Sales",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/model-home-qr-lead-capture.png",
  },
  {
    slug: "vendor-jobsite-qr-check-in-gps-weather-home-builders",
    title: "Vendor Jobsite QR Check-In: Proof of Who Was on the Lot, and When",
    excerpt:
      "A QR code on the lot turns every vendor visit into a GPS-stamped, weather-logged, timestamped record — no app download, no Cornerstone login, and no way to scan from three miles away. The framer-swears-he-was-there argument ends with a permanent record that proves it.",
    date: "August 13, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/vendor-jobsite-qr-checkin.png",
  },
  {
    slug: "construction-software-user-seats-who-needs-a-login",
    title: "Who Actually Needs a Login? Rethinking Construction Software Seats",
    excerpt:
      "Per-seat pricing punishes you for looping in your trades. Subcontractors submit bids through a token portal with no account, vendors receive POs by email, and buyers move through the design center without a license — so seat costs stay limited to the five internal roles that open the app every day.",
    date: "August 12, 2026",
    readTime: "6 min read",
    tag: "Platform",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/construction-software-user-seats.png",
  },
  {
    slug: "construction-notification-preferences-role-based-alerts-home-builders",
    title: "Notification Overload: Role-Based Alerts for Construction Teams",
    excerpt:
      "When everyone gets every alert, nobody reads any of them. The fix is per-user notification preferences and role subscriptions — superintendents see schedule cascades, purchasing sees bid activity, sales sees leads, and vendors only get emails about their own changed dates.",
    date: "August 11, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/construction-notification-preferences.png",
  },
  {
    slug: "uda-constructiononline-vs-cornerstone-production-home-builder",
    title: "UDA ConstructionOnline vs Cornerstone PM for Production Builders",
    excerpt:
      "UDA ConstructionOnline is a mature platform for custom builders and remodelers. Production home builders who repeat the same floorplans across communities need plan-level option pricing, a production design center with Designer Packages, community vendor awards, and one-way QuickBooks sync — a different architecture entirely.",
    date: "August 9, 2026",
    readTime: "7 min read",
    tag: "Comparisons",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/uda-constructiononline-vs-cornerstone.png",
  },
  {
    slug: "why-subcontractors-ignore-bid-requests-home-builders",
    title: "Why Your Subcontractors Ignore Your Bid Requests",
    excerpt:
      "If half your bid invites go unanswered, the problem is almost always friction — not the vendors. Five specific reasons subs skip your requests (account creation, unsorted plan sets, blank spreadsheets, no tracking, fuzzy deadlines) and how removing each one lifts response rates without a single phone call.",
    date: "August 8, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/subcontractors-ignore-bid-requests.png",
  },
  {
    slug: "ai-scope-of-work-generation-subcontractors-home-builders",
    title: "Stop Writing Scopes of Work From Scratch: AI-Generated SOWs",
    excerpt:
      "A vague scope of work is a change order waiting to happen. Foreman AI generates trade-specific SOWs from the scope items and awarded vendor pricing you already have — so the inclusions and exclusions match what was actually bid, not a copied template.",
    date: "August 7, 2026",
    readTime: "6 min read",
    tag: "Foreman AI",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/ai-scope-of-work-generation.png",
  },
  {
    slug: "bid-leveling-side-by-side-vendor-comparison-home-builders",
    title: "Bid Leveling: How to Compare Vendor Quotes Apples-to-Apples",
    excerpt:
      "One vendor quotes a lump sum. One breaks out labor and material differently. One attaches a PDF with assumptions you can't decode. Bid leveling ends the two-hour spreadsheet reconciliation by putting every quote on the same scope-item lines — side-by-side, with locked pricing once you award.",
    date: "August 4, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/bid-leveling-vendor-comparison.png",
  },
  {
    slug: "construction-schedule-templates-home-builders",
    title: "Schedule Templates: Build the Plan Once, Run It on Every Home",
    excerpt:
      "Production builders repeat the same floorplans — so rebuilding a 120-task schedule from scratch for every start is pure waste. Define a schedule template once per floorplan, apply it to every home, and let cascade scheduling and auto-generated POs handle the rest.",
    date: "August 1, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/construction-schedule-templates.png",
  },
  {
    slug: "premier-construction-software-vs-cornerstone-home-builders",
    title: "Premier Construction Software vs Cornerstone: Accounting-First vs Build-First",
    excerpt:
      "Premier is a genuine accounting-first ERP built for commercial GCs who want to replace their general ledger. Production home builders already run QuickBooks — they need a design center, AI takeoff, and vendor bidding. Cornerstone connects to the books instead of replacing them.",
    date: "July 31, 2026",
    readTime: "7 min read",
    tag: "Comparisons",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    heroImage: "/blog/premier-vs-cornerstone.png",
  },
  {
    slug: "construction-chart-of-accounts-cost-codes-home-builders",
    title: "A Construction Chart of Accounts That Ties to Your Cost Codes",
    excerpt:
      "Most builders inherit a generic chart of accounts from a generalist bookkeeper — one big COGS bucket and a stack of journal entries every month. The fix: a COA that maps one-to-one with your cost codes, wired to your purchasing workflow, so every PO and bill routes to the right account with community, lot, and cost code in the memo.",
    date: "July 30, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/construction-chart-of-accounts.png",
  },
  {
    slug: "punch-list-management-home-builders-ai",
    title: "Punch Lists Without the Clipboard: AI Punch List Management",
    excerpt:
      "A superintendent walks a home, snaps twenty photos, and the punch list dies in the camera roll. Foreman AI reads your jobsite photos, drafts the punch items, assigns them to the right trade, and writes real task records in the platform — no clipboard, no re-keying.",
    date: "July 29, 2026",
    readTime: "6 min read",
    tag: "Foreman AI",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/punch-list-management-ai.png",
  },
  {
    slug: "change-order-management-production-home-builders",
    title: "Change Order Management for Production Home Builders",
    excerpt:
      "Change orders priced from accepted vendor bids, approved in-platform, and synced one-way to QuickBooks automatically — with community, lot, address, PO number, and cost code in every memo. No re-keying, no CSV exports, and one honest source of truth.",
    date: "July 28, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/change-order-management-home-builders.png",
  },
  {
    slug: "home-builder-design-center-software-what-it-should-do",
    title: "What Home Builder Design Center Software Should Actually Do",
    excerpt:
      "A buyer-facing selections list is not a design center. The real bar: spec-level control down to a single option, exclusion groups that make conflicting picks impossible, 64 Designer Packages that auto-lock coordinated finishes, and upgrade prices that trace back to accepted vendor bids — not estimator guesses.",
    date: "July 27, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/home-builder-design-center-software.png",
  },
  {
    slug: "jobtread-vs-cornerstone-production-home-builder",
    title: "JobTread vs Cornerstone: Job-by-Job Estimating vs Production Building",
    excerpt:
      "JobTread is a solid estimating tool for custom builders and GCs — but production home builders need a fundamentally different data model. Cornerstone PM is built around plan repeats, community-assigned vendor awards, auto-generated POs, and a full buyer design center that job-by-job tools can't match.",
    date: "July 26, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/jobtread-vs-cornerstone.png",
  },
  {
    slug: "cascade-scheduling-construction-delays-home-builders",
    title: "When One Trade Slips: Cascade Scheduling for Home Builders",
    excerpt:
      "When framing runs three days late, every downstream trade is now on the wrong date. Cornerstone PM's cascade scheduling auto-adjusts the full dependency chain and notifies affected vendors automatically — so one delay doesn't become a morning of phone calls.",
    date: "July 25, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/cascade-scheduling-home-builders.png",
  },
  {
    slug: "quickbooks-sync-audit-trail-construction-accounting",
    title: "A QuickBooks Sync You Can Audit: Sync Events and Clean Transaction Memos",
    excerpt:
      "Most accounting integrations are a black box — data goes in and bookkeepers pray. Cornerstone PM logs every QuickBooks push in a real-time Sync Events audit trail and stamps each PO, bill, and change order with community, lot, PO number, and cost code so any transaction is traceable in seconds.",
    date: "July 24, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/quickbooks-sync-audit-trail.png",
  },
  {
    slug: "vendor-payment-schedules-net-terms-semi-monthly-home-builders",
    title: "Vendor Payment Schedules for Home Builders: Net Terms to Semi-Monthly",
    excerpt:
      "Set a payment schedule per vendor — Net-X, weekly, bi-weekly, monthly, or semi-monthly — and every bill that syncs to QuickBooks gets its due date computed automatically. One batch-pay run on payday replaces a pile of individual invoice approvals.",
    date: "July 23, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/vendor-payment-schedules-home-builders.png",
  },
  {
    slug: "home-builder-accounting-project-management-one-platform",
    title: "One Platform for Home Builder Accounting and Project Management",
    excerpt:
      "Most production builders run takeoff, design, purchasing, and accounting across four separate systems that never agree at month-end. Cornerstone PM unites all of it — Blueprint AI takeoff, a buyer-facing design center, automated vendor bidding, and one-way QuickBooks sync — so every dollar traces from blueprint to bookkeeper in a single source of truth.",
    date: "July 22, 2026",
    readTime: "6 min read",
    tag: "Platform",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/home-builder-accounting-project-management.png",
  },
  {
    slug: "buildermt-vs-cornerstone-production-home-builder",
    title: "BuilderMT vs Cornerstone PM: Production Home Builder Software",
    excerpt:
      "BuilderMT is a production home builder ERP suite that requires consultants, integrators, and months to implement. Cornerstone PM is the modern all-in-one alternative — AI takeoff, a buyer-facing design center, automated vendor bidding, and native QuickBooks sync in a single platform that goes live in days, not months.",
    date: "July 21, 2026",
    readTime: "8 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/buildermt-vs-cornerstone.png",
  },
  {
    slug: "scope-first-budgeting-organize-costs-by-trade-home-builders",
    title: "Scope-First Budgeting: Every Cost Filed Under Its Trade",
    excerpt:
      "In Cornerstone PM, you pick the trade first — then add costs to it. Scope-filtered pickers prevent miskeying, every Part and Scope Item is priced from accepted vendor bids, and Allowances serve as honest placeholders for un-bid line items. Every dollar traces to a real source.",
    date: "July 20, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/scope-first-budgeting.png",
  },
  {
    slug: "automatic-sales-tax-materials-labor-exempt-construction",
    title: "Automatic Sales Tax on Materials (Labor Stays Exempt)",
    excerpt:
      "Cornerstone PM automatically applies sales tax to material lines and keeps labor exempt on every purchase order and change order — then carries the exact tax amount into QuickBooks with the synced transaction. No manual splits, no re-keying, no month-end cleanup.",
    date: "July 14, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/automatic-sales-tax-materials.png",
  },
  {
    slug: "quickbooks-purchase-order-bill-accrual-home-builders",
    title: "Two-Stage QuickBooks Sync: How POs Become Bills Automatically",
    excerpt:
      "When a PO is sent in Cornerstone, it posts to QuickBooks as a Purchase Order commitment. When the PO is marked received, the matching Bill auto-creates, links to the PO, and closes it — a complete accrual lifecycle with zero manual steps and no dangling open POs.",
    date: "July 13, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/quickbooks-purchase-order-bill-accrual.png",
  },
  {
    slug: "jobtread-vs-cornerstone-pm-production-home-builders",
    title: "JobTread vs Cornerstone PM: Which Is Built for Production Home Builders?",
    excerpt:
      "JobTread is a polished tool for custom builders and remodelers — but it has no floorplan model, no plan-repeat engine, no community/lot hierarchy, and no buyer-facing design center. Here's an honest comparison of where each platform fits, and why the data model is the deciding factor.",
    date: "July 12, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/jobtread-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-build-area-costs-by-chat-construction",
    title: "Ask Foreman AI to Build Your Budget: Area Costs by Chat",
    excerpt:
      "Foreman AI creates scope-first area costs by chat — picking the right trade, adding scope-filtered Parts and Scope Items, and leaving everything at $0 / needs pricing until real vendor bids arrive. The hard-cost rule holds whether a human or Foreman builds the structure.",
    date: "July 11, 2026",
    readTime: "6 min read",
    tag: "AI",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-ai-area-costs-by-chat.png",
  },
  {
    slug: "hard-cost-rule-vendor-priced-budgets-no-fudging",
    title: "Every Dollar Traces Back to an Awarded Bid: The Hard-Cost Rule",
    excerpt:
      "Cornerstone PM stores no default or made-up costs. Every line in the Master Cost Budget is priced from accepted vendor pricing — and a line with no awarded bid shows $0 / needs pricing instead of a fabricated number. Here's why that matters for margin protection, lender draws, and buyer trust.",
    date: "July 10, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/hard-cost-rule-vendor-priced.png",
  },
  {
    slug: "sage-300-cre-vs-cornerstone-home-builder-software",
    title: "Sage 300 CRE vs. Cornerstone: When You Don't Need a Construction ERP",
    excerpt:
      "Sage 300 CRE is powerful accounting-first ERP built for large commercial GCs — but for production home builders running 20–200 homes per year, it's the wrong tool. No design center, no floorplan model, and an 18-month implementation timeline. Here's an honest comparison, including where Sage still wins.",
    date: "July 9, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/sage-300-cre-vs-cornerstone.png",
  },
  {
    slug: "stop-double-entering-pos-quickbooks-home-builders",
    title: "Stop Double-Entering POs into QuickBooks: The Hidden Cost of Manual AP",
    excerpt:
      "Re-keying every PO, bill, and vendor into QuickBooks by hand costs home builders 300+ hours per year in pure overhead — and that's before you count the errors. Cornerstone PM's one-way QuickBooks sync ends the loop: approved POs, change orders, bills, and vendors post automatically with clean memos and zero re-keying.",
    date: "July 8, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/stop-double-entry-quickbooks.png",
  },
  {
    slug: "auto-bill-batch-pay-construction-accounts-payable",
    title: "Auto-Bill on Completion, Then Batch-Pay on Payday: The AP Loop for Builders",
    excerpt:
      "Mark a PO received in Cornerstone and it automatically creates the matching bill in QuickBooks, closes the PO, and sets the due date by your AP schedule — so on payday you batch-pay everyone in one approval run inside QuickBooks, not twelve separate bills. Five schedule types, clean memos, and a permanent human pay gate.",
    date: "July 7, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/auto-bill-batch-pay-ap.png",
  },
  {
    slug: "quickbooks-online-sync-home-builder-construction",
    title: "How Cornerstone Syncs to QuickBooks Online — Automatically, One Direction",
    excerpt:
      "Approved POs, change orders, bills, and vendors post themselves to QuickBooks Online automatically — no manual entry, no CSV exports. One-way sync keeps Cornerstone as your source of truth while real job costing maps each Community to a QBO Customer and each Home to a Project for per-home P&L.",
    date: "July 6, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/quickbooks-online-sync-construction.png",
  },
  {
    slug: "quickbooks-online-home-builder-auto-sync",
    title: "QuickBooks Online for Home Builders: Auto-Sync, Auto-Bill, and Real Job Costing",
    excerpt:
      "Cornerstone PM syncs to QuickBooks Online automatically — one-way. Approved POs, change orders, bills, and vendors post to QBO without manual entry. Real job costing maps each Community to a QBO Customer and each Home to a Project, so per-home P&L lives in QuickBooks without setup.",
    date: "July 5, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/quickbooks-home-builder-integration.png",
  },
  {
    slug: "home-builder-sales-pipeline-crm-software",
    title: "From Lead to Locked Lot: A Sales Pipeline Built for Home Builders",
    excerpt:
      "Generic CRMs don't know what a lot, a spec home, or a buyer selection is. Cornerstone PM's sales pipeline is wired directly into lots, floorplans, and communities — so a locked lot automatically becomes an active home in the build pipeline, buyer data flows to the Design Center, and scheduling starts without anyone re-keying a field.",
    date: "July 4, 2026",
    readTime: "6 min read",
    tag: "Sales",
    tagColor: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    heroImage: "/blog/home-builder-sales-pipeline.png",
  },
  {
    slug: "marksystems-vs-cornerstone-production-builder",
    title: "MarkSystems vs. Cornerstone PM: Production Builder Software Compared",
    excerpt:
      "MarkSystems is a long-established production home builder ERP — but it carries the implementation timeline, enterprise pricing, and legacy-stack overhead that comes with that territory. Here's an honest comparison across the dimensions that matter most for 20–200 home-per-year builders: implementation speed, AI capabilities, design center depth, and pricing transparency.",
    date: "July 3, 2026",
    readTime: "8 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/marksystems-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-profitability-budget-reports-vendor-scorecards",
    title: "AI Job Costing: Profitability Reports and Vendor Scorecards on Demand",
    excerpt:
      "Most builders pull margin numbers by hand — export the budget, paste it into Excel, build pivot tables, email a PDF. By the time it lands, the data has already moved. Foreman AI reads your live Master Cost Budget and generates profitability reports, vendor scorecards, and bid comparisons in seconds. No export, no spreadsheet, no waiting.",
    date: "July 2, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-ai-profitability-reports.png",
  },
  {
    slug: "real-vendor-pricing-no-estimator-fudging",
    title: "Every Line Item Is Real: Construction Budgets Without Estimator Fudging",
    excerpt:
      "Filler pricing — round numbers, synthetic labor splits, estimates copied from last year — quietly erodes margin across every home you build. Cornerstone PM removed filler pricing app-wide: every material line traces to a Blueprint AI takeoff part, every labor line traces to a real awarded vendor bid. No more guessing.",
    date: "July 1, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/real-vendor-pricing-no-fudging.png",
  },
  {
    slug: "community-vendor-bid-awards-not-lowest-bid",
    title: "Why Lowest-Bid Auctions Hurt Home Builders (and What We Do Instead)",
    excerpt:
      "Lowest-bid logic ignores the vendor relationships that keep production schedules running. Cornerstone PM lets you award by community — one vendor for Community A, another for Community B — and locks pricing the moment you accept. No auction race, no silent revisions, no margin erosion after the fact.",
    date: "June 30, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/community-vendor-bid-awards.png",
  },
  {
    slug: "foreman-ai-agent-takes-actions-not-chatbot",
    title: "It's Not a Chatbot, It's an Agent: AI That Actually Runs Your Build",
    excerpt:
      "Most construction AI just answers questions. Foreman reads and writes your live Cornerstone PM data — editing design options, updating vendor pricing, and running multi-step purchasing workflows on your behalf. That's the difference between a chatbot and an AI agent.",
    date: "June 29, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-ai-agent-takes-actions.png",
  },
  {
    slug: "ai-mls-listing-generator-home-builders",
    title: "MLS Listing Generator: How Foreman AI Writes Your Home Listings From Floorplan Data",
    excerpt:
      "Every production builder writes the same plan 40 times — and drafts the listing from scratch 40 times. Cornerstone PM's AI MLS Listing Generator pulls bedroom count, square footage, designer packages, and community data directly from your account and turns it into ready-to-paste listing copy in under 60 seconds.",
    date: "June 28, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/ai-mls-listing-generator.png",
  },
  {
    slug: "option-classes-scope-linked-design-options-home-builders",
    title: "Option Classes: Linking Design Selections to Scopes and Budgets Automatically",
    excerpt:
      "In most construction software, design selections and cost tracking are completely disconnected. A buyer upgrades to Premium Cabinets — and someone manually updates the budget, the scope, and the bid request. Cornerstone PM's Option Classes wire those three things together automatically: one buyer choice, one update, no reconciliation.",
    date: "June 27, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/option-classes-scope-linking.png",
  },
  {
    slug: "true-cost-of-spreadsheet-budgets-home-builders",
    title: "The True Cost of Running Your Build on Spreadsheets",
    excerpt:
      "Spreadsheet budgets don't just waste time — they leak margin. Version conflicts, broken formulas, allowance drift, and the absence of any audit trail quietly erode the financial integrity of every home you build. Here's what that actually costs, and how purpose-built purchasing software replaces it.",
    date: "June 26, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/spreadsheet-budget-true-cost.png",
  },
  {
    slug: "houzz-pro-vs-cornerstone-production-home-builder",
    title: "Houzz Pro vs. Cornerstone PM: Why Production Builders Outgrow a Designer-First Tool",
    excerpt:
      "Houzz Pro is a strong tool for interior designers and remodelers — but it was never built for a production home builder selling the same plan 40 times a year. When you map Houzz Pro's feature set against floorplans, options, vendor bids, and a buyer-facing design center, the gaps are impossible to ignore. Here's an honest look at where each tool fits — and where Houzz Pro ends.",
    date: "June 25, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/houzz-pro-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-vision-jobsite-photo-analysis-construction",
    title: "Point Your Phone at a Problem: How Foreman AI Reads Jobsite Photos, Floor Plans, and Product Images",
    excerpt:
      "Foreman AI vision reads the photos you already take — floor plans, product shots, jobsite issues — and turns them into structured construction data and real actions inside Cornerstone PM. Drop an image into the chat and Foreman analyzes the content, not just stores it.",
    date: "June 24, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-vision.png",
  },
  {
    slug: "construction-allowances-master-cost-budget-home-builders",
    title: "Construction Allowances Done Right: Placeholder Budgets That Flow Into Your Real Cost Plan",
    excerpt:
      "Every production builder has line items in the budget that don't have real vendor pricing yet — appliances, landscaping, specialty fixtures. Most software forces a workaround: sticky notes, fake bids, or manual spreadsheet entries that drift out of sync. Cornerstone PM's Allowances system gives placeholders a real budget slot, applies them per floorplan or globally, and automatically replaces them when the real bid arrives.",
    date: "June 23, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/construction-allowances.png",
  },
  {
    slug: "construction-ai-knowledge-base-estimating-formulas",
    title: "Inside Foreman's Brain: The Knowledge Base Behind Construction AI That Actually Helps",
    excerpt:
      "Foreman AI isn't a thin chatbot wrapper. A 24,500-word knowledge base, 39 estimating formulas, and 396+ skills power construction answers that are actually correct — then turn those answers into real actions in your data. Here's what's inside Foreman's brain, how the estimating formulas work, and why domain grounding beats confident-sounding hallucination every time.",
    date: "June 22, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-knowledge-base.png",
  },
  {
    slug: "asana-vs-home-builder-construction-software",
    title: "Asana for Construction? Why Home Builders Need Purpose-Built Software",
    excerpt:
      "Asana is a strong generic task tool — but it has no concept of a takeoff, scope item, vendor bid, or design center. Home builders who try to run their build on Asana end up maintaining a stack of spreadsheets alongside it. Here's exactly where generic PM breaks for production builders, and what a platform built for your workflow looks like instead.",
    date: "June 21, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/asana-vs-home-builder.png",
  },
  {
    slug: "designer-packages-curated-selections-home-builders",
    title: "Designer Packages: Curated Selections That Sell Homes Faster",
    excerpt:
      "Hand a buyer 300 raw options and you hand them a decision paralysis problem. Cornerstone PM's Designer Packages flip the script: 64 curated, pre-priced design bundles across 7 categories — pick Modern Farmhouse, and every category auto-locks to that coordinated look. One decision. Real vendor pricing behind every item.",
    date: "June 20, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/designer-packages.png",
  },
  {
    slug: "construction-software-data-export-backup-no-lock-in",
    title: "Own Your Data: CSV/JSON Export and Nightly Backups in Construction Software",
    excerpt:
      "Your construction data belongs to you — and Cornerstone PM makes that more than a legal promise. Every Admin gets one-click full database export in CSV or JSON, nightly auto-backups retained for 7 days, and on-demand manual snapshots. No export fee, no support ticket, no hostage-taking.",
    date: "June 16, 2026",
    readTime: "6 min read",
    tag: "Platform",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/data-export-backup.png",
  },
  {
    slug: "mcp-server-construction-software-claude-cursor",
    title: "MCP Server for Construction Software: Connect Claude, Cursor, and Windsurf to Your Builder Data",
    excerpt:
      "Cornerstone PM ships a built-in MCP server so Claude Desktop, Cursor, and Windsurf can connect directly to your construction data and 396+ Foreman skills — all with a ready-to-paste config block and a cst_-prefixed API key. No other construction platform has this.",
    date: "June 15, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/mcp-server-construction.png",
  },
  {
    slug: "hidden-cost-switching-construction-software-migration",
    title: "The Hidden Cost of Switching Construction Software (and How to Kill It)",
    excerpt:
      "The real cost of switching isn\u2019t the new subscription \u2014 it\u2019s the migration: weeks of parallel systems, a consultant to map your data, and the fear that your history arrives broken. Cornerstone PM\u2019s AI migration wizard collapses that entire process into ten minutes and about a penny. Here\u2019s what the hidden costs actually look like, why migration friction is manufactured, and how to eliminate it.",
    date: "June 14, 2026",
    readTime: "7 min read",
    tag: "Platform",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    heroImage: "/blog/switching-cost-migration.png",
  },
  {
    slug: "bid-import-ai-takeoff-pricing-modes",
    title: "Bid Import AI: Takeoff-Only, Pricing-Only, or Both \u2014 Without Duplicates",
    excerpt:
      "Builders re-import vendor bids constantly as numbers change, and legacy tools either duplicate line items or misplace \u2018Drywall\u2019 inside \u2018Electrical.\u2019 Cornerstone\u2019s Bid Import AI fixes both: three targeted import modes, cross-scope penalty matching so trades stay in their lane, and pricing that replaces instead of duplicating on re-import. Your Master Cost Budget stays clean through every re-bid cycle.",
    date: "June 12, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/bid-import-ai.png",
  },
  {
    slug: "promote-standard-finish-to-upgrade-design-center",
    title: "How to Turn Any Standard Finish Into a Paid Upgrade in Your Design Center",
    excerpt:
      "Most design-center tools only let you toggle whole categories as included or not. Cornerstone PM goes down to the individual option: open the option, change its Spec Level to Upgrade I, II, or Premium, save\u2014and it drops out of the base price instantly. One change, propagated to every plan and every community at once.",
    date: "June 11, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/standard-to-upgrade.png",
  },
  {
    slug: "construction-ai-context-memory-long-sessions",
    title: "Why Most Construction AI Forgets \u2014 and How Foreman Doesn\u2019t",
    excerpt:
      "Most construction AI tools hit a context wall mid-task and silently degrade\u2014or crash. Foreman AI uses built-in memory compaction to survive 200+ option cleanups, full catalog imports, and marathon purchasing sessions. It\u2019s paired with a real-time context health meter and per-user memory that carries your preferences across every session.",
    date: "June 10, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-context-memory.png",
  },
  {
    slug: "enterprise-multi-division-home-builder-software",
    title: "Multi-Division Home Builder Software: How Cornerstone PM Enterprise Works",
    excerpt:
      "Enterprise doesn\u2019t mean stripped-down features and a call-for-pricing black box. Cornerstone PM Enterprise gives every division the full Pro+ platform\u2014REST API, BYOA, 396+ Foreman skills, 60 seats\u2014plus a corporate layer with a division switcher, cross-division analytics, and an X-Division-Id scoped API. $500/division/mo for the first five.",
    date: "June 9, 2026",
    readTime: "7 min read",
    tag: "Enterprise",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/enterprise-multi-division.png",
  },
  {
    slug: "knowify-vs-cornerstone-production-home-builder",
    title: "Knowify vs Cornerstone PM: Trade Contractor Tool vs Production Home Builder Platform",
    excerpt:
      "Knowify is a solid platform for trade contractors doing job costing, AIA billing, and subcontract management. But production home builders need a fundamentally different category of tool: floorplan-level options pricing, 64 Designer Packages, exclusion groups, auto-quantity scope items, and Foreman AI with 396+ skills. Here\u2019s the honest comparison.",
    date: "June 8, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/knowify-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-product-image-web-scraping",
    title: "Foreman AI Finds the Product, Hosts the Image, and Attaches It in One Breath",
    excerpt:
      "Every design team has the same problem: you paste an image link from a supplier site and six months later it's dead. Foreman AI searches for the product image, saves it to permanent hosted storage, and attaches it to your design option — all in one instruction. Anti-bot web scraping included.",
    date: "June 7, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-product-image-search.png",
  },
  {
    slug: "vendor-bid-requests-portal-no-login",
    title: "Send a Bid Request to 10 Vendors in One Click (No Vendor Login Required)",
    excerpt:
      "Most construction bid workflows involve a chain of manual steps: email a spreadsheet, wait for a reply, re-format the numbers, compare manually. Cornerstone PM replaces that entire chain — scope-filtered Excel templates auto-generated per vendor, a no-login portal for submission, and side-by-side comparison when two or more bids land.",
    date: "June 6, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/vendor-bid-requests-portal.png",
  },
  {
    slug: "crm-migration-wizard-switch-construction-software",
    title: "Switching Construction Software Without the Migration Tax",
    excerpt:
      "Migration is the #1 reason builders stay on software they hate. Cornerstone PM\u2019s AI migration wizard imports contacts, vendors, and project history from Buildertrend, JobTread, CoConstruct, or any CSV for roughly $0.01 \u2014 no consultant, no fee, no hostage-taking. Here\u2019s how it works and what to expect after you land.",
    date: "June 5, 2026",
    readTime: "7 min read",
    tag: "Platform",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/crm-migration-wizard.png",
  },
  {
    slug: "api-operations-construction-software-ai-agents",
    title:
      "238 API Operations: The Most Agent-Ready Construction Platform",
    excerpt:
      "Cornerstone PM exposes 238 total API operations to external AI agents \u2014 150+ REST endpoints, 84 dedicated routes, a generic execute surface for 396+ Foreman skills, and 37+ webhooks. Here is what that number actually means and why it is the most honest measure of an agent-ready platform.",
    date: "June 5, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/api-operations-238.png",
  },
  {
    slug: "webhook-events-construction-software-automation",
    title: "37 Webhook Events: The Automation Layer Most Construction Software Forgets",
    excerpt:
      "Most construction software lists \u2018webhooks\u2019 as a checkbox. Cornerstone PM ships 37 named events with typed payloads, HMAC-SHA256 signatures, delivery logs, and automatic retry \u2014 the infrastructure builders need to wire Twilio SMS, Bland voice calls, and CRM sync on top of their construction platform.",
    date: "June 4, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/webhook-events-automation.png",
  },
  {
    slug: "clickup-monday-construction-vs-home-builder-software",
    title: "ClickUp and monday.com for Home Builders: Where Generic PM Tools Break",
    excerpt:
      "ClickUp and monday.com promise \u2018works for any team\u2019 \u2014 but production home builders hit six hard walls no template can fix: no floorplan model, no options engine, no design center, no vendor bid templates, no community hierarchy, and no construction-domain AI. Here\u2019s exactly where generic PM breaks and what purpose-built looks like.",
    date: "June 2, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/vs-generic-pm.png",
  },
  {
    slug: "fieldwire-vs-cornerstone-pm-home-builder",
    title: "Fieldwire vs Cornerstone PM: Field App vs Production Builder Platform",
    excerpt:
      "Fieldwire is a field-operations app built for commercial punch lists, plan markups, and RFI workflows. Production home builders need something different: floorplans, per-plan options pricing, 64 Designer Packages, exclusion groups, AI takeoff, and Foreman AI with 396+ skills. Here\u2019s the honest comparison.",
    date: "May 31, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/vs-fieldwire.png",
  },
  {
    slug: "structural-options-pricing-floorplan-sqft",
    title: "Pricing Structural Options Across 12 Floorplans Without 12 Spreadsheets",
    excerpt:
      "If you have 12 floorplans and 5 structural options each, that\u2019s 60 footprint variants to price \u2014 and 240+ line items to update every time a trade rate changes. Sqft-linked auto-quantity scope items change the math: define frame labor cost per sqft once, and every floorplan, every structural option, every community updates in seconds.",
    date: "May 30, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/structural-options-sqft.png",
  },
  {
    slug: "design-center-exclusion-groups-pick-one",
    title: "Design Center Exclusion Groups: Let Buyers Pick One From Many",
    excerpt:
      "Production builders know the problem: if flooring is \u2018required\u2019, does the buyer need to pick Carpet AND Tile AND LVP AND Hardwood? Exclusion groups solve this \u2014 pick one flooring type and the entire category marks complete. No more phantom incompletes, no more broken progress dashboards.",
    date: "May 29, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/exclusion-groups.png",
  },
  {
    slug: "auto-quantity-scope-items-square-footage",
    title: "Auto-Quantity Scope Items: Stop Re-Entering Sqft on Every Floorplan",
    excerpt:
      "Auto-quantity scope items link directly to floorplan measurements — Under Air Sqft, Total Sqft, or Roof Squares — so every plan and structural option prices itself automatically. Define paint cost per sqft once. Cornerstone reprices every floorplan, every elevation, every structural option instantly.",
    date: "May 28, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/auto-quantity-scope-items.png",
  },
  {
    slug: "foreman-ai-memory-construction-software",
    title: "Foreman AI Memory: The First Construction AI That Doesn\u2019t Forget",
    excerpt:
      "Every other construction AI starts each session from a blank slate. Foreman AI runs two persistent memory layers \u2014 per-user (your role, vendors, communication style) and company-wide (vendor scorecards, recurring scope patterns) \u2014 so it knows your business before you type the first word. Plus: a context health meter and automatic compaction that handles marathon sessions no other construction AI survives.",
    date: "May 27, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/foreman-memory.png",
  },
  {
    slug: "cornerstone-pm-vs-jobnimbus-home-builder-software",
    title: "JobNimbus vs Cornerstone PM: Home Builder Software Compared",
    excerpt:
      "JobNimbus is the #1 roofing CRM, trusted by 6,000+ contractors \u2014 and it\u2019s excellent at what it does. But if you\u2019re a production home builder who landed here from a \u2018construction software\u2019 search, you\u2019re in the wrong product category. Here\u2019s the honest comparison.",
    date: "May 26, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "auto-quantity-scope-items-home-builder",
    title: "Auto-Quantity Scope Items: Set It Once, Every Floorplan Gets the Right Number",
    excerpt:
      "Purchasing agents spend hours entering square footage across dozens of scope items for every new floorplan. Auto-Quantity eliminates that entirely. Set the quantity source once \u2014 Under Air Sqft, Total Sqft, Exterior Perimeter, or Roof Squares \u2014 and every floorplan auto-calculates. Plus: Excel Import/Export, Exclusion Groups, Design Center Settings, and 100% Selection Confetti.",
    date: "May 26, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "buildxact-vs-cornerstone-selections-vs-design-center",
    title: "Buildxact vs Cornerstone PM: Selections Software vs Design Center",
    excerpt:
      "Buildxact is estimating-first and well-suited for custom builders quoting unique jobs. But if you\u2019re a production home builder repeating the same floorplans across multiple communities, you need plan-level Designer Packages, bundled AI agents, and community-aware vendor bidding \u2014 not per-job allowance selections.",
    date: "May 25, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "contractor-foreman-vs-cornerstone-production-builder",
    title: "Contractor Foreman vs Cornerstone PM for Production Home Builders",
    excerpt:
      "Contractor Foreman starts at $49/month and is a solid tool for small GCs. But if you\u2019re a production home builder running plan repeats across multiple communities, you need a different product category entirely \u2014 one with a design center, per-floorplan options, and AI agents built for whole-home building.",
    date: "May 24, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "foreman-ai-75-action-loop",
    title: "How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can't)",
    excerpt:
      "Most AI chatbots cap at 3-5 tool calls per turn because generic AI goes off the rails after a few steps. Foreman AI chains 75 actions in a single prompt. Here's the four-part technical architecture: custom agentic loop, 24,500-word knowledge base, typed-function skills, and direct database access. One prompt rebuilds your entire design center category in under 90 seconds.",
    date: "May 18, 2026",
    readTime: "9 min read",
    tag: "Technical Deep-Dive",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "coconstruct-vs-cornerstone-production-design-center",
    title: "CoConstruct vs Cornerstone PM: Production Builder Design Center",
    excerpt:
      "CoConstruct was built for custom builders with job-level allowances. It was acquired by Buildertrend and customers are being migrated. If you\u2019re a production builder being pushed to move your data, this is the moment to ask whether you want a platform actually built for plan repeats, Designer Packages, and multi-community vendor management.",
    date: "May 17, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "cornerstone-pm-vs-procore-residential-home-builder",
    title: "Procore vs Cornerstone PM: Wrong Tool for Residential Builders?",
    excerpt:
      "Procore is the leading platform for commercial GCs managing $50M+ projects. But if you\u2019re a production home builder doing 20\u2013100 homes a year, you\u2019re paying enterprise pricing for commercial infrastructure that maps to zero workflows in your operation. Here\u2019s the honest comparison.",
    date: "May 17, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "cornerstone-pm-vs-acculynx-home-builder-software",
    title: "Cornerstone PM vs AccuLynx: Home Builder Software Compared",
    excerpt:
      "AccuLynx is the #1 roofing CRM \u2014 and it\u2019s excellent for what it does. But if you\u2019re a production home builder who landed here from a \u2018construction CRM\u2019 search, you need a different category of tool entirely. Here\u2019s the honest comparison.",
    date: "May 16, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "foreman-ai-100-skills",
    title: "Foreman AI Hits 100 Skills - And Skill #100 Learns Your Build Patterns",
    excerpt:
      "Six weeks ago Foreman shipped with 45 skills. Today it crosses 100 - and skill #100 (learnBuilderPreferences) reads your existing floorplan takeoffs and learns YOUR org's build defaults automatically. No configuration wizards. Your own data is the training set. Different builder, different defaults. The more you build, the smarter Foreman gets.",
    date: "May 13, 2026",
    readTime: "6 min read",
    tag: "Milestone",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "how-blueprint-ai-extracts-material-scopes",
    title: "How Blueprint AI Extracts 130+ Material Scopes from a Floor Plan PDF",
    excerpt:
      "AI material takeoff works by running a floor plan PDF through a four-stage pipeline: geometry parsing, fixture detection, scope mapping, and vendor pricing lookup - producing 130+ named material scopes in under 60 seconds. Here's the full technical breakdown.",
    date: "May 12, 2026",
    readTime: "6 min read",
    tag: "Technical Deep-Dive",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "foreman-ai-83-skills",
    title: "Foreman AI Now Has 83 Skills Across 16 Categories",
    excerpt:
      "Six weeks ago Foreman AI shipped with 45 skills across 7 categories. Today it ships with 83 skills across 16 categories - a +84% jump in 42 days. Full CRUD on takeoffs, vendor scorecards, profitability analysis, options gap detection, undo + action history. Here's what got added and why 'more skills' isn't just a vanity number.",
    date: "May 12, 2026",
    readTime: "5 min read",
    tag: "Product Update",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "buildertrend-pricing-true-cost",
    title: "The True Cost of Buildertrend for Production Home Builders",
    excerpt:
      "Buildertrend's advertised price is $499/month. For a production home builder doing 50 homes a year, the actual annual cost - once you add per-user fees, integrations, and the hidden labor of working around what the platform doesn't do - is typically $18,000 to $36,000 or more.",
    date: "May 11, 2026",
    readTime: "7 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "why-small-builders-cant-afford-newstar",
    title: "Why Small-to-Mid Home Builders Can't Afford NEWSTAR (And What They're Switching To)",
    excerpt:
      "NEWSTAR was built for the nation's largest builders - 500+ homes a year, IT departments, implementation budgets. For the 5-200 homes/year market, the platform is the wrong tool at the wrong price point. Here's why the math never works, and what mid-size builders are switching to.",
    date: "May 10, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "how-to-choose-home-builder-software",
    title: "How to Choose Home Builder Software in 7 Steps",
    excerpt:
      "Choosing home builder software starts with one question: does the platform understand how your type of business actually operates? Here's a 7-step decision framework that filters out the wrong tools fast and gets production builders to a confident shortlist.",
    date: "May 9, 2026",
    readTime: "7 min read",
    tag: "Buyer's Guide",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "buildpro-vs-cornerstone-modern-stack",
    title: "BuildPro vs Cornerstone PMTM: Why Production Builders Are Modernizing",
    excerpt:
      "BuildPro is Windows-Citrix. Cornerstone PMTM is web-native, mobile-ready, and ships with five built-in AI agents. Here's what that stack difference actually means for a production builder doing 5-200 homes per year.",
    date: "May 8, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "ai-takeoff-vs-manual-takeoff-cost",
    title: "AI Material Takeoff vs Manual Takeoff: True Cost Analysis",
    excerpt:
      "AI material takeoff reduces per-plan estimating time from 4\u20138 hours to under 60 seconds. For a production builder closing 50\u2013200 homes per year, that gap is worth $15,000\u2013$160,000 in annual estimator cost \u2014 before accounting for error reduction and rework prevention.",
    date: "May 8, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "buildertrend-vs-cornerstone-feature-comparison",
    title: "Buildertrend vs Cornerstone PMTM: Feature-by-Feature Comparison",
    excerpt:
      "Buildertrend and Cornerstone PMTM both serve home builders - but their feature sets reflect fundamentally different priorities. Here's a category-by-category breakdown: Scheduling, Sales, Purchasing, Design Center, AI Agents, and API & Data.",
    date: "May 6, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "production-builder-vs-custom-builder-software",
    title: "Production Builder vs Custom Builder Software: Which Do You Need?",
    excerpt:
      "Production builder software and custom builder software are built for opposite workflows. If you're a production builder on a custom builder tool, the mismatch is the problem - not your process. Here's how to tell which category fits your business and what to look for when evaluating platforms.",
    date: "May 5, 2026",
    readTime: "6 min read",
    tag: "Platform Fit",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "newstar-implementation-cost-breakdown",
    title: "NEWSTAR Implementation Cost Breakdown for Small-to-Mid Builders",
    excerpt:
      "Total NEWSTAR implementation cost runs $25,000-$100,000+ in year one. Here's where the money goes: licensing, consultants, data migration, training, and ongoing support - and why mid-size builders are rethinking the math.",
    date: "May 3, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "migrating-from-buildertrend-to-cornerstone",
    title: "Migrating from Buildertrend to Cornerstone PMTM: Step-by-Step Guide",
    excerpt:
      "Most production home builders can migrate from Buildertrend to Cornerstone PMTM in 3-5 business days. Here's the full step-by-step: data export, community setup, schedule templates, vendor migration, and team onboarding.",
    date: "May 3, 2026",
    readTime: "7 min read",
    tag: "Migration Guide",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "home-builder-software-buyer-guide-2026",
    title: "Home Builder Software Buyer's Guide (2026)",
    excerpt:
      "Complete 2026 decision framework for home builder software. Compare NEWSTAR, BuildPro, Buildertrend, and Cornerstone PMTM across features, AI capabilities, implementation cost, and fit for your builder size.",
    date: "May 1, 2026",
    readTime: "9 min read",
    tag: "Buyer's Guide",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "design-center-home-builder",
    title: "Why Your Design Center Process Is Leaking Options Revenue",
    excerpt:
      "The design center appointment is one of the highest-margin moments in a home sale. Most builders are leaving money on the table through inconsistent presentations, untracked allowances, and selections that never make it to purchasing.",
    date: "April 29, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  },
  {
    slug: "new-home-sales-pipeline",
    title: "Your Home Builder Sales Pipeline Is Losing You Buyers",
    excerpt:
      "Most home builders don't have a real sales pipeline - they have a spreadsheet and a gut feeling. Here's how tracking prospects the right way closes more contracts and wastes less time.",
    date: "April 27, 2026",
    readTime: "6 min read",
    tag: "Sales Pipeline",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    slug: "jobtread-alternative",
    title: "Looking for a JobTread Alternative? Here's What Home Builders Should Know",
    excerpt:
      "JobTread is built for general contractors. Cornerstone PMTM is built for home builders. Here's the honest difference — lot management, design center, sales pipeline, and AI that actually works with your data.",
    date: "April 1, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "subcontractor-scheduling-software",
    title: "Subcontractor Scheduling Software: What Home Builders Actually Need",
    excerpt:
      "Your best subs are evaluating you as a client. Clear schedules, advance notice, and clean communication aren't just nice to have — they're how you keep the crews that keep your builds on schedule.",
    date: "March 25, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "construction-purchase-order-software",
    title: "Construction Purchase Order Software for Home Builders (2026 Guide)",
    excerpt:
      "Managing construction POs in Excel is costing home builders time and margin. Here's what modern purchase order software should actually do — and how AI is changing the equation.",
    date: "April 8, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "homebuilding-ai",
    title: "Homebuilding AI: How AI is Changing Residential Construction in 2026",
    excerpt:
      "Homebuilding is one of the last industries to get purpose-built AI — that&apos;s changing fast. Here's where AI is making the biggest impact in residential construction and what's coming next.",
    date: "March 3, 2026",
    readTime: "6 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "builder-ai-software",
    title: "Builder AI Software: Why Home Builders Need Purpose-Built AI (Not Generic Tools)",
    excerpt:
      "\"Builder AI software\" is a new search — people are looking for AI built specifically for builders. Here's why generic AI fails home builders and what purpose-built looks like.",
    date: "March 18, 2026",
    readTime: "5 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "ai-construction-management-software",
    title: "AI Construction Management Software: What Home Builders Need to Know (2026)",
    excerpt:
      "AI is everywhere in construction marketing but most tools are generic. Here's what real AI construction management software looks like for home builders — and how to evaluate what you're buying.",
    date: "March 10, 2026",
    readTime: "7 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "job-cost-tracking-home-builders",
    title: "Where Your Margin Goes: How Home Builders Lose Money Without Knowing It",
    excerpt:
      "Most builders don't find out they lost margin until the home closes. Here's how real-time job cost tracking — budgets, POs, and change orders in one place — stops the leak before it starts.",
    date: "April 25, 2026",
    readTime: "6 min read",
    tag: "Budgeting",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    slug: "subcontractor-management-home-builders",
    title: "Why Your Best Subs Are Choosing Other Builders Over You",
    excerpt:
      "Good subcontractors have options. If your scheduling is chaotic and your communication is reactive, they'll quietly prioritize builders who make their lives easier — here's how to be that builder.",
    date: "April 23, 2026",
    readTime: "6 min read",
    tag: "Vendor Management",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "permitting-delays-home-builders",
    title: "Why Permits Are Stalling Your Build Schedule",
    excerpt:
      "Permit delays are the silent schedule killer for home builders. Here's how to stop letting city hall derail your close dates — and what connected software changes about the equation.",
    date: "April 21, 2026",
    readTime: "5 min read",
    tag: "Permitting",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    slug: "buildertrend-vs-cornerstone",
    title: "BuilderTrend vs Cornerstone PMTM: The Honest Comparison",
    excerpt:
      "BuilderTrend is the big name in builder software. But is it worth $499/mo for a builder closing 10–30 homes a year? We break it down.",
    date: "April 14, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "spreadsheets-killing-schedule",
    title: "Your Spreadsheet Is Killing Your Schedule",
    excerpt:
      "Excel doesn't notify your framer when the foundation is ready. It doesn't catch double-booked subs. Here's what running your build schedule on spreadsheets is actually costing you.",
    date: "April 10, 2026",
    readTime: "5 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "60-second-home-sale",
    title: "The 60-Second Home Status Update Your Buyers Actually Want",
    excerpt:
      "Your buyers call twice a week asking for updates. Your team spends 20 minutes on each call. There's a better way — and your buyers will love you for it.",
    date: "April 7, 2026",
    readTime: "4 min read",
    tag: "Buyer Experience",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.06),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            The Builder&apos;s Blog
          </h1>
          <p className="text-xl text-slate-400">
            Real talk for home builders on software, scheduling, and growing a smarter operation.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-8 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-600">—·</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-1.5 text-sm text-cyan-500 group-hover:text-cyan-400 transition-colors">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
