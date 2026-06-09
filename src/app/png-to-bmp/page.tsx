import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to BMP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to BMP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "png to bmp",
    "convert png to bmp",
    "png bmp converter",
    "free png to bmp",
    "batch png to bmp",
    "png to bmp online",
    "png to bmp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-bmp",
  },
  openGraph: {
    title: "PNG to BMP Converter – Free, Private & Instant",
    description:
      "Convert PNG to BMP instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/png-to-bmp",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to BMP Converter – Free, Private & Instant | PixConvert",
    description: "Convert PNG to BMP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert PNG to BMP?",
    answer:
      "PNG supports transparency and lossless compression, ideal for graphics and logos. BMP is an uncompressed Windows native format, preserving full quality but with large files. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting PNG to BMP?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert PNG to BMP as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All PNG to BMP conversion happens locally in your browser using WebAssembly. Your PNG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple PNG files, and we'll convert them all to BMP format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. PNG to BMP conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to BMP Online"
        subtitle="Transform your PNG images to BMP format instantly. Fast, free, and completely private."
        defaultOutputFormat="bmp"
        description="Upload your PNG files and convert them to BMP format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert PNG to BMP Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG to BMP FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About PNG to BMP Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">PNG to BMP Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your PNG images to BMP format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose BMP?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">BMP offers uncompressed quality, making it ideal for windows. Transform your PNG files to take advantage of BMP's unique benefits.</p>
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
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
        <a href="/bmp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to PNG</a>
        <a href="/jpg-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to BMP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding PNG to BMP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">There are specific situations where BMP format is still required. Some older software, embedded systems, and specialized applications only accept BMP files. Converting PNG to BMP ensures compatibility with these legacy systems.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">BMP stores images as uncompressed pixel data, which means no quality loss but very large file sizes. Use PNG to BMP conversion only when specifically needed, and consider keeping PNG as your primary format for most purposes.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes PNG to BMP conversion quick and private. All processing happens in your browser with no server uploads. Just upload your PNG files and download BMP versions ready for your legacy applications.</p>
      </div>
    </section>
  );
}
