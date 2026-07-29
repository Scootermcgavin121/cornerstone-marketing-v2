import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, ClipboardList } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/punch-list-management-ai.png";
const heroImageAlt =
  "Construction punch list software — AI reading jobsite photos and generating assigned punch items in Cornerstone";

const blogSchema = buildBlogPostSchema({
  title: "Punch Lists Without the Clipboard: AI Punch List Management",
  slug: "punch-list-management-home-builders-ai",
  description:
    "Walking a home with a clipboard and a phone camera? See how AI punch list software turns jobsite photos into assigned, tracked items for home builders.",
  datePublished: "2026-07-29",
  mentionsProduct: {
    name: "Cornerstone PM Foreman AI",
    url: "https://www.cornerstonepm.ai/foreman",
  },
});

export const metadata: Metadata = {
  title:
    "Punch Lists Without the Clipboard: AI Punch List Management — Cornerstone PM™ Blog",
  description:
    "Walking a home with a clipboard and a phone camera? See how AI punch list software turns jobsite photos into assigned, tracked items for home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/punch-list-management-home-builders-ai",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Run an AI Punch Walk with Foreman in Cornerstone PM",
  description:
    "Use Foreman AI's vision capability to convert jobsite photos into assigned, tracked punch list items without a clipboard or manual re-keying.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open the home and start a punch conversation with Foreman",
      text: "In Cornerstone PM, navigate to the home that needs a punch walk. Open Foreman AI and tell it you are doing a punch walk on that home. Foreman loads the home's context — lot, plan, assigned trades — so every item it creates is filed under the right record.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Drop your jobsite photos into the conversation",
      text: "Take photos on your phone or camera as you walk the home and paste or upload them directly into the Foreman conversation. You can drop in multiple photos at once — one per room, one per issue, or a batch from the whole walk.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Foreman reads the photos and drafts punch items",
      text: "Foreman's AI vision analyzes each photo and identifies visible defects, incomplete work, or items that need attention. It drafts punch list items with descriptions — nail pops, missing covers, cracked trim, hardware issues — and suggests the trade responsible for each one.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review, adjust, and confirm the items",
      text: "Review the drafted list in the conversation. Reassign any items to the correct trade if needed, or add notes. When you confirm, Foreman writes the punch items as real task records in the home — not a chat transcript you have to copy out later.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Track resolution through the platform",
      text: "Each punch item lives in Cornerstone as a task on the home, visible in the schedule and the task board. Assigned trades see their items; superintendents can filter by status. When items are resolved, the task closes and the audit trail is in the platform.",
    },
  ],
};

