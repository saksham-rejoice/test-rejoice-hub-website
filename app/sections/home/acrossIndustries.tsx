"use client";
import React from "react";
import { motion } from "framer-motion";
import BagIcon from "/assets/icons/bag.svg";
import ManufacturingIcon from "/assets/icons/ManufacturingIcon.svg";
import HomeIcon from "/assets/icons/HomeIcon.svg";
import EducationIcon from "/assets/icons/EducationIcon.svg";
import Healthcare from "/assets/icons/Healthcare.svg";
import FinanceIcon from "/assets/icons/FinanceIcon.svg";
import BoxLineImage from "/assets/images/box-line.png";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
// Animation Variants
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

// Card Data
const industries = [
  {
    percent: "40%",
    stat: "increase in conversion rates",
    title: "E-commerce",
    desc: "AI-powered product recommendations",
    icon: BagIcon,
  },
  {
    percent: "60%",
    stat: "faster diagnosis support",
    title: "Healthcare",
    desc: "Patient data analysis & insights",
    icon: Healthcare,
  },
  {
    percent: "90%",
    stat: "fraud detection accuracy",
    title: "Finance",
    desc: "Fraud detection & risk assessment",
    icon: FinanceIcon,
  },
  {
    percent: "30%",
    stat: "reduction in downtime",
    title: "Manufacturing",
    desc: "Predictive maintenance systems",
    icon: ManufacturingIcon,
  },
  {
    percent: "50%",
    stat: "improvement in student outcomes",
    title: "Education",
    desc: "Personalized learning paths",
    icon: EducationIcon,
  },
  {
    percent: "25%",
    stat: "faster deal closures",
    title: "Real Estate",
    desc: "Property valuation & market analysis",
    icon: HomeIcon,
  },
];

export default function AcrossIndustries() {
  return (
    <div className="bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
      <div className="absolute top-0 leading-0 w-full z-[-1]">
        <img className="block" src={TopLineImage} alt="TopLineImage" />
      </div>
      <div className="absolute bottom-0 leading-0 w-full z-[-1]">
        <img className="block" src={BottomLineImage} alt="BottomLineImage" />
      </div>
      <div className="container-lg">
        {/* Heading Section */}
        <motion.div
          className="pb-[60px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="heading3 text-primary text-center mb-4"
            variants={textVariants}
            custom={0}
          >
            Proven Across <span className="text-gradient">Industries</span>
          </motion.h2>
          <motion.p
            className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base"
            variants={textVariants}
            custom={1}
          >
            Our AI solutions have delivered measurable results across diverse
            industries and use cases.
          </motion.p>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-6 max-tablet:grid-cols-1 max-mobile:grid-cols-1">
          {industries.map((item, i) => (
            <motion.div
              key={i}
              className="relative p-6 bg-white rounded-2xl"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              whileHover={{
                y: -12,
                boxShadow: "0px 12px 28px rgba(255, 93, 1, 0.25)",
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <div className="block absolute top-0 left-0">
                <img className="block" src={BoxLineImage} alt="BoxLineImage" />
              </div>
              <span className="block text-gradient text-right text-[32px] font-medium">
                {item.percent}
              </span>
              <p className="text-lg font-normal text-primary text-right">
                {item.stat}
              </p>
              <div className="pt-10">
                <div className="grid grid-cols-[44px_1fr] gap-4 items-center">
                  <img className="block" src={item.icon} alt={item.title} />
                  <div>
                    <p className="text-xl leading-normal font-medium text-primary">
                      {item.title}
                    </p>
                    <p className="text-lg text-grey-600">{item.desc}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
