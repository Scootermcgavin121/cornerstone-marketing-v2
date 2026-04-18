import { NextRequest, NextResponse } from "next/server";

const submissionLog: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000;
  const maxSubmissions = 5;
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
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  }

  const body = await req.json();
  const { name, email, message, website } = body;

  if (website) return NextResponse.json({ ok: true });

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Required fields missing." }, { status: 400 });
  }

  recordSubmission(ip);

  console.log("Contact form submission:", { name, email, message, ip, timestamp: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}
