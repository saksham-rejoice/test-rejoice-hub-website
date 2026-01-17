import { useState, useEffect, useRef } from "react";
import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
  useFetcher,
} from "react-router";
import { Link } from "react-router-dom";
import HeroSection from "~/components/comman/herosection";
import SectionHeader from "~/components/ui/SectionHeader";
import CTAButton from "~/components/ui/CTAButton";
import FeatureCard from "~/components/ui/FeatureCard";
import LeadMagnetCard from "~/components/ui/LeadMagnetCard";
import Breadcrumb from "~/components/ui/Breadcrumb";
import SkeletonCaseStudyCard from "~/sections/case-studies/CaseStudySkeleton";
import client from "../../graphql/apolloClient";
import { GET_CASE_STUDY_DATA } from "../../graphql/queries/case-studies";
import { CaseStudy } from "../../types/caseStudyTypes";
import { WEB_URL } from "~/utils/config";
import {
  TrendingUp,
  Users,
  Target,
  Award,
  CheckCircle,
  ArrowRight,
  BookOpen,
} from "lucide-react";

export const meta: MetaFunction = () => [
  { title: "AI Success Stories & Case Studies | RejoiceHub" },
  {
    name: "description",
    content:
      "Explore 800+ success stories from RejoiceHub—see how our mobile, web & AI solutions drive growth. Ready to transform your business? Let’s talk today!",
  },
  {
    tagName: "link",
    rel: "canonical",
    href: `${WEB_URL}/case-studies`,
  },
];

// Loader: first page
export async function loader({ request }: LoaderFunctionArgs) {
  try {
    const { data } = await client.query({
      query: GET_CASE_STUDY_DATA,
      variables: {
        pagination: { page: 1, pageSize: 6 },
        sort: ["createdAt:desc"],
      },
    });

    return {
      caseStudies: data.newCaseStudies?.data || [],
      total: data.newCaseStudies?.meta?.pagination?.total || 0,
    };
  } catch (error) {
    console.error("Error loading case studies:", error);
    return { caseStudies: [], total: 0 };
  }
}

// Action: for pagination
export async function action({ request }: LoaderFunctionArgs) {
  const formData = await request.formData();
  const page = Number(formData.get("page") || 1);
  const pageSize = Number(formData.get("pageSize") || 6);

  const { data, errors } = await client.query({
    query: GET_CASE_STUDY_DATA,
    variables: {
      pagination: { page, pageSize },
      sort: ["createdAt:desc"],
    },
  });

  if (errors) {
    return { errors };
  }

  return new Response(
    JSON.stringify({ items: data.newCaseStudies.data, page }),
    { headers: { "Content-Type": "application/json" } }
  );
}

