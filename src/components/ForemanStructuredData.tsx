/**
 * Foreman-specific structured data — only renders on /foreman.
 * Standalone SoftwareApplication block so AI search engines (Bing AI, ChatGPT,
 * Perplexity, Gemini grounding) can cite Foreman as a discrete product with
 * its own feature list, screenshots, and pricing context — rather than burying
 * it inside the Cornerstone PM platform schema.
 */
export function ForemanStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareApplication", "Product"],
        "name": "Foreman AI",
        "alternateName": ["Foreman", "Foreman AI Agent", "Cornerstone Foreman"],
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "AI Construction Agent",
        "operatingSystem": "Web",
        "url": "https://cornerstonepm.ai/foreman",
        "description":
          "Foreman AI is a purpose-built AI construction agent with 396+ skills across 20 categories. Unlike generic chatbots, Foreman reads AND writes your real construction data — parts catalog, vendor bids, design center options, scope items, schedules, sales pipeline, purchase orders. Includes built-in memory compaction so it doesn't forget mid-session, per-user memory that learns your role and preferences, image analysis for product photos and floor plans, anti-bot web scraping for Home Depot/Ferguson/Lowe's pricing, and a 4-step product image workflow. Available on the Cornerstone PM Pro plan.",
        "keywords":
          "AI construction agent, construction AI assistant, AI for home builders, Foreman AI, construction chatbot, AI building software, AI takeoff, AI vendor bid analysis, AI scope generator, AI SOW writer, construction copilot, building AI agent, residential construction AI, AI design center, AI parts catalog, AI memory compaction, persistent AI sessions, AI image search construction, anti-bot web scraping AI",
        "creator": {
          "@type": "Organization",
          "name": "Cornerstone PM",
          "url": "https://cornerstonepm.ai",
        },
        "audience": {
          "@type": "BusinessAudience",
          "audienceType":
            "Home builders, production builders, custom builders, semi-custom builders, residential construction professionals, builder office managers, purchasing managers, sales managers, design center managers",
        },
        "offers": {
          "@type": "Offer",
          "price": "499",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "499",
            "priceCurrency": "USD",
            "billingDuration": "P1M",
            "description":
              "Foreman AI is included in the Cornerstone PM Pro plan at $499/mo. Pro+ at $599/mo adds Opus AI and 5,000 monthly AI messages.",
          },
          "url": "https://cornerstonepm.ai/pricing",
          "availability": "https://schema.org/InStock",
        },
        "featureList": [
          "396+ purpose-built construction skills across 20 categories",
          "Design Center skills (49) — bulk option creation, attribute management, spec level pricing, option class assignment",
          "Scheduling skills (32) — template creation, cascade rules, dependency editing, multi-home application",
          "Structural Options skills (27) — bonus rooms, covered patios, structural pricing, parts linkage",
          "Scope Items skills (26) — flexible scope buckets, vendor bid integration, scope-to-part mapping",
          "Option Attributes skills (23) — color/finish/style attribute groups, attribute-to-option permutations",
          "Locations and Takeoffs skills (22) — room-by-room part placement, takeoff editing, sqft calculations",
          "Parts Catalog skills (21) — search, create, bulk import, vendor pricing, retail pricing modes",
          "Sales Pipeline skills — lead tracking, contract status, task management, agent assignment",
          "Purchasing skills — purchase orders, payment tracking, retainage, vendor performance",
          "Built-in memory compaction — auto-summarizes older messages during long sessions, no context crashes",
          "Per-user memory — Foreman remembers each user across conversations (role, preferences, favorite vendors)",
          "Image analysis — paste or drag-drop product photos, screenshots, floor plans, jobsite photos",
          "Anti-bot web scraping — reads Home Depot, Ferguson, Lowe's, and other sites that block traditional scrapers",
          "4-step product image workflow — searchProductImage, downloadImage, updateOption, done",
          "Bid comparison and award workflows",
          "SOW (statement of work) generation",
          "Competitive analysis and vendor scorecards",
          "Punch list generation and management",
          "Budget reports and profitability analysis",
          "MLS listing sheet generation from live project data",
          "Real-time data writes — creates POs, updates bids, modifies designs",
          "Plain English commands — no syntax, no training, no special prompts required",
          "Per-tool timeouts and fallback messages — no silent failures",
        ],
        "screenshot":
          "https://cornerstonepm.ai/mockups/feature-sales-pipeline.jpg",
        "image": "https://cornerstonepm.ai/mockups/feature-sales-pipeline.jpg",
        "softwareRequirements":
          "Modern web browser (Chrome, Edge, Safari, Firefox). Active Cornerstone PM Pro or Pro+ subscription. No installation required.",
        // CreativeWork (parent of SoftwareApplication) avoids strict validation
        // when Google parses isPartOf as a nested SoftwareApplication record
        // missing required fields like applicationCategory and offers.
        "isPartOf": {
          "@type": "CreativeWork",
          "name": "Cornerstone PM",
          "url": "https://cornerstonepm.ai",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://cornerstonepm.ai",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Foreman AI",
            "item": "https://cornerstonepm.ai/foreman",
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
