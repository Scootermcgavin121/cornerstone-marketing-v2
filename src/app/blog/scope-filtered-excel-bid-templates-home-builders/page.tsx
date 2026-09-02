import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, FileSpreadsheet, Layers, Lock, Send } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/scope-filtered-excel-bid-templates-home-builders.png";
const heroImageAlt = "Construction bid template Excel workbook filtered by vendor scope";

const blogSchema = buildBlogPostSchema({
  title: "Stop Cleaning Up Vendor Quotes: Scope-Filtered Excel Bid Templates",
  slug: "scope-filtered-excel-bid-templates-home-builders",
  description:
    "Give every vendor a scope-filtered Excel bid template that standardizes quotes, reduces missing line items, and makes side-by-side comparisons faster.",
  datePublished: "2026-09-02",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Send Scope-Filtered Excel Bid Templates to Vendors",
  description:
    "A step-by-step process for generating and sending scope-filtered Excel bid templates so every vendor quotes only their own trade, in a consistent format that levels cleanly.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Create a bid request and select the scopes each vendor should see",
      text: "In Cornerstone's purchasing module, start a bid request and choose the floorplans, vendors, and scopes involved. Each invited vendor is tied to a scope — framing, roofing, plumbing, or whichever trade applies — so the template that reaches them is filtered to that scope before it ever leaves the building.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Let the template auto-generate with Base, Structural, and Designer tabs",
      text: "Cornerstone builds the Excel workbook automatically with three tabs — Base, Structural, and Designer — but only populates the rows relevant to the invited vendor's scope. A framing vendor never sees plumbing rough-in line items; a flooring vendor never sees roofing squares. The vendor opens a workbook that already matches their trade.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Send the request — vendors get a no-login link, not another account to manage",
      text: "The bid request emails a token-protected portal link to each vendor. There is no Cornerstone account to create. The vendor clicks through, downloads their scope-filtered template, and has exactly what they need to start pricing without a phone call to ask what's included.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Vendors fill in one format — not their own spreadsheet, not a PDF, not an email body",
      text: "Because every vendor bidding the same scope receives the identical column structure, unit labels, and row order, quotes come back in one shape instead of five. A vendor can't accidentally omit a line item that doesn't exist in their tab, and they can't quote line items outside their scope that would need to be stripped out later.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Upload the completed workbook back through the same portal",
      text: "The vendor uploads their priced workbook (or supporting PDF/CSV documentation) through the same no-login link, adds any notes, and submits. Once submitted, the bid locks — no quiet last-minute edits to a number your team already reviewed.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Compare submitted bids side-by-side without reformatting a single cell",
      text: "Because the incoming data already shares one structure, Cornerstone lines up submitted bids for the same scope directly against each other. There's no translation step where someone manually retypes three different vendor formats into one comparison sheet before a decision can be made.",
    },
  ],
};

const painPoints = [
  {
    icon: Layers,
    title: "One trade, one tab — never all scopes in one sheet",
    body: "A framing vendor's workbook shows framing rows. A roofing vendor's workbook shows roofing rows. Nobody has to scroll past 40 irrelevant line items to find the ones that matter to them.",
  },
  {
    icon: FileSpreadsheet,
    title: "Same columns, same units, every vendor",
    body: "Quantity, unit, unit cost, and total line up identically across every submission for a given scope, so comparison is a read, not a rebuild.",
  },
  {
    icon: Send,
    title: "No vendor account required",
    body: "A token-protected link handles the entire round trip — download, upload, submit or decline — without asking a subcontractor to remember another password.",
  },
  {
    icon: Lock,
    title: "Submitted locks the number",
    body: "Once a vendor submits, the bid can't be quietly edited. The number your team compared is the number that gets awarded.",
  },
];

