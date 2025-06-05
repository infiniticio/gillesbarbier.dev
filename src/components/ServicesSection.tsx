
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "2-Week Architecture Deep Dive",
      price: "Starting at €8,000",
      description: "Complete system audit with prioritized action plan and ROI projections. Clients typically see actionable improvements worth 10x the investment within 30 days.",
      icon: "🔍",
      features: ["System audit", "Prioritized action plan", "ROI projections", "30-day implementation timeline"]
    },
    {
      title: "4-Week Migration Blueprint",
      price: "Starting at €16,000",
      description: "Step-by-step transition plan from your current setup to bulletproof orchestration. No big-bang rewrites—just smart, incremental improvements.",
      icon: "🏗️",
      features: ["Migration strategy", "Incremental improvements", "Measurable milestones", "Risk mitigation plan"]
    },
    {
      title: "Implementation Partnership",
      price: "€1,000/day",
      description: "Hands-on design and development of your most critical workflows. I build it right the first time, with observability and resilience baked in.",
      icon: "⚙️",
      features: ["Hands-on development", "Critical workflow design", "Built-in observability", "Resilience patterns"]
    },
    {
      title: "Scale-Up Preparation",
      price: "Starting at €12,000",
      description: "Architecture review before major hiring phases. Ensure your foundations can handle 10x growth without breaking.",
      icon: "📈",
      features: ["Growth readiness audit", "6-month roadmap", "Team training", "Scaling guidelines"]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            How Gilles Designs Orchestration Systems That Scale Under Pressure
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            I don't just apply patterns—I architect solutions that have survived real-world production stress. 
            From payment processing at fintech scale to ML pipelines handling terabytes daily.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 hover:border-electric-blue/20"
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{service.icon}</span>
                  <div>
                    <CardTitle className="text-xl text-navy group-hover:text-electric-blue transition-colors">
                      {service.title}
                    </CardTitle>
                    <p className="font-mono text-electric-blue font-semibold mt-1">
                      {service.price}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-warm-gray mb-6 leading-relaxed">
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
    </section>
  );
};

export default ServicesSection;
