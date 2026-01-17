import React, { useState, useEffect, useRef } from 'react';

const Cando = () => {
  const [activeSection, setActiveSection] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      title: "Personas AI Agents",
      description: "Deploy intelligent agents that automate complex business processes and decision-making workflows.",
      slug: "persona",
      image: "/solutions/Personas.png"
    },
    {
      title: "Upwork AI Agent",
      description: "Find information instantly with contextual understanding and intelligent result ranking.",
      slug: "upwork",
      image: "/solutions/upwork.png"
    },
    {
      title: "Newsletter AI Agent",
      description: "Generate, review, and optimize code while performing deep data analysis and insights.",
      slug: "newsletter",
      image: "/solutions/newslatter.png"
    },
    {
      title: "Call AI Agent",
      description: "Extract, transform, and analyze data from documents, images, and multimedia files.",
      slug: "call-agent",
      image: "/solutions/call.png"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const scrollTop = contentRef.current.scrollTop;
      const containerHeight = contentRef.current.clientHeight;
      const newActiveSection = Math.round(scrollTop / containerHeight);
      if (newActiveSection < sections.length) {
        setActiveSection(newActiveSection);
      }
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener('scroll', handleScroll);
      return () => contentElement.removeEventListener('scroll', handleScroll);
    }
  }, [sections.length]);

  const scrollToSection = (index: number) => {
    if (contentRef.current) {
      const sectionHeight = contentRef.current.clientHeight;
      contentRef.current.scrollTo({
        top: index * sectionHeight,
        behavior: 'smooth'
      });
    }
    setActiveSection(index);
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="text-center py-16 max-mobile:pb-10  px-4">
        <h2 className="max-mobile:text-3xl font-bold text-4xl max-mobile:mb-2 text-navy-950 mb-4 tracking-tight">
          Rejoicehub Ecosystem
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-start max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-6 lg:gap-8">
        <div className="w-full lg:w-80 sticky top-[120px] z-10 max-mobile:top-[100px]">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden backdrop-blur-sm">
            <div className="p-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(index)}
                  className={`w-full text-left px-6 py-4 sm:py-5 cursor-pointer transition-all duration-300 flex items-center justify-between rounded-xl mb-1 group ${
                    activeSection === index
                      ? 'bg-warning-700 text-white shadow-lg scale-[1.02]'
                      : 'text-navy-950 hover:bg-amber-100 hover:shadow-md hover:scale-[1.01]'
                  }`}
                >
                  <div className="flex-1">
                    <span className="text-base sm:text-lg font-medium block mb-1">{section.title}</span>
                  </div>
                  <div className={`ml-4 transition-transform duration-300 ${
                    activeSection === index ? 'translate-x-1' : 'group-hover:translate-x-1'
                  }`}>
                    <span className={`text-lg ${
                      activeSection === index ? 'text-orange-200' : 'text-gray-400'
                    }`}>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full">
          <div
            ref={contentRef}
            className="h-[70vh] overflow-y-auto scroll-smooth scrollbar-hide"
            style={{ scrollSnapType: 'y mandatory' }}
          >
            {sections.map((section, index) => (
              <div
                key={index}
                className="min-h-[74vh] flex items-start px-4 pb-10 pt-0 "
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-full max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <div className="space-y-5 sm:space-y-6">
                      <h2 className="text-2xl sm:text-4xl font-light text-navy-950 leading-tight">
                        {section.title}
                      </h2>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                        {section.description}
                      </p>
                      <div className="pt-4">
                        <a
                          href={`/solutions/${section.slug}`}
                          className="inline-block bg-warning-700 hover:bg-warning-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition duration-200 shadow-lg hover:shadow-xl"
                        >
                          Learn More <span>→</span>
                        </a>
                      </div>
                    </div>
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-r from-warning-700 to-orange-700 rounded-2xl transform rotate-3 transition duration-300 group-hover:rotate-6 opacity-20"></div>
                      <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                        <div className="w-full bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center overflow-hidden rounded-2xl">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-gray-500">
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-300 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cando;