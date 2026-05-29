"use client";

/**
 * WebMCP imperative tool registration.
 *
 * Spec: https://github.com/webmachinelearning/webmcp
 * Chrome docs: https://developer.chrome.com/docs/ai/webmcp/imperative-api
 *
 * Registers a small catalog of site-wide tools (pricing intel + navigation
 * helpers) with the browser-resident WebMCP runtime so AI agents (Chrome's
 * built-in agent, browser extensions, etc.) can answer pricing/plan questions
 * and route the user to the right page without scraping the DOM.
 *
 * Declarative form tools (toolname / tooldescription / toolparamdescription)
 * live on the individual <form> elements in /contact, /beta, and
 * /agent-architecture — see those components.
 *
 * Notes on interpretation:
 *  - The Imperative API is currently behind a developer trial in Chrome
 *    (chromestatus 5117755740913664). When `navigator.modelContext` is
 *    unavailable (every non-Chrome-canary browser today), this component
 *    is a no-op. That's intentional — Lighthouse Agentic Browsing's
 *    "Registered WebMCP tools" audit reads them via CDP, not via UA.
 *  - We register tools once on mount and tear them down on unmount via
 *    AbortController, so client-side route changes don't double-register.
 */

import { useEffect } from "react";
import {
  PLANS,
  PLAN_BY_ID,
  COMPETITORS,
  ADDONS,
  FOREMAN_SKILL_COUNT,
  FOREMAN_SKILL_CATEGORIES,
  WEBHOOK_EVENT_COUNT,
  API_ENDPOINT_COUNT,
  API_DEDICATED_ROUTES,
  API_SCHEMA_FORMATS,
  BYOA_COPY,
} from "@/lib/pricing";

// Minimal shape of the (experimental) WebMCP imperative API. We don't ship
// the @types yet; cast at the call site so the rest of the app stays clean.
type WebMcpTool = {
  name: string;
  description: string;
  inputSchema: object;
  execute: (args: Record<string, unknown>) => Promise<string> | string;
  annotations?: {
    readOnlyHint?: boolean;
    destructiveHint?: boolean;
    idempotentHint?: boolean;
    openWorldHint?: boolean;
    untrustedContentHint?: boolean;
  };
};

type ModelContext = {
  registerTool: (
    tool: WebMcpTool,
    options?: { signal?: AbortSignal; exposedTo?: string[] }
  ) => unknown;
};

function getModelContext(): ModelContext | null {
  if (typeof window === "undefined") return null;
  const nav = window.navigator as Navigator & { modelContext?: ModelContext };
  return nav.modelContext ?? null;
}

