import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Industries } from './components/sections/Industries';
import { WhyUs } from './components/sections/WhyUs';
import { TrackRecord } from './components/sections/TrackRecord';
import { Reach } from './components/sections/Reach';
import { Pricing } from './components/sections/Pricing';
import { Contact } from './components/sections/Contact';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-void text-mist selection:bg-marigold selection:text-void font-body">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <TrackRecord />
        <Reach />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
