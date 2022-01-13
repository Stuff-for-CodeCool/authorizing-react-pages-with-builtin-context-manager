import { memo } from "react";
import { Link } from "react-router-dom";

import { useAuthState } from "..";

const Header = memo(() => {
    const { auth } = useAuthState();

    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {auth && (
                        <>
                            <li>
                                <Link to="/protected">Protected page</Link>
                            </li>
                            <li>
                                <Link to="/logout">Log out</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
});

export default Header;
