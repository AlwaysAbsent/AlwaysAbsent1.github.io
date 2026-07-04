
const industries = [
  "Banking & Insurance",
  "Broking & Securities",
  "Manufacturing",
  "FMCG",
  "IT",
  "Power Plants",
  "Telecom",
  "Media",
  "Pharmaceuticals",
  "Automobiles",
  "Health & Hospitality",
  "Engineering",
  "Real Estate"
];

export const Industries = () => {
  return (
    <section id="industries" className="relative py-24 z-10 bg-void overflow-hidden flex flex-col justify-center border-y border-white/5">
      {/* Marquee Container */}
      <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll group-hover:[animation-play-state:paused]">
          {industries.map((industry, index) => (
            <li key={index} className="font-display font-semibold text-3xl md:text-5xl text-white/30 whitespace-nowrap transition-colors hover:text-white">
              {industry}
            </li>
          ))}
          {/* Duplicate for infinite effect */}
          {industries.map((industry, index) => (
            <li key={`dup-${index}`} className="font-display font-semibold text-3xl md:text-5xl text-white/30 whitespace-nowrap transition-colors hover:text-white" aria-hidden="true">
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
