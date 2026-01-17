import React from "react";
import { motion } from "framer-motion";

import CallingIcon from "/assets/icons/Calling.svg";
import TriggersIcon from "/assets/icons/Triggers.svg";
import HumanIcon from "/assets/icons/Human.svg";
import WorkflowIcon from "/assets/icons/Workflow.svg";
import NaturalIcon from "/assets/icons/Natural.svg";
import MultilingualIcon from "/assets/icons/Multilingual.svg";

/* -------------------- STATIC DATA -------------------- */
const engagementCards = [
  {
    id: 1,
    icon: CallingIcon,
    title: "Built-In CRM & Data Management",
    description:
      "Manage customer interactions, history, and analytics in one place. Our AI voice agent services for businesses sync effortlessly with Salesforce, HubSpot, and top CRMs for unified data.",
  },
  {
    id: 2,
    icon: TriggersIcon,
    title: "Custom API Triggers & Webhooks",
    description:
      "Connect the best AI voice agents to any system using APIs and webhooks. Automate workflows, update databases instantly, and run multi-step processes across your tech stack.",
  },
  {
    id: 3,
    icon: HumanIcon,
    title: "Human-in-the-Loop Escalation",
    description:
      "Route complex conversations to human agents with full context. Our best AI voice agent solutions for business phone systems feature automatic detection to ensure seamless handoff when AI reaches its limits.",
  },
  {
    id: 4,
    icon: WorkflowIcon,
    title: "Workflow Integration & Automation",
    description:
      "Use visual builders to automate multi-step workflows with conditional logic and adaptive responses tailored to customer needs through our advanced AI voice agent platform.",
  },
  {
    id: 5,
    icon: NaturalIcon,
    title: "Natural Conversations & Context Awareness",
    description:
      "Deliver natural multi-turn conversations with AI voice agents for customer service that remember past interactions, understand context, and manage interruptions smoothly.",
  },
  {
    id: 6,
    icon: MultilingualIcon,
    title: "Multilingual Support Across 50+ Languages",
    description:
      "Serve global customers in their native language with auto-detection and real-time translation, no multilingual staff or heavy localization needed, with our AI voice agent services for businesses.",
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
  },
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

export default function NextgenEngagement() {
  return (
    <div className="py-20 bg-[#E9F1FF] max-mobile:py-16">
      <div className="container-lg2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="heading2 text-primary text-center mb-2 max-w-[983px] mx-auto"
        >
          <span className="text-gradient">Next-gen engagement </span>Platform to
          Power Your AI Agents
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-[60px]"
        >
          Build, deploy, and scale the best AI voice agent solutions for
          business phone systems with a unified platform that integrates with
          your business systems and handles unlimited secure, compliant
          conversations.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-5 max-tab:grid-cols-2 max-mobile:gap-4 max-mobile:grid-cols-1"
        >
          {engagementCards.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-xl border-t-4 max-mobile:p-4 border-t-[#BFD6FF] border border-[rgba(18,72,181,0.30)] bg-white p-[30px]"
            >
              <div className="grid grid-cols-[60px_1fr] gap-5 items-center pb-4 max-mobile:grid-cols-1 max-mobile:gap-3">
                <img src={item.icon} alt={item.title} className="block" />
                <h3 className="text-2xl max-mobile:text-xl font-semibold text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-lg max-mobile:text-base text-gray-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
