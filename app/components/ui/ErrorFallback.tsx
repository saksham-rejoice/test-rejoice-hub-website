import React from "react";

interface ErrorFallbackProps {
  status?: number | string;
  message?: string;
  onRetry?: () => void;
}

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  status = "Error",
  message = "Something went wrong. Please try again.",
  onRetry,
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="mb-6">
        {/* Simple error icon */}
        <svg
          className="mx-auto h-16 w-16 text-danger-500 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 4h.01"
            className="text-danger-600"
          />
        </svg>
      </div>
      <h1 className="text-4xl font-bold text-danger-600 mb-2">{status}</h1>
      <p className="text-lg text-navy-900 mb-6">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 rounded bg-danger-500 text-white font-semibold hover:bg-danger-600 transition"
        >
          Retry
        </button>
      )}
    </div>
  );
};

export default ErrorFallback;
