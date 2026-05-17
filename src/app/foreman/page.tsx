import Link from "next/link";
import { Check, ArrowRight, Zap, Brain, FileText, Cpu, Activity, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoPlayer } from "@/components/VideoPlayer";

export const metadata = {
  title: "Foreman AI - 100-skill construction agent with Memory Compaction | Cornerstone PM™",
  description:
    "100+ purpose-built construction skills with built-in memory compaction - the only construction AI that doesn't forget mid-session. Reads and writes your real data: parts, vendors, homes, budgets, sales pipeline, design center selections. Pro plan.",
};

const skillCategories = [
  {
    icon: Cpu,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    label: "Core Data Management",
    count: "22+",
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
  },
  {
    prompt: "Clean up the parts catalog - archive anything not used in the last 12 months, fix capitalization, and flag duplicate SKUs",
    result: "143 parts archived, 387 names normalized, 22 duplicate SKU groups flagged for review. Catalog is tidy.",
    category: "Bulk Data Cleanup",
  },
  {
    prompt: "Show me all homes in Coastal Ridge that are IN_PROGRESS with budget totals and days since construction started",
    result: "14 homes returned with budget summary, committed vs budgeted, and timeline - formatted as a table.",
    category: "Home Management + Analysis",
  },
  {
    prompt: "Write an MLS description for The Addison at Bayside Preserve, emphasize the chef's kitchen and waterfront views",
    result: "250-word professional description generated from real room dimensions, upgrades, and community data.",
    category: "Document Generation",
  },
  {
    prompt: "Flag any homes where actual costs are more than 10% over budget",
    result: "3 homes flagged. Breakdown by scope category with variance amounts and recommended actions.",
    category: "Budget Variance Analysis",
  },
  {
    prompt: "Create a bid request for all Plumbing vendors in our system for the Bayshore Commons community",
    result: "Bid request drafted with specs, deadline, and vendor list. Sent portal invites to 12 vendors.",
    category: "Bid Request Drafter",
  },
  {
    prompt: "Generate a punch list for the finishing trades at 1234 Oak Street",
    result: "Room-by-room QC checklist for Paint, Flooring, Trim, and Fixtures - exported as PDF.",
    category: "Punch List Generator",
  },
  {
    prompt: "Set up a full lighting package for The Addison floorplan - standard spec level",
    result: "Built a 42-fixture package: 18 recessed LED cans, 4 pendants over the island, vanity bars in 3 bathrooms, sconces in 2 hallways, plus exterior coach lights and a chandelier in the foyer. All pulled from your catalog with pricing.",
    category: "Lighting Package Setup",
  },
];

