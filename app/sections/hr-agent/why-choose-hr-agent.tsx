import React from "react";
import SettingIcon from "/assets/images/setting.svg";
import AIAgentIcon from "/assets/icons/aiAgentdevelopment.svg";
import ScalabilityBuiltIcon from "/assets/icons/scalabilitybuilt.svg";
import DataSecurityIcon from "/assets/icons/datasecurity.svg";
import InstantDeploymentIcon from "/assets/icons/instantdeployment.svg";

export default function WhyChoosehrAgent() {
  const features = [
    {
      id: 1,
      title: "AI Agent Development",
      description:
        "AI handles everything from hiring and onboarding to employee support.",
      icon: AIAgentIcon,
    },
    {
      id: 2,
      title: "Customizable for Any HR Department",
      description:
        "Works for small teams, enterprises, remote companies, and global HR operations.",
      icon: SettingIcon,
    },
    {
      id: 3,
      title: "Built for Scalability",
      description: "Handle 10 or 10,000 employees with the same efficiency.",
      icon: ScalabilityBuiltIcon,
    },
    {
      id: 4,
      title: "Advanced Data Security",
      description:
        "Enterprise-grade encryption, privacy controls, and compliance.",
      icon: DataSecurityIcon,
    },
    {
      id: 5,
      title: "Instant Deployment",
      description: "Launch your HR agent in days, not months.",
      icon: InstantDeploymentIcon,
    },
  ];

  return (
    <div className="px-10 pb-20 max-mobile:py-12 max-tab:px-5 max-mobile:px-3 max-mobile:pt-0">
      <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12 max-mobile:rounded-xl">
        <div className="container-lg2">
          <div className="pb-[80px] max-mobile:pb-16">
            <h2 className="heading3 text-center text-white ">
              Why Choose Our HR Agent Solution?
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-x-7 max-mobile:gap-10 gap-y-[60px]">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="w-full sm:max-w-[calc(50%-14px)] lg:max-w-[calc(33.333%-19px)]"
              >
                <div className="bg-primary-100 max-mobile:rounded-lg max-mobile:p-3 rounded-[20px] border border-solid border-primary-200 h-full">
                  <div className="mt-[-30px] px-5 max-mobile:px-3 max-mobile:mt-[-35px]">
                    <img
                      src={feature.icon}
                      alt=""
                      className="max-mobile:max-w-[60px]"
                    />
                  </div>
                  <div className="p-5 min-h-[130px] max-mobile:px-0">
                    <h3 className="text-xl font-medium text-white mb-2.5">
                      {feature.title}
                    </h3>
                    <p className="text-base text-white-80 font-light">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
