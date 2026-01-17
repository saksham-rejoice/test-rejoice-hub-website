import React from "react";

type Tab = {
  label: string;
  value: string;
  disabled?: boolean;
};

type TabSwitcherProps = {
  tabs: Tab[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
};

const TabSwitcher: React.FC<TabSwitcherProps> = ({
  tabs,
  value,
  onChange,
  className,
}) => {
  return (
    <div
      className={`flex space-x-2 bg-white rounded-full shadow-sm p-1 ${
        className || ""
      }`}
    >
      {tabs.map((tab) => (
        <button
          key={tab.value}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-150 focus:outline-none ${
            value === tab.value
              ? "bg-navy-950 text-white shadow"
              : "bg-transparent text-gray-700 hover:bg-gray-100"
          } ${tab.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => !tab.disabled && onChange(tab.value)}
          disabled={tab.disabled}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;
