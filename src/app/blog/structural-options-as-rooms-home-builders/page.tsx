import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, RefreshCcw, Scissors, Workflow } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const slug = "structural-options-as-rooms-home-builders";
const heroImage = "/blog/structural-options-as-rooms-home-builders.png";
const title = "How Production Builders Should Model Structural Options";
const description =
  "See how room-aware structural options prevent double-billed flooring, replace base rooms cleanly, and carry buyer choices into budgets and purchase orders.";
const heroImageAlt =
  "Structural options software showing a finished basement with a flex-room carve-out, a luxury bath replacing a standard bath, and live budget and purchase-order updates";

const blogSchema = buildBlogPostSchema({
  title,
  slug,
  description,
  datePublished: "2026-08-31",
});

export const metadata: Metadata = {
  title: `${title} — Cornerstone PM™ Blog`,
  description,
  alternates: { canonical: `https://www.cornerstonepm.ai/blog/${slug}` },
  openGraph: {
    title,
    description,
    type: "article",
    images: [{ url: `https://www.cornerstonepm.ai${heroImage}`, width: 1536, height: 1024, alt: heroImageAlt }],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "Can a structural option have its own design selections?",
    a: "Yes. A structural option can act as a selectable location itself or add multiple rooms and zones. Buyers can then choose finishes for each option room in the Design Center, with the same spec levels, room quantities, and retail pricing used elsewhere in the home.",
  },
  {
    q: "What happens when a structural option replaces a standard room?",
    a: "The option can identify the base room it replaces. Once the buyer commits the option, that base room is excluded from the budget, selections list, and purchase orders for that home. Removing the option restores the base room because the original plan data was never deleted.",
  },
  {
    q: "How does Cornerstone prevent double-billing flooring in a room carved from another room?",
    a: "The option identifies the room it is carved from. At pricing time, Cornerstone nets the new room's footprint from the parent room for each flooring class, so both rooms remain independently selectable without billing carpet, pad, tile, or other flooring twice for the same square footage.",
  },
  {
    q: "Do structural-option selections update construction purchasing?",
    a: "Yes. Committed structural selections update the live home budget, roll up by cost code, and feed purchase orders and delivery tickets. Cornerstone also tracks under-air and under-roof square-footage changes and enforces Requires and Conflicts rules between options.",
  },
];

const problems = [
  "A finished basement is sold as one dollar amount, but the buyer cannot choose flooring for the main area and steps separately.",
  "A luxury bath is added while the standard bath remains in the budget, leaving the estimator to remove it by hand.",
  "A flex room is framed inside a larger finished space, and both rooms get billed for the same carpet footprint.",
  "The selection is recorded in sales, but purchasing still has to rebuild the cost impact and vendor orders later.",
];

export default function StructuralOptionsAsRoomsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <JsonLd json={blogSchema} />
      <Navbar />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-28">
        <Link href="/blog" className="mb-8 inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Back to Blog
        </Link>

        <Image src={heroImage} alt={heroImageAlt} width={1536} height={1024} priority className="mb-10 h-auto w-full rounded-2xl" />

        <div className="mb-8">
          <span className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-2.5 py-0.5 text-xs font-medium text-violet-400">Design Center</span>
          <h1 className="mb-5 text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
          <div className="flex items-center gap-3 text-sm text-slate-500"><span>August 31, 2026</span><span>·</span><span>7 min read</span></div>
        </div>

        <div className="prose prose-lg prose-invert max-w-none space-y-6 leading-relaxed text-slate-300">
          <p className="text-xl font-light text-slate-300">
            Most construction systems treat a finished basement, luxury bath, or flex room as a price-book line item: a name, a retail amount, and maybe a note. But the moment a buyer chooses one, it changes the actual home—its rooms, finishes, quantities, budget, and vendor work. The software should understand that too.
          </p>

          <p>
            Cornerstone PM™ treats structural options as first-class parts of the home. An option can become a room, contain several rooms, replace a base-plan room, or carve a smaller room out of a larger space. The committed choice then flows through the Design Center, live budget, cost codes, purchase orders, and delivery tickets without a second estimating pass.
          </p>

          <h2>The four structural-option problems spreadsheets never really solve</h2>
          <div className="not-prose grid gap-3">
            {problems.map((problem) => <div key={problem} className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/50 p-4"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" /><p className="text-sm leading-relaxed text-slate-300">{problem}</p></div>)}
          </div>

          <h2>1. Let the option become the room</h2>
          <p>
            A structural option should not stop at “Finished Basement.” It can act as its own selectable location, or it can own multiple rooms and zones. A finished basement might contain a main area and basement steps, each with different flooring quantities and choices.
          </p>
          <p>
            Buyers shop those option rooms in the same <Link href="/design" className="text-emerald-400 hover:text-emerald-300">Design Center</Link> as the base-plan rooms. They can choose carpet in the main area, LVP on the steps, or tile in another space, using the builder’s spec-level tiers and retail pricing. The option is no longer a vague allowance with no selections behind it; it is a real, finishable part of the home.
          </p>

          <h2>2. Replace the base room without deleting it</h2>
          <div className="not-prose my-7 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
            <div className="mb-3 flex items-center gap-3"><RefreshCcw className="h-6 w-6 text-emerald-400" /><h3 className="font-bold text-white">Luxury Owner&apos;s Bath replaces Standard Owner&apos;s Bath</h3></div>
            <p className="text-sm leading-relaxed text-slate-300">Commit the luxury bath and the standard bath drops out of that home&apos;s budget, selection list, and purchase orders. The option&apos;s own tile, flooring, cabinets, and quantities take its place. Un-pick it and the standard bath returns immediately.</p>
          </div>
          <p>
            That reversal matters. Cornerstone computes the home from the active choice; it does not destroy the floorplan template to force the math to work. One home can carry the luxury bath while the next home built from the same plan keeps the standard bath, with no duplicate templates or cleanup edits.
          </p>

          <h2>3. Net carve-outs so the same square foot is never sold twice</h2>
          <p>
            Consider a flex room framed inside a finished basement. The buyer still needs to choose flooring for both spaces, but the flex room&apos;s footprint no longer belongs to the open basement area. If software prices each room independently without understanding that relationship, the builder charges for the same floor twice.
          </p>
          <div className="not-prose my-7 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6">
            <div className="mb-3 flex items-center gap-3"><Scissors className="h-6 w-6 text-violet-400" /><h3 className="font-bold text-white">Room-aware carve-out netting</h3></div>
            <p className="text-sm leading-relaxed text-slate-300">Cornerstone nets the flex-room footprint from the basement at pricing time, class by class. Basement carpet and pad drop by exactly that footprint; tile, hardwood, and other alternates follow the same room relationship. Both rooms remain independently selectable without duplicate quantity.</p>
          </div>

          <h2>4. Carry the decision all the way to the vendor</h2>
          <p>
            The structural-option decision should not die at the sales desk. Once committed, it updates the live home budget, rolls costs up by cost code, and changes the quantities that feed purchasing. When the related construction task fires, Cornerstone can generate the purchase orders and delivery tickets and email them to the assigned vendors.
          </p>
          <p>
            Each option can also carry its under-air and under-roof square-footage impact. Requires and Conflicts rules keep impossible combinations out of the buyer&apos;s hands—a flex space can require a finished basement, while a ceiling-height upgrade can conflict with the standard ceiling configuration.
          </p>
          <div className="not-prose my-8 grid gap-4 sm:grid-cols-3">
            {["Buyer commits option", "Budget recomputes live", "POs reflect real rooms"].map((label, index) => <div key={label} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center"><Workflow className="mx-auto mb-3 h-6 w-6 text-emerald-400" /><p className="text-xs text-slate-500">Step {index + 1}</p><p className="mt-1 text-sm font-semibold text-white">{label}</p></div>)}
          </div>

          <h2>The better model: sell the home you will actually build</h2>
          <p>
            Structural options are not surcharges attached to a static plan. They alter the room graph of the home. When the system models that reality, buyers get accurate room-by-room choices, estimators stop maintaining manual deltas, purchasing receives the right quantities, and vendors see orders that match what will be installed.
          </p>

          <div className="not-prose mt-12 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">Model structural options as part of the home.</h2>
            <p className="mx-auto mb-6 max-w-xl text-slate-300">See how Cornerstone connects room-aware options, buyer selections, live budgets, and automated purchasing for production builders.</p>
            <Link href="/beta" className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-bold text-slate-950 transition-colors hover:bg-emerald-400">Request Early Access <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </article>

      <FAQSection title="Structural Options: Common Questions" subtitle="How room-aware structural options work from buyer choice through purchasing." items={faqItems} accentTextClass="text-white" />
      <Footer />
    </main>
  );
}
