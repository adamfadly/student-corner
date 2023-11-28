"use client";

import { useExamResult } from "@/store/Exam/examResult";
const ResultPage: React.FC = () => {
  const { examResult } = useExamResult();
  return (
    <div>
      <div className="quiz-container">
        <h3>Results</h3>
        <h3>Overall {(examResult.score / 25) * 100}%</h3>
        <p>
          Total Questions: <span>{examResult.totalQuestions}</span>
        </p>
        <p>
          Total Score: <span>{examResult.score}</span>
        </p>
        <p>
          Correct Answers: <span>{examResult.correctAnswers}</span>
        </p>
        <p>
          Wrong Answers: <span>{examResult.wrongAnswers}</span>
        </p>
      </div>
    </div>
  );
};

export default ResultPage;
