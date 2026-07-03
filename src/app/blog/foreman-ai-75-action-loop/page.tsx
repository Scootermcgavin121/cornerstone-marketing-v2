import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Zap, Cpu, Database, Brain, Shield } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const blogSchema = buildBlogPostSchema({
  title: "How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can't)",
  slug: "foreman-ai-75-action-loop",
  description:
    "Most AI chatbots cap at 3-5 tool calls per turn because generic AI goes off the rails after a few steps. Foreman AI chains 75 actions in a single prompt. The four-part technical architecture: custom agentic loop, 24,500-word knowledge base, typed-function skills, and direct database access.",
  datePublished: "2026-05-05",
  mentionsProduct: {
    name: "Foreman AI",
    url: "https://cornerstonepm.ai/foreman",
  },
});

export const metadata: Metadata = {
  title: "How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can't) | Cornerstone PM™ Blog",
  description:
    "Most AI chatbots cap at 3-5 tool calls per turn because generic AI goes off the rails after a few steps. Foreman AI chains 75 actions in a single prompt. Here's the four-part technical architecture that makes it possible: custom agentic loop, 24,500-word knowledge base, typed-function skills, and direct database access.",
  openGraph: {
    title: "How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can't)",
    description:
      "Custom agentic loop. 24,500-word knowledge base. 396 typed-function skills. Direct database access. The four-part architecture behind Foreman AI&apos;s 75-action chain - and why ChatGPT, Claude.ai, and the rest cap at 3-5 tool calls per turn.",
    images: [
      {
        url: "https://www.cornerstonepm.ai/blog/foreman-ai-75-action-loop.png",
        width: 988,
          height: 1021,
        alt: "How Foreman AI chains 75 actions in one prompt - technical deep dive",
      },
    ],
  },
};

