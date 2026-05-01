// One-shot script to retrofit hero images onto existing blog posts.
// Usage: node scripts/retrofit-blog-heroes.mjs
//
// For each entry in mapping[]:
//  1. Adds  import { BlogHero } from "@/components/BlogHero";
//  2. Inserts <BlogHero src=... alt=... /> right before the post header
//     (the <div className="mb-8"> block containing the h1)
//  3. Adds openGraph.images metadata
//
// Idempotent: skips files that already import BlogHero.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");

const mapping = [
  { slug: "60-second-home-sale", image: "/blog/home-builder-sales-pipeline.png", alt: "New home sale created in under 60 seconds in the Cornerstone PM home builder sales pipeline" },
  { slug: "ai-construction-management-software", image: "/blog/foreman-ai-skills.png", alt: "Foreman AI managing residential construction with 47 skills across scheduling, sales, purchasing, and design center" },
  { slug: "builder-ai-software", image: "/blog/foreman-ai-skills.png", alt: "Builder AI software with native Foreman AI agent for residential home builders" },
  { slug: "buildertrend-vs-cornerstone", image: "/blog/migrating-from-buildertrend.png", alt: "Buildertrend vs Cornerstone PM home builder software comparison" },
  { slug: "construction-purchase-order-software", image: "/blog/purchase-order-software.png", alt: "Construction purchase order software workflow for residential home builders" },
  { slug: "design-center-home-builder", image: "/blog/design-center-software.png", alt: "Home builder design center software showing structured options and selections" },
  { slug: "homebuilding-ai", image: "/blog/foreman-ai-skills.png", alt: "Homebuilding AI agent managing live builder data across 47 construction skills" },
  { slug: "job-cost-tracking-home-builders", image: "/blog/job-cost-tracking.png", alt: "Job cost tracking dashboard for residential home builders showing area cost breakdowns" },
  { slug: "jobtread-alternative", image: "/blog/production-builder-software.png", alt: "JobTread alternative home builder software with options pricing engine for production builders" },
  { slug: "new-home-sales-pipeline", image: "/blog/home-builder-sales-pipeline.png", alt: "New home sales pipeline for production home builders with floorplan pricing matrix" },
  { slug: "permitting-delays-home-builders", image: "/blog/permitting-delays.png", alt: "Permitting pipeline software preventing permit delays for residential home builders" },
  { slug: "spreadsheets-killing-schedule", image: "/blog/spreadsheets-killing-schedule.png", alt: "Spreadsheet-based construction scheduling killing the home builder's schedule" },
  { slug: "subcontractor-management-home-builders", image: "/blog/subcontractor-management.png", alt: "Subcontractor management for home builders with vendor portal and scope item tracking" },
  { slug: "subcontractor-scheduling-software", image: "/blog/subcontractor-scheduling.png", alt: "Subcontractor scheduling software with Gantt visual timeline for production home builders" },
];

let touched = 0;
let skipped = 0;

for (const { slug, image, alt } of mapping) {
  const file = path.join(repoRoot, "src", "app", "blog", slug, "page.tsx");
  if (!fs.existsSync(file)) {
    console.error(`SKIP missing: ${slug}`);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");

  if (src.includes("BlogHero")) {
    console.log(`skip already-done: ${slug}`);
    skipped++;
    continue;
  }

  // 1. Add BlogHero import after the last existing import
  const importLine = `import { BlogHero } from "@/components/BlogHero";\n`;
  // Insert after the Navbar import (most posts have it) or after the first import
  const navbarImport = src.match(/import\s+{\s*Navbar\s*}\s+from\s+"@\/components\/Navbar";\n/);
  if (navbarImport) {
    src = src.replace(navbarImport[0], navbarImport[0] + importLine);
  } else {
    // fallback: after first import line
    src = src.replace(/(import [^\n]+;\n)/, `$1${importLine}`);
  }

  // 2. Insert BlogHero JSX before the header <div className="mb-8"> block
  // Pattern is consistent across posts: after </Link> (back to blog) there's
  // a blank line then <div className="mb-8">
  const heroJsx = `        <BlogHero src="${image}" alt="${alt.replace(/"/g, '\\"')}" />\n\n        `;
  const insertPattern = /(\n\n        )<div className="mb-8">/;
  if (insertPattern.test(src)) {
    src = src.replace(insertPattern, `\n\n${heroJsx}<div className="mb-8">`);
  } else {
    console.error(`WARN no insertion point for ${slug} — manual review needed`);
    continue;
  }

  // 3. Add openGraph.images to metadata
  // Pattern: in the metadata block, append openGraph after description
  const ogImage = {
    url: `https://www.cornerstonepm.ai${image}`,
    width: 1024,
    height: 1024,
    alt,
  };
  const ogBlock = `,\n  openGraph: {\n    images: [{ url: "${ogImage.url}", width: 1024, height: 1024, alt: "${alt.replace(/"/g, '\\"')}" }],\n  }`;
  // Find metadata description closing — naive but effective for the consistent template.
  // Looks for: description: "..." ,? \n};   -> inject ogBlock before \n};
  const metadataEndPattern = /(export const metadata[^=]*=\s*{[\s\S]*?description:\s*"[\s\S]*?"\s*,?)(\s*\n};)/;
  if (metadataEndPattern.test(src) && !src.includes("openGraph")) {
    src = src.replace(metadataEndPattern, `$1${ogBlock}$2`);
  }

  fs.writeFileSync(file, src);
  console.log(`✓ ${slug}`);
  touched++;
}

console.log(`\nTouched: ${touched}, Skipped: ${skipped}`);
