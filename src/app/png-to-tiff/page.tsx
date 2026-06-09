import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to TIFF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to TIFF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "png to tiff",
    "convert png to tiff",
    "png tiff converter",
    "free png to tiff",
    "batch png to tiff",
    "png to tiff online",
    "png to tiff no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-tiff",
  },
  openGraph: {
    title: "PNG to TIFF Converter – Free, Private & Instant",
    description:
      "Convert PNG to TIFF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/png-to-tiff",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to TIFF Converter – Free, Private & Instant | PixConvert",
    description: "Convert PNG to TIFF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert PNG to TIFF?",
    answer:
      "PNG supports transparency and lossless compression, ideal for graphics and logos. TIFF is the professional standard for printing and archiving, supporting layers and high bit depth. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting PNG to TIFF?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert PNG to TIFF as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All PNG to TIFF conversion happens locally in your browser using WebAssembly. Your PNG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple PNG files, and we'll convert them all to TIFF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. PNG to TIFF conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to TIFF Online"
        subtitle="Transform your PNG images to TIFF format instantly. Fast, free, and completely private."
        defaultOutputFormat="tiff"
        description="Upload your PNG files and convert them to TIFF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert PNG to TIFF Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG to TIFF FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About PNG to TIFF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">PNG to TIFF Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your PNG images to TIFF format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose TIFF?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">TIFF offers professional quality, making it ideal for print. Transform your PNG files to take advantage of TIFF's unique benefits.</p>
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
        <a href="/png-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPG</a>
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
        <a href="/tiff-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to PNG</a>
        <a href="/jpg-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to TIFF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding PNG to TIFF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">TIFF remains the preferred format in professional photography, print production, and archival storage. Converting PNG to TIFF is useful when you need to deliver images to print services, include them in professional publications, or archive them in a widely accepted format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">TIFF supports lossless compression and can store additional metadata, making it valuable for professional workflows. While PNG is better for web use, TIFF excels in situations where maximum compatibility with professional tools is required.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert's PNG to TIFF converter runs entirely in your browser. Your files are processed locally with WebAssembly, so sensitive images never get uploaded to external servers. Convert PNG files to TIFF format quickly and privately.</p>
      </div>
    </section>
  );
}
