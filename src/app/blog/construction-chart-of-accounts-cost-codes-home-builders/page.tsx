import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, BookOpen } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/construction-chart-of-accounts.png";
const heroImageAlt =
  "Construction chart of accounts — cost codes mapping to QuickBooks accounts for home builder job costing";

const blogSchema = buildBlogPostSchema({
  title: "A Construction Chart of Accounts That Ties to Your Cost Codes",
  slug: "construction-chart-of-accounts-cost-codes-home-builders",
  description:
    "Most builders inherit a generic chart of accounts and fight it forever. How to structure a construction chart of accounts that maps cleanly to cost codes.",
  datePublished: "2026-07-30",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

export const metadata: Metadata = {
  title:
    "A Construction Chart of Accounts That Ties to Your Cost Codes — Cornerstone PM™ Blog",
  description:
    "Most builders inherit a generic chart of accounts and fight it forever. How to structure a construction chart of accounts that maps cleanly to cost codes.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-chart-of-accounts-cost-codes-home-builders",
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
  name: "How to Structure a Construction Chart of Accounts That Ties to Cost Codes",
  description:
    "Set up a construction chart of accounts that maps cleanly to cost codes so every PO, bill, and change order flows into the right account with full traceability.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Audit your existing chart of accounts",
      text: "Open your current QuickBooks chart of accounts and identify how construction costs are bucketed. Most builders find one or two large COGS accounts catching everything — Subcontractor Costs and Materials, or similar. Note which accounts have no cost-code equivalent and which are catch-all buckets a bookkeeper created for convenience.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Define your cost code structure by trade",
      text: "List every trade on a typical home: Framing Labor, Framing Material, Plumbing Rough, Plumbing Fixture, Electrical Rough, Electrical Trim, HVAC Labor, Drywall Material, Roofing Labor, Roofing Supplier, and so on. Labor and material for each trade should be separate cost codes — they have different tax treatment (materials are taxable, labor is typically exempt) and different variance patterns.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Map each cost code to a dedicated account",
      text: "Create or rename QuickBooks accounts so each cost code has a clean home. The accounts exist for financial reporting (balance sheet, P&L, tax filing); the cost codes carry operational detail (which home, which trade, which PO). A one-to-one line between cost code and account means every transaction can be traced in both directions.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Connect Cornerstone to QuickBooks for a one-click COA build",
      text: "In Cornerstone PM, connect to QuickBooks Online under Accounting settings. The one-click Chart of Accounts setup builds a construction-ready COA and cost-code items automatically, reusing any account names that already exist in your books so it never restructures what a bookkeeper already trusts. From that point, approved POs, bills, and change orders route to the right account automatically.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Verify synced transactions carry full memo detail",
      text: "After the first sync, open a PO in QuickBooks and check the memo field. Every Cornerstone-synced transaction carries community name, lot number, address, PO number, and cost code in the memo — so a bookkeeper can trace any QuickBooks entry back to the exact home and trade without leaving QuickBooks.",
    },
  ],
};

const coaRows = [
  { account: "Framing Labor", costCode: "Framing Labor", tax: "Exempt" },
  { account: "Framing Material", costCode: "Framing Material", tax: "Taxable" },
  { account: "Plumbing Rough", costCode: "Plumbing Rough", tax: "Exempt" },
  { account: "Electrical Panel", costCode: "Electrical Panel", tax: "Taxable" },
  { account: "HVAC Labor", costCode: "HVAC Labor", tax: "Exempt" },
  { account: "Drywall Material", costCode: "Drywall Material", tax: "Taxable" },
  { account: "Roofing Supplier", costCode: "Roofing Supplier", tax: "Taxable" },
];

