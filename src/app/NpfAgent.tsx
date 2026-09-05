"use client";

import Script from "next/script";
import { useState, useEffect } from "react";

export default function NpfAgent() {
    const [loadScript, setLoadScript] = useState(false);

    useEffect(() => {
        const events = ["scroll", "mousemove", "touchstart", "click"];
        const onUserAction = () => {
            setLoadScript(true);
            events.forEach((e) => window.removeEventListener(e, onUserAction));
        };

        events.forEach((e) =>
            window.addEventListener(e, onUserAction, {
                passive: true,
                once: true,
            })
        );

        const timer = setTimeout(() => setLoadScript(true), 6000);

        return () => {
            clearTimeout(timer);
            events.forEach((e) => window.removeEventListener(e, onUserAction));
        };
    }, []);

    return (
        <>
            {loadScript && (
                <Script
                    id="npf-agent-script"
                    strategy="lazyOnload"
                    src="https://z62gj5o2lx.in1.agent.nopaperforms.com/en-gb/backend/agents/aiagentscpt.js/6416018f1c55272a/cc38ad8a3a50478e8cd17f8ff4cafc87"
                />
            )}
            <div
                className="npf_ai_agents"
                data-w="cc38ad8a3a50478e8cd17f8ff4cafc87"
                style={{ display: "none" }}
            />
        </>
    );
}
