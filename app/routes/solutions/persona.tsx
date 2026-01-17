import { solutionsDetail } from "~/data/solutions/solutionsDetail";
import PersonasHero from "~/components/comman/personasHero";
import { GrowingCount } from "~/sections/commansection/GrowingCount";
import { MetaFunction } from "react-router";
import { AnimatedSection } from "../company/about";
import { WEB_URL } from "~/utils/config";

export const meta: MetaFunction = () => {
  return [
    { title: "Create Precise Personas with AI | RejoiceHub Solutions" },
    {
      name: "description",
      content:
        "Create accurate customer personas with AI. Improve targeting, personalization, and marketing strategy with RejoiceHub's smart persona solution.",
    },
    {
      tagName: "link",
      rel: "canonical",
      href: `${WEB_URL}/solutions/persona`,
    },
  ];
};

const personaSolution = solutionsDetail?.data?.solution?.data?.find(
  (item) => item?.attributes?.slug === "persona"
);

if (!personaSolution) {
  throw new Error("Persona AI solution not found.");
}

const attributes = personaSolution.attributes;
// const bannerImageUrl = attributes?.bannerImage?.data?.attributes?.url;
// const mainTitle = attributes?.mainTitle;
// const description = attributes?.description;
const overViewTitle = attributes?.overViewTitle;
const overViewDescription = attributes?.overViewDescription;
const overViewImageUrl = attributes?.overViewImage?.data?.[0]?.attributes?.url;
const featuresTitle = attributes?.featuresTitle;
const allFeatures = attributes?.allFeatures;

export default function PersonaAISolution() {
  return (
    <div className="">
      <PersonasHero />
      {/* <div className="max-w-7xl mx-auto px-6 py-12">
        <section className="text-center -mt-40 mb-20">
          {attributes?.useCaseTitle ? (
            <a
              href={attributes.useCaseTitle}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 font-semibold text-lg mt-8 mb-4"
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
      </div> */}
      {(overViewTitle || overViewDescription) && (
        <AnimatedSection className="py-16 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 gap-[120px] max-tab:grid-cols-1 max-tab:gap-10 max-mobile:gap-5">
              <div className="">
                <h2 className="text-4xl font-semibold mb-6 max-mobile:text-3xl text-primary">
                  {overViewTitle}
                </h2>
                <p className="text-lg max-mobile:text-base max-w-3xl mx-auto md:mx-0 text-primary whitespace-pre-line">
                  {overViewDescription}
                </p>
              </div>
              {overViewImageUrl && (
                <div className="">
                  <img
                    src={`https://cms.rejoicehub.com${overViewImageUrl}`}
                    alt={overViewTitle}
                    className="w-full  rounded-2xl shadow-2xl object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      )}

      {featuresTitle && allFeatures && (
        <section className="bg-blue-900 py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="pb-12 max-mobile:pb-10">
              <h2 className="heading3 text-center  text-navy-950">
                {featuresTitle}
              </h2>
            </div>
            <div className="grid max-mobile:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {allFeatures.map((item: any, index: number) => (
                <div
                  key={index}
                  className="bg-primary-300 p-3 rounded-2xl max-mobile:p-2"
                >
                  <div className="border border-solid border-primary-200 rounded-[14px] bg-primary-100 p-6 max-mobile:p-3">
                    <h3 className="text-xl mb-3 text-center text-white font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-center leading-relaxed text-light">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      <GrowingCount />
    </div>
  );
}
