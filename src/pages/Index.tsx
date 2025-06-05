
import HeroSection from "@/components/HeroSectionNew";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import CredibilitySection from "@/components/CredibilitySection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <CredibilitySection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
