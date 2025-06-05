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
              <div className="relative rounded-full p-1.5 bg-gradient-to-br from-electric-blue/20 via-transparent to-electric-blue/10 shadow-2xl">
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
                {/* Availability badge - always visible */}
                <div className="absolute -top-4 -right-4 bg-white px-5 py-2.5 rounded-full shadow-xl border border-warm-gray-100 flex items-center gap-3 z-10">
                  <div className="w-4 h-4 bg-success-green rounded-full border-2 border-white shadow animate-pulse flex-shrink-0"></div>
                  <div>
                    <span className="text-sm font-medium text-charcoal">
                      <span className="font-semibold">Next availability:</span> September 2025 (2 spots remaining)
                    </span>
                    <p className="text-xs text-warm-gray-500 mt-0.5">Based in Paris • Remote-first</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - Right Column */}
          <div className="lg:order-2 space-y-8 animate-fade-in">

            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Turn Your Failing Microservices Into&nbsp;
              <br className="block sm:hidden" />
              <span className="text-gradient">Reliable Revenue Engines</span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl text-[#333b4f] leading-relaxed max-w-2xl mb-6">
              I'm <strong className="text-charcoal font-semibold">Gilles Barbier</strong>. I've built 3 production workflow engines processing
              <span className="font-mono font-semibold text-electric-blue">50M+ executions monthly</span>.
              Now I help scale-ups design orchestration systems that actually scale—without the chaos.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                asChild
                size="lg"
                className="btn-primary group px-8 py-6 text-lg font-semibold shadow-md hover:shadow-xl hover:bg-electric-blue/90 transition-all duration-200"
              >
                <a
                  href="https://calendar.app.google/FGD1SzqN2Tp1SUdu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <span className="mr-3">Book Your Free Architecture Assessment</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </a>
              </Button>
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
