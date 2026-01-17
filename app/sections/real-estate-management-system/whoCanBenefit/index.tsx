import {
  Building2,
  UserCheck,
  TrendingUp,
  Globe,
  Factory,
} from "lucide-react";

const beneficiaries = [
  {
    id: 1,
    title: "Real Estate Agencies",
    icon: Building2,
  },
  {
    id: 2,
    title: "Property Managers",
    icon: UserCheck,
  },
  {
    id: 3,
    title: "Landlords & Investors",
    icon: TrendingUp,
  },
  {
    id: 4,
    title: "Rental Platforms",
    icon: Globe,
  },
  {
    id: 5,
    title: "Commercial Property Owners",
    icon: Factory,
  },
];

export default function WhoCanBenefit() {
  return (
    <section className="py-20 max-mobile:py-12 bg-gradient-to-b from-white to-[#F9FAFB]">
      <div className="container-lg">
        <h2 className="heading2 text-primary text-center mb-12">
          Who Can Benefit from This{" "}
          <span className="text-gradient">
            Property Management System for Real Estate?
          </span>
        </h2>

        <div className="max-w-[800px] mx-auto">
          <ul className="space-y-4">
            {beneficiaries.map((item) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={item.id}
                  className="flex items-center gap-4 text-lg text-primary font-medium bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <IconComponent className="w-5 h-5 text-[#FF9404] shrink-0" />
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}