
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Custom SVG Icons
const AuditIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>
);
const MigrationIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
);
const BuildIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
);
const ScaleIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 20h16M4 4h16M9 4v16M15 4v16" /></svg>
);

const ServicesSection = () => {
  const services = [
    {
      title: "2-Week Architecture Deep Dive",
      price: "€8,000+",
      timeframe: "2 weeks",
      description: "Complete system audit with prioritized action plan and ROI projections. Clients typically see actionable improvements worth 10x the investment within 30 days.",
      icon: <AuditIcon />,
      features: ["System audit", "Prioritized action plan", "ROI projections", "30-day implementation timeline"]
    },
    {
      title: "4-Week Migration Blueprint",
      price: "€16,000+",
      timeframe: "4 weeks",
      description: "Step-by-step transition plan from your current setup to bulletproof orchestration. No big-bang rewrites—just smart, incremental improvements.",
      icon: <MigrationIcon />,
      features: ["Migration strategy", "Incremental improvements", "Measurable milestones", "Risk mitigation plan"]
    },
    {
      title: "Implementation Partnership",
      price: "€1,000/day",
      timeframe: "Custom",
      description: "Hands-on design and development of your most critical workflows. I build it right the first time, with observability and resilience baked in.",
      icon: <BuildIcon />,
      features: ["Hands-on development", "Critical workflow design", "Built-in observability", "Resilience patterns"]
    },
    {
      title: "Scale-Up Preparation",
      price: "€12,000+",
      timeframe: "3-4 weeks",
      description: "Architecture review before major hiring phases. Ensure your foundations can handle 10x growth without breaking.",
      icon: <ScaleIcon />,
      features: ["Growth readiness audit", "6-month roadmap", "Team training", "Scaling guidelines"]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">
            How Gilles Designs Orchestration Systems That Scale Under Pressure
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            I don't just apply patterns—I architect solutions that have survived real-world production stress. 
            From payment processing at fintech scale to ML pipelines handling terabytes daily.
          </p>
        </div>
        
        {/* Subtle connector lines */}
        <div className="relative">
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <div className="h-full w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent left-1/2 absolute"></div>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent top-1/2 absolute"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12 relative z-10">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg overflow-hidden transition-all duration-300 hover:scale-[1.05] hover:border-electric-blue/30 animate-fade-in"
              >
                {/* Hover effect background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-electric-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <CardHeader>
                  <div className="flex items-center gap-5 mb-5">
                    <span className="flex-shrink-0">{service.icon}</span>
                    <div>
                      <CardTitle className="text-xl sm:text-2xl font-bold text-navy group-hover:text-electric-blue transition-colors mb-1">
                        {service.title}
                      </CardTitle>
                      <div className="flex gap-3 items-center mt-1">
                        <span className="font-mono text-electric-blue text-lg font-bold">{service.price}</span>
                        <span className="font-mono text-gray-500 text-base">{service.timeframe}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-charcoal mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm text-charcoal">
                        <div className="w-1.5 h-1.5 bg-success-green rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Investment Guarantee Badge */}
        <div className="flex justify-center mt-6">
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
      </div>
    </section>
  );
};

export default ServicesSection;
