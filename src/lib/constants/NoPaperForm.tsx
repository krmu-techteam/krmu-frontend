"use client";

import { useEffect, useRef } from "react";

type NoPaperFormProps = {
    formId?: string; // this is the data-w value
    height?: string;
    onLoaded?: () => void;
    programme?: string;
    school?: string;
};

const NoPaperForm = ({
    formId,
    height = "500px",
    onLoaded,
    programme,
    school,
}: NoPaperFormProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const onLoadedRef = useRef(onLoaded);
    onLoadedRef.current = onLoaded;

    useEffect(() => {
        if (!formId || typeof window === "undefined") return;

        const container = containerRef.current;
        if (!container) return;

        // Check if iframe already exists and loaded
        const existingIframe = container.querySelector("iframe");
        if (existingIframe) {
            onLoadedRef.current?.();
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

        // Pass programme and school into prefill parameters
        if (programme) {
            if (m !== "") m += "||";
            m += `programme npfeq ${programme}||course npfeq ${programme}||degree npfeq ${programme}`;
        }
        if (school) {
            if (m !== "") m += "||";
            m += `school npfeq ${school}`;
        }

        // DPDP Act 2023: Default consent unticked
        if (m !== "") m += "||";
        m += "Agree npfeq 0||agree npfeq 0";

        const progParam = programme
            ? `&programme=${encodeURIComponent(programme)}`
            : "";
        const schoolParam = school
            ? `&school=${encodeURIComponent(school)}`
            : "";

        const src = `https://widgets.nopaperforms.com/register?&r=${encodeURIComponent(
            referrer
        )}&q=${encodeURIComponent(m)}&w=${encodeURIComponent(
            formId
        )}&m=&cu=${encodeURIComponent(currentUrl)}${progParam}${schoolParam}`;

        container.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.frameBorder = "0";
        iframe.width = "100%";
        iframe.height = height;
        iframe.style.height = height;
        iframe.style.minHeight = height;
        iframe.style.display = "block";
        iframe.setAttribute(
            "sandbox",
            "allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
        );
        iframe.setAttribute("src", src);

        iframe.addEventListener("load", () => {
            onLoadedRef.current?.();
        });

        container.appendChild(iframe);

        // Fallback onLoaded after 800ms
        const timer = setTimeout(() => {
            onLoadedRef.current?.();
        }, 800);

        return () => {
            clearTimeout(timer);
        };
    }, [formId, height, programme, school]);

    return (
        <div
            ref={containerRef}
            className="npf_form_container w-full"
            style={{ height, minHeight: height, overflow: "hidden" }}
            data-height={height}
            data-form-id={formId}
        />
    );
};

export default NoPaperForm;
