import React from "react";
import RealEstateHerobanner from "./realEstateHerobanner";
import RealEstateChallenges from "./realEstateChallenges";
import RealEstatePartner from "./realEstatePartner";
import RealEstateFeatures from "./realEstateFeatures";
import RealEstateShowcase from "./realEstateShowcase";
import HowItWorks from "./howItWorks";
import WhoCanBenefit from "./whoCanBenefit";
import GetStartedCta from "./getStartedCta";
import platformData from "~/constant/platformData.json";
import WhyChooseRejoiceHub from "./whyChooseRejoiceHub";

export default function RealEstateManagementSystemPage() {
  return (
    <div className="real-estate-management-system">
     <RealEstateHerobanner />
     <RealEstateChallenges />
     <RealEstatePartner />
     <RealEstateFeatures />
     <WhyChooseRejoiceHub/>
     <RealEstateShowcase data={platformData.fintech} />
     <HowItWorks />
     <WhoCanBenefit />
     <GetStartedCta />
    </div>
  );
}
