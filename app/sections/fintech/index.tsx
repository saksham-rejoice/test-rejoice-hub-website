import React from "react";
import FintechHerobanner from "./fintechHerobanner";
import FinanceSoftwaredevelopment from "./financeSoftwaredevelopment";
import LearningPlatform from "../lms/accessibility/learningPlatform";
import BeyondLearningManagement from "./beyondLearningManagement";
import EmpowersLearners from "../lms/empowersLearners";
import MobileLearningManagement from "../lms/mobileLearningManagement";
import platformData from "~/constant/platformData.json";
import empowersData from "~/constant/empowersData.json";
import mobileLearningData from "~/constant/mobileLearningData.json";

export default function FintechPage() {
  return (
    <div>
      <FintechHerobanner />
      <FinanceSoftwaredevelopment />
      <LearningPlatform 
        data={platformData.fintech} 
        heading={<>Fintech Projects That Create <span className="text-gradient">Real Business Impact</span></>}
      />
      <BeyondLearningManagement />
      <EmpowersLearners 
        title={<>Real World <span className="text-gradient">FinTech Software</span> Use Cases</>}
        subtitle="Build secure, scalable, and compliance-ready fintech solutions with RejoiceHub's custom software development expertise tailored for banks, startups, and financial enterprises."
        data={empowersData.fintech}
      />
      <MobileLearningManagement 
        title={<>Explore RejoiceHub's Complete <span className="text-gradient">FinTech Software Solutions</span></>}
        data={mobileLearningData.fintech.cards}
      />
    </div>
  );
}
