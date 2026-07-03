import {
  BadgeCheck,
  Landmark,
  Users,
  ReceiptText,
  Percent,
  RefreshCw,
  Download,
} from "lucide-react";

// QuickBooks brand green
const QB_GREEN = "#2CA01C";

const syncPoints = [
  {
    icon: Landmark,
    title: "Construction-ready Chart of Accounts",
    desc: "Auto-builds your Chart of Accounts from your scopes and cost codes — no manual accountant setup.",
  },
  {
    icon: Users,
    title: "Vendors & jobs, mapped",
    desc: "Vendors sync to QBO Vendors and homes sync to QBO Customers/Jobs, so every dollar lands on true job-level cost tracking.",
  },
  {
    icon: ReceiptText,
    title: "POs & Bills flow automatically",
    desc: "Purchase Orders and Bills — including change-order POs — post to QuickBooks the moment they're created.",
  },
  {
    icon: Percent,
    title: "Sales tax, calculated and synced",
    desc: "Flip tax on for your taxable materials once and Cornerstone applies it to Purchase Orders and Change Orders — on-screen, on the PO PDF, and on the vendor email — then syncs the tax straight to QuickBooks. Materials taxable, labor exempt, fully under your control.",
  },
  {
    icon: Download,
    title: "Already on QuickBooks? Match it",
    desc: "Pull your existing accounts, items, vendors, customers, and classes so Cornerstone lines up with the lists you already use.",
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
            <BadgeCheck className="w-3.5 h-3.5" />
            Now Live — Official Integration
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
            Your purchasing syncs straight to{" "}
            <span style={{ color: QB_GREEN }}>QuickBooks.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Cornerstone PM is an official, Intuit-approved QuickBooks Online app.
            POs, bills, sales tax, vendors, and job costs flow from Cornerstone
            into QuickBooks automatically — no double entry, no CSV exports, no
            end-of-month scramble.
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

        {/* Fine print */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2">
            <RefreshCw className="w-4 h-4" style={{ color: QB_GREEN }} />
            One-way sync — changes in QuickBooks never overwrite Cornerstone
          </span>
          <span className="hidden sm:inline text-slate-700">•</span>
          <span>Requires QuickBooks Online Plus or Advanced</span>
        </div>
      </div>
    </section>
  );
}
