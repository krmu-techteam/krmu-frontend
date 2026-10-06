import GalleryPageHero from "./GalleryPageHero";
import GalleryGridCards from "./GalleryGridCards";
import { getImageGalleryPageData } from "@/lib/api/image-gallery";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await folderRouteSEO("gallery-image");
    const seo = seoData[0];

    const shareImageUrl = seo?.shareImg?.url
        ? `${STRAPI_URL}${seo?.shareImg?.url}`
        : undefined;

    const defaultDesc =
        "Discover vibrant campus life through the K.R. Mangalam University gallery with images from events, academic activities, and student celebrations.";

    // ✅ Fallback if SEO is missing
    if (!seo) {
        return {
            title: "Photo Gallery | K.R. Mangalam University",
            description: defaultDesc,
            robots: {
                index: true,
                follow: true,
            },
        };
    }

    const description = seo?.metaDescription || defaultDesc;

    return {
        title: seo?.title || "Photo Gallery | K.R. Mangalam University",
        description,
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
    const galleryPageData = await getImageGalleryPageData();

    return (
        <>
            <GalleryPageHero
                title={galleryPageData?.title}
                bgimage={galleryPageData?.bgimage}
            />
            <GalleryGridCards />
        </>
    );
};

export default page;
