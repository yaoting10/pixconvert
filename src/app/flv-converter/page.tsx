import { Metadata } from "next";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "FLV Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert videos to FLV instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "flv converter",
    "convert to flv",
    "flv video converter",
    "free flv converter",
    "batch flv converter",
    "flv converter online",
    "flv converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/flv-converter",
  },
  openGraph: {
    title: "FLV Converter – Free, Private & Instant",
    description:
      "Convert videos to FLV instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/flv-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLV Converter – Free, Private & Instant | PixConvert",
    description: "Convert videos to FLV instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert to FLV?",
    answer:
      "FLV is a widely supported video format that offers excellent compatibility across devices and platforms. Converting to FLV ensures your videos can be played anywhere.",
  },
  {
    question: "Will I lose quality converting to FLV?",
    answer:
      "Quality depends on your settings. Use the High quality preset for minimal loss, or Medium/Low for smaller file sizes. You control the trade-off.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert FLV to other formats as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All FLV to other formats conversion happens locally in your browser using WebAssembly. Your FLV files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple video files, and we'll convert them all to FLV format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. FLV to other formats conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <VideoHeroSection
        title="Convert to FLV Online"
        subtitle="Transform your videos to FLV format instantly. Fast, free, and completely private."
        defaultOutputFormat="flv"
        description="Upload your video files and convert them to FLV format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <FAQSection faqs={converterFaqs} title="FLV Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About FLV Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">FLV Overview</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Learn about FLV format characteristics and best use cases for your image conversion needs.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Flexible Conversion</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert FLV to any modern format with adjustable quality settings and batch processing support.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">100% Private</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">All FLV conversion happens locally in your browser. Your files are never uploaded to any server.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Popular Video Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/mp4-converter" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">MP4 Converter</a>
        <a href="/mov-converter" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">MOV Converter</a>
        <a href="/avi-converter" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AVI Converter</a>
        <a href="/batch-video-converter" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">Batch Video Converter</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About FLV Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">FLV is a widely used image format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Our free FLV converter lets you transform FLV images to any other format you need. Whether you're optimizing for the web, ensuring compatibility with older software, or preparing images for print, PixConvert has you covered.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Every conversion happens locally in your browser using WebAssembly processing. This means your files stay on your device throughout the entire process, ensuring complete privacy and security. There's no upload queue, no server processing time, and no risk of your images being stored on third-party servers.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Upload one FLV file or process hundreds in a single batch. Choose from all major output formats including JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and ICO. Adjust quality settings, preview results, and download your converted files instantly — all for free.</p>
      </div>
    </section>
  );
}
