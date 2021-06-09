import React from 'react';

const TestResults = ({ userAnswers, questions }) => {

  const resultsCalc = () => {
    let res = 0;
    for (let i = 0; i < userAnswers.length; i++) {
      if (questions[i].answers[userAnswers[i]].type == 'true') {
        res++;
      }
    }
    return res;
  }

  const results = resultsCalc();

  return (
    <>
      <p className="testField-results-title">Результаты теста</p>
      {questions.map((item, index) => (
        <div
          key={index}
          className={`testField-results-result ${item.answers[userAnswers[index]].type == 'true' ? '' : 'wrong'}`}>
          <div>
            <span>{index + 1}{' вопрос : '}</span>
            <span>{item.question}</span>
          </div>
          <div>
            <span>{'Ваш ответ : '}</span>
            <span>{item.answers[userAnswers[index]].answer}</span>
            {item.answers[userAnswers[index]].type == 'true' ? (
              <p>Вы ответили верно</p>
            ) : (
              <>
                <p>{'Вы ответили неправильно, верный ответ: '}
                {item.answers.filter((item) => (
                  item.type == 'true'
                ))[0].answer}
                </p>
              </>
            )}
          </div>
        </div>
      ))}
      <p className="testField-results-title">{'Итог'}</p>
      <p>{`Верных ответов: ${results} из ${questions.length}`}</p>
      <p>{`Ваш результат: ${Math.floor(100 * results / questions.length)}%`}</p>
    </>
  )
}

export default TestResults;
