import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pricing | Cornerstone PM\u2122 \u2014 Home Builder Software from $149/mo",
  description:
    "4-tier pricing for home builder software. Starter $149/mo, Builder $299/mo, Pro $499/mo, Pro+ $599/mo. Up to 60 users. No per-seat fees on base plans. No implementation cost. Annual billing saves 2 months.",
  alternates: { canonical: "https://www.cornerstonepm.ai/pricing" },
  openGraph: {
    title: "Pricing | Cornerstone PM\u2122",
    description:
      "Home builder software pricing from $149/mo. 4 tiers, annual discounts, and a full AI suite on Pro. No implementation fees.",
    url: "https://www.cornerstonepm.ai/pricing",
    type: "website",
  },
};

const faqs: FAQItem[] = [
  {
    q: "How much does Cornerstone PM\u2122 cost?",
    a: "Cornerstone PM\u2122 starts at $149/mo for the Starter plan (scheduling, permitting, homeowner portal). Builder is $299/mo and adds the full purchasing module with sales pipeline and design center. Pro is $499/mo and unlocks the entire AI suite \u2014 Foreman AI\u2122, Blueprint AI, and Bid Import AI. Pro+ is $599/mo with REST API + Webhooks included and 60 user seats. Annual billing saves 2 months.",
  },
  {
    q: "How many users can I have?",
    a: "Starter, Builder, and Pro plans support up to 30 users. Pro+ supports up to 60 users. Need more? The Power User Seat add-on (+$149/seat/mo) is available on Pro and Pro+ for team members who need elevated AI limits. Subcontractors and buyers are always unlimited on every plan.",
  },
  {
    q: "What are Power User Seats?",
    a: "Power User Seats are an add-on for Pro and Pro+ plans at $149/seat/month. A Power User gets dramatically elevated monthly AI limits: 3,000 Foreman AI conversations/mo, unlimited Blueprint AI and Bid Import AI, and unlimited Punchlist and MLS Listing AI. Perfect for the person who lives in the app all day.",
  },
  {
    q: "What are the AI monthly limits?",
    a: "Every AI feature has transparent monthly limits that vary by plan. For example, Pro gets 600 Foreman AI conversations/mo while Pro+ gets 900. Starter and Builder include Punchlist AI and MLS Listing AI at lower limits. See our full Usage Rates page for the complete breakdown, including role-based access tiers and onboarding boost details.",
  },
  {
    q: "What is the onboarding boost?",
    a: "New Pro accounts get 3\u00d7 AI limits for 30 days. New Pro+ accounts get 3\u00d7 AI limits for 60 days. This gives your team room to import data, train users, and build workflows without hitting caps during the critical onboarding window.",
  },
  {
    q: "What is the implementation cost?",
    a: "Cornerstone PM\u2122 has zero implementation cost. There are no setup fees, no required consultants, and no separate onboarding contract. You can be running your first community in under a week. NEWSTAR and BuildPro typically require $25,000 to $100,000+ in implementation budget.",
  },
  {
    q: "What is included in the free beta?",
    a: "Beta access is free for two years for the first 100 home builders who sign up. Beta includes every feature on the Pro plan: scheduling, sales pipeline, purchasing, design center, Foreman AI\u2122 (100+ skills), Blueprint AI, and the homeowner portal. After the two-year beta, plans start at $149/mo.",
  },
  {
    q: "Can I add REST API access?",
    a: "Yes. On the Pro plan, REST API + Webhooks is available as a $200/mo add-on. On Pro+, REST API + Webhooks is included at no extra cost. The API gives you 40+ endpoints, scoped API keys, and 37+ HMAC-signed webhook events for building custom integrations.",
  },
  {
    q: "Can I export my data?",
    a: "Yes. Every plan includes one-click full database export in CSV or JSON format. Every vendor, every home, every schedule, every option, every budget line. Nightly automatic backups are retained for 7 days. No vendor lock-in, no exit fees, no support ticket required.",
  },
  {
    q: "Do you offer annual billing?",
    a: "Yes. Annual billing gives you 2 months free (pay for 10 months, get 12). Available on all plans. Contact us for annual quotes and for production builders with more than 1,000 active homes.",
  },
  {
    q: "How does Cornerstone PM\u2122 compare to Buildertrend or JobTread on price?",
    a: "Buildertrend pricing typically lands at $399 to $499+ per month with per-user fees on top. JobTread is $199/mo base + $20/mo per team member (tiered breaks above 10 users). Cornerstone PM\u2122 Starter is $149/mo, and Pro is $499/mo flat with native AI agents that Buildertrend and JobTread do not include at any tier.",
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
            maskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-xs uppercase tracking-widest text-emerald-300 mb-6">
            <span>Pricing</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-none mb-6">
            <span className="text-white">Simple, transparent pricing.</span>{" "}
            <span className="italic font-serif text-emerald-300/90">
              Built for builders.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Home builder software from $149/mo. Four plans that scale with your
            business &mdash; from scheduling-focused Starter to the full AI
            platform on Pro+. Zero implementation cost. Annual billing saves 2
            months.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">
              Up to 60 users
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">
              $0 implementation
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">
              Annual: 2 months free
            </span>
            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80">
              Free beta for first 100 builders
            </span>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <PricingSection />

      {/* What you get on every plan */}
      <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            What every plan includes
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Home-builder fundamentals on every tier &mdash; no &ldquo;upgrade to
            unlock the basics&rdquo; pricing tricks.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "Scheduling & Gantt charts",
                desc: "Full construction scheduling with task dependencies, 3-tier cascade, and 17 pre-built templates.",
              },
              {
                title: "Smart vendor notifications",
                desc: "Automated cascade notifications keep subs on schedule without manual follow-up.",
              },
              {
                title: "Customer portal",
                desc: "Magic-link buyer portal with progress photos and design center access.",
              },
              {
                title: "Document management",
                desc: "Centralized file storage for contracts, plans, permits, and change orders.",
              },
              {
                title: "Permitting pipeline",
                desc: "Track every permit and inspection across every active home.",
              },
              {
                title: "Take your data with you",
                desc: "One-click full CSV or JSON export. Every record. Plus 7-day rolling nightly auto-backups. No vendor lock-in.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Comparing Cornerstone to another platform?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
            We have feature-by-feature breakdowns versus the major home builder
            platforms. See the deltas in scheduling, AI agents, design center,
            REST API, and pricing.
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
        subtitle="Straight answers about cost, plans, AI limits, and what\u2019s actually included."
        items={faqs}
        accentTextClass="text-emerald-300"
      />

      <Footer />
    </main>
  );
}
