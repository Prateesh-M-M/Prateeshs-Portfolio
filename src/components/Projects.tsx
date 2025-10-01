import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-NERGY',
      category: 'Mobile Design',
      description: 'A mobile app to make your house smart and automated to your comfort.',
      fullDescription: 'This project involved designing a complete mobile application from the ground up. The challenge was to create an intuitive automation experience that would make your house smart and automated while maintaining a beautiful, modern interface.',
      image: 'https://cdn.dribbble.com/userupload/44336280/file/4478fef672b2169289cd301e827edc8f.png?crop=0x0-3351x2513&format=webp&resize=400x300&vertical=center',
      tags: ['Application', 'Language Learning', 'Mobile UX & UI', 'Case Study', 'Prototyping'],
      liveUrl: 'https://www.behance.net/gallery/231624271/AI-NERGY',
    },
    {
      id: 2,
      title: 'UX Case Study: Heuristic Evaluation',
      category: 'Case Study',
      description: 'Understanding the importance of heuristic evaluation in user experience design.',
      fullDescription: 'Exploring and Understanding Jakob Nielsen’s usability heuristics. This project involved conducting a heuristic evaluation of Myntra to identify usability issues and provide recommendations for improvement.',
      image: 'https://cdn.dribbble.com/userupload/44336422/file/060228c0b8c73866a04ed75c7e5961f6.jpg?crop=0x0-3232x2424&format=webp&resize=400x300&vertical=center',
      tags: ['Case Study', 'UX Research', 'Heuristic Evaluation'],
      liveUrl: 'https://dribbble.com/shots/26349557-Heuristic-Evaluation-Of-Myntra',
    },
    {
      id: 3,
      title: 'VidayVani: South Indian Language Learning App',
      category: 'Mobile Design',
      description: 'A Mobile app to learn South Indian languages for students or anyone who has moved here for more opportunities.',
      fullDescription: 'Vidya Vani is a mobile application which is designed to make learning a new language fun through differnt ways such as Kareoke, suduko and more.',
      image: 'https://cdn.dribbble.com/userupload/44337812/file/6b6e48e7fe125eb190f4adac5227a089.jpg?crop=0x0-3232x2424&format=webp&resize=400x300&vertical=center',
      tags: ['Application', 'Language Learning', 'Mobile UX & UI', 'Case Study', 'Prototyping'],
      liveUrl: 'https://www.behance.net/gallery/214277377/VIdyaVani-A-South-Indian-Language-Learning-Application',
    },
    {
      id: 4,
      title: 'ZARA: Fashion E-commerce Website Case Study',
      category: 'Case Study',
      description: 'ZARA; a fashion e-commerce website case study and redesign.',
      fullDescription: 'This project involved redesigning the complete ZARA e-commerce website. The challenge was to create an intuitive shopping experience that would increase conversion rates while maintaining a beautiful, modern interface.',
      image: 'https://cdn.dribbble.com/userupload/44341042/file/139d0c290a50e9148fc0d7ec77f39065.jpg?resize=1200x676&vertical=center',
      tags: ['E-Commerce', 'Redesign', 'Case Study'],
      liveUrl: 'https://www.behance.net/gallery/201391887/ZARA-Redesign-Case-study',
    },
    {
      id: 5,
      title: 'Poster Design: Beach Party Invite',
      category: 'Graphic Design',
      description: 'Modern real estate platform with advanced search and virtual tour features.',
      fullDescription: 'Designed a comprehensive real estate platform that revolutionizes how people search for and view properties. The platform includes advanced filtering options, virtual tour integration, and a streamlined inquiry system. The design focuses on helping users make informed decisions quickly and efficiently.',
      image: 'https://cdn.dribbble.com/userupload/44336710/file/130b21e40eb80fab02482969531a13e5.jpg?crop=0x678-2481x2538&format=webp&resize=400x300&vertical=center',
      tags: ['Poster', 'Photoshop', 'Graphic Design'],
      liveUrl: 'https://dribbble.com/shots/26349628-Poster-Design-Beach-Party-Invite',
    },
    {
      id: 6,
      title: 'Geometric Pattern Design',
      category: 'Graphic Design',
      description: 'Fast and intuitive food delivery app with real-time tracking features.',
      fullDescription: 'Developed a complete food delivery application focusing on speed and user experience. The app features real-time order tracking, personalized recommendations, and a streamlined ordering process. Special attention was given to the visual presentation of food items and the checkout experience.',
      image: 'https://cdn.dribbble.com/userupload/44337204/file/0723bec7923b5808c353b34cf24eec3e.png?crop=0x0-2880x2160&format=webp&resize=400x300&vertical=center',
      tags: ['Design', 'Illustrator', 'Graphic-Design'],
      liveUrl: 'https://dribbble.com/shots/26349798-Pattern-Design',
    }
  ];

  const categories = ['All', 'Mobile Design', 'Case Study', 'Graphic Design'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-blue-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Showcase of my recent work and creative solutions
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
                onClick={() => setSelectedProject(project.id)}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:scale-105 hover:-rotate-1 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors duration-300"
                  >
                  <ExternalLink size={16} />
                  </a>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project.id);
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors duration-300"
                  >
                    <Eye size={16} />
                  </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="text-blue-400 text-sm font-medium mb-2">{project.category}</div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
            <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 cursor-default">
              <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-gray-800/80 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors duration-300"
                      >
                        ✕
                      </button>
                    </div>
                    <div className="p-8">
                      <div className="text-blue-400 text-sm font-medium mb-2">{project.category}</div>
                      <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">{project.fullDescription}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
                        >
                          <ExternalLink size={16} />
                          View Project
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;