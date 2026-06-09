import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG Converter – Convert To/From JPG Free | PixConvert",
  description:
    "Free online JPG converter. Convert images to JPG or from JPG to PNG, WebP, GIF, BMP and more. 100% private browser-based conversion with no uploads.",
  keywords: [
    "jpg converter",
    "convert to jpg",
    "jpg to png",
    "jpg to webp",
    "free jpg converter",
    "online jpg converter",
    "batch jpg conversion"
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-converter",
  },
  openGraph: {
    title: "JPG Converter – Convert To/From JPG Free",
    description:
      "Free online JPG converter. Convert images to JPG or from JPG to PNG, WebP, GIF, BMP and more. 100% private browser-based...",
    url: "https://pixconvert.org/jpg-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JPG Converter – Convert To/From JPG Free | PixConvert",
    description: "Free online JPG converter. Convert images to JPG or from JPG to PNG, WebP, GIF, BMP and more. 100% private browser-based conversion with no uploads.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a JPG file?",
    answer:
      "JPG (or JPEG) is a widely-used image format that uses lossy compression to reduce file size. It's the standard format for photographs and web images due to its excellent balance of quality and file size.",
  },
  {
    question: "Why convert images to JPG?",
    answer:
      "JPG offers universal compatibility and smaller file sizes. It's the best choice when you need to share photos online, send via email, or store large numbers of images efficiently.",
  },
  {
    question: "Will converting to JPG reduce quality?",
    answer:
      "JPG uses lossy compression, so some quality is lost. However, at high quality settings (85%+), the difference is barely noticeable for most photographs.",
  },
  {
    question: "Can I convert JPG to transparent PNG?",
    answer:
      "No — JPG doesn't support transparency. If you need transparency, convert to PNG instead. The resulting PNG will have a solid background.",
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
        title="JPG Image Converter"
        subtitle="Convert any image to JPG or transform JPG files to other formats. Fast, free, and completely private."
        defaultOutputFormat="jpg"
        description="Upload your images and convert them to high-quality JPG files, or convert existing JPGs to PNG, WebP, GIF and more. All processing happens locally in your browser."
      />
      <InfoSection />
      <WhyLocalSection heading="Why Convert JPG Locally?" />
      <FAQSection faqs={converterFaqs} title="JPG Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From JPG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPG is the most widely used image format on the web, supported by every browser, device, and image editor. Perfect for photos and complex images.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Smaller File Sizes</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPG uses lossy compression to dramatically reduce file sizes while maintaining acceptable visual quality, making it ideal for web use and sharing.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Easy Sharing</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">JPG files are universally recognized and can be opened on any device without special software, making sharing effortless across all platforms.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          JPG vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">JPG</th>
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
        Popular JPG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/jpg-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to JPEG</a>
        <a href="/jpg-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to PNG</a>
        <a href="/jpg-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to WebP</a>
        <a href="/jpg-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to AVIF</a>
        <a href="/jpg-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to GIF</a>
        <a href="/jpg-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to BMP</a>
        <a href="/jpg-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to TIFF</a>
        <a href="/jpg-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">JPG to ICO</a>
      </div>
    </section>
  );
}
