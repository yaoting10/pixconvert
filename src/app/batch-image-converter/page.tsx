import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "Batch Image Converter – Convert Multiple Images Free | PixConvert",
  description:
    "Convert multiple images at once. Batch convert JPG, PNG, WebP, AVIF, BMP, and GIF in your browser. No uploads, no limits. 100% private and free.",
  keywords: [
    "batch image converter",
    "convert multiple images",
    "bulk image converter",
    "batch convert images",
    "multiple image converter",
    "batch jpg to png",
    "bulk image conversion free",
    "batch image converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/batch-image-converter",
  },
  openGraph: {
    title: "Batch Image Converter – Convert Multiple Images Free",
    description:
      "Convert multiple images at once. Batch convert JPG, PNG, WebP, AVIF, BMP, and GIF in your browser. No uploads, no limits.",
    url: "https://pixconvert.org/batch-image-converter",
    siteName: "PixConvert",
    type: "website",
  },
};

const batchFaqs: FAQItem[] = [
  {
    question: "How many images can I convert at once?",
    answer:
      "There is no artificial limit. You can convert as many images as your device can handle. The only constraint is your computer's available RAM. Most users can batch convert 50-100 images at once without issues.",
  },
  {
    question: "Can I convert different formats in the same batch?",
    answer:
      "Yes! You can mix JPG, PNG, WebP, and other formats in the same batch. Each file can be converted to a different output format. For example, you can convert some files to WebP for your website while converting others to PNG for editing.",
  },
  {
    question: "Will batch conversion slow down my computer?",
    answer:
      "Batch conversion uses your CPU's multiple cores for parallel processing. While it will use significant CPU resources during conversion, it won't harm your computer. You can adjust the number of concurrent conversions if needed.",
  },
  {
    question: "Do all files get the same output format?",
    answer:
      "By default, yes — all files are converted to the format you select. However, you can change individual files to different output formats before downloading. This gives you flexibility when processing mixed batches.",
  },
  {
    question: "How do I download all converted files?",
    answer:
      "After conversion, you can download all files as a single ZIP archive. This keeps your files organized and makes it easy to transfer them to other devices or upload them to your website.",
  },
  {
    question: "Are my files really private?",
    answer:
      "Yes. All processing happens locally in your browser using WebAssembly. Your files are never uploaded to any server.",
  },
];

export default function BatchConverterPage() {
  return (
    <>
      <BatchHero />
      <BatchFeatures />
      <WhyLocalSection />
      <FAQSection faqs={batchFaqs} title="Batch Conversion FAQ" />
      <FooterCTASection />
    </>
  );
}

function BatchHero() {
  return (
    <section className="pt-8 pb-8 px-6 mx-auto max-w-[1120px] text-center">
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        Bulk Processing
      </span>
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-on-background mb-4 max-w-3xl mx-auto leading-tight">
        Batch Image Converter
      </h1>
      <p className="text-lg text-on-surface-variant mb-6 max-w-2xl mx-auto leading-relaxed">
        Convert dozens of images at once. Drop your entire folder and convert them all in one go. 
        No upload limits, no waiting queues — your browser does all the work.
      </p>
      <HeroSection />
    </section>
  );
}

function BatchFeatures() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Use Batch Conversion?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Save Hours of Time</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Don't convert images one by one. Drop 50 images at once and let your browser handle them all in parallel. What used to take an hour now takes seconds.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Individual Format Control</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Each file can have its own output format. Convert some to WebP for the web, others to PNG for editing — all in the same batch.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">ZIP Download</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            When you're done converting multiple files, download them all as a single ZIP archive. Clean, organized, and ready to use.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">No File Count Limits</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Unlike online converters that limit you to 5-10 files per batch, we have no artificial limits. The only constraint is your device's memory.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Parallel Processing</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Multiple images are converted simultaneously using WebAssembly. Your multi-core CPU is put to work for maximum speed.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Quality Presets</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Set a default quality level for all conversions, then fine-tune individual files as needed. Perfect balance between speed and control.
          </p>
        </div>
      </div>
    </section>
  );
}
