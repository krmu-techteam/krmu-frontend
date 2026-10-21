"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function NavigationLoaderContent() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    const tabSpinnerIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const originalFaviconHrefRef = useRef<string | null>(null);

    const stopTabSpinner = () => {
        if (tabSpinnerIntervalRef.current) {
            clearInterval(tabSpinnerIntervalRef.current);
            tabSpinnerIntervalRef.current = null;
        }

        if (typeof document !== "undefined") {
            const faviconLink =
                document.querySelector<HTMLLinkElement>("link[rel*='icon']");
            if (faviconLink) {
                faviconLink.href =
                    originalFaviconHrefRef.current || "/favicon.ico";
            }
        }
    };

    const startTabSpinner = () => {
        if (typeof document === "undefined") return;

        stopTabSpinner();

        let faviconLink =
            document.querySelector<HTMLLinkElement>("link[rel*='icon']");
        if (!faviconLink) {
            faviconLink = document.createElement("link");
            faviconLink.rel = "icon";
            document.head.appendChild(faviconLink);
        }

        if (
            !originalFaviconHrefRef.current &&
            !faviconLink.href.startsWith("data:")
        ) {
            originalFaviconHrefRef.current = faviconLink.href || "/favicon.ico";
        }

        const canvas = document.createElement("canvas");
        canvas.width = 32;
        canvas.height = 32;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let rotation = 0;
        tabSpinnerIntervalRef.current = setInterval(() => {
            ctx.clearRect(0, 0, 32, 32);
            ctx.save();
            ctx.translate(16, 16);
            ctx.rotate(rotation);

            // Contrast track with white visibility for dark/light browser tabs
            ctx.beginPath();
            ctx.arc(0, 0, 11, 0, Math.PI * 2);
            ctx.lineWidth = 4;
            ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
            ctx.stroke();

            // Gradient spinner arc: White -> #0055A4 (Blue) -> #ED1C24 (Red)
            const gradient = ctx.createLinearGradient(-11, -11, 11, 11);
            gradient.addColorStop(0, "#FFFFFF"); // Crisp White
            gradient.addColorStop(0.45, "#0055A4"); // Royal Blue
            gradient.addColorStop(1, "#ED1C24"); // Crimson Red

            ctx.beginPath();
            ctx.arc(0, 0, 11, 0, Math.PI * 1.45);
            ctx.lineWidth = 4;
            ctx.strokeStyle = gradient;
            ctx.lineCap = "round";
            ctx.stroke();

            // Glowing white tip at the leading edge
            const headAngle = Math.PI * 1.45;
            const hx = 11 * Math.cos(headAngle);
            const hy = 11 * Math.sin(headAngle);
            ctx.beginPath();
            ctx.arc(hx, hy, 2.5, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.shadowColor = "#FFFFFF";
            ctx.shadowBlur = 4;
            ctx.fill();

            ctx.restore();

            faviconLink.href = canvas.toDataURL("image/png");
            rotation += 0.45;
        }, 60);
    };

    // Reset any previous canvas/data: favicon on initial mount
    useEffect(() => {
        if (typeof document !== "undefined") {
            const favicons =
                document.querySelectorAll<HTMLLinkElement>("link[rel*='icon']");
            favicons.forEach((fav) => {
                if (fav.href.startsWith("data:")) {
                    fav.href = "/favicon.ico";
                }
            });
        }
    }, []);

    // Complete progress when route changes
    useEffect(() => {
        if (!isVisible) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        setProgress(100);
        stopTabSpinner();

        timeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            setProgress(0);
        }, 300);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [pathname, searchParams]);

    const startProgress = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        setIsVisible(true);
        setProgress(28);
        startTabSpinner();

        intervalRef.current = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return 90;
                }
                const step = Math.max(0.8, (92 - prev) * 0.12);
                return Math.min(90, prev + step);
            });
        }, 150);
    };

    // Global listener for internal links to trigger top loading bar and tab spinner
    useEffect(() => {
        const handleAnchorClick = (event: MouseEvent) => {
            const anchor = (event.target as HTMLElement)?.closest("a");
            if (!anchor) return;

            const href = anchor.getAttribute("href");
            const target = anchor.getAttribute("target");

            // Ignore external target, mailto, tel, javascript, download, or modifier keys
            if (
                !href ||
                target === "_blank" ||
                href.startsWith("mailto:") ||
                href.startsWith("tel:") ||
                href.startsWith("javascript:") ||
                anchor.hasAttribute("download") ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey ||
                event.button !== 0
            ) {
                return;
            }

            // Ignore in-page hash links (#section)
            if (href.startsWith("#")) {
                return;
            }

            try {
                const targetUrl = new URL(href, window.location.href);
                const currentUrl = new URL(window.location.href);

                // Ignore external domains
                if (targetUrl.origin !== currentUrl.origin) {
                    return;
                }

                // If same page and same search query, do nothing
                if (
                    targetUrl.pathname === currentUrl.pathname &&
                    targetUrl.search === currentUrl.search
                ) {
                    return;
                }

                // Start top progress bar & gradient tab spinner
                startProgress();
            } catch {
                // Invalid URL
            }
        };

        const handlePopState = () => {
            startProgress();
        };

        document.addEventListener("click", handleAnchorClick, {
            capture: true,
        });
        window.addEventListener("popstate", handlePopState);

        return () => {
            document.removeEventListener("click", handleAnchorClick, {
                capture: true,
            });
            window.removeEventListener("popstate", handlePopState);
            if (intervalRef.current) clearInterval(intervalRef.current);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            stopTabSpinner();
        };
    }, []);

    // Safety timeout
    useEffect(() => {
        if (!isVisible) return;
        const safetyTimer = setTimeout(() => {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsVisible(false);
            setProgress(0);
            stopTabSpinner();
        }, 9000);
        return () => clearTimeout(safetyTimer);
    }, [isVisible]);

    if (!isVisible && progress === 0) return null;

    return (
        <div
            className="fixed left-0 right-0 pointer-events-none z-[9999999] transition-opacity duration-300"
            style={{ top: "8px", opacity: isVisible ? 1 : 0 }}
        >
            <div
                className="h-[3px] relative"
                style={{
                    width: `${progress}%`,
                    background:
                        "linear-gradient(90deg, #0055A4 0%, #ED1C24 100%)",
                    transition:
                        progress === 100
                            ? "width 200ms ease-out"
                            : "width 300ms cubic-bezier(0.1, 0.5, 0.1, 1)",
                    boxShadow:
                        "0 0 10px rgba(237, 28, 36, 0.85), 0 0 5px rgba(0, 85, 164, 0.6)",
                }}
            >
                {/* Clean glowing head on the right edge */}
                <div
                    className="absolute right-0 top-0 bottom-0 w-16 h-full pointer-events-none"
                    style={{
                        boxShadow: "0 0 12px #ED1C24, 0 0 6px #ffffff",
                        opacity: 0.9,
                    }}
                />
            </div>
        </div>
    );
}

export function NavigationLoader() {
    return (
        <Suspense fallback={null}>
            <NavigationLoaderContent />
        </Suspense>
    );
}

export default NavigationLoader;
