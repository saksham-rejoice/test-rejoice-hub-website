import {
  Briefcase,
  Star,
  GraduationCap,
  CheckCircle,
  Rocket,
  BriefcaseIcon,
  CircleChevronRight,
} from "lucide-react";
import { JobDetail } from "~/types/careerTypes";

interface JobSectionsProps {
  job: JobDetail;
  onApplyClick?: () => void;
}

const SectionWrapper = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) => (
  <section className="mb-4 p-6">
    <div className="flex items-center gap-3 mb-4">
      <div className="min-w-[40px] min-h-[40px] rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
        {icon}
      </div>
      <h2 className="text-lg md:text-xl font-semibold text-navy-950">
        {title}
      </h2>
    </div>
    <div>{children}</div>
  </section>
);

export default function JobSections({ job, onApplyClick }: JobSectionsProps) {
  return (
    <div className="space-y-6">
      {job.What_you_will_do?.length && job.What_you_will_do.length > 0 && (
        <SectionWrapper
          title="What You Will Do"
          icon={
            <BriefcaseIcon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          }
        >
          <ul className="space-y-3">
            {job.What_you_will_do.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-navy-950 p-2 rounded-md transition"
              >
                <CircleChevronRight className="text-orange-500 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0" />
                <span className="text-base">{item.title}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}

      {job.Requirements?.length && job.Requirements.length > 0 && (
        <SectionWrapper
          title="Requirements"
          icon={<Rocket className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />}
        >
          <ul className="space-y-3">
            {job.Requirements.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-navy-950 p-2 rounded-md transition"
              >
                <CircleChevronRight className="text-orange-500 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0" />
                <span className="text-base">{item.title}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}

      {job.Benefits?.length && job.Benefits.length > 0 && (
        <SectionWrapper
          title="Perks & Benefits"
          icon={<Star className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />}
        >
          <ul className="space-y-3">
            {job.Benefits.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-navy-950 p-2 rounded-md transition"
              >
                <CircleChevronRight className="text-orange-500 mt-1 w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 shrink-0" />
                <span className="text-base">{item.title}</span>
              </li>
            ))}
          </ul>
        </SectionWrapper>
      )}

      {job.educationalQualification?.length &&
        job.educationalQualification.length > 0 && (
          <SectionWrapper
            title="Educational Qualifications"
            icon={
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            }
          >
            <ul className="space-y-3">
              {job.educationalQualification.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-navy-950 p-2 rounded-md transition"
                >
                  <span className="text-base">{item.title}</span>
                </li>
              ))}
            </ul>
          </SectionWrapper>
        )}

      {(job.conclusion || true) && (
        <SectionWrapper
          title="Next Steps"
          icon={<Briefcase className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />}
        >
          {job.conclusion && (
            <p className="text-navy-950 text-base mb-4">{job.conclusion}</p>
          )}
          <button
            className="mt-4 bg-primary-300 text-white cursor-pointer  rounded-full px-6 py-3 font-medium text-sm hover:bg-primary-200 transition"
            onClick={onApplyClick}
          >
            Apply for this position
          </button>
        </SectionWrapper>
      )}
    </div>
  );
}
