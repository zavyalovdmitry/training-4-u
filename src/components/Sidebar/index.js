import React, { useState, useEffect } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import "./style.scss";
import { FaGem } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
// import {useSelector} from "react-redux";
// import {selectHeaderProject} from "../Header/selectors";
// import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { subjectsAndTests } from '../../mockAPI';

export const Sidebar = () => {
  // const headerProdject = useSelector(selectHeaderProject);
  const [subjects, setSubjects] = useState(null);
  const [tests, setTests] = useState(null);

  useEffect(() => {
    subjectsAndTests('subjects').then((data) => {
      setSubjects(data);
    });
    subjectsAndTests('Tests').then((data) => {
      setTests(data);
    });
  }, [])

  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>
          Главная
          <Link to="/" />
        </MenuItem>
        {subjects && tests ? (
          subjects.map((item, index) => (
            <SubMenu title={item.title} icon={<FaHeart />} key={index}>
              {tests.filter((itemTests) => (
                itemTests.title == item.title
              ))[0].tests.map((itemTestsTest, itemTestsTestIndex) => (
                <MenuItem key={`sub-${itemTestsTestIndex}`}>
                  {itemTestsTest.title}
                  <Link to={`/test/${item.title}/${itemTestsTest.title}`} />
                </MenuItem>
              ))}
            </SubMenu>
          ))
        ) : ('')
        }
      </Menu>
    </ProSidebar>
  )
}
