import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/permitting-pipeline-handoff.png";
const heroImageAlt =
  "Sales to construction handoff for home builders — permitting pipeline dashboard tracking template setup and permit approval status";

const blogSchema = buildBlogPostSchema({
  title:
    "The Sales-to-Construction Handoff Is Where Home Builders Lose Two Weeks",
  slug: "permitting-pipeline-sales-to-construction-handoff-home-builders",
  description:
    "A signed contract sits while nobody sets up the schedule. Here is how a permitting pipeline closes the gap between a sale and a real construction start.",
  datePublished: "2026-08-26",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

export const metadata: Metadata = {
  title:
    "The Sales-to-Construction Handoff Is Where Home Builders Lose Two Weeks — Cornerstone PM™ Blog",
  description:
    "A signed contract sits while nobody sets up the schedule. Here is how a permitting pipeline closes the gap between a sale and a real construction start.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/permitting-pipeline-sales-to-construction-handoff-home-builders",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Close the Sales-to-Construction Handoff Gap for Home Builders",
  description:
    "A step-by-step guide to eliminating the dead time between contract signature and first trade on the lot — using a permitting pipeline dashboard, auto-transition triggers, and one-click template setup.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Complete the last sales pipeline task to auto-transition the home",
      text: "When the final task in the sales pipeline is marked complete, the home status auto-transitions to In Progress. No email to construction, no meeting, no handoff document required — the trigger is the data event itself.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Review the Permitting Pipeline dashboard for new arrivals",
      text: "Homes that have transitioned to In Progress appear on the Permitting Pipeline dashboard as cards showing buyer info, structural options selected, and floorplan and elevation details. Urgency badges flag any home that has waited three or more days without templates applied.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Apply templates from the one-click setup page",
      text: "Open the template setup panel and select Permitting, Foundation, Site Development, and Construction templates from dropdown selectors. One click applies all four — the home moves from Awaiting Templates to Templates Applied.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Submit the permit application and update status",
      text: "With templates in place, advance the home to Permit Submitted as the application goes to the jurisdiction. The status card in the pipeline now shows the submission date so nothing ages out of sight.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Mark the permit Approved to release construction",
      text: "When the jurisdiction approves the permit, mark the home Approved in the pipeline. This clears the permit gate and allows the construction Gantt to activate — vendor notifications go out automatically and the build is officially underway.",
    },
  ],
};

const pipelineStatuses = [
  {
    label: "Awaiting Templates",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    detail: "Home sold, templates not yet applied — urgency badge fires at 3+ days",
  },
  {
    label: "Templates Applied",
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    detail: "Permitting, Foundation, Site Dev, and Construction templates locked in",
  },
  {
    label: "Permit Submitted",
    color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    detail: "Application submitted; construction gated until jurisdiction approves",
  },
  {
    label: "Approved",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    detail: "Permit gate clears, Gantt activates, vendors notified — build starts",
  },
];

const handoffSteps = [
  {
    step: "1",
    title: "Last sales task completes — home auto-transitions",
    detail:
      "No email, no meeting, no handoff document. The last pipeline task fires the status change automatically so construction always knows the moment a sale closes.",
  },
  {
    step: "2",
    title: "Home appears on the Permitting Pipeline dashboard",
    detail:
      "Buyer info, structural options, floorplan, and elevation are visible at a glance. Urgency badges surface homes waiting more than three days so nothing stalls quietly.",
  },
  {
    step: "3",
    title: "One-click template setup applies all four templates",
    detail:
      "Select Permitting, Foundation, Site Development, and Construction templates from dropdowns. One click covers all four — no hunting across separate modules.",
  },
  {
    step: "4",
    title: "Permit submitted; gate enforced until approved",
    detail:
      "The permit gate prevents crews from starting work that hasn't been permitted yet. Status moves to Permit Submitted and the dashboard tracks submission date.",
  },
  {
    step: "5",
    title: "Permit approved — Gantt generates, vendors notified, build starts",
    detail:
      "Marking Approved clears the gate. The construction schedule goes live and vendors receive date notifications automatically — no one has to open a second system.",
  },
];

