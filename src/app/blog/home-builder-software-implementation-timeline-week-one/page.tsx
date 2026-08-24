import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/implementation-timeline-week-one.png";
const heroImageAlt =
  "Home builder software implementation timeline — week one setup checklist for communities, floorplans, vendors, and bids";

const blogSchema = buildBlogPostSchema({
  title: "What Week One on New Home Builder Software Actually Looks Like",
  slug: "home-builder-software-implementation-timeline-week-one",
  description:
    "A realistic implementation timeline for home builder software: what you set up day one, what waits, and what you should refuse to pay for.",
  datePublished: "2026-08-24",
  mentionsProduct: {
    name: "Cornerstone PM Home Builder Software",
    url: "https://www.cornerstonepm.ai/home-builder-project-management-software",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Implement Home Builder Software in Week One",
  description:
    "A step-by-step implementation sequence for production home builder software: AI data import, community setup, vendor onboarding, bid requests, and QuickBooks connection — all in the first week.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Export your data from the current platform",
      text: "Pull a CSV or Excel export from your current tool — Buildertrend, JobTread, CoConstruct, or Procore all support this. You need vendor contacts, community structure, floorplan names, and any existing cost codes. You do not need to clean the file first; the AI import wizard maps columns automatically.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Run the AI migration import",
      text: "Upload the export to Cornerstone's CRM Migration Wizard. The AI detects the source platform, maps columns to Cornerstone fields, and surfaces anything it can't confidently match for a quick manual review. Most imports complete in minutes at roughly a penny per run, not the weeks and five-figure fees legacy platforms charge.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Create communities, floorplans, cost codes, and schedule templates",
      text: "Add each community and assign its floorplans. Set up your cost codes (or let the QuickBooks connection build them later). Define a schedule template for each floorplan — task sequence, durations, predecessor links, and trade assignments — so every future home start generates a complete schedule in one step.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Send bid requests and collect vendor pricing",
      text: "Go to Purchasing → Bid Requests → New Request. Select floorplans, vendors, scopes, and deadline. Cornerstone auto-generates scope-filtered Excel templates and emails them to vendors. Vendors submit through a no-login portal; you review bids side-by-side and award per community. Budget lines that lack an accepted bid show as $0 / needs pricing — that is by design.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Connect QuickBooks Online",
      text: "Link your QBO account from Settings. Cornerstone builds a construction-ready chart of accounts and cost-code items on connect, reusing existing accounts by name so it never restructures books you already trust. From this point, approved POs, bills, change orders, and vendors post themselves to QuickBooks automatically.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Stand up the design center",
      text: "Add option classes tied to their scopes. Bulk-create options from your parts catalog or existing scope items. Set spec levels per community to define what is included versus a paid upgrade. Assign designer packages if you use curated selection bundles. Your design coordinator can run the first buyer appointment by end of week one.",
    },
  ],
};

const weekOneTimeline = [
  {
    day: "Day 1",
    label: "AI Migration Import",
    detail: "Upload your Buildertrend, JobTread, or CSV export. AI maps columns, surfaces gaps, and imports in minutes.",
    done: true,
  },
  {
    day: "Day 2",
    label: "Communities & Floorplans",
    detail: "Create each community, assign floorplans, add cost codes. The skeleton the rest of the platform hangs from.",
    done: false,
  },
  {
    day: "Day 3",
    label: "Vendors & Schedule Templates",
    detail: "Add vendor records by trade. Build one schedule template per floorplan — task sequence, durations, trade assignments.",
    done: false,
  },
  {
    day: "Day 4",
    label: "Bid Requests Out",
    detail: "Send scope-filtered bid requests to vendors. They submit through a no-login portal; your job is to wait.",
    done: false,
  },
  {
    day: "Day 5",
    label: "QuickBooks & Design Center",
    detail: "Connect QBO (it builds the CoA for you), then set up option classes, spec levels, and designer packages.",
    done: false,
  },
];

