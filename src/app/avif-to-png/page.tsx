import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "AVIF to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert AVIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "avif to png",
    "convert avif to png",
    "avif png converter",
    "free avif to png",
    "batch avif to png",
    "avif to png online",
    "avif to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/avif-to-png",
  },
  openGraph: {
    title: "AVIF to PNG Converter – Free, Private & Instant",
    description:
      "Convert AVIF to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/avif-to-png",
    siteName: "PixConvert",
    type: "website",
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert AVIF to PNG?",
    answer:
      "AVIF is the next-gen format with 50% smaller files than JPG, supporting HDR and transparency. PNG supports transparency and lossless compression, ideal for graphics and logos. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting AVIF to PNG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All conversion happens locally in your browser using WebAssembly. Your files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple AVIF files, and we'll convert them all to PNG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert AVIF to PNG Online"
        subtitle="Transform your AVIF images to PNG format instantly. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your AVIF files and convert them to PNG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <WhyLocalSection />
      <FAQSection faqs={converterFaqs} title="AVIF to PNG FAQ" />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About AVIF to PNG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">100% Private</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            All processing happens locally in your browser. Your AVIF files are never uploaded to any server, ensuring complete privacy.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Batch Conversion</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Convert multiple AVIF files to PNG in one go. Simply drag and drop your images and download the results.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Adjustable Quality</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Use the quality slider to find the perfect balance between file size and image quality for your PNG output.
          </p>
        </div>
      </div>
    </section>
  );
}
