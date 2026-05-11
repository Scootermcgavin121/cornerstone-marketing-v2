import type { Metadata } from "next";
import Image from "next/image";
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
  Plane,
  Radio,
  Smartphone,
  CloudRain,
  Bell,
  Activity,
  Crosshair,
  ShieldCheck,
  Eye,
  Zap,
  PlayCircle,
  Workflow,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Real-Time Construction Command Center | Cornerstone PM",
  description:
    "The construction PM platform that turns your phone into a real-time command center. Live vendor check-ins, weather conditions, GPS audit trails, and Google Maps presence pinned across every community — manage your entire build from a beach 1,500 miles away. Triple QR ecosystem (vendor, PM, model home buyer) feeds it all. No app install required.",
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
      "Every community and home gets its own unique QR code. Vendors scan with any phone — no app install, no Cornerstone login. GPS coordinates, timestamp, and weather conditions are captured automatically. Check-in and check-out times build a verifiable hours-on-site record.",
    bullets: [
      "GPS + timestamp + weather captured on every scan",
      "Hours-on-site tracked automatically (check-in → check-out)",
      "Photo upload at check-in — up to 10 photos per visit",
      "Configurable safety acknowledgment per community",
      "Worker headcount log for crew sizes",
      "Webhook events: vendor.arrived, vendor.departed",
      'Printable 11×8.5" signs auto-generated for every home',
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
      "PMs, permitting agents, and inspectors scan at the construction trailer when they arrive. GPS-validated presence logging feeds the timesheet system — actual on-site presence is aligned below the timecard grid so managers can validate reported hours.",
    bullets: [
      "GPS-validated presence logs",
      "Timesheet integration — actual presence vs. reported hours",
      "Stops \"I was on-site all day\" entries that don't match the GPS record",
      "Per-community QR codes for multi-subdivision builders",
      "Inspector workflows — log site visits with photo evidence",
      "All scans attributable to a specific user account",
    ],
  },
  {
    id: "model",
    name: "Sales Model Home QR",
    audience: "Walk-In Buyers + Sales Reps",
    color: "from-violet-500 to-pink-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    textColor: "text-violet-400",
    icon: Users,
    tagline: "Goodbye, paper sign-in sheet. Hello, model-home accountability.",
    description:
      "One QR code at every model home entrance, two jobs. Walk-in buyers self-register on their own phone \u2014 returning visitors are recognized (\"Welcome back!\") and every scan auto-creates a Lead with instant agent notification. Sales reps scan the same code when they arrive and leave, so you finally know who actually opened the model this Saturday and who left two hours early. Both check-ins pin to the model on the live map \u2014 no GPS needed, we already know the model\u2019s address.",
    bullets: [
      "Buyer self-registration: first-time vs. returning recognition",
      "Captures name, email, phone, \"How did you hear about us?\"",
      "Lead auto-created and tied to community + assigned to model\u2019s sales agent",
      "Sales agent gets instant in-app + email notification",
      "Sales-rep check-in/out at the model = real hours worked, not self-reported",
      "Catches reps who showed up late, left early, or never opened the model",
      "Both buyer pins and rep presence appear on the Sales Command Center map",
      "No more paper sign-in sheets to retype on Monday",
      "Foundation for nurture sequences and follow-up automation",
    ],
  },
];

const stats = [
  { label: "Map refresh interval", value: "30 sec" },
  { label: "Audiences served", value: "3" },
  { label: "App installs required", value: "Zero" },
  { label: "Captured per scan", value: "GPS + time + weather" },
];

const commandCenterPillars = [
  {
    icon: Activity,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    title: "Live everywhere, at once",
    body: "Every check-in, every scan, every status update streams to a single map and feed. See who’s on which jobsite, in which community, right now. Refreshes every 30 seconds. Same view on desktop, tablet, and phone.",
  },
  {
    icon: CloudRain,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    title: "Weather built in, not bolted on",
    body: "Real-time conditions captured on every QR scan. Forecast overlays on the schedule. Pour-day weather logged forever — dispute delays with receipts, not memory. Same kind of weather + position intel militaries use to plan operations, pointed at your jobsite instead.",
  },
  {
    icon: Bell,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    title: "Notifications find you, not the office",
    body: "Vendor arrived. Permit issued. Inspection failed. Buyer just walked into the model. Every event you care about lands on your phone in real time — push, email, SMS, your call. Foreman AI can rebroadcast through webhooks to Twilio, Bland, Retell, or your own automation stack.",
  },
  {
    icon: Smartphone,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    title: "Built mobile-first, not mobile-after",
    body: "Most construction software is a desktop dashboard with a sad companion app. We built every screen to work in your hand — the map, the schedule, the bid comparisons, the buyer portal, Foreman AI. Pull it up from the truck, the jobsite, or the dinner table.",
  },
];

