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
    title: "Limited Learning Formats",
    description:
      "Traditional systems provide basic course structures. RejoiceHub supports diverse formats — videos, interactive modules, microlearning, assessments, and blended learning — for a richer experience that meets modern needs.",
    icon: ProposalsIcon,
  },
  {
    id: 2,
    title: "Difficult Learning Curve",
    description:
      "Clunky interfaces slow adoption. Our user-friendly platform shortens onboarding time for learners and administrators alike, ensuring smooth implementation and continuous use.",
    icon: LearningIcon,
  },
  {
    id: 3,
    title: "Lack of Learner Engagement",
    description:
      "Passive content no longer works. With gamification, social learning, personalized paths, and interactive modules, RejoiceHub keeps learners motivated and active.",
    icon: EngagementIcon,
  },
  {
    id: 4,
    title: "Skills Mismatches",
    description:
      "Generic training doesn't deliver targeted growth. RejoiceHub aligns learning paths with roles, competencies, and objectives, resulting in meaningful performance improvements.",
    icon: IntegrationsIcon,
  },
  {
    id: 5,
    title: "Lack of Technical Integration",
    description:
      "Disconnected systems impede workflows. Our platform integrates seamlessly with HRIS, CRM, communication tools, and other enterprise apps to unify your learning ecosystem.",
    icon: PlatformIcon,
  },
  {
    id: 6,
    title: "Content Tracking & Analytics",
    description:
      "Track ROI and progress with ease. Advanced analytics and dashboards help you measure outcomes and optimize learning strategies based on data.",
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
          Overcoming <span className="text-gradient">Learning Challenges</span> in Modern Organizations
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20"
        >
          Today’s corporate and academic training systems struggle with rigid formats, low engagement, and disconnected data. RejoiceHub LXP is designed to solve these hurdles, empowering you with flexible learning tools and insights that drive real results.
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
