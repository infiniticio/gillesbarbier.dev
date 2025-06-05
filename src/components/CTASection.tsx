import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Check } from "lucide-react";
import { Info } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative overflow-hidden py-28 px-4 sm:px-8 bg-gradient-to-br from-navy via-electric-blue/40 to-white animate-fade-in">
      {/* Subtle technical/circuit SVG pattern overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'30\\' viewBox=\\'0 0 60 30\\' fill=\\'none\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Ccircle cx=\\'15\\' cy=\\'15\\' r=\\'14\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.10\\' stroke-width=\\'2\\'/%3E%3Crect x=\\'35\\' y=\\'5\\' width=\\'20\\' height=\\'20\\' rx=\\'5\\' stroke=\\'%233182ce\\' stroke-opacity=\\'0.07\\' stroke-width=\\'2\\'/%3E%3C/svg%3E')", backgroundRepeat: 'repeat', backgroundSize: '120px 60px'}}></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
          Get Your Free Architecture Assessment
        </h2>
        <p className="text-xl text-blue-100 mb-10 text-center max-w-2xl mx-auto">
          30-minute Architecture Assessment with Gilles to diagnose your specific scaling bottlenecks. 
          I'll identify your 3 biggest workflow risks and the exact fixes needed—completely free.
        </p>
        
        <div className="bg-white/10 rounded-2xl p-8 mb-8 shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-6">What you'll get:</h3>
          
          <ul className="grid md:grid-cols-2 gap-6 text-left">
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-success-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-navy">Clear roadmap</span>
                <p className="text-gray-600 text-sm">if we decide to work together</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-success-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-navy">Actionable workflow insights</span>
                <p className="text-gray-600 text-sm">Pinpoint your 3 biggest bottlenecks</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-success-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-navy">Scaling & reliability fixes</span>
                <p className="text-gray-600 text-sm">Specific, proven solutions</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Check className="w-6 h-6 text-success-green mt-1 flex-shrink-0" />
              <div>
                <span className="font-semibold text-navy">Zero obligation</span>
                <p className="text-gray-600 text-sm">No sales pitch—just value</p>
              </div>
            </li>
          </ul>
          <Button 
            size="lg"
            className="bg-electric-blue hover:bg-blue-700 text-white px-12 py-7 text-2xl font-extrabold rounded-full shadow-xl hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-3 group mb-3 mt-10"
          >
            <Calendar className="w-7 h-7 mr-2" />
            Book Your Free Architecture Assessment
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200 text-3xl">→</span>
          </Button>
          <p className="flex items-center text-blue-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-medium italic opacity-80 gap-2">
            <Info className="w-4 h-4 flex-shrink-0" />
            Zero obligation. I'll give you actionable insights regardless of whether we work together. If I can't help, I'll refer you to someone who can.
          </p>
        </div>
      </div>
      {/* Sticky CTA for mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden flex justify-center bg-gradient-to-t from-navy/95 via-navy/80 to-transparent py-3 px-4">
        <Button 
          size="lg"
          className="w-full max-w-md bg-electric-blue hover:bg-blue-600 text-white px-8 py-5 text-lg font-bold rounded-xl shadow-xl flex items-center justify-center gap-2"
        >
          <Calendar className="w-6 h-6" />
          Book Free Assessment
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
