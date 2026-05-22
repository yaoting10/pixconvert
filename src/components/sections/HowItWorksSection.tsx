import { Upload, Settings, Download } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Drop Images",
    description: "Drag and drop your files into the browser.",
  },
  {
    icon: Settings,
    title: "2. Pick Format",
    description: "Select your desired output format.",
  },
  {
    icon: Download,
    title: "3. Download",
    description: "Get your converted files instantly.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant text-center">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-12">
        How It Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <div key={step.title} className="flex flex-col items-center">
            <div className="bg-surface-container-lowest border border-border rounded-full w-16 h-16 flex items-center justify-center mb-5 shadow-sm">
              <step.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-background mb-2">
              {step.title}
            </h3>
            <p className="text-base text-on-surface-variant">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
