import Employee from "../components/Employee";
import "../assets/css/Employees.css"
import {useState} from "react";
import Login from "../components/Login.jsx";
import LoginService from "../service/LoginService.js";
import candles from "../assets/images/candles.jpg";
import EmployeeSalary from "../components/EmployeeSalary.jsx";

export default function SocialPage() {
    const loginService = new LoginService();
    const [showLogin, setShowLogin] = useState(false);
    const [isLoggedin, setIsLoggedin] = useState(false);

    return (
        <>
            {isLoggedin ? (

                <div className="employees">
                    <p>Welcome Bert!</p>
                    <EmployeeSalary
                        initialSalary="3550"
                        name="Anja"
                        imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />
                    <EmployeeSalary
                        initialSalary="4450"
                        name="Victor"
                        imgURL="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb250YWwlMjBmYWNlfGVufDB8fDB8fHww"
                    />
                    <EmployeeSalary
                        initialSalary="4100"
                        name="Arthur"
                        imgURL={candles}
                    />
                </div>

            ) : (
                // not logged in
                <>
                    {showLogin ? (
                        <div>
                            <Login setIsLoggedIn={setIsLoggedin} login={loginService.CeoLogin} />
                        </div>
                    ) : (
                        <div className="employees">
                            <button onClick={() => {setShowLogin(true)}}>Login as employee</button>
                            <h1>Employees</h1>
                            <Employee
                                name="Bert"
                                description="Bert is the CEO, he loves swimming and his dog called 'Boomer'."
                                imgURL="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                            />
                            <Employee
                                name="Anja"
                                description="Anja is the secretary, she loves numbers."
                                imgURL="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            />
                            <Employee
                                name="Victor"
                                description="Victor is het hoofd van de IT afdeling, in zijn vrije tijd is hij graag bezig met websites maken."
                                imgURL="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZyb250YWwlMjBmYWNlfGVufDB8fDB8fHww"
                            />
                            <Employee
                                name="Arthur"
                                description="Kan jij vinden wanneer ik geboren ben? De tips staan 'letterlijk' in mijn profiel foto."
                                imgURL={candles}
                            />
                        </div>
                    )}
                </>

            )}
        </>
    );
}
