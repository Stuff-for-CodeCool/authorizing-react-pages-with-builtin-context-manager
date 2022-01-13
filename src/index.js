import React, {
    StrictMode,
    createContext,
    useContext,
    useState,
    useMemo,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";

import "the-new-css-reset/css/reset.css";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Protected from "./components/Protected";
import Logout from "./components/Logout";

const authInitialState = { isAuth: false, setAuth: undefined };
const AuthContext = createContext(authInitialState);
export const useAuthState = () => useContext(AuthContext);

const GlobalStateProvider = ({ children }) => {
    const [auth, setAuth] = useState(authInitialState.isAuth);
    const AuthContextValue = useMemo(() => ({ auth, setAuth }), [auth]);

    return (
        <AuthContext.Provider value={AuthContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

const App = () => {
    return (
        <GlobalStateProvider>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/protected"
                        element={
                            <ProtectedRoute>
                                <Protected />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </main>
            <Footer />
        </GlobalStateProvider>
    );
};

render(
    <BrowserRouter>
        <StrictMode>
            <App />
        </StrictMode>
    </BrowserRouter>,
    document.getElementById("root")
);
