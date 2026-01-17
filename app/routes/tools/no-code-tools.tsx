import { useEffect, useState } from "react";
import {
  LoaderFunctionArgs,
  MetaFunction,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import client from "~/graphql/apolloClient";
import NoCodeToolsQuery from "~/graphql/queries/no-code-tools";
import { GET_NOCODE_TOOL_CATEGORY } from "~/graphql/queries/no-code-tools";
import { FiSearch } from "react-icons/fi";
import HerowithInput from "~/components/comman/HerowithInput";
import { noCodePrompts } from "~/constant/toolHeroPromptsData";
import { NocCodeToolsSkeleton } from "~/sections/no-code-tools/NocCodeToolsSkeleton";
import { WEB_URL } from "~/utils/config";

export const meta: MetaFunction = () => [
  { title: "Build Without Limits | RejoiceHub No-Code Toolkits" },
  {
    name: "description",
    content:
      "Save time and money with powerful no-code tools ideal for startups, creators, and marketers. Start building today.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/no-code-tools`,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") || "All tools";
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "9");

  const filters: any =
    category !== "All tools"
      ? { no_code_tool_categories: { name: { contains: category } } }
      : {};

  const { data } = await client.query({
    query: NoCodeToolsQuery,
    variables: {
      pagination: { page, pageSize },
      sort: ["createdAt:desc"],
      filters,
    },
  });

  const { data: catData } = await client.query({
    query: GET_NOCODE_TOOL_CATEGORY,
  });

  const categories = catData?.noCodeToolCategories?.data?.map((cat: any) => ({
    name: cat.attributes.name,
  }));

  return {
    noCodeTools: data.noCodeTools,
    categories,
    selectedCategory: category,
    currentCategoryCount: data?.noCodeTools?.meta.pagination.total,
    page,
  };
}

export default function NoCodeToolsPage() {
  const {
    noCodeTools,
    categories,
    selectedCategory,
    currentCategoryCount,
    page,
  } = useLoaderData() as any;

  const [tools, setTools] = useState(noCodeTools.data);
  const [filteredTools, setFilteredTools] = useState(noCodeTools.data);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(page);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";
  const isInitialLoad = currentPage === 1 && loading;

  useEffect(() => {
    setTools(noCodeTools.data);
    setFilteredTools(noCodeTools.data);
    setCurrentPage(page);
  }, [noCodeTools.data, page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) return setFilteredTools(tools);

      const filtered = tools.filter(
        (tool: any) =>
          tool.attributes.toolName.toLowerCase().includes(term) ||
          tool.attributes.shortDescription?.toLowerCase().includes(term)
      );

      setFilteredTools(filtered);
    }, 100);

    return () => clearTimeout(timeout);
  }, [searchTerm, tools]);

  useEffect(() => {
    if (fetcher.data?.noCodeTools?.data) {
      const newPage = fetcher.data.page;
      const newTools = fetcher.data.noCodeTools.data;

      if (newPage === 1) {
        setTools(newTools);
        setFilteredTools(newTools);
      } else {
        const updated = [...tools, ...newTools];
        setTools(updated);
        setFilteredTools(updated);
      }

      setCurrentPage(newPage);
    }
  }, [fetcher.data]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    params.set("page", "1");
    setSearchParams(params);
    fetcher.load(`?${params.toString()}`);
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(nextPage));
    fetcher.load(`?${params.toString()}`);
  };
  const categoryOptions = [{ id: "all", name: "All tools" }, ...categories];

  return (
    <div>
      <HerowithInput
        placeholder="Find a tool to automate form submissions to Google Sheets"
        title="No Code Tools"
        subtitle="Discover top no-code tools. Filter by category or search for your favorite tools!"
        prompts={noCodePrompts}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-lg">
            <FiSearch className="absolute left-4 top-4 text-orange-500 w-5 h-5 z-[9]" />
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500 border border-orange-200/50 rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300 transition-all duration-200 hover:shadow-xl"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-mobile:gap-2 max-mobile:mb-8">
          {categoryOptions.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.name)}
              className={`px-6 py-3 max-mobile:px-4 max-mobile:rounded-md rounded-2xl cursor-pointer text-sm font-semibold transition-all duration-200 transform hover:scale-105 ${
                selectedCategory === cat.name
                  ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white shadow-lg"
                  : "bg-white/80 text-orange-600 border border-orange-200/50 hover:bg-orange-50 hover:border-orange-300 shadow-md"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* <div className="text-right mb-10 max-mobile:text-center">
          <h2 className="text-3xl max-mobile:text-2xl text-navy-950">
            {selectedCategory}
          </h2>
          <p className="text-navy-900 text-sm mt-1">
            Topic • {searchTerm ? filteredTools.length : currentCategoryCount}{" "}
            Tools
          </p>
        </div> */}

        <div className="grid gap-8 max-mobile:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {(isInitialLoad ? Array.from({ length: 9 }) : filteredTools).map(
            (tool: any, index: number) =>
              isInitialLoad ? (
                <NocCodeToolsSkeleton key={index} />
              ) : (
                <div
                  key={tool.id}
                  className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                >
                  {tool.attributes.logo?.data?.attributes?.url && (
                    <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-xl border border-orange-100 bg-white">
                      <img
                        src={`https://cms.rejoicehub.com${tool.attributes.logo.data.attributes.url}`}
                        alt={tool.attributes.toolName}
                        className="object-contain w-12 h-12"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h3 className="text-xl max-mobile:text-xl font-semibold text-gray-900 mb-2">
                    {tool.attributes.toolName}
                  </h3>
                  <p className="text-base text-gray-600 max-mobile:text-base mb-4">
                    {tool.attributes.shortDescription}
                  </p>
                  <div className="flex gap-4 mt-auto text-sm font-medium text-orange-600">
                    <a
                      href={tool.attributes.tool_url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border px-4 py-2 rounded-lg hover:text-orange-800"
                    >
                      Visit Site →
                    </a>
                    <a
                      href={`/no-code-tools/${tool.attributes.slug}`}
                      className="border px-4 py-2 rounded-lg hover:text-orange-800"
                    >
                      View More →
                    </a>
                  </div>
                </div>
              )
          )}
        </div>

        {!isInitialLoad && filteredTools.length === 0 && (
          <div className="text-center mt-12  max-mobile:mt-6 text-orange-700 font-semibold text-lg">
            No tools found matching your search.
          </div>
        )}

        {searchTerm.trim() === "" &&
          tools.length < noCodeTools.meta.pagination.total && (
            <div className="text-center mt-16 max-mobile:mt-5">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="px-6 py-3 bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-semibold rounded-full shadow transition"
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                ) : (
                  "View More"
                )}
              </button>
            </div>
          )}
      </div>
    </div>
  );
}
