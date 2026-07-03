import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, Lock, Users, BarChart3, FileSpreadsheet } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/vendor-bid-requests-portal.png";
const heroImageAlt =
  "Construction bid request software showing scope-filtered Excel templates and a no-login vendor portal in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title: "Send a Bid Request to 10 Vendors in One Click (No Vendor Login Required)",
  slug: "vendor-bid-requests-portal-no-login",
  description:
    "Cornerstone PM auto-generates scope-filtered Excel bid templates, emails them to vendors, and lets them submit through a no-login portal. Compare bids side-by-side.",
  datePublished: "2026-06-06",
});

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Send a Vendor Bid Request in Cornerstone PM",
  description:
    "Send scope-filtered bid requests to multiple vendors, collect bids through a no-login portal, and compare side-by-side — all without leaving Cornerstone PM.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Open Bid Requests",
      text: "Navigate to Purchasing → Bid Requests → New Request in Cornerstone PM.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Select floorplans, vendors, and scopes",
      text: "Choose which floorplans are included in this bid, which vendors to invite, which scope items they should price, your deadline, and an optional message. Send in one click.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Vendors receive a scope-filtered Excel template",
      text: "Each vendor gets an auto-generated Excel bid template with three tabs — Base, Structural, and Designer — filtered so they only see the scope items relevant to their trade.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Vendors submit through the no-login portal",
      text: "Vendors click the link in their email, download the template, upload their bid documents (PDF, Excel, or CSV — up to 10 files, 10 MB each), add notes, and submit or decline. No Cornerstone PM account required.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Bid locks on submission",
      text: "Once submitted, bids lock automatically — no last-minute edits from the vendor side. The bid status moves from Submitted to locked in place.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Compare bids side-by-side and award",
      text: "When two or more vendors submit, Cornerstone PM surfaces a side-by-side comparison. Award the bid to your preferred vendor — not necessarily the lowest price. The awarded vendor is community-assigned, so the same scope in a different community can go to a different vendor.",
    },
  ],
};

export const metadata: Metadata = {
  title:
    "Send a Bid Request to 10 Vendors in One Click (No Vendor Login Required) — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM auto-generates scope-filtered Excel bid templates, emails them to vendors, and lets them submit through a no-login portal. Compare bids side-by-side.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/vendor-bid-requests-portal-no-login",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 580,
          height: 527,
        alt: heroImageAlt,
      },
    ],
  },
};

const bidSteps = [
  {
    step: "01",
    title: "Open Bid Requests",
    desc: "Purchasing → Bid Requests → New Request. That's the full navigation path.",
    color: "emerald",
  },
  {
    step: "02",
    title: "Select floorplans, vendors & scopes",
    desc: "Choose which floorplans are in scope, which vendors to invite, and which scope items they'll price. Set a deadline and optional message. Send.",
    color: "cyan",
  },
  {
    step: "03",
    title: "Vendors get a scope-filtered Excel template",
    desc: "Auto-generated with three tabs — Base, Structural, Designer — filtered to each vendor's trade. Framer sees framing scope. Plumber sees plumbing scope. That's it.",
    color: "violet",
  },
  {
    step: "04",
    title: "No-login portal submission",
    desc: "Vendors click the email link, download the template, upload bid docs (up to 10 files, 10 MB each), and submit or decline. No account. No password. No friction.",
    color: "amber",
  },
];

const stepNumMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

