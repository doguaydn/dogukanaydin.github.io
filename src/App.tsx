import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import SpotlightCursor from './components/SpotlightCursor';
import ParallaxDivider from './components/ParallaxDivider';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.section-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <div className="relative min-h-screen bg-dark-900 grid-bg overflow-x-hidden">
          {/* Noise overlay */}
          <div className="noise-overlay" />

          {/* Spotlight cursor */}
          <SpotlightCursor />

          {/* Scroll progress bar */}
          <ScrollProgress />

          {/* Particles background */}
          <Particles />

          {/* Navigation */}
          <Navbar />

          {/* Main content */}
          <main className="relative z-10 w-full">
            <Hero />
            <ParallaxDivider variant={0} />
            <About />
            <ParallaxDivider variant={1} />
            <Skills />
            <ParallaxDivider variant={2} />
            <Projects />
            <ParallaxDivider variant={3} />
            <Experience />
            <ParallaxDivider variant={4} />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
