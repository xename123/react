import { useContext, useEffect, useMemo, useState } from "react";
import { UsersContext } from "../context/context";

function findUser(users, userData) {
    return users.find(
        (user) =>
            user.name === userData.name && user.password === userData.password
    );
}

export function useLogin() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");
    const { users, setUsers } = useContext(UsersContext);
    function handleSignIn(userData, setAuth) {
        if (findUser(users, userData)) {
            console.log(Boolean(userData.checkbox));
            handleLogin(userData, setAuth, userData.checkbox, true);
        } else {
            alert("Произошла ошибка");
        }
    }
    function handleLogin(userData, setAuth, keepSigned, isSignIn = false) {
        const userInfo = {
            email: userData.email,
            name: userData.name,
            image: userData.picture,
            password: userData.password,
        };
        setUser(userInfo);
        setAuth(true);
        if (!isSignIn) {
            setUsers([...users, userInfo]);
            localStorage.setItem("users", JSON.stringify([...users, userInfo]));
        }
        if (keepSigned) {
            console.log(123);
            localStorage.setItem("auth", true);
        }
        localStorage.setItem("user", JSON.stringify(userInfo));
    }

    return [handleLogin, handleSignIn, user, error];
}
