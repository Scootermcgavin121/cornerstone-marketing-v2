import { Check, ArrowRight, Webhook, Camera, Bell, Truck, Cpu, Sparkles, Radio, Zap, Shield, Clock, Eye, MapPin, QrCode, Smartphone, ScanLine, Activity } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export const metadata = {
  title: "AI Jobsite Presence Detection for Home Builders | Cornerstone PM",
  description:
    "Vendor detected on site → matching task auto-flips to In Progress on the construction schedule. Camera-agnostic, sensor-agnostic. Works with any jobsite camera, doorbell, gate, GPS, or check-in app.",
  alternates: { canonical: "https://www.cornerstonepm.ai/jobsite-presence" },
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

export default function JobsitePresencePage() {
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
            Vendor shows up.<br />
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Task auto-starts.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            The plumber rolls onto the jobsite. Your schedule already knows.
          </p>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Detect a vendor on site &mdash; from any camera, any sensor, any access system &mdash; and Cornerstone
            instantly flips the matching task to <span className="text-emerald-400 font-semibold">In&nbsp;Progress</span>{" "}
            on the construction schedule. No phone calls. No manual check-ins.
          </p>
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
            <h2 className="text-3xl sm:text-4xl font-black mb-3">One endpoint. Any source.</h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              POST a presence event, get a task update. Standard REST, HMAC-signed, scoped API keys.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              </div>
              <code className="text-slate-400 text-xs font-mono">POST /api/ext/presence-events</code>
              <span className="ml-auto text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400">Beta</span>
            </div>
            <pre className="p-6 text-sm text-slate-300 overflow-x-auto leading-relaxed font-mono">
{`{
  "source": "camera" | "doorbell" | "gate" | "gps" | "app" | "qr" | "lpr" | "custom",
  "eventType": "arrived" | "departed",
  "siteId": "home_abc123",          // home, lot, or community ref
  "detectedAt": "2026-05-08T08:42:11Z",
  "vendor": {                        // any one is enough to match
    "vendorId": "ven_xyz",
    "name": "Tom's Plumbing",
    "licensePlate": "ABC-1234",
    "badgeId": "EMP-557"
  },
  "evidence": {
    "imageUrl": "https://...",
    "confidence": 0.94
  }
}`}
            </pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {[
              { evt: "presence.arrived", desc: "Vendor detected on site &middot; auto-starts matching task" },
              { evt: "presence.departed", desc: "Vendor left &middot; logs hours, can auto-complete task" },
              { evt: "presence.unknown", desc: "Unrecognized vehicle / person on a tracked site" },
            ].map((w) => (
              <div key={w.evt} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <code className="text-pink-300 text-xs font-mono font-bold block mb-2">{w.evt}</code>
                <span className="text-slate-400 text-xs leading-relaxed" dangerouslySetInnerHTML={{ __html: w.desc }} />
              </div>
            ))}
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
