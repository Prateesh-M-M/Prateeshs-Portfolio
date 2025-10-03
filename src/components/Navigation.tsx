import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ['#home', '#about', '#skills', '#projects', '#contact'];
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveSection(href);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/80 backdrop-blur-md shadow-2xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with gradient and animation */}
          <button
            onClick={() => scrollToSection('#home')}
            className="group relative text-2xl sm:text-3xl font-bold"
          >
            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-[shimmer_3s_linear_infinite]">
              Prateesh
            </span>
            <span className="relative z-10 text-white group-hover:text-gray-300 transition-colors duration-300">
              Designer
            </span>
            <span className="absolute inset-0 blur-xl bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4 bg-gray-800/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/50">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm lg:text-base font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeSection === item.href
                    ? 'text-white'
                    : 'text-gray-400 group-hover:text-white'
                }`}>
                  {item.label}
                </span>
                
                {/* Active indicator */}
                {activeSection === item.href && (
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-full animate-pulse"></span>
                )}
                
                {/* Hover effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 rounded-full transition-all duration-300 transform scale-0 group-hover:scale-100"></span>
                
                {/* Bottom indicator */}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 ${
                  activeSection === item.href
                    ? 'w-full opacity-100'
                    : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button with animation */}
          <button
            className="md:hidden relative p-2 text-white hover:text-blue-400 transition-all duration-300 group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className="absolute inset-0 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <span className="relative z-10 block transition-transform duration-300 transform group-hover:rotate-180">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-lg rounded-2xl p-2 border border-gray-700/50 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative w-full text-left px-6 py-3 rounded-xl transition-all duration-300 transform hover:translate-x-2 group overflow-hidden ${
                  activeSection === item.href
                    ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
                style={{ 
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                }}
              >
                <span className="relative z-10 flex items-center">
                  {activeSection === item.href && (
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 animate-pulse"></span>
                  )}
                  {item.label}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;