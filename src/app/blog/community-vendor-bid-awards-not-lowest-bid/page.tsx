import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Lock, Trophy, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/community-vendor-bid-awards.png";
const heroImageAlt =
  "Vendor bid management construction software — community-assigned bid awards for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Why Lowest-Bid Auctions Hurt Home Builders (and What We Do Instead)",
  slug: "community-vendor-bid-awards-not-lowest-bid",
  description:
    "Lowest-bid auctions ignore the relationships builders rely on. See how community-assigned vendor awards and locked bid pricing protect margins instead.",
  datePublished: "2026-06-30",
});

export const metadata: Metadata = {
  title:
    "Why Lowest-Bid Auctions Hurt Home Builders (and What We Do Instead) — Cornerstone PM™ Blog",
  description:
    "Lowest-bid auctions ignore the relationships builders rely on. See how community-assigned vendor awards and locked bid pricing protect margins instead.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/community-vendor-bid-awards-not-lowest-bid",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
          height: 772,
        alt: heroImageAlt,
      },
    ],
  },
};

const auctionProblems = [
  {
    icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    title: "Relationships don't survive a race to zero",
    body: "Your best framing contractor has held your schedule for three seasons. A newcomer undercuts them by 4% on paper. The auction says switch. Then the newcomer misses the first two starts and your schedule collapses. The cheapest bid is never just about the number.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-red-400" />,
    title: "One vendor can't serve every community equally",
    body: "A plumbing sub based in the north end of your metro runs faster, tighter schedules in those communities. A different sub covers the south. Forcing a single lowest-bid winner across all communities ignores travel time, crew capacity, and on-site familiarity.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-orange-400" />,
    title: "Vendors game the auction on re-bid",
    body: "When vendors know they'll be bid against every round, they come in low to win — then recover margin on change orders, substitutions, and schedule delays that are technically their fault but hard to prove. Trusted vendors with locked pricing don't play that game.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-slate-400" />,
    title: "Post-award edits create silent margin erosion",
    body: "Without a locking mechanism, awarded prices drift. A vendor sends a revised invoice 'reflecting updated material costs.' A project manager accepts it without escalating. The Master Cost Budget never gets updated. By the time the home closes, the margin is gone and nobody knows why.",
  },
];

const bidFeatures = [
  { feature: "Award by community (not just lowest price)", cornerstone: true, typical: false },
  { feature: "Multiple accepted bids per scope", cornerstone: true, typical: false },
  { feature: "Bid locks after award — no silent edits", cornerstone: true, typical: false },
  { feature: "Side-by-side bid comparison", cornerstone: true, typical: "Sometimes" },
  { feature: "No-login vendor portal for submission", cornerstone: true, typical: false },
  { feature: "Scope-filtered Excel templates per trade", cornerstone: true, typical: false },
];

