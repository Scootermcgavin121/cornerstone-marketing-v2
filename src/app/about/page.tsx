import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { X, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Cornerstone PM",
  description:
    "Built by a builder who got tired of paying $499/mo for software that didn't fit. The origin story of Cornerstone PM.",
};

const competitors = [
  { name: "BuilderTrend", price: "$499/mo", issues: "Bloated, enterprise-first, expensive" },
  { name: "Procore", price: "$700+/mo", issues: "Built for commercial, not residential" },
  { name: "CoConstruct", price: "$399+/mo", issues: "Acquired, pricing opacity, slow development" },
  { name: "Spreadsheets", price: "Free*", issues: "You know exactly why this doesn't work" },
];

export default function AboutPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(6,182,212,0.08),transparent)]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-6">
            OUR STORY
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Built by a builder.
            <br />
            <span className="text-cyan-400">For builders.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto space-y-8 text-slate-300 leading-relaxed text-lg">
          <p>
            Scott Alan Homes started like most small builders do — with a clipboard, a spreadsheet,
            and a stubborn belief that there had to be a better way. And there probably was. But not
            at $499 a month.
          </p>
          <p>
            We tried BuilderTrend. We got the pitch. We paid the bill. And then we used maybe 15%
            of what we were paying for, while still having to manage subs via text message and track
            our POs in Google Sheets because the software was too complicated to get our team to
            actually use.
          </p>
          <p>
            So we built Cornerstone PM. Not for enterprise builders closing 500 homes a year. For
            builders closing 5 to 50. The ones who need real tools without real enterprise overhead.
          </p>

          <div className="my-10 p-6 rounded-2xl border border-cyan-500/20 bg-cyan-500/5">
            <p className="text-white text-xl font-semibold italic">
              &ldquo;Builders first, software makers second. We&apos;re building the tool
              we always wished existed.&rdquo;
            </p>
            <p className="text-slate-500 text-sm mt-3">— Scott Alan Homes, Founder</p>
          </div>

          <p>
            The full lifecycle — sale, budget, purchasing, design selections, permitting, construction
            scheduling, and buyer communication — all in one platform, all talking to each other.
            Starting at $149/mo. Not $499. Not because we cut corners, but because we only built
            what you actually need.
          </p>
        </div>
      </section>

      {/* Competitor table */}
      <section className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-white mb-8 text-center">
            Why we built this
          </h2>
          <div className="rounded-2xl overflow-hidden border border-slate-800">
            {/* Header */}
            <div className="grid grid-cols-3 px-6 py-3 bg-slate-800/80 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <div>Software</div>
              <div>Price</div>
              <div>Reality</div>
            </div>
            {competitors.map((c, i) => (
              <div
                key={c.name}
                className={`grid grid-cols-3 px-6 py-4 items-center ${
                  i < competitors.length - 1 ? "border-b border-slate-800/60" : ""
                } bg-slate-900/60`}
              >
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span className="text-slate-300 font-medium">{c.name}</span>
                </div>
                <div className="text-slate-500 text-sm">{c.price}</div>
                <div className="text-slate-500 text-sm">{c.issues}</div>
              </div>
            ))}
            {/* Us */}
            <div className="grid grid-cols-3 px-6 py-4 items-center bg-cyan-500/5 border-t-2 border-cyan-500/30">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-white font-bold">Cornerstone PM</span>
              </div>
              <div className="text-amber-400 font-bold">$149/mo</div>
              <div className="text-emerald-400 text-sm font-medium">Built for you</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-6">Our mission</h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Give small-to-mid home builders the same operational clarity that enterprise builders
            have — without requiring an enterprise budget or a dedicated IT team to run it.
          </p>
          <p className="text-lg text-slate-400 leading-relaxed">
            We&apos;re still builders. We still know what it feels like to triple-check a sub schedule
            at 10pm because the framing crew is showing up at 7am and you&apos;re not sure if the
            foundation is ready. We built Cornerstone PM so you never have to feel that way again.
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
