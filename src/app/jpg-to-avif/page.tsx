import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to AVIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpg to avif",
    "convert jpg to avif",
    "jpg avif converter",
    "free jpg to avif",
    "batch jpg to avif",
    "jpg to avif online",
    "jpg to avif no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-avif",
  },
  openGraph: {
    title: "JPG to AVIF Converter – Free, Private & Instant",
    description:
      "Convert JPG to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpg-to-avif",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to AVIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert JPG to AVIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert JPG to AVIF?",
    answer:
      "JPG is the most widely used image format, offering excellent compression for photographs. AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting JPG to AVIF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert JPG to AVIF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All JPG to AVIF conversion happens locally in your browser using WebAssembly. Your JPG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple JPG files, and we'll convert them all to AVIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. JPG to AVIF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to AVIF Online"
        subtitle="Transform your JPG images to AVIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="avif"
        description="Upload your JPG files and convert them to AVIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert JPG to AVIF Locally?" />
      <FAQSection faqs={converterFaqs} title="JPG to AVIF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About JPG to AVIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">JPG to AVIF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your JPG images to AVIF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose AVIF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">AVIF offers next-gen compression, making it ideal for web. Transform your JPG files to take advantage of AVIF's unique benefits.</p>
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
        <a href="/avif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to JPG</a>
        <a href="/avif-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVIF to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding JPG to AVIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">AVIF outperforms JPG in compression efficiency while maintaining better visual quality. Converting JPG to AVIF can reduce file sizes by 30-50%, making it an excellent choice for photographers, web developers, and anyone who wants faster-loading images.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Unlike JPG, AVIF supports HDR (High Dynamic Range), wide color gamuts, and better handling of text and sharp edges. This makes AVIF particularly valuable for modern displays and high-quality image delivery.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Use PixConvert to convert JPG to AVIF directly in your browser. Our local WebAssembly processing ensures your photos never leave your device. Batch convert entire albums or process single images — all free, with no watermarks.</p>
      </div>
    </section>
  );
}
