
export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Map Background Layer - Placeholder */}
      <div className="absolute inset-0 z-0 bg-void"></div>
      
      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div className="font-mono text-mist text-xs md:text-sm tracking-[0.08em] uppercase mb-8">
          AHMEDABAD · PAN INDIA · 15+ YEARS
        </div>
        
        <h1 className="font-display font-bold text-[clamp(40px,6vw,88px)] leading-[1.1] text-white mb-6 text-balance">
          We hunt down the hire your business actually needs.
        </h1>
        
        <p className="font-body text-mist text-[clamp(16px,2vw,18px)] leading-[1.6] max-w-2xl mb-12 text-balance">
          Ideal Talent Hunt places accounts, finance, marketing, admin, banking and R&D talent for companies across India — backed by a database of 18.5 million profiles and 15+ years on the ground.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-marigold text-void rounded-full font-body font-medium transition-transform hover:scale-95 text-center">
            Get a Shortlist
          </a>
          <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-transparent border-[1.5px] border-marigold text-marigold rounded-full font-body font-medium transition-all hover:bg-marigold hover:text-void text-center">
            See How We Work
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce opacity-70">
        <div className="w-px h-12 bg-gradient-to-b from-marigold/0 via-marigold to-marigold/0"></div>
      </div>
    </section>
  );
};
