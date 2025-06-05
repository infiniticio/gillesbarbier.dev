
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-bg-light rounded-full border">
              <div className="w-2 h-2 bg-success-green rounded-full"></div>
              <span className="text-sm text-warm-gray font-mono">
                Based in Paris • Remote-first • Next availability: September 2025 (2 spots remaining)
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              Turn Your Failing Microservices Into{" "}
              <span className="text-electric-blue">Reliable Revenue Engines</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-warm-gray leading-relaxed">
              I'm <strong className="text-charcoal">Gilles Barbier</strong>. I've built 3 production workflow engines processing{" "}
              <span className="font-mono text-electric-blue font-semibold">50M+ executions monthly</span>. 
              Now I help scale-ups design orchestration systems that actually scale—without the chaos.
            </p>
            
            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              → Book a 30-min Architecture Assessment
            </Button>
            
            {/* Trust Indicator */}
            <p className="text-sm text-warm-gray">
              💰 <strong>Investment Guarantee:</strong> If my architecture audit doesn't identify improvements worth 10x the cost, you get a full refund.
            </p>
          </div>
          
          {/* Professional Photo */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="w-80 h-80 rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/9ec68f06-cbc4-485b-80aa-e001613e2049.png"
                alt="Gilles Barbier - Workflow Orchestration Expert"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
