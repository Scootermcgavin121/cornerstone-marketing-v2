import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, MapPin, Lock, Users, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/community-specific-vendor-awards-production-builders.png";
const heroImageAlt =
  "Community vendor assignment for home builders showing different awarded trade partners and accepted pricing by neighborhood";

const blogSchema = buildBlogPostSchema({
  title: "One Trade, Different Communities: Assigning the Right Vendor to Every Job",
  slug: "community-specific-vendor-awards-production-builders",
  description:
    "Assign different awarded vendors by community while preserving accepted pricing, purchasing accuracy, and long-term trade relationships across every home.",
  datePublished: "2026-09-07",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Can the same scope of work have more than one accepted vendor?",
    a: "Yes. Cornerstone PM allows multiple accepted bids to exist for the same scope, as long as each one is tied to a different community. A framing crew can be awarded Oakridge while a separate framing crew is awarded River Bend, and both awards stay active and locked at the same time without conflicting with each other.",
  },
  {
    q: "Why not just award the lowest bid across every community?",
    a: "A single lowest-bid winner ignores real constraints: travel time, crew capacity, and service-area boundaries. A framing crew that is efficient and reliable in one part of a metro may be stretched too thin, or simply unwilling, to cover a community 40 minutes away. Awarding by community lets a builder match the vendor to the job instead of forcing one vendor to cover territory they can't realistically serve well.",
  },
  {
    q: "Does accepted pricing still follow the correct community automatically?",
    a: "Yes. When a bid is awarded for a specific community, that accepted price feeds the Master Cost Budget for that community and floorplan only. A different community with a different awarded vendor carries its own accepted price. Neither number overwrites the other, and purchase orders generated later pull from the correct community's locked pricing automatically.",
  },
  {
    q: "What stops a purchase order from going to the wrong vendor?",
    a: "Because the award, the accepted price, and the community assignment are all stored together as one record, the purchase order generator has no ambiguity to resolve. A PO for a lot in Creekside pulls the vendor and price awarded for Creekside — not whichever vendor happens to be cheapest across the whole company, and not a vendor who was never awarded that territory.",
  },
  {
    q: "How does this protect long-term trade relationships?",
    a: "Vendors who know they're competing in a single company-wide auction every bid cycle have little incentive to invest in a specific builder relationship. Community-based awards let a builder keep a trusted crew that has proven itself in a given neighborhood, season after season, instead of re-litigating the relationship every time a cheaper number shows up somewhere else in the pipeline.",
  },
  {
    q: "Can a vendor's community assignment change over time?",
    a: "Yes. A builder can award a new bid for a community whenever conditions change — a vendor's capacity shifts, a new community opens, or a trade partner exits the market. The prior award and its locked pricing remain as a historical record; the new award becomes the active one for future purchase orders in that community.",
  },
];

const scenarios = [
  {
    icon: <MapPin className="w-4 h-4 text-emerald-400" />,
    title: "Service area, not just service quality",
    body: "A vendor can be excellent and still be the wrong choice for a specific community if it sits outside their realistic travel range. Awarding by community lets a builder route work to whoever can actually show up on schedule, not just whoever quoted the lowest number.",
  },
  {
    icon: <Users className="w-4 h-4 text-cyan-400" />,
    title: "Multiple accepted bids, same scope",
    body: "Framing in Oakridge and framing in River Bend are the same trade but two different awards. Cornerstone PM holds both as separate accepted bids tied to their own community, so neither award has to yield to the other.",
  },
  {
    icon: <Lock className="w-4 h-4 text-violet-400" />,
    title: "Pricing stays attached to its community",
    body: "Once a bid is awarded and locked for a community, that price is the cost basis for every home in that community — and only that community. A different community's accepted price never bleeds into the wrong budget.",
  },
  {
    icon: <AlertTriangle className="w-4 h-4 text-amber-400" />,
    title: "What generic bid systems get wrong",
    body: "Tools built around a single company-wide lowest-bid winner assume one vendor should cover every job. That assumption breaks the moment a builder operates in more than one community — which is most production builders.",
  },
];

