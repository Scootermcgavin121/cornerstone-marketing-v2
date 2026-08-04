import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Lock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/bid-leveling-vendor-comparison.png";
const heroImageAlt =
  "Bid leveling — side-by-side vendor bid comparison on matching scope-item lines for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Bid Leveling: How to Compare Vendor Quotes Apples-to-Apples",
  slug: "bid-leveling-side-by-side-vendor-comparison-home-builders",
  description:
    "Three vendors, three formats, three sets of assumptions. How bid leveling works when every quote lands on the same scope-item lines for home builders.",
  datePublished: "2026-08-04",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Level Vendor Bids in Cornerstone PM",
  description:
    "Compare vendor quotes apples-to-apples using scope-filtered bid templates, side-by-side comparison, community-based awards, and locked pricing.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send the bid request with a scope-filtered template",
      text: "In Cornerstone, go to Purchasing → Bid Requests → New Request. Select your floorplans, vendors, scopes, and deadline, then send. Each invited vendor receives an auto-generated Excel template with Base, Structural, and Designer tabs — filtered to their trade so a plumber only sees plumbing, not framing or cabinetry.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Track invite status per vendor",
      text: "The bid request dashboard shows each vendor's invite status: Invited, Viewed, Submitted, or Declined. When a vendor declines, they do it in one click — which is far more actionable than silence.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Open the side-by-side comparison",
      text: "Once two or more vendors have submitted, Cornerstone shows their quotes side-by-side with drill-down to the individual scope item. Because every vendor filled in the same template lines, the comparison is immediate — no re-keying, no guessing what assumptions are buried in a PDF.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Award by community, not just by price",
      text: "Select the winning bid for each community. One vendor can win Community A while a different vendor wins Community B — you can keep multiple accepted bids per scope active at the same time. The cheapest number does not have to win; relationship and performance factor in.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Lock the awarded bid",
      text: "Once a bid is awarded, Cornerstone locks it. Neither you nor the vendor can quietly edit the number afterward. Every downstream budget line — scope items, area costs, Master Cost Budget — traces back to that locked, awarded price under the hard cost rule.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Bid Leveling: How to Compare Vendor Quotes Apples-to-Apples — Cornerstone PM™ Blog",
  description:
    "Three vendors, three formats, three sets of assumptions. How bid leveling works when every quote lands on the same scope-item lines for home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/bid-leveling-side-by-side-vendor-comparison-home-builders",
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

const scopeRows = [
  { scope: "Framing Labor", vendorA: "$24,200", vendorB: "$22,800", vendorC: "$26,500" },
  { scope: "Structural Steel", vendorA: "$8,400", vendorB: "$8,400", vendorC: "$7,900" },
  { scope: "Roof Decking", vendorA: "$6,100", vendorB: "$5,850", vendorC: "$6,400" },
  { scope: "Exterior Sheathing", vendorA: "$4,300", vendorB: "$4,750", vendorC: "$4,100" },
  { scope: "Total", vendorA: "$43,000", vendorB: "$41,800", vendorC: "$44,900", isTotal: true },
];

