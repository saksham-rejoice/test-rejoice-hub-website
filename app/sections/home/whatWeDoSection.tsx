import React from "react";
import { useInView } from "react-intersection-observer";

const services = [
  {
    title: "AI Agents Services",
    description:
      "Get responsive, real-time AI agents from the finest development agency out there. Our developers will provide you with only the best of AI agents that help you streamline communication, boost efficiency and...",
    img: "/landing/1st.png",
  },
  {
    title: "Generative AI Development Services",
    description:
      "Helping businesses in streamlining workflows and developing exceptional generative AI models. We use top-end models like GPT, Gemini, Claude, Mistral, PaLM to provide catered AI-driven solutions, helping...",
    img: "/landing/2nd.png",
  },
  {
    title: "Custom Software Development",
    description:
      "Tailored software solutions to match your unique requirements. Whether it’s a full-scale enterprise suite or a quick MVP, we’ve got you covered from design to deployment.",
    img: "/landing/3rd.png",
  },
];

const WhatWeDoSection = () => {
  return (
    <section className="w-full py-20 max-mobile:py-12 max-mobile:py-12 bg-[linear-gradient(to_right,#f8f6ea_1px,transparent_1px),linear-gradient(to_bottom,#f8f6ea_1px,transparent_1px)] bg-[size:40px_40px] opacity-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 max-mobile:mb-10 max-mobile:mb-8">
          <h2 className="text-5xl text-navy-950 mb-4 font-bold max-mobile:text-3xl max-mobile:mb-2">
            What We Do
          </h2>
          <div className="w-24 h-1 bg-warning-500 mx-auto rounded-full"></div>
          <p className="text-lg max-mobile:text-base text-navy-900 mt-6 max-mobile:mt-4 max-w-2xl mx-auto">
            From consultation to automation, we provide solutions to guide your
            business into the future.
          </p>
        </div>

        <div className="grid gap-10">
          {services.map((card, idx) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.15,
            });
            return (
              <div
                key={card.title}
                ref={ref}
                className={`
                  flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}
                  bg-white rounded-3xl shadow-lg max-mobile:rounded-lg overflow-hidden transform transition-all duration-1000 ease-out
                  ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
              >
                <div className="relative md:w-1/2 h-96">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-96 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
                  <h3 className="text-2xl max-mobile:text-xl max-mobile:mb-2 font-bold text-navy-950 mb-4">
                    {card.title}
                  </h3>
                  <p className="text-navy-900 text-base leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
