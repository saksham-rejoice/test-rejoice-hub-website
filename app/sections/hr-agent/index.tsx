import React, { useEffect, useState } from "react";

import {
  Check,
  Users,
  ListChecks,
  FileText,
  FolderOpen,
  Clock3,
  Settings,
  ClipboardCheck,
  BarChart3,
  UserPlus,
  Clock,
} from "lucide-react";
import TopLineImage from "/assets/images/top-line.png";
import BottomLineImage from "/assets/images/bottom-line.png";
import SectionHeader from "~/components/ui/SectionHeader";
import { NavLink } from "react-router-dom";
import Image1 from "/assets/images/End-to-endrecruitmentpipeline.png";
import Image2 from "/assets/images/Automatedtestevaluation.png";
import Image3 from "/assets/images/Automatednotifications.png";
import Image4 from "/assets/images/Documentverification&onboarding.png";
import Image5 from "/assets/images/HROperationsDashboard.png";
import Image6 from "/assets/images/Completeemployeelifecycle records.png";
import BannerImage from "/assets/images/HRAgentMain.png";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Setuproles = "/assets/icons/Setuprolesstagesandjobposts.svg";
const Screenandtest = "/assets/icons/scoreautomatically.svg";
const Movecandidates =
  "/assets/icons/Movecandidatesthroughthepipelineandonboard.svg";
const RunHRoperations =
  "/assets/icons/RunHRoperationsandreportingfromoneplace.svg";

// Import Slack message function
import { sendAgentSlackMessage } from "~/api/slackMessageApi";
import AgentHerobanner from "./agent-herobanner";
import BenefitsHrAgent from "./benefits-hr-agent";
import OurComprehensive from "./our-comprehensive";
import OurhrAgentSolutions from "./our-hr-agent-solutions";
import HrAgentWork from "./hr-agent-work";
import WhyChoosehrAgent from "./why-choose-hr-agent";
import AutomateScheduling from "./automate-scheduling";
import { Button } from "~/components/ui/button";
import { supabase } from "~/Supabase/supabaseClient";

