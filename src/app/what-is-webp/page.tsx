import { Metadata } from "next";
import { FAQSection } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";
import { ArrowRight, Check, X, Globe, Zap, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "What is WebP? – Complete Guide to the Modern Image Format | PixConvert",
  description:
    "WebP is Google's modern image format that produces files 25-35% smaller than JPG and PNG. Learn how WebP works, browser support, and how to use it.",
  keywords: [
    "what is webp",
    "webp format",
    "webp image format",
    "webp vs jpg",
    "webp vs png",
    "webp browser support",
    "webp compression",
    "google webp",
  ],
  alternates: {
    canonical: "https://pixconvert.org/what-is-webp",
  },
  openGraph: {
    title: "What is WebP? – Complete Guide to the Modern Image Format",
    description:
      "WebP is Google's modern image format that produces files 25-35% smaller than JPG and PNG. Learn how WebP works and how to use it.",
    url: "https://pixconvert.org/what-is-webp",
    siteName: "PixConvert",
    type: "article",
  },
};

export default function WhatIsWebpPage() {
  return (
    <>
      <ArticleHeader />
      <WhatIsWebpContent />
      <WhyLocalSection />
      <FAQSection />
      <FooterCTASection />
    </>
  );
}

function ArticleHeader() {
  return (
    <section className="pt-20 pb-8 px-6 mx-auto max-w-[800px] text-center">
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        Format Guide
      </span>
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-on-background mb-4 leading-tight">
        What is WebP?
      </h1>
      <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        The modern image format that makes websites faster without sacrificing quality.
      </p>
    </section>
  );
}

