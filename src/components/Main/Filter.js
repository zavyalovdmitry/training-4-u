import React, { useState, useEffect } from 'react';
import { levelsData } from '../../mockAPI';

const Filter = (props) => {
  const { doSearch, doLevelFilter } = props;
  const [levels, setLevels] = useState('');

  useEffect(() => {
    levelsData().then((data) => {
      setLevels(data);
    });
  }, [])

  const inputHandler = (e) => {
    doSearch(e.target.value);
  }

  const selectHandler = (e) => {
    doLevelFilter(e.target.value);
  }

  return (
    <div className="filterWrap">
      <select defaultValue="Все уровни сложности" onChange={selectHandler}>
        <option value="all">Все уровни сложности</option>
        {levels.length ? levels.map((item, index) => (
          <option key={index} value={item.level}>{item.level}</option>
        )) : ''}
      </select>
      <input placeholder="Введите текст для поиска" onChange={inputHandler} />
    </div>
  )
}

export default Filter;
