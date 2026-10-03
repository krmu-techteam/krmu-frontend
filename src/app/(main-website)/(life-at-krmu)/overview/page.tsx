import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { SectionsRenderer } from "@/components/common/SectionRenderer";
import {
    getOverviewService,
    IOverviewService,
    Sections,
} from "@/features/life-at-krmu/overview";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("life-at-krmu-overview");
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

    const isIncorrectPlacementTitle =
        seo?.title?.toLowerCase().includes("placement") || !seo?.title;
    const pageTitle = isIncorrectPlacementTitle
        ? "Life at KRMU Overview | K.R. Mangalam University"
        : seo.title;
    const pageDescription =
        isIncorrectPlacementTitle || !seo?.metaDescription
            ? "Experience vibrant campus life, student clubs, world-class sports facilities, hostels, and holistic student growth at K.R. Mangalam University."
            : seo.metaDescription;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: seo?.keyword || "",
        alternates: {
            canonical:
                seo?.canonicalUrl || "https://www.krmangalam.edu.in/overview",
        },
        robots: {
            index: true,
            follow: true,
        },

        // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
        openGraph: {
            title: pageTitle,
            description: pageDescription,
            url: seo?.canonicalUrl || "https://www.krmangalam.edu.in/overview",
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

const OverviewPage = async () => {
    const overviewService: IOverviewService = getOverviewService();
    const overviewData = await overviewService.getData();
    const { data } = await overviewService.getStaticData();

    return (
        <>
            <SectionsRenderer
                sections={Sections}
                data={data}
                extraProps={{ overviewData }}
            />
        </>
    );
};

export default OverviewPage;
