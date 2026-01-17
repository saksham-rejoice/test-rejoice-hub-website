import React from "react";
import { motion } from "framer-motion";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import PoweredIcon from "/assets/icons/Powered.svg";

const cardsData = [
  {
    id: 1,
    title: "Custom FinTech Software",
    description:
      "Recommend personalized courses using AI/ML insights to strengthen individual learning paths.",
  },
  {
    id: 2,
    title: "Secure Transaction Systems",
    description:
      "Enable peer-to-peer engagement, updates, and knowledge sharing to build a collaborative learning culture.",
  },
  {
    id: 3,
    title: "Scalable System Architecture",
    description:
      "Support self-paced learning, live virtual sessions, microlearning, and blended training anytime, anywhere.",
  },
  {
    id: 4,
    title: "FinTech Data Management",
    description:
      "Create, organize, assign, and monitor courses effortlessly with centralized controls.",
  },
  {
    id: 5,
    title: "User and Access Control",
    description:
      "Configure user access, roles, permissions, and team structures to scale training across the organization.",
  },
  {
    id: 6,
    title: "Risk and Compliance Management",
    description:
      "Improve engagement and completion rates using badges, points, leaderboards, and achievement tracking.",
  },
  {
    id: 7,
    title: "Multi-Currency and Localization",
    description:
      "Deliver localized content to global teams while maintaining consistent learning outcomes.",
  },
  {
    id: 8,
    title: "API and Third Party Integrations",
    description:
      "Simplify attendance management for classrooms, workshops, and live sessions with instant QR scanning.",
  },
  {
    id: 9,
    title: "Reporting and Analytics",
    description:
      "Empower learners to capture reflections, take notes while learning, and track personal growth.",
  },
];

// Container animation (stagger children)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MobileLearningManagement() {
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
        {/* Title */}
        <div className="pb-[60px]">
          <h2 className="heading2 text-primary text-center">
            Explore the Complete{" "}
            <span className="text-gradient">Mobile learning management</span>{" "}
            Software
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {cardsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0px 12px 30px rgba(255,148,4,0.25)",
              }}
              className="border-[1.5px] border-[#FF9404] bg-white items-center rounded-xl p-4 grid grid-cols-[60px_1fr] gap-5  cursor-pointer transition-shadow"
            >
              <img src={PoweredIcon} alt="Powered Icon" className="block" />
              <div>
                <span className="text-xl block pb-2 max-mobile:text-lg font-semibold text-primary">
                  {item.title}
                </span>
                {/* <p className="text-base  text-gray-600">{item.description}</p> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
