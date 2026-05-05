import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://cornerstonepm.ai";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/features", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/pricing", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/beta", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ai-agents", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/foreman", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/ai-takeoff", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/api-access", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/api-docs", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/construction", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/sales", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/purchasing", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/design", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/listing-sheet", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/compare", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/blog/60-second-home-sale", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/buildertrend-vs-cornerstone", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/permitting-delays-home-builders", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/spreadsheets-killing-schedule", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/subcontractor-management-home-builders", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/job-cost-tracking-home-builders", priority: 0.6, changeFrequency: "yearly" as const },
    { url: "/blog/ai-construction-management-software", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/builder-ai-software", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/homebuilding-ai", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/ai-construction-management", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ai-for-home-builders", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ai-scheduling", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ai-new-home-sales", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/ai-construction-purchasing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog/construction-purchase-order-software", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/subcontractor-scheduling-software", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/jobtread-alternative", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/permitting", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/home-builder-project-management-software", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/buildertrend-alternative", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/newstar-alternative", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/buildpro-alternative", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog/home-builder-software-buyer-guide-2026", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/migrating-from-buildertrend-to-cornerstone", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/newstar-implementation-cost-breakdown", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/blog/production-builder-vs-custom-builder-software", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map((route) => ({
    url: `${base}${route.url}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
