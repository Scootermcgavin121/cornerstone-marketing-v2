import Link from "next/link";
import { Check, ArrowRight, Zap, Brain, FileText, Cpu, Activity, X, ShoppingBag, Sparkles, Shield, BarChart3, MessageSquare, ClipboardList } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";
import { PoweredByClaude } from "@/components/PoweredByClaude";

export const metadata = {
  title: "Foreman AI - 396+ skill construction agent with Memory Compaction | Cornerstone PM™",
  description:
    "396+ purpose-built construction skills with built-in memory compaction - the only construction AI that doesn't forget mid-session. Reads and writes your real data: parts, vendors, homes, budgets, sales pipeline, design center selections. Pro plan.",
};

const skillCategories = [
  {
    icon: Cpu,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    label: "Core Data Management",
    count: "25+",
    desc: "Read and write your real construction data - parts, vendors, homes, budgets, sales pipeline, design center, structural options, and more.",
    skills: [
      { name: "Parts Catalog", detail: "Search, create, bulk import, update, and delete parts" },
      { name: "Design Center Options", detail: "List, create, bulk create, update options; link to parts and option classes" },
      { name: "Vendor Management", detail: "List, create, search bids, performance scorecards" },
      { name: "Home Management", detail: "List homes, view budgets, update status and assignments" },
      { name: "Data Lookup", detail: "Communities, floorplans, scopes, option classes, spec levels, users, org stats" },
      { name: "Sales Pipeline", detail: "Get full pipeline overview - homes by stage, buyer info, contract dates, assigned agents" },
      { name: "Sales Task Management", detail: "List, update, and complete sales tasks across all homes; assign roles and due dates" },
      { name: "Sales Task Status", detail: "Mark tasks complete, in-progress, blocked, or skipped with optional completion dates" },
      { name: "Home Selections", detail: "Get all design center selections for a home - option details, category, location, status" },
      { name: "Selection Status Update", detail: "Confirm, reject, or reset buyer selections across any home or category" },
      { name: "Option Categories", detail: "List all design center categories and option classes available in your catalog" },
      { name: "Options by Category", detail: "Pull full option lists filtered by category, spec level, scope, or keyword search" },
      { name: "Structural Options Management", detail: "Create, edit, and manage structural upgrade options with parts and cost tracking. Handle everything from covered patios to bonus rooms with full pricing integration." },
      { name: "Location-Aware Takeoffs", detail: "Add parts to specific rooms by name: 'Add 6 recessed lights to the Kitchen.' Foreman knows which rooms exist in each floorplan and places parts exactly where they belong." },
      { name: "Option Class Management", detail: "Tag takeoffs for design center linking, bulk assign option classes across floorplans. Controls which options appear in bid templates when filtering by trade." },
      { name: "Blueprint AI Integration", detail: "After Blueprint AI extracts rooms and quantities from your floor plans, Foreman uses that data as a shopping list to populate actual products from your catalog." },
      { name: "Room Stats & Dimensions", detail: "See sqft, linear feet, fixture counts, and door counts for every room. Click to update dimensions right on the takeoffs page." },
      { name: "Scheduling Templates", detail: "List, create, update, delete, and clone scheduling templates. Apply templates to homes to instantly populate construction schedules." },
      { name: "Template Task Management", detail: "Add, edit, reorder, and delete tasks within scheduling templates. Set durations, milestones, and task sequencing for repeatable workflows." },
      { name: "Task Dependencies", detail: "Build dependency chains between tasks. Manage cross-template task links for complex schedules so delays cascade correctly." },
    ],
  },
  {
    icon: Brain,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    label: "AI-Powered Analysis",
    count: "14+",
    desc: "Foreman doesn't just retrieve data - it analyzes it. Budget variances, profitability, vendor performance, competitive intel.",
    skills: [
      { name: "Web Scraping", detail: "Fetch any URL for product info, pricing, specs - Home Depot, Ferguson, 84 Lumber" },
      { name: "Design Center Suggestions", detail: "Scan parts catalog for missing design options, auto-suggest additions" },
      { name: "Competitive Analysis", detail: "Scrape competitor pages and compare vs your floorplans" },
      { name: "Sales Description Generator", detail: "AI-powered MLS descriptions for floorplans using real project data" },
      { name: "Budget Variance Analysis", detail: "Flag cost overruns across all homes in one command" },
      { name: "Profitability Reports", detail: "Margin analysis by community with upgrade revenue breakdown" },
      { name: "Vendor Performance Analysis", detail: "Bid response rates, win rates, insurance tracking" },
      { name: "Image Vision & Screenshot Acting", detail: "Paste or drag-drop any screenshot, product photo, floor plan, or supplier page from inside the app — Foreman reads it with AI vision and acts on it (vendor quote screenshot → parts catalog entry, faucet photo → model lookup, floor plan PDF → takeoff trigger)." },
      { name: "File Upload & Content Reading", detail: "Drag-drop PDFs, Excel spreadsheets, CSVs, and images directly into chat. Foreman reads them, extracts the data, and acts on it — vendor quote PDF → parts created, takeoff Excel → budget lines added, scanned doc → searchable text." },
      { name: "Construction Estimating Formulas", detail: "Built-in math for drywall sheets, roofing squares, concrete yards, lumber board-feet, and paint gallons. Give Foreman the dimensions, get back accurate quantities and rough cost — no calculator, no spreadsheet." },
      { name: "Sales Pipeline Analysis", detail: "Identify stalled deals, avg days per stage, close rate by agent or community" },
      { name: "Design Center Revenue Analysis", detail: "Total upgrade revenue by category, top-selling options, margin by spec level" },
      { name: "Buyer Selections Report", detail: "Full selections summary for any home - what was chosen, confirmed, and at what price" },
      { name: "Options Gap Analysis", detail: "Find categories with no confirmed selections - flag incomplete buyer decisions before cutoff" },
      { name: "Spec Level Profitability", detail: "Compare margin across Good/Better/Best tiers; identify which upgrades drive the most profit" },
    ],
  },
  {
    icon: Zap,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    label: "System Intelligence",
    count: "16+",
    desc: "The behaviors that make Foreman actually useful - learns your org's build patterns from your own data, greets you by your chosen name, memory compaction, persistent memory, bulk data cleanup, deduplication, smart linking, error recovery.",
    skills: [
      { name: "Learn Builder Preferences", detail: "Foreman analyzes your org's existing floorplan takeoffs and learns YOUR build patterns. Always use recessed cans in bedrooms? Foreman sees it across your Addison and Chesapeake takeoffs and makes that the default for the next plan. No configuration screens, no setup wizards - your own historical data IS the training set. The more floorplans you set up, the smarter Foreman gets for YOUR org." },
      { name: "Smart Fixture Defaults", detail: "Knows that kitchens get recessed lights plus pendants, foyers get chandeliers, bathrooms get vanity lights, and exteriors get coach lights. When learned preferences aren't available, Foreman's construction-savvy defaults handle it." },
      { name: "User Memory", detail: "Tell Foreman about yourself - it greets you by whatever name you want, remembers your role, your favorite vendors, your typical workflows, and how you like things done. Custom-coded into the app (not a generic chatbot bolt-on). Gets more intuitive every session." },
      { name: "Memory Compaction", detail: "Auto-summarizes older messages mid-session so marathon work doesn't crash or forget. Recent context stays word-for-word intact." },
      { name: "Context Health Meter", detail: "Green/yellow/red indicator in the chat UI shows remaining capacity at a glance" },
      { name: "Persistent Memory", detail: "Saves preferences and decisions across sessions - gets smarter over time" },
      { name: "Full Undo on Writes", detail: "Every write Foreman makes — create, update, delete, bulk operation — is reversible. Said the wrong thing? One click to undo the last action and Foreman walks the changes back exactly." },
      { name: "Safety Guardrails", detail: "Destructive operations (deletes, bulk overwrites, mass renames) ship with a dry-run preview and confirmation gate. You see what will change before anything is touched — no surprise wipeouts." },
      { name: "Bulk Operations & Data Cleanup", detail: "Foreman is a beast at cleanup work - rename hundreds of options, fix bad pricing, normalize categories, archive stale parts, or rebuild a messy catalog in one prompt instead of 200 manual edits." },
      { name: "Smart Data Linking", detail: "Auto-connect parts to option classes for the design center - great for stitching legacy data back together after a migration." },
      { name: "Duplicate Prevention & Dedup", detail: "Always searches before creating to avoid duplicates, and can sweep your catalog to merge or flag existing dupes." },
      { name: "Anti-Bot Web Crawling", detail: "Pulls real products, prices, SKUs, and images from Home Depot, Ferguson, Lowe's, and other big-box sites that block traditional scrapers - then turns them into parts and design options in your catalog." },
      { name: "URL Generation", detail: "Build direct links to specific homes, vendors, and reports" },
      { name: "Error Recovery", detail: "When web scraping fails, uses industry knowledge as backup" },
      { name: "Context Awareness", detail: "Understands builder terminology and workflows - not generic AI speak" },
      { name: "Personality & Emoji", detail: "Foreman uses emojis for fun and reacts to yours - fire it a 🔥💪👊 and it gets the vibe. Feels like texting a knowledgeable colleague, not chatting with a robot." },
    ],
  },
  {
    icon: FileText,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    label: "Document Generation",
    count: "14+",
    desc: "Professional documents in seconds. SOWs, bid invitations, comparison reports, punch lists, MLS sheets, Excel exports, full lighting packages.",
    skills: [
      { name: "SOW Generator", detail: "Professional Scope of Work docs with home counts and specs" },
      { name: "Bid Request Drafter", detail: "Formatted bid invitations with project details, plans, and deadline" },
      { name: "Bid Comparison Reports", detail: "Normalize pricing, rank vendors, recommend best value" },
      { name: "Punch List Generator", detail: "Room-by-room QC checklists by trade" },
      { name: "Custom File Export", detail: "CSV, JSON, text, and PDF-style documents on demand" },
      { name: "PDF Document Creation", detail: "Styled HTML with print formatting for professional docs" },
      { name: "Excel Exports", detail: "Formatted spreadsheets with company branding" },
      { name: "MLS Listing Sheets", detail: "Auto-generated from floorplan data - room dimensions, upgrades, community info" },
      { name: "Room Dimension Sheets", detail: "Detailed room specs for sales team handouts" },
      { name: "Design Center Summary PDF", detail: "Full selections export for a home - categories, options chosen, prices, and buyer signature line" },
      { name: "Sales Stage Report", detail: "Pipeline snapshot by community - homes per stage, days elapsed, next action due" },
      { name: "Setup Lighting Package", detail: "Builds a complete fixture-by-fixture lighting plan for a home in one command. Foreman first checks your org's LEARNED preferences from past takeoffs, then falls back to construction-savvy defaults. Pulls from your real catalog and assembles a room-by-room package. The more lighting packages you set up, the smarter it gets for YOUR org." },
      { name: "Setup Plumbing Package", detail: "One-click plumbing fixture setup for an entire home. Toilets, faucets, showers, tub/shower combos - assigned per room from your catalog. Same learn-from-your-data approach as lighting packages." },
      { name: "Bid Request Drafting (Option-Linked)", detail: "Build a bid request that's wired to specific design and structural options - not just a scope. Vendors see exactly which options they're pricing against, so the awarded bid flows back to the right line items in your budget." },
    ],
  },
];

