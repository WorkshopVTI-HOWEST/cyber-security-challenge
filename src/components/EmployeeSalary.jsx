import "../assets/css/Employees.css"
import {useState} from "react";

// eslint-disable-next-line react/prop-types
export default function EmployeeSalary({name, imgURL, initialSalary}) {
    const [salary, setSalary] = useState(initialSalary);

    const handleSalaryChange = (e) => {
        let max = document.getElementById(name).max;
        let newSalary = parseInt(e.target.value, 10);
        newSalary = isNaN(newSalary) ? 0 : Math.min(max, Math.max(0, newSalary));
        setSalary(newSalary);
        if (newSalary === 10000) {
            alert("Goed gedaan! Dit is de flag: 'ptbsalary'");
        }
    };

    return (
        <div className="employee">
            <img src={imgURL} alt="employee image" title="employee image" />
            <div>
                <h2>{name}</h2>
            </div>
            <label className="salary">
                Salary:
                <input
                    id={name}
                    type="number"
                    value={salary}
                    onChange={handleSalaryChange}
                    min="0"
                    max="5000"
                />
            </label>
        </div>
    );
}