import { useState } from "react";
import "../assets/css/Login.css";
import LoginService from "../service/LoginService.js";

export default function Login({ setIsLoggedIn }) {
    const loginService = new LoginService();

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (loginService.login(username, password)) {
            setIsLoggedIn(true);
        } else {
            showErrorMessage();
        }
    }

    function showErrorMessage() {
        setErrorMessageVisible(true);
    }

    return (
        <section className="login">
            <h2>Log in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="username"
                    data-hint="The username is not that hard. Its the most used username for administrators."
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    data-hint="Remember what took over the world in the Terminator? The answer lies in that file."
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessageVisible && (
                    <p className="error">
                        The password looks weird no? maybe try decrypting it.
                    </p>
                )}
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
