import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cornerstone PM — Construction Management Software for Home Builders",
  description:
    "Stop overpaying for bloated software. Cornerstone PM gives small-to-mid home builders scheduling, purchasing, sales, and design tools — starting at $79.99/mo. BuilderTrend starts at $499/mo.",
  keywords: [
    "home builder software",
    "construction scheduling",
    "residential construction management",
    "BuilderTrend alternative",
    "builder project management",
    "subcontractor scheduling",
  ],
  openGraph: {
    title: "Cornerstone PM — Build Smarter. Price Confidently. Sell Faster.",
    description:
      "Construction management software built for small-to-mid home builders. Starting at $79.99/mo — that's 84% less than BuilderTrend.",
    url: "https://cornerstonepm.ai",
    siteName: "Cornerstone PM",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cornerstone PM",
    description: "Construction management software built for home builders.",
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
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
