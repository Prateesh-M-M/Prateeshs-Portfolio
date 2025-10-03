import { Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  // Custom SVG icons for Dribbble and Behance
  const DribbbleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm8.2 6.4c1.1 1.6 1.8 3.6 1.8 5.6 0 .3 0 .6-.1.9-2.1-.4-4.3-.6-6.5-.6-1.5 0-3 .1-4.4.3-.2-.5-.4-1-.7-1.5 2.4-1 4.5-2.4 6.2-4.2.8.5 1.5 1 2.2 1.5zM12 2c2.8 0 5.3 1.1 7.2 2.9-1.5 1.6-3.4 2.9-5.5 3.8C12.5 6.3 11 4.2 9.2 2.4c.9-.3 1.8-.4 2.8-.4zM7 3.2c1.8 1.8 3.3 3.9 4.5 6.2-2.7.7-5.6 1.1-8.5 1.1-.3 0-.6 0-.9-.1C2.7 7.1 4.5 4.7 7 3.2zM2 12v-.5c.4 0 .8.1 1.2.1 3.1 0 6.1-.4 8.9-1.2.2.4.4.9.6 1.3-3.4 1-6.4 2.8-8.7 5.1C2.7 15.3 2 13.7 2 12zm10 10c-2.6 0-5-1-6.8-2.6 2.1-2.1 4.8-3.7 7.9-4.6.8 2.6 1.4 5.3 1.7 8.1-.9-.6-1.8-1-2.8-1zm4.9-.5c-.3-2.6-.9-5.2-1.6-7.6 1.3-.2 2.7-.3 4.1-.3 1.9 0 3.7.2 5.5.5-.8 3.4-3.2 6.2-6.4 7.6-.5-.1-1-.1-1.6-.2z"/>
    </svg>
  );

  const BehanceIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.61.165-1.252.254-1.91.254H0V4.51h6.938v-.007zM16.94 16.665c.44.428 1.073.643 1.894.643.59 0 1.1-.148 1.53-.447.424-.29.68-.61.78-.94h2.588c-.403 1.28-1.048 2.2-1.9 2.75-.85.56-1.884.83-3.08.83-.837 0-1.584-.13-2.272-.4-.673-.27-1.24-.65-1.7-1.14-.464-.49-.823-1.08-1.077-1.77-.253-.69-.373-1.45-.373-2.27 0-.803.135-1.54.403-2.23.27-.7.644-1.28 1.12-1.79.495-.51 1.063-.895 1.736-1.194s1.4-.433 2.22-.433c.91 0 1.69.164 2.38.523.67.34 1.22.82 1.66 1.437.44.62.75 1.356.94 2.195.19.84.25 1.747.21 2.73h-7.69c0 .84.28 1.632.71 2.065l-.08.03zm-10.24.05c.317 0 .62-.03.906-.093.29-.06.548-.165.763-.3.21-.135.39-.328.52-.583.13-.24.19-.57.19-.96 0-.75-.22-1.29-.64-1.62-.43-.32-.99-.48-1.69-.48H3.24v4.05H6.7v-.03zm13.607-5.65c-.352-.385-.94-.578-1.757-.578-.48 0-.88.083-1.2.26-.32.18-.57.396-.76.646-.18.25-.3.52-.36.816-.05.295-.08.558-.09.793h4.802c-.06-.76-.28-1.35-.64-1.93l.02-.03zM6.52 10.45c.574 0 1.05-.134 1.425-.412.374-.27.554-.72.554-1.338 0-.344-.07-.625-.18-.846-.13-.22-.3-.39-.5-.512-.21-.124-.45-.21-.72-.257-.27-.053-.56-.074-.84-.074H3.23v3.44h3.29zm9.098-4.958h5.968v1.454h-5.968V5.48v.01z"/>
    </svg>
  );

  const socialLinks = [
    { icon: DribbbleIcon, href: 'https://dribbble.com/prateesh_m_m', label: 'Dribbble' },
    { icon: BehanceIcon, href: 'https://www.behance.net/prateeshmm', label: 'Behance' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/prateesh-m-m-2147b0302/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:workwithprateesh@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Prateesh<span className="text-white">Designer</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Passionate UI/UX designer creating beautiful, functional digital experiences 
              that connect users with technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-3">
              <p className="text-gray-400">
                <span className="text-blue-400 font-medium">Email:</span><br />
                workwithprateesh@gmail.com
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400 font-medium">Phone:</span><br />
                +91 93530 97150
              </p>
              <p className="text-gray-400">
                <span className="text-blue-400 font-medium">Location:</span><br />
                Bangalore, IN
              </p>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Pratees M M. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Made with <Heart size={16} className="text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;