import { useState, useEffect } from 'react';
import { ChevronUp, Mail, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import BackgroundParticles from './components/BackgroundParticles';
import CustomCursor from './components/CustomCursor';
import FloatingElements from './components/FloatingElements';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-gray-900 text-white overflow-x-hidden">
      <BackgroundParticles />
      <CustomCursor />
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 hover:scale-110 animate-pulse hover:animate-none"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;