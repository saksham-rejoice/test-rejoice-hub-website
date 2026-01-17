import React from "react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import SectionHeader from "~/components/ui/SectionHeader";

const image = "/assets/images/HRAgent (2).png";
const brainAnimation = "/assets/images/brain.gif";
export default function BenefitsHrAgent() {
  return (
    <section className=" bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
      <div className="absolute top-0 leading-0 w-full z-[-1]">
        <img className="block" src={TopLineImage} alt="TopLineImage" />
      </div>
      <div className="absolute bottom-0 leading-0 w-full z-[-1]">
        <img className="block" src={BottomLineImage} alt="BottomLineImage" />
      </div>
      <div className="container-lg">
        <div className="pb-[60px]">
          <h2 className="heading3 text-primary text-center mb-4">
            Benefits of Using an{" "}
            <span className=" text-gradient"> AI-Powered HR Agent </span>
          </h2>
          <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
            With an AI-powered HR agent, you automate routine HR tasks, speed up
            hiring, and improve employee support, saving time, reducing costs,
            and boosting overall HR efficiency
          </p>
        </div>
        <div className="relative lg:h-[400px] md:h-[350px] h-[300px]">
          <div className="absolute top-0 left-2/4 ld:translate-x-[calc(-50%-25px)] md:translate-x-[calc(-50%-15px)] translate-x-[calc(-50%-5px)]">
            <div className="lg:w-[174px] lg:h-[174px] md:w-[130px] md:h-[130px] w-[80px] h-[80px] rounded-full bg-[#FFE8CC] flex justify-center items-center">
              <img
                src={brainAnimation}
                alt="brainAnimation"
                className="lg:w-[120px] lg:h-[120px] md:w-[80px] md:h-[80px] w-[50px] h-[50px]"
              />
            </div>
          </div>
          <img src={image} className="mx-auto"/>
        </div>
      </div>
    </section>
  );
}
