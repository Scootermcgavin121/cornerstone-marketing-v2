import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const RATE_WINDOW = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

function getTransport() {
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
    }

    const body = await req.json();
    const { name, email, company, role, website, _t } = body;

    // Honeypot
    if (website) return NextResponse.json({ ok: true });

    // Time check - too fast = bot
    if (_t && Date.now() - _t < 3000) return NextResponse.json({ ok: true });

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Please enter your name and email." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const downloadUrl = "https://www.cornerstonepm.ai/downloads/homebuilder-ai-agent-architecture.pdf";
    const transport = getTransport();

    // === User-facing email (delivers the PDF) ===
    const userHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px;">
        <div style="background: linear-gradient(135deg, #064e3b 0%, #0e7490 100%); padding: 32px 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: #ffffff; margin: 0 0 8px 0; font-size: 24px; font-weight: 700;">Your Architecture Deck</h1>
          <p style="color: #d1fae5; margin: 0; font-size: 14px;">Homebuilder AI Agent Architecture — 4-page reference</p>
        </div>
        <div style="background: #ffffff; padding: 28px 24px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
          <p style="color: #0f172a; font-size: 16px; line-height: 1.55; margin: 0 0 16px 0;">
            Hey ${name.trim().split(" ")[0]} —
          </p>
          <p style="color: #1e293b; font-size: 15px; line-height: 1.6; margin: 0 0 16px 0;">
            Thanks for asking. Here's the 4-page reference architecture for an AI-native home builder operating system:
          </p>
          <ul style="color: #1e293b; font-size: 15px; line-height: 1.7; padding-left: 22px; margin: 0 0 20px 0;">
            <li><strong>Page 1</strong> — Architecture layers mapped to a real implementation</li>
            <li><strong>Page 2</strong> — The 12-agent stack (Anthropic, OpenAI, LangGraph, CrewAI, Postgres)</li>
            <li><strong>Page 3</strong> — AI voice + SMS agents (Retell, Bland.ai, Twilio) with end-to-end vendor bid scenario</li>
            <li><strong>Page 4</strong> — Memory architecture: how to build the "company brain" on Postgres + pgvector</li>
          </ul>
          <div style="text-align: center; margin: 28px 0;">
            <a href="${downloadUrl}" style="display: inline-block; background: linear-gradient(135deg, #10b981 0%, #0e7490 100%); color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 15px;">📄 Download the PDF</a>
          </div>
          <p style="color: #475569; font-size: 14px; line-height: 1.55; margin: 20px 0 12px 0;">
            Built any of this on a real platform? Curious which workflow you'd want to digital-twin first. Hit reply — happy to compare notes.
          </p>
          <p style="color: #475569; font-size: 14px; line-height: 1.55; margin: 12px 0 0 0;">
            — Scott<br>
            <span style="color: #64748b;">Cornerstone PM</span><br>
            <a href="https://www.cornerstonepm.ai" style="color: #0e7490; text-decoration: none;">cornerstonepm.ai</a>
          </p>
        </div>
        <p style="color: #94a3b8; font-size: 11px; text-align: center; margin: 16px 0 0 0;">
          You're receiving this because you requested the Homebuilder AI Agent Architecture deck at cornerstonepm.ai.
        </p>
      </div>
    `;

    // === Admin notification ===
    const adminHtml = `
      <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #0f172a; padding: 24px; border-radius: 12px;">
          <h2 style="color: #22d3ee; margin: 0 0 20px 0; font-size: 18px;">📥 Architecture Deck Lead</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Name</td><td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px; font-weight: 600;">${name.trim()}</td></tr>
            <tr><td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Email</td><td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px;"><a href="mailto:${email.trim()}" style="color: #22d3ee; text-decoration: none;">${email.trim()}</a></td></tr>
            ${company ? `<tr><td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Company</td><td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px;">${company.trim()}</td></tr>` : ""}
            ${role ? `<tr><td style="padding: 8px 12px; color: #94a3b8; font-size: 14px; white-space: nowrap; vertical-align: top;">Role</td><td style="padding: 8px 12px; color: #f1f5f9; font-size: 14px;">${role.trim()}</td></tr>` : ""}
          </table>
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #1e293b; color: #64748b; font-size: 12px;">
            Source: /agent-architecture · IP: ${ip}
          </div>
        </div>
      </div>
    `;

    if (transport) {
      // User email with PDF link
      await transport.sendMail({
        from: `"Cornerstone PM" <${process.env.SMTP_USER || "noreply@cornerstonepm.ai"}>`,
        to: email.trim(),
        replyTo: "admin@cornerstonepm.ai",
        subject: "Your Homebuilder AI Agent Architecture (4-page deck)",
        html: userHtml,
        text: `Hey ${name.trim().split(" ")[0]} —\n\nThanks for asking. Here's the 4-page reference architecture for an AI-native home builder operating system:\n\nDownload: ${downloadUrl}\n\nPage 1 — Architecture layers mapped to a real implementation\nPage 2 — The 12-agent stack (Anthropic, OpenAI, LangGraph, CrewAI, Postgres)\nPage 3 — AI voice + SMS agents (Retell, Bland.ai, Twilio) with end-to-end vendor bid scenario\nPage 4 — Memory architecture on Postgres + pgvector\n\nBuilt any of this on a real platform? Curious which workflow you'd want to digital-twin first. Hit reply — happy to compare notes.\n\n— Scott\nCornerstone PM\nhttps://www.cornerstonepm.ai`,
      });

      // Admin notification
      await transport.sendMail({
        from: `"Cornerstone PM" <${process.env.SMTP_USER || "noreply@cornerstonepm.ai"}>`,
        to: "admin@cornerstonepm.ai",
        replyTo: email.trim(),
        subject: `📥 Architecture deck — ${name.trim()}${company ? ` (${company.trim()})` : ""}`,
        html: adminHtml,
        text: `Architecture deck lead\n\nName: ${name.trim()}\nEmail: ${email.trim()}\nCompany: ${company?.trim() || "N/A"}\nRole: ${role?.trim() || "N/A"}\nSource: /agent-architecture\nIP: ${ip}`,
      });

      console.log(`[AGENT-ARCH] ✅ Sent — ${name.trim()} <${email.trim()}>`);
    } else {
      console.log(`[AGENT-ARCH] ⚠️ No SMTP — Name: ${name.trim()}, Email: ${email.trim()}`);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[AGENT-ARCH ERROR]", err);
    return NextResponse.json({ error: "Failed to send. Please try again." }, { status: 500 });
  }
}
