import { FC } from "react";

const demoData = [
  {
    title: "AI Development",
    description:
      "Our AI development team excels in creating intelligent solutions that automate processes and enhance decision-making. We leverage cutting-edge AI technologies to deliver innovative solutions that drive business growth.",
    img: "/servicegrid/ai-new.png",
    href: "/services/ai-agents-services",
  },
  {
    title: "Web Development",
    description:
      "Our advanced infrastructure includes cutting-edge web development tools and secure networking to ensure smooth development and data integrity. We focus on creating scalable, responsive web applications.",
    img: "/servicegrid/web-new.png",
    href: "/services/web-development-services",
  },
  {
    title: "Mobile App Development",
    description:
      "Whether you're developing a native iOS, Android, or cross-platform app, our developers are skilled and up-to-date with the latest trends. We ensure project aims and deliverables are clearly defined from the start.",
    img: "/servicegrid/mobile-new.png",
    href: "/services/mobile-app-development-services",
  },
  {
    title: "IOT Development",
    description:
      "Our IOT development services connect your devices and data to create intelligent, interconnected systems. We ensure quality and security in every IOT solution we deliver.",
    img: "/servicegrid/iot-new.png",
    href: "/services/iot-development-services",
  },
  {
    title: "DevOps Consulting",
    description:
      "Transform your development workflow with our expert DevOps consulting services. We help streamline your deployment pipeline and improve collaboration between teams.",
    img: "/servicegrid/devops-new.png",
    href: "/services/devops-consulting-services",
  },
  {
    title: "UI/UX Design",
    description:
      "Create engaging user experiences with our professional UI/UX design services. We focus on user-centered design principles to deliver intuitive and beautiful interfaces.",
    img: "/servicegrid/ui-new.png",
    href: "/services/ui-ux-design-services",
  },
];

const Demo: FC = () => {
  return (
    <section id="how-we-ensure-success" className="relative bg-accent-50">
      <h2 className="text-center text-3xl font-semibold md:text-4xl text-navy-950 pt-16">
        Our Expertise in Action
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        {demoData.map((item, index) => (
          <div
            key={item.title}
            className="sticky flex h-[70vh] items-start justify-start"
            style={{ top: `${60 + index * 30}px` }}
          >
            <div
              className="relative flex h-[400px] shadow-pink-900 w-full max-w-5xl mx-auto origin-top flex-col rounded-2xl p-6 md:mt-40 md:p-8 bg-navy-950 transition-all duration-300"
              style={{
                zIndex: demoData.length - index,
                boxShadow: `0 ${5 + index * 3}px ${10 + index * 5}px rgba(0, 0, 0, ${0.15 + index * 0.05}), 
                           0 ${3 + index * 2}px ${5 + index * 3}px rgba(0, 0, 0, ${0.1 + index * 0.05})`,
              }}
            >
              <a href={item.href} className="group">
                <h2 className="m-0 text-center text-xl md:text-2xl text-accent-50 group-hover:text-warning-700 transition-colors">
                  {item.title}
                </h2>
                <div className="mt-4 flex h-full flex-col md:flex-row md:gap-8 items-center">
                  <div className="relative w-full md:w-1/2">
                    <p className="text-sm md:text-base text-accent-50 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="mt-4 flex items-center text-warning-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="mr-2">Learn More</span>
                      <svg
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="relative mt-6 h-[200px] w-full md:mt-0 md:w-1/2">
                    <div className="absolute inset-0 overflow-hidden rounded-xl">
                      <div className="relative h-full w-full flex items-center justify-center p-4">
                        <img
                          alt={item.title}
                          src={item.img}
                          className="object-contain max-h-full max-w-full  transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demo;
