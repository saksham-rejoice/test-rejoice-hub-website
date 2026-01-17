import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      className,
      containerClassName,
      labelClassName,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={twMerge("flex flex-col gap-2", containerClassName)}>
        {label && (
          <label
            className={twMerge(
              "text-sm font-medium text-gray-700",
              labelClassName
            )}
          >
            {label}
            {/* {required && <span className="text-red-500">*</span>} */}
          </label>
        )}
        <input
          ref={ref}
          className={twMerge(
            "w-full px-4 py-3 rounded-lg border text-base border-gray-200 bg-white text-gray-900",
            "placeholder:text-gray-400 focus:outline-none placeholder:text-base",
            "transition-all duration-200 ease-in-out",
            error &&
              "border-red-500 focus:ring-red-500/20 focus:border-red-500",
            className
          )}
          {...props}
        />
        {error && <span className="text-sm text-red-500">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
