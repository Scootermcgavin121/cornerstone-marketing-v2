import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Why Your Design Center Process Is Leaking Options Revenue — Cornerstone PM™ Blog",
  description:
    "The design center appointment is one of the highest-margin moments in a home sale. Most builders are leaving money on the table. Here's why — and how to fix it.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/design-center-software.png", width: 1024, height: 1024, alt: "Home builder design center software showing structured options and selections" }],
  }
};

export default function DesignCenterPost() {
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

        <BlogHero src="/blog/design-center-software.png" alt="Home builder design center software showing structured options and selections" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20 mb-4 inline-block">
            Design Center
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Your Design Center Process Is Leaking Options Revenue
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 29, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            The design center appointment is one of the best margin opportunities in residential
            construction. A buyer who walks in excited about their new home is primed to spend —
            on upgraded flooring, premium cabinets, a finished basement, an outdoor kitchen.
            Most builders capture a fraction of that potential. The rest leaks out through a
            process that was never built to convert.
          </p>

          <p>
            If your design selections are tracked in a spreadsheet, quoted verbally, and
            communicated to purchasing via email, you already know the problem. You just might
            not know how much it&apos;s costing you.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where design center revenue disappears
          </h2>

          <p>
            Options revenue doesn&apos;t evaporate all at once. It drains through small gaps in
            your process — gaps that feel minor until you add them up across a community.
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Selections that never make it to purchasing",
                body: "A buyer upgrades their kitchen countertops in the design appointment. It gets written on a paper form and handed to your coordinator, who emails purchasing. Purchasing updates their spreadsheet. Three weeks later, the wrong countertop is on order. The upgrade revenue was collected — but the product wasn't delivered, and now you're eating the fix.",
              },
              {
                title: "Options presented inconsistently",
                body: "When your design process lives in your coordinator's head or a binder of sample boards, what gets offered varies by appointment. One buyer hears about the premium trim package. Another doesn't. You can't upsell what you don't consistently present — and inconsistent presentation means inconsistent revenue.",
              },
              {
                title: "Allowances that go untracked until overspent",
                body: "You give the buyer a $7,500 flooring allowance. They pick $9,200 worth of product. Does anyone catch that before the invoice lands? In most builder processes, the answer is no — and the delta becomes a quiet margin hit that nobody flags until the job is closed.",
              },
              {
                title: "Change orders after lock-in that skip the system",
                body: "A buyer calls two weeks after their design appointment and wants to swap the backsplash. Your coordinator handles it. Purchasing gets a text. The change happens, but it never goes through a formal change order — so it doesn't hit the contract addendum and you don't collect the price difference.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What a well-run design center process actually looks like
          </h2>

          <p>
            The builders who consistently capture strong options revenue share a few common
            practices. They&apos;re not complicated — but they require process discipline that
            doesn&apos;t come from paper forms and email threads.
          </p>

          <p>
            <strong className="text-white">Every option is in a catalog with a price.</strong>{" "}
            Not a binder of samples with prices that change. Not a verbal quote from the
            coordinator. A real catalog — organized by category, with base prices, upgrade prices,
            and allowance thresholds — that every buyer sees the same way.
          </p>

          <p>
            <strong className="text-white">Selections are locked digitally and flow downstream automatically.</strong>{" "}
            When a buyer confirms their choices, those selections become a record — tied to
            their lot, their contract, and their purchasing plan. No email handoff. No
            re-entry. The coordinator&apos;s approval triggers a PO in purchasing without anyone
            having to manually connect the dots.
          </p>

          <p>
            <strong className="text-white">Allowance tracking is built in, not bolted on.</strong>{" "}
            The system knows what the buyer&apos;s allowance is for each category. It flags overages
            in real time — during the appointment, not three weeks later when the invoice arrives.
            Every overage becomes a documented change order, which becomes a contract addendum,
            which becomes collected revenue.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The connection between design and construction that most builders miss
          </h2>

          <p>
            Here&apos;s where most design center software falls short: it stops at the selection.
            The buyer picks their finishes, the coordinator saves a PDF, and the platform is done.
            But your build process is just getting started.
          </p>

          <p>
            What happens to those selections when it&apos;s time to order materials? When the
            framing is done and the flooring crew is scheduled for next week — does your
            superintendent know which flooring is going in Lot 14, or are they calling the
            coordinator to find out? When the buyer changes their mind about the tile three
            months into construction, does that change update the PO automatically, or does
            someone have to track it down manually?
          </p>

          <p>
            Purpose-built builder software connects the design center to the build schedule and
            to purchasing. Selections drive material orders. Changes go through a formal change
            order process that updates the schedule, the budget, and the contract. The buyer sees
            their selections in their homeowner portal. Nobody is hunting for a PDF to answer a
            question that the system should already know.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The upgrade revenue hiding in your existing pipeline
          </h2>

          <p>
            Most builders who tighten their design center process don&apos;t just reduce errors —
            they find revenue they didn&apos;t know they were missing. When every option is
            consistently presented, average options revenue per home goes up. When allowance
            overages are caught at the appointment instead of the invoice, those dollars flow
            into the contract instead of the loss column.
          </p>

          <p>
            You don&apos;t need more buyers to increase your design center revenue. You need a
            process that captures what your current buyers are already willing to spend.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See how Cornerstone PM™ connects design selections to purchasing and the build schedule
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Join the beta — free for 2 years for early adopters.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-fuchsia-500 to-violet-500 text-white font-bold text-sm hover:from-fuchsia-400 hover:to-violet-400 transition-all duration-200"
          >
            Get Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
