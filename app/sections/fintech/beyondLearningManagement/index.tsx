import React from "react";
import LineAnimation from "/assets/images/line-orange.svg";
import LineAnimationDown from "/assets/images/line-orange-down.svg";
import UnderstandIcon from "/assets/icons/Understand.svg";
const workflowSteps = [
  {
    title: "Understand Your Business Needs",
    description:
      "We listen to your goals, study your business, and understand what features you need in your FinTech software.",
    icon: UnderstandIcon,
  },
  {
    title: "Design Your Software Interface",
    description:
      "Our designers create easy-to-use screens and layouts while our experts plan a strong and secure system structure.",
    icon: UnderstandIcon,
  },
  {
    title: "Development & Testing",
    description:
      "We write clean code, test every feature thoroughly, and show you regular updates so you can give feedback.",
    icon: UnderstandIcon,
  },
  {
    title: "Launch & Grow Your Software",
    description:
      "We launch your software smoothly, monitor its performance daily, fix any issues quickly, and help you grow as needed.",
    icon: UnderstandIcon,
  },
];
export default function BeyondLearningManagement() {
  return (
    <div className="py-20 bg-[#E9F1FF]">
      <div className="container-lg2">
        <div>
          <h2 className="heading2 text-primary text-center mb-3">
            Our Proven FinTech Software{" "}
            <span className="text-gradient">Development Process</span>
          </h2>
          <p className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20">
            We follow a simple, step-by-step process to build safe and powerful
            FinTech software that helps your business grow.
          </p>
        </div>
        <div className="grid grid-cols-4 max-tab:grid-cols-2 max-tab:gap-y-8 gap-0 max-mobile:gap-4 relative max-mobile:grid-cols-1">
          <div className="absolute top-[26%] left-[18%]">
            <img
              src={LineAnimation}
              alt="LineAnimation"
              className="max-w-[200px] max-tab:hidden w-full block"
            />
          </div>
          <div className="absolute max-tab:hidden top-[16%] left-[43%]">
            <img
              src={LineAnimationDown}
              alt="LineAnimationDown"
              className="max-w-[200px] w-full block"
            />
          </div>
          <div className="absolute max-tab:hidden top-[26%] right-[18%]">
            <img
              src={LineAnimation}
              alt="LineAnimation"
              className="max-w-[200px] w-full block"
            />
          </div>
          {workflowSteps.map((item, index) => (
            <div key={index} className="flex justify-center relative">
              <div>
                {/* <span className="w-10 absolute left-[30%] translate-x-[-50%] h-10 rounded-full flex items-center mx-auto justify-center text-lg text-white font-semibold border border-white bg-[#FF9404]">
                  {index + 1}
                </span> */}
                <div className=" flex justify-center pt-5">
                  <span className="w-16 h-16 max-mobile:w-12 max-mobile:h-12 rounded-full flex items-center mx-auto justify-center text-2xl max-mobile:text-lg text-white font-bold border-2 border-white bg-[#FF9404]">
                  {index + 1}
                </span>
                </div>
                <div className="mt-5 max-mobile:mt-4 text-center">
                  <h3 className="text-xl max-w-[250px] mx-auto relative max-mobile:text-xl font-medium text-center text-primary mb-2.5">
                    {item.title}
                  </h3>
                  <div className="relative">
                    <p className="text-base text-[#444] font-medium max-w-[297px]  max-mobile:text-base text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
