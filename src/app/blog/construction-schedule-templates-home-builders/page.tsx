import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/construction-schedule-templates.png";
const heroImageAlt =
  "Construction schedule template — reusable task templates and Gantt schedule applied across home builder floorplans";

const blogSchema = buildBlogPostSchema({
  title: "Schedule Templates: Build the Plan Once, Run It on Every Home",
  slug: "construction-schedule-templates-home-builders",
  description:
    "Production builders repeat the same floorplans, so why rebuild the schedule from scratch? See how construction schedule templates work for home builders.",
  datePublished: "2026-08-01",
  mentionsProduct: {
    name: "Cornerstone PM Construction Scheduling",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up and Apply Construction Schedule Templates in Cornerstone PM",
  description:
    "Define a reusable schedule template once per floorplan, then apply it to every home — with cascade scheduling and auto-generated POs wired in from day one.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Build the task sequence in a schedule template",
      text: "In Cornerstone PM's scheduling module, create a new schedule template for the floorplan. Add each task (Foundation, Framing, Plumbing Rough, Electrical Rough, Insulation, Drywall, Paint, Flooring, Final Walkthrough) in order, set durations, and assign each task to the responsible trade or vendor. Define predecessor relationships so the system knows which tasks must complete before the next starts.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Apply the template to a new home start",
      text: "When a new home is started in a community, select the matching schedule template. Cornerstone generates the full task sequence from the template — with correct start dates, predecessor links, and trade assignments — in one action. The schedule is complete before the first nail is driven.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Let cascade scheduling handle delays",
      text: "When a task runs late, adjust its completion date. Cornerstone automatically shifts every downstream task in the dependency chain and sends updated date notifications to the affected vendors. No manual phone calls, no re-dragging bars for each trade.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Connect tasks to auto-generated POs",
      text: "Assign each task to a vendor in the template. When a scheduled task is due, Cornerstone auto-generates the purchase order for that vendor and emails it — with the scope, date, and PO details — so the vendor arrives prepared without a separate communication step.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Monitor all homes on the community Gantt",
      text: "Use the community-level Gantt view to see every active home's task state side by side. Status indicators surface which homes are on track, which have delayed tasks, and which have a dependency conflict — so a superintendent can spot and address problems across the entire build pipeline without opening each home individually.",
    },
  ],
};

const templateBenefits = [
  {
    label: "One template, every home",
    detail:
      "Apply the Magnolia template to Lot 14 and the full 120-task schedule generates instantly with correct sequencing and predecessor links.",
  },
  {
    label: "Cascade scheduling built in",
    detail:
      "Adjust one task date and every dependent task shifts automatically. The schedule stays internally consistent with one edit, not five.",
  },
  {
    label: "Vendor notifications on change",
    detail:
      "Affected subs receive updated start dates automatically — without a phone call or a login to the platform.",
  },
  {
    label: "Auto-generated POs from tasks",
    detail:
      "Assigned tasks auto-generate purchase orders and email them to the assigned vendor when the task is scheduled.",
  },
  {
    label: "Community Gantt view",
    detail:
      "See all active homes and all task states side by side, with at-a-glance indicators for on-track, delayed, and conflicted homes.",
  },
  {
    label: "Template improvements carry forward",
    detail:
      "Tune a duration or add a task to the template and every future home inherits the update. No retroactive re-keying.",
  },
];

const manualVsTemplate = [
  {
    manual: "Rebuild 120 tasks for each new start",
    template: "Apply the template — schedule generated in one step",
  },
  {
    manual: "One-off predecessor links per home",
    template: "Predecessor relationships baked into the template",
  },
  {
    manual: "Re-drag every bar after a delay",
    template: "Cascade shifts the whole dependency chain automatically",
  },
  {
    manual: "Call each vendor with updated dates",
    template: "Vendor notifications sent automatically on reschedule",
  },
  {
    manual: "Open each home to check status",
    template: "Community Gantt shows all homes at once",
  },
];

