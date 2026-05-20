/**
 * IndexNow ping endpoint.
 *
 * IndexNow is a Microsoft/Bing-led protocol (also supported by Yandex, Naver,
 * Seznam, Yep) that lets us instantly notify search engines when content
 * changes \u2014 instead of waiting days or weeks for the next crawl. One ping
 * notifies every participating engine.
 *
 * Note: Google does NOT support IndexNow. This is a Bing-family-only win.
 * Google relies on its own crawler + the sitemap we submitted to GSC.
 *
 * Usage patterns:
 *
 *   POST /api/indexnow-ping
 *   Body: { urls: ["https://cornerstonepm.ai/foreman", ...] }
 *   \u2192 Pings IndexNow with the explicit URL list.
 *
 *   GET  /api/indexnow-ping?seed=1
 *   \u2192 Convenience: pulls all URLs from our sitemap and pings IndexNow with
 *     the full list. Use for initial seeding or full re-pings.
 *
 *   GET  /api/indexnow-ping
 *   \u2192 Health check. Returns the configured key and host.
 *
 * Vercel deploy hook can call this endpoint after every production deploy.
 * See deploy webhook setup notes in the repo README or session notes.
 *
 * Auth: this endpoint does NOT require auth. IndexNow itself verifies our
 * ownership via the public key file at /{key}.txt. The downside of making
 * /api/indexnow-ping public is that anyone can trigger pings, but the worst
 * case is they ping our own URLs (which IndexNow rate-limits per host) \u2014
 * no real abuse vector.
 */

const INDEXNOW_KEY = "42218b307f1bf68df1ef59a9b5026864";
const HOST = "cornerstonepm.ai";
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/IndexNow";

// Cap on URLs per ping. IndexNow allows up to 10,000 URLs per request; we
// stay well under that as a safety margin.
const MAX_URLS_PER_PING = 10000;

type PingResult = {
  ok: boolean;
  status: number;
  statusText: string;
  urlCount: number;
  endpoint: string;
  sentAt: string;
  responseBody?: string;
};

async function pingIndexNow(urls: string[]): Promise<PingResult> {
  if (urls.length === 0) {
    return {
      ok: false,
      status: 400,
      statusText: "no URLs provided",
      urlCount: 0,
      endpoint: INDEXNOW_ENDPOINT,
      sentAt: new Date().toISOString(),
    };
  }

  const capped = urls.slice(0, MAX_URLS_PER_PING);
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: capped,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  // IndexNow returns 200/202 on success with no body, or 4xx on validation
  // errors. We capture the response body if present (usually empty).
  const responseBody = await res.text().catch(() => "");

  return {
    ok: res.ok,
    status: res.status,
    statusText: res.statusText,
    urlCount: capped.length,
    endpoint: INDEXNOW_ENDPOINT,
    sentAt: new Date().toISOString(),
    responseBody: responseBody || undefined,
  };
}

/**
 * Parse our own sitemap.xml and return every <loc> URL. Used by the seed
 * convenience path. We fetch from production rather than reading the local
 * filesystem because sitemap.ts is generated dynamically by Next.js and
 * production is always the canonical source.
 */
async function fetchSitemapUrls(): Promise<string[]> {
  const sitemapUrl = `https://${HOST}/sitemap.xml`;
  const res = await fetch(sitemapUrl, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(
      `sitemap fetch failed: ${res.status} ${res.statusText} from ${sitemapUrl}`
    );
  }
  const xml = await res.text();
  // Simple regex pull \u2014 sitemap.xml is well-formed and small, no need for an
  // XML parser dependency.
  const locs = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(
    (m) => m[1].trim()
  );
  return locs;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const seed = url.searchParams.get("seed");

  if (seed === "1" || seed === "true") {
    // Manual seed: ping IndexNow with every URL in our sitemap.
    try {
      const urls = await fetchSitemapUrls();
      const result = await pingIndexNow(urls);
      return Response.json({
        action: "seed-all-sitemap-urls",
        sitemapUrlCount: urls.length,
        result,
      });
    } catch (err) {
      return Response.json(
        {
          action: "seed-all-sitemap-urls",
          error: err instanceof Error ? err.message : String(err),
        },
        { status: 500 }
      );
    }
  }

  // Health check / status.
  return Response.json({
    ok: true,
    indexnow: {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      endpoint: INDEXNOW_ENDPOINT,
    },
    usage: {
      POST: "Body: { urls: [\"<full URL>\", ...] }",
      "GET?seed=1": "Ping IndexNow with every URL from sitemap.xml",
    },
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { ok: false, error: "request body must be JSON with { urls: string[] }" },
      { status: 400 }
    );
  }

  if (
    !body ||
    typeof body !== "object" ||
    !("urls" in body) ||
    !Array.isArray((body as { urls: unknown }).urls) ||
    !(body as { urls: unknown[] }).urls.every((u) => typeof u === "string")
  ) {
    return Response.json(
      { ok: false, error: "body must be { urls: string[] }" },
      { status: 400 }
    );
  }

  const urls = (body as { urls: string[] }).urls;
  const result = await pingIndexNow(urls);
  return Response.json({ action: "ping-explicit-urls", result });
}
