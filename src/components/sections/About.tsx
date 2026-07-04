
export const About = () => {
  return (
    <section id="about" className="relative py-[120px] md:py-[160px] px-6 z-10 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-24">
          <div className="font-mono text-mist text-xs tracking-[0.08em] uppercase mb-6">
            WHO WE ARE
          </div>
          <p className="font-body text-white text-xl md:text-2xl leading-relaxed text-balance">
            Ideal Talent Hunt is the recruitment arm of the Sai Marketing Agency group. We're an executive search and staffing firm — our job is to understand exactly what a role and a company need, then find the person who actually fits, not just the person who's available.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="flex flex-col">
            <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">15+</div>
            <div className="font-mono text-mist text-xs tracking-widest uppercase">Years in placement consulting</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">18.5M+</div>
            <div className="font-mono text-mist text-xs tracking-widest uppercase">Resumes in our active database</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">39</div>
            <div className="font-mono text-mist text-xs tracking-widest uppercase">Cities covered, PAN India</div>
          </div>
          <div className="flex flex-col">
            <div className="font-display font-bold text-5xl md:text-6xl text-white mb-2">3 Months</div>
            <div className="font-mono text-mist text-xs tracking-widest uppercase">Free replacement window on every placement</div>
          </div>
        </div>
      </div>
    </section>
  );
};
