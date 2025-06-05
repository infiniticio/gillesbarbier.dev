
import * as React from "react";

const ProblemSection = () => {
  const painPoints = [
    "Revenue-critical workflows that fail silently (payment processing, user onboarding, data pipelines)",
    "Engineering velocity that slows to a crawl as teams fear touching interconnected services",
    "Customer trust eroding with each \"temporary glitch\" that takes hours to diagnose",
    "Debugging nightmares where failures cascade across services with no clear root cause",
    "Business processes scattered across codebases, impossible to understand or modify"
  ];

  // Custom SVG for the divider
  const circuitPattern = `data:image/svg+xml,%3Csvg width='60' height='20' viewBox='0 0 60 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10h60v1H0z' fill='%23e2e8f0' fill-opacity='0.5'/%3E%3Cpath d='M15 5l5-5 5 5-5 5zM15 15l5 5 5-5M35 0l5 5-5 5-5-5zM35 20l5-5 5 5-5 5z' fill='%233b82f6' fill-opacity='0.2'/%3E%3C/svg%3E`;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#f7fafc] overflow-hidden">
      {/* Circuit pattern divider at the top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ backgroundImage: `url("${circuitPattern}")`, backgroundSize: '60px 20px' }}></div>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">
  <span className="block">Your Architecture Is Scaling.</span>
  <span className="block">Your Reliability Isn't.</span>
</h2>
          <p className="text-xl text-charcoal leading-relaxed max-w-3xl mx-auto">
            Modern tech stacks grow fast—complexity grows faster. What started as a clean microservices 
            architecture becomes a tangled web of dependencies, race conditions, and mysterious failures.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-xl border border-amber-100 animate-fade-in">
          <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
            You're probably losing sleep over:
          </h3>
          <div className="space-y-7">
            {painPoints.map((point, index) => {
              const words = point.split(' ');
              const firstTwo = words.slice(0, 2).join(' ');
              const rest = words.slice(2).join(' ');
              return (
                <div key={index} className="flex items-center gap-4">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-amber-100">
                    <svg className="w-7 h-7 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="#fde68a" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5m0 4h.01" />
                      <polygon points="12,16 12,8 12,16" fill="#f59e42" />
                    </svg>
                  </span>
                  <span className="text-lg text-charcoal leading-snug">
                    <span className="font-bold text-electric-blue">{firstTwo}</span> {rest}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-10 p-6 bg-gradient-to-r from-amber-50 to-white rounded-xl border border-amber-100 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full">
                <svg className="w-5 h-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" fill="#fde68a" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7v5m0 4h.01" />
                  <polygon points="12,16 12,8 12,16" fill="#f59e42" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-charcoal mb-1">The real cost of ignoring these issues?</div>
                <p className="text-charcoal">
                  Every day of <span className="font-semibold text-amber-700">architectural debt compounds</span>. 
                  What takes <span className="font-semibold">2 weeks to fix today</span> will take 
                  <span className="font-semibold"> 2 months next year</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Circuit pattern divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 rotate-180" style={{ backgroundImage: `url("${circuitPattern}")`, backgroundSize: '60px 20px' }}></div>
    </section>
  );
};

export default ProblemSection;
