import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/hard-cost-rule-vendor-priced.png";
const heroImageAlt =
  "Vendor-priced construction budgets — Cornerstone hard-cost rule ties every dollar to an awarded vendor bid";

const blogSchema = buildBlogPostSchema({
  title: "Every Dollar Traces Back to an Awarded Bid: The Hard-Cost Rule",
  slug: "hard-cost-rule-vendor-priced-budgets-no-fudging",
  description:
    "Cornerstone stores no default or made-up costs. Every line is priced from accepted vendor pricing — a line with no awarded bid shows $0 / needs pricing. Here's why.",
  datePublished: "2026-07-10",
  mentionsProduct: { name: "Cornerstone PM", url: "https://www.cornerstonepm.ai" },
});

export const metadata: Metadata = {
  title:
    "Every Dollar Traces Back to an Awarded Bid: The Hard-Cost Rule — Cornerstone PM™ Blog",
  description:
    "Cornerstone stores no default or made-up costs. Every line is priced from accepted vendor pricing — a line with no awarded bid shows $0 / needs pricing. Here's why.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/hard-cost-rule-vendor-priced-budgets-no-fudging",
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

const pillars = [
  {
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    title: "All cost flows from accepted vendor pricing",
    desc: "No line in Cornerstone carries a stored default or made-up cost. A scope item only has a cost once a vendor bid has been submitted and accepted. That's it.",
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-amber-400" />,
    title: "Unawarded lines show $0 / needs pricing",
    desc: "If a scope item has no accepted bid, the budget shows $0 / needs pricing — an honest signal that this line still needs a real number, not a padded estimate.",
  },
  {
    icon: <Shield className="w-5 h-5 text-cyan-400" />,
    title: "Scope-first area costs keep costs organized",
    desc: "Area costs require you to pick or create a scope first. Every cost line is filed under the trade it belongs to — so nothing drifts into the wrong bucket.",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What is the Hard-Cost Rule in Cornerstone PM?",
    a: "The Hard-Cost Rule is a platform-wide principle: no line item in Cornerstone PM carries a stored, default, or made-up cost. All cost flows from accepted vendor pricing. A scope item or part with no awarded bid shows as $0 / needs pricing instead of a fabricated placeholder number. This applies to POs, area costs, scope items, and parts across the entire platform.",
  },
  {
    q: "What are scope-first area costs?",
    a: "Scope-first area costs require you to pick or create a scope before adding any cost lines. The bucket title becomes the scope name — so a Framing area cost contains only framing-related Parts or Scope Items. This prevents costs from drifting into the wrong trade category and makes the Master Cost Budget easier to audit and compare against vendor bids.",
  },
  {
    q: "What is the difference between a Scope Item, a Part, and an Allowance in area costs?",
    a: "Parts and Scope Items are priced only from accepted vendor pricing — they show $0 / needs pricing until a vendor bid is awarded. An Allowance is the only line type that can carry a direct dollar amount as a budget placeholder, for items that don't yet have vendor pricing (e.g. appliances, landscaping). When a real bid replaces the allowance, the placeholder is removed — no double-counting.",
  },
  {
    q: "How does this compare to tools that ship default cost libraries?",
    a: "Many estimating tools include default cost libraries — pre-loaded unit prices for framing, plumbing, electrical, and other trades. Builders often forget to update these when market rates change, and the stale numbers quietly inflate or deflate budgets. Cornerstone ships with no default costs. Every dollar traces back to a real vendor who bid on your actual scope in your actual community.",
  },
  {
    q: "What happens when I create a PO for a scope with no awarded pricing?",
    a: "The PO line will show $0 until a vendor bid for that scope is accepted. You can still generate the PO and send it — the $0 is an explicit signal to the builder that pricing is still pending, not a silent filler number. This keeps the Master Cost Budget honest rather than hiding unpriced scope under a false estimate.",
  },
  {
    q: "Can Foreman AI build area costs following the hard-cost rule?",
    a: "Yes. Foreman AI can create area costs and add scope-filtered Parts and Scope Items by chat — following the same scope-first, vendor-priced flow a purchaser would use manually. It will never invent a default price; a line with no awarded bid shows $0 / needs pricing whether a human or Foreman creates it.",
  },
  {
    q: "How does the hard-cost rule help with margin protection?",
    a: "When every line traces to a real awarded bid, margin calculations are honest. There's no risk of a framing estimate being $4.25/sqft in the budget but $5.50/sqft in reality because someone forgot to update a default. The variance between budget and actual is always real — which means you can trust the profitability report Foreman generates, and act on it.",
  },
];

export default function HardCostRulePage() {
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
            Every Dollar Traces Back to an Awarded Bid: The Hard-Cost Rule
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 10, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM stores no default or made-up costs. Every line item in the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Master Cost Budget
            </Link>{" "}
            is priced from accepted vendor pricing — and a line with no awarded bid shows{" "}
            <strong className="text-white">$0 / needs pricing</strong> instead of a fabricated number.
            That&apos;s not a limitation. It&apos;s the point.
          </p>

          <p>
            Most construction estimating tools ship with a default cost library — pre-loaded unit
            prices for framing, plumbing, electrical, and a dozen other trades. The intent is
            convenience: you get a budget on day one without waiting for vendor bids. The problem
            is that builders forget to update those defaults when market rates change, and the
            stale numbers quietly inflate or deflate every budget they build on top of them.
            You&apos;re making margin decisions based on prices that may be two years old and from
            a completely different market.
          </p>

          <p>
            Cornerstone PM takes the opposite approach. We call it the Hard-Cost Rule: every cost
            in the system flows from an awarded bid, and anything unpriced is honest about being
            unpriced. The result is a budget you can actually trust — and a profitability number
            you can actually act on.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the Hard-Cost Rule mean in practice?
          </h2>

          <div className="not-prose space-y-4 my-6">
            {pillars.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            These three principles work together. Scope-first area costs organize every cost under
            the trade it belongs to. The vendor-pricing rule ensures costs are real the moment
            they appear. And the $0 / needs pricing signal makes sure no unpriced scope hides
            behind a false estimate while you&apos;re making award decisions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How are area costs structured?
          </h2>

          <p>
            Area costs in Cornerstone PM are scope-first by design. Before you can add any cost
            lines, you pick or create a scope — Framing, Plumbing, Electrical, Roofing Labor, and
            so on. The bucket title becomes the scope name.
          </p>

          <p>
            Inside that bucket, you can add three types of lines:
          </p>

          <ul className="list-disc list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Parts</strong> — individual material items from your
              parts catalog. Priced from accepted vendor pricing only. Show $0 / needs pricing
              until a vendor bid is awarded.
            </li>
            <li>
              <strong className="text-white">Scope Items</strong> — labor or scope lines tied to
              the selected trade. Also priced only from accepted vendor bids. Scope-filtered pickers
              mean you only see items that belong to this scope, not the entire catalog — less
              chance of a Framing item ending up in the Plumbing bucket.
            </li>
            <li>
              <strong className="text-white">Allowances</strong> — the only line type that can carry
              a direct dollar amount. Use allowances for items where you don&apos;t yet have vendor
              pricing (appliances, custom fixtures, landscaping). When a real bid arrives and gets
              accepted, the allowance is replaced — no double-counting, no phantom number lingering
              in the budget.
            </li>
          </ul>

          <p>
            The scope-filtered pickers are one of those quiet workflow improvements that matter
            more than they sound. If you&apos;re building a Plumbing area cost, the Parts and Scope
            Items you can add are pre-filtered to plumbing-relevant options. You&apos;re not scrolling
            through 400 items to find the right one and hoping you picked correctly. The trade
            boundary is enforced at selection time, which prevents miskeyed costs from showing up
            in the wrong scope — and making the budget summary misleading.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why $0 / needs pricing is better than a fake number
          </h2>

          <p>
            The counterintuitive thing about showing $0 / needs pricing instead of an estimate is
            that it feels incomplete. A budget with several $0 lines looks unfinished. The natural
            impulse is to fill it with something — anything — so the total looks like a real number.
          </p>

          <p>
            That impulse is exactly where margin disappears. Here&apos;s what happens with a default
            cost library:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4">
            <li>You load a floorplan with framing defaulted at $4.25/sqft from a two-year-old cost library</li>
            <li>You get vendor bids. The market has moved. Framing is actually $5.50/sqft in your region</li>
            <li>You accept the framing bid and award the scope — but the Master Cost Budget still shows the old default</li>
            <li>You present a margin report to the owner based on the budget. The margin looks healthy</li>
            <li>At close, the actual cost is $1.25/sqft higher across every home you built on that plan</li>
          </ol>

          <p>
            A $0 / needs pricing line is impossible to misread. There is no fake number to mistake
            for a real one. The moment a vendor bid is accepted and awarded, the real price replaces
            the placeholder — and the budget updates with an honest number, not a reconciliation
            problem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this connects to the full purchasing workflow
          </h2>

          <p>
            The Hard-Cost Rule is only meaningful if the vendor pricing behind it is also real.
            Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing system
            </Link>{" "}
            is built so every step of the bid-to-award flow produces vendor-priced data that lands
            directly in the budget:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <Link
                href="/blog/vendor-bid-requests-portal-no-login"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Bid requests
              </Link>{" "}
              go out with scope-filtered Excel templates so vendors bid on the right scope with the
              right line items
            </li>
            <li>
              Vendors submit through a no-login portal — no scope confusion, no reformatted spreadsheets
            </li>
            <li>
              <Link
                href="/blog/bid-import-ai-takeoff-pricing-modes"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Bid Import AI
              </Link>{" "}
              maps imported prices back to the right scopes with cross-scope penalty matching
            </li>
            <li>
              You accept and award — pricing locks, and the Master Cost Budget updates with the real number
            </li>
            <li>
              <Link
                href="/blog/community-vendor-bid-awards-not-lowest-bid"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Community-based awards
              </Link>{" "}
              let you assign different vendors per community, with locked pricing that can&apos;t be
              silently revised after the fact
            </li>
          </ol>

          <p>
            At the end of that chain, the Master Cost Budget is filled with numbers that trace back
            to actual awarded bids from actual vendors who priced your actual scope. Not defaults.
            Not estimates. Not something copied from last year&apos;s project and adjusted by gut feel.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What Foreman AI does with vendor-priced data
          </h2>

          <p>
            Because every cost in the system is real,{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            can generate reports that are actually useful. When Foreman reads your Master Cost Budget
            to produce a{" "}
            <Link
              href="/blog/foreman-ai-profitability-budget-reports-vendor-scorecards"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              profitability report
            </Link>{" "}
            or vendor scorecard, it&apos;s summarizing real vendor-priced data — not extrapolating from
            synthetic defaults. A profitability report built on filler numbers is still a guess
            in a table. A profitability report built on awarded vendor bids is a number you can
            present to a lender, make hiring decisions around, or use to set the ask price on a
            spec home.
          </p>

          <p>
            Foreman can also build area costs by chat — creating scope buckets and adding Parts
            and Scope Items following the same scope-first, vendor-priced flow a purchaser would
            use manually. It won&apos;t invent a number. A line with no awarded bid shows $0 / needs
            pricing whether a human or Foreman creates it. The honesty of the system doesn&apos;t
            change based on who&apos;s doing the data entry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The marketing angle: trust the number
          </h2>

          <p>
            The Hard-Cost Rule isn&apos;t just an engineering principle. It&apos;s a sales tool for builders
            who want to differentiate on financial integrity.
          </p>

          <p>
            When you show a buyer a finalized home price that traces every line to an awarded bid,
            you&apos;re not estimating. You&apos;re quoting. When a lender asks how the budget was built,
            you can answer with specifics — this framing scope was bid by three vendors and awarded
            at $5.50/sqft; this plumbing scope was awarded to the same vendor we&apos;ve used across
            the last four communities. That&apos;s a different conversation than &ldquo;we used our standard
            cost library and adjusted for inflation.&rdquo;
          </p>

          <p>
            Builders who operate this way have fewer change-order disputes, cleaner lender draws,
            and tighter variance between projected and actual margin. The discipline the Hard-Cost
            Rule imposes upstream pays off as financial clarity at close.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-6">
            Frequently asked questions about vendor-priced construction budgets
          </h2>

          <div className="not-prose">
            <FAQSection items={faqItems} />
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Every dollar. Every scope. Every awarded bid.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s Hard-Cost Rule means your budget is always honest — no filler,
              no defaults, no synthetic splits. Just real vendor pricing, organized by scope.
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
