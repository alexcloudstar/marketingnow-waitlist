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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://marketingnow.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "MarketingNow - Your Entire Marketing Stack, One AI Platform",
    template: "%s | MarketingNow",
  },
  description:
    "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo on pitch decks, landing pages, social media, analytics & more. Join the waitlist.",
  keywords: [
    "marketing platform",
    "AI marketing",
    "marketing automation",
    "marketing tools",
    "landing page builder",
    "pitch deck creator",
    "social media management",
    "marketing analytics",
    "startup marketing",
    "all-in-one marketing",
  ],
  authors: [{ name: "MarketingNow" }],
  creator: "MarketingNow",
  publisher: "MarketingNow",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "MarketingNow",
    title: "MarketingNow - Your Entire Marketing Stack, One AI Platform",
    description:
      "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo. Join the waitlist.",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "MarketingNow - All-in-One AI Marketing Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MarketingNow - Your Entire Marketing Stack, One AI Platform",
    description:
      "Replace 6 expensive marketing tools with one AI-powered platform. Save $392/mo. Join the waitlist.",
    images: [`${baseUrl}/og-image.png`],
    creator: "@marketingnow",
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "MarketingNow",
              applicationCategory: "BusinessApplication",
              offers: {
                "@type": "Offer",
                price: "49",
                priceCurrency: "USD",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: "49",
                  priceCurrency: "USD",
                  billingPeriod: "P1M",
                },
              },
              description:
                "All-in-one AI-powered marketing platform that replaces 6 expensive tools. Create pitch decks, landing pages, social media content, and analytics.",
              operatingSystem: "Web",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "127",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${syne.variable} ${dmSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased h-dvh overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
