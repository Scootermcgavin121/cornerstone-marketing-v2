import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const submissionLog: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000;
  const maxSubmissions = 3;
  const submissions = submissionLog.get(ip) || [];
  const recent = submissions.filter((t) => now - t < window);
  submissionLog.set(ip, recent);
  return recent.length >= maxSubmissions;
}

function recordSubmission(ip: string): void {
  const submissions = submissionLog.get(ip) || [];
  submissions.push(Date.now());
  submissionLog.set(ip, submissions);
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const body = await req.json();
  const { name, email, company, homes, message, website } = body;

  if (website) return NextResponse.json({ ok: true });

  if (!name || !email || !homes) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  recordSubmission(ip);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Cornerstone PM Website" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_TO,
      replyTo: email,
      subject: `🏗️ Beta Request: ${name}${company ? ` — ${company}` : ""}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : "",
        `Homes/year: ${homes}`,
        message ? `Message:\n${message}` : "",
        `IP: ${ip}`,
        `Time: ${new Date().toISOString()}`,
      ].filter(Boolean).join("\n"),
      html: `
        <h2>🏗️ New Beta Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Homes/year:</strong> ${homes}</p>
        ${message ? `<p><strong>Message:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      `,
    });
  } catch (err) {
    console.error("Beta email send failed:", err);
  }

  return NextResponse.json({ ok: true });
}
