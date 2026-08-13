import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, QrCode } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vendor-jobsite-qr-checkin.png";
const heroImageAlt =
  "Jobsite check in software for home builders — vendor scans a lot QR code and the visit is logged with GPS and weather";

const blogSchema = buildBlogPostSchema({
  title: "Vendor Jobsite QR Check-In: Proof of Who Was on the Lot, and When",
  slug: "vendor-jobsite-qr-check-in-gps-weather-home-builders",
  description:
    "A QR sign on the lot turns every vendor visit into a GPS-stamped, weather-logged record. How jobsite check-in works for production home builders.",
  datePublished: "2026-08-13",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

export const metadata: Metadata = {
  title:
    "Vendor Jobsite QR Check-In: Proof of Who Was on the Lot, and When — Cornerstone PM™ Blog",
  description:
    "A QR sign on the lot turns every vendor visit into a GPS-stamped, weather-logged record. How jobsite check-in works for production home builders.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/vendor-jobsite-qr-check-in-gps-weather-home-builders",
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

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Set Up Vendor Jobsite QR Check-In in Cornerstone PM",
  description:
    "Use Cornerstone PM's QR-based jobsite check-in to turn every vendor visit into a GPS-stamped, weather-logged, photo-backed record without requiring any vendor app or login.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Generate the lot QR code in Cornerstone",
      text: "Navigate to the home or lot in Cornerstone PM and open the QR settings. Cornerstone generates a unique, token-protected QR code for that lot. No vendor account is required — the token is the proof of place.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Print and post the QR sign on the lot",
      text: "Print the QR code on weatherproof signage and post it at the lot entrance or on the home itself. The sign can include the community name, lot number, and address so there is no ambiguity about which job it covers.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Vendor scans the code with their phone camera",
      text: "Any vendor, subcontractor, or inspector scans the QR code using their phone's native camera — no app download, no Cornerstone login. The scan opens a simple web page that records the check-in.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "GPS, weather, and timestamp log automatically",
      text: "The moment the code is scanned, Cornerstone logs the GPS coordinates, the current weather conditions, and the timestamp. Because GPS must match the lot address, a scan from across town cannot fake a jobsite visit.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Vendor attaches a progress photo (optional)",
      text: "After checking in, the vendor can snap and attach a progress photo directly through the same web page. The photo logs alongside the GPS and weather data against the home record in Cornerstone.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Review the check-in log in Cornerstone",
      text: "Superintendents and project managers can see every check-in event from the home's record in Cornerstone — vendor name, time, GPS confirmation, weather at the time, and any attached photos. Webhook events fire for each check-in so builders can pipe the data into SMS alerts, dashboards, or their own tooling.",
    },
  ],
};

const checkInFeatures = [
  {
    label: "No vendor app required",
    detail: "Any phone camera scans the QR — no download, no Cornerstone login",
  },
  {
    label: "GPS-verified location",
    detail: "The scan must happen at the lot address — remote fakes fail",
  },
  {
    label: "Automatic weather logging",
    detail: "Conditions at scan time are recorded — rain delays documented, not remembered",
  },
  {
    label: "Progress photo attachment",
    detail: "Vendor attaches a photo of work completed at the moment of check-in",
  },
  {
    label: "Timestamped audit trail",
    detail: "Every visit is a permanent record against the home in Cornerstone",
  },
  {
    label: "Webhook events",
    detail: "Pipe check-ins into SMS, dashboards, or your own tooling via webhook",
  },
];

