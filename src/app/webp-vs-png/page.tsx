import { Metadata } from "next";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";
import { ArrowRight, Check, X, Shield, Globe, Zap, Image } from "lucide-react";

export const metadata: Metadata = {
  title: "WebP vs PNG – Which Image Format Should You Use? | PixConvert",
  description:
    "Compare WebP vs PNG in detail: file sizes, quality, transparency, browser support, and use cases. Learn which format is right for your needs.",
  keywords: [
    "webp vs png",
    "webp or png",
    "webp vs png quality",
    "webp png comparison",
    "should i use webp or png",
    "webp vs png transparency",
    "webp vs png file size",
  ],
  alternates: {
    canonical: "https://pixconvert.org/webp-vs-png",
  },
  openGraph: {
    title: "WebP vs PNG – Which Image Format Should You Use?",
    description:
      "Compare WebP vs PNG in detail: file sizes, quality, transparency, browser support, and use cases.",
    url: "https://pixconvert.org/webp-vs-png",
    siteName: "PixConvert",
    type: "article",
  },
};

const webpVsPngFaqs: FAQItem[] = [
  {
    question: "Is WebP always smaller than PNG?",
    answer:
      "In most cases, yes. WebP lossless compression typically produces files 20-30% smaller than PNG. WebP lossy compression can be 50-70% smaller than PNG while maintaining similar visual quality. However, for very simple images with few colors, PNG can sometimes be competitive.",
  },
  {
    question: "Should I use PNG or WebP for my website logo?",
    answer:
      "For web deployment, use WebP. It will be significantly smaller while maintaining the same transparency and quality. Keep a PNG version as a source file for editing. Use the HTML \u003cpicture\u003e element to serve WebP with a PNG fallback for maximum compatibility.",
  },
  {
    question: "Does converting PNG to WebP lose quality?",
    answer:
      "With lossless WebP conversion, no quality is lost at all — the image is pixel-perfect. With lossy WebP, there may be minor quality loss depending on the compression level, but at 85%+ quality settings, the difference is usually invisible to the human eye.",
  },
  {
    question: "Why do some people still prefer PNG over WebP?",
    answer:
      "PNG has universal compatibility — every browser, image editor, and operating system supports it. Some designers prefer PNG for editing because it's been the standard for decades. Additionally, PNG supports some features WebP doesn't, like interlaced loading and certain metadata formats.",
  },
  {
    question: "Can I convert WebP back to PNG without losing quality?",
    answer:
      "If the WebP was saved with lossless compression, yes — converting back to PNG will be pixel-perfect. If the WebP used lossy compression, some quality was already lost in the WebP encoding, and that loss cannot be recovered. Always keep your original PNGs as source files.",
  },
  {
    question: "Which format is better for SEO: WebP or PNG?",
    answer:
      "WebP is better for SEO because it improves page load speed, which is a Google ranking factor. Faster-loading pages tend to rank higher and provide better user experience. However, using PNG with proper compression is still better than using unoptimized images of any format.",
  },
];

export default function WebpVsPngPage() {
  return (
    <>
      <ArticleHeader />
      <WebpVsPngContent />
      <WhyLocalSection />
      <FAQSection faqs={webpVsPngFaqs} title="WebP vs PNG FAQ" />
      <FooterCTASection />
    </>
  );
}

function ArticleHeader() {
  return (
    <section className="pt-20 pb-8 px-6 mx-auto max-w-[800px] text-center">
      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
        Format Comparison
      </span>
      <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl lg:text-5xl font-bold text-on-background mb-4 leading-tight">
        WebP vs PNG
      </h1>
      <p className="text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        A detailed comparison of two popular image formats. Which one should you choose?
      </p>
    </section>
  );
}

