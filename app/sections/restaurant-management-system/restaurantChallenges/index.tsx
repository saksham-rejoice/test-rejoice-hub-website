import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Package,
  Table,
  BarChart3,
  Users,
  DollarSign,
} from "lucide-react";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

/* -------------------- STATIC DATA -------------------- */
const challengesData = [
  {
    id: 1,
    icon: ClipboardList,
    title: "Manual Order Taking Errors",
    description:
      "Manual order taking is causing errors in your restaurant order management system",
  },
  {
    id: 2,
    icon: Package,
    title: "Poor Inventory Visibility",
    description:
      "Poor inventory visibility leading to waste and stockouts",
  },
  {
    id: 3,
    icon: Table,
    title: "Inefficient Table Management",
    description:
      "Inefficient table management increasing customer wait times",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Scattered Sales Data",
    description:
      "Scattered sales and expense data affecting decision-making",
  },
  {
    id: 5,
    icon: Users,
    title: "Staff Coordination Issues",
    description:
      "Staff coordination issues during peak hours",
  },
  {
    id: 6,
    icon: DollarSign,
    title: "No Real-Time Cash Flow Insights",
    description:
      "No real-time insights into cash flow, and a restaurant cash management system",
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

export default function RestaurantChallenges() {
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
          className="heading2 text-primary text-center mb-4"
        >
          Are These <span className="text-gradient">Restaurant Challenges</span>{" "}
          Slowing You Down?
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-[50px] gap-y-10 mt-20"
        >
          {challengesData.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="w-[calc(33.33%-50px)] max-tab:w-[calc(50%-30px)] max-mobile:w-full"
              >
                <div className="grid grid-cols-[80px_1fr] max-mobile:grid-cols-1 items-center gap-5">
                  <div className="max-mobile:max-w-[60px]">
                    <IconComponent className="w-16 h-16 max-mobile:w-12 max-mobile:h-12 text-[#FF9404] stroke-[1.5]" />
                  </div>
                  <div>
                    <h3 className="text-lg max-mobile:text-xl mb-2 font-medium text-black">
                      {item.title}
                    </h3>
                    <p className="text-base font-normal text-[#6D727E]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
