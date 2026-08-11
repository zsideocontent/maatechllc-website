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
  title: "MAA Tech Agency | Your Dedicated Tech Team, Without the Cost of Hiring One",
  description:
    "MAA Tech Agency is your outsourced technology department: a dedicated PM and technical team who handle development, maintenance, integrations, and automation, so you don't have to manage it yourself.",
  keywords: [
    "outsourced technology department",
    "dedicated tech team",
    "fractional CTO",
    "AI automation agency",
    "web development agency",
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
    title: "MAA Tech Agency | Your Dedicated Tech Team, Without the Cost of Hiring One",
    description:
      "Stop managing freelancers. One technology partner who already knows your business, your stack, and where everything lives.",
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
      <body className="min-h-full flex flex-col bg-[#FAFAFC] text-slate-900">
        {children}
      </body>
    </html>
  );
}
