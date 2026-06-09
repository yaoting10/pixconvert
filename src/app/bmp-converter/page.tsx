import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "BMP Converter – Convert To/From BMP Free | PixConvert",
  description:
    "Free online BMP converter. Convert images to BMP or from BMP to JPG, PNG, WebP and more. 100% private browser-based conversion with no uploads.",
  keywords: [
    "bmp converter",
    "convert to bmp",
    "bmp to jpg",
    "bmp to png",
    "free bmp converter",
    "online bmp converter",
    "bitmap converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/bmp-converter",
  },
  openGraph: {
    title: "BMP Converter – Convert To/From BMP Free",
    description:
      "Free online BMP converter. Convert images to BMP or from BMP to JPG, PNG, WebP and more. 100% private browser-based conv...",
    url: "https://pixconvert.org/bmp-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BMP Converter – Convert To/From BMP Free | PixConvert",
    description: "Free online BMP converter. Convert images to BMP or from BMP to JPG, PNG, WebP and more. 100% private browser-based conversion with no uploads.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a BMP file?",
    answer:
      "BMP (Bitmap) is an uncompressed image format developed by Microsoft. It stores pixel data without compression, resulting in very large files but perfect quality preservation.",
  },
  {
    question: "Why convert BMP to other formats?",
    answer:
      "BMP files are extremely large because they don't use compression. Converting to JPG, PNG, or WebP reduces file size by 50-90% while maintaining the same visual quality.",
  },
  {
    question: "When should I use BMP?",
    answer:
      "BMP is rarely needed today. It's mainly used by legacy Windows applications or specific software that requires uncompressed bitmap data. For almost all use cases, PNG or TIFF are better alternatives.",
  },
  {
    question: "Does BMP support transparency?",
    answer:
      "Standard BMP has limited transparency support. For images that need transparency, PNG is the much better choice with full alpha channel support.",
  },
  {
    question: "Are my files really private?",
    answer:
      "Yes. All processing happens locally in your browser using WebAssembly. Your files are never uploaded to any server.",
  },
  {
    question: "Is it completely free?",
    answer:
      "Yes. PixConvert is fully free to use with no hidden costs, watermarks, or premium tiers.",
  },
];

export default function ConverterPage() {
  return (
    <>
      <FormatHeroSection
        title="BMP Image Converter"
        subtitle="Convert any image to BMP or transform BMP files to modern formats. Fast, free, and completely private."
        defaultOutputFormat="bmp"
        description="Upload your images and convert them to BMP format, or convert BMP files to JPG, PNG, WebP and more. All processing happens locally in your browser."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert BMP Locally?" />
      <FAQSection faqs={converterFaqs} title="BMP Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From BMP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Uncompressed Quality</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">BMP stores images without compression, preserving every pixel in its original form. Ideal for applications where image fidelity is more important than file size.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Windows Native</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">BMP is the native bitmap format for Windows operating systems and is widely supported by Windows applications, game engines, and embedded systems.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Convert to Modern Formats</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Use our converter to transform BMP files into modern compressed formats like PNG, WebP, or AVIF while maintaining visual quality at a fraction of the size.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          BMP vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">BMP</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">None (or RLE)</td>
                <td className="py-2">JPG/WebP much better</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Very large</td>
                <td className="py-2">Much smaller</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Limited</td>
                <td className="py-2">PNG has full support</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Legacy Windows apps</td>
                <td className="py-2">Web, sharing, storage</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Quality</td>
                <td className="py-2 pr-4">Perfect (uncompressed)</td>
                <td className="py-2">JPG has minor loss</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RelatedConversions() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-6 text-center">
        Popular BMP Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/bmp-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to JPG</a>
        <a href="/bmp-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to JPEG</a>
        <a href="/bmp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to PNG</a>
        <a href="/bmp-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to WebP</a>
        <a href="/bmp-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to AVIF</a>
        <a href="/bmp-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to GIF</a>
        <a href="/bmp-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to TIFF</a>
        <a href="/bmp-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">BMP to ICO</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About BMP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">BMP is an uncompressed format that preserves perfect image quality but produces very large files. It's primarily used in legacy systems and situations where uncompressed pixel data is required.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Our free BMP converter lets you transform BMP images to any other format you need. Whether you're optimizing for the web, ensuring compatibility with older software, or preparing images for print, PixConvert has you covered.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Every conversion happens locally in your browser using WebAssembly processing. This means your files stay on your device throughout the entire process, ensuring complete privacy and security. There's no upload queue, no server processing time, and no risk of your images being stored on third-party servers.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Upload one BMP file or process hundreds in a single batch. Choose from all major output formats including JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and ICO. Adjust quality settings, preview results, and download your converted files instantly — all for free.</p>
      </div>
    </section>
  );
}
