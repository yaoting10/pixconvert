import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "WebP Converter – Convert To/From WebP Free | PixConvert",
  description:
    "Free online WebP converter. Convert images to WebP or from WebP to JPG, PNG, GIF and more. 30% smaller files. 100% private browser-based conversion.",
  keywords: [
    "webp converter",
    "convert to webp",
    "webp to jpg",
    "webp to png",
    "free webp converter",
    "online webp converter",
    "webp image converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/webp-converter",
  },
  openGraph: {
    title: "WebP Converter – Convert To/From WebP Free",
    description:
      "Free online WebP converter. Convert images to WebP or from WebP to JPG, PNG, GIF and more. 30% smaller files. 100% priva...",
    url: "https://pixconvert.org/webp-converter",
    siteName: "PixConvert",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebP Converter – Convert To/From WebP Free | PixConvert",
    description: "Free online WebP converter. Convert images to WebP or from WebP to JPG, PNG, GIF and more. 30% smaller files. 100% private browser-based conversion.",
    images: ["https://pixconvert.org/og-image.png"],
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is WebP?",
    answer:
      "WebP is a modern image format developed by Google that provides superior compression compared to JPG and PNG. It supports both lossy and lossless compression, transparency, and animation.",
  },
  {
    question: "Why convert to WebP?",
    answer:
      "WebP files are 25-35% smaller than JPG and PNG at the same quality. This means faster website loading, reduced bandwidth costs, and better user experience — especially on mobile.",
  },
  {
    question: "Is WebP supported everywhere?",
    answer:
      "WebP is supported by all modern browsers including Chrome, Firefox, Safari, and Edge. It's now the recommended format for web images by Google and most web performance experts.",
  },
  {
    question: "Can I convert WebP to JPG or PNG?",
    answer:
      "Yes. If you need compatibility with older systems or specific software, you can easily convert WebP to JPG, PNG, or any other format using PixConvert.",
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
        title="WebP Image Converter"
        subtitle="Convert any image to WebP or transform WebP files to other formats. Smaller files, same quality. Fast, free, and completely private."
        defaultOutputFormat="webp"
        description="Upload your images and convert them to modern WebP format for 25-35% smaller files, or convert WebP to JPG, PNG, GIF and more. All processing happens locally."
      />
      <InfoSection />
      <DetailedContent />
      <WhyLocalSection heading="Why Convert WEBP Locally?" />
      <FAQSection faqs={converterFaqs} title="WebP Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From WebP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Smaller File Sizes</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">WebP typically produces files 25-35% smaller than JPG and PNG while maintaining the same visual quality, significantly improving web page load times.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Modern Web Standard</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">Developed by Google, WebP is now supported by all major browsers and is the recommended format for modern web performance optimization.</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Lossy + Lossless</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">WebP supports both lossy and lossless compression, as well as transparency and animation, making it a versatile replacement for JPG, PNG, and GIF.</p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          WebP vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">WebP</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">25-35% smaller</td>
                <td className="py-2">JPG/PNG larger</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Yes (lossless)</td>
                <td className="py-2">PNG yes, JPG no</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Animation</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">GIF yes, PNG/JPG no</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">All modern browsers</td>
                <td className="py-2">Universal</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Web optimization</td>
                <td className="py-2">General use</td>
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
        Popular WebP Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/webp-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to JPG</a>
        <a href="/webp-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to JPEG</a>
        <a href="/webp-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to PNG</a>
        <a href="/webp-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to AVIF</a>
        <a href="/webp-to-gif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to GIF</a>
        <a href="/webp-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to BMP</a>
        <a href="/webp-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to TIFF</a>
        <a href="/webp-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">WebP to ICO</a>
      </div>
    </section>
  );
}
function DetailedContent() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        About WEBP Conversion
      </h2>
      <div className="max-w-3xl mx-auto">
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">WebP is Google's modern image format that combines the best features of JPG and PNG. Our WebP converter lets you convert WebP images to any format you need, or convert other formats into the efficient WebP format.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">WebP typically produces files 25-35% smaller than JPG or PNG while maintaining equivalent quality. This makes it ideal for websites, apps, and any situation where fast loading matters. However, older systems may still require traditional formats.</p>
        <p className="text-base text-on-surface-variant leading-relaxed mb-4">PixConvert processes all WebP conversions locally in your browser. No uploads, no waiting, no privacy concerns. Convert single images or entire batches for free, with no watermarks or registration required.</p>
      </div>
    </section>
  );
}
