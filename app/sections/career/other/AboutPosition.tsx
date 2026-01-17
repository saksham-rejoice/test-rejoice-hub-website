import { BriefcaseBusiness } from "lucide-react";

interface AboutPositionProps {
  shortDescription: string;
}

export default function AboutPosition({ shortDescription }: AboutPositionProps) {
  return (
    <section className="mb-2 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
          <BriefcaseBusiness className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        <h2 className="text-xl font-semibold text-navy-950">About the Position</h2>
      </div>
      <p className="text-navy-950 text-base leading-relaxed">{shortDescription}</p>
    </section>
  );
}
