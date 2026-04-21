import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Permits Are Stalling Your Build Schedule — Cornerstone PM Blog",
  description:
    "Permit delays are the silent schedule killer for home builders. Here's how top builders track permits, avoid costly gaps, and keep construction moving.",
};

export default function PermittingPost() {
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

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-orange-400 bg-orange-500/10 border-orange-500/20 mb-4 inline-block">
            Permitting
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Permits Are Stalling Your Build Schedule
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 21, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            You&apos;ve got subs lined up, lumber on order, and a buyer checking their portal every
            morning. Then the municipality sits on your framing permit for three weeks — and your
            entire schedule collapses like a house of cards.
          </p>

          <p>
            Permitting delays are the most predictable unpredictable problem in residential
            construction. Every builder knows they&apos;re coming. Few have a system that actually
            accounts for them. The result? Idle crews, frustrated buyers, and margin lost one
            delayed day at a time.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The real cost of a permit bottleneck
          </h2>

          <p>
            Most builders track permits the same way they track everything else: a sticky note,
            a spreadsheet column, or the nagging feeling in the back of their head. That&apos;s not
            a system — that&apos;s wishful thinking.
          </p>

          <p>
            Here&apos;s what a single untracked permit delay actually costs:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Subcontractor rescheduling fees",
                body: "When your framing permit is late and your framing crew shows up anyway, someone eats the cost of a wasted mobilization. Do that twice per community and you've burned thousands of dollars in avoidable rescheduling.",
              },
              {
                title: "Buyer trust erosion",
                body: "Your buyer had a close date circled on the calendar. Now it's moving. You can explain permitting delays all you want — what they hear is \"we didn't have a plan.\" Buyers who feel blindsided don't refer their friends.",
              },
              {
                title: "Compounding schedule drift",
                body: "A two-week permit delay doesn't just cost two weeks. It shifts your HVAC rough-in, your insulation crew, your drywall sub — everyone downstream. A single bottleneck can add a month to your close date if you don't catch it early.",
              },
              {
                title: "Revenue timing impact",
                body: "Delayed closes mean delayed draws. On a 20-home community, even a one-week average slip per home can materially affect your quarterly cash flow. Permitting isn't just a scheduling problem — it's a financial one.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What builders with tight schedules do differently
          </h2>

          <p>
            The builders who consistently hit their close dates aren&apos;t lucky — they treat permitting
            like a managed workflow, not a waiting game. A few habits that separate them from the rest:
          </p>

          <p>
            <strong className="text-white">They apply early and track status actively.</strong> Instead
            of submitting a permit application and hoping, top builders submit well ahead of planned
            start dates and follow up at consistent intervals. They know which municipalities run two
            weeks and which run six — and they plan accordingly.
          </p>

          <p>
            <strong className="text-white">They tie permit status directly to the schedule.</strong>{" "}
            If a permit isn&apos;t approved, no downstream work should be scheduled as confirmed. That
            sounds obvious, but most scheduling tools don&apos;t enforce it — your framing crew gets
            booked whether the permit is in hand or not.
          </p>

          <p>
            <strong className="text-white">They communicate proactively with buyers.</strong> When
            a permit is running late, great builders don&apos;t wait for the buyer to notice a missed
            milestone. They get ahead of it — a quick update explaining the delay and the new
            expected timeline goes a long way toward maintaining trust.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How software changes the equation
          </h2>

          <p>
            The biggest problem with spreadsheet permit tracking isn&apos;t that it&apos;s hard — it&apos;s that
            it&apos;s disconnected. Your permit status lives in one place, your build schedule lives in
            another, and your buyer communication lives in a third. Nothing talks to anything else.
          </p>

          <p>
            Purpose-built builder software connects these dots. When a permit status changes —
            submitted, under review, approved, or flagged — that update flows into the schedule.
            Crew start dates shift automatically. The buyer&apos;s homeowner portal reflects the
            updated timeline. Your superintendent gets an alert. No manual data entry, no
            version confusion, no forgotten follow-ups.
          </p>

          <p>
            Cornerstone PM includes a permitting tracker built into the same platform as your
            construction schedule, sales pipeline, and buyer portal. When a permit clears, the
            system knows — and your schedule responds. No more chasing city hall with one hand
            and texting your sub with the other.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The bottom line
          </h2>

          <p>
            You can&apos;t make the city move faster. But you can build a system that makes permit
            delays less damaging — by catching them early, connecting them to your schedule,
            and communicating them clearly to your buyers. That&apos;s the difference between a delay
            that costs you two weeks and one that costs you two months.
          </p>

          <p>
            Stop treating permitting as something that happens to you. Start managing it like
            the critical path item it actually is.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See how Cornerstone PM tracks permits alongside your build schedule
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Join the beta — free for 2 years for early adopters.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-900 font-bold text-sm hover:from-cyan-400 hover:to-teal-400 transition-all duration-200"
          >
            Get Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
