import React, { useState, useRef } from "react";
import PopupModal from "../../sections/home/PopupModal";

type HeroSectionProps = {
  title: string;
  leftIcons: { Icon: string; delay: string }[];
  rightIcons: { Icon: string; delay: string }[];
  prompts: { label: string; Icon: React.ElementType }[];
  placeholder?: string;
};

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  leftIcons,
  rightIcons,
  prompts: propsPrompts,
  placeholder,
}) => {
  const [typedText, setTypedText] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  // Prepare prompts (randomly pick 3)
  const prompts = React.useMemo(() => {
    const defaultPrompts = [
      { label: "Create an AI agent for your business?", Icon: null },
      { label: "Design a modern UI for your scalable product?", Icon: null },
      { label: "Build a scalable app using Flutter?", Icon: null },
    ];

    const source =
      propsPrompts && propsPrompts.length > 0 ? propsPrompts : defaultPrompts;

    if (source.length <= 3) return source;

    const shuffled = [...source].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, [propsPrompts]);

  const typeWriter = (text: string, index = 0) => {
    if (index === 0) {
      setTypedText("");
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
    typeWriter(text);
  };

  return (
    <section className="relative py-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-navy-950 bg-opacity-20"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none"></div>

      {/* <div className="absolute hidden sm:block left-0 top-1/2 transform -translate-y-1/2 z-10 w-48">
        {leftIcons.map(({ Icon, delay }, index) => {
          const positions = [
            { top: "-120px", left: "300px" },
            { top: "0px", left: "200px" },
            { top: "120px", left: "300px" },
          ];
          return (
            <div
              key={index}
              className="absolute w-20 h-20 flex items-center sepia justify-center hover:scale-110 transition-transform duration-300"
              style={{
                animation: `float 3s ease-in-out infinite`,
                animationDelay: delay,
                ...positions[index],
              }}
            >
              <img src={Icon} alt="" className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div>

      <div className="absolute hidden sm:block right-0 top-1/2 transform -translate-y-1/2 z-10 w-48">
        {rightIcons.map(({ Icon, delay }, index) => {
          const positions = [
            { top: "-120px", right: "300px" },
            { top: "0px", right: "200px" },
            { top: "120px", right: "300px" },
          ];
          return (
            <div
              key={index}
              className="absolute w-20 h-20 flex items-center justify-center sepia hover:scale-110 transition-transform duration-300"
              style={{
                animation: `float 3s ease-in-out infinite reverse`,
                animationDelay: delay,
                ...positions[index],
              }}
            >
              <img src={Icon} alt="" className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div> */}

      <div className="flex flex-col items-center justify-center w-full h-full z-20">
        <h1 className="text-5xl text-center max-mobile:text-3xl font-semibold mb-8 leading-tight tracking-tight">
          {title.replace("Services", "")}
        </h1>

        <div className=" max-w-2xl w-full px-4 relative flex flex-col items-center">
          <div className="relative group rounded-xl focus-within:ring-2 focus-within:ring-amber-100 transition-all w-full">
            <div
              className="absolute -inset-1 rounded-xl opacity-70 blur-md pointer-events-none"
              style={{
                background: "linear-gradient(135deg, #66F5FF, #33E9FF)",
                backgroundSize: "200% 200%",
                animation: "gradientShift 6s ease infinite",
              }}
            />
            <div className="relative bg-white rounded-xl shadow-xl transition-all duration-300">
              <textarea
                value={typedText}
                onChange={(e) => setTypedText(e.target.value)}
                disabled={isTyping}
                className="w-full px-4 py-4 rounded-xl bg-white/80 text-gray-900 pr-12 placeholder:text-gray-800 resize-none overflow-hidden focus:outline-none tracking-wide"
                placeholder={placeholder || "Let's explore..."}
                style={{ minHeight: "120px" }}
              />
              <button
                onClick={() => setIsPopupOpen(true)}
                disabled={typedText.trim() === "" || isTyping}
                className="absolute right-3 bottom-4 p-2.5 bg-gradient-to-r from-navy-950 to-navy-800 text-white rounded-full cursor-pointer hover:from-navy-600 hover:to-navy-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform group disabled:cursor-not-allowed"
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

          <div className="flex mt-5 flex-wrap gap-4">
            {prompts.map(({ label, Icon }) => (
              <button
                key={label}
                onClick={() => handleButtonClick(label)}
                disabled={isTyping}
                className="flex items-center cursor-pointer gap-2 px-5 py-3 rounded-full bg-navy-950 text-white text-sm  border border-navy-900 shadow-lg hover:scale-105 hover:bg-navy-800 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {Icon ? <Icon className="w-5 h-5" /> : null}
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <PopupModal
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        prompt={typedText}
      />
    </section>
  );
};

export default HeroSection;
