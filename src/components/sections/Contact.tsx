import { useState } from 'react';
import { Check } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-[120px] md:py-[160px] px-6 z-10 bg-void">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
        
        {/* Contact Info */}
        <div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-12">
            Tell us who you need.
          </h2>
          
          <div className="space-y-8 font-body text-mist text-lg">
            <div>
              <div className="font-mono text-white text-xs tracking-widest uppercase mb-2">Phone / WhatsApp</div>
              <p>079-48904367</p>
              <p>+91 96249 30266</p>
              <p>+91 73833 24434</p>
              <p>+91 70163 24618</p>
            </div>
            
            <div>
              <div className="font-mono text-white text-xs tracking-widest uppercase mb-2">Email</div>
              <p>job.idealtalenthunt@gmail.com</p>
            </div>
            
            <div>
              <div className="font-mono text-white text-xs tracking-widest uppercase mb-2">Office</div>
              <p>D-238, 2nd Floor, Sumel-11,</p>
              <p>Namaste Circle, Shahibaugh,</p>
              <p>Ahmedabad, Gujarat – 380004</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-void-2 p-8 md:p-10 rounded-[24px] border border-white/5">
          <form onSubmit={handleSubmit} className="space-y-8 flex flex-col h-full justify-between">
            <div className="space-y-6">
              <div className="relative group">
                <input required type="text" id="name" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-mist/50 focus:outline-none peer" placeholder="Name" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
              </div>
              
              <div className="relative group">
                <input required type="text" id="company" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-mist/50 focus:outline-none peer" placeholder="Company Name" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input required type="email" id="email" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-mist/50 focus:outline-none peer" placeholder="Work Email" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
                </div>
                <div className="relative group">
                  <input required type="tel" id="phone" className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-mist/50 focus:outline-none peer" placeholder="Phone" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
                </div>
              </div>
              
              <div className="relative group">
                <select required id="hiring_for" className="w-full bg-transparent border-b border-white/10 py-3 text-white focus:outline-none peer appearance-none cursor-pointer">
                  <option value="" disabled selected className="text-void">Hiring for...</option>
                  <option value="Accounts" className="text-void">Accounts</option>
                  <option value="Marketing" className="text-void">Marketing</option>
                  <option value="Admin" className="text-void">Admin</option>
                  <option value="R&D" className="text-void">R&D</option>
                  <option value="Finance" className="text-void">Finance</option>
                  <option value="Banking" className="text-void">Banking</option>
                  <option value="Other" className="text-void">Other</option>
                </select>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
              </div>
              
              <div className="relative group">
                <textarea required id="message" rows={3} className="w-full bg-transparent border-b border-white/10 py-3 text-white placeholder-mist/50 focus:outline-none peer resize-none" placeholder="Message or requirements"></textarea>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-marigold transition-all duration-300 peer-focus:w-full"></div>
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting || isSuccess}
              className="mt-8 w-full py-4 bg-marigold text-void rounded-full font-body font-bold text-[16px] transition-all hover:scale-[0.98] flex items-center justify-center disabled:opacity-80 disabled:cursor-not-allowed"
            >
              {isSuccess ? (
                <span className="flex items-center gap-2"><Check className="w-5 h-5" /> Sent</span>
              ) : isSubmitting ? (
                'Sending...'
              ) : (
                'Send Requirement'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
