import { memo } from "react";
import { useAuthState } from "..";

const Home = memo(() => {
    const { setAuth } = useAuthState();

    const submitHandler = (e) => {
        e.preventDefault();

        const user = e.target.user.value;
        const pass = e.target.pass.value;

        if (user === "foo" && pass === "bar") {
            setAuth(true);
        }

        e.target.reset();
    };

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="user">Username</label>
                <input type="text" id="user" name="user" />
            </p>
            <p>
                <label htmlFor="pass">Password</label>
                <input type="password" id="pass" name="pass" />
            </p>
            <p>
                <button type="submit">Submit</button>
            </p>
        </form>
    );
});

export default Home;
