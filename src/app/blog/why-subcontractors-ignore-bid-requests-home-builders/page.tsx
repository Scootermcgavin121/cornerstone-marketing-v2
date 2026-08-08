import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle, Eye, Clock, Mail } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";
import { FAQSection, type FAQItem } from "@/components/FAQSection";

const heroImage = "/blog/subcontractors-ignore-bid-requests.png";
const heroImageAlt =
  "Subcontractor bid request tracking — vendor invite status from invited to viewed to submitted for home builders";

const blogSchema = buildBlogPostSchema({
  title: "Why Your Subcontractors Ignore Your Bid Requests",
  slug: "why-subcontractors-ignore-bid-requests-home-builders",
  description:
    "If half your bid invites go unanswered, the problem is usually friction, not the vendors. Five reasons subs skip your requests and how to remove each one.",
  datePublished: "2026-08-08",
  mentionsProduct: {
    name: "Cornerstone PM Purchasing",
    url: "https://www.cornerstonepm.ai/purchasing",
  },
});

const faqs: FAQItem[] = [
  {
    q: "Why do subcontractors ignore bid requests from home builders?",
    a: "The most common reasons are friction, not disinterest: builders require vendor account creation, send full plan sets instead of trade-filtered templates, give subs a blank spreadsheet to fill out themselves, provide no follow-up visibility, or set vague deadlines with no easy way to decline. Removing each friction point typically lifts response rates significantly.",
  },
  {
    q: "How does a no-login vendor portal improve bid response rates?",
    a: "When a vendor has to create an account just to submit a bid, many simply don't bother — especially if they're bidding across multiple builders with different platforms. A token-protected vendor portal lets subs click one link from their email, download the bid template, upload their quote, and submit without creating credentials. Friction drops to near zero.",
  },
  {
    q: "What is a scope-filtered bid template and why does it matter?",
    a: "A scope-filtered bid template shows each vendor only the line items relevant to their trade. A plumber sees plumbing scope items; a framer sees framing scope items. This replaces the common practice of sending an entire plan set or a full spreadsheet and asking vendors to find their section — which is work most subs won't do before they even submit a number.",
  },
  {
    q: "How can home builders track which vendors have viewed bid invitations?",
    a: "Purpose-built bid request software tracks each invitation through status stages: Invited, Viewed, Submitted, and Declined. This gives purchasing teams real-time visibility into who has opened the request, who is dragging their feet, and who has already declined — so follow-up is targeted and timed correctly instead of blasting the whole list.",
  },
  {
    q: "What happens to bid pricing once a vendor is awarded in Cornerstone PM?",
    a: "Once a vendor is awarded a bid in Cornerstone PM, the pricing locks — neither the builder nor the vendor can quietly edit the number afterward. Every downstream budget line traces back to that awarded price under the hard-cost rule. Community-based awards also let builders run different vendors in different communities and still keep multiple accepted bids on file.",
  },
  {
    q: "Can vendors decline a bid request, and why does that matter?",
    a: "Yes — vendors can decline in one click from the bid invitation email, without creating an account or logging in. A clean decline is far more useful than silence: it closes the loop on that vendor immediately so purchasing can move to the next candidate, instead of waiting until the deadline to realize nobody is coming.",
  },
  {
    q: "What is the end-to-end bid-to-PO workflow in Cornerstone PM?",
    a: "The full loop runs: send a bid request with auto-generated, scope-filtered Excel templates → vendors submit through the no-login portal → purchasing compares bids side-by-side → award and lock pricing per community → task completes → purchase order auto-generates and emails the vendor with the awarded pricing. Vendors only need to submit once; the PO flow runs without anyone opening the purchasing screen.",
  },
];

const statusRows = [
  { vendor: "Apex Framing", scope: "Framing", status: "Submitted", color: "text-emerald-400", icon: CheckCircle },
  { vendor: "Mesa Plumbing", scope: "Plumbing", status: "Viewed", color: "text-amber-400", icon: Eye },
  { vendor: "Ridge Electric", scope: "Electrical", status: "Invited", color: "text-slate-400", icon: Mail },
  { vendor: "Summit HVAC", scope: "HVAC", status: "Declined", color: "text-red-400", icon: XCircle },
];

