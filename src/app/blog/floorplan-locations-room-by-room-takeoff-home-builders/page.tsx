import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/floorplan-locations-takeoff.png";
const heroImageAlt =
  "Room by room takeoff for home builders — floorplan locations with per-room material quantities";

const blogSchema = buildBlogPostSchema({
  title: "A Takeoff That Knows Which Room the Material Goes In",
  slug: "floorplan-locations-room-by-room-takeoff-home-builders",
  description:
    "Most takeoffs give you one flooring number for the whole house. Room-level floorplan locations tell you where every square foot actually lands.",
  datePublished: "2026-08-20",
  mentionsProduct: {
    name: "Cornerstone PM AI Takeoff",
    url: "https://www.cornerstonepm.ai/ai-takeoff",
  },
});

export const metadata: Metadata = {
  title:
    "A Takeoff That Knows Which Room the Material Goes In — Cornerstone PM™ Blog",
  description:
    "Most takeoffs give you one flooring number for the whole house. Room-level floorplan locations tell you where every square foot actually lands.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/floorplan-locations-room-by-room-takeoff-home-builders",
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

const locationRows = [
  { room: "Master Bath", scope: "Tile", quantity: "42 sq ft", note: "Priced from vendor bid" },
  { room: "Guest Bath", scope: "Tile", quantity: "38 sq ft", note: "Priced from vendor bid" },
  { room: "Great Room", scope: "LVP", quantity: "320 sq ft", note: "Priced from vendor bid" },
  { room: "Bedroom 2", scope: "Carpet", quantity: "180 sq ft", note: "Needs pricing" },
  { room: "Bedroom 3", scope: "Carpet", quantity: "160 sq ft", note: "Needs pricing" },
  { room: "Kitchen", scope: "Tile", quantity: "95 sq ft", note: "Priced from vendor bid" },
  { room: "Laundry", scope: "Tile", quantity: "28 sq ft", note: "Priced from vendor bid" },
];

export default function FloorplanLocationsTakeoffPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-sky-400 bg-sky-500/10 border-sky-500/20 mb-4 inline-block">
            AI Takeoff
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            A Takeoff That Knows Which Room the Material Goes In
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 20, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Most takeoffs hand you one flooring number for the entire house.
            The moment a buyer picks tile in the baths, LVP in the great room,
            and carpet in the bedrooms, that number is useless — and someone
            re-measures by hand.{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s AI takeoff
            </Link>{" "}
            attaches quantities to actual rooms, so the material goes to the
            right place automatically and stays there as options change.
          </p>

          <p>
            A house-wide flooring quantity feels efficient until the design
            center opens. Then a superintendent is re-measuring bedrooms with a
            laser, a purchasing manager is rebuilding the carpet line, and the
            tile estimate is somewhere between a guess and a spreadsheet somebody
            made last spring. The re-measure takes an hour. The re-keying takes
            another. Multiply that by forty homes and a dozen plan revisions and
            it becomes a material line item in the schedule that nobody budgeted
            for.
          </p>

          <p>
            The root cause is always the same: the takeoff did not know where
            the material was going. It knew the total — it did not know the
            room.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are floorplan locations, and why do they matter?
          </h2>

          <p>
            Cornerstone models locations inside the floorplan — the Master Bath,
            the Guest Bath, the Great Room, Bedroom 2, the Kitchen — as distinct
            objects with their own square footages and their own scope
            assignments. Takeoff quantities attach to those locations, not to the
            house in aggregate.
          </p>

          <p>
            The practical effect: when Blueprint AI reads a plan set, the 42
            square feet of tile it extracts for the Master Bath are the Master
            Bath&apos;s 42 square feet, not a share of some house-wide tile
            number. When the buyer picks LVP for the great room instead of
            carpet, that selection resolves to the great room&apos;s location
            and its square footage. Nothing else moves. The carpet
            estimate for the bedrooms is untouched because the system knows
            those are different rooms.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Magnolia plan — room-level flooring locations
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {locationRows.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white">{row.room}</span>
                    <span className="text-sm text-slate-500 ml-2">{row.scope}</span>
                  </div>
                  <div className="text-sm text-slate-400 text-right mr-4">{row.quantity}</div>
                  <div className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                    row.note === "Needs pricing"
                      ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                      : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                  }`}>
                    {row.note === "Needs pricing" ? "Needs pricing" : "Priced"}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Each room carries its own quantity and status. A selection change in one room
                does not touch the others.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why a lump-sum flooring number breaks the design center
          </h2>

          <p>
            The design center is where a lump-sum quantity reveals its cost.
            When tile, LVP, and carpet are all priced against a single
            house-wide square footage, no selection is actually priced — the
            number is an average at best and a fiction at worst. The
            buyer picks carpet and the system has no defensible way to price
            it, because it doesn&apos;t know how many square feet of carpet
            the buyer is actually ordering.
          </p>

          <p>
            Room-level quantities solve that. A carpet selection in the design
            center resolves to the bedroom locations and their combined square
            footage. The LVP selection resolves to the great room. The tile
            selections resolve to the baths and the kitchen. Every upgrade
            price in the design center is computable from real room-level data,
            which is what makes the buyer&apos;s running total a number worth
            trusting.
          </p>

          <p>
            This is directly tied to the{" "}
            <Link
              href="/blog/real-vendor-pricing-no-estimator-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>{" "}
            that governs the whole platform: quantities are structural, but
            dollars only come from accepted vendor pricing. A room location
            with no awarded bid shows as <em>needs pricing</em> rather than
            inheriting a made-up default. That discipline only works if the
            system knows which room is which — a lump-sum quantity can&apos;t
            distinguish which portion of the floor is unpriced.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How structural options interact with room quantities
          </h2>

          <p>
            Production builders sell structural options — the bonus room, the
            finished basement, the third-car garage, the optional study.
            Every structural option changes the floorplan, which means it
            changes some set of room locations and their square footages.
          </p>

          <p>
            In a lump-sum takeoff, adding a structural option means someone
            re-measures the whole house or manually adjusts the total. In a
            room-level model, the structural option changes the locations it
            affects. Add a bonus room and the bonus room location appears with
            its own square footage. Scope items that auto-calculate against
            total square footage — frame labor, paint, insulation — update
            because the total square footage changed. Scope items that are
            room-specific, like flooring in the bonus room, appear under the
            bonus room location and only there.
          </p>

          <p>
            The result is that a builder can define the Magnolia plan once —
            including all of its structural options — and the quantity math
            stays internally consistent no matter which combination a buyer
            picks. No re-measuring, no manual adjustments, no version drift
            across plan revisions.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What room-level locations enable
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "Accurate design center pricing",
                  detail: "Each flooring selection resolves to the rooms it belongs to — no lump-sum averaging",
                },
                {
                  label: "Structural option math",
                  detail: "Adding a bonus room or finished basement updates only the locations it changes",
                },
                {
                  label: "Scope-filtered POs",
                  detail: "Purchase orders carry room context to the vendor — the tile sub knows which bathrooms",
                },
                {
                  label: "No re-measuring on plan revisions",
                  detail: "Change one room dimension and only the quantities tied to that room update",
                },
                {
                  label: "Hard cost rule compliance",
                  detail: "A room with no awarded vendor pricing shows $0 / needs pricing rather than inheriting a guess",
                },
                {
                  label: "Design center exclusion logic",
                  detail: "Exclusion groups that prevent tile and carpet in the same room work because rooms are explicit",
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
            Purchase orders carry room context to the vendor
          </h2>

          <p>
            When a PO generates for the flooring sub, it does not say
            &ldquo;1,863 sq ft of mixed flooring.&rdquo; It says tile for the
            Master Bath and Guest Bath, LVP for the great room and kitchen, and
            carpet for the bedrooms — with the quantities for each. The vendor
            knows exactly what they&apos;re supplying and where it goes without
            a follow-up call.
          </p>

          <p>
            This matters at scale. A production builder with 30 active homes
            across two communities is generating hundreds of POs. A PO with
            room-level detail is a PO the vendor can act on. A PO with a
            house-wide lump sum is a PO that generates a question.
          </p>

          <p>
            On the accounting side, that PO posts to QuickBooks Online with the
            community, lot, address, PO number, and cost code in the memo — so
            the room-level purchasing detail that starts in Cornerstone is
            traceable all the way through the books.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Blueprint AI extracts rooms — you don&apos;t build them by hand
          </h2>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Blueprint AI
            </Link>{" "}
            reads the plan PDF and extracts locations, dimensions, and material
            scopes. Builders do not draw room boundaries or label locations
            manually — the AI does it from the plan set. For a typical
            production home plan, that means 3,000+ parts extracted across
            fourteen or more rooms in under sixty seconds.
          </p>

          <p>
            When a new structural option is added to the plan — a bonus room
            or a third-car garage addition — Blueprint AI can re-read the
            updated plan set and update the locations accordingly. The builder
            reviews the changes rather than re-building the takeoff from
            scratch.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  The re-measure trap
                </p>
                <p className="text-sm text-slate-400">
                  When a buyer changes a flooring selection and your system
                  can&apos;t price it from room-level quantities, someone
                  re-measures. That re-measure adds time to the design
                  appointment, introduces a new opportunity for error, and often
                  happens after the appointment — when the buyer is already
                  expecting a number. Room-level locations close that gap
                  before the appointment starts.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The same plan, repeated correctly across communities
          </h2>

          <p>
            Production home building is built on repetition. The Magnolia plan
            sells in Riverdale, Oakmont, and Pinecrest. Each community may have
            different framing vendors, different flooring pricing, different
            structural option availability. But the locations — the rooms,
            their square footages, the material scopes assigned to each — are
            the same plan-level facts that do not change community to community.
          </p>

          <p>
            That&apos;s the architecture: plan-level structure (locations,
            quantities, scopes) defined once and reused everywhere, with
            community-level pricing (which vendor won, at what price) applied
            on top. The{" "}
            <Link
              href="/blog/same-floorplan-two-communities-different-costs-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              same floorplan can cost differently in two communities
            </Link>{" "}
            because the awarded pricing differs — but the room-level quantities
            underneath are the same truth in both places.
          </p>

          <p>
            A builder who re-measures for every community, or who maintains
            separate plan files per community, is carrying a cost that is
            proportional to their growth. Room-level locations in a shared plan
            model absorb that cost instead.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this connects to the broader platform
          </h2>

          <p>
            Room-level locations are one part of the full{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              AI takeoff
            </Link>{" "}
            and{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            stack. Blueprint AI extracts the rooms and quantities from the plan
            set. The design center uses those locations to price selections
            accurately. Foreman AI can read and update the floorplan model by
            chat — adding a location, adjusting a square footage, reviewing what
            changed — so the plan evolves without manual data entry. And the
            purchasing and QuickBooks sync ensure that what starts as a
            room-level quantity ends as a traceable line on a vendor PO and a
            QuickBooks bill.
          </p>

          <p>
            The difference between a takeoff tool and a build system is whether
            the data it produces lives somewhere that acts on it. Room-level
            locations are only valuable if the design center, the PO engine,
            and the accounting sync know what to do with them — which is the
            argument for keeping everything in one{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              production home builder platform
            </Link>
            .
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Takeoff that knows where every square foot goes.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Blueprint AI extracts room-level locations from your plan set so
              every design center selection, structural option, and purchase
              order resolves to the right room — automatically.
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
