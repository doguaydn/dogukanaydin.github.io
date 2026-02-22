import { useEffect } from 'react';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
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
    <div className="relative min-h-screen bg-dark-900 grid-bg overflow-x-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      
      {/* Particles background */}
      <Particles />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main content */}
      <main className="relative z-10 w-full">
        <Hero />
        <div className="py-16" />
        <About />
        <div className="py-16" />
        <Skills />
        <div className="py-16" />
        <Projects />
        <div className="py-16" />
        <Experience />
        <div className="py-16" />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
