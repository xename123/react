import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import "./styles/App.scss";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer/Footer";
import { useEffect, useMemo, useState } from "react";
import { AuthContext, UsersContext } from "./context/context";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    useMemo(() => {
        setIsAuth(JSON.parse(localStorage.getItem("auth")));
    }, [localStorage.getItem("auth")]);
    const [users, setUsers] = useState([]);
    useMemo(() => {
        setUsers(JSON.parse(localStorage.getItem("users")));
    }, [localStorage.getItem("users")]);
    useEffect(() => {
        if (!isAuth) {
            localStorage.removeItem("user");
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            <UsersContext.Provider value={{ users, setUsers }}>
                <BrowserRouter>
                    <div className="wrapper">
                        <Header />
                        <AppRouter />
                        <Footer />
                    </div>
                </BrowserRouter>
            </UsersContext.Provider>
        </AuthContext.Provider>
    );
}

export default App;
