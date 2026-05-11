import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronDown } from "lucide-react";

/*
================================================================================
 /faq - MASTER FAQ (AI-search-optimized)
================================================================================

 Consolidates ~137 raw Q&A pairs from across the marketing site into ~95
 canonical questions across 10 categories. This is the SEO/AISO source-of-truth
 - answers are intentionally short (2-4 sentences), evidence-loaded with
 specific numbers/feature names, and link to deeper pages.

 Source pages whose content was lifted (consider redirecting their JSON-LD
 references here in a future pass - not done yet, just flagged):
   - /pricing                               (8 â†’ merged into Pricing)
   - /migrate                               (8 â†’ merged into Migration)
   - /buildertrend-alternative              (8 â†’ merged into Comparisons + Migration)
   - /buildpro-alternative                  (8 â†’ merged into Comparisons + Migration)
   - /newstar-alternative                   (8 â†’ merged into Comparisons + Migration)
   - /home-builder-project-management-software (9 â†’ spread across categories)
   - /construction                          (8 â†’ merged into Scheduling)
   - /design                                (8 â†’ merged into Design Center)
   - /sales                                 (8 â†’ merged into Sales)
   - /purchasing                            (16 â†’ merged into Purchasing)
   - /permitting                            (7 â†’ merged into Scheduling/Permitting)
   - /bid-import-ai                         (8 â†’ merged into AI Agents)
   - /support-ai                            (12 â†’ merged into AI Agents)
   - /blog/buildertrend-vs-cornerstone-feature-comparison (7)
   - /blog/home-builder-software-buyer-guide-2026 (7)
   - /blog/newstar-implementation-cost-breakdown (7)

 Contradictions flagged for Scooter to resolve (NOT silently fixed):
   - Buildertrend price: pricing page says "$399 to $499+/mo"; multiple
     other pages say "$499/mo". Used $499/mo (the more common value).
   - Migration timeline: buildertrend-alternative says "under a day,
     self-serve"; buildpro-alternative says "under a week"; blog says
     "3-5 business days for production builders". Resolved as: "hours
     to a day for self-serve via the AI Migration Wizard; under a
     week with white-glove" - matches recent "hours, not days"
     positioning.
   - Implementation time: home-builder-pm page says "operational within
     a week"; newer pricing/migrate pages say "hours" / "an afternoon".
     Resolved as "hours to a day" per the recent positioning shift.
   - JobTread starting price referenced as ~$179/mo on pricing page -
     verify externally; kept as-is.
   - Pro plan home cap referenced as "1,000 active homes" on
     newstar-alternative; not referenced on pricing page. Kept.

 Gaps (questions worth answering but no source material yet - flag for
 future content work):
   - "Is Cornerstone PM SOC 2 compliant?" (security)
   - "Where is data hosted? (AWS region/provider)" (security)
   - "Does Cornerstone PM integrate with QuickBooks/Sage/Xero today?"
     (integrations - only mentioned aspirationally)
   - "Is there a mobile app, or just responsive web?" (we say
     "mobile-friendly" but no native app claimed/disclaimed)
   - "Can buyers e-sign contracts inside Cornerstone?" (sales)
   - "What's the SLA / uptime guarantee?" (security)
   - "Single sign-on (SSO) support?" (security)
   - "Multi-factor auth (MFA)?" (security)
   - "vs CoConstruct / vs JobTread / vs MarkSystems" - we have the
     positioning but no dedicated alt pages yet for those three. Kept
     short comparative answers here.

================================================================================
*/

export const metadata: Metadata = {
  title: "Cornerstone PM FAQ - Pricing, Migration, AI Agents, Setup | Cornerstone PM",
  description:
    "Everything you need to know about Cornerstone PM home builder software - pricing, migration from Buildertrend/NEWSTAR/BuildPro, AI agents, REST API, integrations, security, and how we compare. ~95 questions answered.",
  alternates: { canonical: "https://www.cornerstonepm.ai/faq" },
  keywords: [
    "Cornerstone PM FAQ",
    "home builder software FAQ",
    "Buildertrend alternative FAQ",
    "NEWSTAR alternative FAQ",
    "BuildPro alternative FAQ",
    "home builder software questions",
    "home builder AI FAQ",
    "construction scheduling FAQ",
    "home builder pricing",
  ],
  openGraph: {
    title: "Cornerstone PM FAQ - Every Question Answered",
    description:
      "Pricing, migration, AI agents, integrations, security, and competitor comparisons. The canonical FAQ for Cornerstone PM.",
    url: "https://www.cornerstonepm.ai/faq",
    type: "website",
  },
};

type FAQItem = { q: string; a: React.ReactNode; aText: string };
type Category = {
  slug: string;
  title: string;
  blurb: string;
  accent: string; // tailwind text color
  items: FAQItem[];
};

// Helper for inline links in answers
const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2">
    {children}
  </Link>
);

// ============================================================================
// 1. PRICING & PLANS
// ============================================================================
const pricing: Category = {
  slug: "pricing",
  title: "Pricing & Plans",
  blurb: "What it costs, what's in each tier, and how the free beta works.",
  accent: "text-emerald-400",
  items: [
    {
      q: "How much does Cornerstone PM cost?",
      aText:
        "Cornerstone PM starts at $149/mo (Starter), $299/mo (Builder, adds purchasing/sales/design center), $499/mo (Pro, adds Foreman AI + Blueprint AI), and $599/mo (Pro+, adds REST API, BYOA, and Bid Import AI). Every plan includes unlimited users with no per-seat fees. See full plan details on /pricing.",
      a: (
        <>
          Cornerstone PM starts at <strong>$149/mo</strong> (Starter), <strong>$299/mo</strong> (Builder, adds
          purchasing/sales/design center), <strong>$499/mo</strong> (Pro, adds Foreman AI + Blueprint AI), and{" "}
          <strong>$599/mo</strong> (Pro+, adds REST API, BYOA, and Bid Import AI). Every plan includes unlimited users
          with no per-seat fees. See full plan details on <A href="/pricing">/pricing</A>.
        </>
      ),
    },
    {
      q: "Is there a free trial or free beta?",
      aText:
        "Yes - the 2-year free beta is open to the first 100 home builders, no credit card and no contract. Beta includes every feature on the Pro plan including Foreman AI (45+ skills) and Blueprint AI takeoffs. Request access at /beta.",
      a: (
        <>
          Yes - the <strong>2-year free beta</strong> is open to the first 100 home builders, no credit card and
          no contract. Beta includes every feature on the Pro plan including Foreman AI (45+ skills) and Blueprint AI
          takeoffs. Request access at <A href="/beta">/beta</A>.
        </>
      ),
    },
    {
      q: "Are there per-seat fees?",
      aText:
        "No. Every Cornerstone PM plan includes unlimited users, unlimited subcontractors, and unlimited buyers at no additional charge - add your whole team, every vendor, and every homeowner without per-seat math.",
      a: (
        <>
          <strong>No.</strong> Every Cornerstone PM plan includes unlimited users, unlimited subcontractors, and
          unlimited buyers at no additional charge - add your whole team, every vendor, and every homeowner without
          per-seat math.
        </>
      ),
    },
    {
      q: "What's the implementation cost?",
      aText:
        "Zero. Cornerstone PM has no setup fees, no required consultants, and no separate onboarding contract - most builders are operational in hours. Compare to NEWSTAR or BuildPro which typically require $25,000 to $100,000+ implementation budgets.",
      a: (
        <>
          <strong>Zero.</strong> Cornerstone PM has no setup fees, no required consultants, and no separate onboarding
          contract - most builders are operational in hours. Compare to NEWSTAR or BuildPro which typically require{" "}
          <strong>$25,000 to $100,000+</strong> implementation budgets.
        </>
      ),
    },
    {
      q: "Which plan includes the AI agents?",
      aText:
        "Cornerstone PM ships 5 native AI agents. AI Support Agent is on every plan from Starter ($149/mo). AI MLS Listing Generator is on Builder ($299/mo) and above. Foreman AI (45+ skills) and Blueprint AI are on Pro ($499/mo). Bid Import AI and BYOA are on Pro+ ($599/mo).",
      a: (
        <>
          Cornerstone PM ships <strong>5 native AI agents</strong>. <A href="/support-ai">AI Support Agent</A> is on
          every plan from Starter ($149/mo). <A href="/listing-sheet">AI MLS Listing Generator</A> is on Builder
          ($299/mo) and above. <A href="/foreman">Foreman AI</A> (45+ skills) and <A href="/ai-takeoff">Blueprint AI</A>{" "}
          are on Pro ($499/mo). <A href="/bid-import-ai">Bid Import AI</A> and BYOA are on Pro+ ($599/mo).
        </>
      ),
    },
    {
      q: "What's included in the free beta?",
      aText:
        "Beta access for two years is free for the first 100 home builders. It includes every Pro plan feature: scheduling, sales pipeline, purchasing, design center, options engine, Foreman AI (45+ skills), Blueprint AI takeoffs, and the homeowner portal. After beta, plans start at $149/mo.",
      a: (
        <>
          Beta access for two years is free for the first 100 home builders. It includes every Pro plan feature:
          scheduling, sales pipeline, purchasing, design center, options engine, Foreman AI (45+ skills), Blueprint AI
          takeoffs, and the homeowner portal. After beta, plans start at $149/mo. Apply at <A href="/beta">/beta</A>.
        </>
      ),
    },
    {
      q: "Do you offer annual billing or discounts?",
      aText:
        "Yes. Annual billing is available for Builder, Pro, and Pro+ plans at a discount vs monthly. Contact us for annual quotes and custom pricing for production builders running more than 1,000 active homes.",
      a: (
        <>
          Yes. Annual billing is available for Builder, Pro, and Pro+ plans at a discount vs monthly. <A href="/contact">Contact us</A>{" "}
          for annual quotes and custom pricing for production builders running more than 1,000 active homes.
        </>
      ),
    },
    {
      q: "Is Cornerstone PM cheaper than Buildertrend?",
      aText:
        "Yes. Cornerstone PM Starter is $149/mo with unlimited users; Buildertrend starts at $499/mo. The full Cornerstone Pro plan is $499/mo - same as Buildertrend's entry tier - and includes Foreman AI and Blueprint AI that Buildertrend doesn't offer at any price.",
      a: (
        <>
          Yes. Cornerstone PM Starter is <strong>$149/mo</strong> with unlimited users; Buildertrend starts at{" "}
          <strong>$499/mo</strong>. The full <A href="/pricing">Cornerstone Pro plan</A> is $499/mo - same as
          Buildertrend's entry tier - and includes Foreman AI and Blueprint AI that Buildertrend doesn't offer at any
          price.
        </>
      ),
    },
    {
      q: "How much does NEWSTAR cost compared to Cornerstone PM?",
      aText:
        "NEWSTAR pricing is enterprise-quoted, but typical implementations run $25,000 to $100,000+ in setup plus $15,000-$40,000/year in per-seat licensing. Cornerstone PM Pro+ is $599/mo flat with REST API and BYOA included - no implementation fee, no per-seat charges.",
      a: (
        <>
          NEWSTAR pricing is enterprise-quoted, but typical implementations run <strong>$25,000 to $100,000+</strong>{" "}
          in setup plus $15,000-$40,000/year in per-seat licensing. Cornerstone PM Pro+ is $599/mo flat with REST API
          and BYOA included - no implementation fee, no per-seat charges. See <A href="/newstar-alternative">/newstar-alternative</A>.
        </>
      ),
    },
    {
      q: "What's included on Pro+ that Pro doesn't have?",
      aText:
        "Pro+ ($599/mo) adds the full REST API (59+ endpoints and growing rapidly), 30+ named webhook event types (catalog growing weekly), Bring Your Own Agent (BYOA) so you can plug Claude or ChatGPT into live builder data, Bid Import AI (drag any vendor PDF/Excel/photo and AI extracts every line), the 7-wave automated bidding pipeline, and uncapped active home count.",
      a: (
        <>
          Pro+ ($599/mo) adds the full <A href="/api-access">REST API (59+ endpoints and growing)</A>, 30+ named webhook event types (catalog growing),
          Bring Your Own Agent (BYOA) so you can plug Claude or ChatGPT into live builder data,{" "}
          <A href="/bid-import-ai">Bid Import AI</A> (drag any vendor PDF/Excel/photo and AI extracts every line), the
          7-wave automated bidding pipeline, and uncapped active home count.
        </>
      ),
    },
  ],
};

