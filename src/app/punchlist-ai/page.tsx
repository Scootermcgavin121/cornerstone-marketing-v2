import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight, Video, Sparkles, ListChecks, Zap, ShieldCheck, Clock, MapPin, Camera, Mail, Users } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { buildFeatureSchema } from "@/lib/schema-helpers";

const punchlistAiSchema = buildFeatureSchema({
  pageName: "Punchlist AI",
  pagePath: "/punchlist-ai",
  description:
    "Record a walkthrough video on your phone. Punchlist AI watches the video, identifies every defect and quality issue, tags severity and location (room, fixture, surface), and auto-creates a punch list in the home's build record — in seconds.",
  applicationSubCategory: "AI Construction Quality Inspection",
  keywords:
    "punch list software, AI punch list, construction punch list AI, walkthrough video analysis, home builder QC software, defect detection AI, construction quality control, automated punch list, home walkthrough AI, construction inspection software",
  featureList: [
    "Phone video walkthrough — no special hardware required",
    "AI defect detection from video frames",
    "Severity tagging (cosmetic, functional, critical)",
    "Location tagging by room and fixture",
    "Auto-attach punch items to the home's build record",
    "Auto-assign vendors to punch list tasks based on scope",
    "Group tasks for the same vendor into a single notification email",
    "Assignable punch items to trades",
    "Photo capture from key video frames as evidence",
    "Status tracking from open to verified-complete",
    "Multi-walkthrough comparison (pre-drywall, pre-closing, warranty)",
  ],
});

export const metadata = {
  title: "Punchlist AI — Walk the House, Get the Punchlist | Cornerstone PM™",
  description:
    "Record a walkthrough on your phone. Punchlist AI watches the video, identifies every issue, tags severity and location, and creates a punch list in your build in seconds. Built into Cornerstone PM™.",
  openGraph: {
    title: "Punchlist AI — Walk the House, Get the Punchlist",
    description:
      "Record a walkthrough. Punchlist AI watches the video and builds your punch list — severity tagged, location pinned, ready to assign.",
    images: ["/mockups/ss-punchlist-ai.jpg"],
  },
};

const howItWorks = [
  {
    step: "01",
    icon: Video,
    title: "Walk the house",
    desc: "Open the home in Cornerstone PM™. Tap Record. Walk the rooms and talk through what you see — \"replace this baseboard, repaint the trim above the window, the bottom shelf in the office needs to come out.\" Or upload a video you already recorded.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "Punchlist AI watches",
    desc: "The AI ingests the video and audio. It identifies every issue, transcribes your callouts, infers severity (critical / high / normal), pins the location (Kitchen, Office, Master Bath), and links it to the right scope (Trim, Paint, Drywall, etc.).",
  },
  {
    step: "03",
    icon: ListChecks,
    title: "Vendors auto-assigned, one email each",
    desc: "Every item lands in the home's Punch List with a thumbnail, severity tag, location pin, and scope. Punchlist AI auto-assigns the right vendor based on the scope, then groups every task for the same vendor into a single email. One vendor, one message, one clean checklist — instead of ten separate pings.",
  },
];

const whatItCatches = [
  { icon: Check, text: "Trim and millwork callouts" },
  { icon: Check, text: "Paint touch-ups and repaints" },
  { icon: Check, text: "Drywall, mud, and texture issues" },
  { icon: Check, text: "Cabinetry, doors, and hardware" },
  { icon: Check, text: "Flooring scratches, gaps, and transitions" },
  { icon: Check, text: "Tile, grout, and caulk" },
  { icon: Check, text: "Plumbing fixture install and finish" },
  { icon: Check, text: "Electrical outlet and trim plate issues" },
  { icon: Check, text: "Appliance install and alignment" },
  { icon: Check, text: "Cleanup and trash items" },
  { icon: Check, text: "Anything you call out by voice during the walk" },
];

