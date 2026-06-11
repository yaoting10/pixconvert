import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnalyticsScripts } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Free Image Converter Online — Convert JPG, PNG, WebP | PixConvert",
  description:
    "Convert images online for free with PixConvert. JPG, PNG, WebP, AVIF, ICO, GIF, BMP, TIFF. No upload, no signup — 100% private, fast, and browser-based.",
  keywords: [
    "image converter",
    "jpg to png",
    "png to webp",
    "webp converter",
    "avif converter",
    "ico to png",
    "batch image converter",
    "local image conversion",
    "privacy first converter",
  ],
  authors: [{ name: "PixConvert" }],
  creator: "PixConvert",
  publisher: "PixConvert",
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
    url: "https://pixconvert.org",
    siteName: "PixConvert",
    title: "Free Image Converter Online — Convert JPG, PNG, WebP | PixConvert",
    description:
      "Convert images online for free with PixConvert. No upload, no signup — 100% private, fast, and browser-based.",
    images: [
      {
        url: "https://pixconvert.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixConvert — Free Online Image Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Image Converter Online — Convert JPG, PNG, WebP | PixConvert",
    description:
      "Convert images online for free with PixConvert. No upload, no signup — 100% private, fast, and browser-based.",
    images: ["https://pixconvert.org/og-image.png"],
  },
  alternates: {
    canonical: "https://pixconvert.org",
    languages: {
      "en-US": "https://pixconvert.org",
      "x-default": "https://pixconvert.org",
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "DMC-MPtcF83RxOReXjsnwR4Q4aGfGeySTyhSKnNd6",
    yandex: "0152456a8b78b120",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col bg-background text-on-background">
        <JsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
