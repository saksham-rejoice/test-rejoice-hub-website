import React, { useEffect, useState } from "react";
import BannerImage from "../../../../public/assets/images/CallIntelMain (2).png";
import Image1 from "/assets/images/CreateAIAgent (3).png";
import Image2 from "/assets/images/CreateAIAgent(2).png";
import Image3 from "/assets/images/AddVirtualNumbers (2).png";
import Image4 from "/assets/images/LaunchBatchCallCampaign (2).png";
import Image5 from "/assets/images/MonitorCalls (2).png";
import Image6 from "/assets/images/CallIntelMain (2).png";
import PhoneInput from "react-phone-number-input";
import CallAgentBannerImage from "/assets/images/call-agent-banner.png";
import VoiceIcon from "/assets/images/voice-agent.svg";
import virtualNumbersIcon from "/assets/icons/virtualNumbers.svg";
import voiceEngineIcon from "/assets/icons/voiceEngine.svg";
import callHistoryIcon from "/assets/icons/callHistory.svg";
import adminBillingIcon from "/assets/icons/adminBilling.svg";
import knowledgeBaseIcon from "/assets/icons/knowledgeBase.svg";
import gradientedborder from "/assets/images/gradientedborder.png";
import gradientedborder2 from "/assets/images/gradientedborder2.png";
import UserIcon from "/assets/images/user-list.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import VecIcon from "/assets/images/vec.png";
import Icon1 from "/assets/icons/01.svg";
import Icon2 from "/assets/icons/02.svg";
import Icon3 from "/assets/icons/03.svg";
import Icon4 from "/assets/icons/04.svg";

