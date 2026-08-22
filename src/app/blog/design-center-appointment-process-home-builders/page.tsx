import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/design-center-appointment.png";
const heroImageAlt =
  "Design center appointment process for home builders — selection sheet with packages, upgrades, and running budget total";

const blogSchema = buildBlogPostSchema({
  title: "How to Run a Design Center Appointment Without Losing the Budget",
  slug: "design-center-appointment-process-home-builders",
  description:
    "A step-by-step design appointment process for home builders: prep, packages, upgrades, exclusions, and a signed selection sheet that hits the budget.",
  datePublished: "2026-08-22",
  mentionsProduct: {
    name: "Cornerstone PM Design Center",
    url: "https://www.cornerstonepm.ai/design",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Run a Design Center Appointment Without Losing the Budget",
  description:
    "A repeatable design center appointment process for home builders: prep, designer packages, exclusion groups, spec-level upgrades, and a selection sheet that flows to the budget.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Confirm the floorplan, community, and spec levels before the appointment",
      text: "Pull up the buyer's floorplan and community in Cornerstone before the appointment starts. Confirm which spec level applies — Standard, Upgrade I, Upgrade II, or Premium — because community-based upgrade pricing means the same option may be included in one community and a paid upgrade in another. Getting this wrong at the start means the running total is wrong from the first selection.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Start with a designer package to anchor a look quickly",
      text: "Open the Designer Packages section and present the curated package options. When a buyer selects a package, every category option auto-locks to that coordinated look — Modern Farmhouse, Coastal Classic, Urban Loft, or whichever packages you have configured. This collapses the first thirty minutes of a typical appointment into a single decision and gives the buyer a confident starting point instead of a blank spreadsheet.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Go à la carte for categories the buyer wants to control",
      text: "Remove the package lock on any category the buyer wants to customize and let them pick individually. The rest of the package stays intact. This gives buyers ownership over the choices that matter to them without forcing them to re-decide every category from scratch.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Use exclusion groups to keep selections physically possible",
      text: "Where option classes are mutually exclusive — carpet versus LVP versus tile in the main floor area — set up an exclusion group so the buyer picks one and the category completes. This prevents two conflicting options from both being marked selected, which produces a selection sheet that cannot be built and a budget that counts the same square footage twice.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Promote standard finishes to paid upgrades with a spec-level change",
      text: "If a standard option should not be included in this community's base price, change its spec level from Standard to Upgrade I, Upgrade II, or Premium. It drops out of the base price and becomes a +$X line on the selection sheet. This works at the individual option level, not just the whole category — so you can include Shaker White cabinets but make the custom paint an upgrade.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review the running total and sign off on the selection sheet",
      text: "The running upgrade total in Cornerstone is built from accepted vendor pricing — not placeholder numbers — so the dollar on the screen is the dollar in the budget. Review the total with the buyer, confirm each selection, and close the appointment with a signed selection sheet that flows directly into the purchasing pipeline. No PDF re-keying, no separate spreadsheet update.",
    },
  ],
};

const prepChecklist = [
  {
    item: "Confirm the floorplan and community",
    detail:
      "Community-based upgrade pricing means the same option may be standard in one community and a paid upgrade in another. Start here.",
  },
  {
    item: "Verify spec levels for this community",
    detail:
      "Know which options are included in the base price before the buyer walks in. Surprises mid-appointment undermine trust.",
  },
  {
    item: "Check structural options for this buyer",
    detail:
      "If the buyer has a bonus room or finished basement, the square footage drives some costs automatically — confirm those are in the system.",
  },
  {
    item: "Confirm the appointment duration",
    detail:
      "Designer packages can compress a two-hour appointment to 45 minutes. Set expectations accordingly.",
  },
];

const appointmentPitfalls = [
  {
    pitfall: "Starting with à la carte instead of packages",
    fix: "Open with a designer package to anchor a look. À la carte on top of a package is fast; à la carte from a blank slate is exhausting.",
  },
  {
    pitfall: "Skipping exclusion groups for conflicting options",
    fix: "If two flooring options can both be selected, they will be. Set up exclusion groups before the appointment, not during.",
  },
  {
    pitfall: "Using placeholder pricing for included options",
    fix: "Every upgrade price in Cornerstone comes from accepted vendor pricing. A line with no awarded bid shows as $0 / needs pricing — not a guess.",
  },
  {
    pitfall: "Printing the selection sheet to re-key later",
    fix: "The selection sheet in Cornerstone flows directly into the purchasing pipeline. Printing and re-keying introduces a second opportunity to lose a number.",
  },
];

