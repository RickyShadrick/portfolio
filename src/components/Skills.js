import React from 'react';

const Skills = () => {
  const technicalSkills = {
    'Programming & Web': ['Java', 'C#', 'C++', 'PHP', 'Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'MySQL'],
    'Tools & Platforms': ['Android Studio', 'Visual Studio', 'IntelliJ IDEA', 'VS Code', 'GitHub', 'Docker', 'Kubernetes', 'SonarQube', 'Junit'],
    'Systems & Networking': ['System virtualization (VirtualBox, VMWare)', 'Cloud Deployment', 'System Setup & Configuration', 'Troubleshooting & Maintenance', 'Network Configuration']
  };

  const softSkills = [
    'Communication & Customer Engagement',
    'Teamwork & Collaboration',
    'Time Management',
    'Problem Solving',
    'Presentation Skills',
    'Leadership'
  ];

  const practicalExperience = [
    'Android application development using Java',
    'Web application development with PHP and database integration',
    'Cloud-based system development and deployment',
    'Database design and management'
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Technical Skills</h3>
            <div className="space-y-4 md:space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category} className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-base md:text-lg font-semibold text-primary-600 mb-3 md:mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 md:px-3 md:py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Soft Skills</h3>
            <div className="bg-white p-4 md:p-6 rounded-xl shadow-md">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {softSkills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2 md:space-x-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Info */}
            <div className="mt-6 md:mt-8 bg-primary-50 p-4 md:p-6 rounded-xl border border-primary-200">
              <h4 className="text-base md:text-lg font-semibold text-primary-700 mb-3 md:mb-4">Practical Experience</h4>
              <ul className="space-y-1.5 md:space-y-2">
                {practicalExperience.map((exp, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm md:text-base text-gray-700">{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
