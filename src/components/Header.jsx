import quizLogo from "../assets/quiz-logo.png";
export default function Header() {
  return (
    <header>
      <img src={quizLogo} alt="LogoImg"></img>
      <h1>ReactQuize</h1>
    </header>
  );
}
