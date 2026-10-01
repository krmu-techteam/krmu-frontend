"use client";

import { useEffect, useRef } from "react";

type NoPaperFormProps = {
    formId?: string; // this is the data-w value
    height?: string;
    onLoaded?: () => void;
};

const NoPaperForm = ({
    formId,
    height = "500px",
    onLoaded,
}: NoPaperFormProps) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!formId || typeof window === "undefined") return;

        const container = containerRef.current;
        if (!container) return;

        // Check if iframe already exists and loaded
        const existingIframe = container.querySelector("iframe");
        if (existingIframe) {
            onLoaded?.();
            return;
        }

        const referrer = document.referrer || "";
        const currentUrl = window.location.href;

        // Parse search params for utm parameters
        let m = "";
        if (window.location.search) {
            const search = window.location.search.replace("?", "").split("&");
            for (let h = 0; h < search.length; h++) {
                if (!search[h]) continue;
                if (m !== "") m += "||";
                const p = search[h].split("=");
                const key = p[0]?.toLowerCase();
                if (key === "utm_placement" || key === "utm_keyword") {
                    m += p[0] + "npfeq" + search[h].replace(p[0] + "=", "");
                } else {
                    m += p[0] + "npfeq" + (p[1] || "");
                }
            }
        }

        const src = `https://widgets.nopaperforms.com/register?&r=${encodeURIComponent(
            referrer
        )}&q=${m}&w=${encodeURIComponent(formId)}&m=&cu=${encodeURIComponent(
            currentUrl
        )}`;

        container.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.frameBorder = "0";
        iframe.width = "100%";
        iframe.height = height;
        iframe.setAttribute(
            "sandbox",
            "allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
        );
        iframe.setAttribute("src", src);

        iframe.addEventListener("load", () => {
            onLoaded?.();
        });

        container.appendChild(iframe);

        // Fallback onLoaded after 800ms
        const timer = setTimeout(() => {
            onLoaded?.();
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, [formId, height, onLoaded]);

    return (
        <div
            ref={containerRef}
            className="npf_wgts w-full"
            data-height={height}
            data-w={formId}
        />
    );
};

export default NoPaperForm;
