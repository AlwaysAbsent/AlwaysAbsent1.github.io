
export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300">
      <div className="font-display font-bold text-lg tracking-wide uppercase">
        Ideal Talent Hunt
      </div>
      <div className="hidden md:flex items-center gap-8 font-body text-mist text-sm">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#services" className="hover:text-white transition-colors">Services</a>
        <a href="#industries" className="hover:text-white transition-colors">Industries</a>
        <a href="#why-us" className="hover:text-white transition-colors">Why Us</a>
        <a href="#reach" className="hover:text-white transition-colors">Reach</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
      <button className="bg-marigold text-void px-6 py-2.5 rounded-full font-body font-medium text-sm hover:scale-95 transition-transform">
        Talk to Us
      </button>
    </nav>
  );
};