export const metadata: Metadata = {
  title:
    "One Trade, Different Communities: Assigning the Right Vendor to Every Job — Cornerstone PM™ Blog",
  description:
    "Assign different awarded vendors by community while preserving accepted pricing, purchasing accuracy, and long-term trade relationships across every home.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/community-specific-vendor-awards-production-builders",
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

export default function CommunitySpecificVendorAwardsPage() {
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
            One Trade, Different Communities: Assigning the Right Vendor to Every Job
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 7, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            The best framing crew for one community isn&apos;t always the best framing crew for
            another. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            lets builders hold multiple accepted bids for the same scope — each tied to its own
            community — so accepted pricing follows the correct vendor into every budget and
            purchase order without manual overrides.
          </p>

          <p>
            Lowest-bid-wins-everything logic assumes a single vendor should serve a builder&apos;s
            entire footprint. That assumption rarely survives contact with more than one
            community. A vendor who&apos;s efficient and well-priced twenty minutes from their
            shop can be the wrong choice for a community an hour away — not because their work is
            worse, but because travel time, crew capacity, and local familiarity all change the
            economics of the job.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does community-specific vendor assignment actually solve?
          </h2>
          <p>
            It separates &ldquo;who quoted the lowest price&rdquo; from &ldquo;who should actually do this
            work.&rdquo; A builder running several active communities at once needs a way to award the
            same trade to different vendors without one award overwriting or conflicting with
            another — and without losing track of which accepted price applies where.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {scenarios.map((s, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {s.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does an accepted price stay attached to the right community?
          </h2>
          <p>
            When a bid is awarded in Cornerstone PM, the award record ties three things together:
            the vendor, the scope, and the community. That combination — not the vendor or scope
            alone — is what determines which accepted price a budget line or purchase order pulls
            from. Oakridge&apos;s framing award and River Bend&apos;s framing award both exist as
            separate, fully locked records. Neither one has to be dominant; both stay accurate at
            the same time.
          </p>
          <p>
            That matters because a builder&apos;s Master Cost Budget is built per community and
            per floorplan. If the platform only tracked one accepted price per scope company-wide,
            every community would either share a vendor that doesn&apos;t actually serve all of
            them, or someone would have to manually override the budget line by line to reflect
            reality. Community-specific awards remove that manual step entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens when a purchase order is generated?
          </h2>
          <p>
            A purchase order for a lot in Creekside pulls the vendor and locked price that were
            awarded for Creekside — automatically, with no lookup or manual selection required.
            There&apos;s no risk of a PO defaulting to whichever vendor happens to be cheapest
            company-wide, and no risk of a vendor receiving a purchase order for territory they
            were never awarded. The community assignment travels with the award from the moment
            it&apos;s locked all the way through to the{" "}
            <Link
              href="/blog/construction-purchasing-workflow-bid-to-purchase-order"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchase order
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this protect trade relationships instead of just protecting price?
          </h2>
          <p>
            Vendors who know they&apos;re re-competing against the whole market on every bid cycle
            have little reason to prioritize a specific builder over anyone else. A vendor who
            knows they hold a specific community — and that the award won&apos;t evaporate the
            moment a cheaper number shows up somewhere else in the pipeline — has a real incentive
            to protect the relationship: showing up on schedule, communicating early on delays,
            and treating the builder&apos;s crews as a priority rather than one more job on the
            list.
          </p>
          <p>
            That reliability compounds. A trade partner who has worked a specific community for
            several seasons knows the site conditions, the inspectors, and the other crews already
            on-site. Ripping that up every time a lower bid appears elsewhere in the company
            trades a known quantity for an unknown one — often over a difference that doesn&apos;t
            survive a single missed start date.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this avoid awarding work outside a vendor&apos;s service area?
          </h2>
          <p>
            Because each award is scoped to a specific community rather than the scope of work in
            general, a builder never has to force a vendor into territory they don&apos;t actually
            want or can&apos;t reliably cover. If a vendor tells a purchasing team they only serve
            the north side of a metro, that constraint is respected by simply not awarding them
            the south-side community &mdash; instead of trying to negotiate an exception into a
            single company-wide contract.
          </p>
          <p>
            Once awarded and{" "}
            <Link
              href="/blog/lock-awarded-vendor-bids-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              locked
            </Link>
            , that community-specific price becomes the real cost basis for every home built
            there &mdash; not an estimate, and not a number borrowed from a different community
            with different conditions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this fit the rest of the purchasing workflow?
          </h2>
          <p>
            Community-specific awards are one step in the same connected chain covered in{" "}
            <Link
              href="/blog/construction-purchasing-workflow-bid-to-purchase-order"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s purchasing workflow
            </Link>
            : bid request, vendor response, comparison, award, budget update, and purchase order.
            The only difference is that the award step can produce several valid, simultaneous
            outcomes &mdash; one per community &mdash; instead of a single company-wide winner.
            Every one of those outcomes still flows through the same locking and budget-update
            logic once it&apos;s accepted.
          </p>
          <p>
            For a broader look at how purchasing fits the full platform, see the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Award the right vendor to every community, not just the cheapest one.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s purchasing module holds multiple accepted bids per scope, ties
              each to its community, and carries the locked price straight through to every
              purchase order.
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
        title="Community Vendor Awards FAQ"
        subtitle="Common questions about assigning vendors by community and keeping accepted pricing traceable."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
