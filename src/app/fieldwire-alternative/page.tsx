import { AlternativePageTemplate } from "@/components/AlternativePageTemplate";
import type { ComparisonRow, WhySwitchCard } from "@/components/AlternativePageTemplate";
import type { FAQItem } from "@/components/FAQSection";

export const metadata = {
  title: "Fieldwire Alternative for Residential Home Builders | Cornerstone PMÃ¢â€žÂ¢",
  description:
    "Fieldwire is a commercial construction field management tool. Cornerstone PMÃ¢â€žÂ¢ is the alternative for residential home builders -- AI agents (Pro $499/mo), options engine, scheduling, and 30+ webhook events from $149/mo.",
  alternates: { canonical: "https://www.cornerstonepm.ai/fieldwire-alternative" },
};

const comparisonRows: ComparisonRow[] = [
  { feature: "Built for residential home builders", cornerstone: true, competitor: false, note: "Fieldwire is built primarily for commercial GCs and large construction firms. Cornerstone PMÃ¢â€žÂ¢ is purpose-built for residential home builders -- production, semi-custom, and custom." },
  { feature: "Structural options engine (residential)", cornerstone: true, competitor: false, note: "Pre-sale floorplan options pricing -- Cornerstone Builder ($299/mo). A production builder concept, not commercial construction." },
  { feature: "Floorplan pricing matrix", cornerstone: true, competitor: false, note: "Per-community floorplan pricing for home builders. Cornerstone Builder+." },
  { feature: "Multi-community lot management", cornerstone: true, competitor: false, note: "Native multi-community pipeline for home builders." },
  { feature: "Designer Packages (64 curated by an interior designer, 7 categories)", cornerstone: true, competitor: false, note: "Packages curated by an actual interior designer -- the same playbook K. Hovnanian Homes uses. Residential buyer design center. Cornerstone Builder+." },
  { feature: "Native AI agents (Foreman AI -- 99+ skills)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro ($499/mo): Foreman AI reads AND writes construction data. Blueprint AI: PDF to takeoff in 60 seconds. Fieldwire has 'Field Intelligence AI' on Business plan ($64/user/mo) for commercial plan markup and analysis -- different scope." },
  { feature: "AI image search, vision & anti-bot web scraping", cornerstone: true, competitor: false, note: "Foreman searches product images, hosts them on CDN, reads supplier product pages with AI-powered web scraping. Plus: paste or drag-drop any screenshot and Foreman reads it with AI vision and acts on it. Cornerstone Pro feature." },
  { feature: "30+ named webhook events (catalog growing)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): 30+ named events and counting -- typed payloads, HMAC signatures, delivery logs, auto-retry. New events ship as the platform grows. Fieldwire has no named residential construction event catalog." },
  { feature: "BYOA (Bring Your Own Agent)", cornerstone: true, competitor: false, note: "Cornerstone Pro+ ($599/mo): wire Claude or ChatGPT to your live construction data." },
  { feature: "Public REST API (59+ endpoints, growing)", cornerstone: true, competitor: "limited", note: "Cornerstone Pro+: 59+ endpoints and growing rapidly, public docs. New endpoints ship as the platform grows.. Fieldwire: API access on Business Plus or custom contract only." },
  { feature: "Free database export (CSV / JSON)", cornerstone: true, competitor: false, note: "Download your full data anytime. Nightly auto-backups." },
  { feature: "Triple QR ecosystem (vendor + PM + buyer, no app install)", cornerstone: true, competitor: false, note: "Three QR codes for three audiences, no app required: (1) vendor jobsite check-in captures GPS + timestamp + weather + photo upload automatically, (2) PM/internal-builder check-in feeds GPS-validated timesheets so you can prove who was actually on-site, (3) sales model home QR for walk-in buyer lead capture Ã¢â‚¬â€ replaces paper sign-in sheets, recognizes returning visitors, instantly creates a Lead record tied to the community with email + in-app notification to the sales agent. Fieldwire ships none of these." },
  { feature: "Vendor Activity Map (Google Maps, real-time)", cornerstone: true, competitor: false, note: "Live Google Maps view of every vendor check-in across every community, 30-second refresh. See exactly who's on which jobsite right now. Filter by date or vendor. Stat cards show how many vendors are currently on-site. Fieldwire has no equivalent." },
  { feature: "Flexible PO generation (4 patterns, mix on same job)", cornerstone: true, competitor: false, note: "Cornerstone gives you four PO patterns: (1) all POs at job start, (2) partial deposit POs from earlier pipeline tasks (permit pull, contract sign, foundation pour), (3) full PO auto-generated when a task is marked complete, or (4) configurable per task / scope / community. Mix all four on the same job. Fieldwire is a plan-room platform, not a full purchasing engine." },
  { feature: "AI Migration Wizard", cornerstone: true, competitor: false, note: "AI auto-detects column mapping and runs 23 import endpoints." },
  { feature: "Homeowner portal (realtime sync + photos + messaging + ZIP export)", cornerstone: true, competitor: false, note: "Real-time portal synced with construction scheduling Ã¢â‚¬â€ when framing moves three days, buyers see it instantly. Plus: (1) builder/PM uploads job-site photos to every milestone (up to 5 photos per milestone via a camera button on the task row), (2) built-in messaging app between builder and customer with a permanent searchable record, and (3) one-click ZIP download of all job photos. Fieldwire is plan-room-first Ã¢â‚¬â€ not a residential buyer portal." },
  { feature: "Purchasing / POs / bid management", cornerstone: true, competitor: false, note: "Full purchasing workflow with automated bid pipeline." },
  { feature: "Plan management / markup", cornerstone: "limited", competitor: true, note: "Fieldwire specializes in plan room, markup, and punch list management for commercial projects. Cornerstone has basic plan storage." },
  { feature: "Punch lists (commercial-grade)", cornerstone: "limited", competitor: true, note: "Fieldwire's punch list tools are purpose-built for commercial GC closeout workflows." },
  { feature: "Pricing model", cornerstone: "Flat, unlimited users", competitor: "Per user / month", note: "Fieldwire: $0 (Basic, up to 5 users/3 projects), $39/user/mo (Pro annual), $64/user/mo (Business), $89/user/mo (Business Plus). Cornerstone: flat at every tier, unlimited users from $149. More importantly: Fieldwire doesn't ship a residential options engine, buyer design center, multi-community pipelines, or action-taking AI at any tier." },
  { feature: "Cornerstone tiers (flat, unlimited users)", cornerstone: "$149 / $299 / $499 / $599", competitor: "--", note: "Starter ($149): scheduling, permits, homeowner portal. Builder ($299): adds sales pipeline, purchasing, design center with options engine and designer packages. Pro ($499): adds Foreman AI + Blueprint AI. Pro+ ($599): adds REST API, BYOA, 30+ named webhook events, 7-wave bidding." },
];

