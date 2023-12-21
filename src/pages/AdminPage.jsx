import { useState } from "react";
import Login from "../components/Login";

export default function AdminPage() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return <>{isLoggedin ? <div>Welcome, Admin!</div> : <Login />}</>;
}
