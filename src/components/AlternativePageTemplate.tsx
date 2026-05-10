import Link from "next/link";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

export type ComparisonRow = {
  feature: string;
  cornerstone: boolean | string;
  competitor: boolean | string;
  note?: string;
};

export type WhySwitchCard = {
  title: string;
  desc: string;
};

export type AlternativePageProps = {
  /** Competitor display name (e.g. "JobTread", "Procore") */
  competitorName: string;
  /** Badge label (e.g. "JobTread Alternative") */
  badgeLabel?: string;
  /** Hero headline — two lines, split by <br /> */
  heroLine1: string;
  heroLine2: string;
  /** Accent Tailwind color word: "cyan" | "emerald" | "violet" | "amber" | "rose" */
  accentColor?: "cyan" | "emerald" | "violet" | "amber" | "rose";
  /** Hero subtext paragraph */
  heroParagraph: string;
  /** Second hero CTA button text + href (defaults to /compare) */
  secondaryCTA?: { text: string; href: string };
  /** Comparison table subtitle */
  comparisonSubtitle?: string;
  /** Rows for comparison table — competitor column key is dynamic */
  comparisonRows: ComparisonRow[];
  /** Trademark disclaimer suffix (competitor name for boilerplate) */
  trademarkName?: string;
  /** "Why switch" section headline */
  whySwitchHeadline?: string;
  /** "Why switch" cards — 3 recommended */
  whySwitchCards?: WhySwitchCard[];
  /** Show Migration Wizard CTA section (default: true) */
  showMigrationCTA?: boolean;
  /** Custom Migration Wizard headline (optional) */
  migrationHeadline?: string;
  /** Custom Migration Wizard subtext */
  migrationDesc?: string;
  /** FAQ section */
  faqTitle?: string;
  faqSubtitle?: string;
  faqItems: FAQItem[];
  /** Footer CTA section headline */
  footerHeadline?: string;
  /** Footer CTA subtext */
  footerSubtext?: string;
  /** For service-biz "honest" disclaimer — show soft angle instead of direct CTA */
  honestAngle?: string;
  /** Related page links for internal SEO (shown at bottom) */
  relatedPages?: { text: string; href: string }[];
};

const accentMap = {
  cyan: {
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    glow: "rgba(45,212,191,0.07)",
    heading: "text-cyan-400",
    button: "bg-cyan-400 text-slate-900 hover:bg-cyan-300 shadow-cyan-500/30",
    col: "text-cyan-400",
    migBorder: "border-cyan-500/30",
    migBg: "from-cyan-500/[0.08]",
    migGlow: "bg-cyan-500/15",
    migBtn: "from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 shadow-cyan-500/25",
    card: "text-cyan-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    glow: "rgba(52,211,153,0.07)",
    heading: "text-emerald-400",
    button: "bg-emerald-400 text-slate-900 hover:bg-emerald-300 shadow-emerald-500/30",
    col: "text-emerald-400",
    migBorder: "border-emerald-500/30",
    migBg: "from-emerald-500/[0.08]",
    migGlow: "bg-emerald-500/15",
    migBtn: "from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 shadow-emerald-500/25",
    card: "text-emerald-400",
  },
  violet: {
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    glow: "rgba(168,85,247,0.07)",
    heading: "text-purple-400",
    button: "bg-purple-400 text-slate-900 hover:bg-purple-300 shadow-purple-500/30",
    col: "text-purple-400",
    migBorder: "border-violet-500/30",
    migBg: "from-violet-500/[0.08]",
    migGlow: "bg-violet-500/15",
    migBtn: "from-violet-500 to-violet-400 hover:from-violet-400 hover:to-violet-300 shadow-violet-500/25",
    card: "text-purple-400",
  },
  amber: {
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-400",
    glow: "rgba(251,191,36,0.07)",
    heading: "text-amber-400",
    button: "bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-amber-500/30",
    col: "text-amber-400",
    migBorder: "border-amber-500/30",
    migBg: "from-amber-500/[0.08]",
    migGlow: "bg-amber-500/15",
    migBtn: "from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 shadow-amber-500/25",
    card: "text-amber-400",
  },
  rose: {
    badge: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    glow: "rgba(244,63,94,0.07)",
    heading: "text-rose-400",
    button: "bg-rose-400 text-slate-900 hover:bg-rose-300 shadow-rose-500/30",
    col: "text-rose-400",
    migBorder: "border-rose-500/30",
    migBg: "from-rose-500/[0.08]",
    migGlow: "bg-rose-500/15",
    migBtn: "from-rose-500 to-rose-400 hover:from-rose-400 hover:to-rose-300 shadow-rose-500/25",
    card: "text-rose-400",
  },
};

