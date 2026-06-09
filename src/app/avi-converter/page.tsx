import { Metadata } from "next";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "AVI Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert videos to AVI instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "avi converter",
    "convert to avi",
    "avi video converter",
    "free avi converter",
    "batch avi converter",
    "avi converter online",
    "avi converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/avi-converter",
  },
  openGraph: {
    title: "AVI Converter – Free, Private & Instant",
    description:
      "Convert videos to AVI instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/avi-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AVI Converter – Free, Private & Instant | PixConvert",
    description: "Convert videos to AVI instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert to AVI?",
    answer:
      "AVI is a widely supported video format that offers excellent compatibility across devices and platforms. Converting to AVI ensures your videos can be played anywhere.",
  },
  {
    question: "Will I lose quality converting to AVI?",
    answer:
      "Quality depends on your settings. Use the High quality preset for minimal loss, or Medium/Low for smaller file sizes. You control the trade-off.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert AVI to other formats as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All AVI to other formats conversion happens locally in your browser using WebAssembly. Your AVI files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple video files, and we'll convert them all to AVI format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. AVI to other formats conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <VideoHeroSection
        title="Convert to AVI Online"
        subtitle="Transform your videos to AVI format instantly. Fast, free, and completely private."
        defaultOutputFormat="avi"
        description="Upload your video files and convert them to AVI format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <FAQSection faqs={converterFaqs} title="AVI Converter FAQ" />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About AVI Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">AVI Overview</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Learn about AVI format characteristics and best use cases for your image conversion needs.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Flexible Conversion</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert AVI to any modern format with adjustable quality settings and batch processing support.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">100% Private</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">All AVI conversion happens locally in your browser. Your files are never uploaded to any server.</p>
        </div>
      </div>
    </section>
  );
}
