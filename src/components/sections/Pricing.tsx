
export const Pricing = () => {
  return (
    <section className="relative py-[120px] px-6 z-10 bg-paper text-ink">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-4xl md:text-5xl mb-12 text-balance text-ink">
          Straightforward terms. No surprises.
        </h2>
        
        <div className="space-y-12">
          <div>
            <h3 className="font-mono text-ink text-sm tracking-[0.08em] uppercase mb-3">FEE</h3>
            <p className="font-body text-xl md:text-2xl leading-[1.5]">
              8.33% of the candidate's annual gross salary (CTC), plus GST. One-time charge, same rate at every level.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-ink text-sm tracking-[0.08em] uppercase mb-3">GUARANTEE</h3>
            <p className="font-body text-xl md:text-2xl leading-[1.5]">
              If a candidate resigns voluntarily within 3 months of joining, we replace them at no extra charge — just let us know as soon as it happens.
            </p>
          </div>
          
          <div>
            <h3 className="font-mono text-ink text-sm tracking-[0.08em] uppercase mb-3">BILLING</h3>
            <p className="font-body text-xl md:text-2xl leading-[1.5]">
              Invoiced monthly, payable within 30 days.
            </p>
          </div>
          
          <div className="pt-8 border-t border-ink/10">
            <p className="font-body text-sm text-ink/70 leading-[1.6]">
              Gross salary includes Basic, HRA, PF, LTA, Medical, Uniform, Soft Furnishing, Education and Periodicals Allowances, and Conveyance. It excludes sales incentives, performance bonuses, and stock options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
