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
                    data-hint="Hint: The username is not that hard. Its the most used username for administrators."
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    data-hint="Hint: Seek clues in a file named after mechanical friends."
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessageVisible && (
                    <p className="error">
                        You must have not decrypted the password correctly?
                    </p>
                )}
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
