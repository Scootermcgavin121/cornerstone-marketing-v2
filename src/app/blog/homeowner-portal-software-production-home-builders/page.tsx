import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Camera, MessageSquare } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/homeowner-portal-software-production-home-builders.png";
const heroImageAlt =
  "Homeowner portal dashboard showing construction progress, milestone checklist, and jobsite photo gallery for a production home builder";

const blogSchema = buildBlogPostSchema({
  title: "Why Buyers Call You for Updates You Already Have",
  slug: "homeowner-portal-software-production-home-builders",
  description:
    "Every 'just checking in' call from a buyer means the update already exists somewhere in your system — it just never reached them. How a homeowner portal closes that gap.",
  datePublished: "2026-09-12",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/home-builder-project-management-software",
  },
});

export const metadata: Metadata = {
  title: "Why Buyers Call You for Updates You Already Have — Cornerstone PM™ Blog",
  description:
    "Every 'just checking in' call from a buyer means the update already exists somewhere in your system — it just never reached them. How a homeowner portal closes that gap.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/homeowner-portal-software-production-home-builders",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1536,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const callDrivers = [
  {
    label: "“Where are we in the schedule?”",
    detail: "The buyer has no visibility into which phase is active or what's next",
  },
  {
    label: "“Did my selection get approved?”",
    detail: "Design center decisions live in the builder's system, not anywhere the buyer can see",
  },
  {
    label: "“Can you send more photos?”",
    detail: "Field photos get taken but stay attached to internal punch list or QA records",
  },
  {
    label: "“Who do I even ask?”",
    detail: "No single point of contact, so the buyer calls the sales rep, who forwards to the super, who forwards to the PM",
  },
  {
    label: "“What happened to the change order I signed?”",
    detail: "Paperwork is filed somewhere, but the buyer has no record of status or balance due",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What is a homeowner portal in construction software?",
    a: "A homeowner portal is a buyer-facing view into their home's build — schedule progress, approved selections, documents, and jobsite photos — pulled directly from the same records the builder's team already maintains. The buyer gets read access to real data instead of a status email written from memory.",
  },
  {
    q: "Does a homeowner portal require the buyer to create an account?",
    a: "In Cornerstone, the buyer gets a secure link tied to their home record. They can view progress without navigating a full software login, keeping the experience closer to a website than an enterprise tool they have to learn.",
  },
  {
    q: "How does the portal stay in sync with what the field team is doing?",
    a: "It doesn't sync — it reads live. The same schedule milestones the superintendent marks complete, the same selections the design center locks in, and the same photos uploaded from the jobsite populate the homeowner view automatically. There is no separate update step for anyone on the builder's team.",
  },
  {
    q: "What should a buyer NOT be able to see in the portal?",
    a: "Vendor pricing, internal margin, bid comparisons, and trade communication stay internal. The portal is scoped to what the buyer needs — progress, their own approved selections, their own documents, and photos of their home — not the builder's cost structure or vendor relationships.",
  },
  {
    q: "How does this reduce calls to the sales and construction team?",
    a: "Most buyer calls are status checks the builder could answer with a link instead of a phone tag chain. When the buyer can self-serve schedule status and photos, the calls that remain are the ones that actually need a person: change requests, concerns, or timeline questions specific to their home.",
  },
  {
    q: "Does the homeowner portal replace the sales pipeline or design center?",
    a: "No. It's a read-only window into records that already live in the sales pipeline and design center. The rep still owns the relationship and the design center still owns selection workflow — the portal just gives the buyer visibility without a manual update.",
  },
];

export default function HomeownerPortalPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* ImageObject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ImageObject",
              contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
              description: heroImageAlt,
              creditText: "Cornerstone PM™",
            }),
          }}
        />

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1536}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-sky-400 bg-sky-500/10 border-sky-500/20 mb-4 inline-block">
            Sales
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Buyers Call You for Updates You Already Have
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 12, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            A homeowner portal gives buyers direct, read-only access to their
            home's schedule, selections, documents, and jobsite photos —
            pulled straight from{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              the builder's own project management system
            </Link>{" "}
            — so the buyer stops calling for status updates the team already
            recorded three days ago.
          </p>

          <p>
            Every production builder has the same phone pattern. A buyer
            calls, not because anything is wrong, but because they have no
            way to know what's happening with their home other than asking a
            person. The information exists — a milestone was marked complete,
            a selection was locked in, photos were uploaded from the jobsite
            — it just never made it past the builder's internal systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What is actually driving the "just checking in" calls?
          </h2>

          <p>
            It's rarely one big communication failure. It's five small ones,
            repeated across every home in every community, every week.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-rose-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What buyers are actually asking
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {callDrivers.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            None of these questions require research. Every answer already
            sits in a record somewhere in the builder's software. The gap
            isn't information — it's access.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a homeowner portal close that gap?
          </h2>

          <p>
            Cornerstone gives each buyer a secure, read-only link tied to
            their home record. No separate login to remember, no app to
            install. The link opens a scoped view built from the same data
            the field and sales teams already maintain: schedule milestones
            as the superintendent marks them complete, selections as the
            design center locks them in, and photos as they're uploaded from
            the jobsite.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What the buyer sees — nothing the team has to re-enter
              </p>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                { label: "Schedule", value: "Live milestone progress, no manual status email" },
                { label: "Selections", value: "Approved design center choices, read-only" },
                { label: "Documents", value: "Contracts, change orders, disclosures" },
                { label: "Photos", value: "Jobsite photos as they're captured" },
                { label: "Contact", value: "Assigned rep and super, one place to ask" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="text-white font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-emerald-500/5 border-t border-emerald-500/20">
              <p className="text-xs text-emerald-400 font-medium">
                Every field populates automatically from existing records — zero duplicate entry
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What should stay out of the buyer's view?
          </h2>

          <p>
            A homeowner portal is scoped, not open. Vendor pricing, bid
            comparisons, internal margin, and trade-to-trade communication
            stay internal — the buyer never needs to see what a subcontractor
            quoted or how a change order was priced against cost. The portal
            shows outcomes, not the builder's cost structure.
          </p>

          <p>
            That scoping matters as much for trust as it does for
            confidentiality. Buyers who see a clean, focused view of their
            own home read it as transparency. Buyers who stumble into
            internal pricing or vendor disputes read it as a mistake —
            exactly the kind of thing that generates a worried call instead
            of preventing one.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does this actually reduce the call volume?
          </h2>

          <p>
            Most buyer calls are status checks the team could answer with a
            link. When a buyer can open the portal and see "Framing —
            Completed" and a fresh photo from Tuesday's walk, the call that
            would have asked exactly that never gets made. The calls that
            remain are the ones that need a person: a change request, a
            concern about a photo, a question specific to their home that no
            dashboard answers on its own.
          </p>

          <p>
            That's the same design principle behind{" "}
            <Link
              href="/blog/model-home-qr-lead-capture-home-builder-sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              model home QR lead capture
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/vendor-jobsite-qr-check-in-gps-weather-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor jobsite check-in
            </Link>
            : outside parties — buyers and vendors alike — should be able to
            get what they need without creating extra work for the builder's
            team. The homeowner portal applies that same principle to the
            entire build cycle, from contract to closing.
          </p>

          <p>
            Because the portal reads directly from the{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              sales pipeline
            </Link>{" "}
            and{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>
            , there is no separate update step. The rep who moves a buyer
            from "Under Contract" to "In Construction" and the designer who
            locks in a countertop selection are already doing the only work
            required — the portal just makes that work visible to the person
            who's been waiting to see it.
          </p>

          {/* What it gives you */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What a homeowner portal gives you
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                { label: "Fewer status calls", detail: "Buyers self-serve the questions that don't need a person" },
                { label: "Zero duplicate entry", detail: "Portal reads live from schedule, design center, and photos" },
                { label: "Scoped visibility", detail: "Buyers see their home's progress, not vendor pricing or internal notes" },
                { label: "One point of contact", detail: "Assigned rep and super clearly listed, no phone-tag chain" },
                { label: "Trust through transparency", detail: "A real-time view reads as confidence, not a status email written from memory" },
              ].map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Give every buyer a window into their own build.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              A homeowner portal built on{" "}
              <Link
                href="/home-builder-project-management-software"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Cornerstone's project management platform
              </Link>{" "}
              — live schedule, selections, documents, and photos, with zero
              extra data entry for your team.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        items={faqs}
        title="Homeowner Portal Software — FAQ"
        subtitle="How Cornerstone gives buyers a live, scoped view into their home's build without extra work for the builder's team."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
