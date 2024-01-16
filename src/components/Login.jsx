import { useState } from "react";
import "../assets/css/Login.css";

// eslint-disable-next-line react/prop-types
export default function Login({ setIsLoggedIn, login }) {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessageVisible, setErrorMessageVisible] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        const loggedIn = login(username, password);
        loggedIn ? setIsLoggedIn(true) : showErrorMessage();
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
                    placeholder="gebruikersnaam"
                    data-hint="Hint: De gebruikersnaam is niet zo moeilijk. Het is de meest gebruikte gebruikersnaam voor administrators."
                    onChange={(e) => setusername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="wachtwoord"
                    data-hint="Hint: Zoek aanwijzingen in een bestand dat genoemd is naar mechanische vrienden."
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessageVisible && (
                    <p className="error">
                        Je hebt het wachtwoord waarschijnlijk niet correct ontsleuteld?
                    </p>
                )}
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
