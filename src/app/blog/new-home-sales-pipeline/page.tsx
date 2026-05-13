import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Home Builder Sales Pipeline Is Losing You Buyers — Cornerstone PM™ Blog",
  description:
    "Most home builders don't have a real sales pipeline — they have a spreadsheet and a gut feeling. Here's how tracking prospects the right way closes more contracts and wastes less time.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/home-builder-sales-pipeline.png", width: 1024, height: 1024, alt: "New home sales pipeline for production home builders with floorplan pricing matrix" }],
  }
};

export default function NewHomeSalesPipelinePost() {
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

        <BlogHero src="/blog/home-builder-sales-pipeline.png" alt="New home sales pipeline for production home builders with floorplan pricing matrix" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-indigo-400 bg-indigo-500/10 border-indigo-500/20 mb-4 inline-block">
            Sales Pipeline
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Your Home Builder Sales Pipeline Is Losing You Buyers
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 27, 2026</span>
            <span>·</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            Most home builders don&apos;t have a sales pipeline. They have a list of names in a
            spreadsheet, a few sticky notes on a monitor, and a mental model of who&apos;s
            &quot;serious&quot; and who&apos;s &quot;just looking.&quot; That&apos;s not a pipeline — that&apos;s
            how you lose buyers before they ever write a contract.
          </p>

          <p>
            The residential new home sales cycle is long — anywhere from 30 days to 18 months
            from first contact to close. A lot can happen in that window. Buyers get cold feet.
            Life changes. A competitor opens a community three miles away. If you&apos;re not
            actively managing where every prospect stands, you&apos;re not losing them to bad luck.
            You&apos;re losing them to neglect.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The problem with &quot;staying in touch&quot;
          </h2>

          <p>
            Ask most home builders how they follow up with prospects and you&apos;ll hear some
            version of: &quot;We reach out when we have something to tell them.&quot; That sounds
            reasonable. It isn&apos;t.
          </p>

          <p>
            Buyers who are six months out from a decision still need to feel connected to your
            brand, your community, and your process. Silence reads as disorganization — or worse,
            disinterest. Meanwhile, your competitors are calling them monthly, sending construction
            updates on their model home, and dropping community event invites into their inbox.
          </p>

          <p>
            Without a structured pipeline, follow-up happens when someone remembers to do it. The
            hot prospects get attention. The warm ones drift. And the cold ones — who might have
            become buyers if you&apos;d stayed visible — vanish entirely.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What a real new home sales pipeline looks like
          </h2>

          <p>
            A functional pipeline for home builders isn&apos;t a CRM full of fields nobody fills out.
            It&apos;s a clear, stage-based view of every prospect in your funnel — where they are,
            what the last interaction was, and what needs to happen next.
          </p>

          <p>
            For a typical home builder, the stages look something like this:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Initial inquiry",
                body: "First contact — a web form, a model home visit, a referral. The prospect has expressed interest but you know almost nothing about them. Your job here is qualification: timeline, budget range, lot preference, financing status.",
              },
              {
                title: "Qualified prospect",
                body: "You've had a real conversation. They have a realistic timeline (12 months or less), they're pre-approved or close to it, and they're genuinely interested in your product. This is where active nurture begins.",
              },
              {
                title: "Lot selected / design meeting scheduled",
                body: "They've picked a lot or a plan, or they've agreed to a design center walkthrough. This is a high-intent signal — move fast. Every day of delay at this stage risks a change of heart.",
              },
              {
                title: "Contract pending",
                body: "Negotiating price, options, and terms. The contract isn't signed yet. This is where deals die from slow responses and unclear next steps.",
              },
              {
                title: "Under contract",
                body: "Signed. Now the build process begins — and your sales job transitions to keeping them informed and excited through a 6–12 month build cycle.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-base">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The follow-up cadence that actually converts
          </h2>

          <p>
            Different pipeline stages require different follow-up rhythms. An initial inquiry
            needs a response within hours — not days. A qualified prospect six months from their
            target close date needs a touchpoint every two to three weeks, not daily calls that
            push them away.
          </p>

          <p>
            The builders who consistently convert warm prospects into signed contracts aren&apos;t
            working harder — they&apos;re working systematically. They have reminders that surface
            the right name at the right time. They know the last thing that was said to every
            prospect. They don&apos;t rely on memory to manage a 40-person funnel.
          </p>

          <p>
            A good rule of thumb: if a prospect hasn&apos;t heard from you in three weeks and
            hasn&apos;t moved backward in the pipeline, that&apos;s a gap. Automated reminders tied
            to prospect stage close that gap without requiring a sales manager to manually audit
            the list every Friday.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where the sales pipeline meets the build process
          </h2>

          <p>
            Here&apos;s where home builder sales gets complicated in a way that no generic CRM
            handles well: your pipeline doesn&apos;t end at contract signing. It transforms.
          </p>

          <p>
            Once a buyer is under contract, they become part of your production schedule. They
            have a lot, a plan, a design selection appointment, a permit timeline, and a projected
            close date. All of that information needs to flow from sales into operations — without
            being re-entered by hand, without living in a separate system, and without falling
            through the cracks during the handoff.
          </p>

          <p>
            Builders who run sales and construction in separate tools lose buyers during that
            transition. Updates don&apos;t get shared. Design changes don&apos;t make it to the
            superintendent. Buyers start calling to ask questions that nobody can answer because
            the answer is in a different system nobody on the call has open.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone PM™ connects sales to production
          </h2>

          <p>
            Cornerstone PM™&apos;s sales pipeline is built for how home builders actually sell — with
            lot assignments, plan selections, and buyer information connected directly to the
            production side of the platform. When a buyer moves from &quot;contract pending&quot; to
            &quot;under contract,&quot; their lot is already in the build schedule. Their design
            selections are already in the purchasing module. The handoff is automatic because
            there&apos;s nothing to hand off — it&apos;s all one system.
          </p>

          <p>
            The result: fewer surprises, faster response times, and buyers who feel like someone
            is actually watching out for them — from the day they walk into your model home to the
            day they get their keys.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Stop managing buyers in your head
          </h2>

          <p>
            If you&apos;re closing 10 homes a year, you can probably hold your pipeline in your head.
            If you&apos;re trying to close 20, 30, or 50 — or if you have a sales agent handling
            prospects while you&apos;re running the build — you can&apos;t. The pipeline has to live
            somewhere visible, stageable, and actionable.
          </p>

          <p>
            The builders who grow fastest aren&apos;t the ones who are best at selling. They&apos;re
            the ones who never let a warm lead go cold because nobody remembered to call.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-indigo-500/20 bg-indigo-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            See how Cornerstone PM™ manages your sales pipeline from first inquiry to close
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Join the beta — free for 2 years for early adopters.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold text-sm hover:from-indigo-400 hover:to-violet-400 transition-all duration-200"
          >
            Get Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
