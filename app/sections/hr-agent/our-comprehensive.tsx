import React from "react";
import ComprehensiveImage from "/assets/images/Comprehensive.png";
import PipelineIcon from "/assets/images/Pipeline.svg";
import AutomatedNotificationIcon from "/assets/icons/AutomatedNotification.svg";
import DocumentVarificationIcon from "/assets/icons/DocumentVarification.svg";
import HROperationDashboardIcon from "/assets/icons/HROperationDashboard.svg";
import AutomatedTestEvalutionIcon from "/assets/icons/AutomatedTestEvalution.svg";
import EmployeeLifecycleManagementIcon from "/assets/icons/EmployeeLifecycleManagement.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import BannerImage from "/assets/images/HRAgentMain.png";

const features = [
  {
    title: "End-to-end Recruitment Pipeline",
    icon: PipelineIcon,
    items: [
      "Move candidates across stages in a Kanban workflow",
      "Track candidate status and progress in real-time",
      "Visual pipeline management for better hiring oversight",
      "Customizable workflow stages to match your hiring process",
    ],
  },
  {
    title: "Automated Test Evaluation",
    icon: AutomatedTestEvalutionIcon,
    items: [
      "LLM-based scoring system for objective candidate assessment",
      "Automated evaluation of both theory and practical tests",
      "Standardized scoring for fair candidate comparison",
      "Detailed performance analytics and insights",
    ],
  },
  {
    title: "Automated Notifications",
    icon: AutomatedNotificationIcon,
    items: [
      "Email & Slack alerts for candidate stage updates",
      "Automated reminders for pending actions",
      "Real-time status updates to reduce candidate drop-offs",
      "Customizable notification templates",
    ],
  },
  {
    title: "Document Verification & Onboarding",
    icon: DocumentVarificationIcon,
    items: [
      "Secure document upload and verification system",
      "Automated offer letter generation and e-signatures",
      "Structured onboarding workflow with task tracking",
      "Centralized document repository for easy access",
    ],
  },
  {
    title: "HR Operations Dashboard",
    icon: HROperationDashboardIcon,
    items: [
      "Unified view of all HR functions in one place",
      "Manage leave, attendance, and salary structures",
      "Department and job role management",
      "Comprehensive activity logs and audit trails",
    ],
  },
  {
    title: "Employee Lifecycle Management",
    icon: EmployeeLifecycleManagementIcon,
    items: [
      "Seamless transition from candidate to employee",
      "Centralized employee profiles and history",
      "Document management for all employee records",
      "Track employee status and career progression",
    ],
  },
];

export default function OurComprehensive() {
  return (
    <div className="py-[100px] max-mobile:pt-12 max-mobile:pb-15">
      <div className="container-lg2">
        <div className="pb-[60px] max-mobile:pb-10">
          <h2 className="heading3 text-primary mb-4 max-w-[734px]">
            Our Comprehensive Solutions Tailored for
            <span className="text-gradient"> Your HR Needs </span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[929px] max-mobile:text-base">
            Our HR agent solution delivers smart, automated tools tailored to
            streamline hiring, onboarding, and daily HR operations with speed
            and accuracy.
          </p>
        </div>
        <div className="flex gap-10 max-tab:flex-wrap">
          <div className="w-[calc(100%-650px)] max-tab:w-full">
            <div>
              <img
                src={BannerImage}
                alt="ComprehensiveImage"
                className="block w-full rounded-2xl"
              />
            </div>
          </div>
          <div className="w-[650px] relative max-tab:w-full">
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              slidesPerView={1}
              loop={true}
            >
              {features.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div>
                    <div className="flex items-center max-mobile:block gap-5 pb-8 max-mobile:pb-5">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="block"
                      />
                      <h3 className="text-3xl max-mobile:text-xl max-mobile:mt-2 text-primary max-w-[400px] font-semibold max-tab:w-full">
                        {feature.title}
                      </h3>
                    </div>
                    <ul className="list-inside pl-3 ">
                      {feature.items.map((item, i) => (
                        <li
                          key={i}
                          className="list-disc text-lg max-mobile:text-sm max-mobile:pb-2 text-primary pb-4"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex items-center gap-4">
              <div className="custom-swiper-button-prev cursor-pointer bg-[#0B2B6B] transition-all ease-in-out duration-300 hover:text-white w-12 h-12 z-[99] border border-[#EEE] left-[-55px] flex items-center justify-center rounded-full">
                <ChevronLeft className="w-6 h-6 text-white" />
              </div>
              <div className="custom-swiper-button-next cursor-pointer bg-[#0B2B6B] transition-all ease-in-out duration-300 hover:text-white w-12 h-12 z-[99] border border-[#EEE] right-[-55px] flex items-center justify-center rounded-full">
                <ChevronRight className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
