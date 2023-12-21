import "../assets/css/BankingService.css";

export default function BankingService({ imgSrc, title, description }) {
  return (
    <article className="bankingService">
      <img src={imgSrc} />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}
