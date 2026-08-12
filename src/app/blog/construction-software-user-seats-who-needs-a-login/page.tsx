import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Users } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/construction-software-user-seats.png";
const heroImageAlt =
  "Construction software per-user pricing — which home builder team members need a paid seat and which vendors do not";

const blogSchema = buildBlogPostSchema({
  title: "Who Actually Needs a Login? Rethinking Construction Software Seats",
  slug: "construction-software-user-seats-who-needs-a-login",
  description:
    "Per-seat pricing punishes you for looping in your trades. A look at who in a home building operation needs a paid login — and who should never need one.",
  datePublished: "2026-08-12",
  mentionsProduct: {
    name: "Cornerstone PM",
    url: "https://www.cornerstonepm.ai/home-builder-project-management-software",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Does construction software charge for subcontractors and vendors?",
    a: "Most generic construction platforms charge per seat regardless of role, which means every subcontractor and supplier you loop in drives up the monthly bill. Purpose-built home builder software like Cornerstone PM handles vendors differently: subs submit bids through a token-protected portal with no login, receive purchase orders by email, and never touch the platform directly — so they never need a paid seat.",
  },
  {
    q: "Who actually needs a paid seat in construction software?",
    a: "The internal team members who read and write data inside the platform every day are the right seat holders: owners, project managers, superintendents, purchasing staff, and sales reps. Subcontractors, material suppliers, and buyers interacting with the design center should be handled through purpose-built portals and email workflows that require no account.",
  },
  {
    q: "How does per-seat pricing affect construction software costs as a builder grows?",
    a: "Per-seat pricing creates a growth tax: the better you get at using the platform — looping in more vendors, collaborating across more communities — the more expensive it gets. Builders often respond by sharing logins or excluding people who should be in the loop, which defeats the purpose of the software. Structures that handle outside parties without seats remove that perverse incentive.",
  },
  {
    q: "What is a Power User Seat add-on in home builder software?",
    a: "A Power User Seat is an additional paid seat beyond the base plan allocation, typically for internal team members who need full read-write access to the platform. In Cornerstone PM, the add-on is $149 per seat per month. Base plans already include a set number of seats, so most small-to-mid builders never hit the add-on — it exists for growing operations that need to expand the internal team.",
  },
  {
    q: "Do homebuyers need a login to use the design center?",
    a: "No — in Cornerstone PM, buyers access the design center and make selections without creating an account or holding a paid seat. The design center is purpose-built for buyer-facing access, so the builder's seat count doesn't grow when they open design selections to customers.",
  },
  {
    q: "How does Cornerstone PM handle vendor access without seats?",
    a: "Vendors in Cornerstone PM never need an account. Bid invitations go out by email with a token-protected link — subs click once, download their scope-filtered template, upload a quote, and submit without credentials. Purchase orders email directly to the vendor when a task completes. The entire procurement loop runs without the vendor touching the platform, so seat count stays limited to the internal team.",
  },
  {
    q: "Can I export my data if I switch construction software?",
    a: "Yes — Cornerstone PM lets admins export the full database as CSV or JSON at any time from Settings → Backups, on demand or via nightly auto-backups retained for seven days. Your data is always yours, and the export is a one-click operation. That portability applies regardless of seat count or plan tier.",
  },
];

const insideRows = [
  { role: "Owner / Principal", seat: true, reason: "Full platform access" },
  { role: "Project Manager", seat: true, reason: "Schedule, tasks, purchasing" },
  { role: "Superintendent", seat: true, reason: "Jobsite tasks and schedules" },
  { role: "Purchasing", seat: true, reason: "Bids, POs, vendor management" },
  { role: "Sales Rep", seat: true, reason: "Pipeline and design center" },
];

const outsideRows = [
  { role: "Subcontractors", seat: false, reason: "Bid via token portal, no account" },
  { role: "Material suppliers", seat: false, reason: "Receive POs by email" },
  { role: "Homebuyers", seat: false, reason: "Design center, no login" },
  { role: "Vendor contacts", seat: false, reason: "Email notifications only" },
];

export const metadata: Metadata = {
  title:
    "Who Actually Needs a Login? Rethinking Construction Software Seats — Cornerstone PM™ Blog",
  description:
    "Per-seat pricing punishes you for looping in your trades. A look at who in a home building operation needs a paid login — and who should never need one.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/construction-software-user-seats-who-needs-a-login",
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

export default function ConstructionSoftwareUserSeatsPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Platform
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Who Actually Needs a Login? Rethinking Construction Software Seats
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 12, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Per-seat pricing punishes you for looping in your trades. The more
            people you involve — vendors, suppliers, buyers — the more expensive
            the platform gets, which quietly trains teams to share logins or
            leave people in the dark.{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Purpose-built home builder software
            </Link>{" "}
            handles this differently: the internal team holds seats; everyone
            else gets purpose-built portals that require no account at all.
          </p>

          <p>
            The math builders never run: if a 50-home-per-year operation has
            five internal staff, fifteen active subcontractors across three
            communities, four material suppliers, and fifty active buyers moving
            through the design center — and the platform charges for all of them
            — the seat bill scales faster than the operation. A tool that costs
            more as you get better at using it is a tool with a perverse
            incentive baked in.
          </p>

          {/* Who needs a seat visual */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide flex items-center gap-2">
                <Users className="w-3.5 h-3.5" />
                Who holds a seat vs. who uses purpose-built portals
              </p>
            </div>
            <div className="grid grid-cols-2 divide-x divide-slate-800">
              <div>
                <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/30">
                  <p className="text-xs font-bold text-emerald-400 uppercase tracking-wide">
                    Internal team — seats
                  </p>
                </div>
                <div className="divide-y divide-slate-800/60">
                  {insideRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-3">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{row.role}</p>
                        <p className="text-xs text-slate-500">{row.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="px-4 py-3 border-b border-slate-800 bg-slate-900/30">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Outside parties — no account
                  </p>
                </div>
                <div className="divide-y divide-slate-800/60">
                  {outsideRows.map((row, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-3">
                      <XCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-white">{row.role}</p>
                        <p className="text-xs text-slate-500">{row.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Who genuinely needs a seat?
          </h2>

          <p>
            The answer is simple: the people who read and write platform data as
            part of their daily job. In a typical home building operation,
            that&apos;s the owner or principal, the project manager, the
            superintendent, the purchasing lead, and the sales rep. These are the
            five roles that open the app every morning, move tasks, send bid
            requests, update the design center, and close deals.
          </p>

          <p>
            Everyone else in the operation — the plumber who submits a bid, the
            lumber yard that gets a purchase order, the buyer who picks flooring
            — interacts with the builder at specific, bounded moments that don&apos;t
            require full platform access. Giving them seats doesn&apos;t improve the
            experience; it inflates the bill and adds credentials to manage.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How vendors work without an account
          </h2>

          <p>
            In Cornerstone PM, subcontractors never create an account. A bid
            invitation goes to their email with a token-protected link — they
            click it, land directly in a portal showing only their
            scope-filtered template, download the Excel file, upload their quote,
            and submit. No credentials, no registration, no confusion. The token
            is specific to that vendor and that request, so security holds
            without a barrier to entry.
          </p>

          <p>
            Once a bid is awarded and work begins, the vendor&apos;s purchase order
            arrives by email when the task completes — automatically, without
            anyone opening the purchasing screen. The framer doesn&apos;t log in to
            check status; the PO lands in their inbox. A subcontractor who bids
            across ten builders doesn&apos;t need ten accounts to work with all of
            them through Cornerstone PM.
          </p>

          <p>
            Material suppliers follow the same pattern. They receive purchase
            orders by email and respond to the contact embedded in the PO.
            There&apos;s no supplier portal to configure, no login to maintain, and
            no per-supplier seat cost absorbing the savings from going to bid.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How buyers access the design center without a license
          </h2>

          <p>
            The{" "}
            <Link
              href="/design"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            is the place where a homebuyer picks flooring, countertops, cabinets,
            and fixtures across dozens of option classes. If that interaction
            required a paid platform seat, every sold home would add to the
            monthly bill — a structure that makes no sense for a production
            builder selling the same plans repeatedly.
          </p>

          <p>
            In Cornerstone PM, buyers access the design center without holding a
            license. The selections process is handled through a purpose-built
            buyer experience that connects to the builder&apos;s real option catalog,
            with spec levels, exclusion groups, and designer packages intact —
            but without the buyer touching the platform&apos;s internal tools. The
            builder&apos;s seat count doesn&apos;t grow when the sales team closes.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens when the internal team grows
          </h2>

          <p>
            Base plans in Cornerstone PM include a set number of seats sized for
            the internal team at each tier. When an operation grows — a new PM
            hired, a second superintendent added for a new community — the Power
            User Seat add-on at{" "}
            <Link
              href="/pricing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              $149 per seat per month
            </Link>{" "}
            covers the expansion without requiring a full plan upgrade. The
            outside parties — vendors, buyers, suppliers — stay at zero cost
            regardless of how many communities are open or how many homes are
            active.
          </p>

          <p>
            Most small-to-mid builders in the 5-to-200 homes per year range
            never hit the add-on. The seat structure is designed to match what a
            real building operation looks like: a small internal team running a
            large external network of vendors and buyers. Seat costs scale with
            the team, not with the business.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Seat count is never a hostage
          </h2>

          <p>
            One concern builders carry into any software decision: can I get my
            data back if the platform stops working for me? In some systems,
            the answer is effectively no — exports are incomplete, gated by plan
            tier, or require a support ticket that takes weeks.
          </p>

          <p>
            In Cornerstone PM, admins can export the full database as CSV or
            JSON at any time from Settings → Backups. Nightly auto-backups are
            retained for seven days; on-demand manual backups are available
            whenever. The export is a one-click operation, and it covers the
            complete dataset — not a subset. Your data belongs to you on day one
            and on any day you decide to leave, with no export fee and no waiting
            period.
          </p>

          <p>
            That portability applies regardless of seat count or plan tier. The
            seat structure keeps costs honest; the export policy keeps the
            relationship honest. Builders who know they can leave tend to stay,
            because a platform confident enough to let you out isn&apos;t one that
            needs lock-in to retain customers.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Seats for your team. Portals for everyone else.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM charges for the five internal roles that use the
              platform every day. Subcontractors, suppliers, and buyers all get
              purpose-built access with no account required — and no seat cost
              attached.
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
        title="Construction Software Seat Pricing FAQ"
        subtitle="Common questions about per-user pricing, vendor access, and seat structures for home builder software."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
