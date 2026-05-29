import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "AVIF Converter – Convert To/From AVIF Free | PixConvert",
  description:
    "Free online AVIF converter. Convert images to AVIF or from AVIF to JPG, PNG, WebP and more. 50% smaller than JPG. 100% private browser-based conversion.",
  keywords: [
    "avif converter",
    "convert to avif",
    "avif to jpg",
    "avif to png",
    "free avif converter",
    "online avif converter",
    "avif image converter"
  ],
  alternates: {
    canonical: "https://pixconvert.org/avif-converter",
  },
  openGraph: {
    title: "AVIF Converter – Convert To/From AVIF Free",
    description:
      "Free online AVIF converter. Convert images to AVIF or from AVIF to JPG, PNG, WebP and more. 50% smaller than JPG. 100% p...",
    url: "https://pixconvert.org/avif-converter",
    siteName: "PixConvert",
    type: "website",
  },
};

const converterFaqs: FAQItem[] = [
  {
    question: "What is AVIF?",
    answer:
      "AVIF (AV1 Image File Format) is a next-generation image format based on the AV1 video codec. It offers the best compression available, producing files up to 50% smaller than JPG at the same quality.",
  },
  {
    question: "Why convert to AVIF?",
    answer:
      "AVIF provides dramatically smaller file sizes than JPG, PNG, and even WebP. This means faster loading websites, reduced storage costs, and better performance — especially important for mobile users.",
  },
  {
    question: "Is AVIF supported by browsers?",
    answer:
      "AVIF is supported by Chrome, Firefox, and Safari. Support is growing rapidly across all platforms. For older browsers, you can provide fallback images using the picture element.",
  },
  {
    question: "Can I convert AVIF to other formats?",
    answer:
      "Yes. If you need to use AVIF images in software that doesn't support the format yet, you can easily convert them to JPG, PNG, or WebP using PixConvert.",
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
        title="AVIF Image Converter"
        subtitle="Convert any image to AVIF or transform AVIF files to other formats. Next-gen compression, 50% smaller files. Fast, free, and completely private."
        defaultOutputFormat="avif"
        description="Upload your images and convert them to cutting-edge AVIF format for dramatically smaller files, or convert AVIF to JPG, PNG, WebP and more. All processing happens locally."
      />
      <InfoSection />
      <WhyLocalSection />
      <FAQSection faqs={converterFaqs} title="AVIF Converter FAQ" />
      <FooterCTASection />
    </>
  );
}

function InfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert To/From AVIF?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Superior Compression</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            AVIF produces files up to 50% smaller than JPG while maintaining the same visual quality. The most efficient image format available today.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Next-Gen Format</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            AVIF is based on AV1 video codec and represents the future of image compression. Major platforms like Netflix and YouTube already use it.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">HDR Support</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            AVIF supports High Dynamic Range (HDR) and wide color gamut, making it ideal for professional photography and high-quality web images.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          AVIF vs Other Formats
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">AVIF</th>
                <th className="text-left py-2 font-medium text-success">Other Formats</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">~50% smaller than JPG</td>
                <td className="py-2">JPG/PNG much larger</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Quality</td>
                <td className="py-2 pr-4">Superior at same size</td>
                <td className="py-2">Good</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">HDR Support</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">No</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">Growing rapidly</td>
                <td className="py-2">Universal</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Future-proof web images</td>
                <td className="py-2">Current compatibility</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
