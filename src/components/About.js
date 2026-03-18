import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              My passion lies in developing innovative solutions 
              for web, mobile, and cloud-based systems.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              With experience in various programming languages and development tools, I thrive on solving 
              complex problems and engaging with customers to deliver high-quality software solutions. 
              I am highly motivated, adaptable, and work effectively in both technical and customer-focused environments.
            </p>
            
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              My goal is to contribute to meaningful projects that make a positive impact while continuously 
              expanding my technical knowledge and skills.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Quick Facts</h3>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700">BSc Software Engineering (2022-2025)</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700">Based in Ndola, Zambia</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700">Available for opportunities</span>
              </div>
              <div className="flex items-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm md:text-base text-gray-700">Open to remote work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
