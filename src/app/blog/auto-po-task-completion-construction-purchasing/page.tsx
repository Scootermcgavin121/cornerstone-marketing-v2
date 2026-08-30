import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/auto-po-task-completion-construction-purchasing.png";
const heroImageAlt =
  "Construction purchase order automation — a completed schedule task auto-generates a PO and emails the vendor in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title:
    "Task Complete, PO Sent: How Production Builders Automate Their Purchasing Loop",
  slug: "auto-po-task-completion-construction-purchasing",
  description:
    "When a schedule task is marked complete in Cornerstone, the purchase order generates itself, emails the vendor, and posts to QuickBooks — without anyone touching the purchasing screen.",
  datePublished: "2026-08-30",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Task Complete, PO Sent: How Production Builders Automate Their Purchasing Loop — Cornerstone PM™ Blog",
  description:
    "When a schedule task is marked complete in Cornerstone, the purchase order generates itself, emails the vendor, and posts to QuickBooks — without anyone touching the purchasing screen.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/auto-po-task-completion-construction-purchasing",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Automate Purchase Orders from Completed Schedule Tasks",
  description:
    "A step-by-step guide to wiring schedule tasks to vendors so every completed task auto-generates a PO, emails the vendor, and posts to QuickBooks without manual purchasing work.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Link a vendor to each task in your schedule template",
      text: "Open your construction schedule template and assign a vendor to each scope-linked task. This is a one-time setup — every home that uses the template inherits the vendor assignment automatically.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Mark the task complete when the trade finishes",
      text: "When a superintendent marks the task complete — from the field, from a tablet, or from the office — that single action triggers the purchasing automation without any additional steps.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Cornerstone auto-generates the PO from accepted vendor pricing",
      text: "The purchase order is built from the scope items and accepted vendor pricing for that community. Because all cost flows from awarded bids, a line with no accepted price shows as needs pricing rather than carrying a fabricated number.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "The vendor receives the PO by email — no login required",
      text: "The vendor gets the PO directly in their inbox. They do not need a Cornerstone account to view or acknowledge it — the same design principle as the bid portal.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "The PO posts to QuickBooks Online as a purchase order commitment",
      text: "The approved PO syncs one-way to QuickBooks Online immediately, posting as a Purchase Order so committed cost appears in the books before the invoice arrives.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Mark the work received — the linked Bill auto-creates and closes the PO",
      text: "When the work is received or the invoice arrives, marking the PO received auto-creates the matching Bill in QuickBooks linked to the PO, which closes the PO automatically. No dangling open POs, no duplicate entry.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Approve payment manually in QuickBooks",
      text: "Cornerstone never auto-pays. Payment approval always stays a manual step in QuickBooks — the builder retains full control over when and how vendors are paid.",
    },
  ],
};

