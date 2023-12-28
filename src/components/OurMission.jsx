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
                What kind of bank does your life{" "}
                <span className="accent bold">need?</span>
            </h2>
            <p>
                Whether you're starting a family or expanding a business, you
                need a bank that understands you. That's what Prosperity Trust
                Bank does. No matter the size of your books, we're here to help
                you <span className="accent bold">write your story</span>.
            </p>
            <div>
                <BankingService
                    imgSrc={PersonalBankingImage}
                    title="Personal Banking"
                    description="Checking, savings, loans and more rom locals who are here to help in- person or online."
                />
                <BankingService
                    imgSrc={BusinessBankingImage}
                    title="Business Banking"
                    description="Dedicated business banking and not- for-profit services from local bankers invested in your success."
                />
                <BankingService
                    imgSrc={CommercialBankingImage}
                    title="Commercial Banking"
                    description="Financing, banking, and treasury management services tailored to your business' goals."
                />
                <BankingService
                    imgSrc={WealthManagementImge}
                    title="Wealth Management"
                    description="Protect what you've earned, grow your wealth and build your legacy for the next generation."
                />
            </div>
        </section>
    );
}
