import { useState, useEffect, useRef } from "react";
import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
  useFetcher,
} from "react-router";
import { useNavigate, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import HeroSection from "~/components/comman/herosection";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetCard from "~/components/ui/LeadMagnetCard";
import SkeletonCard from "~/sections/blogs/BlogSkeleton";
import client from "../../graphql/apolloClient";
import {
  GET_BLOGS_DATA,
  GET_ALL_BLOGS_CATEGORIES,
} from "../../graphql/queries/blogs";
import { Blog } from "../../types/blogTypes";
import { WEB_URL } from "~/utils/config";
import {
  Lightbulb,
  TrendingUp,
  Users,
  BookOpen,
  Calendar,
  Download,
  Brain,
  Zap,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "AI Insights & Thought Leadership | RejoiceHub Blog" },
  {
    name: "description",
    content:
      "Stay updated with the latest in AI, tech, and business strategies at RejoiceHub Blogs. Expoler insights that drive results reads our articles today!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/blogs`,
  },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const category = url.searchParams.get("category") || "All Blogs";
  const page = parseInt(url.searchParams.get("page") || "1");
  const pageSize = parseInt(url.searchParams.get("pageSize") || "9");

  let filters = {};
  if (category !== "All Blogs") {
    filters = {
      blogs_categories: { name: { contains: category } },
    };
  }

  const { data } = await client.query({
    query: GET_BLOGS_DATA,
    variables: {
      pagination: { page, pageSize },
      sort: ["createdAt:desc"],
      filters,
    },
  });

  const { data: catData } = await client.query({
    query: GET_ALL_BLOGS_CATEGORIES,
  });

  const categories = catData.blogsCategories.data.map(
    (cat: any) => cat.attributes.name
  );

  return {
    rejoiceBlog: data.rejoiceBlog,
    categories,
    selectedCategory: category,
    page,
    pageSize,
    currentCategoryCount: data.rejoiceBlog.meta.pagination.total,
  };
}

type LoaderData = {
  rejoiceBlog: {
    data: { attributes: Blog }[];
    meta: { pagination: { total: number } };
  };
  categories: string[];
  selectedCategory: string;
  page: number;
  pageSize: number;
  currentCategoryCount: number;
};

