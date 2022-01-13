import { memo } from "react";
import { useAuthState } from "..";
import { Navigate } from "react-router-dom";

const ProtectedRoute = memo(({ children }) => {
    const { auth } = useAuthState();
    if (!auth) return <Navigate to="/" />;

    return <>{children}</>;
});

export default ProtectedRoute;
