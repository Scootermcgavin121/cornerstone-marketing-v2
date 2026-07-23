import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vendor-payment-schedules-home-builders.png";
const heroImageAlt =
  "Vendor payment schedule construction software — five AP schedule types including semi-monthly paydays in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "Vendor Payment Schedules for Home Builders: Net Terms to Semi-Monthly",
  slug: "vendor-payment-schedules-net-terms-semi-monthly-home-builders",
  description:
    "Set vendor payment schedules in Cornerstone — Net-X, weekly, bi-weekly, monthly, or semi-monthly — so every bill computes its due date and lands on payday.",
  datePublished: "2026-07-23",
  mentionsProduct: {
    name: "Cornerstone PM AP Payment Schedules",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Vendor Payment Schedules for Home Builders: Net Terms to Semi-Monthly — Cornerstone PM™ Blog",
  description:
    "Set vendor payment schedules in Cornerstone — Net-X, weekly, bi-weekly, monthly, or semi-monthly — so every bill computes its due date and lands on payday.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/vendor-payment-schedules-net-terms-semi-monthly-home-builders",
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
  name: "How to Set Up Vendor Payment Schedules in Cornerstone PM",
  description:
    "Configure AP payment schedules so every vendor bill computes its due date automatically and lands in the right batch-pay run.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Choose a schedule type for each vendor",
      text: "In Cornerstone PM, open the vendor settings and select one of five AP schedule types: Net-X days, Weekly (any weekday), Monthly (Nth weekday including Last), Bi-weekly (every 2 weeks anchored to a chosen payday), or Semi-monthly (two fixed paydays per month, keyed off the invoice/bill date).",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Send a PO — it posts to QuickBooks as a commitment",
      text: "When a PO is sent or approved in Cornerstone, it posts to QuickBooks Online as a Purchase Order, recording the committed cost immediately. Drafts stay private; only approved/sent POs sync.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Mark the PO received — a Bill auto-creates with the due date",
      text: "When the work is done and the PO is marked received, Cornerstone automatically creates the matching Bill in QuickBooks linked to the PO. The PO closes with no duplicate. The bill's due date is computed from the invoice/bill date using the vendor's AP schedule and carries into QuickBooks automatically.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Batch-pay on payday in QuickBooks",
      text: "All bills due by your payday appear together in QuickBooks for one manual payment approval. No hunting across vendor lists — one run, one payday. Cornerstone never auto-pays; the human pay gate is always in QuickBooks.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Verify in Accounting → Sync Events",
      text: "Check Accounting → Sync Events in Cornerstone to see every push to QuickBooks, with timestamps, result status, and retry history. Every synced Bill carries a structured memo with community, lot, address, PO number, and cost code.",
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
    bestFor: "Subs on weekly pay cycles",
  },
  {
    type: "Monthly",
    example: "Last Friday of month",
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
    bestFor: "Mid-month and end-of-month AP runs",
  },
];

