const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-8 lg:px-14 bg-charcoal animate-fade-in">
      {/* Top divider: gradient line */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Scale Without the Chaos?
          </h3>
          <p className="text-gray-200 mb-10 max-w-3xl mx-auto text-lg">
            Let's discuss your architecture challenges and build systems that actually scale.
          </p>
          <div className="pt-8 mt-8">
  <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 animate-fade-in-up">
  {/* Glassmorphism card */}
  <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl px-4 py-5 flex flex-col sm:flex-row items-center gap-4 sm:gap-8 shadow-lg w-full md:w-auto text-center sm:text-left">
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
      <span className="text-gray-400 text-sm">&copy; 2025 Gilles Barbier. All rights reserved.</span>
      <span className="hidden sm:inline text-gray-400 text-base">|</span>
      <span className="text-gray-300 text-xs flex items-center gap-1 justify-center sm:justify-start">Made with <span aria-label='love' className="text-pink-400 text-lg">❤️</span> in Paris</span>
    </div>
    {/* Social icons */}
    <div className="flex items-center justify-center gap-4 mt-2 sm:mt-0">
      <a href="https://www.linkedin.com/in/gillesbarbier/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-electric-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue rounded transition-colors duration-200 p-1">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.757 1.379-1.555 2.838-1.555 3.036 0 3.597 2 3.597 4.59v5.598z"/></svg>
      </a>
      <a href="https://github.com/gillesbarbier" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-300 hover:text-electric-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-electric-blue rounded transition-colors duration-200 p-1">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
      </a>
    </div>
  </div>
  {/* Status badge */}
  <div className="flex items-center gap-2 group cursor-pointer transition-all duration-200 mt-6 md:mt-0">
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
