import {
  MetaFunction,
  LoaderFunctionArgs,
  useLoaderData,
} from "react-router-dom";
import { servicesData } from "~/data/services/serviceDetail";
import { ServiceLayout } from "~/components/services/ServiceLayout";
import { ServiceLeadMagnets } from "~/components/services/LeadMagnetPlacements";
import {
  getServiceContent,
  generateServiceMeta,
  generateServiceJsonLd,
  generateServiceBreadcrumbJsonLd,
  generateServiceFaqJsonLd,
} from "~/lib/serviceContentLoader";
import FAQ from "~/sections/home/faq";
import { GrowingCount } from "~/sections/commansection/GrowingCount";
import ServicesHero from "~/components/comman/ServicesHero";
import WhyChooseRejoicehub from "~/sections/home/WhyChooseRejoicehub";
import ErrorFallback from "~/components/ui/ErrorFallback";
import { isRouteErrorResponse } from "react-router-dom";
import { suggestionPrompts, placeholderMap } from "~/constant/servicesprompt";
import { useState } from "react";
import { redirect } from "react-router";
import { WEB_URL } from "~/utils/config";
import { getPricingBySlug, shouldShowPricing } from "~/data/pricing";
import {
  CTASection,
  PricingTiers,
  InquiryModal,
} from "~/components/services/pricing";
import { serviceDescriptionMeta,serviceTitleMeta } from "~/constant/serviceMetaData";

