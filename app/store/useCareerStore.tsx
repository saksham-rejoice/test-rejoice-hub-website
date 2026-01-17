import { create } from "zustand";
import {
  getCareerScore,
  getPsQuestions,
  submitCareerApplication,
} from "~/api/careerApi";

import { CareerState, PsychologicalQuestion } from "~/types/careerTypes";

const initialStates = {
  isFormSubmitting: false,
  formError: null,
  name: "",
  username: "",
  email: "",
  role: "",
  githubRequired: false,

  psychoQuestions: [],
  skillQuestions: {},
  pdfocr: "",
  loadingPsyQuestions: false,
  loadingSkillQuestions: false,
  questionsError: null,
  id: "",
  // score: 0,
  isLoadingScore: false,
  selectedSkillAnswers: {},
  rankedPsychoAnswers: {},
  isSuccessModalOpen: false,
};

export const useCareerStore = create<CareerState>()((set) => ({
  ...initialStates,

  submitApplication: async (formData: FormData) => {
    set({ isFormSubmitting: true, formError: null });
    try {
      const name = formData.get("name") as string;
      const username = formData.get("username") as string;
      const email = formData.get("email") as string;
      const role = formData.get("role") as string;
      const githubRequired = formData.get("githubRequired") === "true";
      set({ name, username, email, role, githubRequired });
      const response = await submitCareerApplication(formData);
      if (response.skill_based_question) {
        set({ skillQuestions: response.skill_based_question });
      }

      if (response.pdfocr) {
        set({ pdfocr: response.pdfocr });
      }
      if (response.id) {
        set({ id: response.id });
      }
      set({ isFormSubmitting: false });
      set({ loadingSkillQuestions: false });
      return response;
    } catch (error: any) {
      set({ formError: error.message || "Failed to submit application. Please Enter Valid Data." });
      set({ isFormSubmitting: false });
      throw error;
    }
  },

  fetchQuestions: async () => {
    set({
      loadingSkillQuestions: true,
      questionsError: null,
      loadingPsyQuestions: true,
    });

    try {
      const response = await getPsQuestions();

      if (response.questions) {
        set({ psychoQuestions: response.questions });

        const initialRankings: Record<number, string[]> = {};
        response.questions.forEach((q: PsychologicalQuestion) => {
          initialRankings[q.id] = [...q.options];
        });
        set({ rankedPsychoAnswers: initialRankings });
        set({ loadingPsyQuestions: false });
        set({ loadingSkillQuestions: false });
      }
    } catch (error: any) {
      set({ questionsError: error.message || "Failed to load questions" });
      throw error;
    }
  },

  getCareerScorefunction: async (data: any) => {
    set({ isLoadingScore: true });
    try {
      const apiResponse = await getCareerScore(data);
      // const finalScore = typeof apiResponse === "number" ? Math.round(apiResponse) : Math.round(apiResponse?.score);

      // if (isNaN(finalScore)) {
      //   throw new Error("Invalid score received from API");
      // }

      // update global store
      set({ isSuccessModalOpen: true });

      // return in a consistent shape for callers
      return { isSuccessModalOpen: true };
      
    } catch (error: any) {
      set({ questionsError: error.message || "Failed to get career score" });
      throw error;
    } finally {
      set({ isLoadingScore: false });
    }
  },

  updatePsychoRanking: (questionId: number, newOrder: string[]) => {
    set((state) => ({
      rankedPsychoAnswers: {
        ...state.rankedPsychoAnswers,
        [questionId]: newOrder,
      },
    }));
  },

  updateSkillAnswer: (question: string, answer: string) => {
    set((state) => ({
      selectedSkillAnswers: {
        ...state.selectedSkillAnswers,
        [question]: answer,
      },
    }));
  },

  setSuccessModalOpen: (isOpen: boolean) => {
    set({ isSuccessModalOpen: isOpen });
  },

  resetStore: () => {
    set(initialStates);
  },
}));
