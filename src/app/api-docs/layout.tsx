import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "API Documentation — Cornerstone PM Developers",
  description:
    "59 REST endpoints covering every major entity. Vendors, bids, homes, tasks, POs, payments, options, parts, timesheets, webhooks, and more. Pro+ plan feature.",
};

export default function ApiDocsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
