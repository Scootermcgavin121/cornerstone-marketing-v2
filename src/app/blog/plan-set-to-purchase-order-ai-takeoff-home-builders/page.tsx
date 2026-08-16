import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/plan-set-to-purchase-order.png";
const heroImageAlt =
  "Construction takeoff to purchase order workflow for home builders — plan set, quantities, vendor bid, award, and PO";

const blogSchema = buildBlogPostSchema({
  title: "From Plan Set to Purchase Order: The Five Handoffs That Break",
  slug: "plan-set-to-purchase-order-ai-takeoff-home-builders",
  description:
    "Takeoff, budget, bid, award, PO. Five handoffs most builders do by hand, and what happens when the quantities carry themselves all the way through.",
  datePublished: "2026-08-16",
  mentionsProduct: {
    name: "Cornerstone PM AI Takeoff",
    url: "https://www.cornerstonepm.ai/ai-takeoff",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Get a Plan Set Into a Purchase Order Without Retyping Quantities",
  description:
    "A five-step workflow that moves from AI blueprint takeoff through vendor bids, community-based awards, and auto-generated POs synced to QuickBooks — with no manual re-entry at any handoff.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Run Blueprint AI takeoff on the plan set PDF",
      text: "Upload the floor plan PDF to Cornerstone's Blueprint AI takeoff engine. In under 60 seconds it reads room boundaries, fixture locations, and dimension strings and extracts 130+ material scopes — concrete, framing lumber, insulation, drywall, roofing, plumbing rough, electrical rough, windows, doors, and more — as structured line items with quantities attached. No manual counting, no scale ruler.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Let auto-quantity scope items carry square-footage calculations",
      text: "For labor and material lines driven by area — frame labor, paint, slab finishing, cleaning — create auto-quantity scope items linked to the floorplan's square footage. Cornerstone recomputes the quantity every time the plan or a structural option (bonus room, third-car garage, finished basement) changes, so the budget updates automatically without a spreadsheet touch.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Send a bid request with scope-filtered Excel templates",
      text: "In Purchasing → Bid Requests, select the floorplans, scopes, vendors, and deadline, then send in one click. Cornerstone auto-generates an Excel template for each vendor with three tabs (Base, Structural, Designer) filtered to that vendor's trade — a framer only sees framing lines, a plumber only sees plumbing. Vendors submit through a token-protected portal with no login required. Track each invite through Invited → Viewed → Submitted → Declined.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Compare bids side by side and award by community",
      text: "When two or more vendors submit, compare their quotes on the same scope-item lines — apples to apples because everyone priced the same template. Award the bid per community, not just by lowest price: one framer wins Community A, a different one wins Community B. The awarded pricing locks immediately so neither party can edit it, and every downstream budget line traces back to that number under the hard-cost rule.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Complete a task and let the PO generate itself",
      text: "Assign each scheduled task to the vendor who was awarded that scope. When the task is due, Cornerstone auto-generates the purchase order with scope, quantity, price, and the vendor's contact details, and emails it without a manual step. The approved PO posts to QuickBooks Online as a purchase order commitment. On completion, the matching Bill auto-creates and closes the PO — no dangling open commitments, no double entry.",
    },
  ],
};

const handoffs = [
  {
    number: "01",
    name: "Takeoff → Budget",
    pain: "Estimator counts manually, types into spreadsheet. Transcription errors and scope gaps are invisible until cost overruns happen.",
    fix: "Blueprint AI extracts 130+ scopes from the plan PDF in under 60 seconds. Quantities flow directly into the Master Cost Budget.",
  },
  {
    number: "02",
    name: "Budget → Bid Request",
    pain: "Someone copies scope items from the budget into an email or a shared spreadsheet for vendors. Each vendor gets different information.",
    fix: "Cornerstone generates scope-filtered Excel bid templates automatically from the budget. Every vendor gets the same structured format for their trade.",
  },
  {
    number: "03",
    name: "Bid → Award",
    pain: "Bids come back in three different formats. Someone re-keys them all into a comparison spreadsheet to pick a winner.",
    fix: "Vendors submit through a no-login portal. Cornerstone shows 2+ bids side by side on identical scope lines — no re-keying, no format translation.",
  },
  {
    number: "04",
    name: "Award → PO",
    pain: "Purchasing opens the spreadsheet, copies the awarded price and scope into the PO software, and emails it. Each PO is a manual step.",
    fix: "Awarded vendor pricing becomes the budget instantly. A completed schedule task auto-generates the PO and emails the vendor without anyone opening the purchasing screen.",
  },
  {
    number: "05",
    name: "PO → Accounting",
    pain: "A bookkeeper re-keys the PO into QuickBooks. The bill gets entered a second time when the invoice arrives. Two entries, one cost.",
    fix: "Approved POs post to QuickBooks as purchase order commitments automatically. The linked Bill auto-creates on completion and closes the PO. One-way, no re-entry.",
  },
];

