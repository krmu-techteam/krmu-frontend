import { getStudentWelfareData } from "@/lib/api/student-welfare";
import AssistantDSWMessage from "./comp/AssistantDSWMessage";
import DSWMessage from "./comp/DSWMessage";
import { PhotoGallery } from "./comp/PhotoGallery";
import TeamMember from "./comp/TeamMember";
import VisionMission from "./comp/VisionMission";
import WelfareHero from "./comp/WelfareHero";
import WelfareImage from "./comp/WelfareImage";
import TabScroll from "./comp/TabScroll";



import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import StudentCouncil from "./comp/StudentCouncil";




export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("student-welfare");
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
  const studentWelfare = await getStudentWelfareData();

  // const tabScroll = studentWelfare?.tab_scroll;
  const photoGallery = studentWelfare?.photo_gallery;

  return (
    <>
      <WelfareHero />
      <DSWMessage />
      <AssistantDSWMessage />
      <VisionMission />
      <TeamMember />
      <StudentCouncil />
      {/* <WelfareImage /> */}
      <TabScroll />
      {photoGallery && <PhotoGallery photoGallery={photoGallery} />}
    </>
  );
};

export default page;
