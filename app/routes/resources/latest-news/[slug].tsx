import {
    LoaderFunctionArgs,
    MetaFunction,
    useLoaderData,
    redirect,
} from "react-router";
import client from "~/graphql/apolloClient";
import { GET_LATEST_NEWS_DETAILS } from "~/graphql/queries/latest-news";
import { WEB_URL } from "~/utils/config";

function decodeHTMLEntities(text: string) {
    if (typeof window === "undefined") return text;
    const txt = window.document.createElement("textarea");
    txt.innerHTML = text;
    return txt.value;
}

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const { slug } = params;
  
    if (!slug) {
      return redirect("/");
    }
  
    const { data } = await client.query({
      query: GET_LATEST_NEWS_DETAILS,
      variables: { filters: { slug: { eq: slug } } },
    });
  
    const news = data?.latestNews?.data?.[0]?.attributes;
  
    if (!news) {
      return redirect("/");
    }
  
    return { news };
  };
  
  export const meta: MetaFunction<typeof loader> = ({ data }) => {
    if (!data?.news) {
      return [
        { title: "Latest News | Rejoicehub" },
        {
          name: "description",
          content:
            "We are passionate about creating innovative solutions that make a difference.",
        },
      ];
    }
  
    const slug = data.news.slug;
    const title = data.news.SEO?.Title ?? "Latest News | Rejoicehub";
    const description =
      data.news.SEO?.Description ??
      "Explore the latest updates, insights, and innovations from Rejoicehub.";
  
  
    return [
      { title },
      { name: "description", content: description },
      {
        tagName: "link",
        rel: "canonical",
        href: `${WEB_URL}/latest-news/${slug}`,
      },
      {
        name: "robots",
        content: "noindex,nofollow",
      },
    ];
  };
  

export default function LatestNewsDetail() {
    const { news } = useLoaderData() as { news: any };

    return (
        <div className="min-h-screen bg-amber-50">
                  
            <div className="max-w-3xl mx-auto px-4 py-10">
                <div className="mb-8 max-mobile:mb-5">
                    <a
                        href="/latest-news"
                        className="inline-flex items-center gap-2 px-4 py-2 text-navy-950 hover:text-navy-950 rounded-lg transition-all duration-200"
                        aria-label="Back to Latest News"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Latest News
                    </a>
                </div>

                <h1 className="text-3xl font-bold mb-4 text-navy-950">{decodeHTMLEntities(news.title)}</h1>
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                        {news.auther_links && (
                            <a
                                href={news.auther_links}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-navy-950 hover:underline"
                            >
                                {news.auther_name}
                            </a>
                        )}
                        <span className="text-orange-600 text-sm">
                            {new Date(news.publishedAt).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                            })}
                        </span>
                    </div>
                    <a
                        href={news.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-600 text-sm hover:underline"
                    >
                        Read More
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </div>
                {news.media && (
                    <img
                        src={news.media}
                        alt={news.title}
                        className="rounded-lg shadow mb-6 max-h-96 object-contain w-full"
                    />
                )}
                <article
                    className="
    prose prose-lg max-w-none text-navy-950
    px-4 py-6 md:px-6 md:py-8 lg:px-8 lg:py-10


    prose-headings:text-navy-900
    prose-headings:font-semibold
    prose-headings:scroll-mt-20

    prose-p:leading-relaxed prose-p:my-4

    prose-img:rounded-lg prose-img:shadow-md prose-img:my-6
    prose-video:rounded-lg prose-video:shadow-md prose-video:my-6
    prose-figure:my-6

    prose-a:text-blue-600 prose-a:font-medium hover:prose-a:underline
    prose-strong:text-navy-900

    prose-blockquote:border-l-4 prose-blockquote:border-navy-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:my-6

    prose-ul:pl-5 prose-ol:pl-5
    prose-li:marker:text-navy-500 prose-li:my-2

    prose-code:bg-navy-50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-sm prose-code:font-medium prose-code:text-pink-600

    bg-amber-50
  "
                    dangerouslySetInnerHTML={{ __html: decodeHTMLEntities(news.content) }}
                />


            </div>
        </div>
    );
}
