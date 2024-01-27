import React, { useContext, useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { clientId } from "../../utils/login";
import GoogleButton from "../../components/GoogleButton";
import Button from "../../components/UI/button/Button";

import s from "./Auth.module.scss";
import { Link } from "react-router-dom";
import { getFormData } from "../../utils/form";
import { useLogin } from "../../hooks/useLogin";
import { AuthContext } from "../../context/context";
import Checkbox from "../../components/UI/Checkbox/Checkbox";

const SignIn = () => {
    const { setIsAuth } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);

    const [handleLogin, handleSignIn, user] = useLogin();

    useEffect(() => {
        if (userInfo !== null) {
            handleSignIn(userInfo, setIsAuth);
        }
    }, [userInfo, handleSignIn, setIsAuth]);
    return (
        <div className={s.signUp}>
            <div className="_container">
                <h1 className={s.title}>
                    Welcome back. We exist to make entrepreneurism easier.
                </h1>
                <div className={s.body}>
                    <GoogleOAuthProvider clientId={clientId}>
                        <GoogleButton />
                    </GoogleOAuthProvider>

                    <p className={s.advice}>Or, sign in with your email</p>

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
                        <div className={s.form__additional}>
                            <Checkbox name="checkbox">
                                {" "}
                                Keep me signed in
                            </Checkbox>
                            <a>Forgot Password?</a>
                        </div>
                        <Button
                            onClick={(e) => {
                                e.preventDefault();
                                getFormData(
                                    e.target.closest("form"),
                                    setUserInfo
                                );
                            }}
                        >
                            Sign In
                        </Button>
                    </form>
                    <p className={s.haveAccount}>
                        Don’t you have an account?{" "}
                        <Link to="/signup">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
