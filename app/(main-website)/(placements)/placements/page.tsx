import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { getPlacementOverview } from "@/lib/api/placement";
import HeroSection from "../placement/components/HeroSection";
import PlacementHighlight from "../placement/components/PlacementHighlight";
import YourPathsuccess from "../placement/components/YourPathsuccess";
import BridgingAcademia from "../placement/components/BridgingAcademia";
import { PlacementPolicy } from "../placement/components/PlacementPolicy";
import CDT from "../placement/components/CDT";
import ContactEnquiries from "../placement/components/ContactEnquiries";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("placementoverview");
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
  const placementOverview = await getPlacementOverview();

  const overviewHero = placementOverview?.placementsoverviewcontainer.find(
    (component) =>
      component?.__component === "placement-overview.placement-hero",
  );

  const overviewHightlight =
    placementOverview?.placementsoverviewcontainer.find(
      (component) =>
        component?.__component === "placement-overview.placement-highlight",
    );

  return (
    <>
      {overviewHero && (
        <HeroSection
          title={overviewHero?.title}
          subtitle={overviewHero?.subtitle}
          overviewvideo={overviewHero?.overviewvideo}
          overviewcounter={overviewHero?.overviewcounter}
        />
      )}
      {overviewHightlight && (
        <PlacementHighlight
          heading={overviewHightlight?.heading}
          slideImages={overviewHightlight?.placementhighlights}
          btn={overviewHightlight?.highlightbtn}
        />
      )}
      <YourPathsuccess />
      <BridgingAcademia />
      <PlacementPolicy />
      <CDT />
      <ContactEnquiries />
    </>
  );
};

export default page;
