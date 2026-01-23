import React from "react";
import InfoCard from "~/components/ui/InfoCard";

export default function RestaurantPartner() {
  return (
    <InfoCard
      title="Your All in One"
      titleGradient="Restaurant Management Partner"
      paragraphs={[
        "RejoiceHub brings POS, inventory, orders, staff, customers, and analytics together in one powerful platform, making it one of the best restaurant management software solutions for modern restaurants. Our system is built to simplify operations, improve service speed, and give you full control over your restaurant business.",
      ]}
      ctaText="RejoiceHub Solves All of This"
      ctaLink="/contact"
    />
  );
}
