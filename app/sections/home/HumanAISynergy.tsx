import { motion } from "framer-motion";
import Mindicon from "~/assets/icons/mindicon";
import Outcomeicon from "~/assets/icons/outcomeicon";
import Shieldicon from "~/assets/icons/shieldicon";

const StarIcon = "/assets/icons/star.svg";
const IntelligenceIcon = "/assets/icons/intelligence.svg";
const UsersIcon = "/assets/icons/users.svg";
const ShieldIcon = "/assets/icons/shield.svg";

const HumanAISynergy = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const cards = [
    {
      title: "Adaptive Intelligence",
      desc: "Our agents learn from your team's style, culture, and decision patterns—AI that thinks like you.",
      bullets: [
        "Contextual understanding",
        "Cultural alignment",
        "Decision pattern learning",
        "Continuous adaptation",
      ],
      Icon: Mindicon,
    },
    {
      title: "Aligned Outcomes",
      desc: "Through constant feedback loops, our solutions evolve with your business, not as add-ons, but as integrated accelerators.",
      bullets: [
        "Feedback-driven evolution",
        "Business integration",
        "Performance optimization",
        "Goal alignment",
      ],
      Icon: Outcomeicon,
    },
    {
      title: "Ethical by Design",
      desc: "You retain control—governance, fairness, and accountability baked into every AI model we create.",
      bullets: [
        "Human oversight",
        "Transparent algorithms",
        "Bias prevention",
        "Compliance ready",
      ],
      Icon: Shieldicon,
    },
  ];

  return (
    <motion.div
      className="py-20 max-mobile:py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.12 }}
    >
      <div className="container-lg">
        <motion.div className="pb-[60px] max-mobile:pb-10" variants={fadeUp}>
          <span className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Human + AI Synergy
          </span>
          <h2 className="heading3 text-primary text-center mb-4">
            Where Human Intelligence
            <span className="block text-gradient">Meets AI Innovation</span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            At Rejoicehub, we believe the best AI is coachable—guided by human
            insight, trained for impact. We don't replace human capability, we
            elevate it.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 gap-6 max-tab:grid-cols-1 max-mobile:grid-cols-1 max-mobile:gap-5 max-lg:grid-cols-1">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="rounded-2xl max-mobile:rounded-lg max-mobile:p-3 border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              variants={fadeUp}
              transition={{
                delay: i * 0.08,
                type: "spring",
                stiffness: 120,
                damping: 22,
              }}
              whileHover={{ y: -4, scale: 1.01, rotateZ: 0.4 }}
              whileTap={{ scale: 0.997 }}
            >
              <div className="grid grid-cols-[210px_1fr] max-mobile:grid-cols-1 max-laptop:grid-cols-[180px_1fr]">
                <motion.div
                  className="p-6  max-mobile:flex-row max-mobile:justify-normal max-mobile:gap-2 max-mobile:items-center max-mobile:pb-2.5 max-mobile:p-2 border-[#FF5F011A] border-b flex flex-col justify-between"
                  variants={fadeUp}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                    {/* <img
                      src={card.icon}
                      alt="IntelligenceIcon"
                      className="block"
                    /> */}
                    {<card.Icon />}
                  <h3 className="text-2xl max-laptop:text-xl font-medium text-primary">
                    {card.title}
                  </h3>
                </motion.div>
                <motion.div
                  className="p-3 rounded-tr-2xl max-mobile:rounded-lg bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)]"
                  variants={fadeUp}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <div className="bg-white max-mobile:rounded-lg rounded-xl px-3 py-5">
                    {card.bullets.map((b, index) => (
                      <motion.div
                        key={b}
                        className="flex items-center gap-1.5 pb-7 last:pb-0"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.06 }}
                      >
                        <img
                          className="w-4 h-4"
                          src={StarIcon}
                          alt="StarIcon"
                        />
                        <p className="text-base font-medium text-primary">
                          {b}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
              <motion.div
                className="p-6 max-mobile:pt-2.5 max-mobile:p-0"
                variants={fadeUp}
                transition={{ delay: 0.15 + i * 0.05 }}
              >
                <p className="text-lg max-laptop:text-base max-mobile:text-sm text-primary">
                  {card.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default HumanAISynergy;
