import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG Converter – Convert To/From PNG Free | PixConvert",
  description:
    "Free online PNG converter. Convert images to PNG or from PNG to JPG, WebP, GIF, BMP and more. Supports transparency. 100% private browser-based conversion.",
  keywords: [
    "png converter",
    "convert to png",
    "png to jpg",
    "png to webp",
    "free png converter",
    "online png converter",
    "png with transparency"
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-converter",
  },
  openGraph: {
    title: "PNG Converter – Convert To/From PNG Free",
    description:
      "Free online PNG converter. Convert images to PNG or from PNG to JPG, WebP, GIF, BMP and more. Supports transparency. 100...",
    url: "https://pixconvert.org/png-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PNG Converter – Convert To/From PNG Free | PixConvert",
    description: "Free online PNG converter. Convert images to PNG or from PNG to JPG, WebP, GIF, BMP and more. Supports transparency. 100% private browser-based conversion.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a PNG file?",
    answer:
      "PNG (Portable Network Graphics) is a lossless image format that supports transparency. It's the standard for web graphics, logos, icons, and any image where quality and transparency are important.",
  },
  {
    question: "Why convert images to PNG?",
    answer:
      "PNG is the best choice when you need transparency, lossless quality, or plan to edit the image repeatedly. It's ideal for logos, icons, screenshots, and graphics with text.",
  },
  {
    question: "Will PNG files be larger than JPG?",
    answer:
      "Yes, PNG files are typically larger than JPG because they use lossless compression. However, for graphics and logos, the quality preservation is worth the extra size.",
  },
  {
    question: "Can I convert JPG to transparent PNG?",
    answer:
      "Converting JPG to PNG won't create transparency if the original JPG doesn't have it. However, once in PNG format, you can use editing tools to remove backgrounds and create transparency.",
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
        title="PNG Image Converter"
        subtitle="Convert any image to PNG or transform PNG files to other formats. Supports transparency. Fast, free, and completely private."
        defaultOutputFormat="png"
        description="Upload your images and convert them to high-quality PNG files with transparency support, or convert existing PNGs to JPG, WebP, GIF and more. All processing happens locally."
      />
      <InfoSection />
      <WhyLocalSection heading="Why Convert PNG Locally?" />
      <FAQSection faqs={converterFaqs} title="PNG Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From PNG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Transparency Support</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG supports alpha channel transparency, making it the go-to format for logos, icons, and images that need to blend seamlessly with different backgrounds.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Lossless Quality</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG uses lossless compression, preserving every pixel of your original image. Perfect for graphics, screenshots, and images where quality is paramount.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Web Standard</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">PNG is supported by all modern browsers and is the standard format for web graphics that require transparency or lossless quality.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          PNG vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">PNG</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossless</td>
                <td className="py-2">JPG is lossy</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Full alpha channel</td>
                <td className="py-2">JPG/BMP don't support</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Graphics, logos, UI</td>
                <td className="py-2">Photography (JPG)</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Larger</td>
                <td className="py-2">JPG is smaller</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Editing</td>
                <td className="py-2 pr-4">Preserves quality</td>
                <td className="py-2">JPG degrades</td>
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
        Popular PNG Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/png-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPG</a>
        <a href="/png-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to JPEG</a>
        <a href="/png-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to WebP</a>
        <a href="/png-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to AVIF</a>
        <a href="/png-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to GIF</a>
        <a href="/png-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to BMP</a>
        <a href="/png-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to TIFF</a>
        <a href="/png-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">PNG to ICO</a>
      </div>
    </section>
  );
}
