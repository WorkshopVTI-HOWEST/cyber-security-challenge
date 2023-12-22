import React from "react";

export default function TopSecretPage() {
    const handleCopyToClipboard = () => {
        const encryptedVersion = "8087a52e0e37d2babef10aaf1c40ffc5";
        navigator.clipboard.writeText(encryptedVersion);
    };

    return (
        <>
            <p>
                Hi Bart, this page is in case you forgot your password. Im not
                going to give you the password, but here is the encrypted
                version:
                <span
                    className="accent bold"
                    onClick={handleCopyToClipboard}
                    style={{ cursor: "pointer" }}
                >
                    ZG9udHNoYXJldGhpcw==
                </span>
            </p>
        </>
    );
}
