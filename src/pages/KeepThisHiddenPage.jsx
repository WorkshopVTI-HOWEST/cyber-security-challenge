import {useEffect} from "react";


export default function KeepThisHiddenPage() {
    useEffect(() => {
        alert("Goed gedaan! Dit is de flag: 'ptb-keepthishidden'");
    }, []); // The empty dependency array ensures that the effect runs only once

    return (
        <>
            <p>Niemand mag deze pagina zien. Ik mag ook niet vergeten dit uit de robots.txt te halen! <br/><br/>
            </p>
        </>
    );
}
