import React from "react";

export default function TopSecretPage() {
    const encryptedVersion = "ZG9udHNoYXJldGhpcw==";
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(encryptedVersion);
        alert("gekopieerd")
    };

    return (
        <>
            <p>
                Hallo Bert, deze pagina is voor het geval je het administrator wachtwoord vergeten bent. Ik geef je niet zomaar het wachtwoord, maar hier is de gencrypteerde versie{" "}
                <span
                    className="accent bold"
                    onClick={handleCopyToClipboard}
                    style={{ cursor: "pointer" }}
                >
                    {encryptedVersion}
                </span>
            </p>
        </>
    );
}
