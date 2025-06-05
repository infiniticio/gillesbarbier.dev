
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

// --- CountUp animation for metrics ---
function CountUp({ end, duration = 2, prefix = '', suffix = '' }: { end: number, duration?: number, prefix?: string, suffix?: string }) {
  const [value, setValue] = useState(0);
  const ref = useRef<number>();
  useEffect(() => {
    let start = 0;
    let startTime: number | undefined;
    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = Math.floor(progress * (end - start) + start);
      setValue(current);
      if (progress < 1) {
        ref.current = requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    }
    ref.current = requestAnimationFrame(step);
    return () => ref.current && cancelAnimationFrame(ref.current);
  }, [end, duration]);
  return <span>{prefix}<span className="font-mono tabular-nums">{value.toLocaleString()}</span>{suffix}</span>;
}

// --- SVG Logos ---
const ZenatonLogo = () => (
  <svg className="w-10 h-10 grayscale opacity-80" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="20" fill="#22223b"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="monospace" dy=".3em">Z</text></svg>
);
const InfiniticLogo = () => (
  <svg className="w-10 h-10 grayscale opacity-80" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#2d3748"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="14" fontFamily="monospace" dy=".3em">∞</text></svg>
);
const LemlineLogo = () => (
  <svg className="w-10 h-10 grayscale opacity-80" viewBox="0 0 40 40" fill="none"><rect width="40" height="40" rx="8" fill="#4a5568"/><text x="50%" y="56%" textAnchor="middle" fill="#fff" fontSize="13" fontFamily="monospace" dy=".3em">LM</text></svg>
);

const CredibilitySection = () => {
  // Animated metrics config
  const metrics = [
    { number: 50000000, label: "Executions Monthly", description: "Across 500+ companies", prefix: '', suffix: '+', duration: 2 },
    { number: 99.9, label: "Uptime Achieved", description: "In production systems", prefix: '', suffix: '%', duration: 2 },
    { number: 3, label: "Workflow Engines Built", description: "From scratch to scale", prefix: '', suffix: '', duration: 1.5 },
    { number: 90, label: "Failure Reduction", description: "Average client improvement", prefix: '', suffix: '%', duration: 1.5 }
  ];

  // Logo grid config
  const projects = [
    {
      name: "Zenaton",
      description: "Workflow-as-code SaaS processing 50M+ executions monthly across 500+ companies. Survived Black Friday traffic spikes and financial trading workloads.",
      logo: <ZenatonLogo />
    },
    {
      name: "Infinitic", 
      description: "Distributed orchestration engine on Apache Pulsar. 99.9% uptime handling critical financial transactions and real-time data processing.",
      logo: <InfiniticLogo />
    },
    {
      name: "Lemline",
      description: "CNCF-compliant Serverless Workflow runtime (open source). Built for cloud-native environments from day one.",
      logo: <LemlineLogo />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Geometric/circuit background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\'60\' height=\'30\' viewBox=\'0 0 60 30\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=\'15\' cy=\'15\' r=\'14\' stroke=\'%233182ce\' stroke-opacity=\'0.18\' stroke-width=\'2\'/%3E%3Crect x=\'35\' y=\'5\' width=\'20\' height=\'20\' rx=\'5\' stroke=\'%233182ce\' stroke-opacity=\'0.12\' stroke-width=\'2\'/%3E%3C/svg%3E')", backgroundRepeat: 'repeat', backgroundSize: '120px 60px'}}></div>
      <div className="max-w-7xl mx-auto relative z-10">
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
                <CountUp end={metric.number} duration={metric.duration} suffix={metric.suffix} />
              </div>
              <div className="font-semibold text-navy mb-1">{metric.label}</div>
              <div className="text-sm text-warm-gray">{metric.description}</div>
            </div>
          ))}
        </div>
        {/* Logo grid (Production Track Record) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy text-center mb-12">
            Gilles' Production Track Record:
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-3 mb-4">
                    {project.logo}
                    <h4 className="text-xl font-bold text-navy group-hover:text-electric-blue transition-colors mt-2">
                      {project.name}
                    </h4>
                  </div>
                  <p className="text-warm-gray leading-relaxed text-center">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        {/* Client Testimonial */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-warm-gray-50 to-white rounded-2xl p-8 md:p-10 max-w-2xl w-full flex flex-col items-center shadow-md border border-warm-gray-100">
            <img src="/avatar-gilles.jpg" alt="Gilles Barbier" className="w-16 h-16 rounded-full mb-4 border-2 border-electric-blue/30 shadow" />
            <blockquote className="text-xl text-charcoal mb-4 italic">
              "Gilles' architecture review saved us 6 months of debugging hell. Our payment failures dropped 90% in the first month."
            </blockquote>
            <cite className="text-electric-blue font-semibold">
              — CTO, Series B Fintech (40M+ transactions/month)
            </cite>
          </div>
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
