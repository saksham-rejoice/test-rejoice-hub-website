import React from "react";

type HeroSectionProps = {
  title: string;
  subtitle: React.ReactNode;
};

const HeroSection: React.FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="pt-28 pb-20 bg-light">
      <div className=" max-w-7xl mx-auto px-4 sm:px-8  text-center ">
        <h1 className="text-primary text-center mb-4">{title}</h1>

        <div className="text-lg max-w-[612px] mb-4 text-grey-500 tracking-[-0.32px] mx-auto text-center">
          {subtitle}
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-4 -right-4 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-gradient-to-r from-warning-700 via-warning-600 to-warning-400 bg-opacity-40 rounded-full blur-sm" />
        <div className="absolute top-[30%] -left-6 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-r from-warning-700 via-warning-600 to-warning-400 bg-opacity-40 rounded-full blur-sm" />
        <div className="absolute bottom-[20%] right-[25%] w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-gradient-to-r from-warning-700 via-warning-600 to-warning-400 bg-opacity-40 rounded-full blur-sm" />
      </div>
    </section>
  );
};

export default HeroSection;
