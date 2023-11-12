import Timer from "./Timer";
import Answers from "./Answers";
import QUESTIONS from "../questions/";
import { useState } from "react";
export default function QuizContainer({ onSelect, activeQuestion, onTimeEnd }) {
  let [answerstatus, setAnswerStatus] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  let timer = 5000;
  if (answerstatus.selectedAnswer) {
    timer = 1000;
  }
  if (answerstatus.isCorrect !== null) {
    timer = 2000;
  }

  function answerHandler(answer) {
    setAnswerStatus({ selectedAnswer: answer, isCorrect: null });
    setTimeout(() => {
      setAnswerStatus({
        selectedAnswer: answer,
        isCorrect: answer === QUESTIONS[activeQuestion].answers[0],
      });

      setTimeout(() => {
        onSelect(answer);
      }, 2000);
    }, 1000);
  }
  let answerState = "";
  if (answerstatus.selectedAnswer && answerstatus.isCorrect !== null) {
    answerState = answerstatus.isCorrect ? "correct" : "wrong";
  } else if (answerstatus.selectedAnswer) {
    answerState = "answered";
  }

  return (
    <div id="quiz">
      <div id="question">
        <Timer
          onTimeEnd={answerstatus.selectedAnswer === "" ? onTimeEnd : null}
          targetTime={timer}
          key={timer}
          mode={answerState}
        />
        <h2>{QUESTIONS[activeQuestion].text}</h2>
        <Answers
          onSelect={answerHandler}
          selectdAnswer={answerstatus.selectedAnswer}
          answerState={answerState}
          activeQuestion={activeQuestion}
        />
      </div>
    </div>
  );
}
