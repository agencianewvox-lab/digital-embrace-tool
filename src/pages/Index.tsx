import { HeroSection } from "@/components/HeroSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <CalculatorSection />
      <CTASection />
    </div>
  );
};

export default Index;
