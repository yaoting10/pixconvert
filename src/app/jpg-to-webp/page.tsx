import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to WebP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to WebP instantly in your browser. Reduce image sizes by 25-35% for faster websites. No uploads, no waiting. 100% private and free.",
  keywords: [
    "jpg to webp",
    "convert jpg to webp",
    "jpg webp converter",
    "free jpg to webp",
    "jpg to webp online",
    "batch jpg to webp",
    "jpg to webp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-webp",
  },
  openGraph: {
    title: "JPG to WebP Converter – Free, Private & Instant",
    description:
      "Convert JPG to WebP instantly in your browser. Reduce image sizes by 25-35% for faster websites.",
    url: "https://pixconvert.org/jpg-to-webp",
    siteName: "PixConvert",
    type: "website",
  },
};

const jpgToWebpFaqs: FAQItem[] = [
  {
    question: "Will WebP images work on all browsers?",
    answer:
      "WebP is supported by 96%+ of modern browsers including Chrome, Firefox, Safari, and Edge. For the rare older browsers that don't support it, you can use the <picture> element to provide a JPG fallback.",
  },
  {
    question: "How much smaller are WebP files compared to JPG?",
    answer:
      "WebP files are typically 25-35% smaller than JPG at the same visual quality. For a website with many images, this can significantly reduce page load times and improve user experience.",
  },
  {
    question: "Does converting JPG to WebP improve my Google ranking?",
    answer:
      "Indirectly, yes. Google uses page speed as a ranking factor, and smaller images load faster. WebP also helps improve Core Web Vitals metrics like Largest Contentful Paint (LCP), which Google considers in rankings.",
  },
  {
    question: "Can I convert WebP back to JPG if needed?",
    answer:
      "Yes! Use our WebP to JPG converter. However, keep in mind that converting from lossy WebP to lossy JPG may result in slightly more quality loss due to double compression.",
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

export default function JpgToWebpPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to WebP Online"
        subtitle="Optimize your images for the web. Convert JPG to WebP and reduce file sizes by up to 35% without visible quality loss."
        inputFormat="jpg"
        outputFormat="webp"
        description="Upload your JPG/JPEG files and convert them to WebP format instantly. WebP is the modern image format recommended by Google for faster websites."
      />
      <JpgWebpInfoSection />
      <WhyLocalSection />
      <FAQSection faqs={jpgToWebpFaqs} title="JPG to WebP FAQ" />
      <FooterCTASection />
    </>
  );
}

function JpgWebpInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert JPG to WebP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Faster Websites</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            WebP files are 25-35% smaller than JPG at the same visual quality. Smaller images mean faster page loads and better user experience.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Better SEO</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Google uses page speed as a ranking factor. Switching to WebP can improve your Core Web Vitals and help you rank higher in search results.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Lower Bandwidth</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Smaller image files mean less data transfer. This saves bandwidth costs for website owners and reduces data usage for mobile visitors.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          JPG vs WebP: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">JPG</th>
                <th className="text-left py-2 font-medium text-success">WebP</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Standard</td>
                <td className="py-2">25-35% smaller</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossy only</td>
                <td className="py-2">Lossy + Lossless</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">Yes</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Animation</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">Yes</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">Universal</td>
                <td className="py-2">96%+ (all modern browsers)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
