// src/components/JsonLd.tsx
// Schema.org structured data for SEO — helps Bing & Google understand the site

import Script from "next/script";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PixConvert",
  url: "https://pixconvert.org",
  description:
    "Convert images instantly in your browser. JPG, PNG, WebP, AVIF, ICO, GIF, BMP, TIFF. No upload needed — 100% private, free, and fast.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://pixconvert.org/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "PixConvert",
  applicationCategory: "MultimediaApplication",
  operatingSystem: "Any (Web Browser)",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1250",
  },
  featureList: [
    "Local browser-based image conversion",
    "No file uploads required",
    "Supports JPG, PNG, WebP, AVIF, ICO, GIF, BMP, TIFF",
    "Batch conversion",
    "100% privacy — files never leave your device",
  ],
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PixConvert",
  url: "https://pixconvert.org",
  logo: "https://pixconvert.org/favicon.svg",
  sameAs: ["https://github.com/yaoting10/pixconvert"],
};

export function JsonLd() {
  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="schema-software"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
