import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPEG to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPEG to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpeg to png",
    "convert jpeg to png",
    "jpeg png converter",
    "free jpeg to png",
    "batch jpeg to png",
    "jpeg to png online",
    "jpeg to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpeg-to-png",
  },
  openGraph: {
    title: "JPEG to PNG Converter – Free, Private & Instant",
    description:
      "Convert JPEG to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpeg-to-png",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPEG to PNG Converter – Free, Private & Instant | PixConvert",
    description: "Convert JPEG to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert JPEG to PNG?",
    answer:
      "JPEG is the standard format for photos, providing small file sizes with adjustable quality. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting JPEG to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert JPEG to PNG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All JPEG to PNG conversion happens locally in your browser using WebAssembly. Your JPEG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple JPEG files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. JPEG to PNG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPEG to PNG Online"
        subtitle="Transform your JPEG images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your JPEG files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert JPEG to PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="JPEG to PNG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About JPEG to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">JPEG to PNG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your JPEG images to PNG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose PNG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG offers transparency support, making it ideal for graphics. Transform your JPEG files to take advantage of PNG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your JPEG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related JPEG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpeg-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to JPG</a>
        <a href="/jpeg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to WebP</a>
        <a href="/png-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPEG</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding JPEG to PNG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">JPEG is identical to JPG and offers the same excellent photo compression. It's the most compatible image format, supported by every browser, camera, phone, and image editing application.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting JPEG to PNG is a common need for photographers, designers, web developers, and anyone working with digital images. PNG preserves every pixel with lossless compression and supports transparent backgrounds. It's the best choice for graphics, logos, screenshots, and any image where quality cannot be compromised.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes JPEG to PNG conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your JPEG files into the converter, select PNG as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
