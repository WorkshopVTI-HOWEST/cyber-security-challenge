import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import TopSecretPage from "./pages/TopSecretPage";
import KeepThisHiddenPage from "./pages/KeepThisHiddenPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
    return (
        <div id="container">
            <NavBar />
            <main className="content center-margin">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                    <Route path="/topsecret" element={<TopSecretPage />} />
                    <Route
                        path="/keepthishidden"
                        element={<KeepThisHiddenPage />}
                    />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