function WhatIsWebpContent() {
  return (
    <article className="py-12 px-6 mx-auto max-w-[800px]">
      {/* Intro */}
      <div className="prose prose-lg max-w-none">
        <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
          WebP is an image format developed by Google in 2010 that provides superior compression 
          compared to traditional formats like JPG and PNG. It uses advanced compression techniques 
          to produce files that are typically <strong className="text-on-background">25-35% smaller</strong> while maintaining the same visual quality.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6 text-center">
          <Zap className="h-8 w-8 text-primary mx-auto mb-2" />
          <p className="text-3xl font-bold text-on-background font-[family-name:var(--font-space-grotesk)]">25-35%</p>
          <p className="text-sm text-on-surface-variant">smaller than JPG/PNG</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6 text-center">
          <Globe className="h-8 w-8 text-success mx-auto mb-2" />
          <p className="text-3xl font-bold text-on-background font-[family-name:var(--font-space-grotesk)]">96%+</p>
          <p className="text-sm text-on-surface-variant">browser support</p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6 text-center">
          <Image className="h-8 w-8 text-secondary mx-auto mb-2" />
          <p className="text-3xl font-bold text-on-background font-[family-name:var(--font-space-grotesk)]">Both</p>
          <p className="text-sm text-on-surface-variant">lossy & lossless</p>
        </div>
      </div>

      {/* How It Works */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        How Does WebP Work?
      </h2>
      <div className="space-y-4 mb-10 text-on-surface-variant leading-relaxed">
        <p>
          WebP is based on the VP8 video codec (which later evolved into VP9 and AV1). It uses 
          predictive coding to encode images — essentially, it predicts the value of each pixel 
          based on neighboring pixels and only stores the differences.
        </p>
        <p>
          For lossy compression, WebP uses block prediction similar to video compression. 
          For lossless compression, it uses a completely different algorithm based on the 
          WebP-LZ (LZ77) variant, which can reconstruct images pixel-perfectly.
        </p>
        <p>
          This dual approach means WebP can handle both photographs (where lossy compression shines) 
          and graphics with sharp edges (where lossless compression is needed).
        </p>
      </div>

      {/* Features */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        WebP Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Lossy Compression">
          Smaller file sizes for photographs, similar to JPG but more efficient.
        </FeatureItem>
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Lossless Compression">
          Pixel-perfect quality for graphics, similar to PNG but smaller.
        </FeatureItem>
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Transparency (Alpha)">
          8-bit alpha channel support, just like PNG. 22% smaller than PNG with alpha.
        </FeatureItem>
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Animation">
          Supports animated images, serving as a replacement for animated GIFs. Animated WebP is significantly smaller than GIF.
        </FeatureItem>
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Color Profiles">
          Supports ICC profiles, XMP metadata, and EXIF data for professional workflows.
        </FeatureItem>
        <FeatureItem icon={<Check className="h-5 w-5 text-success" />} title="Tiling">
          Supports progressive decoding for faster rendering on slow connections.
        </FeatureItem>
      </div>

      {/* Browser Support */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        Browser Support
      </h2>
      <div className="bg-surface-container-low rounded-xl p-6 mb-10">
        <p className="text-on-surface-variant leading-relaxed mb-4">
          WebP is supported by all modern browsers. As of 2024, global support exceeds 96%:
        </p>
        <div className="space-y-2">
          <BrowserSupportItem name="Chrome" supported={true} version="23+" />
          <BrowserSupportItem name="Firefox" supported={true} version="65+" />
          <BrowserSupportItem name="Safari" supported={true} version="14+" />
          <BrowserSupportItem name="Edge" supported={true} version="18+" />
          <BrowserSupportItem name="Opera" supported={true} version="12.1+" />
          <BrowserSupportItem name="Internet Explorer" supported={false} version="Not supported" />
        </div>
        <p className="text-sm text-on-surface-variant mt-4">
          For the remaining ~4% of users (mostly older browsers), you can use the{" "}
          <code className="bg-surface-container px-1.5 py-0.5 rounded text-xs">&lt;picture&gt;</code>{" "}
          element to provide a JPG/PNG fallback.
        </p>
      </div>

      {/* When to Use */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        When Should You Use WebP?
      </h2>
      <div className="space-y-4 mb-10 text-on-surface-variant leading-relaxed">
        <div className="bg-success/5 border border-success/20 rounded-lg p-5">
          <h3 className="font-semibold text-success mb-2">Use WebP For:</h3>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Website images (photos, banners, thumbnails)</li>
            <li>Images with transparency (smaller than PNG)</li>
            <li>Animated images (much smaller than GIF)</li>
            <li>Any image where smaller file size matters</li>
            <li>Mobile apps and responsive images</li>
          </ul>
        </div>
        <div className="bg-error/5 border border-error/20 rounded-lg p-5">
          <h3 className="font-semibold text-error mb-2">Consider Alternatives For:</h3>
          <ul className="space-y-1.5 list-disc list-inside">
            <li>Images that must work in IE11 (use JPG/PNG)</li>
            <li>Professional print workflows (use TIFF or high-res PNG)</li>
            <li>Images for email (JPG has better client support)</li>
            <li>When you need maximum compatibility (use JPG)</li>
          </ul>
        </div>
      </div>

      {/* AVIF note */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        What's Next? AVIF
      </h2>
      <div className="text-on-surface-variant leading-relaxed mb-10">
        <p className="mb-4">
          AVIF (AV1 Image File Format) is the next-generation image format based on the AV1 video codec. 
          It offers even better compression than WebP — typically 20-30% smaller files at the same quality.
        </p>
        <p>
          However, AVIF browser support is still growing (~85% as of 2024), and encoding/decoding is 
          more CPU-intensive. For most use cases today, WebP hits the sweet spot of compression, 
          performance, and compatibility. PixConvert supports both formats.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 text-center">
        <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-semibold text-on-background mb-2">
          Ready to Convert to WebP?
        </h3>
        <p className="text-on-surface-variant mb-4">
          Convert your JPG and PNG images to WebP instantly. Free, private, no uploads.
        </p>
        <a
          href="/jpg-to-webp"
          className="inline-flex items-center gap-2 bg-primary text-white font-medium px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors"
        >
          Convert JPG to WebP
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function FeatureItem({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div>
        <h3 className="font-semibold text-on-background text-sm">{title}</h3>
        <p className="text-sm text-on-surface-variant">{children}</p>
      </div>
    </div>
  );
}

function BrowserSupportItem({
  name,
  supported,
  version,
}: {
  name: string;
  supported: boolean;
  version: string;
}) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-outline-variant/30 last:border-0">
      <span className="text-sm font-medium text-on-background">{name}</span>
      <div className="flex items-center gap-2">
        <span className="text-xs text-on-surface-variant">{version}</span>
        {supported ? (
          <Check className="h-4 w-4 text-success" />
        ) : (
          <X className="h-4 w-4 text-error" />
        )}
      </div>
    </div>
  );
}
