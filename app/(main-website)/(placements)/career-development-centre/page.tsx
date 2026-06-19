import { getCDCTeam } from "@/lib/api/cdcteam";
import { getCorpAdvisoryTeamData } from "@/lib/api/corpadvteam";
import { Metadata } from "next";
import { folderRouteSEO } from "@/lib/api/siteseo";
import { STRAPI_URL } from "@/app/constant";
import {
  CareerServicesSection,
  CDCAdvisoryBoardSection,
  ContactSection,
  DirectorMessageSection,
  getCareerDevelopmentCentreContent,
  HeroSection,
  TeamMemberSection,
} from "@/modules/placement/career-development-centre";

export async function generateMetadata(): Promise<Metadata> {
  const seoData = await folderRouteSEO("career-development-centre");
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
  const cdcTeamData = await getCDCTeam();
  const corpData = await getCorpAdvisoryTeamData();

  const heroSectionContent = await getCareerDevelopmentCentreContent();

  return (
    <>
      <HeroSection {...heroSectionContent.heroSection} />
      <CareerServicesSection {...heroSectionContent.trainingPlacementSection} />
      <DirectorMessageSection {...heroSectionContent.directorMessage}/>
      <TeamMemberSection cdcTeamData={cdcTeamData} />
      <CDCAdvisoryBoardSection corpData={corpData} />
      <ContactSection {...heroSectionContent.contactSection} />
    </>
  );
};

export default page;
