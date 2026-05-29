import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "ICO to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert ICO icon files to PNG instantly in your browser. Get transparent, high-quality PNGs for websites, apps, and design work. No uploads, 100% private, completely free.",
  keywords: [
    "ico to png",
    "convert ico to png",
    "ico png converter",
    "icon converter",
    "favicon to png",
    "ico to png online",
    "free ico to png",
    "ico to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/ico-to-png",
  },
  openGraph: {
    title: "ICO to PNG Converter – Free, Private & Instant",
    description:
      "Convert ICO icon files to PNG instantly in your browser. No uploads, 100% private.",
    url: "https://pixconvert.org/ico-to-png",
    siteName: "PixConvert",
    type: "website",
  },
};

const icoToPngFaqs: FAQItem[] = [
  {
    question: "What is an ICO file?",
    answer:
      "ICO is a Microsoft Windows icon format used for favicons, application icons, and folder icons. It can contain multiple images at different sizes and color depths. However, ICO is not widely supported outside Windows, which is why converting to PNG is often necessary.",
  },
  {
    question: "Why convert ICO to PNG?",
    answer:
      "PNG is universally supported across all platforms, browsers, and design tools. Converting ICO to PNG gives you a single high-quality image with transparency support, making it ideal for web development, graphic design, and cross-platform app development.",
  },
  {
    question: "Will transparency be preserved?",
    answer:
      "Yes. If your ICO file contains transparent pixels, the resulting PNG will preserve that transparency. PNG supports full alpha channel transparency, making it perfect for icons and logos that need to blend with different backgrounds.",
  },
  {
    question: "What about multiple sizes in an ICO file?",
    answer:
      "ICO files can contain multiple icon sizes (e.g., 16x16, 32x32, 48x48, 256x256). When converting, the largest available size is extracted and converted to PNG for the best quality. If you need a specific size, you can resize the resulting PNG.",
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

export default function IcoToPngPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert ICO to PNG Online"
        subtitle="Turn your Windows ICO icons into universally compatible PNG files. Perfect for web, design, and cross-platform use."
        defaultOutputFormat="png"
        description="Upload your ICO icon files and convert them to PNG instantly. ICO works great on Windows but PNG is the universal standard for icons on the web and across all platforms."
      />
      <IcoPngInfoSection />
      <WhyLocalSection />
      <FAQSection faqs={icoToPngFaqs} title="ICO to PNG FAQ" />
      <FooterCTASection />
    </>
  );
}

function IcoPngInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert ICO to PNG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG is supported by every browser, operating system, and design tool. ICO is primarily a Windows format and often causes issues on macOS, Linux, and mobile devices.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Web Ready</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Modern websites use PNG (or SVG) for icons and favicons. Converting ICO to PNG ensures your icons display correctly everywhere, from Chrome to Safari to mobile browsers.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Design Workflow</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Most design tools like Figma, Sketch, and Adobe Photoshop work better with PNG than ICO. Converting lets you edit and manipulate your icons in any tool you prefer.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          ICO vs PNG: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">ICO</th>
                <th className="text-left py-2 font-medium text-success">PNG</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Platform Support</td>
                <td className="py-2 pr-4">Windows primarily</td>
                <td className="py-2">Universal</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Limited</td>
                <td className="py-2">Full alpha channel</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Multiple Sizes</td>
                <td className="py-2 pr-4">Yes (in one file)</td>
                <td className="py-2">One size per file</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Browser Support</td>
                <td className="py-2 pr-4">Limited</td>
                <td className="py-2">Universal</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Windows app icons</td>
                <td className="py-2">Web, design, sharing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
