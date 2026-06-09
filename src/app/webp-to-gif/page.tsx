import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "WebP to GIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert WebP to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "webp to gif",
    "convert webp to gif",
    "webp gif converter",
    "free webp to gif",
    "batch webp to gif",
    "webp to gif online",
    "webp to gif no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/webp-to-gif",
  },
  openGraph: {
    title: "WebP to GIF Converter – Free, Private & Instant",
    description:
      "Convert WebP to GIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/webp-to-gif",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP to GIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert WebP to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert WebP to GIF?",
    answer:
      "WebP offers 25-35% smaller files than JPG/PNG with support for transparency and animation. GIF supports animation and transparency, widely used for simple animations and memes. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting WebP to GIF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert WEBP to GIF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All WEBP to GIF conversion happens locally in your browser using WebAssembly. Your WEBP files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple WebP files, and we'll convert them all to GIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. WEBP to GIF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert WebP to GIF Online"
        subtitle="Transform your WebP images to GIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="gif"
        description="Upload your WebP files and convert them to GIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert WEBP to GIF Locally?" />
      <FAQSection faqs={converterFaqs} title="WebP to GIF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About WebP to GIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">WEBP to GIF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your WEBP images to GIF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose GIF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">GIF offers animation support, making it ideal for animations. Transform your WEBP files to take advantage of GIF's unique benefits.</p>
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
        <a href="/webp-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to JPG</a>
        <a href="/webp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to PNG</a>
        <a href="/gif-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to WebP</a>
        <a href="/jpg-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to GIF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding WEBP to GIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">WebP is Google's modern image format that provides 25-35% smaller file sizes than JPG or PNG while maintaining equivalent quality. It supports both lossy and lossless compression plus transparency.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting WEBP to GIF is a common need for photographers, designers, web developers, and anyone working with digital images. GIF format provides universal compatibility for simple graphics and animations. While limited to 256 colors, GIF remains essential for specific platforms and legacy systems.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes WEBP to GIF conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your WEBP files into the converter, select GIF as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
