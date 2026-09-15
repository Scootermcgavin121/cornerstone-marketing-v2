import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Truck, HardHat, ClipboardCheck, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/separate-roof-labor-supplier-bids-home-builders.png";
const heroImageAlt =
  "roof labor and supplier bids illustrated in a Cornerstone PM home builder workflow dashboard";

const blogSchema = buildBlogPostSchema({
  title: "One Roof, Two Vendors: Separate Roofing Labor From Material Supply",
  slug: "separate-roof-labor-supplier-bids-home-builders",
  description:
    "Separate roof labor and roof supplier bids so each trade has a clear scope, community vendor assignment, and accepted pricing without duplicate budget costs.",
  datePublished: "2026-09-15",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Why would a builder split roof labor and roof supply into separate bid requests?",
    a: "A roof labor crew and a roofing material supplier are often two different companies with two different pricing structures — one bids installation labor, the other bids shingles, underlayment, and accessories. Sending one combined bid request forces both scopes into a single vendor's number, which hides which portion is labor and which is material, and makes it harder to compare vendors who only do one side of the job.",
  },
  {
    q: "Does splitting roof scope into two bid requests create duplicate budget costs?",
    a: "No, as long as each bid request is scoped correctly. Roof Labor and Roof Supplier are distinct scope items in Cornerstone PM, so an accepted bid on one does not overlap with an accepted bid on the other. Duplicate costs happen when both bids are written broadly enough to cover the same work — the fix is a clear scope description on each request, not merging them back into one.",
  },
  {
    q: "Who is responsible for freight and delivery on a split roof bid?",
    a: "That depends entirely on what each vendor's quote includes, and it is worth confirming explicitly before awarding either bid. Some suppliers quote delivered pricing; others quote pickup only and expect the labor crew or builder to arrange freight. Reviewing this before award — not after the material shows up on site — avoids a gap where neither vendor believes freight was their responsibility.",
  },
  {
    q: "Can a builder assign different roof labor and roof supplier vendors per community?",
    a: "Yes. Community vendor assignment in Cornerstone PM works the same way for a split roof scope as it does for any other trade — a builder can award Roof Labor to one crew in one community and a different crew in another, while running the same or a different Roof Supplier vendor across both.",
  },
  {
    q: "What should a purchasing coordinator check before awarding a split roof bid?",
    a: "Compare both quotes against the scope description and confirm what each one actually includes: does the supplier's price cover accessories like ridge vent, drip edge, and flashing, or only field shingles? Does the labor bid include tear-off and disposal, or just install? Reading both scopes side by side before award — rather than assuming standard inclusions — is the step that catches gaps.",
  },
  {
    q: "Does Cornerstone PM automatically detect gaps between a labor bid and a supplier bid?",
    a: "No. Cornerstone PM gives purchasing teams scope-filtered bid requests, community-level vendor awards, and locked accepted pricing once a bid is awarded, but it does not automatically flag missing freight terms or scope gaps between two vendors' quotes. That review is still a manual step for the purchasing coordinator before award.",
  },
];

