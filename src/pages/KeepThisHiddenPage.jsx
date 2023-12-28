import { useEffect } from "react";

export default function KeepThisHiddenPage() {
    useEffect(() => {
        localStorage.setItem(
            "secret URL",
            "Someone once told me that there is a hidden URL. Not a single person ever found it because it's 'topsecret'."
        );
    }, []);
    return (
        <>
            There is nothing on this page. Maybe there is something stored on
            your machine?
        </>
    );
}
