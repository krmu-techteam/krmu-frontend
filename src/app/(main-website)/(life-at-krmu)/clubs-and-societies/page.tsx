import { getClubAndSocitiesData } from "@/lib/api/club-and-societies";
import { ClubAndSocitiesHero } from "./comp/ClubAndSocitiesHero";
import ClubAndSocietiesInfo from "./comp/ClubAndSocietiesInfo";
import ClubAndSocietiesAcc from "./comp/ClubAndSocietiesAcc";




import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("clubs-and-societies");
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
  const clubsData = await getClubAndSocitiesData();

  return (
    <>
      <ClubAndSocitiesHero
        title={clubsData?.title}
        featured_image_url={clubsData?.featured_image?.url}
      />
      <ClubAndSocietiesInfo content={clubsData?.desc} />
      <ClubAndSocietiesAcc accordionsData={clubsData?.clubsaccordions} />
    </>
  );
};

export default page;
