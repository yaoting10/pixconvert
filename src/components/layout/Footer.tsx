import { LogoFull } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto w-full py-12">
      <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div>
          <LogoFull className="mb-3" />
          <p className="text-sm text-on-surface-variant leading-relaxed">
            © 2026 PixConvert. All processing happens locally in your browser. Your files never leave your device.
          </p>
        </div>

        {/* Popular Converters */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Popular Converters
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/jpg-to-png" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                JPG to PNG
              </a>
            </li>
            <li>
              <a href="/png-to-webp" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                PNG to WebP
              </a>
            </li>
            <li>
              <a href="/ico-to-png" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                ICO to PNG
              </a>
            </li>
            <li>
              <a href="/jpg-to-webp" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                JPG to WebP
              </a>
            </li>
            <li>
              <a href="/webp-to-png" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                WebP to PNG
              </a>
            </li>
            <li>
              <a href="/png-to-jpg" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                PNG to JPG
              </a>
            </li>
          </ul>
        </div>

        {/* All Format Converters */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            All Format Converters
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/jpg-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                JPG Converter
              </a>
            </li>
            <li>
              <a href="/jpeg-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                JPEG Converter
              </a>
            </li>
            <li>
              <a href="/png-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                PNG Converter
              </a>
            </li>
            <li>
              <a href="/webp-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                WebP Converter
              </a>
            </li>
            <li>
              <a href="/avif-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                AVIF Converter
              </a>
            </li>
            <li>
              <a href="/gif-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                GIF Converter
              </a>
            </li>
            <li>
              <a href="/bmp-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                BMP Converter
              </a>
            </li>
            <li>
              <a href="/tiff-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                TIFF Converter
              </a>
            </li>
            <li>
              <a href="/ico-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                ICO Converter
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Resources
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/batch-image-converter" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Batch Converter
              </a>
            </li>
            <li>
              <a href="/what-is-webp" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                What is WebP?
              </a>
            </li>
            <li>
              <a href="/webp-vs-png" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                WebP vs PNG
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-service" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Connect
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="https://github.com/yaoting10/pixconvert" target="_blank" rel="noopener noreferrer" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:support@pixconvert.org" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
