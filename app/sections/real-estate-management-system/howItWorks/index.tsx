import React from "react";
import { motion } from "framer-motion";
import Icon01 from "/assets/icons/01-outline.svg";
import Icon02 from "/assets/icons/02-outline.svg";
import Icon03 from "/assets/icons/03-outline.svg";
import UnderstandIcon from "/assets/icons/Content.svg";

const steps = [
  {
    id: 1,
    icon: UnderstandIcon,
    numberIcon: Icon01,
    title: "Sign Up & Add Properties",
    description:
      "Get started in minutes with an intuitive dashboard built for real estate professionals.",
  },
  {
    id: 2,
    icon: UnderstandIcon,
    numberIcon: Icon02,
    title: "Manage Tenants & Leases",
    description:
      "Track occupancy, rent collection, and renewals effortlessly with automation.",
  },
  {
    id: 3,
    icon: UnderstandIcon,
    numberIcon: Icon03,
    title: "Analyze & Optimize",
    description:
      "Use AI insights to improve pricing, reduce vacancies, and increase profitability.",
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

export default function HowItWorks() {
  return (
    <section className="py-20 max-mobile:py-12 bg-[#E9F1FF]">
      <div className="container-lg2">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading2 text-primary text-center mb-2 max-w-[983px] mx-auto"
        >
          <span className="text-gradient">How It Works</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20"
        >
          Get started in 3 simple steps
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {steps.map((item) => (
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
    </section>
  );
}
