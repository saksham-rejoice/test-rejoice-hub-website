import { motion } from "framer-motion";
import {
  CreditCard,
  MessageSquare,
  Wrench,
  FileX,
  AlertTriangle,
  BarChart3,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";

/* -------------------- STATIC DATA -------------------- */
const challengesData = [
  {
    id: 1,
    icon: CreditCard,
    title: "Rent Collection Nightmares",
    description:
      "Chasing tenants for payments, handling multiple payment modes, tracking late fees, and reconciling accounts manually every month.",
  },
  {
    id: 2,
    icon: MessageSquare,
    title: "Tenant Communication Chaos",
    description:
      "Missed maintenance requests, no centralized system, scattered communication across emails and WhatsApp, and unhappy tenants leaving bad reviews.",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Maintenance Headaches",
    description:
      "No clear visibility into repairs, vendor coordination issues, rising maintenance costs, and delayed response times.",
  },
  {
    id: 4,
    icon: FileX,
    title: "Document Disasters",
    description:
      "Lease agreements scattered across folders, missed renewal dates, compliance risks, and no proper real estate document management system.",
  },
  {
    id: 5,
    icon: AlertTriangle,
    title: "Vacancy & Lead Losses",
    description:
      "Empty properties, untracked inquiries, slow follow-ups, and missed opportunities due to the absence of a real estate lead management system.",
  },
  {
    id: 6,
    icon: BarChart3,
    title: "Financial Confusion",
    description:
      "No clear profitability per property, tax season stress, lack of real-time insights, and difficulty scaling operations.",
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

export default function RealEstateChallenges() {
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
          <span className="text-gradient">Real Estate Management Challenges </span>
          Holding You Back?
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-x-[30px] gap-y-16 max-tab:grid-cols-2 max-mobile:grid-cols-1 max-tab:gap-y-12 mt-20"
        >
          {challengesData.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="rounded-[20px] border-[1.5px] border-[#FF9404] bg-white px-[30px]"
            >
              {/* Card Header */}
              <div className="rounded-[53px] mt-[-30px] flex items-center gap-2.5 border-[1.5px] p-1.5 border-[#FF9404] bg-white w-full">
                <div className="w-[45px] h-[45px] max-tab:w-[35px] max-tab:h-[35px] rounded-full bg-[#FF9404] flex items-center justify-center shrink-0">
                  <item.icon className="w-6 h-6 max-tab:w-5 max-tab:h-5 text-white stroke-[2]" />
                </div>
                <p className="text-lg max-tab:text-base font-medium text-black">
                  {item.title}
                </p>
              </div>

              {/* Content */}
              <div className="pt-5 pb-5">
                <p className="text-base font-normal text-[#6D727E]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
