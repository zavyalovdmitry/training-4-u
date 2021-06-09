import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import { selectHeaderProject } from './selectors';
import { Link } from 'react-router-dom';

import { selectIsLoading } from "../Auth/selectors";


export const Header = () => {

   //Название проекта из redux
   const headerProdject = useSelector(selectHeaderProject);

   //наличие регистрации
   const blockСomposition = useSelector(selectIsLoading);

   const [clientMenu, setClientMenu] = useState(false);

   const showMenu = () => {
      setClientMenu(true);
   }

   const hideMenu = () => {
      setClientMenu(false);
   }


   return (
      <div className="header">
         {clientMenu && <div className="client-menu">
            { !blockСomposition && <Link to="/auth">Войти/Зарегистрироваться</Link>}
            { blockСomposition && <span className="paragraph-menu">Личный кабинет</span>}
            { blockСomposition && <span className="paragraph-menu">Статистика</span>}
            { blockСomposition && <span className="paragraph-menu">Выйти</span>}

            <svg width="40" height="40" fill="currentColor" className="bi-backspace" viewBox="0 0 16 16" onClick={hideMenu}>
            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
         </svg></div>}
         <div>
            <svg width="40" height="40" className="bi-list" viewBox="0 0 16 16" onClick={showMenu}>
               <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <span className="nameProdject">{headerProdject.nameProject}</span>
         </div>
         <Link to="/auth">
            <svg width="40" height="40" className="bi-box-arrow-in-right" viewBox="0 0 16 16" onClick={() => console.log("svg")}>
               <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
               <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
            </svg>
         </Link>
      </div>
   )
}
