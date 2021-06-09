import React, { useState, useEffect } from 'react';
import Question from './Question';
import Answers from './Answers';
import TestResults from './TestResults';

const TestField = ({ test, userAnswerHandle, userAnswers, allAnswered }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [testIsOver, toggleTestIsOver] = useState(false);

  const pickQuestion = (e) => {
    setCurrentQuestion(e.target.getAttribute('data-value'));
  }

  const testOverHandle = () => {
    toggleTestIsOver(true);
  }

  // useEffect(() => {
  //   toggleAllAnswered(userAnswers.length = test.questions.length);
  //   console.log(userAnswers)
  // }, [userAnswers])

  return (
    <>
      {!testIsOver ? (
        <>
          <div className="testField-questionsNav-wrap">
            {test.questions.map((_, index) => (
              <span
                className={`testField-questionsNav ${currentQuestion == index ? 'active' : ''}`}
                onClick={pickQuestion}
                data-value={index}
                key={index}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <Question question={test.questions[currentQuestion].question} />
          <Answers
            answers={test.questions[currentQuestion].answers}
            userAnswerHandle={userAnswerHandle}
            userAnswers={userAnswers}
            currentQuestion={currentQuestion}
          />
          <div className="testField-btnsWrap">
            <button
              className="testQuestions-btn"
              data-value={currentQuestion == test.questions.length - 1 ?
                0 :
                +currentQuestion + 1
              }
              onClick={pickQuestion}
            >
              Дальше
            </button>
            <button
              className="testQuestions-btn"
              onClick={testOverHandle}
              disabled={!allAnswered}
            >
              Закончить
            </button>
          </div>
        </>
      ) : (
        <TestResults userAnswers={userAnswers} questions={test.questions} />
      )}
    </>
  )
}

export default TestField;
