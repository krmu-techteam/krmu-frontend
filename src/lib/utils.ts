import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Normalizes an internal KRMU main website URL (live, beta, localhost, etc.) to a relative path.
 * Keeps external URLs, sub-apps (alumni, lms, foundry, etc.), and CMS asset URLs unchanged.
 * Preserves query parameters and hashes.
 *
 * Examples:
 * - https://www.krmangalam.edu.in/policies-on-no-poverty -> /policies-on-no-poverty
 * - https://beta.krmangalam.edu.in/policies-on-no-poverty?tab=1#sec -> /policies-on-no-poverty?tab=1#sec
 * - http://localhost:3000/sdg-1 -> /sdg-1
 * - https://google.com -> https://google.com (unchanged)
 */
export function formatInternalLink(url: string | null | undefined): string {
    if (!url || typeof url !== "string") return url || "";

    const trimmed = url.trim();
    if (!trimmed) return "";

    // Return as-is if already relative or uses non-HTTP protocol
    if (
        trimmed.startsWith("/") ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("tel:") ||
        trimmed.startsWith("mailto:") ||
        trimmed.startsWith("javascript:")
    ) {
        return trimmed;
    }

    try {
        if (
            trimmed.startsWith("http://") ||
            trimmed.startsWith("https://") ||
            trimmed.startsWith("//")
        ) {
            const fullUrl = trimmed.startsWith("//")
                ? `https:${trimmed}`
                : trimmed;
            const parsedUrl = new URL(fullUrl);
            const hostname = parsedUrl.hostname.toLowerCase();

            // External subdomains / backends that should remain external absolute URLs
            const externalSubdomains = [
                "admissions.",
                "alumni.",
                "foundry.",
                "lms.",
                "wp.",
                "techapi.",
                "api.",
                "erp.",
            ];

            const isExternalSubdomain = externalSubdomains.some((sub) =>
                hostname.startsWith(sub)
            );

            // Check if domain belongs to main KRMU site (www, beta, root, localhost)
            const isInternalDomain =
                !isExternalSubdomain &&
                (hostname === "krmangalam.edu.in" ||
                    hostname.endsWith(".krmangalam.edu.in") ||
                    hostname === "localhost" ||
                    hostname === "127.0.0.1" ||
                    hostname.endsWith(".localhost"));

            if (isInternalDomain) {
                const path = parsedUrl.pathname || "/";
                return `${path}${parsedUrl.search}${parsedUrl.hash}`;
            }
        }
    } catch {
        return trimmed;
    }

    return trimmed;
}

/**
 * Transforms href attributes in HTML content so internal KRMU URLs become relative paths.
 */
export function transformInternalLinksInHtml(
    html: string | null | undefined
): string {
    if (!html || typeof html !== "string") return html || "";

    return html.replace(/href=(["'])(.*?)\1/gi, (match, quote, hrefValue) => {
        const formatted = formatInternalLink(hrefValue);
        return `href=${quote}${formatted}${quote}`;
    });
}

/**
 * Checks whether a URL is an external link (non-KRMU or external subdomain).
 */
export function isExternalUrl(url: string | null | undefined): boolean {
    if (!url) return false;
    const formatted = formatInternalLink(url);
    return (
        formatted.startsWith("http://") ||
        formatted.startsWith("https://") ||
        formatted.startsWith("//")
    );
}
