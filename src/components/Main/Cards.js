import React, { useState, useEffect } from 'react';
import './styles.scss';
import Skeleton from 'react-skeleton';
import { subjectsAndTests } from '../../mockAPI';

const Cards = ({ subject, handleClickSubject }) => {
const [subjects, setSubjects] = useState([]);

useEffect(() => {
  subjectsAndTests('subjects').then((data) => {
    setSubjects(data);
  });
}, [])

  return (
    <div className="cardsWrap">
      {subjects.length ? 
        subjects.map((item, index) => (
          <div 
            className={`cards ${item.title == subject ? 'cards-pressed' : ''}`}
            key={index}
            onClick={() => handleClickSubject(item.title)}
          >
            <img src={`main-cards-${item.link}.svg`} />
            <p>{item.title}</p>
          </div>
        ))
      : <Skeleton className="cards" count={6} />
      }
    </div>
  )
}

export default Cards;