export const metadata: Metadata = {
  title:
    "One Roof, Two Vendors: Separate Roofing Labor From Material Supply — Cornerstone PM™ Blog",
  description:
    "Separate roof labor and roof supplier bids so each trade has a clear scope, community vendor assignment, and accepted pricing without duplicate budget costs.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/separate-roof-labor-supplier-bids-home-builders",
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

export default function SeparateRoofLaborSupplierBidsPage() {
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
            One Roof, Two Vendors: Separate Roofing Labor From Material Supply
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 15, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A roof is one line item on a schedule but often two separate businesses: a labor crew
            that installs it and a supplier that provides the shingles, underlayment, and
            accessories. Bidding both scopes as a single request hides which portion is labor and
            which is material — and makes it harder to hold either vendor accountable for their
            piece.{" "}
            <Link href="/purchasing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              Cornerstone PM's purchasing module
            </Link>{" "}
            treats Roof Labor and Roof Supplier as distinct scope items so each can be bid,
            awarded, and tracked on its own.
          </p>

          <p>
            Most trades on a home builder's schedule map cleanly to one vendor: one framer, one
            electrician, one plumber. Roofing is different often enough that treating it like every
            other single-vendor trade causes real problems. A production builder running the same
            roof plan across multiple communities may use a regional supplier for material and a
            local install crew for labor — and those two companies rarely quote as a package.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does bundling roof labor and supply into one bid cause problems?
          </h2>
          <p>
            When a single bid request covers both installation and material, a few predictable
            issues show up. First, vendors who only do one side of the job either decline to bid at
            all or pad their number to cover unfamiliar territory. A labor-only crew asked to quote
            material pricing will typically mark it up as a hedge, or skip line items they don't
            normally source. Second, comparing bids across vendors gets harder — one company's
            combined number and another's labor-only number aren't apples to apples on a{" "}
            <Link
              href="/blog/bid-leveling-side-by-side-vendor-comparison-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              side-by-side comparison
            </Link>
            . Third, when something goes wrong on site — a material shortage, a labor scheduling
            slip — a bundled bid makes it slower to identify which vendor is actually responsible.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does Cornerstone PM separate roof labor from roof supply?
          </h2>
          <p>
            Cornerstone PM's scope-item structure includes Roof Labor and Roof Supplier as
            individually addressable scopes rather than a single bundled "Roofing" line. That means
            a purchasing coordinator can send a scope-filtered bid request to an install crew for
            labor only, and a separate scope-filtered request to a material supplier, without either
            vendor seeing or pricing the other's portion. Each bid moves through the same{" "}
            <Link
              href="/blog/why-subcontractors-ignore-bid-requests-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              no-login vendor portal
            </Link>{" "}
            and status tracking as any other trade — Invited, Viewed, Submitted, Declined — and
            each can be awarded independently.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <HardHat className="w-4 h-4 text-emerald-400" />
                <p className="font-semibold text-white">Roof Labor</p>
              </div>
              <p className="text-slate-400 text-sm">
                Tear-off, disposal, and installation. Priced and awarded to an install crew, with
                its own accepted vendor cost and its own community-level assignment.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Truck className="w-4 h-4 text-emerald-400" />
                <p className="font-semibold text-white">Roof Supplier</p>
              </div>
              <p className="text-slate-400 text-sm">
                Shingles, underlayment, ridge vent, flashing, and other accessories. Priced and
                awarded to a material supplier, separately from the labor scope.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does splitting the scope create duplicate costs in the budget?
          </h2>
          <p>
            Not if the two bid requests are scoped clearly. The risk of duplication comes from
            ambiguity, not from the split itself: if both requests are written broadly enough to
            plausibly cover the same work, a purchasing coordinator could end up with two accepted
            bids that overlap. The fix is a precise scope description on each request — Roof Labor
            covers installation and disposal, Roof Supplier covers material and accessories — so
            there's no gray area between them. Under Cornerstone's{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>
            , each awarded bid contributes its own vendor-priced line to the budget, so a clean
            scope split shows up as two distinct, traceable costs rather than one padded estimate.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Freight and accessories are where gaps hide
                </p>
                <p className="text-sm text-slate-400">
                  Some suppliers quote delivered pricing; others quote pickup only. Some labor
                  crews assume the supplier is covering flashing and drip edge; some suppliers
                  assume the crew is sourcing their own accessories. Confirm both before award —
                  Cornerstone doesn't automatically detect a mismatch between the two quotes.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What should a purchasing coordinator check before awarding either bid?
          </h2>
          <p>
            A short review checklist before awarding a split roof scope: confirm whether the
            supplier's quote is delivered or pickup, and who arranges freight if it's the latter;
            confirm whether accessories (ridge vent, drip edge, flashing, starter strip) are in the
            supplier's number or expected from the labor crew; and confirm the labor bid's tear-off
            and disposal scope matches what the schedule assumes. None of this requires new tooling
            — it's a matter of reading both scope descriptions side by side before either bid is
            accepted, the same way a coordinator would review any two related bids that touch the
            same physical work.
          </p>
          <p>
            Once both are awarded, each vendor can carry a different{" "}
            <Link
              href="/blog/community-specific-vendor-awards-production-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              community-level assignment
            </Link>
            , so a builder running several communities isn't forced to use the same labor-and-supply
            pairing everywhere. A regional supplier might serve every community while a different
            local crew installs in each one — and Cornerstone's per-community award model handles
            that without extra configuration.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <ClipboardCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Two scopes, two accepted prices, one clean budget
                </p>
                <p className="text-sm text-slate-400">
                  Roof Labor and Roof Supplier each carry their own accepted vendor cost once
                  awarded. Both trace back to a real vendor bid — not a single blended
                  "roofing" estimate that hides which side of the job actually costs what.
                </p>
              </div>
            </div>
          </div>

          <p>
            For the full purchasing workflow — bid request through purchase order — see{" "}
            <Link href="/purchasing" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2">
              Cornerstone PM's purchasing module
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop bidding labor and material as one blended number.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM's scope-filtered bid requests let you award Roof Labor and Roof
              Supplier separately, by community, with accepted pricing that locks once awarded.
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
        title="Roof Labor and Supplier Bid FAQ"
        subtitle="Common questions about splitting roofing scope into separate labor and material bids for home builders."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