export const metadata: Metadata = {
  title:
    "How to Run a Design Center Appointment Without Losing the Budget — Cornerstone PM™ Blog",
  description:
    "A step-by-step design appointment process for home builders: prep, packages, upgrades, exclusions, and a signed selection sheet that hits the budget.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/design-center-appointment-process-home-builders",
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

export default function DesignCenterAppointmentPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            How to Run a Design Center Appointment Without Losing the Budget
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 22, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A design center appointment should end with a signed selection sheet
            that flows directly into the budget — not a PDF someone re-keys into
            a spreadsheet two days later. The{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM design center
            </Link>{" "}
            structures the appointment as prep, selection, and close so the
            numbers the buyer sees are the numbers in the budget.
          </p>

          <p>
            Most design center problems are configuration problems. They show up
            during the appointment — the wrong price for this community, two
            conflicting options both marked selected, a standard finish that
            should have been an upgrade — but the root cause is usually
            something that could have been resolved before the buyer sat down.
            A repeatable appointment process eliminates most of them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do you prepare for a design center appointment?
          </h2>

          <p>
            Preparation happens in Cornerstone before the buyer walks in. The
            most important step is confirming the community, because{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              community-based upgrade pricing
            </Link>{" "}
            means the same option can be a standard inclusion in one community
            and a paid upgrade in another. Starting an appointment in the wrong
            community — or without checking the spec levels — means the running
            total is wrong from the first selection.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Before the buyer walks in
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {prepChecklist.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.item}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do designer packages make the appointment faster?
          </h2>

          <p>
            The most time-consuming part of a design center appointment is the
            first thirty minutes — when a buyer faces a blank options list across
            six or seven categories and has no anchor for what they want.
            Designer packages solve this directly.
          </p>

          <p>
            Cornerstone ships 64 curated packages across 7 categories. When a
            buyer selects a package — Modern Farmhouse, Coastal Classic, Urban
            Loft, or whichever styles you have configured for your communities —
            every category option auto-locks to the coordinated look. The buyer
            makes one confident choice instead of forty uncertain ones, and the
            appointment moves to the categories they actually want to customize.
          </p>

          <p>
            À la carte is still available for any category the buyer wants to
            control independently. Remove the package lock on that category and
            the rest of the package stays intact. This structure — package first,
            customize where it matters — is faster for the buyer and easier for
            the design coordinator than a pure à la carte session from a blank
            slate.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do exclusion groups prevent impossible selections?
          </h2>

          <p>
            Some option classes are physically mutually exclusive. Carpet and
            LVP in the same room is not a buyer preference — it is an impossible
            outcome that produces a selection sheet that cannot be built. Without
            exclusion groups, the only protection is a coordinator remembering to
            catch it mid-appointment, and that is not a repeatable process.
          </p>

          <p>
            Exclusion groups in Cornerstone let you define&nbsp;
            <em>pick exactly one</em> for any set of conflicting option classes.
            Configure the flooring category with an exclusion group across
            Carpet, Tile, LVP, and Hardwood — when the buyer selects LVP, the
            flooring category is complete. Selecting a second option is not
            allowed. The selection sheet that leaves the appointment reflects what
            can actually be built.
          </p>

          <p>
            This also cleans up reporting. Without exclusion groups, categories
            that allow multiple selections never read as complete — the design
            coordinator&apos;s progress dashboard shows incomplete flooring even
            when the buyer made a perfectly valid choice.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do you control what&apos;s included vs. an upgrade?
          </h2>

          <p>
            Spec levels give builders granular control over the included-versus-upgrade
            boundary — down to a single option, not just the whole category.
          </p>

          <p>
            A standard option becomes a paid upgrade by changing its spec level
            from Standard to Upgrade I, Upgrade II, or Premium. It drops out of
            the base price and appears as a +$X line on the selection sheet.
            An entire option class can be excluded from the base budget using
            the Standard/Upgrade toggle on the Spec Levels page. Both levers
            are available because the right decision depends on the option,
            the community, and the margin target — not a blanket rule.
          </p>

          <p>
            The pricing that populates the upgrade delta comes from accepted vendor
            pricing. A spec-level change does not invent a number — it exposes
            the real price the vendor was awarded for that option in that community.
            A line with no accepted bid shows as{" "}
            <span className="text-amber-400 font-medium">$0 / needs pricing</span>{" "}
            rather than a placeholder that quietly misprices the home.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What leaves the appointment?
          </h2>

          <p>
            The running upgrade total in Cornerstone reflects accepted vendor
            pricing throughout the appointment, so the number the buyer sees
            at any point during the session is the number that will appear in the
            Master Cost Budget. There is no reconciliation step after the
            appointment because the design center and the budget share the same
            pricing source.
          </p>

          <p>
            When the appointment closes, the selection sheet flows into the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing pipeline
            </Link>{" "}
            directly. Option selections tied to scope items update the budget
            automatically — so the option class the buyer picked lands under the
            right trade, at the right cost, against the right floorplan and
            community. No coordinator re-keys the numbers into a spreadsheet.
            No purchasing agent transcribes the PDF.
          </p>

          <p>
            Structural option pricing works the same way. If the buyer selects a
            bonus room or a finished basement, the additional square footage feeds
            auto-quantity scope items — frame labor, paint, cleaning — that
            reprice automatically against the updated footprint. The structural
            option is priced correctly at selection, not estimated after the fact.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What goes wrong in most design center appointments?
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Common pitfalls and the fix
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {appointmentPitfalls.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.pitfall}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.fix}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the design center connect to sales?
          </h2>

          <p>
            The design center appointment is a milestone in the{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>
            , not a separate workflow. When a buyer moves from prospect to signed
            contract, the floorplan and community already in the pipeline follow
            them into the design center — the coordinator does not re-enter the
            buyer&apos;s information from a different system.
          </p>

          <p>
            After selections are complete, the signed selection sheet lands in
            purchasing. The upgrade totals update the Master Cost Budget. The
            design selections feed scope items and option classes that inform bid
            requests when it is time to price the trade work. The sales
            coordinator, the design coordinator, and the purchasing team all work
            from the same record.
          </p>

          <p>
            A design center appointment that ends with a signed selection sheet
            flowing automatically into budgets and purchasing is the goal. The
            setup work — configuring spec levels, exclusion groups, and designer
            packages — pays off in every appointment that runs on top of it. The{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone design center
            </Link>{" "}
            is built to run that process repeatedly, across every floorplan and
            every community, without the coordinator rebuilding it from scratch
            for each buyer.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Design appointments that hit the budget, every time.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s design center combines designer packages,
              exclusion groups, spec-level upgrade control, and real vendor pricing
              so what the buyer sees on screen is what lands in the budget —
              and the selection sheet writes itself into purchasing.
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
