import React from "react";
import BannerImage from "../../../public/assets/images/hr-agent.png";
import { Button } from "~/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export default function AgentHerobanner({
  scrolldown,
}: {
  scrolldown: () => void;
}) {
  return (
    <div className="container-lg">
      <div className="grid grid-cols-[1fr_635px] pt-[130px] max-mobile:pb-16 pb-20  max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5 gap-0 items-center z-auto">
        <div className="bg-[url('/assets/images/line.png')]  bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0">
          <h2 className="title text-primary  mb-5 max-w-[845px] font-semibold ">
            Streamline Your Entire HR Process with a Powerful
            <span className="block text-gradient">AI HR Agent</span>
          </h2>
          <p className="text-lg text-black-500 max-w-[779px] mb-5 max-mobile:text-base">
            Automate hiring, onboarding, employee queries, documentation, and
            more without increasing your HR headcount.
          </p>
          <button className="text-base font-semibold max-mobile:text-sm text-[#000] py-2 px-[15px] border border-solid border-[#C4C7C9] bg-[#E9EAEB] rounded-lg">
            Your HR Agent Works 24/7 — Faster, Smarter, Always Accurate.
          </button>
          <div className="pt-5 flex items-center gap-4 max-mobile:grid max-mobile:grid-cols-1">
            <Button
              variant="default"
              size={"lg"}
              className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
              onClick={()=>window.open('https://hr-agent.rejoicehub.com/', '_blank')}
             
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="default"
              size={"lg"}
              className=" py-2  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)]  text-white  rounded-lg h-auto cursor-pointer font-medium text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              onClick={scrolldown}
            >
              Book a Demo
              <Calendar className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div>
          <img
            className="w-full max-mobile:rounded-lg"
            src={BannerImage}
            alt="BannerImage"
          />
        </div>
      </div>
    </div>
  );
}
