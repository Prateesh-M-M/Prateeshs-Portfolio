import { useState, useEffect, useRef } from 'react';
import { Palette, Code, Smartphone, Users, Search, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'UI Design', level: 80, color: 'bg-blue-500' },
    { name: 'UX Research', level: 90, color: 'bg-green-500' },
    { name: 'Prototyping', level: 90, color: 'bg-purple-500' },
    { name: 'Design Systems', level: 70, color: 'bg-yellow-500' },
    { name: 'User Testing', level: 85, color: 'bg-red-500' },
    { name: 'Figma/Sketch', level: 90, color: 'bg-indigo-500' },
    { name: 'Front End Dev', level: 70, color: 'bg-emerald-500' }

  ];

  const services = [
    {
      icon: Palette,
      title: 'UI Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.'
    },
    {
      icon: Search,
      title: 'UX Research',
      description: 'Understanding user needs through research and data-driven insights.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Designing responsive experiences optimized for mobile devices.'
    },
    {
      icon: Code,
      title: 'Prototyping',
      description: 'Building interactive prototypes to test and validate design concepts.'
    },
    {
      icon: Users,
      title: 'User Testing',
      description: 'Conducting usability tests to ensure optimal user experiences.'
    },
    {
      icon: Zap,
      title: 'Design Systems',
      description: 'Creating scalable design systems for consistent brand experiences.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-900" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-blue-400">Services</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Combining creativity with technical expertise to deliver exceptional digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills Progress Bars */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-blue-400 font-medium">{skill.level}%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-3">
                    <div
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Services</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:-rotate-1 group cursor-pointer"
                >
                  <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
                  <h4 className="text-xl font-semibold mb-3 text-white">{service.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;