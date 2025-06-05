
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Get Your Architecture Assessment
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 leading-relaxed">
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
        
        <Button 
          size="lg" 
          className="bg-electric-blue hover:bg-blue-600 text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6"
        >
          → Book Your Free Architecture Assessment
        </Button>
        
        <p className="text-blue-100 text-sm max-w-2xl mx-auto">
          Zero obligation. I'll give you actionable insights regardless of whether we work together. 
          If I can't help, I'll refer you to someone who can.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
