import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-knowledge-base.png";
const heroImageAlt =
  "Foreman construction AI knowledge base — 24,500-word knowledge base, 39 estimating formulas, and 396+ skills powering accurate builder answers";

const blogSchema = buildBlogPostSchema({
  title:
    "Inside Foreman's Brain: The Knowledge Base Behind Construction AI That Actually Helps",
  slug: "construction-ai-knowledge-base-estimating-formulas",
  description:
    "Foreman AI isn't a thin chatbot wrapper. A 24,500-word knowledge base, 39 estimating formulas, and 396+ skills power construction answers that are actually correct.",
  datePublished: "2026-06-22",
});

export const metadata: Metadata = {
  title:
    "Inside Foreman's Brain: The Knowledge Base Behind Construction AI That Actually Helps — Cornerstone PM™ Blog",
  description:
    "Foreman AI isn't a thin chatbot wrapper. A 24,500-word knowledge base, 39 estimating formulas, and 396+ skills power construction answers that are actually correct.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-ai-knowledge-base-estimating-formulas",
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

type FormulaRow = {
  formula: string;
  example: string;
};

const formulas: FormulaRow[] = [
  {
    formula: "Frame Labor = Total Sqft × $/sqft",
    example:
      "3,200 sqft Magnolia plan at $4.50/sqft = $14,400 frame labor — recalculated automatically for every structural option that changes the footprint.",
  },
  {
    formula: "Slab Concrete = (Foundation Sqft ÷ 144) × Slab Depth × $/cy",
    example:
      "Foreman converts the number from your blueprint into cubic yards and prices it against your concrete vendor rate — no manual unit conversion.",
  },
  {
    formula: "Interior Paint = Under Air Sqft × 2 (wall coverage factor) × $/sqft",
    example:
      "The 2× factor accounts for walls, not just floor area. Foreman knows this; a generic AI guessing from a prompt does not.",
  },
  {
    formula: "Roof Labor = Total Sqft ÷ 100 (roof squares) × $/square",
    example:
      "Roofing is always quoted in squares, not sqft. Foreman converts automatically and prices against your roofing sub's rate.",
  },
  {
    formula: "Trim Carpenter = Under Air Sqft × $/sqft",
    example:
      "Trim labor scales linearly with livable area. One formula auto-prices every floorplan and every structural option that changes it.",
  },
];

export default function ForemAiKnowledgeBasePage() {
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
          width={1024}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Inside Foreman&apos;s Brain: The Knowledge Base Behind Construction AI That
            Actually Helps
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 22, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Foreman AI gives accurate construction answers because it was built on a
            24,500-word domain knowledge base, 39 estimating formulas, and 396+ construction
            skills — not because it guesses well. That foundation is why Foreman can compute
            frame labor from square footage instead of hallucinating a number, and why it turns
            a correct answer into a real action in your data instead of a chat message you have
            to act on manually.
          </p>

          <p>
            If you have been evaluating AI tools for your construction business and keep running
            into the same problem — the AI sounds confident but gets the numbers wrong — start
            with the overview at{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>
            . This post goes deeper: it explains exactly what is inside the knowledge base, how
            the estimating formulas work in practice, and why that foundation makes the
            difference between AI that helps and AI that misleads.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does generic AI get construction wrong?
          </h2>
          <p>
            The root issue is not the language model — it is the absence of domain grounding.
            A general-purpose AI assistant knows roughly that concrete is measured in cubic
            yards and roofing in squares, but it does not know your slab depth, your vendor
            rates, your framing labor agreement, or whether the Magnolia floorplan includes a
            finished basement. When you ask it to price a structural option, it synthesizes a
            plausible-sounding answer from patterns in public text. That answer might be close
            on a good day and wrong by 30% on a bad one.
          </p>
          <p>
            More importantly, even if the generic AI gets the number right, it cannot do
            anything with it. It cannot update the Master Cost Budget, generate a purchase
            order, assign a scope to your framing vendor, or mark a design option complete. It
            lives in a chat window that is disconnected from your actual data.
          </p>
          <p>
            Foreman was designed to solve both problems at once: ground the AI in real
            construction domain knowledge, then connect it to real builder data so a correct
            answer can become an action.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is actually inside the knowledge base?
          </h2>
          <p>
            The Foreman knowledge base is structured in three layers, totaling roughly
            24,500 words of construction-specific content:
          </p>

          <div className="not-prose space-y-4 my-6">
            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  1
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    App Knowledge (~158 KB)
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    The platform reference: every feature, every workflow, every data model
                    in Cornerstone PM. When you ask Foreman how to set up exclusion groups
                    or configure community-assigned vendor wins, it reads from this layer —
                    not from a generic help search. This is why Foreman answers
                    platform questions in context rather than pointing you to a documentation
                    URL.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  2
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Estimating Formulas (~8 KB — 39 formulas)
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    A structured library of residential construction estimating formulas
                    covering framing, concrete, roofing, paint, trim, HVAC rough-in,
                    electrical rough-in, plumbing rough-in, insulation, and more. Each formula
                    maps an input (sqft, linear ft, fixture count) to a unit of measure and
                    a rate-based output. Foreman uses these formulas when computing quantities
                    and costs — not pattern-matching from web text.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                  3
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    Prompt Library (~16 KB — 10 categories)
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Structured reasoning templates across 10 construction workflow categories:
                    purchasing, scheduling, vendor management, estimating, design, sales,
                    reporting, profitability, bid analysis, and scope generation. These
                    templates shape how Foreman reasons about a task before it calls a skill
                    — so it follows the right workflow rather than improvising from scratch
                    each time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p>
            These three layers sit underneath 396+ skills across 20 categories. Every time
            Foreman calls a skill — creating a purchase order, comparing vendor bids, generating
            a budget report — the knowledge base is in scope. The formulas are not just for
            answering questions; they run inside the skill logic itself.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How the 39 estimating formulas work in practice
          </h2>
          <p>
            The cleanest way to understand the formulas is to see them in context. Here are
            five examples from the library, each showing the formula and a concrete
            application on a production build:
          </p>

          <div className="not-prose overflow-x-auto rounded-xl border border-slate-800 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium w-2/5">
                    Formula
                  </th>
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">
                    Real-world application
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                {formulas.map((f, i) => (
                  <tr key={i} className="hover:bg-slate-900/40 transition-colors align-top">
                    <td className="px-5 py-4 font-mono text-xs text-emerald-300">
                      {f.formula}
                    </td>
                    <td className="px-5 py-4 text-slate-400 text-sm leading-relaxed">
                      {f.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p>
            The key detail in every row above is that Foreman is not approximating — it is
            computing. The formula is deterministic given the inputs. When your framing labor
            rate changes from $4.25 to $4.75 per sqft, Foreman reprices every scope item that
            uses that formula. When Blueprint AI{" "}
            <Link
              href="/ai-takeoff"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              extracts 130+ material scopes from a floor plan PDF
            </Link>
            , the estimating formulas are the engine that turns raw dimensions into dollar
            figures.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            396+ skills: what they are and why it matters
          </h2>
          <p>
            A skill in Foreman AI is a discrete capability that reads or writes real platform
            data. Skills are organized into 20 categories — purchasing, scheduling, vendor
            management, design, sales pipeline, reporting, profitability, bid analysis, scope
            generation, document handling, and more. The current count is 396+, and every new
            skill ships automatically to every customer without a config change.
          </p>
          <p>
            The comparison to generic AI tools is not about quantity for its own sake. It is
            about what having a skill means versus having a conversation. When you tell ChatGPT
            to generate a purchase order, you get a formatted text block you have to copy and
            paste into your actual system. When you tell Foreman to generate a purchase order,
            it calls{" "}
            <code className="text-sm bg-slate-800 text-emerald-300 px-1.5 py-0.5 rounded">
              createPurchaseOrder
            </code>{" "}
            — the skill talks directly to your data, creates the actual record, assigns the
            vendor, attaches the scope items, and reports back what it did. The knowledge base
            grounded the reasoning; the skill executed the action.
          </p>
          <p>
            This is also why Pro+ customers who use{" "}
            <Link
              href="/blog/mcp-server-construction-software-claude-cursor"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              the built-in MCP server
            </Link>{" "}
            to connect Claude Desktop or Cursor to Cornerstone get a qualitatively different
            experience than a generic AI integration. They are not connecting a chatbot to an
            API — they are connecting an external tool to 396+ grounded, construction-domain
            skills with the full knowledge base behind each one. Ask Claude Desktop to
            “compare the framing bids on the Oakridge community” and it calls
            the Foreman skill, gets the structured comparison back, and explains it in the
            context your builder actually uses. That&apos;s the difference domain grounding
            makes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Memory makes the knowledge base personal
          </h2>
          <p>
            The knowledge base is shared across all Foreman users, but the memory layer is
            yours alone. Foreman runs two persistent memory stores:
          </p>
          <ul className="space-y-3 text-slate-300 ml-4 list-disc">
            <li>
              <strong className="text-white">Per-user memory</strong> — your name, role,
              preferred vendors, communication style preferences, and recurring patterns
              from past sessions. Foreman does not ask you to re-introduce yourself every
              conversation.
            </li>
            <li>
              <strong className="text-white">Company-wide memory</strong> — vendor
              scorecards, builder defaults, community-level pricing notes, and workflow
              patterns that accumulate across your whole team.
            </li>
          </ul>
          <p>
            Combined with the knowledge base, this means Foreman gets more useful over time.
            A superintendent who always sources plumbing from Ferguson does not have to say
            “use Ferguson” on every purchase order request — Foreman already knows.
            An estimator who quotes in finished square footage does not have to specify the
            unit every time. The knowledge base provides the construction reasoning;
            the memory layer provides the business context that makes that reasoning
            specific to your operation.
          </p>
          <p>
            For a deeper look at how persistent memory works across sessions and what the
            per-user + company-wide model looks like in practice, see{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI Memory: The First Construction AI That Doesn&apos;t Forget
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What this means for long sessions — and why Foreman doesn&apos;t crash
          </h2>
          <p>
            One side effect of having a large knowledge base and active memory is context
            pressure. Every long session accumulates a lot of content: skill outputs, memory
            references, formula results, and multi-step task history. Generic AI tools hit
            a context wall when this happens — they start forgetting earlier parts of the
            conversation, give inconsistent answers, or refuse to continue.
          </p>
          <p>
            Foreman handles this with built-in memory compaction: an intelligent summarization
            layer that auto-compresses older context when a session grows long, preserving
            the semantically important details while freeing space for active work. The
            green/yellow/red context health meter shows users where they stand. Foreman has
            been tested through 200+ option cleanups and full catalog imports in a single
            session without loss of coherence — a scenario where every generic AI tool tested
            against it failed.
          </p>
          <p>
            The knowledge base makes Foreman accurate. The skills make it capable. The memory
            makes it personal. And the compaction layer makes it reliable across the long,
            complex workflows that actually matter in construction. That combination is why{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            gives answers that are actually correct — and then does something with them.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Put 396+ construction skills to work on your builds.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI is included on the Pro+ plan — 396+ skills, 39 estimating formulas,
              24,500-word knowledge base, persistent memory, and built-in context compaction.
              No chatbot wrappers. No guessing. Real construction answers that turn into real
              actions.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access →
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
