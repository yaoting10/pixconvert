import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "PNG to JPG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert PNG to JPG instantly in your browser. Reduce file sizes for easier sharing and storage. No uploads, no waiting. 100% private and free.",
  keywords: [
    "png to jpg",
    "convert png to jpg",
    "png jpg converter",
    "free png to jpg",
    "png to jpg online",
    "png to jpeg",
    "batch png to jpg",
    "png to jpg no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/png-to-jpg",
  },
  openGraph: {
    title: "PNG to JPG Converter – Free, Private & Instant",
    description:
      "Convert PNG to JPG instantly in your browser. Reduce file sizes for easier sharing and storage.",
    url: "https://pixconvert.org/png-to-jpg",
    siteName: "PixConvert",
    type: "website",
  },
};

export default function PngToJpgPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert PNG to JPG Online"
        subtitle="Reduce your image file sizes by converting PNG to JPG. Perfect for sharing, email attachments, and saving storage space."
        inputFormat="png"
        outputFormat="jpg"
        description="Upload your PNG files and convert them to JPG instantly. JPG files are typically 3-5x smaller than PNG, making them ideal for sharing and storage."
      />
      <PngJpgInfoSection />
      <WhyLocalSection />
      <FAQSection />
      <FooterCTASection />
    </>
  );
}

function PngJpgInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert PNG to JPG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Smaller File Size</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            JPG uses lossy compression that typically produces files 3-5x smaller than PNG. This means faster uploads, less storage usage, and quicker email sending.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Email Friendly</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Email services often have attachment size limits. Converting PNG to JPG helps your images stay under those limits without sacrificing too much quality.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Social Media Ready</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Most social platforms prefer or automatically convert to JPG. Starting with JPG gives you more control over the final quality and compression.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          Important: Transparency Will Be Lost
        </h3>
        <div className="bg-warning/10 border border-warning/30 rounded-lg p-5 mb-6">
          <p className="text-sm text-on-surface-variant leading-relaxed">
            <strong className="text-warning">Note:</strong> JPG does not support transparency (alpha channels). If your PNG has a transparent background, it will be converted to a white (or solid color) background when saved as JPG. If you need to keep transparency, consider converting to WebP instead.
          </p>
        </div>
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          PNG vs JPG: Quick Comparison
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant">
                <th className="text-left py-2 pr-4 font-medium text-on-background">Feature</th>
                <th className="text-left py-2 pr-4 font-medium text-primary">PNG</th>
                <th className="text-left py-2 font-medium text-success">JPG</th>
              </tr>
            </thead>
            <tbody className="text-on-surface-variant">
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">File Size</td>
                <td className="py-2 pr-4">Larger (lossless)</td>
                <td className="py-2">Smaller (lossy)</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Transparency</td>
                <td className="py-2 pr-4">Yes</td>
                <td className="py-2">No</td>
              </tr>
              <tr className="border-b border-outline-variant/50">
                <td className="py-2 pr-4">Best For</td>
                <td className="py-2 pr-4">Graphics, logos, screenshots</td>
                <td className="py-2">Photography, sharing</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Compression</td>
                <td className="py-2 pr-4">Lossless</td>
                <td className="py-2">Lossy (adjustable)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