const features = [
  {
    icon: Camera,
    title: "Video → Punch List in under 60 seconds",
    desc: "Most 10-minute walkthroughs are processed in under a minute. No clipboard. No retyping. No 'I'll add it when I get back to the office.'",
  },
  {
    icon: MapPin,
    title: "Auto-tagged location, scope, and severity",
    desc: "Punchlist AI doesn't just transcribe — it understands. It tags every item with the right room, the right trade scope, and the right severity so it lands in the right hands.",
  },
  {
    icon: ShieldCheck,
    title: "Voice + visual together",
    desc: "What you say AND what the camera sees both feed the AI. Point the lens, say the problem out loud — both signals are merged into one clean punch list entry.",
  },
  {
    icon: Clock,
    title: "Works on partial walkthroughs",
    desc: "Final walk? Pre-drywall walk? Vendor closeout walk? Punchlist AI handles all of them. Run it as many times as you want on a home — it adds to the existing list, doesn't overwrite.",
  },
  {
    icon: Zap,
    title: "Built into the app, not a bolt-on",
    desc: "This isn't a separate tool you have to learn. The punch list lives where your home lives — alongside your schedule, budget, and design selections. One source of truth.",
  },
  {
    icon: ListChecks,
    title: "Resolved tracking + photos",
    desc: "When a vendor fixes an item, mark it resolved and attach a photo of the fix. Your final walk closeout package is documentation-ready out of the box.",
  },
  {
    icon: Users,
    title: "Auto-assigns vendors by scope",
    desc: "Every punch item gets the right vendor automatically. Trim issues route to your trim carpenter. Paint touch-ups go to the painter. Plumbing fixtures hit the plumber. No manual triage — Punchlist AI already knows who owns each scope on this home.",
  },
  {
    icon: Mail,
    title: "One vendor, one email",
    desc: "Walk a house and find twelve issues for the painter? Punchlist AI groups every painter task into a single email — clean checklist, photos attached, severity and location for each. Your vendors get one message instead of twelve. Builders save the admin time. Vendors actually read it.",
  },
];

const useCases = [
  {
    when: "Pre-drywall walkthrough",
    who: "Superintendent",
    benefit:
      "Walk the framing, point out blocking issues, missing pipe penetrations, electrical placement problems — Punchlist AI captures every callout for the trades.",
  },
  {
    when: "Final walkthrough with the buyer",
    who: "Builder + Buyer",
    benefit:
      "Walk with the homeowner. They point out concerns. You record. Punchlist AI builds the closeout list automatically — no more 'we'll add that later' getting forgotten.",
  },
  {
    when: "Vendor closeout walk",
    who: "Project Manager",
    benefit:
      "Walk each finished scope with the vendor. Capture remaining work in one pass. Lock the punch list before final payment.",
  },
  {
    when: "Warranty walkthrough (11-month)",
    who: "Customer Care",
    benefit:
      "Record the homeowner's warranty items during the visit. The list is already built by the time you're back in the truck.",
  },
];

