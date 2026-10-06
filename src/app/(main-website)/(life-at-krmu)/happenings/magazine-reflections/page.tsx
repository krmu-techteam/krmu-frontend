import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import {
    EditorialSection,
    HeroSection,
    MagazineCardsSection,
} from "@/presentation/life-at-krmu/magzine-reflections/sections";
import {
    getReflectionService,
    IReflectionService,
} from "@/features/life-at-krmu/magzine-reflections";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = (await folderRouteSEO("magazine-reflections"))?.length
        ? await folderRouteSEO("magazine-reflections")
        : await folderRouteSEO("magzine-reflections");
    const seo = seoData?.[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : undefined;

    const defaultDesc =
        "Get the latest edition of Reflections by K.R. Mangalam University with inspiring articles, student features, events, and campus experiences.";

    // ✅ Fallback if SEO is missing
    if (!seo) {
        return {
            title: "Reflections Magazine - K.R. Mangalam University",
            description: defaultDesc,
            alternates: {
                canonical:
                    "https://www.krmangalam.edu.in/happenings/magazine-reflections",
            },
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    const description = seo?.metaDescription || defaultDesc;

    return {
        title: seo?.title || "Reflections Magazine - K.R. Mangalam University",
        description,
        keywords: seo?.keyword || "",
        alternates: {
            canonical:
                seo?.canonicalUrl?.replace(
                    "magzine-reflections",
                    "magazine-reflections"
                ) ||
                "https://www.krmangalam.edu.in/happenings/magazine-reflections",
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
    const reflectionService: IReflectionService = getReflectionService();
    const magazineData = await reflectionService.getData();

    return (
        <>
            <HeroSection
                title={magazineData?.title}
                bgImage={magazineData?.bgimage}
            />
            <EditorialSection content={magazineData?.reflectioncontent} />
            <MagazineCardsSection magazinecards={magazineData?.magazinecard} />
        </>
    );
};

export default page;
