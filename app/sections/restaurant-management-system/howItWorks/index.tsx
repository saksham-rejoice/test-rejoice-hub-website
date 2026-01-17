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
    title: "Quick Setup",
    description:
      "Sign up in minutes. Our team helps you configure your restaurant management system based on your operational needs.",
  },
  {
    id: "item-2",
    number: "2",
    title: "Train Your Team",
    description:
      "A simple and intuitive interface means minimal training. Most teams are fully operational within a day.",
  },
  {
    id: "item-3",
    number: "3",
    title: "Grow Your Business",
    description:
      "Start managing orders, inventory, staff, and finances efficiently with a complete restaurant management system from day one.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 max-mobile:py-12">
      <div className="container-lg">
        <h2 className="heading2 text-primary text-center mb-4">
          <span className="text-gradient">Get Started</span> in 3 Simple Steps
        </h2>

        <div className="max-w-[800px] mx-auto mt-12">
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
