import React, { useEffect, useState } from "react";

import {
  ArrowRight,
  Check,
  BarChart3,
  FileText,
  Users,
  ListChecks,
  Eye,
  FolderOpen,
  IdCard,
  Bell,
  Calendar,
  Clock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import SectionHeader from "~/components/ui/SectionHeader";
import { NavLink, useNavigate } from "react-router-dom";
import { sendAgentSlackMessage } from "~/api/slackMessageApi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image1 from "/assets/images/AIJobScoring.png";
import UpworkImage from "/assets/images/up-work.png";
import LineAnimation from "/assets/images/line-animation.svg";
import GenerationIcon from "/assets/images/generation.svg";
import UnlimitedMemberAccessIcon from "/assets/icons/unlimitedmemberaccess.svg";
import UnlimitedEvaluationIcon from "/assets/icons/unlimitedevalution.svg";
import EyeIcon from "/assets/images/eye.svg";
import ProposalTurnAroundIcon from "/assets/icons/proposalturnaround.svg";
import AssignmentDecisionIcon from "/assets/icons/assignmentdecision.svg";
import ScatteredTrackingIcon from "/assets/icons/scatteredtracking.svg";
import MissedOpportunityIcon from "/assets/icons/missedopportunity.svg";
import NoPerformanceIcon from "/assets/icons/noperformance.svg";
import OpportunitiesIcon from "/assets/images/opportunities.svg";
import EvaluateContextIcon from "/assets/icons/evalutecontext.svg";
import GenerateProposalIcon from "/assets/icons/generateproposal.svg";
import DecideWithClarityIcon from "/assets/icons/decideclarity.svg";
import Image2 from "/assets/images/AIProposalWriter.png";
import Image3 from "/assets/images/EmployeeDirectory.png";
import Image4 from "/assets/images/JobDetailViewer.png";
import Image5 from "/assets/images/Main.png";
import Image6 from "/assets/images/ProjectPortfolio.png";
import Image7 from "/assets/images/RejectPipeline.png";
import Image8 from "/assets/images/SlackNotifications.png";
import Image9 from "/assets/images/TalentMatchEngine.png";
import { Button } from "~/components/ui/button";
import AutomateScheduling from "../hr-agent/automate-scheduling";
import { supabase } from "~/Supabase/supabaseClient";

const Discoveropportunities = "/assets/icons/Discoveropportunities.svg";
const Evaluatewithcontext = "/assets/icons/Evaluatewithcontext.svg";
const Generateproposals = "/assets/icons/Generateproposals.svg";
const Decidewithclarity = "/assets/icons/Decidewithclarity.svg";

function UpworkAgentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  type Tier = "Starter" | "Growth" | "Advanced";
  const [selectedTier, setSelectedTier] = useState<Tier>("Starter");

  const tierPrices: Record<Tier, number> = {
    Starter: 1800,
    Growth: 2400,
    Advanced: 5000,
  };

  const tierDetails = {
    Starter: {
      title: "Starter Automation",
      description:
        "AI Agent setup for scheduling calls for 1 calendar or platform",
      deliveryTime: "2 days",
      outboundCalls: "20",
      emailSends: "50",
      days: "2 days delivery",
      revisionNote: "Revisions may occur after this date.",
      scriptwriting: true,
    },
    Growth: {
      title: "Smart Engagement",
      description: "Automated follow-ups via email or chat",
      deliveryTime: "5 days",
      outboundCalls: "50",
      emailSends: "150",
      days: "5 days delivery",
      revisionNote: "Revisions may occur after this date.",
      scriptwriting: true,
      SummaryReport: true,
    },
    Advanced: {
      title: "AI Communication Assistant",
      description:
        "AI-assisted call scheduling optimization (best times, reminders, reschedules)",
      deliveryTime: "10 days",
      outboundCalls: "150",
      emailSends: "500",
      days: "10 days delivery",
      revisionNote: "Revisions may occur after this date.",
      scriptwriting: true,
      SummaryReport: true,
      leadList: true,
    },
  };

  const slides = [
    {
      image: Image1,
      description: "Instantly identify the highest-fit opportunities.",
    },
    {
      image: Image2,
      description: "Generate tailored proposals based on real project history.",
    },
    {
      image: Image9,
      description: "Recommend the right team member for each opportunity.",
    },
    {
      image: Image7,
      description: "Structured decision flow with clear status visibility.",
    },
    {
      image: Image4,
      description: "Full job context in one place for quicker evaluation.",
    },
    { image: Image6, description: "Attach relevant case studies easily." },
    {
      image: Image3,
      description: "Centralized skill mapping for assignment clarity.",
    },
    {
      image: Image8,
      description: "Real-time alerts when high-fit opportunities appear.",
    },
  ];

  useEffect(() => {
    console.log("Upwork slider effect mounted");
    const interval = setInterval(() => {
      console.log("tick");
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const [leadForm, setLeadForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    interest: "",
    message: "",
  });
  const [leadSubmitting, setLeadSubmitting] = useState(false);
  const [leadSuccess, setLeadSuccess] = useState("");
  const [leadError, setLeadError] = useState("");
  const navigate = useNavigate();

  const painPoints = [
    {
      title: "Manual job hunting",
      description: "Hours wasted scrolling through irrelevant listings.",
      icon: EyeIcon,
    },
    {
      title: "Slow proposal turnaround",
      description: "Writing proposals from scratch delays submissions.",
      icon: ProposalTurnAroundIcon,
    },
    {
      title: "Unclear assignment decisions",
      description:
        "Hard to match jobs to the right resource without visibility.",
      icon: AssignmentDecisionIcon,
    },
    {
      title: "Scattered tracking",
      description:
        "Updates spread across chats and spreadsheets cause confusion.",
      icon: ScatteredTrackingIcon,
    },
    {
      title: "Missed opportunities",
      description: "Slow decisions and delayed responses lose deals.",
      icon: MissedOpportunityIcon,
    },
    {
      title: "No performance visibility",
      description: "No system to learn what works and scale success.",
      icon: NoPerformanceIcon,
    },
  ];

  const workflowSteps = [
    {
      title: "Discover opportunities",
      description: "AI-ranked job listings prioritized for success potential.",
      icon: OpportunitiesIcon,
    },
    {
      title: "Evaluate with context",
      description: "Budget, requirements & deliverables visible immediately.",
      icon: EvaluateContextIcon,
    },
    {
      title: "Generate proposals",
      description: "Personalized drafts created in minutes.",
      icon: GenerateProposalIcon,
    },
    {
      title: "Decide with clarity",
      description: "Structured accept / reject workflow and status control.",
      icon: DecideWithClarityIcon,
    },
  ];

  const handleLeadChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    // Special handling for phone input
    if (name === "phone") {
      // Only allow numbers and backspace
      const numericValue = value.replace(/[^0-9]/g, "");
      // Ensure +91 is always at the start
      setLeadForm((prev) => ({
        ...prev,
        phone: numericValue.startsWith("91")
          ? `+${numericValue}`
          : `+91${numericValue}`,
      }));
    } else {
      setLeadForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleLeadSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (leadSubmitting) return;

    if (
      !leadForm.name ||
      !leadForm.email ||
      !leadForm.phone ||
      !leadForm.company ||
      !leadForm.message
    ) {
      setLeadError("Please fill in all required fields.");
      return;
    }

    // Basic phone number validation
    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,10}$/;
    if (!phoneRegex.test(leadForm.phone)) {
      setLeadError("Please enter a valid phone number");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadForm.email)) {
      setLeadError("Please enter a valid email address");
      return;
    }

    setLeadError("");
    setLeadSuccess("");
    setLeadSubmitting(true);

    // const text =
    //   `:sparkles: *New Upwork Agent White-label Inquiry*\n\n` +
    //   `*Name*: ${leadForm.name}\n` +
    //   `*Email*: ${leadForm.email}\n` +
    //   `*Phone*: ${leadForm.phone}\n` +
    //   `*Company*: ${leadForm.company}\n` +
    //   (leadForm.interest ? `*Interested in*: ${leadForm.interest}\n` : "") +
    //   `*Message*: ${leadForm.message}`;

    try {
      //await sendAgentSlackMessage({ text });
      const { error, status, data } = await supabase
        .from("rejoice_hub_contact_us_form")
        .insert({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          company: leadForm.company,
          interest: leadForm.interest,
          message: leadForm.message,
          source: "Upwork Agent",
        });
      if (status == 201) {
        console.log("Upwork lead form submitted successfully", data);
        setLeadSuccess(
          "Thanks! We've received your details and will reach out shortly."
        );
      }
      setLeadSuccess(
        "Thanks! We've received your details and will reach out shortly."
      );
      setLeadForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      console.error("Upwork lead form error", err);
      setLeadError(
        "Something went wrong. Please try again or use the contact page."
      );
    } finally {
      setLeadSubmitting(false);
    }
  };

  const scrollToWhiteLabelSection = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("upwork-white-label-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <div className="pt-[154px] pb-[60px] bg-gradient-to-b from-[#D0E1FF] to-white">
        <div className="container-lg2">
          <div>
            <h2 className="heading3 text-primary mx-auto mb-5 text-center max-w-[800px]">
              Win more Upwork projects with{" "}
              <span className="text-gradient"> AI-powered </span> job evaluation
              &amp; proposals
            </h2>
            <p className="text-lg text-grey-600 max-w-[986px] mx-auto text-center font-medium mb-5 max-mobile:text-base">
              Upwork Agent automates job discovery, proposal writing, and talent
              assignment — helping your team respond faster, submit smarter, and
              win more consistently.
            </p>
            <div className="flex items-center justify-center gap-5 pb-10 max-mobile:pb-5 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
              <div className="flex items-center gap-2 pb-3 max-mobile:pb-2 max-mobile:justify-center">
                <Check className="text-orange" />
                <span className="text-base text-gray-500 font-medium">
                  AI-ranked job opportunities
                </span>
              </div>
              <div className="flex items-center gap-2 pb-3 max-mobile:justify-center max-mobile:pb-2">
                <Check className="text-orange" />
                <span className="text-base text-gray-500 font-medium">
                  Instant, personalized proposal creation
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <Button
                variant="default"
                size={"lg"}
                className="text-white py-2.5 h-auto rounded-lg cursor-pointer font-medium text-base"
                onClick={() =>
                  window.open("https://upwork-agent.rejoicehub.com/", "_blank")
                }
              >
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                className="h-auto text-white text-base cursor-pointer py-2.5 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]"
                size="lg"
                variant="default"
                onClick={() =>
                  window.open(
                    "https://calendly.com/devang225-rejoice/ai-automation",
                    "_blank"
                  )
                }
              >
                Book a live demo
                <Calendar className="text-white w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-[70px]">
        <div className="container-lg2">
          <img
            src={UpworkImage}
            alt="UpworkImage"
            className="block max-w-[1392px] mx-auto max-tab:max-w-full"
          />
        </div>
      </div>

      <section className="bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
        <div className="absolute top-0 leading-0 w-full z-[-1]">
          <img className="block" src={TopLineImage} alt="TopLineImage" />
        </div>
        <div className="absolute bottom-0 leading-0 w-full z-[-1]">
          <img className="block" src={BottomLineImage} alt="BottomLineImage" />
        </div>
        <div className="container-lg2">
          <h2 className="heading2 text-primary text-center mb-4 max-w-[983px] mx-auto">
            The real challenges Upwork teams face without{" "}
            <span className="text-[#FF9104]">Upwork Agent</span>
          </h2>
          <div className="grid grid-cols-3 gap-y-10 max-tab:grid-cols-2  gap-x-7 max-tablet:grid-cols-1 max-mobile:grid-cols-1 mt-10">
            {painPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-[0_25px] border-[1.5px] border-[#FF9404] bg-[#FFF4EB]"
                >
                  <div className="mt-[-25px] px-5">
                    <img
                      src={item.icon}
                      className="max-w-[55px]"
                      alt="EyeIcon"
                    />
                  </div>
                  <div className="px-5 pb-5">
                    <h3 className="text-xl max-mobile:text-xl font-semibold text-primary mt-4 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base max-mobile:text-sm text-gray-600 ">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — SLIDER (PLATFORM ADVANTAGE) */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="heading3 text-primary text-center mb-4">
            What <span className="text-[#FF9104]">Upwork Agent</span> enables
          </h2>
          <p className="text-lg text-grey-600 max-mobile:text-base text-center mb-10">
            Centralize job discovery, evaluation, proposal creation, and
            assignment in one AI-powered workspace.
          </p>
          <div>
            <Swiper
              modules={[Navigation]}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{
                clickable: true,
              }}
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
            >
              {slides.map((slide, index) => (
                <SwiperSlide>
                  <img
                    src={slide.image}
                    alt={`Upwork Agent slide ${index + 1}`}
                    className="w-full h-[550px] object-cover max-mobile:rounded-lg  rounded-xl max-mobile:h-[190px]"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex max-mobile:pt-4 items-center gap-5 justify-center pt-6">
              <div className=" text-white cursor-pointer custom-swiper-button-prev   bg-gradient-to-b from-[#FF5E01] to-[#FF9404] transition-all ease-in-out duration-300 hover:text-white max-mobile:w-10 max-mobile:h-10 w-12 h-12 bg-white  border border-[#e9e9e9] flex items-center justify-center rounded-full">
                <ChevronLeft className="w-6 h-6 max-mobile:w-5 max-mobile:h-5  " />
              </div>
              <div className=" text-white cursor-pointer custom-swiper-button-next   bg-gradient-to-b from-[#FF5E01] to-[#FF9404] transition-all ease-in-out duration-300 hover:text-white max-mobile:w-10 max-mobile:h-10 w-12 h-12 bg-white  border border-[#e9e9e9]  flex items-center justify-center rounded-full">
                <ChevronRight className="w-6 h-6 max-mobile:w-5 max-mobile:h-5" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — WORKFLOW */}
      <section className="">
        <div className="blue-line-bg  py-20 max-mobile:py-12">
          <div className="container-lg">
            <div className="text-center">
              <SectionHeader
                badge="Working with Upwork Agent"
                headingClassName="text-white"
                titleClassName="text-white"
                subtitleClassName="text-white max-w-[100%]"
                title="Your Upwork evaluation workflow, reimagined"
                subtitle="Move from scattered, manual workflows to a single, AI-assisted evaluation and proposal system."
                variant="amber"
              />
              <div className="grid grid-cols-4 max-tab:grid-cols-2 max-tab:gap-y-8 gap-0 max-mobile:gap-4 relative max-mobile:grid-cols-1">
                <div className="absolute top-[26%] left-[18%]">
                  <img
                    src={LineAnimation}
                    alt="LineAnimation"
                    className="max-w-[200px] max-tab:hidden w-full block"
                  />
                </div>
                <div className="absolute max-tab:hidden top-[26%] left-[43%]">
                  <img
                    src={LineAnimation}
                    alt="LineAnimation"
                    className="max-w-[200px] w-full block"
                  />
                </div>
                <div className="absolute max-tab:hidden top-[26%] right-[18%]">
                  <img
                    src={LineAnimation}
                    alt="LineAnimation"
                    className="max-w-[200px] w-full block"
                  />
                </div>
                {workflowSteps.map((item, index) => (
                  <div key={index} className="flex justify-center relative">
                    <div>
                      <span className="w-10 absolute left-[30%] translate-x-[-50%] h-10 rounded-full flex items-center mx-auto justify-center text-lg text-white font-semibold border border-white bg-white/20">
                        {index + 1}
                      </span>
                      <div className=" flex justify-center pt-5">
                        <img src={item.icon} alt="OpportunitiesIcon" />
                      </div>
                      <div className="mt-5 max-mobile:mt-4 text-center">
                        <h3 className="text-xl relative max-mobile:text-xl font-medium text-center text-white mb-2.5">
                          {item.title}
                        </h3>
                        <div className="relative">
                          <p className="text-lg text-white-80 font-medium max-w-[297px] max-mobile:text-base text-center">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — PLAN / PRICING MODEL */}
      <section className=" py-20 max-mobile:py-12">
        <div className="container-lg2">
          <SectionHeader
            badge="Simple pricing"
            title="Simple and scalable usage-based model"
            subtitle="Upwork Agent is designed for teams that scale opportunity evaluation without increasing manual effort or operational overhead."
            variant="amber"
          />

          <div className="grid grid-cols-3 gap-[30px] max-tab:gap-y-12 max-tab:grid-cols-2 max-mobile:grid-cols-1">
            {/* Card 1 */}
            <div className="rounded-[20px] border-[1.5px] border-[#FF9404] bg-white px-[30px]">
              <div className="rounded-[53px] mt-[-30px] flex items-center gap-2.5 border-[1.5px] p-1.5 border-[#FF9404] bg-white">
                <img
                  className="max-w-[45px] max-tab:max-w-[35px]"
                  src={GenerationIcon}
                  alt="GenerationIcon"
                />
                <p className="text-lg max-tab:text-base font-medium text-[#000]">
                  Unlimited proposal generation
                </p>
              </div>
              <div className="pt-5 pb-5">
                <p className="text-base font-normal text-[#6D727E]">
                  Let AI handle high-volume, personalized proposals while your
                  team focuses on strategy and client conversations.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-[20px] border-[1.5px] border-[#FF9404] bg-white px-[30px]">
              <div className="rounded-[53px] mt-[-30px] flex items-center gap-2.5 border-[1.5px] p-1.5 border-[#FF9404] bg-white">
                <img
                  className="max-w-[45px] max-tab:max-w-[35px]"
                  src={UnlimitedEvaluationIcon}
                  alt="UnlimitedEvaluationIcon"
                />
                <p className="text-lg max-tab:text-base font-medium text-[#000]">
                  Unlimited job evaluation
                </p>
              </div>
              <div className="pt-5 pb-5">
                <p className="text-base font-normal text-[#6D727E]">
                  Score and qualify as many Upwork opportunities as you need
                  without worrying about manual bandwidth limits.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-[20px] border-[1.5px] border-[#FF9404] bg-white px-[30px]">
              <div className="rounded-[53px] mt-[-30px] flex items-center gap-2.5 border-[1.5px] p-1.5 border-[#FF9404] bg-white">
                <img
                  className="max-w-[45px] max-tab:max-w-[35px]"
                  src={UnlimitedMemberAccessIcon}
                  alt="UnlimitedMemberAccessIcon"
                />
                <p className="text-lg max-tab:text-sm font-medium text-[#000]">
                  Unlimited team member access
                </p>
              </div>
              <div className="pt-5 pb-5">
                <p className="text-base font-normal text-[#6D727E]">
                  Bring sales, delivery and leadership into one shared workspace
                  with transparent visibility and control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <AutomateScheduling /> */}

      <section className="pb-12">
        <div className="pb-[60px] max-mobile:px-5">
          <h2 className="heading3 text-primary text-center">
            You will get Upwork Agent –{" "}
            <span className="text-gradient">Automate Scheduling,</span>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)]  p-5 rounded-xl container-lg2">
          <div className="grid grid-cols-2 gap-5 max-tab:grid-cols-1">
            <div className="">
              <div className="pr-5 border-r border-solid border-[#FF5F011A] max-tab:border-none">
                <div className="flex pb-6 items-center justify-between max-mobile:pb-4">
                  <h3 className="text-xl text-primary font-medium max-mobile:text-lg">
                    Select service tier
                  </h3>
                  <span className="text-gradient text-lg max-mobile:text-base">
                    Compare tiers
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 max-mobile:grid-cols-2 max-mobile:gap-3">
                  <div
                    className={`rounded-lg border border-solid p-5 max-mobile:p-4 ${selectedTier === "Starter" ? "bg-[#FFF5ED] border-[#FF5E01]" : "bg-white border-[#FFE4D0]"}`}
                    onClick={() => setSelectedTier("Starter")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">
                      ${tierPrices["Starter"].toLocaleString()}
                    </h4>
                  </div>
                  <div
                    className={`rounded-lg border border-solid border-[#FF5E01] p-5 max-mobile:p-4 ${selectedTier === "Growth" ? "bg-[#FFF5ED] border-[#FF5E01]" : "bg-white border-[#FFE4D0]"}`}
                    onClick={() => setSelectedTier("Growth")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="text-base font-medium text-gradient">
                      Growth
                    </span>
                    <h4 className="text-xl font-medium text-primary">
                      ${tierPrices["Growth"].toLocaleString()}
                    </h4>
                  </div>
                  <div
                    className={`rounded-lg border border-solid border-[#FF5E01] p-5 max-mobile:p-4 ${selectedTier === "Advanced" ? "bg-[#FFF5ED] border-[#FF5E01]" : "bg-white border-[#FFE4D0]"}`}
                    onClick={() => setSelectedTier("Advanced")}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="text-base font-medium text-gradient">
                      Advanced
                    </span>
                    <h4 className="text-xl font-medium text-primary">
                      ${tierPrices["Advanced"].toLocaleString()}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  variant="default"
                  size={"lg"}
                  className=" py-2.5 max-w-[300px] max-mobile:max-w-full w-full  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)] text-white  rounded-lg h-auto cursor-pointer font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                  onClick={() => scrollToWhiteLabelSection()}
                >
                  Continue (${tierPrices[selectedTier].toLocaleString()})
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="text-xl font-medium max-mobile:text-lg text-primary">
                  {tierDetails[selectedTier].title}
                </h3>
                <p className="text-gray-500 text-base mb-5">
                  {tierDetails[selectedTier].description}
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6 max-mobile:grid-cols-1 max-mobile:gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Delivery Time
                    </p>
                    <p className="text-base font-medium text-gradient">
                      {tierDetails[selectedTier].deliveryTime}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Outbound Calls
                    </p>
                    <p className="text-base font-medium text-gradient">
                      {tierDetails[selectedTier].outboundCalls}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Email Sends
                    </p>
                    <p className="text-base font-medium text-gradient">
                      {tierDetails[selectedTier].emailSends}
                    </p>
                  </div>
                  {tierDetails[selectedTier].scriptwriting && (
                    <div className="flex items-center justify-between">
                      <p className="text-base text-primary font-medium">
                        Scriptwriting
                      </p>

                      <Check className="text-orange w-4 h-4" />
                    </div>
                  )}
                  {(tierDetails[selectedTier] as any).SummaryReport && (
                    <div className="flex items-center justify-between">
                      <p className="text-base text-primary font-medium">
                        Summery Report
                      </p>

                      <Check className="text-orange w-4 h-4" />
                    </div>
                  )}
                  {(tierDetails[selectedTier] as any).leadList && (
                    <div className="flex items-center justify-between">
                      <p className="text-base text-primary font-medium">
                        Lead List
                      </p>

                      <Check className="text-orange w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-4 max-mobile:block flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary w-4 h-4" />
                  <span className="text-base text-primary">
                    {(() => {
                      const days = parseInt(tierDetails[selectedTier].days);
                      const date = new Date();
                      date.setDate(date.getDate() + days);
                      return `${tierDetails[selectedTier].days} - ${date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                    })()}
                  </span>
                </div>
                <p className="text-base max-mobile:pt-2 font-normal text-primary whitespace-pre-line">
                  {tierDetails[selectedTier].revisionNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="upwork-white-label-section"
        className="py-10 pb-24 max-mobile:pb-12 max-mobile:pt-0"
      >
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch max-mobile:grid-cols-1">
            <div className="flex flex-col justify-center ml-10 max-mobile:ml-0">
              <h2 className="heading3 text-primary mb-4">
                Launch your own{" "}
                <span className="text-[#FF9104]">
                  Upwork automation platform
                </span>{" "}
                — or transform internal workflow
              </h2>
              <p className="text-base text-grey-600 mb-4">
                White-label Upwork Agent with your own brand, domain, UI
                identity and pricing to offer an AI-powered Upwork automation
                system without development cost. Perfect for agencies,
                outsourcing firms, and business operators scaling revenue
                models.
              </p>
              <p className="text-lg font-semibold text-primary mb-6 max-mobile:text-base">
                White-label license available starting at $999 one-time.
              </p>
              <p className="text-xl text-primary max-mobile:text-base font-semibold">
                Your brand. Your platform. Your revenue. Our infrastructure.
              </p>
            </div>

            <div className="flex items-stretch justify-center">
              <div className="w-full max-mobile:rounded-lg max-w-xl bg-white shadow-lg rounded-2xl px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                <h3 className="text-2xl font-semibold max-mobile:text-xl text-primary mb-4">
                  Launch your white-label Upwork platform
                </h3>
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Full name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={leadForm.name}
                      onChange={handleLeadChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Email address <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={leadForm.email}
                      onChange={handleLeadChange}
                      placeholder="you@company.com"
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Company name <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      name="company"
                      value={leadForm.company}
                      onChange={handleLeadChange}
                      placeholder="Your company or agency"
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      I&apos;m interested in{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="interest"
                      value={leadForm.interest}
                      onChange={handleLeadChange}
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="Requesting a demo">
                        Requesting a demo
                      </option>
                      <option value="White-label solution">
                        White-label solution
                      </option>
                      <option value="Pricing information">
                        Pricing information
                      </option>
                      <option value="Questions">Other</option>
                    </select>
                  </div>
                  <div>
                    <div className="mt-2">
                      <label className="block text-xs font-medium text-grey-500 mb-1">
                        Phone number <span className="text-red-500">*</span>
                      </label>
                      <PhoneInput
                        international
                        defaultCountry="IN"
                        value={leadForm.phone}
                        onChange={(value) =>
                          setLeadForm((prev) => ({
                            ...prev,
                            phone: value || "",
                          }))
                        }
                        placeholder="+91 98765 43210"
                        className="w-full rounded-md text-sm  bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Additional details <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      name="message"
                      value={leadForm.message}
                      onChange={handleLeadChange}
                      rows={3}
                      placeholder="Share anything else that would help us prepare"
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white resize-none focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
                  </div>

                  {leadError && (
                    <p className="text-xs text-red-500">{leadError}</p>
                  )}
                  {leadSuccess && (
                    <p className="text-xs text-emerald-600">{leadSuccess}</p>
                  )}

                  <div className="flex flex-col gap-2 mt-4 sm:flex-row">
                    <button
                      type="submit"
                      disabled={leadSubmitting}
                      className="flex-1 py-2.5 cursor-pointer text-sm font-semibold rounded-full bg-primary-300 text-white border border-primary-300 hover:bg-transparent hover:text-primary-300 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {leadSubmitting ? "Sending..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UpworkAgentPage;
