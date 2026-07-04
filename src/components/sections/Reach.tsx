import { MapScene } from '../canvas/MapScene';

export const Reach = () => {
  return (
    <section id="reach" className="relative h-screen min-h-[600px] flex items-center justify-center bg-void overflow-hidden">
      <div className="absolute inset-0 z-0">
        <MapScene />
      </div>
      
      <div className="relative z-10 pointer-events-none text-center">
        <div className="font-mono text-white text-xs tracking-[0.08em] uppercase mb-4 bg-void/50 px-4 py-2 rounded-full backdrop-blur-sm inline-block">
          ONE NETWORK, 39 CITIES
        </div>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-white">
          PAN India Reach
        </h2>
      </div>
    </section>
  );
};
