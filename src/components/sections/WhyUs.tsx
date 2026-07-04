import { Settings, Database, CheckCircle2 } from 'lucide-react';

export const WhyUs = () => {
  return (
    <section id="why-us" className="relative py-[120px] md:py-[160px] px-6 z-10 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-mist text-xs tracking-[0.08em] uppercase mb-16">
          WHY CHOOSE US
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Pillar 1 */}
          <div className="flex flex-col group">
            <div className="mb-6 p-4 bg-void-2 inline-flex rounded-[16px] border border-white/5 group-hover:border-marigold/30 group-hover:shadow-[0_0_20px_rgba(245,169,63,0.15)] transition-all">
              <Settings className="w-8 h-8 text-marigold" />
            </div>
            <h3 className="font-display font-bold text-[22px] md:text-[26px] text-white mb-4">
              We learn your process first
            </h3>
            <p className="font-body text-mist text-[17px] md:text-[18px] leading-[1.6]">
              We visit your technical and HR teams up front to understand your standards before we start searching, so every candidate we present actually fits how you work — not just the job description.
            </p>
          </div>
          
          {/* Pillar 2 */}
          <div className="flex flex-col group">
            <div className="mb-6 p-4 bg-void-2 inline-flex rounded-[16px] border border-white/5 group-hover:border-marigold/30 group-hover:shadow-[0_0_20px_rgba(245,169,63,0.15)] transition-all">
              <Database className="w-8 h-8 text-marigold" />
            </div>
            <h3 className="font-display font-bold text-[22px] md:text-[26px] text-white mb-4">
              A database built over 15 years
            </h3>
            <p className="font-body text-mist text-[17px] md:text-[18px] leading-[1.6]">
              18.5 million profiles, actively maintained. Applications inactive for more than six months are retired, so what we search is current, not just large.
            </p>
          </div>
          
          {/* Pillar 3 */}
          <div className="flex flex-col group">
            <div className="mb-6 p-4 bg-void-2 inline-flex rounded-[16px] border border-white/5 group-hover:border-marigold/30 group-hover:shadow-[0_0_20px_rgba(245,169,63,0.15)] transition-all">
              <CheckCircle2 className="w-8 h-8 text-marigold" />
            </div>
            <h3 className="font-display font-bold text-[22px] md:text-[26px] text-white mb-4">
              Screening that never stops
            </h3>
            <p className="font-body text-mist text-[17px] md:text-[18px] leading-[1.6]">
              Every profile is qualitatively vetted by a dedicated HR consultant before it ever reaches you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