// ============================================================================
// 2. MIGRATION & SETUP
// ============================================================================
const migration: Category = {
  slug: "migration",
  title: "Migration & Setup",
  blurb: "Switching from Buildertrend, NEWSTAR, BuildPro, JobTread, CoConstruct, or Excel.",
  accent: "text-cyan-400",
  items: [
    {
      q: "How long does it take to migrate to Cornerstone PM?",
      aText:
        "Most builders self-serve migrate in hours to a day using the AI Migration Wizard (Live in Beta). White-glove migrations on Pro and Pro+ plans typically wrap in under a week. Compare to NEWSTAR (3-12 months with consultants) or Buildertrend onboarding (4-8 weeks).",
      a: (
        <>
          Most builders self-serve migrate in <strong>hours to a day</strong> using the{" "}
          <A href="/migrate">AI Migration Wizard (Live in Beta)</A>. White-glove migrations on Pro and Pro+ plans
          typically wrap in under a week. Compare to NEWSTAR (3-12 months with consultants) or Buildertrend onboarding
          (4-8 weeks).
        </>
      ),
    },
    {
      q: "What is the AI Migration Wizard?",
      aText:
        "The AI Migration Wizard (Live in Beta) is the AI-powered front door to Cornerstone PM data import. Drop your Buildertrend/JobTread/CoConstruct/NEWSTAR/BuildPro export files in, the wizard reads them with GPT-4o-mini, maps the columns, runs the imports, and tells you what it skipped. Find it at /admin/migrate inside the app.",
      a: (
        <>
          The <A href="/migrate">AI Migration Wizard</A> (<strong>Live in Beta</strong>) is the AI-powered front door
          to Cornerstone PM data import. Drop your Buildertrend/JobTread/CoConstruct/NEWSTAR/BuildPro export files in,
          the wizard reads them with GPT-4o-mini, maps the columns, runs the imports, and tells you what it skipped.
          Find it at /admin/migrate inside the app.
        </>
      ),
    },
    {
      q: "Which platforms can I migrate from?",
      aText:
        "Buildertrend, JobTread, and CoConstruct are auto-detected today. The wizard also handles NEWSTAR, BuildPro, MarkSystems, and any Excel- or CSV-based system using a smart column mapper. AI bid import handles any free-form vendor file (PDF, scan, even a phone photo of a handwritten quote) the CSVs can't.",
      a: (
        <>
          Buildertrend, JobTread, and CoConstruct are <strong>auto-detected</strong> today. The wizard also handles
          NEWSTAR, BuildPro, MarkSystems, and any Excel- or CSV-based system using a smart column mapper.{" "}
          <A href="/bid-import-ai">AI bid import</A> handles any free-form vendor file (PDF, scan, even a phone photo
          of a handwritten quote) the CSVs can't.
        </>
      ),
    },
    {
      q: "What data types are migrated?",
      aText:
        "Seven data types come over in the AI wizard's one-click flow: vendors, homes, communities, users, leads, tasks, and purchase orders. Behind the scenes, 23 dedicated CSV import endpoints cover 17 core data types - vendors, homes, communities, schedule templates, master tasks, scopes, takeoffs, parts catalog, budgets, design categories, floorplans, warranties, and more.",
      a: (
        <>
          Seven data types come over in the AI wizard's one-click flow: <strong>vendors, homes, communities, users,
          leads, tasks, and purchase orders</strong>. Behind the scenes, 23 dedicated CSV import endpoints cover 17
          core data types - vendors, homes, communities, schedule templates, master tasks, scopes, takeoffs, parts
          catalog, budgets, design categories, floorplans, warranties, and more.
        </>
      ),
    },
    {
      q: "How does duplicate detection work during migration?",
      aText:
        "Vendors are deduped by email, then by name when email is missing. Homes are deduped by address + lot + community. Users are deduped by email. The wizard surfaces every duplicate in the preview so you can decide whether to skip, update, or import as new before committing.",
      a: (
        <>
          Vendors are deduped by <strong>email</strong>, then by name when email is missing. Homes are deduped by{" "}
          <strong>address + lot + community</strong>. Users are deduped by email. The wizard surfaces every duplicate
          in the preview so you can decide whether to skip, update, or import as new before committing.
        </>
      ),
    },
    {
      q: "Can I preview a migration before importing?",
      aText:
        "Yes - and we strongly recommend it. Dry-run mode runs the full pipeline against your data without writing anything to your tenant, showing exactly what would import, what would dedupe, and what would fail. Re-run the real import only after the dry-run looks right.",
      a: (
        <>
          Yes - and we strongly recommend it. <strong>Dry-run mode</strong> runs the full pipeline against your data
          without writing anything to your tenant, showing exactly what would import, what would dedupe, and what
          would fail. Re-run the real import only after the dry-run looks right.
        </>
      ),
    },
    {
      q: "What does data migration cost?",
      aText:
        "Essentially nothing - about $0.002 per file in AI inference cost (via GPT-4o-mini), which Cornerstone absorbs. We do not charge for data migration, ever. White-glove migration with hands-on assistance is included on Pro and Pro+.",
      a: (
        <>
          Essentially nothing - about <strong>$0.002 per file</strong> in AI inference cost (via GPT-4o-mini), which
          Cornerstone absorbs. We do not charge for data migration, ever. White-glove migration with hands-on
          assistance is included on Pro and Pro+.
        </>
      ),
    },
    {
      q: "Can I migrate from Buildertrend specifically?",
      aText:
        "Yes - Buildertrend is auto-detected by the AI Migration Wizard. Drop your Buildertrend exports in and the wizard maps columns, dedupes against your existing Cornerstone data, and runs the imports. Most Buildertrend migrations complete self-serve in under a day. See /buildertrend-alternative.",
      a: (
        <>
          Yes - Buildertrend is auto-detected by the AI Migration Wizard. Drop your Buildertrend exports in and the
          wizard maps columns, dedupes against your existing Cornerstone data, and runs the imports. Most Buildertrend
          migrations complete self-serve in under a day. See <A href="/buildertrend-alternative">/buildertrend-alternative</A>.
        </>
      ),
    },
    {
      q: "Can I migrate from NEWSTAR or BuildPro?",
      aText:
        "Yes. The AI Migration Wizard ingests NEWSTAR, BuildPro, and MarkSystems exports through the same 23 CSV endpoints. AI bid import handles any free-form vendor pricing files those legacy systems can't cleanly export. White-glove migration is included on Pro and Pro+ plans.",
      a: (
        <>
          Yes. The AI Migration Wizard ingests NEWSTAR, BuildPro, and MarkSystems exports through the same 23 CSV
          endpoints. AI bid import handles any free-form vendor pricing files those legacy systems can't cleanly
          export. White-glove migration is included on Pro and Pro+ plans. See{" "}
          <A href="/newstar-alternative">/newstar-alternative</A> and{" "}
          <A href="/buildpro-alternative">/buildpro-alternative</A>.
        </>
      ),
    },
    {
      q: "How long does NEWSTAR implementation take vs Cornerstone?",
      aText:
        "NEWSTAR implementations run 3-12 months from contract to go-live, typically 4-8 months for builders doing 5-200 homes/year. Cornerstone PM is operational in hours via the AI Migration Wizard, no consultants required.",
      a: (
        <>
          NEWSTAR implementations run <strong>3-12 months</strong> from contract to go-live, typically 4-8 months for
          builders doing 5-200 homes/year. Cornerstone PM is operational in <strong>hours</strong> via the AI
          Migration Wizard, no consultants required.
        </>
      ),
    },
    {
      q: "Do I need IT staff or consultants to set up Cornerstone PM?",
      aText:
        "No. Cornerstone PM is fully cloud-hosted with no on-premise software to install - no Citrix, no Windows server, no IT infrastructure. Most builders go live without a single consultant call. White-glove migration assistance is bundled into Pro and Pro+ plans if you want hands-on help.",
      a: (
        <>
          No. Cornerstone PM is fully cloud-hosted with no on-premise software to install - no Citrix, no Windows
          server, no IT infrastructure. Most builders go live without a single consultant call. White-glove migration
          assistance is bundled into Pro and Pro+ plans if you want hands-on help.
        </>
      ),
    },
  ],
};

