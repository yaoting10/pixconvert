import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to JPG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "png to jpg",
    "convert png to jpg",
    "png jpg converter",
    "free png to jpg",
    "batch png to jpg",
    "png to jpg online",
    "png to jpg no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – Free, Private & Instant",
    description:
      "Convert PNG to JPG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/png-to-jpg",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to JPG Converter – Free, Private & Instant | PixConvert",
    description: "Convert PNG to JPG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert PNG to JPG?",
    answer:
      "PNG supports transparency and lossless compression, ideal for graphics and logos. JPG is the most widely used image format, offering excellent compression for photographs. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting PNG to JPG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert PNG to JPG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All PNG to JPG conversion happens locally in your browser using WebAssembly. Your PNG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple PNG files, and we'll convert them all to JPG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. PNG to JPG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to JPG Online"
        subtitle="Transform your PNG images to JPG format instantly. Fast, free, and completely private."
        defaultOutputFormat="jpg"
        description="Upload your PNG files and convert them to JPG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert PNG to JPG Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG to JPG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About PNG to JPG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">PNG to JPG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your PNG images to JPG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose JPG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPG offers small file sizes, making it ideal for photos. Transform your PNG files to take advantage of JPG's unique benefits.</p>
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
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
        <a href="/png-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to AVIF</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
        <a href="/webp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to PNG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding PNG to JPG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PNG images offer excellent quality and transparency support, but their file sizes can be much larger than JPG. When you need to share photos online, send images via email, or optimize your website's loading speed, converting PNG to JPG is often the best choice.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">JPG uses lossy compression specifically designed for photographs and complex images with many colors. By converting PNG to JPG, you can reduce file sizes by 50-80% while maintaining visually acceptable quality. This makes JPG the preferred format for social media, web galleries, and email attachments.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert's PNG to JPG converter runs entirely in your browser. Your files are processed locally on your device using WebAssembly technology, ensuring complete privacy. Adjust the quality slider to find the perfect balance between file size and image quality, then download your optimized JPGs instantly.</p>
      </div>
    </section>
  );
}
