import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "GIF to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert GIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "gif to png",
    "convert gif to png",
    "gif png converter",
    "free gif to png",
    "batch gif to png",
    "gif to png online",
    "gif to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/gif-to-png",
  },
  openGraph: {
    title: "GIF to PNG Converter – Free, Private & Instant",
    description:
      "Convert GIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/gif-to-png",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIF to PNG Converter – Free, Private & Instant | PixConvert",
    description: "Convert GIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert GIF to PNG?",
    answer:
      "GIF supports animation and transparency, widely used for simple animations and memes. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting GIF to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert GIF to PNG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All GIF to PNG conversion happens locally in your browser using WebAssembly. Your GIF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple GIF files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. GIF to PNG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert GIF to PNG Online"
        subtitle="Transform your GIF images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your GIF files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert GIF to PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="GIF to PNG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About GIF to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">GIF to PNG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your GIF images to PNG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose PNG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG offers transparency support, making it ideal for graphics. Transform your GIF files to take advantage of PNG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your GIF files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related GIF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/gif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to JPG</a>
        <a href="/gif-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to WebP</a>
        <a href="/png-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to GIF</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding GIF to PNG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">GIF was revolutionary for early web graphics and simple animations, but as a static image format it has significant limitations. GIF only supports 256 colors, which results in poor quality for photographs and smooth gradients. Converting GIF to PNG gives you full color support and better compression.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PNG supports millions of colors and offers lossless compression, making it far superior for static graphics that originally came from GIF files. You'll get sharper images, smoother gradients, and smaller file sizes for most non-animated content.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert converts GIF to PNG right in your browser. Your files are processed locally using WebAssembly technology, ensuring complete privacy. Upload single GIFs or batch convert multiple files at once — all free with no watermarks.</p>
      </div>
    </section>
  );
}
