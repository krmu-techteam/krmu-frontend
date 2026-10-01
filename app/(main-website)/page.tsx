import HomePage from "../HomePage";
import { Metadata } from "next";
import { STRAPI_URL } from "../constant";
import { HomePageSEO } from "@/lib/api/website-seo";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await HomePageSEO();
  const seo = seoData?.seofields;

  const shareImageUrl = seo?.shareImage?.url
    ? `${STRAPI_URL}${seo?.shareImage?.url}`
    : undefined;

  return {
    title: seo?.metaTitle || "K.R. Mangalam University",
    description: seo?.metaDescription || "",
    keywords: seo?.metaKeyword || "",
    alternates: {
      canonical: seo?.canonical || "",
    },
    robots: {
      index: false,
      follow: false,
    },

    // ✅ Open Graph (Facebook, LinkedIn, WhatsApp)
    openGraph: {
      title: seo?.metaTitle || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      url: seo?.canonical || "",
      siteName: "K.R. Mangalam University",
      images: shareImageUrl
        ? [
            {
              url: shareImageUrl,
              width: 1200,
              height: 630,
              alt: seo?.metaTitle || "K.R. Mangalam University",
            },
          ]
        : [],
      type: "website",
    },

    // ✅ Twitter Card
    twitter: {
      card: "summary_large_image",
      title: seo?.metaTitle || "K.R. Mangalam University",
      description: seo?.metaDescription || "",
      images: shareImageUrl ? [shareImageUrl] : [],
    },
  };
}

export default function Page() {
  return <HomePage />;
}