export default function ConstructionChartOfAccountsPage() {
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
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            A Construction Chart of Accounts That Ties to Your Cost Codes
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>July 30, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A construction chart of accounts should map one-to-one with your cost codes — accounts for financial reporting, cost codes for operational detail — so every PO, bill, and change order flows into the right account automatically.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>{" "}
            connects to QuickBooks Online and builds that structure in a single click, reusing account names you already trust.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why most builders fight their chart of accounts forever
          </h2>

          <p>
            Most home builders inherit a chart of accounts set up by a general-practice bookkeeper who knew QuickBooks but didn&apos;t know construction. The result is usually one or two large catch-all COGS accounts — &ldquo;Subcontractor Costs&rdquo; and &ldquo;Materials,&rdquo; or a single &ldquo;Cost of Construction&rdquo; bucket — and a growing stack of journal entries every month to sort things out.
          </p>

          <p>
            When every framing PO, plumbing bill, and electrical change order lands in the same account, per-home margin becomes a guess. A bookkeeper can tell you what you spent last quarter; they can&apos;t tell you what you spent on framing labor for Lot 14 in River Bend without pulling reports and digging through descriptions.
          </p>

          <p>
            The fix isn&apos;t a more complicated chart of accounts — it&apos;s a chart of accounts that actually mirrors how you build, with accounts that correspond to real cost codes and transactions that carry enough detail to be traced in both directions.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Accounts vs cost codes: two different layers with one job between them
          </h2>

          <p>
            Accounts live in your general ledger. They&apos;re how your CPA, your bank, and the IRS see your money. Chart-of-accounts design follows reporting logic: income, COGS, operating expenses, assets, liabilities.
          </p>

          <p>
            Cost codes live in your operations. They describe the work: Framing Labor, Framing Material, Plumbing Rough, Electrical Trim, HVAC, Drywall, Roofing. Cost codes tie a purchase order to a trade, a home, and a scope of work. They&apos;re what you use to answer the question, &ldquo;What did we actually spend building this house?&rdquo;
          </p>

          <p>
            The structural problem most builders hit is that these two layers aren&apos;t connected. Cost codes live in a spreadsheet or a construction platform; accounts live in QuickBooks; and a bookkeeper reconciles between them manually at the end of each month — eating hours and introducing error every time a PO description doesn&apos;t match an account name.
          </p>

          <p>
            The right design has a one-to-one line: each cost code maps to a dedicated account. Framing Labor is an account. Framing Material is an account. When a framing PO routes to Framing Labor in the books, everyone from the superintendent to the CFO is looking at the same number — no translation, no reconciliation.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to structure a construction chart of accounts
          </h2>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                step: "1",
                title: "Audit what you have",
                detail:
                  "Open your current QuickBooks chart of accounts. Identify how construction costs are bucketed. Most builders find one or two large COGS accounts catching everything. Note which are catch-all accounts with no corresponding cost code.",
              },
              {
                step: "2",
                title: "Define cost codes by trade — labor and material separate",
                detail:
                  "List every trade on a typical home. Create a labor cost code and a material cost code for each trade separately. They have different tax treatment (materials are taxable, labor is typically exempt) and different variance patterns.",
              },
              {
                step: "3",
                title: "Map each cost code to a dedicated account",
                detail:
                  "Create or rename QuickBooks accounts so each cost code has a clean home. The account exists for financial reporting; the cost code carries operational detail. A one-to-one line between them means every transaction traces in both directions.",
              },
              {
                step: "4",
                title: "Connect Cornerstone to QuickBooks for a one-click COA build",
                detail:
                  "In Cornerstone PM, connect to QuickBooks Online under Accounting settings. The one-click Chart of Accounts setup builds a construction-ready COA and cost-code items automatically, reusing existing account names so it never restructures books you already trust.",
              },
              {
                step: "5",
                title: "Verify synced memos carry full detail",
                detail:
                  "After the first sync, check a PO in QuickBooks. Every Cornerstone-synced transaction carries community, lot, address, PO number, and cost code in the memo — so a bookkeeper can trace any entry back to the exact home and trade without leaving QuickBooks.",
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
            What a clean construction COA looks like in practice
          </h2>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Sample construction chart of accounts (partial)
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-5 py-3 grid grid-cols-3 gap-4">
                <p className="text-xs font-semibold text-slate-500 uppercase">Account</p>
                <p className="text-xs font-semibold text-slate-500 uppercase">Cost Code</p>
                <p className="text-xs font-semibold text-slate-500 uppercase">Tax Treatment</p>
              </div>
              {coaRows.map((row, i) => (
                <div key={i} className="px-5 py-3.5 grid grid-cols-3 gap-4 items-center">
                  <p className="text-sm font-semibold text-white">{row.account}</p>
                  <p className="text-sm text-slate-400">{row.costCode}</p>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border w-fit ${
                      row.tax === "Taxable"
                        ? "text-amber-400 bg-amber-500/10 border-amber-500/20"
                        : "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                    }`}
                  >
                    {row.tax}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Labor accounts are typically tax-exempt; material accounts carry sales tax automatically in Cornerstone — no manual tax split required.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why the memo field matters more than builders realize
          </h2>

          <p>
            Most accounting integrations push a dollar amount and an account. That covers the balance sheet but leaves a bookkeeper with nothing to go on when a bill needs to be traced back to a specific job or a vendor dispute needs to be resolved.
          </p>

          <p>
            Cornerstone stamps every synced PO, bill, and change order with a structured memo: community name, lot number, street address, PO number, and cost code. The memo travels into QuickBooks with the transaction so a bookkeeper can filter by community, search by PO number, or pull all transactions for a specific lot without leaving QuickBooks or calling anyone.
          </p>

          <p>
            That detail also protects against month-end reconciliation surprises. If Framing Labor is over budget for River Bend, a bookkeeper can pull every transaction against that account, read the memos, and identify exactly which PO or change order caused the variance — without opening Cornerstone or asking a superintendent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The one-click shortcut — and what it actually does
          </h2>

          <p>
            Rebuilding a chart of accounts by hand is tedious and the stakes are high — rename the wrong account and old transactions misclassify. The Cornerstone one-click setup takes a different approach: it scans existing QuickBooks account names and reuses any that already match construction cost codes by name. Accounts that don&apos;t exist yet get created; accounts that already exist stay exactly where they are, with no reclassification.
          </p>

          <p>
            The result is a construction-ready COA plus cost-code items that are wired to the right accounts from the start — without a bookkeeper spending a day renaming things and manually mapping cost codes.
          </p>

          <p>
            From that point,{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              every purchase order, bill, and change order
            </Link>{" "}
            that flows through Cornerstone routes to the correct account automatically. Approved POs sync as QuickBooks Purchase Orders (commitment accounting). On receipt, the linked Bill auto-creates and closes the PO. The{" "}
            <Link
              href="/blog/quickbooks-sync-audit-trail-construction-accounting"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Sync Events log
            </Link>{" "}
            shows every push to QuickBooks plus retries, so nothing disappears silently.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Per-home P&amp;L without a separate reporting layer
          </h2>

          <p>
            The final piece of the puzzle is job-level reporting. A chart of accounts tells you what you spent; it doesn&apos;t tell you what you spent on a specific home without filtering by job in QuickBooks.
          </p>

          <p>
            Cornerstone&apos;s QuickBooks sync maps each Community to a QuickBooks Customer (parent entity) and each Home to a Project — or a sub-customer Job on QuickBooks tiers that don&apos;t include Projects. That means every PO, bill, and change order lands under the right home automatically. A builder can pull a per-home P&amp;L directly from QuickBooks without pivot tables or manual job code entry: open the River Bend project in QuickBooks, filter by account, and see framing labor, electrical, and HVAC costs for that home tied to real vendor invoices.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What the Cornerstone → QuickBooks sync handles automatically
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                {
                  label: "COA build",
                  detail: "One-click creates construction-ready accounts and cost-code items, reusing existing names",
                },
                {
                  label: "Two-stage accrual",
                  detail: "Sent PO posts as a QBO Purchase Order; receipt creates a linked Bill and closes the PO",
                },
                {
                  label: "Job-level routing",
                  detail: "Community → QBO Customer, Home → QBO Project for per-home P&L out of the box",
                },
                {
                  label: "Structured memos",
                  detail: "Every transaction carries community, lot, address, PO number, and cost code",
                },
                {
                  label: "Sales tax split",
                  detail: "Material lines taxed automatically; labor lines stay exempt — no manual tax entry",
                },
                {
                  label: "Sync Events log",
                  detail: "Every push to QuickBooks is logged with retry visibility — no silent failures",
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
            A generic chart of accounts isn&apos;t a bookkeeping problem — it&apos;s a margin problem. When cost data is too aggregated to trace, builders lose the ability to spot where a plan type is losing money, which trades are consistently over budget, or which communities carry higher material costs than the pro forma assumed.
          </p>

          <p>
            The fix is simpler than most builders expect: get a COA that mirrors your cost codes, wire it to the transactions that already flow through your{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>
            , and let the structured memos do the tracing work in QuickBooks. Cornerstone&apos;s one-click setup builds that foundation automatically — and every PO approved from that point carries the detail to back it up.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Get a construction chart of accounts that actually works.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM builds a construction-ready chart of accounts in one click and syncs every PO, bill, and change order to QuickBooks with full cost-code detail in the memo.
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
