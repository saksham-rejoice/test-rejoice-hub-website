import React, { useState, useRef } from "react";
import {
  MessageCircle,
  Send,
  X,
  User,
  Building,
  Phone,
  Minimize,
  Sparkles,
  Bot,
  ArrowRight,
} from "lucide-react";

const TypingIndicator = () => (
  <div className="flex items-center space-x-1 mt-2">
    <span
      className="block w-2 h-2 bg-blue-500 rounded-full animate-bounce"
      style={{ animationDelay: "0ms" }}
    ></span>
    <span
      className="block w-2 h-2 bg-blue-500 rounded-full animate-bounce"
      style={{ animationDelay: "150ms" }}
    ></span>
    <span
      className="block w-2 h-2 bg-blue-500 rounded-full animate-bounce"
      style={{ animationDelay: "300ms" }}
    ></span>
  </div>
);

const PersonasHero = () => {
  const [showForm, setShowForm] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    companyEmail: "",
    phoneNumber: "",
  });
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "Rejoice AI",
      message: `Hi, I\'m Rejoice AI, would you like to discuss personas for your website?`,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
      isUser: false,
    },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isAITyping, setIsAITyping] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFormSubmit = () => {
    if (formData.fullName && formData.companyEmail) {
      setShowForm(false);
      setShowChat(true);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      const newMessage = {
        id: chatMessages.length + 1,
        sender: "You",
        message: currentMessage,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
        isUser: true,
      };
      setChatMessages([...chatMessages, newMessage]);
      setCurrentMessage("");
      setIsAITyping(false);
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      typingTimeoutRef.current = setTimeout(() => {
        setIsAITyping(true);
      }, 2000);
      setTimeout(() => {
        if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        setIsAITyping(false);
        const aiResponse = {
          id: chatMessages.length + 2,
          sender: "Rejoice AI",
          message: `Great! I can help you create custom AI personas for your website. What specific roles would you like to focus on first?`,
          time: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
          isUser: false,
        };
        setChatMessages((prev) => [...prev, aiResponse]);
      }, 2500);
    }
  };

  return (
    <section className="pt-28 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>
        <div className="fixed bottom-10 right-10 z-50 flex flex-col-reverse items-end gap-3">
          <div
            className="relative group cursor-pointer transform hover:scale-110 transition-all duration-500"
            onClick={() => setShowGreeting((prev) => !prev)}
          >
            <div className="w-14 h-14 bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-accent-500/25 transition-all duration-300 animate-pulse hover:animate-none">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-inner">
                <Bot className="w-5 h-5 text-blue-600" />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-400/30 via-accent-500/30 to-accent-600/30 animate-ping"></div>
          </div>
          {showGreeting && (
            <div
              className="w-64 bg-white/90 backdrop-blur-xl rounded-lg border border-white/30 p-4 cursor-pointer shadow-xl hover:shadow-2xl hover:bg-white/95 transition-all duration-500 transform hover:scale-105 flex items-start space-x-3 group"
              onClick={() => {
                setShowForm(true);
                setShowGreeting(false);
              }}
            >
              <div className="flex-1">
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
                  Hi, I'm Rejoice AI, your AI sales rep. How can I help you
                  today?
                </p>
              </div>
              <div className="opacity-60 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                <MessageCircle className="w-5 h-5 text-accent-600" />
              </div>
            </div>
          )}
        </div>

        <div className="cus-container  max-mobile:py-12 ">
          <div className="bg-[url('/assets/images/line.png')] bg-no-repeat bg-cover w-full  max-mobile:gap-8 grid grid-cols-[1fr_500px] max-tab:grid-cols-1 items-center">
            <div className="">
              <div className="">
                <div className="relative">
                  <h1 className="text-primary my-4">
                    Create Your Own
                    <span className="block text-gradient">Personas AI</span>
                  </h1>
                  <div className="absolute -top-4 -left-4 w-8 h-8 text-accent-400 animate-bounce">
                    <Sparkles className="w-full h-full" />
                  </div>
                </div>
                <h2 className="text-xl text-primary font-medium mb-3">
                  Our AI-powered Virtual Assistant
                </h2>
              </div>
              <p className="text-lg text-grey-500 font-normal mb-5">
                It efficiently handles queries, guides users with expert
                insights, and streamlines tasks with real-time intelligence.
                Whether for customer support, business operations, or personal
                assistance, our AI Agent ensures smooth interactions, reducing
                workload and improving response accuracy.
              </p>
              <button
                className="py-3 px-6  font-semibold bg-black flex items-center gap-2 text-white cursor-pointer rounded-full border-none"
                onClick={() => setShowForm(true)}
              >
                <span className="flex items-center gap-3">Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="">
              <div className=" group ">
                <img
                  src="/solutions/personashero-new.jpg"
                  alt=""
                  className="w-full max-tab:w-[90%] max-mobile:w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-lg z-50 flex items-center justify-center p-6 animate-in fade-in duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-10 max-w-lg w-full shadow-2xl relative border border-white/30 transform animate-in zoom-in-95 duration-500">
              <button
                onClick={() => setShowForm(false)}
                className="absolute right-6 top-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-2 transition-all duration-300 cursor-pointer hover:rotate-90"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  Before we chat...
                </h3>
                <p className="text-gray-600 text-lg">
                  Let's get to know you better
                </p>
              </div>

              <div className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-focus-within:text-accent-500 transition-colors duration-300" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-gray-300 text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-focus-within:text-accent-500 transition-colors duration-300" />
                    <input
                      type="email"
                      required
                      value={formData.companyEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyEmail: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-gray-300 text-lg"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10 group-focus-within:text-accent-500 transition-colors duration-300" />
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phoneNumber: e.target.value,
                        })
                      }
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-accent-500 focus:border-accent-500 transition-all duration-300 bg-white/90 backdrop-blur-sm hover:border-gray-300 text-lg"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700 hover:from-accent-600 hover:via-accent-700 hover:to-accent-800 text-white px-8 py-4 rounded-2xl font-bold text-xl shadow-xl hover:shadow-2xl cursor-pointer flex items-center justify-center gap-3"
                >
                  Start Chatting
                  <MessageCircle className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        )}

        {showChat && !minimized && (
          <div className="fixed bottom-6 right-6 z-20 animate-in slide-in-from-bottom-10 duration-500">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl w-[420px] h-[550px] shadow-2xl flex flex-col border border-white/30 overflow-hidden scrollbar-hide">
              <div className="flex items-center justify-between p-6 border-b border-white/20 bg-gradient-to-r from-accent-50 to-accent-100">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Rejoice AI
                    </h3>
                    <p className="text-sm text-green-600 font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Online now
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setMinimized(true)}
                    className="text-gray-400 hover:text-accent-600 hover:bg-accent-50 rounded-full p-2 transition-all duration-300 cursor-pointer hover:scale-110"
                    title="Minimize"
                  >
                    <Minimize className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full p-2 transition-all duration-300 cursor-pointer hover:scale-110 hover:rotate-90"
                    title="Close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-gray-50/50 to-white/50 scrollbar-hide">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.isUser ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-3 duration-300`}
                  >
                    <div
                      className={`max-w-sm ${msg.isUser ? "order-2" : "order-1"}`}
                    >
                      {!msg.isUser && (
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-7 h-7 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-md">
                            <Bot className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm font-semibold text-gray-700">
                            {msg.sender}
                          </span>
                          <span className="text-xs text-gray-500">
                            {msg.time}
                          </span>
                        </div>
                      )}
                      <div
                        className={`p-4 rounded-2xl backdrop-blur-md shadow-lg transition-all duration-300 hover:shadow-xl ${
                          msg.isUser
                            ? "bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-br-md ml-8"
                            : "bg-white/90 text-gray-800 rounded-bl-md mr-8 border border-white/30"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                      </div>
                      {msg.isUser && (
                        <div className="text-right mt-2">
                          <span className="text-xs text-gray-500">
                            {msg.time}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {isAITyping && (
                  <div className="flex justify-start animate-in fade-in duration-300">
                    <div className="max-w-sm order-1 mr-8">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-7 h-7 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-md">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-700">
                          Rejoice AI
                        </span>
                      </div>
                      <div className="bg-white/90 p-4 rounded-2xl rounded-bl-md shadow-lg border border-white/30">
                        <TypingIndicator />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-white/20 bg-white/80">
                <div className="flex items-center space-x-3">
                  <div className="flex-1 flex items-center bg-white/80 backdrop-blur-md rounded-full border border-white/30 shadow-md hover:shadow-lg transition-all duration-300">
                    <input
                      type="text"
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) =>
                        e.key === "Enter" && handleSendMessage()
                      }
                      placeholder="Type your message..."
                      className="flex-1 px-6 py-3 bg-transparent text-gray-800 placeholder-gray-500 outline-none text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      className="bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg mr-2 cursor-pointer group"
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {minimized && (
          <div
            className="fixed bottom-6 right-6 z-50 cursor-pointer animate-in slide-in-from-bottom-5 duration-300"
            onClick={() => setMinimized(false)}
          >
            <div className="bg-white/90 backdrop-blur-xl rounded-full border border-white/30 shadow-xl flex items-center space-x-3 px-6 py-4 hover:bg-white hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
              </div>
              <span className="text-sm font-bold text-gray-800 group-hover:text-accent-600 transition-colors duration-300">
                Chat with Rejoice AI
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonasHero;
