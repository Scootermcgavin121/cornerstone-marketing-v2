import { Check, MessageCircle, BookOpen, Users, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "AI Support Agent â€” Instant Answers, Zero Wait Time | Cornerstone PM",
  description:
    "AI Support Agent is the always-on AI knowledge agent built into Cornerstone PM. Knows every feature, workflow, and permission. Answers buyer and team questions 24/7 in plain English - included on every plan.",
  alternates: { canonical: "https://www.cornerstonepm.ai/support-ai" },
};

const audiences = [
  {
    icon: Users,
    title: "Your team",
    desc: "Your superintendents, sales counselors, and admin staff get instant answers to \"how do I do X?\" without slacking you or filing a ticket. Onboarding goes from weeks to days.",
  },
  {
    icon: BookOpen,
    title: "Your buyers",
    desc: "Buyers in the buyer portal get 24/7 answers about their home, milestones, design selections, and the build process - before they pick up the phone.",
  },
  {
    icon: MessageCircle,
    title: "Your trades",
    desc: "Vendors and subs using the vendor portal get instant guidance on bid submission, scope items, and portal navigation. Less hand-holding, fewer support emails.",
  },
];

const examples = [
  { q: "How do I set up a vendor in Cornerstone?", a: "Walks you through the vendor creation flow, scope assignments, community linkage, and first bid invite - with direct links to the relevant app screens." },
  { q: "What roles have access to the options engine?", a: "Returns the actual role-permission matrix for the options engine, by tenant, so you know who can edit what." },
  { q: "Why didn't my budget auto-generate?", a: "Diagnoses the most common causes: missing structural options, locked floorplan, plan not yet in production status - and tells you exactly what to fix." },
  { q: "How do I reschedule a milestone task across all active homes?", a: "Explains the bulk-reschedule flow plus the notification preferences that control who gets pinged when dates shift." },
];

const features = [
  { title: "Trained on Cornerstone PM", desc: "Not a generic LLM. AI Support Agent is grounded in Cornerstone's actual feature documentation, workflows, and permission matrix - so the answers you get match the app you're actually using." },
  { title: "Every Feature Documented", desc: "Construction scheduling, sales pipeline, design center, purchasing, bidding, options engine, permitting, takeoffs, MLS listings, AI agents - all covered." },
  { title: "Workflow-Aware", desc: "Doesn't just describe a button - explains the multi-step workflows. \"Lock structural options â†’ auto-budget â†’ send to bid â†’ award â†’ PO\" is one conversation, not a wiki crawl." },
  { title: "Permission-Aware", desc: "Knows the role-permission matrix. \"Can a sales counselor edit base pricing?\" returns the actual answer for your tenant - not a generic doc page." },
  { title: "Always On", desc: "24/7 on every page of the app and the buyer portal. No SLA windows, no business hours, no \"someone will get back to you Monday.\"" },
  { title: "Plain English", desc: "Answers in the language you asked the question in. Buyer asks about \"countertops,\" team member asks about \"design center selections\" - both get the right answer." },
  { title: "Reduces Support Load", desc: "The hundreds of \"how do I...\" questions that used to ping you, your office manager, or your support inbox now resolve in chat. You get back to building." },
  { title: "On Every Page", desc: "Help bubble lives in the app shell. Click it from anywhere - it picks up the page context, so \"how does this work?\" actually understands what \"this\" is." },
  { title: "Per-Org Isolation", desc: "Your conversations stay in your tenant. The AI never sees other builders' data and your conversations never train models." },
  { title: "Faster Onboarding", desc: "New hires don't need a 2-week training week. They learn by asking. The AI walks them through every feature on demand." },
  { title: "Buyer Portal Coverage", desc: "Buyers ask \"when is my drywall walk?\" or \"what's a phase gate inspection?\" and get clear answers with their actual home's milestone data." },
  { title: "Included Everywhere", desc: "Starter, Builder, Pro, Pro+ - AI Support Agent is on every plan. No add-on, no usage caps, no surprise bill." },
];