export default function PunchlistAIPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <JsonLd json={punchlistAiSchema} />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-3xl" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-medium uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>New · Punchlist AI</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Walk the house.
                <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Punchlist AI does the rest.
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Record a walkthrough on your phone. Punchlist AI watches the video, identifies every
                issue, tags severity and location, and creates a punch list inside the home — automatically.
                No clipboard. No retyping. No items forgotten on the drive back.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-lg font-semibold text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
                >
                  Get Beta Access
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/foreman"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg font-semibold text-white transition-all"
                >
                  See it inside Foreman AI
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-400">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Built into Cornerstone PM™</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Video + voice in one pass</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Severity + location auto-tagged</span>
              </div>
            </div>

            {/* Right: phone screenshot */}
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-2xl rounded-3xl" />
                <div className="relative bg-slate-900 rounded-3xl border border-slate-700 p-2 shadow-2xl">
                  <Image
                    src="/mockups/ss-punchlist-ai.jpg"
                    alt="Punchlist AI screen in the Cornerstone PM™ mobile app — shows Record, Upload Video, and Add Item buttons with a generated punch list item"
                    width={400}
                    height={800}
                    className="rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">How it works</h2>
            <p className="text-slate-400 text-lg">Three steps. About a minute total.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {howItWorks.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="relative bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
                >
                  <div className="text-5xl font-bold text-slate-800 mb-4">{step.step}</div>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What it catches */}
      <section className="py-20 px-4 border-t border-slate-800/60 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">What Punchlist AI catches</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Trained on real home-building walkthroughs. It understands the trades, the rooms,
                and the language your supers and vendors actually use on a jobsite.
              </p>
              <p className="text-slate-400 text-sm">
                The list below is a sample — not a hard limit. If you call it out on the video,
                Punchlist AI captures it.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-3">
              {whatItCatches.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-center gap-3 text-slate-300 text-sm">
                    <Icon className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Auto-vendor-assign showcase */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: phone detail screenshot */}
            <div className="relative flex justify-center order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-2xl rounded-3xl" />
                <div className="relative bg-slate-900 rounded-3xl border border-slate-700 p-2 shadow-2xl">
                  <Image
                    src="/mockups/ss-punchlist-ai-detail.jpg"
                    alt="Punch list item detail view in the Cornerstone PM\u2122 mobile app \u2014 shows a cabinet defect with auto-assigned vendor Premier Cabinetry matched to the Cabinets scope"
                    width={400}
                    height={780}
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Right: copy */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-300 text-xs font-medium uppercase tracking-wider mb-6">
                <Users className="w-3.5 h-3.5" />
                <span>Vendor routing, automated</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Auto-assigns the right vendor to every item.
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Every punch item gets a vendor automatically. Cabinet issue \u2192 your cabinet vendor.
                Paint touch-up \u2192 your painter. Plumbing fixture \u2192 the plumber. Punchlist AI
                already knows who owns each scope on this home \u2014 so the moment the item is
                created, it\u2019s routed to the right hands.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Scope-to-vendor mapping is per home \u2014 the cabinet vendor in Bayside isn\u2019t the same as the one in Eagles Landing, and Punchlist AI knows the difference.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>One walkthrough, twelve issues for the painter? Punchlist AI groups every painter task into a single email \u2014 photos, severity, location, all in one place.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Override anytime. The auto-assigned vendor is a smart default, not a lock \u2014 swap in any vendor with one tap.</span>
                </li>
                <li className="flex items-start gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Hit <span className="font-semibold text-amber-300">Send to Vendors</span> when the list is ready \u2014 every vendor gets their grouped task list in one shot.</span>
                </li>
              </ul>
              <p className="text-sm text-slate-400">
                No manual triage. No \u201cwho does this one go to?\u201d No spreadsheets. The list is
                already routed before you put the phone down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why it actually works</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Most "AI punch list" tools are glorified voice-to-text. Punchlist AI watches the
              video and understands construction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
                >
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 mb-4">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 px-4 border-t border-slate-800/60 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Every walk on the build</h2>
            <p className="text-slate-400 text-lg">
              Pre-drywall, final, vendor closeout, warranty — same workflow, every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((uc) => (
              <div
                key={uc.when}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded text-amber-300 text-xs font-semibold uppercase tracking-wider">
                    {uc.when}
                  </span>
                  <span className="text-slate-500 text-xs">{uc.who}</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{uc.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Foreman AI tie-in */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-violet-500/10 via-slate-900/60 to-amber-500/10 border border-slate-700 rounded-3xl p-10">
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/20 border border-violet-500/30">
                  <Sparkles className="w-7 h-7 text-violet-300" />
                </div>
              </div>
              <div>
                <div className="text-violet-300 text-xs font-semibold uppercase tracking-wider mb-2">
                  Powered by Foreman AI
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                  Punchlist AI is a Foreman skill — and Foreman has 100+ more.
                </h2>
                <p className="text-slate-300 leading-relaxed mb-6">
                  The same AI that builds your punch list also reads your blueprints, generates MLS
                  listings, compares vendor bids, scrapes Home Depot pricing, and runs profitability
                  reports — all from natural-language commands inside the app.
                </p>
                <Link
                  href="/foreman"
                  className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200 font-medium"
                >
                  See all 396+ Foreman AI skills
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
