"use client";

import Script from "next/script";
import { useEffect, useState, useMemo } from "react";

type Props = {
    widgetId: string;
    height?: string;
};

export default function NoPaperFormsWidget({
    widgetId,
    height = "510px",
}: Props) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        // Immediate check if NPF widget loader is available
        if (typeof (window as any).npf_w === "function") {
            try {
                (window as any).npf_w();
            } catch {
                // Ignore
            }
        }

        const interval = setInterval(() => {
            if (typeof (window as any).npf_w === "function") {
                try {
                    (window as any).npf_w();
                } catch {
                    // Ignore
                }
                clearInterval(interval);
            }
        }, 300);

        // Fallback to mark loaded after 1.5s
        const fallbackTimer = setTimeout(() => {
            setIsLoaded(true);
        }, 1500);

        return () => {
            clearInterval(interval);
            clearTimeout(fallbackTimer);
        };
    }, []);

    // Construct direct NPF iframe URL for instant zero-delay loading on first visit
    const iframeSrc = useMemo(() => {
        if (!mounted || typeof window === "undefined") return "";

        const referrer = document.referrer || "";
        const currentUrl = window.location.href;

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

        if (m !== "") m += "||";
        m += "Agree npfeq 0||agree npfeq 0";

        return `https://widgets.nopaperforms.com/register?&r=${encodeURIComponent(
            referrer
        )}&q=${encodeURIComponent(m)}&w=${encodeURIComponent(
            widgetId
        )}&m=&cu=${encodeURIComponent(currentUrl)}`;
    }, [mounted, widgetId]);

    return (
        <div
            className="w-full relative overflow-hidden bg-white"
            style={{ minHeight: height, height }}
        >
            {/* Form Skeleton - Visible instantly on first load until iframe finishes rendering */}
            {!isLoaded && (
                <div
                    className="absolute inset-0 z-10 bg-white p-3 sm:p-4 flex flex-col justify-between animate-pulse pointer-events-none"
                    style={{ height }}
                >
                    <div className="space-y-3 pt-1">
                        {/* Name Field */}
                        <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />

                        {/* Email Field */}
                        <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />

                        {/* Mobile Number Field */}
                        <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />

                        {/* State & City Grid */}
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />
                            <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />
                        </div>

                        {/* Program / Course Field */}
                        <div className="h-9 bg-gray-100 rounded-[6px] border border-gray-200/60" />

                        {/* Consent Checkbox Placeholder */}
                        <div className="flex items-center gap-2 pt-1">
                            <div className="w-4 h-4 bg-gray-200 rounded shrink-0" />
                            <div className="h-3 bg-gray-100 rounded w-4/5" />
                        </div>
                    </div>

                    {/* Submit Button Placeholder */}
                    <div className="pt-2">
                        <div className="h-10 bg-[#0b4c8c]/30 rounded-[6px] flex items-center justify-center">
                            <div className="w-24 h-3.5 bg-white/60 rounded" />
                        </div>
                    </div>
                </div>
            )}

            {/* Direct iframe - Loads immediately from browser network without script waterfall */}
            {mounted && iframeSrc ? (
                <iframe
                    src={iframeSrc}
                    width="100%"
                    height={height}
                    style={{
                        height,
                        minHeight: height,
                        border: 0,
                        display: "block",
                        opacity: isLoaded ? 1 : 0,
                        transition: "opacity 0.3s ease-in-out",
                    }}
                    onLoad={() => setIsLoaded(true)}
                    sandbox="allow-top-navigation allow-scripts allow-same-origin allow-downloads allow-popups allow-popups-to-escape-sandbox"
                    title="Admission Form"
                />
            ) : null}

            {/* Fallback container for legacy script widget */}
            <div
                className="npf_wgts hidden"
                data-height={height}
                data-w={widgetId}
            />

            <Script id="npf-vars" strategy="afterInteractive">
                {`
                  if (!window.npf_c) {
                    window.npf_d = "https://admissions.krmangalam.edu.in";
                    window.npf_c = "641";
                    window.npf_m = "1";
                  }
                `}
            </Script>

            <Script
                src="https://track.nopaperforms.com/js/track.js"
                strategy="afterInteractive"
            />
        </div>
    );
}
