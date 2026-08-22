import {
  Check,
  X,
  Sparkles,
  Palette,
  Wand2,
  ShieldCheck,
  Layers,
  Lock,
  ArrowRight,
  Bot,
  TrendingUp,
  Package,
  Image as ImageIcon,
  MessageSquare,
  Clock,
  Home as HomeIcon,
  Database,
  Ruler,
  Fingerprint,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { buildFeatureSchema } from "@/lib/schema-helpers";
import { STYLESMITH_THEME_COUNT, STYLESMITH_QUIZ_ROUNDS } from "@/lib/pricing";

const styleSmithSchema = buildFeatureSchema({
  pageName: "StyleSmith AI™ — AI Interior Design Agent for Home Builders",
  pagePath: "/stylesmith",
  description:
    "StyleSmith AI™ is Cornerstone PM's in-app AI interior design agent. It composes a complete, coherent design-selection set for a specific home by style theme — one palette, one finish family, flooring that carries room to room — and writes it into the home's real Design Center selections. Included with Pro+ and Enterprise.",
  applicationSubCategory: "AI Interior Design Agent for Home Builders",
  keywords:
    "AI interior design, AI design selections, home builder design center AI, AI interior designer software, design selection automation, style themes, buyer style quiz, AI design packages, new home design center, builder design agent",
  offerNote:
    "Included with Cornerstone PM Pro+ ($599/mo) and Enterprise. Not available on Starter, Builder, or Pro.",
  featureList: [
    `${STYLESMITH_THEME_COUNT} curated style themes — Modern Farmhouse, Coastal, Contemporary, Organic Modern, Scandinavian, Industrial Loft, Classic Traditional, Transitional, Mid-Century Modern, Craftsman`,
    "Composes only from the builder's own live design-center catalog — every suggestion is a real, orderable product the builder already sells, never stock imagery or a generic AI mood board",
    "Second live source: the builder's curated Style Inspiration library, vision-tagged automatically",
    "Upgrade-level ceiling — 'cap it at Upgrade II' constrains the entire composed look before it composes",
    "Composes a complete whole-home selection set for a specific home in one pass",
    "One palette family and one metal/finish family per home — no mismatched hardware",
    "Flooring continuity room to room",
    "Spec-level guardrails — never selects below the home's included tier",
    "Honest gaps: reports 'no in-spec candidate' instead of substituting out of band",
    "Live retail pricing on every proposed selection — no cost data, no invented numbers",
    "AI-tagged catalog: every design option style-scored across all 10 themes, re-tagged automatically every night",
    `Buyer style quiz — ${STYLESMITH_QUIZ_ROUNDS} photo this-or-that rounds plus style sliders, in the homeowner portal (early access, enabled per account)`,
    "Tailored per buyer rather than a fixed bundle — two buyers on the same street don't end up with the same house",
    "Also drafts static Design Packages on demand, so builders get both bespoke composition and a package factory",
    "Buyer style profile biases the composition toward the buyer's taste before the design appointment",
    "Explains why a look works, swaps individual selections, starts over clean",
    "Applies to the home's real Design Center selections through the same guarded write path as manual selection",
    "Never overwrites approved or locked selections, never auto-locks",
    "Drafts full builder Design Packages (theme + spec level) as reviewable drafts",
    "Available as Foreman AI™ tools",
    "Trend backbone from builder-uploaded inspiration images, vision-tagged and aggregated per theme",
    "Weekly trend refresh from design-press RSS and search-trend signals — no social media APIs",
  ],
});

export const metadata = {
  title: "StyleSmith AI™ — AI Interior Design Agent | Cornerstone PM™",
  description:
    "StyleSmith AI™ composes a complete design-selection set for any home from your own live product catalog — real orderable products, not stock imagery or a generic mood board. 10 style themes, capped to any upgrade level, written straight into your Design Center. Pro+ and Enterprise.",
};

const themes = [
  { name: "Modern Farmhouse", finish: "Matte black hardware, warm light oak" },
  { name: "Coastal", finish: "Brushed nickel and chrome, whitewashed woods" },
  { name: "Contemporary", finish: "Polished chrome and matte black, high-gloss surfaces" },
  { name: "Organic Modern", finish: "Unlacquered brass and aged bronze, honed stone" },
  { name: "Scandinavian", finish: "Matte black or matte white, pale blond woods" },
  { name: "Industrial Loft", finish: "Blackened metal and oiled steel, concrete tones" },
  { name: "Classic Traditional", finish: "Brushed nickel and chrome, polished brass accents" },
  { name: "Transitional", finish: "Brushed nickel throughout — the flagship finish" },
  { name: "Mid-Century Modern", finish: "Brass and warm gold, walnut and teak" },
  { name: "Craftsman", finish: "Oil-rubbed bronze, stained wood, hammered metals" },
];

const steps = [
  {
    n: "1",
    icon: Palette,
    title: "Pick a look",
    body:
      "Open the StyleSmith AI™ chat, name a home, and pick one of the style themes — or let the buyer's own style profile drive it. Ask in plain English: “compose a Modern Farmhouse look for 116 Bayside Drive.”",
  },
  {
    n: "2",
    icon: Wand2,
    title: "It composes the whole house",
    body:
      "Every pending design placeholder on that home gets filled in one pass — flooring, tile, cabinets, counters, plumbing, lighting, hardware. Not a mood board. Real options out of your real catalog, with live retail pricing.",
  },
  {
    n: "3",
    icon: MessageSquare,
    title: "Review, ask why, swap",
    body:
      "Ask it why a look works and it tells you — the palette family, the finish family, the flooring logic. Don't like one pick? Swap that single selection and the rest of the composition stays intact. Start over clean any time.",
  },
  {
    n: "4",
    icon: HomeIcon,
    title: "Apply it for real",
    body:
      "On your word, it writes the set into the home's actual Design Center selections — through the exact same guarded path a person uses. Nothing is locked, nothing is approved, nothing is forced. Your normal approval flow is still the only way anything locks.",
  },
];

const guardrails = [
  {
    icon: Layers,
    title: "It respects the spec band",
    body:
      "A home's included spec level is a hard floor — StyleSmith AI™ never proposes something below the tier the buyer already paid for. Give it a ceiling too (“stay at or under Upgrade II”) and it holds that line strictly.",
  },
  {
    icon: ShieldCheck,
    title: "Gaps, not substitutions",
    body:
      "If a slot has no candidate inside the allowed band, it says so — “no in-spec candidate” — and leaves the slot open. It will not quietly reach up a tier to make the set look complete. An honest hole beats a surprise overage.",
  },
  {
    icon: Lock,
    title: "It cannot overwrite your work",
    body:
      "Approved and locked selections are refused, not overridden. Structural options are never in scope. It writes only to open design slots, and it never marks anything approved or locked on its own.",
  },
  {
    icon: Sparkles,
    title: "Real prices only",
    body:
      "Every proposed selection carries live retail pricing straight from your catalog. Nothing carries a stored or default cost — same hard-cost rule as the rest of Cornerstone. Unpriced lines read as unpriced instead of guessing.",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "What is StyleSmith AI™?",
    a: "StyleSmith AI™ is Cornerstone PM™'s in-app AI interior design agent. Your design and sales staff open a chat page, name a home and a style theme, and StyleSmith AI™ composes a complete, coherent design-selection set for that specific home — flooring, tile, cabinets, countertops, plumbing, lighting and hardware — then writes it into the home's real Design Center selections on command. Think Foreman AI™, but for design selections.",
  },
  {
    q: "Where do StyleSmith AI™'s suggestions actually come from?",
    a: "From your live data, and only your live data. It composes from two sources inside your own Cornerstone account: your design-center product catalog — your real options, categories, spec levels and live retail pricing — and your curated Style Inspiration library, which StyleSmith AI™ vision-tags automatically so nobody has to label images by hand. That means every single suggestion is a real product you already sell, in your catalog, at your price, orderable today. It is not stock imagery, it is not a generic AI mood board you then have to go source, and it is not a scraped social feed. A mood board hands your designer a research project; StyleSmith AI™ hands them a priced, in-spec, orderable selection set — because it was never able to imagine a product in the first place.",
  },
  {
    q: "Can I cap it at a specific upgrade level?",
    a: "Yes, and that's the point. Say “cap it at Upgrade II” and the entire composed look stays at Upgrade II — every room, every category, every line. The ceiling is applied before it composes, so nothing above your line ever enters the set; it isn't a filter you run afterward or a warning you get at the end. The home's included spec level acts as a floor at the same time, so it never proposes a downgrade below what the buyer already paid for. If a slot has no candidate inside the band, you get an honest “no in-spec candidate” and an open slot rather than a quiet reach up a tier. Net effect: an AI-composed look cannot produce a surprise upgrade overage.",
  },
  {
    q: "Which plans include StyleSmith AI™?",
    a: "StyleSmith AI™ is included with Pro+ and Enterprise only. It is not available on Starter, Builder, or Pro. Enterprise gets it in every division, because every Enterprise division is a full Pro+ platform.",
  },
  {
    q: "What style themes does StyleSmith AI™ support?",
    a: `StyleSmith AI™ ships with ${STYLESMITH_THEME_COUNT} curated style themes, each with its own signature finish language: Modern Farmhouse, Coastal, Contemporary, Organic Modern, Scandinavian, Industrial Loft, Classic Traditional, Transitional, Mid-Century Modern, and Craftsman. Every design option in your catalog is scored against all ten, so the same catalog can produce ten genuinely different houses.`,
  },
  {
    q: "Does someone have to tag all our design options by style?",
    a: "No. An automated tagging pipeline scores every design option against all ten themes with an affinity value, and it runs every night — new options you add today are style-scored by tomorrow morning with no one touching them. If a designer hand-corrects a tag, the nightly pass leaves that human edit alone.",
  },
  {
    q: "Will it pick something the buyer isn't allowed to have?",
    a: "No. The home's included spec level is a hard floor, so StyleSmith AI™ never proposes a downgrade below what the buyer already paid for. You can also give it a ceiling — for example, stay at or below Upgrade II — and it holds that band strictly. When a slot has no candidate inside the allowed band, it reports an honest gap (“no in-spec candidate”) and leaves the slot open rather than quietly substituting from a higher tier.",
  },
  {
    q: "Does it actually change our data, or just make suggestions?",
    a: "Both, in that order. Composing a look is read-only — you see the whole set with live retail pricing before anything happens. Applying it is an explicit command, and it writes through the exact same guarded selection path a person uses: approved and locked selections are refused rather than overwritten, structural options are out of scope, and nothing is auto-approved or auto-locked. Your normal approval workflow remains the only way a selection locks.",
  },
  {
    q: "How does the look stay coherent instead of looking like a random catalog pull?",
    a: "The composer holds the whole house to one palette family and one metal/finish family, and it keeps flooring continuous room to room. That's the difference between ten individually defensible picks and a house that actually reads as one design. It will also explain its reasoning on request — why this palette, why this finish, why this floor carries through.",
  },
  {
    q: "Can buyers tell you their style before the design appointment?",
    a: `Yes. There's a style quiz in the homeowner portal: ${STYLESMITH_QUIZ_ROUNDS} photo this-or-that rounds plus a few style sliders (warm to cool, light to dark, classic to modern). The pairs are blind — the buyer just picks the room they like. The result is a personal style profile that biases StyleSmith AI™'s composition toward that buyer's taste, so your designer walks into the appointment already knowing where to start. On availability: the quiz is part of the StyleSmith AI™ early-access rollout and is switched on per account, so it isn't enabled for every Pro+ and Enterprise org by default yet — ask us where your account sits.`,
  },
  {
    q: "How is this different from just offering design packages?",
    a: "A fixed package solves your problem, not the buyer's. Three families on the same street pick “Package B” and end up with the same kitchen, the same floors, the same everything — and they all notice. StyleSmith AI™ composes against that specific buyer instead: their style profile, their spec level, their upgrade ceiling, the look they keep coming back to. Same catalog and the same guidelines every time, but a genuinely different house each time — and the palette still holds together, because it was composed as one house rather than assembled from à la carte swaps that quietly break it.",
  },
  {
    q: "Can it build our Design Packages too?",
    a: "Yes — you don't have to choose between bespoke and packages. Plenty of builders want curated bundles anyway, for spec homes, quick-move-in programs, or the buyer who would rather not decide. Give StyleSmith AI™ a theme and a spec level and it drafts a full builder Design Package for review. It arrives as a draft — buyers can't use it until a human publishes it — and it deliberately leaves the bundle price to you. StyleSmith AI™ composes the design; the builder prices it. So the same agent gives you bespoke composition per buyer and a package factory when you want a shelf of ready-made looks.",
  },
  {
    q: "Where do the style trends come from?",
    a: "Primarily from you. Builder-uploaded inspiration images are vision-tagged and aggregated into per-theme trend signals, so the system leans on the work your own design team is already collecting. That's supplemented by a weekly refresh from design-press RSS feeds and general search-trend signals. There are no social media API dependencies — no Instagram, no Pinterest — so nothing breaks when a platform changes its terms.",
  },
  {
    q: "Is StyleSmith AI™ available inside Foreman AI™?",
    a: "Yes. The same capabilities are exposed as Foreman AI™ tools, so if your team already lives in Foreman they can list style themes, compose a look for a home, and apply it without switching to the StyleSmith AI™ page.",
  },
  {
    q: "Does StyleSmith AI™ generate renderings of the design?",
    a: "Not yet. AI concept renderings of a composed look are coming, along with a buyer self-serve “design my home” flow ahead of the appointment. Today StyleSmith AI™ works with your real catalog options, their real photos, and their real retail pricing.",
  },
];

export default function StyleSmithPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <JsonLd json={styleSmithSchema} />
      <Navbar />

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(167,139,250,0.10),transparent)]" />
        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> New · Pro+ &amp; Enterprise
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]">
              StyleSmith AI
              <sup className="text-2xl sm:text-3xl align-super">™</sup>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                designs the whole house.
              </span>
            </h1>
            <p className="text-xl text-slate-300 font-semibold mb-5">
              Not a mood board. A finished selection set.
            </p>
            <div className="text-lg text-slate-400 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 space-y-4">
              <p>
                Name a home. Name a look. StyleSmith AI™ composes the whole house
                from{" "}
                <span className="text-white font-semibold">real live data</span> —
                your actual product catalog in the Design Center, at your own
                retail pricing, steered by the inspiration photography your design
                team curates and by your buyer&apos;s own style profile.
              </p>
              <p>
                Every pick is a product you already sell, chosen inside your style
                guidelines and held to one palette. Say{" "}
                <span className="text-white font-semibold">
                  &ldquo;cap it at Upgrade II&rdquo;
                </span>{" "}
                and the entire look stays there.
              </p>
              <p>
                Then it writes the set into your Design Center — on your say-so.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/beta"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5"
              >
                Request Early Access
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/design"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-violet-500/40 hover:text-white transition-all duration-200"
              >
                See the Design Center
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12),transparent_65%)] blur-2xl" />
            <Image
              src="/stylesmith-mascot.png"
              alt="StyleSmith AI™ mascot — a bearded craftsman in a leather apron holding fabric and wallpaper rolls, with a paint brush, color swatch palette, and material samples on his tool belt"
              width={560}
              height={845}
              priority
              className="relative w-full max-w-[300px] lg:max-w-[380px] h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ═══════════ THE PROBLEM ═══════════ */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
                The design appointment today
              </div>
              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>
                    A buyer stares at a wall of samples with no starting point, and
                    the appointment burns three hours.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Selections get made one category at a time, so the hardware
                    fights the lighting and nobody notices until install.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Flooring changes at the hallway because two rooms were picked
                    on two different days.
                  </span>
                </li>
                <li className="flex gap-3">
                  <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Your best designer&apos;s taste lives in your best designer&apos;s head,
                    and it does not scale to forty homes.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-gradient-to-br from-violet-500/10 to-amber-500/5 border border-violet-500/25">
              <div className="text-xs uppercase tracking-widest text-violet-300 font-bold mb-4">
                With StyleSmith AI™
              </div>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>
                    The buyer walks in and a complete, priced look is already on
                    screen — a real starting point, not a blank slate.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>
                    The whole house is composed at once, so the finish family and
                    palette hold together by construction, not by luck.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Flooring carries room to room because continuity is a rule,
                    not a habit.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Check className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Every designer on your team starts from the same standard —
                    and every appointment starts 80% done.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REAL LIVE DATA ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Database className="w-3.5 h-3.5" /> Real live data
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              AI-generated looks, built on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-violet-400">
                your live data
              </span>
              .
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              Every single thing StyleSmith AI™ suggests is a real product you
              already sell. It composes from two live sources inside your own
              Cornerstone account — and nothing else.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <Package className="w-6 h-6 text-emerald-300 mb-4" />
              <div className="text-xs uppercase tracking-widest text-emerald-300/80 font-bold mb-2">
                Source 1
              </div>
              <h3 className="text-xl font-black mb-3">
                Your design-center product catalog
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Your actual options, your option categories, your spec levels,
                your live retail pricing — read straight out of your Cornerstone
                Design Center. When StyleSmith AI™ proposes a faucet, that faucet
                is <span className="text-white font-semibold">in your catalog, at your price, orderable today</span>.
                It cannot suggest something you don&apos;t carry, because it has
                nothing else to suggest from.
              </p>
            </div>
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <ImageIcon className="w-6 h-6 text-emerald-300 mb-4" />
              <div className="text-xs uppercase tracking-widest text-emerald-300/80 font-bold mb-2">
                Source 2
              </div>
              <h3 className="text-xl font-black mb-3">
                Your curated Style Inspiration library
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Your design team uploads the inspiration photography they&apos;re
                already collecting, and StyleSmith AI™{" "}
                <span className="text-white font-semibold">vision-tags every image automatically</span> —
                colors, materials, finishes, motifs. Nobody sits there labeling
                photos. Those tags roll up into per-theme style signals that
                weight the composition, so the looks come out sounding like your
                brand instead of like a generic algorithm.
              </p>
              <p className="text-slate-500 text-xs leading-relaxed border-t border-slate-800 pt-4">
                <span className="text-slate-400 font-semibold">To be precise about how this works:</span>{" "}
                inspiration photos shape the style direction at the theme level.
                Matching an individual reference photo to a specific room is on
                the roadmap, not shipped — and the library is curated by your
                staff, not uploaded by buyers.
              </p>
            </div>
          </div>

          <div className="p-7 rounded-2xl bg-gradient-to-br from-violet-500/10 to-emerald-500/5 border border-violet-500/25">
            <div className="text-sm font-black text-white mb-4">
              What it is emphatically not:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              {[
                "Stock imagery of somebody else's house",
                "A generic AI mood board you then have to go source",
                "A scraped social feed that breaks when the terms change",
              ].map((n) => (
                <div key={n} className="flex gap-3 items-start">
                  <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm leading-relaxed">{n}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-700/50 pt-5">
              The difference is what happens after the buyer says yes. A mood
              board hands your designer a research project. StyleSmith AI™ hands
              them a{" "}
              <span className="text-white font-semibold">
                priced, in-spec, orderable selection set
              </span>{" "}
              — because it was never allowed to imagine a product in the first
              place.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <Wand2 className="w-4 h-4" /> How it works
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              Four steps.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-amber-300">
                One coherent house.
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              StyleSmith AI™ is a chat page your design and sales staff open like
              any other tool — with the whole Design Center behind it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div
                key={s.n}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-violet-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 font-black">
                    {s.n}
                  </div>
                  <s.icon className="w-5 h-5 text-amber-300" />
                </div>
                <h3 className="text-lg font-black mb-2">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ THE 10 LOOKS ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <Palette className="w-4 h-4" /> The Looks
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              One catalog.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-400">
                {STYLESMITH_THEME_COUNT} different houses.
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              Every design option you own is scored against all{" "}
              {STYLESMITH_THEME_COUNT} themes, so the same catalog composes ten
              genuinely different homes. Each look carries its own finish
              language — and StyleSmith AI™ holds the whole house to it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {themes.map((t) => (
              <div
                key={t.name}
                className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="font-bold text-white mb-1.5">{t.name}</div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {t.finish}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-violet-500/5 to-amber-500/5 border border-violet-500/20">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-11 h-11 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-violet-300" />
              </div>
              <div>
                <h3 className="text-xl font-black mb-2">
                  Nobody has to tag anything
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  An automated tagging pipeline style-scores every design option
                  against all {STYLESMITH_THEME_COUNT} themes, and it runs{" "}
                  <span className="text-violet-300 font-semibold">every night</span>.
                  Add a hundred new options today and they&apos;re style-scored by
                  tomorrow morning with zero manual upkeep. If one of your
                  designers hand-corrects a tag, the nightly pass leaves that human
                  edit alone — your judgment always outranks the model&apos;s.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ BESPOKE, NOT BOILERPLATE ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-bold uppercase tracking-widest mb-6">
              <Fingerprint className="w-3.5 h-3.5" /> Bespoke, not boilerplate
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              Your buyer doesn&apos;t get{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-300 to-violet-400">
                the neighbor&apos;s house.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              A fixed design package solves the builder&apos;s problem, not the
              buyer&apos;s. Three families on the same street all pick
              &ldquo;Package B&rdquo; and end up with the same kitchen, the same
              floors, the same everything — and every one of them notices at the
              block party.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="p-7 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-4">
                A static package
              </div>
              <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
                {[
                  "One of three or four fixed bundles, take it or leave it.",
                  "The buyer bends their taste to fit a package somebody wrote last year.",
                  "Personalization means à la carte swaps that quietly break the palette.",
                  "Identical houses, three doors apart.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <X className="w-4 h-4 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-7 rounded-2xl bg-gradient-to-br from-rose-500/10 to-violet-500/5 border border-rose-500/25">
              <div className="text-xs uppercase tracking-widest text-rose-300 font-bold mb-4">
                With StyleSmith AI™
              </div>
              <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
                {[
                  "You feed it this buyer's specifics — their style profile, their spec level, their ceiling, the look they keep coming back to.",
                  "It composes for that house, from your catalog, against your guidelines.",
                  "The palette holds together because it was composed as one house, not assembled from swaps.",
                  "Same catalog, same rules, genuinely different result every time.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Check className="w-4 h-4 text-rose-300 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* …and it builds your packages too */}
          <div className="p-7 sm:p-9 rounded-2xl bg-slate-900/50 border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 items-start">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black mb-3">
                  Still want packages? It builds those for you too.
                </h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Plenty of builders want curated packages anyway — for spec homes,
                  for a quick-move-in program, for the buyer who would genuinely
                  rather not decide. StyleSmith AI™ drafts those as well: hand it a
                  theme and a spec level and it composes a complete Design Package
                  for your review.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  So you don&apos;t have to choose.{" "}
                  <span className="text-white font-semibold">
                    Bespoke for the buyer who wants their own house, and a package
                    factory for when you want a shelf of ready-made looks
                  </span>{" "}
                  — out of the same catalog, under the same guidelines, from the
                  same agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ INTO THE DESIGN CENTER ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-widest mb-6">
              <HomeIcon className="w-3.5 h-3.5" /> Design Center
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              It doesn&apos;t stop at inspiration.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-violet-400">
                It fills the Design Center.
              </span>
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              The gap between &ldquo;here&apos;s a nice look&rdquo; and
              &ldquo;here&apos;s this buyer&apos;s house, priced&rdquo; is exactly
              where design tools usually quit and hand the work back to your
              designer. StyleSmith AI™ closes it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: Palette,
                title: "It picks inside your style guidelines",
                body:
                  "It composes within the rules you already set up — your option categories, your spec levels, and what counts as standard versus an upgrade in that specific community. You are not handing the AI a blank canvas; you are handing it your rulebook.",
              },
              {
                icon: Layers,
                title: "Real selections, not a PDF",
                body:
                  "It writes to the home's actual Design Center selection records — the very same rows your designer edits by hand. There's no export step, no re-keying a mood board into the system, and no second source of truth to reconcile later.",
              },
              {
                icon: Lock,
                title: "Through the same guarded path a person uses",
                body:
                  "Approved and locked selections are refused rather than overwritten. Structural options are never in scope. Nothing is auto-approved and nothing is auto-locked — it writes only to open design slots.",
              },
              {
                icon: Sparkles,
                title: "Priced as it goes",
                body:
                  "Every line carries live retail pricing out of your own catalog, so the buyer sees the number in the same moment they see the look. No stored costs, no invented numbers — the same hard-cost rule as the rest of Cornerstone.",
              },
            ].map((c) => (
              <div
                key={c.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <c.icon className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black mb-2">{c.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {c.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-7 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto">
              From there your normal process takes over, completely unchanged —
              buyer approval, change orders, purchasing, POs. StyleSmith AI™ gets
              the house to{" "}
              <span className="text-white font-semibold">80% designed and fully priced</span>{" "}
              before the appointment starts. It does not try to be the rest of
              your workflow.
            </p>
            <Link
              href="/design"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-semibold hover:border-amber-500/40 hover:text-white transition-all duration-200"
            >
              See how the Design Center works
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ GUARDRAILS ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <ShieldCheck className="w-4 h-4" /> Guardrails
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-5">
              An AI you can let{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                touch real selections.
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto">
              A design agent is only useful if you can trust it with the data. So
              the interesting part of StyleSmith AI™ isn&apos;t what it can do — it&apos;s
              what it refuses to do.
            </p>
          </div>

          {/* Spec-level ceiling — the budget-trust feature */}
          <div className="mb-8 p-7 sm:p-9 rounded-2xl bg-gradient-to-br from-emerald-500/12 to-cyan-500/5 border border-emerald-500/30">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-5">
                  <Ruler className="w-3.5 h-3.5" /> Upgrade-level control
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 leading-tight">
                  Say &ldquo;cap it at Upgrade II.&rdquo;
                  <br />
                  <span className="text-emerald-300">It stays at Upgrade II.</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Tell StyleSmith AI™ the ceiling in plain English and the entire
                  composed look respects it — every room, every category, every
                  line. The ceiling is set{" "}
                  <span className="text-white font-semibold">before it composes</span>,
                  so nothing above your line ever enters the set. It is not a
                  filter you apply afterward, and it is not a warning you get at
                  the end.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  That&apos;s the difference between an AI your design team can
                  actually run with and one somebody has to audit line by line.
                  An AI-composed look{" "}
                  <span className="text-white font-semibold">
                    cannot produce a surprise upgrade overage
                  </span>
                  .
                </p>
              </div>
              <div className="space-y-3">
                {[
                  {
                    k: "The floor",
                    v: "The home's included spec level. It will never propose a downgrade below the tier the buyer already paid for.",
                  },
                  {
                    k: "The ceiling",
                    v: "Whatever you say it is. “Stay at or below Upgrade II” holds strictly across the whole house.",
                  },
                  {
                    k: "Nothing fits the band?",
                    v: "You get an honest “no in-spec candidate” and an open slot — never a quiet reach up a tier to look complete.",
                  },
                ].map((r) => (
                  <div
                    key={r.k}
                    className="p-4 rounded-xl bg-slate-950/50 border border-emerald-500/15"
                  >
                    <div className="text-sm font-black text-emerald-300 mb-1">
                      {r.k}
                    </div>
                    <div className="text-xs text-slate-400 leading-relaxed">
                      {r.v}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guardrails.map((g) => (
              <div
                key={g.title}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <g.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-black mb-2">{g.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {g.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ BUYER QUIZ ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-6">
              <ImageIcon className="w-4 h-4" /> Buyer style quiz · Early access
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-5">
              Know their taste before they sit down.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-5">
              In the homeowner portal, your buyer plays{" "}
              <span className="text-white font-semibold">
                {STYLESMITH_QUIZ_ROUNDS} rounds of this-or-that
              </span>{" "}
              — two rooms, pick the one you like — plus three quick sliders: warm
              to cool, light to dark, classic to modern. It takes a couple of
              minutes and it feels like a game, not a form.
            </p>
            <p className="text-slate-400 leading-relaxed mb-5">
              The pairs are deliberately blind. The buyer never sees a style label,
              so they can&apos;t answer with what they think they&apos;re supposed to
              like. What comes out is a real style profile — a personal blend
              across the {STYLESMITH_THEME_COUNT} looks.
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              That profile then biases StyleSmith AI™&apos;s composition. Your designer
              opens the appointment with a house already leaning the buyer&apos;s
              direction — which is a very different conversation from &ldquo;so, what
              are you thinking?&rdquo;
            </p>
            <p className="text-slate-500 text-sm leading-relaxed p-4 rounded-xl bg-slate-900/50 border border-slate-800">
              <span className="text-slate-300 font-semibold">Availability:</span> the
              buyer style quiz is part of the StyleSmith AI™{" "}
              <Link href="/beta" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                early-access rollout
              </Link>{" "}
              and is switched on per account — it is not yet turned on for every
              Pro+ and Enterprise org by default. Ask us where your account sits.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: `${STYLESMITH_QUIZ_ROUNDS} photo rounds`,
                desc: "This-or-that pairs drawn from your own catalog imagery",
              },
              {
                label: "3 style sliders",
                desc: "Warm↔cool, light↔dark, classic↔modern",
              },
              {
                label: "Blind by design",
                desc: "No style labels shown — buyers answer honestly",
              },
              {
                label: "A real profile",
                desc: `A weighted blend across all ${STYLESMITH_THEME_COUNT} looks, not one bucket`,
              },
              {
                label: "Feeds the composer",
                desc: "The composed look leans toward that buyer's taste",
              },
              {
                label: "Selections untouched",
                desc: "The quiz records a preference — it never picks or prices anything",
              },
            ].map((c) => (
              <div
                key={c.label}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/70"
              >
                <div className="text-sm font-bold text-white mb-1">{c.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {c.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ MORE SURFACES ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-center mb-4">
            More than a chat window
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            StyleSmith AI™ shows up wherever design decisions actually get made.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300">
              <Package className="w-6 h-6 text-amber-300 mb-4" />
              <h3 className="text-lg font-black mb-2">Drafts your Design Packages</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Hand it a theme and a spec level and it drafts a complete builder
                Design Package. It arrives as a <span className="text-white font-semibold">draft</span> —
                unusable by buyers until a human publishes it — and it leaves the
                bundle price to you. StyleSmith AI™ composes; the builder prices.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300">
              <Bot className="w-6 h-6 text-amber-300 mb-4" />
              <h3 className="text-lg font-black mb-2">Built into Foreman AI™</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                The same capabilities are exposed as{" "}
                <Link href="/foreman" className="text-violet-300 hover:text-violet-200 font-semibold">
                  Foreman AI™
                </Link>{" "}
                tools. If your team already runs the business out of Foreman, they
                can list looks, compose a house, and apply it without switching
                pages.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/30 transition-all duration-300">
              <TrendingUp className="w-6 h-6 text-amber-300 mb-4" />
              <h3 className="text-lg font-black mb-2">Learns from your inspiration</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Inspiration images your team uploads are vision-tagged and rolled
                into per-theme trend signals — your own design direction is the
                backbone. A weekly refresh from design-press feeds and search
                trends keeps it current.{" "}
                <span className="text-white font-semibold">No social media APIs</span>, so
                nothing breaks when a platform changes its rules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ COMING SOON ═══════════ */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-4xl mx-auto p-7 sm:p-9 rounded-2xl bg-slate-900/50 border border-slate-800">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700/40 border border-slate-600/50 text-slate-300 text-xs font-bold uppercase tracking-widest mb-5">
            Coming soon
          </div>
          <h2 className="text-2xl sm:text-3xl font-black mb-4">
            What&apos;s next for StyleSmith AI™
          </h2>
          <ul className="space-y-3 text-slate-400 text-sm leading-relaxed">
            <li className="flex gap-3">
              <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0 mt-1" />
              <span>
                <span className="text-white font-semibold">AI concept renderings</span> of a
                composed look, so the buyer sees the room and not just the line
                items.
              </span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0 mt-1" />
              <span>
                <span className="text-white font-semibold">Buyer self-serve “Design My Home”</span> —
                a pre-appointment flow where the buyer explores looks on their own
                before they ever come in.
              </span>
            </li>
            <li className="flex gap-3">
              <ArrowRight className="w-4 h-4 text-slate-500 flex-shrink-0 mt-1" />
              <span>
                <span className="text-white font-semibold">Per-room photo references</span> —
                point at one specific inspiration photo for one specific room and
                have the composer match products to that image. Today inspiration
                photography steers the look at the theme level; per-photo,
                per-room matching is not shipped yet.
              </span>
            </li>
          </ul>
          <p className="text-slate-600 text-xs mt-6">
            Not available today. Listed so you know where this is going — we don&apos;t
            sell roadmap as shipped.
          </p>
        </div>
      </section>

      {/* ═══════════ PLAN AVAILABILITY ═══════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 space-y-6">
            <div>
              <div className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-1">
                Included with
              </div>
              <div className="text-2xl font-black text-white">Pro+ &amp; Enterprise</div>
              <div className="text-4xl font-black text-violet-400 mt-1">
                $599<span className="text-lg text-slate-400 font-normal">/mo</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">
                Pro+. Enterprise includes StyleSmith AI™ in every division.
              </div>
            </div>
            <div className="border-t border-slate-800 pt-6 space-y-2.5 text-sm">
              {[
                { plan: "Starter", ok: false },
                { plan: "Builder", ok: false },
                { plan: "Pro", ok: false },
                { plan: "Pro+", ok: true },
                { plan: "Enterprise", ok: true },
              ].map((r) => (
                <div key={r.plan} className="flex items-center justify-between">
                  <span className={r.ok ? "text-white font-semibold" : "text-slate-500"}>
                    {r.plan}
                  </span>
                  {r.ok ? (
                    <span className="inline-flex items-center gap-1.5 text-violet-400 font-bold text-xs">
                      <Check className="w-4 h-4" /> Included
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-slate-600 text-xs">
                      <X className="w-4 h-4" /> Upgrade required
                    </span>
                  )}
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="block w-full text-center px-6 py-3.5 rounded-xl bg-violet-400 text-slate-900 font-bold hover:bg-violet-300 transition-all duration-200"
            >
              See full pricing →
            </Link>
            <p className="text-center text-slate-500 text-xs">
              Beta limited to 100 builders · No credit card required
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-black">
              Why this lives at the top of the stack
            </h2>
            <p className="text-slate-400 leading-relaxed">
              StyleSmith AI™ only works because everything under it is already
              real: a structured options engine, spec levels per community,
              attribute groups, and vendor-awarded retail pricing on every line.
              It isn&apos;t a style filter bolted onto a catalog — it&apos;s an agent
              reasoning over a fully modeled design center.
            </p>
            <p className="text-slate-400 leading-relaxed">
              That&apos;s why it ships with Pro+ and Enterprise. Those are the tiers
              where the full platform — and the full AI suite — is already
              turned on.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/design"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:border-violet-500/40 hover:text-white transition-all"
              >
                Design Center
              </Link>
              <Link
                href="/ai-features"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-sm font-semibold hover:border-violet-500/40 hover:text-white transition-all"
              >
                All AI features
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        title="StyleSmith AI™ FAQ"
        subtitle="Common questions about Cornerstone PM's AI interior design agent."
        items={faqItems}
        accentTextClass="text-violet-400"
      />

      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          Give every buyer your best designer.
        </h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
          Join the beta and get 2 years free. Limited to 100 builders.
        </p>
        <Link
          href="/beta"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-violet-400 text-slate-900 font-bold text-lg hover:bg-violet-300 transition-all duration-200 shadow-lg shadow-violet-500/30"
        >
          Request Early Access
          <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
      <Footer />
    </div>
  );
}
