import { NextRequest, NextResponse } from "next/server";

// Rate limiting store (in-memory, resets on server restart)
const submissionLog: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
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

  // Honeypot
  if (website) {
    return NextResponse.json({ ok: true });
  }

  // Validation
  if (!name || !email || !homes) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  recordSubmission(ip);

  // In production, send email via nodemailer/SMTP
  // For now, log to console (Vercel will capture this)
  console.log("Beta request received:", {
    name,
    email,
    company,
    homes,
    message,
    ip,
    timestamp: new Date().toISOString(),
  });

  // TODO: Add nodemailer SMTP send here when SMTP_* env vars are configured
  // const transporter = nodemailer.createTransporter({ ... })
  // await transporter.sendMail({ ... })

  return NextResponse.json({ ok: true });
}
