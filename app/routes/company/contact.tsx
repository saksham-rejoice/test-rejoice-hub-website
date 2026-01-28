import { useState } from "react";
import { supabase } from "~/Supabase/supabaseClient";
import { MetaFunction } from "react-router";
import { z } from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import slackFormatContact from "~/utils/slackMessages";
import {
  Mail,
  MapPin,
  Phone,
  LucideIcon,
  Calendar,
  MessageCircle,
  Clock,
  Users,
  Check,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { services, budget, time, requirement } from "~/constant/contact";
import { sendSlackMessage } from "~/api/slackMessageApi";
import { WEB_URL } from "~/utils/config";
import CallIcon from "~/components/icons/callIcon";

export const meta: MetaFunction = () => [
  { title: "Connect, Collaborate, Create | Contact Us" },
  {
    name: "description",
    content:
      "Connect with RejoiceHub to discuss your project, get a free AI consultation, or request a quote. Our experts are ready to help so contact us today!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/contact`,
  },
];

const contactSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  email: z.string().email("Invalid email address."),
  subject: z.string().min(1, "Subject is required."),
  phoneNumber: z.string().min(10, "Phone number is required."),
  service: z.string(),
  budget: z.string(),
  time: z.string(),
  requirement: z.string(),
  message: z.string().min(1, "Message is required."),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phoneNumber: "",
    service: services[0],
    budget: budget[0],
    time: time[0],
    requirement: requirement[0],
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const officeAddress =
    "Atlanta mall, Digital Valley, A-301, Sudama Chowk, Mota Varachha, Surat, Gujarat 394101, India";

  const lat = 21.2386396;
  const lng = 72.8791483;

  const mapsEmbedUrl = `https://maps.google.com/maps?hl=en&ie=UTF8&t=&z=20&q=${lat},${lng}&ll=${lat},${lng}&output=embed`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress,
  )}`;

  const handleMapClick = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  const engagementOptions = [
    {
      icon: <Calendar className="w-6 h-6 text-amber-600" />,
      title: "Book Free Consultation",
      description:
        "Schedule a 30-minute strategy call to discuss your AI transformation goals.",
      action: "Book Meeting",
      href: "https://calendly.com/dipak-rejoicehub",
    },
    {
      icon: <Phone className="w-6 h-6 text-amber-600" />,
      title: "Call Directly",
      description:
        "Speak with our AI experts immediately. Available 9 AM - 6 PM IST.",
      action: "Call Now",
      href: "tel:+919825122840",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-amber-600" />,
      title: "WhatsApp Chat",
      description:
        "Get instant responses to your questions via WhatsApp business chat.",
      action: "Start Chat",
      href: "https://wa.me/919825122840",
    },
    {
      icon: <Mail className="w-6 h-6 text-amber-600" />,
      title: "Email Us",
      description:
        "Send detailed requirements and get a comprehensive response within 24 hours.",
      action: "Send Email",
      href: "mailto:info@rejoicehub.com",
    },
  ];

  const processSteps = [
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Discovery Call",
      description: "We understand your business challenges and AI objectives.",
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Custom Proposal",
      description:
        "Receive a tailored solution with timeline and ROI projections.",
    },
    {
      icon: <Calendar className="w-6 h-6 text-amber-600" />,
      title: "Project Kickoff",
      description:
        "Begin implementation with our dedicated AI development team.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handlePhoneChange = (value?: string) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value || "" }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const newErrors: { [key: string]: string } = {};
      for (const issue of result.error.issues) {
        newErrors[issue.path[0] as string] = issue.message;
      }
      return newErrors;
    }
    return {};
  };

  // const handleRecaptchaError = (errorMessage: string) => {
  //   console.error(errorMessage)
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);
    setSuccessMsg("");

    const slackPayload = {
      text: slackFormatContact({
        name: formData.fullName,
        email: formData.email,
        subject: formData.subject,
        contact: formData.phoneNumber,
        service: formData.service,
        budget: formData.budget,
        startTime: formData.time,
        requirement: formData.requirement,
        message: formData.message,
        reference: window.location.href,
      }),
    };

    try {
      const { error } = await supabase.from("contact_us").insert([
        {
          full_name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          phone_number: formData.phoneNumber,
          service: formData.service,
          budget: formData.budget,
          start_time: formData.time,
          requirement: formData.requirement,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error("Supabase insert error", error);
        alert(
          "Something went wrong while sending your message. Please try again.",
        );
        return;
      }

      //await sendSlackMessage(slackPayload);

      setSuccessMsg("Thank you! Your message has been sent successfully.");
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        phoneNumber: "",
        service: services[0],
        budget: budget[0],
        time: time[0],
        requirement: requirement[0],
        message: "",
      });
    } catch (err) {
      console.error("Submission error", err);
      alert("Unexpected error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            <span className="ml-2">Free Consultation</span>
          </p>

          <h1 className="text-primary text-center mb-4">
            Ready to Transform
            <span className="text-gradient">Your Business?</span>
          </h1>

          <p className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Get your free AI consultation, custom roadmap, and ROI analysis.
            Multiple ways to connect - choose what works best for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <CTAButton
              href="https://calendly.com/dipak-rejoicehub"
              variant="primary"
              size="md"
              icon="calendar"
            >
              Book Free Consultation
            </CTAButton>
            <CTAButton
              to="tel:+919825122840"
              variant="secondary"
              size="md"
              icon="external"
            >
              Call Now: +91 98251 22840
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Multiple Engagement Options */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Connect With Us"
            title="Multiple Ways to Get Started"
            subtitle="Choose the communication method that works best for you. We're here to help transform your business with AI."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {engagementOptions.map((option, index) => (
              <div
                key={index}
                className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">
                  {option.title}
                </h3>
                <p className="text-navy-700 text-sm mb-4 leading-relaxed">
                  {option.description}
                </p>
                <CTAButton
                  to={option.href}
                  variant="primary"
                  size="sm"
                  fullWidth
                >
                  {option.action}
                </CTAButton>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center gap-8 text-sm text-navy-700">
              <div className="flex items-center gap-2">
                <span className="text-amber-500">
                  <Check />
                </span>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">
                  <Check />
                </span>
                <span>No Obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-amber-500">
                  <Check />
                </span>
                <span>Custom Roadmap</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Our Process"
            title="Simple 3-Step Process"
            subtitle="From initial consultation to project delivery, we make AI transformation straightforward and results-driven."
            variant="amber"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <FeatureCard
                key={index}
                icon={step.icon}
                title={`${index + 1}. ${step.title}`}
                description={step.description}
                variant="highlight"
                layout="vertical"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="max-mobile:py-12 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <SectionHeader
            title="Visit Us"
            subtitle="We'd love to meet you. Find us on the map below."
          />

          <div
            className="rounded-2xl max-mobile:rounded-lg grid grid-cols-[1fr_350px] max-mobile:grid-cols-1 border border-gray-200 bg-white
                 shadow-md hover:shadow-lg transition
                 overflow-hidden cursor-pointer"
            onClick={handleMapClick}
            title="Click to open in Google Maps"
          >
            {/* 🔹 Map on top */}
            <iframe
              src={mapsEmbedUrl}
              className="w-full h-[480px] max-mobile:h-[260px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* 🔹 Address block under the map */}
            <div className="px-8 py-6  flex items-center justify-between flex-col max-mobile:py-6 max-mobile:px-4 max-mobile:block w-full max-mobile:px-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  RejoiceHub Office Address
                </h3>

                <p className="text-gray-500 text-base mb-4 font-medium  leading-relaxed whitespace-pre-line">
                  A-301, Atlanta Mall, Sudama Chowk,
                  {"\n"}Digital Valley (Mota Varachha),
                  {"\n"}Surat, Gujarat, India – 394101
                </p>
                <div className="flex items-center gap-2 pb-3">
                  <Phone className="w-5 h-5 text-[#ff6900]" />
                  <a
                    href="tel:+916354001285"
                    onClick={(e) => e.stopPropagation()}
                    className="text-base font-medium text-gray-500 block"
                  >
                    +91 63540 01285
                  </a>
                </div>

                <div className="flex items-center gap-2 pb-3">
                  <Mail className="w-5 h-5 text-[#ff6900]" />
                  <a
                    href="mailto:hr@rejoicehub.com"
                    onClick={(e) => e.stopPropagation()}
                    className="text-base font-medium text-gray-500 block"
                  >
                    hr@rejoicehub.com
                  </a>
                </div>

                <div className="flex items-center gap-2 pb-3">
                  <Clock className="w-5 h-5 text-[#ff6900]" />
                  <a className="text-base font-medium text-gray-500 block font-medium">
                    Mon-Fri: 9:30 to 7:00
                  </a>
                </div>
              </div>
              <div className="w-full max-mobile:mt-6">
                <CTAButton variant="primary" size="md" fullWidth>
                  Get Directions
                </CTAButton>
              </div>

              {/* or: <p className="text-gray-700 leading-relaxed whitespace-pre-line">{officeAddress}</p> */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form */}
      <section className="py-20 max-mobile:py-12">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="Contact Form"
            title="Tell Us About Your Project"
            subtitle="Share your requirements and we'll get back to you with a detailed proposal within 24 hours."
            // variant="navy"
          />

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {["fullName", "email", "subject"].map((id) => (
              <div key={id} className="space-y-1 animate-fade-in">
                <label
                  htmlFor={id}
                  className="text-sm font-medium text-navy-900"
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}*
                </label>
                <input
                  id={id}
                  type={id === "email" ? "email" : "text"}
                  value={formData[id as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Enter your ${id}`}
                  className={`w-full p-3 text-black border ${errors[id] ? "border-red-500" : "border-gray-200"} rounded-lg bg-gray-50 focus:bg-white  transition`}
                />
                {errors[id] && (
                  <p className="text-red-500 text-sm">{errors[id]}</p>
                )}
              </div>
            ))}

            <div className="space-y-1 animate-fade-in">
              <label
                htmlFor="phone"
                className="text-sm font-medium text-navy-900"
              >
                Phone Number*
              </label>
              <PhoneInput
                id="phoneNumber"
                international
                defaultCountry="IN"
                value={formData.phoneNumber}
                onChange={handlePhoneChange}
                className={`w-full p-3 border rounded-lg bg-gray-50 focus:bg-white`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
              )}
            </div>

            {[
              { id: "services", label: "Services", options: services },
              { id: "budget", label: "Budget", options: budget },
              { id: "time", label: "Start Time", options: time },
              { id: "requirement", label: "Requirement", options: requirement },
            ].map(({ id, label, options }) => (
              <div key={id} className="space-y-1 animate-fade-in">
                <label
                  htmlFor={id}
                  className="text-sm font-medium text-navy-900"
                >
                  {label}
                </label>
                <Select
                  value={formData[id as keyof typeof formData]}
                  onValueChange={(value) => handleSelectChange(id, value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder={label} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        disabled={option.startsWith("Select a")}
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}

            <div className="md:col-span-2 space-y-1 animate-fade-in">
              <label
                htmlFor="message"
                className="text-sm font-medium text-navy-900"
              >
                Message*
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project..."
                className={`w-full text-black p-3 mt-2 border ${errors.message ? "border-red-500" : "border-gray-200"} rounded-lg bg-gray-50 focus:bg-white transition resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
            </div>

            <div className="mt-2">
              {/* <ReCaptchaField
            ref={recaptchaRef}
            onError={handleRecaptchaError}
          /> */}
            </div>

            <div className="md:col-span-2 animate-fade-in">
              <Button
                type="submit"
                disabled={loading}
                className="w-full py-3 h-[auto] max-mobile:py-4 max-mobile:h-[auto] cursor-pointer bg-primary-300 text-white font-semibold rounded-lg hover:bg-navy-900 transition transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {successMsg && (
                <p className="mt-2 text-green-600 text-center w-full">
                  {successMsg}
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

const ContactInfo = ({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-start gap-4 group">
    <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-gray-700 transition">
      <Icon className="w-5 h-5 text-white" />
    </div>
    <div>
      <p className="text-gray-400">{label}</p>
      {href ? (
        <a
          href={href}
          className="block text-white font-medium hover:text-navy-200 transition"
        >
          {value}
        </a>
      ) : (
        <p className="text-white">{value}</p>
      )}
    </div>
  </div>
);

export default Contact;
