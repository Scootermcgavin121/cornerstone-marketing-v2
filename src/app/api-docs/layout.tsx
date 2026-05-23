import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Cornerstone PM™ Developers",
  description:
    "150+ REST API endpoints — 84 dedicated RESTful routes plus a generic execute endpoint for all 396+ Foreman AI skills. 3 schema formats: Anthropic, OpenAI, OpenAPI 3.1. Pro+ plan feature.",
};

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
