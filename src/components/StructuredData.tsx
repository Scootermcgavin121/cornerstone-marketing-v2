export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Cornerstone PM",
        "alternateName": ["Cornerstone PM", "CornerstonePM", "cornerstonepm.ai"],
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Construction Management Software",
        "operatingSystem": "Web",
        "url": "https://cornerstonepm.ai",
        "description": "Cornerstone PM is the complete home builder software platform with native AI agents. Built for home builders of all types â€” production, custom, and semi-custom. Includes construction scheduling, sales pipeline, purchasing, design center with options engine, Blueprint AI material takeoffs, Foreman AI agent with 99+ purpose-built construction skills, MLS listing sheet generator, homeowner portal, and full REST API. Starts at $149/mo with unlimited users. No per-seat fees. No implementation cost.",
        "keywords": "home builder software, construction scheduling, residential builder ERP, NEWSTAR alternative, BuildPro alternative, Buildertrend alternative, CoConstruct alternative, JobTread alternative, AI construction agent, Blueprint AI takeoff, options engine, design center, production home builder software, subcontractor bidding, homeowner portal",
        "offers": {
          "@type": "AggregateOffer",
          "lowPrice": "149",
          "highPrice": "599",
          "priceCurrency": "USD",
          "priceSpecification": [
            { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "USD", "name": "Starter - Scheduling + Buyer Portal", "description": "Construction scheduling, Gantt charts, subcontractor confirmations, homeowner portal, permit tracker, multi-community support, up to 500 active homes, unlimited users.", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "299", "priceCurrency": "USD", "name": "Builder - Full Platform (No AI)", "description": "Adds purchasing, sales pipeline, design center, MLS listing agent. Unlimited users.", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "499", "priceCurrency": "USD", "name": "Pro - With AI Agents", "description": "Adds Foreman AI (99+ skills), Blueprint AI (25 takeoffs/mo). Up to 1,000 active homes, unlimited users.", "billingDuration": "P1M" },
            { "@type": "UnitPriceSpecification", "price": "599", "priceCurrency": "USD", "name": "Pro+ - API + Enterprise AI", "description": "Full REST API, BYOA automated bidding pipeline, Opus AI, 5,000 AI messages/mo, scoped API keys, webhooks, SSO, SLA. Unlimited users.", "billingDuration": "P1M" },
          ],
        },
        "featureList": [
          "Construction scheduling with Gantt charts and auto-cascading dependencies",
          "Subcontractor bid management and 7-wave automated bidding pipeline",
          "New home sales pipeline - lead to contract in under 60 seconds",
          "Floorplan and elevation pricing matrix",
          "Structural options engine with real-time price rollup",
          "Design center with room-by-room selections and spec level management",
          "Purchasing and budget management with cost type classifications",
          "Purchase orders, payments, and retainage tracking",
          "Blueprint AI - upload floor plan PDF, extract 130+ material scopes automatically",
          "Foreman AI agent with 99+ purpose-built construction skills",
          "MLS listing sheet auto-generated from live project data",
          "Homeowner portal with milestones and photo uploads",
          "Permit gate system and permitting pipeline tracker",
          "Vendor self-registration portal",
          "REST API with 59+ endpoints (growing) and 30+ named webhook event types (catalog growing)",
          "Multi-community and multi-floorplan management",
          "AI Support Agent - instant answers, every feature documented",
          "Warranty tracking and 2-year warranty management",
          "Unlimited users on all plans - no per-seat pricing",
          "Free 2-year beta for first 100 builders",
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
        "description": "Cornerstone PM builds AI-native software for home builders. The platform replaces legacy tools like NEWSTAR, BuildPro, and Buildertrend with modern, affordable software that includes native AI agents, an options engine, and a full REST API.",
        "sameAs": [
          "https://www.instagram.com/cornerstone_pm_ai/",
          "https://www.facebook.com/profile.php?id=61587721750398",
          "https://x.com/CornerBuildSoft",
          "https://www.linkedin.com/company/cornerstone-builder-software",
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
            "name": "What is Cornerstone PM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM is a complete home builder software platform built for home builders of all types â€” production, custom, and semi-custom. It includes construction scheduling, a sales pipeline, purchasing, design center with options engine, AI agents (Foreman AI and Blueprint AI), MLS listing generator, homeowner portal, and REST API. It starts at $149/mo with unlimited users and no implementation fees.",
            },
          },
          {
            "@type": "Question",
            "name": "How much does Cornerstone PM cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM starts at $149/mo for the Starter plan (scheduling + buyer portal, unlimited users). Builder is $299/mo (adds purchasing, sales, design center). Pro is $499/mo (adds Foreman AI with 99+ skills and Blueprint AI). Pro+ is $599/mo (adds full REST API, automated bidding pipeline, and enterprise AI). All plans include unlimited users with no per-seat fees. Beta access is free for 2 years, limited to the first 100 builders.",
            },
          },
          {
            "@type": "Question",
            "name": "What is Foreman AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Foreman AI is a purpose-built AI construction agent with 99+ skills across scheduling, sales, purchasing, design center, and document generation. Unlike generic AI tools, Foreman reads and writes your real data - creating purchase orders, updating vendor bids, generating MLS listings, analyzing your sales pipeline - using plain English commands. Available on the Pro plan ($499/mo).",
            },
          },
          {
            "@type": "Question",
            "name": "What is Blueprint AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Blueprint AI is Cornerstone PM's AI-powered floor plan reader. Upload a PDF floor plan and get 130+ material scopes and quantities extracted automatically in under 60 seconds - rooms, fixtures, structural elements, and more. Results can be imported directly into your project budget with one click. Available on the Pro plan ($499/mo).",
            },
          },
          {
            "@type": "Question",
            "name": "Does Cornerstone PM have an API?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM offers a full REST API with 59+ endpoints and growing rapidly, covering vendors, bids, homes, tasks, purchase orders, payments, options, parts catalog, design center, webhooks, and more. New endpoints ship as the platform grows. Available on the Pro+ plan ($599/mo). Full documentation is available at app.cornerstonepm.ai/developers.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Cornerstone PM a NEWSTAR or BuildPro alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM is built as a modern alternative to NEWSTAR, BuildPro, and MarkSystems for small-to-mid production home builders who cannot afford 6-figure implementation fees. Cornerstone includes the same core features - options engine, sales pipeline, purchasing, construction scheduling - plus native AI agents, starting at $149/mo with no implementation cost.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Cornerstone PM a Buildertrend alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM and Buildertrend serve different markets. Buildertrend is built for custom home builders and remodelers. Cornerstone PM is built for production home builders - those managing lot inventories, floorplan pricing matrices, pre-sale options engines, and multi-community pipelines. Cornerstone PM includes native AI agents; Buildertrend does not.",
            },
          },
          {
            "@type": "Question",
            "name": "Is Cornerstone PM a JobTread alternative?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM and JobTread serve different markets. JobTread is built for general contractors and remodelers. Cornerstone PM is built for home builders with lot management, floorplan pricing engines, pre-sale buyer workflows, and design center options - features JobTread does not offer. Cornerstone PM also includes 99+ native AI skills; JobTread's AI is a bring-your-own-ChatGPT connector.",
            },
          },
          {
            "@type": "Question",
            "name": "What is the best software for home builders?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "For small-to-mid production home builders, Cornerstone PM is purpose-built for the production builder workflow: lot and community management, floorplan pricing matrix, pre-sale options engine, design center, construction scheduling, purchasing, and AI agents. Legacy options like NEWSTAR and BuildPro require 6-figure implementation budgets. Cornerstone PM starts at $149/mo with no implementation fees.",
            },
          },
          {
            "@type": "Question",
            "name": "Does Cornerstone PM support multiple communities?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM supports multi-community management from the Starter plan. Builders can manage multiple communities and subdivisions, each with their own lot inventory, floorplans, schedule templates, and buyer pipelines.",
            },
          },
          {
            "@type": "Question",
            "name": "Does Cornerstone PM have a homeowner portal?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Cornerstone PM includes a homeowner portal on all plans. Homebuyers can view construction milestones, upload documents, see schedule progress, and access warranty information. The portal is included in the Starter plan at $149/mo.",
            },
          },
          {
            "@type": "Question",
            "name": "How is Cornerstone PM priced compared to competitors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Cornerstone PM starts at $149/mo with unlimited users and no per-seat fees. NEWSTAR and BuildPro require $25,000+ implementation budgets. Buildertrend starts at $499/mo. CoConstruct starts at $399/mo. JobTread starts at $199/mo but adds $20 per user. Cornerstone PM Pro at $499/mo includes native AI agents that no competitor offers at any price.",
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
