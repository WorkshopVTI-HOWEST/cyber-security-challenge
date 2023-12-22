import React from "react";

export default function TopSecretPage() {
    const encryptedVersion = "ZG9udHNoYXJldGhpcw==";
    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(encryptedVersion);
    };

    return (
        <>
            <p>
                Hi Bart, this page is in case you forgot your password. Im not
                going to give you the password, but here is the encrypted
                version:{" "}
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
