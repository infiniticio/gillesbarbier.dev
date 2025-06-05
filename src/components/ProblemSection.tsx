import { AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const painPoints = [
    "Revenue-critical workflows that fail silently (payment processing, user onboarding, data pipelines)",
    "Engineering velocity that slows to a crawl as teams fear touching interconnected services",
    "Customer trust eroding with each \"temporary glitch\" that takes hours to diagnose",
    "Debugging nightmares where failures cascade across services with no clear root cause",
    "Business processes scattered across codebases, impossible to understand or modify"
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-light">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-6">
            Your Architecture Is Scaling. Your Reliability Isn't.
          </h2>
          <p className="text-xl text-warm-gray leading-relaxed max-w-3xl mx-auto">
            Modern tech stacks grow fast—complexity grows faster. What started as a clean microservices 
            architecture becomes a tangled web of dependencies, race conditions, and mysterious failures.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100">
          <h3 className="text-2xl font-semibold text-charcoal mb-8 text-center">
            You're probably losing sleep over:
          </h3>
          
          <div className="space-y-6">
            {painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex-shrink-0 mt-1">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                </div>
                <p className="text-charcoal leading-relaxed group-hover:text-navy transition-colors">
                  <strong className="text-navy">{point.split(' ')[0]} {point.split(' ')[1]}</strong>{' '}
                  {point.split(' ').slice(2).join(' ')}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-charcoal font-semibold">
              <span className="text-amber-600">The real cost?</span> Every day of architectural debt compounds. 
              What takes 2 weeks to fix today will take 2 months next year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
