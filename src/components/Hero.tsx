import { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import InteractiveButton from './InteractiveButton';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "UI/UX Designer";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900"
    >
      <div className="container mx-auto px-4 text-center">
        <br />
        <br />
        <br />
        <br />
        <div className="animate-fade-in">
          {/* Circle logo */}
          <div className="mb-8">
            <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl font-bold shadow-2xl">
              PMM
            </div>
          </div>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Prateesh <span className="text-blue-400">MM</span>
          </h1>
          
          {/* Typing effect */}
          <div className="text-2xl md:text-3xl text-gray-300 mb-8 h-12">
            <span className="text-blue-400">{displayText}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          {/* Intro text */}
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Crafting beautiful, intuitive digital experiences that connect users with technology. 
            Passionate about solving complex problems through elegant design solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <InteractiveButton 
              className="text-lg shadow-lg"
              onClick={() => {
                const projectsSection = document.querySelector('#projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View My Work
            </InteractiveButton>
            
            <a href="/resume.pdf" download>
              <InteractiveButton variant="secondary" className="flex items-center gap-x-2 text-lg">
                <Download size={20} />
                Download CV
              </InteractiveButton>
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down arrow */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce hover:text-blue-400 transition-colors duration-300"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
