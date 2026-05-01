import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "The 60-Second Home Status Update Your Buyers Actually Want — Cornerstone PM Blog",
  description:
    "Your buyers call twice a week asking for updates. There's a better way — and your buyers will love you for it.",
  openGraph: {
    images: [{ url: "https://www.cornerstonepm.ai/blog/home-builder-sales-pipeline.png", width: 1024, height: 1024, alt: "New home sale created in under 60 seconds in the Cornerstone PM home builder sales pipeline" }],
  }
};

export default function HomeSalePost() {
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

        <BlogHero src="/blog/home-builder-sales-pipeline.png" alt="New home sale created in under 60 seconds in the Cornerstone PM home builder sales pipeline" />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Buyer Experience
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            The 60-Second Home Status Update Your Buyers Actually Want
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>April 7, 2026</span>
            <span>·</span>
            <span>4 min read</span>
          </div>
        </div>

        <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
          <p className="text-xl font-light">
            Building a home is the biggest purchase most people will ever make. So it should surprise
            exactly nobody that buyers want to know what&apos;s happening — constantly.
          </p>

          <p>
            The average custom home buyer calls or texts their builder&apos;s team 2–3 times per week
            during construction. Each of those calls takes 15–20 minutes to handle properly. Do the
            math: for a builder closing 20 homes a year, that&apos;s potentially 400+ hours annually
            spent answering &ldquo;what&apos;s happening with our house?&rdquo;
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why buyers call so much
          </h2>

          <p>
            It&apos;s not because they&apos;re difficult. They call because they have no other way to know.
            They drove by the lot on Saturday and the framing looks the same as it did two weeks ago.
            They heard from a neighbor that there were inspectors out there. They&apos;re excited,
            nervous, and they&apos;ve committed every dollar they have to this home. Information is the
            one thing that makes them feel in control.
          </p>

          <p>
            When builders give them information proactively, buyers stop calling. It&apos;s that simple.
          </p>

          <div className="my-8 p-6 rounded-2xl bg-slate-900 border border-slate-800">
            <div className="text-slate-400 text-base italic mb-3">
              &ldquo;Our buyers used to call us twice a week asking for updates. Now they log into the
              portal and see exactly where their home is. It&apos;s cut our call volume in half and made
              us look way more professional.&rdquo;
            </div>
            <div className="text-slate-500 text-sm">— Sarah K., Sales Director, Premier Custom Builders</div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What a buyer portal actually changes
          </h2>

          <p>
            The Cornerstone PM buyer portal gives your buyers a real-time view of their home&apos;s
            progress. Construction milestones, photo documentation, selection approvals, and direct
            messaging with your team — all in one place they can access from their phone at 11pm
            when they can&apos;t sleep because they&apos;re excited about their new house.
          </p>

          <p>
            For builders, the impact is threefold:
          </p>

          <div className="space-y-4 my-6">
            {[
              {
                title: "Fewer inbound calls",
                body: "Buyers who can see their progress in real time stop calling to ask about it. Your team gets those hours back.",
              },
              {
                title: "Faster selection approvals",
                body: "When a buyer can approve a design selection from their phone in 60 seconds instead of playing phone tag for a week, your design center moves faster and your purchasing timelines tighten up.",
              },
              {
                title: "Better referrals",
                body: "Buyers who feel informed and in control have a dramatically better experience — regardless of whether the build went perfectly. That experience turns into referrals.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-base">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The competitive angle nobody talks about
          </h2>

          <p>
            Most small-to-mid builders don&apos;t offer a buyer portal. Which means if you do, you
            immediately look more professional than your competitor who&apos;s sending weekly email
            updates with attached photos. In a market where reputation is everything, that matters.
          </p>

          <p>
            Your buyers are making the biggest purchase of their lives. Give them a window into it.
            They&apos;ll thank you — and they&apos;ll tell their friends.
          </p>
        </div>

        <div className="mt-12 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
          <h3 className="text-lg font-bold text-white mb-2">Give your buyers the portal they deserve</h3>
          <p className="text-slate-400 text-sm mb-4">
            Cornerstone PM includes the buyer portal in every plan. Request beta access — free for 2 years.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-900 font-bold text-sm hover:from-amber-400 hover:to-amber-300 transition-all duration-200"
          >
            Get Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
