"use client";
import { useState } from "react";
import { T_Result } from "./types";
import { qNa } from "./constant";

import Question from "./components/Question";
import AnswerOption from "./components/AnswerOption";
import { useRouter } from "next/navigation";

const ExamContainer: React.FC = () => {
  const { questions } = qNa;
  const router = useRouter();

  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<null>(null);
  const [showResult, setShowresult] = useState<boolean>(false);
  const [result, setResult] = useState<T_Result>({
    score: 0,
    correctAnswers: 0,
    wrongAnswer: 0,
  });

  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      setSelectedAnswer("");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="p-4">
      <h1>Exam</h1>

      <h5>
        Question: {activeQuestion + 1}
        <span>/{questions.length}</span>
      </h5>

      <div>
        {!showResult ? (
          <div>
            <Question question={questions[activeQuestion].question} />
            <AnswerOption
              answers={answers}
              onSelect={setSelectedAnswer}
              selectedAnswer={selectedAnswer}
            />
          </div>
        ) : (
          <></>
        )}
        <div>
          {selectedAnswer !== "" ? (
            <button
              onClick={handleNext}
              className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
            >
              {activeQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          ) : (
            <button
              disabled
              className="bg-gray-200 text-gray-300 px-4 py-2 rounded mt-4"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamContainer;
