import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle, ArrowRightIcon, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/quickbooks-home-builder-integration.png";
const heroImageAlt =
  "QuickBooks Online integration for home builders — Cornerstone PM auto-syncing POs, bills, and job costing to QBO";

const blogSchema = buildBlogPostSchema({
  title:
    "QuickBooks Online for Home Builders: Auto-Sync, Auto-Bill, and Real Job Costing",
  slug: "quickbooks-online-home-builder-auto-sync",
  description:
    "Cornerstone PM syncs to QuickBooks Online automatically — one-way. Approved POs, change orders, bills, and vendors post to QBO without manual entry. Real job costing per home.",
  datePublished: "2026-07-05",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "QuickBooks Online for Home Builders: Auto-Sync, Auto-Bill, and Real Job Costing — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM syncs to QuickBooks Online automatically — one-way. Approved POs, change orders, bills, and vendors post to QBO without manual entry. Real job costing per home.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/quickbooks-online-home-builder-auto-sync",
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

const syncItems = [
  {
    label: "Purchase Orders",
    detail:
      "Approved POs post to QBO automatically. Drafts stay private in Cornerstone until you approve and send — so your books only reflect committed costs.",
  },
  {
    label: "Change Orders",
    detail:
      "Every approved change order syncs and rolls up to the correct QBO project (Home), keeping your per-home P&L accurate even as scope evolves.",
  },
  {
    label: "Bills",
    detail:
      "Mark a PO received/complete and Cornerstone can auto-create the matching Bill in QBO — linked to the original PO so it auto-closes with no duplicate entry.",
  },
  {
    label: "Vendors",
    detail:
      "New vendors in Cornerstone are created in QBO automatically. No re-keying vendor names, payment terms, or contact details across two systems.",
  },
];

const apScheduleTypes = [
  {
    type: "Net-X Days",
    example: "Net-30, Net-45, Net-60 — standard trade payment windows.",
  },
  {
    type: "Weekly",
    example: "Pay every Tuesday, or any chosen weekday.",
  },
  {
    type: "Monthly",
    example: "1st of the month, 15th, last Friday — any Nth weekday including \"Last.\"",
  },
  {
    type: "Bi-weekly",
    example: "Every two weeks, anchored to a chosen payday.",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "Does Cornerstone PM sync two-ways with QuickBooks Online?",
    a: "No — the sync is one-way only: Cornerstone pushes data to QuickBooks Online. Approved POs, change orders, bills, and vendors flow from Cornerstone to QBO automatically. Changes made directly in QuickBooks do not overwrite Cornerstone. Cornerstone remains the source of truth for your build data.",
  },
  {
    q: "What QuickBooks Online plan is required?",
    a: "QuickBooks Online Plus or Advanced is required to use the PO sync feature. QBO Essentials and Simple Start do not support Purchase Orders.",
  },
  {
    q: "How does job costing work in QuickBooks after connecting Cornerstone?",
    a: "Each Community in Cornerstone maps to a QuickBooks Customer (parent). Each Home maps to a QBO Project (or sub-customer Job on QBO tiers without Projects). This gives you per-home and per-community P&L inside QuickBooks. Change orders and revisions roll up to the correct job automatically.",
  },
  {
    q: "Will Cornerstone ever auto-pay vendors in QuickBooks?",
    a: "No. Cornerstone never auto-pays. Payment always stays the builder's manual approval inside QuickBooks — Cornerstone only creates the Bill. The human pay gate is intentional and permanent.",
  },
  {
    q: "What is auto-Bill on PO completion?",
    a: "When you mark a PO received or complete in Cornerstone, the integration can optionally auto-create a matching Bill in QuickBooks that is linked to the original PO. The PO then auto-closes with no duplicate. This is an optional toggle per builder.",
  },
  {
    q: "What AP payment schedule types does Cornerstone support?",
    a: "Four types: Net-X Days (Net-30, Net-45, etc.), Weekly (any weekday), Monthly (Nth weekday of the month, including 'Last'), and Bi-weekly (every two weeks anchored to a chosen payday). The due date is computed automatically and carries into QuickBooks.",
  },
  {
    q: "What happens to draft POs in Cornerstone — do they sync to QuickBooks?",
    a: "No. Drafts stay private inside Cornerstone until you approve and send them. Only approved and sent items sync to QBO, so your QuickBooks books only reflect committed costs.",
  },
];

export default function QuickBooksAutoSyncPage() {
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
            QuickBooks Online for Home Builders: Auto-Sync, Auto-Bill, and Real Job Costing
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 5, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM syncs to QuickBooks Online automatically — one-way. Approved POs,
            change orders, bills, and vendors post themselves to QBO without manual entry, CSV
            exports, or re-keying. Your books stay current because Cornerstone handles the push.
          </p>

          <p>
            For production home builders,{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              managing purchasing
            </Link>{" "}
            and keeping QuickBooks accurate used to be two separate jobs. A PO got approved
            in one tool, then someone had to re-enter it in QBO. A change order was issued on
            the jobsite, and by the time it hit QuickBooks the numbers were three days stale.
            Cornerstone&apos;s QBO integration collapses those two jobs into one. Approve in
            Cornerstone — it appears in QuickBooks.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What syncs from Cornerstone to QuickBooks Online?
          </h2>

          <p>
            The sync is one-directional: Cornerstone pushes to QuickBooks. Changes you make
            directly in QuickBooks do not overwrite Cornerstone — your build data stays in
            Cornerstone as the single source of truth. Here&apos;s what flows automatically:
          </p>

          <div className="not-prose space-y-3 my-6">
            {syncItems.map((item) => (
              <div
                key={item.label}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white mb-1">{item.label}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Drafts stay private inside Cornerstone — they don&apos;t touch QuickBooks until you
            approve and send. That means your QBO books only reflect committed costs, not
            estimates your team is still working on.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Real job costing: Community → Customer, Home → Project
          </h2>

          <p>
            The integration maps your Cornerstone hierarchy directly to QuickBooks&apos; job
            costing model. Each <strong className="text-white">Community</strong> becomes a
            QuickBooks <strong className="text-white">Customer (parent)</strong>. Each{" "}
            <strong className="text-white">Home</strong> within that community becomes a{" "}
            <strong className="text-white">Project</strong> (or a sub-customer Job on QBO
            tiers without Projects).
          </p>

          <p>
            The result: per-home and per-community P&amp;L lives inside QuickBooks without
            any manual setup. A framing PO approved for Lot 14 in Oakridge Ridge
            automatically posts to the Oakridge Ridge customer &rarr; 123 Maple Drive (Lot 14)
            project. Change orders and revisions roll up to the correct job. Your accountant
            can pull a job cost report in QuickBooks and it reflects everything that happened
            in Cornerstone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            One-click Chart of Accounts setup
          </h2>

          <p>
            When you first connect Cornerstone to QuickBooks, a one-click Chart of Accounts
            setup builds a construction-ready CoA and cost-code items in your QBO account.
            It reuses existing accounts by name — it never restructures your books or creates
            duplicates. For builders with an established QuickBooks setup, the integration
            slots in without disrupting your existing accounting structure.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Auto-create a linked Bill when a PO completes
          </h2>

          <p>
            This is the feature that closes the AP loop. When you mark a PO received or
            complete in Cornerstone, the integration can optionally auto-create the matching
            Bill in QuickBooks — linked to the original PO so it auto-closes with no duplicate.
          </p>

          <p>
            The key word is <em>optionally</em>: this is a toggle per builder. And the
            payment step is always manual. Cornerstone never auto-pays. A vendor&apos;s bill
            lands in QuickBooks and sits there until the builder reviews and pays it inside
            QuickBooks on their own schedule. The human pay gate is intentional and
            permanent — no surprise payments.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            AP payment terms and batch-pay: set it once, pay everyone on payday
          </h2>

          <p>
            Cornerstone lets builders configure AP payment terms so due dates compute
            automatically and carry into QuickBooks. Four schedule types are supported:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 bg-slate-900/60 border-b border-slate-800">
              <h3 className="text-sm font-semibold text-white">AP Payment Schedule Types</h3>
            </div>
            {apScheduleTypes.map((row) => (
              <div
                key={row.type}
                className="grid grid-cols-5 border-b border-slate-800/60 text-sm last:border-b-0"
              >
                <div className="px-5 py-3.5 text-emerald-400 font-semibold col-span-2">
                  {row.type}
                </div>
                <div className="px-5 py-3.5 text-slate-300 col-span-3">{row.example}</div>
              </div>
            ))}
          </div>

          <p>
            When a bill&apos;s due date is computed automatically and flows to QuickBooks,
            builders can batch-pay everyone on one payday. Instead of hunting through open
            bills across different vendors and due dates, you see every bill that&apos;s due,
            approve the batch, and send payment — one operation instead of twenty.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The end-to-end AP loop for home builders
          </h2>

          <p>
            Put the pieces together and the AP workflow for a production home builder
            becomes almost fully automated:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Task completes in Cornerstone.</strong>{" "}
              A scheduled task — framing complete, rough plumbing passed inspection — triggers
              the next step.
            </li>
            <li>
              <strong className="text-white">PO auto-generates and emails the vendor.</strong>{" "}
              Cornerstone creates the PO from the awarded bid and sends it to the vendor
              automatically.
            </li>
            <li>
              <strong className="text-white">PO syncs to QuickBooks.</strong>{" "}
              The approved PO posts to the correct QBO project the moment it&apos;s sent.
            </li>
            <li>
              <strong className="text-white">Vendor completes the work and submits an invoice.</strong>{" "}
              The vendor&apos;s only job is to send an invoice. They don&apos;t need a portal login
              or a software account.
            </li>
            <li>
              <strong className="text-white">PO is marked complete; Bill auto-creates.</strong>{" "}
              The builder marks the PO received. If the auto-Bill toggle is on, the linked
              Bill appears in QuickBooks and the PO auto-closes.
            </li>
            <li>
              <strong className="text-white">Builder reviews and batch-pays on payday.</strong>{" "}
              On the configured payday, bills come due automatically. The builder reviews the
              batch in QuickBooks and approves payment. No manual due-date tracking required.
            </li>
          </ol>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0" />
              <p className="font-semibold text-white text-sm">
                Vendor&apos;s only job: send an invoice
              </p>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The full AP loop — task completion, PO creation, QBO sync, Bill creation,
              and batch pay — runs on Cornerstone and QuickBooks. Your vendors don&apos;t need
              a portal, a login, or a software subscription. They submit an invoice;
              everything else is automated.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How the QBO integration fits the full purchasing workflow
          </h2>

          <p>
            The QuickBooks integration is the accounting layer on top of{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s end-to-end purchasing system
            </Link>
            . It doesn&apos;t replace any step — it extends the system into your books automatically:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              Blueprint AI extracts 130+ material scopes from your floor plan PDFs — those
              scopes become the scope items that drive POs.
            </li>
            <li>
              Awarded vendor bids lock pricing per community. When a PO generates, it uses
              the confirmed rate.
            </li>
            <li>
              The{" "}
              <Link
                href="/blog/bid-import-ai-takeoff-pricing-modes"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Bid Import AI
              </Link>{" "}
              keeps the Master Cost Budget current as bids evolve — replacement, not
              duplication.
            </li>
            <li>
              Every PO that flows to QBO traces back to a real scope, a real awarded bid,
              and a real floorplan. No filler pricing, no synthetic splits.
            </li>
          </ul>

          <p>
            For builders who already use QuickBooks for accounting, the integration means
            one platform for purchasing decisions (Cornerstone) and one platform for
            accounting (QuickBooks) — with the sync running automatically between them.
            No nightly batch jobs, no CSV round-trips, no reconciliation surprises.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Frequently asked questions
          </h2>

          <div className="not-prose">
            <FAQSection items={faqItems} />
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Approve in Cornerstone. It posts to QuickBooks.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s QuickBooks Online integration is live now — one-way sync,
              real job costing per home, auto-Bill on PO completion, and AP batch-pay on
              your schedule. Connect your existing QuickBooks account in minutes.
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
