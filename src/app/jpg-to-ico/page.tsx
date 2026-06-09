import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to ICO Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpg to ico",
    "convert jpg to ico",
    "jpg ico converter",
    "free jpg to ico",
    "batch jpg to ico",
    "jpg to ico online",
    "jpg to ico no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-ico",
  },
  openGraph: {
    title: "JPG to ICO Converter – Free, Private & Instant",
    description:
      "Convert JPG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpg-to-ico",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG to ICO Converter – Free, Private & Instant | PixConvert",
    description: "Convert JPG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert JPG to ICO?",
    answer:
      "JPG is the most widely used image format, offering excellent compression for photographs. ICO is the Windows icon format, used for favicons and application icons. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting JPG to ICO?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert JPG to ICO as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All JPG to ICO conversion happens locally in your browser using WebAssembly. Your JPG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple JPG files, and we'll convert them all to ICO format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. JPG to ICO conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to ICO Online"
        subtitle="Transform your JPG images to ICO format instantly. Fast, free, and completely private."
        defaultOutputFormat="ico"
        description="Upload your JPG files and convert them to ICO format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert JPG to ICO Locally?" />
      <FAQSection faqs={converterFaqs} title="JPG to ICO FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About JPG to ICO Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">JPG to ICO Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your JPG images to ICO format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose ICO?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">ICO offers multi-resolution, making it ideal for icons. Transform your JPG files to take advantage of ICO's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your JPG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related JPG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
        <a href="/png-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to ICO</a>
        <a href="/ico-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to PNG</a>
        <a href="/ico-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to JPG</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding JPG to ICO Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">JPG (JPEG) is the world's most widely used image format, prized for its excellent compression of photographs and compatibility with virtually every device and platform. It's the standard choice for photos, social media images, and web graphics where small file size matters.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting JPG to ICO is a common need for photographers, designers, web developers, and anyone working with digital images. ICO format is specifically designed for favicons and application icons, supporting multiple resolutions in a single file.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes JPG to ICO conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your JPG files into the converter, select ICO as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
