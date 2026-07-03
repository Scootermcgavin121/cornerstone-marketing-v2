import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Image as ImageIcon, Globe, Database, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-product-image-search.png";
const heroImageAlt =
  "AI construction product image search in Foreman AI pulling supplier images into a Cornerstone PM design option";

const blogSchema = buildBlogPostSchema({
  title:
    "Foreman AI Finds the Product, Hosts the Image, and Attaches It in One Breath",
  slug: "foreman-ai-product-image-web-scraping",
  description:
    "Foreman AI searches product images, saves them to permanent hosted storage, and reads anti-bot supplier sites like Home Depot and Ferguson. No broken image links.",
  datePublished: "2026-06-07",
});

export const metadata: Metadata = {
  title:
    "Foreman AI Finds the Product, Hosts the Image, and Attaches It in One Breath — Cornerstone PM™ Blog",
  description:
    "Foreman AI searches product images, saves them to permanent hosted storage, and reads anti-bot supplier sites like Home Depot and Ferguson. No broken image links.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-product-image-web-scraping",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
          height: 734,
        alt: heroImageAlt,
      },
    ],
  },
};

const workflowSteps = [
  {
    step: "01",
    icon: <Globe className="w-4 h-4 text-emerald-400" />,
    title: "Search the product image",
    desc: "Foreman searches by product name or model number and returns direct image URLs — no manual Googling, no downloading and re-uploading.",
    color: "emerald",
  },
  {
    step: "02",
    icon: <Database className="w-4 h-4 text-cyan-400" />,
    title: "Save to permanent hosted storage",
    desc: "The image is saved to Vercel Blob storage. The hosted URL is permanent — it won't 404 in three months when the supplier rotates their CDN.",
    color: "cyan",
  },
  {
    step: "03",
    icon: <ImageIcon className="w-4 h-4 text-violet-400" />,
    title: "Attach to the design option",
    desc: "Foreman updates the design option with the hosted image URL in one action. The image is live in your design center immediately.",
    color: "violet",
  },
  {
    step: "04",
    icon: <Zap className="w-4 h-4 text-amber-400" />,
    title: "Read the supplier page if needed",
    desc: "Need pricing or specs from Home Depot, Ferguson, or Lowe's? Foreman's AI-powered web reader bypasses anti-bot protection to pull the data directly.",
    color: "amber",
  },
];

const stepColorMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

const supplierSites = [
  "Home Depot",
  "Ferguson",
  "Lowe's",
  "Menards",
  "Floor & Decor",
  "Moen",
  "Kohler",
  "American Standard",
];

