import Hero from "../components/Hero";
import OurMission from "../components/OurMission";
import {useEffect} from "react";

export default function HomePage() {

    useEffect(() => {
        fetch("https://flask.lukasolivier.be/employees")
    }, []);

    return (
        <>
            <Hero />
            <OurMission />
        </>
    );
}