export default function PermittingPipelineHandoffPage() {
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
            The Sales-to-Construction Handoff Is Where Home Builders Lose Two
            Weeks
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 26, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The fastest fix for the sales-to-construction handoff gap is an
            automatic status trigger — when the last sales pipeline task
            completes, the home transitions to In Progress on its own and
            appears on a{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Permitting Pipeline dashboard
            </Link>{" "}
            where the permitting agent picks up immediately, applies four
            templates in one click, and the build starts without a handoff
            meeting anyone had to schedule.
          </p>

          <p>
            The problem is familiar. Sales marks a home sold and considers the
            deal closed. Construction is not yet aware — or is aware but waiting
            for someone to formally tell them to start. The signed contract sits
            while nobody builds the schedule. Days pass. Sometimes weeks. The
            builder is paying lot carry and the buyer is counting down to a
            move-in date, and nothing is happening because two departments have
            a gap between them that no software closed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does the handoff gap exist in the first place?
          </h2>

          <p>
            Most construction software treats sales and scheduling as separate
            systems. Sales closes a deal in one module, then somebody — a
            project coordinator, an office manager, whoever drew the short
            straw — manually creates the home in the construction system,
            builds the schedule from scratch, and notifies vendors that a
            start date exists. That human step is the gap, and when the person
            who owns it is also managing four other things, it doesn&apos;t happen
            on day one.
          </p>

          <p>
            Generic project management tools make this worse, not better. They
            track tasks but they have no concept of a &quot;home status&quot; or a
            &quot;sales pipeline task that triggers a construction event.&quot; Every
            handoff requires a person to notice the trigger and act on it manually.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the auto-transition trigger work?
          </h2>

          <p>
            In Cornerstone, the last task in the sales pipeline is the trigger.
            When it completes, the home status changes to In Progress
            automatically — no email required, no meeting, no handoff document.
            The status change is a data event, and the Permitting Pipeline
            picks it up the moment it fires.
          </p>

          <p>
            This matters because the handoff is not a communication problem.
            It is a sequencing problem. When the trigger is a person sending
            an email, the handoff happens at the speed of whoever sends the
            email. When the trigger is a completed task, the handoff happens
            at the speed of the software.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the Permitting Pipeline dashboard show?
          </h2>

          <p>
            The Permitting Pipeline is a dedicated view built for the permitting
            agent — the person responsible for moving a sold home through
            templates and permit approval before the first nail goes in. Each
            home appears as a card showing:
          </p>

          <ul className="list-none space-y-2 not-prose">
            {[
              "Community name, lot number, and street address",
              "Floorplan name and elevation selection",
              "Structural options the buyer selected (bonus room, finished basement, 3-car garage)",
              "Current pipeline status with an urgency badge if the home has waited 3+ days",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-slate-300 text-base">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                {item}
              </li>
            ))}
          </ul>

          <p>
            The urgency badge is the part builders notice first. When a home
            has been sitting in Awaiting Templates for more than three days,
            it gets flagged. Nothing ages out of sight behind a quiet green
            status chip.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What are the four pipeline statuses?
          </h2>

          {/* Pipeline status cards */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Permitting Pipeline — status stages
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {pipelineStatuses.map((status, i) => (
                <div key={i} className="px-5 py-4 flex items-start gap-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border shrink-0 mt-0.5 ${status.color}`}
                  >
                    {status.label}
                  </span>
                  <p className="text-sm text-slate-400">{status.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <p>
            Each status is a real gate, not a label. A home cannot move to
            construction active until its permit is marked Approved. That
            enforcement prevents crews from starting work that hasn&apos;t cleared
            the jurisdiction — which is both a legal and a scheduling problem
            if it goes wrong.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does one-click template setup work?
          </h2>

          <p>
            From the Permitting Pipeline dashboard, clicking into any home in
            the Awaiting Templates state opens a template setup panel with four
            dropdown selectors: Permitting, Foundation, Site Development, and
            Construction. Each selector shows the available template options
            for that stage. Choose one from each and apply — the home moves
            to Templates Applied immediately.
          </p>

          <p>
            The reason this is one screen rather than four separate module
            navigations is that&nbsp;
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              production home builder software
            </Link>{" "}
            should know that these four templates always get applied together
            at this stage. A general project management tool would make you
            navigate to four different places, because it doesn&apos;t know what
            a &quot;permitting stage&quot; is or what it requires.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step-by-step: closing the handoff gap
          </h2>

          <div className="not-prose space-y-4 my-6">
            {handoffSteps.map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    {s.title}
                  </p>
                  <p className="text-sm text-slate-400">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens when the permit is approved?
          </h2>

          <p>
            Marking a home Approved in the pipeline clears the permit gate and
            releases the{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              construction schedule
            </Link>
            . The Gantt generates from the Construction template that was
            applied earlier, vendor notifications go out automatically to
            every trade that has a task in the first week, and the build is
            officially underway — without anyone opening a second system to
            send announcements.
          </p>

          <p>
            This is where the template investment pays off. Because the
            schedule structure was applied at template time, the Gantt is
            not built from scratch on approval day. The task sequence, trade
            assignments, and dependencies are already there. The permit
            approval is the start signal, not the build-the-schedule signal.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does the permitting pipeline work across multiple communities?
          </h2>

          <p>
            Yes. The dashboard shows every in-progress home across all
            communities in one view, which is where the urgency badges become
            especially useful. When a permitting agent is managing forty homes
            across five communities, the &quot;waiting 4 days&quot; badge on Cedar
            Ridge Lot 24 does not get buried under a clean green status.
            The homes that need attention surface to the top of the mental
            queue automatically.
          </p>

          <p>
            The structural options column on each card is also more useful
            than it first appears. A home with a Bonus Room and a 3-Car Garage
            may require a different Foundation template than the standard plan
            — the PA sees that context on the card before opening the template
            selector, rather than having to pull up the sales notes separately.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What plan does the permitting pipeline come with?
          </h2>

          <p>
            The permitting pipeline is included from the Starter plan upward —
            it is not a Pro+ exclusive. Any builder on Cornerstone has access
            to the dashboard, the auto-transition trigger, and the one-click
            template setup. The{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              production home builder
            </Link>{" "}
            who is currently losing two weeks between contract and first trade
            does not need to be on the highest plan to fix it.
          </p>

          <p>
            The argument for having a dedicated pipeline stage rather than a
            generic task list is that the permitting stage has a specific shape:
            it always starts the same way (templates), it always ends the same
            way (approved permit), and it always blocks the same thing
            (construction start). A stage built for that shape enforces the
            shape. A task list doesn&apos;t.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop losing two weeks between sale and start.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone&apos;s Permitting Pipeline closes the handoff gap with
              auto-transition triggers, urgency badges, one-click template
              setup, and permit gates that keep crews off unapproved lots —
              available from the Starter plan.
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
