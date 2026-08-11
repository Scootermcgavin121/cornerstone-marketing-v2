import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Bell, BellOff, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/construction-notification-preferences.png";
const heroImageAlt =
  "Construction notification preferences — role-based alert subscriptions for superintendents, purchasing, and sales teams";

const blogSchema = buildBlogPostSchema({
  title: "Notification Overload: Role-Based Alerts for Construction Teams",
  slug: "construction-notification-preferences-role-based-alerts-home-builders",
  description:
    "When everyone gets every alert, nobody reads any of them. How per-user notification preferences and role subscriptions keep construction teams paying attention.",
  datePublished: "2026-08-11",
  mentionsProduct: {
    name: "Cornerstone PM Construction",
    url: "https://www.cornerstonepm.ai/construction",
  },
});

const roleRows = [
  {
    role: "Superintendent",
    gets: ["Task updates", "Schedule changes", "Cascade alerts"],
    skips: ["PO activity", "Lead events"],
  },
  {
    role: "Purchasing",
    gets: ["PO activity", "Bid submissions", "Vendor responses"],
    skips: ["Lead events", "Sales pipeline"],
  },
  {
    role: "Sales",
    gets: ["Lead events", "Sales pipeline updates"],
    skips: ["PO activity", "Schedule cascades"],
  },
];