export default function QRPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(16,185,129,0.12),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-6">
            <Radio className="w-3.5 h-3.5" />
            REAL-TIME COMMAND CENTER
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Manage your entire build
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              from a beach 1,500 miles away.
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-6">
            Live vendor check-ins on a Google Maps view. Weather logged on every scan. Real-time
            push notifications when a permit drops, a buyer walks into the model, or framing
            kicks off. Every audience, every event, every community — streaming to your phone.
          </p>
          <p className="text-base text-slate-500 italic max-w-2xl mx-auto mb-6">
            One builder put it best: <span className="text-white not-italic font-semibold">&ldquo;It&apos;s like some shit the military would use.&rdquo;</span> Yeah. Kind of the point.
          </p>
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-sm font-semibold">
            <Plane className="w-4 h-4" />
            Powered by a triple QR check-in ecosystem. No app install. No login.
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

      {/* Ops-room reality check */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/40 via-slate-950 to-cyan-950/30 p-8 md:p-12 relative overflow-hidden">
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
                <Crosshair className="w-3.5 h-3.5" />
                Ops-Room Mentality
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
                Built like the systems that run actual operations.
              </h2>
              <p className="text-slate-300 leading-relaxed mb-4">
                Live map of every asset. Geotagged check-ins with timestamp + weather + photo.
                Audit trail on every action. Push alerts on every event. Webhook fan-out to
                downstream systems.
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">
                That&apos;s the same vocabulary military and emergency-response ops rooms use —
                and exactly nothing about it is normal in construction software. Most builders
                are still on spreadsheets, group texts, and paper sign-in sheets. We pointed a
                real situational-awareness stack at the home-building workflow and called it a
                day.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  Situational awareness
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                  <Radio className="w-3.5 h-3.5" />
                  Live comms
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-violet-500/30 text-violet-300 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Audit trail
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <CloudRain className="w-3.5 h-3.5" />
                  Weather intel
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6 backdrop-blur-sm shadow-2xl shadow-emerald-500/10">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Live Feed</span>
                  </div>
                  <span className="text-slate-500 text-[10px] font-mono">UTC · 30s refresh</span>
                </div>
                <ul className="space-y-3 text-sm font-mono">
                  <li className="flex items-start gap-3">
                    <span className="text-emerald-400 text-xs mt-0.5">●</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white">VENDOR ON-SITE → TASK STARTED</div>
                      <div className="text-slate-500 text-xs truncate">Summit Roofing · Roof Dry-In auto-flipped to In Progress · 64°F</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-cyan-400 text-xs mt-0.5">●</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white">PERMIT ISSUED</div>
                      <div className="text-slate-500 text-xs truncate">Harbor View Lot 14 · framing unblocked</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-violet-400 text-xs mt-0.5">●</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white">BUYER AT MODEL</div>
                      <div className="text-slate-500 text-xs truncate">Marsh Harbor Model · Lead auto-created</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-400 text-xs mt-0.5">●</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-white">WEATHER ALERT</div>
                      <div className="text-slate-500 text-xs truncate">Rain 80% Thu · 3 pour-day tasks at risk</div>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-center text-slate-500 text-xs italic mt-3">
                Representative feed. Real ones include vendor names, GPS pins, and one-tap actions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Command Center pillars */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4">
              <Radio className="w-3.5 h-3.5" />
              FOUR PILLARS OF REMOTE COMMAND
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Real-time, weather-aware, mobile-first.
            </h2>
            <p className="text-slate-400 text-lg">
              Cornerstone isn’t a dashboard you check at the end of the day. It’s a live
              command center that streams every event you care about — to your phone, your
              tablet, your laptop — the second it happens. From anywhere.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {commandCenterPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-800/60 bg-slate-900/40 p-6 hover:border-slate-700 transition-colors"
                >
                  <div className={`w-12 h-12 rounded-xl ${p.bg} border ${p.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-6 h-6 ${p.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{p.body}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 max-w-3xl mx-auto p-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 text-center">
            <div className="flex items-center justify-center gap-2 mb-2 text-amber-300">
              <Plane className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">The Beach Test</span>
            </div>
            <p className="text-white text-lg font-semibold mb-2">
              Could you run your build from 1,500 miles away?
            </p>
            <p className="text-slate-400 text-sm">
              With Cornerstone, the answer is yes. Same map, same feed, same notifications,
              whether you’re in the trailer, the truck, or a hammock in Cabo. Builders use
              Cornerstone to manage active jobsites while on vacation. That isn’t a feature
              we tacked on — it’s the product’s spine.
            </p>
          </div>
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
                    {/* Placeholder — replace with real screenshot when available */}
                    <QrCode className={`w-48 h-48 ${qr.textColor}`} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The scan-to-schedule magic */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-slate-950 to-cyan-950/20 p-8 md:p-12 relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              The Killer Feature Hiding In Plain Sight
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
              The vendor scans. The schedule updates itself.
            </h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Every other construction platform asks <span className="text-white italic">somebody</span> to remember to flip the task to In Progress. Cornerstone doesn&apos;t. The moment a vendor scans the jobsite QR, the scheduled task auto-flips to <span className="text-emerald-400 font-bold">In Progress</span> — downstream tasks cascade, the PM gets pinged, the homeowner portal updates, and the activity feed lights up. <span className="text-white font-semibold">Zero clicks. Zero forgotten updates. Zero stale schedules.</span>
            </p>
          </div>
          {/* The cascade chain */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 md:gap-2 items-stretch">
            <div className="md:col-span-1 rounded-2xl border border-emerald-500/30 bg-slate-900/60 p-5 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center">
                <QrCode className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Step 1</div>
              <div className="text-white font-semibold text-sm">Vendor scans the QR</div>
              <div className="text-slate-500 text-xs mt-1">Arrives at the jobsite, points phone at sign</div>
            </div>
            <div className="hidden md:flex items-center justify-center text-emerald-400">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="md:col-span-1 rounded-2xl border border-cyan-500/30 bg-slate-900/60 p-5 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center">
                <PlayCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">Step 2</div>
              <div className="text-white font-semibold text-sm">Task auto-starts</div>
              <div className="text-slate-500 text-xs mt-1">If the scheduled task hasn&apos;t kicked off yet, it flips to In Progress</div>
            </div>
            <div className="hidden md:flex items-center justify-center text-cyan-400">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="md:col-span-1 rounded-2xl border border-violet-500/30 bg-slate-900/60 p-5 text-center">
              <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-violet-500/15 border border-violet-500/40 flex items-center justify-center">
                <Workflow className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-[10px] uppercase tracking-widest text-violet-400 font-bold mb-1">Step 3</div>
              <div className="text-white font-semibold text-sm">Downstream cascade fires</div>
              <div className="text-slate-500 text-xs mt-1">Dependent tasks shift, PM gets push, buyer portal updates, webhooks fan out</div>
            </div>
          </div>
          <div className="mt-8 max-w-3xl mx-auto text-center">
            <p className="text-slate-400 text-sm leading-relaxed">
              Pair it with our <Link href="/jobsite-ai" className="text-emerald-400 hover:text-emerald-300 underline underline-offset-4 decoration-emerald-500/30">AI Jobsite Camera Events</Link> and tasks can auto-start the moment a vendor&apos;s truck pulls into the cul-de-sac — no scan required. Same downstream cascade. Same zero clicks. The schedule literally manages itself while you&apos;re on the beach.
            </p>
          </div>
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
        <div className="max-w-6xl mx-auto rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 sm:p-8 md:p-12">
          {/* Header + intro */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold mb-4">
              <Radio className="w-3.5 h-3.5" />
              THE COMMAND CENTER VIEW
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Vendor Activity Map</h2>
            <p className="text-slate-400 leading-relaxed mb-3">
              Every QR scan becomes a pin. Live Google Maps view of every vendor and PM check-in
              across every community, with weather overlays and a live activity feed. Filter by
              date, filter by vendor. See who&apos;s on-site right now — refreshes every 30 seconds.
            </p>
            <p className="text-cyan-400/90 text-sm font-semibold">
              Same live command center on desktop, tablet, and phone. Pull it up from the truck,
              the trailer, the office, or a hammock in Cabo — your build runs the same.
            </p>
          </div>

          {/* Side-by-side: desktop map + phone */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-6 lg:gap-8 items-center mb-10">
            {/* Desktop screenshot */}
            <div className="relative rounded-xl border border-slate-700 bg-slate-900 overflow-hidden shadow-2xl shadow-cyan-500/10">
              <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-cyan-500/40 text-cyan-400 text-[10px] font-bold tracking-widest uppercase">
                Desktop View
              </div>
              <Image
                src="/mockups/ss-vendor-activity-map-desktop.jpg"
                alt="Vendor Activity Map desktop view - Google Maps satellite of coastal Delaware with pinned communities, stat cards showing 10 communities and 1 on-site check-in, and live activity feed showing Summit Roofing DE on-site at Bayside Preserve"
                width={1280}
                height={1085}
                className="w-full h-auto block"
                sizes="(max-width: 1024px) 100vw, 720px"
                priority
              />
            </div>
            {/* Phone screenshot */}
            <div className="flex justify-center">
              <div className="relative max-w-[260px] w-full rounded-[2rem] border-4 border-slate-700 bg-slate-900 overflow-hidden shadow-2xl shadow-cyan-500/20">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-sm border border-emerald-500/40 text-emerald-400 text-[10px] font-bold tracking-widest uppercase">
                  In Your Pocket
                </div>
                <Image
                  src="/mockups/ss-vendor-activity-map.jpg"
                  alt="Vendor Activity Map mobile view - same live map running on a phone with stat cards and activity feed"
                  width={591}
                  height={1280}
                  className="w-full h-auto block"
                  sizes="(max-width: 1024px) 65vw, 260px"
                />
              </div>
            </div>
          </div>

          {/* Bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-sm text-slate-300">
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
                any camera, doorbell, gate sensor, or AI vision system — Verkada, Ring, custom
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
