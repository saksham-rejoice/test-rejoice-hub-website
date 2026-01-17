import { FaStar, FaCogs, FaUsers, FaCheckCircle } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const features = [
  {
    icon: <FaCogs className="text-amber-500 text-3xl" />,
    title: "Innovative & Cutting‑Edge Tech",
    description:
      "With a team of 120+ developers, they leverage modern frameworks and tools across AI/ML, IOT, and DevOps domains",
  },
  {
    icon: <HiOutlineClipboardCheck className="text-amber-500 text-3xl" />,
    title: "Comprehensive End‑to‑End Services",
    description:
      "They offer all necessary IT services under one roof: from strategy & design to development, QA, deployment, and post-launch support.",
  },
  {
    icon: <FaUsers className="text-amber-500 text-3xl" />,
    title: "Customer‑Centric Process",
    description:
      "The firm emphasizes a deep understanding of client goals and tailors solutions that align with business objectives, resulting in personalized outcomes and strong client satisfaction ",
  },
  {
    icon: <FaStar className="text-amber-500 text-3xl" />,
    title: "Proven Delivery & Relationships",
    description:
      "Since their inception, they have delivered extensive projects across industries, maintaining a high repeat business rate (~90%) and pre-COVID strong client retention ",
  },
  {
    icon: <MdEngineering className="text-amber-500 text-3xl" />,
    title: "Passionate & Skilled Team",
    description:
      "Strong internal culture of collaboration, ongoing learning, and technical excellence among engineers, designers, and analysts",
  },
  {
    icon: <FaCheckCircle className="text-amber-500 text-3xl" />,
    title: "Quality & Security Focus",
    description:
      "RejoiceHub adheres to best‑practice QA, CI/CD, and security protocols to ensure dependable and secure software outcomes.",
  },
];

const WhyChooseRejoicehub = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 max-mobile:py-12">
      <div className="cus-container relative">
        <div className="text-center mb-12">
          <h2 className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Our Process
          </h2>
          <h2 className="heading3 text-center mb-4 text-navy-950">
            Why Choose Rejoicehub?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex justify-center">
                <div className="h-16 w-16 rounded-full bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] flex items-center justify-center shadow-md ">
                  <span className="text-accent-400 text-2xl">
                    {feature.icon}
                  </span>
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="text-xl font-semibold text-navy-950 group-hover:text-warning-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-base text-navy-900 mt-3 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-50/10 to-white/10 pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseRejoicehub;
