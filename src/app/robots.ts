import { MetadataRoute } from "next";

/**
 * robots.txt — explicit policy for search and AI crawlers.
 *
 * AI crawlers are EXPLICITLY allowed because we WANT to be indexed by AI
 * answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews, Bing AI).
 * This is part of our Phase 1 AI agent discoverability push aligned with
 * Google Lighthouse's new agentic browsing audit.
 *
 * Allow list (full crawl):
 *   - GPTBot              (OpenAI training crawler)
 *   - OAI-SearchBot       (ChatGPT search-time fetching)
 *   - ChatGPT-User        (ChatGPT browsing on behalf of a user)
 *   - ClaudeBot           (Anthropic training crawler)
 *   - Claude-Web          (Claude search-time fetching)
 *   - Claude-User         (Claude browsing on behalf of a user)
 *   - anthropic-ai        (Anthropic generic UA)
 *   - PerplexityBot       (Perplexity index)
 *   - Perplexity-User     (Perplexity browsing on behalf of a user)
 *   - Google-Extended     (Google AI / Gemini training opt-in)
 *   - GoogleOther         (Google's R&D + AI fetchers)
 *   - Bingbot             (Microsoft / Bing AI)
 *   - Applebot            (Apple Intelligence)
 *   - Applebot-Extended   (Apple AI training opt-in)
 *   - meta-externalagent  (Meta AI agents)
 *   - cohere-ai           (Cohere training)
 *   - Bytespider          (TikTok / Doubao)
 *
 * If we ever need to deprecate a specific bot, add it as its own rule with
 * disallow: "/".
 */

const AI_CRAWLERS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-Web",
  "Claude-User",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Applebot",
  "Applebot-Extended",
  "meta-externalagent",
  "Meta-ExternalAgent",
  "FacebookBot",
  "cohere-ai",
  "Bytespider",
  "Diffbot",
  "DuckAssistBot",
  "Amazonbot",
  "YouBot",
  "Timpibot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Default policy for everyone, including standard search bots.
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/vendor-register/", "/admin/"],
      },
      // Explicit allow for AI crawlers — same rules as default, but stated
      // explicitly so it's unambiguous we WANT AI indexing. Some crawlers
      // (notably Google-Extended) only opt in to AI training on sites with
      // an explicit allow rule.
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/", "/vendor-register/", "/admin/"],
      })),
    ],
    sitemap: "https://cornerstonepm.ai/sitemap.xml",
    host: "https://cornerstonepm.ai",
  };
}
