import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import QuizContainer from "./quizContainer";

export default function Quiz() {
  let [answers, setAnswers] = useState([]);

  let activeQuestion = answers.length;

  let quziCompleted = activeQuestion === QUESTIONS.length;

  let answerHandler = useCallback(function answerHandler(answer, index) {
    setAnswers((prv) => [...prv, answer]);
  }, []);

  let nullEntry = useCallback(() => answerHandler(null), [answerHandler]);

  if (quziCompleted) {
    return <Summary answers={answers} />;
  }

  return (
    <>
      <QuizContainer
        key={activeQuestion}
        selectedAnswer={answers[answers.length - 1]}
        onSelect={answerHandler}
        activeQuestion={activeQuestion}
        onTimeEnd={nullEntry}
      />
    </>
  );
}
