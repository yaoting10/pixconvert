import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "TIFF to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert TIFF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "tiff to png",
    "convert tiff to png",
    "tiff png converter",
    "free tiff to png",
    "batch tiff to png",
    "tiff to png online",
    "tiff to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/tiff-to-png",
  },
  openGraph: {
    title: "TIFF to PNG Converter – Free, Private & Instant",
    description:
      "Convert TIFF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/tiff-to-png",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIFF to PNG Converter – Free, Private & Instant | PixConvert",
    description: "Convert TIFF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert TIFF to PNG?",
    answer:
      "TIFF is the professional standard for printing and archiving, supporting layers and high bit depth. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting TIFF to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert TIFF to PNG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All TIFF to PNG conversion happens locally in your browser using WebAssembly. Your TIFF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple TIFF files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. TIFF to PNG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert TIFF to PNG Online"
        subtitle="Transform your TIFF images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your TIFF files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert TIFF to PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="TIFF to PNG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About TIFF to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">TIFF to PNG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your TIFF images to PNG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose PNG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG offers transparency support, making it ideal for graphics. Transform your TIFF files to take advantage of PNG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your TIFF files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related TIFF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/tiff-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to JPG</a>
        <a href="/tiff-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to WebP</a>
        <a href="/png-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to TIFF</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding TIFF to PNG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">TIFF is a professional image format commonly used in photography, publishing, and medical imaging. While TIFF offers excellent quality and supports layers, its large file sizes and limited web compatibility make PNG a better choice for most sharing and web use cases.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting TIFF to PNG preserves image quality while dramatically reducing file size. PNG's universal browser support makes it perfect for sharing professional images online, adding to websites, or using in applications that don't support TIFF.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert processes TIFF to PNG conversions locally in your browser. Your professional images stay on your device throughout the conversion process, ensuring confidentiality and security. Convert single files or entire batches for free.</p>
      </div>
    </section>
  );
}
