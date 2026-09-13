import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Camera } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/jobsite-ai-vendor-presence-detection-home-builders.png";
const heroImageAlt =
  "Construction schedule dashboard showing a task auto-starting after Jobsite AI vendor presence detection from a jobsite camera";

const blogSchema = buildBlogPostSchema({
  title: "The Vendor Showed Up. Does Your Schedule Know Yet?",
  slug: "jobsite-ai-vendor-presence-detection-home-builders",
  description:
    "Most schedules only update when someone remembers to log in. See how vendor presence detection auto-starts the matching task the moment a trade arrives on site — no phone call required.",
  datePublished: "2026-09-13",
  mentionsProduct: {
    name: "Cornerstone PM Jobsite AI",
    url: "https://www.cornerstonepm.ai/jobsite-ai",
  },
});

export const metadata: Metadata = {
  title:
    "The Vendor Showed Up. Does Your Schedule Know Yet? — Cornerstone PM™ Blog",
  description:
    "Most schedules only update when someone remembers to log in. See how vendor presence detection auto-starts the matching task the moment a trade arrives on site — no phone call required.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/jobsite-ai-vendor-presence-detection-home-builders",
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

const sourceRows = [
  { label: "Jobsite cameras", detail: "Sensera, OxBlue, EarthCam, Reolink, Verkada — any brand" },
  { label: "Smart doorbells", detail: "Ring or Nest at the model home or trailer" },
  { label: "Gate & badge systems", detail: "Brivo, Openpath, ButterflyMX, gate keypads" },
  { label: "GPS fleet tracking", detail: "Samsara, Verizon Connect, Geotab geofence triggers" },
  { label: "Manual check-in", detail: "Vendor taps Arrived in a mobile portal — counts the same" },
  { label: "Any webhook source", detail: "If it can POST an event, Cornerstone can turn it into a task update" },
];

const faqs: FAQItem[] = [
  {
    q: "What is vendor presence detection in construction software?",
    a: "Vendor presence detection is a system that recognizes when a subcontractor physically arrives at or leaves a jobsite — using a camera, doorbell, gate system, GPS geofence, or manual check-in — and automatically updates the matching task on the construction schedule instead of waiting for someone to log the status by hand.",
  },
  {
    q: "Do I need a specific camera brand for Jobsite AI to work?",
    a: "No. Jobsite AI is camera-agnostic and sensor-agnostic. It ingests events from Sensera, OxBlue, EarthCam, Reolink, Verkada, Ring, Nest, Brivo, Openpath, Samsara, Geotab, or any system that can send a webhook. If a builder already has cameras or gate access installed, those can usually be wired in without buying new hardware.",
  },
  {
    q: "What happens when a vendor arrives on site?",
    a: "The source (camera, gate, GPS, or check-in app) sends an arrival event. Cornerstone matches the vendor to the active task on that home using the registered camera, a direct home ID, or a community-level fallback, then flips the matching scheduled task to In Progress and attaches photo evidence to the task's audit log.",
  },
  {
    q: "Does this replace manual check-ins entirely?",
    a: "No — it makes manual check-ins optional rather than mandatory. A vendor who taps Arrived in a mobile portal still counts as a valid presence event. The point is that the schedule no longer depends on a human remembering to log status; whichever signal arrives first updates the task.",
  },
  {
    q: "What if an unrecognized vehicle shows up on site?",
    a: "Cornerstone fires a presence.unknown event for a vehicle or person that doesn't match a known vendor, so the builder finds out within minutes instead of discovering it after something goes missing from the lot.",
  },
  {
    q: "Does automated presence tracking feed vendor performance data?",
    a: "Yes. Arrival and departure timestamps build real on-time percentages, average hours on site, and no-show rates per vendor — data pulled from actual events rather than a superintendent's memory — which then feeds bid-award decisions and vendor scorecards.",
  },
];

export default function JobsiteAIBlogPage() {
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
            Scheduling
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            The Vendor Showed Up. Does Your Schedule Know Yet?
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 13, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">
          <p className="text-xl text-slate-300 font-light">
            Most construction schedules only update when a superintendent
            remembers to log in and mark a task started. Cornerstone&apos;s{" "}
            <Link
              href="/jobsite-ai"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Jobsite AI
            </Link>{" "}
            skips that step entirely — the moment a vendor arrives on site,
            from any camera, gate, or GPS signal already in place, the
            matching task flips to In Progress on its own.
          </p>

          <p>
            Ask any superintendent how they know a trade is actually on site,
            and the honest answer is usually &ldquo;I drove by&rdquo; or
            &ldquo;they texted me.&rdquo; The schedule itself — the system of
            record everyone else is supposed to be reading — lags reality by
            hours, sometimes a full day. Multiply that across 20 or 30 active
            homes in a community and the gap between what the schedule says
            and what&apos;s actually happening on the ground becomes the
            default state, not the exception.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does the schedule lag what&apos;s happening on site?
          </h2>

          <p>
            Because logging status has always required a person to stop what
            they&apos;re doing and do data entry. A framer shows up at 7 AM
            and starts working — nobody opens an app to record that. The task
            gets marked &ldquo;In Progress&rdquo; hours later, if at all,
            usually when someone checks in for an unrelated reason. That lag
            means every dashboard, every report, every downstream automation
            built on top of the schedule is working from stale data.
          </p>

          <p>
            Builders already own the hardware that could close this gap.
            Jobsite cameras, model-home doorbells, gate access systems, and
            GPS-tracked vendor fleets all know exactly when a truck rolls
            onto a lot. That signal just never made it back to the
            construction schedule — until now.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does vendor presence detection actually work?
          </h2>

          <p>
            When a source detects a vendor — a camera catching a truck, a
            gate badge scan, a GPS geofence trigger — it sends an event to
            Cornerstone. The matching engine resolves which home the event
            belongs to (a registered camera maps directly to a home, with
            community-level and location-based fallbacks for anything less
            precise), finds the active scheduled task for that vendor, and
            flips it to{" "}
            <span className="text-emerald-400 font-semibold">
              In Progress
            </span>
            . A departure event later closes the loop, logging real hours on
            site instead of an estimate.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Camera className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Sources Jobsite AI already reads from
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {sourceRows.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-white">{row.label}</p>
                    <p className="text-sm text-slate-400 mt-0.5">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 bg-emerald-500/5 border-t border-emerald-500/20">
              <p className="text-xs text-emerald-400 font-medium">
                Camera-agnostic, sensor-agnostic — if it can fire a webhook, it works.
              </p>
            </div>
          </div>

          <p>
            A vendor who doesn&apos;t have a smart camera or gate on their
            route isn&apos;t left out. Manual check-in through a mobile
            portal counts exactly the same as an automated detection — the
            schedule doesn&apos;t care which signal arrived first, only that
            one did.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens when a vendor doesn&apos;t show up?
          </h2>

          <p>
            The same detection layer that confirms arrivals also flags
            absences. If a vendor scheduled for a start window never
            triggers a presence event, the project manager gets a heads-up
            before the day is lost — instead of discovering a no-show at 4
            PM when nothing on the lot has moved. An unrecognized vehicle on
            site triggers its own alert, giving builders a security signal
            they didn&apos;t have to build themselves.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does this matter more at production scale?
          </h2>

          <p>
            A custom builder running two jobs can eyeball both lots in a
            morning drive-by. A production builder running dozens of active
            homes across multiple communities can&apos;t — and shouldn&apos;t
            need to. Presence detection turns &ldquo;is the framer there
            yet?&rdquo; from a phone call into a fact that&apos;s already on
            the{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              community schedule
            </Link>{" "}
            before anyone thinks to ask.
          </p>

          <p>
            It also compounds with everything else already running on
            schedule events. Cornerstone&apos;s{" "}
            <Link
              href="/blog/cascade-scheduling-construction-delays-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              cascade scheduling
            </Link>{" "}
            reacts to task status changes the same way whether a
            superintendent typed the update or a camera detected it — so an
            auto-started task still ripples correctly through downstream
            dependencies, and{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchase orders
            </Link>{" "}
            tied to that task still fire on schedule.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What builders get without extra data entry
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {[
                { label: "Real start and end times", detail: "Timestamps from actual events, not what someone remembered at 5 PM" },
                { label: "Photo evidence on every transition", detail: "A snapshot attaches automatically to the task's audit log" },
                { label: "No-show alerts", detail: "Flagged before the missed day is unrecoverable" },
                { label: "Vendor scorecards built on facts", detail: "On-time percentage and hours on site feed future bid-award decisions" },
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

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this fit the rest of the platform?
          </h2>

          <p>
            Jobsite AI sits inside Cornerstone&apos;s{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              home builder project management platform
            </Link>
            , not off to the side of it. A presence event updates the same
            schedule that drives cascade rescheduling, feeds the same
            purchasing module that generates POs from assigned tasks, and
            writes to the same audit trail builders already rely on for
            disputes and QA. There&apos;s no separate presence-tracking tool
            to reconcile against the schedule of record — it is the schedule
            of record, just updated by the jobsite instead of by hand.
          </p>

          <p>
            None of this requires new hardware for most builders. If a
            camera, gate system, or fleet tracker already exists on a
            community, the only step is wiring its webhook into Cornerstone.
            The schedule stops depending on someone remembering to log in —
            it starts reporting itself.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Let the jobsite update its own schedule.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Jobsite AI turns cameras, gates, and GPS signals you already
              have into automatic task updates — no phone calls, no manual
              check-ins required. See it running on a live schedule.
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
        title="Vendor Presence Detection — FAQ"
        subtitle="How Cornerstone's Jobsite AI auto-updates the construction schedule from cameras, gates, and GPS signals builders already have."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
