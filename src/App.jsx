import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="container">
            <NavBar />
            <main className="content center-margin">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
