import React from "react";
import UpArrow from "~/components/icons/upArrow";
import { useNavigate } from "react-router-dom";

export default function ReadytoExperience() {
  const navigate = useNavigate();
  return (
    <div className="py-20 max-mobile:py-12">
      <div className="container-lg">
        <div className="rounded-2xl max-mobile:rounded-xl border border-[#FF5F011A] bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)] p-8 max-tab:p-5">
          <div className="flex items-center justify-between max-tab:grid max-tab:grid-cols-1 max-tab:gap-5">
            <div>
              <h2 className="text-2xl max-mobile:text-xl text-pretty font-medium mb-2.5 text-gradient-animated animate-fade-in-up">
                Ready to Experience the Synergy?
              </h2>
              <p className="text-lg max-mobile:text-base  font-normal text-primary leading-6 animate-fade-in-up anim-delay-200">
                Join hundreds of companies already leveraging our Human + AI
                partnership to drive innovation and growth.
              </p>
            </div>
            <div className="flex items-center gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-2">
              <button className="py-[14px] px-6 max-mobile:justify-between text-base font-semibold cursor-pointer tracking-[0.4px] bg-gradient-to-r from-[#FF5C00] to-[#FF9504] rounded-full flex items-center gap-2 text-white"
              onClick={() => window.open("https://calendly.com/dipak-rejoicehub")}
              >
                Start Partnership
                <UpArrow stroke="#fff" />
              </button>
              <button className="py-[14px] transition-all max-mobile:justify-between ease-in-out duration-300 hover:bg-primary hover:text-white px-6 text-base font-semibold cursor-pointer tracking-[0.4px] bg-transparent rounded-full flex items-center gap-2 text-primary-300 border border-solid border-primary-300"
              onClick={()=>navigate("/partners")}
              >
                Learn More
                <UpArrow stroke="#000" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
