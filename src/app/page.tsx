import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBarSection } from "@/components/sections/TrustBarSection";
import { SupportedFormatsSection } from "@/components/sections/SupportedFormatsSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhyLocalSection } from "@/components/sections/WhyLocalSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FooterCTASection } from "@/components/sections/FooterCTASection";

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
      <FAQSection />
      <FooterCTASection />
    </>
  );
}
