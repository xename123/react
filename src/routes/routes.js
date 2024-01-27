import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import Main from "../pages/Main";

export const authUsers = [
    {
        id: 1,
        path: "/",
        element: Main,
        exact: true,
    },
];
export const noAuthUsers = [
    {
        id: 1,
        path: "/",
        element: Main,
        exact: true,
    },
    {
        id: 2,
        path: "/signin",
        element: SignIn,
        exact: true,
    },
    {
        id: 3,
        path: "/signup",
        element: SignUp,
        exact: true,
    },
];
