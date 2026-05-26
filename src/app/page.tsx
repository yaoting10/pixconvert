import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { SupportedFormatsSection } from "@/components/sections/SupportedFormatsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FAQSection, FAQItem } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

const homeFaqs: FAQItem[] = [
  {
    question: "What image formats does PixConvert support?",
    answer:
      "PixConvert supports JPG, PNG, WebP, AVIF, HEIC, GIF, BMP, and TIFF. You can convert between any of these formats. We also support batch conversion, so you can process multiple files at once.",
  },
  {
    question: "How is PixConvert different from other online converters?",
    answer:
      "Unlike most online converters that upload your files to their servers, PixConvert processes everything locally in your browser using WebAssembly. This means your files never leave your device, ensuring complete privacy and security.",
  },
  {
    question: "Is there a file size limit?",
    answer:
      "There is no artificial file size limit. The only constraint is your device's available memory (RAM). You can process very large images as long as your computer has enough memory to handle them.",
  },
  {
    question: "Can I use PixConvert on my phone or tablet?",
    answer:
      "Yes! PixConvert works on any device with a modern web browser, including iPhones, iPads, and Android devices. However, performance will depend on your device's processing power.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "No account required. PixConvert is completely free and doesn't require registration, email, or any personal information. Just open the website and start converting.",
  },
  {
    question: "Can I convert images offline?",
    answer:
      "Yes! Once the page is loaded, you don't need an internet connection to convert files. Everything runs locally in your browser. This makes PixConvert perfect for use on airplanes, remote locations, or anywhere with limited connectivity.",
  },
  {
    question: "Is PixConvert really free?",
    answer:
      "Yes, completely free. There are no hidden costs, watermarks, premium tiers, or usage limits. We believe image conversion should be accessible to everyone.",
  },
  {
    question: "How does the batch converter work?",
    answer:
      "Simply drag and drop multiple files (or an entire folder) into the converter. You can convert all files to the same format or set different output formats for individual files. When done, download everything as a single ZIP archive.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBarSection />
      <SupportedFormatsSection />
      <HowItWorksSection />
      <WhyLocalSection />
      <UseCasesSection />
      <FeaturesSection />
      <FAQSection faqs={homeFaqs} title="Frequently Asked Questions" />
      <FooterCTASection />
    </>
  );
}
