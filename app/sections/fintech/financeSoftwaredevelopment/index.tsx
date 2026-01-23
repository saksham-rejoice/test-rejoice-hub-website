import React from "react";
import { motion } from "framer-motion";
import { 
  Landmark, 
  LineChart, 
  Wallet, 
  ShieldCheck, 
  FileCheck2 
} from "lucide-react";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

/* -------------------- STATIC DATA -------------------- */
const benefitsData = [
  {
    id: 1,
    icon: Landmark,
    title: "Core Banking Software",
    description:
      "Build modern banking systems with real-time transactions, mobile apps, and 99.9% uptime guarantee.",
  },
  {
    id: 2,
    icon: LineChart,
    title: "Investment & Wealth Management",
    description:
      "Smart portfolio management with AI-driven analytics, automated trading, and real-time market insights.",
  },
  {
    id: 3,
    icon: Wallet,
    title: "Payment Solutions",
    description:
      "High-performance payment solutions ensure secure, fast, and compliant digital financial transactions.",
  },
  {
    id: 4,
    icon: ShieldCheck,
    title: "Insurance Technology",
    description:
      "Automated claims processing, AI underwriting, and fraud detection systems for modern insurance companies.",
  },
  {
    id: 5,
    icon: FileCheck2,
    title: "Compliance Automation",
    description:
      "Automated KYC/AML verification, transaction monitoring, and regulatory reporting for complete compliance assurance.",
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

export default function FinanceSoftwaredevelopment() {
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
          <span className="text-gradient">Benefits of </span> Choosing RejoiceHub for FinTech Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-20"
        >
          Our fintech software development services combine advanced technologies, regulatory compliance, and business-driven innovation to deliver high-performance financial platforms that grow with your business.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-[50px] gap-y-10"
        >
          {benefitsData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="w-[calc(33.33%-50px)] max-tab:w-[calc(50%-30px)] max-mobile:w-full"
            >
              <div className="grid grid-cols-[80px_1fr] max-mobile:grid-cols-1 items-center gap-5">
                <div className="w-20 h-20 max-mobile:w-16 max-mobile:h-16 rounded-full bg-gradient-to-br from-[#FF5E01] to-[#FF9404] flex items-center justify-center">
                  <item.icon className="w-10 h-10 max-mobile:w-8 max-mobile:h-8 text-white stroke-[1.5]" />
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
