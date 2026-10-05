import { headers } from "next/headers";
import { logServerPageSpeed } from "@/lib/performance/speedLogger";

export async function ServerSpeedTracker() {
    try {
        const headerList = await headers();
        const startTimeStr = headerList.get("x-start-time");
        const pathname =
            headerList.get("x-pathname") ||
            headerList.get("x-matched-path") ||
            "/";

        const durationMs = startTimeStr
            ? Math.max(1, Date.now() - parseInt(startTimeStr, 10))
            : 25;

        logServerPageSpeed({
            url: pathname,
            responseTimeMs: durationMs,
            status: 200,
            timestamp: new Date().toISOString(),
        });
    } catch {
        // Non-blocking performance tracking
    }

    return null;
}
