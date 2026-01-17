import React from "react";
import { motion } from "framer-motion";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import QualificationImage from "/assets/images/qualification.png";
import AlertsImage from "/assets/images/alerts.png";
import ComplaintImage from "/assets/images/Complaint.png";

const cards = [
  {
    id: 1,
    title: "Lead Qualification Agent",
    desc: "Intelligent AI voice agents for customer service automatically qualify and prioritize leads by asking key questions, gathering vital details, and routing top prospects to sales for up to 3x faster processing and higher conversions.",
    image: QualificationImage,
  },
  {
    id: 2,
    title: "Voice-Min's Agent",
    desc: "Handle complex customer inquiries with our AI voice agent platform that understands context, intent, and emotion, delivering accurate, consistent support that boosts satisfaction and loyalty.",
    image: AlertsImage,
  },
  {
    id: 3,
    title: "Complaint Resolution Agent",
    desc: "Empower complaint management with empathetic AI voice agents for customer service that calm issues, gather insights, provide instant solutions, and cut resolution time by 70% without compromising satisfaction.",
    image: ComplaintImage,
  },
];

// Container animation
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

// Image floating animation
const imageVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function CustomerInteraction() {
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
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="heading2 text-primary text-center mb-4"
        >
          <span className="text-gradient">AI voice agents</span> for Every
          Customer Interaction
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-[60px]"
        >
          Our best AI voice agents automate every touchpoint, from first
          interaction to issue resolution, providing consistent, high-quality
          support across your entire ecosystem with our comprehensive AI voice
          agent services for businesses.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-3 max-tab:grid-cols-2 max-tab:gap-4 max-mobile:grid-cols-1 gap-6"
        >
          {cards.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.08)",
              }}
              className="bg-white rounded-xl max-mobile:p-4 p-[30px] transition-shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-base max-mobile:text-sm text-gray-600 mb-5">
                {item.desc}
              </p>

              <motion.div
                variants={imageVariants}
                animate="animate"
                className="flex justify-center"
              >
                <img src={item.image} alt={item.title} className="block" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
