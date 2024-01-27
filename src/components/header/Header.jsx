import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link, Route, useLocation } from "react-router-dom";

import logo from "../../img/logo.png";
import shape from "../../img/decor/shape.svg";
import logout from "../../img/icons/logout.png";
import anonymous  from '../../img/icons/security.png'


import s from "./Header.module.scss";

import Button from "../UI/button/Button";
import { AuthContext } from "../../context/context";
import { useLogout } from "../../hooks/useLogout";
const Header = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const [user, setUser] = useState({});

    const [handleLogout, error] = useLogout();

    useEffect(() => {
        if (isAuth === true) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, [isAuth]);
    const location = useLocation();

    return (
        <header className={s.header}>
            <div className="_container">
                <Link className={s.logo} to="/">
                    <img src={logo} alt="logo" />
                </Link>
                {location.pathname !== "/signin" &&
                    location.pathname !== "/signup" &&
                    !isAuth && (
                        <ul className={s.list}>
                            <li>
                                <Link to="/signin">
                                    <Button
                                        classNames={["transparent", "small"]}
                                    >
                                        Sign in
                                    </Button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/signup">
                                    <Button classNames={["small"]}>
                                        Sign up
                                    </Button>
                                </Link>
                            </li>
                        </ul>
                    )}
                {isAuth && (
                    <div className={s.userHeader}>
                        <img src={user.image || anonymous} alt="user image" />
                       
                        <div className={s.userHeader__content}>
                            <h6>{user.name || "Неизвестен"}</h6>
                            <p>{user.email || "..."}</p>
                        </div>
                        <Button
                            onClick={() => {
                                handleLogout(setIsAuth);
                            }}
                            classNames={["small", "gray"]}
                        >
                            <img src={logout} />
                        </Button>
                    </div>
                )}
            </div>
            <img src={shape} className={s.shape} />
        </header>
    );
};

export default Header;
