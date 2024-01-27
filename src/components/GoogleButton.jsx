import React, { useContext, useEffect, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { AuthContext } from "../context/context";
import { useLogin } from "../hooks/useLogin";

import google from "../img/icons/google.svg";

import Button from "./UI/button/Button";
import axios from "axios";

const GoogleButton = () => {
    const { setIsAuth } = useContext(AuthContext);

    const [userInfo, setUserInfo] = useState(null);
    const [handleLogin] = useLogin();

    useEffect(() => {
        if (userInfo !== null) {
            handleLogin(userInfo, setIsAuth);
        }
    }, [userInfo, handleLogin, setIsAuth]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${codeResponse.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${codeResponse.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res) => {
                    setUserInfo(res.data);
                })
                .catch((err) => console.log(err));
        },
    });

    return (
        <Button classNames={["google"]} onClick={() => login()}>
            <img src={google} alt="google icon" />
            Sign in with Google
        </Button>
    );
};

export default GoogleButton;
