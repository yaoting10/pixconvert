import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "AVIF to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert AVIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "avif to png",
    "convert avif to png",
    "avif png converter",
    "free avif to png",
    "batch avif to png",
    "avif to png online",
    "avif to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/avif-to-png",
  },
  openGraph: {
    title: "AVIF to PNG Converter – Free, Private & Instant",
    description:
      "Convert AVIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/avif-to-png",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIF to PNG Converter – Free, Private & Instant | PixConvert",
    description: "Convert AVIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert AVIF to PNG?",
    answer:
      "AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting AVIF to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert AVIF to PNG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All AVIF to PNG conversion happens locally in your browser using WebAssembly. Your AVIF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple AVIF files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. AVIF to PNG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert AVIF to PNG Online"
        subtitle="Transform your AVIF images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your AVIF files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert AVIF to PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="AVIF to PNG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About AVIF to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">AVIF to PNG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your AVIF images to PNG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose PNG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG offers transparency support, making it ideal for graphics. Transform your AVIF files to take advantage of PNG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your AVIF files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related AVIF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/avif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to JPG</a>
        <a href="/avif-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to WebP</a>
        <a href="/png-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to AVIF</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding AVIF to PNG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">AVIF is one of the newest image formats, offering exceptional compression efficiency. However, its limited support in older software and browsers means you often need to convert AVIF to PNG for compatibility. PNG's universal support makes it the perfect fallback format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">When converting AVIF to PNG, you preserve image quality while gaining compatibility with virtually every image viewer, editor, and browser. PNG's lossless compression ensures no additional quality loss during conversion, and its transparency support handles any alpha channels in your AVIF files.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert's AVIF to PNG converter runs entirely in your browser using WebAssembly. This means your images are processed locally on your device with no uploads to external servers. Convert single images or entire batches with just a few clicks.</p>
      </div>
    </section>
  );
}