const examplePrompts = [
  {
    prompt: "Scrape Home Depot for GE Profile refrigerators and add them to our parts catalog",
    result: "Found 6 models, added to catalog with SKUs, prices, and specs. Ready to link to design options.",
    category: "Web Scraping + Parts",
    icon: "🌐",
  },
  {
    prompt: "Search supplier catalogs for brushed nickel kitchen faucets under $300 and show me the top 5 with live pricing",
    result: "Pulled 5 faucets from supplier catalogs with live MSRPs, model numbers, and product images. Best value: Delta Leland at $247. Ready to add to your design center.",
    category: "Supplier Integration",
    icon: "🔍",
  },
  {
    prompt: "Clean up the parts catalog - archive anything not used in the last 12 months, fix capitalization, and flag duplicate SKUs",
    result: "143 parts archived, 387 names normalized, 22 duplicate SKU groups flagged for review. Catalog is tidy.",
    category: "Bulk Data Cleanup",
    icon: "🧹",
  },
  {
    prompt: "Show me all homes in Coastal Ridge that are IN_PROGRESS with budget totals and days since construction started",
    result: "14 homes returned with budget summary, committed vs budgeted, and timeline - formatted as a table.",
    category: "Home Management + Analysis",
    icon: "🏠",
  },
  {
    prompt: "Write an MLS description for The Addison at Bayside Preserve, emphasize the chef's kitchen and waterfront views",
    result: "250-word professional description generated from real room dimensions, upgrades, and community data.",
    category: "Document Generation",
    icon: "📝",
  },
  {
    prompt: "Create a bid request for all Plumbing vendors in our system for the Bayshore Commons community",
    result: "Bid request drafted with specs, deadline, and vendor list. Sent portal invites to 12 vendors.",
    category: "Bid Request Drafter",
    icon: "📋",
  },
  {
    prompt: "Generate a punch list for the finishing trades at 1234 Oak Street",
    result: "Room-by-room QC checklist for Paint, Flooring, Trim, and Fixtures - exported as PDF.",
    category: "Punch List Generator",
    icon: "✅",
  },
  {
    prompt: "Set up a full lighting package for The Addison floorplan - standard spec level",
    result: "Built a 42-fixture package: 18 recessed LED cans, 4 pendants over the island, vanity bars in 3 bathrooms, sconces in 2 hallways, plus exterior coach lights and a chandelier in the foyer. All pulled from your catalog with pricing.",
    category: "Lighting Package Setup",
    icon: "💡",
  },
  {
    prompt: "Build a renovation template for 1847 Maple Ave - kitchen remodel, primary bath gut, and refinish the hardwoods upstairs",
    result: "Spun up a full remodel template for the existing home: 32 scope items across Demo, Plumbing, Electrical, Cabinets, Countertops, Flooring, Paint, and Punch - sequenced for renovation work (demo first, finishes last). Skipped new-construction-only scopes like foundation and framing. Ready to assign vendors and bid.",
    category: "Construction Template Create",
    icon: "🔨",
  },
  {
    prompt: "Hey Foreman, set up Countertops with three material types: Granite, Quartz, and Laminate. Create separate OptionClasses for each. Add 5 options per class (Standard through Premium). Create attributes with real brand names.",
    result: "Built Countertops end-to-end: 3 OptionClasses, 15 options total with Standard/Better/Best/Premium/Luxury tiers, real-brand attribute values, and tier access locked so Standard ships with budget homes while Premium unlocks at Upgrade III+. One prompt, full design center setup.",
    category: "Design Center Setup",
    icon: "🎨",
  },
];