function WebpVsPngContent() {
  return (
    <article className="py-12 px-6 mx-auto max-w-[800px]">
      {/* Intro */}
      <div className="prose prose-lg max-w-none mb-10">
        <p className="text-on-surface-variant leading-relaxed text-lg">
          Choosing between WebP and PNG depends on your specific needs. PNG has been the go-to format 
          for lossless images with transparency for decades, while WebP is the modern challenger that 
          offers smaller files with the same features. Let’s break it down.
        </p>
      </div>

      {/* Quick Comparison Table */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-6">
        At a Glance
      </h2>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
          <thead>
            <tr className="bg-surface-container-low">
              <th className="text-left py-3 px-4 font-semibold text-on-background">Feature</th>
              <th className="text-left py-3 px-4 font-semibold text-primary">PNG</th>
              <th className="text-left py-3 px-4 font-semibold text-success">WebP</th>
            </tr>
          </thead>
          <tbody className="text-on-surface-variant">
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">File Size</td>
              <td className="py-3 px-4">Larger</td>
              <td className="py-3 px-4">25-35% smaller</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Compression</td>
              <td className="py-3 px-4">Lossless only</td>
              <td className="py-3 px-4">Lossy + Lossless</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Transparency</td>
              <td className="py-3 px-4">Yes (full alpha)</td>
              <td className="py-3 px-4">Yes (full alpha)</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Animation</td>
              <td className="py-3 px-4">APNG only</td>
              <td className="py-3 px-4">Yes (built-in)</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Browser Support</td>
              <td className="py-3 px-4">Universal (100%)</td>
              <td className="py-3 px-4">96%+ modern browsers</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Editing Support</td>
              <td className="py-3 px-4">Excellent (all tools)</td>
              <td className="py-3 px-4">Good (most modern tools)</td>
            </tr>
            <tr className="border-b border-outline-variant/30">
              <td className="py-3 px-4 font-medium text-on-background">Progressive Decode</td>
              <td className="py-3 px-4">Interlaced PNG only</td>
              <td className="py-3 px-4">Yes</td>
            </tr>
            <tr>
              <td className="py-3 px-4 font-medium text-on-background">Best Use Case</td>
              <td className="py-3 px-4">Editing, universal sharing</td>
              <td className="py-3 px-4">Web publishing, optimization</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* File Size Deep Dive */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        File Size Comparison
      </h2>
      <div className="bg-surface-container-low rounded-xl p-6 mb-10">
        <p className="text-on-surface-variant leading-relaxed mb-4">
          WebP consistently produces smaller files than PNG:
        </p>
        <div className="space-y-3">
          <SizeBar label="PNG (lossless)" percent={100} color="bg-primary" />
          <SizeBar label="WebP (lossless)" percent={74} color="bg-success" />
          <SizeBar label="WebP (lossy, ~85% quality)" percent={45} color="bg-success/60" />
        </div>
        <p className="text-sm text-on-surface-variant mt-4">
          In our tests, a typical screenshot (1920×1080) is ~1.2MB as PNG, ~890KB as lossless WebP, 
          and ~540KB as lossy WebP at 85% quality — with no visible quality loss.
        </p>
      </div>

      {/* Transparency */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        Transparency Support
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <Shield className="h-8 w-8 text-primary mb-3" />
          <h3 className="font-semibold text-on-background mb-2">PNG Transparency</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            PNG supports 8-bit alpha channels, giving you 256 levels of transparency. This is the 
            gold standard for transparent images and is universally supported. However, transparent 
            PNGs can be very large.
          </p>
        </div>
        <div className="bg-surface-container-lowest border border-border rounded-xl p-6">
          <Zap className="h-8 w-8 text-success mb-3" />
          <h3 className="font-semibold text-on-background mb-2">WebP Transparency</h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            WebP also supports 8-bit alpha channels with the same quality as PNG. The key difference: 
            transparent WebP files are typically 22% smaller than equivalent transparent PNGs.
          </p>
        </div>
      </div>

      {/* When to use which */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        When to Use Which
      </h2>
      <div className="space-y-4 mb-10">
        <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
          <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
            <Image className="h-5 w-5" /> Choose PNG When:
          </h3>
          <ul className="text-sm text-on-surface-variant space-y-1.5 list-disc list-inside">
            <li>You need maximum compatibility (email, older software)</li>
            <li>You’re editing images in Photoshop, GIMP, or Figma</li>
            <li>You need pixel-perfect lossless quality for graphics</li>
            <li>You’re sharing images with users who might have older browsers</li>
            <li>You need metadata preservation for professional workflows</li>
          </ul>
        </div>
        <div className="bg-success/5 border border-success/20 rounded-lg p-5">
          <h3 className="font-semibold text-success mb-2 flex items-center gap-2">
            <Globe className="h-5 w-5" /> Choose WebP When:
          </h3>
          <ul className="text-sm text-on-surface-variant space-y-1.5 list-disc list-inside">
            <li>You’re publishing images on a website</li>
            <li>Page speed and Core Web Vitals matter</li>
            <li>You want smaller file sizes with the same quality</li>
            <li>You need animated images (much better than GIF)</li>
            <li>Your audience uses modern browsers (96%+ coverage)</li>
            <li>You want both lossy and lossless options from one format</li>
          </ul>
        </div>
      </div>

      {/* Practical Workflow */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        Recommended Workflow
      </h2>
      <div className="bg-surface-container-low rounded-xl p-6 mb-10">
        <p className="text-on-surface-variant leading-relaxed mb-4">
          For most web projects, the optimal workflow is:
        </p>
        <ol className="space-y-3 text-on-surface-variant">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">1</span>
            <span>Design and edit in PNG for maximum compatibility and quality</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">2</span>
            <span>Convert final assets to WebP for web deployment using a tool like PixConvert</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center">3</span>
            <span>Use the HTML <code className="bg-surface-container px-1 rounded text-xs">&lt;picture&gt;</code> element to serve WebP to modern browsers and PNG as fallback</span>
          </li>
        </ol>
      </div>

      {/* The Verdict */}
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-on-background mb-4">
        The Verdict
      </h2>
      <div className="text-on-surface-variant leading-relaxed mb-10">
        <p className="mb-4">
          <strong className="text-on-background">WebP is the better choice for the web.</strong> It offers the same 
          features as PNG (transparency, lossless compression) with significantly smaller file sizes. 
          With 96%+ browser support, there’s little reason not to use WebP for web images.
        </p>
        <p className="mb-4">
          <strong className="text-on-background">PNG remains the king of compatibility.</strong> For editing, 
          sharing via email, or any scenario where you need guaranteed universal support, PNG is still 
          the safest choice. It’s also preferred for professional print workflows.
        </p>
        <p>
          The good news: you don’t have to choose just one. Convert your source PNGs to WebP for 
          web deployment, and keep the originals for editing. PixConvert makes this conversion 
          instant and completely private.
        </p>
      </div>

      {/* CTAs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <a
          href="/png-to-webp"
          className="bg-primary text-white font-medium px-6 py-4 rounded-xl hover:bg-primary-hover transition-colors text-center flex items-center justify-center gap-2"
        >
          Convert PNG to WebP
          <ArrowRight className="h-4 w-4" />
        </a>
        <a
          href="/webp-to-png"
          className="bg-surface-container-lowest border border-border text-on-background font-medium px-6 py-4 rounded-xl hover:border-primary transition-colors text-center flex items-center justify-center gap-2"
        >
          Convert WebP to PNG
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function SizeBar({ label, percent, color }: { label: string; percent: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-on-surface-variant w-40 flex-shrink-0">{label}</span>
      <div className="flex-grow h-6 bg-surface-container rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-500`}
          style={{ width: `${percent}%` }}
        />
      </div>
      <span className="text-sm font-medium text-on-background w-12 text-right">{percent}%</span>
    </div>
  );
}
