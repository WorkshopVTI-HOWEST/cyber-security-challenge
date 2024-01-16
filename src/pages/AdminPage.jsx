import { useState } from "react";
import Login from "../components/Login";
import LoginService from "../service/LoginService.js";


export default function AdminPage() {
    const loginService = new LoginService();
    const [isLoggedin, setIsLoggedin] = useState(false);
    return (
        <>
            {isLoggedin ? (
                <div>Welcome, Admin!</div>
            ) : (
                <Login setIsLoggedIn={setIsLoggedin} login={loginService.Adminlogin} /> // props meegeven
            )}
        </>
    );
}
