import HeroSection from "~/components/comman/herosection";
import CommanMd from "../commansection/CommanMd";
import TableOfContents from "../commansection/TableOfContents";
import { getHeadings } from "~/utils/getHeadings";
import { Heading } from "../commansection/TableOfContents";
import { Blog } from "~/types/blogTypes";
import BlogDetailsFaq from "./BlogDetailsFaq";

export default function BlogDetailsMainSection({ blog }: { blog: Blog }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatViews = (views: number) => {
    if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}k`;
    }
    return views.toString();
  };

  const headings: Heading[] = getHeadings(blog.blogDescription);
  return (
    <div className="bg-accent-50 min-h-screen">
      <HeroSection title={blog.blogTitle} subtitle={""} />

      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">
        <aside className="hidden lg:block flex-shrink-0">
          <TableOfContents headings={headings} />
        </aside>
        <div className="flex-1 ">
          <div className="">
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 px-4 py-2 text-black hover:text-navy-900 rounded-lg transition-all duration-20"
              aria-label="Back to Blogs"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Blogs
            </a>
          </div>
          {blog.blogTitleImage?.data?.attributes?.url && (
            <div className="mb-8">
              <img
                src={`https://cms.rejoicehub.com${blog.blogTitleImage.data.attributes.url}`}
                alt={blog.blogTitle}
                className="w-full h-auto rounded-xl shadow-lg border border-slate-200"
              />
            </div>
          )}

          <article className="mb-8">
            <CommanMd markdown={blog.blogDescription} />
            <section className="my-12">
              <hr className="border-t border-accent-200 mb-8" />
              <h2 className="text-3xl font-semibold text-navy-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <BlogDetailsFaq
                faqs={[
                  {
                    faq_details:
                      blog.FAQ?.map((item: any, idx: number) => ({
                        answer: item.answer,
                        question: item.question,
                        id: item.id || String(idx),
                      })) || [],
                  },
                ]}
              />
            </section>
          </article>

          <div className="bg-accent-50 rounded-xl shadow-sm border border-slate-200 p-4 mt-2">
            <div className="flex flex-wrap items-center justify-between max-mobile:justify-center max-mobile:mx-0 gap-4">
              <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-center sm:text-left gap-4">
                {blog.autherImage?.data?.attributes?.url ? (
                  <img
                    src={`https://cms.rejoicehub.com${blog.autherImage.data.attributes.url}`}
                    alt={`${blog.authorDetails?.Name} profile`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-slate-200 shadow-sm"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-navy-900 font-semibold text-lg shadow-sm">
                    {(blog.authorDetails?.Name?.charAt(0) || "A").toUpperCase()}
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-semibold text-navy-900">
                    {blog.authorDetails?.Name || ""} {blog.authorDetails?.autherPosition && `(${blog.authorDetails?.autherPosition})`}
                  </h3>
                  <p className="text-sm text-navy-900">
                    {blog.authorDetails?.authorDescription || ""}
                  </p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-sm text-navy-900 mt-1">
                
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Published {formatDate(blog.blogCreatedAt)}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {formatViews(blog.blogViews)} views
                    </span>
                  </div>
                </div>
              </div>
              {/* <div className="flex items-center gap-6"> */}
                {/* <div className="flex items-center gap-2 text-slate-600">
                                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="font-medium">{formatViews(blog.blogViews)}</span>
                                    <span className="text-slate-500">views</span>
                                </div> */}
                {/* <div className="flex items-center gap-2 text-slate-600">
                  <svg
                    className="w-5 h-5 text-navy-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-navy-900">Last updated:</span>
                  <span className="text-navy-900">
                    {formatDate(blog.updatedAt)}
                  </span>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}