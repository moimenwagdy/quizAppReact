import { useCallback, useEffect, useRef, useState } from "react";
import QUESTIONS from "../questions";
import Summary from "./Summary";
import QuizContainer from "./quizContainer";
import StartQuiz from "./StartQuiz";

export default function Quiz() {
  let [answers, setAnswers] = useState([]);
  let [isShown, setIsShown] = useState(true);

  let startQuizRef = useRef();

  function startQuiz() {
    setTimeout(() => {
      setIsShown(false);
    }, 1500);
  }

  useEffect(() => {
    if (isShown) {
      startQuizRef.current.open();
    }
  }, []);

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
      {isShown ? (
        <StartQuiz startQuiz={startQuiz} ref={startQuizRef} />
      ) : (
        <QuizContainer
          key={activeQuestion}
          selectedAnswer={answers[answers.length - 1]}
          onSelect={answerHandler}
          activeQuestion={activeQuestion}
          onTimeEnd={nullEntry}
        />
      )}
    </>
  );
}
