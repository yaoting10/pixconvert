const useCases = [
  {
    title: "Web Developers",
    description:
      "Batch convert assets to Next-Gen formats like WebP and AVIF for faster load times.",
  },
  {
    title: "Office Users",
    description:
      "Convert ICO icons to PNG for use in websites, apps, and design projects.",
  },
  {
    title: "Designers",
    description:
      "Convert high-res TIFFs to lighter formats without waiting for heavy software to load.",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10 text-center">
        Perfect For
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {useCases.map((useCase) => (
          <div
            key={useCase.title}
            className="bg-surface-container-lowest border border-border rounded-lg p-6 shadow-sm hover:border-primary transition-colors duration-200"
          >
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background mb-2">
              {useCase.title}
            </h3>
            <p className="text-base text-on-surface-variant leading-relaxed">
              {useCase.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
