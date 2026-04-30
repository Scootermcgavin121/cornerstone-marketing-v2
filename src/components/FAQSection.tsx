import { ChevronDown } from "lucide-react";

export type FAQItem = {
  q: string;
  a: string;
};

type FAQSectionProps = {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  /** Tailwind text color class for accent (matches feature page theme). Defaults to white. */
  accentTextClass?: string;
};

/**
 * FAQSection — page-level FAQ block with embedded FAQPage JSON-LD.
 *
 * Renders an answer-first FAQ block AND emits FAQPage structured data
 * scoped to the page it lives on. Each page that uses this should pass
 * 5-10 high-intent questions tied to its primary keyword.
 *
 * AISO note: H2-as-question + concise direct answer is the citation
 * format LLMs and Google AI Overviews lift most readily.
 */
export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  accentTextClass = "text-white",
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="py-20 px-4 bg-slate-950 border-t border-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-4xl sm:text-5xl font-black tracking-tight mb-4 ${accentTextClass}`}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        <div className="space-y-4">
          {items.map((item, i) => (
            <details
              key={i}
              className="group rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 transition-colors overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <div className="px-6 pb-5 text-slate-300 leading-relaxed">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
