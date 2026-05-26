import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to WebP Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to WebP instantly in your browser. Reduce file sizes by 25-35% while keeping transparency. No uploads, no waiting. 100% private.",
  keywords: [
    "png to webp",
    "convert png to webp",
    "png webp converter",
    "free png to webp",
    "png to webp online",
    "png to webp transparent",
    "png to webp no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-webp",
  },
  openGraph: {
    title: "PNG to WebP Converter – Free, Private & Instant",
    description:
      "Convert PNG to WebP instantly in your browser. Reduce file sizes by 25-35% while keeping transparency.",
    url: "https://pixconvert.org/png-to-webp",
    siteName: "PixConvert",
    type: "website",
  },
};

const pngToWebpFaqs: FAQItem[] = [
  {
    question: "Will my transparent PNG stay transparent in WebP?",
    answer:
      "Yes! WebP fully supports alpha channel transparency, just like PNG. When you convert a transparent PNG to WebP, the transparency is preserved. This makes WebP an excellent replacement for PNG on websites.",
  },
  {
    question: "Why convert PNG to WebP instead of JPG?",
    answer:
      "WebP offers the best of both worlds: smaller file sizes like JPG, but with transparency support like PNG. If your PNG has a transparent background, converting to JPG would lose that transparency. WebP keeps it while still reducing file size by 25-35%.",
  },
  {
    question: "Is WebP better than PNG for website logos and icons?",
    answer:
      "For web use, absolutely. WebP produces significantly smaller files than PNG while maintaining the same visual quality and transparency. This means faster page loads, especially on mobile devices. For print or offline use, PNG still has wider compatibility.",
  },
  {
    question: "Can I batch convert multiple PNGs to WebP?",
    answer:
      "Yes! You can drag and drop multiple PNG files at once. All files will be converted to WebP format simultaneously, preserving their transparency and quality.",
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

export default function PngToWebpPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to WebP Online"
        subtitle="Shrink your PNG images by up to 35% with WebP format. Keep full transparency and quality while optimizing for the web."
        inputFormat="png"
        outputFormat="webp"
        description="Upload your PNG files and convert them to WebP instantly. WebP offers smaller file sizes than PNG with the same visual quality — perfect for faster websites."
      />
      <PngWebpInfoSection />
      <WhyLocalSection />
      <FAQSection faqs={pngToWebpFaqs} title="PNG to WebP FAQ" />
      <FooterCTASection />
    </>
  );
}

function PngWebpInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert PNG to WebP?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Smaller File Size</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            WebP typically produces files 25-35% smaller than PNG with the same visual quality. This means faster page loads and lower bandwidth costs.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Keep Transparency</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Unlike JPG, WebP supports alpha channel transparency just like PNG. Convert your transparent PNGs to WebP without losing the alpha channel.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Google Recommended</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Google officially recommends WebP for web images. Using WebP can improve your Core Web Vitals scores and SEO rankings.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          PNG vs WebP: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">PNG</th>
                <th className="text-left py-2 font-medium text-success">WebP</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Larger</td>
                <td className="py-2">25-35% smaller</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">Yes</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Animation</td>
                <td className="py-2 pr-4">No (APNG only)</td>
                <td className="py-2">Yes</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">Universal</td>
                <td className="py-2">96%+ modern browsers</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Universal compatibility</td>
                <td className="py-2">Web optimization</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
