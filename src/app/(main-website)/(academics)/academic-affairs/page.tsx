import AcademicHero from "./comp/AcademicHero";
import WelcomeDean from "./comp/WelcomeDean";
import TeamBehind from "./comp/TeamBehind";
import NEP from "./comp/NEP";
import InnovativeTeaching from "./comp/InnovativeTeaching";
import AcademicPolicies from "./comp/AcademicPolicies";
import NurturingSuccess from "./comp/NurturingSuccess";
import AcademicSlide from "./comp/AcademicSlide";
import Assist from "./comp/Assist";
import { STRAPI_URL } from "@/app/constant";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("academic-affairs");
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
      <AcademicHero />
      <WelcomeDean />
      <TeamBehind />
      <NEP />
      <InnovativeTeaching />
      <AcademicPolicies />
      <NurturingSuccess />
      <AcademicSlide />
      <Assist />
    </>
  );
};

export default page;
