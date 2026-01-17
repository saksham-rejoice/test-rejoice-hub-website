import { JobDetail } from "~/types/careerTypes";
import {
  Briefcase,
  Clock,
  CalendarDays,
  Wallet,
  Users,
  CalendarCheck,
} from "lucide-react";

const metaFields = [
  { label: "Experience", key: "experience", icon: <Briefcase size={18} /> },
  { label: "Working Hours", key: "workingHours", icon: <Clock size={18} /> },
  { label: "Working Days", key: "workingDays", icon: <CalendarDays size={18} /> },
  { label: "Salary", key: "salary", icon: <Wallet size={18} /> },
  { label: "Vacancy", key: "vacancy", icon: <Users size={18} /> },
  { label: "Deadline", key: "deadline", icon: <CalendarCheck size={18} /> },
];
interface JobDetailsSidebarProps {
  job: JobDetail;
}

export default function JobDetailsSidebar({ job }: JobDetailsSidebarProps) {
  return (
    <aside className="lg:w-1/4 w-full mb-8 lg:mb-0">
      <div className="lg:sticky top-8  p-6 border-r-2 border-gray-300">
        <h2 className="text-xl font-semibold mb-4 text-navy-950">
          Job Details
        </h2>
        <ul className="space-y-6">
          {metaFields.map(({ label, key, icon }) => {
            let value = job[key as keyof JobDetail];
            if (key === "vacancy" && typeof value === "number")
              value = `No of Vacancies: ${value}`;
            if (key === "deadline" && typeof value === "string") {
              const d = new Date(value);
              value = d.toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              });
            }
            if (typeof value !== "string" && typeof value !== "number")
              return null;
            return value ? (
              <li key={key}>
                <div className="flex items-center gap-2 text-sm text-navy-950 mb-1 font-bold">
                <span className="text-orange-500">{icon}</span>
                  {label}
                </div>
                <div className="text-base text-navy-950 font-normal">
                  {value}
                </div>
              </li>
            ) : null;
          })}
        </ul>
      </div>
    </aside>
  );
}