const statusBadges = [
  { label: "Invited", color: "text-slate-400 bg-slate-800 border-slate-700" },
  { label: "Viewed", color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20" },
  { label: "Submitted", color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" },
  { label: "Declined", color: "text-red-400 bg-red-500/10 border-red-500/20" },
];

export default function VendorBidRequestsPortalPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
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
          width={580}
          height={527}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Send a Bid Request to 10 Vendors in One Click (No Vendor Login Required)
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 6, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM&apos;s bid request system lets you send scope-filtered Excel templates to
            every vendor on your list in one click — and vendors submit their bids through a
            no-login portal without ever creating an account. You get a side-by-side comparison
            when two or more bids come in.
          </p>

          <p>
            Most construction bid workflows involve a chain of manual steps: email a spreadsheet,
            wait for a reply, re-format the numbers, compare manually. Cornerstone PM&apos;s{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing module
            </Link>{" "}
            replaces that entire chain with a structured bid request flow — automated templates,
            real-time status tracking, and a vendor portal that requires nothing from your subs
            except clicking a link.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does the bid request workflow actually work?
          </h2>
          <p>
            The flow is four steps from end to end:
          </p>

          {/* HowTo steps */}
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {bidSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className={`text-3xl font-black mb-2 ${stepNumMap[s.color]}`}>{s.step}</div>
                <h3 className="font-bold text-white mb-1.5 text-base">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p>
            Start to send takes under two minutes once your vendor list and scope items are
            configured. The work you&apos;ve already done in{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Purchasing
            </Link>{" "}
            — scope items, vendor assignments, floorplan configurations — feeds directly into the
            bid request. There&apos;s no re-entry.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What makes the Excel bid template different?
          </h2>
          <p>
            The auto-generated Excel template isn&apos;t a generic spreadsheet you customize and
            re-send each cycle. It&apos;s built from your scope data and filtered per vendor:
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              {
                icon: <FileSpreadsheet className="w-4 h-4 text-emerald-400" />,
                title: "Three structured tabs",
                body: "Base, Structural, and Designer. Scope items land in the right tab automatically — structural options like bonus rooms and finished basements in Structural, designer finishes in Designer, core build items in Base.",
              },
              {
                icon: <Users className="w-4 h-4 text-cyan-400" />,
                title: "Scope-filtered per vendor",
                body: "Your framing sub sees framing scope. Your plumber sees plumbing scope. Nobody scrolls through irrelevant line items. The template is generated fresh for each vendor invite.",
              },
              {
                icon: <BarChart3 className="w-4 h-4 text-violet-400" />,
                title: "Pre-populated with floorplan context",
                body: "The template includes the floorplans you selected in the bid request, so vendors know exactly what they're quoting — plan name, square footage context, and any structural options in scope.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <p>
            The three-tab structure matters because it matches how Cornerstone PM separates
            structural scope from designer scope in the purchasing workflow. Vendors who bid only
            designer finish items never see structural option pricing — which reduces confusion and
            keeps your cost data clean.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why doesn&apos;t the vendor portal require a login?
          </h2>
          <p>
            Every extra step between “vendor receives email” and “bid submitted” is a drop-off
            risk. Asking a subcontractor to create an account, verify an email, and set a password
            before they can submit a bid introduces friction that kills response rates — especially
            from smaller trade contractors who aren&apos;t going to manage yet another software login.
          </p>
          <p>
            Cornerstone PM&apos;s vendor portal is token-protected. The email link the vendor receives
            is the authentication. They click it, the portal opens, and they&apos;re immediately looking
            at the bid request with their scope-filtered template ready to download. The full
            submission flow — download template, upload bid docs, add notes, submit — happens
            without any account creation.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-6">
            <div className="px-5 py-3.5 border-b border-slate-800 bg-slate-900/60 text-xs font-medium text-slate-400 uppercase tracking-wide">
              Bid status tracking (per vendor)
            </div>
            <div className="p-5 flex flex-wrap gap-3">
              {statusBadges.map((b) => (
                <span
                  key={b.label}
                  className={`text-sm font-medium px-3 py-1.5 rounded-full border ${b.color}`}
                >
                  {b.label}
                </span>
              ))}
            </div>
            <p className="px-5 pb-4 text-slate-400 text-sm">
              Cornerstone PM tracks each vendor through Invited → Viewed → Submitted → Declined in
              real time. You know who has opened the link, who has submitted, and who you need to
              follow up with — without sending a single follow-up email manually.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens after vendors submit?
          </h2>
          <p>
            Two things happen automatically on submission:
          </p>
          <p>
            First, the bid locks. Once a vendor submits, they cannot edit their numbers. This is
            intentional — it prevents last-minute scope changes or pricing adjustments after a
            vendor has seen a competitor&apos;s numbers. What they submitted is what they submitted.
          </p>
          <p>
            Second, if two or more vendors have submitted, Cornerstone PM surfaces a side-by-side
            comparison. You see each vendor&apos;s pricing across the scope items you requested, without
            needing to manually pull the numbers out of separate PDFs or spreadsheets.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Is it always the lowest bid that wins?
          </h2>
          <p>
            No — and that&apos;s a deliberate design decision that separates Cornerstone PM from
            platforms that treat vendor selection as a lowest-bid auction.
          </p>
          <p>
            When you award a bid, you&apos;re assigning that vendor to a specific community for that
            scope. Not to every community. A framing sub who wins your bid in Community A can be a
            different vendor than the one winning Community B — because your vendor relationships
            are community-specific, not platform-wide. The builder decides who wins. Cornerstone PM
            shows you the comparison; it doesn&apos;t make the decision for you based on price alone.
          </p>
          <p>
            This reflects how production home builders actually work. Your preferred plumber in one
            subdivision may not be licensed to work in the municipality where your next community
            sits. Your framer in a rural community may not have the crew size for a higher-density
            urban infill project. Platform-enforced lowest-bid auctions ignore this reality.
            Cornerstone PM respects it.
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              {
                icon: <Lock className="w-4 h-4 text-amber-400" />,
                title: "Lock-after-acceptance protects awarded pricing",
                body: "Once a bid is awarded, neither the builder nor the vendor can edit it. Awarded pricing is locked in — no scope drift, no last-minute renegotiation, no 'we changed a few items after the fact.'",
              },
              {
                icon: <CheckCircle className="w-4 h-4 text-emerald-400" />,
                title: "Multiple accepted bids per scope across communities",
                body: "You can accept one vendor's bid for Community A and a different vendor's bid for Community B — on the same scope item. Real-world vendor relationships don't map to single platform-wide awards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-slate-400 text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this compare to how Buildertrend and JobTread handle vendor bids?
          </h2>
          <p>
            Buildertrend and JobTread handle bid requests as part of their purchasing or RFI
            modules, but the workflows were designed for custom builders — one project, one set of
            vendors, negotiated line by line. There&apos;s no native concept of scope-filtered Excel
            templates generated per vendor, no community-assigned vendor wins, and no structured
            portal that separates Base/Structural/Designer scope into separate tabs automatically.
          </p>
          <p>
            For a production builder sending bids on the same scope items across five communities
            with ten floorplans each, the manual overhead compounds quickly. Cornerstone PM was
            built for that volume — the bid request system takes the floorplan and scope data
            you&apos;ve already configured and makes template generation automatic, not another task
            for your purchasing team.
          </p>
          <p>
            For a full feature comparison, the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview covers where Cornerstone PM sits relative to the field.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What do vendors actually upload?
          </h2>
          <p>
            Vendors can upload bid documents in PDF, Excel, or CSV format — up to 10 files, 10 MB
            each. Most vendors submit the completed bid template with their pricing filled in, but
            they can also include supporting documents: material cut sheets, labor breakdowns,
            warranty paperwork, or anything else relevant to the bid. Notes fields let them add
            context before submitting.
          </p>
          <p>
            Once submitted, the portal shows their bid as locked with a submitted timestamp.
            Declining is also a first-class action — a vendor who can&apos;t take on the work for this
            cycle can decline directly through the portal, which clears the pending status on your
            side so you&apos;re not waiting on someone who already checked out.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The frictionless bid cycle: what it adds up to
          </h2>
          <p>
            The vendor bid system in Cornerstone PM is designed to reduce the work your purchasing
            team does on every bid cycle — from scope template creation, to vendor communication,
            to comparison — while keeping the decision where it belongs: with the builder.
          </p>
          <p>
            The{" "}
            <Link
              href="/purchasing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              purchasing workflow
            </Link>{" "}
            in Cornerstone PM connects bid awards directly to your scope items and community
            pricing, so vendor wins aren&apos;t just tracked in the bid system — they flow forward into
            your cost budgets automatically. The bid you awarded becomes the pricing that drives
            your floorplan cost breakdowns, your design option pricing, and your master cost budget.
          </p>
          <p>
            That&apos;s the version of “frictionless bidding” worth building: not just a faster email,
            but a connected purchasing system where awarded pricing propagates through the platform
            instead of living in a spreadsheet your team maintains manually.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to run your next bid cycle in Cornerstone PM?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Send scope-filtered bid requests to every vendor on your list in one click. No vendor
              logins, no manual template work, no separate comparison spreadsheets.
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
