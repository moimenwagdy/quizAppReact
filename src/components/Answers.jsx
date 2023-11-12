import QUESTIONS from "../questions";
import { useRef } from "react";

export default function Answers({
  onSelect,
  selectdAnswer,
  answerState,
  activeQuestion,
}) {
  let sortedAswers = useRef();

  if (!sortedAswers.current) {
    sortedAswers.current = [...QUESTIONS[activeQuestion].answers];
    sortedAswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {sortedAswers.current.map((answer, index) => {
        let cssClass = "";
        let selectedAnswer = answer === selectdAnswer;
        if (answerState === "answered" && selectedAnswer) {
          cssClass = "selected";
        } else if (
          (answerState === "correct" || answerState === "wrong") &&
          selectedAnswer
        ) {
          cssClass = answerState;
        }
        return (
          <li className="answer" key={answer}>
            <button
              disabled={selectdAnswer ? true : false}
              className={cssClass}
              onClick={() => onSelect(answer, index)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
