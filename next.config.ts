import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- stylesmith.ai vanity domain -----------------------------------
      // Scooter owns stylesmith.ai (registered 2026-08-20). Until the
      // standalone StyleSmith AI™ microsite exists (P4c), every path on the
      // domain lands on the feature page on the main marketing site.
      //
      // PERMANENT (308) as of 2026-08-22 — Scooter approved flipping this from
      // the original 307 so the redirect passes link equity to /stylesmith for
      // SEO. This reverses the earlier "keep it temporary" note: the tradeoff
      // is that browsers and Google cache a 308 aggressively, so if the
      // standalone microsite (P4c) later ships ON this domain it will have to
      // be un-taught (serve a 200 here and expect a long tail of cached
      // redirects). Accepted deliberately in exchange for the SEO value now.
      //
      // Unnamed `(.*)` catch-all rather than `/:path*`: Next.js appends any
      // path param that the destination doesn't consume onto the query
      // string, which would turn stylesmith.ai/foo into
      // .../stylesmith?path=foo. The unnamed group is dropped cleanly.
      {
        source: "/(.*)",
        has: [{ type: "host", value: "stylesmith.ai" }],
        destination: "https://www.cornerstonepm.ai/stylesmith",
        permanent: true, // 308
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.stylesmith.ai" }],
        destination: "https://www.cornerstonepm.ai/stylesmith",
        permanent: true, // 308
      },
      // --- legacy path redirects (SEO 308s) ------------------------------
      {
        source: "/jobsite-presence",
        destination: "/jobsite-ai",
        permanent: true, // 308 / equivalent of 301 for SEO
      },
      {
        source: "/mitek-kova-alternative",
        destination: "/kova-alternative",
        permanent: true, // 308 / equivalent of 301 for SEO
      },
      {
        source: "/nx-alternative",
        destination: "/marksystems-alternative",
        permanent: true,
      },
      {
        source: "/constellation-alternative",
        destination: "/marksystems-alternative",
        permanent: true,
      },
      {
        source: "/mark-systems-alternative",
        destination: "/marksystems-alternative",
        permanent: true,
      },
      {
        source: "/hyphen-homefront-alternative",
        destination: "/hyphen-alternative",
        permanent: true,
      },
      {
        source: "/hyphen-buildpro-alternative",
        destination: "/buildpro-alternative",
        permanent: true,
      },
      {
        source: "/brix-alternative",
        destination: "/hyphen-alternative",
        permanent: true,
      },
      {
        source: "/buildergm-alternative",
        destination: "/hyphen-alternative",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
