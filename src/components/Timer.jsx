import { useEffect, useState } from "react";

export default function Timer({ targetTime, onTimeEnd, mode }) {
  let [timeRemaining, setTimeReamin] = useState(targetTime);
  useEffect(() => {
    let ff = setTimeout(() => {
      onTimeEnd();
    }, targetTime);

    return () => {
      clearTimeout(ff);
    };
  }, [targetTime, onTimeEnd]);

  useEffect(() => {
    let rr = setInterval(() => {
      setTimeReamin((prv) => prv - 500);
    }, 500);
    return () => {
      clearInterval(rr);
    };
  }, []);

  return (
    <progress
      id="question-time"
      value={timeRemaining}
      max={targetTime}
      className={mode}></progress>
  );
}
