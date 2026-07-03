import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQSection } from "@/components/FAQSection";
import type { FAQItem } from "@/components/FAQSection";
import { ArrowLeft, Check, X, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/webhook-events-automation.png";
const heroImageAlt =
  "Construction software webhooks diagram showing 37 typed events powering builder automation in Cornerstone PM";

const blogSchema = buildBlogPostSchema({
  title: "37 Webhook Events: The Automation Layer Most Construction Software Forgets",
  slug: "webhook-events-construction-software-automation",
  description:
    "Cornerstone PM ships 37 typed webhook events with HMAC signatures and delivery logs. See how builders wire Twilio, Bland, and Retell for SMS and voice automation.",
  datePublished: "2026-06-04",
});

export const metadata: Metadata = {
  title:
    "37 Webhook Events: The Automation Layer Most Construction Software Forgets — Cornerstone PM™ Blog",
  description:
    "Cornerstone PM ships 37 typed webhook events with HMAC signatures and delivery logs. See how builders wire Twilio, Bland, and Retell for SMS and voice automation.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/webhook-events-construction-software-automation",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
        height: 1024,
        alt: heroImageAlt,
      },
    ],
  },
};

const faqItems: FAQItem[] = [
  {
    q: "How many webhook events does Cornerstone PM have?",
    a: "Cornerstone PM ships 37 named webhook events across six categories: home lifecycle, task and schedule, vendor notifications, cascade scheduling, messages, sales pipeline, and bid requests. Each event includes a typed payload, HMAC-SHA256 signature, delivery log, and automatic retry on failure.",
  },
  {
    q: "What can builders automate with Cornerstone PM webhooks?",
    a: "Any system that accepts an HTTP POST can receive Cornerstone PM webhook events. Common use cases include: firing Twilio SMS to subcontractors when a task is assigned, triggering Bland or Retell voice calls when a bid is due, pushing home-stage updates to a CRM, and logging change events to a data warehouse. Because each event has a typed payload and a verified HMAC signature, builders can write minimal glue code — the data arrives structured and authenticated.",
  },
  {
    q: "How do Cornerstone PM webhooks compare to Buildertrend or JobTread?",
    a: "Most construction software platforms — including Buildertrend and JobTread — list 'webhooks' as a checkbox feature without publishing a named event catalog, typed payload schemas, HMAC signatures, or delivery logs. Cornerstone PM ships 37 documented events with full payload typing, signature verification, delivery visibility, and auto-retry. That is the difference between a feature checkbox and an automation-ready integration layer.",
  },
  {
    q: "What is HMAC signature verification on a webhook?",
    a: "When Cornerstone PM fires a webhook, it signs the request body with a shared secret using HMAC-SHA256. The receiving server can verify that the signature matches before processing the payload, confirming the event came from Cornerstone PM and was not tampered with in transit. This is a standard security practice for webhooks but one that most construction software webhooks omit.",
  },
  {
    q: "Can I use Cornerstone PM webhooks without writing code?",
    a: "Yes, if you route them through a no-code middleware like Zapier or Make. For direct integrations — Twilio, Bland, Retell, Slack, custom CRMs — you write a small receiver endpoint that reads the typed JSON payload and calls the downstream API. Because the payloads are typed and consistent, this is typically less than 50 lines of code per integration.",
  },
  {
    q: "What is the BYOA REST API and how does it relate to webhooks?",
    a: "BYOA (Bring Your Own AI Agent) is Cornerstone PM's Pro+ REST API layer: 150+ endpoints across 84 dedicated routes plus a generic execute endpoint covering all 396+ Foreman skills. Webhooks push events out; the BYOA REST API lets external agents and scripts read and write data in. Together they form a full bidirectional automation layer — webhooks tell your stack what happened, the REST API lets your stack act on it.",
  },
  {
    q: "How do I get started with Cornerstone PM webhooks?",
    a: "Webhook configuration is available on all paid Cornerstone PM plans. In the platform, navigate to Settings → Webhooks, create an endpoint URL, select the event categories you want to receive, and save. Cornerstone PM will begin delivering signed events immediately. Delivery logs and per-event retry controls are available in the same settings panel.",
  },
];

