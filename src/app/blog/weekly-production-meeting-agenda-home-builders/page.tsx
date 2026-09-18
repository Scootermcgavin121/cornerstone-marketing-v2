import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/weekly-production-meeting-agenda-home-builders.png";
const heroImageAlt =
  "home builder production meeting agenda illustrated in a Cornerstone PM home builder workflow dashboard";

const blogSchema = buildBlogPostSchema({
  title:
    "A Weekly Production Meeting Agenda That Ends With Decisions, Not Status Updates",
  slug: "weekly-production-meeting-agenda-home-builders",
  description:
    "Run a weekly home builder production meeting around schedule exceptions, missing vendor prices, purchasing decisions, and clear owners for next steps on site.",
  datePublished: "2026-09-18",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

export const metadata: Metadata = {
  title:
    "A Weekly Production Meeting Agenda That Ends With Decisions — Cornerstone PM™ Blog",
  description:
    "Run a weekly home builder production meeting around schedule exceptions, missing vendor prices, purchasing decisions, and clear owners for next steps on site.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/weekly-production-meeting-agenda-home-builders",
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
  name: "How to Run a Weekly Home Builder Production Meeting",
  description:
    "A step-by-step agenda for running a weekly production meeting that ends with owners and next steps for every schedule exception, instead of a status readout.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Pull the exception list before the meeting starts",
      text: "Generate a list of every task that is behind schedule, blocking a downstream trade, or missing an accepted vendor price. Skip the homes that are on track — the meeting is for exceptions, not a full portfolio review.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Open with downstream impact, not the delay itself",
      text: "For each delayed task, state which trade is scheduled next and how many days of slack remain before that trade's start date is affected. This reframes the discussion around consequence, not blame.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Flag every purchase order waiting on vendor pricing",
      text: "Review scope items with no accepted vendor price. A task cannot be purchased against a real budget number until a bid is awarded, so unresolved pricing belongs in the same meeting as schedule exceptions.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Check the budget report for lots trending over committed cost",
      text: "Pull up the Foreman budget report for any community with lots trending over their committed cost. Decide whether the variance needs a change order, a vendor conversation, or a note for the next design review.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Assign one owner and one next step per exception",
      text: "Every item on the agenda leaves the meeting with a named owner and a specific next action — not a general acknowledgment that the item was discussed. Vague follow-ups are why exceptions repeat week over week.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Close with the exception list, not a summary deck",
      text: "The output of the meeting is the same exception list you opened with, now annotated with an owner and next step next to each line. No separate minutes document, no slide deck — the linked schedule and purchasing records already hold the detail.",
    },
  ],
};

const agendaItems = [
  {
    label: "Schedule exceptions",
    detail: "Tasks behind schedule and which trade they block downstream",
    color: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  },
  {
    label: "Missing vendor pricing",
    detail: "Scope items with no accepted bid to purchase against",
    color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    label: "PO follow-ups",
    detail: "Purchase orders waiting on a vendor response or receipt",
    color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
  },
  {
    label: "Budget variance",
    detail: "Lots trending over committed cost on the Foreman report",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
  },
];

const faqs = [
  {
    q: "How long should a weekly production meeting take?",
    a: "Most builders running the agenda around exceptions instead of a full status readout keep it to 20-30 minutes, even across several communities. The length scales with the number of exceptions, not the number of homes under construction.",
  },
  {
    q: "Does Cornerstone run or record the meeting automatically?",
    a: "No. Cornerstone does not run automated meetings or generate meeting minutes. It surfaces the exception list, vendor pricing gaps, and budget variance from linked home schedules, purchasing records, and Foreman budget reports so the meeting itself stays a human conversation with real data in front of it.",
  },
  {
    q: "Who should own the exception list during the meeting?",
    a: "Typically the production manager or superintendent running the meeting owns reading the list, but each individual exception gets assigned to whoever is closest to resolving it — a superintendent for a schedule delay, a purchasing coordinator for missing vendor pricing.",
  },
  {
    q: "What if an exception has no clear owner yet?",
    a: "Assign an owner anyway, even if their first next step is just to investigate and report back next week. An exception without a named owner is the most common reason the same delay shows up on the agenda three weeks in a row.",
  },
];

export default function WeeklyProductionMeetingAgendaPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Construction
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            A Weekly Production Meeting Agenda That Ends With Decisions, Not
            Status Updates
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 18, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Run the weekly production meeting around exceptions, not a
            homes-by-homes status readout: pull every schedule delay,
            unpriced scope item, and budget variance into one list, and close
            the meeting with a named owner and a next step on every line. In{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone
            </Link>
            , that list is already sitting in the linked schedule, purchasing,
            and budget records before anyone opens a laptop.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do production meetings turn into status readouts?
          </h2>

          <p>
            The default format is easy to fall into: go community by
            community, home by home, and ask &quot;where are we?&quot; on
            each one. It feels thorough, but most of the airtime goes to
            homes that are on schedule and need no discussion at all. The
            handful of homes with a real problem — a delayed trade, a vendor
            who never priced a change order, a budget creeping past committed
            cost — get the same few minutes as everything else, and the
            meeting ends with a list of things that were mentioned rather
            than a list of things that will change before next week.
          </p>

          <p>
            An exception-first agenda inverts that. If a home has no
            schedule delay, no unpriced scope item, and no budget variance,
            it doesn&apos;t come up. The meeting only spends time on what
            actually needs a decision.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What belongs on the agenda?
          </h2>

          <p>
            Four categories cover most of what stalls a production schedule.
            Pulling all four from the same source data — rather than a
            spreadsheet someone updated manually the night before — is what
            keeps the list trustworthy.
          </p>

          <div className="not-prose grid grid-cols-2 gap-3 my-6 sm:grid-cols-4">
            {agendaItems.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 text-center ${s.color}`}
              >
                <p className="text-sm font-bold mb-1">{s.label}</p>
                <p className="text-xs text-slate-400 leading-snug">
                  {s.detail}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How do you frame a schedule delay so it leads to a decision?
          </h2>

          <p>
            State the downstream impact before the delay itself. Instead of
            &quot;framing is running two days behind on Lot 12,&quot; say
            &quot;framing is two days behind on Lot 12, and rough-in electric
            is scheduled to start Thursday — we have one day of slack before
            that start date moves.&quot; The second version tells everyone in
            the room exactly what decision needs to happen and by when.
            Cornerstone&apos;s{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              linked home schedules
            </Link>{" "}
            and cascade scheduling carry that downstream relationship
            automatically, so the person running the meeting isn&apos;t
            reconstructing trade sequencing from memory mid-discussion.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do unpriced scope items belong in a production meeting?
          </h2>

          <p>
            A schedule task can show as on track and still be a problem if
            there is no accepted vendor bid behind it. Once that task
            completes, purchasing has nothing to generate a purchase order
            against, and the delay just moves one step downstream — from the
            schedule to the{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing
            </Link>{" "}
            queue. Reviewing unpriced scope items in the same meeting as
            schedule exceptions catches the gap before it becomes a stalled
            PO the week after.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What to ask about every unpriced item
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-5 py-3.5">
                <p className="text-sm text-slate-300">
                  Has a bid been requested from a vendor for this scope item?
                </p>
              </div>
              <div className="px-5 py-3.5">
                <p className="text-sm text-slate-300">
                  Is the task close enough to completion that pricing needs
                  to be resolved this week?
                </p>
              </div>
              <div className="px-5 py-3.5">
                <p className="text-sm text-slate-300">
                  Who is following up with the vendor, and by when?
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does budget variance fit into a weekly meeting?
          </h2>

          <p>
            Not every budget conversation needs a meeting, but a lot
            trending over its committed cost does. Pulling up the Foreman
            budget report for flagged lots during the same meeting — rather
            than in a separate monthly review — means the variance gets
            addressed while there&apos;s still time to change a decision,
            not after the home is already framed and the cost is locked in.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What makes an owner and next step &quot;real&quot;?
          </h2>

          <p>
            A real next step names a person and an action with a deadline:
            &quot;Sarah calls the electrical vendor by Wednesday for the
            rough-in price&quot; is real. &quot;We&apos;ll keep an eye on
            it&quot; is not. The test is whether the item could show up on
            next week&apos;s agenda with a clear answer to &quot;what
            happened with this?&quot; If the next step was vague, the answer
            is usually &quot;nothing,&quot; and the exception repeats.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does this replace meeting minutes?
          </h2>

          <p>
            The exception list itself is the output — annotated with an
            owner and next step next to each line — rather than a separate
            minutes document typed up afterward. Because the list is built
            from linked schedule, purchasing, and budget records rather than
            a static export, anyone can open it again before next
            week&apos;s meeting and see exactly what changed. Cornerstone
            doesn&apos;t generate automated meeting summaries or run the
            meeting itself — this is a recommended human workflow built on
            top of the same data your team already keeps current.
          </p>

          <div className="not-prose my-10">
            <h2 className="text-2xl font-bold text-white mb-6">
              Frequently asked questions
            </h2>
            <FAQAccordion />
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Walk into next week&apos;s meeting with the exception list
              already built.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Schedule delays, unpriced scope items, and budget variance —
              pulled from linked home schedules, purchasing, and Foreman
              budget reports, available on{" "}
              <Link
                href="/construction"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                every Cornerstone plan
              </Link>
              .
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

function FAQAccordion() {
  return (
    <div className="not-prose divide-y divide-slate-800/60 rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden">
      {faqs.map((item, i) => (
        <div key={i} className="px-5 py-4">
          <p className="text-sm font-semibold text-white mb-1.5">{item.q}</p>
          <p className="text-sm text-slate-400 leading-relaxed">{item.a}</p>
        </div>
      ))}
    </div>
  );
}