const punchItems = [
  {
    issue: "Nail pops — master bedroom, 2 locations",
    trade: "Drywall",
    status: "Open",
    statusColor: "text-red-400 bg-red-500/10 border-red-500/20",
  },
  {
    issue: "Missing outlet cover — hallway",
    trade: "Electrician",
    status: "Open",
    statusColor: "text-red-400 bg-red-500/10 border-red-500/20",
  },
  {
    issue: "Cracked baseboard, NE corner — kitchen",
    trade: "Trim Carpenter",
    status: "Assigned",
    statusColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    issue: "Door hardware loose — front entry",
    trade: "Framing",
    status: "Complete",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function PunchListAIPage() {
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
            Foreman AI
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Punch Lists Without the Clipboard: AI Punch List Management
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 29, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A superintendent walks a home with a phone camera, snaps twenty photos,
            and the punch list dies in the camera roll until someone retypes it two
            days later.{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            reads your jobsite photos, drafts the punch items, assigns them to the
            right trade, and writes them as real task records in the platform —
            no clipboard, no re-keying.
          </p>

          <p>
            Punch lists are one of the last paper-and-phone workflows left in
            residential construction. The walk itself takes an hour; the admin that
            follows — sorting through camera photos, writing descriptions, texting
            trade contacts, chasing status — takes another two. For a builder
            closing ten or twenty homes a month, that overhead adds up fast and the
            list is always slightly stale by the time it reaches the trade.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why punch lists belong inside your build platform
          </h2>

          <p>
            Most punch list tools treat the list as a standalone module — a separate
            app, a PDF, or a shared spreadsheet that lives outside the rest of the
            build. When an item is resolved, you mark it in the list. The task
            board, the vendor record, and the schedule don&apos;t know about it.
          </p>

          <p>
            Cornerstone keeps punch lists connected to the home. Each item is a
            task on the home&apos;s record, visible in the same place as the
            framing schedule, the PO history, and the design center selections.
            When a superintendent filters the task board to &ldquo;open punch
            items — Lot 14,&rdquo; every trade sees exactly what&apos;s assigned
            to them. When an item closes, the audit trail stays in the platform.
          </p>

          <p>
            That connection is what makes{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            useful for punch lists rather than just a chat transcript you copy
            out. Foreman is an agent with 396+ skills that reads and writes
            your actual data. When it creates a punch item, it creates a real
            task on the home — not a note in a conversation window.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How Foreman reads jobsite photos
          </h2>

          <p>
            Foreman has AI vision built in. You can drop a photo — or a batch
            of photos — directly into a Foreman conversation. Foreman analyzes
            what it sees: visible defects, incomplete work, surface damage,
            hardware issues, missing cover plates. It describes the item, notes
            the location, and suggests the trade responsible based on the type
            of work.
          </p>

          <p>
            This is useful for the parts of a punch walk where the superintendent
            knows exactly what they&apos;re looking at but doesn&apos;t want to stop
            and type. Snap the photo, drop it in, move to the next room. Foreman
            does the transcription.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <ClipboardList className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Lot 14, Magnolia — Punch Items from Photo Walk
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {punchItems.map((item, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{item.issue}</p>
                    <p className="text-xs text-slate-500 mt-0.5">Assigned: {item.trade}</p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Foreman AI drafted these items from four jobsite photos — each
                is now a real task on the home, assigned to the right trade.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to run an AI punch walk in Cornerstone PM
          </h2>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                step: "1",
                title: "Open the home and start a punch conversation with Foreman",
                detail:
                  "Navigate to the home that needs a punch walk. Open Foreman AI and tell it you are walking Lot 14 for punch items. Foreman loads the home's context — plan, assigned trades, open tasks — so every item it creates lands on the right record.",
              },
              {
                step: "2",
                title: "Drop your jobsite photos into the conversation",
                detail:
                  "Take photos on your phone as you walk and paste or upload them directly into the Foreman conversation. Drop a batch at once — one per room or one per issue — or add them as you go.",
              },
              {
                step: "3",
                title: "Foreman reads the photos and drafts punch items",
                detail:
                  "Foreman's AI vision analyzes each photo and identifies defects, incomplete work, or items needing attention. It drafts descriptions and suggests the trade responsible for each one.",
              },
              {
                step: "4",
                title: "Review, adjust, and confirm",
                detail:
                  "Check the list in the conversation. Reassign any items, add notes, or merge duplicates. When you confirm, Foreman writes the punch items as real task records on the home — not a chat transcript you copy out later.",
              },
              {
                step: "5",
                title: "Track resolution through the platform",
                detail:
                  "Each punch item lives in Cornerstone as a task, visible in the schedule and task board. Assigned trades see their items; superintendents filter by status. Resolved items close with a full audit trail.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-sm text-slate-400">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            An agent, not a chatbot — the difference matters for punch lists
          </h2>

          <p>
            Most AI tools you can throw at a construction problem are chatbots:
            they answer questions and return text. The output lives in the chat
            window. If you want it somewhere useful, you copy it out by hand —
            which is essentially the same clipboard problem as before, wrapped in
            a nicer interface.
          </p>

          <p>
            Foreman is{" "}
            <Link
              href="/blog/foreman-ai-agent-takes-actions-not-chatbot"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              an agent
            </Link>
            . It reads and writes your actual platform data. When it creates
            a punch item, it&apos;s a real task record in Cornerstone — assigned
            to a trade, tracked against the home, visible to the superintendent
            in the task board. The difference is that the punch walk ends with
            the list already in the system, not in a camera roll or a Word doc.
          </p>

          <p>
            That same read-and-write capability applies across{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              396+ skills
            </Link>{" "}
            across 20 construction categories. Foreman can look up a vendor&apos;s
            assigned scope, check whether a home has open POs, or pull the
            schedule for a trade across the whole community — all in the same
            conversation where you&apos;re managing punch items.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How punch items connect to the rest of the build
          </h2>

          <p>
            Punch items in Cornerstone aren&apos;t isolated from the rest of the
            build. They tie into the same task and vendor flow the scheduling
            module uses. When a punch item is assigned to a trade and a PO exists
            for that trade on the home, the item resolves inside the same vendor
            context — no separate system for tracking who showed up and when.
          </p>

          <p>
            The{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              scheduling module
            </Link>{" "}
            surfaces open punch items against the home timeline, so a
            superintendent can see at a glance whether the punch walk is blocking
            a close. Foreman AI can query open punch items for a home or a
            community and summarize what&apos;s outstanding, trade by trade, in
            seconds.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What Foreman AI covers in punch list workflows
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "AI vision analysis",
                  detail: "Reads jobsite photos to identify defects and incomplete work",
                },
                {
                  label: "Automatic trade assignment",
                  detail: "Suggests the right trade for each item based on the type of work",
                },
                {
                  label: "Real task records",
                  detail: "Creates actual task records on the home, not chat output you copy out",
                },
                {
                  label: "Status tracking",
                  detail: "Punch items surface in the task board — filter by trade, status, or home",
                },
                {
                  label: "AI summary on demand",
                  detail: "Ask Foreman for a punch summary by trade or community anytime",
                },
                {
                  label: "Audit trail",
                  detail: "Resolved items close with a timestamped record in the platform",
                },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The bottom line for home builders
          </h2>

          <p>
            The clipboard and the camera roll aren&apos;t the bottleneck in a punch
            walk — the re-keying and the follow-up are. A superintendent who can
            walk a home, drop photos into Foreman, and leave the punch list fully
            created and assigned by the time they reach the truck is doing the same
            walk in less total time, with less chance something falls through.
          </p>

          <p>
            Punch lists generated by Foreman are part of the same{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management platform
            </Link>{" "}
            that handles scheduling, purchasing, vendor bids, and QuickBooks sync.
            There&apos;s no separate punch list module to log into, no third-party
            app to reconcile. The punch walk ends where the rest of the build lives.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Turn your phone camera into a punch list generator.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI reads jobsite photos and writes real punch items to the
              platform — no clipboard, no re-keying, no separate app.
              See the full Foreman AI platform in action.
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
