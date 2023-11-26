export type TResult = {
  score: number;
  correctAnswers: number;
  wrongAnswers: number;
  totalQuestions: number;
};

export type TExamResultCTX = {
  examResult: TResult;
  updateResultExam: (value: TResult) => void;
};
