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

export async function generateMetadata(): Promise<Metadata> {
    let seoData = await folderRouteSEO("placement");
    if (!seoData || !seoData.length) {
        seoData = await folderRouteSEO("placementoverview");
    }
    const seo = seoData?.[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : undefined;

    // ✅ Fallback if SEO is missing
    if (!seo) {
        return {
            title: "Placements - K.R. Mangalam University",
            description:
                "Explore career opportunities, recruiters, and placement records at K.R. Mangalam University.",
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    return {
        title: seo?.title || "Placements - K.R. Mangalam University",
        description: seo?.metaDescription || "",
        keywords: seo?.keyword || "",
        alternates: {
            canonical:
                seo?.canonicalUrl || "https://www.krmangalam.edu.in/placement",
        },
        robots: {
            index: true,
            follow: true,
        },

        // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
        openGraph: {
            title: seo?.title || "Placements - K.R. Mangalam University",
            description: seo?.metaDescription || "",
            url: seo?.canonicalUrl || "https://www.krmangalam.edu.in/placement",
            siteName: "K.R. Mangalam University",
            images: shareImageUrl
                ? [
                      {
                          url: shareImageUrl,
                          width: 1200,
                          height: 630,
                          alt: seo?.title || "K.R. Mangalam University",
                      },
                  ]
                : [],
            type: "website",
        },

        // ✅ Twitter Card
        twitter: {
            card: "summary_large_image",
            title: seo?.title || "Placements - K.R. Mangalam University",
            description: seo?.metaDescription || "",
            images: shareImageUrl ? [shareImageUrl] : [],
        },
    };
}

const page = async () => {
    const placementOverview = await getPlacementOverview();

    const overviewHero = placementOverview?.placementsoverviewcontainer?.find(
        (component) =>
            component?.__component === "placement-overview.placement-hero"
    );

    const overviewHightlight =
        placementOverview?.placementsoverviewcontainer?.find(
            (component) =>
                component?.__component ===
                "placement-overview.placement-highlight"
        );

    return (
        <>
            {overviewHero && (
                <HeroSection
                    title={overviewHero?.title}
                    subtitle={overviewHero?.subtitle}
                    overviewvideo={overviewHero?.overviewvideo}
                    overviewcounter={overviewHero?.overviewcounter}
                />
            )}
            {overviewHightlight && (
                <HighlightSection
                    heading={overviewHightlight?.heading}
                    slideImages={overviewHightlight?.placementhighlights}
                    btn={overviewHightlight?.highlightbtn}
                />
            )}
            <YourPathsuccessSection />
            <BridgingAcademiaSection />
            <PolicySection />
            <CareerDevelopmentTeamSection />
            <ContactEnquiriesSection />
        </>
    );
};

export default page;
