import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to WebP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpg to webp",
    "convert jpg to webp",
    "jpg webp converter",
    "free jpg to webp",
    "batch jpg to webp",
    "jpg to webp online",
    "jpg to webp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-webp",
  },
  openGraph: {
    title: "JPG to WebP Converter – Free, Private & Instant",
    description:
      "Convert JPG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpg-to-webp",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to WebP Converter – Free, Private & Instant | PixConvert",
    description: "Convert JPG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert JPG to WebP?",
    answer:
      "JPG is the most widely used image format, offering excellent compression for photographs. WebP offers 25-35% smaller files than JPG/PNG with support for transparency and animation. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting JPG to WebP?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert JPG to WEBP as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All JPG to WEBP conversion happens locally in your browser using WebAssembly. Your JPG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple JPG files, and we'll convert them all to WebP format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. JPG to WEBP conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to WebP Online"
        subtitle="Transform your JPG images to WebP format instantly. Fast, free, and completely private."
        defaultOutputFormat="webp"
        description="Upload your JPG files and convert them to WebP format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert JPG to WEBP Locally?" />
      <FAQSection faqs={converterFaqs} title="JPG to WebP FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About JPG to WebP Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">JPG to WEBP Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your JPG images to WEBP format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose WEBP?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">WEBP offers superior compression, making it ideal for web. Transform your JPG files to take advantage of WEBP's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your JPG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related JPG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
        <a href="/jpg-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to AVIF</a>
        <a href="/webp-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to JPG</a>
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding JPG to WEBP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">WebP is Google's modern image format that provides superior compression compared to both JPG and PNG. When you convert JPG to WebP, you can achieve 25-35% smaller file sizes without losing visible quality, making it perfect for websites and apps where performance matters.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Unlike JPG, WebP supports both lossy and lossless compression, plus transparency and animation. This means a single WebP file can replace both your JPG photos and your PNG graphics, simplifying your asset pipeline while improving load times.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes JPG to WebP conversion effortless. Upload your JPG files directly in the browser, choose WebP as the output format, and get smaller, faster images in seconds. All processing happens locally — no server uploads, no waiting, and no privacy concerns.</p>
      </div>
    </section>
  );
}
