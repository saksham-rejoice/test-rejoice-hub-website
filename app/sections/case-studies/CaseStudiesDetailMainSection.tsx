
import CaseStudiesMarkdown from '../commansection/CommanMd';
import HeroSection from '~/components/comman/herosection';
import { CaseStudyDetailProps } from '~/types/caseStudyTypes';


import CaseStudiesFaq from './CaseStudiesFaq';
import TableOfContents, { Heading } from '../commansection/TableOfContents';
import { getHeadings } from '~/utils/getHeadings';

export default function CaseStudiesDetailMainSection({ caseStudy }: CaseStudyDetailProps) {
  const markdown = caseStudy.casestudydetails || '';
  const headings: Heading[] = getHeadings(markdown);

  return (
    <div className="bg-accent-50 min-h-screen">
      <HeroSection
        title={caseStudy.caseStudyName}
        subtitle={""}
      />
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 gap-8">

        <aside className="hidden lg:block flex-shrink-0">
          <TableOfContents headings={headings} />
        </aside>

        <main className="flex-1 min-w-0">
          <div className="mb-8">
            <a
              href="/case-studies"
              className="inline-flex items-center gap-2 px-4 py-2 text-navy-950 hover:text-slate-900 rounded-lg transition-all duration-200"
              aria-label="Back to Case Studies"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Case Studies
            </a>
          </div>

          {caseStudy.image?.data?.attributes?.url && (
            <div className="mb-8">
              <img
                src={`https://cms.rejoicehub.com${caseStudy.image.data.attributes.url}`}
                alt={caseStudy.caseStudyName}
                className="w-full h-auto rounded-xl shadow-lg border border-slate-200"
              />
            </div>
          )}

          {caseStudy.sortdescription && (
            <div className="mb-4 text-lg text-slate-700">{caseStudy.sortdescription}</div>
          )}

          <CaseStudiesMarkdown markdown={caseStudy.casestudydetails} />

          {caseStudy.faqs && caseStudy.faqs.length > 0 && (
            <section className="my-12">
              <hr className="border-t border-accent-200 mb-8" />
              <h2 className="text-3xl font-semibold text-navy-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <CaseStudiesFaq faqs={caseStudy.faqs} />
            </section>
          )}
        </main>
      </div>
    </div> 
  );
}
