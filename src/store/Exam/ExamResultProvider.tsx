"use client";
import { ReactNode, useEffect, useState } from "react";
import { TResult } from "./types";
import { ExamResultCTX } from "./examResult";

interface IProps {
  children: ReactNode;
}

export const ExamResultProvider = ({ children }: IProps) => {
  const [examResult, setExamResult] = useState<TResult>({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    totalQuestions: 0,
  });
  const updateResultExam = (examResult: TResult) => {
    setExamResult({ ...examResult });
  };

  useEffect(() => {
    console.log(examResult, "ON CONTEXT");
  }, [examResult]);

  return (
    <ExamResultCTX.Provider value={{ examResult, updateResultExam }}>
      {children}
    </ExamResultCTX.Provider>
  );
};

// import { ExamContextProps, Result } from "./types";

// const ExamContext = createContext<ExamContextProps | null>(null);

// export const ExamResultProvider: React.FC<{ children: ReactNode }> = ({
//   children,
// }) => {
//   return (
//     <ExamContext.Provider value={contextExamValue}>
//       {children}
//     </ExamContext.Provider>
//   );
// };

// export const useExamContext = () => {
//   const context = useContext(ExamContext);
//   if (!context) {
//     throw new Error("useExamContect must be used within a MyProvider");
//   }
//   return context;
// };