export const metadata: Metadata = {
  title:
    "Schedule Templates: Build the Plan Once, Run It on Every Home — Cornerstone PM™ Blog",
  description:
    "Production builders repeat the same floorplans, so why rebuild the schedule from scratch? See how construction schedule templates work for home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-schedule-templates-home-builders",
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

export default function ConstructionScheduleTemplatesPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-sky-400 bg-sky-500/10 border-sky-500/20 mb-4 inline-block">
            Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Schedule Templates: Build the Plan Once, Run It on Every Home
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 1, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Production home builders repeat the same floorplans across communities —
            so rebuilding a 120-task{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              construction schedule
            </Link>{" "}
            from scratch for every new start is pure waste. Define a schedule template
            once per floorplan, apply it to every home, and let cascade scheduling
            handle the rest.
          </p>

          <p>
            A production builder closing 80 homes per year is not running 80 different
            projects. They&apos;re running the same project — the Magnolia plan, the
            Cypress plan, the Augusta plan — repeated across different lots and
            communities, each with the same sequence of trades and the same critical-path
            logic. The framer always follows the foundation crew. Plumbing rough always
            follows framing. Insulation never precedes electrical rough. These relationships
            are fixed by the craft, not by the lot number.
          </p>

          <p>
            Despite that repeatability, most builders rebuild the schedule from scratch
            for every start — dragging tasks, setting predecessors, assigning vendors,
            entering durations — because their tools treat every home as a blank slate.
            That&apos;s not a scheduling problem. It&apos;s a template problem.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do construction schedule templates work?
          </h2>

          <p>
            In Cornerstone&apos;s{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              construction scheduling module
            </Link>
            , a schedule template captures the full task sequence for a floorplan:
            task names, durations, predecessor relationships, and trade or vendor
            assignments. Build it once — correctly — and every future home started on
            that plan inherits the full schedule in one step.
          </p>

          <p>
            Apply the Magnolia template to Lot 14 and Cornerstone generates a
            complete, sequenced 120-task schedule with start dates computed from
            the start date you assign, predecessor links intact, and trade assignments
            already in place. The schedule is ready before the first concrete is poured.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Manual scheduling vs. template-based scheduling
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-2 text-xs font-semibold text-slate-500 uppercase tracking-wide px-5 py-2.5 bg-slate-900/40">
                <span>Without templates</span>
                <span className="text-emerald-500">With Cornerstone templates</span>
              </div>
              {manualVsTemplate.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-slate-800/60 text-sm">
                  <div className="px-5 py-3.5 text-slate-400 border-r border-slate-800/60">
                    {row.manual}
                  </div>
                  <div className="px-5 py-3.5 text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.template}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What makes a template live rather than static?
          </h2>

          <p>
            A schedule template is only useful if the schedule it generates stays
            accurate when reality changes. That&apos;s where cascade scheduling
            makes the difference.
          </p>

          <p>
            When framing runs two days long — bad weather, a crew overrun on the
            previous job — every downstream trade is now scheduled on the wrong date.
            In Cornerstone, adjusting the framing task date triggers an automatic
            cascade: plumbing rough, electrical rough, insulation, drywall, and every
            subsequent task shift by the right number of days, with predecessor
            constraints respected. The schedule stays internally consistent with one
            edit, not a morning of phone calls.
          </p>

          <p>
            Vendors don&apos;t need to log into Cornerstone to see updated dates.
            Affected subs receive notifications with their new start date automatically
            so no one shows up to a jobsite that isn&apos;t ready for them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do schedule templates connect to purchasing?
          </h2>

          <p>
            The schedule and the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            in Cornerstone are wired together, not siloed. When a task in the
            schedule is assigned to a vendor, Cornerstone auto-generates the
            purchase order for that vendor and emails it when the task is scheduled.
            The vendor receives the scope, the date, and the PO details in one
            message — no separate notification step, no back-and-forth to confirm
            dates or scope.
          </p>

          <p>
            When a cascade reschedule runs, the vendor notification goes out with
            the updated date. The approved PO then posts to QuickBooks Online as a
            committed cost, and when the work is marked complete the linked bill
            auto-creates and closes the PO — no dangling open commitments, no manual
            bill entry. The purchasing trail follows the schedule automatically.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What schedule templates give you
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {templateBenefits.map((row, i) => (
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
            How do you manage 30 active homes at once?
          </h2>

          <p>
            Template-generated schedules only pay off if you can see across the full
            community pipeline. Cornerstone&apos;s community Gantt view shows every
            active home and its current task state side by side — not one home at a
            time, but all of them together.
          </p>

          <p>
            Status indicators surface which homes are on track, which have delayed
            tasks, and which have a dependency conflict. A superintendent can scan
            the community Gantt in a few seconds and know exactly which lots need
            attention today, without clicking into each home individually.
          </p>

          <p>
            When a task is adjusted on one home, the cascade ripples through the
            schedule in real time and the Gantt updates to reflect it. The
            superintendent sees the downstream effect before committing — useful for
            deciding whether a two-day slip is worth absorbing with an overtime push
            or whether it needs to propagate and delay the close.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens when the template needs to change?
          </h2>

          <p>
            Production building improves through iteration. A task that always runs
            long gets an extra buffer. A new inspection step gets added between
            drywall and paint. A trade reassignment updates the vendor for a scope.
          </p>

          <p>
            In Cornerstone, those changes are made once to the template. Every future
            home started from that template inherits the improvement automatically —
            no retroactive editing of homes already in progress, no version-control
            gymnastics, no hoping the superintendent remembered to apply the new
            sequence to the latest starts.
          </p>

          <p>
            Over time, the template gets better because the build process gets better.
            That&apos;s the compounding value of a template-first approach: each
            schedule starts from the most current version of how the team actually
            builds, not the version that was current when someone set up the project
            two years ago.
          </p>

          <div className="not-prose rounded-xl border border-sky-800/30 bg-sky-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-sky-300 mb-1">
                  Time saved compounds with volume
                </p>
                <p className="text-sm text-slate-400">
                  At 80 homes per year, rebuilding a 120-task schedule by hand for
                  each start can consume a full work week annually — before accounting
                  for the time lost to manual reschedules and vendor calls after
                  delays. Templates and cascade scheduling eliminate both.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does AI fit into schedule management?
          </h2>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            — a construction agent with 396+ skills — can read and update schedule
            tasks by conversation. A superintendent can ask Foreman to reschedule a
            task, see what cascades, and confirm the change without leaving the chat
            or opening a Gantt view. For teams managing schedules at volume across
            multiple communities, that&apos;s a faster path than navigating the
            full interface for every small adjustment.
          </p>

          <p>
            Foreman also connects the schedule to the broader{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management
            </Link>{" "}
            platform. A schedule delay surfaces in the CRM as a projected close-date
            change. A buyer&apos;s selection deadline adjusts when the design-center
            milestone shifts. The schedule isn&apos;t a standalone module — it&apos;s
            the backbone the rest of the platform runs on.
          </p>

          <p>
            Production home building is a game of managed repetition. The right
            schedule template means that repetition works for the team instead of
            against them — each new start inherits the best current version of the
            plan, cascade scheduling absorbs the delays that always happen, and the
            superintendent&apos;s day is spent building instead of rebuilding calendars.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Build the plan once. Run it on every home.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s schedule templates and cascade scheduling
              eliminate the manual work of rebuilding schedules for every start —
              and keep the whole community on track when delays happen. See the full
              scheduling platform in action.
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
