import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://www.maatechllc.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MAA Tech Agency | AI Automation, Web Development & Growth",
  description:
    "MAA Tech Agency builds the AI automations, dashboards, and systems that run underneath real businesses, websites, SEO, ad tracking, and the agents that handle the busywork in between.",
  keywords: [
    "AI automation agency",
    "AI agents for business",
    "web development agency",
    "SEO agency",
    "ad tracking dashboard",
    "MAA Tech Agency",
  ],
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "MAA Tech Agency | AI Automation, Web Development & Growth",
    description:
      "The AI automations, dashboards, and systems that run underneath real businesses. We use exactly what we sell, on our own agency, every day.",
    url: siteUrl,
    siteName: "MAA Tech Agency",
    locale: "en_US",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
