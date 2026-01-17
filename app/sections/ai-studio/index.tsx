import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  BarChart3,
  FileText,
  Users,
  Eye,
  FolderOpen,
  Bell,
  Camera,
  Clock3,
  Palette,
  Layers,
  Calendar,
  MoveRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import StudioBanner from "/assets/images/ai-studio-banner.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import UploadIcon from "/assets/images/upload.svg";
import GenerateVariationIcon from "/assets/icons/generatevariation.svg";
import DownloadPublishIcon from "/assets/icons/downloadpublish.svg";
import ChooseSceneIcon from "/assets/icons/choosescene.svg";
import ProductionIcon from "/assets/images/production.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import LimitedVariationIcon from "/assets/icons/limitedvariation.svg";
import DependencyAgencyIcon from "/assets/icons/dependencyagency.svg";
import DifficultScaleIcon from "/assets/icons/difficultscale.svg";
import PhotographyCostIcon from "/assets/icons/photographycost.svg";
import VisualIdentityIcon from "/assets/icons/visualidentity.svg";
import SectionHeader from "~/components/ui/SectionHeader";
import { NavLink } from "react-router-dom";
import { sendAgentSlackMessage } from "~/api/slackMessageApi";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

// Reuse existing screenshots for now; can be swapped with AI Studio assets later
import Image1 from "/assets/images/ChooseYourStudio.png";
import Image2 from "/assets/images/SelectaCategory.png";
import Image3 from "/assets/images/BringYourProducttoLife.png";
import Image4 from "/assets/images/YourPhotoshoot&Generations.png";
import BannerImage from "/assets/images/AIStudioMain.png";
import { Button } from "~/components/ui/button";
import AutomateScheduling from "../hr-agent/automate-scheduling";
import { supabase } from "~/Supabase/supabaseClient";

const UploadProduct = "/assets/icons/Uploadproductimage.svg";
const ChooseScene = "/assets/icons/Choosescenemodel&style.svg";
const GenerateVisuals = "/assets/icons/Generatevariationsinstantly.svg";
const DownloadPublish = "/assets/icons/Download&publish.svg";

function AIStudioPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: Image1,
      description:
        "Pick between Photo Studio for AI photoshoots or Marketing Studio for posters and promotional creatives.",
    },
    {
      image: Image2,
      description:
        "Choose Fashion, Accessories or E-Commerce so AI builds visuals tailored to your product type.",
    },
    {
      image: Image3,
      description:
        "Upload clean product images, select apparel style and let AI generate a full high-fashion photoshoot.",
    },
    {
      image: Image4,
      description:
        "View, manage and download generations — launch new variations instantly from your favorites.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const painPoints = [
    {
      title: "High photography cost",
      description:
        "Expensive shoots, models, equipment and revisions drain marketing budgets.",
      icon: PhotographyCostIcon,
    },
    {
      title: "Long production timelines",
      description:
        "Weeks spent planning, shooting and editing mean campaigns fall behind schedule.",
      icon: ProductionIcon,
    },
    {
      title: "Inconsistent visual identity",
      description:
        "Every shoot looks different, making it difficult to maintain a cohesive brand look.",
      icon: VisualIdentityIcon,
    },
    {
      title: "Limited variations",
      description:
        "Hard to test multiple creative concepts and optimize performance across channels.",
      icon: LimitedVariationIcon,
    },
    {
      title: "Difficult to scale",
      description:
        "Each new product range requires new shoots, editing workflows and logistics.",
      icon: DifficultScaleIcon,
    },
    {
      title: "Dependency on agencies",
      description:
        "No control or instant iteration — delays from external teams impact sales cycles.",
      icon: DependencyAgencyIcon,
    },
  ];

  const workflowSteps = [
    {
      title: "Upload product image",
      description: "Start with a flat-lay, packshot or rendered model.",
      icon: UploadIcon,
    },
    {
      title: "Choose scene, model & style",
      description:
        "Select mood, setting, background, pose and lighting direction.",
      icon: ChooseSceneIcon,
    },
    {
      title: "Generate variations instantly",
      description:
        "Create multiple concepts and refine creative direction in seconds.",
      icon: GenerateVariationIcon,
    },
    {
      title: "Download & publish",
      description:
        "Export high-resolution visuals for ecommerce, ads and print.",
      icon: DownloadPublishIcon,
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

    const phoneRegex = /^[0-9]{10,12}$/;
    if (!phoneRegex.test(leadForm.phone.replace("+91", ""))) {
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
    //   `:art: *New AI Studio Inquiry*\n\n` +
    //   `*Name*: ${leadForm.name}\n` +
    //   `*Email*: ${leadForm.email}\n` +
    //   `*Phone*: ${leadForm.phone}\n` +
    //   (leadForm.company ? `*Company*: ${leadForm.company}\n` : "") +
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
          source: "AiStudio",
        });
      if (status == 201) {
        console.log("HRAgent lead form submitted successfully", data);
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
      console.error("AI Studio lead form error", err);
      setLeadError(
        "Something went wrong. Please try again or use the contact page."
      );
    } finally {
      setLeadSubmitting(false);
    }
  };

  const scrollToAiStudioFormSection = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("ai-studio-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <div className="pt-[154px] pb-[60px] bg-gradient-to-b from-[#D0E1FF] to-white">
        <div className="container-lg2">
          <div>
            <h2 className="heading3 text-primary mx-auto mb-5 text-center max-w-[800px]">
              Create stunning product visuals with{" "}
              <span className="text-gradient"> AI </span>— faster than
              photography
            </h2>
            <p className="text-lg text-grey-600 max-w-[986px] mx-auto text-center font-medium mb-5 max-mobile:text-base">
              Upwork Agent automates job discovery, proposal writing, and talent
              assignment — helping your team respond faster, submit smarter, and
              win more consistently.
            </p>
            <div className="grid grid-cols-1 gap-2.5  pb-10 max-mobile:pb-5">
              <div className="flex items-center gap-2 justify-center pb-1">
                <Check className="text-orange w-4 h-4" />
                <span className="text-base text-gray-500 font-medium">
                  Upload any product, choose a style — generate in seconds
                </span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Check className="text-orange w-4 h-4" />
                <span className="text-base text-gray-500 font-medium">
                  On-model fashion, lifestyle product shots & ad-ready creatives
                </span>
              </div>
            </div>
            <div className="flex justify-center gap-4 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
              <Button
                className="h-auto text-white text-base rounded-xl cursor-pointer py-2.5 px-6 "
                size="lg"
                variant="default"
                onClick={() =>
                  window.open("https://ai-studio.aiwalla.in/", "_blank")
                }
              >
                Get Started With AI Studio
                <MoveRight className="text-white w-5 h-5" />
              </Button>
              <Button
                className="h-auto text-white text-base rounded-xl cursor-pointer py-2.5 px-6 bg-gradient-to-b from-[#FF5E01] to-[#FF9404]"
                size="lg"
                variant="default"
                onClick={()=>window.open("https://calendly.com/devang225-rejoice/ai-automation", "_blank")}
              >
                Book a live demo
                <Calendar className="text-white w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container-lg2">
          <img
            src={StudioBanner}
            alt="StudioBanner"
            className="block max-w-[1362px] mx-auto max-tab:max-w-full max-mobile:rounded-lg"
          />
        </div>
      </div>

      {/* SECTION 2 — PAIN POINTS */}
      <section className=" py-20 max-mobile:py-12">
        <div className="container-lg2">
          <h2 className="heading2 text-primary text-center ">
            The <span className="text-gradient"> real challenges </span> brand
            teams face today
          </h2>
          <p className="text-lg text-grey-600 max-w-[986px] mx-auto text-center font-medium  max-mobile:text-base">
            Why traditional product photos slow growth
          </p>
          <div className="grid grid-cols-3 max-tab:grid-cols-2 pt-[60px] gap-6 max-tablet:grid-cols-1 max-mobile:grid-cols-1 ">
            {painPoints.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl border-solid border max-tab:p-4 max-mobile:rounded-lg border-[#FF5F011A] p-6 bg-[#FFF1E6]"
                >
                  <div className="flex items-center gap-4 max-mobile:block max-mobile:pb-2 pb-4">
                    <img
                      src={item.icon}
                      alt="ProductionIcon"
                      className="max-mobile:max-w-[60px]"
                    />
                    <h4 className="text-xl max-mobile:pt-3 text-primary font-semibold">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-lg max-mobile:text-base font-normal text-grey-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3 — DYNAMIC FEATURE VIEW */}
      <section className="px-10  max-mobile:pb-12 max-mobile:px-3">
        <div className="py-20 rounded-[30px] max-mobile:rounded-lg max-mobile:py-12 light-blue-line w-full bg-no-repeat bg-cover">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="heading3 text-primary text-center mb-2">
              What <span className="text-gradient">AI Studio</span> empowers you
              to do
            </h2>
            <p className="text-lg text-grey-600 max-mobile:text-base text-center mb-10">
              Choose your studio, set your category, upload your product and
              manage generations — all in one AI-powered workspace.
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
                      alt={`AI Studio slide ${index + 1}`}
                      className="w-full h-[520px] max-mobile:rounded-lg rounded-xl object-cover max-mobile:h-[240px]"
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

      <section className="py-20 max-mobile:pb-12 max-mobile:pt-0">
        <div className="">
          <div className="container-lg2">
            <div className="pb-[60px]">
              <span className="text-base block text-center pb-1 font-medium text-blue-100 max-mobile:pb-2 max-mobile:text-sm">
                How AI Studio works
              </span>
              <h2 className="heading3 text-center mb-3 text-primary">
                Create{" "}
                <span className=" text-gradient"> production-ready </span>{" "}
                visuals in minutes
              </h2>
              <p className="text-lg text-grey-600 max-w-[800px] mx-auto text-center max-mobile:text-base">
                Move from slow photoshoots to instant AI-generated visuals
                across every channel.
              </p>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-4 max-mobile:gap-8 max-tab:grid-cols-2 gap-10 max-mobile:grid-cols-1">
                {workflowSteps.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[16px] px-5 pb-5 pt-[50px] border border-[#FF5F011A] bg-gradient-to-r from-[rgba(255,93,1,0.10)] to-[rgba(255,149,4,0.10)] relative"
                  >
                    <div className="absolute top-[-20px] left-[-20px] max-tab:left-0">
                      <img
                        src={item.icon}
                        className="max-w-[60px] block"
                        alt="UploadIcon"
                      />
                    </div>
                    <span className="absolute top-2 right-3 counter">
                      {index + 1}
                    </span>

                    <div className="">
                      <h3 className="text-xl relative max-mobile:text-xl font-medium text-left text-primary mb-2.5">
                        {item.title}
                      </h3>
                      <div className="relative">
                        <p className="text-base text-[#535862] max-mobile:text-base text-left">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 max-tab:px-5  max-mobile:pb-12 max-mobile:px-3">
        <div className="blue-line-bg rounded-[30px] py-20 max-mobile:rounded-lg max-mobile:py-12">
          <div className="container-lg2">
            <SectionHeader
              titleClassName="text-white"
              headingClassName="text-white"
              subtitleClassName="text-white"
              badge="Subscription plans & credits"
              title="Flexible pricing built for creative scale"
              subtitle="Choose a subscription for consistent production, and top up credits whenever you need extra capacity."
              variant="amber"
            />
            <div className="max-w-7xl mx-auto mt-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-6">
                {/* Monthly */}
                <div className="bg-primary-100 rounded-[20px] border border-primary-200 p-[30px] max-mobile:p-4 max-mobile:rounded-lg">
                  <p className="text-xl text-white font-medium mb-2">Monthly</p>

                  <h3 className="text-2xl text-white font-semibold mb-1">
                    ₹1,200{" "}
                    <span className="text-base font-normal">/ month</span>
                  </h3>

                  <p className="text-white text-base my-2 font-normal">
                    1,200 credits / month
                  </p>

                  <p className="text-base text-white opacity-80 leading-relaxed">
                    Full access to all tools with priority support. Best for
                    creators and growing teams.
                  </p>
                </div>

                {/* Yearly - Recommended */}
                <div className="relative bg-primary-100 rounded-[20px] border border-primary-200 p-[30px] max-mobile:p-4 max-mobile:rounded-lg">
                  <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Recommended
                  </span>

                  <p className="text-xl text-white font-medium mb-2">Yearly</p>

                  <h3 className="text-2xl text-white font-semibold mb-1">
                    ₹12,000{" "}
                    <span className="text-base font-normal">/ year</span>
                  </h3>

                  <p className="text-white text-base my-2 font-normal">
                    12,000 credits / year
                  </p>

                  <p className="text-base text-white opacity-80 leading-relaxed">
                    Save 20%, unlock full access and priority support. Ideal for
                    power users and agencies.
                  </p>
                </div>

                {/* Extra Capacity */}
                <div className="bg-primary-100 max-tab:col-span-2 max-mobile:col-span-1 rounded-[20px] border border-primary-200 p-[30px] max-mobile:p-4 max-mobile:rounded-lg">
                  <p className="text-xl text-white font-medium mb-2">
                    Need extra capacity?
                  </p>

                  <p className="text-base text-white opacity-80 leading-relaxed">
                    Top up anytime with 500 / 1000 / 2500 credits and scale
                    instantly.
                    <br />
                    <br />
                    Credits never expire while your subscription is active, so
                    you can ramp campaigns up without waste.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — FINAL CTA WITH FORM */}
      <section
        id="ai-studio-form-section"
        className="py-10 pb-24 max-mobile:pb-12 max-mobile:pt-0"
      >
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch max-mobile:px-0 max-mobile:grid-cols-1 p-[30px] max-mobile:rounded-lg max-mobile:p-5 max-tablet:flex-col max-tablet:items-start">
            <div className="flex flex-col justify-center">
              <h2 className="heading3 text-primary mb-3">
                Ready to create stunning{" "}
                <span className="text-gradient">visuals with AI</span>?
              </h2>
              <p className="text-lg text-primary max-mobile:text-base mb-3">
                Produce premium, campaign-ready visuals in minutes — not weeks.
                Replace complex photoshoots with an AI-powered studio your whole
                team can use.
              </p>
              <p className="text-xl text-primary max-mobile:text-base font-semibold">
                Your brand. Your platform. Your revenue. Our infrastructure.
              </p>
            </div>

            <div className="flex items-stretch justify-center">
              <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl  max-mobile:rounded-e-lg px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                <h3 className="text-2xl max-mobile:text-lg font-semibold text-primary mb-4">
                  Share your AI Studio requirements
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
                      Brand or company name{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={leadForm.company}
                      onChange={handleLeadChange}
                      placeholder="Your brand or company"
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
                      <option value="Subscription plans">
                        Subscription plans
                      </option>
                      <option value="Custom AI Studio use case">
                        Custom AI Studio use case
                      </option>
                      <option value="Questions">Other</option>
                    </select>
                  </div>
                  <div>
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
                      placeholder="Share your products, channels or goals so we can tailor the demo"
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

export default AIStudioPage;
