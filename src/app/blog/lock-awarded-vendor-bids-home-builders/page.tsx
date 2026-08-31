import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Lock, CheckCircle, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/lock-awarded-vendor-bids-home-builders.png";
const heroImageAlt =
  "Lock awarded vendor bids dashboard for production home builders";

const blogSchema = buildBlogPostSchema({
  title: "Lock the Price After Award: Protecting Vendor Bids From Cost Drift",
  slug: "lock-awarded-vendor-bids-home-builders",
  description:
    "Protect awarded vendor pricing from last-minute edits with locked bids, traceable decisions, and community-specific cost control for production home builders.",
  datePublished: "2026-08-31",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const faqs: FAQItem[] = [
  {
    q: "What does it mean to lock an awarded vendor bid?",
    a: "Locking an awarded bid means that once a builder accepts a vendor's quote for a specific community, the price is frozen — neither the builder nor the vendor can revise the number after acceptance. Every downstream budget line and purchase order then traces back to that locked, awarded figure. This creates a single source of truth and eliminates the informal 're-negotiations' that erode margin.",
  },
  {
    q: "Can a vendor change their price after submitting a bid in Cornerstone?",
    a: "Vendors can edit their submission while it is in submitted status and before it is awarded. Once the bid is awarded and locked by the builder, the pricing becomes read-only. This protects builders from last-minute cost creep and gives vendors a clear signal that the deal is done at the agreed number.",
  },
  {
    q: "How do community-based vendor awards work?",
    a: "In Cornerstone PM, vendors are awarded per community rather than globally. One framing crew might win Oak Creek while a different crew wins Elmwood Commons — and both awards can be active simultaneously. Builders can hold multiple accepted bids on file for different communities or schedule windows without those awards conflicting. Each community carries its own locked pricing that feeds its own budget.",
  },
  {
    q: "What is the hard cost rule and how does it relate to locked bids?",
    a: "The hard cost rule means that nothing in Cornerstone carries a stored default or estimator-fudged cost. Every dollar on a budget line traces back to accepted vendor pricing — and a line with no awarded bid shows as $0 / needs pricing instead of a fabricated number. Locked bids are the mechanism that puts real numbers behind that rule: the moment a bid is awarded and locked, its pricing becomes the actual cost basis for every downstream calculation.",
  },
  {
    q: "How does locked bid pricing flow into the Master Cost Budget?",
    a: "When a vendor's bid is awarded and locked in Cornerstone PM, the accepted pricing automatically feeds the Master Cost Budget for that community and floorplan. Scope items that were previously showing as needs-pricing update to reflect the real awarded cost. Change the awarded vendor and re-lock, and the budget updates accordingly — there is no re-keying required.",
  },
  {
    q: "What happens if market pricing changes after a bid is locked?",
    a: "A locked bid is a contractual record of what the vendor agreed to. If market conditions shift and the vendor needs to renegotiate, the builder can accept a formal change order or request a new bid for the next community. The locked bid stays intact as the record for the awarded scope. This separation — real contractual history on one side, new bids for new work on the other — is what makes the audit trail defensible.",
  },
  {
    q: "How do locked bids help with construction audit trails and disputes?",
    a: "Bid locking creates an immutable record of who quoted what, when, and at what price. If a subcontractor later claims they quoted a different number, the locked record shows the exact submitted amount and the award timestamp. This eliminates the ambiguous email thread as the source of truth and replaces it with a timestamped, platform-enforced record that neither party can quietly edit.",
  },
];

const bidRows = [
  { vendor: "Apex Framing", scope: "Framing", amount: "$38,450", status: "Awarded", locked: true, statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { vendor: "Blue Ridge Electric", scope: "Electrical", amount: "$21,800", status: "Under Review", locked: false, statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20" },
  { vendor: "Summit HVAC", scope: "HVAC", amount: "$16,200", status: "Submitted", locked: false, statusColor: "text-sky-400 bg-sky-500/10 border-sky-500/20" },
];

export const metadata: Metadata = {
  title:
    "Lock the Price After Award: Protecting Vendor Bids From Cost Drift — Cornerstone PM™ Blog",
  description:
    "Protect awarded vendor pricing from last-minute edits with locked bids, traceable decisions, and community-specific cost control for production home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/lock-awarded-vendor-bids-home-builders",
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

export default function LockAwardedVendorBidsPage() {
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
            Lock the Price After Award: Protecting Vendor Bids From Cost Drift
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 31, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Once a vendor accepts an award, the price should be a record —
            not a suggestion. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            locks awarded bids so neither the builder nor the vendor can revise
            the number after acceptance, turning an agreed quote into a durable
            cost basis for every downstream budget line and purchase order.
          </p>

          <p>
            Cost drift is a quiet margin killer. A framing sub submits{" "}
            <strong className="text-white">$38,450</strong> in April, the
            builder awards it, and by the time the homes start in June the
            number has crept to{" "}
            <strong className="text-white">$41,200</strong> — through informal
            conversations, a new material surcharge email, or simply a
            misremembered figure on both sides. Without a locking mechanism, the
            original award is just an email with no enforcing power.
          </p>

          {/* Bid award visual */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center justify-between">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Bid Awards — Oak Creek Community
              </p>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <Shield className="w-3.5 h-3.5" />
                Price Protected
              </div>
            </div>
            <div className="divide-y divide-slate-800/60">
              {bidRows.map((row, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between px-5 py-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">{row.vendor}</p>
                    <p className="text-xs text-slate-500">{row.scope}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-slate-300">{row.amount}</span>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${row.statusColor}`}
                    >
                      {row.locked && <Lock className="w-3 h-3" />}
                      {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Awarded bids lock automatically — neither builder nor vendor can edit the price after acceptance.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does an accepted quote need to be locked?
          </h2>

          <p>
            An awarded bid without a lock is still a negotiation. Vendors know
            that builders are reluctant to restart a bid process mid-schedule, so
            a &ldquo;small adjustment&rdquo; after award carries very little risk for the
            sub. Builders, for their part, often accept the creep quietly because
            disputing it feels like damaging the relationship.
          </p>

          <p>
            The solution is not better negotiation — it is making the lock
            automatic and explicit. When a builder awards a bid in Cornerstone
            PM, the pricing freezes at that number. Both parties can see the
            locked record. The conversation that used to happen in an email thread
            now has a platform-enforced counterpart: the agreed price is a
            timestamped record, not a shared memory.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do community-based awards keep pricing organized?
          </h2>

          <p>
            Production builders rarely use the same vendor in every community.
            The framing crew that won Oak Creek at{" "}
            <strong className="text-white">$4.10 per square foot</strong> may
            not have been competitive in Elmwood Commons, where a different crew
            came in at <strong className="text-white">$3.85</strong>. Both awards
            need to be active, traceable, and locked simultaneously — and they
            need to feed separate community budgets without confusing each other.
          </p>

          <p>
            Cornerstone PM awards bids per community. Each community carries its
            own accepted pricing, its own locked vendor record, and its own cost
            basis feeding the{" "}
            <Link
              href="/blog/same-floorplan-two-communities-different-costs-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Master Cost Budget for that location
            </Link>
            . A builder can hold multiple accepted bids on file across different
            geographies or schedule windows without any of them interfering.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a locked bid connect to the rest of the budget?
          </h2>

          <p>
            A locked bid is not an isolated record — it is the source of truth
            for every downstream cost that references that scope. Under
            Cornerstone&apos;s{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>
            , nothing carries a stored default or estimator-fudged number — every
            dollar traces back to accepted vendor pricing. A scope item with no
            awarded bid shows as{" "}
            <strong className="text-white">$0 / needs pricing</strong> rather
            than inheriting a fabricated placeholder.
          </p>

          <p>
            The practical consequence: when framing locks at{" "}
            <strong className="text-white">$38,450</strong> in Oak Creek, every
            framing cost on every lot in that community immediately reflects that
            number. Purchase orders generated from completed schedule tasks carry
            the locked price. QuickBooks receives the synced PO with the correct
            figure. There is no second opportunity for the number to drift between
            the award and the check.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  The lock-to-PO chain
                </p>
                <p className="text-sm text-slate-400">
                  Bid awarded and locked &rarr; accepted pricing feeds the
                  Master Cost Budget &rarr; task completes &rarr; purchase order
                  auto-generates at the locked price &rarr; PO emails the vendor
                  &rarr; PO syncs to QuickBooks as a commitment. No re-keying,
                  no opportunity for the number to change between steps.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does a locked bid mean for dispute resolution?
          </h2>

          <p>
            Every construction project eventually produces a conversation that
            starts with &ldquo;I thought we agreed on&hellip;&rdquo; Locked bids make that
            conversation short. The platform record shows the exact submitted
            amount, the award timestamp, and the community the award applies to.
            Neither party can edit it retroactively.
          </p>

          <p>
            For builders, this removes the need to search email threads for the
            &ldquo;real&rdquo; number before a dispute. For vendors, it provides the same
            certainty: the awarded price is the price they will invoice against,
            and no informal conversation at the job site can quietly revise it
            downward after the fact. The lock benefits both sides.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What if a re-bid is needed?
          </h2>

          <p>
            Locked bids represent what was agreed for a specific award. If market
            conditions shift — a lumber spike, a sub&apos;s capacity change — the
            right mechanism is a formal new bid or change order for the next
            community or the next phase of work. The original award stays intact
            as the historical record.
          </p>

          <p>
            This separation — locked history on one side, new bids for new work
            on the other — is what keeps the audit trail clean across a
            multi-community, multi-phase build program running through several
            market cycles. The{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            is designed around this structure: bid requests, awards, locks, POs,
            and the QuickBooks sync form a chain where every step traces to the
            one before it.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Lock your vendor pricing before it drifts.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Community-based vendor awards, automatic bid locking, and a
              hard-cost rule that traces every budget dollar to an accepted
              bid — all in Cornerstone PM&apos;s purchasing module.
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
        items={faqs}
        title="Locked Vendor Bids FAQ"
        subtitle="Common questions about protecting awarded pricing and building traceable construction budgets."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
