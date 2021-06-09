import React from "react";
import { useSelector } from "react-redux";
import "./Footer.scss";
import { selectHeaderProject } from "../Header/selectors";


export const Footer = () => {
    //Назввание из redux
    const headerProdject = useSelector(selectHeaderProject);
    let today = new Date();
    let year = today.getFullYear();
    return <footer className="footer">
                <section className="footer__social">
                    <a href="#" title="Группа VK для учиков" className="footer__social__vk1"></a>
                    <a href="#" title="Группа VK для родителей" className="footer__social__vk2"></a>
                    <a href="#" title="Мы в Facebook" className="footer__social__fb"></a>
                    <a href="#" title="Мы в Одноклассниках" className="footer__social__ok"></a>
                    <a href="#" title="Наш канала Youtube" className="footer__social__yt"></a>
                    <a href="#" title="Наша страничка на Instagram" className="footer__social__insta"></a>
                </section>
                <section className="footer__tel">

                    <p>&copy;{headerProdject.nameProject} {year}</p>

                    {/* <a  href="#" title="Позвонить">
                        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 2c4.418 0 8 3.582 8 8h2c0-5.523-4.477-10-10-10v2zm0 4c2.209 0 4 1.791 4 4h2c0-3.314-2.686-6-6-6v2zm2 7.75c.5-.625 1.25-.625 1.875 0 .25.25.486.5.722.75.472.5.944 1 1.528 1.5.625.625.625 1.375 0 2l-1.25 1.25c-.625.625-1.375.75-2.125.75-1.25-.125-2.375-.5-3.375-1-2.375-1.125-4.375-2.625-6-4.625-1.125-1.5-2.25-3.125-2.875-4.875-.375-.875-.5-1.75-.5-2.75 0-.5.25-1 .75-1.5.375-.375.875-.875 1.375-1.25.5-.625 1.25-.625 1.875 0 .375.25.75.625 1.125 1l.269.285c.25.273.484.529.856.715.625.625.625 1.375 0 2l-.481.51c-.291.319-.566.619-.894.865-.125.125-.125.25-.125.375.375.625.75 1.25 1.25 1.875 1 1.25 2 2.25 3.375 3.125.191.191.455.309.68.41l.195.09c.125 0 .25 0 .375-.125l1.375-1.375z"></path></svg>
                        <span className="footer__tel__tel">8 800 555-55-55</span>
                    </a> */}

                </section>

                <section className="footer__logo">
                    <a href="#">
                        <p>GB</p>
                        <p>Участник</p>
                    </a>
                </section>
            </footer>

}