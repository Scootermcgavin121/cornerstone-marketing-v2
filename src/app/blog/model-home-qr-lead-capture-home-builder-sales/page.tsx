import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, QrCode, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/model-home-qr-lead-capture.png";
const heroImageAlt =
  "Home builder lead capture at a model home — buyer scans a QR code and a tracked lead appears in the builder sales pipeline";

const blogSchema = buildBlogPostSchema({
  title: "The Model Home Sign-In Sheet Is Costing You Leads",
  slug: "model-home-qr-lead-capture-home-builder-sales",
  description:
    "Paper sign-in sheets lose half your model home traffic. How a QR code at the door turns every walk-in into a tracked lead in your builder CRM.",
  datePublished: "2026-08-14",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/sales",
  },
});

export const metadata: Metadata = {
  title:
    "The Model Home Sign-In Sheet Is Costing You Leads — Cornerstone PM™ Blog",
  description:
    "Paper sign-in sheets lose half your model home traffic. How a QR code at the door turns every walk-in into a tracked lead in your builder CRM.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/model-home-qr-lead-capture-home-builder-sales",
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

const leakPoints = [
  {
    label: "Illegible handwriting",
    detail: "Half the names and phone numbers on a paper sheet are unusable by Monday",
  },
  {
    label: "Delayed transcription",
    detail: "The rep who collected the clipboard may not enter it for days — or at all",
  },
  {
    label: "No community attribution",
    detail: "You know someone visited, but not which community, which model, or which day drove them there",
  },
  {
    label: "Cold leads by follow-up time",
    detail: "A lead that goes uncontacted for 48 hours converts at a fraction of one touched within the hour",
  },
  {
    label: "No rep assignment",
    detail: "Walk-ins often fall through the cracks when there is no automatic routing to the right sales agent",
  },
];

const faqs: FAQItem[] = [
  {
    q: "How does a model home QR code capture leads without a paper sign-in?",
    a: "A buyer scans the QR code at the model home entrance with their phone camera — no app download required. The scan opens a short web form that collects their name, phone, and email and instantly creates a lead record in Cornerstone, attributed to the exact community and model they were visiting.",
  },
  {
    q: "What information does a QR scan capture automatically?",
    a: "Each scan records the community, the model home, the date and time, and the floorplan of interest. That attribution happens automatically so no one has to type it in afterward — the lead arrives in the pipeline already tagged with the context the sales team needs to follow up.",
  },
  {
    q: "How does QR lead capture connect to the sales pipeline?",
    a: "The lead flows directly into the Cornerstone sales pipeline, where it can be assigned to a rep, moved through stages (New, Contacted, Touring, Under Contract), and connected to the design center when the buyer is ready to make selections. There is no import step or manual handoff.",
  },
  {
    q: "Does the buyer need to create an account or download an app?",
    a: "No. The QR scan opens a lightweight web page. The buyer fills in their contact info and submits — that is the entire interaction. Cornerstone creates the lead record on the backend. No Cornerstone account, no app, no friction.",
  },
  {
    q: "How does the sales rep get notified when a new lead comes in?",
    a: "Cornerstone sends a notification to the assigned rep when a new lead is created via model home QR scan. Notification preferences are per-user and role-based, so the alert goes to the right person rather than pinging the entire office.",
  },
  {
    q: "Can the same QR system track traffic across multiple model homes?",
    a: "Yes. Each model home in each community has its own QR code, so lead attribution is precise — you know exactly which model and which community drove each walk-in, not just that someone visited somewhere.",
  },
  {
    q: "How is model home QR lead capture different from a vendor jobsite QR?",
    a: "The model home QR is a sales tool: it captures buyer contact info and routes to the sales pipeline. The vendor jobsite QR is an operations tool: it logs GPS-verified trade check-ins with weather and photos against a home's build record. Both are no-account, no-app flows built around the same no-friction design principle.",
  },
];

export default function ModelHomeQRLeadCapturePage() {
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
            The Model Home Sign-In Sheet Is Costing You Leads
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 14, 2026</span>
            <span>&middot;</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A QR code at the model home entrance captures every walk-in as a named,
            attributed lead the moment they scan — no clipboard, no transcription,
            no cold call two days later.{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s sales pipeline
            </Link>{" "}
            connects that lead directly to the right community, the right rep, and
            eventually the design center where the buyer makes selections.
          </p>

          <p>
            The clipboard by the model home door has been there so long that most
            builders treat it as permanent infrastructure. It is not. It is a lead-
            generation hole, and the buyers who walk through your model home and
            write a phone number on a paper sheet are not in your pipeline — they
            are in a stack of paper that may or may not make it to a spreadsheet
            before the week is out.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Where does the paper sign-in sheet actually leak?
          </h2>

          <p>
            The lead does not disappear in one dramatic moment. It leaks across
            five smaller failures, any one of which is enough to lose the contact.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Users className="w-4 h-4 text-rose-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Where paper sign-in sheets lose leads
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {leakPoints.map((row, i) => (
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
            The result is that a builder who runs a busy model home on a weekend
            might collect thirty names on paper and have ten usable leads to call
            on Monday. The other twenty paid to drive to the model, walk through,
            and get interested — and then nothing.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does QR lead capture work at a model home?
          </h2>

          <p>
            Cornerstone generates a QR code for each model home in each community.
            A builder posts it at the entrance — on a sign, on a door, on a table
            by the brochures — and the buyer scans it with their phone camera.
          </p>

          <p>
            No app download. No Cornerstone account. The scan opens a lightweight
            web page where the buyer enters their name, phone, and email. When they
            submit, Cornerstone creates a lead record instantly, stamped with the
            community name, the model home, the floorplan of interest, the date,
            and the time. The lead is already attributed before anyone picks up the
            phone to follow up.
          </p>

          {/* Demo card */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <QrCode className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Lead created via model home QR scan
              </p>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                { label: "Name", value: "Sarah M." },
                { label: "Community", value: "Clearwater Commons" },
                { label: "Model", value: "Magnolia Model Home" },
                { label: "Floorplan", value: "Magnolia 2,240 sqft" },
                { label: "Source", value: "Model Home QR Scan" },
                { label: "Captured", value: "Aug 14, 2026 — 11:04 AM" },
                { label: "Assigned Rep", value: "Taylor P." },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">{row.label}</span>
                  <span className="text-white font-medium">{row.value}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-emerald-500/5 border-t border-emerald-500/20">
              <p className="text-xs text-emerald-400 font-medium">
                Lead created instantly — no manual entry, no transcription delay
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does attribution matter for production builders?
          </h2>

          <p>
            Generic CRM tools tell you someone became a lead. Cornerstone tells you
            which community, which model, and which floorplan drove that interest —
            because the QR code is tied to a specific model in a specific community,
            not just a generic sign-in page.
          </p>

          <p>
            That attribution changes how builders manage inventory, marketing spend,
            and rep assignment. If Clearwater Commons is generating twice the walk-in
            traffic of Meadow Vista, that is a routing and staffing signal, not just
            a curiosity. If the Magnolia model is drawing buyers who ultimately
            contract on the Sierra plan, that is a merchandising insight.
          </p>

          <p>
            Production home builders run multiple communities simultaneously, and
            knowing <em>which</em> community and model drove a lead is as important
            as capturing the lead at all. A paper sheet with no community field
            cannot give you that.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the lead connect to the rest of the platform?
          </h2>

          <p>
            The model home QR lead flows directly into{" "}
            <Link
              href="/sales"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s sales pipeline
            </Link>
            , where it moves through stages — New Lead, Contacted, Touring, Under
            Contract — with the assigned rep tracking conversations and next steps.
            When the buyer is ready to make selections, the same record carries into
            the{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>
            , so the rep does not re-enter contact or community information at the
            handoff.
          </p>

          <p>
            Notification preferences are per-user and role-based, so the rep
            assigned to Clearwater Commons gets an alert when a new lead arrives at
            that community&apos;s model — not a broadcast to the whole sales team.
            The right person follows up within minutes, not days.
          </p>

          <p>
            For builders running QR codes on the operations side — the{" "}
            <Link
              href="/blog/vendor-jobsite-qr-check-in-gps-weather-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor jobsite check-in QR
            </Link>{" "}
            that GPS-stamps trade arrivals — the model home QR is the same
            no-account, no-app design principle applied to the sales side. Outside
            parties — buyers and vendors alike — should never need a login to
            interact with your operation.
          </p>

          {/* What it gives you */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What model home QR lead capture gives you
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                { label: "Instant lead record", detail: "Created at scan time — no transcription, no delay" },
                { label: "Community and model attribution", detail: "Every lead tagged with exactly where they visited" },
                { label: "Automatic rep assignment", detail: "Route by community so the right agent follows up" },
                { label: "No buyer friction", detail: "Phone camera + short form — no app, no account" },
                { label: "Pipeline connection", detail: "Flows into the sales pipeline and eventually the design center" },
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
              Every walk-in, captured — before they reach the parking lot.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Replace the clipboard with a QR code that routes walk-in traffic
              directly into your{" "}
              <Link
                href="/sales"
                className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
              >
                Cornerstone sales pipeline
              </Link>
              , attributed to the right community and rep, with zero data entry.
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
        title="Model Home QR Lead Capture — FAQ"
        subtitle="How Cornerstone turns model home walk-ins into tracked, attributed leads without a paper sign-in sheet."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
