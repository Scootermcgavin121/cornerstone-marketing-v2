import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const heroImage = "/blog/ai-material-takeoff-home-builders.png";
const heroImageAlt =
  "Blueprint AI extracting material scopes from a residential home builder floor plan PDF";

export const metadata: Metadata = {
  title:
    "How Blueprint AI Extracts 130+ Material Scopes from a Floor Plan PDF — Cornerstone PM Blog",
  description:
    "Technical deep-dive on how Blueprint AI extracts 130+ material scopes from a floor plan PDF in under 60 seconds for residential home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/how-blueprint-ai-extracts-material-scopes",
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

export default function HowBlueprintAIExtractsMaterialScopesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
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
              creditText: "Cornerstone PM",
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Technical Deep-Dive
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            How Blueprint AI Extracts 130+ Material Scopes from a Floor Plan PDF
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 12, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            AI material takeoff works by running a floor plan PDF through a four-stage pipeline: geometry
            parsing, fixture detection, scope mapping, and vendor pricing lookup &mdash; producing 130+ named
            material scopes in under 60 seconds.
          </p>

          <p>
            If you&apos;ve heard that{" "}
            <Link
              href="/ai-takeoff"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Blueprint AI
            </Link>{" "}
            can pull a full material scope list from a floor plan in the time it takes to pour a cup of
            coffee, you might have wondered: how does that actually work? This post walks through the
            mechanics &mdash; no marketing gloss, just the real pipeline from PDF upload to vendor-ready
            scope list.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does &ldquo;130+ material scopes&rdquo; actually mean?
          </h2>
          <p>
            A material scope is a bucket that maps directly to a trade and a vendor category: Concrete
            Foundation, Framing Lumber, Exterior Windows, Interior Doors, HVAC Equipment, Plumbing Rough,
            Electrical Rough &mdash; and so on out to 130+ named scopes for a fully specified residential home.
          </p>
          <p>
            Traditional estimators build this scope list manually: read the plan, cross-reference spec
            sheets, enter quantities by hand. That process takes 4&ndash;8 hours per floor plan. Blueprint
            AI produces the same scope list from the PDF in under 60 seconds. Here&apos;s the step-by-step
            of how it gets there.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 1: Floor plan ingestion and geometry parsing
          </h2>
          <p>
            When a builder uploads a floor plan PDF, Blueprint AI starts with geometry &mdash; not text. The
            AI reads the vector or raster content of the file to detect:
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate-300 ml-2">
            <li><strong className="text-white">Rooms and their footprint dimensions</strong> &mdash; length, width, and total square footage per space</li>
            <li><strong className="text-white">Wall segments</strong> &mdash; interior vs. exterior, thickness, and linear footage</li>
            <li><strong className="text-white">Door and window openings</strong> &mdash; count, size, and position within each wall run</li>
            <li><strong className="text-white">Ceiling heights</strong> &mdash; pulled from notation layers or standardized defaults when not annotated</li>
          </ul>
          <p>
            This geometry pass builds a spatial model of the home before any scope mapping happens. Every
            quantity calculation downstream traces back to this layer. When the lumber scope outputs
            &ldquo;2,184 linear feet of exterior wall framing,&rdquo; that number is derived from the floor
            plan geometry &mdash; not from a table of generic assumptions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 2: Fixture and element detection
          </h2>
          <p>
            With geometry in hand, the AI moves to element extraction: identifying every fixture,
            appliance, system component, and structural element called out in the plan.
          </p>

          <div className="space-y-4">
            <div className="border-l-2 border-cyan-500/40 pl-6">
              <h3 className="text-lg font-bold text-white mb-1">Kitchen and bath fixtures</h3>
              <p>
                Sinks, tubs, showers, toilets, and vanities are detected by label and by geometry
                pattern. A 5&times;8 wet area adjacent to the primary suite isn&apos;t ambiguous &mdash; the
                AI recognizes the footprint and maps it to the correct plumbing and tile scopes.
              </p>
            </div>
            <div className="border-l-2 border-cyan-500/40 pl-6">
              <h3 className="text-lg font-bold text-white mb-1">Electrical and mechanical elements</h3>
              <p>
                Outlet counts, panel notation, circuit annotations, mechanical room footprint, duct routing
                indicators, and HVAC equipment specs are pulled where present in the plan layer. Where
                not explicitly annotated, scope quantities are derived from room-by-room standard
                calculations based on square footage and fixture count.
              </p>
            </div>
            <div className="border-l-2 border-cyan-500/40 pl-6">
              <h3 className="text-lg font-bold text-white mb-1">Structural elements</h3>
              <p>
                Beams, posts, stair runs, garage door openings, and fireplace chases are identified
                both from explicit labels and from structural geometry patterns. Each feeds into
                the relevant framing, masonry, or specialty scope.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 3: Scope mapping and quantity calculation
          </h2>
          <p>
            The output from steps 1 and 2 feeds into Blueprint AI&apos;s scope mapping engine. Each detected
            element maps to one or more material scopes, with calculated quantities:
          </p>

          <div className="bg-slate-900/60 border border-slate-700 rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">Detected element</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">Mapped scope</th>
                  <th className="text-left px-4 py-3 text-slate-400 font-medium">Quantity output</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-4 py-3 text-slate-300">Exterior wall footage</td>
                  <td className="px-4 py-3 text-white">Framing Lumber</td>
                  <td className="px-4 py-3 text-slate-300">LF + stud count</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-300">Window openings (count + size)</td>
                  <td className="px-4 py-3 text-white">Exterior Windows</td>
                  <td className="px-4 py-3 text-slate-300">Unit count + sq ft</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-300">Bathroom wet areas</td>
                  <td className="px-4 py-3 text-white">Tile (Floor + Wall)</td>
                  <td className="px-4 py-3 text-slate-300">Sq ft per zone</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-300">Kitchen fixture set</td>
                  <td className="px-4 py-3 text-white">Plumbing Rough</td>
                  <td className="px-4 py-3 text-slate-300">Point count</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-slate-300">Roof geometry + pitch</td>
                  <td className="px-4 py-3 text-white">Roofing Material</td>
                  <td className="px-4 py-3 text-slate-300">Sq ft + pitch factor</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            One floor plan generates 130+ of these mappings in a single pass. The scope list is
            structured in the same categories used by your{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              vendor bid templates
            </Link>{" "}
            &mdash; meaning the Framing scope flows directly into bid requests for framing subs, not into
            a separate manual data entry step.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 4: Vendor pricing lookup and budget assembly
          </h2>
          <p>
            Once scopes and quantities are calculated, Blueprint AI cross-references your community&apos;s
            active vendor pricing (or current catalog pricing if vendor bids haven&apos;t been collected
            yet for that community). Each scope line gets a unit cost applied, producing a draft budget
            that flows directly into the{" "}
            <Link
              href="/construction"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Master Cost Budget
            </Link>
            .
          </p>
          <p>
            For builders running multiple plan types across multiple communities, this is the
            multiplier: run the takeoff once per plan type, then apply the pricing structure for
            each community. The Magnolia plan takeoff runs in 60 seconds and inherits Community
            A&apos;s framing vendor and Community B&apos;s framing vendor automatically &mdash; no re-entry
            required.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why this matters for plan revisions
          </h2>
          <p>
            One underrated benefit of AI-driven takeoff is revision handling. When an architect sends
            a plan revision &mdash; say, the primary bath gets upgraded from a tub/shower combo to a
            standalone soaker tub &mdash; a manual estimator has to diff the two PDFs by hand and adjust
            scope quantities individually. That&apos;s 30&ndash;90 minutes of tedious work per revision,
            and it&apos;s a common source of pricing errors when the diff gets missed.
          </p>
          <p>
            Blueprint AI re-runs the full pipeline on the revised PDF. Changed quantities surface
            automatically. For a builder carrying 8 active plan types and running 10&ndash;15 revisions
            per year, that&apos;s 40&ndash;80 estimator hours saved on revision tracking alone &mdash; before
            counting the initial takeoff time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            From 8 hours to 60 seconds
          </h2>
          <p>
            The complete pipeline &mdash; geometry parsing, element detection, scope mapping, quantity
            calculation, and vendor pricing lookup &mdash; runs in under 60 seconds for a standard
            2,000&ndash;3,500 sq ft residential floor plan. For a builder carrying 8 active plan types,
            that&apos;s roughly 40 minutes of total takeoff work where it used to be 32&ndash;64 hours.
          </p>
          <p>
            The scopes are vendor-ready, budget-linked, and revision-safe by default. That&apos;s what
            purpose-built AI material takeoff actually delivers &mdash; not a smarter spreadsheet, but
            a pipeline that collapses a multi-day workflow into a single upload. Learn more about
            the full takeoff workflow on the{" "}
            <Link
              href="/ai-takeoff"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Blueprint AI page
            </Link>
            .
          </p>

        </div>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See Blueprint AI run a takeoff on your floor plans.
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Cornerstone PM ships with Blueprint AI built-in &mdash; no third-party takeoff subscription,
            no manual scope entry. Upload a PDF and get 130+ material scopes, quantities, and pricing
            in under 60 seconds. Beta access is open and early adopters get two years free.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold text-sm hover:from-cyan-400 hover:to-cyan-300 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
