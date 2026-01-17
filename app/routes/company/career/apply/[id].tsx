import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import pkg from "react-sortablejs";
import { getCareerScore, getQuestions, updateEmployee } from "../../../../../app/api/careerApi";
import { Button } from "~/components/ui/button";

import {
  LucideCheckCircle2,
  LucideArrowUpDown,
  LucideGripVertical,
  LucideX,
} from "lucide-react";
import type { PsychologicalQuestion } from "~/types/careerTypes";

const { ReactSortable } = pkg;

type QuestionItem = {
  id: string;
  question: string;
  options?: string[];
  answer?: string;
};

type LoaderData = {
  questions: QuestionItem[];
  questionsError: string | null;
  id: string;
  psychological_questions?: PsychologicalQuestion[];
  test_status: boolean;
  source?: string;
};

// ---------------- Simple Modal ----------------

function SimpleModal({
  open,
  title,
  description,
  primaryLabel = "OK",
  onClose,
  onPrimaryAction,
}: {
  open: boolean;
  title: string;
  description: string;
  primaryLabel?: string;
  onClose: () => void;
  onPrimaryAction?: () => void;
}) {
  if (!open) return null;

  const handlePrimary = () => {
    if (onPrimaryAction) onPrimaryAction();
    else onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-6 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 p-1 rounded-full hover:bg-gray-100"
        >
          <LucideX className="w-4 h-4 text-gray-500" />
        </button>

        <div className="flex flex-col items-center text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
            <LucideCheckCircle2 className="w-7 h-7 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={handlePrimary}
            className="px-5 py-2 rounded-lg bg-orange-500 text-white text-sm font-medium hover:bg-orange-600 transition-colors"
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------- Loader ----------------

export async function loader({
  request,
  params,
}: {
  request: Request;
  params: { id: string };
}) {
  const { id } = params;
  if (!id) {
    throw new Response("Missing job ID", { status: 400 });
  }

  try {
    const response = await getQuestions(id);

    const transformedQuestions = Object.entries(response.questions || {}).map(
      ([key, q]: [string, any]) => ({
        id: key,
        question: q.question,
        options: q.options || [],
        answer: response.questions_with_answers?.[key]?.answer || "",
      })
    );

    const psychological_questions: PsychologicalQuestion[] = (
      response.psychological_questions || []
    ).map((q: any) => ({
      id: q.id,
      question: q.question,
      options: q.options || [],
      category: q.category,
    }));

    const test_status = Boolean(response.test_status);
    const source = response.source;

    return {
      questions: transformedQuestions,
      questionsError: null,
      id,
      psychological_questions,
      test_status,
      source,
    } satisfies LoaderData;
  } catch (error: any) {
    const message =
      typeof error === "string"
        ? error
        : error?.message || "Failed to load application form";
    return {
      questions: [],
      questionsError: message,
      id,
      psychological_questions: [],
      test_status: false,
    } as LoaderData;
  }
}

// ---------------- Component ----------------

export default function EmailApplicationPage() {
  const loaderData = useLoaderData() as LoaderData | undefined;
  const location = useLocation();
  const navigate = useNavigate();

  if (!loaderData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-orange-50">
        <div className="bg-white shadow-md rounded-xl px-6 py-4 text-sm text-gray-600">
          Unable to load application data. Please try again later.
        </div>
      </div>
    );
  }

  const {
    questions = [],
    questionsError = null,
    id,
    psychological_questions = [],
    test_status = false,
  } = loaderData;

  const [formData, setFormData] = useState({
    currentSalary: "",
    expectedSalary: "",
    githubUsername: "",
  });

  const [answers, setAnswers] = useState<Record<string, string>>(
    () =>
      questions?.reduce((acc, q) => {
        if (q.id) acc[q.id] = q.answer || "";
        return acc;
      }, {} as Record<string, string>) || {}
  );

  const [psychoQuestions] = useState<PsychologicalQuestion[]>(
    () => psychological_questions
  );

  const [rankedPsychoAnswers, setRankedPsychoAnswers] = useState<
    Record<number, string[]>
  >(() => {
    const initial: Record<number, string[]> = {};
    (psychological_questions || []).forEach((q) => {
      initial[q.id] = [...(q.options || [])];
    });
    return initial;
  });

  const [submitting, setSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showAlreadySubmittedModal, setShowAlreadySubmittedModal] =
    useState(false);

  // NEW: salary validation errors
  const [errors, setErrors] = useState({
    currentSalary: "",
    expectedSalary: "",
  });

  // NEW: generic error modal (validation + API errors)
  const [errorModal, setErrorModal] = useState({
    open: false,
    title: "",
    description: "",
  });

  const isLocked = hasSubmitted || test_status;
  const isSubmitting = submitting || false;

  const updatePsychoRanking = (questionId: number, newOrder: string[]) => {
    setRankedPsychoAnswers((prev) => ({
      ...prev,
      [questionId]: newOrder,
    }));
  };

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        if (location.pathname.includes("/apply/")) {
          const questions = await getQuestions(id);
          console.log("Loaded questions:", questions);
        }
      } catch (error) {
        console.error("Error loading questions:", error);
      }
    };

    loadQuestions();
  }, [id, location.pathname]);

  useEffect(() => {
    if (test_status) {
      setShowAlreadySubmittedModal(true);
    }
  }, [test_status]);

  const handleCloseAlreadySubmitted = () => {
    setShowAlreadySubmittedModal(false);
    navigate("/");
  };

  const handleSuccessClose = () => {
    setShowSuccessModal(false);
    navigate("/");
  };



  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field-specific errors on change
    if (name === "currentSalary" || name === "expectedSalary") {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  // NEW: validate salary + required github
  const validateForm = () => {
    let hasError = false;
    const newErrors = {
      currentSalary: "",
      expectedSalary: "",
    };

    const current = Number(formData.currentSalary);
    const expected = Number(formData.expectedSalary);

    if (!formData.currentSalary) {
      newErrors.currentSalary = "Please enter your current salary.";
      hasError = true;
    } else if (Number.isNaN(current) || current <= 0) {
      newErrors.currentSalary = "Current salary must be a positive number.";
      hasError = true;
    }

    if (!formData.expectedSalary) {
      newErrors.expectedSalary = "Please enter your expected salary.";
      hasError = true;
    } else if (Number.isNaN(expected) || expected <= 0) {
      newErrors.expectedSalary = "Expected salary must be a positive number.";
      hasError = true;
    } else if (!Number.isNaN(current) && current > 0 && expected <= current) {
      newErrors.expectedSalary =
        "Expected salary should be greater than current salary.";
      hasError = true;
    }

    if (!formData.githubUsername.trim()) {
      hasError = true;
    }

    setErrors(newErrors);

    if (hasError) {
      setErrorModal({
        open: true,
        title: "Please check your details",
        description:
          "There are some issues with the salary fields. Please fix the highlighted fields and try again.",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // run validation first
    const isValid = validateForm();
    if (!isValid) return;

    if (submitting) return;

    setSubmitting(true);
    try {
      const skill_based_question: Record<string, string> = {};
      (questions || []).forEach((q) => {
        const selected = answers[q.id];
        if (selected && String(selected).trim() !== "") {
          skill_based_question[q.question] = selected;
        }
      });

      const psychological_question: Record<string, Record<string, number>> =
        {};
      (psychoQuestions || []).forEach((q) => {
        const ranked = rankedPsychoAnswers[q.id];
        if (Array.isArray(ranked) && ranked.length > 0) {
          const mapForQuestion: Record<string, number> = {};
          ranked.forEach((option, idx) => {
            mapForQuestion[option] = idx + 1;
          });
          if (Object.keys(mapForQuestion).length > 0) {
            psychological_question[q.question] = mapForQuestion;
          }
        }
      });

      const pdfocrValue: string | null = null;

      const numericId = Number(id);

      const payload: Record<string, any> = {
        id: !Number.isNaN(numericId) ? numericId : id,
        username: formData.githubUsername,
        githubRequired: true,
      };

      if (pdfocrValue && String(pdfocrValue).trim() !== "") {
        payload.pdfocr = pdfocrValue;
      }

      if (Object.keys(skill_based_question).length > 0) {
        payload.skill_based_question = skill_based_question;
      }

      if (Object.keys(psychological_question).length > 0) {
        payload.psychological_question = psychological_question;
      }

      console.log("Evaluation payload being sent:", payload);

      await updateEmployee(id,{
         
            CurrentSalary: String(formData.currentSalary).trim(),
            ExpectedSalary: String(formData.expectedSalary).trim(),
            UserName: formData.githubUsername,
          
      });
      const evaluationResult = await getCareerScore(payload);
       setShowSuccessModal(true);

     
    } catch (error) {
      console.error("Error submitting/evaluating application:", error);
      // show error modal instead of alert
      setErrorModal({
        open: true,
        title: "Submission Error",
        description:
          "There was an error submitting your application. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const finalIsSubmitting = submitting;
  const finalIsLocked = isLocked;

  return (
    <div className="min-h-screen bg-accent-50 py-6 px-3 sm:py-10 sm:px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8 mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold mb-2 text-center">
            Job Application
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mb-6 text-center">
            Please fill all the details and answer the questions honestly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Top inputs: responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Current Salary */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="currentSalary"
                  className="text-sm font-medium text-gray-700"
                >
                  Current Salary (USD)
                </label>
                <input
                  id="currentSalary"
                  name="currentSalary"
                  type="number"
                  value={formData.currentSalary}
                  onChange={handleInputChange}
                  placeholder="e.g. 50000"
                  required
                  disabled={finalIsLocked}
                  className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.currentSalary ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.currentSalary && (
                  <p className="text-xs text-red-500">
                    {errors.currentSalary}
                  </p>
                )}
              </div>

              {/* Expected Salary */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="expectedSalary"
                  className="text-sm font-medium text-gray-700"
                >
                  Expected Salary (USD)
                </label>
                <input
                  id="expectedSalary"
                  name="expectedSalary"
                  type="number"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  placeholder="e.g. 70000"
                  required
                  disabled={finalIsLocked}
                  className={`w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.expectedSalary ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.expectedSalary && (
                  <p className="text-xs text-red-500">
                    {errors.expectedSalary}
                  </p>
                )}
              </div>

              {/* GitHub Username */}
              <div className="flex flex-col space-y-2 sm:col-span-2 lg:col-span-1">
                <label
                  htmlFor="githubUsername"
                  className="text-sm font-medium text-gray-700"
                >
                  GitHub Username
                </label>
                <input
                  id="githubUsername"
                  name="githubUsername"
                  type="text"
                  value={formData.githubUsername}
                  onChange={handleInputChange}
                  placeholder="your-github-username"
                  required
                  disabled={finalIsLocked}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />
              </div>
            </div>

            {questionsError && (
              <div className="p-3 sm:p-4 bg-red-50 text-red-700 rounded-md text-sm">
                Error loading questions: {questionsError}
              </div>
            )}

            {/* Preference Ranking */}
            <div className="overflow-hidden">
              <div className="px-2 sm:px-4 md:px-8 py-4 sm:py-6">
                <div className="flex items-center gap-3 text-navy-950">
                  <LucideArrowUpDown className="w-5 h-5 sm:w-6 sm:h-6" />
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Preference Ranking
                  </h2>
                </div>
                <p className="text-navy-900 mt-2 text-xs sm:text-sm">
                  Drag and drop options to rank them by your preference (most
                  preferred at top)
                </p>
              </div>

              <div className="px-2 sm:px-4 md:px-8 pb-6 sm:pb-8">
                <div className="space-y-8 sm:space-y-10">
                  {psychoQuestions.map((question, idx) => (
                    <div key={question.id} className="group">
                      <div className="flex items-start gap-3 mb-4 sm:mb-6">
                        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 text-navy-950 flex items-center justify-center font-semibold text-base sm:text-lg">
                          {idx + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
                          {question.question}
                        </h3>
                      </div>

                      <div className="mt-2 sm:mt-0 sm:ml-11 max-w-2xl">
                        <ReactSortable
                          list={
                            rankedPsychoAnswers[question.id]?.map(
                              (text: string, id: number) => ({
                                id,
                                text,
                              })
                            ) || []
                          }
                          setList={(
                            newList: { id: number; text: string }[]
                          ) =>
                            updatePsychoRanking(
                              question.id,
                              newList.map((item) => item.text)
                            )
                          }
                          animation={200}
                          className="space-y-3"
                          disabled={finalIsLocked}
                        >
                          {(rankedPsychoAnswers[question.id] || []).map(
                            (option: string, optionIdx: number) => (
                              <div
                                key={optionIdx}
                                className="group/item flex items-center gap-4 p-3 sm:p-4 bg-white border-2 border-gray-200 rounded-xl cursor-move hover:border-blue-300 hover:shadow-md transition-all duration-200 hover:bg-blue-50"
                              >
                                <LucideGripVertical className="w-5 h-5 text-gray-400 group-hover/item:text-navy-950 transition-colors" />
                                <div className="flex-1 flex items-center justify-between">
                                  <span className="text-gray-700 text-sm sm:text-base font-medium">
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
              </div>
            </div>

            {/* Screening Questions */}
            {questions && questions.length > 0 && (
              <div className="mt-6 sm:mt-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                  Screening Questions
                </h2>
                <div className="w-full max-w-4xl px-0 sm:px-2 md:px-4 space-y-6 sm:space-y-8">
                  {questions.map((q, idx) => (
                    <div key={q.id || idx} className="group">
                      <div className="flex items-start gap-3 mb-3 sm:mb-4">
                        <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 text-navy-950 flex items-center justify-center font-semibold text-base sm:text-lg">
                          {idx + 1}
                        </span>
                        <h3 className="text-base sm:text-lg font-medium text-gray-900 leading-relaxed">
                          {q.question}
                        </h3>
                      </div>

                      <div className="sm:ml-11 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {(q.options || []).length === 0 ? (
                          <div className="text-sm text-gray-600">
                            No options provided.
                          </div>
                        ) : (
                          q?.options?.map((option: string, optionIdx: number) => {
                            const name = `question-${q.id}`;
                            const checked = answers[q.id] === option;
                            return (
                              <label
                                key={optionIdx}
                                className={`group/option relative flex items-center justify-between bg-white gap-3 sm:gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 
                                  ${
                                    checked
                                      ? "border-navy-700 bg-navy-50 shadow-md"
                                      : "border-gray-200 hover:border-navy-700 hover:bg-gray-50"
                                  }
                                `}
                              >
                                <div className="flex items-center gap-3">
                                  <span
                                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs sm:text-sm font-semibold transition-colors 
                                      ${
                                        checked
                                          ? "bg-gray-200 text-gray-700"
                                          : "bg-gray-200 text-gray-700"
                                      }
                                    `}
                                  >
                                    {String.fromCharCode(65 + optionIdx)}
                                  </span>
                                  <p className="text-gray-800 text-sm sm:text-base font-medium">
                                    {option}
                                  </p>
                                </div>

                                <input
                                  type="radio"
                                  name={name}
                                  value={option}
                                  onChange={() =>
                                    handleAnswerChange(q.id, option)
                                  }
                                  checked={checked}
                                  disabled={finalIsLocked}
                                  className="appearance-none w-4 h-4 sm:w-5 sm:h-5 border-2 border-gray-300 rounded-full checked:border-[5px] checked:border-navy-700 transition-all duration-200 disabled:cursor-not-allowed"
                                  required
                                />
                              </label>
                            );
                          })
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={finalIsSubmitting || finalIsLocked}
                className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white text-sm font-semibold transition-colors ${
                  finalIsSubmitting || finalIsLocked
                    ? "bg-orange-300 cursor-not-allowed"
                    : "bg-orange-500 hover:bg-orange-600"
                }`}
              >
                {test_status || hasSubmitted
                  ? "Already Submitted"
                  : finalIsSubmitting
                  ? "Submitting..."
                  : "Submit Application"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success popup */}
      <SimpleModal
        open={showSuccessModal}
        title="Thank you!"
        description="Your form has been submitted successfully."
        primaryLabel="Close"
        onClose={handleSuccessClose}
        onPrimaryAction={handleSuccessClose}
      />

      {/* Already submitted popup */}
      <SimpleModal
        open={showAlreadySubmittedModal}
        title="Already Submitted"
        description="You have already submitted this form. Thank you!"
        primaryLabel="Close"
        onClose={handleCloseAlreadySubmitted}
        onPrimaryAction={handleCloseAlreadySubmitted}
      />

      {/* NEW: Error popup (validation + API errors) */}
      <SimpleModal
        open={errorModal.open}
        title={errorModal.title || "Something went wrong"}
        description={
          errorModal.description ||
          "There was a problem submitting your application. Please try again."
        }
        primaryLabel="OK"
        onClose={() =>
          setErrorModal((prev) => ({
            ...prev,
            open: false,
          }))
        }
        onPrimaryAction={() =>
          setErrorModal((prev) => ({
            ...prev,
            open: false,
          }))
        }
      />
    </div>
  );
}