export default function BidLevelingPage() {
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

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            Bid Leveling: How to Compare Vendor Quotes Apples-to-Apples
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 4, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The cheapest quote isn&apos;t always the cheapest job — especially when
            three vendors submit in three different formats with three different
            assumptions. Bid leveling puts every quote on the same scope-item lines
            so the comparison is real.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s purchasing module
            </Link>{" "}
            handles this without a spreadsheet.
          </p>

          <p>
            Here is a scenario every purchasing manager recognizes: you send a bid
            request to three framing contractors. One emails a lump sum. One sends
            a spreadsheet with labor and material broken out differently than you
            expected. One attaches a PDF with line items that don&apos;t match your
            scope at all, plus an asterisk next to cleanup that reads &ldquo;quoted
            separately.&rdquo; You now spend two hours retyping all three into an
            Excel comparison before you can even guess who is actually cheaper — and
            you still aren&apos;t sure, because the assumptions aren&apos;t aligned.
          </p>

          <p>
            That two-hour reconciliation is what bid leveling is supposed to
            eliminate. The goal is simple: every vendor fills in the same lines so
            the side-by-side comparison is immediate. Cornerstone does this by
            removing the free-form format entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do vendor quotes land in different formats?
          </h2>

          <p>
            Vendors quote in whatever format they use internally. Without a
            structured template, a framing sub might quote by the square foot,
            by crew day, or as a lump sum that buries materials and labor together.
            None of those formats map cleanly onto a builder&apos;s scope-item budget,
            so every comparison requires translation — which introduces error and
            takes time.
          </p>

          <p>
            The underlying problem is that most bid systems ask vendors to interpret
            the scope rather than fill it in. When the scope is ambiguous, so is the
            quote. Cleanup, mobilization, and materials haul-off end up either
            double-counted or missing entirely, and the comparison you run is based
            on apples vs. oranges regardless of how careful you are.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 1: Send every vendor the same template
          </h2>

          <p>
            In Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Purchasing → Bid Requests
            </Link>{" "}
            flow, every invited vendor receives an auto-generated Excel template
            with three tabs: Base, Structural, and Designer. The template is
            scope-filtered — a plumber only sees the plumbing scope items, not
            framing or cabinetry. The line items on that template are the exact
            same scope items your budget is built on, so when a quote comes back,
            it maps directly to your cost plan without translation.
          </p>

          <p>
            Vendors don&apos;t need a Cornerstone account to access or submit the
            template. They click the link in their email, download the file, fill
            in their numbers, and upload it back — along with any supporting
            documents — through a{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              no-login vendor portal
            </Link>
            . No account friction, no forgotten passwords, no reason to ghost
            the request.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 2: Track exactly who has seen the request
          </h2>

          <p>
            Every invite moves through four states: Invited, Viewed, Submitted, and
            Declined. The bid request dashboard shows the current status per vendor,
            so you know at a glance whether someone has opened the link or is still
            sitting on the invite.
          </p>

          <p>
            The Declined state is underrated. When a vendor can&apos;t price a job,
            they can decline in one click — which tells you to find a replacement
            before the deadline, not after. Most traditional bid processes produce
            silence instead of a decline, and silence is far more expensive than
            an honest no.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 3: Compare bids side-by-side, line by line
          </h2>

          <p>
            When two or more vendors submit, Cornerstone surfaces them in a
            side-by-side view with drill-down to each scope-item line. Because
            every vendor filled in the same template, the comparison requires no
            retyping or reconciliation — the numbers are already aligned.
          </p>

          {/* Bid comparison table */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Side-by-side framing bid comparison — Oak Creek Community
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-800">
                    <th className="text-left px-5 py-3 text-slate-400 font-medium">Scope Item</th>
                    <th className="text-right px-5 py-3 text-emerald-400 font-semibold">All-Star Framing</th>
                    <th className="text-right px-5 py-3 text-slate-300 font-medium">Peak Construction</th>
                    <th className="text-right px-5 py-3 text-slate-300 font-medium">Summit Builders</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {scopeRows.map((row, i) => (
                    <tr key={i} className={row.isTotal ? "bg-slate-900/60" : ""}>
                      <td className={`px-5 py-3 ${row.isTotal ? "font-bold text-white" : "text-slate-300"}`}>
                        {row.scope}
                      </td>
                      <td className={`text-right px-5 py-3 ${row.isTotal ? "font-bold text-emerald-400" : "text-emerald-300"}`}>
                        {row.vendorA}
                      </td>
                      <td className={`text-right px-5 py-3 ${row.isTotal ? "font-bold text-white" : "text-slate-400"}`}>
                        {row.vendorB}
                      </td>
                      <td className={`text-right px-5 py-3 ${row.isTotal ? "font-bold text-white" : "text-slate-400"}`}>
                        {row.vendorC}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                All three vendors filled in the same scope-item lines — no retyping, no translation.
              </p>
            </div>
          </div>

          <p>
            From this view you can see more than the total — you can see where the
            spread comes from. If Peak Construction is $1,200 cheaper overall but
            $500 higher on structural steel and $1,700 lower on labor, that tells
            you something about their crew efficiency assumptions that a total
            number alone would hide.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 4: Award by community, not by lowest price
          </h2>

          <p>
            The most important thing bid leveling makes possible isn&apos;t finding
            the cheapest number — it&apos;s making a confident, defensible decision
            about who gets the work and where.
          </p>

          <p>
            Cornerstone awards bids per community, not per project. One vendor
            wins Oak Creek; a different vendor wins Maple Ridge. Both bids can be
            accepted simultaneously. The vendor you trust most in a community where
            you are new, the vendor whose crew knows your superintendent on a
            community where the schedule is tight — those are legitimate criteria,
            and the side-by-side comparison gives you the data to make that call
            intentionally rather than defaulting to whoever came in lowest.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What the bid workflow covers
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "Scope-filtered Excel templates",
                  detail: "Base, Structural, and Designer tabs — each vendor sees only their trade",
                },
                {
                  label: "No-login vendor portal",
                  detail: "One link from the email, no account required — bids lock after submission",
                },
                {
                  label: "Per-vendor status tracking",
                  detail: "Invited → Viewed → Submitted → Declined — no guessing who needs a follow-up",
                },
                {
                  label: "Side-by-side comparison",
                  detail: "Drill down to individual scope items across all submitted bids at once",
                },
                {
                  label: "Community-based awards",
                  detail: "Assign different vendors to different communities — multiple accepted bids per scope",
                },
                {
                  label: "Locked pricing on award",
                  detail: "Neither builder nor vendor can edit the number after award — every budget line traces back to it",
                },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 5: Lock the bid — and mean it
          </h2>

          <p>
            Once a bid is awarded in Cornerstone, it locks. Neither the builder
            nor the vendor can quietly edit the number afterward. That lock is not
            a technicality — it is the foundation of accurate job costing.
          </p>

          <p>
            Cornerstone runs on what it calls the{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>
            : nothing in the budget carries a stored or default cost. Every scope
            item, area cost, and Master Cost Budget line traces back to an accepted
            vendor price. A line with no awarded bid shows as $0 / needs pricing
            rather than a fabricated number. When you award a bid and lock it, you
            are creating the source of truth that every downstream budget
            calculation will reference — all the way through QuickBooks.
          </p>

          <div className="not-prose rounded-xl border border-emerald-800/30 bg-emerald-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-emerald-300 mb-1">
                  Why the lock matters
                </p>
                <p className="text-sm text-slate-400">
                  An unlocked bid is a number that can drift. A vendor who knows
                  the price is still negotiable will test that assumption. A
                  builder who can quietly edit an awarded bid creates budget
                  variance that nobody can explain later. The lock is what makes
                  &ldquo;every dollar traces back to an awarded bid&rdquo; literally true.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How bid leveling connects to the rest of the purchasing stack
          </h2>

          <p>
            Bid leveling is not a standalone feature — it is one step in a
            connected purchasing workflow. Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            runs the full loop: you send bid requests, vendors submit through the
            no-login portal, you compare and award, and the awarded price flows into
            the scope item and the Master Cost Budget. When a task completes,
            the purchase order generates and emails the vendor automatically.
            On receipt, the linked Bill auto-creates in QuickBooks and closes the
            PO — no dangling commitments, no duplicate entry.
          </p>

          <p>
            Foreman AI can run parts of this workflow by chat. Ask it to draft a
            scope-of-work from your scope items, identify which vendors are still
            pending on a bid request, or pull a bid comparison summary — it reads
            and writes real data, so the answer it gives is based on your actual
            records, not a generic template. That is what it means to have{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              396+ construction skills
            </Link>{" "}
            that reach into the purchasing module.
          </p>

          <p>
            The goal of bid leveling is not to pick the lowest number faster. It
            is to make a confident, well-informed decision about who gets the work
            in each community — and then lock that decision in a way that the entire
            platform can build on. When every quote arrives on the same lines and
            every award locks, the comparison is honest and the budget that follows
            from it is trustworthy.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop retyping bids into a spreadsheet.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone sends every vendor the same scope-filtered template,
              tracks invite status, and shows submitted quotes side-by-side so
              you can compare and award in minutes — not hours. See it in action.
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
