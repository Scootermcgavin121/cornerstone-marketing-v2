import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/vendor-register/"],
      },
    ],
    sitemap: "https://cornerstonepm.ai/sitemap.xml",
    host: "https://cornerstonepm.ai",
  };
}
