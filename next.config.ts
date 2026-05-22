import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
