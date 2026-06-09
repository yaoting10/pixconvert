import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to GIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpg to gif",
    "convert jpg to gif",
    "jpg gif converter",
    "free jpg to gif",
    "batch jpg to gif",
    "jpg to gif online",
    "jpg to gif no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-gif",
  },
  openGraph: {
    title: "JPG to GIF Converter – Free, Private & Instant",
    description:
      "Convert JPG to GIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpg-to-gif",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to GIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert JPG to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert JPG to GIF?",
    answer:
      "JPG is the most widely used image format, offering excellent compression for photographs. GIF supports animation and transparency, widely used for simple animations and memes. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting JPG to GIF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert JPG to GIF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All JPG to GIF conversion happens locally in your browser using WebAssembly. Your JPG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple JPG files, and we'll convert them all to GIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. JPG to GIF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to GIF Online"
        subtitle="Transform your JPG images to GIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="gif"
        description="Upload your JPG files and convert them to GIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert JPG to GIF Locally?" />
      <FAQSection faqs={converterFaqs} title="JPG to GIF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About JPG to GIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">JPG to GIF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your JPG images to GIF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose GIF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">GIF offers animation support, making it ideal for animations. Transform your JPG files to take advantage of GIF's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your JPG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related JPG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
        <a href="/jpg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to WebP</a>
        <a href="/gif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to JPG</a>
        <a href="/png-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to GIF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding JPG to GIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">JPG (JPEG) is the world's most widely used image format, prized for its excellent compression of photographs and compatibility with virtually every device and platform. It's the standard choice for photos, social media images, and web graphics where small file size matters.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting JPG to GIF is a common need for photographers, designers, web developers, and anyone working with digital images. GIF format provides universal compatibility for simple graphics and animations. While limited to 256 colors, GIF remains essential for specific platforms and legacy systems.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes JPG to GIF conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your JPG files into the converter, select GIF as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
