import { getKRMUCampusFacility } from "@/lib/api/krmu-campus-facility";
import KrmuCampusHero from "./comp/KrmuCampusHero";
import StateofTheArt from "./comp/StateofTheArt";
import LabsWorkshops from "./comp/LabsWorkshops";
import ModernClassroom from "./comp/ModernClassroom";
import RobustSeamless from "./comp/RobustSeamless";
import ComfyHostel from "./comp/ComfyHostel";
import SportsFitness from "./comp/SportsFitness";
import ResearchSupport from "./comp/ResearchSupport";
import AestheticsCafeteria from "./comp/AestheticsCafeteria";





import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("krmu-campus-facilities");
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
  const pageData = await getKRMUCampusFacility();

  const stateOfTheArt = pageData?.state_of_art;
  const labsWorkshop = pageData?.lab_workshops;
  const modernClassroom = pageData?.modern_classroom;
  const ComfyClassroom = pageData?.comfy_hostel;
  const sportsFitness = pageData?.sport_fitness;
  const researchSupport = pageData?.research_support;
  const aestheticsCafeteria = pageData?.aesthetics_cafeteria;

  return (
    <>
      <KrmuCampusHero />
      {stateOfTheArt && <StateofTheArt stateOfTheArt={stateOfTheArt} />}
      {labsWorkshop && <LabsWorkshops labsWorkshop={labsWorkshop} />}
      {modernClassroom && <ModernClassroom modernClassroom={modernClassroom} />}
      <RobustSeamless />
      {ComfyClassroom && <ComfyHostel comfyClassroom={ComfyClassroom} />}
      {sportsFitness && <SportsFitness sportFitness={sportsFitness} />}
      {researchSupport && <ResearchSupport researchSupport={researchSupport} />}
      {aestheticsCafeteria && (
        <AestheticsCafeteria aestheticsCafeteria={aestheticsCafeteria} />
      )}
    </>
  );
};

export default page;
