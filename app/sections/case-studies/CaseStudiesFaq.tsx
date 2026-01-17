import React, { useState } from "react";
import { CaseStudyFaqType } from "~/types/caseStudyTypes";

type Props = {
  faqs: CaseStudyFaqType[];
};

const CaseStudiesFaq: React.FC<Props> = ({ faqs }) => {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const handleToggle = (key: string) => {
    setActiveKey((prev) => (prev === key ? null : key));
  };
  if (!faqs || faqs.length === 0) return null;
  return (
    <section className="border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)] text-primary w-full py-16 px-4 sm:px-8 mb-8 rounded-xl ">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={faq.id || idx} className="mb-2">
              {faq.faq_details?.map((item, itemIdx) => (
                <details
                  key={item.id ?? itemIdx}
                  open={activeKey === (item.id ?? `${idx}-${itemIdx}`)}
                  className="group border-b border-navy-900 transition-all duration-300"
                >
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggle(item.id ?? `${idx}-${itemIdx}`);
                    }}
                    className="flex justify-between items-center cursor-pointer py-4 text-lg font-medium text-navy-900 list-none"
                  >
                    <span>{item.question}</span>
                    <svg
                      className="w-5 h-5 text-navy-900 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="transition-all duration-500 ease-in-out">
                    <p className="text-base font-light text-navy-900 leading-relaxed pb-4 pr-2">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesFaq;
