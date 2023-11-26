import { createContext, useContext } from "react";
import { TExamResultCTX, TResult } from "./types";

export const ExamResultCTX = createContext<TExamResultCTX>({
  examResult: {
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalQuestions: 0,
  },
  updateResultExam(examResult: TResult) {},
});

export const useExamResult = () => useContext(ExamResultCTX);
