import { getCareerPageData } from "@/lib/api/careers/career";
import {
    CareerCurrentOpeningSection,
    CareerHeroSection,
    CareerJobListings,
    CareerSubmitResume,
} from "@/presentation/careers/careers/sections";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { DEFAULT_OG_IMAGE, STRAPI_URL } from "@/app/constant";
import { KekaJobEmbed } from "@/presentation/careers/careers/components";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("careers");
    const seo = seoData?.[0];

    const title =
        seo?.title || "Careers at K.R. Mangalam University – Join Our Team";
    const description =
        seo?.metaDescription ||
        "Apply for careers at K.R. Mangalam University where passionate professionals contribute to education, research, and a vibrant academic community.";
    const canonical =
        seo?.canonicalUrl || "https://www.krmangalam.edu.in/careers";
    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : DEFAULT_OG_IMAGE;

    return {
        title,
        description,
        keywords:
            seo?.keyword ||
            "Careers, K.R. Mangalam University, Faculty Jobs, Openings, Join Us",
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
            description,
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
            description,
            images: [shareImageUrl],
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
