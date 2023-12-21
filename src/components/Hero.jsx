import "../assets/css/Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero">
            <div>
                <h2>
                    Where financial aspirations meet a{" "}
                    <span className="accent">trusted</span> partner
                </h2>
                <p>
                    At Prosperity Trust Bank, our commitment is to empower
                    individuals, families, and businesses to achieve their
                    financial goals. From personalized banking solutions to
                    expert financial guidance, our team of dedicated
                    professionals is here to navigate the intricate landscape of
                    finance with you.
                </p>
                <Link to="/">Contact us!</Link>
            </div>
            <img
                src="/src/assets/images/investment-banker.jpg"
                alt="2 persons talking while working"
                title="2 persons talking while working"
            />
        </section>
    );
}
