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
    wrongAnswers: 0,
  });

  const { answers, correctAnswer } = questions[activeQuestion];

  const onSelectedAnswer = (selectedAnswer: string) => {
    const isCorrect = selectedAnswer === correctAnswer;
    setResult({
      correctAnswers: isCorrect
        ? result.correctAnswers + 1
        : result.correctAnswers,
      score: isCorrect ? result.score + 1 : result.score,
      wrongAnswers: !isCorrect ? result.wrongAnswers + 1 : result.wrongAnswers,
    });
    setSelectedAnswer("");
  };

  const handleNext = () => {
    if (activeQuestion < questions.length - 1) {
      setActiveQuestion(activeQuestion + 1);
      onSelectedAnswer(selectedAnswer);
    } else {
      onSelectedAnswer(selectedAnswer);
      router.push("/dashboard");
      console.log("Finish");
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
        <div>
          <Question question={questions[activeQuestion].question} />
          <AnswerOption
            answers={answers}
            onClick={setSelectedAnswer}
            selectedAnswer={selectedAnswer}
          />
        </div>
        <button
          disabled={!selectedAnswer}
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded mt-4 disabled:bg-gray-200 disabled:text-gray-300"
        >
          {activeQuestion < questions.length - 1 ? "Next" : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default ExamContainer;
