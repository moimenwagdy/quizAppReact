import { forwardRef, useImperativeHandle, useRef } from "react";

let StartQuiz = forwardRef(({ startQuiz }, ref) => {
  let modalRef = useRef();
  useImperativeHandle(ref, () => ({
    open: () => {
      modalRef.current?.showModal();
    },
  }));
  return (
    <dialog ref={modalRef}>
      <div className="Start-quiz">
        <h3>Challenge Introduction</h3>
        <p>The challenge is designed to help learners use their informations</p>
      </div>

      <button className="startButton" onClick={startQuiz} >START</button>
    </dialog>
  );
});

export default StartQuiz;