function CheckOrX({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-emerald-400" />;
  if (value === false) return <X className="w-5 h-5 text-slate-600" />;
  if (value === "limited") return <span className="text-amber-400 text-xs font-semibold uppercase">Limited</span>;
  return <span className="text-white font-semibold text-sm">{value}</span>;
}

export function AlternativePageTemplate({
  competitorName,
  badgeLabel,
  heroLine1,
  heroLine2,
  accentColor = "cyan",
  heroParagraph,
  secondaryCTA = { text: "See full comparison", href: "/compare" },
  comparisonSubtitle,
  comparisonRows,
  trademarkName,
  whySwitchHeadline,
  whySwitchCards,
  showMigrationCTA = true,
  migrationHeadline,
  migrationDesc,
  faqTitle,
  faqSubtitle,
  faqItems,
  footerHeadline = "Ready to switch?",
  footerSubtext = "Join the beta and get 2 years free. Migration tooling included.",
  honestAngle,
  relatedPages,
}: AlternativePageProps) {
  const a = accentMap[accentColor];
  const badge = badgeLabel ?? `${competitorName} Alternative`;
  const trademark = trademarkName ?? competitorName;

  // Breadcrumb JSON-LD for SEO
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.cornerstonepm.ai/" },
      { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.cornerstonepm.ai/compare" },
      { "@type": "ListItem", position: 3, name: "Alternatives", item: "https://www.cornerstonepm.ai/alternatives" },
      { "@type": "ListItem", position: 4, name: `${competitorName} Alternative` },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="pt-24 pb-2 px-4">
        <ol className="max-w-5xl mx-auto flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-500">
          <li>
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
          <li>
            <Link href="/compare" className="hover:text-slate-300 transition-colors">Compare</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
          <li>
            <Link href="/alternatives" className="hover:text-slate-300 transition-colors">Alternatives</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5 text-slate-700" aria-hidden="true" />
          <li aria-current="page" className="text-slate-300 font-medium">
            {competitorName}
          </li>
        </ol>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </nav>

      {/* Hero */}
      <section className="relative pt-8 pb-20 px-4 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse at center, ${a.glow} 0%, transparent 65%)` }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold uppercase tracking-widest mb-6 ${a.badge}`}>
            {badge}
          </div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 leading-tight">
            {heroLine1}<br />
            <span className={a.heading}>{heroLine2}</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-8">{heroParagraph}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/beta"
              className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 ${a.button}`}
            >
              Get 2 Years Free <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={secondaryCTA.href}
              className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200"
            >
              {secondaryCTA.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 border-t border-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Cornerstone PM vs {competitorName}</h2>
          <p className="text-center text-slate-400 mb-12">
            {comparisonSubtitle ?? `Side-by-side comparison for home builders.`}
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full">
              <thead className="bg-slate-900/60">
                <tr>
                  <th className="text-left px-6 py-4 text-slate-400 text-sm font-semibold uppercase tracking-widest">Feature</th>
                  <th className={`px-4 py-4 text-sm font-bold text-center ${a.col}`}>Cornerstone PM</th>
                  <th className="px-4 py-4 text-slate-400 text-sm font-bold text-center">{competitorName}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-900/30">
                    <td className="px-6 py-4">
                      <div className="text-white font-medium">{row.feature}</div>
                      {row.note && <div className="text-slate-500 text-xs mt-1">{row.note}</div>}
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex justify-center"><CheckOrX value={row.cornerstone} /></div>
                    </td>
                    <td className="px-4 py-4 text-center">
                      <div className="flex justify-center"><CheckOrX value={row.competitor} /></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="max-w-5xl mx-auto mt-4 text-[11px] text-slate-600 leading-relaxed">
            Pricing and feature availability reflect publicly available information as of 2026. Verify current pricing and
            capabilities directly with each vendor. {trademark}® is a trademark of its respective owner; Cornerstone PM
            is not affiliated with or endorsed by {trademark}.
          </p>
        </div>
      </section>

      {/* Why Switch Cards */}
      {whySwitchCards && whySwitchCards.length > 0 && (
        <section className="py-20 px-4 border-t border-slate-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-12">
              {whySwitchHeadline ?? `Why builders choose Cornerstone PM`}
            </h2>
            <div className={`grid gap-6 ${whySwitchCards.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
              {whySwitchCards.map((card) => (
                <div key={card.title} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/40">
                  <div className={`font-bold mb-3 ${a.card}`}>{card.title}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Honest angle for service-biz competitors */}
      {honestAngle && (
        <section className="py-12 px-4 border-t border-slate-900">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8">
              <p className="text-amber-300 text-sm font-semibold uppercase tracking-widest mb-3">Honest take</p>
              <p className="text-slate-300 leading-relaxed">{honestAngle}</p>
            </div>
          </div>
        </section>
      )}

      {/* Migration Wizard CTA */}
      {showMigrationCTA && (
        <section className="py-16 px-4 border-t border-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className={`rounded-3xl border ${a.migBorder} bg-gradient-to-br ${a.migBg} via-slate-900/40 to-slate-900/40 p-8 sm:p-10 relative overflow-hidden`}>
              <div className={`absolute -top-24 -right-24 w-72 h-72 ${a.migGlow} blur-3xl rounded-full pointer-events-none`} />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/15 border border-violet-500/30 text-violet-300 text-xs font-bold uppercase tracking-widest">
                      AI Migration Wizard
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-widest">
                      Beta
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-3 leading-tight">
                    {migrationHeadline ?? (
                      <>Already using {competitorName}? <span className="text-violet-400">Drop your export. We&apos;ll do the rest.</span></>
                    )}
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    {migrationDesc ?? `Export your ${competitorName} data, drag the files into our wizard, and AI auto-maps every column across vendors, homes, communities, users, and more. Dry-run before you commit. Free.`}
                  </p>
                  <p className="text-slate-500 text-sm">Costs about $0.01 per migration in AI — we absorb it. You pay zero.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/migrate"
                    className={`inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-gradient-to-r ${a.migBtn} text-slate-900 font-bold shadow-lg transition-all duration-200 whitespace-nowrap`}
                  >
                    See the Migration Wizard <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQSection
        title={faqTitle ?? `${competitorName} Alternative FAQ`}
        subtitle={faqSubtitle ?? `Common questions about switching to Cornerstone PM from ${competitorName}.`}
        items={faqItems}
      />

      {/* Related pages for internal SEO */}
      {relatedPages && relatedPages.length > 0 && (
        <section className="py-10 px-4 border-t border-slate-900">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-slate-500 text-sm mb-4">Also comparing alternatives?</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {relatedPages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className="px-4 py-2 rounded-full border border-slate-700 text-slate-400 text-sm hover:border-slate-500 hover:text-white transition-all duration-200"
                >
                  {p.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">{footerHeadline}</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">{footerSubtext}</p>
        <Link
          href="/beta"
          className={`inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg ${a.button}`}
        >
          Request Early Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>

      <Footer />
    </div>
  );
}
