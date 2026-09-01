import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Eye, Send, XCircle } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/subcontractor-bid-status-tracking-home-builders.png";
const heroImageAlt =
  "Subcontractor bid tracking statuses for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Invited, Viewed, Submitted, Declined: Track Every Subcontractor Bid",
  slug: "subcontractor-bid-status-tracking-home-builders",
  description:
    "Track every subcontractor bid from invitation through viewed, submitted, or declined, so purchasing teams know exactly who needs a follow-up and when.",
  datePublished: "2026-09-01",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Track Subcontractor Bid Status for Home Builders",
  description:
    "A step-by-step process for tracking every subcontractor bid invitation from sent through submitted or declined, so purchasing teams know exactly where every vendor stands and who to follow up with next.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Send the bid request — all invited vendors immediately show as Invited",
      text: "In Cornerstone's purchasing module, create a bid request, select the vendors for each scope, add a deadline and message, and send. Every invited vendor instantly appears on the bid tracking screen in Invited status. The scope-filtered Excel template lands in their inbox with no vendor account required — subs click the link, download, and are ready to quote.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Watch for Invited vendors that never advance to Viewed",
      text: "An Invited status that stays Invited past the first day is a signal the email may have landed in spam, gone to the wrong contact, or been ignored. Identify these vendors early — before the deadline — and follow up by phone or with a manual resend rather than waiting to discover the gap when comparison time arrives.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Use the Viewed status to follow up with intent, not a blind check-in",
      text: "When a vendor's status moves to Viewed, they have opened the bid request and seen the scope. That changes the follow-up. Instead of asking 'did you get my email?', your team can ask 'you opened the request on Tuesday — do you have questions about the framing scope before you submit?' A targeted question is more likely to produce a quote than a generic nudge.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Review Submitted bids as they arrive — don't wait for the deadline",
      text: "Once a vendor submits, the bid is locked and visible in the portal. Review it immediately for scope alignment and completeness rather than waiting to collect all bids first. Early review gives you time to ask the vendor clarifying questions before the deadline closes — catching assumptions in one bid that would make comparison unfair.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Act on Declined status immediately — find alternate coverage",
      text: "A vendor who declines tells you something useful: they are either too busy or the scope doesn't fit their business right now. The useful part is they told you. React immediately — invite an alternate vendor and extend the deadline window if needed. A Declined status caught on day two is manageable; the same gap discovered the morning bids are due is a problem.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Compare submitted bids side-by-side and award per community",
      text: "Once two or more bids are Submitted, pull up the side-by-side comparison. Because every invited vendor used the same scope-filtered Excel template, the line items are already aligned — no re-formatting required. Award the bid per community, accept the pricing, and the locked award feeds the Master Cost Budget. Purchasing is done.",
    },
  ],
};

const statusRows = [
  {
    status: "Invited",
    icon: Send,
    color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    action: "Confirm the email landed; plan a day-two follow-up if no movement.",
  },
  {
    status: "Viewed",
    icon: Eye,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    action: "Follow up with scope-specific questions, not a generic check-in.",
  },
  {
    status: "Submitted",
    icon: CheckCircle,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    action: "Review immediately; clarify scope assumptions before the deadline.",
  },
  {
    status: "Declined",
    icon: XCircle,
    color: "text-red-400 bg-red-500/10 border-red-500/20",
    action: "Invite an alternate vendor the same day — don't wait.",
  },
];

