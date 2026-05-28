const formats = ["JPG", "JPEG", "PNG", "WebP", "AVIF", "BMP", "GIF", "TIFF", "HEIC"];

export function SupportedFormatsSection() {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant text-center">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10">
        Supported Formats
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {formats.map((fmt) => (
          <div
            key={fmt}
            className="bg-surface-container-lowest border border-border rounded-lg p-6 flex flex-col items-center shadow-sm hover:border-primary transition-colors duration-200"
          >
            <span className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-primary">
              {fmt}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
