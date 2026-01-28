import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
  redirect,
} from "react-router-dom";
import client from "~/graphql/apolloClient";
import { GET_OPEN_SOURCE_TOOLS_DETAILS } from "~/graphql/queries/open-source-tools";
import ToolHeaderSection from "~/sections/no-code-tools/ToolHeaderSection";
import ToolCategoriesSection from "~/sections/no-code-tools/ToolCategoriesSection";
import ToolImagesSection from "~/sections/no-code-tools/ToolImagesSection";
import { useState } from "react";
import InfoSection from "~/sections/open-source-tools/InfoSection";
import AboutSection from "~/sections/open-source-tools/AboutSection";
import FeaturesSection from "~/sections/open-source-tools/FeaturesSection";
import BenefitsSection from "~/sections/open-source-tools/BenefitsSection";
import { CMS_URL, WEB_URL } from "~/utils/config";
import { openSourceToolsDescriptionMeta,openSourceToolsTitleMeta } from "~/constant/serviceMetaData";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { data } = await client.query({
    query: GET_OPEN_SOURCE_TOOLS_DETAILS,
    variables: {
      filters: {
        slug: {
          eq: params.slug,
        },
      },
    },
  });

  if (!data?.openSources?.data?.[0]) {
    return redirect("/");
  }

  return {
    tool: data.openSources.data[0].attributes,
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
  const seo = tool.SEO || {};

  // 🎯 Priority:
  // 1. Title from mapping
  // 2. CMS SEO Title
  // 3. Tool name
  const title = 
   openSourceToolsTitleMeta[slug] ||
    seo.Title ||
    tool.toolName ||
    "Open Source Tool";

  // 🎯 Priority for description:
  // 1. CMS SEO Description
  // 2. Tool description
  // 3. Fallback text
  const description =
  openSourceToolsDescriptionMeta[slug] ||
    seo.Description ||
    tool.toolDescription ||
    "Explore open-source tools on RejoiceHub.";

  return [
    { title },
    { name: "description", content: description },
    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/open-source-tools/${slug}`,
    },
  ];
};

const OpenSourceToolDetail = () => {
  const { tool } = useLoaderData() as { tool: any };

  const logoUrl = tool.logo?.data?.attributes?.url
    ? CMS_URL + tool.logo.data.attributes.url
    : undefined;
  const screenshots: string[] = [];
  if (tool.info) {
    const regex = /!\[[^\]]*\]\(([^)]+)\)/g;
    let match;
    while ((match = regex.exec(tool.info))) {
      screenshots.push(
        match[1].startsWith("http") ? match[1] : CMS_URL + match[1]
      );
    }
  }
  const categories = (tool.open_source_categories?.data || []).map(
    (cat: any, i: number) => ({
      id: String(i),
      name: cat.attributes?.categoryName,
    })
  );
  const features = tool.features || [];
  const benefits = tool.benefits || [];

  const [activeTab, setActiveTab] = useState<
    "info" | "about" | "features" | "benefits"
  >("info");

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mb-6">
          <div className="mb-8">
            <a
              href="/open-source-tools"
              className="inline-flex items-center gap-2 px-4 py-2 text-navy-950 hover:text-navy-950 rounded-lg transition-all duration-200"
              aria-label="Back to Open Source Tools"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Tools
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <ToolHeaderSection
              logoUrl={logoUrl}
              toolName={tool.toolName}
              shortDescription={""}
              toolOverallRating={0}
              toolUrl={""}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-8">
              {screenshots.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></span>
                    Demo Images
                  </h2>
                  <ToolImagesSection screenshots={screenshots} />
                </div>
              )}
              <div className="flex justify-center mb-8">
                <div className="flex w-full max-w-xl bg-gray-100 rounded-full p-1">
                  {[
                    { key: "info", label: "Info" },
                    { key: "about", label: "About" },
                    { key: "features", label: "Features" },
                    { key: "benefits", label: "Benefits" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      className={`flex-1 px-6 py-2 rounded-full font-semibold transition-colors duration-200 focus:outline-none text-center
                        ${activeTab === tab.key
                          ? "bg-navy-950 text-white shadow hover:bg-navy-900"
                          : "bg-transparent text-gray-800 hover:bg-gray-200"
                        }
                      `}
                      onClick={() => setActiveTab(tab.key as typeof activeTab)}
                      type="button"
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                {activeTab === "info" && <InfoSection tool={tool} />}
                {activeTab === "about" && <AboutSection tool={tool} />}
                {activeTab === "features" && (
                  <FeaturesSection features={features} />
                )}
                {activeTab === "benefits" && (
                  <BenefitsSection benefits={benefits} />
                )}
              </div>
            </div>
            <aside className="lg:col-span-1 space-y-6">
              {categories.length > 0 && (
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/20 sticky top-6">
                  <ToolCategoriesSection categories={categories} />
                </div>
              )}
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenSourceToolDetail;
