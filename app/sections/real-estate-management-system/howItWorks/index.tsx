import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

const steps = [
  {
    id: "item-1",
    number: "1",
    title: "Sign Up & Add Properties",
    description:
      "Get started in minutes with an intuitive dashboard built for real estate professionals.",
  },
  {
    id: "item-2",
    number: "2",
    title: "Manage Tenants & Leases",
    description:
      "Track occupancy, rent collection, and renewals effortlessly with automation.",
  },
  {
    id: "item-3",
    number: "3",
    title: "Analyze & Optimize",
    description:
      "Use AI insights to improve pricing, reduce vacancies, and increase profitability.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 max-mobile:py-12">
      <div className="container-lg">
        <h2 className="heading2 text-primary text-center mb-12">
          <span className="text-gradient">How It Works</span>
        </h2>

        <div className="max-w-[800px] mx-auto">
          <Accordion type="single" collapsible defaultValue="item-1">
            {steps.map((step) => (
              <AccordionItem key={step.id} value={step.id}>
                <AccordionTrigger className="text-left text-xl font-semibold text-primary hover:no-underline">
                  <span className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full flex items-center justify-center text-lg text-white font-semibold bg-[#FF9404] shrink-0">
                      {step.number}
                    </span>
                    {step.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-grey-600 pl-14 max-mobile:text-base">
                  {step.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
