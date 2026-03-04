import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { dispatch, answer, index, numQuestions } = useQuiz();

  const isLastQuestion = index === numQuestions - 1;

  if (answer === null) return null;

  return (
    <button
      className="btn btn-ui"
      onClick={() =>
        dispatch({ type: isLastQuestion ? "finish" : "nextQuestion" })
      }
    >
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
