export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Cornerstone PM",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://cornerstonepm.ai",
        "description": "The complete home builder platform with AI agents. Scheduling, sales pipeline, purchasing, design center, Blueprint AI material takeoffs, Foreman AI agent, MLS listing generator, and REST API.",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "149",
          "highPrice": "599",
          "priceCurrency": "USD",
          "priceSpecification": [
            { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "USD", "name": "Starter", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "299", "priceCurrency": "USD", "name": "Builder", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "499", "priceCurrency": "USD", "name": "Pro", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "599", "priceCurrency": "USD", "name": "Pro+", "billingDuration": "P1M" },
          ],
        },
        "featureList": [
          "Construction Scheduling with Gantt charts",
          "Subcontractor bid management",
          "Sales pipeline and home sale workflow",
          "Purchasing and budget management",
          "Design center with options engine",
          "Blueprint AI material takeoffs",
          "Foreman AI agent with 47 skills",
          "MLS listing sheet generator",
          "Homeowner portal",
          "REST API with 58 endpoints",
          "Permitting pipeline tracker",
        ],
        "screenshot": "https://cornerstonepm.ai/mockups/feature-sales-pipeline.jpg",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "1",
        },
      },
      {
        "@type": "Organization",
        "name": "Cornerstone PM",
        "url": "https://cornerstonepm.ai",
        "logo": "https://cornerstonepm.ai/logo-new.png",
        "sameAs": [
          "https://www.instagram.com/cornerstone_pm_ai/",
          "https://github.com/Scootermcgavin121/cornerstone-marketing-v2",
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Sales",
          "url": "https://cornerstonepm.ai/contact",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How much does Cornerstone PM cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM starts at $149/mo for the Starter plan. Builder is $299/mo, Pro is $499/mo (includes AI agents), and Pro+ is $599/mo (includes REST API and automated bidding pipeline). Beta access is free for 2 years, limited to 100 builders.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Foreman AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foreman AI is a purpose-built construction agent with 47 skills. It reads and writes your real data — parts, vendors, homes, budgets, MLS listings, bid requests — using plain English commands. Available on the Pro plan ($499/mo).",
            },
          },
          {
            "@type": "Question",
            "name": "Does Cornerstone PM have an API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM offers a full REST API with 58 endpoints covering vendors, bids, homes, tasks, purchase orders, payments, options, parts, webhooks, and more. Available on the Pro+ plan ($599/mo). Full documentation at cornerstonepm.ai/api-docs.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Cornerstone PM a NEWSTAR or BuilderTrend alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM is built as a NEWSTAR, BuildPro, and Buildertrend alternative for small-to-mid home builders. It includes an options pricing engine, sales pipeline, construction scheduling, purchasing, design center, and AI agents — without the 6-figure implementation fees.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Blueprint AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Blueprint AI is an AI-powered floor plan reader. Upload a PDF floor plan and get 130+ material scopes extracted in under 60 seconds. Results can be imported directly into your budget with one click. Available on the Pro plan.",
            },
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
