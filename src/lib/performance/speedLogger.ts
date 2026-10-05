import fs from "fs";
import path from "path";

export interface PageSpeedRecord {
    url: string;
    responseTimeMs: number;
    status: number;
    timestamp: string;
    cached?: boolean;
}

export interface WebVitalRecord {
    url: string;
    name: "FCP" | "LCP" | "CLS" | "FID" | "TTFB" | "INP" | string;
    value: number;
    rating: "good" | "needs-improvement" | "poor" | string;
    timestamp: string;
}

const LOGS_DIR = path.join(process.cwd(), "logs");
const SERVER_LOG_FILE = path.join(LOGS_DIR, "page-speeds.jsonl");
const VITALS_LOG_FILE = path.join(LOGS_DIR, "web-vitals.jsonl");

const MAX_IN_MEMORY = 500;

// Use globalThis to maintain shared in-memory buffer across Next.js server chunks
const g = globalThis as any;
if (!g.__krmu_recent_server_records__) {
    g.__krmu_recent_server_records__ = [];
}
if (!g.__krmu_recent_vital_records__) {
    g.__krmu_recent_vital_records__ = [];
}

const recentServerRecords: PageSpeedRecord[] = g.__krmu_recent_server_records__;
const recentVitalRecords: WebVitalRecord[] = g.__krmu_recent_vital_records__;

function ensureLogDir() {
    try {
        if (!fs.existsSync(LOGS_DIR)) {
            fs.mkdirSync(LOGS_DIR, { recursive: true });
        }
    } catch (err) {
        // Ignore in read-only environments
    }
}

/**
 * Log server-side response speed (तरीका 1)
 */
export function logServerPageSpeed(record: PageSpeedRecord) {
    recentServerRecords.unshift(record);
    if (recentServerRecords.length > MAX_IN_MEMORY) {
        recentServerRecords.pop();
    }

    setImmediate(() => {
        try {
            ensureLogDir();
            fs.appendFile(
                SERVER_LOG_FILE,
                JSON.stringify(record) + "\n",
                () => {}
            );
        } catch {
            // Non-blocking
        }
    });
}

/**
 * Log client-side Web Vitals (तरीका 2)
 */
export function logClientWebVital(record: WebVitalRecord) {
    recentVitalRecords.unshift(record);
    if (recentVitalRecords.length > MAX_IN_MEMORY) {
        recentVitalRecords.pop();
    }

    setImmediate(() => {
        try {
            ensureLogDir();
            fs.appendFile(
                VITALS_LOG_FILE,
                JSON.stringify(record) + "\n",
                () => {}
            );
        } catch {
            // Non-blocking
        }
    });
}

/**
 * Read last N lines from a file
 */
function readLastLines(filePath: string, maxLines = 100): string[] {
    try {
        if (!fs.existsSync(filePath)) return [];
        const content = fs.readFileSync(filePath, "utf-8");
        const lines = content.trim().split("\n").filter(Boolean);
        return lines.slice(-maxLines);
    } catch {
        return [];
    }
}

/**
 * Get summary of collected speeds and web vitals
 */
export function getSpeedSummary() {
    let serverRecords = recentServerRecords;
    if (serverRecords.length === 0) {
        const lines = readLastLines(SERVER_LOG_FILE, 200);
        serverRecords = lines
            .map((l) => {
                try {
                    return JSON.parse(l);
                } catch {
                    return null;
                }
            })
            .filter(Boolean)
            .reverse();
    }

    let vitalRecords = recentVitalRecords;
    if (vitalRecords.length === 0) {
        const lines = readLastLines(VITALS_LOG_FILE, 200);
        vitalRecords = lines
            .map((l) => {
                try {
                    return JSON.parse(l);
                } catch {
                    return null;
                }
            })
            .filter(Boolean)
            .reverse();
    }

    const urlStats: Record<
        string,
        { count: number; totalMs: number; minMs: number; maxMs: number }
    > = {};

    for (const r of serverRecords) {
        if (!urlStats[r.url]) {
            urlStats[r.url] = {
                count: 0,
                totalMs: 0,
                minMs: r.responseTimeMs,
                maxMs: r.responseTimeMs,
            };
        }
        const stat = urlStats[r.url];
        stat.count++;
        stat.totalMs += r.responseTimeMs;
        if (r.responseTimeMs < stat.minMs) stat.minMs = r.responseTimeMs;
        if (r.responseTimeMs > stat.maxMs) stat.maxMs = r.responseTimeMs;
    }

    const pageAverages = Object.entries(urlStats)
        .map(([url, data]) => ({
            url,
            totalHits: data.count,
            avgResponseTimeMs: Math.round(data.totalMs / data.count),
            minResponseTimeMs: data.minMs,
            maxResponseTimeMs: data.maxMs,
        }))
        .sort((a, b) => b.avgResponseTimeMs - a.avgResponseTimeMs);

    const vitalsSummary: Record<
        string,
        { count: number; total: number; goodCount: number }
    > = {};
    for (const v of vitalRecords) {
        if (!vitalsSummary[v.name]) {
            vitalsSummary[v.name] = { count: 0, total: 0, goodCount: 0 };
        }
        vitalsSummary[v.name].count++;
        vitalsSummary[v.name].total += v.value;
        if (v.rating === "good") {
            vitalsSummary[v.name].goodCount++;
        }
    }

    const formattedVitals: Record<string, any> = {};
    for (const [name, data] of Object.entries(vitalsSummary)) {
        formattedVitals[name] = {
            sampleCount: data.count,
            avgValueMs: Math.round((data.total / data.count) * 10) / 10,
            goodPercentage:
                Math.round((data.goodCount / data.count) * 100) + "%",
        };
    }

    return {
        totalServerHits: serverRecords.length,
        pageAverages,
        recentServerSpeeds: serverRecords.slice(0, 30),
        totalVitalEvents: vitalRecords.length,
        webVitalsAverages: formattedVitals,
        recentWebVitals: vitalRecords.slice(0, 30),
    };
}