export const metadata: Metadata = {
  title:
    "Notification Overload: Role-Based Alerts for Construction Teams — Cornerstone PM™ Blog",
  description:
    "When everyone gets every alert, nobody reads any of them. How per-user notification preferences and role subscriptions keep construction teams paying attention.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-notification-preferences-role-based-alerts-home-builders",
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

export default function ConstructionNotificationPreferencesPage() {
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
            Notification Overload: Role-Based Alerts for Construction Teams
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 11, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            When everyone on a construction team gets every alert, nobody reads
            any of them. The fix is per-user notification preferences and role
            subscriptions, so each person receives only the events that matter
            to their job.{" "}
            <Link
              href="/construction"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s construction module
            </Link>{" "}
            ties alerts directly to the actions that generate them — cascade
            scheduling moves, completed tasks, and auto-generated purchase orders
            — so the notifications have real weight because they&apos;re actually
            rare.
          </p>

          <p>
            Alert fatigue is not a personality flaw. It is a configuration
            failure. A superintendent who has routed every software email into a
            folder he never opens made a rational decision: the signal-to-noise
            ratio was too low to read at the source. Fixing the behavior means
            fixing the configuration, not lecturing the superintendent.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does everyone end up with everyone else&apos;s alerts?
          </h2>

          <p>
            Most construction software defaults to &ldquo;notify everyone&rdquo; because
            that is the safest setting to ship. Nothing falls through the
            cracks if everyone gets everything — at least not on day one. What
            actually happens over the following months is that teams quietly
            stop reading. A purchasing manager does not need to know that a
            sales lead walked a model home. A superintendent does not need a
            notification every time a vendor submits a bid. A salesperson does
            not need cascade scheduling alerts for trades he has never met.
          </p>

          <p>
            Each of those irrelevant alerts arrives with the same subject line
            weight as an alert that actually matters. Once the team learns they
            can&apos;t trust the inbox, they stop checking it. Then the one alert
            that needed immediate attention sits there for three hours.
          </p>

          {/* Role breakdown visual */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60 flex items-center gap-2">
              <Users className="w-4 h-4 text-emerald-400" />
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Role-based notification subscriptions
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {roleRows.map((row, i) => (
                <div key={i} className="px-5 py-4">
                  <p className="text-sm font-semibold text-white mb-2">{row.role}</p>
                  <div className="flex flex-wrap gap-2">
                    {row.gets.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
                      >
                        <Bell className="w-3 h-3" /> {item}
                      </span>
                    ))}
                    {row.skips.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-slate-800/60 border border-slate-700/40 text-slate-500"
                      >
                        <BellOff className="w-3 h-3" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Per-user subscriptions — each role sees only the alerts relevant to their work.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What actually generates the alerts in Cornerstone?
          </h2>

          <p>
            The alerts that matter in a home building operation fall into two
            categories: things that changed the schedule, and things that require
            someone to act. Cornerstone generates both.
          </p>

          <p>
            When one trade slips,{" "}
            <Link
              href="/blog/cascade-scheduling-construction-delays-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              cascade scheduling
            </Link>{" "}
            adjusts every downstream task automatically and sends notifications
            only to the vendors whose dates actually moved. A three-day framing
            delay does not trigger an alert to the sales team. It triggers an
            alert to the plumber whose rough-in date just shifted, and to the
            superintendent overseeing the home. Those alerts carry real
            information — a specific new date and the name of the slipped
            predecessor — so the vendor can respond to something concrete rather
            than a generic &ldquo;schedule update.&rdquo;
          </p>

          <p>
            On the purchasing side, when a task completes, the purchase order
            generates automatically and emails the vendor directly — no one has
            to open the purchasing screen. The notification that fires is the
            email to the vendor, not a blast to the whole office. The
            purchasing manager who configured the PO gets a confirmation in
            their feed; the superintendent gets the task-completion event;
            nobody else is involved.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The vendor&apos;s inbox deserves the same discipline
          </h2>

          <p>
            Alert fatigue is not only an internal team problem. Subcontractors
            who work with multiple builders get buried in notifications from
            all of them. If every completed task on every home in a 50-home
            community triggers a fresh email, a framer who works for six
            builders in the same market is receiving hundreds of messages a week
            that have nothing to do with their next scheduled start.
          </p>

          <p>
            Cascade scheduling in Cornerstone sends vendor notifications
            selectively — only when that vendor&apos;s task dates change, and only
            with the specific information they need: the new date, the home
            address, and the predecessor that moved. A vendor who trusts that
            every email from a builder is meaningful is a vendor who actually
            reads them. That translates directly into fewer no-shows and fewer
            &ldquo;I never got that schedule change&rdquo; conversations.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <Bell className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Fewer notifications, higher action rates
                </p>
                <p className="text-sm text-slate-400">
                  A superintendent who receives twenty alerts a day responds to
                  a fraction of them. A superintendent who receives three —
                  each one about something that actually changed — responds to
                  all three. Notification design is schedule management.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Setting up role subscriptions that hold
          </h2>

          <p>
            The failure mode with notification settings is treating them as a
            one-time setup. Teams configure everything on day one, then add a
            new hire six months later and leave their defaults on. Within a
            week that person has muted the software.
          </p>

          <p>
            Cornerstone&apos;s per-user notification preferences are tied to the
            user&apos;s role within the platform, so a new superintendent who is
            added to the account inherits the superintendent subscription
            profile as a starting point. That profile gets task and schedule
            events — the cascade alerts that tell them when a trade moved —
            and is off by default for bid activity and lead pipeline events that
            purchasing and sales own.
          </p>

          <p>
            The inverse is equally important. A purchasing coordinator who is
            also covering sales for a community does not need two separate
            logins. They can subscribe to both purchasing events and lead events
            under their own account. Subscriptions are additive: a user can
            subscribe to any event they want, regardless of their primary role.
            The role profile sets a sensible default; individual preferences
            adjust from there.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Connecting notifications to the rest of the platform
          </h2>

          <p>
            Alerts that stand alone are announcements. Alerts that link to
            action are tools. In Cornerstone, a cascade schedule notification
            links directly to the affected task so the superintendent can
            confirm the vendor was notified, pull up the Gantt, and see the
            full downstream impact before calling anyone.
          </p>

          <p>
            For builders who want to go further,{" "}
            <Link
              href="/blog/webhook-events-construction-software-automation"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s 37 typed webhook events
            </Link>{" "}
            expose the same notification triggers to external systems. A
            schedule-changed event can fire an SMS via Twilio, update a
            dashboard, or post to a Slack channel — without anyone writing
            custom integrations around a scraper. The notification layer that
            lives inside the product is the same event system that feeds the
            API surface.
          </p>

          <p>
            The purchasing loop is similarly connected.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone&apos;s purchasing module
            </Link>{" "}
            generates POs from completed tasks, emails the vendor, and updates
            the Master Cost Budget — all from the same event that fired the
            task-completion notification. The superintendent&apos;s alert and the
            vendor&apos;s email share the same trigger. Nothing falls through the
            gap between the two systems because they are not two systems.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The goal is alerts that still get opened in month six
          </h2>

          <p>
            A well-designed notification system is invisible when it is working.
            The superintendent checks their email and sees three messages, all
            of which matter. The purchasing coordinator sees bid activity exactly
            when a vendor submits. Sales sees the lead event the moment a buyer
            scans a QR code at the model home.
          </p>

          <p>
            None of them had to configure a filter. None of them muted a
            category in frustration. And none of them missed something because
            they stopped trusting the inbox. That is the practical outcome of
            treating notification design as a real engineering problem rather
            than a checkbox in the settings menu.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Alerts your team actually reads.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Role-based notification preferences, cascade scheduling alerts that
              fire to the right vendor, and PO events wired to completed tasks.
              Cornerstone PM keeps construction teams informed without the noise
              that makes them stop listening.
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
