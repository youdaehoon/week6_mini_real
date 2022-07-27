import React from "react";

export const useKeyEscClose = (closeThing) => {
    React.useEffect(() => {
        const escKeyModalClose = (e) => {
            if (e.keyCode === 27) {
                closeThing(false);
            }
        };
        window.addEventListener("keydown", escKeyModalClose);
        return () => window.removeEventListener("keydown", escKeyModalClose);
    }, []);
};