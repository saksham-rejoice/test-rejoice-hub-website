import React from "react";
import InfoCard from "~/components/ui/InfoCard";

export default function RealEstatePartner() {
  return (
    <InfoCard
      title="Your All-in-One"
      titleGradient="Real Estate Management Partner"
      paragraphs={[
        "RejoiceHub combines property operations, finances, tenants, and documents into one intelligent real estate management system. Designed for efficiency and growth, our platform helps you automate daily tasks, improve tenant experience, and gain full visibility across your portfolio.",
        "Whether you manage residential or commercial assets, RejoiceHub acts as a complete real estate property management system tailored to your business needs.",
      ]}
      ctaText="RejoiceHub Solves All of This"
      ctaLink="/contact"
    />
  );
}
