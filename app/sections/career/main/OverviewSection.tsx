import React from "react";
import CareerHeader from "~/sections/career/other/CareerHeader";
import AboutPosition from "~/sections/career/other/AboutPosition";
import JobSections from "~/sections/career/other/JobSections";
import { JobDetail } from "~/types/careerTypes";

type OverviewSectionProps = {
  job: JobDetail;
  onApplyClick?: () => void;
};

const OverviewSection: React.FC<OverviewSectionProps> = ({
  job,
  onApplyClick,
}) => (
  <>
    <CareerHeader positionType={job.positionType} />
    <AboutPosition shortDescription={job.shortDescription} />
    <JobSections job={job} onApplyClick={onApplyClick} />
  </>
);

export default OverviewSection;
