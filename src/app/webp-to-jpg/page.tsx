import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "WebP to JPG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert WebP to JPG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "webp to jpg",
    "convert webp to jpg",
    "webp jpg converter",
    "free webp to jpg",
    "batch webp to jpg",
    "webp to jpg online",
    "webp to jpg no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/webp-to-jpg",
  },
  openGraph: {
    title: "WebP to JPG Converter – Free, Private & Instant",
    description:
      "Convert WebP to JPG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/webp-to-jpg",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to JPG Converter – Free, Private & Instant | PixConvert",
    description: "Convert WebP to JPG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert WebP to JPG?",
    answer:
      "WebP offers 25-35% smaller files than JPG/PNG with support for transparency and animation. JPG is the most widely used image format, offering excellent compression for photographs. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting WebP to JPG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert WEBP to JPG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All WEBP to JPG conversion happens locally in your browser using WebAssembly. Your WEBP files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple WebP files, and we'll convert them all to JPG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. WEBP to JPG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert WebP to JPG Online"
        subtitle="Transform your WebP images to JPG format instantly. Fast, free, and completely private."
        defaultOutputFormat="jpg"
        description="Upload your WebP files and convert them to JPG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert WEBP to JPG Locally?" />
      <FAQSection faqs={converterFaqs} title="WebP to JPG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About WebP to JPG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">WEBP to JPG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your WEBP images to JPG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose JPG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPG offers small file sizes, making it ideal for photos. Transform your WEBP files to take advantage of JPG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your WEBP files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related WEBP Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/webp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to PNG</a>
        <a href="/webp-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to AVIF</a>
        <a href="/jpg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to WebP</a>
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding WEBP to JPG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">While WebP offers excellent compression, not all platforms and applications support it natively. Older browsers, some social media platforms, and many desktop applications still require JPG format. Converting WebP to JPG ensures your images work everywhere.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">JPG remains the most universally compatible image format, supported by virtually every device, browser, and application. When you need maximum compatibility for sharing, printing, or archiving, JPG is the safest choice.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">With PixConvert, converting WebP to JPG is fast and private. Our browser-based tool processes your files locally using WebAssembly, so nothing gets uploaded to external servers. Just drag and drop your WebP images, adjust the quality settings if needed, and download standard JPG files that work on any platform.</p>
      </div>
    </section>
  );
}
