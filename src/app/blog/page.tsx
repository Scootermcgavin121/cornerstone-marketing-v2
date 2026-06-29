import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog &mdash; Cornerstone PMTM",
  description: "Insights for home builders on scheduling, technology, and running a smarter building operation.",
};

const posts = [
  {
    slug: "foreman-ai-agent-takes-actions-not-chatbot",
    title: "It's Not a Chatbot, It's an Agent: AI That Actually Runs Your Build",
    excerpt:
      "Most construction AI just answers questions. Foreman reads and writes your live Cornerstone PM data — editing design options, updating vendor pricing, and running multi-step purchasing workflows on your behalf. That's the difference between a chatbot and an AI agent.",
    date: "June 29, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-ai-agent-takes-actions.png",
  },
  {
    slug: "ai-mls-listing-generator-home-builders",
    title: "MLS Listing Generator: How Foreman AI Writes Your Home Listings From Floorplan Data",
    excerpt:
      "Every production builder writes the same plan 40 times — and drafts the listing from scratch 40 times. Cornerstone PM's AI MLS Listing Generator pulls bedroom count, square footage, designer packages, and community data directly from your account and turns it into ready-to-paste listing copy in under 60 seconds.",
    date: "June 28, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/ai-mls-listing-generator.png",
  },
  {
    slug: "option-classes-scope-linked-design-options-home-builders",
    title: "Option Classes: Linking Design Selections to Scopes and Budgets Automatically",
    excerpt:
      "In most construction software, design selections and cost tracking are completely disconnected. A buyer upgrades to Premium Cabinets — and someone manually updates the budget, the scope, and the bid request. Cornerstone PM's Option Classes wire those three things together automatically: one buyer choice, one update, no reconciliation.",
    date: "June 27, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/option-classes-scope-linking.png",
  },
  {
    slug: "true-cost-of-spreadsheet-budgets-home-builders",
    title: "The True Cost of Running Your Build on Spreadsheets",
    excerpt:
      "Spreadsheet budgets don't just waste time — they leak margin. Version conflicts, broken formulas, allowance drift, and the absence of any audit trail quietly erode the financial integrity of every home you build. Here's what that actually costs, and how purpose-built purchasing software replaces it.",
    date: "June 26, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/spreadsheet-budget-true-cost.png",
  },
  {
    slug: "houzz-pro-vs-cornerstone-production-home-builder",
    title: "Houzz Pro vs. Cornerstone PM: Why Production Builders Outgrow a Designer-First Tool",
    excerpt:
      "Houzz Pro is a strong tool for interior designers and remodelers — but it was never built for a production home builder selling the same plan 40 times a year. When you map Houzz Pro's feature set against floorplans, options, vendor bids, and a buyer-facing design center, the gaps are impossible to ignore. Here's an honest look at where each tool fits — and where Houzz Pro ends.",
    date: "June 25, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/houzz-pro-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-vision-jobsite-photo-analysis-construction",
    title: "Point Your Phone at a Problem: How Foreman AI Reads Jobsite Photos, Floor Plans, and Product Images",
    excerpt:
      "Foreman AI vision reads the photos you already take — floor plans, product shots, jobsite issues — and turns them into structured construction data and real actions inside Cornerstone PM. Drop an image into the chat and Foreman analyzes the content, not just stores it.",
    date: "June 24, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-vision.png",
  },
  {
    slug: "construction-allowances-master-cost-budget-home-builders",
    title: "Construction Allowances Done Right: Placeholder Budgets That Flow Into Your Real Cost Plan",
    excerpt:
      "Every production builder has line items in the budget that don't have real vendor pricing yet — appliances, landscaping, specialty fixtures. Most software forces a workaround: sticky notes, fake bids, or manual spreadsheet entries that drift out of sync. Cornerstone PM's Allowances system gives placeholders a real budget slot, applies them per floorplan or globally, and automatically replaces them when the real bid arrives.",
    date: "June 23, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/construction-allowances.png",
  },
  {
    slug: "construction-ai-knowledge-base-estimating-formulas",
    title: "Inside Foreman's Brain: The Knowledge Base Behind Construction AI That Actually Helps",
    excerpt:
      "Foreman AI isn't a thin chatbot wrapper. A 24,500-word knowledge base, 39 estimating formulas, and 396+ skills power construction answers that are actually correct — then turn those answers into real actions in your data. Here's what's inside Foreman's brain, how the estimating formulas work, and why domain grounding beats confident-sounding hallucination every time.",
    date: "June 22, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-knowledge-base.png",
  },
  {
    slug: "asana-vs-home-builder-construction-software",
    title: "Asana for Construction? Why Home Builders Need Purpose-Built Software",
    excerpt:
      "Asana is a strong generic task tool — but it has no concept of a takeoff, scope item, vendor bid, or design center. Home builders who try to run their build on Asana end up maintaining a stack of spreadsheets alongside it. Here's exactly where generic PM breaks for production builders, and what a platform built for your workflow looks like instead.",
    date: "June 21, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/asana-vs-home-builder.png",
  },
  {
    slug: "designer-packages-curated-selections-home-builders",
    title: "Designer Packages: Curated Selections That Sell Homes Faster",
    excerpt:
      "Hand a buyer 300 raw options and you hand them a decision paralysis problem. Cornerstone PM's Designer Packages flip the script: 64 curated, pre-priced design bundles across 7 categories — pick Modern Farmhouse, and every category auto-locks to that coordinated look. One decision. Real vendor pricing behind every item.",
    date: "June 20, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/designer-packages.png",
  },
  {
    slug: "construction-software-data-export-backup-no-lock-in",
    title: "Own Your Data: CSV/JSON Export and Nightly Backups in Construction Software",
    excerpt:
      "Your construction data belongs to you — and Cornerstone PM makes that more than a legal promise. Every Admin gets one-click full database export in CSV or JSON, nightly auto-backups retained for 7 days, and on-demand manual snapshots. No export fee, no support ticket, no hostage-taking.",
    date: "June 16, 2026",
    readTime: "6 min read",
    tag: "Platform",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/data-export-backup.png",
  },
  {
    slug: "mcp-server-construction-software-claude-cursor",
    title: "MCP Server for Construction Software: Connect Claude, Cursor, and Windsurf to Your Builder Data",
    excerpt:
      "Cornerstone PM ships a built-in MCP server so Claude Desktop, Cursor, and Windsurf can connect directly to your construction data and 396+ Foreman skills — all with a ready-to-paste config block and a cst_-prefixed API key. No other construction platform has this.",
    date: "June 15, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/mcp-server-construction.png",
  },
  {
    slug: "hidden-cost-switching-construction-software-migration",
    title: "The Hidden Cost of Switching Construction Software (and How to Kill It)",
    excerpt:
      "The real cost of switching isn\u2019t the new subscription \u2014 it\u2019s the migration: weeks of parallel systems, a consultant to map your data, and the fear that your history arrives broken. Cornerstone PM\u2019s AI migration wizard collapses that entire process into ten minutes and about a penny. Here\u2019s what the hidden costs actually look like, why migration friction is manufactured, and how to eliminate it.",
    date: "June 14, 2026",
    readTime: "7 min read",
    tag: "Platform",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    heroImage: "/blog/switching-cost-migration.png",
  },
  {
    slug: "bid-import-ai-takeoff-pricing-modes",
    title: "Bid Import AI: Takeoff-Only, Pricing-Only, or Both \u2014 Without Duplicates",
    excerpt:
      "Builders re-import vendor bids constantly as numbers change, and legacy tools either duplicate line items or misplace \u2018Drywall\u2019 inside \u2018Electrical.\u2019 Cornerstone\u2019s Bid Import AI fixes both: three targeted import modes, cross-scope penalty matching so trades stay in their lane, and pricing that replaces instead of duplicating on re-import. Your Master Cost Budget stays clean through every re-bid cycle.",
    date: "June 12, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/bid-import-ai.png",
  },
  {
    slug: "promote-standard-finish-to-upgrade-design-center",
    title: "How to Turn Any Standard Finish Into a Paid Upgrade in Your Design Center",
    excerpt:
      "Most design-center tools only let you toggle whole categories as included or not. Cornerstone PM goes down to the individual option: open the option, change its Spec Level to Upgrade I, II, or Premium, save\u2014and it drops out of the base price instantly. One change, propagated to every plan and every community at once.",
    date: "June 11, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/standard-to-upgrade.png",
  },
  {
    slug: "construction-ai-context-memory-long-sessions",
    title: "Why Most Construction AI Forgets \u2014 and How Foreman Doesn\u2019t",
    excerpt:
      "Most construction AI tools hit a context wall mid-task and silently degrade\u2014or crash. Foreman AI uses built-in memory compaction to survive 200+ option cleanups, full catalog imports, and marathon purchasing sessions. It\u2019s paired with a real-time context health meter and per-user memory that carries your preferences across every session.",
    date: "June 10, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-context-memory.png",
  },
  {
    slug: "enterprise-multi-division-home-builder-software",
    title: "Multi-Division Home Builder Software: How Cornerstone PM Enterprise Works",
    excerpt:
      "Enterprise doesn\u2019t mean stripped-down features and a call-for-pricing black box. Cornerstone PM Enterprise gives every division the full Pro+ platform\u2014REST API, BYOA, 396+ Foreman skills, 60 seats\u2014plus a corporate layer with a division switcher, cross-division analytics, and an X-Division-Id scoped API. $500/division/mo for the first five.",
    date: "June 9, 2026",
    readTime: "7 min read",
    tag: "Enterprise",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/enterprise-multi-division.png",
  },
  {
    slug: "knowify-vs-cornerstone-production-home-builder",
    title: "Knowify vs Cornerstone PM: Trade Contractor Tool vs Production Home Builder Platform",
    excerpt:
      "Knowify is a solid platform for trade contractors doing job costing, AIA billing, and subcontract management. But production home builders need a fundamentally different category of tool: floorplan-level options pricing, 64 Designer Packages, exclusion groups, auto-quantity scope items, and Foreman AI with 396+ skills. Here\u2019s the honest comparison.",
    date: "June 8, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/knowify-vs-cornerstone.png",
  },
  {
    slug: "foreman-ai-product-image-web-scraping",
    title: "Foreman AI Finds the Product, Hosts the Image, and Attaches It in One Breath",
    excerpt:
      "Every design team has the same problem: you paste an image link from a supplier site and six months later it's dead. Foreman AI searches for the product image, saves it to permanent hosted storage, and attaches it to your design option — all in one instruction. Anti-bot web scraping included.",
    date: "June 7, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/foreman-product-image-search.png",
  },
  {
    slug: "vendor-bid-requests-portal-no-login",
    title: "Send a Bid Request to 10 Vendors in One Click (No Vendor Login Required)",
    excerpt:
      "Most construction bid workflows involve a chain of manual steps: email a spreadsheet, wait for a reply, re-format the numbers, compare manually. Cornerstone PM replaces that entire chain — scope-filtered Excel templates auto-generated per vendor, a no-login portal for submission, and side-by-side comparison when two or more bids land.",
    date: "June 6, 2026",
    readTime: "7 min read",
    tag: "Purchasing",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/vendor-bid-requests-portal.png",
  },
  {
    slug: "crm-migration-wizard-switch-construction-software",
    title: "Switching Construction Software Without the Migration Tax",
    excerpt:
      "Migration is the #1 reason builders stay on software they hate. Cornerstone PM\u2019s AI migration wizard imports contacts, vendors, and project history from Buildertrend, JobTread, CoConstruct, or any CSV for roughly $0.01 \u2014 no consultant, no fee, no hostage-taking. Here\u2019s how it works and what to expect after you land.",
    date: "June 5, 2026",
    readTime: "7 min read",
    tag: "Platform",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/crm-migration-wizard.png",
  },
  {
    slug: "api-operations-construction-software-ai-agents",
    title:
      "238 API Operations: The Most Agent-Ready Construction Platform",
    excerpt:
      "Cornerstone PM exposes 238 total API operations to external AI agents \u2014 150+ REST endpoints, 84 dedicated routes, a generic execute surface for 396+ Foreman skills, and 37+ webhooks. Here is what that number actually means and why it is the most honest measure of an agent-ready platform.",
    date: "June 5, 2026",
    readTime: "6 min read",
    tag: "AI & Automation",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/api-operations-238.png",
  },
  {
    slug: "webhook-events-construction-software-automation",
    title: "37 Webhook Events: The Automation Layer Most Construction Software Forgets",
    excerpt:
      "Most construction software lists \u2018webhooks\u2019 as a checkbox. Cornerstone PM ships 37 named events with typed payloads, HMAC-SHA256 signatures, delivery logs, and automatic retry \u2014 the infrastructure builders need to wire Twilio SMS, Bland voice calls, and CRM sync on top of their construction platform.",
    date: "June 4, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/webhook-events-automation.png",
  },
  {
    slug: "clickup-monday-construction-vs-home-builder-software",
    title: "ClickUp and monday.com for Home Builders: Where Generic PM Tools Break",
    excerpt:
      "ClickUp and monday.com promise \u2018works for any team\u2019 \u2014 but production home builders hit six hard walls no template can fix: no floorplan model, no options engine, no design center, no vendor bid templates, no community hierarchy, and no construction-domain AI. Here\u2019s exactly where generic PM breaks and what purpose-built looks like.",
    date: "June 2, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/vs-generic-pm.png",
  },
  {
    slug: "fieldwire-vs-cornerstone-pm-home-builder",
    title: "Fieldwire vs Cornerstone PM: Field App vs Production Builder Platform",
    excerpt:
      "Fieldwire is a field-operations app built for commercial punch lists, plan markups, and RFI workflows. Production home builders need something different: floorplans, per-plan options pricing, 64 Designer Packages, exclusion groups, AI takeoff, and Foreman AI with 396+ skills. Here\u2019s the honest comparison.",
    date: "May 31, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    heroImage: "/blog/vs-fieldwire.png",
  },
  {
    slug: "structural-options-pricing-floorplan-sqft",
    title: "Pricing Structural Options Across 12 Floorplans Without 12 Spreadsheets",
    excerpt:
      "If you have 12 floorplans and 5 structural options each, that\u2019s 60 footprint variants to price \u2014 and 240+ line items to update every time a trade rate changes. Sqft-linked auto-quantity scope items change the math: define frame labor cost per sqft once, and every floorplan, every structural option, every community updates in seconds.",
    date: "May 30, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/structural-options-sqft.png",
  },
  {
    slug: "design-center-exclusion-groups-pick-one",
    title: "Design Center Exclusion Groups: Let Buyers Pick One From Many",
    excerpt:
      "Production builders know the problem: if flooring is \u2018required\u2019, does the buyer need to pick Carpet AND Tile AND LVP AND Hardwood? Exclusion groups solve this \u2014 pick one flooring type and the entire category marks complete. No more phantom incompletes, no more broken progress dashboards.",
    date: "May 29, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/exclusion-groups.png",
  },
  {
    slug: "auto-quantity-scope-items-square-footage",
    title: "Auto-Quantity Scope Items: Stop Re-Entering Sqft on Every Floorplan",
    excerpt:
      "Auto-quantity scope items link directly to floorplan measurements — Under Air Sqft, Total Sqft, or Roof Squares — so every plan and structural option prices itself automatically. Define paint cost per sqft once. Cornerstone reprices every floorplan, every elevation, every structural option instantly.",
    date: "May 28, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    heroImage: "/blog/auto-quantity-scope-items.png",
  },
  {
    slug: "foreman-ai-memory-construction-software",
    title: "Foreman AI Memory: The First Construction AI That Doesn\u2019t Forget",
    excerpt:
      "Every other construction AI starts each session from a blank slate. Foreman AI runs two persistent memory layers \u2014 per-user (your role, vendors, communication style) and company-wide (vendor scorecards, recurring scope patterns) \u2014 so it knows your business before you type the first word. Plus: a context health meter and automatic compaction that handles marathon sessions no other construction AI survives.",
    date: "May 27, 2026",
    readTime: "7 min read",
    tag: "AI & Automation",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    heroImage: "/blog/foreman-memory.png",
  },
  {
    slug: "cornerstone-pm-vs-jobnimbus-home-builder-software",
    title: "JobNimbus vs Cornerstone PM: Home Builder Software Compared",
    excerpt:
      "JobNimbus is the #1 roofing CRM, trusted by 6,000+ contractors \u2014 and it\u2019s excellent at what it does. But if you\u2019re a production home builder who landed here from a \u2018construction software\u2019 search, you\u2019re in the wrong product category. Here\u2019s the honest comparison.",
    date: "May 26, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "auto-quantity-scope-items-home-builder",
    title: "Auto-Quantity Scope Items: Set It Once, Every Floorplan Gets the Right Number",
    excerpt:
      "Purchasing agents spend hours entering square footage across dozens of scope items for every new floorplan. Auto-Quantity eliminates that entirely. Set the quantity source once \u2014 Under Air Sqft, Total Sqft, Exterior Perimeter, or Roof Squares \u2014 and every floorplan auto-calculates. Plus: Excel Import/Export, Exclusion Groups, Design Center Settings, and 100% Selection Confetti.",
    date: "May 26, 2026",
    readTime: "6 min read",
    tag: "Product Update",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "buildxact-vs-cornerstone-selections-vs-design-center",
    title: "Buildxact vs Cornerstone PM: Selections Software vs Design Center",
    excerpt:
      "Buildxact is estimating-first and well-suited for custom builders quoting unique jobs. But if you\u2019re a production home builder repeating the same floorplans across multiple communities, you need plan-level Designer Packages, bundled AI agents, and community-aware vendor bidding \u2014 not per-job allowance selections.",
    date: "May 25, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "contractor-foreman-vs-cornerstone-production-builder",
    title: "Contractor Foreman vs Cornerstone PM for Production Home Builders",
    excerpt:
      "Contractor Foreman starts at $49/month and is a solid tool for small GCs. But if you\u2019re a production home builder running plan repeats across multiple communities, you need a different product category entirely \u2014 one with a design center, per-floorplan options, and AI agents built for whole-home building.",
    date: "May 24, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "foreman-ai-75-action-loop",
    title: "How We Let Foreman AI Chain 75 Actions in One Prompt (And Why Your AI Can't)",
    excerpt:
      "Most AI chatbots cap at 3-5 tool calls per turn because generic AI goes off the rails after a few steps. Foreman AI chains 75 actions in a single prompt. Here's the four-part technical architecture: custom agentic loop, 24,500-word knowledge base, typed-function skills, and direct database access. One prompt rebuilds your entire design center category in under 90 seconds.",
    date: "May 18, 2026",
    readTime: "9 min read",
    tag: "Technical Deep-Dive",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "coconstruct-vs-cornerstone-production-design-center",
    title: "CoConstruct vs Cornerstone PM: Production Builder Design Center",
    excerpt:
      "CoConstruct was built for custom builders with job-level allowances. It was acquired by Buildertrend and customers are being migrated. If you\u2019re a production builder being pushed to move your data, this is the moment to ask whether you want a platform actually built for plan repeats, Designer Packages, and multi-community vendor management.",
    date: "May 17, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "cornerstone-pm-vs-procore-residential-home-builder",
    title: "Procore vs Cornerstone PM: Wrong Tool for Residential Builders?",
    excerpt:
      "Procore is the leading platform for commercial GCs managing $50M+ projects. But if you\u2019re a production home builder doing 20\u2013100 homes a year, you\u2019re paying enterprise pricing for commercial infrastructure that maps to zero workflows in your operation. Here\u2019s the honest comparison.",
    date: "May 17, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "cornerstone-pm-vs-acculynx-home-builder-software",
    title: "Cornerstone PM vs AccuLynx: Home Builder Software Compared",
    excerpt:
      "AccuLynx is the #1 roofing CRM \u2014 and it\u2019s excellent for what it does. But if you\u2019re a production home builder who landed here from a \u2018construction CRM\u2019 search, you need a different category of tool entirely. Here\u2019s the honest comparison.",
    date: "May 16, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "foreman-ai-100-skills",
    title: "Foreman AI Hits 100 Skills - And Skill #100 Learns Your Build Patterns",
    excerpt:
      "Six weeks ago Foreman shipped with 45 skills. Today it crosses 100 - and skill #100 (learnBuilderPreferences) reads your existing floorplan takeoffs and learns YOUR org's build defaults automatically. No configuration wizards. Your own data is the training set. Different builder, different defaults. The more you build, the smarter Foreman gets.",
    date: "May 13, 2026",
    readTime: "6 min read",
    tag: "Milestone",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "how-blueprint-ai-extracts-material-scopes",
    title: "How Blueprint AI Extracts 130+ Material Scopes from a Floor Plan PDF",
    excerpt:
      "AI material takeoff works by running a floor plan PDF through a four-stage pipeline: geometry parsing, fixture detection, scope mapping, and vendor pricing lookup - producing 130+ named material scopes in under 60 seconds. Here's the full technical breakdown.",
    date: "May 12, 2026",
    readTime: "6 min read",
    tag: "Technical Deep-Dive",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "foreman-ai-83-skills",
    title: "Foreman AI Now Has 83 Skills Across 16 Categories",
    excerpt:
      "Six weeks ago Foreman AI shipped with 45 skills across 7 categories. Today it ships with 83 skills across 16 categories - a +84% jump in 42 days. Full CRUD on takeoffs, vendor scorecards, profitability analysis, options gap detection, undo + action history. Here's what got added and why 'more skills' isn't just a vanity number.",
    date: "May 12, 2026",
    readTime: "5 min read",
    tag: "Product Update",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "buildertrend-pricing-true-cost",
    title: "The True Cost of Buildertrend for Production Home Builders",
    excerpt:
      "Buildertrend's advertised price is $499/month. For a production home builder doing 50 homes a year, the actual annual cost - once you add per-user fees, integrations, and the hidden labor of working around what the platform doesn't do - is typically $18,000 to $36,000 or more.",
    date: "May 11, 2026",
    readTime: "7 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "why-small-builders-cant-afford-newstar",
    title: "Why Small-to-Mid Home Builders Can't Afford NEWSTAR (And What They're Switching To)",
    excerpt:
      "NEWSTAR was built for the nation's largest builders - 500+ homes a year, IT departments, implementation budgets. For the 5-200 homes/year market, the platform is the wrong tool at the wrong price point. Here's why the math never works, and what mid-size builders are switching to.",
    date: "May 10, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "how-to-choose-home-builder-software",
    title: "How to Choose Home Builder Software in 7 Steps",
    excerpt:
      "Choosing home builder software starts with one question: does the platform understand how your type of business actually operates? Here's a 7-step decision framework that filters out the wrong tools fast and gets production builders to a confident shortlist.",
    date: "May 9, 2026",
    readTime: "7 min read",
    tag: "Buyer's Guide",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "buildpro-vs-cornerstone-modern-stack",
    title: "BuildPro vs Cornerstone PMTM: Why Production Builders Are Modernizing",
    excerpt:
      "BuildPro is Windows-Citrix. Cornerstone PMTM is web-native, mobile-ready, and ships with five built-in AI agents. Here's what that stack difference actually means for a production builder doing 5-200 homes per year.",
    date: "May 8, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "ai-takeoff-vs-manual-takeoff-cost",
    title: "AI Material Takeoff vs Manual Takeoff: True Cost Analysis",
    excerpt:
      "AI material takeoff reduces per-plan estimating time from 4\u20138 hours to under 60 seconds. For a production builder closing 50\u2013200 homes per year, that gap is worth $15,000\u2013$160,000 in annual estimator cost \u2014 before accounting for error reduction and rework prevention.",
    date: "May 8, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "buildertrend-vs-cornerstone-feature-comparison",
    title: "Buildertrend vs Cornerstone PMTM: Feature-by-Feature Comparison",
    excerpt:
      "Buildertrend and Cornerstone PMTM both serve home builders - but their feature sets reflect fundamentally different priorities. Here's a category-by-category breakdown: Scheduling, Sales, Purchasing, Design Center, AI Agents, and API & Data.",
    date: "May 6, 2026",
    readTime: "7 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "production-builder-vs-custom-builder-software",
    title: "Production Builder vs Custom Builder Software: Which Do You Need?",
    excerpt:
      "Production builder software and custom builder software are built for opposite workflows. If you're a production builder on a custom builder tool, the mismatch is the problem - not your process. Here's how to tell which category fits your business and what to look for when evaluating platforms.",
    date: "May 5, 2026",
    readTime: "6 min read",
    tag: "Platform Fit",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "newstar-implementation-cost-breakdown",
    title: "NEWSTAR Implementation Cost Breakdown for Small-to-Mid Builders",
    excerpt:
      "Total NEWSTAR implementation cost runs $25,000-$100,000+ in year one. Here's where the money goes: licensing, consultants, data migration, training, and ongoing support - and why mid-size builders are rethinking the math.",
    date: "May 3, 2026",
    readTime: "6 min read",
    tag: "Cost Analysis",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "migrating-from-buildertrend-to-cornerstone",
    title: "Migrating from Buildertrend to Cornerstone PMTM: Step-by-Step Guide",
    excerpt:
      "Most production home builders can migrate from Buildertrend to Cornerstone PMTM in 3-5 business days. Here's the full step-by-step: data export, community setup, schedule templates, vendor migration, and team onboarding.",
    date: "May 3, 2026",
    readTime: "7 min read",
    tag: "Migration Guide",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "home-builder-software-buyer-guide-2026",
    title: "Home Builder Software Buyer's Guide (2026)",
    excerpt:
      "Complete 2026 decision framework for home builder software. Compare NEWSTAR, BuildPro, Buildertrend, and Cornerstone PMTM across features, AI capabilities, implementation cost, and fit for your builder size.",
    date: "May 1, 2026",
    readTime: "9 min read",
    tag: "Buyer's Guide",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "design-center-home-builder",
    title: "Why Your Design Center Process Is Leaking Options Revenue",
    excerpt:
      "The design center appointment is one of the highest-margin moments in a home sale. Most builders are leaving money on the table through inconsistent presentations, untracked allowances, and selections that never make it to purchasing.",
    date: "April 29, 2026",
    readTime: "6 min read",
    tag: "Design Center",
    tagColor: "text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20",
  },
  {
    slug: "new-home-sales-pipeline",
    title: "Your Home Builder Sales Pipeline Is Losing You Buyers",
    excerpt:
      "Most home builders don't have a real sales pipeline - they have a spreadsheet and a gut feeling. Here's how tracking prospects the right way closes more contracts and wastes less time.",
    date: "April 27, 2026",
    readTime: "6 min read",
    tag: "Sales Pipeline",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    slug: "jobtread-alternative",
    title: "Looking for a JobTread Alternative? Here's What Home Builders Should Know",
    excerpt:
      "JobTread is built for general contractors. Cornerstone PMTM is built for home builders. Here's the honest difference &mdash; lot management, design center, sales pipeline, and AI that actually works with your data.",
    date: "April 1, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "subcontractor-scheduling-software",
    title: "Subcontractor Scheduling Software: What Home Builders Actually Need",
    excerpt:
      "Your best subs are evaluating you as a client. Clear schedules, advance notice, and clean communication aren't just nice to have &mdash; they're how you keep the crews that keep your builds on schedule.",
    date: "March 25, 2026",
    readTime: "6 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "construction-purchase-order-software",
    title: "Construction Purchase Order Software for Home Builders (2026 Guide)",
    excerpt:
      "Managing construction POs in Excel is costing home builders time and margin. Here's what modern purchase order software should actually do &mdash; and how AI is changing the equation.",
    date: "April 8, 2026",
    readTime: "6 min read",
    tag: "Purchasing",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
  {
    slug: "homebuilding-ai",
    title: "Homebuilding AI: How AI is Changing Residential Construction in 2026",
    excerpt:
      "Homebuilding is one of the last industries to get purpose-built AI &mdash; that&apos;s changing fast. Here's where AI is making the biggest impact in residential construction and what's coming next.",
    date: "March 3, 2026",
    readTime: "6 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "builder-ai-software",
    title: "Builder AI Software: Why Home Builders Need Purpose-Built AI (Not Generic Tools)",
    excerpt:
      "\"Builder AI software\" is a new search &mdash; people are looking for AI built specifically for builders. Here's why generic AI fails home builders and what purpose-built looks like.",
    date: "March 18, 2026",
    readTime: "5 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "ai-construction-management-software",
    title: "AI Construction Management Software: What Home Builders Need to Know (2026)",
    excerpt:
      "AI is everywhere in construction marketing but most tools are generic. Here's what real AI construction management software looks like for home builders &mdash; and how to evaluate what you're buying.",
    date: "March 10, 2026",
    readTime: "7 min read",
    tag: "AI & Technology",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    slug: "job-cost-tracking-home-builders",
    title: "Where Your Margin Goes: How Home Builders Lose Money Without Knowing It",
    excerpt:
      "Most builders don't find out they lost margin until the home closes. Here's how real-time job cost tracking &mdash; budgets, POs, and change orders in one place &mdash; stops the leak before it starts.",
    date: "April 25, 2026",
    readTime: "6 min read",
    tag: "Budgeting",
    tagColor: "text-green-400 bg-green-500/10 border-green-500/20",
  },
  {
    slug: "subcontractor-management-home-builders",
    title: "Why Your Best Subs Are Choosing Other Builders Over You",
    excerpt:
      "Good subcontractors have options. If your scheduling is chaotic and your communication is reactive, they'll quietly prioritize builders who make their lives easier &mdash; here's how to be that builder.",
    date: "April 23, 2026",
    readTime: "6 min read",
    tag: "Vendor Management",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    slug: "permitting-delays-home-builders",
    title: "Why Permits Are Stalling Your Build Schedule",
    excerpt:
      "Permit delays are the silent schedule killer for home builders. Here's how to stop letting city hall derail your close dates &mdash; and what connected software changes about the equation.",
    date: "April 21, 2026",
    readTime: "5 min read",
    tag: "Permitting",
    tagColor: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  },
  {
    slug: "buildertrend-vs-cornerstone",
    title: "BuilderTrend vs Cornerstone PMTM: The Honest Comparison",
    excerpt:
      "BuilderTrend is the big name in builder software. But is it worth $499/mo for a builder closing 10&ndash;30 homes a year? We break it down.",
    date: "April 14, 2026",
    readTime: "6 min read",
    tag: "Comparison",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  },
  {
    slug: "spreadsheets-killing-schedule",
    title: "Your Spreadsheet Is Killing Your Schedule",
    excerpt:
      "Excel doesn't notify your framer when the foundation is ready. It doesn't catch double-booked subs. Here's what running your build schedule on spreadsheets is actually costing you.",
    date: "April 10, 2026",
    readTime: "5 min read",
    tag: "Scheduling",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  },
  {
    slug: "60-second-home-sale",
    title: "The 60-Second Home Status Update Your Buyers Actually Want",
    excerpt:
      "Your buyers call twice a week asking for updates. Your team spends 20 minutes on each call. There's a better way &mdash; and your buyers will love you for it.",
    date: "April 7, 2026",
    readTime: "4 min read",
    tag: "Buyer Experience",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(6,182,212,0.06),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            The Builder&apos;s Blog
          </h1>
          <p className="text-xl text-slate-400">
            Real talk for home builders on software, scheduling, and growing a smarter operation.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="max-w-4xl mx-auto grid gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block p-8 rounded-2xl bg-slate-900/60 border border-slate-800/60 hover:border-slate-600 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${post.tagColor}`}>
                    {post.tag}
                  </span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-600">&mdash;·</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-200 mb-3 leading-snug">
                {post.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center gap-1.5 text-sm text-cyan-500 group-hover:text-cyan-400 transition-colors">
                Read article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
