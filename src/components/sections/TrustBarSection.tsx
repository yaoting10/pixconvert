import { Lock, Zap, Gift } from "lucide-react";

const trustItems = [
  {
    icon: Lock,
    title: "100% Private",
    description: "Zero server uploads. Processed locally.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "WASM powered for native-like speeds.",
  },
  {
    icon: Gift,
    title: "Completely Free",
    description: "No hidden fees, no subscriptions.",
  },
];

export function TrustBarSection() {
  return (
    <section className="py-12 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {trustItems.map((item) => (
          <div key={item.title} className="flex flex-col items-center">
            <item.icon className="h-8 w-8 text-primary mb-3" strokeWidth={1.5} />
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background mb-2">
              {item.title}
            </h3>
            <p className="text-base text-on-surface-variant">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="#tools"
          className="inline-block bg-primary text-white font-medium px-8 py-4 rounded-md hover:bg-primary-hover transition-colors duration-200 shadow-md text-base"
        >
          Convert Your First Image — It&apos;s Free
        </a>
      </div>
    </section>
  );
}
