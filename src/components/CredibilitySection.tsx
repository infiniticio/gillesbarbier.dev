
import { Card, CardContent } from "@/components/ui/card";

const CredibilitySection = () => {
  const metrics = [
    { number: "50M+", label: "Executions Monthly", description: "Across 500+ companies" },
    { number: "99.9%", label: "Uptime Achieved", description: "In production systems" },
    { number: "3", label: "Workflow Engines Built", description: "From scratch to scale" },
    { number: "90%", label: "Failure Reduction", description: "Average client improvement" }
  ];

  const projects = [
    {
      name: "Zenaton",
      description: "Workflow-as-code SaaS processing 50M+ executions monthly across 500+ companies. Survived Black Friday traffic spikes and financial trading workloads.",
      icon: "👨‍💻"
    },
    {
      name: "Infinitic", 
      description: "Distributed orchestration engine on Apache Pulsar. 99.9% uptime handling critical financial transactions and real-time data processing.",
      icon: "🚀"
    },
    {
      name: "Lemline",
      description: "CNCF-compliant Serverless Workflow runtime (open source). Built for cloud-native environments from day one.",
      icon: "🧪"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Gilles Has Built What You Need—From Scratch, Three Times
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Most consultants apply theory. I've built the engines themselves.
          </p>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center animate-scale-in">
              <div className="font-mono text-4xl sm:text-5xl font-bold text-electric-blue mb-2">
                {metric.number}
              </div>
              <div className="font-semibold text-navy mb-1">{metric.label}</div>
              <div className="text-sm text-warm-gray">{metric.description}</div>
            </div>
          ))}
        </div>
        
        {/* Production Track Record */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy text-center mb-12">
            Gilles' Production Track Record:
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{project.icon}</span>
                    <h4 className="text-xl font-bold text-navy group-hover:text-electric-blue transition-colors">
                      {project.name}
                    </h4>
                  </div>
                  <p className="text-warm-gray leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Client Testimonial */}
        <div className="bg-bg-light rounded-2xl p-8 text-center">
          <blockquote className="text-xl text-charcoal mb-6 italic">
            "Gilles' architecture review saved us 6 months of debugging hell. Our payment failures dropped 90% in the first month."
          </blockquote>
          <cite className="text-electric-blue font-semibold">
            — CTO, Series B Fintech (40M+ transactions/month)
          </cite>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-charcoal max-w-3xl mx-auto">
            <strong className="text-navy">The difference?</strong> I don't just know the patterns—I understand their failure modes, 
            performance characteristics, and real-world trade-offs. I've debugged the edge cases your team hasn't hit yet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
