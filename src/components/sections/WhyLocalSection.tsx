import { X, Check } from "lucide-react";

const serverItems = [
  "Upload files to a remote server",
  "Wait in a processing queue",
  "Files stored on third-party servers",
  "Download converted files",
];

const localItems = [
  "Files stay on your device",
  "Instant processing using your CPU",
  "Absolute privacy guaranteed",
  "Immediate save to disk",
];

interface WhyLocalSectionProps {
  heading?: string;
}

export function WhyLocalSection({ heading = "Why Local Processing?" }: WhyLocalSectionProps) {
  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10 text-center">
        {heading}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Server Upload */}
        <div className="bg-surface-container-low p-8 rounded-lg border border-border opacity-70">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-on-surface-variant mb-6 text-center">
            Server Upload Flow
          </h3>
          <ul className="space-y-4">
            {serverItems.map((item) => (
              <li key={item} className="flex items-center text-on-surface-variant">
                <X className="h-5 w-5 mr-3 text-outline flex-shrink-0" strokeWidth={2} />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Local WASM */}
        <div className="bg-surface-container-lowest p-8 rounded-lg border-2 border-dashed border-primary shadow-sm">
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-primary mb-6 text-center">
            Local WASM Flow
          </h3>
          <ul className="space-y-4">
            {localItems.map((item) => (
              <li key={item} className="flex items-center text-on-background">
                <Check className="h-5 w-5 mr-3 text-primary flex-shrink-0" strokeWidth={2} />
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
