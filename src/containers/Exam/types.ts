export type T_Result = {
  score: number;
  correctAnswers: number;
  wrongAnswer: number;
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
  selectedAnswer: string;
  onSelect: (answer: string) => void;
};
