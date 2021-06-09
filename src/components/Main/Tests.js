import React, { useEffect, useState } from 'react';
import './styles.scss';
import { subjectsAndTests } from '../../mockAPI';
import { Link } from 'react-router-dom';

const Tests = (props) => {
  const { subject, searchValue, levelFilterValue } = props;
  const [tests, setTests] = useState([]);

  useEffect(() => {
    subjectsAndTests('Tests').then((data) => {
      const dataSubject = data.filter((item) => 
        item.title == subject
      )
      setTests(dataSubject[0].tests);
    });
  }, [subject])

  return (
    <div className="testsWrap">
      {tests.length ? (
      tests.map((item, index) => item.title.toLowerCase().includes(searchValue.toLowerCase()) &&
          (levelFilterValue === 'all' || item.level === levelFilterValue) ?
          (
            <div className="test" key={index}>
              <span className="title">{item.title}</span>
              <span className="level">{item.level}</span>
              <span className="time">{item.time}</span>
              <div className="test-btn-wrap">
                <Link to={`/test/${subject}/${item.title}`}>
                  <button className="test-btn">Посмотреть тест</button>
                </Link>
              </div>
            </div>
          ) :
          ''
        )
      ) : "Нет тестов по данному предмету"
      }
    </div>
  )
}

export default Tests;
