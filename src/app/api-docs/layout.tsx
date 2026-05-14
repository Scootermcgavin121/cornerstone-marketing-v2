import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Cornerstone PM™ Developers",
  description:
    "60+ REST endpoints and growing rapidly — covering every major entity. Vendors, bids, homes, tasks, POs, payments, options, parts, timesheets, webhooks, and more. New endpoints ship as the platform grows. Pro+ plan feature.",
};

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
