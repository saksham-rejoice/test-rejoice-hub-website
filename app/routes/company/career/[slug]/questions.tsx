import React from "react";
import {
  useLoaderData,
  useNavigate,
  type LoaderFunctionArgs,
} from "react-router-dom";
import { redirect } from "react-router-dom"; // keep redirect imported explicitly
import client from "~/graphql/apolloClient";
import { GET_JOB_DETAILS } from "~/graphql/queries/careers";
import { JobDetail } from "~/types/careerTypes";
import QuestionsSection from "~/sections/career/main/QuestionsSection";
import { Button } from "~/components/ui/button";
import {
  ArrowLeft,
  Briefcase,
  Clock,
  CalendarDays,
  Wallet,
  Users,
  CalendarCheck,
} from "lucide-react";
import { getQuestions } from "../../../../../app/api/careerApi";

const metaFields = [
  { label: "Experience", key: "experience", icon: <Briefcase size={18} /> },
  { label: "Working Hours", key: "workingHours", icon: <Clock size={18} /> },
  { label: "Working Days", key: "workingDays", icon: <CalendarDays size={18} /> },
  { label: "Salary", key: "salary", icon: <Wallet size={18} /> },
  { label: "Vacancy", key: "vacancy", icon: <Users size={18} /> },
  { label: "Deadline", key: "deadline", icon: <CalendarCheck size={18} /> },
];

interface JobResponse {
  jobDetail: {
    data: Array<{
      id: string;
      attributes: JobDetail;
    }>;
  };
}

type LoaderData = {
  job: JobDetail;
  questions: any;
  questionsError: string | null;
  id: string;
};

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { slug } = params;
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  console.log("Questions loader called, slug:", slug, "id:", id);

  if (!id) {
    console.warn("No id found in search params, redirecting to /careers");
    return redirect("/careers");
  }

  const { data } = await client.query<JobResponse>({
    query: GET_JOB_DETAILS,
    variables: {
      filters: { slug: { eq: slug } },
      pagination: { limit: 1 },
    },
    fetchPolicy: "network-only",
  });

  const job = data?.jobDetail?.data?.[0]?.attributes;
  if (!job) {
    console.warn("No job found for slug:", slug, "redirecting to /careers");
    return redirect("/careers");
  }

  try {
    // 👇 THIS WILL RUN ON THE SERVER SIDE
    const questions = await getQuestions(id);
    console.log("Questions from API (loader):", questions);
    return { job, questions, questionsError: null,id } satisfies LoaderData;
  } catch (error: any) {
    console.error("Failed to fetch questions in loader:", error);
    const message =
      typeof error === "string"
        ? error
        : error?.message || "Unknown error fetching questions";
    // we still return job so the page can render, but include the error message
    return { job, questions: null, questionsError: message,id } satisfies LoaderData;
  }
}

export default function QuestionsPage() {
  const { job, questions, questionsError,id } = useLoaderData() as LoaderData;
  const navigate = useNavigate();

  const handleCloseModal = () => {
    navigate(-1);
  };

  console.log("QuestionsPage rendered, questions:", questions);
  console.log("QuestionsPage rendered, questionsError:", questionsError);

  return (
    <div className="min-h-screen bg-accent-50 py-10 px-2 md:px-4">
      <div className="max-w-7xl mx-auto">
        <Button
          variant="ghost"
          className="mb-6"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Job Posting
        </Button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Job Details Sidebar */}
          <aside className="lg:w-1/4 w-full mb-8 lg:mb-0">
            <div className="lg:sticky top-8 p-6 border-r-2 border-gray-300">
              <h2 className="text-xl font-semibold mb-4 text-navy-950">
                Job Details
              </h2>
              <ul className="space-y-6">
                {metaFields.map(({ label, key, icon }) => {
                  let value = job[key as keyof JobDetail];

                  if (key === "vacancy" && typeof value === "number") {
                    value = `No of Vacancies: ${value}`;
                  }

                  if (key === "deadline" && typeof value === "string") {
                    const d = new Date(value);
                    value = d.toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    });
                  }

                  if (typeof value !== "string" && typeof value !== "number") {
                    return null;
                  }

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

          {/* Questions Section */}
          <main className="flex-1 w-full">
            <div className="bg-white p-8 rounded-lg shadow-md">
              {questionsError && (
                <p className="mb-4 text-sm text-red-600">
                  Failed to load questions: {questionsError}
                </p>
              )}

              <QuestionsSection
             
                onCloseModal={handleCloseModal}
                // skillQuestions={questions}
                // id={id}
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
