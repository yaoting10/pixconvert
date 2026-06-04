import { Metadata } from "next";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "Batch Video Converter – Convert Multiple Videos Free | PixConvert",
  description:
    "Convert multiple videos at once. Batch convert MP4, WebM, MOV, AVI, MKV, WMV, and FLV in your browser. No uploads, no limits. 100% private and free.",
  keywords: [
    "batch video converter",
    "convert multiple videos",
    "bulk video converter",
    "batch convert videos",
    "multiple video converter",
    "batch mp4 to webm",
    "bulk video conversion free",
    "batch video converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/batch-video-converter",
  },
  openGraph: {
    title: "Batch Video Converter – Convert Multiple Videos Free",
    description:
      "Convert multiple videos at once. Batch convert MP4, WebM, MOV, AVI, MKV, WMV, and FLV in your browser. No uploads, no limits.",
    url: "https://pixconvert.org/batch-video-converter",
    siteName: "PixConvert",
    type: "website",
  },
};

const batchFaqs: FAQItem[] = [
  {
    question: "How many videos can I convert at once?",
    answer:
      "There is no artificial limit. You can convert as many videos as your device can handle. The only constraint is your computer's available RAM. Most users can batch convert 5-10 videos at once without issues.",
  },
  {
    question: "Can I convert different formats in the same batch?",
    answer:
      "Yes! You can mix MP4, WebM, MOV, and other formats in the same batch. Each file can be converted to a different output format.",
  },
  {
    question: "Will batch conversion slow down my computer?",
    answer:
      "Batch conversion uses your CPU for processing. While it will use significant CPU resources during conversion, it won't harm your computer. Videos are processed sequentially to avoid overwhelming your system.",
  },
  {
    question: "Do all files get the same output format?",
    answer:
      "By default, yes — all files are converted to the format you select. However, you can change individual files to different output formats before converting.",
  },
  {
    question: "How do I download all converted files?",
    answer:
      "After conversion, you can download all files as a single ZIP archive. This keeps your files organized and makes it easy to transfer them.",
  },
  {
    question: "Are my files really private?",
    answer:
      "Yes. All processing happens locally in your browser using FFmpeg.wasm. Your files are never uploaded to any server.",
  },
];

export default function BatchVideoConverterPage() {
  return (
    <>
      <BatchHero />
      <BatchFeatures />
      <FAQSection faqs={batchFaqs} title="Batch Video Conversion FAQ" />
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
        Batch Video Converter
      </h1>
      <p className="text-lg text-on-surface-variant mb-6 max-w-2xl mx-auto leading-relaxed">
        Convert multiple videos at once. Drop your entire folder and convert them all in one go.
        No upload limits, no waiting queues — your browser does all the work.
      </p>
      <VideoHeroSection
        title="Batch Convert Videos"
        subtitle="Transform multiple videos at once. Fast, free, and completely private."
        defaultOutputFormat="mp4"
      />
    </section>
  );
}

function BatchFeatures() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Use Batch Video Conversion?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Save Hours of Time</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Don't convert videos one by one. Drop multiple videos at once and let your browser handle them all.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Individual Format Control</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Each file can have its own output format. Convert some to MP4, others to WebM — all in the same batch.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">ZIP Download</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            When you're done converting multiple files, download them all as a single ZIP archive.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">No File Count Limits</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Unlike online converters that limit you to a few files per batch, we have no artificial limits.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Local Processing</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            All conversion happens in your browser using FFmpeg.wasm. No server uploads means complete privacy.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Quality Presets</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Set a default quality level for all conversions. Choose from High, Medium, or Low presets.
          </p>
        </div>
      </div>
    </section>
  );
}