const whySwitchCards: WhySwitchCard[] = [
  { title: "Residential home builder workflows", desc: "Lot management, floorplan pricing, structural options, buyer design center, pre-sale pipeline, draw schedules (Builder $299/mo) -- home-builder concepts that don't exist in Fieldwire's commercial-focused platform." },
  { title: "AI agents native -- Pro $499/mo", desc: "Foreman AI reads AND writes your data. Blueprint AI converts floor plans to takeoffs. AI image search, vision, anti-bot web scraping, per-user memory. Commercial plan tools have nothing like this." },
  { title: "Full PM platform", desc: "Scheduling (Starter $149), purchasing, bid management, homeowner portal, options engine, multi-community pipeline (Builder $299) -- all in one residential home-builder platform, not a commercial field tool." },
];

const faqItems: FAQItem[] = [
  {
    q: "Is Fieldwire a good fit for residential home builders?",
    a: "Fieldwire is primarily built for commercial GCs who need plan room management, RFI tracking, punch lists, and field task management for large commercial projects. Residential home builders have different needs: pre-sale design centers, structural options engines, floorplan pricing matrices, lot management, and draw schedules. These aren't Fieldwire's strengths.",
  },
  {
    q: "What's the best Fieldwire alternative for residential home builders?",
    a: "Cornerstone PMÃ¢â€žÂ¢ is purpose-built for residential home builders. It includes scheduling (Starter $149/mo), purchasing, bid management, homeowner portal, structural options engine (Builder $299/mo), designer packages curated by an actual interior designer, native AI agents (Foreman AI 99+ skills on Pro $499/mo, Blueprint AI), 30+ named webhook events (Pro+), and a public REST API -- all built for residential workflows.",
  },
  {
    q: "Does Fieldwire have AI features?",
    a: "Fieldwire includes 'Field Intelligence AI' on their Business plan ($64/user/month) for commercial plan management -- markup analysis, submittal extraction, and plan comparison. Cornerstone's Foreman AI (Pro $499/mo) is a native agent with 99+ skills that takes real construction management actions: creates POs, updates design options, generates SOWs, runs bid comparisons, and analyzes screenshots with AI vision.",
  },
  {
    q: "Can I migrate from Fieldwire to Cornerstone PMÃ¢â€žÂ¢?",
    a: "Yes. The AI Migration Wizard reads your Fieldwire export, auto-detects column mapping, and runs 23 import endpoints. Most migrations complete in under a day.",
  },
  {
    q: "Does Cornerstone PMÃ¢â€žÂ¢ have plan management like Fieldwire?",
    a: "Cornerstone PMÃ¢â€žÂ¢ has basic plan storage and document management. For commercial-grade plan room features (markup, issue tracking, sheet comparison, RFI coordination on large commercial drawings), Fieldwire is stronger. For residential builders who need to share floor plans with vendors and buyers, Cornerstone's integrated document management handles it.",
  },
  {
    q: "What does $149/mo Cornerstone Starter include?",
    a: "Starter ($149/mo) includes construction scheduling, subcontractor assignment, permits pipeline, homeowner progress portal, and the AI Support Agent -- unlimited users. Options engine and design center are on Builder ($299/mo). Foreman AI + Blueprint AI are on Pro ($499/mo). REST API + BYOA are on Pro+ ($599/mo).",
  },
  {
    q: "Does Cornerstone PMÃ¢â€žÂ¢ have a free trial?",
    a: "Yes. The 2-year free beta is open to the first 100 home builders -- no credit card, no contract, no implementation fee.",
  },
];