export default function Foreman75ActionLoopPost() {
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

        <BlogHero
          src="/blog/foreman-ai-75-action-loop.png"
          alt="How Foreman AI chains 75 actions in one prompt - technical architecture"
        width={988}
        height={1021}
      />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-cyan-400 bg-cyan-500/10 border-cyan-500/20 mb-4 inline-block">
            Technical Deep-Dive
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can&apos;t)
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 18, 2026</span>
            <span>—</span>
            <span>9 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Most AI chatbots cap at <strong className="text-white">3–5 tool calls</strong> per
            conversation turn. ChatGPT does. Claude.ai does. The shiny new agent demos you saw
            on Twitter last week? They do too. Hit the cap, the model stops, hands back a
            partial result, and asks you to continue.
          </p>

          <p>
            Foreman AI — the construction agent built into Cornerstone PM™ —
            chains <strong className="text-amber-400">75 actions</strong> per turn. One prompt
            can spin up an entire design center category: create the OptionClasses, seed every
            attribute value, attach pricing modifiers, set tier access, lock buyer
            compatibility rules, and confirm. All in a single conversation turn. All in under
            a minute.
          </p>

          <p>
            People ask us how. The short answer is <em>we control our own agentic loop</em>.
            The long answer is four pieces of architecture stacked on top of each other.
            Here&apos;s the breakdown.
          </p>

          <div className="not-prose my-10 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
                TL;DR
              </span>
            </div>
            <ol className="text-slate-300 space-y-2 list-decimal list-inside">
              <li>We wrote our own tool-execution loop in our app code. We set the iteration cap.</li>
              <li>A 24,500-word construction knowledge base keeps the model from drifting.</li>
              <li>Every skill is a typed function with input validation, not generated code.</li>
              <li>Skills hit Postgres directly — no HTTP round-trip, no rate limit.</li>
            </ol>
            <p className="text-slate-400 text-sm mt-4 mb-0">
              Result: 75 calls at ~50ms each = under 4 seconds of real execution. The model
              spends most of the turn thinking, not waiting.
            </p>
          </div>

          <h2 className="text-3xl font-black text-white mt-12">1. We control the loop</h2>

          <p>
            When you chat with ChatGPT or Claude.ai, you&apos;re talking to a generic agentic
            loop that lives on OpenAI&apos;s or Anthropic&apos;s servers. They send the model
            a prompt, get back a tool call request, execute it, feed the result back, and
            iterate. That loop has a conservative cap — usually 3 to 5 rounds —
            because OpenAI and Anthropic are protecting their own infrastructure and the
            general public from runaway agents.
          </p>

          <p>
            That cap is set by the platform, not by the model&apos;s capability. The model is
            perfectly capable of chaining more. The cap is a policy decision.
          </p>

          <p>
            We host Foreman AI&apos;s loop ourselves. It lives at
            {" "}<code className="text-amber-300 bg-slate-950/60 px-1.5 py-0.5 rounded text-sm">app/api/agent/route.ts</code>{" "}
            in the Cornerstone codebase. It calls Anthropic&apos;s Messages API to get the
            model&apos;s next step, executes the requested skill against our own database,
            feeds the result back as the next message, and loops — up to 75 rounds.
          </p>

          <div className="not-prose my-8 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold text-sm">The simplified loop</span>
            </div>
            <pre className="text-xs text-slate-300 overflow-x-auto bg-slate-950/60 p-4 rounded-lg leading-relaxed">
{`// app/api/agent/route.ts (simplified)
const MAX_ITERATIONS = 75;
let messages = [systemPrompt, ...userMessages];

for (let i = 0; i < MAX_ITERATIONS; i++) {
  const response = await anthropic.messages.create({ messages, tools });

  if (response.stop_reason === "end_turn") break;

  // Execute every tool call the model just requested
  const toolResults = await Promise.all(
    response.tool_calls.map(execSkill)
  );

  // Feed results back as the next message
  messages.push(response.message, { role: "user", content: toolResults });
}`}
            </pre>
            <p className="text-slate-500 text-xs mt-3 mb-0">
              That&apos;s it. The model decides when to stop (<code className="text-slate-400">end_turn</code>);
              we just give it more rope than the public chat apps do.
            </p>
          </div>

          <p>
            <strong className="text-white">Why ChatGPT doesn&apos;t do this:</strong> they
            can&apos;t. They serve millions of arbitrary users with arbitrary tools. A
            75-iteration cap on a public agent means runaway loops, runaway bills, and
            runaway hallucinations. Conservative limits are the right call for a general-purpose
            assistant.
          </p>

          <p>
            But we&apos;re not general-purpose. We&apos;re construction. Which gets us to the
            second piece.
          </p>

          <h2 className="text-3xl font-black text-white mt-12">2. A 24,500-word knowledge base keeps the model on track</h2>

          <p>
            Here&apos;s the dirty secret of generic agentic AI: it goes off the rails after
            a few steps. It hallucinates a skill name. It passes the wrong parameters. It
            tries to call a tool that doesn&apos;t exist. It loops infinitely calling
            something that returned an empty array.
          </p>

          <p>
            <em>That&apos;s</em> why the public agents cap at 3-5. Not because the model is
            incapable of more — because the model is incapable of more <strong className="text-white">without
            domain knowledge</strong>.
          </p>

          <p>
            Foreman ships with three memory files baked into its system prompt:
          </p>

          <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl mb-2">📖</div>
              <div className="text-emerald-400 font-bold text-sm uppercase tracking-wider mb-1">App Knowledge</div>
              <div className="text-slate-500 text-xs mb-3">158 KB &middot; 2,300+ lines</div>
              <div className="text-slate-300 text-sm leading-relaxed">
                Every feature, workflow, role, and data model in Cornerstone PM.
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl mb-2">📐</div>
              <div className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-1">Estimating Formulas</div>
              <div className="text-slate-500 text-xs mb-3">8 KB &middot; 39 formulas</div>
              <div className="text-slate-300 text-sm leading-relaxed">
                Drywall coverage, roofing squares, paint sqft, lumber takeoffs, concrete volume.
              </div>
            </div>
            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-amber-400 font-bold text-sm uppercase tracking-wider mb-1">Prompt Library</div>
              <div className="text-slate-500 text-xs mb-3">16 KB &middot; 10 categories</div>
              <div className="text-slate-300 text-sm leading-relaxed">
                Pre-built setup recipes for the design center. Copy, swap vendors, run.
              </div>
            </div>
          </div>

          <p>
            That&apos;s <strong className="text-white">24,500 words of construction expertise</strong>{" "}
            in the model&apos;s context before a single user message lands. Foreman doesn&apos;t
            have to guess what a spec level is, how design center selections cascade, or which
            skill to call to add a pricing modifier to a Quartz attribute group. It knows.
          </p>

          <p>
            More context = more reliable behavior = safe to allow more iterations. The
            knowledge base is what makes the 75-action loop tractable. Without it, 75 turns
            of generic Claude would be 75 turns of slowly drifting nonsense.
          </p>

          <h2 className="text-3xl font-black text-white mt-12">3. Every skill is a typed function, not generated code</h2>

          <p>
            There&apos;s a tempting alternative architecture floating around right now: have
            the model write code, then execute the code in a sandbox. <em>“Code is the
            universal tool.”</em> You&apos;ve seen the demos.
          </p>

          <p>
            That approach has the same problem as a generic agentic loop. The model can
            hallucinate function names. It can write subtly wrong logic. It can
            misinterpret a schema and corrupt 200 rows of your production database before
            you notice.
          </p>

          <p>
            Foreman doesn&apos;t do that. Every one of its 396 skills is a hardcoded
            TypeScript function in our codebase with input validation, typed parameters, and
            structured error handling. The model isn&apos;t generating SQL. The model is
            choosing from a menu.
          </p>

          <div className="not-prose my-8 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-bold text-sm">A real skill, simplified</span>
            </div>
            <pre className="text-xs text-slate-300 overflow-x-auto bg-slate-950/60 p-4 rounded-lg leading-relaxed">
{`// skills/design-center/createMultipleAttributeValues.ts
export async function createMultipleAttributeValues(input: {
  optionClassId: string;
  attributeGroupId: string;
  values: Array<{ name: string; description?: string; priceModifier?: number }>;
}) {
  // 1. Validate input shape (Zod schema)
  const parsed = AttrValueSchema.parse(input);

  // 2. Verify ownership against the user's org
  await assertOrgAccess(parsed.optionClassId, ctx.userOrgId);

  // 3. Hit Postgres directly via Prisma
  const created = await prisma.attributeValue.createMany({
    data: parsed.values.map(v => ({ ...v, attributeGroupId: parsed.attributeGroupId })),
  });

  return { success: true, count: created.count };
}`}
            </pre>
            <p className="text-slate-500 text-xs mt-3 mb-0">
              Typed inputs. Org-level ACL. Direct DB write. Returns a structured result
              the next loop iteration can reason about. Multiply this by 396.
            </p>
          </div>

          <p>
            When the model calls{" "}
            <code className="text-emerald-300 bg-slate-950/60 px-1.5 py-0.5 rounded text-sm">createMultipleAttributeValues</code>,
            it&apos;s not asking us to generate code — it&apos;s passing structured
            JSON to a function that&apos;s been audited, type-checked, and battle-tested in
            production. Deterministic. Safe. Repeatable.
          </p>

          <p>
            That&apos;s why we can let the loop run 75 times without losing sleep. Worst-case,
            a skill fails its input validation and returns a typed error message that the
            model reads and adjusts. There&apos;s no “the AI wrote
            <code className="text-slate-400 mx-1">DELETE FROM homes</code> and now we have
            a problem.”
          </p>

          <h2 className="text-3xl font-black text-white mt-12">4. Direct database access (no HTTP middleman)</h2>

          <p>
            Most AI agents you&apos;ve seen wired into a SaaS product look like this:
          </p>

          <ul className="my-4 ml-6 list-disc text-slate-300 space-y-2">
            <li>Model calls a tool</li>
            <li>Tool makes an HTTP request to the SaaS REST API</li>
            <li>The REST API authenticates the request</li>
            <li>The REST API talks to its own database</li>
            <li>Response comes back through the same chain</li>
          </ul>

          <p>
            Every one of those hops adds latency (50–500ms per call), introduces a rate
            limit, and burns an API key quota. Multiply by 75 iterations and you&apos;re
            looking at minutes of wall-clock time and a $10 OpenAI bill per prompt.
          </p>

          <p>
            Foreman&apos;s skills run inside the same Next.js server as the rest of
            Cornerstone PM. They import Prisma directly. They hit Postgres directly. They
            inherit the user&apos;s session and org permissions automatically.
          </p>

          <div className="not-prose my-8 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-bold text-sm">The latency math</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="text-rose-400 font-bold mb-2">Generic HTTP-tool agent</div>
                <ul className="text-slate-400 space-y-1 list-disc list-inside text-sm">
                  <li>~300ms per call (HTTP + auth + DB)</li>
                  <li>75 calls = ~22 seconds</li>
                  <li>Plus rate limits, plus API keys</li>
                </ul>
              </div>
              <div>
                <div className="text-emerald-400 font-bold mb-2">Foreman (direct Prisma)</div>
                <ul className="text-slate-300 space-y-1 list-disc list-inside text-sm">
                  <li>~50ms per call (Prisma + Postgres)</li>
                  <li>75 calls = under 4 seconds</li>
                  <li>No external rate limits, no key juggling</li>
                </ul>
              </div>
            </div>
          </div>

          <p>
            The model&apos;s thinking time is the bottleneck, not the tool execution.
            Foreman feels instant because it <em>is</em> instant on the execution side.
          </p>

          <h2 className="text-3xl font-black text-white mt-12">Why this matters for builders</h2>

          <p>
            Stack the four pieces together and you get something most construction software
            buyers haven&apos;t seen before:
          </p>

          <div className="not-prose my-8 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900/60 to-slate-900/60 border border-amber-500/30">
            <div className="flex items-center gap-2 mb-3">
              <Brain className="w-5 h-5 text-amber-400" />
              <span className="text-amber-400 font-bold uppercase tracking-widest text-xs">
                What 75 actions looks like in practice
              </span>
            </div>
            <p className="text-slate-300 text-sm mb-3 leading-relaxed">
              You type:{" "}
              <em>
                “Hey Foreman, set up Countertops with three material types: Granite,
                Quartz, and Laminate. Create separate OptionClasses for each. Add 5 options
                per class. Create attributes with real brand names. Set tier access so budget
                is Standard, premium is Upgrade III+.”
              </em>
            </p>
            <p className="text-slate-300 text-sm mb-0 leading-relaxed">
              Foreman makes <strong className="text-white">60+ skill calls</strong> in one turn:
              3 OptionClasses created, 15 options seeded, 30+ attribute values added across
              Door Style / Wood Species / Finish, pricing modifiers applied per value, tier
              access locked, compatibility rules saved, summary returned. Total wall time:
              under 90 seconds. Manual equivalent: 4 hours of clicking.
            </p>
          </div>

          <p>
            This is the difference between an AI that <em>helps you do work</em> and an AI
            that <em>does the work for you</em>. A 3-call cap means “summarize this
            home’s budget.” A 75-call cap means “rebuild my entire design
            center from scratch using the Bayshore vendor list.”
          </p>

          <p>
            That&apos;s why our marketing copy says <em>Foreman doesn&apos;t talk —
            it builds</em>. It&apos;s not a slogan. It&apos;s the architecture.
          </p>

          <h2 className="text-3xl font-black text-white mt-12">Where this goes next</h2>

          <p>
            We&apos;ll keep raising the cap. Today it&apos;s 75. The knowledge base keeps
            growing. The skill registry keeps growing — we crossed 396 skills across
            20 categories last week, with more shipping every release. As both grow, the
            ceiling moves with them.
          </p>

          <p>
            The four-part recipe doesn&apos;t change: own the loop, ground the model in
            domain knowledge, give it typed tools, talk to your database directly.
            That&apos;s what an agent looks like when it&apos;s built for a specific
            industry instead of bolted onto a generic chatbot.
          </p>

          <div className="not-prose my-12 p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/30 text-center">
            <h3 className="text-2xl font-black text-white mb-3">Want to see the 75-action loop in action?</h3>
            <p className="text-slate-300 mb-6">
              Cornerstone PM™ Beta access is free for the first 100 builders. Foreman
              AI lives on the Pro plan ($499/mo flat, up to 30 users).
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/beta"
                className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5"
              >
                Get Beta Access →
              </Link>
              <Link
                href="/foreman"
                className="px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200"
              >
                See all 396+ skills
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
