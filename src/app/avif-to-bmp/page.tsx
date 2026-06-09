import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "AVIF to BMP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert AVIF to BMP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "avif to bmp",
    "convert avif to bmp",
    "avif bmp converter",
    "free avif to bmp",
    "batch avif to bmp",
    "avif to bmp online",
    "avif to bmp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/avif-to-bmp",
  },
  openGraph: {
    title: "AVIF to BMP Converter – Free, Private & Instant",
    description:
      "Convert AVIF to BMP instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/avif-to-bmp",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVIF to BMP Converter – Free, Private & Instant | PixConvert",
    description: "Convert AVIF to BMP instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert AVIF to BMP?",
    answer:
      "AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. BMP is an uncompressed Windows native format, preserving full quality but with large files. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting AVIF to BMP?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert AVIF to BMP as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All AVIF to BMP conversion happens locally in your browser using WebAssembly. Your AVIF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple AVIF files, and we'll convert them all to BMP format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. AVIF to BMP conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert AVIF to BMP Online"
        subtitle="Transform your AVIF images to BMP format instantly. Fast, free, and completely private."
        defaultOutputFormat="bmp"
        description="Upload your AVIF files and convert them to BMP format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert AVIF to BMP Locally?" />
      <FAQSection faqs={converterFaqs} title="AVIF to BMP FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About AVIF to BMP Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">AVIF to BMP Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your AVIF images to BMP format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose BMP?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">BMP offers uncompressed quality, making it ideal for windows. Transform your AVIF files to take advantage of BMP's unique benefits.</p>
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
        <a href="/avif-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to PNG</a>
        <a href="/bmp-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to AVIF</a>
        <a href="/jpg-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to BMP</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding AVIF to BMP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">AVIF is the newest image format, offering the best compression efficiency available today. It produces files 30-50% smaller than JPG while maintaining better visual quality and supports HDR content.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting AVIF to BMP is a common need for photographers, designers, web developers, and anyone working with digital images. BMP stores uncompressed pixel data, ensuring no quality loss. It's required by some older software and embedded systems that don't support compressed image formats.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes AVIF to BMP conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your AVIF files into the converter, select BMP as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
