import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, MessageSquare, DollarSign, Layers } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-ai-area-costs-by-chat.png";
const heroImageAlt =
  "AI construction budget builder — Foreman AI creates scope-first area costs by chat in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "Ask Foreman AI to Build Your Budget: Area Costs by Chat",
  slug: "foreman-ai-build-area-costs-by-chat-construction",
  description:
    "Foreman AI creates area costs and adds scope-filtered parts and scope items by chat — following the same scope-first, vendor-priced flow you'd use by hand.",
  datePublished: "2026-07-11",
  mentionsProduct: { name: "Cornerstone PM", url: "https://www.cornerstonepm.ai" },
});

export const metadata: Metadata = {
  title:
    "Ask Foreman AI to Build Your Budget: Area Costs by Chat — Cornerstone PM™ Blog",
  description:
    "Foreman AI creates area costs and adds scope-filtered parts and scope items by chat — following the same scope-first, vendor-priced flow you'd use by hand.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-build-area-costs-by-chat-construction",
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

const steps = [
  {
    icon: <MessageSquare className="w-5 h-5 text-emerald-400" />,
    title: "Tell Foreman what scope to build",
    desc: "Type a plain-English instruction — 'Set up a Plumbing area cost and add scope items' — and Foreman creates the scope bucket and populates it with the right scope-filtered lines.",
  },
  {
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    title: "Scope-filtered items only",
    desc: "Foreman adds Parts and Scope Items that belong to that trade — not the entire catalog. No Framing items drifting into Electrical, no miskeyed costs in the wrong bucket.",
  },
  {
    icon: <DollarSign className="w-5 h-5 text-amber-400" />,
    title: "Hard-cost rule holds, always",
    desc: "Lines without accepted vendor pricing show $0 / needs pricing — whether a human entered them or Foreman did. The AI never invents a default cost.",
  },
];

export default function ForemanAreaCostsByChatPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Ask Foreman AI to Build Your Budget: Area Costs by Chat
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 11, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            can build area costs for you by chat — creating scope buckets and adding
            scope-filtered Parts and Scope Items following the exact same flow a purchaser
            would use manually. You ask; Foreman builds. The hard-cost rule holds the entire time.
          </p>

          <p>
            Setting up area costs is the kind of work that isn&apos;t hard — it&apos;s just tedious.
            Open the scope. Add the bucket. Switch to the picker. Filter to the right trade.
            Add each line. Repeat for every scope in the budget. By the time you&apos;re done,
            you&apos;ve clicked through the same workflow fifteen times and you still have to wait
            for vendor bids before any of it shows a real number.
          </p>

          <p>
            Foreman collapses that setup time to a single instruction. Tell it what scope to build,
            and it creates the area cost, adds the relevant Parts and Scope Items, and leaves
            everything showing{" "}
            <strong className="text-white">$0 / needs pricing</strong> — honest
            placeholders waiting for real vendor bids, not fabricated defaults. The budget is
            structured before the bids arrive, which means you can send bid requests the moment
            the framework is in place.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does area costs by chat actually look like?
          </h2>

          <p>
            Foreman reads and writes your actual data inside Cornerstone. When you ask it to
            set up a scope, it&apos;s not describing what you should do — it&apos;s doing it. A typical
            instruction might be:
          </p>

          <blockquote className="border-l-4 border-emerald-500/40 pl-5 italic text-slate-400 my-6">
            &ldquo;Create a Framing area cost for the Magnolia plan and add framing scope items.&rdquo;
          </blockquote>

          <p>
            Foreman creates the Framing bucket, uses scope-filtered pickers to add the relevant
            scope items (wall framing, ceiling joists, subfloor sheathing, and so on), and every
            line comes in at $0 / needs pricing. The scope-filtering matters: Foreman adds items
            that belong to the Framing trade, not everything in the catalog. There&apos;s no risk of
            a plumbing fixture landing in the wrong bucket.
          </p>

          <p>
            You can do this across multiple scopes in one session. Ask Foreman to set up Framing,
            then Plumbing, then Electrical — it works through each one, applying the same
            scope-first logic each time. The area cost structure for an entire floorplan can be
            in place before you&apos;ve opened a single bid request.
          </p>

          <div className="not-prose space-y-4 my-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{step.title}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does it matter that Foreman respects the hard-cost rule?
          </h2>

          <p>
            Most AI tools, asked to &ldquo;build a framing budget,&rdquo; would fill in numbers. They&apos;d
            pull from training data, regional averages, or published cost guides and give you
            a table that looks complete. The problem is that those numbers don&apos;t trace to your
            vendors, your community, your scope, or the market conditions your subcontractors
            are actually pricing right now.
          </p>

          <p>
            Cornerstone&apos;s{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard-cost rule
            </Link>{" "}
            is a platform-wide principle: no line item carries a stored default or made-up
            cost. All cost flows from accepted vendor pricing. A line with no awarded bid shows
            $0 / needs pricing — and that applies whether you created the line or Foreman did.
            The AI can&apos;t override the rule, and it doesn&apos;t try to. It builds the structure;
            the real prices flow in when bids are accepted.
          </p>

          <p>
            This is the meaningful difference between an AI agent that operates inside a
            disciplined platform and a generic assistant you paste data into. Foreman can&apos;t
            accidentally inflate your framing budget with a national average that&apos;s 18 months
            out of date because it doesn&apos;t store averages. The only numbers in the system are
            the ones your vendors actually bid.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Part of a larger purchasing workflow
          </h2>

          <p>
            Area costs by chat is one skill inside{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman&apos;s 396+ skill catalog
            </Link>. The same agent that builds your area cost structure can also:
          </p>

          <ul className="list-disc list-inside space-y-2 text-slate-300 my-4">
            <li>Generate and send bid requests to vendors for those newly created scopes</li>
            <li>Import submitted vendor bids and match them to the right scope items</li>
            <li>
              Create{" "}
              <Link
                href="/blog/foreman-ai-profitability-budget-reports-vendor-scorecards"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                profitability reports
              </Link>{" "}
              once the bids are awarded and the budget is populated
            </li>
            <li>Answer questions about which scopes still show $0 / needs pricing</li>
          </ul>

          <p>
            The area cost setup isn&apos;t an isolated task — it&apos;s the first step in a{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            that Foreman can run end-to-end. You define the scope structure by chat, send
            bid requests, receive vendor submissions through the no-login portal, accept the
            winning bids, and the Master Cost Budget fills with real numbers. Foreman is
            present at every step, not just the setup.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Who gets access?
          </h2>

          <p>
            Foreman AI — including area costs by chat and all 396+ skills — is available on
            the Pro+ plan. Role-based tool filtering means a vendor account can&apos;t access
            purchasing data, and every Foreman action is attributable to the user who initiated
            it. Foreman also carries{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              per-user memory
            </Link>{" "}
            across sessions — so it already knows your preferred vendor, your naming conventions,
            and which communities you&apos;re actively building in when you sit down to build a budget.
          </p>

          <p>
            That context matters when you&apos;re asking Foreman to create scope items. It can default
            to the vendors you actually work with, pick the right community, and organize the
            budget the way your purchasing team expects — not a generic template that needs
            editing before it&apos;s useful.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The bottom line
          </h2>

          <p>
            The time to build a well-structured area cost budget shouldn&apos;t be measured in hours.
            Foreman turns it into a conversation — one instruction per scope, properly filtered,
            properly organized, and honest about what still needs pricing. The AI does the setup;
            your vendors fill in the real numbers; the budget you end up with traces every dollar
            to an awarded bid.
          </p>

          <p>
            That&apos;s not a chatbot. That&apos;s an agent running your purchasing workflow — and building
            the budget framework is where it starts.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Let Foreman build the structure. Let vendors fill the prices.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI sets up scope-first area costs by chat — following the same
              vendor-priced flow your purchaser uses, with zero invented defaults.
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
