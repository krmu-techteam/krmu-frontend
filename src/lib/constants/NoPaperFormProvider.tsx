"use client";

import { useEffect } from "react";

const NoPaperFormProvider = () => {
    useEffect(() => {
        if (typeof window === "undefined") return;
        const scriptUrl = "https://widgets.nopaperforms.com/emwgts.js";
        if (document.querySelector(`script[src="${scriptUrl}"]`)) return;

        let loaded = false;
        const loadScript = () => {
            if (loaded || document.querySelector(`script[src="${scriptUrl}"]`))
                return;
            loaded = true;
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.async = true;
            script.src = scriptUrl;
            document.body.appendChild(script);
        };

        // Defer load to first user interaction or 6s timer to prevent blocking main thread
        const events = ["scroll", "mousemove", "touchstart", "click"];
        const onUserAction = () => {
            loadScript();
            events.forEach((e) => window.removeEventListener(e, onUserAction));
        };

        events.forEach((e) =>
            window.addEventListener(e, onUserAction, {
                passive: true,
                once: true,
            })
        );

        const timer = setTimeout(loadScript, 6000);

        return () => {
            clearTimeout(timer);
            events.forEach((e) => window.removeEventListener(e, onUserAction));
        };
    }, []);

    return null; // no UI needed — it just loads script globally
};

export default NoPaperFormProvider;
