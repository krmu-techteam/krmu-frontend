import VirtualSchedule from "./comp/VirtualSchedule";
import VirtualTour from "./comp/VirtualTour";
import VirtualTourHero from "./comp/VirtualTourHero";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("virtualtour");
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

const page = () => {
    return (
        <>
            {/* Hero Section Banner (400px min-height with linear gradient) */}
            <section
                style={{
                    background:
                        "linear-gradient(108.76deg, #061623 37.33%, #00345F 92.03%)",
                }}
                className="relative pt-[140px] pb-12 lg:pt-[160px] min-h-[400px] flex items-center justify-center px-4"
            >
                <div className="max-w-[1664px] mx-auto w-full">
                    <VirtualTourHero />
                </div>
            </section>

            {/* 360° Virtual Tour Iframe below Hero */}
            <div className="w-full">
                <VirtualTour />
            </div>

            {/* Virtual Schedule Section */}
            <VirtualSchedule />
        </>
    );
};

export default page;
