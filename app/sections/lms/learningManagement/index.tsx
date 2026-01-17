import React from "react";
import { motion } from "framer-motion";

import MinimalIcon from "/assets/icons/Minimal.svg";
import EngagementIcon from "/assets/icons/Engagement-lg.svg";
import HrmsIcon from "/assets/icons/hrms.svg";
import ContentIcon from "/assets/icons/Content.svg";
import Icon01 from "/assets/icons/01-outline.svg";
import Icon02 from "/assets/icons/02-outline.svg";
import Icon03 from "/assets/icons/03-outline.svg";
import Icon04 from "/assets/icons/04-outline.svg";

/* -------------------- STATIC DATA -------------------- */
const cardsData = [
  {
    id: 1,
    icon: MinimalIcon,
    numberIcon: Icon01,
    title: "Track learners easily",
    description:
      "Comprehensive dashboards simplify monitoring across corporate teams or academic environments, supporting both enterprise needs and learning management systems for education models.",
  },
  {
    id: 2,
    icon: EngagementIcon,
    numberIcon: Icon02,
    title: " Create engaging content",
    description:
      "Design impactful content without technical complexity, increasing engagement across corporate learning management systems and hybrid learning environments.",
  },
  {
    id: 3,
    icon: HrmsIcon,
    numberIcon: Icon03,
    title: "Manage compliance",
    description:
      "Maintain regulatory standards effortlessly is a key requirement for many learning management systems for corporate training environments.",
  },
  {
    id: 4,
    icon: ContentIcon,
    numberIcon: Icon04,
    title: "Generate learning insights",
    description:
      "AI-driven analytics transform your learning management system corporate into a strategic decision-making platform.",
  },
];

/* -------------------- ANIMATIONS -------------------- */
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
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

export default function LearningManagement() {
  return (
    <div className="py-20 bg-[#E9F1FF]">
      <div className="container-lg2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading2 text-primary text-center mb-2 max-w-[983px] mx-auto"
        >
          Beyond Learning <span className="text-gradient">Management</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20"
        >
          Move past traditional learning management system corporate limitations
          and empower your organization with advanced capabilities.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-4 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {cardsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white rounded-xl py-5 border border-solid border-[#ff5e014a] relative"
            >
              {/* Number Icon */}
              <div className="absolute top-5 right-5">
                <img
                  className="max-w-[70px] block"
                  src={item.numberIcon}
                  alt="Number Icon"
                />
              </div>

              {/* Main Icon */}
              <div className="pb-[30px]">
                <img src={item.icon} alt={item.title} className="block" />
              </div>

              {/* Content */}
              <div className="px-5">
                <h3 className="text-xl max-mobile:text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-base max-mobile:text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
