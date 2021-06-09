import React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';
// import Themes from './Themes';
import { subjectsAndTests } from '../../mockAPI';
import Info from './Info';
import TestField from './TestField';

const Test = (props) => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [testIsRunnig, toggleTestIsRunning] = useState(false);
  const [allAnswered, toggleAllAnswered] = useState(false);

  const [test, setTest] = useState(null);
  const subject = props.subject;
  const title = props.title;
  
  useEffect(() => {
    subjectsAndTests('Tests').then((data) => {
      const dataSubject = data.filter((item) => 
        item.title == subject
      )
      const tests = dataSubject[0].tests.filter((item) => 
        item.title == title
      )
      const test = tests[0];
      setTest(test);
    });
    setUserAnswers([]);
    toggleTestIsRunning(false);
    toggleAllAnswered(false);
  }, [subject, title])

  const startTestHandle = () => {
    toggleTestIsRunning(!testIsRunnig);
  }

  const userAnswerHandle = (userCurrentAnswers) => {
    setUserAnswers(userCurrentAnswers);
    if (test.questions.length == Object.keys(userAnswers).length) {
      toggleAllAnswered(true);
    }
    console.log(userAnswers)
  }

  return (
    <div className="testWrap">
      {test ? (
        <>
          <span className="testQuestions-title">{test.title}</span>
          {!testIsRunnig ? (  
            <>
              <Info
                description={test.description}
                length={test.questions.length}
                time={test.time}
                level={test.level}
              />
              <div className="testQuestions-btn-wrap">
                <button className="testQuestions-btn" onClick={startTestHandle}>Пройти тест</button>
              </div>
            </>
          ) : <TestField
            test={test}
            userAnswerHandle={userAnswerHandle}
            userAnswers={userAnswers}
            allAnswered={allAnswered}
          />
          }
        </>
      ) : ''
      }
    </div>
  )
}

export default Test;
