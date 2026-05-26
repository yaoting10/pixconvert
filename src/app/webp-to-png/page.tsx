import { Metadata } from "next";
import { FormatHeroSection } from "@/components/sections/FormatHeroSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

export const metadata: Metadata = {
  title: "WebP to PNG Converter – Free, Private & Instant | PixConvert",
  description:
    "Convert WebP to PNG instantly in your browser. Get universal compatibility with transparent PNG output. No uploads, 100% private, completely free.",
  keywords: [
    "webp to png",
    "convert webp to png",
    "webp png converter",
    "free webp to png",
    "webp to png online",
    "webp to png transparent",
    "webp to png no upload",
  ],
  alternates: {
    canonical: "https://pixconvert.org/webp-to-png",
  },
  openGraph: {
    title: "WebP to PNG Converter – Free, Private & Instant",
    description:
      "Convert WebP to PNG instantly in your browser. Get universal compatibility with transparent PNG output.",
    url: "https://pixconvert.org/webp-to-png",
    siteName: "PixConvert",
    type: "website",
  },
};

const webpToPngFaqs: FAQItem[] = [
  {
    question: "Why would I convert WebP back to PNG?",
    answer:
      "While WebP is great for the web, PNG has universal compatibility. Some older software, image editors, or devices may not support WebP. Converting to PNG ensures your images can be opened and edited anywhere without compatibility issues.",
  },
  {
    question: "Will my transparent WebP stay transparent as PNG?",
    answer:
      "Yes. Both WebP and PNG support alpha channel transparency. When converting WebP to PNG, the transparent background is fully preserved, making it perfect for logos, icons, and graphics with transparent backgrounds.",
  },
  {
    question: "Will the PNG file be larger than the original WebP?",
    answer:
      "Usually yes. PNG uses lossless compression which produces larger files than WebP's efficient compression. However, PNG's universal compatibility makes it worth the trade-off when you need to share or edit the image in software that doesn't support WebP.",
  },
  {
    question: "Can I convert WebP to PNG for printing?",
    answer:
      "Absolutely. PNG is an excellent format for printing because it uses lossless compression and preserves all image details. Most print shops and professional printing software work best with PNG files.",
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

export default function WebpToPngPage() {
  return (
    <>
      <FormatHeroSection
        title="Convert WebP to PNG Online"
        subtitle="Turn WebP images into universally compatible PNG files. Perfect for editing, printing, or sharing with anyone."
        inputFormat="webp"
        outputFormat="png"
        description="Upload your WebP files and convert them to PNG instantly. PNG works everywhere — every browser, editor, and device supports it."
      />
      <WebpPngInfoSection />
      <WhyLocalSection />
      <FAQSection faqs={webpToPngFaqs} title="WebP to PNG FAQ" />
      <FooterCTASection />
    </>
  );
}

function WebpPngInfoSection() {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        Why Convert WebP to PNG?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Universal Support</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG is supported by every browser, image editor, and operating system. Converting WebP to PNG ensures your images can be opened anywhere.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Preserve Transparency</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Both WebP and PNG support transparent backgrounds. When you convert WebP to PNG, your alpha channel transparency is fully preserved.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <h3 className="font-semibold text-on-background mb-2">Editing Ready</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG is the preferred format for graphic design and photo editing. Convert WebP to PNG for seamless editing in Photoshop, GIMP, Figma, and more.
          </p>
        </div>
      </div>

      <div className="mt-12 bg-surface-container-low rounded-xl p-6 md:p-8">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-4">
          When to Use WebP vs PNG
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-primary/30 rounded-lg p-5 bg-primary/5">
            <h4 className="font-semibold text-primary mb-2">Use WebP When:</h4>
            <ul className="text-sm text-on-surface-variant space-y-1.5 list-disc list-inside">
              <li>Publishing images on your website</li>
              <li>You want smaller file sizes</li>
              <li>Your audience uses modern browsers</li>
              <li>You need both lossy and lossless options</li>
            </ul>
          </div>
          <div className="border border-success/30 rounded-lg p-5 bg-success/5">
            <h4 className="font-semibold text-success mb-2">Use PNG When:</h4>
            <ul className="text-sm text-on-surface-variant space-y-1.5 list-disc list-inside">
              <li>Sharing images with general users</li>
              <li>Editing in design software</li>
              <li>You need guaranteed compatibility</li>
              <li>Printing high-quality graphics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
