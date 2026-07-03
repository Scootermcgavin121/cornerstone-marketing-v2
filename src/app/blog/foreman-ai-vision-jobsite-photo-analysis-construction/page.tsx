import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowLeft, ArrowRight, Camera, FileText, Package, Zap } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { buildBlogPostSchema } from "@/lib/schema-helpers";

const heroImage = "/blog/foreman-vision.png";
const heroImageAlt =
  "Construction AI image analysis — Foreman AI reading jobsite photos, floor plans, and product images for home builders";

const blogSchema = buildBlogPostSchema({
  title:
    "Point Your Phone at a Problem: How Foreman AI Reads Jobsite Photos, Floor Plans, and Product Images",
  slug: "foreman-ai-vision-jobsite-photo-analysis-construction",
  description:
    "Foreman AI vision reads the photos you already take — floor plans, product shots, jobsite issues — and turns them into structured construction data and actions.",
  datePublished: "2026-06-24",
});

export const metadata: Metadata = {
  title:
    "Point Your Phone at a Problem: How Foreman AI Reads Jobsite Photos, Floor Plans, and Product Images — Cornerstone PM™ Blog",
  description:
    "Foreman AI vision reads the photos you already take — floor plans, product shots, jobsite issues — and turns them into structured construction data and actions.",
  alternates: {
    canonical:
      "https://www.cornerstonepm.ai/blog/foreman-ai-vision-jobsite-photo-analysis-construction",
  },
  openGraph: {
    images: [
      {
        url: `https://www.cornerstonepm.ai${heroImage}`,
        width: 1024,
          height: 494,
        alt: heroImageAlt,
      },
    ],
  },
};

