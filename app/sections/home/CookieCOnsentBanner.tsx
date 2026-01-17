import { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import { useCookie } from "~/utils/useCookie";

export default function CookieConsentBanner() {
  const { getCookie, setCookie } = useCookie("rejoicehub-consent");
  const [visible, setVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (!getCookie()) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("accepted", 30);
    setVisible(false);
  };

  const handleReject = () => {
    setCookie("rejected", 30);
    setVisible(false);
  };

  if (!isClient || !visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95vw] max-w-2xl px-4 py-3 bg-primary-100 text-light text-sm rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-center md:text-left">
        <Cookie className="w-4 h-4 text-light shrink-0" />
        <span>
          We use cookies to improve your experience.{" "}
          <span className="hidden sm:inline">
            By using our site, you agree to our cookie policy.
          </span>
        </span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={handleReject}
          className="border border-accent-400 px-3 py-1.5 rounded-md hover:bg-white/10 transition cursor-pointer"
        >
          Reject
        </button>
        <button
          onClick={handleAccept}
          className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-1.5 rounded-md transition cursor-pointer"
        >
          Accept
        </button>
        <button
          onClick={() => setVisible(false)}
          className="p-1 hover:bg-white/10 rounded-md cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-navy-950" />
        </button>
      </div>
    </div>
  );
}
