import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "BMP to AVIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert BMP to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "bmp to avif",
    "convert bmp to avif",
    "bmp avif converter",
    "free bmp to avif",
    "batch bmp to avif",
    "bmp to avif online",
    "bmp to avif no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/bmp-to-avif",
  },
  openGraph: {
    title: "BMP to AVIF Converter – Free, Private & Instant",
    description:
      "Convert BMP to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/bmp-to-avif",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMP to AVIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert BMP to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert BMP to AVIF?",
    answer:
      "BMP is an uncompressed Windows native format, preserving full quality but with large files. AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting BMP to AVIF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert BMP to AVIF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All BMP to AVIF conversion happens locally in your browser using WebAssembly. Your BMP files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple BMP files, and we'll convert them all to AVIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. BMP to AVIF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert BMP to AVIF Online"
        subtitle="Transform your BMP images to AVIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="avif"
        description="Upload your BMP files and convert them to AVIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert BMP to AVIF Locally?" />
      <FAQSection faqs={converterFaqs} title="BMP to AVIF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About BMP to AVIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">BMP to AVIF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your BMP images to AVIF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose AVIF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">AVIF offers next-gen compression, making it ideal for web. Transform your BMP files to take advantage of AVIF's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your BMP files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related BMP Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/bmp-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to JPG</a>
        <a href="/bmp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to PNG</a>
        <a href="/avif-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to BMP</a>
        <a href="/jpg-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to AVIF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding BMP to AVIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">BMP is an uncompressed format that preserves perfect image quality but produces very large files. It's primarily used in legacy systems and situations where uncompressed pixel data is required.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting BMP to AVIF is a common need for photographers, designers, web developers, and anyone working with digital images. AVIF offers cutting-edge compression that outperforms all other formats. It's ideal for web developers, photographers, and anyone who wants the smallest possible files without sacrificing quality.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes BMP to AVIF conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your BMP files into the converter, select AVIF as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
