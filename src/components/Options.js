import { useQuiz } from "../context/QuizContext";
import { cn } from "../utils/helper";

function Options({ question }) {
  const { answer, dispatch } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={cn(
            "btn btn-option",
            answer === index ? "answer" : "",
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : "",
          )}
          key={option}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
