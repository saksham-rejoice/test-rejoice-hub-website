import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "~/lib/utils";

interface AccordionContextValue {
  openItem: string | null;
  setOpenItem: (value: string | null) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(
  undefined
);

interface AccordionProps {
  type?: "single";
  collapsible?: boolean;
  defaultValue?: string;
  children: React.ReactNode;
  className?: string;
}

const Accordion = ({
  defaultValue,
  children,
  className,
}: AccordionProps) => {
  const [openItem, setOpenItem] = React.useState<string | null>(
    defaultValue || null
  );

  return (
    <AccordionContext.Provider value={{ openItem, setOpenItem }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

const AccordionItemContext = React.createContext<string>("");

const AccordionItem = ({ value, children, className }: AccordionItemProps) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <div className={cn("border-b", className)}>{children}</div>
    </AccordionItemContext.Provider>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const context = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);

  if (!context) {
    throw new Error("AccordionTrigger must be used within Accordion");
  }

  const { openItem, setOpenItem } = context;
  const isOpen = openItem === value;

  const handleClick = () => {
    setOpenItem(isOpen ? null : value);
  };

  return (
    <button
      className={cn(
        "flex flex-1 w-full items-center justify-between py-4 font-medium transition-all duration-200 hover:underline text-left",
        className
      )}
      onClick={handleClick}
      type="button"
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const context = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState<number>(0);

  if (!context) {
    throw new Error("AccordionContent must be used within Accordion");
  }

  const { openItem } = context;
  const isOpen = openItem === value;

  React.useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300 ease-in-out"
      )}
      style={{
        maxHeight: isOpen ? `${height}px` : "0px",
        opacity: isOpen ? 1 : 0,
      }}
    >
      <div ref={contentRef} className={cn("pb-4 pt-0", className)}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
