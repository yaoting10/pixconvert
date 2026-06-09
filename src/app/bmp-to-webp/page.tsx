import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "BMP to WebP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert BMP to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "bmp to webp",
    "convert bmp to webp",
    "bmp webp converter",
    "free bmp to webp",
    "batch bmp to webp",
    "bmp to webp online",
    "bmp to webp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/bmp-to-webp",
  },
  openGraph: {
    title: "BMP to WebP Converter – Free, Private & Instant",
    description:
      "Convert BMP to WebP instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/bmp-to-webp",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMP to WebP Converter – Free, Private & Instant | PixConvert",
    description: "Convert BMP to WebP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert BMP to WebP?",
    answer:
      "BMP is an uncompressed Windows native format, preserving full quality but with large files. WebP offers 25-35% smaller files than JPG/PNG with support for transparency and animation. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting BMP to WebP?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert BMP to WEBP as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All BMP to WEBP conversion happens locally in your browser using WebAssembly. Your BMP files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple BMP files, and we'll convert them all to WebP format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. BMP to WEBP conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert BMP to WebP Online"
        subtitle="Transform your BMP images to WebP format instantly. Fast, free, and completely private."
        defaultOutputFormat="webp"
        description="Upload your BMP files and convert them to WebP format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert BMP to WEBP Locally?" />
      <FAQSection faqs={converterFaqs} title="BMP to WebP FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About BMP to WebP Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">BMP to WEBP Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your BMP images to WEBP format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose WEBP?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">WEBP offers superior compression, making it ideal for web. Transform your BMP files to take advantage of WEBP's unique benefits.</p>
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
        <a href="/webp-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to BMP</a>
        <a href="/jpg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to WebP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding BMP to WEBP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">BMP is an uncompressed format that preserves perfect image quality but produces very large files. It's primarily used in legacy systems and situations where uncompressed pixel data is required.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting BMP to WEBP is a common need for photographers, designers, web developers, and anyone working with digital images. WebP delivers smaller file sizes than both JPG and PNG while maintaining excellent quality. It's the preferred format for modern websites and applications focused on performance.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes BMP to WEBP conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your BMP files into the converter, select WEBP as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
