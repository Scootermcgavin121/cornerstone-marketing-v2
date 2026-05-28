/**
 * Next.js middleware — HTTP Basic Auth gate on /admin/*.
 *
 * Credentials come from env vars (`ADMIN_USERNAME`, `ADMIN_PASSWORD`).
 * If either is missing, the route is hard-blocked with 503 so a misconfig
 * never leaves the dashboard open.
 *
 * matcher below scopes this to /admin/* so the rest of the site is
 * unaffected.
 */
import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const user = process.env.ADMIN_USERNAME;
  const pass = process.env.ADMIN_PASSWORD;

  // Missing creds → block (don't accidentally expose the dashboard).
  if (!user || !pass) {
    return new NextResponse("Admin auth not configured.", { status: 503 });
  }

  const auth = req.headers.get("authorization");
  if (auth) {
    const [scheme, b64] = auth.split(" ");
    if (scheme === "Basic" && b64) {
      try {
        const decoded = atob(b64);
        const idx = decoded.indexOf(":");
        const u = decoded.slice(0, idx);
        const p = decoded.slice(idx + 1);
        if (u === user && p === pass) {
          return NextResponse.next();
        }
      } catch {
        // fall through to 401
      }
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Cornerstone Admin", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: ["/admin/:path*"],
};
