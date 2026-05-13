import { Zap, Shield, Globe } from "lucide-react";

export function InfrastructureSection() {
  return (
    <section className="relative py-20 px-4 border-t border-slate-800/60">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[24rem] h-[24rem] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[20rem] h-[20rem] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3.5 h-3.5" />
            Enterprise Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Your vendors get notified{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              instantly.
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            When a task date moves, every affected vendor gets an email in under a second &mdash; not
            minutes later. Entire batches of cascade notifications land within the same minute,
            powered by Cloudflare&apos;s global edge network.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-cyan-500/20 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Sub-second delivery</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Schedule changes trigger instant vendor emails. No queue delays, no batch
              processing &mdash; notifications arrive before your PM closes the tab.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-emerald-500/20 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Inbox, not spam</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Full SPF, DKIM, and DMARC authentication on every email. Enterprise-grade DNS
              configuration means your vendor notifications land where they should &mdash; the inbox.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-violet-500/20 transition-colors">
            <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">Built on Cloudflare</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our email infrastructure runs on the same global edge network trusted by millions of
              websites worldwide. Enterprise reliability at every price tier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
