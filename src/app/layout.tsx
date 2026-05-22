import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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
  title: "PixConvert — Local Image Converter | Free & Private",
  description:
    "Convert images instantly in your browser. JPG, PNG, WebP, AVIF, HEIC, GIF, BMP, TIFF. No upload needed — 100% private, free, and fast.",
  keywords: [
    "image converter",
    "jpg to png",
    "png to webp",
    "webp converter",
    "avif converter",
    "heic to jpg",
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
    title: "PixConvert — Local Image Converter | Free & Private",
    description:
      "Convert images instantly in your browser. No upload needed — 100% private, free, and fast.",
    images: [
      {
        url: "https://pixconvert.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "PixConvert — Local Image Converter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixConvert — Local Image Converter | Free & Private",
    description:
      "Convert images instantly in your browser. No upload needed — 100% private, free, and fast.",
    images: ["https://pixconvert.org/og-image.png"],
  },
  alternates: {
    canonical: "https://pixconvert.org",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-background text-on-background">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