export default function Blogs() {
  const loaderData = useLoaderData() as LoaderData;
  const [blogs, setBlogs] = useState(loaderData.rejoiceBlog.data);
  const [filteredBlogs, setFilteredBlogs] = useState(
    loaderData.rejoiceBlog.data
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    loaderData.selectedCategory
  );
  const [currentPage, setCurrentPage] = useState(loaderData.page);
  const [categories] = useState(loaderData.categories);
  const [leadMagnetSubmissions, setLeadMagnetSubmissions] = useState<{
    [key: string]: boolean;
  }>({});
  const totalRef = useRef(loaderData.rejoiceBlog.meta.pagination.total);
  const fetcher = useFetcher();
  const navigate = useNavigate();
  const [currentCount, setCurrentCount] = useState(
    loaderData.currentCategoryCount
  );

  const isLoading = fetcher.state !== "idle";

  const thoughtLeadershipTopics = [
    {
      icon: <Brain className="w-6 h-6 text-amber-600" />,
      title: "AI Strategy",
      description:
        "Executive insights on AI adoption and transformation roadmaps for sustainable growth.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      title: "Industry Trends",
      description:
        "Latest developments in AI, automation, and emerging technologies shaping the future.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-amber-600" />,
      title: "Innovation Insights",
      description:
        "Real-world case studies and best practices from successful AI implementations.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "Leadership Guides",
      description:
        "Practical advice for business leaders navigating digital transformation.",
    },
  ];

  const blogLeadMagnets = [
    {
      title: "AI Executive Newsletter",
      description:
        "Weekly insights and trends delivered directly to your inbox. Stay ahead of the AI curve with expert analysis.",
      value: "Free Weekly",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      features: ["Weekly insights", "Expert analysis", "Industry trends"],
      resourceId: "ai-executive-newsletter",
    },
    {
      title: "Complete Blog Archive",
      description:
        "Download our comprehensive collection of AI insights and thought leadership articles as a searchable PDF.",
      value: "$500 Value",
      icon: <Download className="w-6 h-6 text-amber-600" />,
      features: ["50+ articles", "Searchable PDF", "Offline access"],
      resourceId: "blog-archive-download",
    },
  ];

  const handleLeadSubmit = async (email: string, resourceId: string) => {
    setLeadMagnetSubmissions((prev) => ({ ...prev, [resourceId]: true }));
  };

  useEffect(() => {
    if (isInitialLoading) {
      setIsInitialLoading(false);
    }

    if (fetcher.data?.rejoiceBlog) {
      const newBlogs = fetcher.data.rejoiceBlog.data;
      const newPage = fetcher.data.page;

      if (newPage === 1) {
        setBlogs(newBlogs);
        setFilteredBlogs(newBlogs);
        setCurrentPage(1);
        setSelectedCategory(fetcher.data.selectedCategory);
        setCurrentCount(fetcher.data.rejoiceBlog.meta.pagination.total);
      } else {
        const updatedBlogs = [...blogs, ...newBlogs];
        setBlogs(updatedBlogs);
        setFilteredBlogs(updatedBlogs);
        setCurrentPage(newPage);
      }

      if (fetcher.data.rejoiceBlog.meta?.pagination?.total) {
        totalRef.current = fetcher.data.rejoiceBlog.meta.pagination.total;
      }
    }
  }, [fetcher.data]);

  const handleCategoryChange = (cat: string) => {
    setIsInitialLoading(true);
    const params = new URLSearchParams();
    params.set("category", cat);
    params.set("page", "1");
    fetcher.load(`?${params.toString()}`);
    navigate({ search: params.toString() });
  };

  const handleLoadMore = () => {
    const params = new URLSearchParams();
    params.set("category", selectedCategory);
    params.set("page", String(currentPage + 1));
    params.set("pageSize", "9");
    fetcher.load(`?${params.toString()}`);
  };

  const hasMore = blogs.length < (totalRef.current || 0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const term = searchTerm.trim().toLowerCase();
      if (!term) {
        setFilteredBlogs(blogs);
        return;
      }

      const filtered = blogs.filter(
        (blog: any) =>
          blog.attributes.blogTitle.toLowerCase().includes(term) ||
          blog.attributes.shortDescription?.toLowerCase().includes(term) ||
          blog.attributes.autherName?.toLowerCase().includes(term)
      );

      setFilteredBlogs(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, blogs]);

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className=" max-w-6xl mx-auto px-6 text-center">
          <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Thought Leadership
          </p>

          <h1 className="text-primary mb-4 text-center">
            AI Insights from
            <span className="text-gradient"> Industry Experts</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Stay ahead with cutting-edge AI insights, transformation strategies,
            and thought leadership from our team of experts and industry
            pioneers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <CTAButton href="#latest-insights" variant="primary" size="md">
              Explore Latest Insights
            </CTAButton>
            {/* <CTAButton href="#newsletter" variant="secondary" size="md">
              Subscribe to Newsletter
            </CTAButton> */}
          </div>
        </div>
      </section>

      {/* Thought Leadership Topics */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge="What We Cover"
            title="Expert Insights on AI & Innovation"
            subtitle="Our thought leadership spans across strategic AI adoption, emerging trends, practical implementations, and executive guidance for digital transformation."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {thoughtLeadershipTopics.map((topic, index) => (
              <FeatureCard
                key={index}
                icon={topic.icon}
                title={topic.title}
                description={topic.description}
                variant="highlight"
                layout="vertical"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter & Resources */}
      {/* <section id="newsletter" className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Stay Updated"
            title="Never Miss an Insight"
            subtitle="Get exclusive access to our latest thought leadership content and stay ahead of AI trends with our premium resources."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            {blogLeadMagnets.map((magnet, index) => (
              <LeadMagnetCard
                key={index}
                title={magnet.title}
                description={magnet.description}
                value={magnet.value}
                icon={magnet.icon}
                features={magnet.features}
                resourceId={magnet.resourceId}
                onSubmit={handleLeadSubmit}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced Blog Grid */}
      <section
        id="latest-insights"
        className="py-20 max-mobile:py-12 bg-blue-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Latest Articles"
            title="Curated AI & Tech Insights"
            subtitle="Dive deep into expert analysis, case studies, and strategic insights from our team and industry thought leaders."
          />

          {/* Enhanced Search */}
          <div className="flex justify-center mb-10">
            <div className="relative w-full max-w-2xl">
              <FiSearch className="absolute left-6 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5 z-10" />
              <input
                type="text"
                placeholder="Search for AI insights, case studies, trends..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-14 pr-6 py-4 bg-white text-navy-900 placeholder-gray-500 border-2 border-gray-200 rounded-2xl shadow-lg focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-all duration-200"
              />
            </div>
          </div>

          {/* Enhanced Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {["All Insights", ...categories].map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  handleCategoryChange(
                    cat === "All Insights" ? "All Blogs" : cat
                  )
                }
                className={`px-6 py-3 border cursor-pointer border-solid border-primary-200 rounded-[14px]   ${
                  selectedCategory === cat ||
                  (cat === "All Insights" && selectedCategory === "All Blogs")
                    ? "bg-primary-300 text-white"
                    : ""
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-5 max-mobile:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(isInitialLoading ? Array.from({ length: 9 }) : filteredBlogs).map(
              (blog: any, index: number) =>
                isInitialLoading ? (
                  <SkeletonCard key={index} />
                ) : (
                  <Link
                    key={blog.id}
                    to={`/blogs/${blog.attributes.slug}`}
                    className="group  border-solid border-primary-300 rounded-[14px] bg-primary-100 p-6 transition-all duration-300   block overflow-hidden"
                  >
                    <article className="">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {blog.attributes.blogs_categories?.data.map(
                          (cat: any, i: any) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-primary-200 text-white "
                            >
                              {cat.attributes.name}
                            </span>
                          )
                        )}
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 ">
                        {blog.attributes.blogTitle}
                      </h3>

                      <p className="text-light text-sm mb-4 line-clamp-3">
                        {blog.attributes.shortDescription}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-primary-300">
                        <div className="flex items-center gap-3">
                          <img
                            src={`https://cms.rejoicehub.com${blog.attributes?.autherImage?.data?.attributes?.url}`}
                            alt={blog.attributes.autherName}
                            className="w-10 h-10 rounded-full border-2 border-gray-200"
                          />
                          <div>
                            <p className="text-sm font-medium text-white">
                              {blog.attributes.autherName}
                            </p>
                            <p className="text-xs text-light">
                              {new Date(
                                blog.attributes.publishedAt
                              ).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })}
                            </p>
                          </div>
                        </div>
                        {blog.attributes.readTime && (
                          <div className="flex items-center gap-1 text-xs text-light">
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
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                            {blog.attributes.readTime}
                          </div>
                        )}
                      </div>
                    </article>
                  </Link>
                )
            )}
          </div>

          {!isInitialLoading && filteredBlogs.length === 0 && (
            <div className="text-center mt-12  max-mobile:mt-6 text-amber-700 font-semibold text-lg">
              No insights found matching your search.
            </div>
          )}

          {searchTerm.trim() === "" && filteredBlogs.length < currentCount && (
            <div className="flex justify-center  items-center mt-12">
              <CTAButton
                onClick={handleLoadMore}
                variant="primary"
                size="md"
                loading={isLoading}
                className="cursor-pointer"
              >
                {isLoading ? "Loading..." : "Load More Insights"}
              </CTAButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
