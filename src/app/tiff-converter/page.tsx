import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "TIFF Converter – Convert To/From TIFF Free | PixConvert",
  description:
    "Free online TIFF converter. Convert images to TIFF or from TIFF to JPG, PNG, WebP and more. Professional quality. 100% private browser-based conversion.",
  keywords: [
    "tiff converter",
    "convert to tiff",
    "tiff to jpg",
    "tiff to png",
    "free tiff converter",
    "online tiff converter",
    "tiff image converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/tiff-converter",
  },
  openGraph: {
    title: "TIFF Converter – Convert To/From TIFF Free",
    description:
      "Free online TIFF converter. Convert images to TIFF or from TIFF to JPG, PNG, WebP and more. Professional quality. 100% p...",
    url: "https://pixconvert.org/tiff-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TIFF Converter – Convert To/From TIFF Free | PixConvert",
    description: "Free online TIFF converter. Convert images to TIFF or from TIFF to JPG, PNG, WebP and more. Professional quality. 100% private browser-based conversion.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a TIFF file?",
    answer:
      "TIFF (Tagged Image File Format) is a flexible image format that supports high bit depths, multiple color spaces, and various compression options. It's widely used in professional photography, printing, and publishing.",
  },
  {
    question: "Why convert to TIFF?",
    answer:
      "TIFF is the best choice for professional printing and archival storage. It preserves maximum quality and supports features like layers and high bit depth that other formats don't.",
  },
  {
    question: "Why convert TIFF to JPG or PNG?",
    answer:
      "TIFF files are very large. Converting to JPG or PNG makes them suitable for web use, email sharing, and storage. The visual quality difference is minimal for most purposes.",
  },
  {
    question: "Is TIFF better than RAW?",
    answer:
      "No — RAW files contain unprocessed sensor data from cameras and offer the most flexibility for editing. TIFF is a processed format that's better for final output and printing.",
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
        title="TIFF Image Converter"
        subtitle="Convert any image to TIFF or transform TIFF files to web-friendly formats. Professional quality. Fast, free, and completely private."
        defaultOutputFormat="tiff"
        description="Upload your images and convert them to high-quality TIFF format, or convert TIFF files to JPG, PNG, WebP and more. All processing happens locally in your browser."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert TIFF Locally?" />
      <FAQSection faqs={converterFaqs} title="TIFF Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From TIFF?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Professional Quality</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">TIFF is the industry standard for professional photography and print production, supporting high bit depths, multiple layers, and lossless compression.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Lossless Options</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">TIFF supports various compression methods including LZW and ZIP, or can be saved completely uncompressed for maximum quality preservation.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Print Ready</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">TIFF files are the preferred format for professional printing, supporting CMYK color mode and high resolutions required for quality print output.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          TIFF vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">TIFF</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossless or none</td>
                <td className="py-2">JPG is lossy</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Bit Depth</td>
                <td className="py-2 pr-4">Up to 32-bit</td>
                <td className="py-2">8-bit typical</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Layers</td>
                <td className="py-2 pr-4">Yes (some variants)</td>
                <td className="py-2">No</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Very large</td>
                <td className="py-2">Much smaller</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Printing, archiving</td>
                <td className="py-2">Web, sharing</td>
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
        Popular TIFF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/tiff-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to JPG</a>
        <a href="/tiff-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to JPEG</a>
        <a href="/tiff-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to PNG</a>
        <a href="/tiff-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to WebP</a>
        <a href="/tiff-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to AVIF</a>
        <a href="/tiff-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to GIF</a>
        <a href="/tiff-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to BMP</a>
        <a href="/tiff-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">TIFF to ICO</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About TIFF Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">TIFF is a professional format used in photography, publishing, and printing. It supports high color depth, layers, and metadata, making it ideal for professional workflows and archival storage.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Our free TIFF converter lets you transform TIFF images to any other format you need. Whether you're optimizing for the web, ensuring compatibility with older software, or preparing images for print, PixConvert has you covered.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Every conversion happens locally in your browser using WebAssembly processing. This means your files stay on your device throughout the entire process, ensuring complete privacy and security. There's no upload queue, no server processing time, and no risk of your images being stored on third-party servers.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">Upload one TIFF file or process hundreds in a single batch. Choose from all major output formats including JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, and ICO. Adjust quality settings, preview results, and download your converted files instantly — all for free.</p>
      </div>
    </section>
  );
}