export const meta: MetaFunction = ({ params }) => {
  const serviceId = params?.serviceId ?? "";

  const title =
     serviceTitleMeta[serviceId] || "RejoiceHub Services";

  const description=(serviceId && serviceDescriptionMeta[serviceId]);

  const canonical = serviceId
    ? `${WEB_URL}/services/${serviceId}`
    : `${WEB_URL}/services`;

  return [
    { title },
    { name: "description", content: description },
      {
      tagName: "link",
      rel: "canonical",
      href: canonical,
    },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const { serviceId } = params;

  // Get pricing information
  const pricing = getPricingBySlug(`/services/${serviceId}`);

  // First try to load from new unified system
  const serviceContent = getServiceContent(serviceId!);
  if (serviceContent) {
    return {
      newTemplate: true,
      serviceContent,
      serviceId,
      pricing,
    };
  }

  // Fallback to old system
  const service = servicesData?.data?.service?.data?.find(
    (item) => item?.attributes?.slug === serviceId
  );

  if (!service) {
    return redirect("/");
  }

  return {
    newTemplate: false,
    service,
    serviceId,
    pricing,
  };
}

export default function ServiceDetail() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  const data = useLoaderData<typeof loader>();

  // AI Builder submission handler
  const handleAIBuilderSubmit = async (submissionData: {
    userInput: string;
    email: string;
    serviceCategory: string;
  }) => {
    try {
      // Here you would integrate with your lead capture API

      // Example API call structure:
      // const response = await fetch('/api/ai-builder-leads', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submissionData)
      // });

      // For now, just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Optionally track analytics
      // analytics.track('AI Builder Submission', submissionData);
    } catch (error) {
      console.error("Failed to submit AI builder lead:", error);
      throw error;
    }
  };

  // Check if using new template system
  if (data.newTemplate && data.serviceContent) {
    const pricing = data.pricing;
    const showPrice = pricing ? shouldShowPricing(pricing) : false;

    return (
      <div className="min-h-screen">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateServiceJsonLd(data.serviceContent)),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              generateServiceBreadcrumbJsonLd(data.serviceContent)
            ),
          }}
        />
        {generateServiceFaqJsonLd(data.serviceContent) && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(
                generateServiceFaqJsonLd(data.serviceContent)
              ),
            }}
          />
        )}

        <ServiceLayout
          content={data.serviceContent}
          heroVariant="gradient-bg"
          onAIBuilderSubmit={handleAIBuilderSubmit}
        >
          {/* CTA Section after hero */}
          {pricing && (
            <CTASection
              headline={`Transform Your Business with ${pricing.title}`}
              subtext={pricing.subtitle}
              ctaLabel={pricing.primaryCTA.label}
              onClick={() => {}}
              serviceKey={pricing.key}
              location="service_page_hero"
              showPrice={showPrice}
              startingFrom={pricing.startingFrom}
            />
          )}

          {/* <ServiceLeadMagnets
            serviceId={data.serviceContent.serviceId}
            className=""
            onSubmit={async (email: string, resourceId: string) => {
              console.log("Lead submitted:", { email, resourceId });
            }}
          /> */}

          {/* Pricing Section near the end */}
          {/* {pricing && (
            <section className="py-20 max-mobile:py-12 ">
              <div className="container-lg">
                <div className="text-center mb-16 max-mobile:mb-10">
                  <p className="text-base block text-center pb-4 font-medium text-gradient max-mobile:pb-2 max-mobile:text-sm">
                    Flexible Pricing
                  </p>

                  <h2 className="heading3 text-center mb-4 text-navy-950">
                    Choose Your Perfect Plan
                  </h2>
                  <p className="text-lg text-center max-w-3xl mx-auto text-grey-600 max-mobile:text-base">
                    From starter projects to enterprise solutions, we have the
                    right package for your business needs and budget.
                  </p>
                </div>

                <PricingTiers
                  serviceKey={pricing.key}
                  location="service_page_pricing"
                  showPrice={showPrice}
                  basePrice={pricing.startingFrom}
                  serviceTitle={pricing.title}
                />

                <div className="text-center mt-16">
                  <div className="bg-navy-50 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold text-navy-950 mb-4">
                      All Plans Include
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-navy-950">
                          Free Consultation
                        </h4>
                        <p className="text-sm text-navy-700">
                          Initial strategy session at no cost
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">✓</span>
                        </div>
                        <h4 className="font-semibold text-navy-950">
                          Quality Guarantee
                        </h4>
                        <p className="text-sm text-navy-700">
                          100% satisfaction or money back
                        </p>
                      </div>
                      <div className="space-y-2">
                        <div className="w-12 h-12 bg-light-blue rounded-full flex items-center justify-center mx-auto">
                          <span className="text-white font-bold">✓</span>
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
          )} */}
        </ServiceLayout>

        {/* Inquiry Modal */}
        <InquiryModal />
      </div>
    );
  }

  

  // Fallback to old template for services not yet migrated
  const service = data.service;
  const attributes = service?.attributes;
  const hero = attributes?.service_hero_banner;
  const slug = attributes?.slug;
  const pricing = data.pricing;
  const showPrice = pricing ? shouldShowPricing(pricing) : false;

  const promptsForSlug = suggestionPrompts[slug as string] || [];
  const placeholderText = placeholderMap[slug as string] || "Let's explore...";

  const whyUs = attributes?.why_us;
  const benefits = attributes?.service_benefits;
  const transformBusiness = attributes?.TransformYourBusiness;
  const typesOfSection = attributes?.types_of_section;
  const capabilities = attributes?.capabilities;
  const faqs = attributes?.faqs;

  // Legacy template rendering for non-migrated services
  return (
    <div className="">
      <ServicesHero
        title={hero?.title || "Service"}
        leftIcons={attributes?.leftIcons || []}
        rightIcons={attributes?.rightIcons || []}
        prompts={promptsForSlug}
        placeholder={placeholderText}
      />

      {/* CTA Section after hero */}
      {pricing && (
        <CTASection
          headline={`Transform Your Business with ${pricing.title}`}
          subtext={pricing.subtitle}
          ctaLabel={pricing.primaryCTA.label}
          onClick={() => {}}
          serviceKey={pricing.key}
          location="service_page_hero"
          showPrice={showPrice}
          startingFrom={pricing.startingFrom}
        />
      )}
      <div className="">
        {whyUs && (
          <section className="py-16 relative bg-white">
            <div className="white-background z-[auto]"></div>
            <div className="cus-container relative">
              <div className="pb-12">
                <h2 className="text-4xl text-center max-mobile:text-3xl font-semibold mb-4 text-navy-900">
                  {whyUs.title}
                </h2>
                <p className="text-lg max-mobile:text-base max-w-3xl mx-auto text-navy-900 text-center">
                  {whyUs.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyUs.why_us_detail?.map((item: any, index: number) => (
                  <div
                    key={index}
                    className="group p-8 rounded-2xl  max-mobile:px-5 max-mobile:py-6 max-mobile:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-accent-50 border-l-[4px] border-accent-400"
                  >
                    {item.logo?.data?.attributes?.url && (
                      <div className="mb-6 max-mobile:mb-4">
                        <img
                          src={`https://cms.rejoicehub.com${item.logo.data.attributes.url}`}
                          alt={item.title}
                          className="h-16 w-16 mx-auto object-contain"
                        />
                      </div>
                    )}
                    <h3 className="text-xl max-mobile:text-lg mb-3 text-center text-navy-950">
                      {item.title}
                    </h3>
                    <p className="text-center max-mobile:text-base leading-relaxed text-navy-900">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {capabilities && (
          <section className="bg-amber-50 py-16">
            <div className="cus-container">
              <div className="pb-12">
                <h2 className="text-4xl text-center max-mobile:text-3xl font-semibold mb-4 text-navy-900">
                  {capabilities.title}
                </h2>
                <p className="text-lg max-mobile:text-base max-w-3xl mx-auto text-navy-900 text-center">
                  {/* {capabilities.description}  */}
                  Our agents learn super-quick. They have been developed to
                  learn on the way as they’re exposed to more and more
                  information. Here’s how they transform your business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {capabilities.capabilities_detail?.map(
                  (benefit: any, index: number) => (
                    <div
                      key={index}
                      className="group relative bg-accent-50 backdrop-blur-xl border border-accent-400 rounded-3xl py-8 px-5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transform transition-all duration-300"
                    >
                      {benefit.logo?.data?.attributes?.url && (
                        <div className="flex items-center justify-center mb-6">
                          <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-inner ring-2 ring-accent-400">
                            <img
                              src={benefit.logo.data.attributes.url}
                              alt={benefit.title}
                              className="h-8 w-8 object-contain"
                              style={{
                                filter:
                                  "invert(76%) sepia(93%) saturate(1743%) hue-rotate(346deg) brightness(98%) contrast(95%)",
                              }}
                            />
                          </div>
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-center text-navy-950 group-hover:text-warning-700 transition-colors">
                        {benefit.title}
                      </h3>
                      <p className="text-center mt-3 text-navy-900 text-base leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-accent-400 pointer-events-none transition-all duration-300" />
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {transformBusiness && (
          <section className="py-16 relative bg-white">
            <div className="white-background z-[auto]"></div>
            <div className="cus-container relative">
              <div className="pb-12">
                <h2 className="text-4xl max-w-[850px] mx-auto text-center max-mobile:text-3xl font-semibold mb-5 text-navy-900">
                  {transformBusiness.title}
                </h2>
                <p className="text-lg text-center max-mobile:text-base max-w-3xl mx-auto text-navy-900">
                  {transformBusiness.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {transformBusiness.TransformYourBusiness_detail?.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="group p-8 rounded-2xl  max-mobile:px-5 max-mobile:py-6 max-mobile:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-accent-50 border-b-[4px] border-warning-500"
                    >
                      {item.logo?.data?.attributes?.url && (
                        <div className="mb-6 max-mobile:mb-4">
                          <img
                            src={`${item.logo.data.attributes.url}`}
                            alt={item.title}
                            className="h-16 w-16 mx-auto object-contain"
                            style={{
                              filter:
                                "invert(76%) sepia(93%) saturate(1743%) hue-rotate(346deg) brightness(98%) contrast(95%)",
                            }}
                          />
                        </div>
                      )}
                      <h3 className="text-xl max-mobile:text-lg mb-3 text-center text-navy-950">
                        {item.title}
                      </h3>
                      <p className="text-center max-mobile:text-base leading-relaxed text-navy-900">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
        {benefits && (
          <section className="bg-amber-50 py-16">
            <div className="cus-container">
              <div className="pb-12">
                <h2 className="text-4xl text-center max-mobile:text-3xl font-semibold mb-4 text-navy-900">
                  {benefits.title}
                </h2>
                <p className="text-lg text-center max-mobile:text-base max-w-3xl mx-auto text-navy-900">
                  {benefits.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {benefits.service_benefits_detail?.map(
                  (benefit: any, index: number) => (
                    <div
                      key={index}
                      className="group p-8 max-mobile:py-8 max-mobile:px-5 max-mobile:rounded-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-accent-50 border-l-[4px] border-accent-400"
                    >
                      {benefit.logo?.data?.attributes?.url && (
                        <div className="mb-6 max-mobile:mb-4">
                          <img
                            src={`https://cms.rejoicehub.com${benefit.logo.data.attributes.url}`}
                            alt={benefit.title}
                            className="h-16 w-16 mx-auto object-contain"
                          />
                        </div>
                      )}
                      <h3 className="text-xl mb-3 text-center text-navy-950">
                        {benefit.title}
                      </h3>
                      <p className="text-center max-mobile:text-base leading-relaxed text-navy-900">
                        {benefit.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </div>
      <div className="">
        {typesOfSection && (
          <section className="py-16 relative bg-white">
            <div className="white-background z-[auto]"></div>
            <div className="cus-container relative">
              <div className="pb-12">
                <h2 className="text-4xl text-center max-mobile:text-3xl font-semibold mb-4 text-navy-900">
                  {typesOfSection.title}
                </h2>
                <p className="text-lg max-mobile:text-base max-w-4xl text-center mx-auto text-navy-900">
                  {typesOfSection.description}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {typesOfSection.types_of_detail?.map(
                  (item: any, index: number) => (
                    <div
                      key={index}
                      className="group p-8 rounded-2xl  max-mobile:px-5 max-mobile:py-6 max-mobile:rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-accent-50 border-l-[4px] border-accent-400"
                    >
                      {item.logo?.data?.attributes?.url && (
                        <div className="mb-6 max-mobile:mb-4">
                          <img
                            src={`${item.logo.data.attributes.url}`}
                            alt={item.title}
                            className="h-16 w-16 mx-auto object-contain"
                            style={{
                              filter:
                                "invert(76%) sepia(10%) saturate(1700%) hue-rotate(346deg) brightness(98%) contrast(50%)",
                            }}
                          />
                        </div>
                      )}
                      <h3 className="text-xl max-mobile:text-lg mb-3 text-center text-navy-950">
                        {item.title}
                      </h3>
                      <p className="text-center max-mobile:text-base leading-relaxed text-navy-900">
                        {item.description}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}
      </div>
      <WhyChooseRejoicehub />
      <GrowingCount />

      {/* Pricing Section */}
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
                From starter projects to enterprise solutions, we have the right
                package for your business needs and budget.
              </p>
            </div>

            <PricingTiers
              serviceKey={pricing.key}
              location="service_page_pricing"
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

      {/* Legacy CTA Section */}
      <section className="py-20 max-mobile:py-12 bg-navy-950">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-6">
            🎯 Ready to Transform?
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Start Your Transformation Today
          </h2>

          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
            Get your free consultation and custom roadmap to accelerate your
            success.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://calendly.com/dipak-rejoicehub"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-navy-950 font-semibold rounded-xl hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Book Free Strategy Call</span>
            </a>
            <a
              href="tel:+919825122840"
              className="px-8 py-3 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
            >
              📞 Call: +91 98251 22840
            </a>
          </div>
        </div>
      </section>
      {faqs ? (
        <section className="bg-amber-50 text-navy-950 w-full py-16 px-6 sm:px-12 ">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl  font-semibold mb-12 max-mobile:mb-10 text-center tracking-tight">
              FAQ
            </h2>
            <div className="space-y-6">
              {faqs?.faq_details?.map((item: any, index: number) => (
                <details
                  key={index}
                  open={activeIndex === index}
                  className="group border-b border-navy-900 transition-all duration-300"
                >
                  <summary
                    onClick={(e) => {
                      e.preventDefault();
                      handleToggle(index);
                    }}
                    className="flex justify-between items-center max-mobile:text-xl cursor-pointer py-6  text-2xl text-navy-900 list-none"
                  >
                    <span>{item.question}</span>
                    <svg
                      className="w-6 h-6 text-navy-900 transition-transform duration-300 group-open:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <div className="transition-all duration-500 ease-in-out">
                    <p className="text-lg max-mobile:text-base font-light text-navy-900 leading-relaxed pb-6 pr-2">
                      {item.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20 max-mobile:py-12 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-amber-700 font-semibold text-sm mb-6">
                ❓ Frequently Asked Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-6">
                Get Your Questions Answered
              </h2>
              <p className="text-lg text-navy-700 max-w-2xl mx-auto leading-relaxed">
                Everything you need to know about our services and
                implementation process.
              </p>
            </div>
            <FAQ />
          </div>
        </section>
      )}

      {/* Inquiry Modal */}
      <InquiryModal />
    </div>
  );
}

export function ErrorBoundary({ error }: { error: unknown }) {
  let status: string | number = "Error";
  let message = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    message =
      error.status === 404
        ? "The requested service could not be found."
        : error.statusText || message;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <ErrorFallback status={status} message={message} />
      {stack && (
        <pre className="w-full p-4 overflow-x-auto mt-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
