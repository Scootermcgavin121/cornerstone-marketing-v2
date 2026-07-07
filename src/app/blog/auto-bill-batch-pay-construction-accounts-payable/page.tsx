import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/auto-bill-batch-pay-ap.png";
const heroImageAlt =
  "Construction accounts payable automation — auto-bill on completion and batch-pay on payday with Cornerstone and QuickBooks";

const blogSchema = buildBlogPostSchema({
  title: "Auto-Bill on Completion, Then Batch-Pay on Payday: The AP Loop for Builders",
  slug: "auto-bill-batch-pay-construction-accounts-payable",
  description:
    "Mark a PO received and Cornerstone auto-creates the linked bill in QuickBooks, closing the PO. Set your AP schedule, then batch-pay everyone on one payday.",
  datePublished: "2026-07-07",
  mentionsProduct: {
    name: "Cornerstone PM Accounts Payable Automation",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Auto-Bill on Completion, Then Batch-Pay on Payday: The AP Loop for Builders — Cornerstone PM™ Blog",
  description:
    "Mark a PO received and Cornerstone auto-creates the linked bill in QuickBooks, closing the PO. Set your AP schedule, then batch-pay everyone on one payday.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/auto-bill-batch-pay-construction-accounts-payable",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Auto-Bill and Batch-Pay in Cornerstone PM",
  description:
    "Walk through the two-stage AP flow: send a PO (commitment), receive completion (auto-bill), set AP schedule (due date), and batch-pay on payday.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send the Purchase Order",
      text: "In Cornerstone PM, assign a task to a vendor or approve a PO. The sent PO posts to QuickBooks Online as a Purchase Order — a committed liability that appears in your books immediately.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Mark the PO received or complete",
      text: "When the work is done, mark the PO received in Cornerstone. If auto-bill is enabled, Cornerstone automatically creates the matching Bill in QuickBooks linked to the PO, which then closes with no duplicate.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Set your AP payment schedule",
      text: "Choose one of five AP schedule types — Net-X days, Weekly (any weekday), Monthly (Nth weekday), Bi-weekly (every 2 weeks), or Semi-monthly (two paydays per month, e.g. 1st & 15th). The due date computes from the invoice/bill date and carries into the QuickBooks Bill.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Batch-pay on payday",
      text: "In QuickBooks, all bills due by your payday appear together for a single manual payment approval. No hunting across individual bills — one payday, one approval run. Cornerstone never auto-pays; the human pay gate is always in QuickBooks.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Verify sync via Accounting → Sync Events",
      text: "Check Accounting → Sync Events in Cornerstone to see every push to QuickBooks, timestamps, and retry history. Every synced PO, Bill, and Change Order carries a memo with community, lot, address, PO number, and cost code.",
    },
  ],
};

