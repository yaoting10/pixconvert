import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "ICO to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert ICO to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "ico to png",
    "convert ico to png",
    "ico png converter",
    "free ico to png",
    "batch ico to png",
    "ico to png online",
    "ico to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/ico-to-png",
  },
  openGraph: {
    title: "ICO to PNG Converter – Free, Private & Instant",
    description:
      "Convert ICO to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/ico-to-png",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICO to PNG Converter – Free, Private & Instant | PixConvert",
    description: "Convert ICO to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert ICO to PNG?",
    answer:
      "ICO is the Windows icon format, used for favicons and application icons. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting ICO to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert ICO to PNG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All ICO to PNG conversion happens locally in your browser using WebAssembly. Your ICO files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple ICO files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. ICO to PNG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert ICO to PNG Online"
        subtitle="Transform your ICO images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your ICO files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert ICO to PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="ICO to PNG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About ICO to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">ICO to PNG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your ICO images to PNG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose PNG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG offers transparency support, making it ideal for graphics. Transform your ICO files to take advantage of PNG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your ICO files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related ICO Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/ico-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to JPG</a>
        <a href="/ico-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to WebP</a>
        <a href="/png-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to ICO</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding ICO to PNG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">ICO files are used for website favicons and Windows application icons. Converting ICO to PNG is useful when you need to use icon images in web design, graphic design projects, or applications that don't support the ICO format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PNG offers better compression than ICO and supports transparency, making it ideal for modern web and app development. Many ICO files actually contain multiple sizes of the same image, and PNG conversion gives you a clean, single-resolution image.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert converts ICO to PNG directly in your browser. No software installation, no file uploads, and complete privacy. Extract your icon images and use them as transparent PNGs in any project.</p>
      </div>
    </section>
  );
}
