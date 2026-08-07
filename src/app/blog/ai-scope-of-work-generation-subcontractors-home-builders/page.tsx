import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/ai-scope-of-work-generation.png";
const heroImageAlt =
  "AI-generated scope of work for subcontractors — trade-specific construction SOW built from scope items and vendor pricing";

const blogSchema = buildBlogPostSchema({
  title: "Stop Writing Scopes of Work From Scratch: AI-Generated SOWs",
  slug: "ai-scope-of-work-generation-subcontractors-home-builders",
  description:
    "A vague scope of work is a change order waiting to happen. How AI writes trade-specific scopes from the scope items and vendor pricing you already have.",
  datePublished: "2026-08-07",
  mentionsProduct: {
    name: "Cornerstone PM Foreman AI",
    url: "https://www.cornerstonepm.ai/foreman",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Generate a Scope of Work with Foreman AI",
  description:
    "Use Foreman AI to draft trade-specific scopes of work from your existing scope items and awarded vendor pricing — no boilerplate, no blank pages.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the Foreman AI chat panel",
      text: "In Cornerstone PM, open the Foreman AI chat from any screen. Foreman has access to your live scope items, parts catalog, and awarded vendor pricing — it reads your actual records, not a generic template library.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Ask Foreman to generate the scope of work",
      text: "Type a prompt like 'Generate a scope of work for the framing scope in Oak Creek Community.' Foreman identifies the scope, pulls the associated scope items and parts, and uses your awarded vendor pricing as the source — so inclusions and exclusions match what was actually bid.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Review the trade-specific inclusions and exclusions",
      text: "Foreman drafts the SOW with sections for Inclusions, Exclusions, and Special Conditions. Because the scope items are already trade-filtered, a framing SOW won't reference plumbing or electrical — only what belongs to that trade.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Ask Foreman to refine or add standard clauses",
      text: "Foreman remembers your preferences across sessions. Tell it 'always include a cleanup clause for framing' once, and it applies that preference to future SOWs. Per-user memory means you're not starting from a blank page on the next community.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Attach the SOW to the PO or bid request",
      text: "Because Foreman is an agent, not a chatbot, the generated SOW lands against the right trade as a real record in the platform — not a chat transcript you have to copy out. It can attach to a purchase order or accompany a bid request to the vendor.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Stop Writing Scopes of Work From Scratch: AI-Generated SOWs — Cornerstone PM™ Blog",
  description:
    "A vague scope of work is a change order waiting to happen. How AI writes trade-specific scopes from the scope items and vendor pricing you already have.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/ai-scope-of-work-generation-subcontractors-home-builders",
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

const sowRows = [
  { section: "Inclusions", items: ["Install wall framing per approved plans", "Structural headers at all openings", "Corner bead and blocking", "Nailing per code", "Cleanup included"] },
  { section: "Exclusions", items: ["Material haul-off (by owner)", "Engineered lumber not in takeoff", "Structural steel", "Weather protection wrap"] },
];

export default function AiScopeOfWorkPage() {
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

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
            Foreman AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Stop Writing Scopes of Work From Scratch: AI-Generated SOWs
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 7, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A vague scope of work is a change order waiting to happen. When the
            contract says &ldquo;install drywall&rdquo; and nothing else, the dispute over
            corner bead, texture, and cleanup is already written into the job.{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            generates trade-specific scopes of work from the scope items and
            vendor pricing you already have — so the inclusions and exclusions
            match what was actually bid.
          </p>

          <p>
            Most SOW templates live in a shared drive nobody updates. The
            purchasing manager copies last quarter&apos;s framing scope, changes the
            community name, and hopes the clauses still match what the vendor
            quoted. When they don&apos;t — when the vendor quoted cleanup as included
            but the template says it&apos;s excluded — the argument happens on the
            job site, not in the office where it&apos;s cheap to fix.
          </p>

          <p>
            The problem is not laziness. It is that writing a tight SOW from
            scratch for every trade on every community is genuinely time-consuming
            work, and the tools to do it well haven&apos;t existed in most purchasing
            workflows. That is changing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why SOW generation is one of Foreman&apos;s 396+ skills
          </h2>

          <p>
            Foreman is not a chatbot layered on top of a database. It is an
            agent that reads and writes your actual records — scope items,
            parts, awarded vendor pricing, community assignments, task history.
            SOW generation is one skill in a catalog of 396+ across 20 categories
            that includes purchasing, scheduling, reporting, and design. The
            distinction matters because a chatbot gives you a document you then
            copy somewhere; Foreman gives you a document that lives in the right
            place in the platform.
          </p>

          <p>
            When you ask Foreman to generate a scope of work, it does not pull
            from a generic library of construction boilerplate. It drafts the
            SOW from your scope items, parts, and awarded vendor pricing for
            that scope in that community — so the inclusions and exclusions
            reflect the actual bid, not a best-guess template.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Example: AI-generated framing SOW — Oak Creek Community
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {sowRows.map((section, i) => (
                <div key={i} className="px-5 py-4">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                    {section.section}
                  </p>
                  <ul className="space-y-1.5">
                    {section.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Generated from awarded vendor pricing — inclusions match what was bid, not a copied template.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 1: Open the Foreman AI chat panel
          </h2>

          <p>
            Foreman is accessible from any screen in Cornerstone PM. It has
            live access to your scope items, parts catalog, vendor bids, and
            community assignments — the same records your purchasing team works
            from every day. There is no export step, no data sync to configure.
            Foreman reads what the platform already knows.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 2: Ask for the scope of work by trade and community
          </h2>

          <p>
            A prompt like{" "}
            <em>&ldquo;Generate a scope of work for the framing scope in Oak Creek
            Community&rdquo;</em>{" "}
            is enough. Foreman identifies the scope, pulls the associated scope
            items and parts, and uses your awarded vendor pricing as the source.
            Because the pickers in Cornerstone are scope-filtered — a framing
            scope only contains framing items — the generated SOW will not
            accidentally include plumbing or electrical clauses.
          </p>

          <p>
            This is where the{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>{" "}
            matters for SOW accuracy. Anything without accepted vendor pricing
            shows as{" "}
            <span className="text-amber-400 font-medium">
              $0 / needs pricing
            </span>{" "}
            in the budget — and that same signal flows into the SOW. Instead of
            silently fabricating a number or a clause, Foreman flags unpriced
            lines as needing attention before the document goes out. A scope of
            work built on real pricing is harder to dispute than one built on
            assumptions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 3: Review inclusions, exclusions, and special conditions
          </h2>

          <p>
            Foreman drafts the SOW with three structured sections: Inclusions,
            Exclusions, and Special Conditions. The specificity comes from the
            scope item detail in your platform. If your framing scope items
            include blocking, corner bead, and a cleanup line, the SOW will
            reflect those explicitly. A vendor who sees &ldquo;cleanup included&rdquo; in
            writing has no basis for a change order on that point. A vendor who
            does not see it will ask — which is the right time to clarify.
          </p>

          <div className="not-prose rounded-xl border border-amber-800/30 bg-amber-950/10 p-5 my-6">
            <div className="flex gap-3 items-start">
              <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-amber-300 mb-1">
                  The real cost of a vague SOW
                </p>
                <p className="text-sm text-slate-400">
                  A change order dispute on a framing scope typically runs
                  $2,000–$8,000 in labor, delays, and negotiation time — for
                  a clause that could have been resolved in the original SOW
                  with two sentences. Most change orders trace back to ambiguity
                  that existed before the job started, not surprises discovered
                  in the field.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 4: Let Foreman learn your standard clauses
          </h2>

          <p>
            Foreman runs two memory layers:{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              per-user memory and company-wide memory
            </Link>
            . Tell it once — &ldquo;always include a material haul-off clause for
            framing scopes&rdquo; or &ldquo;our standard drywall exclusion includes texture
            as a separate line item&rdquo; — and it carries that preference into every
            future SOW request. The next community does not start from scratch;
            it starts from what your company actually does.
          </p>

          <p>
            Per-user memory also captures individual preferences. A project
            manager who wants SOWs written in plain language and a purchasing
            director who wants technical precision can each get the output
            style that works for their audience, without either one having to
            re-configure it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 5: Attach the SOW to the PO or bid request
          </h2>

          <p>
            Because Foreman is an agent that writes real data, the generated
            SOW does not live only in the chat transcript. It lands against
            the right trade in the platform, where it can accompany a{" "}
            <Link
              href="/blog/vendor-bid-requests-portal-no-login"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              bid request through the vendor portal
            </Link>{" "}
            or attach to a purchase order when the task completes and the PO
            auto-generates. Vendors receive a document that matches the
            template they quoted against — not a generic attachment that may
            or may not reflect the actual bid.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this fits the broader purchasing workflow
          </h2>

          <p>
            SOW generation is one piece of a connected stack. In{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>
            , the flow runs: bid request with scope-filtered Excel templates →
            vendor submits through the no-login portal → side-by-side
            comparison → award and lock → SOW generated from the awarded
            pricing → task completes → PO auto-generates and emails the vendor.
            The SOW is not a document that lives outside the system; it is
            part of the record that follows the job.
          </p>

          <p>
            For builders managing multiple communities with multiple vendors
            per scope, that connection is what keeps the paperwork honest.
            The SOW the framing sub receives in Oak Creek is built from the
            pricing they won in Oak Creek — not a copy of what another vendor
            agreed to in a different community with different conditions.
          </p>

          <p>
            A tight scope of work does two things: it reduces change orders
            before they happen, and it creates a paper trail that is defensible
            when disputes arise anyway. With Foreman generating those documents
            from your actual scope items and awarded pricing, &ldquo;install
            drywall&rdquo; becomes a five-section document that both sides agreed
            to — and the next time someone asks who was supposed to handle
            texture, the answer is in writing.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop copying last quarter&apos;s SOW.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI generates trade-specific scopes of work from the scope
              items and awarded vendor pricing you already have — trade-filtered,
              memory-backed, and attached to the right record in the platform.
              No boilerplate, no blank page.
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
