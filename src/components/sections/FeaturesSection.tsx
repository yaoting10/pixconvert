import { Laptop, Layers, FileType, UserX } from "lucide-react";

const features = [
  {
    icon: Laptop,
    title: "Browser-Based",
    description: "No installation required. Works entirely in your modern web browser.",
  },
  {
    icon: Layers,
    title: "Batch Processing",
    description: "Convert hundreds of images at once without breaking a sweat.",
  },
  {
    icon: FileType,
    title: "7+ Formats",
    description: "Support for all major image formats, including modern web standards.",
  },
  {
    icon: UserX,
    title: "No Signup",
    description: "Jump straight into converting. We don't want your email.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10 text-center">
        Everything You Need
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start">
            <feature.icon
              className="h-8 w-8 text-primary mr-4 mt-1 flex-shrink-0"
              strokeWidth={1.5}
            />
            <div>
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-on-surface-variant leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
