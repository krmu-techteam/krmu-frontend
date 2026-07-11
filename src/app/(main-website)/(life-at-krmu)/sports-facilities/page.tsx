import { getSportAndFacilityPageData } from "@/lib/api/sport-facility";
import SportEventsAndTournament from "./comp/SportEventsAndTournament";
import SportsHero from "./comp/SportsHero";
import SportsIntro from "./comp/SportsIntro";
import SportsIndoorOutDoor from "./comp/SportsIndoorOutDoor";




import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("sportsfacilities");
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
  const sportFacPageData = await getSportAndFacilityPageData();

  const indoorOutdoorSports = sportFacPageData?.sport_facility_grid;

  return (
    <>
      <SportsHero />
      <SportsIntro />
      {indoorOutdoorSports && (
        <SportsIndoorOutDoor data={indoorOutdoorSports} />
      )}
      <SportEventsAndTournament />
    </>
  );
};

export default page;
