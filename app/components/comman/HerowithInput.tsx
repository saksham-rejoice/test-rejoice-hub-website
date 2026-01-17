import React, { useState, useRef } from "react";
import ToolsResponseModal from "~/components/comman/ToolsResponseModal";
import { PromptItem } from "~/constant/toolHeroPromptsData";
import { getTools } from "~/api/toolsApi";
import { useLocation } from "react-router-dom";

type HeroSectionProps = {
  title: string;
  subtitle: React.ReactNode;
  prompts?: PromptItem[];
  placeholder?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  prompts: propPrompts,
  placeholder,
}) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState<any | null>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const currentTool = location.pathname.includes("open-source") ? "osc" : "nc";

  const handleSubmit = async () => {
    if (isTyping || !typedText.trim()) return;
    setIsLoading(true);
    setShowModal(true);
    setResponseData(null);
    try {
      const res = await getTools({
        query: typedText.trim(),
        tool: currentTool,
      });
      setResponseData(res?.data || res);
    } catch (error) {
      setResponseData({
        title: "Error",
        sections: [
          {
            heading: "Something went wrong",
            tips: ["Please try again later."],
          },
        ],
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const typeWriter = (text: string, index = 0) => {
    if (index === 0) {
      setIsTyping(true);
    }
    if (index < text.length) {
      setTypedText((prev) => prev + text.charAt(index));
      typingTimeout.current = setTimeout(() => {
        typeWriter(text, index + 1);
      }, 40);
    } else {
      setIsTyping(false);
    }
  };

  const handleButtonClick = (text: string) => {
    if (isTyping) return;
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    setTypedText("");
    typeWriter(text);
  };

  const prompts = React.useMemo<PromptItem[]>(() => {
    const fallback: PromptItem[] = [
      { label: "Create AI agent for your business?" },
      { label: "Store your data using Strapi?" },
      { label: "Build your automation flow using n8n?" },
    ];

    const source = propPrompts && propPrompts.length ? propPrompts : fallback;
    if (source.length <= 3) return source;
    return [...source].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [propPrompts]);

  return (
    <>
      <ToolsResponseModal
        isOpen={showModal}
        loading={isLoading}
        data={responseData}
        onClose={() => {
          setShowModal(false);
          setResponseData(null);
        }}
      />
      <section className="relative pt-20 pb-20 bg-light">
        <div className="relative max-w-7xl mx-auto px-4 py-16  text-center">
          <h1 className="text-primary mb-4">{title}</h1>
          <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
            {subtitle}
          </p>

          <div className="mt-8 max-w-2xl mx-auto relative">
            <div className="relative group rounded-xl focus-within:ring-2 focus-within:ring-amber-100 transition-all">
              <div className="relative bg-white rounded-xl shadow-xl transition-all duration-300">
                <textarea
                  value={typedText}
                  onChange={(e) => setTypedText(e.target.value)}
                  disabled={isTyping}
                  className="w-full px-4 py-4 rounded-xl bg-white/80 text-gray-900 pr-12 placeholder:text-gray-800 resize-none overflow-hidden focus:outline-none"
                  placeholder={placeholder || "Enter your message here..."}
                  style={{ minHeight: "120px" }}
                />
                <button
                  onClick={handleSubmit}
                  disabled={typedText.trim() === "" || isTyping}
                  className="absolute right-3 disabled:cursor-not-allowed bottom-4 p-2.5 bg-gradient-to-r from-navy-950 to-navy-800 text-primary rounded-full cursor-pointer hover:from-navy-600 hover:to-navy-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 group-hover:translate-x-0.5 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex pt-8 flex-wrap gap-4">
              {prompts.map(({ label, Icon }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleButtonClick(label)}
                  disabled={isTyping}
                  className="flex items-center gap-2 px-4 py-3 rounded-full cursor-pointer bg-navy-950 backdrop-blur-sm text-white text-sm  border border-solid border-primary-200  bg-primary-100 p-6 shadow-lg hover:scale-105 hover:bg-navy-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {Icon ? (
                    <Icon className="w-5 h-5" />
                  ) : (
                    <img src="/input2.svg" alt="" className="w-5 h-5" />
                  )}
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
