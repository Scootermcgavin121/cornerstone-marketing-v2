/**
 * Cornerstone PM pricing — single source of truth.
 *
 * Every marketing surface (PricingSection, /foreman, /pricing, /faq,
 * /api-access, alternative pages, blog posts, structured data) should
 * import from THIS file instead of hard-coding prices, plan features,
 * AI usage limits, or add-on prices.
 *
 * If you need to change a price, AI usage limit, or add-on cost,
 * change it here ONCE and let the build propagate it everywhere.
 *
 * Phase 1 (current): plans, prices, add-ons, BYOA copy.
 * Phase 2 (future): migrate webhook counts, skill counts, blueprint scope
 *   counts, and the competitor table here too.
 */

// ----------------------------------------------------------------
// Brand-wide constants worth centralizing now
// ----------------------------------------------------------------

export const FOREMAN_SKILL_COUNT = 396;
export const FOREMAN_SKILL_CATEGORIES = 20;
export const WEBHOOK_EVENT_COUNT = 37;
export const API_ENDPOINT_COUNT = 40;

// ----------------------------------------------------------------
// Plan tier shape
// ----------------------------------------------------------------

export interface Plan {
  /** Internal id used by code; never shown to users. */
  id: "starter" | "builder" | "pro" | "proPlus";
  /** Display name. */
  name: string;
  /** Monthly price (USD). */
  price: number;
  /** One-liner under the plan name. */
  description: string;
  /** Target audience ("1-10 homes/yr", etc). */
  target: string;
  /** Card top badge (e.g. "MOST POPULAR"). null = none. */
  badge: string | null;
  /** Sub-badge above the title (e.g. "Full AI suite included"). */
  bonusBadge: string | null;
  /** Max users included at this tier. */
  maxUsers: number;
  /** Included features (rendered as a green check list). */
  features: string[];
  /** Explicitly excluded features (rendered as a slate X list). */
  notIncluded: string[];
  /** CTA button text. */
  cta: string;
  /** CTA href. */
  ctaHref: string;
  /** Highlight this tier in the pricing grid (Pro is currently highlighted). */
  highlight: boolean;
}

// ----------------------------------------------------------------
// Plans (Option C: REST API + BYOA is Pro+ EXCLUSIVE.
//   No $200/mo add-on. Pro lists REST API in notIncluded.)
// ----------------------------------------------------------------

export const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    price: 149,
    description: "Core scheduling for small builders.",
    target: "1\u201310 homes/yr",
    badge: null,
    bonusBadge: null,
    maxUsers: 30,
    features: [
      "Construction Scheduling (Gantt + Task View)",
      "3-tier dependency auto-cascade",
      "17 pre-built schedule templates",
      "Subcontractor assignment & smart notifications",
      "Permitting pipeline tracker",
      "Homeowner progress portal (magic link)",
      "Customer portal with progress photos",
      "Document management",
      "Punchlist AI (150/mo)",
      "MLS Listing AI (150/mo)",
      "Up to 30 users",
    ],
    notIncluded: [
      "Purchasing & Budgets",
      "Sales Pipeline",
      "Design Center",
      "Foreman AI\u2122",
      "Blueprint AI",
      "REST API + BYOA",
    ],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    id: "builder",
    name: "Builder",
    price: 299,
    description: "Full sales-to-construction workflow.",
    target: "5\u201320 homes/yr",
    badge: null,
    bonusBadge: null,
    maxUsers: 30,
    features: [
      "Everything in Starter, plus:",
      "Purchasing module (POs, budgets, floorplans)",
      "Sales Pipeline (60-second home sale)",
      "Design Center selections & change orders",
      "Structural options with real-time pricing",
      "Budget auto-generated on home sale",
      "Full PO lifecycle (Draft \u2192 Paid)",
      "Bid management & vendor comparison",
      "Punchlist AI (300/mo)",
      "MLS Listing AI (300/mo)",
      "Up to 30 users",
      "Priority support",
    ],
    notIncluded: [
      "Foreman AI\u2122",
      "Blueprint AI",
      "Bid Import AI",
      "REST API + BYOA",
    ],
    cta: "Get Beta Access",
    ctaHref: "/beta",
    highlight: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: 499,
    description: "Everything plus the full AI suite.",
    target: "20\u201350 homes/yr",
    badge: "MOST POPULAR",
    bonusBadge: "Full AI suite included",
    maxUsers: 30,
    features: [
      "Everything in Builder, plus:",
      "Foreman AI\u2122 \u2014 396+ skills, takes real actions (600/mo)",
      "Blueprint AI \u2014 upload plans, get 130+ scopes in 60s (150/mo)",
      "Bid Import AI \u2014 parse vendor bids from PDF (600/mo)",
      "AI Support Agent (7,500/mo org-wide)",
      "3\u00d7 AI limits for first 30 days",
      "Up to 30 users",
      "Priority onboarding support",
    ],
    notIncluded: [
      "REST API + BYOA (Pro+ only)",
    ],
    cta: "Start Free Beta",
    ctaHref: "/beta",
    highlight: true,
  },
  {
    id: "proPlus",
    name: "Pro+",
    price: 599,
    description: "Volume builders. Full API. Priority everything.",
    target: "50+ homes/yr",
    badge: "FULL PLATFORM",
    bonusBadge: "REST API + BYOA included",
    maxUsers: 60,
    features: [
      "Everything in Pro, plus:",
      "REST API + 37+ webhooks + BYOA INCLUDED \u2014 every endpoint maps to one of Foreman\u2019s 396+ skills, so Claude, ChatGPT, n8n, Twilio, Bland & Retell get the same toolbox Foreman uses",
      "Foreman AI\u2122 (900/mo, Opus model)",
      "Blueprint AI (300/mo)",
      "Bid Import AI (1,200/mo)",
      "AI Support Agent (15,000/mo org-wide)",
      "60 user seats (2\u00d7 Pro)",
      "3\u00d7 AI limits for first 60 days",
      "Automated bidding pipeline",
      "Priority support & dedicated onboarding",
      "SSO & advanced permissions",
    ],
    notIncluded: [],
    cta: "Contact Us",
    ctaHref: "/contact",
    highlight: false,
  },
];

