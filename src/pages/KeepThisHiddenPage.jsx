import { useEffect } from "react";

export default function KeepThisHiddenPage() {
    useEffect(() => {
        localStorage.setItem(
            "secret URL",
            "Iemand vertelde me ooit dat er een verborgen URL is. Geen enkel persoon heeft dit ooit gevonden omdat het 'topsecret' is."
        );
    }, []);
    return (
        <>
            Er staat niets op deze pagina. Misschien is er iets opgeslagen in de ontwikkelaarstools?
        </>
    );
}
