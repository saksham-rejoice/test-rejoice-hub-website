import { useState, useEffect } from "react";
import {
  LoaderFunctionArgs,
  MetaFunction,
  useFetcher,
  useLoaderData,
  useSearchParams,
} from "react-router-dom";
import client from "~/graphql/apolloClient";
import GET_OPEN_SOURCE_TOOLS_DATA, {
  GET_CATEGORY_DATA,
} from "~/graphql/queries/open-source-tools";
import { FiSearch } from "react-icons/fi";
import HerowithInput from "~/components/comman/HerowithInput";
import { openSourcePrompts } from "~/constant/toolHeroPromptsData";
import { OpenSourceToolsSkeleton } from "~/sections/open-source-tools/OpenSourceToolsSkeleton";
import { WEB_URL } from "~/utils/config";

export const meta: MetaFunction = () => [
  { title: "Best Open Source AI Tools 2025 | RejoiceHub Solutions" },
  {
    name: "description",
    content:
      "Accelerate development using RejoiceHub’s open-source AI tools. Trusted by devs and startups for automation, analytics, and innovation.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/open-source-tools`,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") || "All tools";
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = 9;

  const filters: any = {
    ...(category !== "All tools" && {
      open_source_categories: { categoryName: { contains: category } },
    }),
  };

  const { data } = await client.query({
    query: GET_OPEN_SOURCE_TOOLS_DATA,
    variables: {
      filters,
      pagination: { page, pageSize },
      openSourceCategoriesPagination2: { limit: 100 },
    },
    fetchPolicy: "network-only",
  });

  const { data: catData } = await client.query({
    query: GET_CATEGORY_DATA,
    variables: { pagination: { limit: 100 } },
    fetchPolicy: "network-only",
  });

  const categories = catData.openSourceCategories.data.map(
    (cat: any) => cat.attributes.categoryName
  );

  return {
    openSourceTools: data.openSources,
    categories,
    selectedCategory: category,
    page,
    pageSize,
    total: data.openSources.meta?.pagination?.total || 0,
  };
}

export default function OpenSourceToolsPage() {
  const {
    openSourceTools,
    categories,
    selectedCategory,
    page,
    pageSize,
    total,
  } = useLoaderData() as any;

  const [tools, setTools] = useState<any[]>([]);
  const [filteredTools, setFilteredTools] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(page);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const fetcher = useFetcher();
  const loading = fetcher.state !== "idle";

  useEffect(() => {
    setTools(openSourceTools.data);
    setFilteredTools(openSourceTools.data);
    setCurrentPage(page);
  }, [openSourceTools.data, page]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) {
        setFilteredTools(tools);
        return;
      }
      const filtered = tools.filter(
        ({ attributes }) =>
          attributes.toolName.toLowerCase().includes(term) ||
          attributes.toolDescription?.toLowerCase().includes(term)
      );
      setFilteredTools(filtered);
    }, 100);
    return () => clearTimeout(timeout);
  }, [searchTerm, tools]);

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);
    params.set("page", "1");
    setSearchParams(params);
  };

  const handleToolsDataMore = () => {
    const nextPage = currentPage + 1;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(nextPage));
    fetcher.load(`?${params.toString()}`);
  };

  useEffect(() => {
    if (fetcher.data?.openSourceTools?.data) {
      const newTools = fetcher.data.openSourceTools.data;
      const newPage = fetcher.data.openSourceTools.meta.pagination.page;
      setTools((prev) => [...prev, ...newTools]);
      setFilteredTools((prev) => [...prev, ...newTools]);
      setCurrentPage(newPage);
    }
  }, [fetcher.data]);

  const totalPages = Math.ceil(total / pageSize);

  return (
    <div className="">
      <HerowithInput
        placeholder="Find an open-source chatbot that can run on my own server"
        title="Open Source Tools"
        subtitle="Discover top open source tools. Filter by category or search for your favorite tools!"
        prompts={openSourcePrompts}
      />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-12 max-mobile:mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full max-w-[450px] max-mobile:max-w-full">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiSearch className="text-orange-500 w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/80 rounded-xl  shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
          </div>
          <div className="w-full max-w-[300px] max-mobile:max-w-full">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-4 py-4 text-sm bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
            >
              <option value="All tools">All Tools</option>
              {categories.map((cat: string) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid max-mobile:gap-5 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {loading && tools.length === 0
            ? Array.from({ length: 9 }).map((_, i) => (
                <OpenSourceToolsSkeleton key={i} />
              ))
            : filteredTools.map(({ id, attributes }: any) => (
                <div
                  key={id}
                  className="rounded-2xl p-4 border-solid border border-[#FF5F011A] bg-gradient-to-b from-[rgba(255,93,1,0.06)] to-[rgba(255,149,4,0.06)]"
                >
                  {attributes.logo?.data?.attributes?.url && (
                    <div className="w-20 h-20 mb-4 flex items-center justify-center rounded-xl border border-orange-100 bg-white">
                      <img
                        src={`https://cms.rejoicehub.com${attributes.logo.data.attributes.url}`}
                        alt={attributes.toolName}
                        className="object-contain w-12 h-12"
                      />
                    </div>
                  )}
                  <h3 className="text-xl font-semibold text-navy-950 mb-2">
                    {attributes.toolName}
                  </h3>
                  <p className="text-base max-mobile:text-base text-gray-600 mb-4 line-clamp-4">
                    {attributes.toolDescription}
                  </p>
                  <div className="flex gap-12 mt-auto text-sm font-medium text-orange-600">
                    <a
                      href={`/open-source-tools/${attributes.slug}`}
                      className="flex items-center gap-2 text-navy-950 hover:text-navy-800 hover:bg-orange-50 border px-4 py-2 rounded-lg"
                    >
                      View More <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
        </div>

        {!loading && filteredTools.length === 0 && (
          <div className="text-center mt-12  max-mobile:mt-6 text-orange-700 font-semibold text-lg">
            No tools found matching your search.
          </div>
        )}

        {searchTerm.trim() === "" && currentPage < totalPages && (
          <div className="text-center mt-16 max-mobile:mt-5">
            <button
              onClick={handleToolsDataMore}
              disabled={loading}
              className="px-6 py-3 cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow transition"
            >
              {loading ? (
                <div className="flex items-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                </div>
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
