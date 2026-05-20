/**
 * Pricing-page structured data — only renders on /pricing.
 *
 * Gives AI search engines (Bing AI, ChatGPT, Perplexity, Gemini) and Google
 * Rich Results explicit, machine-readable pricing tiers per plan. Without this,
 * AI answers tend to garble or paraphrase pricing; with this they can cite
 * exact numbers and feature differentiators verbatim.
 */
export function PricingStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "Cornerstone PM \u2014 Home Builder Software",
        "description":
          "Complete home builder software platform with native AI agents. Construction scheduling, sales pipeline, purchasing, design center, Foreman AI (396+ skills), Blueprint AI material takeoffs, REST API. Built for production, custom, and semi-custom home builders.",
        "brand": {
          "@type": "Brand",
          "name": "Cornerstone PM",
        },
        "url": "https://cornerstonepm.ai/pricing",
        "image": "https://cornerstonepm.ai/mockups/feature-sales-pipeline.jpg",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "USD",
          "lowPrice": "149",
          "highPrice": "599",
          "offerCount": "4",
          "offers": [
            {
              "@type": "Offer",
              "name": "Starter \u2014 Scheduling + Buyer Portal",
              "price": "149",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "149",
                "priceCurrency": "USD",
                "billingDuration": "P1M",
                "unitText": "per month",
              },
              "availability": "https://schema.org/InStock",
              "url": "https://cornerstonepm.ai/pricing",
              "description":
                "Construction scheduling, Gantt charts, subcontractor confirmations, homeowner portal, permit tracker, multi-community support. Up to 500 active homes. Up to 30 users included \u2014 no per-seat fees.",
            },
            {
              "@type": "Offer",
              "name": "Builder \u2014 Full Platform (No AI)",
              "price": "299",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "299",
                "priceCurrency": "USD",
                "billingDuration": "P1M",
                "unitText": "per month",
              },
              "availability": "https://schema.org/InStock",
              "url": "https://cornerstonepm.ai/pricing",
              "description":
                "Everything in Starter plus purchasing, sales pipeline, design center with options engine, MLS listing agent. Up to 30 users \u2014 no per-seat fees.",
            },
            {
              "@type": "Offer",
              "name": "Pro \u2014 With AI Agents",
              "price": "499",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "499",
                "priceCurrency": "USD",
                "billingDuration": "P1M",
                "unitText": "per month",
              },
              "availability": "https://schema.org/InStock",
              "url": "https://cornerstonepm.ai/pricing",
              "description":
                "Everything in Builder plus Foreman AI (396+ construction skills) and Blueprint AI (25 floor plan takeoffs per month). Up to 1,000 active homes. Up to 30 users.",
            },
            {
              "@type": "Offer",
              "name": "Pro+ \u2014 API + Enterprise AI",
              "price": "599",
              "priceCurrency": "USD",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "599",
                "priceCurrency": "USD",
                "billingDuration": "P1M",
                "unitText": "per month",
              },
              "availability": "https://schema.org/InStock",
              "url": "https://cornerstonepm.ai/pricing",
              "description":
                "Everything in Pro plus full REST API access, BYOA automated bidding pipeline, Opus AI, 5,000 AI messages per month, 50 Blueprint takeoffs per month, scoped API keys, 37+ named webhook events, SSO, SLA. Up to 60 users.",
            },
          ],
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
            "name": "Pricing",
            "item": "https://cornerstonepm.ai/pricing",
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