const implementationMythVsReality = [
  {
    myth: "6-12 months with a dedicated implementation consultant",
    reality: "Most builders are running live homes in week two",
  },
  {
    myth: "$25k–$100k implementation fee",
    reality: "~$0.01 per AI migration run, no white-glove package required",
  },
  {
    myth: "Data migration takes weeks of manual cleanup",
    reality: "AI column mapping from your existing CSV or Excel export",
  },
  {
    myth: "Budgets are ready from day one",
    reality: "$0 / needs pricing until bids land — which is the correct answer",
  },
  {
    myth: "You're locked in once you start",
    reality: "Full CSV or JSON database export at any time, no friction",
  },
];

export const metadata: Metadata = {
  title:
    "What Week One on New Home Builder Software Actually Looks Like — Cornerstone PM™ Blog",
  description:
    "A realistic implementation timeline for home builder software: what you set up day one, what waits, and what you should refuse to pay for.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/home-builder-software-implementation-timeline-week-one",
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

export default function ImplementationTimelineWeekOnePage() {
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
            Getting Started
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            What Week One on New Home Builder Software Actually Looks Like
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 24, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Most builders are live on new software — running real homes, sending real POs — in
            week two. The fear of a six-month implementation is the single biggest reason builders
            stay on tools they already dislike. Here is what a realistic{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder software implementation
            </Link>{" "}
            actually looks like, day by day, and what you should refuse to pay for.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does implementation have a bad reputation?
          </h2>

          <p>
            Legacy platforms — NEWSTAR, MarkSystems, BuilderMT — were designed for the
            IT departments of top-100 enterprise builders. Implementation meant months
            of data conversion, dedicated consultants, custom reporting setup, and a
            go-live party with a five-figure invoice. That framing stuck, and builders
            who shopped those platforms in the early 2010s still carry the assumption
            that switching software is a capital project.
          </p>

          <p>
            It is not — if the platform was designed for it. The difference is whether
            the software treats migration as an edge case or a primary path. Platforms
            built on modern infrastructure have AI that reads your existing exports,
            maps the columns, and asks you to confirm the gaps rather than making you
            clean a spreadsheet for six weeks first.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Implementation myth vs. reality
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-2 text-xs font-semibold text-slate-500 uppercase tracking-wide px-5 py-2.5 bg-slate-900/40">
                <span>What builders expect</span>
                <span className="text-emerald-500">What actually happens</span>
              </div>
              {implementationMythVsReality.map((row, i) => (
                <div key={i} className="grid grid-cols-2 border-t border-slate-800/60 text-sm">
                  <div className="px-5 py-3.5 text-slate-400 border-r border-slate-800/60">
                    {row.myth}
                  </div>
                  <div className="px-5 py-3.5 text-emerald-300 flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    {row.reality}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Day one: import what you already have
          </h2>

          <p>
            The first step is not setup — it is import. Export a CSV or Excel file from
            your current tool. Buildertrend, JobTread, CoConstruct, and Procore all
            support this. You do not need a clean file; the AI migration wizard detects
            the source platform, maps columns to Cornerstone fields, and flags anything
            it cannot confidently match for a quick manual review. Most imports complete
            in minutes.
          </p>

          <p>
            The cost comparison is stark. Legacy platforms charge white-glove migration
            fees that can run $25,000 to $100,000 or more. AI-powered column mapping
            costs roughly a penny per run. You can re-import as many times as you need
            to get it right.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Early week: structure — communities, floorplans, vendors, cost codes
          </h2>

          <p>
            With the import done, days two and three are about skeleton setup: the
            structure everything downstream hangs from. Create each community. Assign
            the floorplans that sell in it. Add vendors by trade — this is also where
            you set the AP payment terms each vendor uses, so when bids come back the
            due-date schedule is already in place.
          </p>

          <p>
            Schedule templates are the other early-week priority. Define the task
            sequence, durations, predecessor relationships, and trade assignments for
            each floorplan once. Every future home started on that plan inherits the
            full schedule in one step — you will not rebuild a 120-task{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              construction schedule
            </Link>{" "}
            from scratch for every start.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Week one — day by day
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {weekOneTimeline.map((item, i) => (
                <div key={i} className="px-5 py-4 flex items-start gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${item.done ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-slate-800 border border-slate-700"}`}>
                    {item.done
                      ? <CheckCircle className="w-4 h-4 text-emerald-400" />
                      : <span className="text-xs text-slate-500 font-bold">{i + 1}</span>
                    }
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-slate-500 font-medium">{item.day}</span>
                      <span className="text-sm font-semibold text-white">{item.label}</span>
                    </div>
                    <p className="text-sm text-slate-400">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Mid-week: bid requests and the thing budgets say until they&apos;re priced
          </h2>

          <p>
            Day four is when bid requests go out. In{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Purchasing → Bid Requests
            </Link>
            , select the floorplans, vendors, scopes, deadline, and optional message —
            Cornerstone generates scope-filtered Excel templates with Base, Structural,
            and Designer tabs and emails them to the right vendors automatically. Each
            vendor gets only the scopes that belong to their trade.
          </p>

          <p>
            While bids are in flight, every budget line that lacks an accepted price
            shows as <span className="text-amber-400 font-medium">$0 / needs pricing</span>.
            This is the correct behavior, not a gap. The platform&apos;s hard-cost rule
            means no line inherits a stored default or estimator fudge number — every
            dollar traces back to a real awarded bid, and a line without one says so
            honestly. Accept that budgets start empty and fill as bids land.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  Budgets that start at zero are more honest than budgets that start with guesses
                </p>
                <p className="text-sm text-slate-400">
                  The industry default is to ship a cost library full of regional averages nobody
                  updates. Those averages quietly drift away from reality and builders forget the
                  numbers are made up. A $0 / needs pricing line is more accurate than a $4.15 per
                  square foot someone entered in 2021.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Later in the week: QuickBooks and the design center
          </h2>

          <p>
            The QuickBooks Online connection takes minutes to set up and delivers
            immediately. Link your QBO account from Settings and Cornerstone builds a
            construction-ready chart of accounts plus cost-code items on connect —
            reusing existing accounts by name so it never restructures books you
            already trust. From that point, every approved PO, bill, change order, and
            vendor posts itself to QuickBooks automatically, one direction, with
            community, lot, address, PO number, and cost code in the memo.
          </p>

          <p>
            The design center is last because it depends on the vendor pricing you are
            still collecting. Add option classes tied to their scopes. Bulk-create
            options from your parts catalog or scope items instead of entering hundreds
            by hand. Set spec levels per community so included options differ from
            paid upgrades correctly, and assign designer packages if you use curated
            selection bundles.{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            can drive catalog work by chat for builders who prefer describing what they
            need over clicking through screens.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What should wait until week two?
          </h2>

          <p>
            Not everything needs to be live before the first home runs. The advanced
            design center configuration — exclusion groups, community-specific upgrade
            pricing, retail pricing mode — can be tuned after the first buyer
            appointment. Webhook automations and the REST API can come after the
            purchasing loop is running. The AI purchasing agent (Foreman) learns your
            preferences over the first few weeks naturally as it sees how you award bids
            and write POs.
          </p>

          <p>
            The goal of week one is a system that can run a home — not a system that
            has every feature configured. Start a real home on the platform in week two,
            even if a few non-critical screens are still empty.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-6">
            <div className="flex gap-3 items-start">
              <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-sky-300 mb-1">
                  The sign-off question to ask before you start
                </p>
                <p className="text-sm text-slate-400">
                  Ask any platform you evaluate: &quot;Can I export my full database as CSV or JSON
                  at any time, with no notice and no fee?&quot; If the answer is anything other than
                  yes, the switching cost is baked in by design. A system that is easy to leave is
                  easier to join.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Exit rights before day one
          </h2>

          <p>
            Implementation effort is only worthwhile when you are not locked in.
            Cornerstone&apos;s database backup and export feature gives any Admin a
            one-click full-database export in CSV or JSON at any time — with nightly
            auto-backups retained for seven days and on-demand manual exports available
            whenever you want them. There is no exit fee, no escalation to a sales
            rep, no &quot;please allow 30 days for your data export.&quot;
          </p>

          <p>
            That exit right is the same reason week-one implementation is low-risk.
            You are not betting the business on a platform that charges you to leave.
            You are joining one where the data is yours, the migration is cheap, and
            running a home on it proves the value faster than any demo.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to see week one in action?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM is purpose-built for production home builders — AI migration,
              schedule templates, vendor bidding, and QuickBooks sync in one platform.
              See how it runs from day one.
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
