import React from "react";
import {
  FaRobot,
  FaCode,
  FaPalette,
  FaTools,
  FaCloud,
  FaMicrochip,
} from "react-icons/fa";
import { SiOpenai, SiUpwork, SiMicrodotblog, SiPhonepe } from "react-icons/si";
import { services } from "~/constant/servicesprompt";

export const AboutCoreServices = () => {
  return (
    <section className="py-20 max-mobile:py-12 bg-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 max-mobile:mb-10">
          <h2 className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Our Expertise
          </h2>
          <h2 className="heading3 text-center mb-4 text-navy-950">
            Core Services & Solutions
          </h2>
          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            RejoiceHub delivers comprehensive technology services designed to
            accelerate your digital transformation and drive business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5 pt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-primary-300 h-full p-3 rounded-2xl">
              <div className="border h-full border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="p-5 bg-white rounded-full mb-4 border border-accent-400 group-hover:bg-accent-200 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center group-hover:text-amber-600 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-white leading-relaxed mb-6">
                  {service.description}
                </p>

                {service.platforms && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      AI Platforms:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {/* <span className="mr-2">{platform.icon}</span> */}
                          <span>{platform.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {service.technologies && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.deliverables && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Deliverables:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.areas && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Focus Areas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.areas.map((area, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.services && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Services:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.services.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {service.capabilities && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">
                      Capabilities:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.capabilities.map((capability, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700 border border-orange-200"
                        >
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
