import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to WebP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "png to webp",
    "convert png to webp",
    "png webp converter",
    "free png to webp",
    "batch png to webp",
    "png to webp online",
    "png to webp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-webp",
  },
  openGraph: {
    title: "PNG to WebP Converter – Free, Private & Instant",
    description:
      "Convert PNG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/png-to-webp",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to WebP Converter – Free, Private & Instant | PixConvert",
    description: "Convert PNG to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert PNG to WebP?",
    answer:
      "PNG supports transparency and lossless compression, ideal for graphics and logos. WebP offers 25-35% smaller files than JPG/PNG with support for transparency and animation. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting PNG to WebP?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert PNG to WEBP as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All PNG to WEBP conversion happens locally in your browser using WebAssembly. Your PNG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple PNG files, and we'll convert them all to WebP format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. PNG to WEBP conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to WebP Online"
        subtitle="Transform your PNG images to WebP format instantly. Fast, free, and completely private."
        defaultOutputFormat="webp"
        description="Upload your PNG files and convert them to WebP format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert PNG to WEBP Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG to WebP FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About PNG to WebP Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">PNG to WEBP Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your PNG images to WEBP format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose WEBP?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">WEBP offers superior compression, making it ideal for web. Transform your PNG files to take advantage of WEBP's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your PNG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related PNG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/png-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPG</a>
        <a href="/png-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to AVIF</a>
        <a href="/webp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to PNG</a>
        <a href="/jpg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to WebP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding PNG to WEBP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PNG images are perfect for graphics with transparency, but their large file sizes can slow down websites. WebP solves this problem by offering both lossless compression (like PNG) and much smaller file sizes — typically 25-35% smaller than equivalent PNG files.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">When you convert PNG to WebP, you keep transparency support while dramatically reducing file size. This makes WebP the ideal format for website logos, icons, UI elements, and any graphics where both quality and performance matter.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert's PNG to WebP converter processes everything in your browser for maximum privacy. There's no need to upload files to a server or wait in a queue. Simply upload your PNG images, choose WebP output, and download optimized files ready for your website or application.</p>
      </div>
    </section>
  );
}