// ============================================================================
// 3. AI AGENTS & AUTOMATION
// ============================================================================
const ai: Category = {
  slug: "ai-agents",
  title: "AI Agents & Automation",
  blurb: "Foreman AI, Blueprint AI, Bid Import AI, AI Migration Wizard, AI Support Agent, and BYOA.",
  accent: "text-violet-400",
  items: [
    {
      q: "What AI agents does Cornerstone PM include?",
      aText:
        "Five native AI agents: Foreman AI (45+ skills across scheduling, sales, purchasing, design center, bids, vendors, reporting), Blueprint AI (PDF floor plan reader extracting 130+ material scopes per plan), Bid Import AI (extracts line items from any vendor PDF/Excel/photo), AI MLS Listing Generator, and AI Support Agent.",
      a: (
        <>
          Five native AI agents: <A href="/foreman">Foreman AI</A> (45+ skills across scheduling, sales, purchasing,
          design center, bids, vendors, reporting), <A href="/ai-takeoff">Blueprint AI</A> (PDF floor plan reader
          extracting <strong>130+ material scopes</strong> per plan), <A href="/bid-import-ai">Bid Import AI</A>{" "}
          (extracts line items from any vendor PDF/Excel/photo),{" "}
          <A href="/listing-sheet">AI MLS Listing Generator</A>, and <A href="/support-ai">AI Support Agent</A>. Full
          overview at <A href="/ai-agents">/ai-agents</A>.
        </>
      ),
    },
    {
      q: "What is Foreman AI?",
      aText:
        "Foreman AI is Cornerstone PM's natural-language AI agent with 45+ skills across 7 domains: Schedule, Sales, Purchasing/Bid Pipeline, Design Center, Parts Catalog, Vendor Management, and Reporting. Tell it 'reschedule framing across all active homes by 2 days and notify vendors' in plain English and it executes against live data.",
      a: (
        <>
          <A href="/foreman">Foreman AI</A> is Cornerstone PM's natural-language AI agent with{" "}
          <strong>45+ skills across 7 domains</strong>: Schedule, Sales, Purchasing/Bid Pipeline, Design Center,
          Parts Catalog, Vendor Management, and Reporting. Tell it &quot;reschedule framing across all active
          homes by 2 days and notify vendors&quot; in plain English and it executes against live data.
        </>
      ),
    },
    {
      q: "What is Blueprint AI?",
      aText:
        "Blueprint AI is the floor-plan-PDF-to-material-takeoff agent. Upload a plan PDF and it extracts 130+ material scopes per floorplan - quantities, locations, and rough sizing - pre-populating your takeoff records and parts catalog. Saves the multi-day manual takeoff cycle every time you launch a new plan.",
      a: (
        <>
          <A href="/ai-takeoff">Blueprint AI</A> is the floor-plan-PDF-to-material-takeoff agent. Upload a plan PDF
          and it extracts <strong>130+ material scopes per floorplan</strong> - quantities, locations, and rough
          sizing - pre-populating your takeoff records and parts catalog. Saves the multi-day manual takeoff cycle
          every time you launch a new plan.
        </>
      ),
    },
    {
      q: "What is Bid Import AI?",
      aText:
        "Bid Import AI ingests any vendor bid format - Excel (.xlsx/.xls/.csv), PDF, JPG/PNG/HEIC, even a phone photo of a handwritten quote - and extracts every line item with confidence scores. 90%+ accuracy on filled bid templates, 75-90% on free-form vendor docs. Each line is fuzzy-matched to your parts catalog before import.",
      a: (
        <>
          <A href="/bid-import-ai">Bid Import AI</A> ingests any vendor bid format - Excel (.xlsx/.xls/.csv), PDF,
          JPG/PNG/HEIC, even a phone photo of a handwritten quote - and extracts every line item with confidence
          scores. <strong>90%+ accuracy</strong> on filled bid templates, <strong>75-90%</strong> on free-form vendor
          docs. Each line is fuzzy-matched to your parts catalog before import.
        </>
      ),
    },
    {
      q: "Can Bid Import AI route results to different destinations?",
      aText:
        "Yes - three options. Import as a Bid (creates BidLineItems, ready for side-by-side comparison and award). Import as Vendor Pricing (updates the vendor's standing pricing catalog by scope). Import as Takeoffs (creates floorplan-linked Takeoff records). Same parsed file, three possible destinations.",
      a: (
        <>
          Yes - three options. <strong>Import as a Bid</strong> (creates BidLineItems, ready for side-by-side
          comparison and award). <strong>Import as Vendor Pricing</strong> (updates the vendor's standing pricing
          catalog by scope). <strong>Import as Takeoffs</strong> (creates floorplan-linked Takeoff records). Same
          parsed file, three possible destinations.
        </>
      ),
    },
    {
      q: "What is AI Support Agent?",
      aText:
        "AI Support Agent is the always-on, in-app help desk grounded in Cornerstone's actual feature documentation, workflow guides, and your tenant's permission matrix. It picks up page context, answers buyers as well as builders, and beta builders saw 60-80% deflection on routine 'how do I...' tickets. Included on every plan.",
      a: (
        <>
          <A href="/support-ai">AI Support Agent</A> is the always-on, in-app help desk grounded in Cornerstone's
          actual feature documentation, workflow guides, and your tenant's permission matrix. It picks up page
          context, answers buyers as well as builders, and beta builders saw <strong>60-80% deflection</strong> on
          routine &quot;how do I...&quot; tickets. Included on every plan.
        </>
      ),
    },
    {
      q: "What is the AI MLS Listing Generator?",
      aText:
        "The AI MLS Listing Generator drafts MLS-ready listing copy from live home data - floorplan name, square footage, locked structural options, design selections, community amenities, and pricing - in seconds. Generates compliant, agent-style descriptions without copy/paste from spec sheets. Included on Builder ($299/mo) and above.",
      a: (
        <>
          The <A href="/listing-sheet">AI MLS Listing Generator</A> drafts MLS-ready listing copy from live home data
          - floorplan name, square footage, locked structural options, design selections, community amenities, and
          pricing - in seconds. Generates compliant, agent-style descriptions without copy/paste from spec sheets.
          Included on Builder ($299/mo) and above.
        </>
      ),
    },
    {
      q: "What is BYOA (Bring Your Own Agent)?",
      aText:
        "BYOA lets you connect Claude, ChatGPT, or any custom AI agent to live Cornerstone data via the REST API (59+ endpoints and growing) and 30+ named webhook event types (catalog growing). Build your own scheduling automations, run your own bid analyses, or wire Cornerstone into an internal workflow. Included on Pro+ ($599/mo).",
      a: (
        <>
          BYOA lets you connect Claude, ChatGPT, or any custom AI agent to live Cornerstone data via the{" "}
          <A href="/api-access">REST API (59+ endpoints and growing)</A> and 30+ named webhook event types (catalog growing). Build your own scheduling
          automations, run your own bid analyses, or wire Cornerstone into an internal workflow. Included on Pro+
          ($599/mo).
        </>
      ),
    },
    {
      q: "Is my data used to train the AI?",
      aText:
        "No. All Cornerstone AI agents (Foreman, Blueprint, Bid Import, Support, MLS) run on models with training disabled. Your parts catalog, vendor quotes, conversations, and tenant data never leave your tenant for training purposes. Each session is isolated and not retained beyond the active call.",
      a: (
        <>
          <strong>No.</strong> All Cornerstone AI agents (Foreman, Blueprint, Bid Import, Support, MLS) run on models
          with training disabled. Your parts catalog, vendor quotes, conversations, and tenant data never leave your
          tenant for training purposes. Each session is isolated and not retained beyond the active call.
        </>
      ),
    },
    {
      q: "How does Foreman AI compare to ChatGPT?",
      aText:
        "ChatGPT is a general LLM with no knowledge of your homes, vendors, or build pipeline. Foreman AI is grounded in your live Cornerstone data and your role permissions, with 45+ purpose-built skills that execute real actions - rescheduling tasks, notifying vendors, generating MLS listings, drafting bid requests. ChatGPT can describe what to do; Foreman AI does it.",
      a: (
        <>
          ChatGPT is a general LLM with no knowledge of your homes, vendors, or build pipeline. <A href="/foreman">Foreman AI</A>{" "}
          is grounded in your live Cornerstone data and your role permissions, with <strong>47 purpose-built
          skills</strong> that execute real actions - rescheduling tasks, notifying vendors, generating MLS listings,
          drafting bid requests. ChatGPT can describe what to do; Foreman AI does it.
        </>
      ),
    },
    {
      q: "Does Buildertrend have AI features like Cornerstone PM?",
      aText:
        "Buildertrend has added some AI-assisted helpers over time, but does not ship purpose-built AI agents for material takeoff (Blueprint AI), bid extraction (Bid Import AI), schedule automation (Foreman AI), or natural-language workflow control. Cornerstone PM is built around AI as a first-class feature, not a layered add-on.",
      a: (
        <>
          Buildertrend has added some AI-assisted helpers over time, but does not ship purpose-built AI agents for
          material takeoff (Blueprint AI), bid extraction (Bid Import AI), schedule automation (Foreman AI), or
          natural-language workflow control. Cornerstone PM is built around AI as a first-class feature, not a
          layered add-on. Compare on <A href="/compare">/compare</A>.
        </>
      ),
    },
  ],
};

