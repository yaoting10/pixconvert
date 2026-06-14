interface FooterCTASectionProps {
  ctaText?: string;
}

export function FooterCTASection({ ctaText }: FooterCTASectionProps) {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] text-center flex flex-col items-center border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-6">
        Ready to optimize your workflow?
      </h2>
      <a
        href="#tools"
        className="inline-block bg-primary text-white font-medium px-8 py-4 rounded-md hover:bg-primary-hover transition-colors duration-200 shadow-md text-base"
      >
        {ctaText || "Convert Your First Image — It's Free"}
      </a>
    </section>
  );
}