const scheduleTypes = [
  {
    type: "Net-X Days",
    example: "Net 30",
    howItWorks: "Due X days after the invoice/bill date",
    bestFor: "Standard trade terms",
  },
  {
    type: "Weekly",
    example: "Every Friday",
    howItWorks: "Next chosen weekday after the bill date",
    bestFor: "Subcontractors on weekly pay cycles",
  },
  {
    type: "Monthly",
    example: "Last Friday of the month",
    howItWorks: "Nth weekday (incl. 'Last') of the calendar month",
    bestFor: "Month-end AP runs",
  },
  {
    type: "Bi-weekly",
    example: "Every other Thursday",
    howItWorks: "Every 2 weeks from an anchored payday",
    bestFor: "Bi-weekly payroll-style vendors",
  },
  {
    type: "Semi-monthly",
    example: "1st & 15th",
    howItWorks: "Two fixed paydays per month, keyed off invoice/bill date",
    bestFor: "Builders who want mid-month and end-of-month runs",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the two-stage AP flow in Cornerstone PM?",
    a: "When a PO is sent in Cornerstone, it posts to QuickBooks Online as a Purchase Order — a committed liability. When the work is received and the PO is marked complete, Cornerstone auto-creates the matching Bill in QuickBooks linked to that PO, which then closes automatically. No dangling POs, no duplicates, no manual reconciliation between commitments and actuals.",
  },
  {
    q: "Does Cornerstone PM ever auto-pay bills?",
    a: "Never. Cornerstone creates the bill in QuickBooks when a PO is marked complete, but payment always requires manual approval by the builder in QuickBooks. The human pay gate is permanent and cannot be disabled. Cornerstone never initiates a payment.",
  },
  {
    q: "What AP payment schedule types are available?",
    a: "Five types: Net-X days (due X days after invoice date), Weekly (any chosen weekday), Monthly (Nth weekday including 'Last'), Bi-weekly (every 2 weeks anchored to a chosen payday), and Semi-monthly (two paydays per month, e.g. 1st and 15th, keyed off the invoice/bill date). The due date computes automatically and carries into the QuickBooks Bill.",
  },
  {
    q: "What information appears in the QuickBooks Bill memo?",
    a: "Every synced PO, Bill, and Change Order carries a structured memo with the community name, lot number, street address, PO number, and cost code. This makes every QuickBooks transaction traceable back to the exact home and trade without opening Cornerstone.",
  },
  {
    q: "Where can I see what has synced to QuickBooks?",
    a: "Accounting → Sync Events in Cornerstone shows every push to QuickBooks with timestamps and result status — success, pending, or failed with retry history. You always know what landed in QuickBooks and what is still pending.",
  },
  {
    q: "Is the QuickBooks sync one-way or two-way?",
    a: "One-way. Cornerstone PM pushes approved POs, bills, change orders, and vendors to QuickBooks. Changes made in QuickBooks never write back to Cornerstone. Cornerstone stays the source of truth for all job data.",
  },
  {
    q: "Does the auto-bill feature replace the existing one-way QuickBooks sync?",
    a: "No — it extends it. The one-way sync was already live for POs, change orders, and vendors. Auto-bill adds the Bill creation step on PO completion, completing the full accrual accounting lifecycle (commitment → receipt → payable) inside QuickBooks without any manual entry.",
  },
];