// ----------------------------------------------------------------
// Convenience lookups by id
// ----------------------------------------------------------------

export const PLAN_BY_ID = Object.fromEntries(
  PLANS.map((p) => [p.id, p])
) as Record<Plan["id"], Plan>;

// ----------------------------------------------------------------
// Add-ons (kept here for one-place edits)
// ----------------------------------------------------------------

export const ADDONS = {
  /** Power User Seat add-on \u2014 Pro & Pro+ only. */
  powerUserSeat: {
    label: "Power User Seat",
    monthly: 149,
    appliesTo: ["pro", "proPlus"] as const,
    description:
      "Elevated AI limits per seat. Pro & Pro+ only.",
  },
} as const;

// ----------------------------------------------------------------
// Competitor comparison row data (used in PricingSection)
// ----------------------------------------------------------------

export interface CompetitorRow {
  name: string;
  price: string;
  note: string;
  highlight: boolean;
}

export const COMPETITORS: CompetitorRow[] = [
  {
    name: "Cornerstone PM\u2122",
    price: "from $149/mo",
    note: "Full platform + AI agents. No implementation.",
    highlight: true,
  },
  {
    name: "BuilderTrend",
    price: "$499+/mo",
    note: "No native AI agents. Per-user fees.",
    highlight: false,
  },
  {
    name: "NEWSTAR / BuildPro / MarkSystems",
    price: "$2K\u20135K/mo",
    note: "+ $50K\u2013150K implementation",
    highlight: false,
  },
  {
    name: "JobTread",
    price: "$199 + $20/user",
    note: "No AI agents. No design center engine.",
    highlight: false,
  },
];

// ----------------------------------------------------------------
// Helpers for monthly/annual display
// ----------------------------------------------------------------

export function formatPrice(monthly: number, annual: boolean): string {
  if (annual) {
    const yearlyTotal = monthly * 10; // 2 months free
    const perMonth = Math.round(yearlyTotal / 12);
    return `$${perMonth}`;
  }
  return `$${monthly}`;
}

export function annualTotal(monthly: number): string {
  return `$${(monthly * 10).toLocaleString()}`;
}

// ----------------------------------------------------------------
// BYOA messaging building blocks (so /pricing, /api-access, /foreman,
// alternative pages, blog posts can share one phrasing)
// ----------------------------------------------------------------

export const BYOA_COPY = {
  oneLiner:
    `REST API + ${WEBHOOK_EVENT_COUNT}+ named webhook events. Every endpoint maps to one of Foreman\u2019s ${FOREMAN_SKILL_COUNT}+ skills \u2014 Claude, ChatGPT, n8n, Twilio, Bland, Retell get the same toolbox Foreman uses.`,
  inclusionLine:
    `Included with Pro+ ($599/mo). Not available on lower tiers.`,
  whyDifferentiated:
    `JobTread, Buildertrend, and CoConstruct tell you \u201Cwebhooks exist.\u201D We ship the full event catalog with typed payloads AND the full skill catalog as endpoints \u2014 your agent inherits everything Foreman can do, and grows automatically as we ship new skills.`,
} as const;
