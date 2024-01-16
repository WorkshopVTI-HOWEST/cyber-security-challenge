import "../assets/css/Hero.css";
import { Link } from "react-router-dom";
import BankerImage from "../assets/images/investment-banker.jpg";

export default function Hero() {
    return (
        <section className="hero">
            <div>
                <h2>
                    Waar financiële aspiraties samenkomen met een <span className="accent">vertrouwde</span> partner.
                </h2>
                <p>
                    Bij Prosperity Trust Bank is onze toewijding om individuen, gezinnen en bedrijven te versterken zodat ze hun financiële doelen kunnen bereiken. Van gepersonaliseerde bankoplossingen tot deskundige financiële begeleiding, ons team van toegewijde professionals staat klaar om samen met jou het complexe landschap van financiën te verkennen.
                </p>
                <Link to="/MaybeThereAreSomeHiddenURLS">Contacteer ons!</Link>
            </div>
            <img
                src={BankerImage}
                alt="2 persons talking while working"
                title="2 persons talking while working"
            />
        </section>
    );
}
