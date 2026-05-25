"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

const defaultFaqs: FAQItem[] = [
  {
    question: "Are my files really private?",
    answer:
      "Yes. All processing happens locally in your browser using WebAssembly. Your files are never uploaded to any server.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "The only limit is your device's available memory. You can process very large images if your computer has the RAM for it.",
  },
  {
    question: "Which browsers are supported?",
    answer:
      "Any modern browser that supports WebAssembly, including recent versions of Chrome, Firefox, Safari, and Edge.",
  },
  {
    question: "Is it completely free?",
    answer:
      "Yes. PixConvert is fully free to use with no hidden costs, watermarks, or premium tiers.",
  },
  {
    question: "Can I use this offline?",
    answer:
      "Once the page is loaded, yes. You don't need an active internet connection to convert files since everything runs locally.",
  },
  {
    question: "Do you compress the images?",
    answer:
      "We use standard encoding defaults for each format to ensure high quality while reducing file size where possible.",
  },
  {
    question: "Can I convert multiple files at once?",
    answer:
      "Yes, you can drag and drop multiple files to batch convert them simultaneously.",
  },
  {
    question: "Does it work on mobile?",
    answer:
      "Yes, mobile browsers support WebAssembly. However, performance will depend on your device's processing power.",
  },
  {
    question: "What is WebAssembly?",
    answer:
      "WebAssembly (WASM) allows code written in languages like C++ or Rust to run inside web browsers at near-native speeds.",
  },
  {
    question: "How do I contact support?",
    answer:
      "As a free, local-only tool, we don't offer direct support, but you can report bugs on our GitHub repository.",
  },
];

interface FAQSectionProps {
  faqs?: FAQItem[];
  title?: string;
}

export function FAQSection({ faqs, title }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = faqs ?? defaultFaqs;

  return (
    <section className="py-20 px-6 mx-auto max-w-[1120px] border-t border-outline-variant" id="faq">
      <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-semibold text-on-background mb-10 text-center">
        {title ?? "Frequently Asked Questions"}
      </h2>
      <div className="max-w-3xl mx-auto space-y-3">
        {items.map((faq, index) => (
          <div
            key={index}
            className="bg-surface-container-lowest border border-border rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex items-center justify-between p-5 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-[family-name:var(--font-space-grotesk)] text-base font-semibold text-on-background pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
                <p className="text-base text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