export const metadata: Metadata = {
  title:
    "From Plan Set to Purchase Order: The Five Handoffs That Break — Cornerstone PM™ Blog",
  description:
    "Takeoff, budget, bid, award, PO. Five handoffs most builders do by hand, and what happens when the quantities carry themselves all the way through.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/plan-set-to-purchase-order-ai-takeoff-home-builders",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1536,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

export default function PlanSetToPurchaseOrderPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        {/* ImageObject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
              description: heroImageAlt,
              creditText: "Cornerstone PM™",
            }),
          }}
        />

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1536}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            From Plan Set to Purchase Order: The Five Handoffs That Break
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 16, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Between a floor plan PDF and a paid vendor, there are five handoffs — takeoff,
            budget, bid, award, PO — and each one is a place where a number gets retyped
            by hand. Every retype is an opportunity to lose money. The fix is{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              AI takeoff
            </Link>{" "}
            and purchasing automation that carry the quantities all the way through
            without asking anyone to type them again.
          </p>

          <p>
            Most builders know the individual parts exist somewhere. They&apos;ve seen
            estimating software, they&apos;ve sent Excel bid templates, they&apos;ve used
            QuickBooks for years. The problem is the gaps between the parts — the
            moments where data leaves one system and has to be manually re-entered into
            the next. Those gaps are where hours go, where errors hide, and where the
            budget stops reflecting reality.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are the five handoffs?
          </h2>

          <p>
            The chain from plan set to purchase order has five distinct transition
            points. Here is what typically happens at each one — and what happens
            when the platform handles it instead.
          </p>

          <div className="not-prose space-y-4 my-8">
            {handoffs.map((h) => (
              <div
                key={h.number}
                className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden"
              >
                <div className="px-5 py-3 border-b border-slate-800 bg-slate-900/60 flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-emerald-400">{h.number}</span>
                  <span className="text-sm font-semibold text-white">{h.name}</span>
                </div>
                <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-800/60">
                  <div className="px-5 py-4 flex items-start gap-2.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-400">{h.pain}</p>
                  </div>
                  <div className="px-5 py-4 flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-sm text-emerald-300">{h.fix}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Handoff 1: How does AI takeoff replace manual counting?
          </h2>

          <p>
            A traditional takeoff is an estimator with a scale ruler, a highlighter,
            and a plan set spread across a drafting table — or a screen and a digital
            measurement tool. The work is accurate when the estimator is careful and
            unhurried. It typically takes four to eight hours per plan. A builder running
            twelve floorplans across four communities has forty-eight to ninety-six hours
            of takeoff work before any vendor has been contacted.
          </p>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Blueprint AI takeoff
            </Link>{" "}
            reads the plan set PDF and extracts 130+ material scopes in under
            sixty seconds — concrete, framing lumber, insulation, drywall, roofing,
            plumbing rough, electrical rough, windows, doors, and more — as structured
            line items with quantities already attached. The estimator reviews the output
            rather than producing it. Time per plan drops from hours to minutes.
          </p>

          <p>
            For labor and area-based costs that Blueprint does not read directly off
            the plans — frame labor per square foot, paint, slab finishing, cleaning —
            auto-quantity scope items link to the floorplan&apos;s square footage. A
            frame labor rate of $4.25 per total square foot reprices automatically
            across every floorplan and every structural option. Change the rate once
            and sixty line items update; no one opens the spreadsheet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Handoff 2: How do bid requests go out without reformatting scope?
          </h2>

          <p>
            Most bid requests start with someone opening the budget, copying scope lines
            into a Word document or a shared spreadsheet, and emailing it with a plan
            PDF attached. Different vendors get different information depending on who
            sent it and how carefully they sliced the master list. One vendor quotes on
            a complete framing scope; another quotes on a different version of the same
            scope from last month&apos;s template.
          </p>

          <p>
            In Cornerstone&apos;s Purchasing → Bid Requests workflow, the bid template
            generates from the scope items that are already in the system. Select the
            floorplans, vendors, scopes, deadline, and message — send in one click.
            Cornerstone builds an Excel file for each vendor with three tabs (Base,
            Structural, Designer) filtered to their trade. A framer sees framing lines.
            A plumber sees plumbing. Neither sees what doesn&apos;t apply to them.
          </p>

          <p>
            Vendors click a link from their email and land on a token-protected portal
            — no Cornerstone login, no account creation. They download the template,
            fill in their numbers, attach any supporting PDFs, and submit. The builder
            sees each invite move through Invited → Viewed → Submitted → Declined, so
            a non-response is visible rather than assumed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Handoff 3: How are bids compared without re-keying them?
          </h2>

          <p>
            Three vendors quoting the same scope typically return three different
            formats. One sends a lump sum. One breaks out labor and material. One
            attaches a PDF with assumptions buried in footnotes. The PM ends up
            translating all three into a single comparison spreadsheet before anyone
            can make a decision — and that translation introduces another opportunity
            for error.
          </p>

          <p>
            Because every vendor submitted against the same scope-item template, their
            bids are already in the same format when they arrive. Cornerstone displays
            them side by side on identical lines. Two framers quoted the same eleven
            scope items; the comparison shows each line across both bids, with totals
            at the bottom. No re-keying, no format translation.
          </p>

          <p>
            The key detail: cheapest is not the only decision rule. Awards in Cornerstone
            are assigned per community rather than globally. The framer who won last
            year&apos;s community is still your framer in that community even if a new
            entrant quotes lower elsewhere. You can hold accepted bids from multiple
            vendors for different communities on the same scope simultaneously. Once a
            bid is awarded it locks — neither the builder nor the vendor can edit
            the number afterward, so the awarded price is the number that runs
            downstream.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Handoff 4: How does a completed task become a purchase order?
          </h2>

          <p>
            In most operations, someone in purchasing looks at the schedule, sees that
            framing is coming up, opens the budget to pull the scope and price, drafts
            the PO, and emails it. That sequence is five minutes per PO on a good day.
            On a day with thirty active homes across three communities, it becomes a
            morning.
          </p>

          <p>
            Cornerstone connects the schedule to the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            directly. Each scheduled task is assigned to the vendor who was awarded
            that scope for that community. When the task is due, Cornerstone
            auto-generates the purchase order — with scope, quantity, price, and vendor
            contact details pre-filled from the awarded bid — and emails it. No one
            opens the purchasing screen to make it happen. The task completion is the
            trigger.
          </p>

          <p>
            Every line on that PO traces back to accepted vendor pricing under the
            platform&apos;s hard-cost rule. Nothing carries a stored or default cost.
            A line with no awarded bid shows as $0 / needs pricing rather than
            inheriting a made-up number — which means the PO that goes out reflects
            what was actually agreed, not what the estimator guessed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Handoff 5: How does the PO get into QuickBooks without a bookkeeper re-keying it?
          </h2>

          <p>
            The last handoff is usually the most expensive in bookkeeper time. A PO
            approved in the field management system has to be entered into QuickBooks
            as a purchase order or a bill, then entered again as a bill when the
            invoice arrives. Two entries, one cost, and a reconciliation problem if
            the two entries don&apos;t match.
          </p>

          <p>
            Cornerstone&apos;s QuickBooks Online integration is one-directional —
            Cornerstone pushes, QuickBooks receives, and QuickBooks changes never
            overwrite Cornerstone. When a PO is approved, it posts to QuickBooks Online
            automatically as a Purchase Order commitment, so committed cost shows up in
            the books without anyone touching QuickBooks. Each synced transaction carries
            a clean memo with community, lot, address, PO number, and cost code, so a
            bookkeeper can trace any QuickBooks entry back to the exact home and trade
            without leaving QBO.
          </p>

          <p>
            When work is marked complete, the linked Bill auto-creates in QuickBooks
            and closes the original PO — no dangling open commitments, no duplicate
            entry. Because each community maps to a QuickBooks Customer and each home
            to a Project, every bill lands on the right job automatically and shows
            up in per-home and per-community P&amp;L without a journal entry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the full chain look like when it runs without gaps?
          </h2>

          <p>
            Blueprint AI reads the plan PDF and extracts scopes with quantities.
            Auto-quantity scope items extend that to square-footage-driven labor and
            material. A bid request goes out with scope-filtered templates. Vendors
            submit through a no-login portal and bids come back in the same format.
            The side-by-side comparison drives an award decision; the locked price
            becomes the budget. A scheduled task fires and the PO generates and
            emails itself. The approved PO posts to QuickBooks as a commitment. On
            completion, the Bill auto-creates and closes the PO.
          </p>

          <p>
            At no point in that chain does a number need to be retyped. The quantity
            the AI extracted from the plan is the quantity on the bid template, which
            is the quantity on the vendor&apos;s quote, which is the quantity on the
            PO, which is the quantity on the QuickBooks bill. If the quantity is wrong,
            it is wrong once and correctable once — not wrong in five separate places
            with five separate fixes.
          </p>

          <p>
            That is the real value of tying{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              AI takeoff
            </Link>{" "}
            to{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing
            </Link>{" "}
            to QuickBooks in a single platform rather than stitching together three
            separate tools. The data moves forward; the people do the work that
            requires judgment. The{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management
            </Link>{" "}
            platform that earns its place is the one where every handoff happens
            inside the system, not between systems.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop retyping quantities at every handoff.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM connects AI takeoff, vendor bidding, auto-generated
              purchase orders, and QuickBooks sync in one platform — so quantities
              carry from the plan set all the way to the books without manual
              re-entry. See the full purchasing workflow in action.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
