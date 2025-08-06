
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
    { number: '50M', label: "Executions Monthly", description: "Across 100+ companies", prefix: '', suffix: '', duration: 0 },
    { number: 99.9, label: "Uptime Achieved", description: "In production systems", prefix: '', suffix: '%', duration: 2 },
    { number: 3, label: "Workflow Engines Built", description: "From scratch to scale", prefix: '', suffix: '', duration: 1.5 },
    { number: 90, label: "Failure Reduction", description: "Average client improvement", prefix: '', suffix: '%', duration: 1.5 }
  ];

  // Logo grid config
  const projects = [
    {
      name: "Zenaton",
      description: "Workflow-as-code SaaS processing 10M+ executions monthly across 100+ companies. Survived Black Friday traffic spikes.",
      logo: <img src="/uploads/zenaton-logo.png" alt="Zenaton Logo" className="w-14 h-14 object-contain grayscale opacity-80" />
    },
    {
      name: "Infinitic", 
      description: "Distributed orchestration engine on Apache Pulsar (open source). 99.9% uptime handling critical financial transactions and marketing operations.",
      logo: <img src="/uploads/infinitic-logo.png" alt="Infinitic Logo" className="w-14 h-14 object-contain grayscale opacity-80" />
    },
    {
      name: "Lemline",
      description: "CNCF-compliant Serverless Workflow runtime (open source). Built for cloud-native environments from day one.",
      logo: <img src="/uploads/lemline-logo.png" alt="Lemline Logo" className="w-14 h-14 object-contain grayscale opacity-80" />
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#f4f8fc] relative overflow-hidden">
      {/* Top divider for separation from Services section */}
      <div className="absolute -top-2 left-0 w-full h-2 z-20">
        <div className="w-full h-full bg-gradient-to-r from-transparent via-electric-blue/30 to-transparent opacity-70"></div>
      </div>
      {/* Geometric/circuit background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'30\\' viewBox=\\'0 0 60 30\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'15\\' cy=\\'15\\' r=\\'14\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.18\\' stroke-width=\\'2\\'/%3E%3Crect x=\\'35\\' y=\\'5\\' width=\\'20\\' height=\\'20\\' rx=\\'5\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.12\\' stroke-width=\\'2\\'/%3E%3C/svg%3E')", backgroundRepeat: 'repeat', backgroundSize: '120px 60px'}}></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            I've Built What You Need—From Scratch, Three Times
          </h2>
          <p className="text-xl text-warm-gray max-w-3xl mx-auto">
            Most consultants apply theory. I've built the engines myself.
          </p>
        </div>
        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          {metrics.map((metric, i) => {
            return (
              <Card key={i} className="bg-white border border-gray-100 rounded-xl shadow-md p-8 flex flex-col items-center animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <span className="text-6xl md:text-7xl font-extrabold text-electric-blue mb-2 font-mono tabular-nums">
                  {typeof metric.number === 'string' ? metric.number : <CountUp end={metric.number} duration={metric.duration} prefix={metric.prefix} suffix={metric.suffix} />}
                </span>
                <span className="text-base font-bold text-navy mb-0.5 text-center tracking-tight opacity-90">{metric.label}</span>
                <span className="text-sm text-[#718096] text-center opacity-80 mt-0.5">{metric.description}</span>
              </Card>
            );
          })}
        </div>
        {/* Logo grid (Production Track Record) */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-navy text-center mb-12">
            My Track Record:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
            {projects.map((project, i) => (
              <Card key={i} className="bg-white border border-gray-100 rounded-xl shadow-md p-6 flex flex-col items-center animate-fade-in transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="mb-3 grayscale hover:grayscale-0 transition-all duration-300">
                  {project.logo}
                </div>
                <span className="font-semibold text-navy mb-1 text-lg text-center">{project.name}</span>
                <span className="text-warm-gray text-sm mb-2 text-center">{project.description.split('.')[0]}</span>
                <span className="text-gray-500 text-xs text-center">{project.description.split('.').slice(1).join('.')}</span>
              </Card>
            ))}
          </div>
        </div>
        {/* Client Testimonial */}
        <div className="flex justify-center my-20">
          <div className="max-w-2xl mx-auto w-full">
            <div className="relative bg-[#f7fafc] rounded-xl shadow-md p-8 md:p-10 animate-fade-in flex flex-col items-center">
              {/* Large faint quote accent */}
              <span className="absolute left-6 top-2 text-7xl md:text-8xl font-serif text-electric-blue opacity-10 select-none pointer-events-none">“</span>
              <p className="italic text-2xl md:text-3xl text-charcoal mb-7 text-center leading-relaxed z-10">
                Gilles architected our orchestration system from scratch. We scaled from 0 to 50M+ executions/month with zero critical failures. His blueprints are now our gold standard.
              </p>
              <div className="flex items-center gap-4 mt-2 z-10">
                <img src="/uploads/splio-lead-engineer.png" alt="Lead Engineer, Splio" className="w-14 h-14 rounded-full border-2 border-electric-blue shadow" />
                <div>
                  <div className="font-bold text-navy text-lg">Matthieu, Lead Engineer</div>
                  <div className="text-sm text-[#718096]">Splio, Paris</div>
                </div>
              </div>
            </div>
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
