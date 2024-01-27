import { useState } from "react";

export function useLogout() {
    const [error, setError] = useState("");
    function handleLogout(setAuth) {
        localStorage.removeItem("user");
        localStorage.setItem("auth", false);
        setAuth(false);
    }
    return [handleLogout, error];
}
