const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-8 lg:px-14 bg-charcoal animate-fade-in">
      {/* Top divider: gradient line */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent mb-10 opacity-80" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Scale Without the Chaos?
          </h3>
          <p className="text-gray-200 mb-10 max-w-2xl mx-auto text-lg">
            Let's discuss your architecture challenges and build systems that actually scale.
          </p>
          <div className="pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                <p>&copy; 2025 Gilles Barbier. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer transition-all duration-200">
                <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
                <span className="text-gray-100 font-mono text-base group-hover:underline group-focus:underline group-hover:text-electric-blue transition-colors duration-200">
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
