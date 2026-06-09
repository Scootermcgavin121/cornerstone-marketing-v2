import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/enterprise-multi-division.png";
const heroImageAlt =
  "Multi-division home builder software dashboard showing cross-division analytics and corporate admin in Cornerstone PM Enterprise";

const blogSchema = buildBlogPostSchema({
  title: "Multi-Division Home Builder Software: How Cornerstone PM Enterprise Works",
  slug: "enterprise-multi-division-home-builder-software",
  description:
    "Cornerstone PM Enterprise gives every division full Pro+ — REST API, BYOA, 396+ Foreman skills — plus corporate admin and cross-division analytics from $500/division.",
  datePublished: "2026-06-09",
});

export const metadata: Metadata = {
  title:
    "Multi-Division Home Builder Software: How Cornerstone PM Enterprise Works \u2014 Cornerstone PM\u2122 Blog",
  description:
    "Cornerstone PM Enterprise gives every division full Pro+ \u2014 REST API, BYOA, 396+ Foreman skills \u2014 plus corporate admin and cross-division analytics from $500/division.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/enterprise-multi-division-home-builder-software",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "What is Cornerstone PM Enterprise?",
    a: "Cornerstone PM Enterprise is the multi-division tier designed for regional builders, corporate home builders, and multi-brand operators running two or more operating companies. Every division in the Enterprise plan gets the full Pro+ platform\u2014REST API, BYOA, all 396+ Foreman skills, 60 seats\u2014plus a shared corporate layer with a division switcher, corporate admin dashboard, cross-division analytics, and an X-Division-Id scoped API. Pricing starts at $500/division/mo.",
  },
  {
    q: "How much does Cornerstone PM Enterprise cost?",
    a: "Enterprise is priced at $500/division/mo for the first 5 divisions, then $450/division/mo for every division after that. This is a corporate discount off the standalone Pro+ rate of $599/division from division #1\u2014not a stripped-down package. Full pricing is published at cornerstonepm.ai/pricing.",
  },
  {
    q: "Does every division get the full Pro+ platform in Enterprise?",
    a: "Yes, without exception. Every Enterprise division includes the complete Pro+ feature set: REST API with 150+ endpoints, BYOA (Bring Your Own AI Agent), all 396+ Foreman skills, 60 seats, the full design center with 64 Designer Packages and exclusion groups, Blueprint AI takeoff, Bid Import AI, and all 37 named webhook events. There is no stripped-down division option.",
  },
  {
    q: "What is the corporate layer in Enterprise?",
    a: "The Enterprise corporate layer sits above individual divisions and includes a division switcher for navigating between operating companies without logging out, a corporate admin dashboard for user and permissions management across all divisions, cross-division analytics for comparing performance and financials at the portfolio level, and an X-Division-Id scoped API for querying any division via the REST API from a single authenticated session.",
  },
  {
    q: "How is the X-Division-Id API different from the standard REST API?",
    a: "The standard Pro+ REST API operates within a single division\u2014all requests are scoped to the authenticated account\u2019s division. The Enterprise X-Division-Id header lets a single API session target any division within the corporate account, making it practical to build cross-division dashboards, BI integrations, and automation workflows without managing separate API keys per division.",
  },
  {
    q: "Can an Enterprise builder use BYOA (Bring Your Own AI Agent) across divisions?",
    a: "Yes. Each Enterprise division gets its own BYOA surface\u2014the same 396+ Foreman skills exposed as API endpoints, auto-growing as new skills ship. With the X-Division-Id API, a corporate AI agent can operate across all divisions from a single integration. The denylist permissions model means new Foreman skills auto-expose to BYOA without configuration changes in any division.",
  },
  {
    q: "What is the minimum number of divisions for the Enterprise plan?",
    a: "Enterprise is designed for builders running two or more operating divisions. Single-division builders building 5\u2013200 homes per year are typically well-served by the standalone Pro+ plan at $599/mo. Enterprise pricing and the corporate layer are only practical when you need cross-division management.",
  },
];

type CompareRow = {
  feature: string;
  proPlus: boolean | "partial";
  enterprise: boolean | "partial";
};

const compareRows: CompareRow[] = [
  { feature: "Full Pro+ platform (all features)", proPlus: true, enterprise: true },
  { feature: "REST API (150+ endpoints, 84 dedicated routes)", proPlus: true, enterprise: true },
  { feature: "BYOA \u2014 Bring Your Own AI Agent", proPlus: true, enterprise: true },
  { feature: "Foreman AI (396+ skills, persistent memory)", proPlus: true, enterprise: true },
  { feature: "Blueprint AI takeoff", proPlus: true, enterprise: true },
  { feature: "64 Designer Packages + exclusion groups", proPlus: true, enterprise: true },
  { feature: "37 named webhook events", proPlus: true, enterprise: true },
  { feature: "60 seats", proPlus: true, enterprise: true },
  { feature: "Division switcher (navigate multiple operating companies)", proPlus: false, enterprise: true },
  { feature: "Corporate admin dashboard", proPlus: false, enterprise: true },
  { feature: "Cross-division analytics", proPlus: false, enterprise: true },
  { feature: "X-Division-Id scoped API", proPlus: false, enterprise: true },
  { feature: "Volume pricing ($500 \u2192 $450/division)", proPlus: false, enterprise: true },
];

