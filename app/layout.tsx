import type { Metadata } from "next";
import { Syne, DM_Sans, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "MarketingNow — Your Entire Marketing Stack, One AI Platform",
  description:
    "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo on pitch decks, landing pages, social media, analytics & more. Join the waitlist.",
  openGraph: {
    title: "MarketingNow — Your Entire Marketing Stack, One AI Platform",
    description:
      "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo. Join the waitlist.",
    type: "website",
    siteName: "MarketingNow",
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketingNow — Your Entire Marketing Stack, One AI Platform",
    description:
      "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo. Join the waitlist.",
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
        className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased h-dvh overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