export default function FieldwireAlternativePage() {
  return (
    <AlternativePageTemplate
      competitorName="Fieldwire"
      badgeLabel="Fieldwire Alternative -- Residential Builders"
      heroLine1="Fieldwire is for commercial GCs."
      heroLine2="You build homes."
      accentColor="rose"
      heroParagraph="Fieldwire is a commercial construction field management and plan room tool. Cornerstone PMÃ¢â€žÂ¢ is the Fieldwire alternative for residential home builders -- structural options engine (Builder $299/mo), floorplan pricing, 99+ AI skills (Pro $499/mo), and multi-community management from $149/mo."
      secondaryCTA={{ text: "See full comparison", href: "/compare" }}
      comparisonSubtitle="Fieldwire vs Cornerstone PMÃ¢â€žÂ¢ -- commercial field tool vs. residential home-builder platform."
      comparisonRows={comparisonRows}
      trademarkName="Fieldwire"
      whySwitchHeadline="Why residential builders choose Cornerstone PMÃ¢â€žÂ¢ over Fieldwire"
      whySwitchCards={whySwitchCards}
      honestAngle="If you're a commercial GC who needs plan room management, formal RFI tracking, and punch lists for large commercial projects, Fieldwire is a solid tool. This page is for residential home builders who found Fieldwire through a search -- you need residential-native software, and Cornerstone PMÃ¢â€žÂ¢ is built for your workflows."
      showMigrationCTA={true}
      migrationHeadline="Moving from Fieldwire? Bring your data."
      migrationDesc="Export your Fieldwire data, drop it in our wizard, and AI auto-maps contacts, vendors, and project history. Dry-run before you commit."
      faqTitle="Fieldwire Alternative FAQ"
      faqSubtitle="For residential home builders evaluating Fieldwire vs Cornerstone PMÃ¢â€žÂ¢."
      faqItems={faqItems}
      footerHeadline="Built for home builders, not commercial GCs."
      footerSubtext="Join the beta and get 2 years free. Residential home-builder workflows native."
      relatedPages={[
        { text: "vs Procore", href: "/procore-alternative" },
        { text: "vs Buildertrend", href: "/buildertrend-alternative" },
        { text: "vs Raken", href: "/raken-alternative" },
        { text: "All alternatives", href: "/alternatives" },
        { text: "Full comparison matrix", href: "/compare" },
      ]}
    />
  );
}
