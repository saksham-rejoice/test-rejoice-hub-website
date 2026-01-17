import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { GrowingCount } from "~/sections/commansection/GrowingCount";
import { solutionsDetail } from "~/data/solutions/solutionsDetail";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { redirect } from "react-router";
import { WEB_URL } from "~/utils/config";
import {
  getSolutionContent,
  generateSolutionMeta,
  generateSolutionJsonLd,
  generateSolutionBreadcrumbJsonLd,
  generateSolutionFaqJsonLd,
} from "~/lib/solutionContentLoader";
import { SolutionLayout } from "~/components/solutions/SolutionLayout";
import {
  CTASection,
  PricingTiers,
  InquiryModal,
} from "~/components/services/pricing";
import { getPricingBySlug, shouldShowPricing } from "~/data/pricing";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) {
    return [
      { title: "Solution not found" },
      { name: "description", content: "No solution found for this slug." },
    ];
  }

  // Check if it's the new template system
  if ("newTemplate" in data && data.newTemplate && data.solutionContent) {
    const solutionContent = data.solutionContent;
    const slug = solutionContent.solutionId;

    // Get pricing information for SEO
    const pricing = getPricingBySlug(`/solutions/${slug}`);
    const showPrice = pricing ? shouldShowPricing(pricing) : false;

    // Use new unified meta system with pricing-aware content
    const baseMeta = generateSolutionMeta(solutionContent);
    const pricingMeta = pricing
      ? [
          {
            title: `${pricing.title} at RejoiceHub${showPrice ? ` - Starting at ${pricing.startingFrom}` : ""}`,
          },
          {
            name: "description",
            content: `${pricing.subtitle}. ${showPrice ? `Projects start at ${pricing.startingFrom}.` : "Strategic programs that deliver measurable ROI."}`,
          },
        ]
      : [];

    return [
      ...(pricingMeta.length > 0 ? pricingMeta : baseMeta),
      {
        tagName: "link",
        rel: "canonical",
        href: `${WEB_URL}/solutions/${slug}`,
      },
    ];
  }

  // Fallback to old system
  const solution = "solution" in data ? data.solution : null;
  if (!solution) {
    return [
      { title: "Solution not found" },
      { name: "description", content: "No solution found for this slug." },
    ];
  }

  const slug = solution.attributes?.slug || "";
  const canonicalUrl = `${WEB_URL}/solutions/${slug}`;

  const title = solution.attributes?.meta?.title;
  const description = solution.attributes?.meta?.description;

  return [
    { title },
    { name: "description", content: description },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalUrl,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { solutionId } = params;

  // First try to load from new unified system
  const solutionContent = getSolutionContent(solutionId!);

  if (solutionContent) {
    // Get pricing information
    const pricing = getPricingBySlug(`/solutions/${solutionId}`);

    return {
      newTemplate: true,
      solutionContent,
      pricing,
    };
  }

  // Fallback to old system
  const solution = solutionsDetail?.data?.solution?.data?.find(
    (item) => item?.attributes?.slug === solutionId
  );

  if (!solution) {
    return redirect("/");
  }

  return { solution };
}

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (inView) setVisible(true);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function SolutionDetail() {
  const data = useLoaderData<typeof loader>();

  // Check if using new template system
  if (data.newTemplate && data.solutionContent) {
    const pricing = data.pricing;
    const showPrice = pricing ? shouldShowPricing(pricing) : false;

    return (
      <div className="min-h-screen">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSolutionJsonLd(data.solutionContent)
            ),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateSolutionBreadcrumbJsonLd(data.solutionContent)
            ),
          }}
        />
        {generateSolutionFaqJsonLd(data.solutionContent) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateSolutionFaqJsonLd(data.solutionContent)
              ),
            }}
          />
        )}

        <SolutionLayout
          content={data.solutionContent}
          heroVariant="gradient-bg"
        >
          {/* CTA Section after hero */}
          {pricing && (
            <CTASection
              headline={`Transform Your Business with ${pricing.title}`}
              subtext={pricing.subtitle}
              ctaLabel={pricing.primaryCTA.label}
              onClick={() => {}}
              serviceKey={pricing.key}
              location="solution_page_hero"
              showPrice={showPrice}
              startingFrom={pricing.startingFrom}
            />
          )}

          {/* Pricing Section near the end */}
          {pricing && (
            <section className="py-20 max-mobile:py-12 bg-white">
              <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 max-mobile:mb-10">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-6">
                    💰 Flexible Pricing
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-navy-950 mb-6">
                    Choose Your Perfect Plan
                  </h2>
                  <p className="text-xl text-navy-700 max-w-3xl mx-auto leading-relaxed">
                    From starter projects to enterprise solutions, we have the
                    right package for your business needs and budget.
                  </p>
                </div>

                <PricingTiers
                  serviceKey={pricing.key}
                  location="solution_page_pricing"
                  showPrice={showPrice}
                  basePrice={pricing.startingFrom}
                  serviceTitle={pricing.title}
                />

                {/* Additional Info */}
                <div className="text-center mt-16">
                  <div className="bg-navy-50 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-navy-950 mb-4">
                      All Plans Include
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-amber-600 font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-navy-950">
                          Free Consultation
                        </h4>
                        <p className="text-sm text-navy-700">
                          Initial strategy session at no cost
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-amber-600 font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-navy-950">
                          Quality Guarantee
                        </h4>
                        <p className="text-sm text-navy-700">
                          100% satisfaction or money back
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-amber-600 font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-navy-950">
                          Ongoing Support
                        </h4>
                        <p className="text-sm text-navy-700">
                          Continuous assistance after delivery
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </SolutionLayout>

        {/* Inquiry Modal */}
        <InquiryModal />
      </div>
    );
  }

  // Fallback to old template for solutions not yet migrated
  const solution = data.solution;
  const attributes = solution?.attributes;

  const bannerImageUrl = attributes?.bannerImage?.data?.attributes?.url;
  const mainTitle = attributes?.mainTitle;
  const description = attributes?.description;
  const overViewTitle = attributes?.overViewTitle;
  const overViewDescription = attributes?.overViewDescription;
  const overViewImageUrl =
    attributes?.overViewImage?.data?.[0]?.attributes?.url;
  const featuresTitle = attributes?.featuresTitle;
  const allFeatures = attributes?.allFeatures;

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="max-w-7xl mx-auto ">
        <section className="text-center">
          {bannerImageUrl && (
            <div className="relative px-5">
              <img
                src={`https://cms.rejoicehub.com${bannerImageUrl}`}
                alt={mainTitle}
                className="w-full max-w-4xl mx-auto rounded-xl shadow-3xl object-cover"
              />
            </div>
          )}

          {attributes?.useCaseTitle ? (
            <a
              href={attributes.useCaseTitle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-base bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold mt-8 mb-4"
              style={{ minWidth: 180 }}
            >
              Try it now
            </a>
          ) : (
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg mt-8 mb-4"
              style={{ minWidth: 180 }}
            >
              Try it now
            </a>
          )}
        </section>

        {(overViewTitle || overViewDescription) && (
          <AnimatedSection className="pb-16">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-10">
                <div className="">
                  <h2 className="heading3 mb-4 text-navy-950">
                    {overViewTitle}
                  </h2>
                  <p className="text-lg text-grey-600">{overViewDescription}</p>
                </div>
                {overViewImageUrl && (
                  <div className="">
                    <img
                      src={`https://cms.rejoicehub.com${overViewImageUrl}`}
                      alt={overViewTitle}
                      className="w-full rounded-2xl shadow-2xl object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
      <div className="bg-blue-900">
        <GrowingCount />
      </div>
      {featuresTitle && allFeatures && (
        <AnimatedSection className="py-16 bg-blue-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pb-12">
              <h2 className="text-4xl font-semibold text-center text-navy-900 text-3xl">
                {featuresTitle}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {allFeatures.map((item: any, index: number) => (
                <div
                  key={index}
                  className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3"
                >
                  <h3 className="text-xl mb-3 text-center font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-center leading-relaxed text-light">
                    {item.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}
