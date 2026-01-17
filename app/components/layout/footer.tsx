import { Phone } from "lucide-react";
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaArrowRight,
  FaRocket,
  FaBrain,
  FaPhone,
  FaCertificate,
  FaShieldAlt,
  FaBuilding,
  FaIdCard,
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";
import { supabase } from "~/Supabase/supabaseClient";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newsletterMessage, setNewsletterMessage] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const footerSections = [
    {
      title: "AI Partners",
      icon: <FaBrain className="w-5 h-5" />,
      links: [
        { name: "HR Agent", href: "/solutions/hr-agent" },
        { name: "Upwork Agent", href: "/solutions/upwork-agent" },
        { name: "AI Studio", href: "/solutions/ai-studio" },
        { name: "AI Call Agent", href: "/solutions/call-agent" },
        // { name: "Operations Agent", href: "/solutions/operations" },
        // { name: "Decision Agent", href: "/solutions/decision" },
      ],
    },
    {
      title: "Services",
      icon: <FaRocket className="w-5 h-5" />,
      links: [
        { name: "AI Agent Development", href: "/services/ai-agents-services" },
        {
          name: "Generative AI Solutions",
          href: "/services/generative-ai-development-services",
        },
        { name: "Web Development", href: "/services/web-development-services" },
        {
          name: "Mobile App Development",
          href: "/services/mobile-app-development-services",
        },
        { name: "UI/UX Design", href: "/services/ui-ux-design-services" },
        {
          name: "DevOps Consulting",
          href: "/services/devops-consulting-services",
        },
        {
          name: "AgentKit Builder",
          href: "/services/ai-agentkit-builder-services",
        },
        {
          name: "Customize ChatGPT",
          href: "/services/chatgpt-customize-services",
        },
      ],
    },
    {
      title: "Resources",
      icon: <FaGithub className="w-5 h-5" />,
      links: [
        { name: "Blog & Insights", href: "/blogs" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "AI Tools Directory", href: "/tools" },
        { name: "Free AI Assessment", href: "/free-ai-assessment" },
        { name: "Documentation", href: "/docs" },
        { name: "Whitepapers", href: "/whitepapers" },
      ],
    },
    {
      title: "Company",
      icon: <FaBuilding className="w-5 h-5" />,
      links: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/career" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Press Kit", href: "/press" },
      ],
    },
  ];

  const validateEmailFormat = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const emailregex = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateEmail = (
    email: string
  ): { isValid: boolean; message: string } => {
    if (!email.trim()) {
      return { isValid: false, message: "Email is required." };
    }

    if (!validateEmailFormat(email)) {
      return { isValid: false, message: "Please enter a valid email address." };
    }

    if (!emailregex(email)) {
      return {
        isValid: false,
        message: "Please use your company email address.",
      };
    }

    return { isValid: true, message: "" };
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    // Validate email
    const validation = validateEmail(newsletterEmail);
    if (!validation.isValid) {
      setNewsletterMessage({ type: "error", message: validation.message });
      return;
    }

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("newsletter").insert({
        email: newsletterEmail,
        created_at: new Date().toISOString(),
      });

      if (error) {
        console.error("Error submitting newsletter form:", error);
        setNewsletterMessage({
          type: "error",
          message: "Error subscribing to newsletter. Please try again.",
        });
      } else {
        setNewsletterEmail("");
        setNewsletterMessage({
          type: "success",
          message: "Thank you for subscribing to our newsletter!",
        });
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setNewsletterMessage({
        type: "error",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeNewsletterMessage = () => {
    setNewsletterMessage(null);
  };

  return (
    <footer className="footer-bg text-white relative overflow-hidden">
      <div className="max-w-[calc(1250px+40px)] px-5 mx-auto">
        <div className="grid grid-cols-[372px_1fr] max-tab:grid-cols-1 max-tab:gap-5 gap-16 pb-7">
          <div>
            <div className="mb-4">
              <img src="/rejoice-logo.svg" alt="Rejoicehub" />
            </div>
            <div className="mb-2.5">
              <p className="text-base bg-gradient-to-r from-[#FF5C00] to-[#FF8F03] bg-clip-text text-transparent">
                Strategic • Scalable • Sentient
              </p>
            </div>
            <div className="mb-7">
              <p className="text-white text-base mb-2.5">
                Your AI Partners in Innovation
              </p>
              <p className="text-base text-white">
                We co-create intelligent agents that amplify your team's
                strategic thinking. Transforming businesses through AI-powered
                partnerships since 2019.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-7">
              <div className="p-4 cursor-default rounded-[12px] transition-all ease-in-out duration-300 hover:border-[#F97015] border border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <p className="text-[20px] font-bold text-[#F97015] text-center mb-1">
                  100+
                </p>
                <p className="text-base text-center text-white">
                  Partnerships <br />
                  Worldwide
                </p>
              </div>
              <div className="p-4 cursor-default rounded-[12px] transition-all ease-in-out duration-300 hover:border-[#F97015] border border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
                <p className="text-[20px] font-bold text-[#F97015] text-center mb-1">
                  500+
                </p>
                <p className="text-base text-center text-white">
                  AI Agents <br />
                  Built & Deployed
                </p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              <a
                href="https://www.linkedin.com/company/rejoicehubllp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border h-[46px] transition-all ease-in-out duration-300 hover:border-[#F97015] flex items-center justify-center border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-lg">
                  <FaLinkedinIn className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://github.com/rejoicehub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border h-[46px] transition-all ease-in-out duration-300 hover:border-[#F97015] flex items-center justify-center border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-lg">
                  <FaGithub className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://x.com/Rejoicehub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border h-[46px] transition-all ease-in-out duration-300 hover:border-[#F97015] flex items-center justify-center border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-lg">
                  <FaTwitter className="w-5 h-5" />
                </div>
              </a>
              <a
                href="https://www.instagram.com/rejoicehubllp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="border h-[46px] transition-all ease-in-out duration-300 hover:border-[#F97015] flex items-center justify-center border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] rounded-lg">
                  <FaInstagram className="w-5 h-5" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex justify-between flex-wrap max-tab:py-5 max-mobile:gap-5">
            {footerSections.map((section) => (
              <div key={section.title}>
                <div className="flex items-center gap-2.5 pb-5">
                  <div className="w-9 h-9 bg-[#F97015] rounded-lg flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-white text-base font-medium">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-white hover:text-[#F97015] transition-all duration-300 text-base flex items-center group font-medium"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">
                          {link.name}
                        </span>
                        <FaArrowRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 max-tab:grid-cols-1 max-tab:gap-5">
          <div className="p-[30px] transition-all ease-in-out duration-300 hover:border-[#F97015] rounded-[12px] border border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-medium text-white mb-[14px]">
              Ready to Build Your AI Agent?
            </h4>
            <p className="text-base text-white mb-5">
              Join 1000+ business leaders who get weekly AI insights and
              exclusive access to our latest innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/dipak-rejoicehub"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-[11px]  text-white font-semibold  hover:from-amber-600  flex items-center justify-center space-x-1 rounded-[8px] bg-[linear-gradient(101deg,#F97015_0%,#F45925_100%)]"
              >
                <span>Book Free Consultation</span>
                <FaArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:+919825122840"
                className="px-5 py-[11px]  text-white font-semibold rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span className="flex items-center gap-2">
                  <Phone /> Call Now: +91 98251 22840
                </span>
              </a>
            </div>
          </div>
          <div className="p-[30px] transition-all ease-in-out duration-300 hover:border-[#F97015] rounded-[12px] border border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
            <h4 className="text-xl font-medium text-white mb-[14px]">
              AI Executive Newsletter
            </h4>
            <p className="text-base text-white mb-5">
              Weekly insights, case studies, and exclusive AI strategies
              delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <div className="flex gap-3 max-mobile:grid max-mobile:grid-cols-1">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your company email address"
                  required
                  className="flex-1 px-4 py-3  text-white placeholder-text-white focus:outline-none rounded-[8px] border border-[rgba(54,65,83,0.80)] bg-[#222A37] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-[30px] py-3 text-base cursor-pointer  text-white font-semibold rounded-[8px] bg-gradient-to-tr from-[#F97015] to-[#F45925] hover:from-amber-600 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {newsletterMessage && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-[8px] text-sm ${
                    newsletterMessage.type === "success"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {newsletterMessage.type === "success" ? (
                    <FaCheck className="w-4 h-4" />
                  ) : (
                    <FaExclamationTriangle className="w-4 h-4" />
                  )}
                  <span>{newsletterMessage.message}</span>
                  <button
                    type="button"
                    onClick={closeNewsletterMessage}
                    className="ml-auto text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="py-[30px] max-tab:py-5 max-tab:grid max-tab:grid-cols-1 max-tab:gap-5 flex items-center justify-between">
          <div className="text-base text-white">
            © {currentYear} RejoiceHub LLP. All rights reserved. Building the
            future with AI.
          </div>
          <div className="flex items-center text-base text-white gap-[30px]">
            <a
              href="/privacy-policy"
              className="text-white hover:text-[#F97015] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              className="text-white hover:text-[#F97015] transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/sitemap.xml"
              className="text-white hover:text-[#F97015] transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
        <div className="rounded-[12px] py-4 px-[30px] border border-[rgba(54,65,83,0.80)] bg-[#181D25] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-2 ">
              <FaBuilding className="w-3 h-3 text-white" />
              <span className="text-white">LLPIN:</span>
              <span className="font-mono text-white">ACA-7366</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FaCertificate className="w-3 h-3 text-white" />
              <span className="text-white">GST:</span>
              <span className="font-mono text-white">24ABGFR9366R1Z7</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FaIdCard className="w-3 h-3 text-white" />
              <span className="text-white">Udhyam:</span>
              <span className="font-mono text-white">UDYAM-GJ-22-0026768</span>
            </div>
            <div className="flex items-center gap-2 ">
              <FaShieldAlt className="w-3 h-3 text-white" />
              <span className="text-white">DUNS:</span>
              <span className="font-mono text-white">957182565</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
