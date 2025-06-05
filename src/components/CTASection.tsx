import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Check } from "lucide-react";
import { Info } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-32 px-4 sm:px-8 bg-gradient-to-br from-electric-blue via-blue-600 to-blue-200 animate-fade-in">
      {/* Subtle technical/circuit SVG pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'30\\' viewBox=\\'0 0 60 30\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'15\\' cy=\\'15\\' r=\\'14\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.10\\' stroke-width=\\'2\\'/%3E%3Crect x=\\'35\\' y=\\'5\\' width=\\'20\\' height=\\'20\\' rx=\\'5\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.07\\' stroke-width=\\'2\\'/%3E%3C/svg%3E')", backgroundRepeat: 'repeat', backgroundSize: '120px 60px'}}></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
          Get Your Free Architecture Assessment
        </h2>
        <p className="text-xl text-blue-100 mb-10 text-center max-w-2xl mx-auto">
          30-minute Architecture Assessment with Me to diagnose your specific scaling bottlenecks. 
          I'll identify your 3 biggest workflow risks and the exact fixes needed—completely free.
        </p>
        
        <div className="bg-white/80 rounded-2xl p-12 mb-16 shadow-2xl">
          <h3 className="text-xl font-semibold text-navy mb-6">What you'll get:</h3>
          
          <ul className="grid md:grid-cols-2 gap-8 text-left">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-navy">Clear roadmap</span>
                <p className="text-gray-700 text-sm">if we decide to work together</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-navy">Actionable workflow insights</span>
                <p className="text-gray-700 text-sm">Pinpoint your 3 biggest bottlenecks</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-navy">Scaling & reliability fixes</span>
                <p className="text-gray-700 text-sm">Specific, proven solutions</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-navy">Zero obligation</span>
                <p className="text-gray-700 text-sm">No sales pitch—just value</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col items-center justify-center mt-12 mb-2">
            <a
              href="https://calendar.app.google/FGD1SzqN2Tp1SUdu6"
              target="_blank"
              rel="noopener noreferrer"
              className="block mx-auto bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-5 text-2xl font-extrabold rounded-full shadow-xl focus-visible:ring-4 focus-visible:ring-blue-300 transition-all duration-300 text-center flex items-center justify-center gap-3 leading-tight"
            >
              <Calendar className="w-6 h-6 mr-2 flex-shrink-0" />
              <span className="flex-1 block sm:hidden">Book Free Assessment</span>
                <span className="flex-1 hidden sm:block">Book Your Free Architecture Assessment</span>
              <span className="ml-2 text-3xl">→</span>
            </a>
            <p className="flex items-center text-blue-900 text-xs sm:text-sm mt-3 max-w-xl mx-auto font-medium opacity-80 gap-2 text-center">
              <Info className="w-4 h-4 flex-shrink-0 text-blue-400" />
              Zero obligation. I'll give you actionable insights regardless of whether we work together. If I can't help, I'll refer you to someone who can.
            </p>
          </div>
        </div>
      </div>
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex justify-center bg-gradient-to-t from-navy/95 via-navy/80 to-transparent py-3 px-4">
        <a
          href="https://calendar.app.google/FGD1SzqN2Tp1SUdu6"
          target="_blank"
          rel="noopener noreferrer"
          className="block max-w-xs mx-auto bg-gradient-to-r from-electric-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-6 py-4 text-xl font-extrabold rounded-full shadow-xl focus-visible:ring-4 focus-visible:ring-blue-300 transition-all duration-300 text-center flex items-center justify-center gap-2 leading-tight"
        >
          <Calendar className="w-5 h-5 mr-2 flex-shrink-0" />
          <span className="flex-1">Book Free Assessment</span>
          <span className="ml-2 text-2xl">→</span>
        </a>
      </div>
    </section>
  );
};

export default CTASection;
