import { Metadata } from "next";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "MKV Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert videos to MKV instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "mkv converter",
    "convert to mkv",
    "mkv video converter",
    "free mkv converter",
    "batch mkv converter",
    "mkv converter online",
    "mkv converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/mkv-converter",
  },
  openGraph: {
    title: "MKV Converter – Free, Private & Instant",
    description:
      "Convert videos to MKV instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/mkv-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MKV Converter – Free, Private & Instant | PixConvert",
    description: "Convert videos to MKV instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert to MKV?",
    answer:
      "MKV is a widely supported video format that offers excellent compatibility across devices and platforms. Converting to MKV ensures your videos can be played anywhere.",
  },
  {
    question: "Will I lose quality converting to MKV?",
    answer:
      "Quality depends on your settings. Use the High quality preset for minimal loss, or Medium/Low for smaller file sizes. You control the trade-off.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert MKV to other formats as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All MKV to other formats conversion happens locally in your browser using WebAssembly. Your MKV files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple video files, and we'll convert them all to MKV format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. MKV to other formats conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <VideoHeroSection
        title="Convert to MKV Online"
        subtitle="Transform your videos to MKV format instantly. Fast, free, and completely private."
        defaultOutputFormat="mkv"
        description="Upload your video files and convert them to MKV format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <FAQSection faqs={converterFaqs} title="MKV Converter FAQ" />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About MKV Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">MKV Overview</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Learn about MKV format characteristics and best use cases for your image conversion needs.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Flexible Conversion</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert MKV to any modern format with adjustable quality settings and batch processing support.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">100% Private</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">All MKV conversion happens locally in your browser. Your files are never uploaded to any server.</p>
        </div>
      </div>
    </section>
  );
}
