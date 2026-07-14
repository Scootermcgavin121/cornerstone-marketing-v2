import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/automatic-sales-tax-materials.png";
const heroImageAlt =
  "Construction sales tax on materials — Cornerstone taxes materials and exempts labor on POs and change orders";

const blogSchema = buildBlogPostSchema({
  title: "Automatic Sales Tax on Materials (Labor Stays Exempt)",
  slug: "automatic-sales-tax-materials-labor-exempt-construction",
  description:
    "Cornerstone applies sales tax to materials only and keeps labor exempt across every PO and change order, then carries the exact sales tax into QuickBooks.",
  datePublished: "2026-07-14",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "Automatic Sales Tax on Materials (Labor Stays Exempt) — Cornerstone PM™ Blog",
  description:
    "Cornerstone applies sales tax to materials only and keeps labor exempt across every PO and change order, then carries the exact sales tax into QuickBooks.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/automatic-sales-tax-materials-labor-exempt-construction",
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

const taxRules = [
  {
    lineType: "Materials",
    examples: "Lumber, concrete, roofing OSB, fixtures",
    taxable: true,
  },
  {
    lineType: "Labor",
    examples: "Frame labor, plumbing labor, HVAC installation",
    taxable: false,
  },
  {
    lineType: "Change Order — Material lines",
    examples: "Upgraded countertops, additional framing",
    taxable: true,
  },
  {
    lineType: "Change Order — Labor lines",
    examples: "Additional trim work, re-routing",
    taxable: false,
  },
];

export default function AutoSalesTaxPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Automatic Sales Tax on Materials (Labor Stays Exempt)
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 14, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM automatically applies sales tax to material lines and keeps labor exempt
            on every purchase order and change order — then carries the exact tax amount into
            QuickBooks with the synced transaction.
          </p>

          <p>
            Getting the material-labor tax split right by hand is one of those tasks that sounds
            simple until you&apos;re doing it on 30 active homes with mixed POs. Most construction
            jurisdictions tax the sale of materials and exempt the sale of labor — but plenty of
            builders still apply a flat tax rate to the entire PO, which means they&apos;re
            overstating taxable cost on labor-heavy subcontracts. Others skip tax on everything and
            clean it up at month-end. Neither approach keeps the books clean in real time.
          </p>

          <p>
            Cornerstone handles the split automatically as part of the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>
            . The tax rate is set once, and it applies to material lines only — every time, on
            every PO and change order, without manual intervention.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the material-labor tax split work?
          </h2>

          <p>
            The rule is straightforward: material lines on a PO are taxable, labor lines are
            exempt. Cornerstone applies this split to both purchase orders and change orders, so
            the tax calculation is consistent whether the cost originated as a base PO line or a
            change order addition.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Tax treatment by line type
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              <div className="grid grid-cols-[1.4fr_2fr_auto] px-5 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide bg-slate-900/30">
                <span>Line Type</span>
                <span>Examples</span>
                <span>Taxable?</span>
              </div>
              {taxRules.map((row, i) => (
                <div key={i} className="grid grid-cols-[1.4fr_2fr_auto] items-center">
                  <div className="px-5 py-3.5 font-medium text-white">{row.lineType}</div>
                  <div className="px-5 py-3.5 text-slate-400 text-xs">{row.examples}</div>
                  <div className="px-5 py-3.5">
                    {row.taxable ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-2 py-0.5">
                        <CheckCircle className="w-3 h-3" /> TAX
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-400 bg-slate-700/40 border border-slate-700/40 rounded-full px-2 py-0.5">
                        <XCircle className="w-3 h-3" /> EXEMPT
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The calculated tax flows directly into the PO total and — because{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone syncs one-way to QuickBooks Online
            </Link>{" "}
            — it carries into the synced Purchase Order or Bill with the correct tax amount already
            applied. The bookkeeper doesn&apos;t need to recalculate or adjust anything on the
            QuickBooks side.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why accurate tax split matters for job costing
          </h2>

          <p>
            Most builders know that materials are taxable and labor isn&apos;t. Where the
            calculation breaks down is on mixed POs — a single subcontract that includes both
            material supply and installation. If the tax is applied to the full PO total, the
            committed cost in the books overstates the actual tax liability. If it&apos;s skipped
            entirely, the accrual is understated.
          </p>

          <p>
            Neither error is catastrophic on a single PO. Across 200 POs on 30 active homes,
            the cumulative error in committed cost is meaningful — and it compounds when you&apos;re
            drawing from a construction loan where your lender is reconciling committed cost against
            the draw schedule.
          </p>

          <p>
            Cornerstone&apos;s automatic split keeps committed cost accurate at the line level.
            Material costs carry their tax; labor costs don&apos;t. The Master Cost Budget reflects
            the real liability for every trade, not a rounded estimate.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Tax on change orders — same rules apply
          </h2>

          <p>
            Change orders follow the same material-vs-labor logic as base POs. A change order
            adding upgraded countertops taxes the material portion; a change order adding trim
            carpenter time does not. This consistency matters because change orders often arrive
            mid-project when attention is elsewhere — having the tax apply automatically removes
            one more thing to check before approving.
          </p>

          <p>
            When a change order syncs to QuickBooks as part of the one-way push, the tax amount
            is already embedded. The transaction arriving in QuickBooks is the complete, accurate
            number — not a pre-tax figure the bookkeeper needs to adjust.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this fits the broader QuickBooks sync story
          </h2>

          <p>
            Automatic sales tax is one piece of a{" "}
            <Link
              href="/blog/quickbooks-online-sync-home-builder-construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              larger one-way sync
            </Link>{" "}
            between Cornerstone and QuickBooks Online. Approved POs post to QuickBooks as
            Purchase Orders (commitments). When a PO is marked received, the matching Bill
            auto-creates and closes the PO. Change orders sync as they&apos;re approved. Vendors
            sync automatically. Every transaction carries a structured memo — community name, lot
            number, address, PO number, and cost code — so every line in QuickBooks is traceable
            without opening Cornerstone.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/60 px-5 py-4 my-6 font-mono text-sm text-slate-300">
            <p className="text-slate-500 text-xs mb-3 font-sans">
              Example PO memo in QuickBooks (with tax already applied)
            </p>
            <p>Community: Maple Ridge | Lot 14 | 847 Birchwood Ct</p>
            <p>PO #1042 | Cost Code: Framing</p>
            <p>Materials: $4,650.00 + Sales Tax: $383.63 | Labor: $5,400.00 (exempt)</p>
          </div>

          <p>
            The memo carries the material and labor breakdown alongside the tax so any transaction
            in QuickBooks is self-documenting. You don&apos;t need Cornerstone open to understand
            what the charge covers or why the tax is what it is.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The connection to the hard-cost rule
          </h2>

          <p>
            Cornerstone&apos;s platform-wide{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard-cost rule
            </Link>{" "}
            means that every dollar in the Master Cost Budget traces back to accepted vendor
            pricing — there are no stored defaults or estimator fudges. Automatic sales tax is a
            natural extension of that principle: the tax on material cost is computed from the
            actual accepted bid price, not a rounded estimate. A line with no accepted vendor
            pricing shows as $0 / needs pricing, and its tax is $0 too — not an invented number
            that gives a false sense of completeness.
          </p>

          <p>
            Taken together, the hard-cost rule and automatic tax split mean the Master Cost
            Budget is trustworthy at every level: the material cost is real, the labor cost is
            real, and the tax is computed correctly from those real numbers. That&apos;s the
            foundation for accurate lender draw requests and honest buyer-facing change order
            pricing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about sales tax for options and upgrades?
          </h2>

          <p>
            The same material-taxable / labor-exempt logic applies to options and upgrades in the
            Design Center. When a buyer selects a material upgrade — flooring, countertops,
            exterior finish — the associated cost line on the PO carries tax. Labor for
            installation stays exempt. Builders don&apos;t need to configure this per option; the
            platform handles it consistently based on line type.
          </p>

          <p>
            This is especially useful for builders running{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              a buyer-facing Design Center
            </Link>{" "}
            where upgrades are priced from accepted vendor bids. The upgrade price the buyer sees
            reflects the real material cost plus tax — not a guess — and that number flows cleanly
            into the PO and from there into QuickBooks.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Accurate tax, every line, every PO.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM automatically applies sales tax to material lines, keeps labor exempt,
              and carries the correct tax into QuickBooks — on every PO, every change order, without
              manual adjustment. See the full purchasing platform in action.
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
