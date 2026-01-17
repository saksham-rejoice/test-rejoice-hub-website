import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
  redirect,
} from "react-router-dom";
import client from "~/graphql/apolloClient";
import { FaStar } from "react-icons/fa";
import { cn } from "~/lib/utils";
import { GET_NOCODE_TOOL_DETAILS } from "~/graphql/queries/no-code-tools";
import ToolHeaderSection from "~/sections/no-code-tools/ToolHeaderSection";
import ToolImagesSection from "~/sections/no-code-tools/ToolImagesSection";
import ToolAboutSection from "~/sections/no-code-tools/ToolAboutSection";
import ToolUseCasesSection from "~/sections/no-code-tools/ToolUseCasesSection";
import ToolRatingsSection from "~/sections/no-code-tools/ToolRatingsSection";
import ToolCategoriesSection from "~/sections/no-code-tools/ToolCategoriesSection";
import SimilarToolsSection from "~/sections/no-code-tools/SimilarToolsSection";
import { LoaderData } from "~/types/noCodeTypes";
import { CMS_URL, WEB_URL } from "~/utils/config";
import { noCodeToolsTitleMeta } from "~/constant/serviceMetaData";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await client.query({
    query: GET_NOCODE_TOOL_DETAILS,
    variables: {
      filters: {
        slug: {
          eq: params.slug,
        },
      },
    },
  });

  if (!data?.noCodeTools?.data?.[0]) {
    return redirect("/");
  }

  return {
    tool: data.noCodeTools.data[0].attributes,
  };
};

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  if (!data?.tool) {
    return [
      { title: "Not Found | Rejoicehub" },
      { name: "description", content: "Tool not found" },
    ];
  }

  const slug = params?.slug ?? "";
  const tool = data.tool;

  // 🎯 Title priority:
  // 1. From SEO mapping file
  // 2. CMS SEO Title
  // 3. Tool Name
  const title =
    tool.SEO?.Title ||
    tool.toolName ||
    "No-Code Tool";

  // 🎯 Description priority:
  // 1. CMS SEO Description
  // 2. Tool Short Description
  // 3. Fallback text
  const description =
    noCodeToolsTitleMeta[slug] ||
    tool.SEO?.Description ||
    tool.shortDescription ||
    "Explore no-code tools at RejoiceHub.";

  return [
    { title },
    { name: "description", content: description },
    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/no-code-tools/${slug}`,
    },
  ];
};
const NoCodeToolDetail = () => {
  const { tool } = useLoaderData<LoaderData>();

  const renderStars = (rating: number, size = "w-5 h-5") => (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={cn(
            size,
            star <= rating ? "text-yellow-400" : "text-gray-300"
          )}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-amber-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-6">
        <div className="mb-8 max-mobile:mb-5">
          <a
            href="/no-code-tools"
            className="inline-flex items-center gap-2 px-4 py-2 text-navy-950 hover:text-navy-950 rounded-lg transition-all duration-200"
            aria-label="Back to No Code Tools"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tools
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <ToolHeaderSection
          logoUrl={`${CMS_URL}${tool.logo?.data?.attributes?.url || ""}`}
          toolName={tool.toolName}
          shortDescription={tool.shortDescription}
          toolOverallRating={Number(tool.tool_overall_rating) || 0}
          toolUrl={tool.tool_url}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <ToolImagesSection
              screenshots={
                tool.toolImages?.data?.map(
                  (img) => `${CMS_URL}${img?.attributes?.url}`
                ) || []
              }
            />
            <ToolAboutSection info={tool.info} />
            <ToolUseCasesSection useCases={tool.useCases} />
          </div>
          <aside className="space-y-6">
            <ToolRatingsSection
              toolOverallRatingDescription={
                tool.tool_overall_rating_description
              }
              ratingChart={tool.ratingChart}
              renderStars={renderStars}
            />
            <ToolCategoriesSection
              categories={
                tool.no_code_tool_categories?.data?.map((cat) => ({
                  id: cat.id,
                  name: cat.attributes?.name,
                })) || []
              }
            />
          </aside>
        </div>
        <SimilarToolsSection
          similarTools={tool.similar_tools?.data?.map((t) => ({
            toolName: t.attributes!.toolName,
            shortDescription: t.attributes!.shortDescription,
            slug: t.attributes!.slug,
            logo: t.attributes?.logo,
          }))}
        />
      </div>
    </div>
  );
};

export default NoCodeToolDetail;