const checkInLog = [
  {
    vendor: "Lopez Framing",
    lot: "Lot 7",
    time: "7:42 AM",
    weather: "Partly Cloudy 68°F",
    status: "GPS Verified",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    vendor: "Plumb Right",
    lot: "Lot 12",
    time: "8:15 AM",
    weather: "Clear 72°F",
    status: "GPS Verified",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    vendor: "Elite Electric",
    lot: "Lot 14",
    time: "9:03 AM",
    weather: "Clear 71°F",
    status: "GPS Verified",
    statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
];

export default function VendorJobsiteQRCheckInPage() {
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

        {/* HowTo JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

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
            Vendor Jobsite QR Check-In: Proof of Who Was on the Lot, and When
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 13, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            A QR code posted on the lot turns every vendor visit into a GPS-stamped,
            weather-logged, timestamped record — no app download, no Cornerstone
            login, and no way to scan from a couch three miles away.{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s jobsite check-in
            </Link>{" "}
            ends the &ldquo;the framer says he was there Tuesday&rdquo; argument
            with a timestamped record that proves it.
          </p>

          <p>
            Every builder has had the version of this conversation where two people
            are certain of opposite things. The superintendent is sure the lot was
            empty on Tuesday morning. The framer is equally sure he had a crew out
            there. There is no paper trail. There is nothing to arbitrate the dispute
            except memory, and memory doesn&apos;t help when a schedule slips or a delay
            claim arrives.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does jobsite QR check-in work?
          </h2>

          <p>
            Cornerstone generates a unique, token-protected QR code for each home
            or lot. A builder prints it on weatherproof signage — typically with the
            community name, lot number, and address — and posts it at the site.
          </p>

          <p>
            When a vendor arrives, they point their phone camera at the sign. No app
            download. No Cornerstone account. The scan opens a lightweight web page
            that logs the check-in and, critically, captures GPS coordinates at the
            moment of the scan. Because the GPS has to match the lot&apos;s address, a
            vendor cannot check in from their truck parked downtown and claim they
            were on site.
          </p>

          <p>
            Alongside the GPS and timestamp, Cornerstone automatically logs the
            weather conditions at that moment — temperature, sky, precipitation.
            A rain delay stops being a verbal claim and becomes a documented condition.
            Vendors can also attach a progress photo before they leave, which ties
            directly to the home record in Cornerstone.
          </p>

          {/* Check-in log demo */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <QrCode className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Clearwater Commons — Jobsite Check-In Log
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {checkInLog.map((row, i) => (
                <div key={i} className="px-5 py-3.5 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{row.vendor}</p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {row.lot} &middot; {row.time} &middot; {row.weather}
                    </p>
                  </div>
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${row.statusColor}`}
                  >
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Each check-in logs GPS coordinates, weather conditions, and
                timestamp — permanent records against the home in Cornerstone.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why not just require vendors to log into the software?
          </h2>

          <p>
            Vendors who have to create an account to confirm they showed up for a
            two-hour task will find a reason not to. This is the same logic behind
            Cornerstone&apos;s no-login{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              vendor bid portal
            </Link>
            : the fewer steps between a trade and a completed action, the higher the
            compliance rate. A QR sign on a stake and a phone camera the vendor
            already has is zero friction.
          </p>

          <p>
            The token embedded in the QR code is the authentication. It is tied to
            that specific lot, so it cannot be reused on a different job or shared
            across communities. The vendor does not need a Cornerstone seat, and
            the builder does not need to manage vendor credentials.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to set up vendor jobsite QR check-in
          </h2>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                step: "1",
                title: "Generate the lot QR code in Cornerstone",
                detail:
                  "Navigate to the home or lot and open the QR settings. Cornerstone generates a unique, token-protected code for that address — no vendor account required.",
              },
              {
                step: "2",
                title: "Print and post the sign on the lot",
                detail:
                  "Print on weatherproof signage and post at the lot entrance. Include the community name, lot number, and address so there is no ambiguity about which job it covers.",
              },
              {
                step: "3",
                title: "Vendor scans with their phone camera",
                detail:
                  "Any phone camera works — no app download, no Cornerstone login. The scan opens a web page that handles the rest.",
              },
              {
                step: "4",
                title: "GPS, weather, and timestamp log automatically",
                detail:
                  "Cornerstone records coordinates, weather conditions, and the exact time of the scan. The GPS must match the lot address — a remote scan fails the check.",
              },
              {
                step: "5",
                title: "Vendor attaches a progress photo (optional)",
                detail:
                  "From the same web page, the vendor can snap and attach a photo. It logs alongside the GPS and weather data against the home record.",
              },
              {
                step: "6",
                title: "Review the log in Cornerstone — or pipe it via webhook",
                detail:
                  "Superintendents see every check-in from the home's record. Each event also fires a webhook, so builders can route check-ins into SMS alerts, dashboards, or their own tooling.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm shrink-0">
                  {s.step}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white mb-1">{s.title}</p>
                  <p className="text-sm text-slate-400">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the weather log actually get you?
          </h2>

          <p>
            Weather logging sounds like a nice-to-have until the moment you need it.
            A slab subcontractor claims the pour was delayed because of rain on
            Thursday. Without documentation, that is a he-said conversation. With
            Cornerstone&apos;s check-in log, you have the actual conditions at the time
            of the scan — temperature, precipitation status, sky conditions — attached
            to the lot and the date. If it says &ldquo;Clear 72°F&rdquo; at the scan,
            the rain-delay claim does not hold up.
          </p>

          <p>
            This matters most at month-end when trades are explaining why a draw is
            late or a task is behind. A construction schedule that lives in a{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              platform with cascade scheduling
            </Link>{" "}
            and check-in documentation is a fundamentally different dispute-resolution
            tool than a whiteboard and a stack of text messages.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does check-in connect to the rest of the build?
          </h2>

          <p>
            A check-in event in Cornerstone is not a standalone record. It sits
            against the home alongside the task schedule, the PO history, and the
            vendor assignment. When a trade checks in, a superintendent watching
            that lot sees the event in context — before framing is complete, after
            rough plumbing is done, on the same timeline that drives cascade
            scheduling downstream.
          </p>

          <p>
            Each check-in also fires a webhook event. Builders who want real-time
            SMS alerts when a trade arrives on a lot can wire that up without writing
            glue code.{" "}
            <Link
              href="/blog/webhook-events-construction-software-automation"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone ships 37 typed webhook events
            </Link>{" "}
            with HMAC signatures and delivery logs — check-in events are one category
            in a full automation layer that covers home lifecycle, task completion,
            bid activity, and schedule changes.
          </p>

          {/* Feature list */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What vendor jobsite QR check-in covers
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {checkInFeatures.map((row, i) => (
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
            The broader pattern: outside parties never need an account
          </h2>

          <p>
            Jobsite QR check-in follows the same design principle as every other
            external-facing feature in Cornerstone: the people on the outside of
            your operation should never need an account to do their job. Vendors
            submit bids through a token-protected portal with no login. Buyers move
            through the design center without a paid seat. Trades check in with a
            phone camera and a QR sign.
          </p>

          <p>
            This is not just convenience — it is compliance. When a check-in
            requires a downloaded app, a portion of vendors will not install it, and
            you end up with incomplete records for the trades who pushed back. A QR
            sign and a phone camera have a compliance rate close to 100% because the
            friction is essentially zero.
          </p>

          <p>
            For builders running multiple communities on{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              a production home builder platform
            </Link>
            , that means a complete attendance record across every lot, every trade,
            every day — without a single phone call to verify who was actually there.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Every vendor visit — GPS-stamped and documented.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone&apos;s jobsite QR check-in turns lot visits into permanent,
              GPS-verified records with weather and photos attached — no app,
              no login, no arguing about who was where.
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

      <Footer />
    </main>
  );
}
