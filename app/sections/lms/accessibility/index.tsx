import React from "react";
import { motion } from "framer-motion";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import ProposalsIcon from "/assets/icons/Proposals.svg";
import LearningIcon from "/assets/icons/Learning.svg";
import EngagementIcon from "/assets/icons/Engagement.svg";
import IntegrationsIcon from "/assets/icons/Integrations.svg";
import PlatformIcon from "/assets/icons/Platform.svg";
import BrandingIcon from "/assets/icons/Branding.svg";

/* -------------------- STATIC DATA -------------------- */
const cardsData = [
  {
    id: 1,
    title: "Limited Course Formats",
    description:
      "Traditional corporate learning management systems often provide basic course structures. Our platform supports diverse formats, including video, interactive modules, microlearning, assessments, and blended learning, enabling flexible experiences applicable to workplace learning and learning management systems for education.",
    icon: ProposalsIcon,
  },
  {
    id: 2,
    title: " Difficult Learning Curve",
    description:
      "Complex interfaces frustrate learners and admins. Our intuitive platform reduces onboarding time and ensures smooth adoption for corporate learning management systems implementations.",
    icon: LearningIcon,
  },
  {
    id: 3,
    title: "Lack of Learner Engagement",
    description:
      "Passive learning can’t meet modern corporate needs. Our platform enhances engagement through gamification, social learning, personalized paths, and interactive modules that keep learners active, whether used in enterprise or learning management systems for education contexts.",
    icon: EngagementIcon,
  },
  {
    id: 4,
    title: "Skills Mismatches",
    description:
      "Generic training doesn’t resolve skills gaps. Our system aligns learning paths with roles, competencies, and core objectives, ensuring learning management systems for corporate training deliver measurable performance gains. ",
    icon: IntegrationsIcon,
  },
  {
    id: 5,
    title: " Lack of Technical Integration",
    description:
      "Disconnected data hurts decision-making. Our LMS integrates with HRIS, CRM, communication tools, and other enterprise apps, supporting seamless workflows that modern corporate learning management systems require.",
    icon: PlatformIcon,
  },
  {
    id: 6,
    title: "Content Tracking",
    description:
      "Track ROI and progress accurately. Our advanced analytics help measure outcomes, making your learning management system corporate strategy data-driven.",
    icon: BrandingIcon,
  },
];

/* -------------------- ANIMATION VARIANTS -------------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

export default function Accessibility() {
  return (
    <section className="relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12 overflow-hidden">
      {/* Background Lines */}
      <div className="absolute top-0 w-full z-[-1]">
        <img src={TopLineImage} alt="Top Line" className="w-full" />
      </div>
      <div className="absolute bottom-0 w-full z-[-1]">
        <img src={BottomLineImage} alt="Bottom Line" className="w-full" />
      </div>

      <div className="container-lg2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading2 text-primary text-center mb-4 max-w-[983px] mx-auto"
        >
          Overcoming Accessibility and{" "}
          <span className="text-gradient">Engagement Challenges</span> in
          Corporate Learning
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20"
        >
          Modern organizations using learning management systems for corporate
          training often face common barriers that limit learning outcomes.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-x-[30px] gap-y-16 max-tab:grid-cols-2 max-mobile:grid-cols-1 max-tab:gap-y-12"
        >
          {cardsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-[20px] border-[1.5px] border-[#FF9404] bg-white px-[30px]"
            >
              {/* Card Header */}
              <div className="rounded-[53px] mt-[-30px] flex items-center gap-2.5 border-[1.5px] p-1.5 border-[#FF9404] bg-white w-full">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="max-w-[45px] max-tab:max-w-[35px]"
                />
                <p className="text-lg max-tab:text-base font-medium text-black">
                  {item.title}
                </p>
              </div>

              {/* Content */}
              <div className="pt-5 pb-5">
                <p className="text-base font-normal text-[#6D727E]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