const steps = [
  {
    label: "Task Complete",
    detail: "Superintendent marks the task done — field or office",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
  {
    label: "PO Generated",
    detail: "Built from accepted vendor pricing — no invented numbers",
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    label: "Vendor Emailed",
    detail: "PO delivered directly — no vendor login needed",
    color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
  },
  {
    label: "Posted to QuickBooks",
    detail: "Commitment appears in QBO before the invoice lands",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
];

const setupItems = [
  "Open the construction schedule template",
  "For each task, select the vendor responsible for that scope",
  "Save — every home using that template inherits the vendor assignment",
  "Community-assigned vendor wins apply automatically per community",
];

export default function AutoPOTaskCompletionPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Task Complete, PO Sent: How Production Builders Automate Their
            Purchasing Loop
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 30, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The fastest fix for missed purchase orders is to remove the human
            step entirely. When a schedule task is marked complete in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone
            </Link>
            , the purchase order generates itself, emails the vendor, and posts
            to QuickBooks as a commitment — without anyone opening the
            purchasing screen.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do purchase orders fall through the cracks?
          </h2>

          <p>
            It&apos;s not that superintendents forget on purpose. The problem is
            structural. Scheduling lives in one system, purchasing lives in
            another, and the handoff between them depends on a person noticing
            that a task finished and then switching to a different screen to
            write the PO. When that person is on three lots with six trades
            asking questions, the handoff doesn&apos;t happen.
          </p>

          <p>
            The consequences show up later: a vendor waiting on payment they
            haven&apos;t invoiced against, a budget that looks clean until
            month-end reconciliation exposes a pile of un-issued POs, and a
            bookkeeper who spent an afternoon reconstructing what went where.
            The missed PO is not a discipline problem. It is a sequencing
            problem — the right action needed to happen at the wrong time for
            a person to do it manually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the auto-PO trigger work?
          </h2>

          <p>
            In Cornerstone, each task in a schedule template can be linked to
            a vendor. When the task is marked complete — from a phone in the
            field, from a tablet in the site office, or from a desktop —
            Cornerstone detects the completion event and generates the purchase
            order automatically.
          </p>

          <p>
            The PO is not a blank form. It is built from the scope items and
            accepted vendor pricing for that community. Because all cost in
            Cornerstone flows from awarded bids, a line with no accepted price
            shows as needs pricing rather than carrying an invented number.
            The hard cost rule applies to auto-generated POs the same way it
            applies to everything else.
          </p>

          {/* Step flow */}
          <div className="not-prose grid grid-cols-2 gap-3 my-6 sm:grid-cols-4">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 text-center ${s.color}`}
              >
                <p className="text-sm font-bold mb-1">{s.label}</p>
                <p className="text-xs text-slate-400 leading-snug">{s.detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What goes into an auto-generated PO?
          </h2>

          <p>
            The purchase order the vendor receives is not a bare dollar total.
            It carries the scope line items from the accepted vendor bid, the
            community name, lot number, and street address in the memo, and
            automatic sales tax on material lines with labor left exempt. A
            vendor reading the PO knows exactly which lot it is for, what trade
            it covers, and what they quoted when the bid was awarded.
          </p>

          <p>
            Because the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor portal
            </Link>{" "}
            requires no login, the PO lands in the vendor&apos;s inbox and
            they can view it without creating an account. The same design
            principle that makes bid submission frictionless applies here —
            outside parties never need a Cornerstone login.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the auto-PO connect to QuickBooks?
          </h2>

          <p>
            The moment a PO is generated and sent, it syncs one-way to
            QuickBooks Online as a Purchase Order — a commitment record that
            shows up in the books before the invoice arrives. This is the
            first stage of the two-stage accrual flow that keeps Cornerstone
            and QuickBooks in agreement.
          </p>

          <p>
            The second stage fires when the work is received. Marking the PO
            received triggers the linked Bill to auto-create in QuickBooks,
            which closes the original Purchase Order automatically. No
            dangling open POs, no duplicate line items, and no data-entry
            work for the bookkeeper. The Bill carries the same memo detail —
            community, lot, address, PO number, cost code — so every
            transaction in QuickBooks traces back to the exact home and trade
            without leaving the books.
          </p>

          <p>
            Cornerstone never auto-pays. Payment approval always stays a
            manual step in QuickBooks — the builder decides when and how each
            vendor gets paid. The automation stops at generating and posting
            the obligation; the release of funds is always a human decision.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is the setup?
          </h2>

          <p>
            The setup is a one-time configuration in the schedule template —
            not a per-home task. Assign a vendor to each task in the template
            and every home that uses that template inherits the assignment.
            Changing the vendor on the template updates future homes; homes
            already underway keep their existing assignments.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Template setup — one time
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {setupItems.map((item, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about different vendors in different communities?
          </h2>

          <p>
            Community-assigned vendor wins mean the framing contractor who
            won Community A is not necessarily the one who won Community B.
            When an auto-PO fires on a task completion, Cornerstone uses the
            vendor assigned to that community for that scope — not a global
            default. A builder running five communities with five different
            framing contractors gets the right PO sent to the right vendor
            every time, without any conditional logic to maintain.
          </p>

          <p>
            Once a bid is awarded it locks, so the price on the auto-generated
            PO is always the same number the vendor submitted when bidding.
            Nobody can quietly edit it afterward — not the vendor, not the
            purchasing team. The PO and the awarded bid are the same record.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Is this the same as an &quot;auto-PO on task completion&quot; in
            other platforms?
          </h2>

          <p>
            Most platforms that claim task-triggered POs are really just
            workflow automations that create a blank PO record and assign it
            to someone. A person still has to fill in the vendor, the line
            items, and the price. Cornerstone&apos;s auto-PO generates a
            complete, priced purchase order from accepted vendor pricing with
            the community context attached — ready to send, not ready to fill
            in. The distinction matters because the human step that eliminates
            is the one that was getting skipped.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop chasing down purchase orders.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Wire your schedule tasks to vendors once in the template.
              Every completed task generates the PO, emails the vendor, and
              posts to QuickBooks automatically — available on{" "}
              <Link
                href="/purchasing"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                every Cornerstone plan
              </Link>
              .
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
