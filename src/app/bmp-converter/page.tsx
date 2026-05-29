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
      <WhyLocalSection />
      <FAQSection faqs={converterFaqs} title="BMP Converter FAQ" />
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
          <p className="text-sm text-on-surface-variant leading-relaxed">
            BMP stores images without compression, preserving every pixel. Useful for specific applications that require raw bitmap data without any quality loss.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Windows Native</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            BMP is the native Windows bitmap format. Some Windows applications and legacy systems specifically require BMP files for compatibility.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Convert to Modern Formats</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            BMP files are typically very large. Converting to JPG, PNG, or WebP dramatically reduces file size while maintaining visual quality.
          </p>
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
