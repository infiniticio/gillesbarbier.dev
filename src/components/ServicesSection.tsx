
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Custom SVG Icons
const BootcampIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>
);
const TransformIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 11-9-9" /><path d="M21 3v9h-9" /></svg>
);
const BriefingIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>
);
const CoachingIcon = () => (
  <svg className="w-8 h-8 text-electric-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>
);

const ServicesSection = () => {
  const services = [
    {
      title: "AI-First Engineering Bootcamp",
      price: "€8,000 - €15,000",
      timeframe: "2 days",
      description: "Intensive hands-on workshop where your team learns AI-augmented workflows using your actual codebase. Skills transfer that sticks.",
      icon: <BootcampIcon />,
      features: ["Claude, Cursor, OpenCode workflows", "Context engineering", "AI-assisted code review", "Security best practices"],
      badge: "Most Popular"
    },
    {
      title: "AI Transformation Program",
      price: "€12,000 - €18,000",
      timeframe: "4 weeks",
      description: "Full-day kickoff + 3 weekly sessions + async support. Build a self-sustaining AI-first culture with internal champions.",
      icon: <TransformIcon />,
      features: ["Pre-training assessment", "Weekly coaching sessions", "Custom playbooks", "30/60/90 day measurement"],
      badge: null
    },
    {
      title: "Executive AI Briefing",
      price: "€3,000",
      timeframe: "Half-day",
      description: "What is AI-first development? Why it matters now. How to make the switch. Live demos and a practical framework for your org.",
      icon: <BriefingIcon />,
      features: ["State of AI in development", "Competitive landscape", "Adoption roadmap", "ROI framework"],
      badge: null
    },
    {
      title: "Ongoing AI Coaching",
      price: "€4,000/month",
      timeframe: "Monthly retainer",
      description: "2x 90-min group sessions + async support + leadership check-ins. Keep your team on the cutting edge as AI tools evolve.",
      icon: <CoachingIcon />,
      features: ["Bi-weekly coaching", "Slack/Discord access", "Tool updates", "Quarterly reviews"],
      badge: null
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-navy mb-8">
            Training Programs That Actually Work
          </h2>
          <p className="text-xl text-charcoal max-w-3xl mx-auto">
            I don't teach theory—I train from the trenches. Hands-on workshops using your codebase,
            your stack, your real challenges. Your team leaves with skills they'll use on day one.
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
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4 bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {service.badge}
                  </div>
                )}
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
      </div>
    </section>
  );
};

export default ServicesSection;
