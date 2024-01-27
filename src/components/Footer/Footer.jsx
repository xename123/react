import React, { useContext } from "react";

import s from "./Footer.module.scss";

import logo from "../../img/logo.png";
import twitter from "../../img/icons/twitter.svg";
import github from "../../img/icons/git.svg";
import facebook from "../../img/icons/facebook.svg";
import instagram from "../../img/icons/insta.svg";
import linked from "../../img/icons/linked.svg";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/context";

const Footer = () => {
    const {isAuth} = useContext(AuthContext)
    const socials = [
        { id: 1, link: "#", img: twitter },
        { id: 2, link: "#", img: github },
        { id: 3, link: "#", img: facebook },
        { id: 4, link: "#", img: instagram },
        { id: 5, link: "#", img: linked },
    ];

    return (
        <>
            {isAuth && 
                <footer className={s.footer}>
                    <div className="_container">
                        <div className={s.footer__top}>
                            <div className={s.footer__about}>
                                <img src={logo} alt="logo" />
                                <p className={s.footer__text}>
                                    Lorem ipsum is placeholder text commonly
                                    used in the graphic, print, and publishing
                                    industries for previewing layouts and visual
                                    mockups.
                                </p>
                            </div>
                            <div className={s.footer__columns}>
                                <ul className={s.footer__column}>
                                    <li>Products</li>
                                    <li>
                                        <a href="#">Web Studio</a>
                                    </li>
                                    <li>
                                        <a href="#">DynamicBox Flex</a>
                                    </li>
                                    <li>
                                        <a href="#">Programming Forms</a>
                                    </li>
                                </ul>
                                <ul className={s.footer__column}>
                                    <li>Resources</li>
                                    <li>
                                        <a href="#">Nostrud exercitation</a>
                                    </li>
                                    <li>
                                        <a href="#">Visual mockups</a>
                                    </li>
                                    <li>
                                        <a href="#">Nostrud exercitation</a>
                                    </li>
                                    <li>
                                        <a href="#">Visual mockups</a>
                                    </li>
                                    <li>
                                        <a href="#">Nostrud exercitation</a>
                                    </li>
                                </ul>
                                <ul className={s.footer__column}>
                                    <li>Company</li>
                                    <li>
                                        <a href="#">Consectetur adipiscing</a>
                                    </li>
                                    <li>
                                        <a href="#">Labore et dolore</a>
                                    </li>
                                    <li>
                                        <a href="#">Consectetur adipiscing</a>
                                    </li>
                                    <li>
                                        <a href="#">Labore et dolore</a>
                                    </li>
                                    <li>
                                        <a href="#">Consectetur adipiscing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.footer__content}>
                            <p className={s.footer__copy}>
                                Made by <span>Cruip</span>. All right reserved
                            </p>
                            <ul className={s.footer__links}>
                                {socials.map((s) => (
                                    <li key={s.id}>
                                        <a href={s.link}>
                                            <img src={s.img} alt="twitter" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </footer>}
        </>
    );
};

export default Footer;
