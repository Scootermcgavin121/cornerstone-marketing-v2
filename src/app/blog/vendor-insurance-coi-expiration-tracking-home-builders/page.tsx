import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, ShieldAlert } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vendor-insurance-coi-tracking.png";
const heroImageAlt =
  "Vendor insurance tracking for home builders — subcontractor COI expiration dashboard with 30-day renewal notifications";

const blogSchema = buildBlogPostSchema({
  title:
    "Vendor Insurance Tracking: How to Stop Letting Expired COIs Onto Your Jobsite",
  slug: "vendor-insurance-coi-expiration-tracking-home-builders",
  description:
    "A practical system for tracking subcontractor COIs, W-9s, and license expiration dates so an uninsured trade never frames a house that you are liable for.",
  datePublished: "2026-08-25",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

export const metadata: Metadata = {
  title:
    "Vendor Insurance Tracking: How to Stop Letting Expired COIs Onto Your Jobsite — Cornerstone PM™ Blog",
  description:
    "A practical system for tracking subcontractor COIs, W-9s, and license expiration dates so an uninsured trade never frames a house that you are liable for.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/vendor-insurance-coi-expiration-tracking-home-builders",
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
  name: "How to Track Vendor Insurance and COI Expiration for Home Builders",
  description:
    "A step-by-step system for collecting, tracking, and renewing subcontractor certificates of insurance, W-9s, and license documents so no uninsured trade works on your jobsite.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Collect documents at vendor onboarding via the vendor registration form",
      text: "Send each new subcontractor a vendor registration form before they ever step on a lot. The form collects General Liability COI, Workers Comp certificate, W-9, and the signed scope of work in one submission — so the documents arrive before the trade does, not after an incident.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Configure required document types per account",
      text: "Toggle which compliance requirements apply to your account — SOW, W-9, General Liability, and Workers Comp can each be turned on or off. A landscaping vendor may not need a separate WC certificate; a framing crew does. Forcing a single checklist onto every trade creates friction that doesn't improve safety.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Record COI expiration dates against each vendor",
      text: "Store the General Liability expiration date (and any other tracked dates) against the vendor record. The platform surfaces expiring and expired vendors in the admin dashboard and counts them in KPI cards so the compliance picture is visible at a glance.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Let 30-day automated notifications handle the renewal chase",
      text: "Cornerstone sends automatic expiration notifications to vendors 30 days before their certificate lapses. The vendor receives a renewal reminder without anyone on your team lifting a finger. Because the vendor portal requires no login, subs can upload the renewed certificate themselves in one click.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Review the admin dashboard for expiring and overdue vendors",
      text: "The admin dashboard shows warning banners for vendors with certificates expiring within 30 days and hard-stops for vendors whose coverage has already lapsed. KPI cards count both categories at the top of the vendor list so nothing ages out of sight.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Enforce compliance before scheduling work",
      text: "Before assigning a task to a vendor whose COI is expired or missing, check the compliance status in the vendor record. A vendor flagged as non-compliant should not appear on active schedules until documentation is current — protecting the builder from liability for work performed without coverage.",
    },
  ],
};

const docTypes = [
  {
    label: "General Liability COI",
    detail: "Coverage dates tracked, 30-day expiration notice sent automatically",
  },
  {
    label: "Workers Comp Certificate",
    detail: "Per-trade requirements configurable — toggle on or off per account",
  },
  {
    label: "W-9 / 1099 documentation",
    detail: "Collected at onboarding so year-end 1099 prep doesn't become an emergency",
  },
  {
    label: "Signed Scope of Work",
    detail: "Uploaded by the vendor through the no-login portal before work begins",
  },
];

const dashboardStats = [
  {
    label: "Expiring within 30 days",
    count: "3",
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    icon: "⚠",
  },
  {
    label: "Currently expired",
    count: "1",
    color: "text-red-400 bg-red-500/10 border-red-500/20",
    icon: "✕",
  },
  {
    label: "COIs current",
    count: "14",
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    icon: "✓",
  },
];

