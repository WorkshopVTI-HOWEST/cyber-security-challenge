import "../assets/css/Employee.css";

export default function Employee({ name, description, imgURL }) {
    return (
        <div className="employee">
            <img src={imgURL} alt="employee image" title="employee image" />
            <div>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}
