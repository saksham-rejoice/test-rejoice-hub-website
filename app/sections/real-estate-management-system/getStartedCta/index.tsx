import React from "react";
import InfoCard from "~/components/ui/InfoCard";

export default function GetStartedCta() {
  return (
    <InfoCard
      title="Start Managing Your Properties"
      titleGradient="Smarter Today"
      paragraphs={[
        "Don't let outdated tools slow your growth. Upgrade to RejoiceHub's AI-powered real estate management system and take full control of your properties, tenants, finances, and document everything in one platform.",
      ]}
      ctaText="Get Started Now"
      ctaLink="https://calendly.com/dipak-rejoicehub"
      target="_blank"
    />
  );
}
