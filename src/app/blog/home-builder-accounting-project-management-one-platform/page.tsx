import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/home-builder-accounting-project-management.png";
const heroImageAlt =
  "Home builder project management software — Cornerstone unifies takeoff, design, purchasing, and QuickBooks accounting";

const blogSchema = buildBlogPostSchema({
  title: "One Platform for Home Builder Accounting and Project Management",
  slug: "home-builder-accounting-project-management-one-platform",
  description:
    "See how Cornerstone unites AI takeoff, design center, purchasing, and QuickBooks sync so home builder accounting and project management share one system.",
  datePublished: "2026-07-22",
  mentionsProduct: { name: "Cornerstone PM", url: "https://www.cornerstonepm.ai" },
});

export const metadata: Metadata = {
  title:
    "One Platform for Home Builder Accounting and Project Management — Cornerstone PM™ Blog",
  description:
    "See how Cornerstone unites AI takeoff, design center, purchasing, and QuickBooks sync so home builder accounting and project management share one system.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/home-builder-accounting-project-management-one-platform",
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

export default function HomeBuilderAccountingProjectManagementPage() {
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
          width={1536}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Platform
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            One Platform for Home Builder Accounting and Project Management
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 22, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM is a single platform where AI takeoff, a buyer-facing design center,
            automated vendor bidding, purchasing, and QuickBooks Online sync all share the same data
            — so your{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            and your accounting system stop disagreeing. No double entry. No CSV exports. One honest
            set of numbers from blueprint to bookkeeper.
          </p>

          <p>
            Most production home builders run their operations across three to five systems that were
            never designed to talk to each other: a spreadsheet for budgets, a separate tool for
            scheduling, a design selections folder on Dropbox, and QuickBooks sitting in a silo that
            only the bookkeeper touches. The result is a reconciliation problem that surfaces at
            month-end — or worse, at draw time — when the numbers in each system don&apos;t match.
          </p>

          <p>
            Cornerstone PM is designed around a different premise: everything from the first takeoff
            to the last sync to QuickBooks lives in the same system, governed by the same hard-cost
            rule. Here is how that end-to-end flow works in practice.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 1: Blueprint AI extracts scopes from the floor plan
          </h2>

          <p>
            The workflow starts before a vendor quote exists.{" "}
            <Link
              href="/ai-takeoff"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Blueprint AI
            </Link>{" "}
            reads a floor plan PDF and extracts 130+ material scopes and 3,284+ parts in under
            60 seconds — framing, plumbing, electrical, roofing, cabinetry, and more. What used to
            take a senior estimator four to eight hours per plan now takes a minute, and the output
            lands directly in the Master Cost Budget as scope-structured line items ready for vendor
            pricing.
          </p>

          <p>
            Because Blueprint AI follows the platform&apos;s hard-cost rule, every extracted part shows
            up at $0 / needs pricing until a real vendor bid arrives. There are no filler costs, no
            default labor rates, no synthetic splits. The takeoff tells you what you need; vendor
            bids tell you what it costs.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 2: The design center prices options by community
          </h2>

          <p>
            Once the base plan is structured,{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              the design center
            </Link>{" "}
            layers options on top — and it&apos;s built for production, not custom builds. Option
            Classes tie buyer selections to scope items, so a cabinet upgrade automatically flows to
            the cabinetry scope in the Master Cost Budget. Community-based upgrade pricing means the
            same plan can carry different option costs across different communities without
            duplication. Spec levels give builders granular control: promote any standard finish to
            a paid upgrade with a single change, down to the individual option, not just the
            category.
          </p>

          <p>
            64 curated Designer Packages across 7 categories let buyers start from a coordinated
            look instead of a blank checklist. Exclusion groups — Carpet OR Tile OR LVP — ensure
            one selection marks the category complete. Every upgrade price in the design center
            traces to accepted vendor pricing, so the design center and the budget never diverge.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 3: Automated bid requests award real vendor pricing
          </h2>

          <p>
            Scope items priced at $0 need bids. Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            sends bid requests to vendors with a single click — auto-generating scope-filtered
            Excel bid templates so each vendor only sees their trade. Vendors submit through a
            no-login portal; the builder compares bids side-by-side and awards by community.
          </p>

          <p>
            Once a bid is awarded, the pricing locks and flows into the Master Cost Budget.
            Community-assigned vendor wins mean the same scope can go to different vendors in
            different communities — you&apos;re not running a lowest-bid auction, you&apos;re managing real
            vendor relationships. The Bid Import AI handles re-imports cleanly: three modes
            (takeoff-only, pricing-only, or both), with replace-instead-of-duplicate logic so
            budget rounds stay clean.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 4: Purchasing generates POs and tracks change orders
          </h2>

          <p>
            When a task completes in the schedule, Cornerstone auto-generates the purchase order
            and emails the vendor — no manual PO creation required. Change orders flow through the
            same system and update the Master Cost Budget in real time. Automatic sales tax applies
            to materials and keeps labor exempt, so the numbers are right before they ever reach
            QuickBooks.
          </p>

          <p>
            The hard-cost rule holds throughout: every line in the Master Cost Budget traces to
            an accepted vendor bid, a takeoff part, or an explicit allowance. A line with no
            accepted price shows $0 / needs pricing. No estimator fudging, no made-up numbers, no
            month-end surprises.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Step 5: Approved records sync one-way to QuickBooks Online
          </h2>

          <p>
            Approved POs, change orders, bills, and vendors post automatically to QuickBooks Online
            — no CSV exports, no manual re-entry, no bookkeeper copy-paste sessions. The mapping
            is built for construction job costing: each <strong className="text-white">Community
            becomes a QuickBooks Customer</strong> and each <strong className="text-white">Home
            becomes a QuickBooks Project</strong>, so builders get per-home and per-community P&L
            inside QuickBooks without any setup.
          </p>

          <p>
            The sync is one-way. Cornerstone stays the source of truth; changes made inside
            QuickBooks never overwrite Cornerstone records. Cornerstone never auto-pays — payment
            approval always stays manual in QuickBooks, preserving the human pay gate. Every synced
            PO, Bill, and change order carries a clean transaction memo with community, lot, address,
            PO number, and cost code, so any transaction is traceable from QBO back to the exact
            home and trade without leaving QuickBooks.
          </p>

          <p>
            The Accounting → Sync Events log shows every push and retry, so nothing is a black box.
            If something fails, the log tells you exactly which record and what happened.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Foreman AI runs across all of it
          </h2>

          <p>
            Every step in this workflow has a corresponding{" "}
            <Link
              href="/foreman"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            skill. Foreman can build area costs by chat, update vendor pricing, generate profitability
            reports and vendor scorecards, attach product images, create design options, and run
            multi-step purchasing workflows — all from plain English instructions. It has 396+ skills
            across 20 categories, per-user memory (so it remembers your preferred vendors and
            communication style), and a context-health meter that keeps long sessions running
            without losing track.
          </p>

          <p>
            Foreman is an agent that reads and writes your live data, not a chatbot that answers
            questions in isolation. A superintendent who always orders from the same framing crew
            doesn&apos;t have to tell Foreman every time — it remembers.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The sales pipeline connects the front end to the build
          </h2>

          <p>
            The data flow starts even earlier than takeoff. Cornerstone&apos;s{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>{" "}
            is wired into the rest of the platform: leads from QR scans and the website move
            through the pipeline, and a sold lot hands off directly to the schedule and the design
            center. Buyer selections made in the design center feed the Master Cost Budget
            automatically. There&apos;s no re-entry step from sales to build — the handoff is inside
            the same system.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Fewer systems. One set of numbers. No double entry.
          </h2>

          <p>
            The reason most builders run too many systems isn&apos;t that those systems are wrong — it&apos;s
            that no single platform covered the whole workflow until now. Blueprint AI handles
            takeoff. The design center handles selections. Purchasing handles bids, POs, and change
            orders. QuickBooks sync handles the books. Foreman AI handles the in-between tasks
            that used to require manual effort. And the sales pipeline keeps buyer data flowing
            into the build from the start.
          </p>

          <p>
            The{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              modern production home builder platform
            </Link>{" "}
            doesn&apos;t ask you to reconcile across systems. It gives you one source of truth from
            blueprint to bookkeeper — governed by the hard-cost rule that makes every dollar
            traceable.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to run your build on one platform?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Blueprint AI takeoff, a production design center, automated vendor bidding, purchasing,
              and native QuickBooks sync — all in one place, governed by one hard-cost rule.
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
