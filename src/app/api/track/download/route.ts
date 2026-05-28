/**
 * Tracking redirect for PDF / asset downloads.
 *
 * Usage:
 *   <a href="/api/track/download?slug=agent-architecture">Download</a>
 *
 * Records a `pdf_download` lead_event row (and identifies a lead by
 * email if `?email=` is provided, e.g. when the link comes from a
 * sent email and we want to attribute the click), then 302s to the
 * real PDF path under /downloads/.
 *
 * Slugs are whitelisted to avoid open-redirect / scraping.
 */
import { NextRequest, NextResponse } from "next/server";
import { recordEvent, sql } from "@/lib/db/client";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const SLUGS: Record<string, string> = {
  "agent-architecture": "/downloads/homebuilder-ai-agent-architecture.pdf",
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug") || "";
  const target = SLUGS[slug];

  // Unknown slug — punt to home
  if (!target) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Resolve lead by ?email= (used in email-button links)
  const email = url.searchParams.get("email")?.trim().toLowerCase() || null;
  let leadId: string | null = null;
  if (email) {
    try {
      const rows = (await sql`
        SELECT id FROM marketing_leads WHERE lower(email) = ${email} LIMIT 1
      `) as { id: string }[];
      leadId = rows[0]?.id || null;
    } catch {
      // best effort; continue
    }
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || null;
  try {
    await recordEvent({
      lead_id: leadId,
      event_type: "pdf_download",
      source_page: req.headers.get("referer") || null,
      utm_source:   url.searchParams.get("utm_source"),
      utm_medium:   url.searchParams.get("utm_medium"),
      utm_campaign: url.searchParams.get("utm_campaign"),
      utm_content:  url.searchParams.get("utm_content"),
      utm_term:     url.searchParams.get("utm_term"),
      referrer:     req.headers.get("referer") || null,
      ip,
      user_agent: req.headers.get("user-agent") || null,
      metadata: { slug },
    });
  } catch (err) {
    console.error("[track/download]", err);
  }

  // 302 to the actual PDF
  return NextResponse.redirect(new URL(target, req.url), { status: 302 });
}
