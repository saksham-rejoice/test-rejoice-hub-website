import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, CheckCircle2 } from "lucide-react"; // Lucide icons

export default function WhyHumanAi() {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const inner = card.querySelector<HTMLElement>("[data-tilt-inner]");
    if (!inner) return;
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateX = (py - 0.5) * -14;
    const rotateY = (px - 0.5) * 14;
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const inner =
      e.currentTarget.querySelector<HTMLElement>("[data-tilt-inner]");
    if (!inner) return;
    inner.style.transform = "rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  const cards = [
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: "Beyond Experts: Partners in Your Growth",
      desc: "We don't just deliver solutions—we become an extension of your team, invested in your long-term success.",
    },
    {
      icon: <ArrowRight className="w-8 h-8 text-white" />,
      title: "Innovation at the Speed of Market Changes",
      desc: "Our AI agents adapt and evolve with your business, ensuring you stay ahead of market dynamics.",
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-white" />,
      title: "Outcomes by Design, Not Just Deployment",
      desc: "Every solution is crafted with measurable outcomes in mind, ensuring tangible business impact.",
    },
  ];

  return (
    <div className="bg-blue-900 py-20 max-mobile:py-12">
      <div className="container-lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="pb-[60px] max-mobile:pb-10"
        >
          <motion.h2
            className="heading2 text-primary text-center mb-4"
            variants={{
              hidden: { opacity: 0, y: 14 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            Why "Human + <span className="text-blue-100">AI" Wins</span>
          </motion.h2>
          <motion.p
            className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base"
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, delay: 0.05 },
              },
            }}
          >
            Our clients don't just see results—they feel the difference. Here's
            what makes our partnership approach unique.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1 max-mobile:gap-5"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
              variants={cardVariants}
              whileHover={{ y: -2 }}
              style={{ perspective: 1000 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-tab:p-4 max-mobile:p-3"
                data-tilt-inner
                style={{
                  transformStyle: "preserve-3d",
                  willChange: "transform",
                  transition:
                     
                    "transform 180ms cubic-bezier(0.22, 1, 0.36, 1)",
                  boxShadow:
                    "0 8px 24px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
                whileHover={{
                  boxShadow:"0 16px 40px rgba(0,0,0,0.26), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                <div className="w-[64px] h-[64px] flex items-center justify-center border border-solid border-primary-500 bg-light-blue rounded-xl">
                  {card.icon}
                </div>
                <h3 className="text-2xl max-tab:text-xl max-mobile:text-base text-white font-medium mt-5 mb-3">
                  {card.title}
                </h3>
                <p className="text-lg font-light text-light-text max-mobile:text-sm leading-6">
                  {card.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