export default function VendorPaymentSchedulesPage() {
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
            Vendor Payment Schedules for Home Builders: Net Terms to Semi-Monthly
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 23, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Set a payment schedule per vendor in Cornerstone and every bill that syncs to QuickBooks
            gets its due date computed automatically — so on payday you batch-pay every vendor in
            one approval run inside{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              the purchasing module
            </Link>
            , not one invoice at a time.
          </p>

          <p>
            Most builders pay vendors reactively: an invoice arrives, someone figures out when it&apos;s
            due, it sits in a pile until the check run, and half the time the due date is wrong because
            no one remembered what terms were negotiated. Multiply that across 20 active vendors and
            40 live homes and you&apos;re spending more time managing the AP pile than building houses.
          </p>

          <p>
            Cornerstone PM&apos;s AP payment schedule system removes that friction from both ends.
            Configure a schedule once per vendor and Cornerstone computes the correct due date on every
            bill — automatically, every time, carrying it into QuickBooks with the synced transaction.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are the five AP schedule types?
          </h2>

          <p>
            Different vendors run on different payment cycles. A national lumber supplier may want Net 30.
            Your framing crew might expect a check every Friday. Cornerstone supports five schedule types
            to match how you actually pay:
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
            Semi-monthly is the newest addition — two fixed paydays per month (say, the 1st and the 15th),
            keyed off the invoice or bill date. It works well for builders who want a mid-month run for
            recent completions and an end-of-month run to clear the rest, without tracking individual
            Net-X windows per vendor.
          </p>

          <p>
            All five schedule types compute the due date from the invoice or bill date. That due date
            carries automatically into the QuickBooks Bill when Cornerstone creates it via the one-way sync.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the AP loop work end to end?
          </h2>

          <p>
            The payment schedule is one piece of a complete AP automation flow. Here&apos;s every step
            from task to paid:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Task completes in the build schedule.</strong>{" "}
              Cornerstone auto-generates a PO and emails it to the assigned vendor — no manual PO creation.
            </li>
            <li>
              <strong className="text-white">PO sent → Purchase Order in QuickBooks.</strong>{" "}
              The committed cost appears in your books immediately as an outstanding PO. Drafts stay private.
            </li>
            <li>
              <strong className="text-white">PO marked received → Bill auto-creates.</strong>{" "}
              Cornerstone creates the matching Bill in QuickBooks, linked to the PO, which then closes.
              No dangling open POs, no duplicate lines.
            </li>
            <li>
              <strong className="text-white">AP schedule sets the due date.</strong>{" "}
              The bill&apos;s due date computes from the invoice/bill date using the vendor&apos;s
              schedule — Net-X, Weekly, Monthly, Bi-weekly, or Semi-monthly — and lands on the
              QuickBooks Bill automatically.
            </li>
            <li>
              <strong className="text-white">Builder batch-pays on payday.</strong>{" "}
              All bills due by that date appear together in QuickBooks for one manual approval run.
              One payday, one check run, no hunting across the vendor list.
            </li>
          </ol>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/20 px-5 py-4 my-6">
            <p className="text-sm text-amber-300">
              <strong>Human pay gate:</strong> Cornerstone creates the bill and sets the due date.
              QuickBooks holds it for payment. The builder manually approves every payment in QBO —
              Cornerstone never auto-pays, and that gate cannot be disabled.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does batch-pay beat one-off approvals?
          </h2>

          <p>
            The real payoff from AP schedules is cash-flow control. When every vendor bill lands in
            QuickBooks with a pre-computed due date, your bookkeeper can run a simple report on a
            Monday morning and see exactly what&apos;s due by Friday. All framing bills due the 15th?
            One batch approval. All plumbing bills due weekly every Friday? One batch approval.
          </p>

          <p>
            Compare that to the alternative: hunting through 30 open bills of varying ages, trying to
            remember what Net terms you negotiated with each vendor two seasons ago, and manually
            entering due dates that may or may not match what the vendor expects. That&apos;s not
            bookkeeping — it&apos;s archaeology.
          </p>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            takes the archaeology out of AP. One schedule per vendor, set once, applied automatically
            to every bill for the life of the relationship.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the QuickBooks Bill look like?
          </h2>

          <p>
            Each synced Bill carries a structured memo so any transaction in QuickBooks is traceable
            back to the exact home and trade without leaving QBO:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">Example Bill memo in QuickBooks</p>
            <p>Community: Riverside Estates | Lot 7 | 1204 River Bend Dr</p>
            <p>PO #2091 | Cost Code: Framing</p>
            <p>Vendor: Precision Framing LLC</p>
          </div>

          <p>
            Community name, lot number, street address, PO number, and cost code — all in one line.
            A bookkeeper can pull the transaction from the QBO register and immediately know which home
            and trade it covers without opening Cornerstone.
          </p>

          <p>
            For push visibility,{" "}
            <strong className="text-white">Accounting → Sync Events</strong> in Cornerstone shows every
            push to QuickBooks — timestamp, result status, and retry history if a push failed. You always
            know what landed in QuickBooks and what&apos;s still pending, without logging into QBO to check.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do AP schedules fit the broader purchasing platform?
          </h2>

          <p>
            AP schedules are the accounting endpoint for a purchasing workflow that starts well upstream.
            Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              full purchasing module
            </Link>{" "}
            covers vendor bid requests with auto-generated scope-filtered Excel templates, a no-login
            vendor portal for bid submission, side-by-side bid comparison, community-assigned vendor
            awards with locked pricing, and auto-generated POs from the awarded bid. The AP schedule
            system is where that work lands in QuickBooks — with the right due date, the right memo,
            and zero manual entry.
          </p>

          <p>
            This also connects to{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>
            , Cornerstone&apos;s construction AI agent with 396+ skills. Foreman can handle multi-step
            purchasing workflows — generating scope items, managing vendor bids, and updating pricing —
            so the AP schedule is the automated endpoint for a process that Foreman can start from a
            single chat prompt.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What Cornerstone handles vs. what stays in QuickBooks
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { cornerstone: "PO generation and vendor email", qbo: "Purchase Order in books" },
                { cornerstone: "Posting PO as QBO commitment", qbo: "Committed cost recorded" },
                { cornerstone: "Auto-creating Bill on PO receipt", qbo: "Bill ready for payment" },
                { cornerstone: "Computing due date by AP schedule", qbo: "Due date on the Bill" },
                { cornerstone: "Clean memo (community, lot, PO#, cost code)", qbo: "Traceable QBO transaction" },
                { cornerstone: "Sync Events log + retry history", qbo: "Manual batch payment approval" },
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

          <p>
            For builders running 50+ homes per year across multiple communities, AP schedules are the
            difference between an uncontrolled pile of invoices and a clean, predictable cash-flow
            process. The vendor does their job. Cornerstone handles the paper trail. QuickBooks shows a
            dated AP register ready for one batch-pay run on payday — every time.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Put your AP on a schedule.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Set payment schedules per vendor in Cornerstone PM and stop managing due dates by hand.
              Net-X, weekly, bi-weekly, monthly, or semi-monthly — every bill lands in QuickBooks with
              the right date, ready for one batch-pay run on payday.
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
