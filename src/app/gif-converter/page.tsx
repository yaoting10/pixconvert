import { Metadata } from "next";
import { VideoHeroSection } from "@/components/sections/VideoHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "GIF Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert videos to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "gif converter",
    "convert to gif",
    "gif video converter",
    "free gif converter",
    "batch gif converter",
    "gif converter online",
    "gif converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/gif-converter",
  },
  openGraph: {
    title: "GIF Converter – Free, Private & Instant",
    description:
      "Convert videos to GIF instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/gif-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GIF Converter – Free, Private & Instant | PixConvert",
    description: "Convert videos to GIF instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert to GIF?",
    answer:
      "GIF is a widely supported video format that offers excellent compatibility across devices and platforms. Converting to GIF ensures your videos can be played anywhere.",
  },
  {
    question: "Will I lose quality converting to GIF?",
    answer:
      "Quality depends on your settings. Use the High quality preset for minimal loss, or Medium/Low for smaller file sizes. You control the trade-off.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert GIF to other formats as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All GIF to other formats conversion happens locally in your browser using WebAssembly. Your GIF files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple video files, and we'll convert them all to GIF format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. GIF to other formats conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <VideoHeroSection
        title="Convert to GIF Online"
        subtitle="Transform your videos to GIF format instantly. Fast, free, and completely private."
        defaultOutputFormat="gif"
        description="Upload your video files and convert them to GIF format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <FAQSection faqs={converterFaqs} title="GIF Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About GIF Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Animation Support</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">GIF is the most widely supported format for simple animations and short looping clips that work everywhere without plugins or special players.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">GIF files are supported by virtually every platform and device since the 1990s, ensuring your animated content reaches the widest possible audience.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Simple & Reliable</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">GIF uses a simple, well-established format that just works everywhere, making it perfect for memes, reactions, and basic animated content.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Popular GIF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/gif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to JPG</a>
        <a href="/gif-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to PNG</a>
        <a href="/jpg-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to GIF</a>
        <a href="/png-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to GIF</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About GIF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">GIF is best known for simple animations, but as a static image format it supports only 256 colors. It's still widely used for memes, simple graphics, and situations where animation or broad compatibility is needed.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Our free GIF converter lets you transform GIF images to any other format you need. Whether you're optimizing for the web, ensuring compatibility with older software, or preparing images for print, PixConvert has you covered.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Every conversion happens locally in your browser using WebAssembly processing. This means your files stay on your device throughout the entire process, ensuring complete privacy and security. There's no upload queue, no server processing time, and no risk of your images being stored on third-party servers.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Upload one GIF file or process hundreds in a single batch. Choose from all major output formats including JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and ICO. Adjust quality settings, preview results, and download your converted files instantly — all for free.</p>
      </div>
    </section>
  );
}
