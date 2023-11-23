import { OptionsProps, Option } from "../../types";

const AnswerOption: React.FC<OptionsProps> = ({
  answers,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <div>
      {answers.map((option: Option, idx) => (
        <div className="flex flex-col gap-5">
          <button
            key={idx}
            onClick={() => onSelect(option.text)}
            className={`p-4 my-2 rounded w-[200px] ${
              selectedAnswer === option.text
                ? "bg-gray-800 text-white"
                : "bg-gray-200 hover:bg-gray-800 hover:text-gray-200"
            }`}
          >
            {option.text}
          </button>
        </div>
      ))}
    </div>
  );
};

export default AnswerOption;
