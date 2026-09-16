import { homeAltConfig } from "./homeAltConfig";

/**
 * Clean and match key or url within homeAltConfig.urlMap
 */
export function resolveHomeUrlMap(
    keyOrUrl?: string | null
): string | undefined {
    if (!keyOrUrl) return undefined;
    const clean = keyOrUrl.split("?")[0].trim();

    // 1. Direct match in urlMap
    if (homeAltConfig.urlMap[clean]) {
        return homeAltConfig.urlMap[clean];
    }

    // 2. Substring match in urlMap keys
    for (const [pattern, alt] of Object.entries(homeAltConfig.urlMap)) {
        if (clean.includes(pattern) || pattern.includes(clean)) {
            return alt;
        }
    }

    return undefined;
}

/**
 * Generic Home Alt Resolver
 */
export function resolveHomeAlt(
    keyOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!keyOrUrl) return fallback;
    const mapped = resolveHomeUrlMap(keyOrUrl);
    if (mapped) return mapped;
    return fallback;
}

/**
 * Recruiter Logo Alt Resolver
 */
export function resolveHomeRecruiterAlt(
    companyName?: string | null,
    logoUrlOrFallback?: string | null,
    fallback: string = ""
): string {
    const finalFallback =
        fallback ||
        (logoUrlOrFallback &&
        !logoUrlOrFallback.includes("/") &&
        !logoUrlOrFallback.includes(".")
            ? logoUrlOrFallback
            : `${companyName || "Company"} — KRMU recruiter logo`);

    if (logoUrlOrFallback) {
        const fromLogoMap = resolveHomeUrlMap(logoUrlOrFallback);
        if (fromLogoMap) return fromLogoMap;
    }

    if (companyName) {
        const fromNameMap = resolveHomeUrlMap(companyName);
        if (fromNameMap) return fromNameMap;

        const lower = companyName.toLowerCase().trim();
        for (const [company, alt] of Object.entries(homeAltConfig.recruiters)) {
            const compLower = company.toLowerCase();
            if (
                compLower === lower ||
                lower.includes(compLower) ||
                compLower.includes(lower)
            ) {
                return alt;
            }
        }
    }

    return finalFallback;
}

/**
 * Vibrant Events Alt Resolver
 */
export function resolveHomeEventAlt(
    titleOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!titleOrUrl) return fallback;

    const fromUrlMap = resolveHomeUrlMap(titleOrUrl);
    if (fromUrlMap) return fromUrlMap;

    const lower = titleOrUrl.toLowerCase().trim();

    for (const [event, alt] of Object.entries(homeAltConfig.vibrantEvents)) {
        const evLower = event.toLowerCase();
        if (
            evLower === lower ||
            lower.includes(evLower) ||
            evLower.includes(lower)
        ) {
            return alt;
        }
    }

    return fallback || `Campus event — ${titleOrUrl} at KRMU`;
}

/**
 * Infrastructure & Facilities Alt Resolver
 */
export function resolveHomeFacilityAlt(
    nameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!nameOrUrl) return fallback;
    const fromUrlMap = resolveHomeUrlMap(nameOrUrl);
    if (fromUrlMap) return fromUrlMap;
    return (
        homeAltConfig.facilities.banner ||
        fallback ||
        "State-of-the-art infrastructure and facilities at K.R. Mangalam University"
    );
}

/**
 * Clubs & Societies Alt Resolver
 */
export function resolveHomeClubAlt(
    titleOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!titleOrUrl) return fallback;

    const fromUrlMap = resolveHomeUrlMap(titleOrUrl);
    if (fromUrlMap) return fromUrlMap;

    const lower = titleOrUrl.toLowerCase().trim();

    for (const [club, alt] of Object.entries(homeAltConfig.clubsAndSocieties)) {
        const clubLower = club.toLowerCase();
        if (
            clubLower === lower ||
            lower.includes(clubLower) ||
            clubLower.includes(lower)
        ) {
            return alt;
        }
    }

    return fallback || `KRMU student club/society activity — ${titleOrUrl}`;
}

/**
 * Leading-Edge Research Alt Resolver
 */
export function resolveHomeResearchAlt(
    nameOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!nameOrUrl) return fallback;
    const fromUrlMap = resolveHomeUrlMap(nameOrUrl);
    if (fromUrlMap) return fromUrlMap;
    return (
        homeAltConfig.research.banner ||
        fallback ||
        "Leading-edge research and innovation at K.R. Mangalam University"
    );
}

/**
 * Global Partner University Alt Resolver
 */
