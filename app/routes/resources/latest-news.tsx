import { MetaFunction, LoaderFunctionArgs, useLoaderData } from "react-router";
import { useState, useEffect, useRef } from "react";
import { useFetcher, useNavigate } from "react-router-dom";
import client from "../../graphql/apolloClient";
import { GET_LATEST_NEWS_DATA } from "../../graphql/queries/latest-news";
import HeroSection from "~/components/comman/herosection";
import { WEB_URL } from "~/utils/config";

function decodeHTMLEntities(text: string) {
  if (typeof window === "undefined") return text;
  const txt = window.document.createElement("textarea");
  txt.innerHTML = text;
  return txt.value;
}

export const meta: MetaFunction = () => [
  { title: "Latest News | Rejoicehub" },
  {
    name: "description",
    content:
      "We are passionate about creating innovative solutions that make a difference.",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/latest-news`,
  },
  {
    name: "robots",
    content: "noindex,nofollow",
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "9");

  const { data } = await client.query({
    query: GET_LATEST_NEWS_DATA,
    variables: {
      pagination: { page, pageSize },
    },
  });

  return {
    latestNews: data.latestNews,
    page,
    pageSize,
  };
}

type LoaderData = {
  latestNews: {
    data: { attributes: any }[];
    meta: { pagination: { total: number } };
  };
  page: number;
  pageSize: number;
};

const LatestNews = () => {
  const navigate = useNavigate();
  const {
    latestNews,
    page: initialPage,
    pageSize,
  } = useLoaderData() as LoaderData;
  const [news, setNews] = useState(latestNews.data);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalRef = useRef(latestNews.meta.pagination.total);
  const fetcher = useFetcher();
  const isLoading = fetcher.state !== "idle";

  useEffect(() => {
    if (fetcher.data?.latestNews) {
      const newNews = fetcher.data.latestNews.data;
      const newPage = fetcher.data.page;
      if (newPage === 1) {
        setNews(newNews);
        setCurrentPage(1);
      } else {
        setNews((prev) => [...prev, ...newNews]);
        setCurrentPage(newPage);
      }

      if (fetcher.data.latestNews.meta?.pagination?.total) {
        totalRef.current = fetcher.data.latestNews.meta.pagination.total;
      }
    }
  }, [fetcher.data]);

  const handleLoadMore = () => {
    const params = new URLSearchParams();
    params.set("page", String(currentPage + 1));
    params.set("pageSize", String(pageSize));
    fetcher.load(`?${params.toString()}`);
  };

  const hasMore = news.length < (totalRef.current || 0);

  return (
    <div className="">
      <HeroSection
        title="Latest News"
        subtitle="Stay up to date with all the latest news, important updates, and exciting announcements from the Rejoicehub team."
      />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.length === 0 ? (
            <div className="col-span-full text-center text-gray-700">
              No news found.
            </div>
          ) : (
            news.map(({ attributes }: any) => {
              const {
                title,
                slug,
                link,
                auther_name,
                media,
                createdAt,
                description,
              } = attributes;

              return (
                <div
                  key={slug}
                  role="button"
                  tabIndex={0}
                  onClick={() => navigate(`/latest-news/${slug}`)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      navigate(`/latest-news/${slug}`);
                  }}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 block overflow-hidden hover:-translate-y-1 h-full cursor-pointer"
                  aria-label={`Read more about ${title}`}
                >
                  {media && (
                    <div className="h-44 w-full bg-gray-100 overflow-hidden flex items-center justify-center">
                      <img
                        src={media}
                        alt={decodeHTMLEntities(title)}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <article className="p-6 max-mobile:p-4 flex flex-col justify-between h-fit">
                    <div>
                      <h3 className="text-lg font-semibold text-navy-950 mb-2 group-hover:text-orange-600 transition">
                        {decodeHTMLEntities(title)}
                      </h3>
                      {description && (
                        <p className="text-navy-950 text-sm line-clamp-3">
                          {decodeHTMLEntities(description)}
                        </p>
                      )}
                    </div>

                    <div className="pt-4 border-t border-gray-100 mt-4 flex items-center justify-between text-xs text-navy-950">
                      <p className="font-medium">{auther_name || "Unknown"}</p>
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-orange-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {createdAt
                          ? new Date(createdAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })
                          : "-"}
                      </div>
                    </div>
                  </article>
                </div>
              );
            })
          )}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoading}
              className="px-6 py-3 bg-orange-600 cursor-pointer hover:bg-orange-700 text-white font-semibold rounded-full shadow transition"
            >
              {isLoading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white inline-block"
                  xmlns="http://www.w3.org/2000/svg"
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
      </section>
    </div>
  );
};

export default LatestNews;
