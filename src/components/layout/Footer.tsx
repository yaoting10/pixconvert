import { LogoFull } from "@/components/ui/Logo";

/* ─────────────── Footer link data ─────────────── */
const popularConversions = [
  { label: "JPG to PNG", href: "/jpg-to-png" },
  { label: "PNG to JPG", href: "/png-to-jpg" },
  { label: "JPG to WebP", href: "/jpg-to-webp" },
  { label: "PNG to WebP", href: "/png-to-webp" },
  { label: "WebP to PNG", href: "/webp-to-png" },
  { label: "WebP to JPG", href: "/webp-to-jpg" },
  { label: "PNG to ICO", href: "/png-to-ico" },
  { label: "ICO to PNG", href: "/ico-to-png" },
];

const imageConverters = [
  { label: "JPG Converter", href: "/jpg-converter" },
  { label: "PNG Converter", href: "/png-converter" },
  { label: "WebP Converter", href: "/webp-converter" },
  { label: "GIF Converter", href: "/gif-converter" },
  { label: "AVIF Converter", href: "/avif-converter" },
  { label: "BMP Converter", href: "/bmp-converter" },
  { label: "TIFF Converter", href: "/tiff-converter" },
  { label: "ICO Converter", href: "/ico-converter" },
];

const videoConverters = [
  { label: "MP4 Converter", href: "/mp4-converter" },
  { label: "MOV Converter", href: "/mov-converter" },
  { label: "AVI Converter", href: "/avi-converter" },
  { label: "MKV Converter", href: "/mkv-converter" },
  { label: "WMV Converter", href: "/wmv-converter" },
  { label: "FLV Converter", href: "/flv-converter" },
];

const audioConverters = [
  { label: "Audio Converter", href: "/audio-converter" },
];

const pdfTools = [
  { label: "Images to PDF", href: "/images-to-pdf" },
  { label: "PDF to Images", href: "/pdf-to-images" },
  { label: "Merge PDF", href: "/merge-pdf" },
  { label: "Compress PDF", href: "/compress-pdf" },
  { label: "Split PDF", href: "/split-pdf" },
  { label: "Protect PDF", href: "/protect-pdf" },
  { label: "Unlock PDF", href: "/unlock-pdf" },
  { label: "Rotate PDF", href: "/rotate-pdf" },
  { label: "Page Numbers", href: "/pdf-page-numbers" },
  { label: "Watermark", href: "/pdf-watermark" },
  { label: "Add Text", href: "/pdf-add-text" },
  { label: "Crop PDF", href: "/crop-pdf" },
];

const tools = [
  { label: "Batch Image Converter", href: "/batch-image-converter" },
  { label: "Batch Video Converter", href: "/batch-video-converter" },
];

const resources = [
  { label: "What is WebP?", href: "/what-is-webp" },
  { label: "WebP vs PNG", href: "/webp-vs-png" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto w-full py-12">
      <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-8">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-2">
          <LogoFull className="mb-3" />
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
            Free online image, video & audio converter. All processing happens locally in your browser — your files never leave your device.
          </p>
        </div>

        {/* Popular Conversions */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Popular Conversions
          </h4>
          <ul className="space-y-2">
            {popularConversions.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Converters */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Image Converters
          </h4>
          <ul className="space-y-2">
            {imageConverters.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Video Converters */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Video Converters
          </h4>
          <ul className="space-y-2">
            {videoConverters.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Audio Converters */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Audio Converters
          </h4>
          <ul className="space-y-2">
            {audioConverters.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Connect */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Resources
          </h4>
          <ul className="space-y-2">
            {tools.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            {resources.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/yaoting10/pixconvert"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="mailto:support@pixconvert.org"
                className="text-sm text-on-surface-variant hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1120px] px-6 mt-10 pt-6 border-t border-outline-variant">
        <p className="text-xs text-on-surface-variant text-center">
          © 2026 PixConvert. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