export default function CommunityVendorBidAwardsPage() {
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
          height={772}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Lowest-Bid Auctions Hurt Home Builders (and What We Do Instead)
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 30, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM lets builders award vendor bids by community — not just by lowest price.
            One vendor wins Community A, a different vendor wins Community B. Once a bid is accepted,
            it locks: no silent revisions, no invoice creep, no margin erosion after the fact.
          </p>

          <p>
            Most bid management software is built around a simple idea: collect bids, pick the
            lowest number, move on. That logic works fine on commodity materials. It breaks badly
            when applied to the subcontractor relationships that actually keep production schedules
            running.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s purchasing system
            </Link>{" "}
            was built around a different premise: the builder — not an algorithm — decides who wins.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does lowest-bid logic fail for home builders?
          </h2>

          <p>
            A production builder isn&apos;t running a one-time government contract. The same framing
            crew, the same plumbing sub, the same finish carpenter shows up to every home in a
            community — sometimes for years. The quality of that relationship, and the sub&apos;s
            familiarity with your standards and schedule, is real economic value that doesn&apos;t
            appear in a bid spreadsheet.
          </p>

          <div className="not-prose space-y-4 my-6">
            {auctionProblems.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            Scale any of these across 80 homes a year in four communities and the real cost of
            lowest-bid logic becomes visible: schedule variance, quality callbacks, and margin
            bleed on change orders that wouldn&apos;t exist with trusted vendors locked to
            confirmed pricing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM handle vendor bid awards differently?
          </h2>

          <p>
            The bid award in Cornerstone PM is a builder decision — informed by side-by-side bid
            comparison, but not forced by it. Here&apos;s how the flow works:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Send scope-filtered bid requests.</strong>{" "}
              Select the floorplans, vendors, scopes, deadline, and message from the{" "}
              <Link
                href="/blog/vendor-bid-requests-portal-no-login"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Purchasing → Bid Requests
              </Link>{" "}
              flow. Each vendor gets an Excel template with only their trade&apos;s scope — no
              cross-scope clutter.
            </li>
            <li>
              <strong className="text-white">Vendors submit through a no-login portal.</strong>{" "}
              A token-protected link in the bid request email takes vendors straight to a portal
              where they can download the template, upload their pricing, and submit — no account
              creation required.
            </li>
            <li>
              <strong className="text-white">Compare bids side by side.</strong>{" "}
              When two or more vendors submit on the same scope, the comparison view puts them
              next to each other. You see the numbers, the per-unit rates, and any notes the
              vendor added. Price is one input, not the only one.
            </li>
            <li>
              <strong className="text-white">Award by community.</strong>{" "}
              Vendor A wins Community A. Vendor B wins Community B. You can hold multiple accepted
              bids per scope — the same framing sub might cover three communities while a
              specialist handles your fourth. The platform follows your decision, not a pricing
              algorithm.
            </li>
            <li>
              <strong className="text-white">The bid locks on acceptance.</strong>{" "}
              Once you award a bid, it locks. Neither builder nor vendor can quietly edit the
              number. If real conditions change and a revision is warranted, it goes through a
              formal change process — not a silent invoice update that nobody catches until
              reconciliation.
            </li>
          </ol>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does &quot;locked&quot; actually mean for your budget?
          </h2>

          <p>
            A locked bid in Cornerstone PM means the awarded number flows into the Master Cost
            Budget as confirmed pricing. It doesn&apos;t change unless you explicitly approve a change
            order through the system. That matters because:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Your cost model stays accurate.</strong>{" "}
              When you&apos;re pricing homes in a new community, the confirmed vendor bids from a
              prior community give you a real cost baseline — not an estimate that might drift.
            </li>
            <li>
              <strong className="text-white">Margin erosion surfaces immediately.</strong>{" "}
              If a real change is needed, the system shows the delta against the locked bid.
              You can see exactly how much the variance is costing before you approve it.
            </li>
            <li>
              <strong className="text-white">Vendors know the rules.</strong>{" "}
              When vendors know the bid locks on acceptance, they submit real numbers — not low
              bids they intend to recover through change orders. The bidding process becomes
              honest because the lock makes it count.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Community-assigned awards: a practical example
          </h2>

          <p>
            You&apos;re running three communities simultaneously — Oakridge (north), Creekside (central),
            and River Bend (south). You send framing bid requests to four subs. Here&apos;s what the
            award looks like in Cornerstone PM:
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 bg-slate-900/60 border-b border-slate-800 grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide">
              <span>Community</span>
              <span>Awarded Vendor</span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-400" /> Status
              </span>
            </div>
            {[
              { community: "Oakridge (north)", vendor: "Peak Framing Co.", status: "Locked" },
              { community: "Creekside (central)", vendor: "Peak Framing Co.", status: "Locked" },
              { community: "River Bend (south)", vendor: "Southside Frames LLC", status: "Locked" },
            ].map((row) => (
              <div
                key={row.community}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300">{row.community}</div>
                <div className="px-5 py-3.5 text-slate-300 flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  {row.vendor}
                </div>
                <div className="px-5 py-3.5 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-medium">{row.status}</span>
                </div>
              </div>
            ))}
          </div>

          <p>
            Peak Framing wins two communities because they&apos;re well-established up north and the
            schedule relationship is strong. Southside Frames wins River Bend because their crew
            is already in that corridor on another project and their pricing reflects lower travel
            cost. Both bids are locked. The Master Cost Budget reflects confirmed framing costs
            for all three communities — not estimates.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Bid management feature comparison
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <h3 className="text-sm font-semibold text-white">
                Vendor bid management: Cornerstone PM vs. typical construction software
              </h3>
            </div>
            {bidFeatures.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300 col-span-1">{row.feature}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.cornerstone === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {typeof row.typical === "string" ? (
                    <span className="text-xs text-amber-400">{row.typical}</span>
                  ) : row.typical === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 text-xs font-medium text-slate-500 uppercase tracking-wide bg-slate-900/60 border-t border-slate-800">
              <div className="px-5 py-3">Feature</div>
              <div className="px-5 py-3 text-center">Cornerstone PM</div>
              <div className="px-5 py-3 text-center">Typical platform</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How vendor bid awards fit the full purchasing workflow
          </h2>

          <p>
            The bid award isn&apos;t a standalone feature — it&apos;s the confirmation step in{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s end-to-end purchasing system
            </Link>{" "}
            for production home builders. Here&apos;s where it sits in the full flow:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4">
            <li>
              Blueprint AI extracts 130+ material scopes from a floor plan PDF in under 60 seconds
            </li>
            <li>
              Auto-quantity scope items and{" "}
              <Link
                href="/blog/construction-allowances-master-cost-budget-home-builders"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                allowances
              </Link>{" "}
              populate the Master Cost Budget before any bids arrive
            </li>
            <li>
              Scoped bid requests go out with auto-generated Excel templates — each vendor sees
              only their trade
            </li>
            <li>Vendors submit through the no-login portal; the bid locks when they submit</li>
            <li>
              Side-by-side comparison informs the award — you pick the vendor, not the
              lowest-price algorithm
            </li>
            <li>
              Awarded bids lock and flow into the Master Cost Budget as confirmed pricing, replacing
              any allowance placeholder for that scope
            </li>
            <li>
              <Link
                href="/blog/bid-import-ai-takeoff-pricing-modes"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Bid Import AI
              </Link>{" "}
              handles re-imports when scope or pricing changes — replacement, not duplication
            </li>
          </ol>

          <p>
            The result is a purchasing system where every confirmed dollar traces to a real vendor,
            a real scope, and a real award — per community, per floorplan, with nothing that can
            be quietly revised after the fact.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Award by relationship. Lock on acceptance. Protect your margin.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s vendor bid system gives builders the control to assign the right
              vendor to the right community — and lock the pricing the moment it&apos;s accepted.
              No auction race, no silent revisions, no surprises at reconciliation.
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
