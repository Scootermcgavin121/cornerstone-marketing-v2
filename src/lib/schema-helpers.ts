/**
 * schema-helpers.ts
 *
 * Reusable JSON-LD builders for marketing pages.
 *
 * Why this exists: we want AI search engines (Bing AI, ChatGPT, Perplexity,
 * Gemini grounding) to cite our content with high confidence. Schema.org JSON-LD
 * is the highest-signal way to do that — it's the exact format their grounding
 * pipelines parse first.
 *
 * Design choices:
 * - One helper per page archetype (Feature, Article, Comparison, Alternative)
 * - Each returns a `<script type="application/ld+json">` element ready to drop
 *   into a page right after <Navbar />
 * - Schemas use @graph so multiple entities can coexist (e.g. SoftwareApplication
 *   + BreadcrumbList + WebPage) without polluting the global namespace
 * - Each function is parameterized so we don't repeat boilerplate
 */

const SITE_URL = "https://cornerstonepm.ai";
const SITE_NAME = "Cornerstone PM";
const ORG_NODE = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo-new.png`,
};

type Breadcrumb = { name: string; path: string };

function makeBreadcrumbList(breadcrumbs: Breadcrumb[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((bc, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: bc.name,
      item: `${SITE_URL}${bc.path}`,
    })),
  };
}

function renderJsonLd(schema: unknown) {
  return JSON.stringify(schema);
}

/**
 * For dedicated feature/AI-agent pages like /jobsite-ai, /punchlist-ai,
 * /support-ai, /listing-sheet, /ai-takeoff, /bid-import-ai, /permitting,
 * /purchasing, /design, /construction, /sales, /api-access, /api-docs.
 *
 * Each of these describes a specific Cornerstone PM feature or AI agent.
 * They get a focused SoftwareApplication block scoped to that feature,
 * with breadcrumbs and a WebPage wrapper.
 */
export function buildFeatureSchema(args: {
  pageName: string; // e.g. "Jobsite AI"
  pagePath: string; // e.g. "/jobsite-ai"
  description: string;
  applicationSubCategory: string; // e.g. "AI Construction Agent"
  featureList: string[];
  keywords: string;
  // optional: explicit pricing context. If omitted, falls back to "available with Cornerstone PM Pro plan"
  offerNote?: string;
  // optional: pin to a parent product (e.g. Foreman AI subagent → Foreman parent)
  isPartOf?: { name: string; url: string };
}): string {
  const offerNote =
    args.offerNote ||
    "Included with the Cornerstone PM platform. See pricing for plan availability.";

  return renderJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["SoftwareApplication", "Product"],
        name: args.pageName,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: args.applicationSubCategory,
        operatingSystem: "Web",
        url: `${SITE_URL}${args.pagePath}`,
        description: args.description,
        keywords: args.keywords,
        creator: ORG_NODE,
        featureList: args.featureList,
        offers: {
          "@type": "Offer",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/pricing`,
          description: offerNote,
        },
        // isPartOf uses @type CreativeWork instead of SoftwareApplication so
        // Google's structured-data validator doesn't expect a full nested
        // SoftwareApplication record (which would need applicationCategory,
        // offers, etc). CreativeWork is the schema.org parent type and
        // expresses the relationship without the strict validation.
        isPartOf: args.isPartOf
          ? {
              "@type": "CreativeWork",
              name: args.isPartOf.name,
              url: args.isPartOf.url,
            }
          : {
              "@type": "CreativeWork",
              name: SITE_NAME,
              url: SITE_URL,
            },
      },
      makeBreadcrumbList([
        { name: "Home", path: "/" },
        { name: args.pageName, path: args.pagePath },
      ]),
    ],
  });
}

/**
 * For competitor/alternative pages like /buildertrend-alternative,
 * /jobtread-alternative, /newstar-alternative.
 *
 * These are comparison landing pages. The schema describes them as
 * comparison pages with Cornerstone PM as the recommended product.
 */
export function buildAlternativeSchema(args: {
  competitorName: string; // e.g. "Buildertrend"
  pagePath: string; // e.g. "/buildertrend-alternative"
  description: string;
  cornerstoneBetterReasons: string[];
}): string {
  return renderJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: `${args.competitorName} Alternative \u2014 Cornerstone PM`,
        url: `${SITE_URL}${args.pagePath}`,
        description: args.description,
        about: {
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "BusinessApplication",
          applicationSubCategory: "Home Builder Software",
          operatingSystem: "Web",
          url: SITE_URL,
          description: `Cornerstone PM is positioned as a modern, AI-native alternative to ${args.competitorName}. Reasons builders choose Cornerstone PM over ${args.competitorName}: ${args.cornerstoneBetterReasons.join("; ")}.`,
          featureList: args.cornerstoneBetterReasons,
          offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: "149",
            highPrice: "599",
            url: `${SITE_URL}/pricing`,
          },
        },
        publisher: ORG_NODE,
      },
      makeBreadcrumbList([
        { name: "Home", path: "/" },
        { name: `${args.competitorName} Alternative`, path: args.pagePath },
      ]),
    ],
  });
}

/**
 * For blog posts. Uses BlogPosting which is the right schema.org type for
 * editorial content (vs SoftwareApplication which would be flagged as
 * mismatched and could trigger a manual action).
 */
export function buildBlogPostSchema(args: {
  title: string;
  slug: string; // e.g. "foreman-ai-100-skills"
  description: string;
  datePublished: string; // ISO date e.g. "2026-05-12"
  dateModified?: string; // ISO date
  authorName?: string; // defaults to "Cornerstone PM Team"
  // optional: which Cornerstone product the post is about — adds a mentions block
  mentionsProduct?: { name: string; url: string };
}): string {
  const dateModified = args.dateModified || args.datePublished;
  const authorName = args.authorName || `${SITE_NAME} Team`;

  return renderJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: args.title,
        description: args.description,
        url: `${SITE_URL}/blog/${args.slug}`,
        datePublished: args.datePublished,
        dateModified,
        author: {
          "@type": "Organization",
          name: authorName,
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo-new.png`,
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": `${SITE_URL}/blog/${args.slug}`,
        },
        ...(args.mentionsProduct
          ? {
              mentions: {
                "@type": "SoftwareApplication",
                name: args.mentionsProduct.name,
                url: args.mentionsProduct.url,
              },
            }
          : {}),
      },
      makeBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: args.title, path: `/blog/${args.slug}` },
      ]),
    ],
  });
}

/**
 * For the /about page. Uses AboutPage + Organization.
 */
export function buildAboutPageSchema(args: {
  description: string;
}): string {
  return renderJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        url: `${SITE_URL}/about`,
        name: `About ${SITE_NAME}`,
        description: args.description,
        mainEntity: ORG_NODE,
      },
      makeBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
    ],
  });
}

/**
 * For the /contact page. Uses ContactPage + Organization.
 */
export function buildContactPageSchema(): string {
  return renderJsonLd({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        url: `${SITE_URL}/contact`,
        name: `Contact ${SITE_NAME}`,
        mainEntity: {
          ...ORG_NODE,
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "Sales",
            url: `${SITE_URL}/contact`,
          },
        },
      },
      makeBreadcrumbList([
        { name: "Home", path: "/" },
        { name: "Contact", path: "/contact" },
      ]),
    ],
  });
}
