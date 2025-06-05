import { Button } from "@/components/ui/button";
import { SectionDivider } from "./ui/SectionDivider";
import { StickyCTA } from "./StickyCTA";

const HeroSection = () => {
  const handleCTAClick = () => {
    console.log('CTA button clicked');
  };

  // Background pattern for the photo container
  const gridPattern = `data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40h-40v-40z' fill='%233182ce' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E`;

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[800px] bg-gradient-to-br from-electric-blue/20 to-transparent rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo - Left Column */}
          <div className="lg:order-1">
            <div className="relative max-w-xl mx-auto lg:mx-0">
              {/* Circular container with gradient border */}
              <div className="relative rounded-full p-1.5 bg-gradient-to-br from-electric-blue/20 via-transparent to-electric-blue/10">
                <div 
                  className="relative overflow-hidden rounded-full border-8 border-white shadow-2xl aspect-square"
                  style={{
                    backgroundImage: `url("${gridPattern}")`,
                    backgroundSize: '40px 40px'
                  }}
                >
                  <img 
                    src="/lovable-uploads/9ec68f06-cbc4-485b-80aa-e001613e2049.png"
                    alt="Gilles Barbier - Workflow Orchestration Expert"
                    className="w-full h-full object-cover animate-scale-in"
                    loading="eager"
                  />
                </div>
                
                {/* Floating tech badge */}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-2.5 rounded-full shadow-lg border border-warm-gray-100 flex items-center">
                  <div className="w-3 h-3 bg-success-green rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium text-charcoal">50M+ executions/mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:order-2 space-y-8 animate-fade-in">
            {/* Status Badge - More prominent */}
            <div className="inline-flex items-center gap-3 px-5 py-3 bg-bg-light rounded-xl border border-warm-gray-200 shadow-sm w-full max-w-md">
              <div className="w-3 h-3 bg-success-green rounded-full animate-pulse flex-shrink-0"></div>
              <div>
                <p className="text-sm font-medium text-charcoal">
                  <span className="font-semibold">Next availability:</span> September 2025 (2 spots remaining)
                </p>
                <p className="text-xs text-warm-gray-500 mt-1">Based in Paris • Remote-first</p>
              </div>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Turn Your Failing Microservices Into{" "}
              <span className="text-gradient">Reliable Revenue Engines</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-[#718096] leading-relaxed max-w-2xl mb-6">
              I'm <strong className="text-charcoal font-semibold">Gilles Barbier</strong>. I've built 3 production workflow engines processing{" "}
              <span className="font-mono font-semibold text-electric-blue">50M+ executions monthly</span>. 
              Now I help scale-ups design orchestration systems that actually scale—without the chaos.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button 
                onClick={handleCTAClick}
                size="lg" 
                className="btn-primary group px-8 py-6 text-lg font-semibold"
              >
                <span className="mr-3">Book a 30-min Architecture Assessment</span>
                <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
              </Button>
              
              <Button 
                variant="outline"
                size="lg"
                className="border-warm-gray-300 text-warm-gray-700 hover:bg-warm-gray-50 px-8 py-6 text-lg"
              >
                View Case Studies
              </Button>
            </div>
            
            {/* Trust Indicator */}
            <div className="pt-4">
              <div className="inline-flex items-start gap-3 bg-warm-gray-50/80 px-5 py-4 rounded-xl border border-warm-gray-100">
                <div className="bg-success-green/10 p-1.5 rounded-lg mt-0.5">
                  <svg className="w-5 h-5 text-success-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-charcoal">Investment Guarantee</p>
                  <p className="text-warm-gray-600 text-sm mt-1">If my architecture audit doesn't identify improvements worth 10x the cost, you get a full refund.</p>
                </div>
              </div>
            </div>
            
            {/* Mobile-only status badge */}
            <div className="lg:hidden mt-8">
              <div className="inline-flex items-center gap-3 px-5 py-3 bg-bg-light rounded-xl border border-warm-gray-200 shadow-sm w-full">
                <div className="w-3 h-3 bg-success-green rounded-full animate-pulse flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    <span className="font-semibold">Next availability:</span> September 2025 (2 spots)
                  </p>
                </div>
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
