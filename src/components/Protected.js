import { memo } from "react";
import { useAuthState } from "..";

const Protected = memo(() => {
    const { auth } = useAuthState();

    return auth ? "Welcome to protected" : "You should not be here";
});

export default Protected;
