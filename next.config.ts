import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/jobsite-presence",
        destination: "/jobsite-ai",
        permanent: true, // 308 / equivalent of 301 for SEO
      },
    ];
  },
};

export default nextConfig;