function HRAgentPage() {
  // Form state
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
    //   `:briefcase: *New HR Agent Inquiry*\n\n` +
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
          source: "HRAgent",
        });
      if (status == 201) {
        console.log("HRAgent lead form submitted successfully", data);
        setLeadSuccess(
          "Thanks! We've received your details and will reach out shortly."
        );
      }
      setLeadForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        interest: "",
        message: "",
      });
    } catch (err) {
      console.error("HR Agent lead form error", err);
      setLeadError(
        "Something went wrong. Please try again or use the contact page."
      );
    } finally {
      setLeadSubmitting(false);
    }
  };

  const scrollToFormSection = () => {
    if (typeof document === "undefined") return;
    const el = document.getElementById("hr-agent-form-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const slides = [
    {
      image: Image1,
      description:
        "Move candidates across stages (Screening → Tests → Offer → Onboarding → Hired) in a Kanban workflow with status tracking.",
    },
    {
      image: Image2,
      description:
        "LLM-based scoring system for theory & practical tests to enable objective comparison.",
    },
    {
      image: Image3,
      description:
        "Email & Slack alerts trigger when candidates move stages or require action — reducing drop-offs.",
    },
    {
      image: Image4,
      description:
        "Upload, verify & approve candidate documents, generate offer letters & complete onboarding steps.",
    },
    {
      image: Image5,
      description:
        "Manage leave, attendance, salary structure, departments, job roles & activity logs from one system.",
    },
    {
      image: Image6,
      description:
        "Store employee profiles, history, documents & status after conversion from candidate to employee.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const painPoints = [
    {
      title: "Manual screening slows hiring",
      description: "HR teams spend hours filtering resumes & reviewing tests.",
      icon: FileText,
    },
    {
      title: "No visibility across hiring pipeline",
      description: "Multiple tools & spreadsheets create confusion.",
      icon: ListChecks,
    },
    {
      title: "Inconsistent evaluation",
      description: "Candidate scoring varies based on reviewer.",
      icon: Users,
    },
    {
      title: "Drop-offs & delays",
      description: "Follow-ups, reminders & coordination consume time.",
      icon: Clock3,
    },
    {
      title: "Scattered documents",
      description: "Contracts, proofs & compliance are hard to manage.",
      icon: FolderOpen,
    },
    {
      title: "Onboarding is disorganized",
      description: "Moving candidates to employees has too many manual steps.",
      icon: Users,
    },
  ];
  const workflowSteps = [
    {
      title: "Set up roles & job posts",
      description:
        "Configure stages and publish job posts directly into the Kanban pipeline.",
      icon: Setuproles,
    },
    {
      title: "Screen & score automatically",
      description:
        "AI-scored tests and evaluations with instant timelines & alerts.",
      icon: Screenandtest,
    },
    {
      title: "Move candidates & onboard",
      description:
        "Drag cards across stages, shortlist fast & convert to employees in one flow.",
      icon: Movecandidates,
    },
    {
      title: "Run HR operations & reporting",
      description:
        "Manage attendance, cases, documents & compliance from one dashboard.",
      icon: RunHRoperations,
    },
  ];

  const planPoints = [
    {
      title: "Recruitment-only setup",
      description:
        "Use just the Kanban workflow, AI scoring and communication automation to fix hiring first.",
    },
    {
      title: "Full HR operations",
      description:
        "Add HR Operations table, Employee Directory, Attendance and SOP modules when you’re ready.",
    },
    {
      title: "Organization-based licensing",
      description:
        "Configure by organization, locations and teams, with role-based access for HR and admins.",
    },
  ];

  return (
    <div>
      <AgentHerobanner
        scrolldown={() =>
          window.open(
            "https://calendly.com/devang225-rejoice/ai-automation",
            "_blank"
          )
        }
      />
      <BenefitsHrAgent />
      <OurComprehensive />
      <OurhrAgentSolutions />
      <HrAgentWork />
      <WhyChoosehrAgent />
      {/* <div className="pb-12">
       <div className="pb-[60px]">
          <h2 className="heading3 text-primary text-center">
            You will get Call AI Agent –{" "}
            <span className="text-gradient">Automate Scheduling,</span>
          </h2>
        </div>
        <div className="bg-gradient-to-r from-[rgba(255,93,1,0.1)] to-[rgba(255,149,4,0.1)]  p-5 rounded-xl container-lg2">
          <div className="grid grid-cols-2 gap-5">
            <div className="">
              <div className="pr-5 border-r border-solid border-[#FF5F011A]">
                <div className="flex pb-6 items-center justify-between">
                  <h3 className="text-xl text-primary font-medium">
                    Select service tier
                  </h3>
                  <span className="text-gradient text-lg">Compare tiers</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                  <div className="rounded-lg border border-solid border-[#FF5E01] p-5 bg-white">
                    <span className="text-base font-medium text-gradient">
                      Starter
                    </span>
                    <h4 className="text-xl font-medium text-primary">$1,800</h4>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Button
                  variant="default"
                  size={"lg"}
                  className=" py-2.5 max-w-[300px] w-full  bg-[linear-gradient(180deg,_#FF5E01_0%,_#FF9404_100%)] text-white  rounded-lg h-auto cursor-pointer font-medium text-sm focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                >
                  Continue ($1,800)
                </Button>
              </div>
            </div>
            <div>
              <div className="bg-white rounded-lg p-5">
                <h3 className="text-xl font-medium text-primary">
                  Starter Automation
                </h3>
                <p className=" text-gray-500 text-base mb-5">
                  AI Agent setup for scheduling calls for 1 calendar or platform
                </p>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Delivery Time
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Outbound Calls
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Number of Email Sends
                    </p>
                    <p className="text-base font-medium text-gradient">
                      2 days
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-base text-primary font-medium">
                      Scriptwriting
                    </p>
                    <Check className="text-orange w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="text-primary w-4 h-4" />
                  <span className="text-base text-primary">
                    2 days delivery
                  </span>
                </div>
                <p className="text-base font-normal text-primary">
                  Revisions may occur after this date.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div> */}
      <section id="hr-agent-form-section" className=" pb-24 max-mobile:pb-12">
        <div className="container-lg">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch max-mobile:grid-cols-1 p-[30px] max-mobile:rounded-lg max-mobile:p-5 max-mobile:px-0 max-tablet:flex-col max-tablet:items-start">
            <div className="flex flex-col justify-center">
              <h2 className="heading3 text-primary mb-3 ">
                Ready to transform your{" "}
                <span className="text-gradient">HR operations with AI</span>?
              </h2>
              <p className="text-lg text-primary max-mobile:text-base mb-3">
                Streamline recruitment, onboarding, and HR management with an
                intelligent system that grows with your team.
              </p>
              <ul className="list-disc list-inside text-primary max-mobile:text-base mb-6 space-y-1 pl-4 max-mobile:mb-4 max-mobile:pl-0">
                <li>Your domain, logo and brand identity</li>
                <li>Dedicated organizations and HR teams for each client</li>
                <li>
                  Central infrastructure, reporting and support managed by you
                </li>
              </ul>
              <p className="text-xl text-primary max-mobile:text-base font-semibold">
                Your brand. Your platform. Your revenue. Our infrastructure.
              </p>
            </div>

            <div className="flex items-stretch justify-center">
              <div className="w-full max-w-xl bg-white max-mobile:rounded-lg shadow-lg rounded-2xl px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                <h3 className="text-2xl max-mobile:text-xl font-semibold text-primary mb-4">
                  Share your HR automation needs
                </h3>
                <form onSubmit={handleLeadSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      Full name
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
                      Email address
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
                      placeholder="Your company name"
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-grey-500 mb-1">
                      I'm interested in
                    </label>
                    <select
                      name="interest"
                      value={leadForm.interest}
                      onChange={handleLeadChange}
                      className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                    >
                      <option value="" disabled>
                        Select an option
                      </option>
                      <option value="White-label Partnership">
                        White-label Partnership
                      </option>
                      <option value="Reseller Program">Reseller Program</option>
                      <option value="Enterprise Solution">
                        Enterprise Solution
                      </option>
                      <option value="Custom Development">
                        Custom Development
                      </option>
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
                      How can we help?
                    </label>
                    <textarea
                      name="message"
                      value={leadForm.message}
                      onChange={handleLeadChange}
                      rows={3}
                      placeholder="Tell us about your HR challenges and requirements"
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
                      className="py-2.5 px-6 cursor-pointer text-sm font-semibold text-white bg-primary-300 rounded-full border border-primary-300 hover:bg-transparent hover:text-primary-300 transition-colors duration-300 disabled:opacity-70 flex-1 flex items-center justify-center"
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
      {/* <AutomateScheduling /> */}
      {/* <div className="pt-[160px] pb-20 bg-light">
                <div className="container-lg">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center max-w-[1300px] mx-auto gap-16 max-tablet:grid-cols-1">
                        <div>
                            <h2 className="heading3 text-primary text-left mb-5">
                                Automate <span className='text-gradient'>recruitment, onboarding &amp; HR operations</span> in one platform
                            </h2>
                            <p className="text-lg text-grey-600 font-medium mb-5 max-mobile:text-base">
                                HR Agent streamlines candidate screening, assessment scoring, onboarding, and employee
                                lifecycle management — replacing spreadsheets and manual effort with an intelligent,
                                end-to-end system.
                            </p>
                            <div className="flex items-center gap-2 pb-3">
                                <Check className="text-orange" />
                                <span className="text-base text-gray-500 font-medium">
                                    Complete hiring pipeline
                                </span>
                            </div>
                            <div className="flex items-center gap-2 pb-3">
                                <Check className="text-orange" />
                                <span className="text-base text-gray-500 font-medium">
                                    Centralized HR operations &amp; employee management
                                </span>
                            </div>
                            <div className="flex items-center pt-4 gap-3 max-mobile:grid max-mobile:grid-cols-1 max-mobile:gap-3">
                               
                                <a
                                    href="#hr-agent-form-section"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        scrollToFormSection();
                                    }}
                                    aria-label="Book a demo"
                                    className="py-2.5 flex max-mobile:justify-center items-center gap-1 px-6 cursor-pointer text-base font-semibold text-orange tracking-[0.4px] rounded-full bg-white border border-solid border-orange hover:bg-transparent hover:text-orange transition ease-in-out duration-300"
                                >
                                    Book a demo
                                </a>
                            </div>
                        </div>

                        <div>
                            <img
                                src={BannerImage}
                                alt="BannerImage"
                                className="block w-full h-[320px] rounded-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <section className="bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
                <div className="absolute top-0 leading-0 w-full z-[-1]">
                    <img className="block" src={TopLineImage} alt="TopLineImage" />
                </div>
                <div className="absolute bottom-0 leading-0 w-full z-[-1]">
                    <img className="block" src={BottomLineImage} alt="BottomLineImage" />
                </div>
                <div className="container-lg">
                    <h2 className="heading2 text-primary text-center mb-2">
                        The real challenges teams face without <span className="text-[#FF9104]">HR Agent</span>
                    </h2>
                    <div className="grid grid-cols-3 gap-4 max-tablet:grid-cols-1 max-mobile:grid-cols-1 mt-10">
                        {painPoints.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="relative px-4 py-6 bg-white rounded-md overflow-hidden"
                                >
                                    <div className="border-solid border-orange-border border rounded-md p-3">
                                        <div className="w-[48px] h-[48px] flex items-center justify-center border-solid rounded-md border-orange-border border ">
                                            <Icon className="text-orange" />
                                        </div>
                                        <h3 className="text-xl max-mobile:text-xl font-semibold text-primary mt-4 mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-base max-mobile:text-sm text-gray-600 min-h-[50px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 max-mobile:py-12">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="heading3 text-primary text-center mb-6">
                        What <span className="text-[#FF9104]">HR Agent</span> enables
                    </h2>
                    <p className="text-lg text-grey-600 max-mobile:text-base text-center mb-10">
                        Short, outcome-focused capabilities designed to replace manual HR effort with a single,
                        intelligent system.
                    </p>

                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl border border-solid border-border-color3 bg-white">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div
                                        key={index}
                                        className="min-w-full flex-shrink-0 flex flex-col items-stretch"
                                    >
                                        <img
                                            src={slide.image}
                                            alt={`HR Agent slide ${index + 1}`}
                                            className="w-full h-[520px] max-mobile:h-[360px] object-cover object-center"
                                        />
                                        
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2 mt-4">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to slide ${index + 1}`}
                                    className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-orange' : 'bg-orange/30'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-10 pb-20 max-mobile:py-12 max-mobile:px-3">
                <div className="blue-line-bg rounded-[30px] py-20 max-mobile:py-12">
                    <div className="container-lg">
                        <div className="text-center">
                            <SectionHeader
                                badge="How HR Agent works"
                                headingClassName="text-white"
                                titleClassName="text-white"
                                subtitleClassName="text-white"
                                title="Let HR Agent handle the workflow while you focus on decisions"
                                subtitle="Move from scattered, manual recruitment and HR operations to a single, structured system."
                                variant="amber"
                            />
                            <div className="grid grid-cols-4 gap-6 max-mobile:gap-4 max-mobile:grid-cols-1">
                                {workflowSteps.map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-primary-100 max-mobile:rounded-lg max-mobile:p-3 rounded-[20px] border border-solid border-primary-200 p-[30px] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                                    >
                                        <span className="absolute top-2 right-3 text-6xl font-bold text-white opacity-10">
                                            {index + 1}
                                        </span>
                                       
                                            <img
                                                src={item.icon}
                                                className="block w-[48px] h-[48px]"
                                                alt="HR Agent Icon"
                                                style={{ filter: 'brightness(0) invert(1)' }}
                                            />
                                        
                                        <div className="mt-5 max-mobile:mt-0">
                                            <h3 className="text-xl relative max-mobile:text-xl font-medium text-left text-white mb-2.5">
                                                {item.title}
                                            </h3>
                                            <div className="relative">
                                                <p className="text-lg text-white-80 font-light max-mobile:text-base text-left">
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

            <section className="bg-gradient-to-b relative from-[rgba(255,93,1,0.08)] to-[rgba(255,149,4,0.08)] py-20 max-mobile:py-12">
                <div className="absolute top-0 leading-0 w-full z-[-1]">
                    <img className="block" src={TopLineImage} alt="TopLineImage" />
                </div>
                <div className="absolute bottom-0 leading-0 w-full z-[-1]">
                    <img className="block" src={BottomLineImage} alt="BottomLineImage" />
                </div>

                <div className="container-lg">
                    <SectionHeader
                        badge="Plans & deployment model"
                        title="Start with core recruitment, expand into full HR operations"
                        subtitle="HR Agent is designed to fit different stages of HR maturity."
                        variant="amber"
                    />
                    <div className="max-w-7xl mx-auto mt-10">
                        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6">
                            {planPoints.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-sm border border-orange-border p-6 flex flex-col items-start"
                                >
                                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                                    <p className="text-base text-grey-600">{item.description}</p>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            <section id="hr-agent-form-section" className="py-20 pb-24 max-mobile:py-12 bg-blue-900">
                <div className="container-lg">
                    <div className="grid lg:grid-cols-2 gap-10 items-stretch max-mobile:grid-cols-1 p-[30px] max-mobile:rounded-lg max-mobile:p-5 max-tablet:flex-col max-tablet:items-start">
                        <div className="flex flex-col justify-center">
                            <h2 className="heading3 text-primary mb-3">
                                Ready to transform your <span className="text-gradient">HR operations with AI</span>?
                            </h2>
                            <p className="text-lg text-primary max-mobile:text-base mb-3">
                                Streamline recruitment, onboarding, and HR management with an intelligent system that grows with your team.
                            </p>
                            <ul className="list-disc list-inside text-primary max-mobile:text-base mb-6 space-y-1 pl-4">
                                <li>Your domain, logo and brand identity</li>
                                <li>Dedicated organizations and HR teams for each client</li>
                                <li>Central infrastructure, reporting and support managed by you</li>
                            </ul>
                            <p className="text-xl text-primary max-mobile:text-sm font-semibold">
                                Your brand. Your platform. Your revenue. Our infrastructure.
                            </p>
                        </div>

                        <div className="flex items-stretch justify-center">
                            <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl px-6 py-7 max-mobile:px-4 max-mobile:py-5 border border-border-color3">
                                <h3 className="text-2xl font-semibold text-primary mb-4">
                                    Share your HR automation needs
                                </h3>
                                <form onSubmit={handleLeadSubmit} className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Full name
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
                                            Email address
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
                                            placeholder="Your company name"
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            Phone number <span className="text-red-500">*</span>
                                        </label>
                                         <PhoneInput
                                            international
                                            defaultCountry="IN"
                                            value={leadForm.phone}
                                            onChange={(value) => setLeadForm(prev => ({ ...prev, phone: value || '' }))}
                                            placeholder="+91 98765 43210"
                                            className="w-full rounded-md text-sm  bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            I'm interested in
                                        </label>
                                        <select
                                            name="interest"
                                            value={leadForm.interest}
                                            onChange={handleLeadChange}
                                            className="w-full px-3 py-2 rounded-md text-sm border border-border-color3 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300/60"
                                        >
                                            <option value="" disabled>Select an option</option>
                                            <option value="White-label Partnership">White-label Partnership</option>
                                            <option value="Reseller Program">Reseller Program</option>
                                            <option value="Enterprise Solution">Enterprise Solution</option>
                                            <option value="Custom Development">Custom Development</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-grey-500 mb-1">
                                            How can we help?
                                        </label>
                                        <textarea
                                            name="message"
                                            value={leadForm.message}
                                            onChange={handleLeadChange}
                                            rows={3}
                                            placeholder="Tell us about your HR challenges and requirements"
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
                                            className="py-2.5 px-6 cursor-pointer text-sm font-semibold text-white bg-primary-300 rounded-full border border-primary-300 hover:bg-transparent hover:text-primary-300 transition-colors duration-300 disabled:opacity-70 flex-1 flex items-center justify-center"
                                        >
                                            {leadSubmitting ? 'Sending...' : 'Submit Request'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
    </div>
  );
}

export default HRAgentPage;
