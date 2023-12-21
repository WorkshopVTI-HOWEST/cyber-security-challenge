import "../assets/css/Login.css";

export default function Login() {
    return (
        <section className="login">
            <h2>Log in</h2>
            <form action="#">
                <input
                    type="text"
                    placeholder="username"
                    data-hint="The username is not that hard. Its the most used username for administrators."
                />
                <input
                    type="password"
                    placeholder="password"
                    data-hint="Remember what took over the world in the Terminator? The answer lies in that file."
                />
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
