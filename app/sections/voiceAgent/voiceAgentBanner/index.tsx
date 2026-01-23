import { ArrowRight, Calendar, Check } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import BannerImage from "/assets/images/voice-agent.png";
import { Link } from "react-router-dom";

export default function VoiceAgentBanner() {
  return (
    <div className="container-lg">
      <div className="grid grid-cols-[1fr_635px]  pt-[160px] max-mobile:pb-16 pb-20  max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5 gap-0 items-center z-auto">
        <div className="bg-[url('/assets/images/line.png')]  bg-no-repeat bg-cover w-full pr-10 max-tab:pr-0">
          <h2 className="title text-primary  mb-5 max-w-[845px] font-semibold ">
            Transform Customer Service with Our Intelligent{" "}
            <span className="text-gradient">Voice AI Agents </span>
          </h2>
          <p className="text-lg text-black-500 max-w-[779px] mb-5 max-mobile:text-base">
            Transform customer service with our intelligent voice AI agents that
            understand, respond, and resolve inquiries naturally while
            delivering human-like automated support at scale. Our AI voice agent
            platform is designed to handle every customer interaction with
            precision and empathy.
          </p>

          <div className="pt-5 flex items-center gap-4 max-mobile:grid max-mobile:grid-cols-1">
            <Link to="https://calendly.com/dipak-rejoicehub" target="_blank">
              <Button
                variant="default"
                size={"lg"}
                className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/solutions/smart-call-automation/#portfolio">
              <Button
                variant="default"
                size={"lg"}
                className=" py-2  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)]  text-white  rounded-lg h-auto cursor-pointer font-medium text-base focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                View Our Portfolio
              </Button>
            </Link>
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