export function resolveHomePartnerAlt(
    partnerName?: string | null,
    logoUrlOrFallback?: string | null,
    fallback: string = ""
): string {
    const finalFallback =
        fallback ||
        (logoUrlOrFallback &&
        !logoUrlOrFallback.includes("/") &&
        !logoUrlOrFallback.includes(".")
            ? logoUrlOrFallback
            : `${partnerName || "Partner"} — KRMU global partner university`);

    if (logoUrlOrFallback) {
        const fromLogoMap = resolveHomeUrlMap(logoUrlOrFallback);
        if (fromLogoMap) return fromLogoMap;
    }

    if (partnerName) {
        const fromNameMap = resolveHomeUrlMap(partnerName);
        if (fromNameMap) return fromNameMap;

        const lower = partnerName.toLowerCase().trim();
        for (const [partner, alt] of Object.entries(
            homeAltConfig.globalPartners
        )) {
            const partnerLower = partner.toLowerCase();
            if (
                partnerLower === lower ||
                lower.includes(partnerLower) ||
                partnerLower.includes(lower)
            ) {
                return alt;
            }
        }
    }

    return finalFallback;
}

/**
 * Global Footer Alt Resolver
 */
export function resolveHomeFooterAlt(
    identifierOrUrl?: string | null,
    fallback: string = ""
): string {
    if (!identifierOrUrl) return fallback;

    const fromUrlMap = resolveHomeUrlMap(identifierOrUrl);
    if (fromUrlMap) return fromUrlMap;

    const lower = identifierOrUrl.toLowerCase().trim();

    if (lower.includes("face")) {
        return homeAltConfig.globalFooter.facebook;
    }
    if (lower.includes("insta")) {
        return homeAltConfig.globalFooter.instagram;
    }
    if (lower.includes("youtube") || lower.includes("yt")) {
        return homeAltConfig.globalFooter.youtube;
    }
    if (lower.includes("linkedin")) {
        return homeAltConfig.globalFooter.linkedin;
    }
    if (lower.includes("footer_logos") || lower.includes("accredit")) {
        return homeAltConfig.globalFooter.footerAccreditationLogos;
    }
    if (lower.includes("loc")) {
        return homeAltConfig.globalFooter.locationIcon;
    }
    if (lower.includes("mail") || lower.includes("envelope")) {
        return homeAltConfig.globalFooter.envelopeIcon;
    }
    if (lower.includes("phone") || lower.includes("call")) {
        return homeAltConfig.globalFooter.phoneIcon;
    }
    if (lower.includes("about") || lower.includes("image_3")) {
        return homeAltConfig.globalFooter.aboutUsThumbnail;
    }

    return fallback;
}

/**
 * Topbar Social Alt Resolver
 */
export function resolveHomeTopbarSocialAlt(
    identifierOrUrl?: string | null,
    fallback: string = "topbarsocial links"
): string {
    if (!identifierOrUrl) return fallback;

    const fromUrlMap = resolveHomeUrlMap(identifierOrUrl);
    if (fromUrlMap) return fromUrlMap;

    const lower = identifierOrUrl.toLowerCase().trim();

    if (lower.includes("whatsapp")) {
        return homeAltConfig.topbarSocial.whatsapp;
    }
    if (lower.includes("phone") || lower.includes("call")) {
        return homeAltConfig.topbarSocial.phone;
    }
    if (lower.includes("facebook") || lower.includes("fb")) {
        return homeAltConfig.topbarSocial.facebook;
    }
    if (lower.includes("linkedin")) {
        return homeAltConfig.topbarSocial.linkedin;
    }
    if (lower.includes("insta")) {
        return homeAltConfig.topbarSocial.instagram;
    }
    if (lower.includes("youtube") || lower.includes("yt")) {
        return homeAltConfig.topbarSocial.youtube;
    }

    return fallback;
}

/**
 * Student Testimonial Alt Resolver
 */
export function resolveHomeTestimonialAlt(
    studentName?: string | null,
    imageUrlOrFallback?: string | null,
    fallback: string = ""
): string {
    const finalFallback =
        fallback ||
        (imageUrlOrFallback &&
        !imageUrlOrFallback.includes("/") &&
        !imageUrlOrFallback.includes(".")
            ? imageUrlOrFallback
            : `${studentName || "Student"} student testimonial at KRMU`);

    if (imageUrlOrFallback) {
        const fromImageMap = resolveHomeUrlMap(imageUrlOrFallback);
        if (fromImageMap) return fromImageMap;
    }

    if (studentName) {
        const fromNameMap = resolveHomeUrlMap(studentName);
        if (fromNameMap) return fromNameMap;

        const lower = studentName.toLowerCase().trim();
        for (const [name, alt] of Object.entries(homeAltConfig.testimonials)) {
            const nameLower = name.toLowerCase();
            if (
                nameLower === lower ||
                lower.includes(nameLower) ||
                nameLower.includes(lower)
            ) {
                return alt;
            }
        }
    }

    return finalFallback;
}
