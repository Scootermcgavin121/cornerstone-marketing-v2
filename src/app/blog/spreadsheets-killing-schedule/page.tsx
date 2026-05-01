import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Spreadsheet Is Killing Your Schedule — Cornerstone PM Blog",
  description:
    "Excel doesn't notify your framer when the foundation is ready. Here's what running your build schedule in spreadsheets is costing you.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/spreadsheets-killing-schedule.png", width: 1024, height: 1024, alt: "Spreadsheet-based construction scheduling killing the home builder's schedule" }],
  }
};

export default function SpreadsheetsPost() {
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

        <BlogHero src="/blog/spreadsheets-killing-schedule.png" alt="Spreadsheet-based construction scheduling killing the home builder's schedule" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Your Spreadsheet Is Killing Your Schedule
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 10, 2026</span>
            <span>·</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            We get it. You&apos;ve been using Excel for years. You know your spreadsheet like the back
            of your hand. You have color codes, conditional formatting, maybe even a macro or two.
            It works. Sort of.
          </p>

          <p>
            But here&apos;s the thing Excel will never do: it won&apos;t call your framing crew at 7am to
            tell them the foundation passed inspection. It won&apos;t alert you when your roofing sub
            is scheduled on the same day as your HVAC rough-in on Lot 12. And it won&apos;t show your
            buyer where their home stands right now without you sending them a manual update.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The hidden cost of spreadsheet scheduling
          </h2>

          <p>
            Let&apos;s be honest about what spreadsheet scheduling actually costs you:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Phone calls you shouldn't be making",
                body: "Every sub update, every schedule change, every &ldquo;are you still coming Thursday?&rdquo; — that's you, personally, spending 20-30 minutes a day on coordination that software should handle.",
              },
              {
                title: "Double-bookings that cost real money",
                body: "When your concrete crew and your framing crew both show up on the same lot on the same day, someone's wasting a trip. That's gas, labor, and goodwill — all burned because Excel doesn't have conflict detection.",
              },
              {
                title: "Version confusion",
                body: "Is the version on your desktop the current one? What about the one your superintendent printed last Tuesday? When a schedule lives in a file, there's always a risk someone's working off an old copy.",
              },
              {
                title: "No proactive alerts",
                body: "Your foundation passed inspection at 2pm on Friday. But your framing crew isn't starting until Tuesday because nobody updated the schedule and notified them over the weekend. That's three wasted days — on every home.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What good scheduling software actually does
          </h2>

          <p>
            The point isn&apos;t to replace your spreadsheet with a more complicated spreadsheet. The
            point is to have a system that&apos;s connected — where a status change on the foundation
            automatically moves the framing crew&apos;s start date, sends them a notification, and
            updates your buyer&apos;s progress view without you lifting a finger.
          </p>

          <p>
            That&apos;s what Cornerstone PM&apos;s scheduling module does. Visual Gantt-style scheduling,
            subcontractor assignments, conflict detection, and automated notifications. All the things
            Excel quietly fails at — without requiring you to become a software expert.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The transition is easier than you think
          </h2>

          <p>
            Most builders who switch from spreadsheets to dedicated scheduling software tell us the
            same thing: they wish they&apos;d done it sooner. The learning curve is real but short.
            Within a week, most builders are scheduling faster than they did in Excel — because the
            software does the work of updating dependencies and sending notifications that they used
            to do manually.
          </p>

          <p>
            Your spreadsheet has served you well. But your schedule deserves better.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
          <h3 className="text-lg font-bold text-white mb-2">See Cornerstone PM scheduling in action</h3>
          <p className="text-slate-400 text-sm mb-4">
            Request beta access — free for 2 years for early adopters.
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