export const metadata: Metadata = {
  title:
    "Invited, Viewed, Submitted, Declined: Track Every Subcontractor Bid — Cornerstone PM™ Blog",
  description:
    "Track every subcontractor bid from invitation through viewed, submitted, or declined, so purchasing teams know exactly who needs a follow-up and when.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/subcontractor-bid-status-tracking-home-builders",
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

export default function SubcontractorBidStatusTrackingPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-amber-400 bg-amber-500/10 border-amber-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Invited, Viewed, Submitted, Declined: Track Every Subcontractor Bid
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>September 1, 2026</span>
            <span>&middot;</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Every subcontractor bid you send moves through four states: Invited,
            Viewed, Submitted, and Declined. Knowing which state each vendor is
            in tells your{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing team
            </Link>{" "}
            exactly who to follow up with, who is on track, and who needs to be
            replaced before the deadline — without a single blind check-in
            phone call.
          </p>

          <p>
            Most purchasing managers discover their bid gaps at the worst
            possible time: the morning bids are due, when one trade has gone
            silent and there is no time to find an alternate. Status tracking
            shifts that discovery to day two of the bid window, when the gap is
            still solvable.
          </p>

          {/* Status reference table */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                What each status means — and what to do next
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {statusRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div key={i} className="flex items-start gap-4 px-5 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full border shrink-0 mt-0.5 ${row.color}`}
                    >
                      <Icon className="w-3 h-3" />
                      {row.status}
                    </span>
                    <p className="text-sm text-slate-400">{row.action}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does a bid request land in a vendor&apos;s hands?
          </h2>

          <p>
            In Cornerstone&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              purchasing module
            </Link>
            , sending a bid request takes one step: select the vendors for each
            scope, set a deadline, add a message, and send. Every invited vendor
            immediately appears as Invited in the bid tracking view. Their inbox
            receives a scope-filtered Excel template — with separate tabs for
            Base, Structural, and Designer work — so each trade sees only their
            own lines.
          </p>

          <p>
            No vendor account is required. The link in the email opens a
            token-protected portal where the sub can download the template,
            upload their bid documents, and submit or decline in a single
            session. The moment they open that link, their status advances to
            Viewed.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What should the Viewed status change about your follow-up?
          </h2>

          <p>
            A Viewed status is more valuable than most purchasing managers
            realize. It tells you the vendor is aware of the request, has
            opened the portal, and has seen the scope — which means the right
            follow-up is not &ldquo;did you get my email?&rdquo; It is &ldquo;you opened the
            framing request on Tuesday — do you have questions about the scope
            before you submit?&rdquo;
          </p>

          <p>
            That shift is small but the effect on response rates is not.
            Vendors respond better to evidence that their time is respected
            than to a generic nudge. Status visibility gives your team the
            information to make that shift on every follow-up call, without
            anyone having to ask the vendor what they remember opening.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does a Declined status matter as much as a Submitted one?
          </h2>

          <p>
            A vendor who declines is communicating something specific: they
            cannot price this scope at this time. That is useful information —
            far more useful than silence. A Declined status caught on day two
            of a ten-day bid window leaves time to invite an alternate vendor,
            extend the deadline if needed, and still arrive at comparison day
            with real coverage.
          </p>

          <p>
            The same gap discovered when bids are due is a different problem
            entirely. Status tracking converts a silent gap into an explicit
            signal while there is still time to act on it. That is the core
            function of the tracking system: make the problem visible early
            enough for the purchasing team to solve it.
          </p>

          <p>
            For more on why vendors go silent in the first place — and how to
            remove the friction that causes it — see{" "}
            <Link
              href="/blog/why-subcontractors-ignore-bid-requests-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              why your subcontractors ignore your bid requests
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens once bids are Submitted?
          </h2>

          <p>
            A submitted bid is locked. The vendor cannot edit it after
            submission, which protects both parties from the informal revisions
            that quietly change numbers between submission and award. Review the
            bid immediately rather than waiting for all submissions to close —
            early review gives you time to ask clarifying questions about scope
            assumptions before the deadline passes.
          </p>

          <p>
            When two or more bids are in Submitted status, the side-by-side
            comparison becomes available. Because every vendor used the same
            scope-filtered Excel template to quote, the line items are already
            aligned. There is no re-formatting step, no translation between one
            sub&apos;s format and another&apos;s. The comparison is the comparison. For
            a detailed look at how that works, see{" "}
            <Link
              href="/blog/bid-leveling-side-by-side-vendor-comparison-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              bid leveling for home builders
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does status tracking lead to a faster, more complete comparison set?
          </h2>

          <p>
            The purchasing team that knows every vendor&apos;s state in real time
            works differently than one that does not. They follow up with
            purpose instead of making blind calls down a list. They replace
            Declined vendors while there is still time. They review Submitted
            bids immediately instead of letting them accumulate. By comparison
            day, the field is complete and the decision is clean.
          </p>

          <p>
            Awards in Cornerstone are assigned{" "}
            <Link
              href="/blog/community-vendor-bid-awards-not-lowest-bid"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              per community rather than globally
            </Link>
            , so one framing crew can win Oak Creek while a different crew wins
            Elmwood Commons. Accepted pricing locks the moment an award is made,
            and that locked price flows into the Master Cost Budget and every
            downstream purchase order — no re-keying, no opportunity for the
            number to drift between the award and the check.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  The status-to-award chain
                </p>
                <p className="text-sm text-slate-400">
                  Invited &rarr; Viewed &rarr; Submitted &rarr; bid locks &rarr;
                  side-by-side comparison &rarr; community award &rarr; accepted
                  pricing feeds Master Cost Budget &rarr; task completes &rarr;
                  PO auto-generates. No gaps, no guesswork.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              See every bid status in one place.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Invited, Viewed, Submitted, and Declined — tracked per vendor,
              per scope, per community, with a no-login vendor portal and
              side-by-side comparison when the bids land.
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
