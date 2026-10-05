"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
    useReportWebVitals((metric) => {
        try {
            const payload = JSON.stringify({
                url:
                    typeof window !== "undefined"
                        ? window.location.pathname
                        : "",
                name: metric.name,
                value: Math.round(
                    metric.name === "CLS" ? metric.value * 1000 : metric.value
                ),
                rating: metric.rating || "good",
                timestamp: new Date().toISOString(),
            });

            if (typeof navigator !== "undefined" && navigator.sendBeacon) {
                navigator.sendBeacon("/api/analytics/speed", payload);
            } else {
                fetch("/api/analytics/speed", {
                    method: "POST",
                    body: payload,
                    headers: { "Content-Type": "application/json" },
                    keepalive: true,
                }).catch(() => {});
            }
        } catch {
            // Non-blocking background analytics
        }
    });

    return null;
}
