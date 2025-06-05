
const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Scale Without the Chaos?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your architecture challenges and build systems that actually scale.
          </p>
          
          <div className="border-t border-gray-600 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400">
                <p>&copy; 2024 Gilles Barbier. All rights reserved.</p>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success-green rounded-full"></div>
                <span className="text-gray-300 font-mono text-sm">
                  Available for consulting • Based in Paris
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
