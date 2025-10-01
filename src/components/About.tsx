import { Award, Users, Coffee, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Projects Completed' },
    { icon: Users, value: '10+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Lightbulb, value: '2+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-gray-900 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">My Journey</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  I'm a passionate UI/UX designe student with 2 years of experience creating 
                  digital experiences that matter. My journey began with a fascination for 
                  how design can solve real-world problems and improve people's lives.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I specialize in user research, interaction design, and creating design 
                  systems that scale. When I'm not designing, you'll find me exploring 
                  new technologies, learning new things, or enjoying going for a long ride.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:rotate-2 shadow-lg group"
              >
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:animate-bounce" />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;