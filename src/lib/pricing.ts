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
export const API_ENDPOINT_COUNT = 150;
export const API_DEDICATED_ROUTES = 84;
export const API_SCHEMA_FORMATS = 3; // Anthropic, OpenAI function calling, OpenAPI 3.1
/**
 * Total API operations exposed to external agents — the most complete count of
 * what an external agent (Claude, ChatGPT, n8n, etc.) can actually invoke.
 * Counts dedicated RESTful routes + the generic execute surface mapped across
 * Foreman skills. This is the headline "how much can my agent do" number;
 * API_ENDPOINT_COUNT (150+) remains the route-level figure.
 */
export const API_OPERATION_COUNT = 238;

// ----------------------------------------------------------------
// Plan tier shape
// ----------------------------------------------------------------

export interface Plan {
  /** Internal id used by code; never shown to users. */
  id: "starter" | "builder" | "pro" | "proPlus" | "enterprise";
  /** Display name. */
  name: string;
  /** Monthly price (USD). 0 = custom/contact-us pricing (see customPriceLabel). */
  price: number;
  /**
   * When true, this is a custom/negotiated tier. The card shows
   * customPriceLabel instead of a dollar figure and skips annual math.
   */
  enterprise?: boolean;
  /** Text shown where the price normally renders (e.g. "$500"). */
  customPriceLabel?: string;
  /** Small suffix rendered after customPriceLabel (e.g. "/division/mo"). */
  customPriceSuffix?: string;
  /** Sub-line under the enterprise price (e.g. the volume-break explainer). */
  customPriceSubline?: string;
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
      "Punchlist AI (155/mo)",
      "MLS Listing AI (155/mo)",
      "AI Support Agent (7,750/mo org-wide) \u2014 always-on help desk",
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
      "Punchlist AI (310/mo)",
      "MLS Listing AI (310/mo)",
      "AI Support Agent (7,750/mo org-wide) \u2014 always-on help desk",
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
      "Foreman AI\u2122 \u2014 396+ skills, takes real actions (620/mo)",
      "Blueprint AI \u2014 upload plans, get 130+ scopes in 60s (155/mo)",
      "Bid Import AI \u2014 parse vendor bids from PDF (620/mo)",
      "Punchlist AI (620/mo)",
      "MLS Listing AI (620/mo)",
      "AI Support Agent (7,750/mo org-wide)",
      "3\u00d7 AI limits for first 60 days",
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
      "REST API (238 total operations \u2014 150+ endpoints) + 37+ webhooks + BYOA INCLUDED \u2014 84 dedicated RESTful routes + generic execute endpoint for all 396+ Foreman skills. 3 schema formats (Anthropic, OpenAI, OpenAPI 3.1). Claude, ChatGPT, n8n, Twilio, Bland & Retell get the same toolbox Foreman uses",
      "Foreman AI\u2122 (930/mo, Claude Sonnet 4)",
      "Blueprint AI (310/mo)",
      "Bid Import AI (1,240/mo)",
      "Punchlist AI (1,240/mo)",
      "MLS Listing AI (1,240/mo)",
      "AI Support Agent (15,500/mo org-wide)",
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
  {
    id: "enterprise",
    name: "Enterprise",
    price: 500,
    enterprise: true,
    customPriceLabel: "$500",
    customPriceSuffix: "/division/mo",
    customPriceSubline:
      "First 5 divisions $500 each, then $450/division. Every division is full Pro+.",
    description:
      "Corporate & multi-division builders. One account, every brand.",
    target: "Multi-division / multi-brand",
    badge: "CORPORATE",
    bonusBadge: "Multi-division platform",
    maxUsers: 60,
    features: [
      "Full Pro+ platform for every division — REST API, BYOA, all 396+ Foreman skills, 60 seats per division",
      "$500/division/mo for your first 5 divisions",
      "$450/division/mo for every division after that",
      "Corporate admin with cross-division access",
      "Division switcher — one login, all brands",
      "Corporate user roles (CORPORATE_ADMIN, PURCHASING, SALES & more)",
      "Granular create/delete permission toggles per entity, per division — control exactly what each division can create or delete across 17+ entity types (Floorplans, Vendors, Parts Catalog, Scopes & more)",
      "Per-entity corporate data-sync toggles — choose what each division inherits from corporate vs. manages on its own (Floorplans, Design & Structural Pricing, Parts Catalog, Spec Levels, Vendors & more)",
      "Centralized purchasing across divisions",
      "Cross-division analytics & reporting",
      "Corporate REST API with division-scoped (X-Division-Id) access",
      "Dedicated onboarding & priority support",
    ],
    notIncluded: [],
    cta: "Contact Us",
    ctaHref: "/beta",
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
    `${API_OPERATION_COUNT} total API operations for external agents — ${API_ENDPOINT_COUNT}+ REST API endpoints (${API_DEDICATED_ROUTES} dedicated routes + generic execute for all ${FOREMAN_SKILL_COUNT}+ skills) + ${WEBHOOK_EVENT_COUNT}+ named webhook events. ${API_SCHEMA_FORMATS} schema formats (Anthropic, OpenAI, OpenAPI 3.1). Claude, ChatGPT, n8n, Twilio, Bland, Retell get the same toolbox Foreman uses.`,
  inclusionLine:
    `Included with Pro+ ($599/mo). Not available on lower tiers.`,
  whyDifferentiated:
    `JobTread, Buildertrend, and CoConstruct tell you \u201Cwebhooks exist.\u201D We ship the full event catalog with typed payloads AND the full skill catalog as endpoints \u2014 your agent inherits everything Foreman can do, and grows automatically as we ship new skills.`,
} as const;
