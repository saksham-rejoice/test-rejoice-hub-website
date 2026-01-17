import React from "react";
import HiringIcon from "/assets/icons/Hiring.svg";
import EmployeeQueryIcon from "/assets/icons/employeequery.svg";
import AIpowerIcon from "/assets/icons/aipower.svg";
import WorkFlowIcon from "/assets/icons/workflowautomation.svg";

const features = [
  {
    title: "Smart Hiring Automation",
    icon: HiringIcon,
    description:
      "Automatically screen resumes, schedule interviews, and shortlist candidates based on skill fit.",
  },
  {
    title: "AI-Powered Onboarding",
    icon: AIpowerIcon,
    description:
      "Your HR agent handles paperwork, training reminders, welcome messages, and more.",
  },
  {
    title: "Employee Query Assistant",
    icon: EmployeeQueryIcon,
    description:
      "Instant replies to thousands of HR FAQs: leaves, salary, policies, benefits, attendance, and more.",
  },
  {
    title: "Workflow Automation",
    icon: WorkFlowIcon,
    description:
      "Automate approvals, reminders, compliance checks, and documentation processes.",
  },
];

export default function OurhrAgentSolutions() {
  return (
    <div className="bg-blue-900 py-20 max-mobile:py-12">
      <div className="container-lg2">
        <div className="pb-[60px]">
          <span className="text-base block text-center pb-2 font-medium text-blue-100 max-mobile:pb-2 max-mobile:text-sm">
            Key Features
          </span>
          <h2 className="heading3 text-center mb-3 text-primary">
            Our HR Agent <span className="text-[#1248B5]">Solution</span>
          </h2>
          <p className="text-lg text-center max-mobile:text-base max-w-[960px] mx-auto text-grey-600">
            Our HR agent solution offers advanced AI features that automate
            hiring, onboarding, employee support, and HR workflows, helping
            teams work faster and more efficiently.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2 hover:scale-105 transition-transform duration-300"
            >
              <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-tab:p-4 max-mobile:p-3 h-full">
                <div>
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="block max-w-[60px] max-mobile:max-w-[50px]"
                  />
                  <h3 className="mt-4 mb-2.5 text-xl font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="text-base font-light text-light-text">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
