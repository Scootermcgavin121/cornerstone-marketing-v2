import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/home-builder-sales-pipeline.png";
const heroImageAlt =
  "Home builder sales pipeline software — Cornerstone CRM connected to lots and scheduling";

const blogSchema = buildBlogPostSchema({
  title: "From Lead to Locked Lot: A Sales Pipeline Built for Home Builders",
  slug: "home-builder-sales-pipeline-crm-software",
  description:
    "Generic CRMs don't know what a lot, spec, or buyer selection is. See how Cornerstone connects the sales pipeline to lots, scheduling, and the Design Center.",
  datePublished: "2026-07-04",
  mentionsProduct: { name: "Cornerstone PM Sales Pipeline", url: "https://www.cornerstonepm.ai/sales" },
});

export const metadata: Metadata = {
  title:
    "From Lead to Locked Lot: A Sales Pipeline Built for Home Builders — Cornerstone PM™ Blog",
  description:
    "Generic CRMs don't know what a lot, spec, or buyer selection is. See how Cornerstone connects the sales pipeline to lots, scheduling, and the Design Center.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/home-builder-sales-pipeline-crm-software",
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

const crmGaps = [
  {
    gap: "No lot or community model",
    detail:
      "HubSpot and Salesforce think in 'contacts' and 'deals.' They have no concept of a lot, a spec home, or a community map. Builders end up creating custom fields that nobody maintains and reports that don't match reality.",
    hasFix: true,
    fix: "Cornerstone's pipeline is built around lots — each lead ties directly to a lot, a floorplan, and a community. The system knows the difference between a prospect browsing plans and a buyer who has locked a specific lot.",
  },
  {
    gap: "Sales and build live in separate tools",
    detail:
      "A generic CRM closes the deal — then hands it off to a spreadsheet, a separate scheduling tool, and an email chain. The buyer's preferences vanish. The project manager starts from scratch.",
    hasFix: true,
    fix: "In Cornerstone, a sold lot converts directly to an active home in the build pipeline. Scheduling starts from the sale date. Buyer selections flow into the Design Center without re-entry.",
  },
  {
    gap: "No builder-native automation",
    detail:
      "Generic CRM automations are generic — email sequences, stage moves, task assignments. They don't know what a pre-qualification stage means for a builder, or how to trigger a lot-hold workflow when a buyer goes under contract.",
    hasFix: true,
    fix: "Cornerstone's sales-pipeline webhook events let builders wire real builder automations: trigger a lot-hold notification when a prospect is marked 'Interested', fire a contract-ready alert when pre-qual is complete, kick off a Design Center invite when the lot is locked.",
  },
];

const pipelineStages = [
  { stage: "Lead Captured", note: "QR scan, website form, or manual entry", locked: false },
  { stage: "Lot Interest", note: "Buyer linked to a specific lot or floorplan", locked: false },
  { stage: "Pre-Qualified", note: "Financing status tracked in the record", locked: false },
  { stage: "Under Contract", note: "Lot hold triggered; scheduling notified", locked: true },
  { stage: "Design Center", note: "Buyer selections begin; no re-entry needed", locked: true },
  { stage: "Closed", note: "Home record transitions to active build", locked: true },
];

const comparisonRows = [
  { feature: "Lead-to-lot linking", cornerstone: true, generic: false },
  { feature: "Community/lot/floorplan model", cornerstone: true, generic: false },
  { feature: "Sold lot → build handoff (no re-entry)", cornerstone: true, generic: false },
  { feature: "Sales-pipeline webhook events", cornerstone: true, generic: "Sometimes" },
  { feature: "Design Center buyer selection integration", cornerstone: true, generic: false },
  { feature: "QR scan lead capture", cornerstone: true, generic: false },
  { feature: "Scheduling triggered from sale date", cornerstone: true, generic: false },
];

export default function HomeBuilderSalesPipelinePage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-sky-400 bg-sky-500/10 border-sky-500/20 mb-4 inline-block">
            Sales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            From Lead to Locked Lot: A Sales Pipeline Built for Home Builders
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 4, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>{" "}
            connects leads directly to lots, floorplans, and communities — so when a lot locks,
            the build pipeline starts and buyer data flows to the Design Center without anyone
            re-entering a single field.
          </p>

          <p>
            Generic CRMs were built for software sales, consulting engagements, and e-commerce.
            They&apos;re excellent at tracking contacts through a deal funnel. But a home builder&apos;s
            sales process isn&apos;t a deal funnel — it&apos;s a lot reservation, a floorplan selection,
            a pre-qualification, and a contract that kicks off a 6-month build. None of that maps
            cleanly to &quot;Prospect → Qualified → Proposal → Closed Won.&quot;
          </p>

          <p>
            The result for builders who try to use HubSpot, Salesforce, or even general-purpose
            construction CRMs: a disconnect between sales and operations that gets bridged by
            spreadsheets, copy-paste, and tribal knowledge — exactly the kind of friction that
            loses buyers and misses starts.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do generic CRMs fail home builders?
          </h2>

          <p>
            The gap isn&apos;t features — it&apos;s the data model. Generic CRMs were designed around
            contacts, accounts, and deals. None of those primitives understand a lot, a spec home,
            a community map, a floorplan, or a buyer selection sheet. Builders work around this
            by adding custom fields, but custom fields on the wrong data model is a house of cards
            that collapses every time a sales agent leaves or a process changes.
          </p>

          <div className="not-prose space-y-5 my-8">
            {crmGaps.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden"
              >
                <div className="flex items-start gap-3 px-5 py-4 border-b border-slate-800/60">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{item.gap}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mt-1">{item.detail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 px-5 py-4 bg-emerald-950/20">
                  <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">{item.fix}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does a builder-native sales pipeline look like?
          </h2>

          <p>
            The{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM sales pipeline
            </Link>{" "}
            is organized around how home builders actually sell — not how SaaS companies do.
            Every lead is linked to a community. Every stage reflects a real builder milestone.
            And when the lot locks, the rest of the platform knows about it.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 bg-slate-900/60 border-b border-slate-800">
              <h3 className="text-sm font-semibold text-white">Cornerstone PM pipeline stages</h3>
            </div>
            {pipelineStages.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 py-3.5 border-b border-slate-800/60 text-sm"
              >
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                  row.locked
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    : "bg-slate-800 text-slate-400 border border-slate-700"
                }`}>
                  {i + 1}
                </span>
                <div>
                  <p className={`font-semibold ${row.locked ? "text-emerald-300" : "text-slate-200"}`}>
                    {row.stage}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{row.note}</p>
                </div>
                {row.locked && (
                  <span className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                    Build triggered
                  </span>
                )}
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does lead capture work for home builders?
          </h2>

          <p>
            Most builder leads come from three places: model home walk-ins, website inquiries,
            and community signage. Cornerstone covers all three without requiring a separate
            lead-capture tool:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">QR scan capture:</strong> Every community and model
              home gets a QR code. A buyer scans, fills out a short form, and the lead lands
              in the pipeline pre-tagged to that community. No business cards, no manual entry
              by the sales agent at the end of the day.
            </li>
            <li>
              <strong className="text-white">Website contact form:</strong> Leads from the
              marketing site route directly into the pipeline — no Zapier integration required,
              no CSV import.
            </li>
            <li>
              <strong className="text-white">Manual entry:</strong> For phone inquiries and
              referrals, agents add leads directly with community and floorplan interest
              captured at the point of entry.
            </li>
          </ul>

          <p>
            Every lead comes in with a community tag, not just a name and an email. That matters
            because the pipeline and the lot inventory are the same system — a lead browsing
            the Magnolia plan in Community B is a different prospect than one interested in
            the same plan in Community A, and the pipeline reflects that from day one.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the sold lot hand off to the build?
          </h2>

          <p>
            This is where most builder sales processes break down. The contract is signed, the
            lot is locked, and then someone has to manually re-enter the buyer&apos;s name, the
            floorplan, the community, and the options interest into the scheduling system and
            the design center. In the best case it takes an hour. In the worst case something
            gets missed and the project manager is building a home configured for the wrong
            plan.
          </p>

          <p>
            In Cornerstone PM, the handoff is automatic:
          </p>

          <ol className="list-decimal list-inside space-y-3 text-slate-300 my-4">
            <li>
              <strong className="text-white">Lot locks in the sales pipeline.</strong>{" "}
              The buyer is marked Under Contract, the lot status updates from Available to
              Under Contract across the community map and lot inventory.
            </li>
            <li>
              <strong className="text-white">Home record created in the build pipeline.</strong>{" "}
              Cornerstone automatically creates the home record with the community, lot, floorplan,
              and buyer data pre-populated. The project manager doesn&apos;t start from a blank form.
            </li>
            <li>
              <strong className="text-white">Scheduling starts from the sale date.</strong>{" "}
              The{" "}
              <Link
                href="/construction"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                build schedule
              </Link>{" "}
              can be anchored to the contract date or the anticipated start date — no
              manual calendar entry needed.
            </li>
            <li>
              <strong className="text-white">Design Center invite triggers.</strong>{" "}
              Buyer selections open in the{" "}
              <Link
                href="/design"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Design Center
              </Link>{" "}
              automatically. The buyer logs in and sees their floorplan&apos;s available packages and
              options — not a blank selection sheet.
            </li>
          </ol>

          <p>
            The buyer data flows forward. Nobody re-keys anything. The project manager inherits
            a complete record, not a sticky note from the sales agent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What automation can builders wire to pipeline events?
          </h2>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/blog/webhook-events-construction-software-automation"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              37 webhook events
            </Link>{" "}
            include dedicated sales-pipeline events. Builders who want to wire their own
            automation — SMS notifications via Twilio, voice follow-ups via Bland or Retell,
            or custom integrations — can do it without writing glue code against a generic
            CRM API.
          </p>

          <p>
            A few real-world plays builders run on sales-pipeline events:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>
              <strong className="text-white">Lot-hold notification:</strong> When a prospect
              moves to &quot;Interested&quot; on a specific lot, the sales manager gets an SMS. No more
              two agents promising the same lot to two buyers over the same weekend.
            </li>
            <li>
              <strong className="text-white">Pre-qual follow-up trigger:</strong> When a lead
              is marked Pre-Qualified, an automated message goes to the buyer with next steps
              toward contract — no manual follow-up calendar needed.
            </li>
            <li>
              <strong className="text-white">Design Center ready alert:</strong> When the
              lot locks and the Design Center invite triggers, the buyer gets an immediate
              notification with their login link. No 3-day delay while the sales agent
              remembers to send the email.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Builder-native pipeline vs. generic CRM: a quick comparison
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="grid grid-cols-3 text-xs font-semibold text-slate-400 uppercase tracking-wide bg-slate-900/60 border-b border-slate-800 px-5 py-3">
              <span>Feature</span>
              <span className="text-center">Cornerstone PM</span>
              <span className="text-center">Generic CRM</span>
            </div>
            {comparisonRows.map((row) => (
              <div
                key={row.feature}
                className="grid grid-cols-3 border-b border-slate-800/60 text-sm"
              >
                <div className="px-5 py-3.5 text-slate-300">{row.feature}</div>
                <div className="px-5 py-3.5 text-center">
                  {row.cornerstone === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <span className="text-slate-600">—</span>
                  )}
                </div>
                <div className="px-5 py-3.5 text-center">
                  {typeof row.generic === "string" ? (
                    <span className="text-xs text-amber-400">{row.generic}</span>
                  ) : row.generic === true ? (
                    <CheckCircle className="w-4 h-4 text-emerald-400 mx-auto" />
                  ) : (
                    <XCircle className="w-4 h-4 text-slate-600 mx-auto" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the sales pipeline fit the rest of the platform?
          </h2>

          <p>
            The sales pipeline isn&apos;t a standalone CRM bolted onto a build tool — it&apos;s the
            front door to the full Cornerstone PM platform. Here&apos;s how the data flows:
          </p>

          <ol className="list-decimal list-inside space-y-2 text-slate-300 my-4">
            <li>Lead captured → linked to community and floorplan of interest</li>
            <li>Sales pipeline tracks pre-qual status, lot interest, and contract progress</li>
            <li>Lot locks → home record created in the build pipeline automatically</li>
            <li>
              <Link
                href="/construction"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Scheduling
              </Link>{" "}
              starts from the sale date with the right floorplan pre-loaded
            </li>
            <li>
              <Link
                href="/design"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Design Center
              </Link>{" "}
              invite triggers — buyer sees their floorplan&apos;s packages and options
            </li>
            <li>Buyer selections flow into the Master Cost Budget and scope items</li>
            <li>Webhook events fire at each stage for custom automation</li>
          </ol>

          <p>
            The result is a single source of truth that follows the buyer from their first QR
            scan to close — without a single spreadsheet handoff or re-keyed field along the way.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop re-entering buyer data at every handoff.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s sales pipeline is wired into the build, the Design Center,
              and the lot inventory — so a locked lot automatically becomes an active home,
              without anyone copying data from one system to another.
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
