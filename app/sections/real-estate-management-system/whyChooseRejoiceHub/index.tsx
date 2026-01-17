import React from "react";
import { Zap, Smile, Brain, TrendingUp, Shield } from "lucide-react";

const benefitsSteps = [
  {
    title: "Increase Efficiency",
    description:
      "Automate repetitive tasks and reduce manual errors",
    icon: Zap,
  },
  {
    title: "Better Tenant Experience",
    description:
      "Online payments, faster responses, and seamless communication",
    icon: Smile,
  },
  {
    title: "Smarter Decisions",
    description:
      "AI-driven analytics to maximize ROI",
    icon: Brain,
  },
  {
    title: "Scalable & Customizable",
    description:
      "Ideal for small landlords to large enterprises",
    icon: TrendingUp,
  },
  {
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security for your data and documents",
    icon: Shield,
  },
];

export default function WhyChooseRejoiceHub() {
  return (
    <div className="py-20 bg-[#E9F1FF]">
      <div className="container-lg2">
        <div>
          <h2 className="heading2 text-primary text-center mb-3">
            Why Choose RejoiceHub's{" "}
            <span className="text-gradient">Real Estate Property Management System?</span>
          </h2>
        </div>
        <div className="grid grid-cols-5 max-tab:grid-cols-2 max-tab:gap-y-8 gap-0 max-mobile:gap-4 relative max-mobile:grid-cols-1 mt-20">
          {benefitsSteps.map((item, index) => (
            <div key={index} className="flex justify-center relative">
              <div>
                <span className="w-10 absolute left-[50%] translate-x-[-50%] h-10 rounded-full flex items-center mx-auto justify-center text-lg text-white font-semibold border border-white bg-[#FF9404]">
                  {index + 1}
                </span>
                <div className="flex justify-center pt-5">
                  <div className="w-[100px] h-[100px] rounded-full bg-white border-2 border-dashed border-[#FF9404] flex items-center justify-center shadow-sm">
                    <item.icon className="w-12 h-12 text-[#FF9404] stroke-[1.5]" />
                  </div>
                </div>
                <div className="mt-5 max-mobile:mt-4 text-center">
                  <h3 className="text-xl max-w-[250px] mx-auto relative max-mobile:text-xl font-medium text-center text-primary mb-2.5">
                    {item.title}
                  </h3>
                  <div className="relative">
                    <p className="text-base text-[#444] font-medium max-w-[297px] mx-auto max-mobile:text-base text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
