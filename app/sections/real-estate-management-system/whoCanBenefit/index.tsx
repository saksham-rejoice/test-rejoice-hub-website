import { motion } from "framer-motion";
import {
  Building2,
  Key,
  Coins,
  Globe,
  Warehouse,
  Home,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

const beneficiaries = [
  {
    id: 1,
    title: "Real Estate Agencies",
    icon: Building2,
  },
  {
    id: 2,
    title: "Property Managers",
    icon: Key,
  },
  {
    id: 3,
    title: "Landlords & Investors",
    icon: Coins,
  },
  {
    id: 4,
    title: "Rental Platforms",
    icon: Globe,
  },
  {
    id: 5,
    title: "Commercial Property Owners",
    icon: Warehouse,
  },
  {
    id: 6,
    title: "Residential Associations",
    icon: Home,
  },
];

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

export default function WhoCanBenefit() {
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
        <h2 className="heading2 text-primary text-center mb-12">
          Who Can Benefit from This{" "}
          <span className="text-gradient">
            Property Management System for Real Estate?
          </span>
        </h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {beneficiaries.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  boxShadow: "0px 12px 30px rgba(255,148,4,0.25)",
                }}
                className="border-[1.5px] border-[#FF9404] bg-white items-center rounded-xl p-4 grid grid-cols-[60px_1fr] gap-5 cursor-pointer transition-shadow"
              >
                <div className="w-[60px] h-[60px] rounded-xl bg-[#FF9404] flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white stroke-[2]" />
                </div>
                <div>
                  <span className="text-xl block max-mobile:text-lg font-semibold text-primary">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}