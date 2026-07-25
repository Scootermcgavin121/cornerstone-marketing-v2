import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/cascade-scheduling-home-builders.png";
const heroImageAlt =
  "Construction scheduling software for home builders — cascade scheduling adjusts downstream trades after a delay";

const blogSchema = buildBlogPostSchema({
  title: "When One Trade Slips: Cascade Scheduling for Home Builders",
  slug: "cascade-scheduling-construction-delays-home-builders",
  description:
    "One late trade can wreck a home construction schedule. See how cascade scheduling auto-adjusts downstream tasks and notifies vendors so homes stay on track.",
  datePublished: "2026-07-25",
  mentionsProduct: {
    name: "Cornerstone PM Construction Scheduling",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

export const metadata: Metadata = {
  title:
    "When One Trade Slips: Cascade Scheduling for Home Builders — Cornerstone PM™ Blog",
  description:
    "One late trade can wreck a home construction schedule. See how cascade scheduling auto-adjusts downstream tasks and notifies vendors so homes stay on track.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/cascade-scheduling-construction-delays-home-builders",
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

const tradeChain = [
  { trade: "Framing", status: "delayed", impact: "+3 days — all downstream shifts" },
  { trade: "Plumbing Rough", status: "shifted", impact: "Start date moves → Aug 4" },
  { trade: "Electrical Rough", status: "shifted", impact: "Start date moves → Aug 6" },
  { trade: "Insulation", status: "shifted", impact: "Start date moves → Aug 9" },
  { trade: "Drywall", status: "shifted", impact: "Start date moves → Aug 12" },
  { trade: "Paint / Trim", status: "shifted", impact: "Completion shifts — closing at risk" },
];

export default function CascadeSchedulingPage() {
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
            Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            When One Trade Slips: Cascade Scheduling for Home Builders
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 25, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            When framing runs three days late on a home, every downstream trade —
            plumbing rough-in, electrical, insulation, drywall — is now scheduled on
            the wrong date. Cornerstone&apos;s{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              cascade scheduling
            </Link>{" "}
            adjusts all of them automatically and notifies every affected vendor so
            no one shows up to an empty jobsite.
          </p>

          <p>
            Construction scheduling is a dependency problem. Every trade on a home
            depends on the one before it. Framing has to be closed in before
            insulation, insulation before drywall, drywall before paint. When one
            link in that chain slips — bad weather, material delivery, a crew running
            over on the previous job — the entire tail of the schedule is now wrong.
          </p>

          <p>
            Most builders fix this the hard way: a superintendent spends a morning
            on the phone rescheduling five trades, updating a whiteboard or a
            spreadsheet that nobody else can see, then hoping the vendors actually
            received the new dates. On a community with 20 or 30 active homes, a
            single framing delay can generate dozens of downstream reschedules across
            the job board. That's not a scheduling problem — it's a coordination tax
            that eats a superintendent&apos;s entire day.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does cascade scheduling work?
          </h2>

          <p>
            In Cornerstone&apos;s{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              construction scheduling module
            </Link>
            , every task in a home&apos;s schedule is connected to the tasks that
            depend on it. When a task&apos;s completion date changes — whether because
            a superintendent marks it delayed, or because a preceding task pushes its
            start — all downstream tasks in the dependency chain shift to match.
          </p>

          <p>
            Move framing out three days, and Cornerstone automatically moves plumbing
            rough-in, electrical rough, insulation, drywall, and every trade after them
            by the appropriate number of days. The schedule stays internally consistent
            with one adjustment instead of five separate manual edits.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What a 3-day framing delay looks like across one home
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {tradeChain.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                  <div
                    className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                      row.status === "delayed"
                        ? "bg-red-500"
                        : "bg-amber-400"
                    }`}
                  />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white">{row.trade}</span>
                  </div>
                  <div className="text-sm text-slate-400 text-right">{row.impact}</div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                One task update — Cornerstone adjusts the full downstream chain and
                sends vendor notifications automatically.
              </p>
            </div>
          </div>

          <p>
            Vendors don&apos;t need to log into Cornerstone to see updated dates.
            When a cascade reschedule runs, affected vendors receive automatic
            notifications with their new start date — so the plumber, electrician,
            and insulation contractor all know before they plan their week, without
            the superintendent making a single phone call.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why production home building needs this more than custom construction
          </h2>

          <p>
            A custom builder running two or three one-off jobs can probably absorb
            a manual reschedule. A production builder running 20, 40, or 80 homes
            across two communities cannot. The whole model depends on repeatability:
            the same Magnolia plan, the same schedule template, applied to every lot
            in the community.
          </p>

          <p>
            Cornerstone builds schedules from{" "}
            <strong className="text-white">schedule templates</strong> — a reusable
            sequence of tasks with predecessor relationships baked in. Apply the
            Magnolia template to Lot 14 and the full schedule generates instantly,
            correctly sequenced. When that template is tuned over time (a task that
            always runs long gets an extra buffer; a new trade is added to the
            sequence), every future home scheduled from that template inherits the
            improvement.
          </p>

          <p>
            Generic project management tools — ClickUp, Asana, Monday — let you
            re-drag bars on a Gantt chart. That works when you have three projects.
            With 30 active homes and 12 trade sequences per home, the right answer
            is a cascade that moves everything for you — not a tool that makes
            re-dragging slightly easier.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The Gantt view across an entire community
          </h2>

          <p>
            Cornerstone&apos;s Gantt view isn&apos;t per-home — it shows the full
            community. Superintendents see all active homes and their current task
            states side by side, with status indicators surfacing which homes are on
            track, which have delayed tasks, and which have a dependency conflict.
          </p>

          <p>
            From that view, a single task adjustment on one home ripples through the
            schedule in real time. The superintendent can see the downstream effect
            immediately before committing — useful for deciding whether a three-day
            slip is worth absorbing with an overtime push or whether it needs to
            propagate and delay the close.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What the scheduling module covers
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "Cascade scheduling",
                  detail: "One task update shifts all downstream dependencies automatically",
                },
                {
                  label: "Schedule templates",
                  detail: "Build once, apply to every home of that plan in every community",
                },
                {
                  label: "Vendor notifications",
                  detail: "Affected subs get updated dates without a phone call",
                },
                {
                  label: "Community Gantt view",
                  detail: "See all active homes, all task states, side by side",
                },
                {
                  label: "Webhook events",
                  detail: "37 event types including task completion and schedule changes for automation",
                },
                {
                  label: "Task-to-PO connection",
                  detail:
                    "Assigned tasks auto-generate POs to the assigned vendor when the task is scheduled",
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
            Schedule changes as automation triggers
          </h2>

          <p>
            Cornerstone ships{" "}
            <Link
              href="/blog/webhook-events-construction-software-automation"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              37 typed webhook events
            </Link>{" "}
            — including events for task completion, task rescheduling, and
            cascade-triggered date changes. Builders who want to go further can wire
            those events to external automations: SMS to the superintendent when a
            cascade runs, a push to a Slack channel when a closing-critical task
            slips, or a call to a voice automation system when a vendor&apos;s start
            date changes.
          </p>

          <p>
            The webhook layer means the scheduling system doesn&apos;t have to be
            the notification system — builders can route schedule change events
            to whatever channel their team actually checks, without writing custom
            integrations from scratch.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The purchasing connection: tasks that generate POs
          </h2>

          <p>
            The schedule and the purchasing module in Cornerstone are connected, not
            siloed. When a task is assigned to a vendor and that task is scheduled,
            Cornerstone auto-generates the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchase order
            </Link>{" "}
            for that vendor and emails it automatically. The vendor knows the
            scheduled date, the scope, and the PO details in one message — no
            separate notification, no back-and-forth to confirm dates.
          </p>

          <p>
            When the task date cascades due to a delay, the vendor notification
            goes out with the updated date. The PO they already have reflects the
            change. The purchasing trail — PO to QuickBooks commitment to bill on
            completion — follows the updated schedule without anyone rebuilding it.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  The whiteboard problem
                </p>
                <p className="text-sm text-slate-400">
                  A schedule that lives on a whiteboard or in a personal spreadsheet
                  is invisible to the team, invisible to vendors, and invisible to the
                  build. When it changes, everyone who needs to know has to be called
                  individually. Cornerstone&apos;s schedule is the system of record —
                  visible, live, and capable of notifying the people who need to know
                  without a superintendent dialing five numbers.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this connects to the broader platform
          </h2>

          <p>
            Cascade scheduling sits inside a full{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management platform
            </Link>
            . The schedule connects to purchasing (tasks generate POs), to the design
            center (the schedule drives buyer selection deadlines), and to the sales
            CRM (the projected close date follows the schedule). A delay doesn&apos;t
            just affect the Gantt — it surfaces wherever that date matters across
            the platform.
          </p>

          <p>
            Foreman AI, Cornerstone&apos;s construction agent with{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              396+ skills
            </Link>
            , can read and update schedule tasks by chat. A superintendent can ask
            Foreman to reschedule a task, see what cascades, and confirm the change
            — without leaving the conversation. For teams who manage schedules at
            volume, that&apos;s a faster path than navigating a Gantt view for
            every adjustment.
          </p>

          <p>
            Production home building is a game of managed repetition. The schedule
            template is right once, applied many times. When a delay happens — and
            it always does — the system absorbs it and propagates the change cleanly,
            rather than making a superintendent absorb it personally on the phone.
            That&apos;s the difference between a scheduling tool and a scheduling
            platform.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Keep your build on schedule — even when trades aren&apos;t.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM&apos;s cascade scheduling adjusts downstream tasks
              automatically and notifies vendors so one delay doesn&apos;t become
              ten phone calls. See the full scheduling platform in action.
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
