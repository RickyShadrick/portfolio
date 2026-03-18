import React from 'react';

const Experience = () => {
  const education = [
    {
      institution: 'Zambia ICT University College',
      location: 'Ndola',
      degree: 'BSc Software Engineering',
      period: '2022–2025',
      details: [
        'Introduction to IT, Programming, and Database Systems',
        'Software Requirements Engineering',
        'Software Engineering Foundations and Management',
        'Software Quality Engineering and Software Testing',
        'Software Design and Operating Systems Concepts',
        'Advanced Database Systems and Distributed Computer Systems'
      ]
    },
    {
      institution: 'Telbase Solutions',
      location: 'Lusaka',
      degree: 'Certificate in Computer Studies & Customer Service',
      period: '2021',
      details: []
    },
    {
      institution: 'Twikatane Combined School',
      location: 'Ndola',
      degree: 'Grade 12 Certificate',
      period: '2020',
      details: []
    }
  ];

  const practicalExperience = [
    {
      title: 'School Prefect / ICT Assistant',
      institution: 'Twikatane Combined School',
      location: 'Ndola',
      period: '2018–2020',
      responsibilities: [
        'Served as school prefect and ICT assistant',
        'Assisted in teaching computer basics to Grades 8 and 9',
        'Supported ICT teacher with marking and lesson preparation',
        'Maintained computer laboratory equipment',
        'Provided basic troubleshooting support',
        'Assisted teachers during computer lab sessions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Education & Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{edu.degree}</h4>
                      <p className="text-primary-600 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{edu.location}</p>
                  {edu.details.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-2">Relevant Coursework:</p>
                      <ul className="space-y-1">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <svg className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Practical Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Practical Experience</h3>
            <div className="space-y-6">
              {practicalExperience.map((exp, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-primary-200">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{exp.title}</h4>
                      <p className="text-primary-600 font-medium">{exp.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-gray-700 flex items-start">
                        <svg className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Technical Projects */}
            <div className="mt-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Technical Projects</h4>
              <div className="bg-gray-50 p-6 rounded-xl shadow-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Developed Android applications using Java</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Designed and implemented web applications with PHP and database integration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Built and deployed cloud-based systems</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Designed and managed database schemas</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Used GitHub for version control and team collaboration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
