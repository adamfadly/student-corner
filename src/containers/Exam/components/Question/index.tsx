import { Question } from "../../types";

const Question: React.FC<Question> = ({ question }) => {
  return (
    <div>
      <p className="text-lg font-semibold mb-4">{question}</p>
    </div>
  );
};

export default Question;
