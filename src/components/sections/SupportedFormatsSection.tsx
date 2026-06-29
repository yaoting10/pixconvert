const formats = [
  { name: "JPG Converter", href: "/jpg-converter" },
  { name: "JPEG Converter", href: "/jpeg-converter" },
  { name: "PNG Converter", href: "/png-converter" },
  { name: "WebP Converter", href: "/webp-converter" },
  { name: "AVIF Converter", href: "/avif-converter" },
  { name: "BMP Converter", href: "/bmp-converter" },
  { name: "GIF Converter", href: "/gif-converter" },
  { name: "TIFF Converter", href: "/tiff-converter" },
  { name: "ICO Converter", href: "/ico-converter" },
];

export function SupportedFormatsSection() {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant text-center">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10">
        Supported Formats
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {formats.map((fmt) => (
          <a
            key={fmt.name}
            href={fmt.href}
            className="bg-surface-container-lowest border border-border rounded-lg p-6 flex flex-col items-center shadow-sm hover:border-primary hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
              {fmt.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
