export type CaseStudy = {
  caseStudyName: string;
  image?: { data?: { attributes: { url: string } } };
  slug: string;
  technology_names?: { data: { attributes: { name: string } }[] };
};


export type CaseStudyDetailType = {
  caseStudyName: string;
  slug: string;
  sortdescription?: string;
  casestudydetails?: string;
  createdAt?: string;
  image?: {
    data?: {
      attributes?: {
        url: string;
      };
    };
  };
  technology_names?: {
    data: { attributes: { name: string } }[];
  };
  clienttestimonial?: {
    client_detail?: {
      description?: string;
      rating?: number;
      title?: string;
    };
    description?: string;
    title?: string;
  };
  faqs?: {
    description?: string;
    faq_details?: { answer: string; question: string; id: string }[];
    title?: string;
    id?: string;
  }[];
};

export type CaseStudyDetailProps = {
  caseStudy: CaseStudyDetailType;
};


export type CaseStudyFaqType = {
  id?: string;
  title?: string;
  description?: string;
  faq_details?: { answer: string; question: string; id: string }[];
};

export type CaseStudyFaqProps = {
  faqs: CaseStudyFaqType[];
};
