import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FeaturesSection } from "@/components/FeaturesSection";
import { CTASection } from "@/components/CTASection";
import { VideoPlayer } from "@/components/VideoPlayer";
import {
  Calendar,
  ShoppingCart,
  TrendingUp,
  Palette,
  FileText,
  Users,
  Check,
  MapPin,
  Code,
  ListChecks,
  Plug,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features - Cornerstone PMTM",
  description:
    "Eight integrated modules for home builders: scheduling, purchasing, sales pipeline, design center, permitting, buyer portal, Punchlist AI, and jobsite operations with the industry-first triple QR code ecosystem. Plus a built-in MCP server and 150+ REST API endpoints for AI-native construction management.",
};

const featureDetails = [
  {
    id: "construction",
    icon: Calendar,
    screenshot: "/mockups/feature-scheduling.png",
    name: "Construction Scheduling",
    color: "from-cyan-500 to-teal-600",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
    textColor: "text-cyan-400",
    description:
      "Interactive Gantt charts with drag-and-drop task management. 3-tier dependency system with auto-cascade - move one task and every downstream task adjusts automatically. No manual re-dating, no broken timelines.",
    bullets: [
      "Gantt charts with critical path highlighting",
      "3-tier task dependency system with auto-cascade",
      "17 pre-built templates (7 foundation types)",
      "4-tier cascade email notifications to subs - delivered in under a second via Cloudflare",
      "Phase-based milestone tracking (5 phases)",
      "Weekday-only scheduling - auto-skips weekends",
      "Vendor magic links - no passwords for subs",
      "Daily & weekly digest emails to subcontractors",
      "6-step closing workflow (CO → Orientation → Punch List → Close)",
      "Punch list items with photo attachments - snap a picture in the field, the photo lands on the item and routes to the right vendor",
      "2-year warranty tracking post-close",
      "QR check-in signs auto-generated for every home - vendors scan to log GPS, weather, and hours on-site",
    ],
  },
  {
    id: "purchasing",
    icon: ShoppingCart,
    screenshot: "/mockups/feature-purchasing.png",
    name: "Purchasing & Budgets",
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    description:
      "200+ part catalog with real pricing. Auto-generate ~97 budget lines from floorplan takeoffs when structural options are locked. Full bid management lifecycle with side-by-side vendor comparison and one-click PO generation.",
    bullets: [
      "200+ part catalog with multiple unit types",
      "3-level budget hierarchy: Scope → Task → Parts",
      "Auto-budget generation from floorplan takeoffs (~97 lines)",
      "Structural options pricing (Bonus Room, Finished Basement, and 12+ more)",
      "Global structural options - mark an option global to share identical takeoffs and one retail price across every floorplan; edit takeoffs once and the change syncs everywhere, no duplicate data entry",
      "Dedicated Elevations Manager - manage exterior styles (Colonial, Craftsman, Modern Farmhouse) per floorplan with inline-editable retail price adders and expandable material takeoffs; elevation cost is computed from vendor pricing, and Foreman can create elevations and set pricing through natural conversation",
      "Full bid management: send to bid → compare → award",
      "Bid requests linkable to specific design or structural options - vendors price exactly what you're selling, awards flow straight to the right budget lines",
      "Side-by-side vendor bid comparison with lowest-price highlighting",
      "Purchase orders: Draft → Sent → Acknowledged → Invoiced → Approved → Paid, with an approve-to-pay gate (invoices hold until approved), retainage withholding, and payment tracking by check/ACH/wire/card/cash",
      "Hierarchical cost codes - phase-level tracking under each trade scope (Plumbing → PLM-001 Underground, PLM-002 Rough, PLM-003 Trim) for per-phase PO generation; the only residential platform with full cost-code hierarchy, not flat codes like BuilderTrend/CoConstruct",
      "Task-completion PO generation - mark a construction task complete and Cornerstone auto-generates the PO pre-filled with the right parts, quantities, vendor, and pricing for that home's floorplan via cost codes (Task → Cost Code → Takeoff Items → PO); choose draft-first (review before sending) or auto-send (PO emailed to the vendor's scheduling email with PDF attached, hands-free), or download as PDF to email the vendor yourself",
      "Change order approval workflow with full audit trail",
      "Active homes dashboard with financial rollup",
      "BuilderTrend migration support - AI Migration Wizard ingests your data in an afternoon",
      "Bid Import AI - upload any vendor format (Excel, PDF, scanned docs, handwritten quotes), AI extracts and maps line items",
      "Fuzzy catalog matching with confidence scores - review, approve, or reject before importing",
      "3 import modes: as a Bid, Vendor Pricing, or Takeoffs",
      "Auto-Quantity Scope Items - set a quantity source (Under Air Sqft, Total Sqft, Exterior Perimeter, Roof Squares) once, quantities auto-calculate across every floorplan. POs combine base + structural option quantities. ANSI Z765 compliant",
      "Multi-tab Excel import/export - entire floorplan (base house, locations, structural options, elevations) in one workbook",
      "Vendor Activity Map - Google Maps view of every vendor check-in across all communities in real time",
    ],
    learnMoreHref: "/purchasing",
    learnMoreLabel: "Explore Purchasing & cost control",
  },
  {
    id: "sales",
    icon: TrendingUp,
    screenshot: "/mockups/feature-sales-pipeline.png",
    video: "/video/sale-workflow.mp4",
    name: "Sales Pipeline",
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    description:
      "Create a new home sale in under 60 seconds. Select community, floorplan, elevation, enter buyer info, pick structural options, apply incentives, and submit. The system auto-generates a 9-step sales checklist and full budget.",
    bullets: [
      "New home sale in under 60 seconds",
      "9-step auto-generated sales checklist",
      "Auto-budget generation when structural options are locked",
      "12+ structural options per floorplan with real-time pricing",
      "Real-time pricing matrix per floorplan × community",
      "Active promotions & incentives with expiration countdowns",
      "Branded PDF price sheets (per community or all)",
      "AI-powered MLS listing sheet - Claude Sonnet writes the description from your real data (room dimensions, upgrades, community info, lot size)",
      "Custom AI prompt input, word count slider (50-1,000), one-click PDF download",
      "Description saves to floorplan - auto-populates every home on that plan",
      "Net price calculator with stacked promotions",
      "Auto-handoff to permitting when sales tasks complete",
      "Excel/CSV export of pricing matrix",
      "Model home QR code for buyer lead capture - replaces paper sign-in sheets, recognizes returning visitors, creates Lead records auto-tied to community",
    ],
  },
  {
    id: "design",
    icon: Palette,
    screenshot: "/mockups/ss-design-center-appliances.png",
    name: "Design Center",
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-400",
    description:
      "Cross-class upgrades, per-room pricing from real takeoff quantities, 64+ designer packages, and a Product Configurator for complex selections like cabinets and countertops. Unlimited spec levels - Standard, Upgrade, Premium, or custom tiers. Buyers pick their finishes and see real-time upgrade pricing.",
    bullets: [
      "Options Attributes - define attribute groups (Door Style, Wood Species, Finish, etc.) and manage 7,000+ variations from just 5 options. Compatibility rules block invalid combos, per-value pricing modifiers, visual image catalog, auto-generated vendor bid templates (Excel) that import pricing back as real cost data",
      "Product Configurator - step-by-step guided flows for cabinets, countertops, and other multi-attribute selections. Smart compatibility rules, spec-level tier gating, and pricing from base + attribute modifiers",
      "Community-based upgrade pricing - each community has its own included spec level baked into the home price. Buyers see INCLUDED on options at that level and +$X deltas above (selected price minus community-included price). One option library, every community priced correctly, zero manual configuration",
      "No-downgrade enforcement - buyers in an Upgrade I community never see Standard options. Design center filters them out automatically. No accidental downgrades, no margin leak",
      "Attribute tier-gating - product attributes (Collection, Size, Pattern, Grout Color) are cosmetic spec selectors with availability gated per tier. Herringbone only at Upgrade I+? 12x24 only at Premium? Done",
      "Cross-class upgrades - switch carpet to hardwood, recessed to pendants, within the same category",
      "Allowances - budget placeholders for non-bid items, rename and reassign at the floorplan or community level any time",
      "Unlimited custom spec levels per community",
      "Different communities can start at different spec levels (Standard in one, Upgrade I in another) sharing one option library - no cloning required",
      "Per-room selections with sqft - 'Kitchen flooring (180 sqft)' with pricing from takeoffs",
      "Real-time upgrade pricing - exact delta shown: '+$684 upgrade'",
      "64+ designer packages across 7 categories - one-click curated collections",
      "Driven by takeoffs - zero double-entry, quantities flow from your plans",
      "Structural option gated rooms with material scopes",
      "Selection tracking with buyer approval workflow",
      "Polished customer-facing selection sheet PDF export",
      "Selections flow directly into purchasing budget",
      "Exclusion Groups - \"Pick One\" rules for flooring, countertops, and other either/or categories. Buyer picks hardwood? Carpet auto-locks. No conflicting selections, no manual cleanup",
      "100% Selection Confetti - celebration animation when all design selections are complete. Small touch, big buyer moment",
    ],
  },
  {
    id: "permitting",
    icon: FileText,
    screenshot: "/mockups/feature-permitting.png",
    name: "Permitting",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    description:
      "Pre-built permit sequences with correct order, dependencies, and lead times already baked in. Phase-based permit gates prevent downstream construction from starting until permits clear.",
    bullets: [
      "Pre-built permit sequences (Foundation, Framing, Final)",
      "Phase-based permit gate - construction can't start until permits clear",
      "Permitting agent dashboard with buyer info & floorplan details",
      "PA workflow with one-click template setup",
      "Permit status tracking: Applied → Approved → Expired",
      "Document storage for permit certificates",
      "Auto-handoff from sales pipeline when all tasks complete",
      "Buyer portal invite from permitting stage",
      "Toggle permit gate on/off per account",
    ],
  },
  {
    id: "portal",
    icon: Users,
    screenshot: "/mockups/feature-buyer-portal.png",
    name: "Buyer Portal",
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-500/10",
    borderColor: "border-sky-500/20",
    textColor: "text-sky-400",
    description:
      "Real-time portal synced with the construction schedule - when framing moves three days, buyers see it instantly. Builder-uploaded milestone photos (up to 5 per milestone), built-in messaging app with permanent record, and one-click ZIP download of all job photos. Magic link access - no passwords needed. Reduces inbound calls, builds trust, turns into referrals.",
    bullets: [
      "Real-time sync with construction schedule - framing moves, buyers see it instantly",
      "Magic link access - no app download, no password",
      "20-phase construction milestone carousel with photos",
      "PM/builder uploads real job site photos at each milestone (up to 5 per milestone via task-row camera button)",
      "Built-in messaging app between builder and customer with permanent searchable record",
      "One-click ZIP download of all build photos - buyers save their whole build history",
      "Schedule visibility - buyers see upcoming phases in real time",
      "Document access (warranty docs, plans, permits)",
      "Selection review - approve finishes from the portal",
      "Construction progress percentage tracking",
      "Invite triggered automatically from permitting stage",
    ],
  },
  {
    id: "punchlist",
    icon: ListChecks,
    screenshot: "/mockups/ss-punchlist-ai.jpg",
    name: "Punchlist AI",
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-400",
    description:
      "Two ways to build a punch list fast \u2014 record a walkthrough video, or upload a home inspector\u2019s PDF report. Either way, Punchlist AI extracts every finding, tags severity and location, sorts by trade, and auto-assigns the right vendor to each item \u2014 in seconds. Stop re-typing a 30-page inspection report. Upload the PDF, get a sorted, vendor-assigned punch list before you put the phone down.",
    bullets: [
      "Upload a home inspection PDF \u2014 AI extracts every defect/finding automatically",
      "AI pulls location/room, trade (Electrical, Plumbing, Roofing, HVAC, Structural, Cosmetic), description, and severity from the report",
      "Pulls the inspector\u2019s actual embedded photos out of the PDF and attaches them to the matching item \u2014 so the defect photo flows through to the vendor email",
      "Review and edit room/scope/vendor/description (and remove any photo) before committing",
      "Or record a phone video walkthrough \u2014 no special hardware required",
      "Video mode: AI watches the footage + transcribes audio callouts in one pass",
      "Sorts findings by trade/category; sort and review before committing",
      "Auto-assigns the right vendor to each item by trade \u2014 with manual override",
      "Groups same-vendor items into a single notification email",
      "Location pinning \u2014 room, fixture, surface (Kitchen, Office, Master Bath)",
      "Photo evidence captured from key video frames",
      "Status tracking from open \u2192 in progress \u2192 verified-complete",
      "Multi-walkthrough comparison (pre-drywall, pre-closing, warranty)",
      "Auto-attached to the home in the build record \u2014 no copy/paste",
    ],
    learnMoreHref: "/punchlist-ai",
    learnMoreLabel: "See Punchlist AI in action",
  },
  {
    id: "jobsite",
    icon: MapPin,
    screenshot: "/mockups/ss-vendor-activity-map.jpg",
    name: "Jobsite Operations & QR Ecosystem",
    color: "from-emerald-500 to-cyan-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-400",
    description:
      "The only home builder platform with a triple QR code system: vendor jobsite check-in, community/PM check-in, and sales model home lead capture. Plus a live Vendor Activity Map and AI camera-event integration that auto-starts tasks when vendors arrive.",
    bullets: [
      "Vendor Jobsite QR - scan to check in, GPS + weather + timestamp captured automatically",
      "Community QR - builder staff & inspectors log presence; feeds timesheet validation",
      "Sales Model Home QR - captures buyer leads, recognizes returning visitors, replaces paper sign-in sheets",
      'Printable 11\u00d78.5" QR signs auto-generated for every community and home',
      "Vendor Activity Map - Google Maps view of live check-ins across all communities, 30-second refresh",
      "Jobsite AITM vendor presence detection - webhook-driven, works with any camera, doorbell, gate, or GPS (Verkada, Ring, Sensera, Samsara, custom IP cams)",
      "Auto-task start when vendor arrives, auto-departure logging on exit",
      "Photo upload at check-in (up to 10 per visit), stored in cloud",
      "Check-out flow with completion %, notes, and next-visit scheduling",
      "Configurable safety acknowledgment per community",
      "Public check-in page - no app install or login required for vendors",
      "Webhook events: vendor.arrived, vendor.departed (HMAC-signed, retry, delivery logs)",
    ],
    learnMoreHref: "/jobsite-ai",
    learnMoreLabel: "Learn more about Jobsite AITM",
  },
  {
    id: "api",
    icon: Code,
    screenshot: "/mockups/feature-api-keys.png",
    name: "Developer API & Integrations",
    color: "from-rose-500 to-violet-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
    textColor: "text-rose-400",
    description:
      "150+ REST API endpoints that expose every Foreman AI skill as a callable REST endpoint. 84 dedicated RESTful routes with clean URLs, plus a generic execute endpoint that runs any of the 396+ skills by name. 3 schema formats: Anthropic, OpenAI function calling, and OpenAPI 3.1.",
    bullets: [
      "150+ REST API endpoints \u2014 the largest API surface in residential construction software",
      "84 dedicated RESTful routes for vendors, bids, homes, tasks, POs, parts, options, budgets, and more",
      "Generic execute endpoint: POST /api/ext/execute runs any Foreman skill by name",
      "Skill catalog endpoint: GET /api/ext/skills serves all 396+ tool schemas",
      "3 schema formats: Anthropic tool format, OpenAI function calling, OpenAPI 3.1",
      "Pro+ API key authentication with role-based permissions",
      "37+ real-time webhook events with HMAC signatures, delivery logs, and auto-retry",
      "Connect Claude, ChatGPT, LangChain, n8n, Twilio, Bland, Retell \u2014 any agent that speaks HTTP",
      "BYOA (Bring Your Own Agent) \u2014 your external AI agents get the same intelligence as Foreman",
    ],
    learnMoreHref: "/api-docs",
    learnMoreLabel: "Browse the API",
  },
  {
    id: "mcp",
    icon: Plug,
    screenshot: "/mockups/feature-api-keys.png",
    name: "MCP Server",
    color: "from-violet-500 to-cyan-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-400",
    description:
      "The no-code on-ramp to AI-native construction management. Cornerstone PM ships a built-in Model Context Protocol (MCP) server, so you can point Claude Desktop, Cursor, or Windsurf straight at your construction data in about 30 seconds. Generate an API key in settings, paste the ready-made config block, and your AI tool can run any of the 396+ Foreman skills directly. Most construction software has no AI integration at all \u2014 we ship a full MCP server.",
    bullets: [
      "Built-in MCP server in app settings \u2014 no plugins, no middleware, no extra service to host",
      "Ready-to-paste config blocks for Claude Desktop, Cursor, and Windsurf",
      "Generate a scoped API key (cst_ Bearer token) and connect in ~30 seconds",
      "Exposes all 396+ Foreman skills as MCP tools through a single JSON-RPC endpoint",
      "Role-based tool filtering \u2014 Admins/Owners get every tool, PM/Member get most, Vendors a limited set",
      "Denylist permissions model \u2014 ship a new Foreman skill and it's instantly available to your AI tools, zero config changes",
      "The no-code on-ramp; the REST API + BYOA is the full-control path \u2014 both hit the same skill catalog",
    ],
    learnMoreHref: "/api-access#mcp",
    learnMoreLabel: "See the MCP server",
  },
];

