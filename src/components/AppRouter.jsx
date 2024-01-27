import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import { useContext } from "react";
import { AuthContext } from "../context/context";
import { authUsers, noAuthUsers } from "../routes/routes";

const AppRouter = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    return (
        <Routes>
            {isAuth &&
                authUsers.map((route) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        Component={route.element}
                        exact={route.exact}
                    ></Route>
                ))}
            {!isAuth &&
                noAuthUsers.map((route) => (
                    <Route
                        key={route.id}
                        path={route.path}
                        Component={route.element}
                        exact={route.exact}
                    ></Route>
                ))}
            <Route path="*" element={<Main />} exact></Route>
        </Routes>
    );
};
export default AppRouter;
