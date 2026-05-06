import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing | Cornerstone PM — Home Builder Software from $149/mo",
  description:
    "Simple per-month pricing for home builder software. Starter $149, Builder $299, Pro $499, Pro+ $599. Unlimited users on every plan. No per-seat fees. No implementation cost.",
  alternates: { canonical: "https://www.cornerstonepm.ai/pricing" },
  openGraph: {
    title: "Pricing | Cornerstone PM",
    description:
      "Home builder software pricing from $149/mo. Unlimited users on every plan. No per-seat fees.",
    url: "https://www.cornerstonepm.ai/pricing",
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    q: "How much does Cornerstone PM cost?",
    a: "Cornerstone PM starts at $149/mo for the Starter plan with unlimited users. Builder is $299/mo (adds purchasing, sales, and design center). Pro is $499/mo (adds Foreman AI with 47 skills and Blueprint AI). Pro+ is $599/mo (adds the full REST API, automated bidding pipeline, and enterprise AI). Beta access is free for the first 100 builders for two years.",
  },
  {
    q: "Are there per-seat fees?",
    a: "No. Every plan includes unlimited users, unlimited subcontractors, and unlimited buyers at no additional charge. Add your whole team without worrying about cost-per-seat.",
  },
  {
    q: "What is the implementation cost?",
    a: "Cornerstone PM has zero implementation cost. There are no setup fees, no required consultants, and no separate onboarding contract. You can be running your first community in under a week. NEWSTAR and BuildPro typically require $25,000 to $100,000+ in implementation budget.",
  },
  {
    q: "What is included in the free beta?",
    a: "Beta access is free for two years for the first 100 home builders who sign up. Beta includes every feature on the Pro plan: scheduling, sales pipeline, purchasing, design center with options engine, Foreman AI (47 skills), Blueprint AI takeoffs, and the homeowner portal. After the two-year beta, plans start at $149/mo.",
  },
  {
    q: "Which plan includes the AI agents?",
    a: "Cornerstone PM has 5 native AI agents. Foreman AI (47 skills) and Blueprint AI (25 takeoffs/mo) are on the Pro plan ($499/mo). The AI MLS Listing Generator and AI Support Agent are on Builder plan and above. The full Bid Import AI plus extended message limits are on Pro+ ($599/mo).",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Every plan includes full database export in CSV or JSON format from Settings. Nightly automatic backups are retained for 7 days, and you can trigger manual backups any time. There is no vendor lock-in and no data hostage situation.",
  },
  {
    q: "Do you offer annual billing or discounts?",
    a: "Annual billing is available for Builder, Pro, and Pro+ plans with a discount versus paying monthly. Contact us for annual quotes and for production builders with more than 1,000 active homes.",
  },
  {
    q: "How does Cornerstone PM compare to Buildertrend or JobTread on price?",
    a: "Buildertrend pricing typically lands at $399 to $499+ per month with per-user fees layered on top. JobTread starts around $179/mo with similar per-user limits. Cornerstone PM Starter is $149/mo with unlimited users, and Pro is $499/mo flat with native AI agents that Buildertrend and JobTread do not include at any tier.",
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-12 px-4 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-xs uppercase tracking-widest text-emerald-300 mb-6">
            <span>Pricing</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Simple per-month pricing.</span>{" "}
            <span className="italic font-serif text-emerald-300/90">No per-seat fees.</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Home builder software from $149/mo with unlimited users, unlimited subcontractors, and zero implementation cost. Pick the plan that matches where your business is today &mdash; upgrade when you need more.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">Unlimited users</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">No per-seat fees</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">$0 implementation</span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">Free for first 100 beta builders</span>
          </div>
        </div>
      </section>

      {/* Pricing tiers (reuses the homepage component) */}
      <PricingSection />

      {/* What you get on every plan */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">What every plan includes</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Production-builder fundamentals on every tier &mdash; no &ldquo;upgrade to unlock the basics&rdquo; pricing tricks.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Unlimited users", desc: "Add your whole team, every subcontractor, and every buyer at no extra cost." },
              { title: "Unlimited communities", desc: "Run as many active communities as you need on Starter and above." },
              { title: "Construction scheduling", desc: "Gantt + task view, 3-tier dependency cascade, 17 pre-built templates." },
              { title: "Permitting pipeline", desc: "Track every permit and inspection across every active home." },
              { title: "Homeowner portal", desc: "Magic-link buyer portal with progress photos and design center." },
              { title: "Database export", desc: "Full CSV or JSON export, anytime, plus 7-day rolling auto-backups." },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">Comparing Cornerstone to another platform?</h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We have feature-by-feature breakdowns versus the major home builder platforms. See the deltas in scheduling, AI agents, design center, REST API, and pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              ["Buildertrend", "/buildertrend-alternative"],
              ["NEWSTAR", "/newstar-alternative"],
              ["BuildPro", "/buildpro-alternative"],
              ["JobTread", "/blog/jobtread-alternative"],
              ["Full comparison", "/compare"],
            ].map(([name, href]) => (
              <Link
                key={href}
                href={href}
                className="px-5 py-3 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-white/90 hover:text-white transition text-sm font-semibold"
              >
                vs {name} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Pricing FAQ"
        subtitle="Straight answers about cost, plans, and what's actually included."
        items={faqs}
        accentTextClass="text-emerald-300"
      />

      <Footer />
    </main>
  );
}
