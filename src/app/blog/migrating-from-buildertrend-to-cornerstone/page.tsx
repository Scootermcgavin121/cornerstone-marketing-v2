import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { BlogHero } from "@/components/BlogHero";
import { Footer } from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Migrating from Buildertrend to Cornerstone PM: Step-by-Step Guide — Cornerstone PM Blog",
  description:
    "Step-by-step guide to migrating from Buildertrend to Cornerstone PM. Schedule import, vendor migration, template conversion, and team onboarding in under a week.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/migrating-from-buildertrend-to-cornerstone",
  },
  openGraph: {
    images: [
      {
        url: "https://www.cornerstonepm.ai/blog/migrating-from-buildertrend.png",
        width: 1024,
        height: 1024,
        alt: "Production home builder migrating data from Buildertrend to a modern home builder software platform",
      },
    ],
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Migrate from Buildertrend to Cornerstone PM",
  description:
    "A step-by-step guide for production home builders migrating from Buildertrend to Cornerstone PM, covering data export, community setup, schedule templates, vendor migration, and team onboarding.",
  totalTime: "P5D",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Export Your Buildertrend Data",
      text: "Export your contacts, vendor list, and any schedule templates from Buildertrend. Use Buildertrend's built-in CSV export for contacts and schedules. Save PDFs of any active purchase orders for reference during the transition.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Set Up Communities in Cornerstone PM",
      text: "Create one Community per subdivision or project type in Cornerstone PM. Communities are the top-level container for floor plans, vendors, and schedule templates. Set community-specific vendor assignments here — different framers for different neighborhoods is fully supported.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Build or Import Your Schedule Templates",
      text: "Recreate your master schedule templates inside Cornerstone PM using the schedule builder. Use predecessor logic to chain tasks — Cornerstone automatically calculates start dates and pushes notifications to subs when their task unlocks. Most builders complete a standard production schedule (30–50 tasks) in under two hours.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Migrate Vendors and Contacts",
      text: "Import your subcontractor list using the CSV import tool. Assign each vendor to the relevant trade scope (framing, plumbing, electrical, etc.) and link them to the communities where they work. Vendor portal invites go out automatically once assigned.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Configure Purchasing and Floor Plans",
      text: "Upload your floor plan PDFs and run Blueprint AI to generate material takeoffs. Review extracted scopes and link vendor pricing. Configure your option classes and design packages for the design center. This step replaces months of manual Buildertrend catalog maintenance.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Onboard Your Team",
      text: "Invite your superintendent, sales rep, and purchasing manager. Cornerstone uses role-based permissions — supers see the schedule and field tasks, sales see the pipeline and buyer portal, purchasing sees POs and vendor bids. No feature overload for anyone.",
    },
    {
      "@type": "HowToStep",
      position: 7,
      name: "Go Live on Your Next Active Build",
      text: "Start a new lot using your imported schedule template. Assign the vendor list from your community defaults. Send your buyers their portal link. Most teams are running live builds in Cornerstone within 3–5 business days of starting the migration.",
    },
  ],
};

export default function MigratingFromBuildertrendPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <BlogHero
          src="/blog/migrating-from-buildertrend.png"
          alt="Production home builder migrating data from Buildertrend to a modern home builder software platform"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            Migration Guide
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Migrating from Buildertrend to Cornerstone PM: Step-by-Step Guide
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>May 3, 2026</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Most production home builders can complete a full migration from Buildertrend to Cornerstone PM in
            3–5 business days — with no data loss, no IT contractor, and no interruption to active builds.
            Cornerstone ships <strong className="text-white">23 dedicated CSV import endpoints</strong> and a new
            <strong className="text-white"> AI Migration Wizard (Live in Beta)</strong> that
            reads your exports, maps the columns, and runs the imports for you — covering 17 core data types in one guided flow.
            Here&apos;s exactly how to do it.
          </p>

          <p>
            If you&apos;ve been evaluating your options, you&apos;ve probably already read our{" "}
            <Link
              href="/buildertrend-alternative"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full Buildertrend alternative breakdown
            </Link>
            . This post is the operational follow-through: a practical, step-by-step migration guide for the
            builder who&apos;s made the decision and wants to move fast without breaking anything.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Before you start: what actually needs to migrate?
          </h2>
          <p>
            Most Buildertrend migrations are simpler than builders expect. The data that matters:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-slate-300">
            <li><strong className="text-white">Vendor and subcontractor list</strong> — names, contact info, trade assignments</li>
            <li><strong className="text-white">Schedule templates</strong> — your master task sequences and predecessor logic</li>
            <li><strong className="text-white">Active lots and communities</strong> — which builds are in progress</li>
            <li><strong className="text-white">Purchase orders in flight</strong> — save PDFs; Cornerstone will issue new POs going forward</li>
          </ul>
          <p>
            What you do <em>not</em> need to migrate: Buildertrend&apos;s historical photos, old warranty tickets, or
            archived messages. Start clean on those. The operational data is what drives the transition.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            The 7-step migration
          </h2>

          {/* Step 1 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 1</p>
            <h3 className="text-xl font-bold text-white">Export your Buildertrend data</h3>
            <p>
              In Buildertrend, export your contacts and vendor list as CSV files (Settings → Contacts → Export).
              For schedule templates, export via the Schedule section — you&apos;ll use this as a reference when
              rebuilding in Cornerstone, not a direct import. Save PDFs of any active POs for your records.
              This takes about 30 minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 2</p>
            <h3 className="text-xl font-bold text-white">Set up communities in Cornerstone PM</h3>
            <p>
              Create one Community per subdivision, development phase, or project type. This is the foundation
              of how Cornerstone organizes your work — floor plans, vendor assignments, and schedule templates
              all live under a community. The key advantage over Buildertrend: you can assign different
              subcontractors per community. Your framer in Meadowbrook can be different from your framer
              in Ridgeview, and Cornerstone tracks them separately without any manual override gymnastics.
            </p>
          </div>

          {/* Step 3 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 3</p>
            <h3 className="text-xl font-bold text-white">Build your schedule templates</h3>
            <p>
              Using your exported Buildertrend schedule as a reference, rebuild your master schedule template
              inside Cornerstone&apos;s schedule builder. Set up predecessor relationships — Cornerstone
              automatically calculates projected start dates across the entire sequence and pushes
              notifications to subcontractors when their predecessor task is marked complete.
              Most production schedules (30–50 tasks) take under two hours to configure. Build one template
              per floor plan model, then clone and adjust for community-specific variations.
            </p>
          </div>

          {/* Step 4 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 4</p>
            <h3 className="text-xl font-bold text-white">Migrate vendors and contacts</h3>
            <p>
              Import your subcontractor list via CSV, then assign each vendor to their trade scope and
              community. Cornerstone&apos;s vendor portal is token-protected — no login required for your subs.
              Once a vendor is assigned to a community scope, they automatically receive bid requests and
              portal invites when relevant. The platform supports multiple accepted bids per scope across
              different communities, so your real-world vendor relationships map directly to the data model.
            </p>
          </div>

          {/* Step 5 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 5</p>
            <h3 className="text-xl font-bold text-white">Configure floor plans and purchasing</h3>
            <p>
              Upload your floor plan PDFs and run{" "}
              <Link
                href="/ai-takeoff"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                Blueprint AI
              </Link>{" "}
              to extract material scopes automatically — typically 130+ line items in under 60 seconds.
              Review the extracted data, link vendor pricing, and configure option classes for your{" "}
              <Link
                href="/design"
                className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
              >
                design center
              </Link>
              . This replaces the manual catalog maintenance you were doing in Buildertrend — usually saving
              several days of initial setup work.
            </p>
          </div>

          {/* Step 6 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 6</p>
            <h3 className="text-xl font-bold text-white">Onboard your team</h3>
            <p>
              Invite your superintendent, sales rep, and purchasing manager. Cornerstone uses role-based
              permissions — supers see the schedule and field tasks, sales see the pipeline and buyer portal,
              purchasing sees POs and vendor bids. Nobody gets dropped into a platform with 40 modules
              they&apos;ll never use. Most teams are comfortable navigating independently within a day.
            </p>
          </div>

          {/* Step 7 */}
          <div className="border-l-2 border-violet-500/40 pl-6 space-y-2">
            <p className="text-sm font-semibold text-violet-400 uppercase tracking-wide">Step 7</p>
            <h3 className="text-xl font-bold text-white">Go live on your next active build</h3>
            <p>
              Don&apos;t try to migrate every active build simultaneously. Start one new lot in Cornerstone —
              create it from your imported schedule template, assign vendors from the community defaults,
              send the buyer their portal link. Run it in parallel with Buildertrend for one build cycle
              if you need the confidence. Most teams are fully off Buildertrend within 30 days of going live
              on their first Cornerstone lot.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What about active builds in Buildertrend?
          </h2>
          <p>
            For homes that are already under construction in Buildertrend, finish them there. There&apos;s no
            value in mid-stream migration on a build that&apos;s 60% complete. Use the overlap period — typically
            2–6 weeks depending on your pipeline — to run new starts in Cornerstone and let active builds
            close naturally in Buildertrend. By the time your last Buildertrend lot closes, your team will be
            fully fluent in Cornerstone.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How is this different from the Buildertrend onboarding process?
          </h2>
          <p>
            Buildertrend&apos;s onboarding typically runs 4–8 weeks and requires working through their
            structured implementation program. Cornerstone PM has no mandatory onboarding queue — you set up
            your account, build your first template, and start a lot. No waiting for a customer success
            manager to schedule your next call.
          </p>
          <p>
            The biggest practical difference: Cornerstone is built for production builders specifically.
            The community model, vendor bid workflow, and design center are designed around how production
            builders actually operate — not adapted from a general-contractor tool. For a detailed feature
            comparison, see the{" "}
            <Link
              href="/buildertrend-alternative"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              full Buildertrend vs Cornerstone PM breakdown
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Ready to make the switch?
          </h2>
          <p>
            Cornerstone PM is currently in free beta for early adopters. There&apos;s no implementation fee,
            no IT setup, and no 90-day onboarding queue. If you&apos;re a production home builder who&apos;s been
            paying Buildertrend $499+/month for a tool that wasn&apos;t designed for your workflow, the migration
            is worth the 3–5 days of setup time.
          </p>

        </div>

        <div className="mt-12 p-6 rounded-2xl border border-violet-500/20 bg-violet-500/5">
          <h3 className="text-lg font-bold text-white mb-2">
            Switch from Buildertrend — no implementation fee, no waiting
          </h3>
          <p className="text-slate-400 text-sm mb-4">
            Beta access is open now. Early adopters get two years free. Full platform: scheduling,
            design center, purchasing, AI agents, buyer portal, and more.
          </p>
          <Link
            href="/beta"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-500 to-violet-400 text-white font-bold text-sm hover:from-violet-400 hover:to-violet-300 transition-all duration-200"
          >
            Request Beta Access
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
