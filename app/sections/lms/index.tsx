import React from "react";
import LmsHerobanner from "./lmsHerobanner";
import Accessibility from "./accessibility";
import LearningPlatform from "./accessibility/learningPlatform";
import LearningManagement from "./learningManagement";
import EmpowersLearners from "./empowersLearners";
import MobileLearningManagement from "./mobileLearningManagement";
import platformData from "~/constant/platformData.json";
export default function LmsPage() {
  return (
    <div>
      <LmsHerobanner />
      <Accessibility />
      <LearningPlatform 
        data={platformData.lms} 
        heading={<>Our Learning Projects That Create <span className="text-gradient">Engaging Learning Experiences</span></>}
      />
      <LearningManagement />
      <EmpowersLearners />
      <MobileLearningManagement />
    </div>
  );
}