const categoryBreakdown = [
  { name: "Design Center", count: 49, color: "from-amber-500 to-orange-500" },
  { name: "Scheduling", count: 32, color: "from-violet-500 to-purple-500" },
  { name: "Structural Options", count: 27, color: "from-emerald-500 to-teal-500" },
  { name: "Scope Items", count: 26, color: "from-blue-500 to-cyan-500" },
  { name: "Option Attributes", count: 23, color: "from-rose-500 to-pink-500" },
  { name: "Locations & Takeoffs", count: 22, color: "from-cyan-500 to-sky-500" },
  { name: "Parts Catalog", count: 21, color: "from-amber-500 to-yellow-500" },
];

export default function ForemanPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* ═══════════════════════════════════════════════════════════
          HERO — Cinematic stat treatment with glowing orbs
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-28 pb-24 px-4 overflow-hidden">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(251,191,36,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(139,92,246,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_60%,rgba(52,211,153,0.06),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-3.5 h-3.5" />
              Pro Plan &middot; Reads &amp; Writes Your Real Data
            </div>
            <div className="flex justify-center mb-6">
              <img src="/foreman-mascot.png" alt="Foreman AI mascot" className="h-36 sm:h-44 lg:h-52 w-auto object-contain animate-float" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 leading-[0.95] tracking-tight">
              Foreman AI<sup className="text-2xl sm:text-3xl lg:text-4xl align-super text-amber-400 ml-1">TM</sup>
            </h1>
            <p className="text-2xl sm:text-3xl text-amber-400 font-black mb-6">Not a chatbot. A construction agent.</p>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Type what you need in plain English. Foreman executes it against your real data &mdash; parts, vendors, homes, budgets, schedules, selections, bids, and more.
            </p>
          </div>

          {/* ── Giant stat ribbon ── */}
          <div className="relative rounded-3xl border border-slate-800/80 bg-slate-900/40 backdrop-blur-sm overflow-hidden mb-12">
            {/* Animated shimmer bar across top */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" style={{ backgroundSize: "200% 100%", animation: "shimmer 3s linear infinite" }} />

            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-slate-800/60">
              {[
                { value: "396+", label: "Purpose-built skills", accent: "text-amber-400", glow: "shadow-amber-500/20" },
                { value: "20", label: "Skill categories", accent: "text-violet-400", glow: "shadow-violet-500/20" },
                { value: "75", label: "Actions per turn", accent: "text-emerald-400", glow: "shadow-emerald-500/20" },
                { value: "0", label: "Manual data entry", accent: "text-cyan-400", glow: "shadow-cyan-500/20" },
              ].map((stat) => (
                <div key={stat.label} className="relative p-8 lg:p-10 text-center group">
                  <div className={`text-5xl sm:text-6xl lg:text-7xl font-black ${stat.accent} mb-2 drop-shadow-lg`}>
                    {stat.value}
                  </div>
                  <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
                  {/* Subtle glow under number */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-transparent ${stat.glow}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5 text-center">
              Get Beta Access &rarr;
            </Link>
            <a href="#skills" className="px-10 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-amber-500/40 hover:text-white transition-all duration-200 text-center">
              See all 396+ skills
            </a>
          </div>

          {/* Powered by Claude — trust badge */}
          <div className="mt-10 flex flex-col items-center gap-3">
            <PoweredByClaude size="md" />
            <p className="text-slate-500 text-xs max-w-sm text-center leading-relaxed">
              Foreman runs on Anthropic&apos;s Claude &mdash; the most capable AI for complex, multi-step construction workflows.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          LIVE DEMO VIDEO
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
              Live demo &middot; Real-time. Not sped up.
            </div>
            <h2 className="text-2xl sm:text-3xl font-black mb-2">
              Watch Foreman find a product image, host it, and update Design Center &mdash; in <span className="text-emerald-400">20 seconds</span>.
            </h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              One prompt. Foreman searches the web, downloads the official Samsung product photo, saves it to your server, and attaches it to the right Design Options entry. Zero clicks of yours.
            </p>
            <p className="text-slate-500 text-xs max-w-2xl mx-auto mt-3">
              Works the other direction too: paste or drag-drop <em>any screenshot</em> from inside the app — a vendor
              quote, a supplier product page, a faucet photo, a floor plan PDF — and Foreman reads it with AI vision
              and acts on it (creates the part, updates the option, answers the question).
            </p>
          </div>
          <VideoPlayer src="/video/foreman-image-search.mp4" label="Foreman AI: Image Search Workflow" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FOREMAN'S BRAIN — Neural constellation visual
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Subtle neural network background dots */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(139,92,246,0.08),transparent)]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Brain className="w-3.5 h-3.5" /> Under the hood
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              Foreman&apos;s Brain
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Not a wrapper on ChatGPT. A <span className="text-white font-semibold">183KB construction knowledge base</span> with 24,500+ words across 30 chapters &mdash; from estimating formulas to design center architecture.
            </p>
          </div>

          {/* ── Brain map: central node + 3 orbiting files ── */}
          <div className="relative max-w-4xl mx-auto">
            {/* Central brain icon */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30 flex items-center justify-center animate-pulse-glow">
                  <Brain className="w-14 h-14 text-violet-400" />
                </div>
                {/* Orbiting ring */}
                <div className="absolute -inset-4 rounded-full border border-violet-500/10 border-dashed" />
                <div className="absolute -inset-10 rounded-full border border-violet-500/5 border-dashed" />
              </div>
            </div>

            {/* 3 knowledge files — horizontal layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-emerald-500/20 p-7 hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-16 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
                <div className="text-4xl mb-4">📖</div>
                <div className="text-emerald-400 font-black text-lg mb-1">App Knowledge</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">158 KB</span>
                  <span className="text-slate-600 text-xs">2,300+ lines</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Every feature, workflow, role guide, and data model. Foreman doesn&apos;t guess what a spec level is — it <span className="text-white font-semibold">knows exactly how your system works.</span>
                </p>
              </div>

              <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-cyan-500/20 p-7 hover:border-cyan-500/40 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-16 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
                <div className="text-4xl mb-4">📐</div>
                <div className="text-cyan-400 font-black text-lg mb-1">Estimating Formulas</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold">8 KB</span>
                  <span className="text-slate-600 text-xs">39 formulas</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Lumber takeoffs, drywall coverage, paint sqft, concrete volume, roofing squares. <span className="text-white font-semibold">Foreman does the math</span> — no calculator, no spreadsheet.
                </p>
              </div>

              <div className="group relative rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-amber-500/20 p-7 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-amber-400 font-black text-lg mb-1">Prompt Library</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold">16 KB</span>
                  <span className="text-slate-600 text-xs">10 categories</span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Pre-built setup prompts for 10 design center categories. Copy-paste, swap your vendors, and <span className="text-white font-semibold">Foreman builds your catalog in minutes.</span>
                </p>
              </div>
            </div>

            {/* CTA strip - deep dive on the brain */}
            <div className="mt-12 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/[0.06] via-slate-900/40 to-slate-900/40 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <div className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-1.5">Want to go deeper?</div>
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-1">Explore Foreman&apos;s full brain</h3>
                  <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">
                    All 30 chapters, 39 estimating formulas, and 10 prompt-library categories &mdash; broken down on one page.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <Link href="/brain" className="px-5 py-2.5 rounded-full bg-violet-500 text-white font-bold text-sm hover:bg-violet-400 transition-all duration-200 shadow-lg shadow-violet-500/30 hover:-translate-y-0.5 whitespace-nowrap">
                    See Foreman&apos;s Brain &rarr;
                  </Link>
                  <Link href="/blog/foreman-ai-75-action-loop" className="px-5 py-2.5 rounded-full border border-slate-700 text-slate-300 font-semibold text-sm hover:border-slate-500 hover:text-white transition-all duration-200 whitespace-nowrap">
                    The 75-action loop
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CHATGPT vs FOREMAN — Bold split-screen comparison
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              Why Foreman can do what<br /><span className="text-amber-400">ChatGPT can&apos;t.</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Generic AI has 5 tools and no construction knowledge. Foreman has 396 purpose-built skills and a 183KB brain.
            </p>
          </div>

          {/* ── The split: ChatGPT (left/dark) vs Foreman (right/glowing) ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-800">
            {/* ChatGPT side */}
            <div className="bg-slate-950 p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <div className="text-slate-500 font-black text-lg">Generic AI</div>
                  <div className="text-slate-700 text-xs font-bold uppercase tracking-widest">ChatGPT / Copilot / Gemini</div>
                </div>
              </div>
              <div className="space-y-5">
                {[
                  { label: "Tools", value: "5", detail: "Web search, code interpreter, image gen, file reading, DALL-E" },
                  { label: "Construction knowledge", value: "None", detail: "Generic training data. Doesn't know what a spec level is." },
                  { label: "Your data access", value: "None", detail: "Can't read or write your parts, vendors, homes, or budgets." },
                  { label: "Actions per turn", value: "3–5", detail: "Conservative limits because it goes off the rails fast." },
                  { label: "Memory", value: "Session only", detail: "Forgets everything when the tab closes." },
                  { label: "Long sessions", value: "Crashes", detail: "Freezes or hallucinates after 50+ messages." },
                ].map((row) => (
                  <div key={row.label} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-rose-500/60 flex-shrink-0 mt-1" />
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-slate-500 text-sm font-semibold">{row.label}:</span>
                        <span className="text-rose-400/80 font-black text-sm">{row.value}</span>
                      </div>
                      <div className="text-slate-700 text-xs">{row.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Foreman side */}
            <div className="relative bg-gradient-to-br from-amber-500/[0.04] via-slate-900/60 to-violet-500/[0.04] p-8 sm:p-10 lg:p-12">
              {/* Accent glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <img src="/foreman-mascot.png" alt="Foreman" className="h-10 w-10 object-contain" />
                  <div>
                    <div className="text-amber-400 font-black text-lg">Foreman AI</div>
                    <div className="text-amber-400/40 text-xs font-bold uppercase tracking-widest">Built for construction</div>
                  </div>
                </div>
                <div className="space-y-5">
                  {[
                    { label: "Tools", value: "396+", detail: "Every one reads or writes your actual construction data." },
                    { label: "Construction knowledge", value: "183KB", detail: "24,500 words. 30 chapters. 39 estimating formulas." },
                    { label: "Your data access", value: "Full R/W", detail: "Direct Prisma + Postgres. Parts, vendors, homes, budgets, bids, selections." },
                    { label: "Actions per turn", value: "75", detail: "Custom agentic loop. We control the limits." },
                    { label: "Memory", value: "Persistent", detail: "Remembers you, your vendors, your preferences — across every session." },
                    { label: "Long sessions", value: "Compacts", detail: "Auto-summarizes older context. Keeps working for hours." },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-1" />
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-slate-300 text-sm font-semibold">{row.label}:</span>
                          <span className="text-amber-400 font-black text-sm">{row.value}</span>
                        </div>
                        <div className="text-slate-500 text-xs">{row.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Category breakdown bar chart */}
          <div className="mt-12 rounded-2xl bg-slate-900/40 border border-slate-800 p-8 sm:p-10">
            <div className="text-center mb-8">
              <div className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2">396 skills across 20 categories</div>
              <h3 className="text-2xl sm:text-3xl font-black">Top 7 categories by skill count</h3>
            </div>
            <div className="space-y-4 max-w-2xl mx-auto">
              {categoryBreakdown.map((cat) => (
                <div key={cat.name} className="group">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-slate-300 text-sm font-semibold">{cat.name}</span>
                    <span className="text-white font-black text-sm">{cat.count}</span>
                  </div>
                  <div className="h-3 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-700`}
                      style={{ width: `${(cat.count / 49) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="text-center pt-4">
                <span className="text-slate-600 text-sm">+ 13 more categories &middot; <a href="#skills" className="text-violet-400 hover:text-violet-300 underline underline-offset-2">see all skills below</a></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          75 ACTIONS PER TURN — Cinematic section
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(251,191,36,0.06),transparent)]" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Activity className="w-3.5 h-3.5" /> Under the hood
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              <span className="text-amber-400">75 actions</span> per turn.
            </h2>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Most AI chatbots cap at <span className="text-rose-400 font-semibold">3–5 tool calls</span> because generic AI without domain knowledge goes off the rails. Here&apos;s why Foreman can do 15× more.
            </p>
          </div>

          {/* ── Vertical timeline-style reasons ── */}
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/40 via-violet-500/30 to-emerald-500/20" />

              {[
                {
                  num: "01",
                  title: "Custom agentic tool loop",
                  desc: "We built a custom execution loop that calls Claude's API, executes tool results, feeds them back, and loops — up to 75 rounds. ChatGPT runs a generic loop controlled by OpenAI with conservative limits. We control our own loop, so we set our own limits.",
                  accent: "amber",
                },
                {
                  num: "02",
                  title: "183KB knowledge base keeps it on track",
                  desc: "Generic AI hallucinates and loops infinitely after a few steps. Foreman's 24,500-word construction knowledge base means it knows exactly which skill to call next, what parameters to pass, and what the expected result looks like. More context = more reliable = safe to allow more iterations.",
                  accent: "violet",
                },
                {
                  num: "03",
                  title: "Purpose-built skills with guardrails",
                  desc: "Each of the 396 skills is a hardcoded function with input validation, error handling, and typed returns. It's not \"generate code and hope it works\" — it's deterministic, safe, repeatable. That's why we can let it run 75 times without fear.",
                  accent: "emerald",
                },
                {
                  num: "04",
                  title: "Direct database access",
                  desc: "Foreman's skills hit Prisma + Postgres directly — no HTTP round-trips, no rate limits, no API keys to juggle. Each skill call takes milliseconds. 75 calls at ~50ms = under 4 seconds of actual execution. Web-based AI tools go through external APIs with latency at every step.",
                  accent: "cyan",
                },
              ].map((reason) => {
                const colors: Record<string, { dot: string; num: string; border: string }> = {
                  amber: { dot: "bg-amber-400", num: "text-amber-400", border: "hover:border-amber-500/30" },
                  violet: { dot: "bg-violet-400", num: "text-violet-400", border: "hover:border-violet-500/30" },
                  emerald: { dot: "bg-emerald-400", num: "text-emerald-400", border: "hover:border-emerald-500/30" },
                  cyan: { dot: "bg-cyan-400", num: "text-cyan-400", border: "hover:border-cyan-500/30" },
                };
                const c = colors[reason.accent];
                return (
                  <div key={reason.num} className="relative pl-16 pb-10 last:pb-0">
                    {/* Timeline dot */}
                    <div className={`absolute left-4 top-1.5 w-5 h-5 rounded-full ${c.dot} border-4 border-slate-950`} />
                    <div className={`rounded-2xl bg-slate-900/60 border border-slate-800 ${c.border} p-6 transition-all duration-300`}>
                      <div className={`${c.num} text-xs font-black uppercase tracking-widest mb-2`}>{reason.num}</div>
                      <h3 className="text-xl font-black text-white mb-3">{reason.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Result banner */}
          <div className="mt-16 rounded-3xl border border-amber-500/20 bg-gradient-to-r from-amber-500/[0.06] via-slate-900/60 to-amber-500/[0.06] p-10 sm:p-14 text-center">
            <div className="text-8xl sm:text-9xl font-black text-amber-400 leading-none mb-4 drop-shadow-lg">75</div>
            <div className="text-white font-black text-2xl sm:text-3xl mb-2">step chain. One prompt. One turn.</div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Creating option classes, adding attributes, setting tier access, seeding values — all in a single conversation turn.
              What takes hours of manual data entry happens in <span className="text-amber-400 font-semibold">under a minute</span>.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WORKFLOW RECIPES — Built-in SOPs
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 via-emerald-950/10 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <ClipboardList className="w-3.5 h-3.5" /> Built-in Procedures
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">23+ workflow recipes. Zero guesswork.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Standard operating procedures baked into Foreman&apos;s brain. From bid comparison to takeoff population, every recipe is a proven step-by-step procedure so nothing gets missed.
            </p>
          </div>

          {/* Recipe grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Bid Comparison & Award", desc: "Pull bids, compare side-by-side, award winner, notify vendors" },
              { name: "Takeoff Population", desc: "Import parts, assign to rooms, set quantities from blueprint data" },
              { name: "Blueprint AI Integration", desc: "Upload plan, extract rooms & fixtures, import into floorplan" },
              { name: "Lighting Package Setup", desc: "Create option classes, add fixtures, set tier pricing & access" },
              { name: "Plumbing Package Setup", desc: "Build plumbing options with brand attributes and cost tiers" },
              { name: "Design Center Options", desc: "Create categories, options, attributes, and retail pricing" },
              { name: "Structural Options", desc: "Set up structural upgrades with scope items and cost impacts" },
              { name: "Budget Analysis", desc: "Pull costs, compare to estimates, flag overruns by scope" },
              { name: "SOW Generation", desc: "Auto-generate scope-of-work docs for vendor contracts" },
              { name: "Scheduling Templates", desc: "Build task templates with durations, dependencies, and trades" },
              { name: "Parts Catalog Import", desc: "Scrape suppliers, create parts, attach images & pricing" },
              { name: "Vendor Scorecard", desc: "Analyze on-time delivery, bid history, and community coverage" },
            ].map((recipe) => (
              <div key={recipe.name} className="rounded-xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 p-5 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{recipe.name}</div>
                    <div className="text-slate-500 text-xs leading-relaxed">{recipe.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom callout */}
          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              + 11 more recipes covering punch lists, profitability reports, competitive analysis, and more. Each recipe tells Foreman exactly which skills to call, in what order, with built-in verification steps.
            </p>
          </div>

          {/* Why recipes matter */}
          <div className="mt-14 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/[0.04] via-slate-900/60 to-emerald-500/[0.04] p-8 sm:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-black text-emerald-400 mb-2">Consistent</div>
                <p className="text-slate-400 text-sm">Same proven steps every time. No missed verifications, no skipped lookups, no hallucinated shortcuts.</p>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-400 mb-2">Teachable</div>
                <p className="text-slate-400 text-sm">New team member? They get the same workflow quality as your best PM on day one.</p>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-400 mb-2">Auditable</div>
                <p className="text-slate-400 text-sm">Every recipe logs what it did. Review the steps, verify the results, trust the output.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          EXAMPLE PROMPTS — Alternating chat bubble layout
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900/30 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Plain English. Real results.</h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">These are actual things you can say to Foreman right now.</p>
          </div>
          <div className="space-y-5">
            {examplePrompts.map((ex, i) => (
              <div key={i} className="group rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-amber-500/20 transition-all duration-300 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr,1fr] divide-y lg:divide-y-0 lg:divide-x divide-slate-800/60">
                  {/* User prompt */}
                  <div className="p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{ex.icon}</span>
                      <div>
                        <div className="text-amber-400/60 text-xs font-bold uppercase tracking-widest mb-2">{ex.category}</div>
                        <p className="text-white font-medium leading-relaxed">&ldquo;{ex.prompt}&rdquo;</p>
                      </div>
                    </div>
                  </div>
                  {/* Foreman response */}
                  <div className="p-6 bg-slate-950/30">
                    <div className="flex items-start gap-3">
                      <img src="/foreman-mascot.png" alt="Foreman" className="h-6 w-6 object-contain flex-shrink-0 mt-0.5" />
                      <p className="text-slate-300 text-sm leading-relaxed">{ex.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FULL SKILL CATALOG
      ═══════════════════════════════════════════════════════════ */}
      <section id="skills" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5" /> Full Catalog
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">396+ skills. 20 categories.</h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto">Every skill is purpose-built for construction. Not adapted from a generic AI assistant.</p>
          </div>
          <div className="space-y-8">
            {skillCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div key={cat.label} className={`rounded-2xl border ${cat.border} overflow-hidden`}>
                  <div className={`${cat.bg} px-8 py-6 border-b ${cat.border}`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${cat.color}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`text-2xl font-black ${cat.color}`}>{cat.label}</h3>
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${cat.bg} border ${cat.border} ${cat.color}`}>{cat.count} skills</span>
                        </div>
                        <p className="text-slate-400 text-sm">{cat.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-900/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {cat.skills.map((skill) => (
                        <div key={skill.name} className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                          <Check className={`w-4 h-4 ${cat.color} flex-shrink-0 mt-0.5`} />
                          <div>
                            <div className="text-white font-semibold text-sm mb-0.5">{skill.name}</div>
                            <div className="text-slate-500 text-xs leading-relaxed">{skill.detail}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SUPPLIER INTEGRATION — Coming Soon
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-amber-500/5 border border-cyan-500/20 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-5">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  Supplier API Integration &middot; Coming Soon
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
                  Your suppliers&apos; catalogs,<br />
                  <span className="text-cyan-400">inside your AI assistant.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-5">
                  No more switching between your PM tool and supplier websites. Foreman is connecting directly to supplier APIs to pull <strong className="text-white">real-time product data, live pricing, and official product images</strong> — straight into your parts catalog and design center.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Ask Foreman &ldquo;find me a brushed nickel kitchen faucet under $300&rdquo; and get real results from actual supplier catalogs with current MSRPs. No stale spreadsheet pricing. No manual data entry.
                </p>
                <div className="space-y-3">
                  {[
                    "Search supplier product catalogs in real-time with plain English",
                    "Pull live pricing, product images, descriptions, and model numbers",
                    "Auto-populate your design center with accurate MSRPs across all floorplans",
                    "Compare products and pricing across multiple suppliers instantly",
                    "Set up entire fixture packages in minutes — real data, not guesswork",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden">
                  <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/foreman-mascot.png" alt="Foreman" className="h-6 w-6 object-contain" />
                      <span className="text-white font-semibold text-sm">Foreman AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-cyan-400 text-xs font-bold">Searching suppliers...</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/10">
                      <div className="text-amber-400 text-xs font-bold mb-1">You:</div>
                      <div className="text-white text-sm italic">&ldquo;Find me a brushed nickel kitchen faucet under $300&rdquo;</div>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "Delta Leland 9178-SP-DST", price: "$247.00", detail: "Single-handle, pull-down · SpotShield® · In stock" },
                        { name: "Moen Arbor 7594SRS", price: "$284.00", detail: "MotionSense, pull-down · Spot Resist · In stock" },
                        { name: "Kohler Bellera K-560-VS", price: "$262.00", detail: "Pull-down spray head · DockNetik® · In stock" },
                      ].map((p) => (
                        <div key={p.name} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-white text-xs font-bold">{p.name}</span>
                            <span className="text-emerald-400 text-xs font-bold">{p.price}</span>
                          </div>
                          <div className="text-slate-500 text-xs">{p.detail}</div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-800/60">
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Live pricing from supplier APIs. One click to add any product to your design center.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800/60">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {[
                  { title: "No more stale pricing", desc: "Live MSRPs from supplier APIs replace the 18-month-old spreadsheet prices you're estimating with today.", color: "text-cyan-400" },
                  { title: "Minutes, not hours", desc: "Set up an entire fixture package across all your floorplans in minutes — real product images, model numbers, and pricing pulled automatically.", color: "text-emerald-400" },
                  { title: "One place for everything", desc: "Stop tab-switching between your PM tool and supplier websites. Search, compare, and select products without leaving Cornerstone.", color: "text-amber-400" },
                ].map((item) => (
                  <div key={item.title} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className={`text-sm font-bold ${item.color} mb-2`}>{item.title}</div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          GETS SMARTER + MEMORY — Horizontal feature strip
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-5xl mb-6">🧠</div>
            <h2 className="text-4xl sm:text-5xl font-black mb-4">Gets smarter over time.</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Tell Foreman about yourself — your name, your vendors, your margin targets, how you like reports. It remembers everything across every conversation. Custom-coded into Cornerstone, not a generic bolt-on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { icon: "🏗️", label: "Remembers your vendors", detail: "Knows which subs you prefer for each scope", accent: "border-amber-500/20 hover:border-amber-500/40" },
              { icon: "📊", label: "Learns your margins", detail: "Uses your actual targets in reports and analysis", accent: "border-violet-500/20 hover:border-violet-500/40" },
              { icon: "🏘️", label: "Knows your communities", detail: "Understands each project's context and status", accent: "border-emerald-500/20 hover:border-emerald-500/40" },
            ].map((item) => (
              <div key={item.label} className={`p-6 rounded-2xl bg-slate-900/60 border ${item.accent} transition-all duration-300`}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-white font-bold mb-1">{item.label}</div>
                <div className="text-slate-500 text-sm">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          MEMORY COMPACTION — Side-by-side battle
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900/60 to-amber-500/5 border border-emerald-500/20 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-5">
                  <Activity className="w-3.5 h-3.5" />
                  Built-in Memory Compaction
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-5 leading-tight">
                  The only construction AI that<br />
                  <span className="text-emerald-400">doesn&apos;t forget what you said 5 minutes ago.</span>
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-5">
                  Every other AI chatbot hits a wall. After 50+ messages, ChatGPT, Copilot, and the half-baked &ldquo;AI features&rdquo; bolted onto competing platforms either crash, freeze, or start hallucinating &mdash; right when you&apos;re deep into the work.
                </p>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  Foreman is different. <strong className="text-white">Automatic memory compaction</strong>{" "}intelligently summarizes older messages in the background while recent messages stay word-for-word intact. You don&apos;t notice it. Foreman just keeps working.
                </p>
                <div className="space-y-3">
                  {[
                    "Clean up 200+ design options in one sitting",
                    "Import an entire vendor catalog without losing your place",
                    "Walk through a full bid review - line by line, vendor by vendor",
                    "Hours of back-and-forth, hundreds of tool calls, zero context loss",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Context Health Meter visual */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden">
                  <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src="/foreman-mascot.png" alt="Foreman" className="h-6 w-6 object-contain" />
                      <span className="text-white font-semibold text-sm">Foreman AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-emerald-400 text-xs font-bold">Healthy</span>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-2">Context Health Meter</div>
                    <div className="space-y-3">
                      {[
                        { label: "Green — Plenty of room", range: "0-70%", width: "35%", color: "bg-emerald-400", labelColor: "text-emerald-400" },
                        { label: "Yellow — Compacting in background", range: "70-90%", width: "80%", color: "bg-amber-400", labelColor: "text-amber-400" },
                        { label: "Red — Time for a fresh chat", range: "90-100%", width: "95%", color: "bg-rose-400", labelColor: "text-rose-400" },
                      ].map((meter) => (
                        <div key={meter.label}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className={`${meter.labelColor} text-xs font-bold`}>{meter.label}</span>
                            <span className="text-slate-500 text-xs">{meter.range}</span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div className={`h-full ${meter.color} rounded-full`} style={{ width: meter.width }} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-slate-800/60">
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Even when the meter hits yellow, Foreman is actively compacting older messages to stay sharp.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Everyone else vs Foreman */}
            <div className="mt-10 pt-8 border-t border-slate-800/60">
              <div className="text-center text-xs uppercase tracking-widest font-bold text-slate-500 mb-6">How other AI chatbots handle long sessions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <X className="w-4 h-4 text-rose-400" />
                    <div className="text-rose-400 font-bold text-sm">Everyone else</div>
                  </div>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    <li>&bull; Crashes or freezes after 50+ messages</li>
                    <li>&bull; Forgets earlier instructions and decisions</li>
                    <li>&bull; Starts hallucinating when context gets full</li>
                    <li>&bull; Forces you to start over and lose your place</li>
                    <li>&bull; Forgets you completely the moment a new chat starts</li>
                  </ul>
                </div>
                <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <div className="text-emerald-400 font-bold text-sm">Foreman AI</div>
                  </div>
                  <ul className="space-y-2 text-slate-300 text-sm">
                    <li>&bull; Auto-compacts older messages in the background</li>
                    <li>&bull; Recent messages stay word-for-word intact</li>
                    <li>&bull; Health meter shows you exactly where you stand</li>
                    <li>&bull; Marathon sessions just keep working</li>
                    <li>&bull; Full user &amp; company memory files saved server-side</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PRICING
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl bg-gradient-to-b from-slate-900/80 to-slate-950 border border-amber-500/20 p-10 sm:p-14 text-center overflow-hidden">
            {/* Glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-8">
                Pro Plan Feature
              </div>
              <div className="text-6xl sm:text-7xl font-black text-amber-400 mb-2">$499<span className="text-2xl text-slate-400 font-normal">/mo</span></div>
              <div className="text-white font-bold text-xl mb-8">Pro Plan</div>
              <div className="space-y-3 text-left mb-10 max-w-md mx-auto">
                {[
                  "Foreman AI - 396+ skills on the latest Claude Sonnet model, 1,000 AI messages/mo",
                  "Blueprint AI - 25 blueprint takeoffs/mo",
                  "MLS Listing Agent",
                  "Everything in Builder (Sales, Purchasing, Design Center)",
                  "Up to 1,000 active homes",
                  "Advanced analytics & reporting",
                  "Priority onboarding support",
                ].map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link href="/beta" className="block w-full max-w-md mx-auto text-center px-6 py-4 rounded-xl bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200">
                Get Beta Access &rarr;
              </Link>
              <p className="text-slate-500 text-xs mt-3">Beta is free for 2 years &middot; Limited to 100 builders</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SISTER AI AGENTS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Other AI Agents in Cornerstone</div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Foreman doesn&apos;t work alone.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "Jobsite AI™", href: "/jobsite-ai", desc: "Vendor arrival detection — any camera, doorbell, gate, or GPS auto-starts the task.", accent: "text-emerald-400 group-hover:text-emerald-300" },
              { name: "Blueprint AI", href: "/ai-takeoff", desc: "Upload a PDF blueprint, get a full material takeoff in seconds.", accent: "text-violet-400 group-hover:text-violet-300" },
              { name: "Bid Import AI", href: "/bid-import-ai", desc: "Drop in any vendor bid — Excel, PDF, scanned, handwritten — AI extracts every line.", accent: "text-cyan-400 group-hover:text-cyan-300" },
              { name: "Punchlist AI", href: "/punchlist-ai", desc: "Walk the house with your phone — AI builds the punch list from the video.", accent: "text-amber-400 group-hover:text-amber-300" },
            ].map((agent) => (
              <Link
                key={agent.href}
                href={agent.href}
                className="block p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-600 transition-all duration-200 group"
              >
                <div className={`text-sm font-black mb-1 ${agent.accent}`}>{agent.name}</div>
                <p className="text-slate-400 text-xs leading-relaxed">{agent.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/ai-agents" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
              See all AI agents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA — Final push
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative py-24 px-4 text-center border-t border-slate-800/60 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_80%,rgba(251,191,36,0.08),transparent)]" />
        <div className="relative z-10">
          <h2 className="text-4xl sm:text-5xl font-black mb-4 leading-tight">
            Your builders are paying consultants $5,000<br />
            <span className="text-amber-400">for custom reports.</span>
          </h2>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            We built the consultant into the software. 396+ skills. Plain English. Real construction data.
          </p>
          <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-xl hover:bg-amber-300 transition-all duration-200 shadow-xl shadow-amber-500/30 hover:-translate-y-0.5">
            Get Beta Access <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
