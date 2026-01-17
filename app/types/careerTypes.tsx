
export type Job = {
    positionType: string;
    requirePerson: number;
    slug: string;
    shortDescription: string;
    conclusion: string;
    logo?: { data?: { attributes: { url: string } } };
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
  
 export type LoaderData = {
    jobDetail: {
      data: { attributes: Job }[];
      meta: { pagination: { total: number } };
    };
};
  
export type JobDetail = {
  id: string;
  positionType: string;
  githubRequired: boolean;
  requirePerson: number;
  slug: string;
  shortDescription: string;
  conclusion: string;
  bannerImage?: { data?: { attributes: { url: string } } };
  jobType?: string;
  publishDate?: string;
  location?: string;
  experience?: string;
  workingHours?: string;
  workingDays?: string;
  salary?: string;
  vacancy?: number;
  deadline?: string;
  Requirements?: { title: string }[];
  educationalQualification?: { title: string }[];
  Benefits?: { title: string }[];
  What_you_will_do?: { title: string }[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};



export type PsychologicalQuestion ={
  id: number;
  category: string;
  question: string;
  options: string[];
}

export type SkillQuestion = {
  question: string;
  options: string[];
}

export type CareerState = {
  isFormSubmitting: boolean;
  formError: string | null;
  name: string;
  username: string;
  email: string;
  role: string;
  githubRequired: boolean;

  psychoQuestions: PsychologicalQuestion[];
  skillQuestions: Record<string, SkillQuestion>;
  loadingPsyQuestions: boolean;
  loadingSkillQuestions: boolean;
  questionsError: string | null;
  pdfocr: string;
  id: string;
  // score: number;
  isLoadingScore: boolean;

  selectedSkillAnswers: Record<string, string>;
  rankedPsychoAnswers: Record<number, string[]>;
  isSuccessModalOpen: boolean;

  submitApplication: (formData: FormData) => Promise<void>;
  fetchQuestions: () => Promise<void>;
  updatePsychoRanking: (questionId: number, newOrder: string[]) => void;
  updateSkillAnswer: (question: string, answer: string) => void;
  resetStore: () => void;
  getCareerScorefunction: (data: any) => Promise<{ isSuccessModalOpen: boolean }>;
  setSuccessModalOpen: (isOpen: boolean) => void;
}