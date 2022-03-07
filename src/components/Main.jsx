import { useState } from "react";
import SurveyForm from './SurveyForm'
import AnswerList from './AnswersList'

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answers, setAnswers] = useState([])

  const addAnswer = (answer) => {
    setAnswers(prevAnswers => {
      return [...prevAnswers, answer]
    })
  }

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswerList answersList={answers} />
      </section>
      <section className="main__form"><SurveyForm addAnswer={addAnswer}/></section>
    </main>
  );
}

export default Main;
