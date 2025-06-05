
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-electric-blue/30 to-navy/90 relative overflow-hidden">
      {/* Subtle circuit pattern overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{backgroundImage: `url('data:image/svg+xml,%3Csvg width=\'60\' height=\'20\' viewBox=\'0 0 60 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10h60v1H0z\' fill=\'%23e2e8f0\' fill-opacity=\'0.5\'/%3E%3Cpath d=\'M15 5l5-5 5 5-5 5zM15 15l5 5 5-5M35 0l5 5-5 5-5-5zM35 20l5-5 5 5-5 5z\' fill=\'%233b82f6\' fill-opacity=\'0.09\'/%3E%3C/svg%3E')`, backgroundSize: '60px 20px'}} />
      <div className="max-w-4xl mx-auto text-center animate-fade-in relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8">
          Get Your Architecture Assessment
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          30-minute Architecture Assessment with Gilles to diagnose your specific scaling bottlenecks. 
          I'll identify your 3 biggest workflow risks and the exact fixes needed—completely free.
        </p>
        
        <div className="bg-white/10 rounded-2xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-white mb-6">What you'll get:</h3>
          
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white">Immediate diagnosis</h4>
                <p className="text-blue-100 text-sm">of your critical architecture risks</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white">Specific recommendations</h4>
                <p className="text-blue-100 text-sm">for your top 3 workflow improvements</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white">ROI projections</h4>
                <p className="text-blue-100 text-sm">for each recommended fix</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-success-green rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h4 className="font-semibold text-white">Clear roadmap</h4>
                <p className="text-blue-100 text-sm">if we decide to work together</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-2 mb-4">
          <Button 
            size="lg"
            className="bg-electric-blue hover:bg-blue-700 text-white px-12 py-7 text-xl font-extrabold rounded-xl shadow-xl hover:shadow-electric-blue/30 transition-all duration-300 hover:scale-105 flex items-center gap-3 group"
          >
            <Calendar className="w-7 h-7 mr-2" />
            Book Your Free Architecture Assessment
            <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Button>
          <p className="text-blue-100 text-xs sm:text-sm mt-2 max-w-xl mx-auto font-medium italic opacity-80">
            Zero obligation. I'll give you actionable insights regardless of whether we work together. 
            If I can't help, I'll refer you to someone who can.
          </p>
        </div>

        {/* Booking/Calendar preview placeholder */}
        <div className="bg-white/80 rounded-2xl p-6 shadow-inner flex flex-col items-center justify-center max-w-lg mx-auto mb-8 border border-electric-blue/10">
          <div className="flex items-center gap-4 mb-2">
            <Calendar className="w-8 h-8 text-electric-blue" />
            <span className="font-mono font-bold text-lg text-navy">Select Your Time</span>
          </div>
          <div className="w-full h-24 bg-gradient-to-br from-electric-blue/10 to-white rounded-lg flex items-center justify-center text-blue-400 font-mono">
            [Calendar Booking Widget Coming Soon]
          </div>
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
