import { useState } from "react";
import "../assets/css/Login.css";

const credentials = {
    username: "admin",
    password: "dontsharethis",
};

export default function Login() {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if (
            username === credentials.username &&
            password === credentials.password
        ) {
            console.log("congrats you found the credentials");
        } else {
            console.log("Password incorrect. Did you decode it correct?");
        }
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
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