export default function CaseStudies() {
  const loaderData = useLoaderData() as {
    caseStudies: { attributes: CaseStudy }[];
    total: number;
  };

  const [caseStudies, setCaseStudies] = useState(loaderData.caseStudies);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalRef = useRef(loaderData.total);
  const fetcher = useFetcher();
  const isLoading = fetcher.state !== "idle";

  const handleLoadMore = () => {
    const form = new FormData();
    form.append("page", String(currentPage + 1));
    form.append("pageSize", "6");
    fetcher.submit(form, { method: "post" });
  };

  useEffect(() => {
    if (fetcher.data?.items) {
      const newPage = fetcher.data.page;
      const newItems = fetcher.data.items;

      if (newPage === 1) {
        setCaseStudies(newItems);
        setCurrentPage(1);
      } else {
        setCaseStudies((prev) => [...prev, ...newItems]);
        setCurrentPage(newPage);
      }
    }
  }, [fetcher.data]);

  const hasMore = caseStudies.length < totalRef.current;

  // --- Success metrics data ---
  const successMetrics = [
    {
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      title: "40% Average Cost Reduction",
      description:
        "Our AI solutions consistently deliver significant cost savings through process automation.",
    },
    {
      icon: <Users className="w-6 h-6 text-amber-600" />,
      title: "120+ Successful Projects",
      description:
        "Proven track record across diverse industries, from startups to Fortune 500 companies.",
    },
    {
      icon: <Target className="w-6 h-6 text-amber-600" />,
      title: "95% Goal Achievement",
      description:
        "Our structured approach ensures project objectives are not just met, but exceeded.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Industry Recognition",
      description:
        "Award-winning solutions recognized by leading technology publications.",
    },
  ];

  // --- Lead magnets data ---
  const leadMagnets = [
    {
      title: "Case Study Collection",
      description:
        "Get access to our complete library of detailed case studies with ROI breakdowns.",
      value: "$5,000 Value",
      icon: <BookOpen className="w-6 h-6 text-amber-600" />,
      features: [
        "20+ detailed case studies",
        "ROI analysis",
        "Implementation guides",
      ],
      resourceId: "case-study-collection",
    },
    {
      title: "Success Framework Template",
      description:
        "Use our proven problem-solution-impact framework for your AI projects.",
      value: "$2,500 Value",
      icon: <Target className="w-6 h-6 text-amber-600" />,
      features: [
        "Step-by-step framework",
        "Success metrics",
        "Risk mitigation",
      ],
      resourceId: "success-framework-template",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-light">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <Breadcrumb
              items={[
                { label: "Resources", href: "/resources" },
                { label: "Case Studies", href: "/case-studies" },
              ]}
              className="!text-primary"
            />
          </div>
          <div className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
            Success Stories
          </div>

          <h1 className="text-primary mb-4 text-center">
            Real Results from{" "}
            <span className="text-gradient">AI Transformation</span>
          </h1>

          <p className="text-lg max-w-[612px]  text-grey-500 tracking-[-0.32px] mx-auto text-center">
            Discover how businesses achieved measurable success with our AI
            solutions using our proven Problem-Solution-Impact framework.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-12">
            <CTAButton href="#case-studies" variant="primary" size="md">
              Explore Case Studies
            </CTAButton>
            <CTAButton
              to="/contact"
              variant="secondary"
              size="md"
              icon="calendar"
            >
              Discuss Your Project
            </CTAButton>
            <CTAButton to="/services" variant="secondary" size="md">
              View Our Services
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Success Metrics Section */}
      <section className="py-20 max-mobile:py-12 bg-accent-50">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Proven Results"
            title="Success Across Industries"
            subtitle="Our case studies showcase consistent results across diverse sectors, proving the universal value of well-implemented AI solutions."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <FeatureCard
                key={index}
                icon={metric.icon}
                title={metric.title}
                description={metric.description}
                variant="highlight"
                layout="vertical"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnets Section */}
      {/* <section className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            badge=" Premium Resources"
            title="Get the Complete Success Playbook"
            subtitle="Access our comprehensive collection of case studies and frameworks to accelerate your AI transformation."
            variant="amber"
          />

          <div className="grid md:grid-cols-2 gap-8  mx-auto">
            {leadMagnets.map((magnet, index) => (
              <LeadMagnetCard key={index} {...magnet} onSubmit={() => {}} />
            ))}
          </div>
        </div>
      </section> */}

      {/* Case Studies Grid Section (last) */}
      <section id="case-studies" className="py-20 max-mobile:py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            badge="Case Studies"
            title="Problem → Solution → Impact"
            subtitle="Each case study follows our structured approach: identifying the challenge, implementing the solution, and measuring the transformative impact."
          />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {(isInitialLoading || (currentPage === 1 && isLoading)
              ? Array.from({ length: 6 })
              : caseStudies
            ).map((cs: any, index: number) =>
              isInitialLoading || (currentPage === 1 && isLoading) ? (
                <SkeletonCaseStudyCard key={index} />
              ) : (
                <Link
                  key={cs.attributes.slug}
                  to={`/case-studies/${cs.attributes.slug}`}
                  className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3"
                >
                  {/* Case Study Image */}
                  <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative overflow-hidden">
                    {cs.attributes.image?.data?.attributes?.url ? (
                      <img
                        src={`https://cms.rejoicehub.com${cs.attributes.image.data.attributes.url}`}
                        alt={cs.attributes.caseStudyName}
                        className="w-full h-full object-cover rounded-[14px] group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-4xl text-amber-600">🏆</div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-amber-700">
                        Success Story
                      </span>
                    </div>
                  </div>

                  {/* Case Study Content */}
                  <div className="pt-5">
                    <h3 className="text-xl font-bold  mb-3 text-white line-clamp-2">
                      {cs.attributes.caseStudyName}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cs.attributes.technology_names?.data.map(
                        (tech: any, i: number) => (
                          <span
                            key={i}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border border-solid border-primary-200 text-white bg-primary-100 "
                          >
                            {tech.attributes.name}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="flex justify-center mt-12">
              <CTAButton
                onClick={handleLoadMore}
                variant="outline"
                size="lg"
                loading={isLoading}
              >
                {isLoading ? "Loading..." : "Load More Case Studies"}
              </CTAButton>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
