import { motion } from "framer-motion";
import {
  Building2,
  Users,
  DollarSign,
  Brain,
  FileText,
  Target,
  Share2,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
/* -------------------- STATIC DATA -------------------- */
const featuresData = [
  {
    id: 1,
    icon: Building2,
    title: "Property Listing & Management",
    description:
      "Add, update, and manage unlimited properties from one centralized property management system for real estate portfolios.",
  },
  {
    id: 2,
    icon: Users,
    title: "Tenant & Lease Management",
    description:
      "Track tenant details, lease terms, renewals, rent payments, and history with automated alerts and reminders.",
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Financial & Accounting Tools",
    description:
      "Monitor income, expenses, and late fees and generate detailed financial reports with real-time insights.",
  },
  {
    id: 4,
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Use predictive analytics for rent optimization, occupancy trends, and smarter investment decisions.",
  },
  {
    id: 5,
    icon: FileText,
    title: "Real Estate Document Management System",
    description:
      "Securely store lease agreements, contracts, compliance documents, and renewal dates in one organized place.",
  },
  {
    id: 6,
    icon: Target,
    title: "Real Estate Lead Management System",
    description:
      "Capture, track, and convert property inquiries faster with structured lead tracking and follow-ups.",
  },
  {
    id: 7,
    icon: Share2,
    title: "Multi-User Access",
    description:
      "Collaborate with your team using role-based access and real-time updates.",
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

export default function RealEstateFeatures() {
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
          <span className="text-gradient">Key Features </span>
          of Our Real Estate Management System
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-x-[50px] gap-y-10 mt-20"
        >
          {featuresData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="w-[calc(33.33%-50px)] max-tab:w-[calc(50%-30px)] max-mobile:w-full"
            >
              <div className="grid grid-cols-[80px_1fr] max-mobile:grid-cols-1 items-center gap-5">
                {/* <img
                  src={item.icon.toString() || ""}
                  alt={item.title}
                  className="block max-mobile:max-w-[60px]"
                /> */}
                <item.icon className={`w-16 h-16 max-mobile:w-12 max-mobile:h-12 text-[#FF9404] stroke-[1.5]`} />
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
