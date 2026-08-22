import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // --- stylesmith.ai vanity domain -----------------------------------
      // Scooter owns stylesmith.ai (registered 2026-08-20). Until the
      // standalone StyleSmith AI™ microsite exists (P4c), every path on the
      // domain lands on the feature page on the main marketing site.
      //
      // TEMPORARY (307) on purpose — do NOT change to `permanent: true`.
      // A 308 would be cached by browsers and Google, and would have to be
      // un-taught when the microsite ships on this domain.
      //
      // Unnamed `(.*)` catch-all rather than `/:path*`: Next.js appends any
      // path param that the destination doesn't consume onto the query
      // string, which would turn stylesmith.ai/foo into
      // .../stylesmith?path=foo. The unnamed group is dropped cleanly.
      {
        source: "/(.*)",
        has: [{ type: "host", value: "stylesmith.ai" }],
        destination: "https://www.cornerstonepm.ai/stylesmith",
        permanent: false,
      },
      {
        source: "/(.*)",
        has: [{ type: "host", value: "www.stylesmith.ai" }],
        destination: "https://www.cornerstonepm.ai/stylesmith",
        permanent: false,
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
