"use client";

import { useEffect, useRef } from "react";

interface CustomPageClientProps {
    html: string;
    css?: string;
    js?: string;
    slug?: string;
}

export default function CustomPageClient({
    html,
    css,
    js,
    slug,
}: CustomPageClientProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Helper to activate first tab if none active
        const activateFirstTabFallback = () => {
            const firstTab = container.querySelector<HTMLElement>(".iqac_tab");
            const firstContent =
                container.querySelector<HTMLElement>(".iqac_tab-content");
            const hasActiveTab = container.querySelector(".iqac_tab.active");
            const hasActiveContent = container.querySelector(
                ".iqac_tab-content.active"
            );

            if (firstTab && !hasActiveTab) {
                firstTab.classList.add("active");
            }
            if (firstContent && !hasActiveContent) {
                firstContent.classList.add("active");
            }
        };

        if (!js) {
            activateFirstTabFallback();
            return;
        }

        // Intercept DOMContentLoaded and load events because in SPA navigation,
        // DOMContentLoaded has already fired and will NEVER fire again.
        const originalDocAdd = document.addEventListener;
        const originalWinAdd = window.addEventListener;

        document.addEventListener = function (
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions
        ) {
            if (
                type === "DOMContentLoaded" &&
                (document.readyState === "interactive" ||
                    document.readyState === "complete")
            ) {
                setTimeout(() => {
                    try {
                        if (typeof listener === "function") {
                            listener(new Event("DOMContentLoaded"));
                        } else if (
                            listener &&
                            typeof listener.handleEvent === "function"
                        ) {
                            listener.handleEvent(new Event("DOMContentLoaded"));
                        }
                    } catch (e) {
                        console.error(
                            "[CustomPage] DOMContentLoaded listener error:",
                            e
                        );
                    }
                }, 0);
                return;
            }
            return originalDocAdd.call(document, type, listener, options);
        };

        window.addEventListener = function (
            type: string,
            listener: EventListenerOrEventListenerObject,
            options?: boolean | AddEventListenerOptions
        ) {
            if (type === "load" && document.readyState === "complete") {
                setTimeout(() => {
                    try {
                        if (typeof listener === "function") {
                            listener(new Event("load"));
                        } else if (
                            listener &&
                            typeof listener.handleEvent === "function"
                        ) {
                            listener.handleEvent(new Event("load"));
                        }
                    } catch (e) {
                        console.error(
                            "[CustomPage] window load listener error:",
                            e
                        );
                    }
                }, 0);
                return;
            }
            return originalWinAdd.call(window, type, listener, options);
        };

        try {
            // Execute the custom script
            const runFn = new Function(js);
            runFn();
        } catch (err) {
            console.error(
                `[CustomPage] Error executing JS for "${slug}":`,
                err
            );
        } finally {
            // Restore standard addEventListener
            document.addEventListener = originalDocAdd;
            window.addEventListener = originalWinAdd;
        }

        // Secondary safety: ensure first tab is visible even if script failed or had delayed init
        setTimeout(() => {
            activateFirstTabFallback();
        }, 50);
    }, [html, js, slug]);

    const enhancedCss = `
    ${css || ""}
    /* Fallback to show first tab before or during hydration */
    .iqac_tabs:not(:has(.iqac_tab.active)) .iqac_tab:first-child {
      background-color: red !important;
      font-weight: bold;
    }
    .iqac_tab_container:not(:has(.iqac_tab-content.active)) .iqac_tab-content:first-child {
      display: block !important;
    }
  `;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: enhancedCss }} />
            <div
                ref={containerRef}
                dangerouslySetInnerHTML={{
                    __html: html,
                }}
            />
        </>
    );
}
