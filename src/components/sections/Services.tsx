
const servicesData = [
  {
    title: 'Permanent Placement',
    desc: 'Full-time hires for roles at every level — sourced, screened, and presented ready to interview.'
  },
  {
    title: 'Temporary Staffing',
    desc: 'Short-term and contract manpower when you need hands on the ground fast.'
  },
  {
    title: 'Executive Search',
    desc: 'Senior and leadership hires, handled with the discretion and depth they require.'
  },
  {
    title: 'Recruitment Process Outsourcing',
    desc: 'Hand us your hiring pipeline end-to-end and get back your time.'
  }
];

export const Services = () => {
  return (
    <section id="services" className="relative py-[120px] md:py-[160px] px-6 z-10 bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono text-mist text-xs tracking-[0.08em] uppercase mb-16">
          SERVICES
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => (
            <div key={idx} className="bg-void-2 rounded-[20px] p-8 md:p-10 border border-white/5 transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(245,169,63,0.1)] group">
              <h3 className="font-display font-bold text-[22px] md:text-[26px] text-white mb-4 group-hover:text-marigold transition-colors">
                {service.title}
              </h3>
              <p className="font-body text-mist text-[17px] md:text-[18px] leading-[1.6]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
