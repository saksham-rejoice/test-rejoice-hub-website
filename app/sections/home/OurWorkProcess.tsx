import {
  FaRocket,
  FaLightbulb,
  FaChartBar,
  FaProjectDiagram,
} from "react-icons/fa";

import BrainIcon from "/assets/icons/brain.svg";
import StepIcon from "/assets/icons/StepIcon.svg";
import StepIcon2 from "/assets/icons/StepIcon2.svg";
import StepIcon3 from "/assets/icons/StepIcon3.svg";
import StepIcon4 from "/assets/icons/StepIcon4.svg";

const workflowData = [
  {
    title: "Requirement Analysis",
    desc: "We thoroughly analyze client requirements to understand business needs, goals, and challenges before starting development.",
    icon: <FaLightbulb className="text-orange-300 text-3xl" />,
  },
  {
    title: "Design & Development",
    desc: "Our team designs intuitive user experiences and develops scalable solutions using modern technologies and best practices.",
    icon: <FaProjectDiagram className="text-orange-300 text-3xl" />,
  },
  {
    title: "Testing & Quality Assurance",
    desc: "We conduct rigorous testing and quality checks to ensure flawless functionality, performance, and security of the solution.",
    icon: <FaChartBar className="text-orange-300 text-3xl" />,
  },
  {
    title: "Deployment & Support",
    desc: "After deployment, we provide continuous monitoring, updates, and support to ensure long-term success and reliability.",
    icon: <FaRocket className="text-orange-300 text-3xl" />,
  },
];

export default function ReactWorkflow() {
  return (
    <section className="py-20 max-mobile:py-12">
      <div className="container-lg">
        <div className="pb-[60px]">
          <h2 className="heading3 text-primary text-center mb-4">
            Our Work <span className="text-gradient"> Process </span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            Rejoicehub LLP combines expertise with a proven process to deliver
            exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 max-mobile:grid-cols-1 max-mobile:gap-4">
          {workflowData.map((item, i) => {
            return (
              <div className="rounded-2xl py-10 max-mobile:rounded-lg px-6 max-mobile:rounded-lg max-mobile:p-3 border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
                <img src={BrainIcon} alt="BrainIcon" />
                {i === 0 && (
                  <div className="flex justify-end mt-[-20px] border-collapse border-orange-border border-solid border-b">
                    <img src={StepIcon} alt="StepIcon" />
                  </div>
                )}
                {i === 1 && (
                  <div className="flex justify-end mt-[-20px] border-collapse border-orange-border border-solid border-b">
                    <img src={StepIcon2} alt="StepIcon" />
                  </div>
                )}
                {i === 2 && (
                  <div className="flex justify-end mt-[-20px] border-collapse border-orange-border border-solid border-b">
                    <img src={StepIcon3} alt="StepIcon" />
                  </div>
                )}
                {i === 3 && (
                  <div className="flex justify-end mt-[-20px] border-collapse border-orange-border border-solid border-b">
                    <img src={StepIcon4} alt="StepIcon" />
                  </div>
                )}
                <div className="pt-6">
                  <h3 className="text-xl font-medium text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-lg max-mobile:text-base font-normal text-grey-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
