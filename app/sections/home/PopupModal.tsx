import React, { useState } from "react";
import { createProject } from "../../api/heroApi";
import { supabase } from "../../Supabase/supabaseClient";
import { FiRefreshCcw } from "react-icons/fi";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  prompt: string;
}

const PopupModal: React.FC<PopupModalProps> = ({ isOpen, onClose, prompt }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    mobile: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<string | null>(null);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const githubUsernamePattern = /^(?!-)(?!.*--)[A-Za-z0-9-]{1,39}(?<!-)$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (formData.name.trim().length < 2)
      newErrors.name = "Name must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailPattern.test(formData.email))
      newErrors.email = "Invalid email address";

    if (
      formData.github.trim() &&
      !githubUsernamePattern.test(formData.github)
    ) {
      newErrors.github = "Invalid GitHub username";
    }
    if (!formData.mobile.trim()) newErrors.mobile = "Mobile is required";
    else if (formData.mobile.trim().length < 10)
      newErrors.mobile = "Mobile must be at least 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateFields()) return;

    setIsLoading(true);
    setApiMessage(null);

    try {
      const { name, email, github, mobile } = formData;
      const githubUsername = github.trim() || "dipaksavaliya";

      const { error } = await supabase.from("Basic_Visitor_Info").insert({
        name,
        email,
        github: githubUsername,
        phone_number: mobile ? parseInt(mobile) : null,
        prompt,
      });
      if (error) throw new Error(error.message);

      const res = await createProject({
        project_description: prompt,
        github_username: githubUsername,
      });

      setResponseMessage(res?.message || "Submitted successfully! 🎉");
      setFormData({ name: "", email: "", github: "", mobile: "" });
      setErrors({});
    } catch (err: any) {
      console.error(err);
      setApiMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  const inputClass = (field: string) =>
    `w-full py-3 pl-12 pr-5 rounded-xl text-black border-2 ${
      errors[field]
        ? "border-red-500 focus:border-red-500 focus:ring-red-500"
        : "border-gray-200 focus:ring-amber-500 focus:border-amber-500"
    } transition-all duration-300 bg-white/90 placeholder-gray-400 text-lg`;

  const renderError = (field: string) =>
    errors[field] && (
      <p className="text-red-600 text-sm mt-1 ml-1">{errors[field]}</p>
    );

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-md flex items-center justify-center p-6 animate-in fade-in duration-300">
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl w-full max-w-[610px] max-mobile:h-[calc(100dvh-100px)] overflow-auto sm:p-10 p-6 relative border border-white/30 animate-in zoom-in-95 duration-500 ">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-300 cursor-pointer hover:rotate-90"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-5">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            From Idea to 70% Working Code - Powered by AI
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm">
            Whether it’s web, mobile, AI agents, or automation tools - just tell
            us what you need. Our AI builds the foundation for you.
          </p>
        </div>

        {responseMessage ? (
          <div className="text-center space-y-4 p-5">
            <h3 className="text-2xl font-semibold text-navy-950">
              Please hang tight — we'll notify you via email once it's ready.
            </h3>
            <h3 className="text-lg font-semibold text-gray-600 flex items-center justify-center gap-2">
              Your project is being cooked
              <span>
                <FiRefreshCcw className="animate-spin text-orange-500" />
              </span>
            </h3>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            autoComplete="off"
          >
            <div className="grid grid-cols-1 gap-4">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className={inputClass("name")}
                    autoComplete="nope"
                  />
                  {renderError("name")}
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass("email")}
                    autoComplete="nope"
                  />
                  {renderError("email")}
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 max-mobile:grid-cols-1">
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className={inputClass("mobile")}
                    autoComplete="nope"
                  />
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  GitHub Username
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="github"
                    value={formData.github}
                    onChange={handleChange}
                    placeholder="yourgithub"
                    className={inputClass("github")}
                    autoComplete="nope"
                  />
                  {renderError("github")}
                  <svg
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.373 0 12a12.01 12.01 0 008.207 11.387c.6.112.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604C8.17 17.19 5.368 16.161 5.368 11.574c0-1.31.468-2.38 1.235-3.22-.124-.304-.534-1.525.118-3.177 0 0 1.009-.322 3.302 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.652 1.653.242 2.874.117 3.176.77.841 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.478 5.921.43.372.822 1.102.822 2.222v3.293c0 .319.192.694.801.576A12.01 12.01 0 0024 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:flex-1 bg-gray-100 cursor-pointer hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-medium transition-all duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full sm:flex-1 bg-gradient-to-r cursor-pointer from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-6 py-3 rounded-2xl font-bold transition-all duration-200 transform hover:scale-105 shadow-lg ${
                  isLoading && "opacity-60 cursor-not-allowed"
                }`}
              >
                {isLoading ? "Submitting..." : "Get Started"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default PopupModal;
