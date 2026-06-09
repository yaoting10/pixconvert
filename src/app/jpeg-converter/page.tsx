import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPEG Converter – Convert To/From JPEG Free | PixConvert",
  description:
    "Free online JPEG converter. Convert images to JPEG or from JPEG to PNG, WebP, GIF, BMP and more. 100% private browser-based conversion with no uploads.",
  keywords: [
    "jpeg converter",
    "convert to jpeg",
    "jpeg to png",
    "jpeg to webp",
    "free jpeg converter",
    "online jpeg converter",
    "batch jpeg conversion"
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpeg-converter",
  },
  openGraph: {
    title: "JPEG Converter – Convert To/From JPEG Free",
    description:
      "Free online JPEG converter. Convert images to JPEG or from JPEG to PNG, WebP, GIF, BMP and more. 100% private browser-ba...",
    url: "https://pixconvert.org/jpeg-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPEG Converter – Convert To/From JPEG Free | PixConvert",
    description: "Free online JPEG converter. Convert images to JPEG or from JPEG to PNG, WebP, GIF, BMP and more. 100% private browser-based conversion with no uploads.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a JPEG file?",
    answer:
      "JPEG (Joint Photographic Experts Group) is a widely-used image format that uses lossy compression to reduce file size. It's the standard format for photographs and web images due to its excellent balance of quality and file size.",
  },
  {
    question: "What's the difference between JPG and JPEG?",
    answer:
      "There is no difference in the file format. JPG is simply a shorter file extension used by older Windows systems that only supported 3-letter extensions. Both are identical.",
  },
  {
    question: "Why convert images to JPEG?",
    answer:
      "JPEG offers universal compatibility and smaller file sizes. It's the best choice when you need to share photos online, send via email, or store large numbers of images efficiently.",
  },
  {
    question: "Will converting to JPEG reduce quality?",
    answer:
      "JPEG uses lossy compression, so some quality is lost. However, at high quality settings (85%+), the difference is barely noticeable for most photographs.",
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
        title="JPEG Image Converter"
        subtitle="Convert any image to JPEG or transform JPEG files to other formats. Fast, free, and completely private."
        defaultOutputFormat="jpeg"
        description="Upload your images and convert them to high-quality JPEG files, or convert existing JPEGs to PNG, WebP, GIF and more. All processing happens locally in your browser."
      />
      <InfoSection />
      <WhyLocalSection heading="Why Convert JPEG Locally?" />
      <FAQSection faqs={converterFaqs} title="JPEG Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From JPEG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPEG is the most widely used image format on the web, supported by every browser, device, and image editor. Perfect for photos and complex images.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Smaller File Sizes</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPEG uses lossy compression to dramatically reduce file sizes while maintaining acceptable visual quality, making it ideal for web use and sharing.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Easy Sharing</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPEG files are universally recognized and can be opened on any device without special software, making sharing effortless across all platforms.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          JPEG vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">JPEG</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossy (smaller files)</td>
                <td className="py-2">Varies by format</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">PNG/WebP support it</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Photography</td>
                <td className="py-2">Graphics, logos, icons</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Small</td>
                <td className="py-2">Often larger</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Editing</td>
                <td className="py-2 pr-4">Loses quality</td>
                <td className="py-2">PNG preserves quality</td>
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
        Popular JPEG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpeg-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to JPG</a>
        <a href="/jpeg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to PNG</a>
        <a href="/jpeg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to WebP</a>
        <a href="/jpeg-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to AVIF</a>
        <a href="/jpeg-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to GIF</a>
        <a href="/jpeg-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to BMP</a>
        <a href="/jpeg-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to TIFF</a>
        <a href="/jpeg-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPEG to ICO</a>
      </div>
    </section>
  );
}