function CellIcon({ value }: { value: boolean | "partial" }) {
  if (value === true)
    return <Check className="w-5 h-5 text-emerald-400 mx-auto" aria-label="Yes" />;
  if (value === false)
    return <X className="w-5 h-5 text-slate-600 mx-auto" aria-label="No" />;
  return (
    <span className="text-amber-400 text-sm font-medium mx-auto block text-center">
      Partial
    </span>
  );
}

export default function EnterpriseMultiDivisionPage() {
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

        {/* ImageObject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
              description: heroImageAlt,
              creditText: "Cornerstone PM\u2122",
            }),
          }}
        />

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1024}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Enterprise
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Multi-Division Home Builder Software: How Cornerstone PM Enterprise Works
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 9, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&trade; Enterprise gives every division the full Pro+ platform&mdash;REST API,
            BYOA, all 396+ Foreman skills, 60 seats&mdash;plus a corporate layer with a division
            switcher, corporate admin, cross-division analytics, and an X-Division-Id scoped API.
            Pricing starts at <strong className="text-white">$500/division/mo</strong> for the first
            five divisions, then $450/division/mo after that.
          </p>

          <p>
            For regional builders and multi-brand operators, the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder software category
            </Link>{" "}
            generally offers two disappointing options: standalone subscriptions with no shared
            layer across operating companies, or enterprise &ldquo;call for pricing&rdquo; tiers
            that strip out features to justify a custom contract. Cornerstone Enterprise is built
            on a different premise: every division gets the <em>same</em> Pro+ platform it would
            get as a standalone subscriber, and the corporate layer adds on top of that&mdash;it
            never takes anything away.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Who is Enterprise designed for?
          </h2>
          <p>
            Enterprise is built for builders running two or more distinct operating divisions.
            This typically looks like:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Regional home builders</strong> with separate brand
              names or operating companies per market area&mdash;each with its own community
              pipeline, vendor relationships, and team structure.
            </li>
            <li>
              <strong className="text-white">Multi-brand operators</strong> running an entry-level
              brand and a move-up brand as distinct legal entities, often with shared corporate
              overhead.
            </li>
            <li>
              <strong className="text-white">Builder groups and holding companies</strong> that
              acquired several smaller builders and want consolidated visibility without collapsing
              them into a single account.
            </li>
            <li>
              <strong className="text-white">Large production builders</strong> with geographic
              divisions that operate semi-independently but report up to a single corporate P&amp;L.
            </li>
          </ul>
          <p>
            If you&apos;re a single-division builder building 5&ndash;200 homes per year, the
            standalone{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Pro+ plan at $599/mo
            </Link>{" "}
            is your tier. Enterprise pricing and the corporate layer only add value when you need
            the cross-division management and visibility layer.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What every Enterprise division gets
          </h2>
          <p>
            Every division in an Enterprise account gets the complete Pro+ platform. There is
            no stripped-down &ldquo;enterprise division&rdquo; SKU. That means:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Full design center</strong>&mdash;64 curated Designer
              Packages, exclusion groups (pick one from many), per-floorplan option pricing reused
              across every home of that plan in every community.{" "}
              <Link
                href="/design"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Design Center &rarr;
              </Link>
            </li>
            <li>
              <strong className="text-white">Foreman AI with 396+ skills</strong>&mdash;the
              in-platform agent that reads and writes data, runs vendor analysis, generates
              profitability reports, manages purchasing workflows, and carries per-user memory
              across every session.{" "}
              <Link
                href="/foreman"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Meet Foreman &rarr;
              </Link>
            </li>
            <li>
              <strong className="text-white">Blueprint AI takeoff</strong>&mdash;parses a floor
              plan PDF and extracts 130+ material scopes with 3,284+ parts in under 60 seconds.
            </li>
            <li>
              <strong className="text-white">REST API (150+ endpoints, 84 dedicated routes)</strong>{" "}
              across three schema formats: Anthropic, OpenAI, and OpenAPI 3.1.
            </li>
            <li>
              <strong className="text-white">BYOA (Bring Your Own AI Agent)</strong>&mdash;every
              endpoint maps to one of Foreman&apos;s 396+ skills; ship a new Foreman skill and it
              auto-exposes to BYOA in every division with no configuration changes.
            </li>
            <li>
              <strong className="text-white">37 named webhook events</strong> with typed payloads,
              HMAC-SHA256 signatures, delivery logs, and auto-retry. Wire Twilio, Bland, Retell,
              or any webhook consumer to your build workflow.
            </li>
            <li>
              <strong className="text-white">60 seats</strong> per division.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The corporate layer: what Enterprise adds on top
          </h2>
          <p>
            Above the per-division Pro+ platform, Enterprise adds four corporate-layer
            capabilities:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-base font-bold text-white mb-1">Division Switcher</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Navigate between operating companies from a single login without logging out and
                back in. The switcher surfaces in the top navigation for any user with corporate
                admin access, and divisions can be arranged by region, brand, or any custom
                grouping. No more &ldquo;which account am I logged into?&rdquo;
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-base font-bold text-white mb-1">Corporate Admin Dashboard</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Manage users, roles, and permissions across all divisions from one place. Onboard
                a new superintendent to Division A without touching the Division B or C admin
                panels. Corporate-level visibility into who has access to what, across the entire
                account.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-base font-bold text-white mb-1">Cross-Division Analytics</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Compare performance, schedule health, vendor costs, and purchasing data across
                divisions in a unified dashboard. Identify which division is running the leanest
                framing budget, which community has the longest schedule slippage, or where
                vendor bid variance is highest&mdash;without exporting data into a spreadsheet
                and stitching it together.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
              <h3 className="text-base font-bold text-white mb-1">X-Division-Id Scoped API</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The standard Pro+ REST API is scoped to a single division. The Enterprise
                X-Division-Id header extends that to the full corporate account: send a single
                request and target any division by its ID. One API key, one authenticated session,
                full cross-division access. This is the building block for corporate BI tools,
                cross-division Foreman AI workflows, and BYOA agents that need to read data across
                the entire portfolio.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Enterprise pricing: transparent and volume-tiered
          </h2>
          <p>
            Most enterprise software hides its pricing behind a sales call. Cornerstone PM
            Enterprise pricing is published publicly:
          </p>
          <ul className="space-y-2 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">$500/division/mo</strong> for the first 5 divisions
            </li>
            <li>
              <strong className="text-white">$450/division/mo</strong> for every division after 5
            </li>
          </ul>
          <p>
            Standalone Pro+ is $599/division. Enterprise pricing is a real discount from division
            #1&mdash;you&apos;re not paying more for the corporate layer. For a builder running
            6 divisions, that&apos;s $2,950/mo versus $3,594/mo at standalone Pro+ rates&mdash;a
            $644/mo saving, plus the corporate layer on top.
          </p>
          <p>
            The full pricing breakdown lives on the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              pricing page
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Pro+ vs Enterprise: feature comparison
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-800 not-prose">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Feature</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">
                    Pro+ ($599/mo)
                  </th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">
                    Enterprise ($500+/div)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {compareRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/40 transition-colors">
                    <td className="px-5 py-3.5 text-slate-300">{row.feature}</td>
                    <td className="px-5 py-3.5">
                      <CellIcon value={row.proPlus} />
                    </td>
                    <td className="px-5 py-3.5">
                      <CellIcon value={row.enterprise} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why enterprise tiers usually disappoint&mdash;and why this one is different
          </h2>
          <p>
            The standard enterprise playbook in construction software is to add a
            &ldquo;corporate dashboard&rdquo; on top of a crippled base tier, then quote
            $2,000&ndash;$5,000/mo per division after a six-week sales process. Builders running
            5 divisions end up paying more per division for a worse product than a single-division
            subscriber gets.
          </p>
          <p>
            Cornerstone Enterprise flips that. The rule is: every division gets Pro+, full stop.
            The corporate layer is the only thing Enterprise adds. The logic behind this is
            straightforward: a multi-division builder&apos;s biggest problem isn&apos;t that each
            division has too many features&mdash;it&apos;s that the divisions are siloed and
            there&apos;s no shared visibility layer. The fix is to add corporate visibility, not
            remove division capability.
          </p>
          <p>
            This also means that when Cornerstone ships a new Foreman skill, it&apos;s available
            in every Enterprise division automatically&mdash;no per-division configuration, no
            feature-gating by tier within the enterprise account. The same denylist permissions
            model that makes BYOA auto-grow applies across the entire corporate account.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman AI across multiple divisions
          </h2>
          <p>
            One of the more powerful aspects of Enterprise is how{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            behaves at scale. Each division has its own Foreman context, including company-wide
            memory for that division&apos;s vendor relationships, plan standards, and purchasing
            patterns. But with the X-Division-Id API, a corporate AI agent (BYOA) can query
            across divisions&mdash;pulling comparative profitability data, normalizing vendor
            pricing across markets, or running cross-division schedule analysis.
          </p>
          <p>
            This is the practical shape of what &ldquo;AI-native construction management&rdquo;
            looks like at the corporate level: not a single chatbot, but a skill catalog of 396+
            purpose-built capabilities available to human users in every division and to external
            AI agents via the corporate API surface.
          </p>

          <p>
            For a full overview of how the platform stacks up across the production builder
            category, the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            hub covers platform comparison, pricing, and implementation in detail.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Running more than one division?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Every Cornerstone PM Enterprise division gets the full Pro+ platform&mdash;no
              stripped-down tiers, no hidden feature gates. Corporate admin, cross-division
              analytics, and volume pricing from $500/division/mo.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access &rarr;
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="Cornerstone PM Enterprise: Common Questions"
        subtitle="Answers to what multi-division home builders ask about the Enterprise plan."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
