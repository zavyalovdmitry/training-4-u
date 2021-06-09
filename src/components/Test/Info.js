import React from 'react';

const Info = ({ description, length, time, level }) => {

  return (
    <>
      <p className="testQuestions-description">{description}</p>
      {/* <Themes /> */}
      <p className="testQuestions-questionsNum">Количество вопросов в тесте: {length}</p>
      <p className="testQuestions-time">Рекомендуемое время на выполнение: {time}</p>
      <p className="testQuestions-level">Уровень сложности: {level}</p>
    </>
  )
}

export default Info;
