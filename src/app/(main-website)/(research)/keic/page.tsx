import { Metadata } from "next";
import KEICButtons from "./comp/KEICButtons";
import KEICEvents from "./comp/KEICEvents";
import KEICFacilities from "./comp/KEICFacilities";
import KEICGovt from "./comp/KEICGovt";
import KEICHero from "./comp/KEICHero";
import KEICInauguration from "./comp/KEICInauguration";
import KEICKeyInitiative from "./comp/KEICKeyInitiative";
import KEICMembers from "./comp/KEICMembers";
import KEICPastEvents from "./comp/KEICPastEvents";
import KEICProgOffered from "./comp/KEICProgOffered";
import KEICRanking from "./comp/KEICRanking";
import KEICTransistion from "./comp/KEICTransistion";
import KEICVisionMission from "./comp/KEICVisionMission";
import KEICWelcomeMessage from "./comp/KEICWelcomeMessage";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("keic");
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
      <KEICHero />
      <KEICWelcomeMessage />
      <KEICVisionMission />
      <KEICProgOffered />
      <KEICKeyInitiative />
      <KEICEvents />
      <KEICPastEvents />
      <KEICRanking />
      <KEICFacilities />
      <KEICGovt />
      <KEICInauguration />
      <KEICMembers />
      <KEICTransistion />
      <KEICButtons />
    </>
  );
};

export default page;
