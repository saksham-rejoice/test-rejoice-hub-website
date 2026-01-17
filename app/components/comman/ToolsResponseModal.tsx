import React, { useState } from "react";
import { X, Maximize2, Minimize2, Send, Lock } from "lucide-react";
import UserAuthModal from "./UserAuthModal";

interface ToolsResponseCanvasProps {
  isOpen: boolean;
  loading: boolean;
  data: any | null;
  onClose: () => void;
}

const ToolsResponseCanvas: React.FC<ToolsResponseCanvasProps> = ({
  isOpen,
  loading,
  data,
  onClose,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  if (!isOpen) return null;

  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  const handleAuthSuccess = () => {
    setIsLocked(false);
    setShowAuthModal(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-accent-50 flex flex-col md:flex-row bg-white overflow-hidden">
      <div
        className={`${
          isFullscreen ? "hidden" : "w-full md:w-80"
        } bg-primary-100 border-b md:border-b-0 md:border-r border-primary-200 flex flex-col h-full transition-all duration-300`}
      >
        <div className="p-4 border-b border-primary-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-white">Tools Response</h2>
          <button
            onClick={toggleFullscreen}
            className="p-2 cursor-pointer rounded-md hover:bg-accent-100 transition"
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-white" />
            ) : (
              <Maximize2 className="w-4 h-4 text-white" />
            )}
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 sm:py-6 space-y-6">
          {data?.sections?.some((s: any) => s.items?.length > 0) && (
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white border-b border-primary-200 pb-2">
                Recommended Tools
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1 pt-2">
                {data.sections
                  .flatMap((s: any) => s.items || [])
                  .map((item: any, idx: number) => (
                    <li key={idx}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-white text-sm break-words"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {data?.sections?.some((s: any) => s.alternatives?.length > 0) && (
            <div className="space-y-2">
              <h3 className="text-base font-semibold text-white border-b border-primary-200 pb-2">
                Alternatives
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1 pt-1">
                {data.sections
                  .flatMap((s: any) => s.alternatives || [])
                  .map((alt: any, idx: number) => (
                    <li key={idx}>
                      <a
                        href={alt.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-white text-sm break-words"
                      >
                        {alt.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          )}
        </div>
        <div className="border-t border-primary-200 p-3 sm:p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isLocked) {
                setShowAuthModal(true);
                return;
              }
              const query = e.currentTarget.query.value;
              e.currentTarget.reset();
            }}
            className="flex items-center gap-2"
          >
            <input
              name="query"
              placeholder="Ask more about these tools..."
              className="flex-1 px-3 py-2 text-sm border bg-primary-200 border-primary-100 placeholder:text-white text-white rounded-md focus:outline-none w-full"
            />
            <button
              type="submit"
              className="p-2 aspect-square cursor-pointer rounded-full bg-primary-200 hover:bg-orange-500 text-white transition-all hover:scale-105"
            >
              <span className="relative group">
                {isLocked ? (
                  <Lock className="w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2">
                  {isLocked ? "Unlock" : "Let's go"}
                </span>
              </span>
            </button>
          </form>
        </div>
      </div>

      <UserAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSuccess={handleAuthSuccess}
      />

      <div className="flex-1 flex flex-col bg-accent-50 h-full overflow-hidden">
        <div className="h-14 px-4 sm:px-6 border-b bg-blue-900  border-gray-300 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#DC2626] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B] cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-[#22D3EE] cursor-pointer" />
          </div>
          <div className="flex items-center space-x-2">
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="p-2 hover:bg-accent-100 cursor-pointer rounded-md transition"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 hover:bg-accent-100 cursor-pointer rounded-md transition"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3">
              <div className="w-16 h-16 border-4 border-navy-900 border-t-transparent animate-spin rounded-full" />
              <p className="text-xl font-semibold text-navy-900">
                Generating response...
              </p>
              <p className="text-sm text-navy-900">
                Please wait while we process your request
              </p>
            </div>
          ) : data ? (
            <div className="max-w-6xl mx-auto space-y-12">
              {data.title && (
                <div className="text-center space-y-2 px-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-900">
                    {data.title}
                  </h1>
                  <div className="w-20 sm:w-24 h-1 bg-navy-900 mx-auto rounded-full" />
                </div>
              )}

              {data.sections?.map((section: any, idx: number) => (
                <div key={idx} className="space-y-6 px-2">
                  {section.heading && (
                    <div className="border-l-4 border-orange pl-4 sm:pl-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-navy-900">
                        {section.heading}
                      </h2>
                    </div>
                  )}

                  {section.items?.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.items.map((item: any, i: number) => (
                        <a
                          key={i}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                        >
                          <h3 className="text-base sm:text-lg font-bold text-navy-900 mb-2 group-hover:text-navy-900">
                            {item.name}
                          </h3>
                          {item.useCase && (
                            <p className="text-sm text-primary">
                              <strong>Use case:</strong> {item.useCase}
                            </p>
                          )}
                          {item.features && (
                            <p className="text-sm text-navy-900 mt-1">
                              <strong>Features:</strong> {item.features}
                            </p>
                          )}
                          {item.deployment && (
                            <p className="text-sm text-navy-900 mt-1">
                              <strong>Deployment:</strong> {item.deployment}
                            </p>
                          )}
                        </a>
                      ))}
                    </div>
                  )}

                  {section.steps?.length > 0 && (
                    <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] space-y-4">
                      <h3 className="text-lg font-semibold text-navy-900">
                        Steps
                      </h3>
                      <ol className="space-y-2 pl-2">
                        {section.steps.map((step: string, idx: number) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <div className=" bg-navy-600 text-primary rounded-full flex items-center justify-center text-sm font-semibold">
                              {idx + 1}.
                            </div>
                            <p className="text-navy-900">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {section.alternatives?.length > 0 && (
                    <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
                      <ul className="space-y-2">
                        {section.alternatives.map((alt: any, i: number) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 mt-2 bg-warning-500 rounded-full" />
                            <a
                              href={alt.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-navy-900 hover:underline"
                            >
                              {alt.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.tips?.length > 0 && (
                    <div className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]">
                      <h3 className="text-lg font-semibold text-warning-500 mb-3">
                        Pro Tips
                      </h3>
                      <ul className="space-y-2">
                        {section.tips.map((tip: string, i: number) => (
                          <li key={i} className="flex items-start space-x-2">
                            <div className="w-2 h-2 mt-2 bg-warning-500 rounded-full" />
                            <span className="text-navy-900">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ToolsResponseCanvas;