const useCases = [
  {
    icon: <Camera className="w-5 h-5 text-emerald-400" />,
    title: "Jobsite condition photos",
    desc: "Snap a photo of a framing issue, a damaged fixture, or an installation question. Foreman reads the image, describes what it sees, and can log a task, flag a vendor, or draft a scope note — all from one photo.",
    color: "emerald",
  },
  {
    icon: <FileText className="w-5 h-5 text-cyan-400" />,
    title: "Floor plans and blueprints",
    desc: "Paste or drag-drop a floor plan image. Foreman reads the layout — room labels, dimensions, key annotations — and can cross-reference with scope items, open bids, or existing design options.",
    color: "cyan",
  },
  {
    icon: <Package className="w-5 h-5 text-violet-400" />,
    title: "Product spec sheets and screenshots",
    desc: "Drop in a product image, a supplier screenshot, or a spec sheet. Foreman extracts the model number, dimensions, finish, and price — then creates the design option or purchase order directly.",
    color: "violet",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    title: "Delivery receipts and packing slips",
    desc: "Photo a packing slip on a material delivery. Foreman reads the line items and can match them against open POs, flag discrepancies, and update delivery status — without a single manual keystroke.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  emerald: "text-emerald-400",
  cyan: "text-cyan-400",
  violet: "text-violet-400",
  amber: "text-amber-400",
};

export default function ForemanVisionPage() {
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
          height={494}
          priority
          className="rounded-2xl w-full h-auto mb-10"
        />

        <div className="mb-8">
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4 inline-block">
            AI &amp; Automation
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
            Point Your Phone at a Problem: How Foreman AI Reads Jobsite Photos, Floor Plans, and Product Images
          </h1>
          <div className="flex items-center gap-3 text-sm text-slate-500">
            <span>June 24, 2026</span>
            <span>&middot;</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none space-y-6 text-slate-300 leading-relaxed">

          <p className="text-xl text-slate-300 font-light">
            Foreman AI reads the photos you already take—jobsite conditions, product spec
            sheets, floor plans, delivery receipts—and turns them into structured
            construction data and real actions inside Cornerstone PM. Paste or drag-drop an image
            and Foreman analyzes the content, not just stores it.
          </p>

          <p>
            Builders are already living in photos. Every superintendent has a phone full of jobsite
            shots. Every purchasing manager has emailed a product spec sheet. Every project manager
            has a folder of floor plan PDFs. The gap is that most construction software treats these
            as dumb attachments—files to be stored, not information to be read. Your{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI agent
            </Link>{" "}
            closes that gap. Drop an image into the chat and Foreman tells you what it sees, pulls
            out the structured data, and then takes action in your Cornerstone PM account.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What kinds of images can Foreman read?
          </h2>
          <p>
            Foreman AI&apos;s vision capability uses AI image analysis to read and interpret any
            image you can paste or drag-drop into the chat. The four use cases builders reach for
            most often:
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-4 my-8">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className={`mb-3 ${colorMap[uc.color]}`}>{uc.icon}</div>
                <h3 className="font-bold text-white mb-2 text-base">{uc.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{uc.desc}</p>
              </div>
            ))}
          </div>

          <p>
            The key distinction from simple file storage: Foreman is reading the image the way a
            knowledgeable colleague would read it—looking for meaning, pulling out specifics,
            and connecting what it sees to your active jobs, options, and vendors.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Why does vision matter more in construction than in other industries?
          </h2>
          <p>
            Construction is a uniquely visual business. Decisions that in other industries happen
            over spreadsheets happen in construction over photos, drawings, and physical samples.
            A tile selection isn&apos;t a SKU number to most builders—it&apos;s a photo on a phone
            that gets texted to the superintendent and the homebuyer simultaneously.
          </p>
          <p>
            That visual-first workflow creates a constant translation problem: visual information
            has to be manually converted into structured data (option names, model numbers, vendor
            codes, scope notes) before it can live in your construction software. Every time a PM
            looks at a product image and types the model number into a purchase order, that&apos;s the
            translation tax. Foreman eliminates it. Show it the image; it does the translation.
          </p>
          <p>
            Other construction platforms have attachment fields. Some have photo galleries. What
            they don&apos;t have is an AI that reads the content of the attachment and acts on it. The
            difference isn&apos;t cosmetic—it&apos;s whether your software is passively filing photos
            or actively working with them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How does vision turn into action inside Cornerstone PM?
          </h2>
          <p>
            The vision capability is valuable on its own as an analysis tool. But what makes it a
            genuine operational advantage is that{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman reads <em>and</em> writes your data
            </Link>
            —it doesn&apos;t just return an answer, it takes the next step.
          </p>

          <div className="not-prose space-y-4 my-8">
            {[
              {
                scenario: "Product photo → design option",
                steps: [
                  "Drop a product image into Foreman chat",
                  "Foreman identifies the product: brand, model, finish, and specs",
                  "Foreman creates the design option in your Design Center with the correct name, model number, and spec level",
                  "Foreman finds or generates a permanent hosted image URL and attaches it to the option",
                ],
                color: "emerald",
              },
              {
                scenario: "Floor plan → scope cross-reference",
                steps: [
                  "Paste a floor plan image",
                  "Foreman reads the layout and identifies rooms, dimensions, and annotations",
                  "Foreman cross-references open scope items against the plan and flags gaps",
                  "You get a structured list of scope items to verify or add — no manual comparison",
                ],
                color: "cyan",
              },
              {
                scenario: "Jobsite photo → task or issue",
                steps: [
                  "Share a photo of a jobsite condition (wrong fixture installed, damaged material, unfinished work)",
                  "Foreman describes what it sees and suggests a corrective action",
                  "Foreman logs a task, drafts a vendor note, or flags the issue in the project — based on your instruction",
                  "The photo is stored as an attachment to the task, not lost in a text thread",
                ],
                color: "violet",
              },
            ].map((item) => (
              <div
                key={item.scenario}
                className="rounded-xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <p className={`text-sm font-bold mb-3 ${colorMap[item.color]}`}>
                  {item.scenario}
                </p>
                <ol className="space-y-1.5 text-slate-400 text-sm list-decimal list-inside">
                  {item.steps.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <p>
            Each of these workflows ends with a real write operation in your Cornerstone PM
            account—a new option, a flagged task, an updated PO. The vision capability is
            the input layer; Foreman&apos;s 396+ action skills are what execute the output.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            How is this different from the AI product image search feature?
          </h2>
          <p>
            Foreman has two distinct image-related capabilities and it&apos;s worth being precise about
            what each one does.
          </p>
          <p>
            The{" "}
            <Link
              href="/blog/foreman-ai-product-image-web-scraping"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              AI product image search
            </Link>{" "}
            capability works outbound: you give Foreman a product name or model number, and it
            searches the web for the image, saves it to permanent hosted storage, and attaches it
            to your design option. It solves the broken-link problem by hosting the image
            permanently rather than linking to a supplier CDN.
          </p>
          <p>
            The vision capability (what this post is about) works inbound: you give Foreman an
            image—any image you already have—and it reads and interprets the content.
            No product name required. No model number to look up. Just the image.
          </p>
          <p>
            In practice you&apos;ll often chain them: take a photo of a product in a showroom, drop it
            into Foreman, Foreman identifies the product from the image, searches for the official
            product image from the supplier, hosts it permanently, and attaches it to the option.
            The inbound vision read and the outbound image search are designed to work together.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            What competitors get wrong about construction photos
          </h2>
          <p>
            Most construction software vendors treat photo storage as a feature. “Upload and
            organize jobsite photos.” “Attach images to tasks.” “Share photos with your
            team.” These are file management features, not AI features. The photo gets stored;
            nothing reads it.
          </p>
          <p>
            Buildertrend, CoConstruct, and JobTread all have photo galleries. None of them have an
            AI that reads the content of a photo and takes action on it. This isn&apos;t a minor
            feature gap—it&apos;s a fundamentally different conception of what construction software
            should do with the visual information that builders generate every day.
          </p>
          <p>
            The industry is moving toward AI-native platforms, and vision is one of the clearest
            dividing lines. A platform that can read your photos is categorically more useful than
            one that files them.
          </p>

          <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Vision is available on Pro+—and it ships with every new Foreman skill
          </h2>
          <p>
            Foreman AI&apos;s vision capability is part of the Pro+ plan alongside the full 396+ skill
            catalog, per-user memory, company-wide memory, and REST API / BYOA access. Every time
            the Foreman skill catalog expands, vision gets more useful—because the AI that
            reads your photos gets better at connecting what it sees to the actions your account
            can take.
          </p>
          <p>
            If you&apos;re using the MCP server on Claude Desktop, Cursor, or Windsurf, vision
            capability is available through the MCP connection as well. The same Foreman agent
            that reads a jobsite photo inside Cornerstone PM can read it from your external AI
            tool—no context switching required.
          </p>
          <p>
            For a full overview of the Foreman AI skill catalog and plan availability, see the{" "}
            <Link
              href="/foreman"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              Foreman AI page
            </Link>
            . For builders evaluating the platform, the{" "}
            <Link
              href="/pricing"
              className="text-cyan-400 hover:text-cyan-300 underline underline-offset-2"
            >
              pricing page
            </Link>{" "}
            shows how Pro+ compares to Builder and Pro.
          </p>

          <div className="not-prose rounded-xl border border-slate-800 bg-slate-900/40 p-6 my-8">
            <p className="text-slate-400 text-sm italic leading-relaxed border-l-2 border-emerald-500/40 pl-4">
              “Every other construction platform files your photos. Foreman reads them. Drop
              a product image into the chat and it identifies the product, pulls the specs, and
              creates the design option. Point it at a jobsite photo and it tells you what it
              sees and logs the issue. The gap between storing a photo and acting on one is where
              the work actually happens.”
            </p>
          </div>

          <div className="mt-14 rounded-2xl border border-emerald-800/40 bg-emerald-950/20 p-8 text-center not-prose">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to put your jobsite photos to work?
            </h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              Foreman AI reads photos, floor plans, and product images — then takes action inside
              Cornerstone PM. Part of the 396+ skill catalog available on Pro+.
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
