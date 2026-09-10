import { SchoolAltConfig } from "./types";
import { soetAltConfig } from "./schools/soet";
import { somcAltConfig } from "./schools/somc";
import { solsAltConfig } from "./schools/sols";
import { smasAltConfig } from "./schools/smas";
import { sprsAltConfig } from "./schools/sprs";
import { soasAltConfig } from "./schools/soas";
import { soedAltConfig } from "./schools/soed";
import { sohmctAltConfig } from "./schools/sohmct";
import { semceAltConfig } from "./schools/semce";
import { soadAltConfig } from "./schools/soad";
import { sbasAltConfig } from "./schools/sbas";
import { solaAltConfig } from "./schools/sola";

export const allSchoolConfigs: SchoolAltConfig[] = [
    soetAltConfig,
    somcAltConfig,
    solsAltConfig,
    smasAltConfig,
    sprsAltConfig,
    soasAltConfig,
    soedAltConfig,
    sohmctAltConfig,
    semceAltConfig,
    soadAltConfig,
    sbasAltConfig,
    solaAltConfig,
];

// Slug-to-config map
export const schoolAltMap: Record<string, SchoolAltConfig> = {};

for (const config of allSchoolConfigs) {
    for (const s of config.slugs) {
        schoolAltMap[s.toLowerCase().trim()] = config;
    }
}

/**
 * Normalizes a school slug to find matching configuration
 */
export function getSchoolConfig(slug?: string): SchoolAltConfig | undefined {
    if (!slug) return soetAltConfig; // Default fallback to SOET when slug is not provided
    const clean = slug
        .toLowerCase()
        .trim()
        .replace(/^\/+|\/+$/g, "");
    return (
        schoolAltMap[clean] ||
        allSchoolConfigs.find((c) =>
            c.slugs.some((s) => clean.includes(s) || s.includes(clean))
        ) ||
        soetAltConfig
    );
}

/**
 * Generic section-level lookup for a school
 */
export function getSchoolAlt(
    slug: string | undefined,
    section: keyof Omit<SchoolAltConfig, "schoolName" | "slugs">,
    key?: string | number,
    fallback: string = ""
): string {
    const config = getSchoolConfig(slug);
    if (!config) return fallback;

    // Direct urlMap lookup first if key matches an image filename or URL
    if (key && typeof key === "string" && config.urlMap) {
        const cleanedKey = key.split("?")[0];
        for (const [urlPattern, alt] of Object.entries(config.urlMap)) {
            if (cleanedKey.includes(urlPattern) || key.includes(urlPattern)) {
                return alt;
            }
        }
    }

    const secData = config[section];
    if (!secData) return fallback;

    if (!key) {
        if (typeof secData === "string") return secData;
        if (typeof secData === "object") {
            const firstVal = Object.values(secData)[0];
            return typeof firstVal === "string" ? firstVal : fallback;
        }
        return fallback;
    }

    // Lookup in object dictionary
    if (typeof secData === "object") {
        const record = secData as Record<string, any>;
        const strKey = String(key).trim();

        // 1. Exact match
        if (record[strKey] && typeof record[strKey] === "string") {
            return record[strKey];
        }

        // 2. Case-insensitive match
        const lowerKey = strKey.toLowerCase();
        for (const [k, v] of Object.entries(record)) {
            if (k.toLowerCase() === lowerKey && typeof v === "string") {
                return v;
            }
        }

        // 3. Substring match
        for (const [k, v] of Object.entries(record)) {
            if (
                (lowerKey.includes(k.toLowerCase()) ||
                    k.toLowerCase().includes(lowerKey)) &&
                typeof v === "string"
            ) {
                return v;
            }
        }
    }

    return fallback;
}

/**
 * Specific Resolvers for Components
 */

export function resolveHeroAlt(
    slug?: string | null,
    fallback: string = ""
): string {
    const config = getSchoolConfig(slug || undefined);
    return config?.hero?.mainHero || fallback;
}

export function resolveProgrammeIntroAlt(
    slug?: string | null,
    fallback: string = ""
): string {
    const config = getSchoolConfig(slug || undefined);
    return config?.programmeIntro?.infoGraphic || fallback;
}

export function resolveAlumniAlt(
    slug?: string | null,
    brandNameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!brandNameOrUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (brandNameOrUrl.includes(urlPart)) return alt;
            }
        }
        if (config.alumni) {
            const lower = brandNameOrUrl.toLowerCase();
            for (const [brand, alt] of Object.entries(config.alumni)) {
                if (
                    lower.includes(brand.toLowerCase()) ||
                    brand.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (brandNameOrUrl.includes(urlPart)) return alt;
            }
        }
    }

    return fallback;
}

export function resolveAdvantageAlt(
    slug?: string | null,
    cardTitle?: string | null,
    fallback: string = ""
): string {
    if (!cardTitle) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config?.advantage?.cards) {
        const lower = cardTitle.toLowerCase().trim();
        for (const [k, v] of Object.entries(config.advantage.cards)) {
            if (
                k.toLowerCase().trim() === lower ||
                lower.includes(k.toLowerCase().trim()) ||
                k.toLowerCase().trim().includes(lower)
            ) {
                return v;
            }
        }
    }
    return getSchoolAlt(slug || undefined, "advantage", cardTitle, fallback);
}

export function resolveOpenSourceAlt(
    item: "studentPhoto" | "gsocLogo",
    fallback: string = ""
): string {
    return soetAltConfig.openSourceMentorship?.[item] || fallback;
}

