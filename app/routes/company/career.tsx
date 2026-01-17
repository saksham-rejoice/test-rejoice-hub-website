import { MetaFunction, LoaderFunctionArgs, useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import HeroSection from "~/components/comman/herosection";
import client from "../../graphql/apolloClient";
import { GET_ALL_JOB_POST } from "../../graphql/queries/careers";
import InnovativeCulture from "~/sections/career/other/innovative";
import FAQ from "~/sections/home/faq";
import { LoaderData } from "~/types/careerTypes";
import { WEB_URL } from "~/utils/config";
import SectionHeader from "~/components/ui/SectionHeader";

export const meta: MetaFunction = () => [
  { title: "Careers | Rejoicehub" },
  {
    name: "description",
    content:
      "Explore exciting career opportunities at Rejoicehub. Join our passionate team and make a difference!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/career`,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const { data } = await client.query({
    query: GET_ALL_JOB_POST,
    variables: {
      jobDetailPagination2: {
        page: 1,
        pageSize: 20,
      },
    },
  });
  return data;
}

export default function Career() {
  const loaderData = useLoaderData() as LoaderData;
  const jobs = loaderData.jobDetail.data;

  return (
    <>
      <div className=" ">
        <HeroSection
          title="Careers at Rejoicehub"
          subtitle="Join the RejoiceHub LLP community and be a valued member of our team, contributing to meaningful projects and shared success."
        />
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="heading3 text-center mb-4 text-navy-950">
              We're Currently hiring
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
              Explore our current job openings and find your next opportunity to
              grow with us.
            </p>
          </div>
          <div className="grid gap-8 max-mobile:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, idx) => {
              const j = job.attributes;
              return (
                <div
                  key={j.slug}
                  className="text-center rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                >
                  <article className="p-6 flex flex-col h-full max-mobile:py-7 max-mobile:px-4">
                    {j.logo?.data?.attributes?.url && (
                      <img
                        src={`https://cms.rejoicehub.com${j.logo.data.attributes.url}`}
                        alt={j.positionType}
                        className="mb-4 w-20 max-mobile:w-14 max-mobile:h-14 h-20 object-cover max-mobile:mx-0 mx-auto shadow"
                      />
                    )}
                    <h3 className="text-xl mt-5 font-semibold text-navy-950 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-200">
                      {j.positionType}
                    </h3>
                    <p className="text-navy-950 mb-4 line-clamp-3 leading-relaxed">
                      {j.shortDescription}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 mt-auto">
                      <span className="inline-flex items-center px-3  py-2 rounded-full text-xs font-semibold bg-gradient-to-b from-[rgba(255,100,0,0.14)] to-[rgba(255,145,4,0.14)] text-gray-800 ">
                        Required: {j.requirePerson} candidate
                        {j.requirePerson > 1 ? "s" : ""}
                      </span>
                      <span className="text-xs text-navy-950">
                        <a
                          href={`/job-details/${j.slug}`}
                          className="flex items-center gap-2 font-semibold text-navy-950 hover:text-navy-800 hover:bg-amber-50 hover:border-amber-100 border px-4 py-2 rounded-lg"
                        >
                          Join our team
                        </a>
                      </span>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <InnovativeCulture />
      <div className="py-20 max-mobile:py-12 bg-accent-50">
        <SectionHeader
          badge="Frequently Asked Questions"
          title="Get Your Questions Answered"
          subtitle="Everything you need to know about our AI implementation process and services."
        />
        <FAQ />
      </div>
    </>
  );
}
