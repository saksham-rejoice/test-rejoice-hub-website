import React from "react";
import { motion } from "framer-motion";
import { 
  Brain,
  Layers,
  Users,
  BarChart3,
  Smartphone,
  Trophy,
  Workflow,
  Route,
  ShieldCheck,
  Code2,
  Lock,
  Network,
  Database,
  Globe,
  Sparkles,
  Zap,
  LineChart,
  TrendingUp,
  Target,
  GraduationCap
} from "lucide-react";

import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

/* -------------------- ICON MAPPING -------------------- */
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain,
  Layers,
  Users,
  BarChart3,
  Smartphone,
  Trophy,
  Workflow,
  Route,
  ShieldCheck,
  Code2,
  Lock,
  Network,
  Database,
  Globe,
  Sparkles,
  Zap,
  LineChart,
  TrendingUp,
  Target,
  GraduationCap
};

/* -------------------- TYPE DEFINITIONS -------------------- */
interface CardItem {
  id: number;
  title: string;
  description?: string;
  icon?: string;
}

interface MobileLearningManagementProps {
  title: React.ReactNode;
  data: CardItem[];
  iconComponent?: React.ComponentType<{ className?: string }>;
}

// Container animation (stagger children)
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function MobileLearningManagement({ title, data }: MobileLearningManagementProps) {
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
        <div className="pb-[60px]">
          <h2 className="heading2 text-primary text-center">
            {title}
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {data.map((item) => {
            const IconComponent = item.icon ? iconMap[item.icon] || Sparkles : Sparkles;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0px 12px 30px rgba(255,148,4,0.25)",
                }}
                className="border-[1.5px] border-[#FF9404] bg-white items-center rounded-xl p-4 grid grid-cols-[60px_1fr] gap-5  cursor-pointer transition-shadow"
              >
                <IconComponent className="w-12 h-12 text-[#FF9404] stroke-[1.5]" />
                <div>
                  <span className="text-xl block pb-2 max-mobile:text-lg font-semibold text-primary">
                    {item.title}
                  </span>
                  {/* <p className="text-base  text-gray-600">{item.description}</p> */}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
