import { getCareerPageData } from "@/lib/api/careers/career";
import {
    CareerCurrentOpeningSection,
    CareerHeroSection,
    CareerJobListings,
    CareerSubmitResume,
} from "@/presentation/careers/careers/sections";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { KekaJobEmbed } from "@/presentation/careers/careers/components";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("careers");
    const seo = seoData[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : undefined;

    // ✅ Fallback if SEO is missing
    if (!seo) {
        return {
            title: "K.R. Mangalam University",
            description: "",
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    return {
        title: seo?.title || "K.R. Mangalam University",
        description: seo?.metaDescription || "",
        keywords: seo?.keyword || "",
        alternates: {
            canonical: seo?.canonicalUrl || "",
        },
        robots: {
            index: true,
            follow: true,
        },

        // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
        openGraph: {
            title: seo?.title || "K.R. Mangalam University",
            description: seo?.metaDescription || "",
            url: seo?.canonicalUrl || "",
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
            title: seo?.title || "K.R. Mangalam University",
            description: seo?.metaDescription || "",
            images: shareImageUrl ? [shareImageUrl] : [],
        },
    };
}

const page = async () => {
    const careerPageData = await getCareerPageData();

    const openings = careerPageData?.openings;

    return (
        <>
            <main className="overflow-hidden text-white">
                <CareerHeroSection />
                <CareerCurrentOpeningSection />
                {/* Keka Job Listings */}
                <KekaJobEmbed />
                <CareerJobListings />
                <CareerSubmitResume openings={openings} />
            </main>
        </>
    );
};

export default page;
