import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, ListChecks, Mail } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/warranty-walkthrough-punch-list-home-builders.png";
const heroImageAlt =
  "Home builder warranty walkthrough software — 11-month punch list tracking homeowner items by room, severity, and assigned vendor";

const blogSchema = buildBlogPostSchema({
  title: "The 11-Month Warranty Walk Doesn't Have to Start From a Blank Legal Pad",
  slug: "warranty-walkthrough-punch-list-home-builders",
  description:
    "Homeowner warranty items called out during the 11-month walk get lost between the truck and the office more often than builders admit. Here's how to record the walk once and turn it straight into a tracked, vendor-assigned punch list.",
  datePublished: "2026-09-05",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/punchlist-ai",
  },
});

export const metadata: Metadata = {
  title:
    "Warranty Walkthrough Tracking for Home Builders — Cornerstone PM™ Blog",
  description:
    "Homeowner warranty items called out during the 11-month walk get lost between the truck and the office more often than builders admit. Here's how to record the walk once and turn it straight into a tracked, vendor-assigned punch list.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/warranty-walkthrough-punch-list-home-builders",
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

const failurePoints = [
  {
    label: "The legal pad",
    detail:
      "Customer care writes down what the homeowner points out room by room. The pad goes back to the truck. Half the items never make it into a system anyone else can see.",
  },
  {
    label: "The memory gap",
    detail:
      "By the time someone sits down to type the list into an email, an hour or a day has passed. Items get paraphrased, downgraded in severity, or dropped entirely.",
  },
  {
    label: "The vendor scramble",
    detail:
      "Once the list exists, someone still has to figure out which vendor owns the grout repair versus the trim touch-up versus the garage door adjustment, then email each one separately.",
  },
  {
    label: "No proof of what was said",
    detail:
      "If a homeowner later disputes what was or wasn't covered, there's no recording of the actual walk — just secondhand notes.",
  },
];

const faqs: FAQItem[] = [
  {
    q: "What is a warranty walkthrough in home building?",
    a: "A warranty walkthrough (often at the 11-month mark, just before a builder's one-year warranty period expires) is a visit where the homeowner walks the house with customer care and points out any items they want addressed before warranty coverage ends. It's distinct from the pre-drywall, final, and vendor closeout walks that happen earlier in construction.",
  },
  {
    q: "How does Punchlist AI handle the 11-month warranty walk?",
    a: "Customer care records the walkthrough on their phone the same way they would a final walk — talking through each item as they move room to room. Punchlist AI transcribes the audio, reads the video, tags each item's location, trade, and severity, and adds it to the home's existing punch list rather than starting a new one.",
  },
  {
    q: "Does the warranty walk create a separate punch list from earlier walks?",
    a: "No. Punchlist AI supports multi-walkthrough comparison across the pre-drywall, final, vendor closeout, and warranty walks on the same home. Each pass adds to the one punch list tied to that home's build record instead of overwriting it, so there's a full history of every item raised at every stage.",
  },
  {
    q: "Who gets notified about warranty punch list items?",
    a: "Punchlist AI auto-assigns each item to the vendor who owns that scope — the painter for touch-ups, the plumber for a fixture issue, the flooring sub for a transition gap — then groups every item for the same vendor into a single email. A vendor with four warranty items gets one message, not four.",
  },
  {
    q: "Can we upload a home inspector's report instead of recording a video?",
    a: "Yes. Punchlist AI also accepts a PDF inspection report directly. It reads every finding line by line, extracts the inspector's own embedded photos, and attaches them to the matching punch item — useful if a third-party inspector does the warranty visit instead of in-house customer care.",
  },
  {
    q: "How is this different from writing warranty items on paper and emailing them later?",
    a: "The walk itself becomes the record. There's no re-typing step where items get paraphrased or dropped, no delay between the visit and the vendor being notified, and no separate spreadsheet to reconcile against the home's build history — the item lands in the same punch list that's already tied to that home's rooms, trades, and vendors.",
  },
  {
    q: "Does Cornerstone track whether a warranty item was actually resolved?",
    a: "Yes. Each item moves from open to verified-complete, and a vendor can attach a photo of the fix when they close it out. That gives customer care a documented resolution instead of a homeowner's word that something was eventually handled.",
  },
];

export default function WarrantyWalkthroughPunchListPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Customer Care
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            The 11-Month Warranty Walk Doesn&apos;t Have to Start From a Blank
            Legal Pad
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 5, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Recording the 11-month warranty walk the same way you record any
            other{" "}
            <Link
              href="/punchlist-ai"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              punch list walkthrough
            </Link>{" "}
            turns a homeowner&apos;s spoken list of concerns directly into
            tracked, vendor-assigned tasks on the home&apos;s existing punch
            list — no legal pad, no re-typing, no items lost between the
            truck and the office.
          </p>

          <p>
            Almost every builder runs the warranty walk the same way: someone
            from customer care shows up around month eleven, walks the house
            with the homeowner, and writes down whatever gets pointed out. A
            loose cabinet hinge. A caulk line that pulled away from the tub.
            A door that sticks in humid weather. By any measure it&apos;s a
            simple task. What happens to that list afterward is where it
            falls apart.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where do warranty items actually get lost?
          </h2>

          <p>
            Not at the walk itself — homeowners are generally clear about
            what bothers them. The loss happens in the handoff between the
            visit and the system of record:
          </p>

          <div className="not-prose space-y-3 my-6">
            {failurePoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <span className="text-xl shrink-0">⚠️</span>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">
                    {point.label}
                  </p>
                  <p className="text-sm text-slate-400">{point.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            None of these failure points are about customer care not caring.
            They&apos;re about a workflow that requires a manual re-entry step
            between the moment an item is identified and the moment a vendor
            actually finds out about it. Every re-entry step is a chance for
            an item to get dropped, softened, or delayed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does recording the walk change the outcome?
          </h2>

          <p>
            The mechanics are no different from a final walk or a
            pre-drywall walk. Customer care opens the home in Cornerstone PM,
            taps record, and walks the rooms talking through what the
            homeowner points out — &quot;replace this cabinet hinge, reseal
            the caulk around the tub, the office door needs planing.&quot;{" "}
            <Link
              href="/punchlist-ai"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Punchlist AI
            </Link>{" "}
            ingests the footage and audio, identifies each issue, infers
            severity, pins the room, and links it to the trade that owns the
            fix. There&apos;s no intermediate list — the walk itself is the
            data entry.
          </p>

          <p>
            Because Punchlist AI supports multi-walkthrough comparison, the
            warranty walk doesn&apos;t start a new list from zero. It adds to
            the same punch list already tied to that home from the
            pre-drywall, final, and vendor closeout walks — so customer care
            can see the home&apos;s full history in one place instead of
            hunting through separate spreadsheets from separate stages of the
            build.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <ListChecks className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What happens after the walk ends
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-emerald-400" />
                  Every item lands on the home&apos;s punch list
                </p>
                <p className="text-sm text-slate-400">
                  With a room, a trade, a severity tag, and — if the item was
                  caught on camera — a thumbnail as evidence of what was
                  flagged.
                </p>
              </div>
              <div className="px-5 py-4">
                <p className="text-sm font-semibold text-white mb-1 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  Vendors get one grouped email, not several
                </p>
                <p className="text-sm text-slate-400">
                  Every warranty item for the same vendor — say, three
                  separate trim callouts — arrives as one message with a
                  clean checklist, instead of three separate pings the
                  vendor might triage out of order.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does a recorded walk hold up if a homeowner disputes coverage?
          </h2>

          <p>
            It doesn&apos;t replace a builder&apos;s warranty terms, but it
            does remove the ambiguity of secondhand notes. Instead of &quot;the
            homeowner said the cabinet hinge was loose, according to what
            customer care wrote down afterward,&quot; there&apos;s a recorded
            walkthrough of the actual visit, timestamped, with the item
            already tagged to a room and a trade at the moment it was raised
            — and a resolved status with a photo once the vendor closes it
            out.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What if the warranty visit is handled by a third-party inspector?
          </h2>

          <p>
            Some builders bring in an outside inspector for the warranty
            visit rather than sending customer care. Punchlist AI handles
            that path too — upload the inspector&apos;s PDF report instead of
            recording video, and the AI reads every finding line by line,
            pulls the inspector&apos;s own embedded photos out of the report,
            and attaches them to the matching punch item. Either path, video
            or PDF, ends at the same place: a tagged, vendor-assigned item on
            the home&apos;s existing punch list.
          </p>

          <p>
            The warranty walk is the last structured touchpoint most builders
            have with a homeowner before the relationship shifts from
            &quot;under construction&quot; to &quot;living in it.&quot; Whether that visit ends
            in a clean, tracked handoff to vendors or a legal pad that
            someone has to decipher later shouldn&apos;t depend on how busy
            customer care happens to be that week.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop re-typing what the homeowner already told you.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Punchlist AI turns every pre-drywall, final, vendor closeout, and
              warranty walk into a tracked, vendor-assigned punch list on the
              home&apos;s existing record — built into Cornerstone PM.
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
        title="Warranty Walkthrough Tracking — FAQ"
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
