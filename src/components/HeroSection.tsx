
import { Button } from "@/components/ui/button";
import { SectionDivider } from "./ui/SectionDivider";
import { StickyCTA } from "./StickyCTA";

const HeroSection = () => {
  const handleCTAClick = () => {
    // TODO: Implement CTA click handler (e.g., open modal, navigate to contact)
    console.log('CTA button clicked');
  };

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-electric-blue/20 to-transparent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center py-24 md:py-32">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-bg-light rounded-full border border-warm-gray-200 shadow-sm">
              <div className="w-2.5 h-2.5 bg-success-green rounded-full animate-pulse"></div>
              <span className="text-sm text-warm-gray-700 font-mono tracking-tight">
                Based in Paris • Remote-first • Next availability: September 2025 (2 spots remaining)
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Turn Your Failing Microservices Into{" "}
              <span className="text-gradient">Reliable Revenue Engines</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-warm-gray-600 leading-relaxed max-w-2xl">
              I'm <strong className="text-charcoal font-semibold">Gilles Barbier</strong>. I've built 3 production workflow engines processing{" "}
              <span className="font-mono font-semibold text-electric-blue">50M+ executions monthly</span>. 
              Now I help scale-ups design orchestration systems that actually scale—without the chaos.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="btn-primary group"
              >
                <span className="mr-2">Book a 30-min Architecture Assessment</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-warm-gray-300 text-warm-gray-700 hover:bg-warm-gray-50"
              >
                View Case Studies
              </Button>
            </div>
            
            {/* Trust Indicator */}
            <div className="pt-2">
              <p className="inline-flex items-center text-sm text-warm-gray-600 bg-warm-gray-50 px-4 py-2.5 rounded-lg">
                <span className="mr-2">💰</span>
                <span><strong className="font-semibold text-charcoal">Investment Guarantee:</strong> If my architecture audit doesn't identify improvements worth 10x the cost, you get a full refund.</span>
              </p>
            </div>
          </div>
          
          {/* Professional Photo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-electric-blue/20 to-transparent rounded-3xl -rotate-3 -z-10"></div>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-8 border-white">
                <img 
                  src="/lovable-uploads/9ec68f06-cbc4-485b-80aa-e001613e2049.png"
                  alt="Gilles Barbier - Workflow Orchestration Expert"
                  className="w-full h-auto object-cover animate-scale-in"
                  loading="eager"
                />
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-electric-blue/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
              </div>
              {/* Floating tech badges */}
              <div className="absolute -bottom-6 -left-6 bg-white px-4 py-2 rounded-full shadow-lg border border-warm-gray-100 flex items-center">
                <div className="w-2 h-2 bg-success-green rounded-full mr-2"></div>
                <span className="text-sm font-mono text-warm-gray-700">50M+ executions/mo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sticky mobile CTA */}
      <StickyCTA onClick={handleCTAClick} className="lg:hidden" />
      
      {/* Section divider */}
      <SectionDivider variant="gradient" />
    </section>
  );
};

export default HeroSection;
