"use client";

import { useEffect } from "react";

const NoPaperFormProvider = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        if (
            document.querySelector(
                'script[src="https://widgets.nopaperforms.com/emwgts.js"]'
            )
        )
            return;

        const loadScript = () => {
            if (
                document.querySelector(
                    'script[src="https://widgets.nopaperforms.com/emwgts.js"]'
                )
            )
                return;
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = "https://widgets.nopaperforms.com/emwgts.js";
            document.body.appendChild(script);
        };

        if ("requestIdleCallback" in window) {
            (window as any).requestIdleCallback(loadScript, { timeout: 3000 });
        } else {
            setTimeout(loadScript, 2000);
        }
    }, []);

    return null; // no UI needed — it just loads script globally
};

export default NoPaperFormProvider;
