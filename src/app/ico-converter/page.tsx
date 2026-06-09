import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "ICO Converter – Convert To/From ICO Free | PixConvert",
  description:
    "Free online ICO converter. Convert images to ICO or from ICO to PNG, JPG, WebP and more. Perfect for favicons. 100% private browser-based conversion.",
  keywords: [
    "ico converter",
    "convert to ico",
    "ico to png",
    "image to ico",
    "free ico converter",
    "online ico converter",
    "favicon converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/ico-converter",
  },
  openGraph: {
    title: "ICO Converter – Convert To/From ICO Free",
    description:
      "Free online ICO converter. Convert images to ICO or from ICO to PNG, JPG, WebP and more. Perfect for favicons. 100% priv...",
    url: "https://pixconvert.org/ico-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ICO Converter – Convert To/From ICO Free | PixConvert",
    description: "Free online ICO converter. Convert images to ICO or from ICO to PNG, JPG, WebP and more. Perfect for favicons. 100% private browser-based conversion.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is an ICO file?",
    answer:
      "ICO is a Microsoft Windows icon format that can contain multiple images at different sizes and color depths. It's commonly used for website favicons and Windows application icons.",
  },
  {
    question: "How do I create a favicon from my logo?",
    answer:
      "Simply upload your logo image to PixConvert and select ICO as the output format. The converter will create an ICO file suitable for use as a website favicon.",
  },
  {
    question: "Why convert ICO to PNG?",
    answer:
      "ICO has limited support outside Windows. Converting to PNG gives you a universally compatible image that works on all platforms, browsers, and design tools.",
  },
  {
    question: "What sizes should my ICO file contain?",
    answer:
      "For favicons, common sizes are 16x16, 32x32, and 48x48 pixels. Modern browsers also support larger sizes like 192x192 and 512x512 for home screen icons.",
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
        title="ICO Image Converter"
        subtitle="Convert any image to ICO or transform ICO files to modern formats. Perfect for favicons and icons. Fast, free, and completely private."
        defaultOutputFormat="ico"
        description="Upload your images and convert them to ICO format for favicons and Windows icons, or convert ICO files to PNG, JPG, WebP and more. All processing happens locally."
      />
      <InfoSection />
      <WhyLocalSection />
      <FAQSection faqs={converterFaqs} title="ICO Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From ICO?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Favicon Creation</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            ICO is the standard format for website favicons. Convert your logo or image to ICO to create professional favicons that work across all browsers.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Windows Icons</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            ICO is the native Windows icon format. Use it for application icons, folder icons, and shortcut icons on Windows systems.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Convert to Modern Formats</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            ICO has limited support outside Windows. Converting ICO to PNG gives you universal compatibility for web and design use.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          ICO vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">ICO</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Multiple Sizes</td>
                <td className="py-2 pr-4">Yes (in one file)</td>
                <td className="py-2">One size per file</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Platform</td>
                <td className="py-2 pr-4">Windows primarily</td>
                <td className="py-2">Universal (PNG)</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Limited</td>
                <td className="py-2">PNG has full alpha</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Favicons, Windows icons</td>
                <td className="py-2">Web, design, sharing</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">Limited</td>
                <td className="py-2">PNG universal</td>
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
        Popular ICO Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/ico-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to JPG</a>
        <a href="/ico-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to JPEG</a>
        <a href="/ico-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to PNG</a>
        <a href="/ico-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to WebP</a>
        <a href="/ico-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to AVIF</a>
        <a href="/ico-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to GIF</a>
        <a href="/ico-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to BMP</a>
        <a href="/ico-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">ICO to TIFF</a>
      </div>
    </section>
  );
}
