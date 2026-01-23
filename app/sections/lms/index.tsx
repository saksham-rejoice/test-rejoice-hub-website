import React from "react";
import LmsHerobanner from "./lmsHerobanner";
import Accessibility from "./accessibility";
import LearningPlatform from "./accessibility/learningPlatform";
import LearningManagement from "./learningManagement";
import EmpowersLearners from "./empowersLearners";
import MobileLearningManagement from "./mobileLearningManagement";
import platformData from "~/constant/platformData.json";
import empowersData from "~/constant/empowersData.json";
import mobileLearningData from "~/constant/mobileLearningData.json";
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
      <EmpowersLearners 
        title={<> <span className="text-gradient">Personalized </span>Learning at Scale</>}
        subtitle="Unlike a traditional LMS, an LXP platform uses adaptive algorithms to recommend the right content and curate experiences tailored to individual learner needs boosting relevance and retention."
        data={empowersData.lms}
      />
      <MobileLearningManagement 
        title={<>Why <span className="text-gradient">Choose RejoiceHub</span> Learning Platform</>}
        data={mobileLearningData.lms.cards}
      />
    </div>
  );
}
