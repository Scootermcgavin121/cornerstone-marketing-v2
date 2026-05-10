import Link from "next/link";

const topCompetitors = [
  { name: "Buildertrend", slug: "buildertrend" },
  { name: "JobTread", slug: "jobtread" },
  { name: "CoConstruct", slug: "coconstruct" },
  { name: "NEWSTAR", slug: "newstar" },
  { name: "Procore", slug: "procore" },
  { name: "BuildPro", slug: "buildpro" },
  { name: "Buildxact", slug: "buildxact" },
  { name: "Contractor Foreman", slug: "contractor-foreman" },
];

export function CompetitorCompareStrip() {
  return (
    <section className="py-16 px-4 border-t border-slate-800/60">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            Already using something else? See how we compare.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Switching construction software is a big decision. We&apos;ve put together honest, detailed comparisons against the platforms builders use most — including the ones where we&apos;re not the right fit.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          {topCompetitors.map((c) => (
            <Link
              key={c.slug}
              href={`/${c.slug}-alternative`}
              className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 hover:bg-slate-900/80 transition-all duration-200 group text-center"
            >
              <span className="text-slate-300 text-sm font-semibold group-hover:text-cyan-400 transition-colors">
                vs {c.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/alternatives"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold text-sm"
          >
            See all 17 comparisons →
          </Link>
        </div>
      </div>
    </section>
  );
}