export default function VendorInsuranceCOITrackingPage() {
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
            Vendor Insurance Tracking: How to Stop Letting Expired COIs Onto
            Your Jobsite
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 25, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            The practical system for vendor insurance compliance is a document
            record per vendor, expiration dates tracked against those records,
            automatic 30-day renewal notices so chasing certificates is nobody&apos;s
            job, and an{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              admin dashboard
            </Link>{" "}
            that surfaces non-compliance before it ends up on your jobsite —
            not after.
          </p>

          <p>
            Most home builders have a spreadsheet. There is a column for the
            expiration date, someone updates it when they remember to, and the
            discovery that a certificate lapsed happens one of two ways: a
            random audit, or an incident. Neither is a good discovery mechanism
            for something that determines who is liable when a framer falls off
            a roof.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why is COI tracking a risk problem, not a paperwork problem?
          </h2>

          <p>
            A certificate of insurance is proof that the subcontractor carries
            their own coverage. When that coverage lapses and the vendor is still
            on your lot, the liability transfer breaks down — and depending on
            jurisdiction and contract language, you can find yourself exposed for
            an injury that should have been the sub&apos;s carrier&apos;s problem. The
            paperwork is the mechanism of risk transfer, not an administrative
            nicety.
          </p>

          <p>
            This is why the tracking system has to be proactive. A 30-day
            warning is enough lead time for a vendor to get a renewal issued
            and uploaded. A same-day discovery that the COI expired three months
            ago is not — the work has already happened, and the exposure has
            already run.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What documents does a working compliance system actually track?
          </h2>

          {/* Document types */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Vendor compliance document types
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {docTypes.map((row, i) => (
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

          <p>
            Requirements are configurable per account. A landscaping vendor
            may not need a separate Workers Comp certificate in your state; a
            framing crew absolutely does. Forcing a uniform checklist onto every
            trade creates compliance friction that doesn&apos;t actually improve
            coverage — it just generates pushback from the vendors who get asked
            for documents that don&apos;t apply to them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to collect documents at vendor onboarding (before the work starts)
          </h2>

          <p>
            The right time to collect compliance documents is at onboarding —
            before a vendor is ever assigned to a lot. A vendor registration form
            collects the GL COI, Workers Comp, W-9, and signed scope of work in
            one submission through{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              the vendor portal
            </Link>{" "}
            — no Cornerstone login required for the vendor, just a link. That
            pattern — outside parties accessing a function without needing an
            account — is how the rest of Cornerstone handles vendor interactions
            too. Subs submit bids the same way and check in on lots the same way.
          </p>

          <p>
            Collecting at onboarding means the documents arrive before the trade
            does, not after an incident surfaces that nobody has a record of the
            coverage period.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How to set up automated COI expiration tracking
          </h2>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                step: "1",
                title: "Collect documents at vendor onboarding",
                detail:
                  "Send the vendor registration form before their first assignment. The vendor uploads GL COI, WC certificate, W-9, and signed SOW through the no-login portal.",
              },
              {
                step: "2",
                title: "Configure required document types per account",
                detail:
                  "Toggle SOW, W-9, General Liability, and Workers Comp requirements on or off. Requirements that don't apply to a trade type don't add friction.",
              },
              {
                step: "3",
                title: "Record expiration dates against each vendor",
                detail:
                  "Store the COI expiration date in the vendor record. The dashboard surfaces expiring and expired vendors automatically from there — no manual checking needed.",
              },
              {
                step: "4",
                title: "30-day automated notifications go out to vendors",
                detail:
                  "Cornerstone sends expiration notices to the vendor 30 days before the certificate lapses. The vendor clicks the link in the email and uploads the renewal through the portal — same no-login flow.",
              },
              {
                step: "5",
                title: "Admin dashboard flags expiring and expired vendors",
                detail:
                  "Warning banners and KPI cards show how many vendors are expiring within 30 days and how many have already lapsed. Overdue tasks and expiring insurance surface in the same view.",
              },
              {
                step: "6",
                title: "Don't assign non-compliant vendors to active schedules",
                detail:
                  "Check the compliance status before scheduling a vendor. A lapsed COI is a hold flag — the vendor should not be on an active lot until documentation is current.",
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
            What does the admin dashboard actually show?
          </h2>

          {/* Dashboard KPI demo */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Vendor compliance dashboard — KPI summary
              </p>
            </div>
            <div className="grid grid-cols-3 divide-x divide-slate-800/60">
              {dashboardStats.map((stat, i) => (
                <div key={i} className="px-5 py-5 text-center">
                  <p
                    className={`text-3xl font-black mb-1 ${stat.color.split(" ")[0]}`}
                  >
                    {stat.count}
                  </p>
                  <p className="text-xs text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Expiring and expired vendors surface in the same view as overdue
                tasks — so compliance and scheduling stay in one picture.
              </p>
            </div>
          </div>

          <p>
            The point of the dashboard is that it gives you the compliance
            picture before you make scheduling decisions, not after. When a
            vendor flagged as expiring shows up in the same view as their
            upcoming task assignments, the connection between non-compliance
            and active work is explicit rather than buried in a separate
            spreadsheet.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why automated renewal notices matter more than reminders to your
            team
          </h2>

          <p>
            The failure mode for spreadsheet-based COI tracking is always the
            same: someone is responsible for checking the sheet, and that person
            is also managing a schedule, approving POs, and answering vendor
            calls. The sheet check gets deprioritized until it doesn&apos;t happen.
          </p>

          <p>
            Automated 30-day notices shift that responsibility to the vendor —
            who has far more motivation to keep their own coverage current than
            any builder&apos;s office manager does. The vendor gets an email, clicks
            the link, and uploads the renewed certificate. Your admin sees the
            update in the dashboard. Nobody on your team made a phone call.
          </p>

          <p>
            This connects to a broader pattern in how{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              production home builder software
            </Link>{" "}
            should handle outside parties: minimize friction for people who
            don&apos;t have accounts in your system. Vendors submit bids without
            logging in, check in on lots with a QR code, and upload compliance
            documents through a link. The burden of maintaining compliance
            lands on the party who owns the compliance obligation, not the party
            doing the administrative coordination.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does this connect to the rest of the build pipeline?
          </h2>

          <p>
            Vendor compliance in Cornerstone is not a standalone module bolted
            on from the outside. The vendor record that holds the COI expiration
            date is the same record that drives bid awards, PO generation, and
            task assignments. When a trade&apos;s coverage is flagged as non-compliant,
            that signal is visible in the same vendor profile you use to award
            bids and assign work — not in a separate compliance system that
            nobody opens.
          </p>

          <p>
            The same vendor portal where subs upload renewal certificates is
            where they submit bids, view POs, and access scope of work documents.
            That means your vendors already have the muscle memory for using the
            portal, because they interact with it in the normal course of the
            job — not just when a renewal notice arrives.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Compliance that runs itself — no spreadsheet, no chase.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone tracks COI expiration dates, sends 30-day renewal
              notices to vendors automatically, and surfaces non-compliant trades
              in the admin dashboard before they&apos;re assigned to a lot.
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
