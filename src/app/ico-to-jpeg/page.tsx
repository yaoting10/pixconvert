import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "ICO to JPEG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert ICO to JPEG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "ico to jpeg",
    "convert ico to jpeg",
    "ico jpeg converter",
    "free ico to jpeg",
    "batch ico to jpeg",
    "ico to jpeg online",
    "ico to jpeg no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/ico-to-jpeg",
  },
  openGraph: {
    title: "ICO to JPEG Converter – Free, Private & Instant",
    description:
      "Convert ICO to JPEG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/ico-to-jpeg",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICO to JPEG Converter – Free, Private & Instant | PixConvert",
    description: "Convert ICO to JPEG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert ICO to JPEG?",
    answer:
      "ICO is the Windows icon format, used for favicons and application icons. JPEG is the standard format for photos, providing small file sizes with adjustable quality. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting ICO to JPEG?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert ICO to JPEG as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All ICO to JPEG conversion happens locally in your browser using WebAssembly. Your ICO files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple ICO files, and we'll convert them all to JPEG format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. ICO to JPEG conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert ICO to JPEG Online"
        subtitle="Transform your ICO images to JPEG format instantly. Fast, free, and completely private."
        defaultOutputFormat="jpeg"
        description="Upload your ICO files and convert them to JPEG format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert ICO to JPEG Locally?" />
      <FAQSection faqs={converterFaqs} title="ICO to JPEG FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About ICO to JPEG Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">ICO to JPEG Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your ICO images to JPEG format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose JPEG?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPEG offers small file sizes, making it ideal for photos. Transform your ICO files to take advantage of JPEG's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your ICO files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related ICO Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/ico-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to JPG</a>
        <a href="/ico-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to PNG</a>
        <a href="/jpeg-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to ICO</a>
        <a href="/jpg-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to ICO</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Understanding ICO to JPEG Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">ICO is the standard format for website favicons and Windows application icons. ICO files can contain multiple image sizes to ensure icons look good at different resolutions.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Converting ICO to JPEG is a common need for photographers, designers, web developers, and anyone working with digital images. JPEG format ensures maximum compatibility across all devices, browsers, and applications while keeping file sizes manageable for photos and complex images.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes ICO to JPEG conversion incredibly simple. Our browser-based tool processes your files locally using WebAssembly technology, which means your images never leave your device. There's no need to upload sensitive photos to external servers or wait in processing queues.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Simply drag and drop your ICO files into the converter, select JPEG as the output format, and download your converted images within seconds. You can process a single file or convert hundreds of images in one batch. PixConvert is completely free to use with no watermarks, no registration, and no limits.</p>
      </div>
    </section>
  );
}