export default function ForemanPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_20%,rgba(251,191,36,0.08),transparent)]" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-semibold mb-6">
            <Zap className="w-3.5 h-3.5" />
            100+ skills &middot; PRO PLAN &middot; READS AND WRITES YOUR REAL DATA
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight">
            🪖 Foreman AI<sup className="text-2xl sm:text-3xl lg:text-4xl align-super text-amber-400 ml-1">TM</sup>
          </h1>
          <p className="text-2xl text-amber-400 font-bold mb-4">Not a chatbot. A construction agent.</p>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            100+ purpose-built skills across 11 categories &mdash; data, analysis, document generation, takeoffs, bidding, sales, reports, system intelligence and more. Type what you need in plain English. Foreman executes it against your real data.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/beta" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200 shadow-lg shadow-amber-500/30 hover:-translate-y-0.5">
              Get Beta Access &rarr;
            </Link>
            <a href="#skills" className="px-8 py-4 rounded-full border border-slate-700 text-slate-300 font-semibold text-lg hover:border-slate-500 hover:text-white transition-all duration-200">
              See all 100+ skills
            </a>
          </div>
        </div>
      </section>

      {/* Live demo video */}
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

      {/* Stats */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5">
          {[
            { num: "100+", label: "Purpose-built skills", sub: "Not generic AI features" },
            { num: "11", label: "Skill categories", sub: "And always growing" },
            { num: "110+", label: "Database tables", sub: "Full access to your real data" },
            { num: "0", label: "Manual data entry", sub: "Plain English to execution" },
          ].map((s) => (
            <div key={s.label} className="text-center p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="text-3xl font-black text-amber-400 mb-1">{s.num}</div>
              <div className="text-white font-bold text-sm mb-1">{s.label}</div>
              <div className="text-slate-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Example prompts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4">Plain English. Real results.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">These are actual things you can say to Foreman right now.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {examplePrompts.map((ex) => (
              <div key={ex.prompt} className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/20 transition-all duration-300 overflow-hidden">
                <div className="p-5 border-b border-slate-800/60">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-amber-400 font-black text-lg leading-none flex-shrink-0 mt-0.5">You:</span>
                    <p className="text-white font-medium italic">&ldquo;{ex.prompt}&rdquo;</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-slate-400 font-black text-sm leading-none flex-shrink-0 mt-0.5">🪖</span>
                    <p className="text-slate-300 text-sm">{ex.result}</p>
                  </div>
                </div>
                <div className="px-5 py-2.5">
                  <span className="text-amber-400/60 text-xs font-semibold">{ex.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill categories */}
      <section id="skills" className="py-16 px-4 bg-slate-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-5xl font-black mb-4">100+ skills. 11 categories.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Every skill is purpose-built for construction. Not adapted from a generic AI assistant.</p>
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

      {/* Gets smarter */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl bg-amber-500/5 border border-amber-500/20 p-8 sm:p-12 text-center">
            <div className="text-5xl mb-6">🧠</div>
            <h2 className="text-3xl font-black text-white mb-4">Gets smarter over time.</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Foreman learns how <em>you</em> work. Tell it the name you want to be greeted by, your role, your
              go-to vendors, your margin targets, how you like reports structured - it remembers everything across
              every conversation. Custom-coded into Cornerstone (not a generic chatbot bolt-on), so the more you
              use it, the more intuitive it becomes about your specific business.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {[
                { label: "Remembers your vendors", detail: "Knows which subs you prefer for each scope" },
                { label: "Learns your margins", detail: "Uses your actual targets in reports and analysis" },
                { label: "Knows your communities", detail: "Understands each project's context and status" },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-amber-400 font-bold text-sm mb-1">{item.label}</div>
                  <div className="text-slate-500 text-xs">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marathon Sessions / Memory Compaction */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-emerald-500/10 via-slate-900/60 to-amber-500/5 border border-emerald-500/20 p-8 sm:p-12">
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              {/* Left: Pitch */}
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

              {/* Right: Visual */}
              <div className="w-full lg:w-96 flex-shrink-0">
                <div className="rounded-2xl bg-slate-950/80 border border-slate-800 overflow-hidden">
                  <div className="px-5 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🦖</span>
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
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-emerald-400 text-xs font-bold">Green &mdash; Plenty of room</span>
                          <span className="text-slate-500 text-xs">0-70%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full w-[35%] bg-emerald-400 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-amber-400 text-xs font-bold">Yellow &mdash; Compacting in background</span>
                          <span className="text-slate-500 text-xs">70-90%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full w-[80%] bg-amber-400 rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-rose-400 text-xs font-bold">Red &mdash; Time for a fresh chat</span>
                          <span className="text-slate-500 text-xs">90-100%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div className="h-full w-[95%] bg-rose-400 rounded-full" />
                        </div>
                      </div>
                    </div>
                    <div className="pt-3 border-t border-slate-800/60">
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Even when the meter hits yellow, Foreman is actively compacting older messages to stay sharp. No crashes. No context loss.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison strip */}
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl bg-slate-900/60 border border-amber-500/20 p-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              Pro Plan Feature
            </div>
            <div className="text-5xl font-black text-amber-400 mb-2">$499<span className="text-xl text-slate-400 font-normal">/mo</span></div>
            <div className="text-white font-bold text-xl mb-6">Pro Plan</div>
            <div className="space-y-3 text-left mb-8">
              {[
                "Foreman AI - 100+ skills on the latest Claude Sonnet model, 1,000 AI messages/mo",
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
            <Link href="/beta" className="block w-full text-center px-6 py-4 rounded-xl bg-amber-400 text-slate-900 font-bold text-lg hover:bg-amber-300 transition-all duration-200">
              Get Beta Access &rarr;
            </Link>
            <p className="text-slate-500 text-xs mt-3">Beta is free for 2 years &middot; Limited to 100 builders</p>
          </div>
        </div>
      </section>

      {/* Sister AI agents */}
      <section className="py-16 px-4 border-t border-slate-800/60">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Other AI Agents in Cornerstone</div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">Foreman doesn’t work alone.</h3>
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
            <Link href="/ai-agents" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white">
              See all AI agents <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center border-t border-slate-800/60">
        <h2 className="text-4xl font-black mb-4">
          Your builders are paying consultants $5,000<br />
          <span className="text-amber-400">for custom reports.</span>
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
          We built the consultant into the software. 100+ skills. Plain English. Real construction data. Pro plan.
        </p>
        <Link href="/beta" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-amber-400 text-slate-900 font-bold text-xl hover:bg-amber-300 transition-all duration-200 shadow-xl shadow-amber-500/30">
          Get Beta Access <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
      <Footer />
    </div>
  );
}