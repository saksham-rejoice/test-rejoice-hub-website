import React, { useState } from "react";
import { MetaFunction, LoaderFunctionArgs, useLoaderData, redirect } from "react-router";
import client from "~/graphql/apolloClient";
import { GET_JOB_DETAILS } from "~/graphql/queries/careers";
import { JobDetail } from "~/types/careerTypes";
import JobDetailsSidebar from "~/sections/career/other/JobDetailsSidebar";
import TabSwitcher from "~/components/ui/TabSwitcher";
import OverviewSection from "~/sections/career/main/OverviewSection";
import ApplicationSection from "~/sections/career/main/ApplicationSection";
import QuestionsSection from "~/sections/career/main/QuestionsSection";
import { WEB_URL } from "~/utils/config";

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data) {
    return [
      { title: "Job not found" },
      { name: "description", content: "No job found for this slug." },
    ];
  }
  const title = data.positionType || "Career | Rejoicehub";
  const description =
    data.shortDescription ||
    "Explore exciting career opportunities at Rejoicehub.";

  
  return [{ title }, { name: "description", content: description },{
     tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/job-details/${params.slug}`,
  }];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const { data } = await client.query({
    query: GET_JOB_DETAILS,
    variables: {
      filters: { slug: { eq: slug } },
      pagination: { limit: 50 },
      requirementsPagination2: { limit: 50 },
      whatYouWillDoPagination2: { limit: 50 },
      educationalQualificationPagination2: { limit: 50 },
      jobDetailPagination2: { limit: 1 },
    },
    fetchPolicy: "network-only",
  });
  const job = data?.jobDetail?.data?.[0]?.attributes;
  if (!job) {
    return redirect("/");
  }
  return job;
}

const getTabs = (activeTab: string) => {
  return [
    {
      label: "Overview",
      value: "overview",
      disabled: activeTab === "questions",
    },
    {
      label: "Application",
      value: "application",
      disabled: activeTab === "overview" || activeTab === "questions",
    },
    {
      label: "Questions",
      value: "questions",
      disabled: activeTab === "overview" || activeTab === "application",
    },
  ];
};

export default function CareerDetail() {
  const job = useLoaderData() as JobDetail;
  const [activeTab, setActiveTab] = useState("overview");

  const TABS = getTabs(activeTab);

  let content = null;
  if (activeTab === "overview") {
    content = (
      <OverviewSection
        job={job}
        onApplyClick={() => setActiveTab("application")}
      />
    );
  } else if (activeTab === "application") {
    content = (
      <ApplicationSection
        job={job}
        changeTab={() => setActiveTab("questions")}
      />
    );
  } else if (activeTab === "questions") {
    content = (
      <QuestionsSection onCloseModal={() => setActiveTab("overview")} />
    );
  }

  return (
    <div className="min-h-screen bg-accent-50 py-10 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8">
          <TabSwitcher tabs={TABS} value={activeTab} onChange={setActiveTab} />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <JobDetailsSidebar job={job} />
          <main className="flex-1 w-full">
            <div className="p-8">{content}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
