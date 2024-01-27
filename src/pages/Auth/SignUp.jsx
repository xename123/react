import React, { useContext, useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "../../utils/login";
import GoogleButton from "../../components/GoogleButton";
import Button from "../../components/UI/button/Button";

import s from "./Auth.module.scss";
import { Link } from "react-router-dom";
import { getFormData } from "../../utils/form";
import { useLogin } from "../../hooks/useLogin";
import { AuthContext, UsersContext } from "../../context/context";

const SignUp = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    const { users } = useContext(UsersContext);

    const [handleLogin] = useLogin();

    useEffect(() => {
        if (userInfo !== null) {
            handleLogin(userInfo, setIsAuth, true);
        }
    }, [userInfo, handleLogin, setIsAuth]);

    return (
        <div className={s.signUp}>
            <div className="_container">
                <h1 className={s.title}>
                    Welcome. We exist to make entrepreneurism easier.
                </h1>
                <div className={s.body}>
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleButton />
                    </GoogleOAuthProvider>

                    <p className={s.advice}>Or, register with your email</p>

                    <form className={s.form}>
                        <div className={s.form__item}>
                            <label
                                htmlFor="full-name"
                                className={s.form__label}
                            >
                                Full Name{" "}
                                <span className={s.form__label_required}>
                                    *
                                </span>
                            </label>
                            <input
                                data-required
                                autoComplete="name"
                                type="name"
                                name="name"
                                id="full-name"
                                placeholder="First and last name"
                                className={s.form__input}
                            />
                        </div>
                        <div className={s.form__item}>
                            <label
                                htmlFor="company-name"
                                className={s.form__label}
                            >
                                Company Name{" "}
                                <span className={s.form__label_required}>
                                    *
                                </span>
                            </label>
                            <input
                                data-required
                                type="text"
                                name="company"
                                id="company-name"
                                placeholder="Your company or app name"
                                className={s.form__input}
                            />
                        </div>
                        <div className={s.form__item}>
                            <label htmlFor="email" className={s.form__label}>
                                Work Email{" "}
                                <span className={s.form__label_required}>
                                    *
                                </span>
                            </label>
                            <input
                                autoComplete="email"
                                data-required
                                name="email"
                                type="email"
                                id="email"
                                placeholder="you@yourcompany.com"
                                className={s.form__input}
                            />
                        </div>
                        <div className={s.form__item}>
                            <label htmlFor="password" className={s.form__label}>
                                Password{" "}
                                <span className={s.form__label_required}>
                                    *
                                </span>
                            </label>
                            <input
                                autoComplete="current-password"
                                data-required
                                name="password"
                                type="password"
                                id="password"
                                placeholder="Password (at least 10 characters)"
                                min="10"
                                className={s.form__input}
                            />
                        </div>

                        <p className={s.text}>
                            I agree to be contacted by Open PRO about this offer
                            as per the Open PRO <a href="/">Privacy Policy</a>.
                        </p>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                getFormData(
                                    e.target.closest("form"),
                                    setUserInfo
                                );
                            }}
                        >
                            Sign up
                        </Button>
                    </form>
                    <p className={s.haveAccount}>
                        Already using Open PRO?{" "}
                        <Link to="/signin">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
