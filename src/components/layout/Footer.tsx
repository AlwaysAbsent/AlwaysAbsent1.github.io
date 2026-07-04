
export const Footer = () => {
  return (
    <footer className="relative bg-void-2 pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="font-display font-bold text-2xl mb-2">IDEAL TALENT HUNT</h2>
          <p className="font-mono text-mist text-xs tracking-widest uppercase mb-6">Here you can experience perfection</p>
          <div className="text-mist text-sm space-y-2">
            <p>D-238, 2nd Floor, Sumel-11,</p>
            <p>Namaste Circle, Shahibaugh,</p>
            <p>Ahmedabad, Gujarat – 380004</p>
          </div>
        </div>
        <div>
          <h3 className="font-mono text-white text-xs tracking-widest uppercase mb-6">Navigation</h3>
          <div className="flex flex-col gap-3 text-mist text-sm">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#industries" className="hover:text-white transition-colors">Industries</a>
            <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
            <a href="#reach" className="hover:text-white transition-colors">Our Reach</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h3 className="font-mono text-white text-xs tracking-widest uppercase mb-6">Contact Us</h3>
          <div className="flex flex-col gap-3 text-mist text-sm">
            <p>Phone: 079-48904367</p>
            <p>Mobile: +91 96249 30266</p>
            <p>Email: job.idealtalenthunt@gmail.com</p>
            <p className="mt-4 text-xs">Contact person: Satya Prakash Mishra</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto relative z-10 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-mist text-xs">
        <p>&copy; {new Date().getFullYear()} Ideal Talent Hunt. All rights reserved.</p>
        <p>A group company of Sai Marketing Agency</p>
      </div>
    </footer>
  );
};