export function resolveKnowledgePartnerAlt(
    slug?: string | null,
    partnerNameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!partnerNameOrUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (partnerNameOrUrl.includes(urlPart)) return alt;
            }
        }
        if (config.knowledgePartners) {
            const lower = partnerNameOrUrl.toLowerCase();
            for (const [partner, alt] of Object.entries(
                config.knowledgePartners
            )) {
                if (
                    lower.includes(partner.toLowerCase()) ||
                    partner.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (partnerNameOrUrl.includes(urlPart)) return alt;
            }
        }
    }

    return fallback;
}

export function resolveTestimonialAlt(
    slug?: string | null,
    studentNameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!studentNameOrUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (studentNameOrUrl.includes(urlPart)) return alt;
            }
        }
        if (config.testimonials) {
            const lower = studentNameOrUrl.toLowerCase();
            for (const [name, alt] of Object.entries(config.testimonials)) {
                if (
                    lower.includes(name.toLowerCase()) ||
                    name.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (studentNameOrUrl.includes(urlPart)) return alt;
            }
        }
        if (c.testimonials) {
            const lower = studentNameOrUrl.toLowerCase();
            for (const [name, alt] of Object.entries(c.testimonials)) {
                if (
                    lower.includes(name.toLowerCase()) ||
                    name.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    return fallback;
}

export function resolveVideoThumbnailAlt(
    slug?: string | null,
    thumbnailUrl?: string | null,
    fallback: string = "Watch Video"
): string {
    if (!thumbnailUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config?.urlMap) {
        for (const [urlPart, alt] of Object.entries(config.urlMap)) {
            if (thumbnailUrl.includes(urlPart)) return alt;
        }
    }
    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (thumbnailUrl.includes(urlPart)) return alt;
            }
        }
    }
    return fallback;
}

export function resolvePlayIconAlt(
    slug?: string | null,
    fallback: string = "playicon"
): string {
    const config = getSchoolConfig(slug || undefined);
    if (config?.hero?.playIcon) {
        return config.hero.playIcon;
    }
    if (config?.urlMap?.["play_icon_colorful_6ca9565f28.svg"]) {
        return config.urlMap["play_icon_colorful_6ca9565f28.svg"];
    }
    return fallback;
}

export function resolveDeanAlt(
    slug?: string | null,
    deanNameOrUrl?: string | null,
    fallback: string = ""
): string {
    const config = getSchoolConfig(slug || undefined);
    if (config?.deanVision?.deanPhoto) return config.deanVision.deanPhoto;

    if (deanNameOrUrl) {
        for (const c of allSchoolConfigs) {
            if (c.urlMap) {
                for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                    if (deanNameOrUrl.includes(urlPart)) return alt;
                }
            }
        }
    }

    return (
        fallback ||
        (deanNameOrUrl ? `Dean, ${config?.schoolName || "KRMU"}` : "")
    );
}

export function resolveFacultyAlt(
    slug?: string | null,
    facultyNameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!facultyNameOrUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (facultyNameOrUrl.includes(urlPart)) return alt;
            }
        }
        if (config.faculty) {
            const lower = facultyNameOrUrl.toLowerCase();
            for (const [name, alt] of Object.entries(config.faculty)) {
                if (
                    lower.includes(name.toLowerCase()) ||
                    name.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.faculty) {
            const lower = facultyNameOrUrl.toLowerCase();
            for (const [name, alt] of Object.entries(c.faculty)) {
                if (
                    lower.includes(name.toLowerCase()) ||
                    name.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (facultyNameOrUrl.includes(urlPart)) return alt;
            }
        }
    }

    return fallback;
}

export function resolveFacilityAlt(
    slug?: string | null,
    titleOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!titleOrUrl) return fallback;
    const config = getSchoolConfig(slug || undefined);
    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (titleOrUrl.includes(urlPart)) return alt;
            }
        }
        if (config.facilities) {
            const lower = titleOrUrl.toLowerCase();
            for (const [title, alt] of Object.entries(config.facilities)) {
                if (
                    lower.includes(title.toLowerCase()) ||
                    title.toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (titleOrUrl.includes(urlPart)) return alt;
            }
        }
    }

    return fallback;
}

export function resolveJourneyStepAlt(
    slug?: string | null,
    stepNumberOrTitle?: number | string | null,
    fallback: string = ""
): string {
    if (stepNumberOrTitle === undefined || stepNumberOrTitle === null)
        return fallback;
    const config = getSchoolConfig(slug || undefined);
    const str = String(stepNumberOrTitle).trim();

    if (config) {
        if (config.urlMap) {
            for (const [urlPart, alt] of Object.entries(config.urlMap)) {
                if (str.includes(urlPart)) return alt;
            }
        }
        if (config.journeySteps) {
            if (config.journeySteps[str]) return config.journeySteps[str];

            const lower = str.toLowerCase();
            for (const [key, alt] of Object.entries(config.journeySteps)) {
                if (
                    lower.includes(String(key).toLowerCase()) ||
                    String(key).toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    for (const c of allSchoolConfigs) {
        if (c.urlMap) {
            for (const [urlPart, alt] of Object.entries(c.urlMap)) {
                if (str.includes(urlPart)) return alt;
            }
        }
        if (c.journeySteps) {
            if (c.journeySteps[str]) return c.journeySteps[str];
            const lower = str.toLowerCase();
            for (const [key, alt] of Object.entries(c.journeySteps)) {
                if (
                    lower.includes(String(key).toLowerCase()) ||
                    String(key).toLowerCase().includes(lower)
                ) {
                    return alt;
                }
            }
        }
    }

    return fallback;
}
