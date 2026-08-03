import { getPlacementOverview } from "@/lib/api/placement";
import BridgingAcademia from "./components/BridgingAcademia";
import CDT from "./components/CDT";
import ContactEnquiries from "./components/ContactEnquiries";
import HeroSection from "./components/HeroSection";
import PlacementHighlight from "./components/PlacementHighlight";
import { PlacementPolicy } from "./components/PlacementPolicy";
import YourPathsuccess from "./components/YourPathsuccess";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import { createBreadcrumbSchema, createPlacementOverviewSchema } from "@/lib/api/common";
import Script from "next/script";

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

  const placementOverviewSchema = createPlacementOverviewSchema({
    name: "Placements Overview | K.R. Mangalam University",
    url: "https://www.krmangalam.edu.in/placement/overview",
    description:
      "Explore placement statistics, recruiters, salary packages, internships, and career support at K.R. Mangalam University.",
    websiteName: "K.R. Mangalam University",
    websiteUrl: "https://www.krmangalam.edu.in",
  });

  const placementBreadcrumbSchema = createBreadcrumbSchema([
    {
      name: "Home",
      url: "https://www.krmangalam.edu.in/",
    },
    {
      name: "Placement overview",
      url: "https://www.krmangalam.edu.in/placement/overview",
    },
  ]);

  return (
    <>
      {placementOverviewSchema && (
        <Script
          id="placement-overview-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: placementOverviewSchema }}
        />
      )}
      {placementBreadcrumbSchema && (
        <Script
          id="placement-breadcrumb-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: placementBreadcrumbSchema }}
        />
      )}

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