export default function FeaturesPage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(6,182,212,0.1),transparent)]" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 text-xs font-medium mb-6">
            PLATFORM FEATURES
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Eight modules.
            <br />
            <span className="text-cyan-400">One platform.</span>
            <br />
            One price.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Every tool a home builder needs - from the first lead to the final walkthrough.
            Built specifically for residential construction. Starting at $149/mo.
          </p>
        </div>
      </section>

      {/* Feature detail sections */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {featureDetails.map((feature, i) => {
            const Icon = feature.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={feature.name}
                id={feature.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center p-8 rounded-2xl border border-slate-800/60 bg-slate-900/40 hover:border-slate-700 transition-all duration-300 scroll-mt-24`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center ${feature.textColor}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{feature.name}</h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className={`w-4 h-4 ${feature.textColor} flex-shrink-0`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {(feature as { learnMoreHref?: string; learnMoreLabel?: string }).learnMoreHref && (
                    <Link
                      href={(feature as { learnMoreHref: string }).learnMoreHref}
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${feature.textColor} hover:underline underline-offset-4`}
                    >
                      {(feature as { learnMoreLabel?: string }).learnMoreLabel || "Learn more"} →
                    </Link>
                  )}
                </div>
                <div className="w-full lg:w-[520px] flex-shrink-0 space-y-4">
                  <div className="relative w-full rounded-xl border border-slate-700/50 shadow-xl overflow-hidden bg-slate-900">
                    <Image
                      src={feature.screenshot}
                      alt={`${feature.name} screenshot`}
                      width={1780}
                      height={1321}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </div>
                  {(feature as {video?: string}).video && (
                    <VideoPlayer
                      src={(feature as {video?: string}).video!}
                      label="Workflow Demo"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