const faq: FAQItem[] = [
  {
    q: "What is AI Support Agent?",
    a: "AI Support Agent is the always-on AI knowledge agent built into Cornerstone PM. It's trained on the platform's complete feature documentation, workflow guides, and permission matrix, so it can answer any \"how do I do X?\" question about Cornerstone in plain English - from a team member, a buyer, or a vendor - 24/7.",
  },
  {
    q: "How is this different from a chatbot like ChatGPT?",
    a: "ChatGPT doesn't know what a takeoff scope is, what a phase gate inspection means in your sequence, or who in your tenant can edit base pricing. AI Support Agent is grounded in Cornerstone's actual feature set, your workflows, and your permission matrix. The answers match the app you're actually using.",
  },
  {
    q: "Where does AI Support Agent live?",
    a: "Everywhere in the app. There's a help bubble in the app shell that opens chat from any page - and it picks up the page context, so asking \"how does this work?\" actually knows what \"this\" is. It's also in the buyer portal so buyers can self-serve answers about their home and the build process.",
  },
  {
    q: "What kinds of questions can it answer?",
    a: "Anything documented in Cornerstone PM: setting up vendors, creating bid requests, locking structural options, generating MLS listings, configuring permitting sequences, managing the options engine, running design center, the auto-budget flow, role permissions, notification settings, and the full purchasing â†’ bid â†’ PO pipeline. If a feature exists, AI Support Agent can explain it.",
  },
  {
    q: "Does it answer buyer questions too?",
    a: "Yes. Buyers using the buyer portal ask things like \"when is my drywall walk?\" or \"what's a phase gate?\" or \"can I still change my flooring?\" and AI Support Agent answers using the buyer's actual home data plus the platform's workflow knowledge.",
  },
  {
    q: "Is my data used to train the AI?",
    a: "No. AI Support Agent runs on a model with training disabled. Your conversations, your permission matrix, your tenant data - none of it leaves your tenant for training purposes. Each conversation is isolated.",
  },
  {
    q: "What plan is AI Support Agent on?",
    a: "Every plan. Starter ($149/mo), Builder ($299/mo), Pro ($499/mo), and Pro+ ($599/mo) all include AI Support Agent with no usage caps. It's the baseline AI that comes free with Cornerstone - the rest of the AI lineup (MLS Listing, Foreman AI, Blueprint AI, Bid Import AI) layers in at higher tiers.",
  },
  {
    q: "How does this reduce my support load?",
    a: "Most builder support tickets are \"how do I...\" questions - the kind a documented platform should answer instantly. AI Support Agent handles those automatically, so your team only escalates when something's actually broken or genuinely outside the docs. Builders running AI Support Agent in beta saw 60-80% deflection on routine \"how to\" tickets.",
  },
];

export default function SupportAiPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-16 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12)_0%,transparent_65%)]" />
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-3xl rounded-full" />
        <div className="relative max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
            <MessageCircle className="w-4 h-4" />
            AI-Powered &middot; Every Plan
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            Your always-on<br />
            <span className="text-cyan-400">AI knowledge agent.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 font-semibold max-w-3xl mx-auto mb-3">
            Every feature, every workflow, every permission &mdash; answered in seconds.
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Trained on Cornerstone PM. Lives on every page. Helps your team, your buyers, and your trades 24/7. Included on every plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-cyan-300 shadow-lg shadow-cyan-500/25 transition-all duration-200">
              Request Early Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ai-agents" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200">
              See All AI Agents
            </Link>
          </div>
        </div>
      </section>

      {/* Audiences */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Who it helps</div>
            <h2 className="text-3xl sm:text-4xl font-black">Three audiences. One always-on AI.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {audiences.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-cyan-500/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="text-xl font-bold mb-2">{a.title}</div>
                  <p className="text-sm text-slate-400 leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample questions */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">What it sounds like</div>
            <h2 className="text-3xl sm:text-4xl font-black">Real questions, real answers.</h2>
          </div>
          <div className="space-y-4">
            {examples.map((ex) => (
              <div key={ex.q} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-slate-400">You</span>
                  </div>
                  <p className="text-white font-medium pt-1">&ldquo;{ex.q}&rdquo;</p>
                </div>
                <div className="flex items-start gap-3 ml-6 pl-5 border-l-2 border-cyan-500/30">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 pt-1 leading-relaxed">{ex.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(34,211,238,0.08),transparent)]" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-6">
                <Zap className="w-3.5 h-3.5" />
                INDUSTRY FIRST
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                BuilderTrend has a help center.
                <br />
                CoConstruct has FAQ articles.
                <br />
                <span className="text-cyan-400">Cornerstone has a knowledge agent that talks back.</span>
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Not a search bar. Not a wiki. A real AI agent that knows your workflows, your permissions, and your build process &mdash; available 24/7 on every page, in every tenant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature list */}
      <section className="py-20 px-4 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">What AI Support Agent knows</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Trained on the full Cornerstone PM platform. Twelve capabilities, no add-ons.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-slate-900/60 border border-slate-800 p-6 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-start gap-3 mb-2">
                  <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="font-bold">{f.title}</div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed pl-8">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection items={faq} />

      {/* CTA */}
      <section className="py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black mb-6">Stop being the help desk.</h2>
          <p className="text-xl text-slate-400 mb-10">AI Support Agent ships on every plan. Free your team from &ldquo;how do I&hellip;&rdquo; questions for good.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-cyan-400 text-slate-900 font-bold text-lg hover:from-cyan-400 hover:to-cyan-300 shadow-lg shadow-cyan-500/25 transition-all duration-200">
              Request Early Access <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/ai-agents" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-slate-700 text-slate-300 font-semibold hover:border-slate-500 hover:text-white transition-all duration-200">
              See All AI Agents
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
