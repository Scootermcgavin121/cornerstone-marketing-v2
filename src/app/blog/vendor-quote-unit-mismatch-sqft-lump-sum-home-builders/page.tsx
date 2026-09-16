import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Ruler, AlertTriangle, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vendor-quote-unit-mismatch-sqft-lump-sum-home-builders.png";
const heroImageAlt =
  "vendor quote unit mismatches illustrated in a Cornerstone PM home builder workflow dashboard";

const blogSchema = buildBlogPostSchema({
  title: "Square Feet or Whole-House Price? Catch Unit Mismatches Before Awarding a Bid",
  slug: "vendor-quote-unit-mismatch-sqft-lump-sum-home-builders",
  description:
    "Catch vendor quote unit mismatches before award by checking square-foot, linear-foot, and lump-sum pricing against takeoff quantities and scope descriptions.",
  datePublished: "2026-09-16",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Square Feet or Whole-House Price? Catch Unit Mismatches Before Awarding a Bid — Cornerstone PM™ Blog",
  description:
    "Catch vendor quote unit mismatches before award by checking square-foot, linear-foot, and lump-sum pricing against takeoff quantities and scope descriptions.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/vendor-quote-unit-mismatch-sqft-lump-sum-home-builders",
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
  name: "How to Catch Vendor Quote Unit Mismatches Before Awarding a Bid",
  description:
    "A step-by-step process for comparing a vendor's quoted unit against the takeoff quantity before accepting a bid, covering square-foot, linear-foot, and lump-sum pricing.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pull the takeoff quantity for the scope item",
      text: "Before reading a single vendor number, confirm the quantity the bid should be priced against — square footage for flooring, linear footage for trim, or a unit count for fixtures.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Read exactly how the vendor quoted the price",
      text: "Check whether the vendor priced per square foot, per linear foot, per unit, or as a single lump sum for the whole scope. The unit label is often smaller print than the price itself.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Multiply quantity-based lines against the takeoff",
      text: "For a per-square-foot or per-linear-foot quote, multiply the vendor's rate by the takeoff quantity to get a comparable total. A quote that skips this step is not yet an apples-to-apples number.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Do not multiply a lump-sum quote a second time",
      text: "A lump-sum quote already covers the full scope. Multiplying it against the takeoff quantity again produces a number several times too high and misreads the vendor's intent.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Flag disagreements and request written clarification",
      text: "If two vendors on the same scope quoted in different units, or a vendor's total doesn't reconcile against the stated unit and takeoff quantity, ask the vendor to confirm in writing before award.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Award the clarified bid and let the accepted price lock",
      text: "Once the unit is confirmed and the total reconciles, accept the bid. Cornerstone PM carries that accepted vendor price into the budget as the hard cost for that scope item.",
    },
  ],
};

