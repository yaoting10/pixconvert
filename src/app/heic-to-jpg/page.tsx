import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert iPhone HEIC photos to JPG instantly in your browser. Share your photos with anyone, anywhere. No uploads, 100% private, completely free.",
  keywords: [
    "heic to jpg",
    "convert heic to jpg",
    "heic jpg converter",
    "iphone heic to jpg",
    "heic to jpeg",
    "heic to jpg online",
    "free heic to jpg",
    "heic to jpg no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/heic-to-jpg",
  },
  openGraph: {
    title: "HEIC to JPG Converter – Free, Private & Instant",
    description:
      "Convert iPhone HEIC photos to JPG instantly in your browser. No uploads, 100% private.",
    url: "https://pixconvert.org/heic-to-jpg",
    siteName: "PixConvert",
    type: "website",
  },
};

export default function HeicToJpgPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert HEIC to JPG Online"
        subtitle="Turn your iPhone HEIC photos into universally compatible JPG files. Share with anyone — no special software needed."
        inputFormat="heic"
        outputFormat="jpg"
        description="Upload your iPhone HEIC/HEIF photos and convert them to JPG instantly. HEIC files are great for storage but not everyone can open them. JPG works everywhere."
      />
      <HeicJpgInfoSection />
      <WhyLocalSection />
      <FAQSection />
      <FooterCTASection />
    </>
  );
}

function HeicJpgInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert HEIC to JPG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Compatibility</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            JPG is supported by virtually every device, browser, and app. HEIC (Apple's format) isn't supported on older Android phones, Windows PCs, or many websites.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Easy Sharing</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Email clients, social media, and messaging apps work best with JPG. Converting HEIC to JPG before sharing avoids "file not supported" errors.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Web Ready</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Most websites and content management systems expect JPG images. Converting HEIC to JPG makes your photos ready for web use immediately.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          HEIC vs JPG: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">HEIC</th>
                <th className="text-left py-2 font-medium text-success">JPG</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">~50% smaller than JPG</td>
                <td className="py-2">Standard</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Quality</td>
                <td className="py-2 pr-4">Excellent</td>
                <td className="py-2">Good</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compatibility</td>
                <td className="py-2 pr-4">Limited (Apple ecosystem)</td>
                <td className="py-2">Universal</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Created By</td>
                <td className="py-2 pr-4">Apple (iPhone)</td>
                <td className="py-2">Joint Photographic Experts Group</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Storing photos on device</td>
                <td className="py-2">Sharing, web, printing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
