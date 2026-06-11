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
    question: "What is the best free image converter online?",
    answer:
      "PixConvert is one of the best free image converters online because it runs entirely in your browser. There's no upload, no signup, and no file size limit — just fast, private conversion for JPG, PNG, WebP, AVIF, ICO, GIF, BMP, and TIFF.",
  },
  {
    question: "How do I convert an image to JPG or PNG?",
    answer:
      "Drag and drop your image into PixConvert, choose JPG or PNG as the output format, and click download. The entire image conversion happens locally in your browser, so your file never leaves your device.",
  },
  {
    question: "What image formats does PixConvert support?",
    answer:
      "PixConvert supports JPG, PNG, WebP, AVIF, ICO, GIF, BMP, and TIFF. You can convert between any of these formats, including batch conversion for multiple files at once.",
  },
  {
    question: "Is there an image converter that doesn't upload files?",
    answer:
      "Yes. PixConvert uses local WebAssembly processing, so your images are converted directly inside your browser. Your files never touch a server, making it ideal for privacy-sensitive users.",
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
    question: "How does the batch image converter work?",
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
