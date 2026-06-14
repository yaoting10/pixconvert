import { Metadata } from "next";
import { AudioHeroSection } from "@/components/sections/AudioHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "Audio Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert audio files to MP3, WAV, OGG, AAC, FLAC, M4A, OPUS, AIFF, WMA instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable bitrate. 100% private – your files never leave your device.",
  keywords: [
    "audio converter",
    "convert audio",
    "mp3 converter",
    "wav converter",
    "ogg converter",
    "aac converter",
    "flac converter",
    "free audio converter",
    "batch audio converter",
    "audio converter online",
    "audio converter no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/audio-converter",
  },
  openGraph: {
    title: "Audio Converter – Free, Private & Instant",
    description:
      "Convert audio files to any format instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable bitrate.",
    url: "https://pixconvert.org/audio-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Converter – Free, Private & Instant | PixConvert",
    description: "Convert audio files to MP3, WAV, OGG, AAC, FLAC, M4A, OPUS, AIFF, WMA instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable bitrate. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What audio formats are supported?",
    answer:
      "PixConvert supports all major audio formats including MP3, WAV, OGG, AAC, FLAC, M4A, OPUS, AIFF, and WMA. You can convert between any of these formats.",
  },
  {
    question: "Will I lose quality when converting audio?",
    answer:
      "Quality depends on your settings. Use a higher bitrate (256k or 320k) for minimal loss, or lower bitrate (64k or 128k) for smaller file sizes. Lossless formats like FLAC and WAV preserve original quality.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert audio files as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All audio conversion happens locally in your browser using WebAssembly (FFmpeg.wasm). Your audio files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple audio files, and we'll convert them all in one batch. You can also download all converted files as a single ZIP archive.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. Audio conversion runs directly in your browser with no installation needed.",
  },
];

export default function AudioConverterPage() {
  return (
    <>
      <AudioHeroSection
        title="Convert Audio Files Online"
        subtitle="Transform your audio to any format instantly. Fast, free, and completely private."
        defaultOutputFormat="mp3"
        description="Upload your audio files and convert them to any format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <FAQSection faqs={converterFaqs} title="Audio Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection ctaText="Convert Your First Audio — It's Free" />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About Audio Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Format Flexibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert between all popular audio formats. MP3 for compatibility, FLAC for quality, OGG for open source, or OPUS for streaming.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Bitrate Control</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Choose from 64k to 320k bitrate to balance file size and audio quality. Perfect for podcasts, music, or voice recordings.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">100% Private</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">All audio conversion happens locally in your browser. Your files are never uploaded to any server.</p>
        </div>
      </div>
    </section>
  );
}

function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Popular Audio Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/audio-converter?format=mp3" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">MP3 Converter</a>
        <a href="/audio-converter?format=wav" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WAV Converter</a>
        <a href="/audio-converter?format=flac" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">FLAC Converter</a>
        <a href="/audio-converter?format=ogg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">OGG Converter</a>
        <a href="/audio-converter?format=aac" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">AAC Converter</a>
      </div>
    </section>
  );
}

function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About Audio Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Different audio formats serve different purposes. MP3 offers universal compatibility with good compression. WAV provides uncompressed, lossless quality ideal for editing. FLAC delivers lossless compression for audiophiles. OGG and OPUS offer excellent quality at low bitrates, perfect for streaming.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Our free audio converter lets you transform audio files to any format you need. Whether you're preparing music for different devices, compressing podcasts for distribution, or converting voice recordings for editing, PixConvert has you covered.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Every conversion happens locally in your browser using WebAssembly processing. This means your files stay on your device throughout the entire process, ensuring complete privacy and security. There's no upload queue, no server processing time, and no risk of your audio being stored on third-party servers.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Upload one audio file or process multiple in a single batch. Choose from all major output formats including MP3, WAV, OGG, AAC, FLAC, M4A, OPUS, AIFF, and WMA. Adjust bitrate settings, and download your converted files instantly — all for free.</p>
      </div>
    </section>
  );
}
