import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import {useEffect} from "react";

export default function HomePage() {

    useEffect(() => {
        localStorage.setItem(
            "secret URL",
            "Iemand vertelde me ooit dat er een verborgen URL is. Geen enkel persoon heeft dit ooit gevonden omdat het 'topsecret' is."
        );
        fetch("https://flask.lukasolivier.be/employees")
    }, []);

    return (
        <>
            <Hero />
            <OurMission />
        </>
    );
}
