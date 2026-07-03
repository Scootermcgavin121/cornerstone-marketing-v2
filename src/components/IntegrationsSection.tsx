import {
  CheckCircle2,
  ShieldCheck,
  Plug,
  Landmark,
  BarChart3,
  ReceiptText,
  Gauge,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// QuickBooks brand green
const QB_GREEN = "#2CA01C";

const syncPoints = [
  {
    icon: ShieldCheck,
    title: "One-way sync — your books stay safe",
    desc: "POs, Bills, Vendors, and Homes flow one direction: Cornerstone → QuickBooks. Changes you make in QuickBooks never overwrite your Cornerstone records. Your accountant can't accidentally break your project data.",
  },
  {
    icon: Plug,
    title: "One-click connect — no developer setup",
    desc: "Hit “Connect with QuickBooks,” pick your company, and you're done. Cornerstone manages the Intuit app credentials for you — no API keys, no OAuth wiring, nothing to configure.",
  },
  {
    icon: Landmark,
    title: "Construction-ready Chart of Accounts",
    desc: "Starting from a blank QuickBooks, Cornerstone builds a construction CoA straight from your scopes and cost codes — each top-level scope becomes a COGS account, each cost code an item. Full preview before anything is created; existing accounts are reused by name, never renamed.",
  },
  {
    icon: BarChart3,
    title: "Job costing QuickBooks can't do alone",
    desc: "Each Community syncs as a QuickBooks Customer and each Home nests under it as a Project (or a sub-customer job on plans without Projects) — so you get true per-home and per-community P&L in QuickBooks, not just a lump sum.",
  },
  {
    icon: ReceiptText,
    title: "POs, Bills, Vendors & sales tax",
    desc: "Vendors upsert, Purchase Orders create/approve/update (voids close them out), and vendor invoices post as Bills — the moment they happen in Cornerstone. Sales tax carries through on sync, with a live progress bar as it runs.",
  },
  {
    icon: Gauge,
    title: "Works with your QuickBooks plan",
    desc: "Auto-detects whether your plan supports POs (Plus/Advanced) or Bills (Essentials and up), warns you clearly, and re-enables automatically when you upgrade — no reconnect. Already on QuickBooks? Pull your existing accounts, items, vendors, customers, and classes so Cornerstone matches them.",
  },
];

export function IntegrationsSection() {
  return (
    <section
      id="integrations"
      className="relative py-24 px-4 border-t border-slate-800/60 bg-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/3 left-1/4 w-[26rem] h-[26rem] rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(44,160,28,0.06)" }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
            style={{
              color: QB_GREEN,
              backgroundColor: "rgba(44,160,28,0.1)",
              border: "1px solid rgba(44,160,28,0.3)",
            }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Now Live — QuickBooks Online
          </div>

          {/* QuickBooks badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg
              viewBox="0 0 64 64"
              className="w-12 h-12 shadow-lg rounded-full"
              role="img"
              aria-label="QuickBooks logo"
            >
              <circle cx="32" cy="32" r="32" fill={QB_GREEN} />
              <text
                x="32"
                y="32"
                fill="#ffffff"
                fontFamily="Arial, Helvetica, sans-serif"
                fontSize="30"
                fontWeight="700"
                textAnchor="middle"
                dominantBaseline="central"
                letterSpacing="-1"
              >
                qb
              </text>
            </svg>
            <span className="text-2xl font-black text-white tracking-tight">
              QuickBooks Online
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Your accountant keeps QuickBooks. Your team keeps{" "}
            <span style={{ color: QB_GREEN }}>Cornerstone.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            They stay in sync — one direction, no double entry. Purchase orders,
            bills, vendors, and job costs flow from Cornerstone into QuickBooks
            automatically, while your Cornerstone data stays the source of truth.
            The schedule → cost code → budget → PO loop already lives in
            Cornerstone; now your books keep up with it on their own.
          </p>
        </div>

        {/* Sync points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {syncPoints.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 transition-colors hover:border-[rgba(44,160,28,0.3)]"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    color: QB_GREEN,
                    backgroundColor: "rgba(44,160,28,0.1)",
                    border: "1px solid rgba(44,160,28,0.2)",
                  }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA — connect / early access */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: QB_GREEN }}
          >
            Request early access
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Fine print */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" style={{ color: QB_GREEN }} />
            One-way sync — QuickBooks never overwrites Cornerstone
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>Admin &amp; Accounting Admin only</span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>POs require QuickBooks Online Plus or Advanced</span>
        </div>
      </div>
    </section>
  );
}
