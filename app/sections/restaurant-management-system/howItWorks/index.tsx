import React from "react";
import { Settings, Users, TrendingUp } from "lucide-react";

const steps = [
  {
    id: 1,
    number: "1",
    title: "Quick Setup",
    description:
      "Sign up in minutes. Our team helps you configure your restaurant management system based on your operational needs.",
    icon: Settings,
  },
  {
    id: 2,
    number: "2",
    title: "Train Your Team",
    description:
      "A simple and intuitive interface means minimal training. Most teams are fully operational within a day.",
    icon: Users,
  },
  {
    id: 3,
    number: "3",
    title: "Grow Your Business",
    description:
      "Start managing orders, inventory, staff, and finances efficiently with a complete restaurant management system from day one.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 max-mobile:py-12">
      <div className="container-lg2">
        <div className="pb-[110px] max-mobile:pb-16">
          <h2 className="heading2 text-primary text-center">
            <span className="text-gradient">Get Started</span> in 3 Simple Steps
          </h2>
        </div>
        <div className="grid grid-cols-3 max-mobile:gap-10 gap-6 max-tab:grid-cols-2 max-tab:gap-5 max-mobile:grid-cols-1">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.id}
                className="border-[#FF5F011A] border border-solid relative p-6 rounded-xl"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-b from-[#FF5E01] to-[#FF9404] flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white stroke-[2]" />
                </div>
                <h3 className="mt-10 mb-2.5 max-mobile:mt-6 text-xl font-medium text-primary">
                  {step.title}
                </h3>
                <p className="text-base text-[#6D727E] max-mobile:text-sm leading-6">
                  {step.description}
                </p>
                <div className="absolute top-[-50px] max-mobile:top-[-24px] bg-white px-1 right-5">
                  <h4 className="text-[100px] max-tab:text-[60px] max-tab:leading-[60px] max-mobile:text-[50px] max-mobile:leading-[50px] text-gradient font-extrabold leading-[100px]">
                    {String(step.id).padStart(2, "0")}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
