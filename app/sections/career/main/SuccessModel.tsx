import { X } from "lucide-react";

interface CareerDetailsSuccessModelProps {
  onClose: () => void;
}

const passedImg = "/success.png";
const failedImg = "/failed.png";

export default function CareerDetailsSuccessModel({
  onClose,
}: CareerDetailsSuccessModelProps) {


  const imageSrc = passedImg;
  const headingText = "Assessment Submitted";
  const messageText = "Thanks for completing the assessment. Our team will review your submission and get back to you soon.";

  return (
    <>
      <div className="fixed inset-0 z-[11] bg-black/60" />

      <div
        className="fixed inset-0 z-[12] flex justify-center items-center px-4"
        role="dialog"
        aria-modal="true"
      >
        <div className="w-full max-w-[800px] bg-white rounded-2xl shadow-xl p-6 md:p-10 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-7 h-7 text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <X className="w-full h-full" />
          </button>

          <div className="flex flex-col justify-center items-center text-center">
            <img
              src={imageSrc}
              alt="Assessment Passed"
              width={277}
              height={105}
              className="w-[200px] md:w-[277px] h-auto"
            />

            <h2 className="mt-8 text-2xl font-semibold text-gray-800 md:text-3xl">
              {headingText}
            </h2>

            <p className="mt-3 text-gray-600 text-base md:text-lg">
              {messageText}
            </p>

            <div className="mt-6 bg-blue-50 border border-navy-800 rounded-xl px-6 py-4 text-left w-full max-w-lg">
              <h4 className="text-navy-950 font-bold mb-2 text-base md:text-lg">
                Next Steps:
              </h4>
              <ul className="text-sm text-navy-950 space-y-2">
                <li>• You will receive a GitHub collaboration invitation</li>
                <li>
                  • Check the repository's <code>README</code> file for
                  practical task details
                </li>
                <li>• Follow the guidelines carefully to proceed</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