import "react-phone-number-input/style.css";
import {
  ArrowRight,
  Bot,
  Check,
  PhoneCall,
  BarChart3,
  FileText,
  Globe2,
  CreditCard,
  MoveRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import SectionHeader from "~/components/ui/SectionHeader";
import { NavLink } from "react-router-dom";
import { sendAgentSlackMessage } from "~/api/slackMessageApi";
import { Button } from "~/components/ui/button";
import AutomateScheduling from "~/sections/hr-agent/automate-scheduling";
import { supabase } from "~/Supabase/supabaseClient";

const Uploadcontactlist = "/assets/icons/Uploadcontactlist.svg";
const Configureagent = "/assets/images/configureagent.svg";
const Launchcampaign = "/assets/images/launchcalling.svg";
const Reviewperformance = "/assets/images/reviewperformance.svg";

export default function CallAgentBanner() {
  const slides = [
    {
      image: Image1,
      description:
        "AI agents configured to speak naturally in your brand tone, language & style.",
    },
    {
      image: Image2,
      description:
        "Instant knowledge reference from docs or URLs to deliver accurate contextual responses.",
    },
    {
      image: Image3,
      description:
        "Upload lists, schedule call sequences, and run thousands of calls simultaneously.",
    },
    {
      image: Image4,
      description:
        "Searchable transcripts, recordings & insights to evaluate and improve call outcomes. ",
    },
    {
      image: Image5,
      description:
        "Assign regional caller IDs to increase call connection rates and track number-level performance.",
    },
    {
      image: Image6,
      description:
        "Centralized control for teams, credits, usage reports and white-label commercial models.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const features = [
    {
      title: "AI Voice Agents",
      description:
        "Deploy human-like AI callers that handle inbound & outbound conversations at scale.",
      icon: VoiceIcon,
    },
    {
      title: "Batch Calling Engine",
      description:
        "Automate high-volume calling campaigns by uploading contact lists and scheduling runs.",
      icon: voiceEngineIcon,
    },
    {
      title: "Call History & Analytics ",
      description:
        "Access call transcripts, recordings & performance metrics inside a centralized dashboard.",
      icon: callHistoryIcon,
    },
    {
      title: "Knowledge Bases",
      description:
        "Train agents using documents or URLs to maintain accurate and brand-aligned responses. ",
      icon: knowledgeBaseIcon,
    },
    {
      title: "Virtual Numbers",
      description:
        "Add and manage multiple phone numbers to improve pickup rates and campaign performance. ",
      icon: virtualNumbersIcon,
    },
    {
      title: "Admin & Billing",
      description:
        "Manage usage credits, permissions and billing across teams or organizations.  ",
      icon: adminBillingIcon,
    },
  ];

  const useCases = [
    {
      title: "Upload contact list",
      description: "Import CSV / Excel and prepare for campaign instantly.",
      icon: UserIcon,
      subicon: Icon1,
    },
    {
      title: "Configure agent & call flow",
      description: "Select voice type, knowledge & conversation logic.",
      icon: Configureagent,
      subicon: Icon2,
    },
    {
      title: "Launch calling campaigns",
      description: "AI handles calls automatically at scale.",
      icon: Launchcampaign,
      subicon: Icon3,
    },
    {
      title: "Review performance & outcomes",
      description: "Monitor transcripts, analytics & conversion trends.",
      icon: Reviewperformance,
      subicon: Icon4,
    },
  ];

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
      !leadForm.message
    ) {
      setLeadError("Please fill in all required fields.");
      return;
    }

    const phoneRegex =
      /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,3}[-\s\.]?[0-9]{4,10}$/;
    if (!phoneRegex.test(leadForm.phone)) {
      setLeadError("Please enter a valid phone number");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadForm.email)) {
      setLeadError("Please enter a valid email address");
      return;
    }

    setLeadError("");
    setLeadSuccess("");
    setLeadSubmitting(true);

    // const text =
    //   `:telephone_receiver: *New CallIntel White-label Inquiry*\n\n` +
    //   `*Name*: ${leadForm.name}\n` +
    //   `*Email*: ${leadForm.email}\n` +
    //   `*Phone*: ${leadForm.phone}\n` +
    //   (leadForm.company ? `*Company*: ${leadForm.company}\n` : "") +
    //   (leadForm.interest ? `*Interested in*: ${leadForm.interest}\n` : "") +
    //   `*Message*: ${leadForm.message}`;

    try {
      const { error, status, data } = await supabase
        .from("rejoice_hub_contact_us_form")
        .insert({
          name: leadForm.name,
          email: leadForm.email,
          phone: leadForm.phone,
          company: leadForm.company,
          interest: leadForm.interest,
          message: leadForm.message,
          source: "HRAgent",
        });
      if (status == 201) {
        console.log("HRAgent lead form submitted successfully", data);
        setLeadSuccess(
          "Thanks! We've received your details and will reach out shortly."
        );
      }
      //await sendAgentSlackMessage({ text });
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
      console.error("CallIntel lead form error", err);
      setLeadError(
        "Something went wrong. Please try again or use the contact page."
      );
    } finally {
      setLeadSubmitting(false);
    }
  };

  const scrollToWhiteLabelSection = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("callintel-white-label-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="pt-[154px] pb-[60px] bg-gradient-to-b from-[#D0E1FF] to-white">
        <div className="container-lg2">
          <div>
            <h2 className="heading3 text-primary text-center mb-5">
              Close more deals with{" "}
              <span className=" text-gradient">AI-powered</span> calling
            </h2>
            <p className="text-lg text-grey-600 max-w-[986px] mx-auto text-center font-medium mb-5 max-mobile:text-base">
              CallIntel handles inbound and outbound calls with intelligent AI
              agents, qualifies leads 24/7, and gives you real-time visibility
              into every conversation — without adding more headcount.
            </p>
            <div className="flex items-center justify-center gap-2.5  pb-10 max-mobile:pb-5 max-mobile:grid max-mobile:grid-cols-1 max-tab:pga-3">
              <div className="flex items-center gap-2 justify-center pb-1">
                <Check className="text-orange w-4 h-4" />
                <span className="text-base max-mobile:text-sm text-gray-500 font-medium">
                  Human-like AI voice agents
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="text-orange w-4 h-4" />
                <span className="text-base max-mobile:text-sm text-gray-500 font-medium">
                  Automated inbound & outbound calling at scale
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 max-mobile:grid max-mobile:gap-3 max-mobile:grid-cols-1">
              <Button
                className="h-auto text-white text-base rounded-xl cursor-pointer py-2.5 px-6 "
                size="lg"
                variant="default"
                onClick={() => window.open("https://callintel.io/", "_blank")}
              >
                Get started with CallIntel
                <MoveRight className="text-white w-5 h-5" />
              </Button>
              <Button
                className="h-auto text-white text-base rounded-xl cursor-pointer py-2.5 px-6 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]"
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
      <div>
        <div className="">
          <div className="container-lg2">
            <img
              src={CallAgentBannerImage}
              alt="CallAgentBannerImage"
              className="block max-w-[1362px] max-tab:max-w-full mx-auto w-full"
            />
          </div>
        </div>
      </div>

      <section className="py-20 max-mobile:py-12">
        <div className="container-lg2">
          <h2 className="heading3 text-primary text-center mb-2">
            CallIntel <span className="text-[#FF9104]"> platform </span> suite
          </h2>
          <p className="text-lg text-grey-600 mb-0 text-center max-mobile:text-base">
            Everything you need to run AI-powered calling at scale.
          </p>
          <div className="grid grid-cols-3 max-tab:grid-cols-1 gap-5 pt-[60px] max-tablet:grid-cols-1 max-mobile:grid-cols-1">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white  overflow-hidden border-solid border-orange-border border rounded-xl"
                >
                  <div className="card-header-design flex items-center gap-2 py-4 max-mobile:py-3 px-6">
                    <img
                      className="max-w-[80px] max-mobile:max-w-[50px]"
                      src={Icon}
                      alt="VoiceIcon"
                    />
                    <h3 className="text-xl max-mobile:text-base  font-semibold text-primary ">
                      {feature.title}
                    </h3>
                  </div>
                  <div className="max-w-[388px] mx-auto text-center pt-3 pb-5">
                    <p className="text-lg max-mobile:text-sm  text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="px-10 pb-20 max-mobile:pb-12 max-mobile:pt-0 max-mobile:px-3">
        <div className="py-20 max-mobile:py-12 light-blue-line w-full bg-no-repeat bg-cover rounded-[30px] max-mobile:rounded-lg">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="heading3 text-primary text-center mb-2">
              What <span className="text-gradient"> CallIntel </span> Enables
            </h2>
            <p className="text-lg text-grey-600 max-mobile:text-base text-center mb-10">
              All core components—AI Agents, campaigns, analytics, telephony &
              billing—managed in one dashboard to eliminate tool fragmentation.
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
                  <SwiperSlide key={index}>
                    <img
                      src={slide.image}
                      alt={`CallIntel slide ${index + 1}`}
                      className="w-full h-[520px] max-mobile:rounded-lg rounded-xl object-cover max-mobile:h-[190px]"
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
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="blue-line-bg  py-20 max-mobile:py-12">
          <div className="container-lg2">
            <div className="text-center ">
              <SectionHeader
                badge="Calling with CallIntel"
                headingClassName="text-white"
                titleClassName="text-white"
                subtitleClassName="text-white"
                title=" How CallIntel works"
                subtitle="Let AI handle calls at scale while you focus on results, insights and decisions."
                variant="amber"
              />
              <div className="grid grid-cols-4 max-tab:grid-cols-1 gap-[50px] max-mobile:grid-cols-1">
                {useCases.map((item, index) => (
                  <div className="relative" key={index}>
                    <div className="bg-white h-full rounded-xl relative z-[1] pt-10 pb-20 px-6">
                      {/* <div className="absolute  right-[-15px] w-[48px] h-[42px] bg-[#0b2b6b] rounded-l-full"></div>
                      <div className="absolute bottom-[-15px]  left-[15%] rotate-[90deg] w-[48px] h-[42px] bg-[#0b2b6b] rounded-l-full"></div> */}
                      <img
                        src={item.icon}
                        className="block "
                        alt="CallIntel Icon"
                      />
                      <div className="pt-5 max-mobile:pt-4">
                        <h3 className="text-xl relative max-mobile:text-xl font-medium text-left text-primary mb-2.5">
                          {item.title}
                        </h3>
                        <div className="relative">
                          <p className="text-base text-gray-500 max-mobile:text-base text-left">
                            {item.description}
                          </p>
                        </div>
                        <span className="text-gradient text-4xl font-semibold block text-right absolute right-5 bottom-5">
                          <img src={item.subicon} alt="" />
                        </span>
                      </div>
                    </div>
                    {/* <img
                      src={gradientedborder}
                      alt="gradientedborder"
                      className="absolute z-20 -bottom-[44px] -right-[37px] w-[283px] h-[calc(100%-16px)]"
                    /> */}
                    {/* <img
                      src={gradientedborder}
                      alt="gradientedborder"
                      className="absolute z-[2] bottom-[-14%]  left-[22%] w-[calc(100%-10%)] h-[calc(100%-16px)]"
                    /> */}
                    <img
                      src={gradientedborder2}
                      alt="gradientedborder2"
                      className="absolute z-[2] -bottom-[10%] -right-[10%] max-tab:-right-[4%] max-tab:-bottom-[12%] max-mobile:-right-[25px] max-mobile:-bottom-[15px] max-tab:w-[calc(100%-70vw)] max-mobile:w-[calc(100%-50%)] w-[calc(100%-10%)]"
                    />
                    {/* <img
                      src={gradientedborder}
                      alt="gradientedborder"
                      className="absolute z-[2] top-[60px] left-[68px] w-[calc(100%-32px)] h-[calc(100%-18px)] "
                    /> */}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" pt-20 max-mobile:py-12">
        <div className="container-lg">
          <SectionHeader
            badge="Start small"
            title="Start with the capacity you need — scale as you grow"
            subtitle="Every credit equals 1 real minute of calling time. Choose the monthly volume that fits your current workload and expand seamlessly as demand increases."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 max-w-7xl gap-6 mx-auto w-full max-tablet:grid-cols-1">
            {/* Box 1 */}
            <div className="card-line rounded-xl p-6">
              <h6 className="text-base font-semibold text-primary mb-3">
                Starter
              </h6>
              <h3 className="text-2xl font-semibold text-[#FF9404] mb-3">
                100 credits / month
              </h3>
              <p className="text-base text-primary">
                Suitable for testing and light call activity
              </p>
            </div>

            {/* Box 2 */}
            <div className="card-line rounded-xl p-6">
              <h6 className="text-base font-semibold text-primary mb-3">
                Professional
              </h6>
              <h3 className="text-2xl font-semibold text-[#FF9404] mb-3">
                500 credits / month
              </h3>
              <p className="text-base text-primary">
                Best for consistent daily campaigning
              </p>
            </div>

            {/* Box 3 */}
            <div className="card-line rounded-xl p-6 relative">
              <span className="absolute top-4 right-4 inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-[#FF9404] text-white">
                Popular
              </span>
              <h6 className="text-base font-semibold text-primary mb-3">
                Enterprise
              </h6>
              <h3 className="text-2xl font-semibold text-[#FF9404] mb-3">
                1,000+ credits / month
              </h3>
              <p className="text-base text-primary">
                Built for high-volume teams and large deployments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Combined White-label + CTA Section */}
      <section
        id="callintel-white-label-section"
        className="py-10 pb-24 max-mobile:py-1"
      >
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch max-mobile:grid-cols-1 p-[30px] max-mobile:rounded-lg max-mobile:p-5  max-tablet:flex-col max-mobile:px-0 max-tablet:items-start">
            <div className="flex flex-col justify-center">
              <h2 className="heading3 text-primary mb-3">
                Build your own AI calling platform{" "}
                <span className="text-gradient">powered by CallIntel</span>
              </h2>
              <p className="text-lg text-primary max-mobile:text-base mb-3">
                White-label CallIntel with your own brand, domain, pricing and
                customer experience. Launch a revenue-generating AI calling
                platform without building infrastructure from scratch.
              </p>
              <p className="text-xl text-primary max-mobile:text-sm font-semibold">
                Your brand. Your platform. Your revenue. Our infrastructure.
              </p>
            </div>

            <div className="flex items-stretch justify-center">
              <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                <h3 className="text-2xl max-mobile:text-lg font-semibold text-primary mb-4">
                  Launch your CallIntel white-label platform
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
                      I'm interested in <span className="text-red-500">*</span>
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
                  <div className="mt-2">
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Phone number <span className="text-red-500">*</span>
                    </label>
                    <PhoneInput
                      international
                      defaultCountry="IN"
                      value={leadForm.phone}
                      onChange={(value) =>
                        setLeadForm((prev) => ({ ...prev, phone: value || "" }))
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-md text-sm  bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
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
