import { Check, ArrowRight, Webhook, Camera, Bell, Truck, Cpu, Sparkles, Radio, Zap, Shield, Clock, Eye, MapPin, QrCode, Smartphone, ScanLine, Activity } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "Jobsite AI™ — Vendor Presence Detection for Home Builders | Cornerstone PM",
  description:
    "Jobsite AI™ detects when a vendor arrives on site — from any camera, doorbell, gate, GPS, or check-in app — and auto-flips the matching scheduled task to In Progress. Camera-agnostic, sensor-agnostic.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobsite-ai" },
};

const sources = [
  { icon: Camera, label: "Jobsite cameras", desc: "Sensera, OxBlue, EarthCam, Reolink, Verkada — any brand", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { icon: Bell, label: "Ring / Nest doorbells", desc: "Smart doorbells at the model home or trailer", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { icon: Shield, label: "Gate access & badge systems", desc: "Brivo, Openpath, ButterflyMX, gate keypads", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30" },
  { icon: MapPin, label: "GPS fleet tracking", desc: "Samsara, Verizon Connect, Geotab geofence triggers", color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30" },
  { icon: Smartphone, label: "Manual check-in apps", desc: "Vendor taps Arrived in the portal — counts the same", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30" },
  { icon: QrCode, label: "QR code scans", desc: "Yard sign QR / lockbox scan = arrival event", color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { icon: ScanLine, label: "License plate readers", desc: "Standalone LPR cameras or third-party plate APIs", color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  { icon: Zap, label: "Zapier / Make / n8n", desc: "Glue any sensor or webhook into Cornerstone", color: "text-orange-400", bg: "bg-orange-500/10", border: "border-orange-500/30" },
];

const features = [
  { icon: Activity, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/30", title: "Auto task start", desc: "The matching scheduled task on that home flips to In Progress the second the vendor is detected. No phone call. No app to open." },
  { icon: Clock, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/30", title: "Auto task complete", desc: "Departure event closes the task or logs hours on site. Real timestamps, not estimates." },
  { icon: Bell, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/30", title: "No-show alerts", desc: "Scheduled vendor doesn't appear by their start window? PM gets pinged before the day is lost." },
  { icon: Eye, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/30", title: "Unknown-vehicle alerts", desc: "Unrecognized truck on site? You know in minutes — not when something walks off the lot." },
  { icon: Camera, color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/30", title: "Photo evidence on the task", desc: "Snapshot from the source attaches to the task audit log automatically. Dispute-proof, every time." },
  { icon: Truck, color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/30", title: "Vendor scorecards", desc: "On-time %, average hours on site, no-show rate. Real performance data feeding bid-award decisions." },
];

export default function JobsiteAIPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.14)_0%,transparent_65%)]" />
        <div className="absolute top-40 left-1/4 w-[500px] h-[300px] bg-emerald-500/10 blur-3xl rounded-full" />
        <div className="absolute top-40 right-1/4 w-[500px] h-[300px] bg-violet-500/10 blur-3xl rounded-full" />
        <div className="relative max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Coming Soon &middot; Private Beta
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.05]">
            Jobsite AI<sup className="text-2xl sm:text-4xl lg:text-5xl align-super text-emerald-400 ml-1">™</sup>
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Vendor shows up. Task auto-starts.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            The plumber rolls onto the jobsite. Your schedule already knows.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Detect a vendor on site &mdash; from any camera, any sensor, any access system &mdash; and Cornerstone
            instantly flips the matching task to <span className="text-emerald-400 font-semibold">In&nbsp;Progress</span>{" "}
            on the construction schedule. No phone calls. No manual check-ins.
          </p>

          {/* Hours-on-site value prop */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="rounded-2xl bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 border border-emerald-500/30 p-5 backdrop-blur-sm">
              <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row text-left sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-300" />
                </div>
                <div className="flex-1">
                  <div className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-1">
                    🔥 Bonus: Real Hours-On-Site Tracking
                  </div>
                  <p className="text-white text-base sm:text-lg font-semibold leading-snug">
                    Arrival event starts the clock. Departure event stops it.
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-1">
                    Every vendor and trade gets logged hours on the job &mdash; automatically. No timecards. No “how long were you here?”
                    Real data feeding vendor scorecards, labor budget actuals, and bid-award decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className="px-8 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-lg hover:bg-emerald-300 transition-all duration-200 shadow-xl shadow-emerald-500/30 hover:-translate-y-0.5"
            >
              Request Beta Access &rarr;
            </Link>
            <Link
              href="/api-docs"
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              See the API
            </Link>
          </div>
          <p className="text-slate-500 text-sm mt-6 italic">
            We&rsquo;re the brain, not the eyes. Bring whatever you already have.
          </p>
        </div>
      </section>

      {/* Visual flow */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">The flow</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Five steps. Total elapsed time: under a minute.</p>
          </div>

          <div className="rounded-3xl bg-slate-900/60 border border-emerald-500/20 p-6 sm:p-10 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: "01", icon: Eye, title: "Detect", desc: "Camera, doorbell, gate, GPS, or app spots a vendor at the jobsite." },
                { step: "02", icon: Webhook, title: "Webhook", desc: "Source POSTs the event (image, plate, badge, geofence) to Cornerstone." },
                { step: "03", icon: Cpu, title: "Brain", desc: "Cornerstone identifies the vendor and finds the active task on that home." },
                { step: "04", icon: Activity, title: "Auto-start", desc: "Matching task flips to In Progress on the construction schedule. Audit log written." },
                { step: "05", icon: Bell, title: "Notify", desc: "PM gets a heads-up. Photo evidence attached. Hours start counting." },
              ].map((s, i) => {
                const Icon = s.icon;
                const isCenter = i === 2;
                return (
                  <div key={s.step} className="relative">
                    <div className={`p-5 rounded-2xl h-full transition-all ${isCenter ? "bg-emerald-500/10 border border-emerald-500/40" : "bg-slate-950/60 border border-slate-800"}`}>
                      <div className="flex items-center gap-2 mb-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${isCenter ? "bg-emerald-500/20 border border-emerald-500/40" : "bg-emerald-500/10 border border-emerald-500/30"}`}>
                          <Icon className={`w-4 h-4 ${isCenter ? "text-emerald-300" : "text-emerald-400"}`} />
                        </div>
                        <span className="text-emerald-400 text-xs font-black tracking-wider">{s.step}</span>
                      </div>
                      <div className="text-white font-black text-lg mb-1">{s.title}</div>
                      <p className="text-slate-400 text-xs leading-relaxed">{s.desc}</p>
                    </div>
                    {i < 4 && (
                      <div className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 items-center justify-center z-10">
                        <ArrowRight className="w-5 h-5 text-emerald-400/70" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Schedule before/after */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800">
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-3">Before detection</div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="w-2 h-2 rounded-full bg-slate-600" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">Plumbing Rough-In &mdash; Lot 14</div>
                    <div className="text-slate-500 text-xs truncate">Tom&rsquo;s Plumbing &middot; Scheduled today</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-[11px] font-black uppercase tracking-wider flex-shrink-0">Scheduled</span>
                </div>
              </div>
              <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/30">
                <div className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-3">After detection</div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-emerald-500/30">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm font-semibold truncate">Plumbing Rough-In &mdash; Lot 14</div>
                    <div className="text-emerald-300/80 text-xs truncate">Tom&rsquo;s Plumbing &middot; Started 8:42 AM &middot; Auto-detected</div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-black uppercase tracking-wider flex-shrink-0">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Source-agnostic */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.08),transparent)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-black uppercase tracking-widest mb-5">
              <Radio className="w-3.5 h-3.5" />
              Source-agnostic
            </div>
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              Works with any camera.<br />
              <span className="text-violet-400">Any sensor. Any access system.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We&rsquo;re the brain, not the eyes. If it can fire a webhook, Cornerstone can turn it into a task update.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {sources.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className={`w-10 h-10 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${s.color}`} />
                  </div>
                  <div className="text-white font-black text-sm mb-1">{s.label}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-slate-900/60 border border-dashed border-slate-700 text-center">
            <p className="text-slate-300 text-sm">
              <span className="text-violet-400 font-bold">Don&rsquo;t see your stack?</span>{" "}
              If it can POST a webhook, it works. <Link href="/api-docs" className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">See the API &rarr;</Link>
            </p>
          </div>
        </div>
      </section>

      {/* What it does */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-5xl font-black mb-4 leading-tight">
              The schedule <span className="text-emerald-400">runs itself.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Once presence detection is wired in, your construction schedule stops needing a babysitter.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all">
                  <div className={`w-11 h-11 rounded-xl ${f.bg} border ${f.border} flex items-center justify-center mb-4`}>
                    <Icon className={`w-5 h-5 ${f.color}`} />
                  </div>
                  <h3 className="text-white font-black text-lg mb-2">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why this matters */}
      <section className="py-20 px-4 bg-slate-900/40 border-y border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black uppercase tracking-widest mb-5">
                Why it matters
              </div>
              <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
                The status of your jobs<br />
                <span className="text-emerald-400">stops being a guess.</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Today, &ldquo;is the framer there yet?&rdquo; is a phone call. Tomorrow, it&rsquo;s a notification.
                Schedule status reflects what&rsquo;s actually happening on the lot &mdash; in real time, with photo
                evidence, with no extra work for your supers or your subs.
              </p>
              <div className="space-y-3">
                {[
                  "Zero manual check-ins. The site reports itself.",
                  "Real start times — not what someone remembered to type at 5 PM.",
                  "Photo evidence auto-attached to every task transition.",
                  "Vendor scorecards built on facts, not opinions.",
                ].map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900/80 to-violet-500/10 border border-emerald-500/20 p-8">
                <div className="text-emerald-400 text-xs font-black uppercase tracking-widest mb-4">No competitor ships this</div>
                <div className="space-y-4">
                  {[
                    { name: "Buildertrend", val: "Manual check-ins only" },
                    { name: "JobTread", val: "Manual check-ins only" },
                    { name: "Procore", val: "Manual check-ins only" },
                    { name: "CoConstruct", val: "Manual check-ins only" },
                    { name: "Cornerstone PM", val: "Auto-detect from any source", highlight: true },
                  ].map((c) => (
                    <div
                      key={c.name}
                      className={`flex items-center justify-between p-3 rounded-xl border ${
                        c.highlight
                          ? "bg-emerald-500/10 border-emerald-500/40"
                          : "bg-slate-950/60 border-slate-800"
                      }`}
                    >
                      <span className={`font-semibold text-sm ${c.highlight ? "text-emerald-300" : "text-slate-300"}`}>
                        {c.name}
                      </span>
                      <span className={`text-xs font-bold ${c.highlight ? "text-emerald-400" : "text-slate-500"}`}>
                        {c.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For developers */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-black uppercase tracking-widest mb-5">
              <Webhook className="w-3.5 h-3.5" />
              For developers &amp; integrators
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">Two endpoints. Any source.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Register a camera once. Stream presence events forever. Standard REST, HMAC-signed, scoped API keys.
            </p>
            <div className="inline-flex items-center gap-2 mt-5 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Check className="w-3.5 h-3.5" />
              Live in private beta &middot; endpoints are real
            </div>
          </div>

          {/* Step 1: Register a camera */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-300 text-sm font-black">1</div>
              <h3 className="text-white text-xl font-black">Register a camera to a home</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 ml-11">
              One-time setup. After this, every event from this camera auto-resolves to the right home &mdash;
              <span className="text-emerald-400"> no <code className="text-emerald-300 bg-emerald-500/10 px-1 rounded">homeId</code> needed in webhook calls.</span>
            </p>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                </div>
                <code className="text-emerald-300 text-xs font-mono font-bold">POST</code>
                <code className="text-slate-300 text-xs font-mono">/api/ext/cameras</code>
                <span className="ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">Beta</span>
              </div>
              <pre className="p-6 text-sm text-slate-300 overflow-x-auto leading-relaxed font-mono">
{`Authorization: Bearer {api_key}
Content-Type: application/json

{
  "cameraId": "cam_lot25_entrance",
  "name": "Lot 25 Entrance Camera",
  "homeId": "h456",
  "provider": "sensera"
}`}
              </pre>
            </div>
          </div>

          {/* Step 2: Send a presence event */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center text-cyan-300 text-sm font-black">2</div>
              <h3 className="text-white text-xl font-black">Send a presence event</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 ml-11">
              Vendor arrives. Camera POSTs the event. Cornerstone auto-resolves the home, finds the active task, flips it to In Progress.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Request */}
              <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
                <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center gap-3">
                  <code className="text-cyan-300 text-xs font-mono font-bold">POST</code>
                  <code className="text-slate-300 text-xs font-mono">/api/ext/jobsite-events</code>
                  <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-slate-500">Request</span>
                </div>
                <pre className="p-5 text-xs text-slate-300 overflow-x-auto leading-relaxed font-mono">
{`{
  "eventType": "vehicle_detected",
  "timestamp": "2026-05-08T08:47:00Z",
  "camera": {
    "id": "cam_lot25_entrance",
    "name": "Lot 25 Entrance",
    "location": "Bayside Preserve Lot 25"
  },
  "detection": {
    "vendorName": "Sussex Framing Co",
    "confidence": 0.94,
    "imageUrl": "https://your-camera.com/snap.jpg"
  }
}`}
                </pre>
              </div>
              {/* Response */}
              <div className="rounded-2xl bg-emerald-500/5 border border-emerald-500/30 overflow-hidden">
                <div className="px-5 py-3 border-b border-emerald-500/30 bg-emerald-500/10 flex items-center gap-3">
                  <code className="text-emerald-300 text-xs font-mono font-bold">200</code>
                  <code className="text-emerald-200 text-xs font-mono">application/json</code>
                  <span className="ml-auto text-[10px] font-black uppercase tracking-widest text-emerald-400">Response</span>
                </div>
                <pre className="p-5 text-xs text-emerald-100/90 overflow-x-auto leading-relaxed font-mono">
{`{
  "matched": true,
  "vendor": {
    "id": "v123",
    "name": "Sussex Framing Co"
  },
  "home": {
    "id": "h456",
    "address": "5 Bayside Way"
  },
  "tasksUpdated": [{
    "id": "t789",
    "name": "First Floor Wall Framing",
    "status": "IN_PROGRESS",
    "previousStatus": "NOT_STARTED"
  }],
  "event": "vendor.arrived"
}`}
                </pre>
              </div>
            </div>
          </div>

          {/* Step 3: Departure */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-500/15 border border-violet-500/40 flex items-center justify-center text-violet-300 text-sm font-black">3</div>
              <h3 className="text-white text-xl font-black">Vendor departure</h3>
            </div>
            <p className="text-slate-400 text-sm mb-4 ml-11">
              Same endpoint, different <code className="text-violet-300 bg-violet-500/10 px-1 rounded">eventType</code>. Closes the task or logs hours on site.
            </p>
            <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center gap-3">
                <code className="text-violet-300 text-xs font-mono font-bold">POST</code>
                <code className="text-slate-300 text-xs font-mono">/api/ext/jobsite-events</code>
              </div>
              <pre className="p-5 text-xs text-slate-300 overflow-x-auto leading-relaxed font-mono">
{`{
  "eventType": "vehicle_departed",
  "timestamp": "2026-05-08T15:30:00Z",
  "camera": { "id": "cam_lot25_entrance" },
  "detection": { "vendorName": "Sussex Framing Co" }
}`}
              </pre>
            </div>
          </div>

          {/* Camera CRUD */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/40 flex items-center justify-center text-amber-300 text-sm font-black">4</div>
              <h3 className="text-white text-xl font-black">Manage cameras</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-emerald-300 text-xs font-mono font-bold">GET</code>
                  <code className="text-slate-300 text-xs font-mono">/api/ext/cameras</code>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">List every camera registered to your account, with their home assignments.</p>
              </div>
              <div className="rounded-xl bg-slate-900/60 border border-slate-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-rose-300 text-xs font-mono font-bold">DELETE</code>
                  <code className="text-slate-300 text-xs font-mono">/api/ext/cameras?id=xxx</code>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed">Deactivate a camera. Existing event history is preserved.</p>
              </div>
            </div>
          </div>

          {/* Home resolution priority */}
          <div className="mb-10 rounded-2xl bg-gradient-to-br from-emerald-500/5 via-slate-900/60 to-cyan-500/5 border border-emerald-500/20 p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-black text-xl mb-2">How Cornerstone resolves the home</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every event runs through a 4-level fallback chain. The matching engine tries each in order until
                  it locks onto the right home &mdash; so partial data still works, and registered cameras work hands-free.
                </p>
              </div>
            </div>
            <div className="space-y-3 ml-0 sm:ml-14">
              {[
                { n: "01", title: "Registered camera → home mapping", desc: "Best path. Camera ID matches a registered camera; home is implicit. No homeId required in the event.", best: true },
                { n: "02", title: "Direct homeId in the event body", desc: "Pass homeId explicitly when the source already knows it (e.g. vendor app check-in)." },
                { n: "03", title: "communityId → finds home", desc: "Community-level event resolves to the active home in that community when only one is in flight." },
                { n: "04", title: "camera.location → fuzzy match", desc: "Free-text location string fuzzy-matches against community names. Last-resort fallback." },
              ].map((r) => (
                <div key={r.n} className={`flex items-start gap-4 p-4 rounded-xl ${r.best ? "bg-emerald-500/10 border border-emerald-500/40" : "bg-slate-950/50 border border-slate-800"}`}>
                  <span className={`text-xs font-black tracking-wider flex-shrink-0 mt-0.5 ${r.best ? "text-emerald-300" : "text-slate-500"}`}>{r.n}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className={`font-black text-sm ${r.best ? "text-emerald-200" : "text-white"}`}>{r.title}</span>
                      {r.best && (
                        <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-emerald-400 text-slate-900">Recommended</span>
                      )}
                    </div>
                    <p className={`text-xs leading-relaxed ${r.best ? "text-emerald-100/80" : "text-slate-400"}`}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-slate-400 text-sm mt-5 ml-0 sm:ml-14 italic">
              Translation: register the camera once, then every event from it auto-resolves to the right home.
              Set it up in 30 seconds, then forget it exists.
            </p>
          </div>

          {/* Webhook events */}
          <div className="mb-8">
            <h3 className="text-white font-black text-lg mb-4 text-center">Webhook events fired</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { evt: "vendor.arrived", desc: "Vendor detected on site &middot; matching task auto-starts" },
                { evt: "vendor.departed", desc: "Vendor left &middot; logs hours, can auto-complete task" },
                { evt: "presence.unknown", desc: "Unrecognized vehicle or person on a tracked site" },
              ].map((w) => (
                <div key={w.evt} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <code className="text-pink-300 text-xs font-mono font-bold block mb-2">{w.evt}</code>
                  <span className="text-slate-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: w.desc }} />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/api-docs" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold">
              Full API reference <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 text-center border-t border-slate-800/60 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_30%,rgba(16,185,129,0.12),transparent)]" />
        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 leading-tight">
            Want the schedule<br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">to start running itself?</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Join the private beta. Limited slots while we validate the matching engine across camera, sensor,
            and access-system providers in the field.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-emerald-400 text-slate-900 font-bold text-xl hover:bg-emerald-300 transition-all duration-200 shadow-xl shadow-emerald-500/30"
          >
            Request Beta Access <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-slate-500 text-xs mt-4">No credit card required &middot; Beta limited to 100 builders</p>
        </div>
      </section>
    </div>
  );
}
