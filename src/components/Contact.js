import React from 'react';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Phone',
      value: '+260 760 647 747 / +260 772 152 667',
      href: 'tel:+260760647747'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: 'shadsrick@gmail.com',
      href: 'mailto:shadsrick@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: 'Location',
      value: 'Ndola, Zambia',
      href: '#'
    }
  ];

  const references = [
    {
      name: 'Mr. Sam Kasele Mukuka',
      title: 'HOD/IT Lecturer',
      organization: 'ZICT College',
      phone: '+260 961 850 020'
    },
    {
      name: 'Mr. Victor Mwenge',
      title: 'Mathematics Teacher/ICT',
      organization: 'Twikatane Combined School',
      phone: '+260 963 813 829'
    },
    {
      name: 'Mr. Chricious Chongo',
      title: 'Training Coordinator',
      organization: 'Telbase Business Solutions',
      phone: '+260 960 642 113'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-16 md:w-20 h-1 bg-primary-600 mx-auto"></div>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Contact Information</h3>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <div className="space-y-4 md:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                      {info.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-500">{info.label}</p>
                      {info.href.startsWith('#') ? (
                        <p className="text-sm md:text-base text-gray-900 break-words">{info.value}</p>
                      ) : (
                        <a
                          href={info.href}
                          className="text-sm md:text-base text-gray-900 hover:text-primary-600 transition-colors duration-200 break-words"
                        >
                          {info.value}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">Professional References</h4>
                <div className="space-y-3 md:space-y-4">
                  {references.map((ref, index) => (
                    <div key={index} className="bg-gray-50 p-3 md:p-4 rounded-lg">
                      <p className="font-semibold text-sm md:text-base text-gray-900">{ref.name}</p>
                      <p className="text-xs md:text-sm text-gray-600">{ref.title}</p>
                      <p className="text-xs md:text-sm text-gray-600">{ref.organization}</p>
                      <p className="text-xs md:text-sm text-primary-600 mt-1">{ref.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6 md:mb-8">Send Me a Message</h3>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm md:text-base"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm md:text-base"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 text-sm md:text-base"
                    placeholder="I'd like to discuss..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-4 py-2 md:px-6 md:py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg text-sm md:text-base"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Thank you for your message! I will get back to you soon. You can also email me directly at shadsrick@gmail.com');
                  }}
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-4 md:mt-6 text-center">
                <p className="text-xs md:text-sm text-gray-600">
                  Or reach out directly at{' '}
                  <a href="mailto:shadsrick@gmail.com" className="text-primary-600 hover:text-primary-700 font-medium">
                    shadsrick@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
