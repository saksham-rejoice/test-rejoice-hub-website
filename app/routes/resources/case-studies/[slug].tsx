import { MetaFunction, LoaderFunctionArgs, useLoaderData, redirect } from 'react-router-dom';
import client from '~/graphql/apolloClient';
import { GET_CASE_STUDY_DETAILS } from '~/graphql/queries/case-studies';
import CaseStudiesDetailMainSection from '~/sections/case-studies/CaseStudiesDetailMainSection';
import { WEB_URL } from '~/utils/config';


export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: 'Case Study not found' },
      { name: 'description', content: 'No case study found for this slug.' },
    ];
  }

  const title = data.attributes?.SEO?.Title || "Case Study Details";
  const description = data.attributes?.SEO?.Description || "Explore our case studies and see how we've helped businesses like yours.";

  const slug = data?.attributes?.slug

  return [
    { title },
    { name: "description", content: description },
    {
      tagName: "link",
       rel: "canonical",
       href: `${WEB_URL}/case-studies/${slug}`,
    }
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;

  const { data } = await client.query({
    query: GET_CASE_STUDY_DETAILS,
    variables: {
      filters: { slug: { eq: slug } },
      pagination: { limit: 1 },
    },
    fetchPolicy: 'network-only',
  });

  const caseStudy = data?.newCaseStudies?.data?.[0];

  if (!caseStudy) {
    return redirect("/");
  }

  return caseStudy;
}

export default function CaseStudyDetailPage() {
  const caseStudy = useLoaderData() as any;

  return (
    <div className="">
      <CaseStudiesDetailMainSection caseStudy={caseStudy.attributes} />
    </div>
  );
}
