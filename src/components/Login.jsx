import "../assets/css/Login.css";

export default function Login() {
    return (
        <section className="login">
            <h2>Log in</h2>
            <form action="#">
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button type="submit">Log in</button>
            </form>
        </section>
    );
}
