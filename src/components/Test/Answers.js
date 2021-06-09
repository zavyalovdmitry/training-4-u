import React, { useState, useEffect } from 'react';

const Answers = ({ answers, userAnswerHandle, userAnswers, currentQuestion }) => {
  const [userCurrentAnswers, setUserCurrentAnswers] = useState(userAnswers);
  const [userCurrentAnswer, setUserCurrentAnswer] = useState(null);

  const answerClickHandle = (index, e) => {
    let arr = userCurrentAnswers;
    arr[currentQuestion] = index;
    // console.log(arr);
    userAnswerHandle(arr);
    setUserCurrentAnswers(arr);
    setUserCurrentAnswer(index);
  }

  useEffect(() => {
    setUserCurrentAnswer(userAnswers[currentQuestion]);
  }, [currentQuestion]);

  return (
    <div>
      {answers.map((item, index) => (
        <div
          key={index}
          onClick={(e) => answerClickHandle(index, e)}
          className={`testField-answer ${userCurrentAnswer == index ? 'active' : ''}`}
        >
          <span>{index + 1}{' : '}</span>
          <span>{item.answer}</span>
        </div>
      ))}
    </div>
  )
}

export default Answers;
