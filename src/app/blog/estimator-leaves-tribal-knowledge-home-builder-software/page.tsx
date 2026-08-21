import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/estimator-tribal-knowledge.png";
const heroImageAlt =
  "Construction estimating tribal knowledge — home builder budget system that survives staff turnover";

const blogSchema = buildBlogPostSchema({
  title: "What Happens to Your Budgets When Your Estimator Quits",
  slug: "estimator-leaves-tribal-knowledge-home-builder-software",
  description:
    "One person knows why the numbers are the numbers. When they leave, the spreadsheet survives and the reasoning does not. How builders de-risk that.",
  datePublished: "2026-08-21",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/home-builder-project-management-software",
  },
});

export const metadata: Metadata = {
  title:
    "What Happens to Your Budgets When Your Estimator Quits — Cornerstone PM™ Blog",
  description:
    "One person knows why the numbers are the numbers. When they leave, the spreadsheet survives and the reasoning does not. How builders de-risk that.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/estimator-leaves-tribal-knowledge-home-builder-software",
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

const riskRows = [
  {
    risk: "Hardcoded waste factors",
    spreadsheet: "In Dave's head, or maybe cell G47",
    system: "Estimating formula in shared knowledge base",
  },
  {
    risk: "Preferred vendor per trade",
    spreadsheet: "Dave calls them. The next person doesn't know their number.",
    system: "Community-awarded vendor on record, visible to the whole team",
  },
  {
    risk: "Why a cost is what it is",
    spreadsheet: "Muscle memory from 12 years of bidding",
    system: "Every dollar traces to an accepted vendor bid",
  },
  {
    risk: "Plan-specific adjustments",
    spreadsheet: "Sticky note. Or just known.",
    system: "Scope-first area costs filed by trade, reviewable by anyone",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What is construction estimating tribal knowledge?",
    a: "Tribal knowledge in construction estimating refers to pricing logic, vendor relationships, waste factors, and rule-of-thumb adjustments that live in an individual estimator's head rather than in a documented system. When that person leaves, the spreadsheet survives but the reasoning behind the numbers does not.",
  },
  {
    q: "How does Cornerstone PM help when an estimator leaves?",
    a: "Cornerstone replaces implicit knowledge with structural rules: all cost comes from accepted vendor pricing (no hardcoded numbers), scope-first area costs file each line under the trade it belongs to so organization is obvious to a new hire, estimating formulas live in a shared knowledge base, and community-level vendor awards make pricing decisions explicit and reviewable. Foreman AI also carries company-wide memory — preferred vendors, standard waste factors, and builder preferences — so that context does not walk out with a laptop.",
  },
  {
    q: "What is the hard-cost rule in Cornerstone PM?",
    a: "Nothing in Cornerstone carries a stored or default cost. All cost flows from accepted vendor pricing, and a line with no awarded bid shows as $0 / needs pricing instead of a fabricated number. That means every dollar is traceable to a specific awarded bid rather than an estimator's memory or a hardcoded cell.",
  },
  {
    q: "What is scope-first area cost budgeting?",
    a: "In Cornerstone, you pick or create a scope first, then add scope-filtered parts, scope items, or allowances under it. One bucket per scope, and the bucket title is the scope. Because pickers are scope-filtered, you can only add items that belong to that trade — so a newcomer can read the budget and understand it without asking anyone what each line means.",
  },
  {
    q: "Does Foreman AI carry company-wide memory across team members?",
    a: "Yes. Foreman AI runs two memory layers: per-user (each person's role, vendor preferences, and communication style) and company-wide (vendor scorecards, standard waste factors, builder defaults, recurring scope patterns). Company-wide memory is shared across the team, so it persists when an individual leaves.",
  },
  {
    q: "What happens to budget accuracy after a key estimator leaves?",
    a: "On a spreadsheet-driven team, accuracy degrades immediately — the next person inherits a file with no audit trail, hardcoded numbers whose logic is unknown, and no institutional pricing record. In Cornerstone, accuracy is maintained because budgets cannot be built without accepted vendor pricing, community vendor awards are on record, and the scope-first structure makes the organization legible without tribal knowledge.",
  },
  {
    q: "Can Cornerstone PM replace a good estimator?",
    a: "No — and it does not try to. A skilled estimator still sets up vendor relationships, reviews bids, makes awarding decisions, and spots scope gaps. What Cornerstone does is encode the decisions they make into a structural record so the next person starts from a system rather than a haunted spreadsheet.",
  },
];

export default function EstimatorTribalKnowledgePage() {
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
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            What Happens to Your Budgets When Your Estimator Quits
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 21, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The spreadsheet survives. The reasoning does not. The fix is not documentation nobody maintains — it is a{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              system where the reasoning is structural
            </Link>
            .
          </p>

          <p>
            Every home building operation has one. The veteran who has been pricing the Hawthorne plan since before anyone else on the team was hired. They know the framing waste factor off the top of their head, which plumber to call in Riverside versus Oakmont, and why cell G47 has a hard-coded number that nobody touches. Their notice period is two weeks. The knowledge is not in the file.
          </p>

          <p>
            When they leave, the next estimator inherits a spreadsheet that produces numbers. They do not inherit the logic behind them. They add their own guesses on top. Over time, the budget drifts away from reality in ways that are hard to trace — until a job closes and the margin is not where it should have been.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What knowledge actually walks out the door?
          </h2>

          <p>
            The problem is not the numbers themselves — those are in the file. The problem is everything the numbers depend on that was never written down.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What lives in the estimator&apos;s head vs. the system
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="grid grid-cols-3 text-xs font-medium text-slate-400 uppercase tracking-wide">
                <div className="px-5 py-3 border-r border-slate-800/60">Risk</div>
                <div className="px-5 py-3 border-r border-slate-800/60">On a spreadsheet</div>
                <div className="px-5 py-3">In Cornerstone PM</div>
              </div>
              {riskRows.map((row, i) => (
                <div key={i} className="grid grid-cols-3 text-sm">
                  <div className="px-5 py-3.5 text-white border-r border-slate-800/60 font-medium">{row.risk}</div>
                  <div className="px-5 py-3.5 text-amber-300/80 border-r border-slate-800/60">{row.spreadsheet}</div>
                  <div className="px-5 py-3.5 text-emerald-400">{row.system}</div>
                </div>
              ))}
            </div>
          </div>

          <p>
            The waste factor is not the issue. The issue is that nobody on the incoming team knows which waste factor applies to which trade and why — or whether the framing number already includes it or assumes the vendor handles it. Those assumptions compound quietly across every plan until a job closes wrong.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why documentation does not solve it
          </h2>

          <p>
            The instinct is to document. Make the departing estimator write it down. The problem is that construction estimating knowledge is not a list of facts — it is a set of judgment calls accumulated over years of bid rounds, vendor relationships, and plan revisions. You cannot put a decade of calibration into a Google Doc in two weeks. Even when you try, the document is out of date within a quarter and nobody maintains it because nobody owns it.
          </p>

          <p>
            The fix is not documentation. It is a system where the decisions are structural — where the reasoning is encoded in how the budget is built rather than written alongside it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Cornerstone encodes the reasoning
          </h2>

          <p>
            The foundation is the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard-cost rule
            </Link>
            : nothing in Cornerstone carries a stored or default cost. All cost flows from accepted vendor pricing, and a line with no awarded bid shows as <strong className="text-white">$0 / needs pricing</strong> instead of a fabricated number. That eliminates the single biggest source of invisible tribal knowledge — the hardcoded cell that a veteran knows is right but a newcomer cannot verify.
          </p>

          <p>
            When every dollar traces to an accepted bid, the next estimator does not have to guess why the framing number is what it is. They can look at the awarded bid, see who submitted it, and see when it was accepted. The reasoning is structural because the number cannot exist without its source.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6 space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold mb-1">The spreadsheet failure pattern</p>
                <p className="text-slate-300 text-sm">A new estimator inherits a file. They cannot tell whether the framing number includes waste or assumes it is in the vendor quote. They guess wrong. The job closes 4% under margin. Nobody connects it to the estimator transition.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-semibold mb-1">The structural system pattern</p>
                <p className="text-slate-300 text-sm">A new estimator opens the community in Cornerstone. Framing shows an awarded bid from BuildPro Contractors at $42,500 — accepted June 3. The bid includes the scope description. If the bid is wrong, the next round fixes it. Nothing is hidden.</p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Scope-first area costs: organization that explains itself
          </h2>

          <p>
            The second structural element is how budgets are organized. In a spreadsheet, costs accumulate in whatever order someone added them — a mix of trades, unclear scope splits, and lines that only make sense to the person who entered them. A newcomer cannot read the budget; they have to have it explained.
          </p>

          <p>
            Cornerstone budgets are scope-first. You pick or create a scope first, then add scope-filtered parts, scope items, or allowances under it. One bucket per scope, and the bucket title <em>is</em> the scope: Framing, Electrical, Plumbing, each containing only lines that belong to that trade. Because the pickers are scope-filtered, you cannot accidentally file a plumbing cost under electrical — the organization is enforced by the system, not by institutional memory.
          </p>

          <p>
            A new estimator can read a Cornerstone budget without asking anyone what each section means. The structure explains itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Community vendor awards: making pricing decisions visible
          </h2>

          <p>
            One of the most valuable things an experienced estimator carries is vendor relationship knowledge — not just who to call, but who won which community and why. In Cornerstone, vendor awards are per community and on the record. BuildPro won Riverside; a different framer won Oakmont. The awarding decision is explicit, reviewable, and carries into the next bid round.
          </p>

          <p>
            When the estimator who made those decisions leaves, the vendor assignment does not leave with them. The new person can see which vendor is active in each community, when the bid was accepted, and what the awarded pricing is. They can also see which vendors submitted competing bids — the whole bid history is visible, not just the winning number.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman AI company-wide memory
          </h2>

          <p>
            The third layer is{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI&apos;s
            </Link>{" "}
            company-wide memory. Foreman carries two memory types: per-user (your name, role, preferred vendors, communication style) and company-wide (vendor scorecards, standard patterns, builder defaults). Company-wide memory is shared across the team — it does not belong to any individual.
          </p>

          <p>
            That means the preferred plumber, the standard waste factor, and the builder&apos;s naming conventions for scope items all persist when a team member leaves. Foreman does not need the departing estimator to explain how the operation works; it already has that context stored at the company level. The new estimator can ask Foreman AI why a scope is set up a certain way and get an answer grounded in what the company actually does, not a generic construction best practice.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What stays in the system when someone leaves
              </p>
            </div>
            <div className="divide-y divide-slate-800/60 text-sm">
              {[
                { item: "Every awarded vendor bid per community", note: "Visible, traceable, re-biddable" },
                { item: "Scope-first area cost structure", note: "Files every cost under the right trade automatically" },
                { item: "Foreman AI company-wide memory", note: "Preferred vendors, standard patterns, builder defaults" },
                { item: "Estimating formulas in shared knowledge base", note: "Auto-quantities off floorplan square footage" },
                { item: "Full bid history per scope", note: "Who submitted, who won, when it was awarded" },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 px-5 py-3.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-medium">{row.item}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{row.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            An honest caveat
          </h2>

          <p>
            No software replaces a good estimator. The vendor relationships, the scope intuition, the ability to spot a bid that looks right but is missing something — that is still a human job. What a structural system does is make sure the next person starts from the record of what the previous person decided rather than an undocumented spreadsheet they have to reverse-engineer under pressure.
          </p>

          <p>
            The departing estimator built something valuable. A good system captures it. A spreadsheet loses it.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Build a budget system that outlasts any one person.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM ties every dollar to an accepted vendor bid, files every cost under its trade, and stores vendor knowledge at the company level — so your pricing logic stays in the platform, not in someone&apos;s head.
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

      <FAQSection
        title="Construction Estimating Tribal Knowledge: Common Questions"
        subtitle="What home builders ask about protecting budgets and pricing knowledge from staff turnover."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
