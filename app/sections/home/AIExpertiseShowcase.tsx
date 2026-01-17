import { Bot, Sparkles, ShieldCheck, Users } from "lucide-react";
import Mindiconfill from "~/assets/icons/mindiconfill";
import Shieldiconfill from "~/assets/icons/shieldiconfill";
import Solutioniconfill from "~/assets/icons/solutioniconfill";
import Usericonfill from "~/assets/icons/usericonfill";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
const AIExpertiseShowcase = () => {
  const items = [
    {
      title: "AI Agent Development",
      description:
        "Specialized in building intelligent agents that learn, adapt, and evolve with your business needs.",
      Icon: Mindiconfill,
      points: [
        "1000+ AI agents deployed across industries",
        "Custom training on proprietary data",
        "Multi-modal AI capabilities (text, voice, vision)",
        "Real-time learning and adaptation",
      ],
    },
    {
      title: "Generative AI Solutions",
      description:
        "Cutting-edge generative AI that creates content, code, and insights at enterprise scale.",
      Icon: Solutioniconfill,
      points: [
        "Advanced LLM integration and fine-tuning",
        "Content generation with brand voice consistency",
        "Code generation with security validation",
        "Multi-language support and localization",
      ],
    },
    {
      title: "AI Ethics & Governance",
      description:
        "Built-in ethical AI practices ensuring transparency, fairness, and compliance.",
      Icon: Shieldiconfill,
      points: [
        "Bias detection and mitigation systems",
        "Explainable AI with audit trails",
        "GDPR and SOC2 compliance ready",
        "Human oversight and control mechanisms",
      ],
    },
    {
      title: "Human-AI Collaboration",
      description:
        "AI systems designed to amplify human capabilities, not replace them.",
      Icon: Usericonfill,
      points: [
        "Collaborative AI workflows",
        "Human-in-the-loop validation",
        "Adaptive learning from user feedback",
        "Seamless integration with existing tools",
      ],
    },
  ];

  return (
    <section className="rounded-2xl relative bg-gradient-to-b from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
      <div className="absolute top-0 leading-0 w-full z-[-1]">
        <img className="block" src={TopLineImage} alt="TopLineImage" />
      </div>
      <div className="absolute bottom-0 leading-0 w-full z-[-1]">
        <img className="block" src={BottomLineImage} alt="BottomLineImage" />
      </div>
      <div className="container-lg">
        <div className="pb-[60px] max-mobile:pb-10">
          <span className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            AI Expertise
          </span>
          <h2 className="heading3 text-primary text-center mb-4">
            Why We're the
            <span className=" text-gradient"> AI Experts</span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            While others dabble in AI, we live and breathe it. Our deep
            expertise, proven track record, and innovative approach make us the
            go-to partner for AI transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map(({ title, description, Icon, points }, idx) => (
            <div
              key={idx}
              className="bg-white p-6 max-mobile:p-3 max-mobile:rounded-lg rounded-2xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex pb-6 items-center max-mobile:gap-5 justify-between max-mobile:grid max-mobile:grid-cols-1">
                <div className="max-mobile:order-2">
                  <h3 className="text-2xl font-medium max-mobile:text-left text-primary mb-3">
                    {title}
                  </h3>
                  <p className="text-lg max-mobile:text-base font-normal text-primary leading-6 max-w-[474px]">
                    {description}
                  </p>
                </div>
                <div className="border-[5px] max-mobile:w-18 max-mobile:h-18 border-[#ffe7c8] rounded-xl bg-gradiented p-3">
                  <Icon />
                </div>
              </div>
              <div className="border border-solid border-orange max-mobile:p-3 p-6 rounded-md">
                <ul className="list-disc pl-6 marker:text-orange-500 space-y-5 max-mobile:space-y-3">
                  {points.map((point, i) => (
                    <li
                      key={i}
                      className="text-lg max-mobile:text-base text-primary font-normal leading-snug"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIExpertiseShowcase;