export default function AutoBillBatchPayPage() {
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
          width={1024}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Auto-Bill on Completion, Then Batch-Pay on Payday: The AP Loop for Builders
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 7, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Mark a PO received in Cornerstone and it automatically creates the matching bill in
            QuickBooks, closes the PO, and sets the due date by your AP schedule — so on payday
            you batch-pay everyone in one approval run inside{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              QuickBooks
            </Link>
            , not twelve separate bills.
          </p>

          <p>
            Most builder AP workflows have a gap between the build and the books. A PO gets
            approved in the construction system, a bill lands in the email, someone re-enters it
            in QuickBooks, links it to the vendor, figures out when it&apos;s due, and files it
            away. Multiply that by 30 active homes and you&apos;re looking at hours of bookkeeper
            time every week that produces nothing — it just moves information that already existed
            somewhere else.
          </p>

          <p>
            Cornerstone&apos;s AP automation closes that gap.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              The full purchasing workflow
            </Link>{" "}
            — task assignment, PO generation, vendor notification, bid tracking, approval —
            runs in Cornerstone. The accounting layer runs in QuickBooks. Between the two sits
            a tight, one-way sync that handles every step from commitment to payable without
            anyone touching a keyboard.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the two-stage AP flow work?
          </h2>

          <p>
            The accrual accounting lifecycle has two moments that matter: when you commit to a
            cost and when the cost is actually incurred. Cornerstone maps both.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                The two-stage accounting flow
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-5 py-4 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">PO sent → Purchase Order in QuickBooks</p>
                  <p className="text-slate-400 text-sm mt-1">
                    When a PO is sent or approved in Cornerstone, it posts to QuickBooks Online as
                    a <strong className="text-white">Purchase Order</strong> — a commitment that
                    appears in your books as outstanding. Drafts stay private. Only sent POs sync.
                  </p>
                </div>
              </div>
              <div className="px-5 py-4 flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">PO received → Bill auto-creates, PO closes</p>
                  <p className="text-slate-400 text-sm mt-1">
                    When the work is done and the PO is marked received, Cornerstone auto-creates
                    the matching{" "}
                    <strong className="text-white">Bill</strong> in QuickBooks, linked to the
                    original PO, which then closes automatically. No dangling open POs, no
                    duplicate lines, no manual reconciliation.
                  </p>
                </div>
              </div>
            </div>
            <div className="px-5 py-3.5 bg-amber-950/20 border-t border-amber-800/30">
              <p className="text-xs text-amber-400">
                <strong>Human pay gate:</strong> Cornerstone creates the bill — QuickBooks holds
                it for payment. Builder manually approves payment in QBO. Cornerstone never
                auto-pays.
              </p>
            </div>
          </div>

          <p>
            For accrual-basis builders, this is the complete accounting lifecycle: commitment
            recorded when the PO goes out, liability recorded when the work is done. QuickBooks
            stays accurate at both stages with zero manual entry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Setting your AP payment schedule
          </h2>

          <p>
            The other half of the AP loop is knowing when bills come due. Cornerstone lets you
            set a payment schedule so the due date computes automatically from the invoice or
            bill date and carries into QuickBooks. There are five schedule types:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-[1.2fr_1fr_1.6fr_1.4fr] text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Schedule Type</span>
              <span>Example</span>
              <span>How Due Date Computes</span>
              <span className="hidden sm:block">Best For</span>
            </div>
            {scheduleTypes.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[1.2fr_1fr_1.6fr_1.4fr] border-b border-slate-800/60 text-sm last:border-b-0"
              >
                <div className="px-5 py-3.5 font-semibold text-emerald-300">{row.type}</div>
                <div className="px-5 py-3.5 text-slate-300">{row.example}</div>
                <div className="px-5 py-3.5 text-slate-400 text-xs">{row.howItWorks}</div>
                <div className="px-5 py-3.5 text-slate-500 text-xs hidden sm:block">{row.bestFor}</div>
              </div>
            ))}
          </div>

          <p>
            Semi-monthly is the newest addition — two fixed paydays per month (say, the 1st and
            the 15th), keyed off the invoice or bill date. It&apos;s useful for builders who
            want to run AP twice a month without tracking individual Net-X day windows per vendor.
          </p>

          <p>
            The due date carries automatically into the QuickBooks Bill when it&apos;s created.
            On payday, all bills due by that date appear together in QuickBooks for one manual
            payment run — no hunting across the vendor list.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What the full AP loop looks like end-to-end
          </h2>

          <p>
            The AP automation sits at the end of a complete{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>
            . Here&apos;s every step from task to payment:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Task assigned in the build schedule.</strong>{" "}
              Cornerstone auto-generates a PO and emails it to the assigned vendor.
            </li>
            <li>
              <strong className="text-white">PO sent → commits to QuickBooks as a Purchase Order.</strong>{" "}
              The outstanding commitment appears in your books immediately.
            </li>
            <li>
              <strong className="text-white">Work completed → PO marked received.</strong>{" "}
              Auto-bill fires: the matching Bill appears in QuickBooks, linked to the PO, which closes.
            </li>
            <li>
              <strong className="text-white">AP schedule sets the due date.</strong>{" "}
              Net-X, Weekly, Monthly, Bi-weekly, or Semi-monthly — the due date computes from the
              bill date and lands on the QuickBooks Bill automatically.
            </li>
            <li>
              <strong className="text-white">Builder batch-pays on payday.</strong>{" "}
              All bills due by that date appear in one place in QuickBooks for manual approval.
              One run, one payday, no hunting.
            </li>
          </ol>

          <p>
            The vendor&apos;s only job is to complete the work and send an invoice. Everything
            else — the PO, the commitment in QuickBooks, the bill on completion, the due date,
            the grouping on payday — happens without anyone re-entering a number.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Clean transaction memos and sync visibility
          </h2>

          <p>
            Every synced record carries a structured memo so transactions are traceable inside
            QuickBooks without cross-referencing Cornerstone:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">Example Bill memo in QuickBooks</p>
            <p>Community: Maple Ridge | Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing</p>
            <p>Vendor: Precision Framing LLC</p>
          </div>

          <p>
            Community name, lot number, street address, PO number, and cost code — all in one
            line. Any bookkeeper can pull the transaction from the QBO register and know exactly
            which home it belongs to and which trade it covers.
          </p>

          <p>
            For sync visibility, <strong className="text-white">Accounting → Sync Events</strong>{" "}
            in Cornerstone shows every push to QuickBooks — timestamp, result status, and retry
            history if a push failed. You always know what landed and what&apos;s pending, without
            logging into QuickBooks to check manually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why one-way with a human pay gate?
          </h2>

          <p>
            Two-way sync sounds more capable on paper. In practice it creates silent bugs: an
            edit in QuickBooks writes back to Cornerstone and corrupts the job record that dozens
            of POs are attached to. Cornerstone keeps the flow one-way on purpose — approved
            records flow from Cornerstone to QuickBooks, and nothing comes back.
          </p>

          <p>
            The human pay gate follows the same logic. Automating AP through to payment removes
            a check that matters: the builder reviewing the batch before money moves. Cornerstone
            creates the bills and sets the due dates — QuickBooks holds them for a final manual
            approval. That review step stays in place regardless of how automated the rest of the
            flow becomes.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What Cornerstone handles vs. what stays in QuickBooks
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { cornerstone: "PO generation and vendor email", qbo: "Vendor Center record" },
                { cornerstone: "Posting PO as QBO commitment", qbo: "Purchase Order in books" },
                { cornerstone: "Auto-creating Bill on PO receipt", qbo: "Bill ready for payment" },
                { cornerstone: "Setting bill due date by AP schedule", qbo: "Due date on the Bill" },
                { cornerstone: "Community → Customer mapping", qbo: "Per-home P&L reporting" },
                { cornerstone: "Sync Events log + retry", qbo: "Manual batch payment approval" },
              ].map((row, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div className="px-5 py-3.5 text-slate-300 border-r border-slate-800/60 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.cornerstone}
                  </div>
                  <div className="px-5 py-3.5 text-slate-400">{row.qbo}</div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this fits the broader purchasing platform
          </h2>

          <p>
            AP automation is the accounting layer at the end of a purchasing platform that starts
            well before any bill exists. Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            covers the full cycle: vendor bid requests with auto-generated scope-filtered Excel
            templates, a no-login vendor portal for bid submission, side-by-side bid comparison,
            community-assigned vendor awards with locked pricing, and PO generation from the
            awarded bid. The QuickBooks AP loop is where that work lands in the books — cleanly,
            automatically, and without a bookkeeper in the middle.
          </p>

          <p>
            Builders who are still re-keying POs into QuickBooks by hand, or who run AP by
            chasing individual bill emails, will find the end-to-end loop significant: task
            complete, PO generated, commitment in QuickBooks, bill on receipt, due date set,
            batch-pay on payday. The vendor&apos;s only job is to finish the work.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Close the loop from PO to paid.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM handles the full AP cycle — auto-bill on completion, AP schedule due
              dates, clean QuickBooks memos, and one batch-pay run on payday. Request early
              access to see the purchasing workflow end-to-end.
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

      <FAQSection
        title="Construction AP Automation: Common Questions"
        subtitle="What home builders ask about auto-bill, batch-pay, and the QuickBooks AP loop in Cornerstone PM."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
