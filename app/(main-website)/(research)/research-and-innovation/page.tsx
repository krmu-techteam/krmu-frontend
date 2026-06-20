import { folderRouteSEO } from "@/lib/api/siteseo";
import AcademicResources from "./comp/AcademicResources";
import CIF from "./comp/CIF";
import ContactEnquiries from "./comp/ContactEnquiries";
import IPR from "./comp/IPR";
import KEIC from "./comp/KEIC";
import MessageDeanResearch from "./comp/MessageDeanResearch";
import OnGoing from "./comp/OnGoing";
import PublicationAchievements from "./comp/PublicationAchievements";
import RDC from "./comp/RDC";
import ResearchAchievements from "./comp/ResearchAchievements";
import ResearchHighlight from "./comp/ResearchHighlight";
import ResearchInnovationHeroSection from "./comp/ResearchInnovationHeroSection";
import TeamLibrary from "./comp/TeamLibrary";
import TeamRDC from "./comp/TeamRDC";
import { Metadata } from "next";
import { STRAPI_URL } from "@/app/constant";
 


export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("research-and-innovation");
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
      <ResearchInnovationHeroSection />

      <section className=" px-4 pt-[30px] pb-[50px] bg-[url(/research/bg-gradient.webp)] bg-cover bg-center">
        <RDC />
        <MessageDeanResearch />
        <TeamRDC />
      </section>
      <CIF />
      <KEIC />
      <IPR />
      <OnGoing />
      <ResearchHighlight />
      <ResearchAchievements />
      <PublicationAchievements />
      <section className="py-[50px] px-4 bg-[url(/research/acadbg.webp)] bg-cover">
        <AcademicResources />
        <TeamLibrary />
      </section>
      <ContactEnquiries />
    </>
  );
};

export default page;
