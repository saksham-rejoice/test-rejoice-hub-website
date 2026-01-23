import React from "react";
import { motion } from "framer-motion";

/* -------------------- TYPE DEFINITIONS -------------------- */
interface EmpowerItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

interface EmpowersLearnersProps {
  title: React.ReactNode;
  subtitle?: string;
  data: EmpowerItem[];
}

/* -------------------- ANIMATION VARIANTS -------------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  },
};

const imageVariants = {
  hidden: { scale: 1.05, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function EmpowersLearners({ title, subtitle, data }: EmpowersLearnersProps) {
  return (
    <div className="py-20">
      <div className="container-lg2">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-4 heading2 text-primary text-center"
        >
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-[60px] text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center "
          >
            {subtitle}
          </motion.p>
        )}

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 max-tab:grid-cols-2 max-mobile:grid-cols-1"
        >
          {data.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Image */}
              <motion.img
                variants={imageVariants}
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover rounded-xl"
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full">
                <div className="p-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="bg-white p-5 rounded-xl shadow-md"
                  >
                    <h3 className="text-xl max-mobile:text-lg font-semibold text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-base max-mobile:text-sm text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
