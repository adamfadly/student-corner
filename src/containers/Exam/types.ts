export type T_Result = {
  wrongAnswers: number;
  score: number;
  correctAnswers: number;
};

export type Question = {
  question: string;
};

export type Option = {
  id: number;
  text: string;
};

export type OptionsProps = {
  answers: Option[];
  selectedAnswer: string | boolean;
  onClick: (answer: string) => void;
};
