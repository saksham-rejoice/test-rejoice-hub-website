import { useState } from "react";
import {
  ArrowRight,
  Zap,
  Brain,
  Globe,
  Smartphone,
  Wifi,
  Cloud,
  Code,
  Palette,
  CheckCircle,
} from "lucide-react";
import TrueIcon from "/assets/icons/true.svg";
import { NavLink } from "react-router-dom";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    label: "AI Agent Development",
    description:
      "Co-create intelligent agents that become your strategic partners—learning your business, adapting to your needs, and amplifying your team's capabilities.",
    icon: Brain,
    features: [
      "Strategic Partnership",
      "Adaptive Learning",
      "Human-AI Synergy",
      "Ethical by Design",
    ],
    href: "/services/ai-agents-services",
    category: "AI & Automation",
  },
  {
    label: "Generative AI Solutions",
    description:
      "Transform how you work with AI that understands context, generates insights, and collaborates with your team to drive innovation.",
    icon: Zap,
    features: [
      "Contextual Understanding",
      "Creative Collaboration",
      "Insight Generation",
      "Innovation Partner",
    ],
    href: "/services/generative-ai-development-services",
    category: "AI & Automation",
  },
  {
    label: "Digital Development",
    description:
      "Build future-ready digital experiences that seamlessly integrate with your AI partners and scale with your business growth.",
    icon: Globe,
    features: [
      "AI-Ready Architecture",
      "Scalable Solutions",
      "Future-Proof Design",
      "Seamless Integration",
    ],
    href: "/services/web-development-services",
    category: "Development",
  },
  {
    label: "Mobile Innovation",
    description:
      "Create mobile experiences that leverage AI partnerships to deliver personalized, intelligent interactions on any device.",
    icon: Smartphone,
    features: [
      "AI-Powered UX",
      "Cross-Platform",
      "Intelligent Interactions",
      "Personalized Experience",
    ],
    href: "/services/mobile-app-development-services",
    category: "Development",
  },
  {
    label: "IOT & Connected Solutions",
    description:
      "Connect your physical world with AI intelligence, creating smart ecosystems that learn and adapt to your operational needs.",
    icon: Wifi,
    features: [
      "Smart Ecosystems",
      "Real-time Intelligence",
      "Predictive Analytics",
      "Operational Excellence",
    ],
    href: "/services/iot-development-services",
    category: "Development",
  },
  {
    label: "DevOps & Automation",
    description:
      "Streamline your development and deployment with AI-powered automation that works as your operational partner.",
    icon: Cloud,
    features: [
      "AI-Powered CI/CD",
      "Intelligent Monitoring",
      "Automated Optimization",
      "Operational Partnership",
    ],
    href: "/services/devops-consulting-services",
    category: "Consulting",
  },
  {
    label: "Open Source Strategy",
    description:
      "Leverage the power of open-source AI with expert guidance on implementation, customization, and community collaboration.",
    icon: Code,
    features: [
      "Community Collaboration",
      "Custom AI Solutions",
      "Open Innovation",
      "Strategic Implementation",
    ],
    href: "/services/open-source-consulting",
    category: "Consulting",
  },
  {
    label: "Design & Experience",
    description:
      "Create intuitive, engaging experiences that seamlessly integrate AI partnerships and drive meaningful user interactions.",
    icon: Palette,
    features: [
      "AI-Enhanced UX",
      "Human-Centered Design",
      "Intelligent Interfaces",
      "Experience Partnership",
    ],
    href: "/services/ui-ux-design-services",
    category: "Design",
  },
];

const ServicesGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Services" },
    { id: "AI & Automation", label: "AI & Automation" },
    { id: "Development", label: "Development" },
    { id: "Consulting", label: "Consulting" },
    { id: "Design", label: "Design" },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <>
      <section className=" bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
        <div className="absolute top-0 leading-0 w-full z-[-1]">
          <img className="block" src={TopLineImage} alt="TopLineImage" />
        </div>
        <div className="absolute bottom-0 leading-0 w-full z-[-1]">
          <img className="block" src={BottomLineImage} alt="BottomLineImage" />
        </div>
        <div className="container-lg">
          <div className="pb-[50px] max-mobile:pb-10">
            <span className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
              Our Services
            </span>
            <h2 className="heading3 text-primary text-center mb-4">
              Strategic Services for
              <span className=" text-gradient"> AI-Powered Success</span>
            </h2>
            <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
              From AI agent development to digital transformation, we provide
              comprehensive solutions that position you as partners in your
              clients' success journey.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <div
              style={{ scrollbarWidth: "none" }}
              className="bg-white p-2 max-mobile:p-1 overflow-auto w-full border border-solid border-border-color flex items-center gap-2 rounded-2xl"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 text-primary rounded-xl border-none max-mobile:whitespace-nowrap max-mobile:py-2 max-mobile:px-4 max-mobile:text-sm font-medium cursor-pointer text-lg transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-b from-[#FF5E01] to-[#FF9404] text-white shadow-lg"
                      : " "
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
          <div className="max-laptop:px-12 max-mobile:px-0">
            <div className="relative">
              {/* Custom arrows */}
              <div className="absolute max-mobile:hidden custom-swiper-button-prev top-1/2 -translate-y-1/2 hover:bg-orange transition-all ease-in-out duration-300 hover:text-white w-12 h-12 bg-white z-[99] border border-[#e9e9e9] left-[-55px] flex items-center justify-center rounded-full">
                <ChevronLeft className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="absolute max-mobile:hidden custom-swiper-button-next top-1/2 -translate-y-1/2 hover:bg-orange transition-all ease-in-out duration-300 hover:text-white w-12 h-12 bg-white z-[99] border border-[#e9e9e9] right-[-55px] flex items-center justify-center rounded-full">
                <ChevronRight className="w-6 h-6 cursor-pointer" />
              </div>
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".custom-swiper-button-next",
                  prevEl: ".custom-swiper-button-prev",
                }}
                spaceBetween={20}
                slidesPerView={3}
                loop={true}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  480: {
                    slidesPerView: 1.4,
                    spaceBetween: 12,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 15,
                  },
                  768: {
                    slidesPerView: 2.4,
                    spaceBetween: 18,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 24,
                  },
                }}
              >
                {filteredServices.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <SwiperSlide>
                      <div
                        key={service.href}
                        className="group relative bg-white rounded-2xl p-4 max-laptop:p-3"
                      >
                        <div className="relative py-[30px] px-5 max-mobile:rounded-lg max-mobile:p-3 rounded-2xl p-8 max-laptop:p-5 border border-solid border-orange-border transition-all duration-500 h-full overflow-hidden">
                          <div className="pb-6 max-mobile:pb-4 border-b border-solid border-orange-border">
                            <span className="block text-base font-medium max-mobile:text-base max-mobile:pb-0 text-gradient pb-2">
                              {service.category}
                            </span>
                            <h3 className="text-2xl max-mobile:text-xl font-medium text-primary line-clamp-1">
                              {service.label}
                            </h3>
                          </div>
                          <div className="pt-6 max-laptop:pt-3 max-mobile:pt-4">
                            <div className="w-20 h-20 rounded-full border border-solid border-orange-border bg-[#FFF4EA]  flex items-center justify-center text-amber-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                              <IconComponent className="w-10 h-10" />
                            </div>
                            <p className="text-lg max-mobile:text-sm pb-6 text-primary line-clamp-3 mb-6">
                              {service.description}
                            </p>
                            <div className="pb-6 max-mobile:pb-4">
                              {service.features.map((feature, featureIndex) => (
                                <div
                                  key={featureIndex}
                                  className="flex pb-4 last:pb-0 items-center gap-3"
                                >
                                  <img
                                    src={TrueIcon}
                                    alt="TrueIcon"
                                    className="max-mobile:max-w-3.5"
                                  />
                                  <span className="text-lg max-mobile:text-sm text-primary ">
                                    {feature}
                                  </span>
                                </div>
                              ))}
                            </div>
                            <a
                              href={service.href}
                              className="py-3 max-mobile:py-2 max-mobile:mt-2 flex w-fit items-center gap-1 px-5 cursor-pointer text-base font-semibold text-orange tracking-[0.4px] rounded-full bg-white border border-solid border-orange hover:bg-transparent hover:text-orange transition ease-in-out duration-300"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "></div>
        </div>
      </section>
      <div className="py-[60px]">
        <div className="container-lg">
          <div className="grid grid-cols-4 gap-0 max-tab:grid-cols-2 max-mobile:grid-cols-2">
            <div className="border-border-color py-8 border-r border-solid max-mobile:pb-5">
              <h3 className="text-[60px] max-mobile:text-3xl max-mobile:leading-normal leading-[65px] text-primary font-semibold">
                500+
              </h3>
              <p className="text-lg pl-2 max-mobile:text-sm  font-normal tracking-[2px] text-primary">
                Partnerships
              </p>
            </div>
            <div className="border-border-color text-center py-8 border-r border-solid max-mobile:pb-5">
              <h3 className="text-[60px] max-mobile:text-3xl max-mobile:leading-normal leading-[65px] text-primary font-semibold">
                1000+
              </h3>
              <p className="text-lg font-normal max-mobile:text-sm tracking-[2px] text-primary">
                AI Agents Built
              </p>
            </div>
            <div className="border-border-color text-center py-8 border-r border-solid max-mobile:pb-5">
              <h3 className="text-[60px] max-mobile:text-left max-mobile:text-3xl max-mobile:leading-normal leading-[65px] text-primary font-semibold">
                99.9%
              </h3>
              <p className="text-lg max-mobile:text-sm max-mobile:text-left font-normal tracking-[2px] text-primary">
                Success Rate
              </p>
            </div>
            <div className=" text-center py-8 max-mobile:pb-5">
              <h3 className="text-[60px] max-mobile:text-3xl max-mobile:leading-normal leading-[65px] text-primary font-semibold">
                24/7
              </h3>
              <p className="text-lg max-mobile:text-sm font-normal tracking-[2px] text-primary">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <div className="container-lg">
          <div className="bg-blue-900 p-[30px] max-mobile:rounded-lg max-mobile:p-5 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-5 border border-solid border-border-color3 rounded-2xl flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-medium text-primary mb-2">
                Ready to Start Your Partnership?
              </h3>
              <p className="text-lg text-primary max-mobile:text-base">
                Let's discuss how our partnership approach can transform your
                business and drive measurable results.
              </p>
            </div>
            <div className="flex items-center gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
              <a
                href="https://calendly.com/dipak-rejoicehub"
                target="_blank"
                aria-label="Start Your Project"
                rel="noopener noreferrer"
                className="py-3.5 max-mobile:justify-center flex items-center gap-1 px-6 cursor-pointer text-base font-semibold text-white tracking-[0.4px] rounded-full bg-primary-300 border border-solid border-primary-300 hover:bg-transparent hover:text-primary-300 transition ease-in-out duration-300"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </a>
              <NavLink
                to="/services"
                aria-label="View Our Work"
                className="py-3.5 flex max-mobile:justify-center items-center gap-1 px-6 cursor-pointer text-base font-semibold text-orange tracking-[0.4px] rounded-full bg-white border border-solid border-orange hover:bg-transparent hover:text-orange transition ease-in-out duration-300"
              >
                View All Services
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
