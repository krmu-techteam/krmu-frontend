"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        khConfig?: {
            identifier: string;
            domain: string;
            targetContainer: string;
            portalName?: string;
        };
    }
}

export default function KekaJobEmbed() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // 1. Configure Keka global config
        window.khConfig = {
            identifier: "88fbde14-f9d3-4b37-ba20-301992a3e8ea",
            domain: "https://krmu.keka.com/careers/",
            targetContainer: "#khembedjobs",
        };

        // If already injected and rendered, avoid duplicate script load
        if (
            containerRef.current &&
            containerRef.current.querySelector("#kh-main-container")
        ) {
            return;
        }

        // Clean up previous script if any
        const existingScript = document.getElementById("keka-jobs-script");
        if (existingScript && existingScript.parentNode) {
            existingScript.parentNode.removeChild(existingScript);
        }

        // 2. Create and inject script into DOM
        const script = document.createElement("script");
        script.id = "keka-jobs-script";
        script.src =
            "https://krmu.keka.com/careers/api/embedjobs/js/88fbde14-f9d3-4b37-ba20-301992a3e8ea";
        script.async = true;

        script.onerror = (err) => {
            console.error("Failed to load Keka Careers script:", err);
        };

        document.body.appendChild(script);

        return () => {
            const s = document.getElementById("keka-jobs-script");
            if (s && s.parentNode) {
                s.parentNode.removeChild(s);
            }
        };
    }, []);

    return (
        <section className="container py-10 md:py-14 max-w-[1440px] mx-auto w-full px-4 md:px-8 xl:px-12">
            <div
                ref={containerRef}
                id="khembedjobs"
                className="w-full min-h-[300px]"
                suppressHydrationWarning
            />
        </section>
    );
}
