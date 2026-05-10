import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import {
  QrCode,
  HardHat,
  Clipboard,
  Users,
  MapPin,
  Camera,
  Cloud,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Triple QR Code Ecosystem for Home Builders | Cornerstone PM",
  description:
    "Three QR codes, three audiences, one platform: vendor jobsite check-in (GPS + weather + hours), community/PM check-in (timesheet validated), and sales model home lead capture. Replaces paper sign-in sheets. No app install required.",
  alternates: { canonical: "https://www.cornerstonepm.ai/qr" },
};

const qrCodes = [
  {
    id: "vendor",
    name: "Vendor Jobsite QR",
    audience: "Subcontractors & Suppliers",
    color: "from-emerald-500 to-cyan-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    textColor: "text-emerald-400",
    icon: HardHat,
    tagline: "Scan on arrival. We log everything.",
    description:
      "Every community and home gets its own unique QR code. Vendors scan with any phone â€” no app install, no Cornerstone login. GPS coordinates, timestamp, and weather conditions are captured automatically. Check-in and check-out times build a verifiable hours-on-site record.",
    bullets: [
      "GPS + timestamp + weather captured on every scan",
      "Hours-on-site tracked automatically (check-in â†’ check-out)",
      "Photo upload at check-in â€” up to 10 photos per visit",
      "Configurable safety acknowledgment per community",
      "Worker headcount log for crew sizes",
      "Webhook events: vendor.arrived, vendor.departed",
      'Printable 11Ã—8.5" signs auto-generated for every home',
    ],
  },
  {
    id: "community",
    name: "Community / PM QR",
    audience: "Builder Staff & Inspectors",
    color: "from-cyan-500 to-blue-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    textColor: "text-cyan-400",
    icon: Clipboard,
    tagline: "Timesheets that prove who was on-site.",
    description:
      "PMs, permitting agents, and inspectors scan at the construction trailer when they arrive. GPS-validated presence logging feeds the timesheet system â€” actual on-site presence is aligned below the timecard grid so managers can validate reported hours.",
    bullets: [
      "GPS-validated presence logs",
      "Timesheet integration â€” actual presence vs. reported hours",
      "Stops \"I was on-site all day\" entries that don't match the GPS record",
      "Per-community QR codes for multi-subdivision builders",
      "Inspector workflows â€” log site visits with photo evidence",
      "All scans attributable to a specific user account",
    ],
  },
  {
    id: "model",
    name: "Sales Model Home QR",
    audience: "Walk-In Homebuyers",
    color: "from-violet-500 to-pink-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-400",
    icon: Users,
    tagline: "Goodbye, paper sign-in sheet.",
    description:
      "QR code at every model home entrance. First-time visitors enter their info on their own phone. Returning visitors are recognized automatically: \"Welcome back!\" Every scan creates a Lead tied to the community, with instant in-app and email notifications to the sales agent.",
    bullets: [
      "First-time vs. returning visitor recognition",
      "Captures name, email, phone, \"How did you hear about us?\"",
      "Lead record auto-created and tied to community",
      "Sales agent gets instant in-app + email notification",
      "Leads dashboard grouped by community with status tracking",
      "No more paper sign-in sheets to retype on Monday",
      "Foundation for nurture sequences and follow-up automation",
    ],
  },
];

const stats = [
  { label: "Audiences served", value: "3" },
  { label: "QR codes generated per project", value: "Unlimited" },
  { label: "App installs required", value: "Zero" },
  { label: "Data captured per scan", value: "GPS + time + weather" },
];

export default function QRPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6">
            <QrCode className="w-3.5 h-3.5" />
            INDUSTRY-FIRST TRIPLE QR ECOSYSTEM
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Three QR codes.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Three audiences.
            </span>
            <br />
            One platform.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Vendors check in. PMs validate timesheets. Buyers self-register at the model home.
            All from a scan. No app install. No login. Every event audit-trailed.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-slate-800/60 bg-slate-900/40 px-4 py-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">{s.value}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three QR Cards */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {qrCodes.map((qr, i) => {
            const Icon = qr.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={qr.id}
                id={qr.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 scroll-mt-24`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-xl ${qr.bgColor} border ${qr.borderColor} flex items-center justify-center ${qr.textColor}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-slate-500">
                        {qr.audience}
                      </div>
                      <h2 className="text-2xl font-bold text-white">{qr.name}</h2>
                    </div>
                  </div>
                  <p className={`text-lg font-semibold ${qr.textColor}`}>{qr.tagline}</p>
                  <p className="text-slate-400 leading-relaxed">{qr.description}</p>
                  <ul className="space-y-2">
                    {qr.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          className={`w-4 h-4 mt-0.5 ${qr.textColor} flex-shrink-0`}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-[420px] flex-shrink-0">
                  <div
                    className={`rounded-2xl border-2 ${qr.borderColor} ${qr.bgColor} p-12 flex items-center justify-center aspect-square`}
                  >
                    {/* Placeholder â€” replace with real screenshot when available */}
                    <QrCode className={`w-48 h-48 ${qr.textColor}`} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-6">
            Why no one else has this
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            Home builders manage three workflows that most software treats as separate problems:
            field operations, internal time tracking, and sales lead capture. We built one QR-based
            check-in primitive and pointed it at all three.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <MapPin className="w-6 h-6 text-emerald-400 mb-3" />
              <h3 className="font-bold text-white mb-2">GPS audit trail</h3>
              <p className="text-sm text-slate-400">
                Every scan is geotagged. Cuts disputes about who was where, when.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <Cloud className="w-6 h-6 text-cyan-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Weather logged</h3>
              <p className="text-sm text-slate-400">
                Conditions captured at scan time. Dispute pour-day delays with the receipts.
              </p>
            </div>
            <div className="rounded-xl border border-slate-800/60 bg-slate-900/40 p-6">
              <Camera className="w-6 h-6 text-violet-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Photos & webhooks</h3>
              <p className="text-sm text-slate-400">
                Vendors upload photos at check-in. Webhooks fire to your automation stack.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pairs with Vendor Activity Map */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4">
                <MapPin className="w-3.5 h-3.5" />
                PAIRS WITH
              </div>
              <h2 className="text-3xl font-black text-white mb-4">Vendor Activity Map</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Every QR scan becomes a pin. The Vendor Activity Map shows live check-ins
                across every community on a Google Maps view. Filter by date, filter by vendor.
                See who&apos;s currently on-site at a glance â€” refreshes every 30 seconds.
              </p>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  Real-time pins for vendor and PM check-ins
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  Stat cards: communities, on-site count, unique vendors today
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 text-cyan-400 flex-shrink-0" />
                  Activity feed sidebar of recent scans
                </li>
              </ul>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-900 aspect-video flex items-center justify-center">
              {/* Replace with /mockups/vendor-activity-map.png when available */}
              <MapPin className="w-24 h-24 text-cyan-400/40" />
            </div>
          </div>
        </div>
      </section>

      {/* AI Camera Events */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-800/60 bg-slate-900/40 p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <Camera className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Have cameras already? Skip the QR.
              </h2>
              <p className="text-slate-400 mb-4 leading-relaxed">
                Cornerstone&apos;s AI Jobsite Camera Events feature accepts webhook events from
                any camera, doorbell, gate sensor, or AI vision system â€” Verkada, Ring, custom
                IP cameras, anything that can fire an HTTP POST. When a vendor is detected
                on-site, the matching scheduled task auto-flips to In Progress. No QR scan
                required.
              </p>
              <Link
                href="/jobsite-ai"
                className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm"
              >
                Learn about Jobsite AI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
