import "../assets/css/OurMission.css";
import BankingService from "./BankingService";
import PersonalBankingImage from "../assets/images/personalbanking-100x100-2c-100x100.png";
import BusinessBankingImage from "../assets/images/small-biz-2c-100x100-1-100x100.png";
import CommercialBankingImage from "../assets/images/checklist-clipboard-100x100.png";
import WealthManagementImge from "../assets/images/checklist-clipboard-100x100.png";

export default function OurMission() {
    return (
        <section className="ourMission">
            <h2>
                Welke soort bank heb jij
                <span className="accent bold"> nodig </span>
                in je leven?
            </h2>
            <p>
                Of je nu een gezin sticht of een bedrijf uitbreidt,
                je hebt een bank nodig die jou begrijpt.
                Dat is wat Prosperity Trust Bank doet.
                Ongeacht de omvang van je financiën,
                staan we klaar om je te helpen
                <span className="accent bold"> jouw verhaal te schrijven</span>.
            </p>
            <div>
                <BankingService
                    imgSrc={PersonalBankingImage}
                    title="Personal Banking"
                    description="Betaalrekeningen, spaarrekeningen, leningen en meer, allemaal van lokale mensen die klaarstaan om in persoon of online te helpen."
                />
                <BankingService
                    imgSrc={BusinessBankingImage}
                    title="Business Banking"
                    description="Toegewijde zakelijke bankdiensten en diensten voor non-profitorganisaties, verzorgd door lokale bankiers die betrokken zijn bij jouw succes."
                />
                <BankingService
                    imgSrc={CommercialBankingImage}
                    title="Commercial Banking"
                    description="Financiering, bankieren en treasury management diensten afgestemd op de doelen van jouw bedrijf."
                />
                <BankingService
                    imgSrc={WealthManagementImge}
                    title="Wealth Management"
                    description="Bescherm wat je hebt verdiend, laat je vermogen groeien en bouw aan jouw nalatenschap voor de volgende generatie."
                />
            </div>
        </section>
    );
}
