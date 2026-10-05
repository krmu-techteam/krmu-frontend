/**
 * Resilient Fetch Layer for KRMU Frontend
 *
 * Prevents page degradation and connection drops under load by:
 * 1. Single-flight request deduplication (merges concurrent fetches for identical CMS URLs into a single network call)
 * 2. Automatic retries with exponential backoff for transient CMS failures (network drops, 502/503/504)
 * 3. In-memory Stale-While-Revalidate (SWR) cache so upstream CMS blips never cause empty shells
 * 4. Safe Response cloning so multiple callers can consume the body without "body used" errors
 */

interface CacheEntry {
    body: string;
    status: number;
    statusText: string;
    headers: [string, string][];
    timestamp: number;
    expiresAt: number;
}

const inFlightRequests = new Map<string, Promise<CacheEntry>>();
const responseCache = new Map<string, CacheEntry>();

const MAX_CACHE_ENTRIES = 1500;
const DEFAULT_TTL_MS = 120_000; // 2 minutes in-memory cache
const STALE_TTL_MS = 300_000; // 5 minutes stale grace period
const MAX_RETRIES = 2;
const RETRY_DELAY_MS = 250;

function isCmsUrl(urlStr: string): boolean {
    if (!urlStr || typeof urlStr !== "string") return false;
    return (
        urlStr.includes("strapiapp.com") ||
        urlStr.includes("wp.krmangalam.edu.in") ||
        urlStr.includes("techapi.krmangalam.edu.in") ||
        urlStr.includes("/api/")
    );
}

function cleanCacheIfFull() {
    if (responseCache.size <= MAX_CACHE_ENTRIES) return;
    const now = Date.now();
    for (const [key, entry] of responseCache.entries()) {
        if (now > entry.timestamp + STALE_TTL_MS) {
            responseCache.delete(key);
        }
    }
}

async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function createResponseFromEntry(entry: CacheEntry): Response {
    return new Response(entry.body, {
        status: entry.status,
        statusText: entry.statusText,
        headers: new Headers(entry.headers),
    });
}

export async function resilientFetch(
    input: RequestInfo | URL,
    init?: RequestInit
): Promise<Response> {
    installResilientFetch();
    return globalThis.fetch(input, init);
}

export function installResilientFetch() {
    // Run only in server environment (Node.js runtime)
    if (typeof window !== "undefined") return;
    if ((globalThis as any).__krmu_resilient_fetch_installed__) return;
    (globalThis as any).__krmu_resilient_fetch_installed__ = true;

    const nativeFetch = globalThis.fetch;

    globalThis.fetch = async function (
        input: RequestInfo | URL,
        init?: RequestInit
    ): Promise<Response> {
        const url =
            typeof input === "string"
                ? input
                : input instanceof URL
                  ? input.toString()
                  : input.url;
        const method = (init?.method || "GET").toUpperCase();

        // Only intercept GET requests to remote CMS endpoints
        if (method !== "GET" || !isCmsUrl(url)) {
            return nativeFetch(input, init);
        }

        const cacheKey = url;
        const now = Date.now();

        // 1. In-flight request deduplication (Single-flight)
        if (inFlightRequests.has(cacheKey)) {
            try {
                const entry = await inFlightRequests.get(cacheKey)!;
                return createResponseFromEntry(entry);
            } catch {
                // If in-flight failed, fall through to fetch afresh
            }
        }

        // 2. Fresh in-memory cache check
        const cached = responseCache.get(cacheKey);
        if (
            cached &&
            cached.expiresAt > now &&
            cached.status >= 200 &&
            cached.status < 300
        ) {
            return createResponseFromEntry(cached);
        }

        // 3. Initiate single-flight fetch with retries
        const fetchPromise = (async (): Promise<CacheEntry> => {
            let lastError: any = null;

            for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
                try {
                    if (attempt > 0) {
                        await sleep(RETRY_DELAY_MS * Math.pow(2, attempt - 1));
                    }

                    const response = await nativeFetch(input, init);

                    // If upstream returns 5xx server error, retry
                    if (response.status >= 500 && attempt < MAX_RETRIES) {
                        continue;
                    }

                    const text = await response.text();
                    const headersArr: [string, string][] = [];
                    response.headers.forEach((v, k) => {
                        headersArr.push([k, v]);
                    });

                    const entry: CacheEntry = {
                        body: text,
                        status: response.status,
                        statusText: response.statusText,
                        headers: headersArr,
                        timestamp: Date.now(),
                        expiresAt: Date.now() + DEFAULT_TTL_MS,
                    };

                    // Cache only successful 2xx responses
                    if (response.status >= 200 && response.status < 300) {
                        cleanCacheIfFull();
                        responseCache.set(cacheKey, entry);
                    }

                    return entry;
                } catch (err: any) {
                    lastError = err;
                    // Transient network failure (ECONNRESET, ETIMEDOUT, socket hang up) -> retry
                    if (attempt < MAX_RETRIES) {
                        continue;
                    }
                }
            }

            // If all retries failed, fallback to stale cache if available to prevent empty shells
            if (cached && cached.status >= 200 && cached.status < 300) {
                console.warn(
                    `[ResilientFetch] CMS degraded for ${url.substring(0, 80)}... Serving stale cache.`
                );
                return cached;
            }

            throw lastError || new Error(`Failed to fetch ${url}`);
        })();

        inFlightRequests.set(cacheKey, fetchPromise);

        try {
            const entry = await fetchPromise;
            return createResponseFromEntry(entry);
        } finally {
            inFlightRequests.delete(cacheKey);
        }
    };

    console.log(
        "[ResilientFetch] CMS In-Flight Deduplication & High-Concurrency Resiliency active."
    );
}

// Auto-activate resilient fetch globally on the server runtime
installResilientFetch();
