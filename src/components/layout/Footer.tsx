export function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant mt-auto w-full py-12">
      <div className="mx-auto max-w-[1120px] px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <div className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-primary mb-3">
            PixConvert
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            © 2024 PixConvert. All processing happens locally in your browser. Your files never leave your device.
          </p>
        </div>

        {/* Product */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Product
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/terms-of-service" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/#tools" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                Format Guide
              </a>
            </li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold text-on-background mb-3">
            Tools
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/#tools" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                JPG to PNG
              </a>
            </li>
            <li>
              <a href="/#tools" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                PNG to WebP
              </a>
            </li>
            <li>
              <a href="/#tools" className="text-sm text-on-surface-variant hover:text-primary transition-colors">
                HEIC to JPG
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
