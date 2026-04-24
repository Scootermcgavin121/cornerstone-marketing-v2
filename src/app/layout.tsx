import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ChatWidget from "@/components/ChatWidget";
import { StructuredData } from "@/components/StructuredData";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Cornerstone PM — Home Builder Software with AI",
    template: "%s | Cornerstone PM",
  },
  description:
    "The complete home builder platform with AI agents. Scheduling, sales, purchasing, design center, Blueprint AI takeoffs, and REST API — starting at $149/mo. No implementation fees.",
  keywords: [
    "home builder software",
    "construction scheduling software",
    "residential construction management",
    "NEWSTAR alternative",
    "BuilderTrend alternative",
    "CoConstruct alternative",
    "builder project management",
    "subcontractor bidding software",
    "AI construction agent",
    "blueprint takeoff software",
    "MLS listing generator",
    "homebuilder ERP",
    "construction REST API",
  ],
  authors: [{ name: "Cornerstone PM" }],
  creator: "Cornerstone PM",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Cornerstone PM — Home Builder Software with AI",
    description:
      "Scheduling, sales, purchasing, design center, Blueprint AI, Foreman AI agent, MLS listing generator, and REST API. Starting at $149/mo. Built for home builders.",
    url: "https://cornerstonepm.ai",
    siteName: "Cornerstone PM",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone PM — Home Builder Software with AI",
    description: "The complete platform for home builders. AI agents, scheduling, sales, purchasing, Blueprint AI takeoffs, REST API. Starting at $149/mo.",
    creator: "@cornerstonepm",
  },
  metadataBase: new URL("https://cornerstonepm.ai"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <StructuredData />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