function jsonOk(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export function WebMcpRegistry() {
  useEffect(() => {
    const mc = getModelContext();
    if (!mc) {
      // WebMCP isn't available in this browser — silently skip.
      return;
    }

    const controller = new AbortController();
    const opts = { signal: controller.signal };

    // -------------------------------------------------------------
    // get_plan_details(tierId) → structured plan info
    // -------------------------------------------------------------
    mc.registerTool(
      {
        name: "get_plan_details",
        description:
          "Get full details for one Cornerstone PM pricing tier (Starter, Builder, Pro, or Pro+). Returns price, target builder size, included features, what's excluded, max users, and CTA link.",
        inputSchema: {
          type: "object",
          properties: {
            tierId: {
              type: "string",
              enum: ["starter", "builder", "pro", "proPlus"],
              description:
                "Internal tier id. 'starter' = $149/mo Core scheduling, 'builder' = $299/mo Sales-to-construction, 'pro' = $499/mo full AI suite (most popular), 'proPlus' = $599/mo includes REST API + BYOA.",
            },
          },
          required: ["tierId"],
        },
        annotations: { readOnlyHint: true, openWorldHint: false },
        execute: async ({ tierId }) => {
          const id = String(tierId) as keyof typeof PLAN_BY_ID;
          const plan = PLAN_BY_ID[id];
          if (!plan) {
            return `Unknown tierId "${tierId}". Valid ids: starter, builder, pro, proPlus.`;
          }
          return jsonOk({
            id: plan.id,
            name: plan.name,
            monthlyPrice: plan.price,
            annualEffectiveMonthly: Math.round((plan.price * 10) / 12),
            currency: "USD",
            description: plan.description,
            target: plan.target,
            maxUsers: plan.maxUsers,
            badge: plan.badge,
            features: plan.features,
            notIncluded: plan.notIncluded,
            cta: { label: plan.cta, href: plan.ctaHref },
            highlight: plan.highlight,
          });
        },
      },
      opts
    );

    // -------------------------------------------------------------
    // compare_plans() → all plans + competitor comparison rows
    // -------------------------------------------------------------
    mc.registerTool(
      {
        name: "compare_plans",
        description:
          "Compare all Cornerstone PM plans side by side and against major competitors (Buildertrend, NEWSTAR/BuildPro/MarkSystems, JobTread). Returns plan summaries and competitor rows.",
        inputSchema: {
          type: "object",
          properties: {},
        },
        annotations: { readOnlyHint: true, openWorldHint: false },
        execute: async () => {
          return jsonOk({
            plans: PLANS.map((p) => ({
              id: p.id,
              name: p.name,
              monthlyPrice: p.price,
              target: p.target,
              maxUsers: p.maxUsers,
              badge: p.badge,
              description: p.description,
              keyIncluded: p.features.slice(0, 6),
              notIncluded: p.notIncluded,
            })),
            addons: {
              powerUserSeat: {
                label: ADDONS.powerUserSeat.label,
                monthly: ADDONS.powerUserSeat.monthly,
                appliesTo: ADDONS.powerUserSeat.appliesTo,
                description: ADDONS.powerUserSeat.description,
              },
            },
            competitors: COMPETITORS,
            byoa: BYOA_COPY,
          });
        },
      },
      opts
    );

    // -------------------------------------------------------------
    // select_plan(tierId) → navigate to that plan's CTA
    // -------------------------------------------------------------
    mc.registerTool(
      {
        name: "select_plan",
        description:
          "Pick a Cornerstone PM plan tier on the user's behalf and navigate the browser to that plan's CTA destination (beta signup for Starter/Builder/Pro, contact page for Pro+). Use this after the user has confirmed a tier choice.",
        inputSchema: {
          type: "object",
          properties: {
            tierId: {
              type: "string",
              enum: ["starter", "builder", "pro", "proPlus"],
              description: "Plan id chosen by the user.",
            },
          },
          required: ["tierId"],
        },
        annotations: {
          readOnlyHint: false,
          openWorldHint: false,
          idempotentHint: true,
        },
        execute: async ({ tierId }) => {
          const id = String(tierId) as keyof typeof PLAN_BY_ID;
          const plan = PLAN_BY_ID[id];
          if (!plan) {
            return `Unknown tierId "${tierId}". Valid ids: starter, builder, pro, proPlus.`;
          }
          if (typeof window !== "undefined") {
            window.location.href = plan.ctaHref;
          }
          return `Navigating to ${plan.name} CTA (${plan.ctaHref}). User selected ${plan.name} — $${plan.price}/mo.`;
        },
      },
      opts
    );

    // -------------------------------------------------------------
    // get_platform_stats() → headline numbers + API/webhook intel
    // -------------------------------------------------------------
    mc.registerTool(
      {
        name: "get_platform_stats",
        description:
          "Get current Cornerstone PM platform stats: Foreman AI skill count, skill categories, webhook event count, REST API endpoint count, dedicated routes, and supported schema formats. Use this when asked 'how many skills/endpoints/webhooks does Cornerstone have?'",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true, openWorldHint: false },
        execute: async () => {
          return jsonOk({
            foreman: {
              skills: FOREMAN_SKILL_COUNT,
              skillCategories: FOREMAN_SKILL_CATEGORIES,
              description:
                "Foreman AI is an in-app agent that reads AND writes data — it doesn't just chat, it takes real actions on purchasing, scheduling, design center, and more.",
            },
            api: {
              endpoints: API_ENDPOINT_COUNT,
              dedicatedRoutes: API_DEDICATED_ROUTES,
              genericExecuteCoverage: FOREMAN_SKILL_COUNT,
              schemaFormats: API_SCHEMA_FORMATS,
              schemaFormatNames: [
                "Anthropic tool format",
                "OpenAI function calling",
                "OpenAPI 3.1",
              ],
              availableOnPlan: "proPlus",
            },
            webhooks: {
              events: WEBHOOK_EVENT_COUNT,
              description:
                "Typed payloads with HMAC signatures, delivery logs, and auto-retry. Wire to Twilio/Bland/Retell for SMS/voice automations.",
            },
            byoa: BYOA_COPY,
          });
        },
      },
      opts
    );

    // -------------------------------------------------------------
    // navigate_to(section) → jump to a major page on the marketing site
    // -------------------------------------------------------------
    mc.registerTool(
      {
        name: "navigate_to",
        description:
          "Navigate the browser to a key Cornerstone PM marketing page. Use this when the user wants to learn more about a specific area.",
        inputSchema: {
          type: "object",
          properties: {
            section: {
              type: "string",
              enum: [
                "home",
                "pricing",
                "foreman",
                "api-access",
                "api-docs",
                "compare",
                "faq",
                "contact",
                "beta",
                "agent-architecture",
                "purchasing",
                "sales",
                "construction",
                "design",
              ],
              description: "Target marketing section / page.",
            },
          },
          required: ["section"],
        },
        annotations: {
          readOnlyHint: false,
          openWorldHint: false,
          idempotentHint: true,
        },
        execute: async ({ section }) => {
          const map: Record<string, string> = {
            home: "/",
            pricing: "/pricing",
            foreman: "/foreman",
            "api-access": "/api-access",
            "api-docs": "/api-docs",
            compare: "/compare",
            faq: "/faq",
            contact: "/contact",
            beta: "/beta",
            "agent-architecture": "/agent-architecture",
            purchasing: "/purchasing",
            sales: "/sales",
            construction: "/construction",
            design: "/design",
          };
          const href = map[String(section)];
          if (!href) return `Unknown section "${section}".`;
          if (typeof window !== "undefined") {
            window.location.href = href;
          }
          return `Navigating to ${href}.`;
        },
      },
      opts
    );

    return () => {
      // Tear down all registered tools when the component unmounts.
      controller.abort();
    };
  }, []);

  return null;
}

export default WebMcpRegistry;
