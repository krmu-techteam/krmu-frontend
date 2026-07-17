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
      <div className="group fixed bottom-6 lg:bottom-10 left-6 z-[999] h-[49px] w-[309px] rounded-full bg-[#111D32CC] px-2 transition-all duration-300 hover:scale-105">
        <Link
          href="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/DSW_Magazine_2026_27_8e19b9a92d.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${poppins.className} gradient-box flex h-full w-full items-center gap-3 text-[20px] font-semibold`}
        >
          <div className="flex h-[34px] w-[34px] items-center justify-center rounded-full border-2 border-[#D5A647] p-1">
            <Image
              src="https://truthful-cabbage-82fd27e8f6.media.strapiapp.com/Frame_6d39ae97d2.png"
              alt="download arrow"
              width={1024}
              height={1024}
              className="transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
            />
          </div>
          DSW Magazine 2025-26
        </Link>
      </div>

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