export default function VendorQuoteUnitMismatchPage() {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

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
            Square Feet or Whole-House Price? Catch Unit Mismatches Before
            Awarding a Bid
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 16, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Two vendors can quote the exact same scope of work in two
            completely different units — one per square foot, one as a
            single whole-house price — and both numbers can look reasonable
            in isolation while being wrong relative to each other. Checking
            the vendor's quoted unit against the{" "}
            <Link href="/ai-takeoff" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              takeoff quantity
            </Link>{" "}
            before award is the step that catches this, and it belongs in
            every purchasing coordinator's{" "}
            <Link href="/purchasing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              bid review workflow
            </Link>
            .
          </p>

          <p>
            Unit mismatches aren't a software bug or a vendor trying to be
            deceptive — they're just how quoting naturally happens across
            different trades and different company sizes. A regional
            flooring supplier who stocks by the roll thinks in price per
            square foot. A local cabinetry shop that builds one job at a
            time thinks in a single number for the whole house. Both are
            valid ways to quote. The problem only shows up when a builder
            compares them without converting one to match the other first.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does a unit mismatch actually look like on a real bid?
          </h2>
          <p>
            Take a flooring scope on a 2,400 square-foot home. Vendor A
            quotes $4.25 per square foot. Vendor B quotes $9,600 for the
            whole job. At first glance those look like two numbers in the
            same ballpark — until you do the math: Vendor A's per-square-foot
            rate multiplied against the 2,400 square-foot takeoff comes to
            $10,200, not $9,600. That's a hypothetical example, but the shape
            of the error is common: a builder reads the smaller number and
            assumes it's the cheaper bid, without confirming the unit each
            vendor actually priced against.
          </p>
          <p>
            Trim carries the same risk in linear feet instead of square
            feet. A vendor quoting $1.80 per linear foot on a home with 340
            linear feet of baseboard comes to $612 — a number that means
            nothing next to a competing vendor's $2,400 lump-sum quote for
            the same trim package unless both are read against the same
            takeoff quantity.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="w-4 h-4 text-emerald-400" />
                <p className="font-semibold text-white">Quantity-Multiplied</p>
              </div>
              <p className="text-slate-400 text-sm">
                Priced per square foot, per linear foot, or per unit. Multiply
                the vendor's rate by the takeoff quantity to get a comparable
                total before evaluating the bid.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <p className="font-semibold text-white">Lump Sum</p>
              </div>
              <p className="text-slate-400 text-sm">
                A single price for the entire scope, already accounting for
                quantity. Multiplying it against the takeoff again inflates
                the number several times over.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a purchasing coordinator compare quotes in different units?
          </h2>
          <p>
            Start with the takeoff, not the quote. Every scope item on a
            floorplan has a quantity behind it — square footage for
            flooring and paint, linear footage for trim and gutters, a unit
            count for doors and fixtures. Pull that number first, then read
            each vendor's quote against it. A per-square-foot rate gets
            multiplied by the takeoff quantity; a lump-sum quote stands as
            written. Doing the multiplication before comparing bids — rather
            than comparing the raw numbers on the page — is what turns two
            differently formatted quotes into a real{" "}
            <Link
              href="/blog/bid-leveling-side-by-side-vendor-comparison-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              side-by-side comparison
            </Link>
            .
          </p>
          <p>
            This matters most when the two vendors on the same scope
            quoted in different formats — one per square foot, one lump
            sum. Without converting both to the same basis, a coordinator
            is effectively comparing two different kinds of numbers and
            treating them as equivalent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What should trigger a request for vendor clarification?
          </h2>
          <p>
            A few situations are worth a quick note back to the vendor
            before award rather than an assumption: the quote doesn't state
            a unit at all, the stated unit doesn't match how the scope is
            normally priced for that trade, or the total doesn't reconcile
            when the coordinator does the math against the takeoff quantity.
            None of these mean the vendor made a mistake — they usually mean
            the quote needs one clarifying reply confirming what basis the
            price was built on. That reply, in writing, is worth having
            before the bid is accepted.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Cornerstone doesn't auto-convert or flag unit mismatches
                </p>
                <p className="text-sm text-slate-400">
                  Cornerstone PM shows the takeoff quantity and the vendor's
                  quoted price side by side, but reading the vendor's unit
                  and doing the comparison is still a manual step for the
                  purchasing coordinator — the same way it would be on paper
                  or in a spreadsheet.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter once a bid is awarded?
          </h2>
          <p>
            Under Cornerstone's{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>
            , whatever price gets accepted on a bid becomes the locked line
            item in the budget — there's no separate estimating step that
            catches a unit error after the fact. If a lump-sum quote gets
            accidentally multiplied against the takeoff, or a per-square-foot
            rate gets treated as a whole-house total, that wrong number
            flows straight into the community's cost budget and stays there
            until someone notices. Catching the mismatch before award, not
            after, is what keeps the accepted price trustworthy.
          </p>
          <p>
            The review itself doesn't require new tooling — it requires
            reading the unit line on every quote with the same attention as
            the price line, and doing one multiplication before comparing
            bids. For the full purchasing workflow, from{" "}
            <Link
              href="/blog/why-subcontractors-ignore-bid-requests-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              bid request
            </Link>{" "}
            through accepted price, see{" "}
            <Link href="/purchasing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              Cornerstone PM's purchasing module
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop guessing whether a bid is priced per square foot or whole-house.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM shows takeoff quantities and vendor pricing side
              by side, with accepted bids locking straight into the
              community budget.
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
