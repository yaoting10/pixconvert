import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "TIFF to AVIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert TIFF to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "tiff to avif",
    "convert tiff to avif",
    "tiff avif converter",
    "free tiff to avif",
    "batch tiff to avif",
    "tiff to avif online",
    "tiff to avif no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/tiff-to-avif",
  },
  openGraph: {
    title: "TIFF to AVIF Converter – Free, Private & Instant",
    description:
      "Convert TIFF to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/tiff-to-avif",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIFF to AVIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert TIFF to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert TIFF to AVIF?",
    answer:
      "TIFF is the professional standard for printing and archiving, supporting layers and high bit depth. AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting TIFF to AVIF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert TIFF to AVIF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All TIFF to AVIF conversion happens locally in your browser using WebAssembly. Your TIFF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple TIFF files, and we'll convert them all to AVIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. TIFF to AVIF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert TIFF to AVIF Online"
        subtitle="Transform your TIFF images to AVIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="avif"
        description="Upload your TIFF files and convert them to AVIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert TIFF to AVIF Locally?" />
      <FAQSection faqs={converterFaqs} title="TIFF to AVIF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About TIFF to AVIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">TIFF to AVIF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your TIFF images to AVIF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose AVIF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">AVIF offers next-gen compression, making it ideal for web. Transform your TIFF files to take advantage of AVIF's unique benefits.</p>
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
        <a href="/tiff-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to PNG</a>
        <a href="/avif-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to TIFF</a>
        <a href="/jpg-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to AVIF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding TIFF to AVIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">TIFF is a professional format used in photography, publishing, and printing. It supports high color depth, layers, and metadata, making it ideal for professional workflows and archival storage.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting TIFF to AVIF is a common need for photographers, designers, web developers, and anyone working with digital images. AVIF offers cutting-edge compression that outperforms all other formats. It's ideal for web developers, photographers, and anyone who wants the smallest possible files without sacrificing quality.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes TIFF to AVIF conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your TIFF files into the converter, select AVIF as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
