import React from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Package,
  Table,
  Monitor,
  Users,
  Target,
  BarChart3,
  Building2,
} from "lucide-react";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

/* -------------------- STATIC DATA -------------------- */
const featuresData = [
  {
    id: 1,
    icon: CreditCard,
    title: "Smart POS System",
    description:
      "A fast and reliable POS designed for seamless billing and payments. Manage dine-in, takeaway, and online orders while tracking transactions through an integrated restaurant cash management system.",
  },
  {
    id: 2,
    icon: Package,
    title: "Real-Time Inventory Management",
    description:
      "Our advanced restaurant inventory management system tracks ingredients in real time, sends low-stock alerts, and helps reduce food wastage and unnecessary costs.",
  },
  {
    id: 3,
    icon: Table,
    title: "Table & Reservation Management",
    description:
      "Optimize seating, manage waitlists, and accept online reservations effortlessly. Improve table turnover and enhance the overall dining experience.",
  },
  {
    id: 4,
    icon: Monitor,
    title: "Kitchen Display System",
    description:
      "Send orders directly from the restaurant order management system to the kitchen with priority tracking. Minimize errors and speed up preparation time.",
  },
  {
    id: 5,
    icon: Users,
    title: "Staff Management",
    description:
      "Schedule shifts, track working hours, and manage staff productivity efficiently even during peak service hours.",
  },
  {
    id: 6,
    icon: Target,
    title: "Customer Relationship Management",
    description:
      "Create loyalty programs, collect customer feedback, and gain insights into customer behavior to increase repeat visits.",
  },
  {
    id: 7,
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Access real-time reports on sales, popular menu items, peak hours, expenses, and profitability to make smarter business decisions.",
  },
  {
    id: 8,
    icon: Building2,
    title: "Multi-Location Support",
    description:
      "Manage multiple outlets from a single dashboard with centralized reporting, inventory tracking, and performance monitoring.",
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

export default function RestaurantFeatures() {
  return (
    <section className="relative bg-[#fff] py-20 max-mobile:py-12 overflow-hidden">
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
          <span className="text-gradient">Our Powerful Features </span>
          to Run Your Restaurant Effortlessly
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-y-10 max-tab:grid-cols-2 gap-x-7 max-tablet:grid-cols-1 max-mobile:grid-cols-1 mt-10"
        >
          {featuresData.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                className="rounded-2xl border border-[#E5E7EB] bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#FFF4EB] border border-[#FF9404] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-[#FF9404] stroke-[1.5]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
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
