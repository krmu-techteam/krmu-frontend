import Image from "next/image";
import LifeKRMUHero from "./comp/LifeKRMUHero";
import LifeKRMUContent from "./comp/LifeKRMUContent";
import { LifeKRMUVideoGrid } from "./comp/LifeKRMUVideoGrid";
import LifeKRMUInfra from "./comp/LifeKRMUInfra";
import LifeKRMUDynamic from "./comp/LifeKRMUDynamic";
import LifeKRMUPeek from "./comp/LifeKRMUPeek";
import LifeKRMUTabs from "./comp/LifeKRMUTabs";




import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("life-at-krmu");
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
      <LifeKRMUHero />
      <Image
        src="/life-at-krmu/why-krmu.webp"
        width={1910}
        height={750}
        alt="Big Image"
        className="w-full h-full"
      />
      <LifeKRMUContent />
      <LifeKRMUVideoGrid />
      <LifeKRMUInfra />
      <LifeKRMUDynamic />
      <LifeKRMUTabs />
      <LifeKRMUPeek />
    </>
  );
};

export default page;
