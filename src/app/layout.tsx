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
    "production home builder software",
    "construction scheduling software",
    "residential construction management",
    "residential builder ERP",
    "NEWSTAR alternative",
    "BuildPro alternative",
    "Buildertrend alternative",
    "CoConstruct alternative",
    "JobTread alternative",
    "MarkSystems alternative",
    "builder project management",
    "subcontractor bidding software",
    "AI construction agent",
    "blueprint takeoff software",
    "AI material takeoff",
    "MLS listing generator",
    "homebuilder ERP",
    "construction REST API",
    "options engine home builder",
    "design center software",
    "lot management software",
    "new home sales software",
    "Foreman AI",
    "Blueprint AI",
  ],
  authors: [{ name: "Cornerstone PM" }],
  creator: "Cornerstone PM",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon.png",
  },
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
    images: [
      {
        url: "https://cornerstonepm.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cornerstone PM — Home Builder Software with AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone PM — Home Builder Software with AI",
    description: "The complete platform for home builders. AI agents, scheduling, sales, purchasing, Blueprint AI takeoffs, REST API. Starting at $149/mo.",
    creator: "@cornerstonepm",
    images: ["https://cornerstonepm.ai/og-image.png"],
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
