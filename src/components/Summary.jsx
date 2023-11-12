import summary from "../assets/quiz-complete.png";
import questions from "../questions.js";
import QUESTIONS from "../questions.js";
export default function Summary({ answers }) {
  let correctAnswer = answers.filter((answer, index) => {
    return answer === QUESTIONS[index].answers[0];
  });
  let correctPercent =
    100 - Math.round((correctAnswer.length / answers.length) * 100);
  let wrongAnswers = answers.filter((answer, index) => {
    return answer !== QUESTIONS[index].answers[0];
  });
  let wrongAnswerPercent =
    100 - Math.round((wrongAnswers.length / answers.length) * 100);

  let skippedAnswers = answers.filter((answer) => {
    return answer === null;
  });
  let skippedAnswersPercent = Math.round(
    (skippedAnswers.length / answers.length) * 100
  );
  return (
    <div id="summary" key={Math.random}>
      <img src={summary}></img>
      <h2>Quiz Comleted</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">correctly Answerd</span>
        </p>
        <p>
          <span className="number">{wrongAnswerPercent}%</span>
          <span className="text">incorrectly answerd</span>
        </p>
      </div>
      <ol>
        {answers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{questions[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
