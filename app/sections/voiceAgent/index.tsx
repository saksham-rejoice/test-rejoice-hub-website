import React from "react";
import VoiceAgentBanner from "./voiceAgentBanner";
import CustomerInteraction from "./customerInteraction";
import LearningPlatform from "../lms/accessibility/learningPlatform";
import NextgenEngagement from "./nextgenEngagement";
import ExhaustiveAIfeatures from "./exhaustiveAIfeatures";
import platformData from "~/constant/platformData.json";
export default function VoiceAgentPage() {
  return (
    <div>
      <VoiceAgentBanner />
      <CustomerInteraction />
      <LearningPlatform 
        data={platformData.voiceAgent} 
        heading={<>Our Call Automation Solutions That <span className="text-gradient">Elevate Customer Interactions</span></>}
      />
      <NextgenEngagement />
      <ExhaustiveAIfeatures />
    </div>
  );
}
