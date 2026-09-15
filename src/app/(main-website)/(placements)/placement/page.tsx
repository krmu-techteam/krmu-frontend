import { getPlacementOverview } from "@/lib/api/placement";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";

import {
    BridgingAcademiaSection,
    CareerDevelopmentTeamSection,
    ContactEnquiriesSection,
    HeroSection,
    HighlightSection,
    PolicySection,
    YourPathsuccessSection,
} from "@/presentation/placement/overview/sections";

const PLACEMENT_DESCRIPTION =
    "Explore K.R. Mangalam University placements with 800+ recruiters, internships, career training, and placement assistance to build successful careers.";
const PLACEMENT_CANONICAL = "https://www.krmangalam.edu.in/placement";
const DEFAULT_SHARE_IMG =
    "https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/fav_457c1acb7e.png";

const DEFAULT_HERO = {
    title: "100% Placement Assistance with 800+ Top Recruiters",
    subtitle: "Embark on Your Professional Journey",
    overviewvideo:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/f3hA3WhmYN8" title="YouTube video player" allowfullscreen></iframe>',
    overviewcounter: [
        { id: 1, title: "56.6 LPA", subtitle: "Highest Package" },
        { id: 2, title: "800+", subtitle: "Campus Recruiters" },
        { id: 3, title: "18K+", subtitle: "Alumni Base" },
    ],
};

const DEFAULT_HIGHLIGHT = {
    heading: "Placement Highlights",
    placementhighlights: [],
    highlightbtn: {
        id: 1,
        buttontext: "Know More",
        buttonlink: "/placement-highlights",
    },
};

export async function generateMetadata(): Promise<Metadata> {
    let seoData = await folderRouteSEO("placement");
    if (!seoData || !seoData.length) {
        seoData = await folderRouteSEO("placementoverview");
    }
    const seo = seoData?.[0];

    const title = seo?.title || "Placements - K.R. Mangalam University";
    const canonical = seo?.canonicalUrl || PLACEMENT_CANONICAL;
    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : DEFAULT_SHARE_IMG;

    return {
        title,
        description: PLACEMENT_DESCRIPTION,
        keywords:
            seo?.keyword ||
            "Placements, K.R. Mangalam University, Campus Placement, Recruiters, Highest Package, Career Development Centre",
        alternates: {
            canonical,
        },
        robots: {
            index: true,
            follow: true,
        },

        // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
        openGraph: {
            title,
            description: PLACEMENT_DESCRIPTION,
            url: canonical,
            siteName: "K.R. Mangalam University",
            locale: "en_IN",
            images: [
                {
                    url: shareImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
            type: "website",
        },

        // ✅ Twitter Card
        twitter: {
            card: "summary_large_image",
            title,
            description: PLACEMENT_DESCRIPTION,
            images: [shareImageUrl],
        },
    };
}

const page = async () => {
    let placementOverview = null;
    try {
        placementOverview = await getPlacementOverview();
    } catch {
        // Fallback to static defaults
    }

    const overviewHero =
        placementOverview?.placementsoverviewcontainer?.find(
            (component) =>
                component?.__component === "placement-overview.placement-hero"
        ) || DEFAULT_HERO;

    const overviewHightlight =
        placementOverview?.placementsoverviewcontainer?.find(
            (component) =>
                component?.__component ===
                "placement-overview.placement-highlight"
        ) || DEFAULT_HIGHLIGHT;

    return (
        <>
            <HeroSection
                title={overviewHero?.title}
                subtitle={overviewHero?.subtitle}
                overviewvideo={overviewHero?.overviewvideo}
                overviewcounter={overviewHero?.overviewcounter}
            />
            <HighlightSection
                heading={overviewHightlight?.heading}
                slideImages={overviewHightlight?.placementhighlights}
                btn={overviewHightlight?.highlightbtn}
            />
            <YourPathsuccessSection />
            <BridgingAcademiaSection />
            <PolicySection />
            <CareerDevelopmentTeamSection />
            <ContactEnquiriesSection />
        </>
    );
};

export default page;
