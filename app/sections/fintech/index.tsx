import React from "react";
import FintechHerobanner from "./fintechHerobanner";
import FinanceSoftwaredevelopment from "./financeSoftwaredevelopment";
import LearningPlatform from "../lms/accessibility/learningPlatform";
import BeyondLearningManagement from "./beyondLearningManagement";
import EmpowersLearners from "../lms/empowersLearners";
import MobileLearningManagement from "../lms/mobileLearningManagement";
import platformData from "~/constant/platformData.json";

export default function FintechPage() {
  return (
    <div>
      <FintechHerobanner />
      <FinanceSoftwaredevelopment />
      <LearningPlatform data={platformData.fintech} />
      <BeyondLearningManagement />
      <EmpowersLearners />
      <MobileLearningManagement />
    </div>
  );
}
