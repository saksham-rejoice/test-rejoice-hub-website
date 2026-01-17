import type { FC } from "react";
// import CompanyIcon from '~/sections/home/companyIcon';
import { InteractiveAgentBuilder } from "~/sections/home/InteractiveAgentBuilder";
import Partners from "~/sections/home/partners";
import WorkWithUs from "~/sections/home/workWithUs";
import FAQ from "~/sections/home/faq";
import ServicesGrid from "~/sections/home/ServicesGrid";
import LeadMagnetSection from "~/sections/home/LeadMagnetSection";
import HumanAISynergy from "~/sections/home/HumanAISynergy";
import AIExpertiseShowcase from "~/sections/home/AIExpertiseShowcase";
import TechnologyStack from "~/sections/home/TechnologyStack";
// import { ScrollButton } from '~/sections/home/ScrollButton';
import CookieConsentBanner from "~/sections/home/CookieCOnsentBanner";
import OurWorkProcess from "~/sections/home/OurWorkProcess";
import Testimonials from "~/sections/home/Testimonials";
// import Demo from '~/sections/demo';
import { FaStar, FaCogs, FaUsers, FaCheckCircle } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { WEB_URL, CMS_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";
import WhyHumanAi from "~/sections/home/WhyHumanAi";
import ReadytoExperience from "~/sections/home/ReadytoExperience";
import UsApart from "~/sections/home/usApart";
import AcrossIndustries from "~/sections/home/acrossIndustries";
import ComprehensiveServiceOffering from "/assets/icons/ComprehensiveServiceOffering.svg";
import ProvenTrackRecord from "/assets/icons/ProvenTrackRecord.svg";
import TalentedandExperiencedTeam from "/assets/icons/TalentedandExperiencedTeam.svg";
import CommitmenttoQualityandSecurity from "/assets/icons/CommitmenttoQualityandSecurity.svg";
import CustomerCentricApproach from "/assets/icons/CustomerCentricApproach.svg";
import ExpertiseinTechnologies from "/assets/icons/ExpertiseinTechnologies.svg";

const TITLE = "Boost Business Growth with AI Agents & Automation | RejoiceHub";
const DESCRIPTION =
  "Transform your ideas into reality with RejoiceHub's AI solutions, web development, and mobile app expertise. Start your digital journey today!";
const OG_IMAGE = `${CMS_URL}/uploads/logo_28319cef93.png`;

export function meta() {
  return [
    { title: TITLE },
    { name: "description", content: DESCRIPTION },
    { name: "image", content: OG_IMAGE },

    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}`,
    },

    { property: "og:title", content: TITLE },
    { property: "og:description", content: DESCRIPTION },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:url", content: WEB_URL },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Rejoicehub" },
  ];
}

const features = [
  {
    icon: ExpertiseinTechnologies,
    title: "Expertise in Technologies",
    description:
      "We stay ahead with the latest in AI/ML, IoT, and DevOps, ensuring your projects benefit from innovation and industry best practices.",
  },
  {
    icon: ComprehensiveServiceOffering,
    title: "Comprehensive Service Offering",
    description:
      "From web and mobile apps to UI/UX, AI/ML, IoT, and digital marketing, we deliver end-to-end solutions under one roof.",
  },
  {
    icon: CustomerCentricApproach,
    title: "Customer-Centric Approach",
    description:
      "We focus on your unique goals and challenges, providing tailored solutions that build long-term partnerships and success.",
  },
  {
    icon: ProvenTrackRecord,
    title: "Proven Track Record",
    description:
      "Since 2019, we’ve delivered successful projects across industries, tackling complex problems with high-quality results.",
  },
  {
    icon: TalentedandExperiencedTeam,
    title: "Talented and Experienced Team",
    description:
      "Our skilled developers thrive in a culture of learning and collaboration, tackling demanding projects with creativity.",
  },
  {
    icon: CommitmenttoQualityandSecurity,
    title: "Commitment to Quality and Security",
    description:
      "We follow strict quality checks and industry-standard security practices to protect data and deliver reliable solutions.",
  },
];

export const WhyChoose = () => {
  return (
    <section className="px-10 pb-20 max-mobile:py-12 max-mobile:px-3">
      <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12">
        <div className="container-lg">
          <div className="text-center mb-[60px]">
            <span className="block text-base text-white text-center font-medium pb-1">
              Our Process
            </span>
            <h2 className="heading2 text-center text-white mb-3">
              Why Choose Rejoicehub?
            </h2>
            <p className="text-lg max-mobile:text-base font-normal text-white text-center ">
              Our clients don't just see results—they feel the difference.
              Here's what makes our partnership approach unique.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-mobile:gap-4 max-mobile:grid-cols-1">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-primary-100 max-mobile:rounded-lg max-mobile:p-3 rounded-[20px] border border-solid border-primary-200 p-[30px]"
              >
                <img
                  src={feature.icon}
                  alt="ComprehensiveIcon"
                  className="block max-mobile:max-w-16"
                />
                {/* <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] flex items-center justify-center  ">
                    <span className="text-accent-400 text-2xl">
                      {feature.icon}
                    </span>
                  </div>
                </div> */}

                <div className="mt-5 max-mobile:mt-4">
                  <h3 className="text-2xl max-mobile:text-xl font-medium text-white mb-2.5">
                    {feature.title}
                  </h3>
                  <div className="relative">
                    <p className="text-lg text-white-80 font-light max-mobile:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-50/10 to-white/10 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HomePage: FC = () => {
  return (
    <div className="min-h-screen">
      <InteractiveAgentBuilder />
      <HumanAISynergy />
      <WhyHumanAi />
      <ReadytoExperience />
      <AIExpertiseShowcase />
      {/* <Partners /> */}
      <UsApart />
      <AcrossIndustries />
      <TechnologyStack />
      <ServicesGrid />
      <LeadMagnetSection />
      <OurWorkProcess />
      <WhyChoose />
      <Testimonials />
      <WorkWithUs />
      <section className="py-20 max-mobile:py-12 light-blue-line w-full bg-no-repeat bg-cover">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Frequently Asked Questions"
            title="Get Your Questions Answered"
            subtitle="Everything you need to know about our AI implementation process and services."
          />
          <FAQ />
        </div>
      </section>
      <CookieConsentBanner />
    </div>
  );
};

export default HomePage;
