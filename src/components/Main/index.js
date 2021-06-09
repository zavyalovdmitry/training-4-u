import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

import { selectIsLoading } from "../Auth/selectors";
import Cards from './Cards';
import Filter from './Filter';
import Tests from './Tests';

export const Main = () => {
  const blockСomposition = useSelector(selectIsLoading);
  const [subject, setSubject] = useState('Математика');
  const [searchValue, changeSearchValue] = useState('');
  const [levelFilterValue, changelevelFilterValue] = useState('all');

  const doSearch = (searchValue) => {
    changeSearchValue(searchValue);
  }
  
  const doLevelFilter = (filterValue) => {
    changelevelFilterValue(filterValue);
  }

  const handleClickSubject = (subject) => {
    setSubject(subject);
  }

  return (
    <div className="main">
      <Cards subject={subject} handleClickSubject={handleClickSubject} />
      <Filter doSearch={doSearch} doLevelFilter={doLevelFilter} />
      <Tests subject={subject} searchValue={searchValue} levelFilterValue={levelFilterValue} />
    </div>
  )
}
