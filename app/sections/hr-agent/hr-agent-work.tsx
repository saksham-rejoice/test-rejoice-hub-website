import React from "react";

import UnderstandIcon from "/assets/images/Understand.svg";
import RepetitiveTaskIcon from "/assets/icons/repetitiveTask.svg";
import RealTimeIcon from "/assets/icons/realtimeresponse.svg";
import AnalyzeIcon from "/assets/icons/analyze.svg";

const workSteps = [
  {
    id: 1,
    title: "Understand & Learn Your HR Processes",
    description:
      "We train the AI agents for human resources using your policies, workflows, and datasets.",
    icon: UnderstandIcon,
  },
  {
    id: 2,
    title: "Automate HR Repetitive Tasks",
    description:
      "The system identifies repetitive activities and automates them end-to-end.",
    icon: RepetitiveTaskIcon,
  },
  {
    id: 3,
    title: "Deliver Real-Time Responses & Actions",
    description:
      "Employees and candidates get instant support through chat, voice, email, or portal.",
    icon: RealTimeIcon,
  },
  {
    id: 4,
    title: "Analyze, Improve & Scale",
    description: "Your HR agent keeps getting smarter with every interaction.",
    icon: AnalyzeIcon,
  },
];

export default function HrAgentWork() {
  return (
    <div className="py-20 max-mobile:py-12">
      <div className="container-lg2">
        <div className="pb-[110px] max-mobile:pb-16">
          <h2 className="heading3 text-primary text-center ">
            How Our <span className="text-gradient"> HR Agent Works </span>
          </h2>
        </div>
        <div className="grid grid-cols-4 max-mobile:gap-10 gap-6 max-tab:grid-cols-2 max-tab:gap-5 max-mobile:grid-cols-1">
          {workSteps.map((step) => (
            <div
              key={step.id}
              className="border-[#FF5F011A] border border-solid relative p-6 rounded-xl"
            >
              <img src={step.icon} alt="UnderstandIcon" />
              <h3 className="mt-10 mb-2.5 max-mobile:mt-6 text-xl font-medium text-primary">
                {step.title}
              </h3>
              <p className="text-base text-[#6D727E] max-mobile:text-sm leading-6">
                {step.description}
              </p>
              <div className="absolute top-[-50px] max-mobile:top-[-24px] bg-white px-1 right-5">
                <h4 className="text-[100px] max-tab:text-[60px] max-tab:leading-[60px] max-mobile:text-[50px] max-mobile:leading-[50px] text-gradient font-extrabold leading-[100px]">
                  {String(step.id).padStart(2, "0")}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
