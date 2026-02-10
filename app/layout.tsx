import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MarketingNow - Stop Paying for 6 Marketing Tools",
  description:
    "One AI-powered platform that replaces Slidebean, Unbounce, Hypefury, Intercom, SimilarWeb & DALL-E. Join the waitlist.",
  openGraph: {
    title: "MarketingNow - Stop Paying for 6 Marketing Tools",
    description:
      "One AI-powered platform that replaces 6 expensive marketing tools. Join the waitlist.",
    type: "website",
    siteName: "MarketingNow",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketingNow - Stop Paying for 6 Marketing Tools",
    description:
      "One AI-powered platform that replaces 6 expensive marketing tools. Join the waitlist.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