// ============================================================================
// 4. CONSTRUCTION SCHEDULING & PERMITTING
// ============================================================================
const scheduling: Category = {
  slug: "scheduling",
  title: "Construction Scheduling & Permitting",
  blurb: "Gantt charts, dependencies, vendor confirmations, templates, permit gates.",
  accent: "text-amber-400",
  items: [
    {
      q: "How does Cornerstone PM's construction scheduling work?",
      aText:
        "Cornerstone PM ships Gantt-style schedules with 3-tier auto-cascading dependencies (hard, soft, vendor-driven), 17 pre-built schedule templates, 7 foundation templates, weekday-only logic, and one-click vendor email confirmations. Designed specifically for home builders managing 10-200+ homes per year - not general contractors.",
      a: (
        <>
          Cornerstone PM ships Gantt-style schedules with <strong>3-tier auto-cascading dependencies</strong> (hard,
          soft, vendor-driven), <strong>17 pre-built schedule templates</strong>, 7 foundation templates,
          weekday-only logic, and one-click vendor email confirmations. Designed specifically for home builders
          managing 10-200+ homes per year - not general contractors. See <A href="/construction">/construction</A>.
        </>
      ),
    },
    {
      q: "What is auto-cascading dependency scheduling?",
      aText:
        "When one task moves - say framing slips three days - every downstream task automatically shifts to match, vendors get re-notified, and the homeowner portal updates. Cornerstone uses a 3-tier dependency model (hard, soft, vendor-driven) so the cascade respects which tasks can run in parallel vs which must wait.",
      a: (
        <>
          When one task moves - say framing slips three days - every downstream task automatically shifts to match,
          vendors get re-notified, and the homeowner portal updates. Cornerstone uses a <strong>3-tier dependency
          model</strong> (hard, soft, vendor-driven) so the cascade respects which tasks can run in parallel vs which
          must wait.
        </>
      ),
    },
    {
      q: "How are subcontractors notified of schedule changes?",
      aText:
        "Vendors receive automated emails when tasks are ready, when timelines shift, and when permits clear. They confirm or decline in one click - no app login required. Daily and weekly digest emails keep vendors and PMs aligned without dashboard checks.",
      a: (
        <>
          Vendors receive automated emails when tasks are ready, when timelines shift, and when permits clear. They
          confirm or decline in <strong>one click - no app login required</strong>. Daily and weekly digest emails
          keep vendors and PMs aligned without dashboard checks.
        </>
      ),
    },
    {
      q: "Can I import my schedule from Buildertrend or CoConstruct?",
      aText:
        "Yes. The AI Migration Wizard handles Buildertrend, CoConstruct, JobTread, NEWSTAR, BuildPro, and any Excel-based schedule using a smart column mapper. Single-community schedule imports typically complete in under an hour.",
      a: (
        <>
          Yes. The <A href="/migrate">AI Migration Wizard</A> handles Buildertrend, CoConstruct, JobTread, NEWSTAR,
          BuildPro, and any Excel-based schedule using a smart column mapper. Single-community schedule imports
          typically complete in <strong>under an hour</strong>.
        </>
      ),
    },
    {
      q: "What is a permit gate?",
      aText:
        "A permit gate is an automated rule that blocks downstream construction tasks until a specific permit is approved. Framing won't be scheduled until the building permit clears, slab pours wait for foundation permits, and final inspections wait for required preceding work - preventing rework from building ahead of permits.",
      a: (
        <>
          A permit gate is an automated rule that blocks downstream construction tasks until a specific permit is
          approved. Framing won't be scheduled until the building permit clears, slab pours wait for foundation
          permits, and final inspections wait for required preceding work - preventing rework from building ahead of
          permits. See <A href="/permitting">/permitting</A>.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM track multiple permit types per home?",
      aText:
        "Yes - every permit type a home needs: building, electrical, plumbing, mechanical, septic, well, driveway, and any jurisdiction-specific permits. Each permit has its own status, expiry tracking, gate logic, and document attachments.",
      a: (
        <>
          Yes - every permit type a home needs: building, electrical, plumbing, mechanical, septic, well, driveway,
          and any jurisdiction-specific permits. Each permit has its own status, expiry tracking, gate logic, and
          document attachments.
        </>
      ),
    },
    {
      q: "What happens when a permit expires?",
      aText:
        "Cornerstone PM alerts the PM in advance of permit expiration, automatically blocks dependent tasks if a permit lapses, and tracks the renewal workflow. Expired permits show as a hard block in the dashboard until renewal is filed and approved.",
      a: (
        <>
          Cornerstone PM alerts the PM in advance of permit expiration, automatically blocks dependent tasks if a
          permit lapses, and tracks the renewal workflow. Expired permits show as a hard block in the dashboard until
          renewal is filed and approved.
        </>
      ),
    },
    {
      q: "How does inspection scheduling work?",
      aText:
        "Cornerstone PM tracks the full inspection pipeline per home: scheduled, in-progress, passed, failed-with-rework. Inspectors are notified, PMs see status across every active home, and failed inspections automatically generate correction tasks and reschedule downstream work.",
      a: (
        <>
          Cornerstone PM tracks the full inspection pipeline per home: scheduled, in-progress, passed,
          failed-with-rework. Inspectors are notified, PMs see status across every active home, and{" "}
          <strong>failed inspections automatically generate correction tasks</strong> and reschedule downstream work.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM include a homeowner portal?",
      aText:
        "Yes, on every plan starting at Starter ($149/mo). The homeowner portal is synced in real time with construction scheduling - when framing moves three days, buyers see it instantly, no follow-up call needed. Plus: (1) builder and PM upload job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row, captured straight from the field), (2) built-in messaging app between builder and customer with a permanent searchable record of every conversation, and (3) one-click ZIP download of all job photos so buyers can save their whole build history. Design selections and warranty information are also visible. No per-buyer fees.",
      a: (
        <>
          Yes, on every plan starting at Starter ($149/mo). The homeowner portal is synced in real time with construction scheduling — when framing moves three days, buyers see it instantly. Plus: (1) builder and PM upload job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos so buyers can save their whole build history. Design selections, milestones, schedule progress, and warranty information all included — with{" "}
          <strong>no per-buyer fees</strong>.
        </>
      ),
    },
    {
      q: "Can Foreman AI reschedule tasks across all active homes?",
      aText:
        "Yes. Foreman AI's 8-skill Schedule domain handles bulk rescheduling, anomaly detection, vendor no-show alerts, weather-blocked task moves, and downstream cascade. Tell it 'push framing two days across all active homes and notify vendors' and it executes - respecting your role permissions and notification preferences.",
      a: (
        <>
          Yes. <A href="/foreman">Foreman AI</A>'s 8-skill Schedule domain handles bulk rescheduling, anomaly
          detection, vendor no-show alerts, weather-blocked task moves, and downstream cascade. Tell it &quot;push
          framing two days across all active homes and notify vendors&quot; and it executes - respecting your role
          permissions and notification preferences.
        </>
      ),
    },
  ],
};

// ============================================================================
// 5. SALES PIPELINE & CRM
// ============================================================================
const sales: Category = {
  slug: "sales",
  title: "Sales Pipeline & CRM",
  blurb: "Leads, opportunities, 60-second home sale, options, lots, incentives.",
  accent: "text-emerald-400",
  items: [
    {
      q: "What is Cornerstone PM's sales pipeline?",
      aText:
        "A home-builder-native CRM and sale workflow. Track buyers from first contact through contract with built-in floorplan selection, structural options, lot inventory, and incentives. A counselor can build a contract-ready new home sale in under 60 seconds - including auto-generated 9-step sales checklist and auto-budget creation.",
      a: (
        <>
          A home-builder-native CRM and sale workflow. Track buyers from first contact through contract with
          built-in floorplan selection, structural options, lot inventory, and incentives. A counselor can build a
          contract-ready new home sale in <strong>under 60 seconds</strong> - including auto-generated 9-step sales
          checklist and auto-budget creation. See <A href="/sales">/sales</A>.
        </>
      ),
    },
    {
      q: "How is Cornerstone different from a generic CRM like Salesforce or HubSpot?",
      aText:
        "Generic CRMs track leads but don't understand homebuilding workflows: floorplan pricing matrix, options engine, lot status, design center allowances, or auto-budget generation when buyers lock structurals. Cornerstone PM's sales module is wired to live build data so buyers, lots, plans, and budgets stay in sync automatically.",
      a: (
        <>
          Generic CRMs track leads but don't understand homebuilding workflows: floorplan pricing matrix, options
          engine, lot status, design center allowances, or auto-budget generation when buyers lock structurals.
          Cornerstone PM's sales module is wired to live build data so buyers, lots, plans, and budgets stay in sync
          automatically.
        </>
      ),
    },
    {
      q: "Can a sales counselor really build a home sale in 60 seconds?",
      aText:
        "Yes. Pick a buyer, choose a lot and floorplan, lock structural options, apply incentives, and the system generates a contract-ready sale plus the buyer's design center allowance, the 9-step sales checklist, and the initial construction budget - all in under a minute.",
      a: (
        <>
          Yes. Pick a buyer, choose a lot and floorplan, lock structural options, apply incentives, and the system
          generates a contract-ready sale plus the buyer's design center allowance, the 9-step sales checklist, and
          the initial construction budget - all in under a minute. See the demo on{" "}
          <A href="/blog/60-second-home-sale">/blog/60-second-home-sale</A>.
        </>
      ),
    },
    {
      q: "How does the sales pipeline connect to construction?",
      aText:
        "When a sale locks, Cornerstone PM auto-generates the construction budget, attaches the correct schedule template, sets up the design center allowance, and notifies the PM. No double entry, no handoff meeting - sales, purchasing, design, and construction share one source of truth.",
      a: (
        <>
          When a sale locks, Cornerstone PM auto-generates the construction budget, attaches the correct schedule
          template, sets up the design center allowance, and notifies the PM. <strong>No double entry, no handoff
          meeting</strong> - sales, purchasing, design, and construction share one source of truth.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM have a sales counselor portal with role permissions?",
      aText:
        "Yes. Sales counselors get role-scoped access to manage prospects, build sales packages, and present floorplans without seeing construction or financial detail outside their scope. Permissions are tenant-configurable.",
      a: (
        <>
          Yes. Sales counselors get role-scoped access to manage prospects, build sales packages, and present
          floorplans without seeing construction or financial detail outside their scope. Permissions are
          tenant-configurable.
        </>
      ),
    },
    {
      q: "What does new home sales software cost?",
      aText:
        "Cornerstone PM's sales pipeline is included in the Builder plan at $299/mo with unlimited sales counselors and no per-seat fees. Pro at $499/mo adds Foreman AI sales analytics and AI MLS Listing Generator drafting from live home data.",
      a: (
        <>
          Cornerstone PM's sales pipeline is included in the <strong>Builder plan at $299/mo</strong> with unlimited
          sales counselors and no per-seat fees. Pro at $499/mo adds <A href="/foreman">Foreman AI</A> sales
          analytics and <A href="/listing-sheet">AI MLS Listing Generator</A> drafting from live home data.
        </>
      ),
    },
    {
      q: "Can I generate MLS listings automatically?",
      aText:
        "Yes - the AI MLS Listing Generator drafts compliant MLS copy from live home data: floorplan, square footage, locked structurals, design selections, community amenities, and pricing. Included on Builder ($299/mo) and above. No more copy/paste from spec sheets.",
      a: (
        <>
          Yes - the <A href="/listing-sheet">AI MLS Listing Generator</A> drafts compliant MLS copy from live home
          data: floorplan, square footage, locked structurals, design selections, community amenities, and pricing.
          Included on Builder ($299/mo) and above. No more copy/paste from spec sheets.
        </>
      ),
    },
  ],
};

// ============================================================================
// 6. DESIGN CENTER & OPTIONS
// ============================================================================
const design: Category = {
  slug: "design-center",
  title: "Design Center & Options",
  blurb: "Designer packages, structural options, floorplan pricing, Ã  la carte, allowances.",
  accent: "text-violet-400",
  items: [
    {
      q: "What is Cornerstone PM's Design Center?",
      aText:
        "A first-class module that lets buyers select finishes, fixtures, and upgrades while builders track allowances, upgrade pricing, and per-home margin. Every selection updates pricing, PO line items, and the construction budget automatically - no separate spec sheet to reconcile.",
      a: (
        <>
          A first-class module that lets buyers select finishes, fixtures, and upgrades while builders track
          allowances, upgrade pricing, and per-home margin. Every selection updates pricing, PO line items, and the
          construction budget automatically - no separate spec sheet to reconcile. See <A href="/design">/design</A>.
        </>
      ),
    },
    {
      q: "What is an options engine?",
      aText:
        "The rules system that prices structural and design options per floorplan and per community. Cornerstone PM's options engine handles dependencies (e.g. you can't pick the gourmet kitchen without the larger pantry), incompatibilities, allowance overages, per-community pricing, and real-time price rollup as buyers select.",
      a: (
        <>
          The rules system that prices structural and design options per floorplan and per community. Cornerstone
          PM's options engine handles <strong>dependencies, incompatibilities, allowance overages, per-community
          pricing, and real-time price rollup</strong> as buyers select.
        </>
      ),
    },
    {
      q: "What are Designer Packages?",
      aText:
        "64 Designer Packages curated by an actual interior designer (the same playbook K. Hovnanian Homes uses), spanning 7 categories. Buyer picks a package and all category options auto-lock to that package; Ã  la carte unlocks if the package is removed. Strong differentiator vs spreadsheet-style design centers - and built so a buyer can complete selections in one sitting instead of three.",
      a: (
        <>
          <strong>64 Designer Packages across 7 categories</strong>, each <em>curated by an actual interior
          designer</em> - the same playbook K. Hovnanian Homes uses to take the guesswork out of design selections.
          Buyer picks a package and all category options auto-lock to that package; Ã  la carte unlocks if the package
          is removed. Strong differentiator vs spreadsheet-style design centers - and built so a buyer can complete
          selections in one sitting instead of three.
        </>
      ),
    },
    {
      q: "How do design center allowances work?",
      aText:
        "When a buyer locks structural options on a sale, Cornerstone auto-generates a per-room allowance schedule based on community spec levels (Standard, Premium, Luxury). The buyer's selections debit the allowance, overages flow to a change order, and savings can be applied as buyer credits - all tracked in real time.",
      a: (
        <>
          When a buyer locks structural options on a sale, Cornerstone auto-generates a per-room allowance schedule
          based on community spec levels (Standard, Premium, Luxury). Buyer selections debit the allowance, overages
          flow to a change order, and savings can be applied as buyer credits - all tracked in real time.
        </>
      ),
    },
    {
      q: "Does the design center connect to purchasing?",
      aText:
        "Yes. The moment a design selection is locked, Cornerstone updates the purchasing line items and the construction budget. There's no separate spec sheet to reconcile - design, purchasing, and the budget share one data source.",
      a: (
        <>
          Yes. The moment a design selection is locked, Cornerstone updates the purchasing line items and the
          construction budget. There's no separate spec sheet to reconcile - design, purchasing, and the budget share
          one data source.
        </>
      ),
    },
    {
      q: "Can buyers see their selections in their portal?",
      aText:
        "Yes. The homeowner portal shows every selection, allowance status, and upgrade pricing in real time. Buyers review, approve, and digitally sign-off on selections before construction begins.",
      a: (
        <>
          Yes. The homeowner portal shows every selection, allowance status, and upgrade pricing in real time. Buyers
          review, approve, and digitally sign-off on selections before construction begins.
        </>
      ),
    },
    {
      q: "How does Cornerstone's design center compare to NEWSTAR or BuildPro?",
      aText:
        "Cornerstone PM matches NEWSTAR and BuildPro on the core options engine - structural and design options, dependencies, allowances, spec levels, change orders - without their 6-figure implementation cost. Foreman AI's 8-skill Design Center domain adds plain-English option configuration NEWSTAR and BuildPro don't offer.",
      a: (
        <>
          Cornerstone PM matches NEWSTAR and BuildPro on the core options engine - structural and design options,
          dependencies, allowances, spec levels, change orders - without their 6-figure implementation cost.{" "}
          <A href="/foreman">Foreman AI</A>'s 8-skill Design Center domain adds plain-English option configuration
          NEWSTAR and BuildPro don't offer.
        </>
      ),
    },
    {
      q: "Is filler/default pricing used in the design center?",
      aText:
        "No. Filler and default pricing has been removed app-wide - every dollar shown to a buyer or builder traces back to actual vendor pricing or a real takeoff line. Material breakdown comes from real takeoff parts; labor from vendor pricing. No synthetic splits, no estimator fudging.",
      a: (
        <>
          <strong>No.</strong> Filler and default pricing has been removed app-wide - every dollar shown to a buyer
          or builder traces back to actual vendor pricing or a real takeoff line. Material breakdown comes from real
          takeoff parts; labor from vendor pricing. No synthetic splits, no estimator fudging.
        </>
      ),
    },
    {
      q: "What does Design Center software cost?",
      aText:
        "Included in the Builder plan at $299/mo with unlimited users - no per-seat fees, no implementation cost. Foreman AI's 8-skill Design Center domain (plain-English option configuration, allowance tracking, selection package generation) is on Pro at $499/mo.",
      a: (
        <>
          Included in the Builder plan at <strong>$299/mo</strong> with unlimited users - no per-seat fees, no
          implementation cost. <A href="/foreman">Foreman AI</A>'s 8-skill Design Center domain (plain-English option
          configuration, allowance tracking, selection package generation) is on Pro at $499/mo.
        </>
      ),
    },
  ],
};

// ============================================================================
// 7. PURCHASING, BIDS & VENDOR MANAGEMENT
// ============================================================================
const purchasing: Category = {
  slug: "purchasing",
  title: "Purchasing, Bids & Vendor Management",
  blurb: "Bid requests, vendor portal, scope items, area cost pricing, lock-after-acceptance.",
  accent: "text-cyan-400",
  items: [
    {
      q: "How does Cornerstone PM handle vendor bidding?",
      aText:
        "Send bid requests to multiple vendors at once. Auto-generated, scope-filtered Excel templates (3 tabs: Base/Structural/Designer) attach to the vendor invite email. Bids flow Invited â†’ Viewed â†’ Submitted â†’ Declined with timestamps. Side-by-side comparison kicks in once 2+ vendors submit. See /purchasing.",
      a: (
        <>
          Send bid requests to multiple vendors at once. Auto-generated, scope-filtered Excel templates{" "}
          <strong>(3 tabs: Base/Structural/Designer)</strong> attach to the vendor invite email. Bids flow{" "}
          <strong>Invited â†’ Viewed â†’ Submitted â†’ Declined</strong> with timestamps. Side-by-side comparison kicks in
          once 2+ vendors submit. See <A href="/purchasing">/purchasing</A>.
        </>
      ),
    },
    {
      q: "Do vendors need a Cornerstone account to submit bids?",
      aText:
        "No login, no training. Vendors get a token-protected URL when invited. They download the auto-generated Excel template, fill in their numbers, and upload PDF/Excel/CSV files back to the portal - up to 10 files, 10 MB each. Two clicks to submit.",
      a: (
        <>
          <strong>No login, no training.</strong> Vendors get a token-protected URL when invited. They download the
          auto-generated Excel template, fill in their numbers, and upload PDF/Excel/CSV files back to the portal -
          up to <strong>10 files, 10 MB each</strong>. Two clicks to submit.
        </>
      ),
    },
    {
      q: "What's in the auto-generated bid template?",
      aText:
        "Three tabs: Base (floorplan-location-scope rows for the vendor's trade with option pricing), Structural (takeoff-driven structural options for that scope), Designer (design center option classes the vendor is responsible for). Scope-filtered - your electrician doesn't see plumbing rows.",
      a: (
        <>
          Three tabs: <strong>Base</strong> (floorplan-location-scope rows for the vendor's trade with option
          pricing), <strong>Structural</strong> (takeoff-driven structural options for that scope),{" "}
          <strong>Designer</strong> (design center option classes the vendor is responsible for). Scope-filtered -
          your electrician doesn't see plumbing rows.
        </>
      ),
    },
    {
      q: "How do I review competing vendor bids?",
      aText:
        "Side-by-side comparison view with scope-item drill-down. You see every bid against every scope item simultaneously - not just total price, but full scope coverage so you can spot gaps, exclusions, or scope creep before awarding. Vendors edit their own scope items in the portal; you review and approve.",
      a: (
        <>
          Side-by-side comparison view with <strong>scope-item drill-down</strong>. You see every bid against every
          scope item simultaneously - not just total price, but full scope coverage so you can spot gaps, exclusions,
          or scope creep before awarding. Vendors edit their own scope items in the portal; you review and approve.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM use lowest-bid auctions to pick vendors?",
      aText:
        "No - and that's intentional. Home builders rely on long-term community vendor relationships, not lowest-bid auctions. Cornerstone supports community-assigned vendor awards: pick who you want to win based on scope coverage, relationship, and quality, with bid comparison data backing the decision.",
      a: (
        <>
          <strong>No - and that's intentional.</strong> Home builders rely on long-term community vendor
          relationships, not lowest-bid auctions. Cornerstone supports community-assigned vendor awards: pick who you
          want to win based on scope coverage, relationship, and quality, with bid comparison data backing the
          decision.
        </>
      ),
    },
    {
      q: "What is lock-after-acceptance?",
      aText:
        "The moment you award a vendor bid, the scope items, pricing, and terms lock down - neither builder nor vendor can edit. Protects awarded pricing from drift, prevents scope creep, and feeds the locked bid directly into the home's budget and PO pipeline.",
      a: (
        <>
          The moment you award a vendor bid, the scope items, pricing, and terms <strong>lock down</strong> - neither
          builder nor vendor can edit. Protects awarded pricing from drift, prevents scope creep, and feeds the
          locked bid directly into the home's budget and PO pipeline.
        </>
      ),
    },
    {
      q: "Can I award different vendors in different communities?",
      aText:
        "Yes. Cornerstone PM supports multiple ACCEPTED bids per scope - one vendor in Community A, a different vendor in Community B. Each award is community-scoped so you can respect existing builder-vendor relationships without flattening them into a single SKU.",
      a: (
        <>
          Yes. Cornerstone PM supports <strong>multiple ACCEPTED bids per scope</strong> - one vendor in Community A,
          a different vendor in Community B. Each award is community-scoped so you can respect existing
          builder-vendor relationships without flattening them into a single SKU.
        </>
      ),
    },
    {
      q: "How does the parts catalog work?",
      aText:
        "Maintains SKUs, vendor pricing, and unit costs that sync across every job. Foreman AI's Parts Catalog domain (5 skills) handles SKU lookups, vendor price comparisons, material substitutions, catalog updates, and inventory alerts via plain-English requests.",
      a: (
        <>
          Maintains SKUs, vendor pricing, and unit costs that sync across every job. <A href="/foreman">Foreman AI</A>'s
          Parts Catalog domain (5 skills) handles SKU lookups, vendor price comparisons, material substitutions,
          catalog updates, and inventory alerts via plain-English requests.
        </>
      ),
    },
    {
      q: "What are scope items?",
      aText:
        "Flexible buckets of work assigned to a vendor - labor, material, lump sum, or mixed. Not strictly labor-only or material-only. Scope items are the unit vendors bid on, the unit your budget tracks, and the unit lock-after-acceptance protects.",
      a: (
        <>
          <strong>Flexible buckets of work</strong> assigned to a vendor - labor, material, lump sum, or mixed. Not
          strictly labor-only or material-only. Scope items are the unit vendors bid on, the unit your budget tracks,
          and the unit lock-after-acceptance protects.
        </>
      ),
    },
    {
      q: "What is Area Cost Pricing?",
      aText:
        "Community-level extras (e.g. site-prep, common-area finishes) priced separately from per-home costs but fully integrated with takeoff. Lets you bill builder-pays-builder costs cleanly without inflating per-home line items.",
      a: (
        <>
          Community-level extras (e.g. site-prep, common-area finishes) priced separately from per-home costs but
          fully integrated with takeoff. Lets you bill builder-pays-builder costs cleanly without inflating per-home
          line items.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM track retainage?",
      aText:
        "Yes. Retainage on payments, cost-type classification, payment schedules, and variance reports vs the budget are all tracked. Vendor 1099 totals are exportable.",
      a: (
        <>
          Yes. Retainage on payments, cost-type classification, payment schedules, and variance reports vs the budget
          are all tracked. <strong>Vendor 1099 totals</strong> are exportable.
        </>
      ),
    },
    {
      q: "How does the auto-budget feature work?",
      aText:
        "When a sales counselor locks structural options on a new home sale, Cornerstone auto-generates the construction budget from the floorplan's base costs plus option deltas. Design selections, change orders, and bid awards continue to flow into the same budget number throughout the build.",
      a: (
        <>
          When a sales counselor locks structural options on a new home sale, Cornerstone auto-generates the
          construction budget from the floorplan's base costs plus option deltas. Design selections, change orders,
          and bid awards continue to flow into the same budget number throughout the build.
        </>
      ),
    },
    {
      q: "What's the 7-wave automated bidding pipeline?",
      aText:
        "On Pro+ ($599/mo), Foreman AI runs an automated 7-wave bidding pipeline: contacts vendors, collects bids, normalizes pricing, fuzzy-matches line items to your catalog, and recommends an award based on scope coverage and relationships - all inside one platform.",
      a: (
        <>
          On Pro+ ($599/mo), <A href="/foreman">Foreman AI</A> runs an automated <strong>7-wave bidding pipeline</strong>:
          contacts vendors, collects bids, normalizes pricing, fuzzy-matches line items to your catalog, and
          recommends an award based on scope coverage and relationships - all inside one platform.
        </>
      ),
    },
  ],
};

// ============================================================================
// 8. API, INTEGRATIONS & DEVELOPERS
// ============================================================================
const api: Category = {
  slug: "api-developers",
  title: "API, Integrations & Developers",
  blurb: "REST API, webhooks, BYOA, integrations.",
  accent: "text-cyan-400",
  items: [
    {
      q: "Does Cornerstone PM have a REST API?",
      aText:
        "Yes - a public REST API with 59+ endpoints and growing rapidly, scoped Bearer-token authentication, and full documentation at app.cornerstonepm.ai/developers. New endpoints ship as the platform grows. All core data (schedules, vendors, lots, options, bids, budgets, takeoffs) is accessible. Included on Pro+ ($599/mo). See /api-access.",
      a: (
        <>
          Yes - a public REST API with <strong>59+ endpoints and growing rapidly</strong>, scoped Bearer-token authentication, and full
          documentation at <A href="/api-docs">app.cornerstonepm.ai/developers</A>. All core data (schedules, vendors,
          lots, options, bids, budgets, takeoffs) is accessible. Included on Pro+ ($599/mo). See{" "}
          <A href="/api-access">/api-access</A>.
        </>
      ),
    },
    {
      q: "Are webhooks supported?",
      aText:
        "Yes. 30+ named webhook event types and growing fire on key state changes - bid submitted, bid awarded, schedule task moved, permit approved, sale locked, vendor invited, and more. New events ship as the platform grows. Use them to wire Cornerstone into Slack, accounting systems, your own AI agent, or any internal workflow.",
      a: (
        <>
          Yes. <strong>30+ named webhook event types and growing</strong> fire on key state changes - bid submitted, bid awarded,
          schedule task moved, permit approved, sale locked, vendor invited, and more. Use them to wire Cornerstone
          into Slack, accounting systems, your own AI agent, or any internal workflow.
        </>
      ),
    },
    {
      q: "What is BYOA (Bring Your Own Agent)?",
      aText:
        "BYOA lets you connect Claude, ChatGPT, or any custom AI agent to live Cornerstone data via the REST API. The Foreman skill pack endpoint exposes Foreman's 45+ native skills so your own agent can call them directly. Included on Pro+ ($599/mo).",
      a: (
        <>
          BYOA lets you connect Claude, ChatGPT, or any custom AI agent to live Cornerstone data via the REST API.
          The <strong>Foreman skill pack endpoint</strong> exposes Foreman's 45+ native skills so your own agent can
          call them directly. Included on Pro+ ($599/mo).
        </>
      ),
    },
    {
      q: "Can I use my own AI agent against Cornerstone purchasing data?",
      aText:
        "Yes. Pro+ ($599/mo) includes BYOA + full REST API access. Connect Claude, ChatGPT, or any custom agent to live purchasing, bid, vendor, and budget data through 59+ endpoints (and growing) with scoped Bearer-token auth.",
      a: (
        <>
          Yes. Pro+ ($599/mo) includes BYOA + full <A href="/api-access">REST API access</A>. Connect Claude, ChatGPT,
          or any custom agent to live purchasing, bid, vendor, and budget data through 59+ endpoints (and growing) with scoped
          Bearer-token auth.
        </>
      ),
    },
    {
      q: "What integrations does Cornerstone PM offer?",
      aText:
        "REST API + 30+ named webhook event types (growing catalog) make Cornerstone integrate with anything - Slack, QuickBooks, Sage 300, custom CRMs, and AI workflows via Twilio/Bland/Retell for voice and SMS. We focus on a clean public API rather than a long list of brittle direct integrations. Connect what you need at /api-access.",
      a: (
        <>
          REST API + 30+ named webhook event types (catalog growing) make Cornerstone integrate with anything - Slack, QuickBooks, Sage 300,
          custom CRMs, and AI workflows via Twilio/Bland/Retell for voice and SMS. We focus on a clean public API
          rather than a long list of brittle direct integrations. Connect what you need at{" "}
          <A href="/api-access">/api-access</A>.
        </>
      ),
    },
    {
      q: "Where are the API docs?",
      aText:
        "Public API documentation lives at app.cornerstonepm.ai/developers - full endpoint reference, webhook event schemas, authentication details, and code examples. Marketing overview at /api-docs.",
      a: (
        <>
          Public API documentation lives at <A href="/api-docs">app.cornerstonepm.ai/developers</A> - full endpoint
          reference, webhook event schemas, authentication details, and code examples. Marketing overview at{" "}
          <A href="/api-docs">/api-docs</A>.
        </>
      ),
    },
    {
      q: "Does Buildertrend have a public API like Cornerstone PM?",
      aText:
        "Buildertrend has limited integration capabilities and historically required enterprise contracts for API access. Cornerstone PM ships a public, documented REST API with 59+ endpoints and growing rapidly on Pro+ ($599/mo) - no separate contract, no enterprise gating.",
      a: (
        <>
          Buildertrend has limited integration capabilities and historically required enterprise contracts for API
          access. Cornerstone PM ships a public, documented REST API with <strong>59+ endpoints (and growing) on Pro+ ($599/mo)</strong>
          - no separate contract, no enterprise gating.
        </>
      ),
    },
  ],
};

// ============================================================================
// 9. COMPARISONS
// ============================================================================
const comparisons: Category = {
  slug: "comparisons",
  title: "Comparisons",
  blurb: "vs Buildertrend, NEWSTAR, BuildPro, CoConstruct, JobTread, MarkSystems.",
  accent: "text-amber-400",
  items: [
    {
      q: "Cornerstone PM vs Buildertrend - which is better?",
      aText:
        "Cornerstone PM is purpose-built for production home builders (5-200+ homes/year, plan repeats, multi-community, lot inventory). Buildertrend was built for custom builders and remodelers. If you're running production tract or spec, Cornerstone fits better; if you're a one-off custom builder, Buildertrend may still be the right fit.",
      a: (
        <>
          Cornerstone PM is purpose-built for <strong>production home builders</strong> (5-200+ homes/year, plan
          repeats, multi-community, lot inventory). Buildertrend was built for custom builders and remodelers. If
          you're running production tract or spec, Cornerstone fits better; if you're a one-off custom builder,
          Buildertrend may still be the right fit. Full breakdown at{" "}
          <A href="/buildertrend-alternative">/buildertrend-alternative</A>.
        </>
      ),
    },
    {
      q: "What does Cornerstone PM have that Buildertrend doesn't?",
      aText:
        "Native AI agents (Foreman AI's 45+ skills, Blueprint AI takeoffs, Bid Import AI), a structural options engine, floorplan pricing matrix, multi-community pipelines, and a public REST API on Pro+ ($599/mo). Buildertrend's price floor is $499/mo - the same as Cornerstone Pro - and includes none of these.",
      a: (
        <>
          Native AI agents (<A href="/foreman">Foreman AI</A>'s 45+ skills, <A href="/ai-takeoff">Blueprint AI</A>{" "}
          takeoffs, <A href="/bid-import-ai">Bid Import AI</A>), a structural options engine, floorplan pricing
          matrix, multi-community pipelines, and a public <A href="/api-access">REST API on Pro+ ($599/mo)</A>.
          Buildertrend's price floor is $499/mo - the same as Cornerstone Pro - and includes none of these.
        </>
      ),
    },
    {
      q: "Does Cornerstone PM have everything Buildertrend has?",
      aText:
        "Cornerstone covers the same core functions: scheduling, homeowner portal, purchasing, bid management, document storage, change orders, time tracking. The one Buildertrend feature Cornerstone doesn't ship is custom-builder client invoicing - because Cornerstone is built for production builders who use draw schedules, not progress invoicing.",
      a: (
        <>
          Cornerstone covers the same core functions: scheduling, homeowner portal, purchasing, bid management,
          document storage, change orders, time tracking. The one Buildertrend feature Cornerstone doesn't ship is{" "}
          <strong>custom-builder client invoicing</strong> - because Cornerstone is built for production builders
          who use draw schedules, not progress invoicing.
        </>
      ),
    },
    {
      q: "Cornerstone PM vs NEWSTAR - which is better?",
      aText:
        "For small-to-mid production builders (5-200 homes/year), Cornerstone PM matches NEWSTAR's core capabilities (options engine, floorplan pricing, multi-community, design center, draws) without the $25,000-$100,000+ implementation cost or 3-12 month rollout. For top-100 enterprise builders with deep custom ERP integrations, NEWSTAR may still be the right fit.",
      a: (
        <>
          For small-to-mid production builders (5-200 homes/year), Cornerstone PM matches NEWSTAR's core capabilities
          (options engine, floorplan pricing, multi-community, design center, draws) without the{" "}
          <strong>$25,000-$100,000+ implementation cost</strong> or 3-12 month rollout. For top-100 enterprise
          builders with deep custom ERP integrations, NEWSTAR may still be the right fit. See{" "}
          <A href="/newstar-alternative">/newstar-alternative</A>.
        </>
      ),
    },
    {
      q: "Cornerstone PM vs BuildPro - which is better?",
      aText:
        "Cornerstone PM is a modern, web-based, mobile-friendly platform; BuildPro's UI is dated and Windows/Citrix-centric. Cornerstone ships native AI agents BuildPro doesn't offer at any tier, and is operational in hours at $149/mo with unlimited users vs BuildPro's $25k-$75k+ implementation budgets.",
      a: (
        <>
          Cornerstone PM is a modern, web-based, mobile-friendly platform; BuildPro's UI is dated and Windows/Citrix-centric.
          Cornerstone ships native AI agents BuildPro doesn't offer at any tier, and is operational in{" "}
          <strong>hours at $149/mo</strong> with unlimited users vs BuildPro's $25k-$75k+ implementation budgets. See{" "}
          <A href="/buildpro-alternative">/buildpro-alternative</A>.
        </>
      ),
    },
    {
      q: "Cornerstone PM vs JobTread - which is better?",
      aText:
        "JobTread is built for general contractors and custom builders. Cornerstone PM is purpose-built for home builders with native lot management, options engine, design center, and multi-community pipelines JobTread doesn't ship. JobTread starts around $179/mo with per-user limits; Cornerstone is $149/mo with unlimited users.",
      a: (
        <>
          JobTread is built for general contractors and custom builders. Cornerstone PM is purpose-built for{" "}
          <strong>home builders</strong> with native lot management, options engine, design center, and
          multi-community pipelines JobTread doesn't ship. JobTread starts around $179/mo with per-user limits;
          Cornerstone is $149/mo with unlimited users. See <A href="/blog/jobtread-alternative">/blog/jobtread-alternative</A>.
        </>
      ),
    },
    {
      q: "Cornerstone PM vs CoConstruct - which is better?",
      aText:
        "CoConstruct (now part of Buildertrend) is optimized for custom builders and remodelers. Cornerstone PM is for production builders running plan repeats, lot inventory, and design centers. Migration from CoConstruct is auto-detected by the AI Migration Wizard.",
      a: (
        <>
          CoConstruct (now part of Buildertrend) is optimized for custom builders and remodelers. Cornerstone PM is
          for <strong>production builders</strong> running plan repeats, lot inventory, and design centers. Migration
          from CoConstruct is auto-detected by the <A href="/migrate">AI Migration Wizard</A>.
        </>
      ),
    },
    {
      q: "Cornerstone PM vs MarkSystems - which is better?",
      aText:
        "MarkSystems is a long-running enterprise platform for production builders, similar in scope to NEWSTAR. Cornerstone PM offers comparable core capabilities (options engine, draws, communities, design center) on a modern web stack with native AI agents and a public REST API - at $149-$599/mo flat instead of MarkSystems' enterprise quote-and-implement model.",
      a: (
        <>
          MarkSystems is a long-running enterprise platform for production builders, similar in scope to NEWSTAR.
          Cornerstone PM offers comparable core capabilities (options engine, draws, communities, design center) on
          a modern web stack with native AI agents and a public REST API - at <strong>$149-$599/mo flat</strong>{" "}
          instead of MarkSystems' enterprise quote-and-implement model.
        </>
      ),
    },
    {
      q: "Which is best for a builder doing 20-80 homes per year?",
      aText:
        "Cornerstone PM is purpose-built for this segment. Home-builder workflows (communities, floor plan libraries, schedule templates, AI takeoff, vendor bidding, design center options) are first-class. Buildertrend works but adds complexity overhead; NEWSTAR/BuildPro are over-built and over-priced for this volume.",
      a: (
        <>
          <A href="/home-builder-project-management-software">Cornerstone PM is purpose-built</A> for this segment.
          Home-builder workflows (communities, floor plan libraries, schedule templates, AI takeoff, vendor
          bidding, design center options) are first-class. Buildertrend works but adds complexity overhead;
          NEWSTAR/BuildPro are over-built and over-priced for this volume.
        </>
      ),
    },
    {
      q: "Should I switch from Buildertrend if I'm a custom builder or remodeler?",
      aText:
        "If you're doing primarily one-off custom jobs without plan repeats or multi-community pipelines, Buildertrend may be a better fit for your current workflow. Cornerstone's value compounds when you're running community-based builds with floorplan repeats and design centers - whether production, semi-custom, or custom.",
      a: (
        <>
          If you're doing primarily one-off custom jobs without plan repeats or multi-community pipelines, Buildertrend
          may be a better fit for your current workflow. Cornerstone's value compounds when you're running
          community-based builds with floorplan repeats and design centers - whether production, semi-custom, or custom.
        </>
      ),
    },
    {
      q: "Will Cornerstone PM scale as we grow?",
      aText:
        "Yes. Pro supports up to 1,000 active homes; Pro+ has no home cap. The REST API and webhook system on Pro+ enable custom integrations to accounting (Sage 300, QuickBooks Enterprise), warranty platforms, and CRM tools as you grow past 200+ homes/year.",
      a: (
        <>
          Yes. Pro supports up to <strong>1,000 active homes</strong>; Pro+ has no home cap. The REST API and webhook
          system on Pro+ enable custom integrations to accounting (Sage 300, QuickBooks Enterprise), warranty
          platforms, and CRM tools as you grow past 200+ homes/year.
        </>
      ),
    },
  ],
};

// ============================================================================
// 10. SECURITY, DATA & TRUST
// ============================================================================
const security: Category = {
  slug: "security-data",
  title: "Security, Data & Trust",
  blurb: "Data export, ownership, backups, multi-tenant isolation.",
  accent: "text-emerald-400",
  items: [
    {
      q: "Can I export my data from Cornerstone PM?",
      aText:
        "Yes - every plan. Take all your data with you anytime, no strings attached. Settings â†’ Backups lets you download a full org export (91 tables) as CSV or JSON in one click, with sensitive fields automatically excluded. Every vendor, every home, every schedule, every option, every budget line. Nightly auto-backups run with 7-day retention for instant rollback. Your data is always yours, no exit fees, no support ticket, no waiting period.",
      a: (
        <>
          Yes - every plan. <strong>Take all your data with you anytime, no strings attached.</strong>{" "}
          Settings â†’ Backups lets you download a full org export (91 tables) as CSV or JSON in one click,
          with sensitive fields automatically excluded. Every vendor, every home, every schedule, every
          option, every budget line. Nightly auto-backups run with{" "}
          <strong>7-day retention</strong> for instant rollback. No exit fees, no support ticket, no waiting period.
        </>
      ),
    },
    {
      q: "How often are backups run?",
      aText:
        "Nightly automatic backups, 7-day retention. You can also trigger manual backups on demand at any time from Settings â†’ Backups (Admin only). Both CSV and JSON formats are available for full-database exports.",
      a: (
        <>
          <strong>Nightly automatic backups, 7-day retention.</strong> You can also trigger manual backups on demand
          at any time from Settings â†’ Backups (Admin only). Both CSV and JSON formats are available for full-database
          exports.
        </>
      ),
    },
    {
      q: "Who owns the data in Cornerstone PM?",
      aText:
        "You do. Cornerstone PM operates on a 'your data is always yours' principle: one-click full database export in CSV or JSON anytime, no exit fees, no support ticket, no waiting period. If you ever leave, you leave with everything - vendors, homes, schedules, options, budgets, every line. No strings attached. The REST API on Pro+ also gives you full programmatic access to every record.",
      a: (
        <>
          <strong>You do.</strong> Cornerstone PM operates on a &quot;your data is always yours&quot; principle:
          one-click full database export in CSV or JSON anytime, no exit fees, no support ticket, no waiting
          period. If you ever leave, you leave with everything &mdash; vendors, homes, schedules, options,
          budgets, every line. No strings attached. The{" "}
          <A href="/api-access">REST API on Pro+</A> also gives you full programmatic access to every record.
        </>
      ),
    },
    {
      q: "Is Cornerstone PM multi-tenant isolated?",
      aText:
        "Yes. Each builder runs in an isolated tenant - your homes, vendors, pricing, AI conversations, and permission matrix never cross tenant boundaries. AI agents (Foreman, Blueprint, Bid Import, Support) operate strictly within your tenant scope.",
      a: (
        <>
          Yes. Each builder runs in an <strong>isolated tenant</strong> - your homes, vendors, pricing, AI
          conversations, and permission matrix never cross tenant boundaries. AI agents (Foreman, Blueprint, Bid
          Import, Support) operate strictly within your tenant scope.
        </>
      ),
    },
    {
      q: "Is my data used to train AI models?",
      aText:
        "No. All Cornerstone AI agents run on models with training disabled. Vendor pricing, parts catalog, conversations, and tenant data never leave your tenant for training. Each AI session is isolated and not retained beyond the active call.",
      a: (
        <>
          <strong>No.</strong> All Cornerstone AI agents run on models with training disabled. Vendor pricing, parts
          catalog, conversations, and tenant data never leave your tenant for training. Each AI session is isolated
          and not retained beyond the active call.
        </>
      ),
    },
    {
      q: "Are there role-based permissions?",
      aText:
        "Yes. Tenant-configurable role permissions control who can view/edit options pricing, schedule tasks, vendor data, financial details, and bid awards. Sales counselors, PMs, admins, designers, and vendors all see different scopes of the same platform.",
      a: (
        <>
          Yes. <strong>Tenant-configurable role permissions</strong> control who can view/edit options pricing,
          schedule tasks, vendor data, financial details, and bid awards. Sales counselors, PMs, admins, designers,
          and vendors all see different scopes of the same platform.
        </>
      ),
    },
    {
      q: "Are notifications configurable per user?",
      aText:
        "Yes. Per-user notification preferences plus role-level subscriptions. Admins can subscribe to bid events (new bids, vendor scope edits, awards, lock events) and choose email, in-app, or both. Each user controls their own toggles independently.",
      a: (
        <>
          Yes. <strong>Per-user notification preferences</strong> plus role-level subscriptions. Admins can subscribe
          to bid events (new bids, vendor scope edits, awards, lock events) and choose email, in-app, or both. Each
          user controls their own toggles independently.
        </>
      ),
    },
    {
      q: "Is there vendor lock-in if I leave Cornerstone PM?",
      aText:
        "No - never. Take all your data with you anytime, no strings attached. One-click full database export in CSV or JSON, $0, no exit fees, no waiting period. The REST API gives you full programmatic access. Re-import to whatever platform you choose. We win by being the best fit, not by holding data hostage.",
      a: (
        <>
          <strong>No — never.</strong> Take all your data with you anytime, no strings attached. One-click full database export in CSV or JSON, $0, no exit fees, no waiting period. The{" "}
          <A href="/api-access">REST API</A> gives you full programmatic access. You can re-import to whatever
          platform you choose. We win by being the best fit, not by holding data hostage.
        </>
      ),
    },
  ],
};

// ============================================================================
// Compose
// ============================================================================
const categories: Category[] = [
  pricing,
  migration,
  ai,
  scheduling,
  sales,
  design,
  purchasing,
  api,
  comparisons,
  security,
];

// Total Q&A count for the JSON-LD payload
const allItems = categories.flatMap((c) => c.items);

// FAQPage JSON-LD using the plain-text answer (aText) for clean LLM extraction
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allItems.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.aText,
    },
  })),
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <section className="pt-40 pb-12 px-4 border-b border-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-6 uppercase tracking-wider">
            {allItems.length} Questions Answered
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Cornerstone PM - pricing, migration, AI agents,
            integrations, and how we compare to Buildertrend, NEWSTAR, BuildPro, and others.
          </p>
        </div>
      </section>

      {/* Sticky category navigation */}
      <nav
        className="sticky top-16 z-30 bg-slate-950/90 backdrop-blur border-b border-slate-900"
        aria-label="FAQ category navigation"
      >
        <div className="max-w-6xl mx-auto px-4 py-3 overflow-x-auto">
          <ul className="flex gap-2 min-w-max">
            {categories.map((cat) => (
              <li key={cat.slug}>
                <a
                  href={`#${cat.slug}`}
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:border-slate-700 transition-colors whitespace-nowrap ${cat.accent}`}
                >
                  {cat.title}
                  <span className="ml-2 text-slate-500 text-xs">{cat.items.length}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Category sections */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        {categories.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="mb-16 scroll-mt-32">
            <div className="mb-6">
              <h2 className={`text-3xl sm:text-4xl font-black tracking-tight mb-2 ${cat.accent}`}>
                {cat.title}
              </h2>
              <p className="text-slate-400">{cat.blurb}</p>
            </div>
            <div className="space-y-3">
              {cat.items.map((item, i) => (
                <details
                  key={i}
                  className="group rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/70 transition-colors overflow-hidden"
                >
                  <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{item.q}</h3>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform shrink-0" />
                  </summary>
                  <div className="px-6 pb-5 text-slate-300 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="py-20 px-4 border-t border-slate-900 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            Ask Foreman AI directly inside the app for answers grounded in your live data, or get
            in touch with the team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.cornerstonepm.ai/login"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-violet-500 hover:bg-violet-400 text-white font-semibold transition-colors shadow-lg shadow-violet-500/20"
            >
              âœ¨ Talk to Foreman AI
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-colors shadow-lg shadow-cyan-500/20"
            >
              Contact Us
            </Link>
            <Link
              href="/beta"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-slate-200 font-semibold transition-colors"
            >
              Request Beta Access
            </Link>
          </div>
        </div>
      </section>

      {/* Trademark notice */}
      <section className="py-6 px-4 border-t border-slate-900 bg-slate-950">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs text-slate-600 text-center leading-relaxed">
            BuildertrendÂ®, NEWSTARÂ®, BuildProÂ®, CoConstructÂ®, JobTreadÂ®, and MarkSystemsÂ® are
            trademarks of their respective owners. Cornerstone PM is not affiliated with or
            endorsed by these companies.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
