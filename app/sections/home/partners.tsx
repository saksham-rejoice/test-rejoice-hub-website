import React from "react";
import { partners } from "../../constant/company";

const Partners = () => {
  return (
    <div className="py-20 max-mobile:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="heading3 text-center text-navy-950 mb-12">
          Join these industry leaders who trust Rejoicehub as their AI partners
        </h2>

        <div className="">
          {/* Faded gradient edges */}

          {/* Static grid logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 ">
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center p-4 backdrop-blur-sm rounded-2xl transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/120x60/e5e7eb/6b7280?text=${partner.name}`;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
