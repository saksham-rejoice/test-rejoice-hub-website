import React, { useCallback } from "react";
import { useEffect } from "react";
import pkg from "react-sortablejs";
import { useCareerStore } from "../../../store/useCareerStore";
import {
  LucideArrowUpDown,
  LucideGripVertical,
  LucideCheckCircle2,
  LucideAlertCircle,
} from "lucide-react";
import CareerDetailsSuccessModel from "./SuccessModel";
import { getQuestions } from "~/api/careerApi";

const { ReactSortable } = pkg;

interface QuestionsSectionProps {
  onCloseModal: () => void;
}

const QuestionsSection = ({ onCloseModal }: QuestionsSectionProps) => {
  const {
    loadingPsyQuestions,
    loadingSkillQuestions,
    questionsError,
    formError,
    psychoQuestions,
    skillQuestions,
    selectedSkillAnswers,
    rankedPsychoAnswers,
    fetchQuestions,
    updatePsychoRanking,
    updateSkillAnswer,
    pdfocr,
    id,
    getCareerScorefunction,
    isLoadingScore,
    name,
    username,
    email,
    role,
    isSuccessModalOpen,
    setSuccessModalOpen,
    githubRequired,
    score,
  } = useCareerStore();

 useEffect(() => {
  const loadQuestions = async () => {
    try {
      await fetchQuestions();
      const questions = await getQuestions(id);
      console.log('Loaded questions:', questions);
    } catch (error) {
      console.error('Error loading questions:', error);
    }
  };

  loadQuestions();
}, [fetchQuestions, id]); // Add id to dependency array

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const transformedPsychoAnswers: Record<string, Record<string, number>> = {};

    Object.entries(rankedPsychoAnswers).forEach(([questionId, answers]) => {
      const question =
        psychoQuestions.find((q) => q.id.toString() === questionId)?.question ||
        "";
      if (question) {
        transformedPsychoAnswers[question] = {};
        answers.forEach((answer, index) => {
          transformedPsychoAnswers[question][answer] = index + 1;
        });
      }
    });

    const payload = {
      email: email,
      id: id,
      username: username,
      name: name,
      role: role,
      pdfocr: pdfocr,
      skill_based_question: selectedSkillAnswers,
      psychological_question: transformedPsychoAnswers,
      githubRequired: githubRequired,
    };

    await getCareerScorefunction(payload);
  };

  const error = questionsError || formError;

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[500px] px-4">
        <div className="max-w-md w-full bg-red-50 border border-red-200 rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <LucideAlertCircle className="w-12 h-12 text-red-500" />
          </div>
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Something went wrong
          </h3>
          <p className="text-red-600 mb-6">{error}</p>
          <button
            onClick={fetchQuestions}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      {isSuccessModalOpen && (
        <CareerDetailsSuccessModel
          onClose={() => {
            setSuccessModalOpen(false);
            onCloseModal();
          }}
          score={score}
        />
      )}
      <div className="w-full max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="  overflow-hidden">
            <div className="px-8 py-6">
              <div className="flex items-center gap-3 text-navy-950">
                <LucideArrowUpDown className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Preference Ranking</h2>
              </div>
              <p className="text-navy-900 mt-2">
                Drag and drop options to rank them by your preference (most
                preferred at top)
              </p>
            </div>

            <div className="p-8">
              {loadingPsyQuestions ? (
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-6"></div>
                      <div className="space-y-3 max-w-lg">
                        {[1, 2, 3, 4].map((j) => (
                          <div
                            key={j}
                            className="h-12 bg-gray-100 rounded-lg"
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  {psychoQuestions.map((question, idx) => (
                    <div key={question.id} className="group">
                      <div className="flex items-start gap-3 mb-6">
                        <span className="flex-shrink-0 w-8 h-8 text-navy-950 flex items-center justify-center font-semibold text-lg">
                          {idx + 1}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900 leading-relaxed">
                          {question.question}
                        </h3>
                      </div>

                      <div className="ml-11 max-w-2xl">
                        <ReactSortable
                          list={
                            rankedPsychoAnswers[question.id]?.map(
                              (text: string, id: number) => ({
                                id,
                                text,
                              })
                            ) || []
                          }
                          setList={(newList: { id: number; text: string }[]) =>
                            updatePsychoRanking(
                              question.id,
                              newList.map((item) => item.text)
                            )
                          }
                          animation={200}
                          className="space-y-3"
                        >
                          {(rankedPsychoAnswers[question.id] || []).map(
                            (option: string, optionIdx: number) => (
                              <div
                                key={optionIdx}
                                className="group/item flex items-center gap-4 p-4 bg-white border-2 border-gray-200 rounded-xl cursor-move hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:bg-blue-50"
                              >
                                <LucideGripVertical className="w-5 h-5 text-gray-400 group-hover/item:text-navy-950 transition-colors" />
                                <div className="flex-1 flex items-center justify-between">
                                  <span className="text-gray-700 font-medium">
                                    {option}
                                  </span>
                                </div>
                              </div>
                            )
                          )}
                        </ReactSortable>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="px-8 py-6">
              <div className="flex items-center gap-3 text-navy-950">
                <LucideCheckCircle2 className="w-6 h-6" />
                <h2 className="text-xl font-semibold">
                  Multiple Choice Questions
                </h2>
              </div>
              <p className="text-navy-900 mt-2">
                Select the best answer for each question
              </p>
            </div>

            <div className="p-8">
              {loadingSkillQuestions ? (
                <div className="space-y-10">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="h-6 bg-gray-200 rounded-full w-4/5 mb-6"></div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((j) => (
                          <div
                            key={j}
                            className="h-16 bg-gray-100 rounded-lg"
                          ></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-10">
                  {Object.entries(skillQuestions).map(([key, item], idx) => (
                    <div key={key} className="group">
                      <div className="flex items-start gap-3 mb-6">
                        <span className="flex-shrink-0 w-8 h-8 text-navy-950 flex items-center justify-center font-semibold text-lg">
                          {idx + 1}
                        </span>
                        <h3 className="text-lg font-medium text-gray-900  leading-relaxed">
                          {item.question}
                        </h3>
                      </div>

                      <div className="ml-11 grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {item?.options?.map((option: string, optionIdx: number) => (
                          <label
                            key={optionIdx}
                            className={`group/option relative flex items-center justify-between bg-white gap-4 p-5 border-2 rounded-xl cursor-pointer transition-all duration-200 
                           ${selectedSkillAnswers[item.question] === option
                                ? "border-navy-700 bg-navy-50 shadow-md"
                                : "border-gray-200 hover:border-navy-700 hover:bg-gray-50"
                              }
                         `}
                          >
                            <div className="flex items-center gap-3">
                              <span
                                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold transition-colors 
                             ${selectedSkillAnswers[item.question] === option
                                    ? "bg-navy-700 text-white"
                                    : "bg-gray-200 text-gray-700 group-hover/option:bg-navy-700 group-hover/option:text-white"
                                  }
                           `}
                              >
                                {String.fromCharCode(65 + optionIdx)}
                              </span>
                              <p className="text-gray-800 font-medium">
                                {option}
                              </p>
                            </div>

                            <input
                              type="radio"
                              name={`skill-${key}`}
                              value={option}
                              onChange={(e) =>
                                updateSkillAnswer(item.question, e.target.value)
                              }
                              checked={
                                selectedSkillAnswers[item.question] === option
                              }
                              className="appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-[5px] checked:border-navy-700 transition-all duration-200"
                              required
                            />
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <button
              type="submit"
              disabled={
                isLoadingScore || loadingPsyQuestions || loadingSkillQuestions
              }
              className={`px-6 py-4 cursor-pointer disabled:cursor-not-allowed bg-navy-950 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${isLoadingScore || loadingPsyQuestions || loadingSkillQuestions
                  ? "opacity-50 cursor-not-allowed hover:transform-none"
                  : "hover:scale-105"
                }`}
            >
              {isLoadingScore ? (
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Processing Your Responses...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LucideCheckCircle2 className="w-5 h-5" />
                  <span>Submit Assessment</span>
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuestionsSection;
