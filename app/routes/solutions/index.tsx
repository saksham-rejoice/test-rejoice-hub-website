import { solutions } from "../../data/solutions/solutions";
import { Link, MetaFunction, useLoaderData } from "react-router-dom";
import { SolutionsResponse } from "../../types/solutionTypes";
import HeroSection from "~/components/comman/herosection";
import WorkWithUs from "~/sections/home/workWithUs";
import { WEB_URL } from "~/utils/config";
import { motion } from "framer-motion";
import HrAgentLogo from "/assets/images/hr-agent-logo.svg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const card = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // smooth premium easing
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const meta: MetaFunction<typeof loader> = () => {
  return [
    { title: "Our Solutions | Rejoicehub" },
    {
      name: "description",
      content:
        "Discover how our AI-powered solutions can transform your business and boost productivity.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/solutions`,
    },
  ];
};

export async function loader() {
  return solutions;
}

export default function Solutions() {
  const loaderData = useLoaderData() as SolutionsResponse;
  const solutionsList = loaderData.data.solution.data;

  return (
    <div>
      <div className="pt-[154px] pb-[60px] bg-gradient-to-b from-[#D0E1FF] to-white">
        <div className="container-lg2">
          {/* ===== Title Section ===== */}
          <motion.div
            className="pb-20 max-mobile:pb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
          >
            <span className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
              Solutions
            </span>

            <h2 className="heading3 text-primary text-center mb-5">
              Our
              <span className="text-gradient"> Solutions </span>
            </h2>

            <p className="text-lg text-grey-600 max-w-[986px] mx-auto text-center font-medium max-mobile:text-base">
              Discover how our AI-powered solutions can transform your business
              and boost productivity.
            </p>
          </motion.div>

          {/* ===== Cards Grid ===== */}
          <motion.div
            className="grid grid-cols-1 max-mobile:gap-5 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {solutionsList.map((item: any) => {
              const s = item.attributes;

              return (
                <motion.div
                  key={s.slug}
                  variants={card}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                  }}
                >
                  <Link
                    to={`/solutions/${s.slug}`}
                    className="group block rounded-2xl border-t-[4px] px-5 py-6 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] transition-all duration-300 no-underline"
                  >
                    <div className="flex items-center gap-3 pb-4">
                      <img
                        src={s.icon}
                        alt="HrAgentLogo"
                        className="block"
                      />
                      <h3 className="text-xl text-primary font-semibold">
                        {s.mainTitle}
                      </h3>
                    </div>

                    <p className="text-primary text-base line-clamp-4 leading-relaxed">
                      {s.shortDescription}
                    </p>

                    <motion.div
                      className="pt-4 flex items-center gap-2"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-base font-medium text-gradient">
                        Read More
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M1.75 12.25L12.25 1.75M12.25 1.75C9.91667 2.1875 4.8125 3.0625 1.75 1.75M12.25 1.75C11.8125 3.9375 10.9375 8.75 12.25 12.25"
                          stroke="url(#paint0_linear)"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="7"
                            y1="1.75"
                            x2="7"
                            y2="12.25"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#FF6302" />
                            <stop offset="1" stopColor="#FF9104" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>

      <WorkWithUs />
    </div>
  );
}