export default function ForemanAIProductImagePage() {
  return (
    <main className="bg-slate-950 text-white min-h-screen">
      <JsonLd json={blogSchema} />

      {/* ImageObject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: `https://www.cornerstonepm.ai${heroImage}`,
            description: heroImageAlt,
            creditText: "Cornerstone PM™",
          }),
        }}
      />

      <Navbar />

      <article className="max-w-3xl mx-auto px-4 pt-28 pb-24">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <Image
          src={heroImage}
          alt={heroImageAlt}
          width={1024}
          height={734}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            AI & Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Foreman AI Finds the Product, Hosts the Image, and Attaches It in One Breath
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 7, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Foreman AI runs a four-step workflow that searches for a product image by name or
            model number, saves it to permanent hosted storage, and attaches it to your design
            option — all without you touching a browser. Broken image links and manual
            upload cycles are a solved problem.
          </p>

          <p>
            Every design team has the same problem: you add an image to a design option by pasting
            a link from the supplier&apos;s website, and six months later that link is dead. The
            supplier rotated their CDN, the product was discontinued, the URL structure changed.
            Your{" "}
            <Link
              href="/design"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              design center
            </Link>{" "}
            is full of broken thumbnails and your purchasing team is re-doing work they already
            did.{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI
            </Link>{" "}
            eliminates this entirely — it searches, hosts, and attaches in one automated sequence.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What does the four-step image workflow look like?
          </h2>
          <p>
            The workflow runs through four skills in sequence. You describe the product — by name,
            model number, or both — and Foreman handles the rest:
          </p>

          {/* Workflow steps */}
          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {workflowSteps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className={`text-3xl font-black mb-2 ${stepColorMap[s.color]}`}>
                  {s.step}
                </div>
                <h3 className="font-bold text-white mb-1.5 text-base">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <p>
            The key step is the second one. Most AI tools stop at &ldquo;here is a URL.&rdquo; Foreman saves
            the image to Vercel Blob storage and hands you a hosted URL that lives under your
            account. The source URL goes stale; the hosted URL doesn&apos;t. Your design center images
            are stable because they&apos;re hosted on infrastructure you control, not borrowed from a
            supplier CDN.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why do supplier sites block normal scrapers — and how does Foreman get through?
          </h2>
          <p>
            Home Depot, Ferguson, Lowe&apos;s, and most major building supply sites actively block
            automated requests. They detect headless browsers, rate-limit API calls, and serve
            bot-detection challenges that return empty pages or CAPTCHA screens to traditional
            scrapers. If you&apos;ve ever tried to pull product pricing or specs programmatically from
            a supplier page, you&apos;ve hit this wall.
          </p>
          <p>
            Foreman AI uses an AI-powered web reader that handles anti-bot protection reliably —
            with a direct-fetch fallback for sites that don&apos;t require it. The result is that
            supplier pages which defeat traditional scrapers are readable by Foreman. You can ask
            Foreman to pull a product spec, a price, a model number, or a description from a
            supplier page and it will get the data.
          </p>
          <p>
            We keep the underlying technology deliberately unnamed in our marketing — what matters
            is the outcome: your team can ask Foreman to read a product page and get a real answer
            instead of an error or an empty response.
          </p>

          {/* Supplier sites tag cloud */}
          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-6 my-6">
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wide mb-4">
              Supplier sites Foreman can read
            </p>
            <div className="flex flex-wrap gap-2">
              {supplierSites.map((site) => (
                <span
                  key={site}
                  className="text-sm font-medium px-3 py-1.5 rounded-full border text-slate-300 bg-slate-800 border-slate-700"
                >
                  {site}
                </span>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4">
              And most other major building supply retailers. AI-powered web scraping, direct-fetch
              fallback.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this connect to the rest of the Foreman AI skill catalog?
          </h2>
          <p>
            The image search and web-reading capabilities are part of Foreman&apos;s broader 396+
            skill catalog — the same catalog that powers Bid Import AI, Blueprint AI takeoff, SOW
            generation, vendor scorecards, and profitability reports. When Foreman ships a new
            skill, it&apos;s available immediately; there&apos;s no plugin to install, no configuration
            change, and if you&apos;re on the REST API / BYOA tier, your external agents get it
            automatically too.
          </p>
          <p>
            The product image workflow specifically draws on three skills:
          </p>

          <div className="not-prose space-y-3 my-6">
            {[
              {
                name: "searchProductImage",
                desc: "Searches by product name or model number. Returns direct CDN URLs. No API key required.",
                color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
              },
              {
                name: "downloadImage",
                desc: "Saves any image URL to Vercel Blob storage. The returned hosted URL is permanent — it won't break when the source URL goes stale.",
                color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
              },
              {
                name: "fetchWebPage",
                desc: "AI-powered web reader with anti-bot bypass and direct-fetch fallback. Reads supplier pages that defeat traditional scrapers.",
                color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
              },
            ].map((skill) => (
              <div
                key={skill.name}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <code className={`text-sm font-mono font-semibold px-2 py-0.5 rounded border ${skill.color} mb-2 inline-block`}>
                  {skill.name}
                </code>
                <p className="text-slate-400 text-sm mt-1">{skill.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What was broken before — and why does it matter for design centers?
          </h2>
          <p>
            Before this workflow existed, the standard process for adding product images to a
            design center looked like this: find the product page, right-click the image, copy the
            URL, paste it into the option, and hope it stays valid. Or download the image, re-host
            it somewhere, update the option with the new URL. Both approaches require a human in
            the loop for every single product.
          </p>
          <p>
            For a production builder running 64 Designer Packages across 7 categories — each with
            multiple options, each option with at least one image — the manual overhead adds up to
            hours of tedious work per community. And it compounds when products change: new model
            year, updated finish name, discontinued SKU. Every image attached to a dead URL is
            another broken display in front of a homebuyer.
          </p>
          <p>
            Foreman&apos;s approach converts the image-management problem from a recurring manual task
            to a one-sentence instruction: &ldquo;Find the image for the Kohler Memoirs pedestal sink in
            white and add it to the Classic Bath option.&rdquo; Foreman searches, saves to permanent
            storage, and attaches. The URL it writes never breaks because it&apos;s not borrowed from
            Kohler&apos;s CDN.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-6 my-8">
            <p className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-violet-500/40 pl-4">
              &ldquo;Foreman AI doesn&apos;t just search the web — it grabs the image, hosts it, and attaches
              it to your design option in one breath. Tell it what you want; it handles the URL
              management so you don&apos;t have to.&rdquo;
            </p>
          </div>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Does Foreman remember which suppliers and products I prefer?
          </h2>
          <p>
            Yes — and this is one of the more underrated aspects of how Foreman handles product
            research. Foreman AI maintains two memory layers: per-user memory (your name, role,
            vendor preferences, communication style) and company-wide memory (recurring vendor
            relationships, preferred product lines, builder defaults). If your team consistently
            sources plumbing fixtures from Ferguson and tile from Floor &amp; Decor, Foreman learns
            that preference and applies it when it&apos;s searching — without you specifying the supplier
            every time.
          </p>
          <p>
            A superintendent who always specs Moen faucets will find that Foreman defaults to Moen
            when they ask for a kitchen faucet image, rather than returning a generic search result.
            This is the same memory architecture that powers Foreman&apos;s broader workflow intelligence
            — the AI remembers the context of how your business operates so each instruction doesn&apos;t
            need to start from scratch.
          </p>
          <p>
            For a deeper look at how Foreman&apos;s memory layers work, see the{" "}
            <Link
              href="/blog/foreman-ai-memory-construction-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI memory post
            </Link>
            {" "}— it covers the per-user and company-wide memory model in detail.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does this fit into the broader Foreman AI skill catalog?
          </h2>
          <p>
            The image and web-reading skills are part of the same 396+ skill catalog available on
            the{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI platform
            </Link>
            . Every time a new skill ships, it becomes available in Foreman immediately — and if
            you&apos;re using Cornerstone&apos;s REST API or BYOA on Pro+, it shows up in your external
            agent&apos;s tool catalog automatically. The denylist permissions model means new capabilities
            are opt-out, not opt-in.
          </p>
          <p>
            The product image workflow is also available through the MCP server — if you use Claude
            Desktop, Cursor, or Windsurf, you can configure the MCP connection in Cornerstone&apos;s
            app settings and run the image search workflow from your external AI tool without
            switching contexts. Same skills, same memory, same permanent hosted URLs — just invoked
            from wherever your team already works.
          </p>
          <p>
            For builders evaluating the full Foreman AI feature set, the{" "}
            <Link
              href="/home-builder-project-management-software"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              home builder project management software
            </Link>{" "}
            overview covers where Cornerstone PM sits relative to the field and how the AI
            capabilities compare to what competitors ship.
          </p>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to stop managing broken image links?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI searches, hosts, and attaches product images in one instruction. Part of
              the 396+ skill catalog on Cornerstone PM — available on Pro and Pro+ plans.
            </p>
            <Link
              href="/beta"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-base transition-colors"
            >
              Request Early Access <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
