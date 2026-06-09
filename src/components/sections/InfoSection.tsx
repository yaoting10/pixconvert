// src/components/sections/InfoSection.tsx
// Reusable info section with unique content per converter page

export interface InfoCard {
  title: string;
  description: string;
}

interface InfoSectionProps {
  heading: string;
  cards: InfoCard[];
}

export function InfoSection({ heading, cards }: InfoSectionProps) {
  return (
    <section className="py-16 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-8 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest border border-border rounded-xl p-6"
          >
            <h3 className="font-semibold text-on-background mb-2">{card.title}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
