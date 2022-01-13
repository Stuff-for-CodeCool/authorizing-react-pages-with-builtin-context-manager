import { memo } from "react";
import { useAuthState } from "..";
import { Navigate } from "react-router-dom";

const Logout = memo(() => {
    const { setAuth } = useAuthState();
    setAuth(false);
    return <Navigate to="/" />;
});

export default Logout;
