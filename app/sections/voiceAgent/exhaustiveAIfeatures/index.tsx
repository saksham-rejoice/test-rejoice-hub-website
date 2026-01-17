import React from "react";
import { motion } from "framer-motion";

import ExhaustiveImage from "/assets/images/Exhaustive.png";

/* -------------------- STATIC DATA -------------------- */
const featuresData = [
  {
    id: "01",
    title: "Brand-Aligned Empathy",
    description:
      "Create emotionally intelligent best AI voice agents that match your brand personality, read emotional cues, respond empathetically, and build stronger customer relationships.",
  },
  {
    id: "02",
    title: "Human-Like Voices",
    description:
      "Use ultra-realistic AI voice agents for customer service with natural tone and emotion, delivering TTS voices that feel human for smooth conversations.",
  },
  {
    id: "03",
    title: "AI-Powered Text-to-Speech",
    description:
      "Adopt neural TTS through our AI voice agent platform that adjusts tone, speed, and emotion while supporting multiple languages and accents for consistent global service.",
  },
  {
    id: "04",
    title: "Advanced Speech Recognition",
    description:
      "Achieve 95%+ accurate speech recognition with the best AI voice agent solutions for business phone systems that understand accents, noise, and technical terms, ensuring every customer message is captured perfectly.",
  },
];

/* -------------------- ANIMATION VARIANTS -------------------- */
const imageVariants = {
  hidden: { opacity: 0, x: -40, scale: 0.96 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 18,
    },
  },
};

export default function ExhaustiveAIfeatures() {
  return (
    <div className="py-20 max-mobile:py-16">
      <div className="container-lg2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading2 text-primary text-center mb-2 max-w-[983px] mx-auto"
        >
          <span className="text-gradient">Exhaustive AI features </span>for
          Natural Voice Interactions
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-[60px]"
        >
          Context-aware Agents that reflect your brand, understand your
          customers, and engage customers with seamless, human-like
          conversations.
        </motion.p>

        {/* Content */}
        <div className="grid grid-cols-[1fr_545px] gap-[60px] max-tab:grid-cols-1">
          {/* Left Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src={ExhaustiveImage}
              alt="Exhaustive AI Features"
              className="block w-full"
            />
          </motion.div>

          {/* Right List */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            {featuresData.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="grid grid-cols-[53px_1fr] max-mobile:grid-cols-[45px_1fr] gap-3"
              >
                <div className="rounded-full w-[53px] h-[53px] text-white text-xl max-mobile:w-[45px] max-mobile:h-[45px] font-semibold flex items-center justify-center bg-[linear-gradient(180deg,#FF5E01_0%,#FF9404_100%)]">
                  {item.id}
                </div>

                <div>
                  <h3 className="text-xl max-mobile:mt-1 max-mobile:text-lg font-semibold text-primary mb-2 mt-2.5">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium text-gray-600">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
