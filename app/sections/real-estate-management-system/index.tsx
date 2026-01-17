import React from "react";
import RealEstateHerobanner from "./realEstateHerobanner";
import RealEstateChallenges from "./realEstateChallenges";
import RealEstatePartner from "./realEstatePartner";
import RealEstateFeatures from "./realEstateFeatures";
import WhyChooseRejoiceHub from "./whyChooseRejoiceHub";
import HowItWorks from "./howItWorks";
import WhoCanBenefit from "./whoCanBenefit";
import GetStartedCta from "./getStartedCta";

export default function RealEstateManagementSystemPage() {
  return (
    <div className="real-estate-management-system">
     <RealEstateHerobanner />
     <RealEstateChallenges />
     <RealEstatePartner />
     <RealEstateFeatures />
     <WhyChooseRejoiceHub />
     <HowItWorks />
     <WhoCanBenefit />
     <GetStartedCta />
    </div>
  );
}