export const metadata: Metadata = {
  title:
    "Stop Cleaning Up Vendor Quotes: Scope-Filtered Excel Bid Templates — Cornerstone PM™ Blog",
  description:
    "Give every vendor a scope-filtered Excel bid template that standardizes quotes, reduces missing line items, and makes side-by-side comparisons faster.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/scope-filtered-excel-bid-templates-home-builders",
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

export default function ScopeFilteredExcelBidTemplatesPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Stop Cleaning Up Vendor Quotes: Scope-Filtered Excel Bid Templates
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 2, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Quote comparison breaks down the moment every subcontractor
            returns a different spreadsheet. Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            fixes that at the source: every vendor gets an auto-generated
            Excel template already filtered to their scope, so quotes come
            back in one consistent shape instead of five incompatible ones.
          </p>

          <p>
            Ask five subcontractors to price a scope with no template, and
            you get five different spreadsheets — different units, different
            row order, different levels of detail, sometimes a line item that
            belongs to a trade that isn&apos;t even the one you asked. Someone
            on your team then spends an hour retyping numbers into a single
            comparison sheet before the actual decision can be made. Scope
            filtering removes that hour entirely.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {painPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <div
                  key={i}
                  className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p className="text-sm font-semibold text-white">
                      {point.title}
                    </p>
                  </div>
                  <p className="text-sm text-slate-400">{point.body}</p>
                </div>
              );
            })}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does quote comparison break down without a shared template?
          </h2>

          <p>
            A framing crew, a roofing supplier, and a plumbing sub don&apos;t
            think about a project the same way. Left to their own format,
            each one builds a spreadsheet around how they estimate their own
            work — which means the columns don&apos;t match, the units
            don&apos;t match, and the line items rarely map cleanly onto each
            other. That&apos;s fine for a single quote. It falls apart the
            moment you need to put two or three quotes for the same scope
            side by side.
          </p>

          <p>
            The usual fix is manual: someone retypes every vendor&apos;s
            numbers into one master comparison sheet, hoping they matched the
            right row to the right line item. That step is slow, it&apos;s
            error-prone, and it has to happen again on the next bid round when
            pricing changes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a scope-filtered template solve it before the vendor even opens it?
          </h2>

          <p>
            Cornerstone generates the workbook with three tabs — Base,
            Structural, and Designer — and only populates the rows that match
            the invited vendor&apos;s scope. A framing vendor&apos;s copy shows
            framing rows. A roofing vendor&apos;s copy shows roofing rows.
            Nobody scrolls past forty irrelevant line items looking for the
            ones that apply to them, and nobody prices a line that belongs to
            a different trade.
          </p>

          <p>
            Because every vendor bidding the same scope gets the identical
            column structure and row order, the comparison problem is solved
            before a single quote comes back. There&apos;s nothing to
            reconcile — the shape of the data is already the same.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the vendor actually experience?
          </h2>

          <p>
            No new account, no password to remember. The bid request emails a
            token-protected link straight to the vendor. They click through,
            download their scope-filtered Excel template, price it on their
            own schedule, and upload the completed workbook — plus any
            supporting PDF or CSV documentation — through that same portal.
            They can add notes, then submit or decline. Once they submit, the
            bid locks; there&apos;s no quiet edit to a number your team already
            reviewed.
          </p>

          <p>
            For a closer look at what happens after a vendor opens that
            link, see{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sending a bid request to 10 vendors in one click
            </Link>
            , and for how to track where each invitation stands, see{" "}
            <Link
              href="/blog/subcontractor-bid-status-tracking-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              invited, viewed, submitted, declined
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does a standard template mean the lowest number automatically wins?
          </h2>

          <p>
            No — standardizing the format only makes the numbers easy to
            read side by side. It doesn&apos;t choose a winner. Your team still
            reviews scope alignment, checks assumptions, and decides which
            vendor gets the award for each community. What the template
            removes is the friction of getting to that comparison in the
            first place — not the judgment call at the end of it. For a
            detailed look at building that comparison, see{" "}
            <Link
              href="/blog/bid-leveling-side-by-side-vendor-comparison-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              bid leveling for home builders
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens to the numbers after an award is made?
          </h2>

          <p>
            Once a vendor is awarded, the accepted pricing locks and flows
            into the Master Cost Budget and downstream purchase orders — no
            re-keying the numbers a second time because they were already
            structured correctly on the way in. If a vendor never responds to
            the request in the first place, standardized templates won&apos;t
            fix that on their own; see{" "}
            <Link
              href="/blog/why-subcontractors-ignore-bid-requests-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              why your subcontractors ignore your bid requests
            </Link>{" "}
            for the other half of that problem.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Give every vendor a template built for their scope.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Auto-generated Base, Structural, and Designer tabs, a no-login
              vendor portal, and side-by-side comparison the moment bids come
              in.
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
