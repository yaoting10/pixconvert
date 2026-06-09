import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to ICO Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "png to ico",
    "convert png to ico",
    "png ico converter",
    "free png to ico",
    "batch png to ico",
    "png to ico online",
    "png to ico no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-ico",
  },
  openGraph: {
    title: "PNG to ICO Converter – Free, Private & Instant",
    description:
      "Convert PNG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/png-to-ico",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG to ICO Converter – Free, Private & Instant | PixConvert",
    description: "Convert PNG to ICO instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "Why convert PNG to ICO?",
    answer:
      "PNG supports transparency and lossless compression, ideal for graphics and logos. ICO is the Windows icon format, used for favicons and application icons. Converting between these formats lets you optimize images for specific use cases.",
  },
  {
    question: "Will I lose quality converting PNG to ICO?",
    answer:
      "Quality loss depends on the formats. If converting to a lossy format like JPG, some quality is lost. For lossless formats like PNG, quality is preserved. Use the quality slider to control compression.",
  },
  {
    question: "Is this converter really free?",
    answer:
      "Yes. PixConvert is 100% free with no hidden costs, watermarks, or premium tiers. Convert PNG to ICO as many times as you need without any restrictions.",
  },
  {
    question: "Are my files uploaded to a server?",
    answer:
      "No. All PNG to ICO conversion happens locally in your browser using WebAssembly. Your PNG files never leave your device.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes. Drag and drop multiple PNG files, and we'll convert them all to ICO format in one batch.",
  },
  {
    question: "What browsers are supported?",
    answer:
      "PixConvert works in all modern browsers including Chrome, Firefox, Safari, and Edge. PNG to ICO conversion runs directly in your browser with no installation needed.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to ICO Online"
        subtitle="Transform your PNG images to ICO format instantly. Fast, free, and completely private."
        defaultOutputFormat="ico"
        description="Upload your PNG files and convert them to ICO format right in your browser — no server uploads ever."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert PNG to ICO Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG to ICO FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About PNG to ICO Conversion
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">PNG to ICO Made Simple</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Convert your PNG images to ICO format directly in your browser. No uploads, no waiting—just instant, private conversion with full quality control.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Why Choose ICO?</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">ICO offers multi-resolution, making it ideal for icons. Transform your PNG files to take advantage of ICO's unique benefits.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Privacy First</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Your PNG files never leave your device. All conversion happens locally using WebAssembly technology, ensuring complete data privacy and security.</p>
        </div>
      </div>
    </section>
  );
}
function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Related PNG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/png-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPG</a>
        <a href="/jpg-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to ICO</a>
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
        Understanding PNG to ICO Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">ICO format is specifically designed for favicons and application icons. Converting PNG to ICO lets you create custom favicons for websites, application icons for Windows software, or icon files for other platforms that require ICO format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">For best results, use a square PNG image when converting to ICO. The ICO format can contain multiple image sizes, which ensures your icon looks sharp at different resolutions.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert makes PNG to ICO conversion simple and secure. All processing happens locally in your browser using WebAssembly. Create custom icons from your PNG images without uploading anything to external servers.</p>
      </div>
    </section>
  );
}
