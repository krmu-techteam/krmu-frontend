import { getStudentWelfareData } from "@/lib/api/student-welfare";
import AssistantDSWMessage from "./comp/AssistantDSWMessage";
import DSWMessage from "./comp/DSWMessage";
import { PhotoGallery } from "./comp/PhotoGallery";
import TeamMember from "./comp/TeamMember";
import VisionMission from "./comp/VisionMission";
import WelfareHero from "./comp/WelfareHero";
import WelfareImage from "./comp/WelfareImage";
import TabScroll from "./comp/TabScroll";
import ClubsSocieties from "./comp/ClubsSocieties";

import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import StudentCouncil from "./comp/StudentCouncil";
import GrievenceAndCounseling from "./comp/GrievenceAndCounseling";
import { EventGallery } from "./comp/EventGallery";
import { SocialConnect } from "./comp/SocialConnect";
import Link from "next/link";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import ScrollToTop from "@/app/(new-pages)/admission/international/components/ScrollToTop";
import DownloadScrollbtn from "./comp/DownloadScrollbtn";

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
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["italic", "normal"],
});

const page = async () => {
  const studentWelfare = await getStudentWelfareData();

  // const tabScroll = studentWelfare?.tab_scroll;
  const photoGallery = studentWelfare?.photo_gallery;

  return (
    <>
      {/* <ScrollToTop /> */}
      <DownloadScrollbtn />
      <WelfareHero />

      <DSWMessage />
      {/* <AssistantDSWMessage /> */}
      <VisionMission />
      <TeamMember />
      <ClubsSocieties />
      <StudentCouncil />
      <GrievenceAndCounseling />

      {/* <WelfareImage /> */}
      {/* <TabScroll /> */}
      {photoGallery && <EventGallery />}
      <SocialConnect />
      {/* {photoGallery && <PhotoGallery photoGallery={photoGallery} />} */}
    </>
  );
};

export default page;
