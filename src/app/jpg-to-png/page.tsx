import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "JPG to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert JPG to PNG instantly in your browser. No uploads, no waiting. Free batch conversion with adjustable quality. 100% private – your files never leave your device.",
  keywords: [
    "jpg to png",
    "convert jpg to png",
    "jpg png converter",
    "free jpg to png",
    "batch jpg to png",
    "jpg to png online",
    "jpg to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/jpg-to-png",
  },
  openGraph: {
    title: "JPG to PNG Converter – Free, Private & Instant",
    description:
      "Convert JPG to PNG instantly in your browser. No uploads, no waiting. Free batch conversion.",
    url: "https://pixconvert.org/jpg-to-png",
    siteName: "PixConvert",
    type: "website",
  },
};

export default function JpgToPngPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert JPG to PNG Online"
        subtitle="Transform your JPG images to PNG format with transparency support. Fast, free, and completely private."
        inputFormat="jpg"
        outputFormat="png"
        description="Drag & drop your JPG/JPEG files below. We'll convert them to high-quality PNG images right in your browser — no server uploads ever."
      />
      <JpgPngInfoSection />
      <WhyLocalSection />
      <FAQSection />
      <FooterCTASection />
    </>
  );
}

function JpgPngInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert JPG to PNG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Transparency</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG supports alpha channels, making it ideal for logos, icons, and images that need transparent backgrounds. JPG does not support transparency.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Lossless Quality</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG uses lossless compression, so no image data is lost during conversion. Perfect for graphics, screenshots, and text-heavy images.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Editing Friendly</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG files are better suited for repeated editing. Unlike JPG, saving a PNG multiple times won't degrade image quality.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          JPG vs PNG: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">JPG</th>
                <th className="text-left py-2 font-medium text-success">PNG</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossy</td>
                <td className="py-2">Lossless</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">No</td>
                <td className="py-2">Yes</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Smaller</td>
                <td className="py-2">Larger</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Photography</td>
                <td className="py-2">Graphics, logos</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Editing</td>
                <td className="py-2 pr-4">Degrades over time</td>
                <td className="py-2">Preserves quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
