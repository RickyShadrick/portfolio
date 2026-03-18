import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Android Application Development',
      description: 'Developed Android applications using Java with focus on user experience and performance optimization.',
      technologies: ['Java', 'Android Studio', 'XML', 'SQLite'],
      features: ['User Authentication', 'Data Management', 'Responsive UI', 'API Integration'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      title: 'Web Application with PHP',
      description: 'Designed and implemented web applications using PHP with database integration for dynamic content management.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: ['Database Integration', 'User Management', 'Content Management', 'Security Features'],
      status: 'Completed',
      github: '#',
      demo: '#'
    },
    {
      title: 'Cloud-Based System',
      description: 'Built and deployed cloud-based systems with scalable architecture and high availability.',
      technologies: ['Docker', 'Kubernetes', 'Cloud Services', 'API Design'],
      features: ['Scalability', 'Load Balancing', 'Auto-scaling', 'Monitoring'],
      status: 'In Progress',
      github: '#',
      demo: '#'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Planning':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects and practical experience in software development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs md:text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-xs md:text-sm text-gray-600">
                        <svg className="w-3 h-3 md:w-4 md:h-4 text-green-500 mr-1.5 md:mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-3">
                  {project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-900 transition-colors duration-200"
                    >
                      GitHub
                    </a>
                  )}
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-3 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github === '#' && project.demo === '#' && (
                    <div className="flex-1 text-center px-3 py-2 bg-gray-200 text-gray-500 text-sm font-medium rounded-lg">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-primary-50 p-6 md:p-8 rounded-xl border border-primary-200">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
              More Projects Coming Soon!
            </h3>
            <p className="text-gray-600 mb-4 text-sm md:text-base">
              I'm constantly working on new projects and expanding my skills. 
              Check back often to see my latest work!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://github.com/RickyShadrick"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm"
              >
                Follow on GitHub
              </a>
              <a
                href="#contact"
                className="px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors duration-200 text-sm"
              >
                Collaborate With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