type EventCategory = {
  name: string;
  color: string;
  events: string[];
};

const eventCategories: EventCategory[] = [
  {
    name: "Home Lifecycle",
    color: "emerald",
    events: [
      "home.created",
      "home.stage_changed",
      "home.contract_signed",
      "home.closed",
      "home.cancelled",
    ],
  },
  {
    name: "Task & Schedule",
    color: "cyan",
    events: [
      "task.assigned",
      "task.completed",
      "task.overdue",
      "schedule.milestone_reached",
      "schedule.delay_detected",
    ],
  },
  {
    name: "Vendor Notifications",
    color: "violet",
    events: [
      "vendor.bid_requested",
      "vendor.bid_submitted",
      "vendor.bid_declined",
      "vendor.award_issued",
      "vendor.invoice_received",
    ],
  },
  {
    name: "Sales Pipeline",
    color: "amber",
    events: [
      "lead.created",
      "lead.stage_changed",
      "appointment.scheduled",
      "quote.sent",
      "contract.executed",
    ],
  },
  {
    name: "Cascade Scheduling",
    color: "cyan",
    events: [
      "cascade.triggered",
      "cascade.phase_completed",
      "cascade.blocked",
    ],
  },
  {
    name: "Bid Requests",
    color: "emerald",
    events: [
      "bid_request.sent",
      "bid_request.viewed",
      "bid_request.submitted",
      "bid_request.expired",
    ],
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
};

const dotMap: Record<string, string> = {
  emerald: "bg-emerald-400",
  cyan: "bg-cyan-400",
  violet: "bg-violet-400",
  amber: "bg-amber-400",
};

export default function WebhookEventsAutomationPage() {
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
          width={1024}
          height={1024}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-emerald-400 bg-emerald-500/10 border-emerald-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            37 Webhook Events: The Automation Layer Most Construction Software Forgets
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 4, 2026</span>
            <span>&middot;</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Cornerstone PM ships 37 named webhook events with typed payloads, HMAC-SHA256 signatures,
            delivery logs, and automatic retry — not a checkbox that says “webhooks: yes.” That
            distinction matters when you&apos;re wiring Twilio SMS to a task assignment, routing a bid
            submission to your CRM, or triggering a voice call the moment a deadline slips. The
            automation layer is only as useful as the events it can listen to.
          </p>

          <p>
            For a full overview of the Cornerstone PM platform and how it compares to other tools
            in the market, start with the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software guide
            </Link>
            . This post goes deep on the webhook system specifically — what it covers, why the
            catalog matters, and the real-world automation plays builders are running on top of it.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does “webhooks exist” mean almost nothing?
          </h2>
          <p>
            When enterprise software says “we have webhooks,” that typically means one or two
            generic events — maybe a “record updated” trigger — with no documentation on what fields
            the payload includes, no way to verify the request actually came from the platform, and no
            visibility into whether delivery succeeded or failed.
          </p>
          <p>
            That kind of webhook is technically true and practically useless. You can&apos;t build reliable
            automation on top of an untyped payload with no retry logic and no delivery log. When the
            event fires and your downstream system doesn&apos;t react, you have no idea whether the webhook
            fired at all, what the payload contained, or where in the chain things broke.
          </p>
          <p>
            Cornerstone PM took a different approach: publish a named catalog of 37 events, each with
            a documented payload schema, each signed with HMAC-SHA256, each tracked through a delivery
            log with per-event retry controls. The goal was to make the platform automation-friendly at
            the same level as mature API-first SaaS tools — not to check a feature box.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The 37 webhook events: what&apos;s in the catalog
          </h2>
          <p>
            Events are organized into six categories that map to the actual workflow stages of
            residential home building. Here&apos;s how the catalog breaks down:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-6">
            {eventCategories.map((cat) => (
              <div
                key={cat.name}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full border ${colorMap[cat.color]}`}
                  >
                    {cat.name}
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {cat.events.map((ev) => (
                    <li key={ev} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dotMap[cat.color]}`} />
                      <code className="font-mono text-slate-300">{ev}</code>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p>
            The remaining events cover the Messages category (new messages, read receipts, broadcast
            confirmations) and additional lifecycle edge cases. The full catalog covers every
            meaningful state transition a home goes through from lead to close — and every action
            that matters to the vendors and subs working in the field.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What makes these webhooks useful: signatures, logs, and retry
          </h2>
          <p>
            Three infrastructure pieces turn a webhook catalog into a reliable automation layer:
          </p>

          <div className="not-prose space-y-4 my-6">
            {[
              {
                icon: <Zap className="w-4 h-4 text-emerald-400" />,
                title: "HMAC-SHA256 signatures",
                body:
                  "Every request is signed with a shared secret. Your receiver verifies the signature before processing — confirming the event came from Cornerstone PM and wasn't tampered with. This is standard practice for webhook security but missing from most construction software implementations.",
              },
              {
                icon: <Check className="w-4 h-4 text-cyan-400" />,
                title: "Delivery logs",
                body:
                  "In Settings → Webhooks, you can see every fired event: timestamp, target URL, response code, and payload. When something breaks in your automation chain, you know immediately whether the webhook fired, what it sent, and whether your endpoint acknowledged it.",
              },
              {
                icon: <Zap className="w-4 h-4 text-violet-400" />,
                title: "Automatic retry",
                body:
                  "If your endpoint returns a non-2xx response, Cornerstone PM queues automatic retries with exponential backoff. A momentary downstream outage doesn't mean a lost event — the system keeps trying until delivery succeeds or a retry limit is reached.",
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
            Real-world automation plays builders are running
          </h2>
          <p>
            The catalog is the foundation; the plays are where it gets interesting. Here are three
            automation patterns that production builders are running on top of the Cornerstone PM
            webhook system today:
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            1. SMS subcontractor notifications via Twilio
          </h3>
          <p>
            When <code className="bg-slate-800 px-1 rounded text-sm">task.assigned</code> fires,
            a lightweight receiver pulls the vendor phone number from the payload and fires a Twilio
            SMS: “You&apos;ve been assigned framing on Lot 14 — Magnolia Plan. Start date: June 10.
            Questions? Reply here.” No app login required for the sub, no manual notification from
            the super. The event fires when the task is assigned; the text arrives in seconds.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            2. Voice calls on missed deadlines via Bland or Retell
          </h3>
          <p>
            When <code className="bg-slate-800 px-1 rounded text-sm">task.overdue</code> fires or
            <code className="bg-slate-800 px-1 rounded text-sm"> bid_request.expired</code> triggers,
            a receiver kicks off an AI voice call through Bland or Retell to the responsible vendor.
            The call reads from the typed payload — vendor name, task name, due date — and asks for
            a status update. No super has to make the call manually. The platform notices the slip;
            the voice agent makes the contact.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-3">
            3. CRM pipeline sync on sales events
          </h3>
          <p>
            When <code className="bg-slate-800 px-1 rounded text-sm">lead.stage_changed</code> or{" "}
            <code className="bg-slate-800 px-1 rounded text-sm">contract.executed</code> fires, a
            receiver pushes the update to HubSpot, Salesforce, or whatever CRM the sales team uses.
            Home stage in Cornerstone PM stays in sync with deal stage in the CRM with zero manual
            entry. When a contract executes, the CRM closes the deal automatically.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How this compares to “webhooks exist” in other construction software
          </h2>

          <div className="not-prose overflow-x-auto rounded-xl border border-slate-800 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-900/60">
                  <th className="text-left px-5 py-4 text-slate-400 font-medium">Capability</th>
                  <th className="px-5 py-4 text-slate-400 font-medium text-center">
                    Most platforms
                  </th>
                  <th className="px-5 py-4 text-cyan-400 font-medium text-center">
                    Cornerstone PM™
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-slate-300">
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Named event catalog</td>
                  <td className="px-5 py-3.5 text-center text-red-400">1–3 generic events</td>
                  <td className="px-5 py-3.5 text-center text-emerald-400">37 named events</td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Typed payload schema</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">HMAC-SHA256 signature</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Delivery log per event</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">Automatic retry</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center">
                    <Check className="w-4 h-4 text-emerald-400 mx-auto" />
                  </td>
                </tr>
                <tr className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-5 py-3.5">REST API + BYOA layer</td>
                  <td className="px-5 py-3.5 text-center">
                    <X className="w-4 h-4 text-slate-600 mx-auto" />
                  </td>
                  <td className="px-5 py-3.5 text-center text-emerald-400">150+ endpoints</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Webhooks + REST API + BYOA: the full bidirectional layer
          </h2>
          <p>
            Webhooks push events out. The{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Cornerstone PM REST API
            </Link>{" "}
            (Pro+ exclusive) lets external agents and scripts read and write data in. Together they
            form a full bidirectional automation layer: webhooks tell your stack what happened;
            the API lets your stack act on it.
          </p>
          <p>
            The REST API ships 150+ endpoints across 84 dedicated routes plus a generic execute
            endpoint that covers all 396+ Foreman skills — in Anthropic tool-call format, OpenAI
            function-call format, and OpenAPI 3.1. BYOA (Bring Your Own AI Agent) means every
            endpoint maps directly to a Foreman skill: when Foreman ships a new skill, your BYOA
            agent gets it automatically with no configuration required. JobTread and Buildertrend
            say “webhooks exist” and “API available.” Cornerstone PM ships the full skill
            catalog as endpoints.
          </p>
          <p>
            And on top of that, the MCP server in app settings lets Claude Desktop, Cursor, and
            Windsurf connect directly to{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI&apos;s skill catalog
            </Link>{" "}
            without writing any integration code. Webhooks are the outbound half; MCP is the
            no-code inbound half; REST API is the full-control path. It&apos;s the same philosophy as
            the Foreman skill catalog: ship infrastructure that gets better every time a new skill
            lands, without asking builders to reconfigure anything.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What “automation-friendly” actually means for a home builder
          </h2>
          <p>
            The construction software market uses “automation-friendly” as a marketing phrase.
            What it means in practice depends entirely on the depth of the event catalog and the
            reliability of delivery.
          </p>
          <p>
            A platform with three generic webhooks and no HMAC verification is not automation-friendly.
            It&apos;s a platform where you can technically wire a Zapier automation that fires on
            “record updated” — and then spend the next hour debugging whether it was a task update,
            a vendor update, or a home record update, because the payload doesn&apos;t tell you.
          </p>
          <p>
            A platform with 37 named events, typed payloads, HMAC verification, delivery logs, and
            retry is automation-friendly. Your receiver knows exactly what happened, exactly what
            data arrived, and exactly what to do with it. The integration layer is reliable enough
            to build real workflows on — not just demos.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Build automations your construction software actually supports.
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Cornerstone PM ships 37 named webhook events, 150+ REST API endpoints, a BYOA layer
              built on 396+ Foreman skills, and an MCP server for direct AI agent access — all in
              one platform built for production home builders.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access →
            </Link>
          </div>
        </div>
      </article>

      <FAQSection
        title="Construction Software Webhooks: Common Questions"
        subtitle="Answers to what builders ask when evaluating webhook and automation support in home builder platforms."
        items={faqItems}
        accentTextClass="text-white"
      />

      <Footer />
    </main>
  );
}
