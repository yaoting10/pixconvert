import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "GIF Converter – Convert To/From GIF Free | PixConvert",
  description:
    "Free online GIF converter. Convert images to GIF or from GIF to JPG, PNG, WebP and more. Supports animation. 100% private browser-based conversion.",
  keywords: [
    "gif converter",
    "convert to gif",
    "gif to jpg",
    "gif to png",
    "free gif converter",
    "online gif converter",
    "gif image converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/gif-converter",
  },
  openGraph: {
    title: "GIF Converter – Convert To/From GIF Free",
    description:
      "Free online GIF converter. Convert images to GIF or from GIF to JPG, PNG, WebP and more. Supports animation. 100% privat...",
    url: "https://pixconvert.org/gif-converter",
    siteName: "PixConvert",
    type: "website",
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is a GIF file?",
    answer:
      "GIF (Graphics Interchange Format) is an image format that supports up to 256 colors and simple animations. It's been widely used since 1987 and remains popular for memes, reactions, and short animated content.",
  },
  {
    question: "Why convert images to GIF?",
    answer:
      "GIF is the best choice when you need simple animation support or maximum compatibility. Every browser, messaging app, and social platform supports GIF.",
  },
  {
    question: "Why are GIF files so large?",
    answer:
      "GIF uses older compression technology and is limited to 256 colors. For static images, PNG or WebP are much more efficient. For animations, consider WebP or MP4 for better compression.",
  },
  {
    question: "Can I convert animated GIF to video?",
    answer:
      "PixConvert converts GIF frames to static images (JPG, PNG, WebP). For GIF-to-video conversion, you would need specialized video conversion tools.",
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
        title="GIF Image Converter"
        subtitle="Convert any image to GIF or transform GIF files to other formats. Supports animated GIFs. Fast, free, and completely private."
        defaultOutputFormat="gif"
        description="Upload your images and convert them to GIF format, or convert GIF files to JPG, PNG, WebP and more. All processing happens locally in your browser."
      />
      <InfoSection />
      <WhyLocalSection />
      <FAQSection faqs={converterFaqs} title="GIF Converter FAQ" />
      <RelatedConversions />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From GIF?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Animation Support</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            GIF is the most widely supported format for simple animations. Perfect for memes, reactions, short demos, and social media content.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            GIF works everywhere — every browser, every messaging app, every social platform. No format has broader support for animated images.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Simple and Reliable</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            GIF uses a simple, well-understood format. It's been around since 1987 and continues to be the go-to for basic animated images.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          GIF vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">GIF</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Animation</td>
                <td className="py-2 pr-4">Yes (simple)</td>
                <td className="py-2">WebP/APNG also</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Colors</td>
                <td className="py-2 pr-4">256 max</td>
                <td className="py-2">Millions (PNG/JPG)</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Yes (1-bit)</td>
                <td className="py-2">PNG has full alpha</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">LZW lossless</td>
                <td className="py-2">Better in modern formats</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Simple animations</td>
                <td className="py-2">Photography, graphics</td>
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
        Popular GIF Conversions
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        <a href="/gif-to-jpg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to JPG</a>
        <a href="/gif-to-jpeg" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to JPEG</a>
        <a href="/gif-to-png" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to PNG</a>
        <a href="/gif-to-webp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to WebP</a>
        <a href="/gif-to-avif" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to AVIF</a>
        <a href="/gif-to-bmp" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to BMP</a>
        <a href="/gif-to-tiff" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to TIFF</a>
        <a href="/gif-to-ico" className="px-4 py-2 rounded-full text-sm font-medium bg-surface-container-lowest border border-border text-on-background hover:border-primary hover:text-primary transition-all duration-200">GIF to ICO</a>
      </div>
    </section>
  );
}