export const metadata: Metadata = {
  title:
    "Why Your Subcontractors Ignore Your Bid Requests — Cornerstone PM™ Blog",
  description:
    "If half your bid invites go unanswered, the problem is usually friction, not the vendors. Five reasons subs skip your requests and how to remove each one.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/why-subcontractors-ignore-bid-requests-home-builders",
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

export default function WhySubsIgnoreBidRequestsPage() {
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
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            Purchasing
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Why Your Subcontractors Ignore Your Bid Requests
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>August 8, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            If half your bid invites go unanswered, the problem is almost
            always friction — not the vendors. Subcontractors want the work.
            What they won&apos;t do is jump through unnecessary hoops to submit
            a number.{" "}
            <Link
              href="/purchasing"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              Cornerstone PM&apos;s purchasing module
            </Link>{" "}
            removes the five most common friction points — each one a specific
            reason subs quietly ignore a request and move on.
          </p>

          <p>
            Low bid response rates are usually treated as a vendor-relationship
            problem. They&apos;re actually a workflow-design problem. The builder
            who makes it easiest to respond gets the most quotes — and more
            quotes means better pricing and more schedule flexibility. Here is
            where the friction shows up and how to eliminate it.
          </p>

          {/* Status tracker visual */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 overflow-hidden my-8">
            <div className="px-5 py-4 border-b border-slate-800 bg-slate-900/60">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                Bid Request — Framing Package · Oak Creek Community
              </p>
            </div>
            <div className="divide-y divide-slate-800/60">
              {statusRows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {row.vendor}
                      </p>
                      <p className="text-xs text-slate-500">{row.scope}</p>
                    </div>
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${row.color}`}>
                      <Icon className="w-3.5 h-3.5" />
                      {row.status}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-5 py-3.5 bg-slate-900/60 border-t border-slate-800">
              <p className="text-xs text-slate-500">
                Per-vendor status tracking — know exactly who has viewed, submitted, or declined before the deadline.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Reason 1: You asked them to create an account
          </h2>

          <p>
            A vendor who bids across ten builders is not going to create ten
            accounts. If your bid request lands in their inbox and the first
            click goes to a login screen, most subs close the tab.
          </p>

          <p>
            <strong className="text-white">The fix:</strong> Cornerstone
            PM&apos;s vendor portal is token-protected and needs no login. Subs
            click one link in the email, land directly in the bid portal, and
            see their scope-filtered template ready to download. No credentials,
            no account setup, no friction between the email and the bid. The
            token is specific to that vendor and that request — security without
            the barrier.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Reason 2: You sent the whole plan set and made them hunt
          </h2>

          <p>
            Sending a framer a 48-sheet plan set and saying &ldquo;find the
            framing details&rdquo; is asking them to do your work before they&apos;ve
            been paid a dollar. Most won&apos;t. The ones who do will take longer,
            introduce interpretation errors, and price a contingency into their
            number for the ambiguity.
          </p>

          <p>
            <strong className="text-white">The fix:</strong> Bid templates in
            Cornerstone PM are scope-filtered automatically. A plumber sees
            plumbing scope items. A framer sees framing scope items. The
            auto-generated Excel template has three tabs — Base, Structural,
            and Designer — and each vendor&apos;s copy shows only the lines that
            belong to their trade. They open the file, see exactly what to
            price, and fill it in. Nothing to hunt, nothing to interpret.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Reason 3: You gave them a blank spreadsheet
          </h2>

          <p>
            Asking vendors to populate a blank spreadsheet with their own
            format is the highest-friction request in construction procurement.
            Every vendor organizes labor and material differently. The result is
            five spreadsheets in five formats, none of which compare cleanly,
            and a purchasing manager spending two hours trying to normalize
            them before deciding anything.
          </p>

          <p>
            <strong className="text-white">The fix:</strong> The auto-generated
            template tells vendors exactly what to price and how to format it —
            scope item by scope item, with columns for labor and material
            already split. When two or more vendors submit, their numbers land
            on the same rows and{" "}
            <Link
              href="/blog/bid-leveling-side-by-side-vendor-comparison-home-builders"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              side-by-side comparison
            </Link>{" "}
            takes seconds instead of hours. Vendors who know the template makes
            their bid easy to evaluate are more likely to submit — because they
            know the process is fair.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Reason 4: You have no idea who opened it
          </h2>

          <p>
            When there&apos;s no tracking on bid invitations, follow-up becomes
            spam. You blast the whole vendor list two days before the deadline
            because you have no way to know who has already started their quote,
            who never opened the email, and who decided to pass and just never
            said so. The vendors who were working on it resent the interruption.
            The ones who were ignoring it still don&apos;t reply.
          </p>

          <p>
            <strong className="text-white">The fix:</strong> Every bid invitation
            in Cornerstone PM moves through four tracked states: Invited, Viewed,
            Submitted, and Declined. Purchasing can see in real time who has
            opened the portal link and when — so follow-up is targeted. Chase
            the vendors at &ldquo;Invited&rdquo; who haven&apos;t opened yet. Leave the ones
            at &ldquo;Viewed&rdquo; alone while they work. And recognize when a non-reply
            is actually a quiet decline so you can move to the next candidate
            before the deadline.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-5 my-8">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white mb-1">
                  Deadline discipline matters
                </p>
                <p className="text-sm text-slate-400">
                  Bid requests in Cornerstone PM carry an explicit deadline.
                  Vendors see it the moment they open the portal, and they can
                  decline in one click instead of ghosting. A clean decline is
                  far more useful than silence — it frees you to invite the
                  next vendor before time runs out.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Reason 5: The deadline was fuzzy and declining felt rude
          </h2>

          <p>
            &ldquo;Get me a number by end of week&rdquo; is not a deadline. It&apos;s an
            invitation to procrastinate. And vendors who know they can&apos;t
            compete on this job — because they&apos;re booked, or the scope isn&apos;t
            their specialty, or they already lost on price last time — often
            don&apos;t decline explicitly because it feels awkward. They just
            go quiet. You spend a week chasing a number that was never coming.
          </p>

          <p>
            <strong className="text-white">The fix:</strong> Every bid request
            carries a hard deadline date that vendors see immediately. More
            importantly, vendors can decline with a single click from the
            invitation email — no account, no explanation required. A one-click
            decline removes the social friction of saying no, which means you
            hear &ldquo;no&rdquo; faster and can move on. Silence stops being the default
            response for a disinterested vendor.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What happens after the quote lands
          </h2>

          <p>
            Removing friction at the invitation stage only matters if what
            follows is equally clean. In Cornerstone PM, quotes that come
            through the vendor portal arrive on the same scope-item lines they
            were requested on — which means side-by-side comparison is
            immediate when two or more vendors submit.
          </p>

          <p>
            Award decisions in Cornerstone PM are not lowest-bid auctions.
            Vendors are awarded by community — one vendor wins Oak Creek,
            another wins Elmwood — and builders can maintain multiple accepted
            bids on file for different geographies or schedule windows. Once
            awarded, pricing locks: neither the builder nor the vendor can
            revise the number after acceptance. Every downstream budget line
            traces back to that locked, awarded price under the{" "}
            <Link
              href="/blog/hard-cost-rule-vendor-priced-budgets-no-fudging"
              className="text-emerald-400 hover:text-emerald-300 underline underline-offset-2"
            >
              hard cost rule
            </Link>
            .
          </p>

          <p>
            The full loop runs from bid request to purchase order without anyone
            opening the purchasing screen manually. Once a task completes, the
            PO auto-generates and emails the vendor with the awarded pricing.
            The vendor&apos;s only job in the entire cycle — from invitation through
            final payment — is to submit a bid once and then do the work. That
            is the kind of workflow good subs tell other good subs about.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Stop chasing bids that were never coming.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Scope-filtered templates, a no-login vendor portal, per-vendor
              status tracking, and one-click decline. Cornerstone PM removes
              every reason a subcontractor has to ignore your bid request.
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
        title="Subcontractor Bid Request FAQ"
        subtitle="Common questions about improving vendor response rates and bid management for home builders."
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
