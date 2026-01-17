import React from "react";
import {
  Wrench,
  Cloud,
  Shield,
  Brain,
  Headphones,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    title: "Custom-built solutions (no one-size-fits-all)",
    icon: Wrench,
  },
  {
    id: 2,
    title: "Cloud-based & mobile-friendly platform",
    icon: Cloud,
  },
  {
    id: 3,
    title: "Secure and scalable architecture",
    icon: Shield,
  },
  {
    id: 4,
    title: "AI-ready automation for future growth",
    icon: Brain,
  },
  {
    id: 5,
    title: "Dedicated onboarding, support, and maintenance",
    icon: Headphones,
  },
];

export default function WhyChooseRejoiceHub() {
  return (
    <div className="py-20 bg-[#E9F1FF] max-mobile:py-12">
      <div className="container-lg2">
        <div>
          <h2 className="heading2 text-primary text-center mb-3">
            <span className="text-gradient">Why Choose RejoiceHub?</span>
          </h2>
          <p className="text-lg max-w-[1072px] mx-auto text-grey-600 max-mobile:text-base text-center mb-8">
            RejoiceHub is a trusted software development and AI solutions
            company with proven expertise in building scalable restaurant
            systems.
          </p>
        </div>

        <div className="max-w-[900px] mx-auto">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">
            What Makes Us Different:
          </h3>

          <div className="space-y-4">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={benefit.id}
                  className="flex items-center gap-4 text-lg text-primary font-medium bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <IconComponent className="w-5 h-5 text-[#FF9404] shrink-0" />
                  {benefit.title}
                </div>
              );
            })}
          </div>

          <p className="text-lg text-center text-grey-600 max-mobile:text-base mt-10">
            That's why businesses trust RejoiceHub as their{" "}
            <span className="text-gradient font-semibold">
              best restaurant management software
            </span>{" "}
            partner.
          </p>
        </div>
      </div>
    </div>
  );
}
